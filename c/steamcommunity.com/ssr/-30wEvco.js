var _ = `oO-RIB1W5Mk-`,
  _ = _(),
  _ = _({
    Component: _,
  });
function _(_) {
  let {
      appHubHeader: _,
      appHubTab: _,
      bStandaloneWorkshop: _,
    } = _.useLoaderData(),
    _ = _ == `workshop`;
  return (0, _.jsxs)(_, {
    className: _,
    position: `relative`,
    children: [
      (0, _.jsx)(_, {
        _: {
          appid: _.appid,
        },
        workshop: _,
      }),
      _
        ? _.children
        : (0, _.jsx)(_, {
            activeTab: _,
            ..._,
            hideBorder: _,
            children: _.children,
          }),
    ],
  });
}
export { _ as route };
