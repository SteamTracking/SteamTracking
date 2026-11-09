import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _, _, _, _ } from "./vodquery.js";
import { _ } from "./icn-copylink.js";
import { _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { eventLink: _, labelOverride: _ } = _,
    _ = _.useRef(null),
    [_, _] = _.useState(``),
    _ = () => {
      let _ = _.current?.ownerDocument.defaultView;
      _.current &&
        _ &&
        _.navigator.clipboard
          .writeText(_.current.value)
          .then(() => _(_(`#EventDisplay_Share_CopiedToClipboard`)))
          .catch((_) => {
            (_(_(`#EventDisplay_Share_FailedToCopyToClipboard`)),
              console.error(`Failed to copy link to clipboard:`, _));
          });
    };
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _(_ ?? `#EventDisplay_Share_Link`),
          }),
          (0, _.jsx)(`input`, {
            className: _,
            ref: _,
            value: _,
            readOnly: !0,
            onClick: _,
          }),
          (0, _.jsx)(_, {
            className: _(_, _, _),
            onActivate: _,
            children: (0, _.jsx)(_, {
              toolTipContent: _(`#ToolTip_CopyLinkToClipboard`),
              children: (0, _.jsx)(`img`, {
                className: _,
                src: _,
                alt: _(`#ToolTip_CopyLinkToClipboard`),
              }),
            }),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
