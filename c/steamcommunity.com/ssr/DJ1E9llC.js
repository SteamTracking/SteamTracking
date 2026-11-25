var _ = _(_(), 1),
  _ = _(),
  _ = _({
    Component: _,
  });
function _(_) {
  let {
      config: _,
      initialFilter: _,
      rgApps: _,
      appData: _,
    } = _.useLoaderData(),
    [_, _] = (0, _.useState)(_);
  return (0, _.jsx)(_, {
    value: _,
    children: (0, _.jsxs)(_, {
      marginTop: `5`,
      children: [
        (0, _.jsx)(_, {
          children: _.Localize(`#AdvancedSearch_Header`),
        }),
        (0, _.jsx)(_, {
          filter: _,
          onFilterChange: _,
          onSearch: (_, _) => {
            window.location.href = _(_, _);
          },
          config: _,
          debugMode: !1,
          rgApps: _,
          rgAppData: _,
        }),
      ],
    }),
  });
}
export { _ as route };
