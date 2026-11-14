var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { page: _, bLoading: _, onChangePage: _, bDisabled: _ } = _,
    { onBrowseHandler: _ } = _();
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && `EJXx0Du9tCY-`),
    onActivate: () => {
      _ ||
        (_({
          page: _,
        }),
        _());
    },
    children: _(_),
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    {
      page: _,
      num_per_page: _,
      current_page: _,
      total_pages: _,
      bLoading: _,
      onChangePage: _,
      className: _,
      bHideNumPerPage: _,
    } = _,
    _ = _(),
    _ = _.rgNumPerPageOptions ?? [10, 15, 30, 50],
    _ = (_) => {
      (_.setPreferences({
        numResultsPerPage: _,
      }),
        _({
          num_per_page: _,
          page: 1,
        }),
        _());
    },
    _ = (_) => {
      _ ||
        (_({
          page: (_ ?? 1) + _,
        }),
        _());
    };
  if (_ == 0) return null;
  let _ = Math.max(1, _),
    _ = !1,
    _ = !1,
    _ = 1,
    _ = 1,
    _ = [];
  (_ <= 7
    ? (_ = _)
    : (_ - 3 > 1 ? ((_ = !0), (_ = _ - 2)) : ((_ = !1), (_ = 1)),
      _ + 3 < _ ? ((_ = !0), (_ = _ + 2)) : ((_ = !1), (_ = _))),
    _ &&
      (_.push(
        (0, _.jsx)(
          _,
          {
            page: 1,
            bLoading: _,
            onChangePage: _,
          },
          `page1`,
        ),
      ),
      _.push(
        (0, _.jsx)(
          `div`,
          {
            children: `...`,
          },
          `ellipsis_start`,
        ),
      )));
  for (let _ = _; _ <= _; _++)
    _ == _
      ? _.push(
          (0, _.jsx)(
            _,
            {
              page: _,
              bLoading: _,
              bDisabled: !0,
              onChangePage: _,
            },
            `page${_}`,
          ),
        )
      : _.push(
          (0, _.jsx)(
            _,
            {
              page: _,
              bLoading: _,
              onChangePage: _,
            },
            `page${_}`,
          ),
        );
  return (
    _ &&
      (_.push(
        (0, _.jsx)(
          `div`,
          {
            children: `...`,
          },
          `ellipsis_end`,
        ),
      ),
      _.push(
        (0, _.jsx)(
          _,
          {
            page: _,
            bLoading: _,
            onChangePage: _,
          },
          `page${_}`,
        ),
      )),
    (0, _.jsxs)(_, {
      className: (0, _.default)(_, _),
      "flow-children": `row`,
      children: [
        !_ &&
          (0, _.jsxs)(`div`, {
            className: `XrYtUrn5-Zg-`,
            children: [
              _.Localize(`#Workshop_NumPerPage`),
              (0, _.jsx)(_, {
                size: `1`,
                onSelectionChange: _,
                selectedValue: _ ?? _[0],
                options: _,
              }),
            ],
          }),
        (0, _.jsxs)(_, {
          gap: `1`,
          align: `center`,
          direction: `row`,
          children: [
            (0, _.jsx)(_, {
              color: _ ? `dull` : `accent`,
              disabled: _ <= 1,
              onClick: () => _(-1),
              size: `1`,
              children: (0, _.jsx)(_, {
                direction: `left`,
              }),
            }),
            (0, _.jsx)(_, {
              size: `4`,
              children: (0, _.jsx)(_, {
                gap: `2`,
                direction: `row`,
                children: [..._],
              }),
            }),
            (0, _.jsx)(_, {
              color: _ ? `dull` : `accent`,
              disabled: _ >= _,
              onClick: () => _(1),
              size: `1`,
              children: (0, _.jsx)(_, {
                direction: `right`,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
