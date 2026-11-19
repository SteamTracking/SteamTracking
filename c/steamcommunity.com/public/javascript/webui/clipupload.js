import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~d3515eca4e.js";
import { _, _, _ } from "./chunk~e464778a03.js";
import { _ } from "./chunk~0ef0cd2c00.js";
import { _ } from "./chunk~198b531c82.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { clipID: _, clipSummary: _, className: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        clipSummary: _,
        className: _,
      })
    : _
      ? (0, _.jsx)(_, {
          clipID: _,
          className: _,
        })
      : null;
}
function _(_) {
  let { clipID: _, className: _ } = _,
    _ = _(_);
  return (0, _.jsx)(_, {
    clipSummary: _,
    className: _,
  });
}
function _(_) {
  let { clipSummary: _, className: _ } = _;
  return _?.thumbnail_url
    ? (0, _.jsx)(`img`, {
        className: _,
        src: _.thumbnail_url,
      })
    : (0, _.jsx)(`div`, {
        className: _,
      });
}
var _ = `_3JrtqiCkRTM-`;
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
