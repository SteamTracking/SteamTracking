import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _ } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _ } from "./chunk~1fa4b8f2ff.js?contenthash=BmfmDRCl";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _ } from "./chunk~6a0f174a11.js?contenthash=RueWgzul";
import { _ } from "./chunk~198b531c82.js?contenthash=BXV7JsxF";
import { _ } from "./chunk~5ad53110ba.js?contenthash=haYcbzyQ";
var _ = _(_()),
  _ = `CfSH771hQA4-`,
  _ = _();
function _(_) {
  let { clipToUpload: _, finishUpload: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(),
    { fnUploadClip: _ } = _(),
    [_, _] = _.useState();
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            clipID: _.clip_id,
          }),
          !_ &&
            (0, _.jsx)(_, {
              onClick: async () => {
                _(!0);
                let { eResult: _, strURL: _ } = await _(_.clip_id, ``, ``, 3);
                (_(_), _(!1));
              },
              children: `Upload`,
            }),
          _ &&
            (0, _.jsx)(_, {
              clipToUpload: _,
            }),
        ],
      })
    : null;
}
function _(_) {
  let { clipToUpload: _ } = _,
    [_, _] = _.useState(),
    [_, _] = _.useState();
  _.useEffect(
    () =>
      _.RegisterForNotifyUploadProgress(
        (_) => (
          _.Body().eresult() === void 0
            ? _(_.Body().progress() * 100)
            : _(void 0),
          1
        ),
      ).unregister,
    [],
  );
  let _ = _(`#Chat_Uploading`, _.clip_id),
    _ = {
      width: _ + `%`,
    };
  return (0, _.jsxs)(`div`, {
    className: `chatFileUploadProgressContainer`,
    children: [
      (0, _.jsx)(`div`, {
        className: `chatFileUploadProgressName`,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: `chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer`,
        children: (0, _.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: _,
        }),
      }),
    ],
  });
}
export { _ as default };
