var _ = new (class {
  m_transport = null;
  m_registry = null;
  SetDefaultTransport(_) {
    this.m_transport != null &&
      console.error(
        `Multiple attempts to set a default WebUI transport: overriding previous`,
      ),
      (this.m_transport = _);
  }
  GetDefaultTransport() {
    return this.m_transport;
  }
  SetDefaultHandlerRegistry(_) {
    this.m_registry != null &&
      console.error(
        `Multiple attempts to set a default WebUI message handler registry: overriding previous`,
      ),
      (this.m_registry = _);
  }
  GetDefaultHandlerRegistry() {
    return this.m_registry;
  }
})();
function _() {
  return _;
}
export { _ };
