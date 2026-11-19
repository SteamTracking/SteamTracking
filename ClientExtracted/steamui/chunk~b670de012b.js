/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Significantly modified by Valve to work as an audio worklet not a ScriptProcessorNode!
 */

class CNoiseGateProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: "attack", defaultValue: 2.0 },
      { name: "release", defaultValue: 0.01 },
      { name: "threshold", defaultValue: -80 },
      { name: "sampleRate", defaultValue: 48000 },
    ];
  }

  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    let bReInit = false;
    if (this.parameters == undefined) {
      this.parameters = new Object();
      this.parameters.attack = parameters.attack[0];
      this.parameters.release = parameters.release[0];
      this.parameters.threshold = parameters.threshold[0];
      this.parameters.bufferSize = inputs[0][0].length; // Should always be 128, but make sure we adjust to make sure
      this.parameters.sampleRate = parameters.sampleRate[0];
      bReInit = true;

      this.port.postMessage(
        "NoiseGate setup: " + JSON.stringify(this.parameters),
      );

      this.port.postMessage(
        "Inputs: " +
          inputs.length +
          " channels: " +
          inputs[0].length +
          " samples: " +
          inputs[0][0].length,
      );
      this.port.postMessage(
        "Outputs: " +
          outputs.length +
          " channels: " +
          outputs[0].length +
          " samples: " +
          outputs[0][0].length,
      );
    }

    if (this.parameters.attack != parameters.attack[0]) {
      this.parameters.attack = parameters.attack[0];
    }

    if (this.parameters.release != parameters.release[0]) {
      this.parameters.release = parameters.release[0];
    }

    if (this.parameters.threshold != parameters.threshold[0]) {
      this.parameters.threshold = parameters.threshold[0];
    }

    if (this.parameters.bufferSize != inputs[0][0].length) {
      this.parameters.bufferSize = parameters.bufferSize[0];
      bReInit = true;
    }

    if (this.parameters.sampleRate != parameters.sampleRate[0]) {
      this.parameters.sampleRate = parameters.sampleRate[0];
      bReInit = true;
    }

    if (bReInit) {
      this.port.postMessage(
        "Noise gate had to re-initialize due to parameters changing",
      );

      // The time constant of the filter has been set experimentally to balance
      // roughly delay for high frequency suppression.
      let timeConstant = 0.0025;

      // Alpha controls a tradeoff between the smoothness of the
      // envelope and its delay, with a higher value giving more smoothness at
      // the expense of delay and vice versa.
      this.alpha_ = this.getAlphaFromTimeConstant_(
        timeConstant,
        this.parameters.sampleRate,
      );

      // The previous envelope level, a float representing signal amplitude.
      this.previousLevel_ = 0;

      // The last weight (between 0 and 1) assigned, where 1 means the gate
      // is open and 0 means it is closed and the sample in the output buffer is
      // muted. When attacking, the weight will linearly decrease from 1 to 0, and
      // when releasing the weight linearly increase from 0 to 1.
      this.previousWeight_ = 1.0;
      this.channelIndex = 0;
      this.channel_ = new Float32Array(this.parameters.bufferSize);
      this.envelope_ = new Float32Array(this.parameters.bufferSize);
      this.weights_ = new Float32Array(this.parameters.bufferSize);
    }

    let channel0 = inputs[0][0];
    let numChannels = inputs[0].length;

    //console.log( "Level: " + channel0[0] );

    for (let i = 0; i < channel0.length; ++i) {
      let val = channel0[i];

      // More than one channel, take max channel value for each input
      for (let iChan = 1; iChan < numChannels; ++iChan) {
        val = Math.max(val, inputs[0][iChan][i]);
      }

      this.channel_[this.channelIndex] = val;

      this.channelIndex++;

      // wrap around if needed to where we are copying
      if (this.channelIndex >= this.parameters.bufferSize)
        this.channelIndex = 0;
    }

    this.detectLevel_();
    this.computeWeights_();

    let input = inputs[0];
    for (let iOutput = 0; iOutput < outputs.length; ++iOutput) {
      let output = outputs[iOutput];
      for (let channel = 0; channel < input.length; ++channel) {
        let inputChannel = input[channel];
        let outputChannel = output[channel];
        for (let i = 0; i < inputChannel.length; ++i) {
          let weight = this.weights_[i];

          if (weight < 0.2 && !this.m_bWasLastCutting) {
            this.m_bWasLastCutting = true;
            this.m_bWasLastOpen = false;
            this.port.postMessage("Mic input below threshold, cutting output.");
          } else if (weight >= 0.9 && !this.m_bWasLastOpen) {
            this.port.postMessage("Mic input now above threshold.");
            this.m_bWasLastOpen = true;
            this.m_bWasLastCutting = false;
          }

          outputChannel[i] = inputChannel[i] * weight;
        }
      }
    }

    // To keep processor alive!
    return true;
  }

  detectLevel_() {
    // The signal level is determined by filtering the square of the signal
    // with exponential smoothing. See
    // http://www.aes.org/e-lib/browse.cfm?elib=16354 for details.
    this.envelope_[0] =
      this.alpha_ * this.previousLevel_ +
      (1 - this.alpha_) * Math.pow(this.channel_[0], 2);

    for (let j = 1; j < this.parameters.bufferSize; j++) {
      this.envelope_[j] =
        this.alpha_ * this.envelope_[j - 1] +
        (1 - this.alpha_) * Math.pow(this.channel_[j], 2);
    }

    this.previousLevel_ = this.envelope_[this.parameters.bufferSize - 1];

    //console.log ( "startIndex " + startIndex + " PreviousLevel: " + this.previousLevel_ );
  }

  computeWeights_() {
    // When attack or release are 0, the weight changes between 0 and 1
    // in one step.
    let attackSteps = 1;
    let releaseSteps = 1;
    let attackLossPerStep = 1;
    let releaseGainPerStep = 1;

    // TODO: Replace this weights-based approach for enabling attack/release
    // parameters with the method described on page 22 in
    // "Signal Processing Techniques for Digital Audio Effects".

    // When attack or release are > 0, the associated weight changes between 0
    // and 1 in the number of steps corresponding to the millisecond attack
    // or release time parameters.
    if (this.parameters.attack > 0) {
      attackSteps = Math.ceil(
        this.parameters.sampleRate * this.parameters.attack,
      );
      attackLossPerStep = 1 / attackSteps;
    }
    if (this.parameters.release > 0) {
      releaseSteps = Math.ceil(
        this.parameters.sampleRate * this.parameters.release,
      );
      releaseGainPerStep = 1 / releaseSteps;
    }

    /*
		let firstVal = CNoiseGateProcessor.toDecibel(2 * this.envelope_[0]);
		if ( firstVal < this.parameters.threshold )
		{
			console.log( firstVal + " is less than " + this.parameters.threshold );
		}
		else
		{
			console.log( firstVal + " is not less than " + this.parameters.threshold );
		}
		*/

    // Compute an array of weights between 0 and 1 which will be multiplied with
    // the channel depending on if the noise gate is open, attacking, releasing,
    // or closed.
    for (let i = 0; i < this.parameters.bufferSize; i++) {
      // For sine waves, the envelope eventually reaches an average power of
      // a^2 / 2. Sine waves are therefore scaled back to the original
      // amplitude, but other waveforms or constant sources can only be
      // approximated.
      const scaledEnvelopeValue = CNoiseGateProcessor.toDecibel(
        2 * this.envelope_[i],
      );
      if (scaledEnvelopeValue < this.parameters.threshold) {
        const weight = this.previousWeight_ - attackLossPerStep;
        this.weights_[i] = Math.max(weight, 0);
      } else {
        const weight = this.previousWeight_ + releaseGainPerStep;
        this.weights_[i] = Math.min(weight, 1);
      }
      this.previousWeight_ = this.weights_[i];
    }
  }

  getAlphaFromTimeConstant_(timeConstant, sampleRate) {
    return Math.exp(-1 / (sampleRate * timeConstant));
  }

  static toDecibel(powerLevel) {
    return 10 * Math.log10(powerLevel);
  }
}

registerProcessor("noisegate-processor", CNoiseGateProcessor);
