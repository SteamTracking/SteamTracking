import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _ } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _, _, _ } from "./chunk~1fa4b8f2ff.js?contenthash=BmfmDRCl";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _ } from "./chunk~8681f5c764.js?contenthash=Cs0z1bZr";
import { _, _, _, _, _ } from "./chunk~5ad53110ba.js?contenthash=haYcbzyQ";
import _ from "./chunk~61cfadc62b.js?contenthash=CGhwIyOt";
var _ = _(_()),
  _ = `w1pZZfyDmDk-`,
  _ = _();
function _(_) {
  let { popup: _ } = _,
    [_, _] = _.useState();
  return (
    _.useEffect(() => {
      if (_)
        return _.RegisterPopup(_, () => _.SteamClient.Window.BringToFront());
    }, [_, _]),
    _.noteid === void 0
      ? (0, _.jsx)(_, {
          popup: _,
          refPopup: _,
        })
      : (0, _.jsx)(_, {
          popup: _,
          refPopup: _,
        })
  );
}
function _(_) {
  let { popup: _, refPopup: _ } = _,
    _ = _(`#GameNotes_NoteForGame`, _.display_name);
  return (0, _.jsx)(_, {
    body_class: _,
    children: (0, _.jsxs)(_, {
      strName: _._,
      strTitle: _,
      onDismiss: () => _.close(),
      popupWidth: 500,
      popupHeight: 500,
      resizable: !0,
      refPopup: _,
      className: `TODO`,
      children: [
        (0, _.jsx)(_, {
          children: _,
        }),
        (0, _.jsx)(_, {
          mode: `single`,
          closePopup: () => _.close(),
          children: (0, _.jsx)(_, {
            noteParent: _.noteParent,
            noteid: _.noteid,
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { noteParent: _, noteid: _ } = _,
    { data: _ } = _(_, _);
  return _
    ? (0, _.jsx)(_, {
        note: _,
      })
    : null;
}
function _(_) {
  let { popup: _, refPopup: _ } = _,
    _ = _.noteParent,
    _ = _.useMemo(() => [_(_)], [_]);
  return (0, _.jsx)(_, {
    strName: _._,
    strTitle: _.display_name,
    onDismiss: () => _.close(),
    popupWidth: 900,
    popupHeight: 830,
    resizable: !0,
    refPopup: _,
    className: `TODO`,
    children: (0, _.jsx)(_, {
      initialEntries: _,
      children: (0, _.jsx)(_, {
        mode: `page`,
        closePopup: () => _.close(),
        children: (0, _.jsx)(_, {
          noteParent: _,
        }),
      }),
    }),
  });
}
export { _ as default };
