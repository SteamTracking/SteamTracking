import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _ } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _ } from "./chunk~1fa4b8f2ff.js?contenthash=BmfmDRCl";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _, _ } from "./chunk~eee3bbd4cd.js?contenthash=BUtxBxtl";
var _ = _(_()),
  _ = _(),
  _ = _.forwardRef(function (
    {
      steamID: _,
      localSteamID: _,
      watchLocation: _,
      bWebRTC: _,
      style: _,
      onRequestClose: _,
      actions: _,
      onTheaterMode: _,
      onLocalStreamChange: _,
      bVerticalBroadcastChat: _,
    },
    _,
  ) {
    let _ = _ || _;
    return (0, _.jsxs)(`div`, {
      ref: _,
      style: {
        display: `flex`,
        flexDirection: `column`,
        ..._,
      },
      children: [
        (0, _.jsxs)(`div`, {
          className: `BroadcastSection`,
          children: [
            (0, _.jsx)(
              _,
              {
                steamIDBroadcast: _,
                watchLocation: _,
                bWebRTC: _,
                onRequestClose: _,
                actions: _,
                onTheaterMode: _,
                onOpenLinkInNewWindow: _,
              },
              _,
            ),
            (0, _.jsx)(`div`, {
              className: `videoContainerSizer`,
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: `BroadcastDetailsSection`,
          children: (0, _.jsx)(_, {
            steamID: _,
            onLocalStreamChange: _,
            bVerticalBroadcastChat: _,
          }),
        }),
      ],
    });
  });
export { _ as default };
