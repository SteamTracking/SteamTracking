/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = class extends Error {
  eResult;
  constructor(e, t) {
    (super(t ? `EResult ${e}: ${t}` : `EResult ${e}`), (this.eResult = e));
  }
};
export { e as t };
