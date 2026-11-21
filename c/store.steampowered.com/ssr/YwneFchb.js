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
(_({
  enforceActions: `never`,
}),
  _());
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _, _, _] = await _([
      _(
        Object.assign({
          "../../../shared/localization/sales/sales_arabic.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_brazilian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_bulgarian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_czech.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_danish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_dutch.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_english.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_finnish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_french.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_german.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_greek.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_hungarian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_indonesian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_italian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_japanese.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_koreana.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_latam.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_malay.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_norwegian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_polish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_portuguese.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_romanian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_russian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_sc_schinese.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_schinese.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_spanish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_swedish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_tchinese.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_thai.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_turkish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_ukrainian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_vietnamese.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
        }),
        `../../../shared/localization/sales/sales_${_}.json`,
        7,
      ),
      _(
        Object.assign({
          "../../../shared/localization/marketing/marketing_arabic.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_brazilian.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_bulgarian.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_czech.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_danish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_dutch.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_english.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_finnish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_french.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_german.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_greek.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_hungarian.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_indonesian.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_italian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_japanese.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_koreana.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_latam.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_malay.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_norwegian.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_polish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_portuguese.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_romanian.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_russian.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_sc_schinese.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_schinese.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_spanish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_swedish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_tchinese.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_thai.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_turkish.json": () =>
            _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_ukrainian.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_vietnamese.json":
            () => _(() => import(`./chunk.js`), [], import.meta.url),
        }),
        `../../../shared/localization/marketing/marketing_${_}.json`,
        7,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/sales/sales_arabic.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_brazilian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_bulgarian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_czech.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_danish.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_dutch.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_english.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_finnish.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_french.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_german.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_greek.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_hungarian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_indonesian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_italian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_japanese.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_koreana.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_latam.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_malay.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_norwegian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_polish.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_portuguese.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_romanian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_russian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_sc_schinese.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_schinese.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_spanish.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_swedish.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_tchinese.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_thai.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_turkish.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_ukrainian.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_vietnamese.json": () =>
                _(() => import(`./chunk.js`), [], import.meta.url),
            }),
            `../../../shared/localization/sales/sales_${_}.json`,
            7,
          ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/marketing/marketing_arabic.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_brazilian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_bulgarian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_czech.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_danish.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_dutch.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_english.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_finnish.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_french.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_german.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_greek.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_hungarian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_indonesian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_italian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_japanese.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_koreana.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_latam.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_malay.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_norwegian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_polish.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_portuguese.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_romanian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_russian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_sc_schinese.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_schinese.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_spanish.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_swedish.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_tchinese.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_thai.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_turkish.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_ukrainian.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_vietnamese.json":
                () => _(() => import(`./chunk.js`), [], import.meta.url),
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
