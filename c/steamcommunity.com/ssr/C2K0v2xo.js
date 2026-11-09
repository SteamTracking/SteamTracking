_();
var _ = `JWYUOpxwqs0-`,
  _ = _(),
  _ = 500;
function _(_) {
  let {
      strClassName: _,
      rgEvents: _,
      fnEventShowModal: _,
      elPostRowElement: _,
      bViewAllShowInfiniteScroll: _,
      nSummaryMaxLength: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = 2,
    _ = 501;
  return (
    _.ownerWindow.window
      ? (_ = _.ownerWindow.window.innerWidth)
      : _.viewportWidth && (_ = _.viewportWidth.value),
    (_ = _ <= _ ? 1 : 2),
    _ && _.length == 0 && !_
      ? null
      : (0, _.jsxs)(_, {
          className: _,
          "flow-children": `row`,
          children: [
            !!_ &&
              _.length > 0 &&
              (0, _.jsx)(`div`, {
                className: `JWYUOpxwqs0-`,
                children: (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsxs)(`h2`, {
                      children: [
                        _.Localize(`#EventBrowse_RecentEvents`),
                        !_ &&
                          !!_ &&
                          (0, _.jsx)(_.Fragment, {
                            children:
                              _ && _
                                ? (0, _.jsx)(_, {
                                    className: `eEcts-k-paY-`,
                                    onClick: () => _(_[0]),
                                    children: _.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  })
                                : (0, _.jsx)(_, {
                                    eventModel: _[0],
                                    route: _.k_eViewWebSiteHub,
                                    className: `eEcts-k-paY-`,
                                    children: _.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  }),
                          }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: `svjBjjEDjeM-`,
                      children: _.slice(0, _).map((_) => {
                        let _ =
                          _ && !_()
                            ? (_) => {
                                (_(_), _.stopPropagation(), _.preventDefault());
                              }
                            : void 0;
                        return (0, _.jsx)(
                          _,
                          {
                            event: _,
                            onClick: _,
                            nSummaryMaxLength: _,
                          },
                          _.GID,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            _,
          ],
        })
  );
}
