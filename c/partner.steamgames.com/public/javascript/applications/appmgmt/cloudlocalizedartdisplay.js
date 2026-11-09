import { _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _ } from "./dialogs.js";
import { _ } from "./axios.js";
import { _ } from "./throbber.js";
import { _ } from "./editorlocalizationstore.js";
import { _, _, _ } from "./genericimageupload.js";
import { _, _, _, _, _, _, _, _ } from "./adminshared.module.js";
var _ = _(_()),
  _ = _(_()),
  _ = `lGLGFqOzoyQ-`,
  _ = `sxnrj8ps74s-`,
  _ = `PXYBAa2tYnw-`,
  _ = `_3-9LVAuBDdI-`,
  _ = `-Mdp9nvfCIA-`,
  _ = _();
function _(_) {
  let { bDone: _, name: _, tooltip: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        className: _(_, _ ? _ : _),
        children: _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        toolTipContent: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { rgAssetURL: _, rgLang: _, bIsImage: _ } = _,
    [_, _] = (0, _.useState)([]);
  if (
    ((0, _.useEffect)(() => {
      let _ = !1,
        _ = _ ? _ : _;
      return (
        Promise.all(_.map((_) => _(_))).then((_) => {
          _ || _(_);
        }),
        () => {
          _ = !0;
        }
      );
    }, [_, _]),
    !_)
  )
    return (0, _.jsx)(_, {
      size: `small`,
      string: `Checking Assets...`,
    });
  let _ = _.map((_, _) => (_ ? -1 : _)).filter((_) => _ !== -1);
  return _.length === 0
    ? (0, _.jsx)(_, {
        bDone: !0,
        name: `Uploaded assets verified`,
        tooltip: `In the background we verified the assets by downloading from the CDN to verify they are present`,
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            bDone: !1,
            name: `${_.length} Asset(s) uploaded failed to fetch`,
          }),
          _.map((_) => ({
            url: _[_],
            lang: _[_],
          })).map((_) =>
            (0, _.jsx)(
              _,
              {
                bDone: !1,
                name: `${_(_.lang)} - Not found`,
                tooltip: `${_.url} not downloadable from the CDN`,
              },
              _.url,
            ),
          ),
        ],
      });
}
function _(_) {
  return new Promise((_) => {
    let _ = new Image();
    (_.onload = () => _(!0)), (_.onerror = () => _(!1)), (_.src = _);
  });
}
function _(_) {
  return new Promise((_) => {
    let _ = document.createElement(`video`);
    (_.preload = `metadata`),
      (_.onloadedmetadata = () => _(!0)),
      (_.onerror = () => _(!1)),
      (_.src = _);
  });
}
function _(_) {
  let {
      rgAssetLangs: _,
      initialLang: _,
      fnGetAssetUrl: _,
      fnDeletAssetLang: _,
      imageClassname: _,
      fnDeleteAllAssets: _,
      showDeleteAll: _ = !0,
      bVerifyAssets: _,
      bVideoAsset: _,
    } = _,
    [_, _] = _.useState(_ ?? _.Get().GetCurEditLanguage() ?? _[0]),
    [_, _] = _.useState(_(_)),
    _ = _.useMemo(() => [..._].sort(), [_]);
  _.useEffect(() => {
    let _ = _(_);
    _ ? _(_) : _.length > 0 ? _(_[0]) : _(null);
  }, [_, _, _]);
  let _ = () => {
      _ ? _() : _.forEach((_) => _(_));
    },
    _ = (0, _.useMemo)(() => _.map((_) => _(_)), [_, _]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          curAssetURL: _,
          imageClassname: _,
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#ImageUpload_LocalizedAssets`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    language: _,
                    selectedLanguage: _,
                    setSelectedLanguage: _,
                    deleteLanguage: _,
                  },
                  _,
                ),
              ),
            }),
            _ &&
              !!_.length &&
              (0, _.jsx)(`a`, {
                href: `#`,
                className: `oyKuVDO21ZA-`,
                onClick: (_) => {
                  _(), _.preventDefault();
                },
                children: _(`#Button_DeleteAll`),
              }),
            !!_ &&
              (0, _.jsx)(_, {
                rgAssetURL: _,
                rgLang: _,
                bIsImage: !_,
              }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      language: _,
      selectedLanguage: _,
      setSelectedLanguage: _,
      deleteLanguage: _,
    } = _,
    _ = _(_);
  return (0, _.jsxs)(
    `div`,
    {
      className: _,
      children: [
        (0, _.jsx)(`a`, {
          href: `#`,
          onClick: (_) => {
            _.preventDefault(), _(_);
          },
          children:
            _ === _
              ? (0, _.jsx)(`span`, {
                  className: _,
                  children: `` + _,
                })
              : (0, _.jsx)(`span`, {
                  children: `` + _,
                }),
        }),
        (0, _.jsx)(`a`, {
          href: `#`,
          onClick: (_) => {
            _.preventDefault(), _(_);
          },
          children: (0, _.jsx)(_, {}),
        }),
      ],
    },
    `image` + _,
  );
}
function _(_) {
  let { curAssetURL: _, imageClassname: _ } = _;
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _,
      children: _(`#ImageDisplay_NoAssetUploaded`),
    });
  let _ = _(_);
  return _.includes(_)
    ? (0, _.jsx)(_, {
        ..._,
      })
    : _.includes(_)
      ? (0, _.jsx)(_, {
          className: _ || `fR9yHTgcATY-`,
          strTextURL: _,
        })
      : (0, _.jsx)(`img`, {
          className: _ || `fR9yHTgcATY-`,
          src: _,
        });
}
function _(_) {
  let { curAssetURL: _, imageClassname: _ } = _,
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      _.current && (_.current.load(), _.current.play());
    }, [_]),
    (0, _.jsx)(`video`, {
      ref: _,
      className: _ || `fR9yHTgcATY-`,
      autoPlay: !0,
      loop: !0,
      controls: !0,
      muted: !0,
      children: (0, _.jsx)(`source`, {
        src: _,
      }),
    })
  );
}
function _(_) {
  let { strTextURL: _, className: _ } = _,
    [_, _] = _.useState(``);
  return (
    _.useEffect(() => {
      _.default
        .get(_)
        .then((_) => {
          _(_.data);
        })
        .catch((_) => {
          console.error(_);
        });
    }, [_]),
    (0, _.jsx)(`textarea`, {
      className: _,
      value: _,
      readOnly: !0,
      rows: 20,
    })
  );
}
export { _, _ };
