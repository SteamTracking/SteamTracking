var _ = Intl.DateTimeFormat().resolvedOptions().timeZone;
`document` in globalThis &&
  document.cookie
    .split(`;`)
    .find((_) => _.trim().startsWith(`timezoneName`))
    ?.split(`=`)[1];
function _() {
  `document` in globalThis &&
    _ &&
    (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 31536e6).toUTCString()};path=/;Secure;SameSite=None;`);
}
_(), _(), _();
