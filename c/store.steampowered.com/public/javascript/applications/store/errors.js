var _ = class extends Error {
  eResult;
  constructor(_, _) {
    super(_ ? `EResult ${_}: ${_}` : `EResult ${_}`), (this.eResult = _);
  }
};
export { _ };
