import { _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import { _ } from "./chunk~9aa05d2c7d.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~7b4b9eb713.js";
var _ = _(_()),
  _ = `Eesk-sarw9w-`,
  _ = _();
function _(_) {
  let { creatorHomes: _ } = _,
    [_, _] = _.useState(!0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(0);
  return (
    _.useEffect(() => {
      _ &&
        (async () => {
          let _ = [];
          for (let _ = 0; _ < _.length; _ += 10) {
            let _ = _.slice(_, _ + 10).map((_) =>
                _.fetchQuery(_(Number(_.accountid))),
              ),
              _ = await Promise.all(_);
            _.push(..._);
            let _ = [..._].sort(
              (_, _) => _.GetNumFollowers() - _.GetNumFollowers(),
            );
            (_(_), _(_));
          }
          _(!1);
        })();
    }, [_]),
    !_ || !_
      ? (0, _.jsx)(_, {})
      : (0, _.jsxs)(_, {
          children: [
            _ &&
              (0, _.jsxs)(`span`, {
                children: [
                  (0, _.jsx)(`span`, {
                    children: `Loading: `,
                  }),
                  (0, _.jsxs)(`span`, {
                    children: [_ + 1, ` / `, _.length],
                  }),
                  (0, _.jsx)(_, {
                    size: `small`,
                  }),
                ],
              }),
            (0, _.jsxs)(`table`, {
              className: _,
              children: [
                (0, _.jsx)(`thead`, {
                  children: (0, _.jsxs)(`tr`, {
                    children: [
                      (0, _.jsx)(`th`, {
                        children: `Name`,
                      }),
                      (0, _.jsx)(`th`, {
                        children: `Followers`,
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)(`tbody`, {
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        creatorHome: _,
                      },
                      _.GetClanAccountID(),
                    ),
                  ),
                }),
              ],
            }),
          ],
        })
  );
}
function _(_) {
  let { creatorHome: _ } = _;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(`a`, {
          href: _.GetCreatorHomeURL(`developer`),
          target: `_blank`,
          rel: `noopener noreferrer`,
          children: _.GetName(),
        }),
      }),
      (0, _.jsx)(`td`, {
        children: _.GetNumFollowers(),
      }),
    ],
  });
}
export { _ as default };
