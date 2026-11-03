var _ = (_, _, _) => {
  let _ = _.lastIndexOf(`?`),
    _ = _[_ === -1 || _ < _.lastIndexOf(`/`) ? _ : _.slice(0, _)];
  return _
    ? typeof _ == `function`
      ? _()
      : Promise.resolve(_)
    : new Promise((_, _) => {
        (typeof queueMicrotask == `function` ? queueMicrotask : setTimeout)(
          _.bind(
            null,
            Error(
              `Unknown variable dynamic import: ` +
                _ +
                (_.split(`/`).length === _
                  ? ``
                  : `. Note that variables only represent file names one level deep.`),
            ),
          ),
        );
      });
};
_({
  enforceActions: `never`,
}),
  _();
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _, _, _] = await _([
      _(
        Object.assign({
          "../../../shared/localization/sales/sales_arabic.json": () =>
            _(() => import(`./CzzlfA-c.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_brazilian.json": () =>
            _(() => import(`./DTN-GD2Q.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_bulgarian.json": () =>
            _(() => import(`./DZl-9_or.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_czech.json": () =>
            _(() => import(`./HpgktfwJ.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_danish.json": () =>
            _(() => import(`./OpwdCTPM.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_dutch.json": () =>
            _(() => import(`./CcXS4FI9.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_english.json": () =>
            _(() => import(`./DQmw5V8o.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_finnish.json": () =>
            _(() => import(`./Dta5s2yi.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_french.json": () =>
            _(() => import(`./CrO5RSYz.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_german.json": () =>
            _(() => import(`./DQbPk4dS.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_greek.json": () =>
            _(() => import(`./CfsepvmX.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_hungarian.json": () =>
            _(() => import(`./DPJBfZM9.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_indonesian.json": () =>
            _(() => import(`./B64UPgr4.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_italian.json": () =>
            _(() => import(`./CSotS2-m.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_japanese.json": () =>
            _(() => import(`./sZ0kzIse.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_koreana.json": () =>
            _(() => import(`./CzPH0G18.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_latam.json": () =>
            _(() => import(`./Bt0tISYH.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_malay.json": () =>
            _(() => import(`./BzDVqNst.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_norwegian.json": () =>
            _(() => import(`./DKLjfDJj.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_polish.json": () =>
            _(() => import(`./Ie84E6SK.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_portuguese.json": () =>
            _(() => import(`./Li-NKdaG.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_romanian.json": () =>
            _(() => import(`./D87e2AI9.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_russian.json": () =>
            _(() => import(`./C7isrC5q.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_sc_schinese.json": () =>
            _(() => import(`./Bg8mblgx.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_schinese.json": () =>
            _(() => import(`./Y8kRxGYP.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_spanish.json": () =>
            _(() => import(`./CiqGe1Zq.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_swedish.json": () =>
            _(() => import(`./B4IXjZ__.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_tchinese.json": () =>
            _(() => import(`./BHGbc5sp.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_thai.json": () =>
            _(() => import(`./ldWc7DJw.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_turkish.json": () =>
            _(() => import(`./CyowQsY2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_ukrainian.json": () =>
            _(() => import(`./D2KM5CGy.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_vietnamese.json": () =>
            _(() => import(`./BOf4juBo.js`), [], import.meta.url),
        }),
        `../../../shared/localization/sales/sales_${_}.json`,
        7,
      ),
      _(
        Object.assign({
          "../../../shared/localization/marketing/marketing_arabic.json": () =>
            _(() => import(`./C07s5rxY.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_brazilian.json":
            () => _(() => import(`./_6xe5jb3.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_bulgarian.json":
            () => _(() => import(`./BTNqcUk9.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_czech.json": () =>
            _(() => import(`./DfK2BolZ.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_danish.json": () =>
            _(() => import(`./Ckmg4MqJ.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_dutch.json": () =>
            _(() => import(`./C2ddeCqi.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_english.json": () =>
            _(() => import(`./ChIpNpz-.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_finnish.json": () =>
            _(() => import(`./BRc_zgh0.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_french.json": () =>
            _(() => import(`./C6nghP-u.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_german.json": () =>
            _(() => import(`./Bc7yMcP6.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_greek.json": () =>
            _(() => import(`./DguPHCin.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_hungarian.json":
            () => _(() => import(`./CIQGHtp-.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_indonesian.json":
            () => _(() => import(`./BrubTjw4.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_italian.json": () =>
            _(() => import(`./Dpu8GSVs.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_japanese.json":
            () => _(() => import(`./B3GKVaFL.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_koreana.json": () =>
            _(() => import(`./BsSc8xl_.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_latam.json": () =>
            _(() => import(`./DhTHp1dW.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_malay.json": () =>
            _(() => import(`./7GFjWTYv.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_norwegian.json":
            () => _(() => import(`./DktR9d2-.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_polish.json": () =>
            _(() => import(`./Cum9idqA.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_portuguese.json":
            () => _(() => import(`./BCOXBljs.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_romanian.json":
            () => _(() => import(`./BDjQ9cOB.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_russian.json": () =>
            _(() => import(`./DIlOHF93.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_sc_schinese.json":
            () => _(() => import(`./BS2Dv5bY.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_schinese.json":
            () => _(() => import(`./CnzlCvzt.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_spanish.json": () =>
            _(() => import(`./AUM74lBK.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_swedish.json": () =>
            _(() => import(`./DqrBVHky.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_tchinese.json":
            () => _(() => import(`./DDch_O3L.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_thai.json": () =>
            _(() => import(`./BioudZsC.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_turkish.json": () =>
            _(() => import(`./LRV_eDAu.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_ukrainian.json":
            () => _(() => import(`./gYdZreP1.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_vietnamese.json":
            () => _(() => import(`./BOeqXQb7.js`), [], import.meta.url),
        }),
        `../../../shared/localization/marketing/marketing_${_}.json`,
        7,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/sales/sales_arabic.json": () =>
                _(() => import(`./CzzlfA-c.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_brazilian.json": () =>
                _(() => import(`./DTN-GD2Q.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_bulgarian.json": () =>
                _(() => import(`./DZl-9_or.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_czech.json": () =>
                _(() => import(`./HpgktfwJ.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_danish.json": () =>
                _(() => import(`./OpwdCTPM.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_dutch.json": () =>
                _(() => import(`./CcXS4FI9.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_english.json": () =>
                _(() => import(`./DQmw5V8o.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_finnish.json": () =>
                _(() => import(`./Dta5s2yi.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_french.json": () =>
                _(() => import(`./CrO5RSYz.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_german.json": () =>
                _(() => import(`./DQbPk4dS.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_greek.json": () =>
                _(() => import(`./CfsepvmX.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_hungarian.json": () =>
                _(() => import(`./DPJBfZM9.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_indonesian.json": () =>
                _(() => import(`./B64UPgr4.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_italian.json": () =>
                _(() => import(`./CSotS2-m.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_japanese.json": () =>
                _(() => import(`./sZ0kzIse.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_koreana.json": () =>
                _(() => import(`./CzPH0G18.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_latam.json": () =>
                _(() => import(`./Bt0tISYH.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_malay.json": () =>
                _(() => import(`./BzDVqNst.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_norwegian.json": () =>
                _(() => import(`./DKLjfDJj.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_polish.json": () =>
                _(() => import(`./Ie84E6SK.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_portuguese.json": () =>
                _(() => import(`./Li-NKdaG.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_romanian.json": () =>
                _(() => import(`./D87e2AI9.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_russian.json": () =>
                _(() => import(`./C7isrC5q.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_sc_schinese.json": () =>
                _(() => import(`./Bg8mblgx.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_schinese.json": () =>
                _(() => import(`./Y8kRxGYP.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_spanish.json": () =>
                _(() => import(`./CiqGe1Zq.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_swedish.json": () =>
                _(() => import(`./B4IXjZ__.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_tchinese.json": () =>
                _(() => import(`./BHGbc5sp.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_thai.json": () =>
                _(() => import(`./ldWc7DJw.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_turkish.json": () =>
                _(() => import(`./CyowQsY2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_ukrainian.json": () =>
                _(() => import(`./D2KM5CGy.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_vietnamese.json": () =>
                _(() => import(`./BOf4juBo.js`), [], import.meta.url),
            }),
            `../../../shared/localization/sales/sales_${_}.json`,
            7,
          ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/marketing/marketing_arabic.json":
                () => _(() => import(`./C07s5rxY.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_brazilian.json":
                () => _(() => import(`./_6xe5jb3.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_bulgarian.json":
                () => _(() => import(`./BTNqcUk9.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_czech.json":
                () => _(() => import(`./DfK2BolZ.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_danish.json":
                () => _(() => import(`./Ckmg4MqJ.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_dutch.json":
                () => _(() => import(`./C2ddeCqi.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_english.json":
                () => _(() => import(`./ChIpNpz-.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_finnish.json":
                () => _(() => import(`./BRc_zgh0.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_french.json":
                () => _(() => import(`./C6nghP-u.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_german.json":
                () => _(() => import(`./Bc7yMcP6.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_greek.json":
                () => _(() => import(`./DguPHCin.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_hungarian.json":
                () => _(() => import(`./CIQGHtp-.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_indonesian.json":
                () => _(() => import(`./BrubTjw4.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_italian.json":
                () => _(() => import(`./Dpu8GSVs.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_japanese.json":
                () => _(() => import(`./B3GKVaFL.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_koreana.json":
                () => _(() => import(`./BsSc8xl_.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_latam.json":
                () => _(() => import(`./DhTHp1dW.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_malay.json":
                () => _(() => import(`./7GFjWTYv.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_norwegian.json":
                () => _(() => import(`./DktR9d2-.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_polish.json":
                () => _(() => import(`./Cum9idqA.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_portuguese.json":
                () => _(() => import(`./BCOXBljs.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_romanian.json":
                () => _(() => import(`./BDjQ9cOB.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_russian.json":
                () => _(() => import(`./DIlOHF93.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_sc_schinese.json":
                () => _(() => import(`./BS2Dv5bY.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_schinese.json":
                () => _(() => import(`./CnzlCvzt.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_spanish.json":
                () => _(() => import(`./AUM74lBK.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_swedish.json":
                () => _(() => import(`./DqrBVHky.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_tchinese.json":
                () => _(() => import(`./DDch_O3L.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_thai.json":
                () => _(() => import(`./BioudZsC.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_turkish.json":
                () => _(() => import(`./LRV_eDAu.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_ukrainian.json":
                () => _(() => import(`./gYdZreP1.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_vietnamese.json":
                () => _(() => import(`./BOeqXQb7.js`), [], import.meta.url),
            }),
            `../../../shared/localization/marketing/marketing_${_}.json`,
            7,
          ),
      _.Ready(),
    ]);
  _.AddTokens(
    {
      ..._,
      ..._,
    },
    {
      ..._,
      ..._,
    },
  );
}
_(_().strLanguage).finally(_);
