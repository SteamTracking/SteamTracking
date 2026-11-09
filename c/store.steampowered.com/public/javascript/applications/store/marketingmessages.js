import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _ } from "./main.js";
import { _, _, _, _ } from "./marketingmessageutilhooks.js";
var _ = _(_()),
  _ = _(),
  _ = _.createContext({
    prioritized_list: !1,
  });
function _(_) {
  let [_, _] = _.useState(),
    _ = _(),
    _ = _.useMemo(() => (new URLSearchParams(_.search), {}), [_.search]);
  return (
    _.useEffect(() => {
      _(`marketingmessage_config`, `application_config`), _({});
    }, [_]),
    _
      ? (0, _.jsxs)(_.Provider, {
          value: _,
          children: [_.children, ` `],
        })
      : null
  );
}
var _ = {
  List: () => `${_.MarketingMessages()}list/`,
  Message: (_) => `${_.MarketingMessages()}${_}`,
  MessagePreview: (_) => `${_.MarketingMessages()}preview/${_}`,
};
function _(_) {
  let _ = _();
  return _
    ? (0, _.jsx)(_, {
        domain: `store.steampowered.com`,
        controller: `message`,
        method: `default`,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  path: `${_.List()}`,
                  children: (0, _.jsx)(_, {
                    MarketingMessagesStore: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  path: `${_.MessagePreview(`:messageid`)}`,
                  children: (0, _.jsx)(_, {
                    MarketingMessagesStore: _,
                    preview: !0,
                  }),
                }),
                (0, _.jsx)(_, {
                  path: `${_.Message(`:messageid`)}`,
                  children: (0, _.jsx)(_, {
                    MarketingMessagesStore: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    _: `${_.List()}`,
                  }),
                }),
              ],
            }),
          }),
        }),
      })
    : null;
}
var _;
function _(_) {
  return (_ ||= new _(_)), _;
}
function _() {
  let [_, _] = _.useState(null),
    _ = _();
  return (
    _.useEffect(() => {
      _ || _(_(_));
    }, [_, _]),
    _
  );
}
export { _ as MarketingMessageRoutes, _ as default };
