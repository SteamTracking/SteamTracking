import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { eo as t } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { hr as n } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { t as r } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { n as i, t as a } from "./chunk~eee3bbd4cd.js?contenthash=D9QYl4Zd";
var o = e(t()),
  s = r(),
  c = o.forwardRef(function (
    {
      steamID: e,
      localSteamID: t,
      watchLocation: r,
      bWebRTC: o,
      style: c,
      onRequestClose: l,
      actions: u,
      onTheaterMode: d,
      onLocalStreamChange: f,
      bVerticalBroadcastChat: p,
    },
    m,
  ) {
    let h = t || e;
    return (0, s.jsxs)(`div`, {
      ref: m,
      style: { display: `flex`, flexDirection: `column`, ...c },
      children: [
        (0, s.jsxs)(`div`, {
          className: `BroadcastSection`,
          children: [
            (0, s.jsx)(
              i,
              {
                steamIDBroadcast: h,
                watchLocation: r,
                bWebRTC: o,
                onRequestClose: l,
                actions: u,
                onTheaterMode: d,
                onOpenLinkInNewWindow: n,
              },
              h,
            ),
            (0, s.jsx)(`div`, { className: `videoContainerSizer` }),
          ],
        }),
        (0, s.jsx)(`div`, {
          className: `BroadcastDetailsSection`,
          children: (0, s.jsx)(a, {
            steamID: h,
            onLocalStreamChange: f,
            bVerticalBroadcastChat: p,
          }),
        }),
      ],
    });
  });
export { c as default };
