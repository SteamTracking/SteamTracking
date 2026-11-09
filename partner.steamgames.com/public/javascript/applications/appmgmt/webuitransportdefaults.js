/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = new (class {
  m_transport = null;
  m_registry = null;
  SetDefaultTransport(e) {
    this.m_transport != null &&
      console.error(
        `Multiple attempts to set a default WebUI transport: overriding previous`,
      ),
      (this.m_transport = e);
  }
  GetDefaultTransport() {
    return this.m_transport;
  }
  SetDefaultHandlerRegistry(e) {
    this.m_registry != null &&
      console.error(
        `Multiple attempts to set a default WebUI message handler registry: overriding previous`,
      ),
      (this.m_registry = e);
  }
  GetDefaultHandlerRegistry() {
    return this.m_registry;
  }
})();
function t() {
  return e;
}
export { t };
