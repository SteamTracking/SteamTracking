var _ = 1079395200,
  _ = 604800;
function _(_) {
  return _(
    `#SteamCharts_TopSellers_WeeklyRange`,
    _(_, {
      timeZone: `UTC`,
    }),
    _(_ + _, {
      timeZone: `UTC`,
    }),
  );
}
function _(_) {
  return _(
    `#SteamCharts_TopSellers_WeeklyRangeShort`,
    _(_, {
      timeZone: `UTC`,
    }),
  );
}
function _(_) {
  if (!_) return ``;
  let _ = new Date(_ * 1e3);
  return `${_.getUTCFullYear()}-${_.getUTCMonth() + 1}-${_.getUTCDate()}`;
}
function _(_) {
  return _ || `global`;
}
function _(_, _) {
  if (_ < 0 || _ > 11)
    throw Error(`Invalid month index. Must be between 0 and 11.`);
  return `${_[_]}_${_}`;
}
var _ = [
    `january`,
    `february`,
    `march`,
    `april`,
    `may`,
    `june`,
    `july`,
    `august`,
    `september`,
    `october`,
    `november`,
    `december`,
  ],
  _ = {
    nYear: 2003,
    nMonth: 8,
  };
function _(_, _) {
  let _ = _.nYear * 12 + _.nMonth + _;
  return {
    nYear: Math.floor(_ / 12),
    nMonth: _ % 12,
  };
}
