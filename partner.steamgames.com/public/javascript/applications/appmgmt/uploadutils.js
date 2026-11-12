/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~ca0c999570.js";
function e() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
function t(e) {
  return new Promise((t) => setTimeout(t, e));
}
function n(e) {
  let t = e.toLowerCase();
  if (t.endsWith(`.jpg`) || t.endsWith(`.jpeg`)) return `image/jpeg`;
  if (t.endsWith(`.png`)) return `image/png`;
  if (t.endsWith(`.gif`)) return `image/gif`;
  if (t.endsWith(`.mp4`)) return `video/mp4`;
  if (t.endsWith(`.webm`)) return `video/webm`;
  if (t.endsWith(`.srt`)) return `text/srt`;
  if (t.endsWith(`.vtt`)) return `text/vtt`;
  if (t.endsWith(`.webp`)) return `image/webp`;
}
function r(e) {
  switch (e) {
    case `image/jpeg`:
      return `.jpg`;
    case `image/png`:
      return `.png`;
    case `image/gif`:
      return `.gif`;
    case `video/mp4`:
      return `.mp4`;
    case `video/webm`:
      return `.webm`;
    case `text/vtt`:
      return `.vtt`;
    case `text/srt`:
      return `.srt`;
    case `image/webp`:
      return `.webp`;
  }
  return (
    console.error(`ConvertMimeTypeToExtension:Unexepected mime type `, e),
    `.jpg`
  );
}
function i(e) {
  switch (e) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function a(t) {
  let n = e(),
    r = new Image();
  return (
    (r.onload = () => n.resolve(r)),
    (r.onerror = (e) => {
      (console.error(`LoadImage failed to load the image, details`, e),
        n.resolve(void 0));
    }),
    (r.src = t),
    n.promise
  );
}
function o(t) {
  let n = e(),
    r = document.createElement(`video`);
  return (
    (r.preload = `metadata`),
    r.addEventListener(`loadedmetadata`, () => n.resolve(r)),
    (r.onerror = (e) => {
      (console.error(`LoadVideo failed to load the video, details`, e),
        n.resolve(void 0));
    }),
    (r.src = t),
    n.promise
  );
}
function s(e) {
  return e.startsWith(`image/`);
}
function c(e) {
  return e.startsWith(`video/`);
}
function l(e, t) {
  return t ? o(e) : a(e);
}
async function u(t, n) {
  if (n) return o(URL.createObjectURL(t));
  {
    let n = e(),
      r = new FileReader();
    ((r.onload = () => n.resolve(r.result ?? void 0)),
      (r.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          r.error,
        ),
          n.resolve(void 0));
      }),
      r.readAsDataURL(t));
    let i = await n.promise;
    return i ? a(i.toString()) : void 0;
  }
}
function d(e) {
  return e
    ? e instanceof HTMLVideoElement
      ? { width: e.videoWidth, height: e.videoHeight }
      : { width: e.width, height: e.height }
    : { width: 0, height: 0 };
}
function f(e, t) {
  if (!t) return e;
  let n = new Set([
    `content-length`,
    `host`,
    `origin`,
    `referer`,
    `user-agent`,
    `cookie`,
    `set-cookie`,
    `connection`,
    `upgrade`,
  ]);
  for (let r of t) n.has(r.name.toLowerCase()) || (e[r.name] = r.value);
  return e;
}
export {
  r as a,
  l as c,
  t as d,
  n as i,
  d as l,
  s as n,
  i as o,
  c as r,
  u as s,
  f as t,
  e as u,
};
