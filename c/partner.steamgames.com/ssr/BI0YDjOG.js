var _ = _(_(), 1),
  _ = _(),
  _ = _({
    Component: _,
  });
function _() {
  let _ = _.useLoaderData(),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      if (!_) return;
      let _ = new URL(_.HELP_BASE_URL).origin,
        _ = new ResizeObserver(() => {
          let _ = Math.ceil(_.getBoundingClientRect().bottom + window.scrollY);
          window.parent.postMessage(
            {
              nSurveyExportHeight: _,
            },
            _,
          );
        });
      return (_.observe(_), () => _.disconnect());
    }, []),
    (0, _.jsx)(`div`, {
      ref: _,
      children:
        _.success == 1
          ? (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(`div`, {
                  className: _(_, _),
                  children: (0, _.jsx)(_, {
                    nAppID: _.nAppID,
                    edits: _(_.survey),
                  }),
                }),
              }),
            })
          : (0, _.jsx)(_, {
              eError: _(_.success),
              nAppID: _.nAppID,
              ePage: `edit`,
              strError: _.strError,
            }),
    })
  );
}
export { _ as route };
