var _ = _(_(), 1),
  _ = _(),
  _ = 30;
function _(_) {
  let {
      event: _,
      imageURLOverride: _,
      bShowAssociatedApp: _,
      langOverride: _,
      onClick: _,
      eEventRount: _,
      bHidePrices: _,
      nSummaryMaxLength: _,
    } = _,
    _ = _(_.appid),
    _ = _(),
    _ = _ || _(_.LANGUAGE),
    _ = _(_ === void 0 ? _ : void 0, `capsule`, _, _.capsule_main) ?? _,
    _ = _(_ === void 0 ? _ : void 0, `capsule`, _, _.full) ?? _,
    [_, _, _, _] = _(() => [
      _.GetNameWithFallback(_) || ``,
      _.GetCategoryAsString(),
      _.GetSummaryWithFallback(_, _),
      _.GetSubTitleWithLanguageFallback(_) || ``,
    ]),
    _ = _(_.appid),
    { data: _ } = _(_),
    _ = [];
  if ((_ && _.push(_), _ && _ !== _ && _.push(_), _)) {
    let _ = _(_, `main_capsule`);
    _ && _.push(_);
  }
  let [_, _] = (0, _.useState)(_),
    _ = (_, _, _) => {
      (_ >= _.length && _(void 0), _(_[_ + 1]));
    };
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let _ = _ ? _.GetStartTimeAndDateUnixSeconds() : 0,
    _ = _;
  return (
    _ && (_.length > _ || _.length > _) && (_ = void 0),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(_, {
          className: _(_, `OtherEvents_EventCtn`, _),
          eventModel: _,
          route: _ || _.k_eView,
          onClick: _,
          preferredFocus: !0,
          children: [
            (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              style: {
                backgroundColor: `#ffffff`,
                backgroundImage: _ ? `url(${_(_)})` : `none`,
              },
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _(_, _ && `fgwtNp-Vx-w-`),
                  children: (0, _.jsx)(_, {
                    rgSources: _,
                    onIncrementalError: _,
                    className: _,
                    alt: ``,
                  }),
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(`div`, {
                        className: `IeU07LW2ffQ-`,
                        children: _,
                      }),
                    (0, _.jsxs)(_, {
                      direction: `row`,
                      gap: `3`,
                      align: `center`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: _(_, _),
                          children: _,
                        }),
                        _ > _
                          ? (0, _.jsx)(`div`, {
                              className: _(_, `UpcomingCtn`),
                              children: (0, _.jsx)(_, {
                                bSingleLine: !0,
                                dateAndTime: _.GetStartTimeAndDateUnixSeconds(),
                              }),
                            })
                          : (0, _.jsx)(_, {
                              bSingleLine: !0,
                              bOnlyDate: !0,
                              dateAndTime: _.GetStartTimeAndDateUnixSeconds(),
                            }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: _(_, _),
                      children: _,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        !!(_ && _.appid) &&
          (0, _.jsx)(_, {
            appid: _.appid,
            bHidePrice: _,
          }),
      ],
    })
  );
}
function _(_) {
  let { appid: _, bHidePrice: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(),
    _ = _();
  if (!_ || !_) return null;
  let _ = _ && _.hide_discount_pct_for_compliance;
  return (0, _.jsx)(_, {
    appID: _,
    children: (0, _.jsxs)(_, {
      className: _(_, `AppCapsuleCtn`),
      ..._(_, _, _, !1),
      children: [
        (0, _.jsx)(_, {
          _: _,
          hoverProps: {
            direction: `overlay`,
            style: {
              minWidth: `320px`,
            },
          },
          children: (0, _.jsx)(`img`, {
            className: _(_, _),
            src: _(_, `small_capsule`),
            alt: _.name,
          }),
        }),
        !_ &&
          !_.is_free &&
          (0, _.jsxs)(`span`, {
            className: _(
              `v0Xzil128pc-`,
              _?.discount_pct ? `_-54SS2-Bx9o-` : ``,
            ),
            children: [
              !!(_?.discount_pct && _) &&
                (0, _.jsx)(`div`, {
                  className: `ALhnUBj871c-`,
                  children: (0, _.jsx)(_, {}),
                }),
              !(!_?.discount_pct || _) &&
                (0, _.jsx)(`span`, {
                  className: `KY4Cd9W1L6Q-`,
                  children: `-${_?.discount_pct}%`,
                }),
              _ &&
                _.final_price_in_cents &&
                (0, _.jsx)(`span`, {
                  className: `QYFii1vIT5Q-`,
                  children: _.formatted_final_price,
                }),
            ],
          }),
      ],
    }),
  });
}
