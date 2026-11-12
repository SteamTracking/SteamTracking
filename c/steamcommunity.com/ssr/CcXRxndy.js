var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { app: _ } = _,
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(!0);
  return (0, _.jsx)(`form`, {
    onSubmit: (_) => {
      if ((_.stopPropagation(), _.preventDefault(), !_)) return;
      let _ = `q=${encodeURIComponent(_)}`;
      (_ && _ && (_ += `&appid=${_.appid}`),
        _(
          _.Search({
            search: _,
          }),
        ));
    },
    children: (0, _.jsx)(_, {
      radius: `md`,
      background: `dull-4`,
      padding: `3`,
      children: (0, _.jsxs)(_, {
        gap: `3`,
        children: [
          (0, _.jsx)(_, {
            flexGrow: `1`,
            children: (0, _.jsx)(_, {
              app: _ ? _ : void 0,
              onClearApp: () => _(!1),
              value: _,
              onTextChange: _,
              placeholder: _.Localize(`#MarketSearch_Placeholder`),
            }),
          }),
          (0, _.jsx)(_, {
            href: _.AdvancedSearch(
              _ && _
                ? {
                    search: new URLSearchParams({
                      appid: _.appid.toString(),
                    }),
                  }
                : void 0,
            ),
            children: (0, _.jsx)(_, {
              color: `accent`,
              children: _.Localize(`#AdvancedSearch_Link`),
            }),
          }),
        ],
      }),
    }),
  });
}
var _ = _({
  Component: _,
});
function _(_) {
  let { app: _ } = _.useLoaderData();
  return (0, _.jsx)(_, {
    marginTop: `5`,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `3`,
      children: [
        (0, _.jsx)(_, {
          children: _.name,
        }),
        (0, _.jsx)(_, {
          src: _.img,
          width: `120px`,
          alt: ``,
        }),
        (0, _.jsx)(_, {
          app: _,
        }),
      ],
    }),
  });
}
export { _ as route };
