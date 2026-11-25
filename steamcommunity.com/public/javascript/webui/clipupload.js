/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./chunk~f025431ab0.js";
import { Cr as t, o as n } from "./chunk~d3515eca4e.js";
import { ln as r, m as i, o as a } from "./chunk~e464778a03.js";
import { n as o } from "./chunk~0ef0cd2c00.js";
import { t as s } from "./chunk~198b531c82.js";
var c = e(t(), 1),
  l = o();
function u(e) {
  let { clipID: t, clipSummary: n, className: r } = e;
  return n
    ? (0, l.jsx)(f, { clipSummary: n, className: r })
    : t
      ? (0, l.jsx)(d, { clipID: t, className: r })
      : null;
}
function d(e) {
  let { clipID: t, className: n } = e,
    r = i(t);
  return (0, l.jsx)(f, { clipSummary: r, className: n });
}
function f(e) {
  let { clipSummary: t, className: n } = e;
  return t?.thumbnail_url
    ? (0, l.jsx)(`img`, { className: n, src: t.thumbnail_url })
    : (0, l.jsx)(`div`, { className: n });
}
var p = `_3JrtqiCkRTM-`;
function m(e) {
  let { clipToUpload: t, finishUpload: n } = e,
    [i, o] = c.useState(!1),
    [s, d] = c.useState(),
    { fnUploadClip: f } = a(),
    [m, g] = c.useState();
  return t
    ? (0, l.jsxs)(`div`, {
        className: p,
        children: [
          (0, l.jsx)(u, { clipID: t.clip_id }),
          !i &&
            (0, l.jsx)(r, {
              onClick: async () => {
                o(!0);
                let { eResult: e, strURL: r } = await f(t.clip_id, ``, ``, 3);
                (n(r), o(!1));
              },
              children: `Upload`,
            }),
          i && (0, l.jsx)(h, { clipToUpload: t }),
        ],
      })
    : null;
}
function h(e) {
  let { clipToUpload: t } = e,
    [r, i] = c.useState(),
    [a, o] = c.useState();
  c.useEffect(
    () =>
      s.RegisterForNotifyUploadProgress(
        (e) => (
          e.Body().eresult() === void 0
            ? i(e.Body().progress() * 100)
            : i(void 0),
          1
        ),
      ).unregister,
    [],
  );
  let u = n(`#Chat_Uploading`, t.clip_id),
    d = { width: r + `%` };
  return (0, l.jsxs)(`div`, {
    className: `chatFileUploadProgressContainer`,
    children: [
      (0, l.jsx)(`div`, {
        className: `chatFileUploadProgressName`,
        children: u,
      }),
      (0, l.jsx)(`div`, {
        className: `chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer`,
        children: (0, l.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: d,
        }),
      }),
    ],
  });
}
export { m as default };
