var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { rgCountries: _, strCountryCode: _, BuildCountryPath: _ } = _,
    _ = _.useMemo(
      () => [
        {
          data: ``,
          label: _(`#SteamCharts_TopSellers_GlobalTopSellers`),
        },
        ..._.map(({ country_code: _, name: _ }) => ({
          data: _,
          label: _,
        })),
      ],
      [_],
    ),
    _ = _.find((_) => _.data === _) ?? _[0],
    _ = _.useCallback(
      (_) => {
        _(_(_(_.data)));
      },
      [_],
    );
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        options: _,
        selectedValue: _,
        onSelectionChange: _,
        getOptionLabel: (_) => _.label,
      }),
    }),
  });
}
