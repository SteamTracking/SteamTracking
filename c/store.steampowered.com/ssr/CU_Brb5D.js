var _ = _(_(), 1),
  _ = _(),
  _ = (function (_) {
    return (
      (_[(_.k_ENominations = 0)] = `k_ENominations`),
      (_[(_.k_EVoting = 1)] = `k_EVoting`),
      _
    );
  })({}),
  _ = {
    2023: {
      HeaderCtn: `gNi7hO6M5Ao-`,
      EventTitle: `ZpYPr6iEBj8-`,
      InfoText: `_66wOFVG2ClM-`,
      Large: `_5yEI0lHNc2o-`,
      FAQCtn: `_5wF-e1aMX8U-`,
      FAQ_Q: `BtywKKJ-M0s-`,
      FAQ_A: `_0aKbJW5QwV4-`,
      ProgressCtn: `bsECwto5s8s-`,
      CategoryStickerCtn: `PfAd8wGjqCA-`,
      CategoryStickerHover: `xOEOzw92o0g-`,
      FaqSectionTitle: `owg7QjUxyiw-`,
    },
    2024: {
      HeaderCtn: `Ou-UqNTa23s-`,
      EventTitle: `pP2Y2P2PTpk-`,
      InfoText: `cJlJAxw5UPg-`,
      Large: `tOzonMYMawM-`,
      FAQCtn: `_9mXKXz2yNh8-`,
      FAQ_Q: `fkmbwWQsXD0-`,
      FAQ_A: `_3SeRBe4I8v0-`,
      ProgressCtn: `_-2byQ2OQX5c-`,
      CategoryStickerCtn: `zolZahK-CBI-`,
      CategoryStickerHover: `QWs-Ro6BmBw-`,
      FaqSectionTitle: `wNr7EzB-z8A-`,
    },
    2025: {
      HeaderCtn: `NlE1aOguLrY-`,
      EventTitle: `_7w-007nUcJE-`,
      InfoText: `i-WXoyfaGjE-`,
      Large: `QFD-txL5zCs-`,
      FAQCtn: `oHuxbhG1zvs-`,
      FaqEntry: `nAea3kvULuc-`,
      FAQ_Q: `Q7zjSy5AxG8-`,
      FAQ_A: `_9ahbwu-837w-`,
      ProgressCtn: `_4Spz0UjBpOg-`,
      CategoryStickerCtn: `fGlfT-AJNE4-`,
      CategoryStickerHover: `YB1fgBT1PwQ-`,
      FaqSectionTitle: `TeOomb04-dE-`,
    },
    2026: {
      HeaderOuterCtn: `UxyndBo6EKY-`,
      HeaderCtn: `_99OvGfv3HlQ-`,
      HeaderContent: `NIrmk554rUw-`,
      HeaderTitle: `_04ddfpX21jg-`,
      Anniversary: `HbIPGp6WNus-`,
      InfoText: `ZnwT7xv7y5w-`,
      Large: `_3052-OMFJmQ-`,
      CalloutCtn: `KVwwI24lbIE-`,
      FAQCtn: `fUKy01jiaSI-`,
      FaqEntry: `z-ajitmryQ8-`,
      FAQ_Q: `Cg4b-AUhqRM-`,
      FAQ_A: `bAi37QOUhpI-`,
      ProgressCtn: `THUMp-5WHwY-`,
      CategoryStickerCtn: `LT-ZGiut3Ls-`,
      CategoryStickerHover: `VBykUNcigCA-`,
      FaqSectionTitle: `kfwxVQWdG6w-`,
      SteamAwardsCategory: `fYrhIo3U-Aw-`,
    },
  },
  _ = 2025,
  _ = Object.values(_).reduce(
    (_, _) => ({
      ..._,
      ..._,
    }),
    {},
  );
function _(_) {
  return {
    ..._,
    ...(_[_] ?? _[_]),
  };
}
var _ = {
  2023: `steamawards2023/SA_header_still.png?v=2`,
  2024: `steamawards2024/header_trophy.webp?v=2`,
  2025: `steamawards2025/header_w_trophy.webp?v=1`,
};
function _(_) {
  let _ = _[_] ?? _[_];
  return {
    "--steamawards-header-image": `url( '${_(_)}' )`,
  };
}
function _(_) {
  let _ = _(_)?.strPageTileAsset;
  if (_)
    return {
      "--steamawards-page-tile-image": `url( '${_(_)}' )`,
    };
}
function _(_) {
  let _ = _(_);
  if (_)
    return {
      "--steamawards-category-color": _.strCategoryColor,
      "--steamawards-category-edge-darken": `${_.nCategoryEdgeDarkenPercent}%`,
    };
}
function _(_, _) {
  let _ = _(_);
  if (!_) return;
  let _ = `${_.strTileAssetDir}${_}.webp?v=${_.nTileVersion}`,
    _ = _.mapCategoryColors?.[_],
    _ = _.mapCategoryEdgeColors?.[_];
  return {
    "--steamawards-category-tile-image": `url( '${_(_)}' )`,
    ...(_
      ? {
          "--steamawards-category-color": _,
        }
      : {}),
    ...(_
      ? {
          "--steamawards-category-edge-color": _,
        }
      : {}),
  };
}
var _ = {
  2023: `linear-gradient( to bottom right, #21081F, #843873 )`,
  2024: `linear-gradient( to bottom right, #232341, #67629c )`,
  2025: `linear-gradient( 172deg, #3c7cc7, #00006d ) no-repeat fixed`,
  2026: `linear-gradient( 172deg, #000000, #a70ea4 ) no-repeat fixed`,
};
function _(_) {
  return _[_] ?? _[_];
}
var _ = `#000000`,
  _ = {};
((_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = {
    scrollIntoViewWhenChildFocused: `force`,
    fnScrollIntoViewHandler: (_, _, _) => {
      let _ = _.Element,
        _ = _.Element,
        _ = _?.ownerDocument.defaultView?.innerHeight ?? 0,
        _ = _ ? `smooth` : `auto`;
      return !_ || !_
        ? !1
        : (_.getBoundingClientRect().height > _ * 0.7
            ? _.scrollIntoView({
                behavior: _,
                block: `nearest`,
              })
            : _.scrollIntoView({
                behavior: _,
                block: `center`,
              }),
          !0);
    },
  };
function _(_) {
  let { className: _, bStopOnChild: _, children: _ } = _;
  return (0, _.jsx)(_, {
    className: _,
    focusable: !_,
    noFocusRing: !0,
    ..._,
    children: _,
  });
}
var _ = _.createContext(void 0);
function _() {
  let _ = _.useContext(_);
  if (!_)
    throw Error(`called useSteamAwardsPageContext outside a Steam Awards page`);
  return _;
}
function _() {
  let { nYear: _ } = _();
  return _.useMemo(() => _(_), [_]);
}
function _() {
  let { nYear: _ } = _();
  return _.useMemo(() => _(_), [_]);
}
var _ = (function (_) {
  return (
    (_[(_.k_ENominationsOpen = 0)] = `k_ENominationsOpen`),
    (_[(_.k_EVotingSoon = 1)] = `k_EVotingSoon`),
    (_[(_.k_EVotingOpen = 2)] = `k_EVotingOpen`),
    (_[(_.k_EWinnersUp = 3)] = `k_EWinnersUp`),
    _
  );
})({});
function _(_) {
  return _.bVotingPast
    ? 3
    : _.bVotingOpen
      ? 2
      : _.ePage == _.k_ENominations && _.rtNow < (_.rtNominationsEnd ?? 0)
        ? 0
        : 1;
}
function _() {
  return _(_());
}
var _ = `P0s12fkKEIs-`,
  _ = `C8mhCiDxq4E-`,
  _ = `-cTSKfskpos-`,
  _ = `MvsY4Bq8ols-`,
  _ = `w7LPBEGPUek-`,
  _ = `vq-TV5hiXq4-`,
  _ = `nRkGEBQPS4M-`,
  _ = `DERH3pnJH54-`,
  _ = `fgP1V-Un4bE-`,
  _ = `_3-phieokkrw-`,
  _ = `WR9SXDHNA3I-`,
  _ = `_0H-xu92LdYE-`,
  _ = `ZXN6hW5Lex4-`,
  _ = `i5XsEuAlH74-`,
  _ = `rvjDHeEWlFw-`,
  _ = `nq--NajqR5k-`,
  _ = `sfaGOzADuEE-`,
  _ = `yXUQEGf5aLU-`,
  _ = `HTGoPvAVSu8-`,
  _ = `_2bRaIO4Dr5I-`,
  _ = `eXSLihqVjsc-`,
  _ = `t5gAHQUQp5U-`,
  _ = `VF0DbHx9IwU-`,
  _ = `cTrfTcLDpyc-`,
  _ = `HqRU6u9LWTQ-`,
  _ = `s9PbYRake-M-`,
  _ = `Cew-GjII8WA-`,
  _ = `WwSX9zRNtRc-`,
  _ = `_04YnfX662G4-`,
  _ = `HkMLGz3ygk4-`,
  _ = `yMTtqxdIyFc-`,
  _ = `CHImQyHvMqI-`,
  _ = `_7EmD5ERShQY-`,
  _ = `uGz-NI-yWYM-`,
  _ = `Hg-G348CGK4-`,
  _ = `kKJRutf6pAo-`,
  _ = `aDUTPugkFKA-`,
  _ = `rSEHbCmQM2s-`,
  _ = `zqxaOp1Cf8M-`,
  _ = `_9iMpysg-y-U-`,
  _ = `Si-WB2hTsUg-`,
  _ = `j4D0eyIssv0-`,
  _ = `NXpiudX-rHs-`,
  _ = `py5WPGHorzU-`,
  _ = `_5Xvduj3m2hE-`,
  _ = `eQFJYRX9evc-`,
  _ = `MxGu-7fjHRM-`,
  _ = `TlMOXukhCLo-`,
  _ = `nFEH7lJaYTU-`,
  _ = `r4VTHrw5rtA-`,
  _ = `zUohhAMbsyY-`,
  _ = `WmRawSTgG5g-`,
  _ = `Jl9fHos2os0-`,
  _ = `zAvBkrs70rU-`,
  _ = `D3j6-kiJqSo-`,
  _ = `IgyL5pMhvd0-`,
  _ = `_1w80LoAnrTY-`,
  _ = `hHmU9jolOs4-`,
  _ = `nzURQiyrmr0-`,
  _ = `_1T1sy-QTLnU-`,
  _ = `bjQMAyyAavw-`;
function _() {
  let { nYear: _ } = _();
  switch (_) {
    case 2023:
    case 2024:
    case 2025:
      return (0, _.jsx)(_, {});
    default:
      return (0, _.jsx)(_, {});
  }
}
function _(_, _) {
  let { nYear: _, rtVoteStart: _, rtVoteEnd: _, rtNominationsEnd: _ } = _,
    _ = {
      weekday: void 0,
      year: void 0,
      month: `short`,
      day: `numeric`,
      hour: `numeric`,
      timeZoneName: `short`,
      timeZone: `America/Los_Angeles`,
    },
    _ = _
      ? _.Localize(`#Steamawards_Voting_Header_VoteSoon_New`, _(_))
      : _.Localize(`#Steamawards_VoteWinter`);
  switch (_) {
    case _.k_ENominationsOpen:
      return {
        strCallout: _.Localize(`#Steamawards_NominateNow_Generic`, _(_, _)),
        rgInfo: [_.Localize(`#Steamawards_LevelUpNow`, _), _],
      };
    case _.k_EVotingSoon:
      return {
        strCallout: _,
        rgInfo: [_.Localize(`#Steamawards_Voting_Header_Dates_New`)],
      };
    case _.k_EVotingOpen:
      return {
        strCallout: _.Localize(`#Steamawards_Voting_Header_VoteNow`),
        rgInfo: [
          _.Localize(`#Steamawards_Voting_Header_Finalists`),
          _.Localize(`#Steamawards_Voting_Header_HowTo`, _(_)),
          _.Localize(`#Steamawards_Voting_Header_Dates_New`),
        ],
      };
    case _.k_EWinnersUp:
      return {
        strCallout: _.Localize(`#Steamawards_Voting_Header_WinnersUp`),
        rgInfo: [_.Localize(`#Steamawards_Voting_Header_Winners`, _)],
      };
  }
}
function _() {
  let _ = _(),
    _ = _(_.sharedNominator?.strSteamID);
  return _.data
    ? (0, _.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, _.jsx)(`img`, {
            alt: _.data?.m_strPlayerName,
            src: _.data?.avatar_url_full,
          }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _.Localize(
              `#Steamawards_FriendsNominations`,
              _.data.m_strPlayerName,
            ),
          }),
        ],
      })
    : null;
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _.sharedNominator,
    { strCallout: _, rgInfo: _ } = _(_, _);
  return (0, _.jsxs)(_, {
    className: _.HeaderOuterCtn,
    children: [
      (0, _.jsx)(`div`, {
        className: _.HeaderCtn,
        style: _,
        children: (0, _.jsxs)(`div`, {
          className: _.HeaderContent,
          children: [
            (0, _.jsx)(`div`, {
              className: _.HeaderTitle,
              children: _.LocalizeReact(
                `#Steamawards_Title_WithYear_NoBreaks`,
                _.nYear,
                (0, _.jsx)(`br`, {}),
              ),
            }),
            (0, _.jsx)(`div`, {
              className: _.Anniversary,
              children: _.Localize(`#Steamawards_10thAnniversary`),
            }),
            (0, _.jsx)(`div`, {
              className: _(_.InfoText, _.Large),
              children: _,
            }),
            _ && (0, _.jsx)(_, {}),
          ],
        }),
      }),
      !_.sharedNominator &&
        (0, _.jsx)(`div`, {
          className: _.CalloutCtn,
          children: _.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                className: _.InfoText,
                children: _,
              },
              _,
            ),
          ),
        }),
    ],
  });
}
function _() {
  let { nYear: _, rtVoteStart: _, rtVoteEnd: _ } = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _;
  switch (_) {
    case _.k_EVotingOpen:
      _ = _.Localize(`#Steamawards_Voting_Header_VoteNow`);
      break;
    case _.k_EWinnersUp:
      _ = _.Localize(`#Steamawards_Voting_Header_WinnersUp`);
      break;
    default:
      _ = _.Localize(`#Steamawards_Voting_Header_VoteSoon_New`, _(_));
  }
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(`div`, {
      className: _(_, _.HeaderCtn),
      style: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _.EventTitle),
              children: _.LocalizeReact(
                `#Steamawards_Title_WithYear`,
                _,
                (0, _.jsx)(`br`, {}),
              ),
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _, _.InfoText, _.Large),
              children: _,
            }),
            _ == _.k_EWinnersUp
              ? (0, _.jsx)(`div`, {
                  className: _(_, _.InfoText),
                  children: _.Localize(`#Steamawards_Voting_Header_Winners`, _),
                })
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _(_, _.InfoText),
                      children: _.Localize(
                        `#Steamawards_Voting_Header_Finalists`,
                      ),
                    }),
                    (0, _.jsx)(`div`, {
                      className: _(_, _.InfoText),
                      children: _.Localize(
                        `#Steamawards_Voting_Header_HowTo`,
                        _(_),
                      ),
                    }),
                    (0, _.jsx)(`div`, {
                      className: _(_, _.InfoText),
                      children: _.Localize(
                        `#Steamawards_Voting_Header_Dates_New`,
                        _(_),
                      ),
                    }),
                  ],
                }),
          ],
        }),
      }),
    }),
  });
}
