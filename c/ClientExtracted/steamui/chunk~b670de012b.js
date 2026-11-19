class CNoiseGateProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "attack",
        defaultValue: 2.0,
      },
      {
        name: "release",
        defaultValue: 0.01,
      },
      {
        name: "threshold",
        defaultValue: -80,
      },
      {
        name: "sampleRate",
        defaultValue: 48000,
      },
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
      this.parameters.bufferSize = inputs[0][0].length;
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
      let timeConstant = 0.0025;
      this.alpha_ = this.getAlphaFromTimeConstant_(
        timeConstant,
        this.parameters.sampleRate,
      );
      this.previousLevel_ = 0;
      this.previousWeight_ = 1.0;
      this.channelIndex = 0;
      this.channel_ = new Float32Array(this.parameters.bufferSize);
      this.envelope_ = new Float32Array(this.parameters.bufferSize);
      this.weights_ = new Float32Array(this.parameters.bufferSize);
    }
    let channel0 = inputs[0][0];
    let numChannels = inputs[0].length;
    for (let _ = 0; _ < channel0.length; ++_) {
      let val = channel0[_];
      for (let iChan = 1; iChan < numChannels; ++iChan) {
        val = Math.max(val, inputs[0][iChan][_]);
      }
      this.channel_[this.channelIndex] = val;
      this.channelIndex++;
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
        for (let _ = 0; _ < inputChannel.length; ++_) {
          let weight = this.weights_[_];
          if (weight < 0.2 && !this.m_bWasLastCutting) {
            this.m_bWasLastCutting = true;
            this.m_bWasLastOpen = false;
            this.port.postMessage("Mic input below threshold, cutting output.");
          } else if (weight >= 0.9 && !this.m_bWasLastOpen) {
            this.port.postMessage("Mic input now above threshold.");
            this.m_bWasLastOpen = true;
            this.m_bWasLastCutting = false;
          }
          outputChannel[_] = inputChannel[_] * weight;
        }
      }
    }
    return true;
  }
  detectLevel_() {
    this.envelope_[0] =
      this.alpha_ * this.previousLevel_ +
      (1 - this.alpha_) * Math.pow(this.channel_[0], 2);
    for (let _ = 1; _ < this.parameters.bufferSize; _++) {
      this.envelope_[_] =
        this.alpha_ * this.envelope_[_ - 1] +
        (1 - this.alpha_) * Math.pow(this.channel_[_], 2);
    }
    this.previousLevel_ = this.envelope_[this.parameters.bufferSize - 1];
  }
  computeWeights_() {
    let attackSteps = 1;
    let releaseSteps = 1;
    let attackLossPerStep = 1;
    let releaseGainPerStep = 1;
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
    for (let _ = 0; _ < this.parameters.bufferSize; _++) {
      const scaledEnvelopeValue = CNoiseGateProcessor.toDecibel(
        2 * this.envelope_[_],
      );
      if (scaledEnvelopeValue < this.parameters.threshold) {
        const weight = this.previousWeight_ - attackLossPerStep;
        this.weights_[_] = Math.max(weight, 0);
      } else {
        const weight = this.previousWeight_ + releaseGainPerStep;
        this.weights_[_] = Math.min(weight, 1);
      }
      this.previousWeight_ = this.weights_[_];
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
