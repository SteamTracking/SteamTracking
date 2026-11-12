import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import "./chunk~5214caf193.js";
import { _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = class _ {
    m_mapGenreToStickerResponse = new Map();
    m_eStoryBadgeGranted = 0;
    m_strLocalizedStoryHeader;
    m_strLocalizedStoryHeaderMobile;
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
    }
    constructor() {
      _(this);
      let _ = _(`summerstory`, `application_config`);
      if (_) {
        if (_.story_choices) {
          let _ = _.story_choices;
          (_.sort((_, _) => _.time_chosen - _.time_chosen),
            _.forEach((_) => {
              this.m_mapGenreToStickerResponse.set(_.genre, _);
            }));
        }
        (_.badge_granted && (this.m_eStoryBadgeGranted = _.badge_granted),
          _.header && (this.m_strLocalizedStoryHeader = _.header),
          _.header_mobile &&
            (this.m_strLocalizedStoryHeaderMobile = _.header_mobile));
      }
    }
    GetStoryBadgeGranted() {
      return this.m_eStoryBadgeGranted;
    }
    GetLocalizedStoryHeader() {
      return this.m_strLocalizedStoryHeader;
    }
    GetLocalizedStoryHeaderMobile() {
      return this.m_strLocalizedStoryHeaderMobile;
    }
    GetAllGenreChoices() {
      return this.m_mapGenreToStickerResponse;
    }
    GetClaimForGenre(_) {
      return this.m_mapGenreToStickerResponse.get(_);
    }
    async LoadClaimForGenre(_, _) {
      if (this.m_mapGenreToStickerResponse.has(_) || !_.logged_in) return;
      this.m_mapGenreToStickerResponse.set(_, {});
      let _ = null;
      try {
        let _ = await _.default.get(
          _.STORE_BASE_URL + `promotion/ajaxhasclaimedgenresticker`,
          {
            params: {
              genre: _,
            },
            cancelToken: _?.token,
          },
        );
        if (_?.status == 200 && _.data?.success == 1 && _.data?.results) {
          let _ = _.data.results;
          this.m_mapGenreToStickerResponse.set(_, _);
          return;
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      console.error(`Could not check claim on genre`, _, _.strErrorMsg, _);
    }
    async MakeClaimForGenre(_, _, _) {
      if (!_.logged_in) return 21;
      let _ = new FormData();
      (_.append(`genre`, _.toString()),
        _.append(`choice`, _.toString()),
        _.append(`sessionid`, _()));
      let _ = null;
      try {
        let _ = await _.default.post(
          _.STORE_BASE_URL + `promotion/ajaxclaimstickerforgenre`,
          _,
          {
            withCredentials: !0,
            cancelToken: _?.token,
          },
        );
        if (_?.status == 200 && _.data?.success == 1 && _.data?.results) {
          let _ = _.data.results,
            _ = this.m_mapGenreToStickerResponse.get(_);
          return (
            (_.choice = _),
            (_.sticker_def = _.claimed_sticker_def),
            (_.has_completed_story = _.has_completed_story),
            _.data.success
          );
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not make claim on genre`, _, _.strErrorMsg, _),
        _?.data?.success || 2
      );
    }
  };
(_([_], _.prototype, `m_mapGenreToStickerResponse`, void 0),
  _([_], _.prototype, `m_eStoryBadgeGranted`, void 0));
function _() {
  return _.Get().GetStoryBadgeGranted();
}
function _() {
  return _.Get().GetLocalizedStoryHeader();
}
function _() {
  return _.Get().GetLocalizedStoryHeaderMobile();
}
function _() {
  return _.Get().GetAllGenreChoices();
}
function _(_) {
  let _ = _.useRef(null);
  return (
    _.useEffect(() => {
      let _ = _.default.CancelToken.source();
      return ((_.current = _), () => _.cancel(`useGenreClaim: unmounting`));
    }, []),
    _.Get().LoadClaimForGenre(_, _.current),
    [
      _.Get().GetClaimForGenre(_),
      async (_) => {
        await _.Get().MakeClaimForGenre(_, _, _.current);
      },
    ]
  );
}
var _ = 1658760;
function _(_) {
  let [_] = _(_);
  return _?.sticker_def
    ? `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.sticker_def.item_image_small}`
    : null;
}
function _(_) {
  return !_ || _ >= _.length ? null : _[_];
}
function _() {
  return _.slice(1);
}
var _ = [
  null,
  {
    eGenre: 1,
    strPageTitle: `#Summer21_Story_Action_Title`,
    strPageNumber: `#Summer21_Story_Action_Pg`,
    strPageText: `#Summer21_Story_Action_Intro`,
    strOptionA: `#Summer21_Story_Action_Choice1`,
    strPageNumberA: `#Summer21_Story_Action_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Action_Outcome1`,
    strOptionB: `#Summer21_Story_Action_Choice2`,
    strPageNumberB: `#Summer21_Story_Action_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Action_Outcome2`,
    strSalePage: `summer2021_action`,
    strBackgroundColor: `#c5483f`,
    strGenreName: `#Summer21_Story_Action_Genre`,
  },
  {
    eGenre: 2,
    strPageTitle: `#Summer21_Story_Adventure_Title`,
    strPageNumber: `#Summer21_Story_Adventure_Pg`,
    strPageText: `#Summer21_Story_Adventure_Intro`,
    strOptionA: `#Summer21_Story_Adventure_Choice1`,
    strPageNumberA: `#Summer21_Story_Adventure_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Adventure_Outcome1`,
    strOptionB: `#Summer21_Story_Adventure_Choice2`,
    strPageNumberB: `#Summer21_Story_Adventure_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Adventure_Outcome2`,
    strSalePage: `summer2021_adventure_casual`,
    strBackgroundColor: `#657F5B`,
    strGenreName: `#Summer21_Story_Adventure_Genre`,
  },
  {
    eGenre: 3,
    strPageTitle: `#Summer21_Story_RPG_Title`,
    strPageNumber: `#Summer21_Story_RPG_Pg`,
    strPageText: `#Summer21_Story_RPG_Intro`,
    strOptionA: `#Summer21_Story_RPG_Choice1`,
    strPageNumberA: `#Summer21_Story_RPG_Outcome1_Pg`,
    strResultA: `#Summer21_Story_RPG_Outcome1`,
    strOptionB: `#Summer21_Story_RPG_Choice2`,
    strPageNumberB: `#Summer21_Story_RPG_Outcome2_Pg`,
    strResultB: `#Summer21_Story_RPG_Outcome2`,
    strSalePage: `summer2021_rpg`,
    strBackgroundColor: `#bf673b`,
    strGenreName: `#Summer21_Story_RPG_Genre`,
  },
  {
    eGenre: 4,
    strPageTitle: `#Summer21_Story_Strategy_Title`,
    strPageNumber: `#Summer21_Story_Strategy_Pg`,
    strPageText: `#Summer21_Story_Strategy_Intro`,
    strOptionA: `#Summer21_Story_Strategy_Choice1`,
    strPageNumberA: `#Summer21_Story_Strategy_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Strategy_Outcome1`,
    strOptionB: `#Summer21_Story_Strategy_Choice2`,
    strPageNumberB: `#Summer21_Story_Strategy_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Strategy_Outcome2`,
    strSalePage: `summer2021_strategy`,
    strBackgroundColor: `#E3B343`,
    strGenreName: `#Summer21_Story_Strategy_Genre`,
  },
  {
    eGenre: 5,
    strPageTitle: `#Summer21_Story_Sim_Title`,
    strPageNumber: `#Summer21_Story_Sim_Pg`,
    strPageText: `#Summer21_Story_Sim_Intro`,
    strOptionA: `#Summer21_Story_Sim_Choice1`,
    strPageNumberA: `#Summer21_Story_Sim_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Sim_Outcome1`,
    strOptionB: `#Summer21_Story_Sim_Choice2`,
    strPageNumberB: `#Summer21_Story_Sim_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Sim_Outcome2`,
    strSalePage: `summer2021_simulation`,
    strBackgroundColor: `#437882`,
    strGenreName: `#Summer21_Story_Sim_Genre`,
  },
  {
    eGenre: 6,
    strPageTitle: `#Summer21_Story_Sports_Title`,
    strPageNumber: `#Summer21_Story_Sports_Pg`,
    strPageText: `#Summer21_Story_Sports_Intro`,
    strOptionA: `#Summer21_Story_Sports_Choice1`,
    strPageNumberA: `#Summer21_Story_Sports_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Sports_Outcome1`,
    strOptionB: `#Summer21_Story_Sports_Choice2`,
    strPageNumberB: `#Summer21_Story_Sports_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Sports_Outcome2`,
    strSalePage: `summer2021_sports_racing`,
    strBackgroundColor: `#E3B343`,
    strGenreName: `#Summer21_Story_Sports_Genre`,
  },
  {
    eGenre: 7,
    strPageTitle: `#Summer21_Story_Horror_Title`,
    strPageNumber: `#Summer21_Story_Horror_Pg`,
    strPageText: `#Summer21_Story_Horror_Intro`,
    strOptionA: `#Summer21_Story_Horror_Choice1`,
    strPageNumberA: `#Summer21_Story_Horror_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Horror_Outcome1`,
    strOptionB: `#Summer21_Story_Horror_Choice2`,
    strPageNumberB: `#Summer21_Story_Horror_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Horror_Outcome2`,
    strSalePage: `summer2021_horror`,
    strBackgroundColor: `#657F5B`,
    strGenreName: `#Summer21_Story_Horror_Genre`,
  },
  {
    eGenre: 8,
    strPageTitle: `#Summer21_Story_Survival_Title`,
    strPageNumber: `#Summer21_Story_Survival_Pg`,
    strPageText: `#Summer21_Story_Survival_Intro`,
    strOptionA: `#Summer21_Story_Survival_Choice1`,
    strPageNumberA: `#Summer21_Story_Survival_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Survival_Outcome1`,
    strOptionB: `#Summer21_Story_Survival_Choice2`,
    strPageNumberB: `#Summer21_Story_Survival_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Survival_Outcome2`,
    strSalePage: `summer2021_survival`,
    strBackgroundColor: `#bf673b`,
    strGenreName: `#Summer21_Story_Survival_Genre`,
  },
  {
    eGenre: 9,
    strPageTitle: `#Summer21_Story_Open_Title`,
    strPageNumber: `#Summer21_Story_Open_Pg`,
    strPageText: `#Summer21_Story_Open_Intro`,
    strOptionA: `#Summer21_Story_Open_Choice1`,
    strPageNumberA: `#Summer21_Story_Open_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Open_Outcome1`,
    strOptionB: `#Summer21_Story_Open_Choice2`,
    strPageNumberB: `#Summer21_Story_Open_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Open_Outcome2`,
    strSalePage: `summer2021_open_world`,
    strBackgroundColor: `#657F5B`,
    strGenreName: `#Summer21_Story_Open_Genre`,
  },
  {
    eGenre: 10,
    strPageTitle: `#Summer21_Story_SciFi_Title`,
    strPageNumber: `#Summer21_Story_SciFi_Pg`,
    strPageText: `#Summer21_Story_SciFi_Intro`,
    strOptionA: `#Summer21_Story_SciFi_Choice1`,
    strPageNumberA: `#Summer21_Story_SciFi_Outcome1_Pg`,
    strResultA: `#Summer21_Story_SciFi_Outcome1`,
    strOptionB: `#Summer21_Story_SciFi_Choice2`,
    strPageNumberB: `#Summer21_Story_SciFi_Outcome2_Pg`,
    strResultB: `#Summer21_Story_SciFi_Outcome2`,
    strSalePage: `summer2021_scifi`,
    strBackgroundColor: `#986280`,
    strGenreName: `#Summer21_Story_SciFi_Genre`,
  },
  {
    eGenre: 11,
    strPageTitle: `#Summer21_Story_Mystery_Title`,
    strPageNumber: `#Summer21_Story_Mystery_Pg`,
    strPageText: `#Summer21_Story_Mystery_Intro`,
    strOptionA: `#Summer21_Story_Mystery_Choice1`,
    strPageNumberA: `#Summer21_Story_Mystery_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Mystery_Outcome1`,
    strOptionB: `#Summer21_Story_Mystery_Choice2`,
    strPageNumberB: `#Summer21_Story_Mystery_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Mystery_Outcome2`,
    strSalePage: `summer2021_mystery`,
    strBackgroundColor: `#B24939`,
    strGenreName: `#Summer21_Story_Mystery_Genre`,
  },
  {
    eGenre: 12,
    strPageTitle: `#Summer21_Story_Space_Title`,
    strPageNumber: `#Summer21_Story_Space_Pg`,
    strPageText: `#Summer21_Story_Space_Intro`,
    strOptionA: `#Summer21_Story_Space_Choice1`,
    strPageNumberA: `#Summer21_Story_Space_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Space_Outcome1`,
    strOptionB: `#Summer21_Story_Space_Choice2`,
    strPageNumberB: `#Summer21_Story_Space_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Space_Outcome2`,
    strSalePage: `summer2021_space`,
    strBackgroundColor: `#437882`,
    strGenreName: `#Summer21_Story_Space_Genre`,
  },
  {
    eGenre: 13,
    strPageTitle: `#Summer21_Story_Roguelike_Title`,
    strPageNumber: `#Summer21_Story_Roguelike_Pg`,
    strPageText: `#Summer21_Story_Roguelike_Intro`,
    strOptionA: `#Summer21_Story_Roguelike_Choice1`,
    strPageNumberA: `#Summer21_Story_Roguelike_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Roguelike_Outcome1`,
    strOptionB: `#Summer21_Story_Roguelike_Choice2`,
    strPageNumberB: `#Summer21_Story_Roguelike_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Roguelike_Outcome2`,
    strSalePage: `summer2021_roguelike`,
    strBackgroundColor: `#B24939`,
    strGenreName: `#Summer21_Story_Roguelike_Genre`,
  },
  {
    eGenre: 14,
    strPageTitle: `#Summer21_Story_Anime_Title`,
    strPageNumber: `#Summer21_Story_Anime_Pg`,
    strPageText: `#Summer21_Story_Anime_Intro`,
    strOptionA: `#Summer21_Story_Anime_Choice1`,
    strPageNumberA: `#Summer21_Story_Anime_Outcome1_Pg`,
    strResultA: `#Summer21_Story_Anime_Outcome1`,
    strOptionB: `#Summer21_Story_Anime_Choice2`,
    strPageNumberB: `#Summer21_Story_Anime_Outcome2_Pg`,
    strResultB: `#Summer21_Story_Anime_Outcome2`,
    strSalePage: `summer2021_anime`,
    strBackgroundColor: `#986280`,
    strGenreName: `#Summer21_Story_Anime_Genre`,
  },
];
function _() {
  _.useEffect(() => {
    let _ = document.createElement(`link`);
    ((_.rel = `stylesheet`),
      (_.href = `https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap`),
      document.head.appendChild(_));
  }, []);
}
