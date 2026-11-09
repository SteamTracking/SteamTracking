var _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
  _ =
    `document` in globalThis
      ? document.cookie
          .split(`;`)
          .find((_) => _.trim().startsWith(`timezoneName`))
          ?.split(`=`)[1]
      : void 0,
  _ = _ && decodeURIComponent(_);
function _() {
  return _() ? _ : (_ ?? _);
}
function _() {
  `document` in globalThis &&
    _ &&
    (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 31536e6).toUTCString()};path=/;Secure;SameSite=None;`);
}
_();
