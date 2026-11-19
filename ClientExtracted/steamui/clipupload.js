import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _t as t, eo as n } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { En as r } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { t as i } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { s as a } from "./chunk~6a0f174a11.js?contenthash=D6QIrzt4";
import { t as o } from "./chunk~198b531c82.js?contenthash=WJe2FNsU";
import { Cn as s } from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
var c = e(n()),
  l = `CfSH771hQA4-`,
  u = i();
function d(e) {
  let { clipToUpload: t, finishUpload: n } = e,
    [i, o] = c.useState(!1),
    [d, p] = c.useState(),
    { fnUploadClip: m } = a(),
    [h, g] = c.useState();
  return t
    ? (0, u.jsxs)(`div`, {
        className: l,
        children: [
          (0, u.jsx)(s, { clipID: t.clip_id }),
          !i &&
            (0, u.jsx)(r, {
              onClick: async () => {
                o(!0);
                let { eResult: e, strURL: r } = await m(t.clip_id, ``, ``, 3);
                (n(r), o(!1));
              },
              children: `Upload`,
            }),
          i && (0, u.jsx)(f, { clipToUpload: t }),
        ],
      })
    : null;
}
function f(e) {
  let { clipToUpload: n } = e,
    [r, i] = c.useState(),
    [a, s] = c.useState();
  c.useEffect(
    () =>
      o.RegisterForNotifyUploadProgress(
        (e) => (
          e.Body().eresult() === void 0
            ? i(e.Body().progress() * 100)
            : i(void 0),
          1
        ),
      ).unregister,
    [],
  );
  let l = t(`#Chat_Uploading`, n.clip_id),
    d = { width: r + `%` };
  return (0, u.jsxs)(`div`, {
    className: `chatFileUploadProgressContainer`,
    children: [
      (0, u.jsx)(`div`, {
        className: `chatFileUploadProgressName`,
        children: l,
      }),
      (0, u.jsx)(`div`, {
        className: `chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer`,
        children: (0, u.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: d,
        }),
      }),
    ],
  });
}
export { d as default };
