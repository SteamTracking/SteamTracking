/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { At as t, Lt as n, kt as r, tt as i } from "./chunk~01cfc309bf.js";
import "./chunk~5214caf193.js";
import {
  $b as a,
  Bu as o,
  Lb as s,
  Qb as c,
  cx as l,
  ux as u,
} from "./main.js";
var d = e(i()),
  f = e(n()),
  p = class e {
    m_mapGenreToStickerResponse = new Map();
    m_eStoryBadgeGranted = 0;
    m_strLocalizedStoryHeader;
    m_strLocalizedStoryHeaderMobile;
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      r(this);
      let e = a(`summerstory`, `application_config`);
      if (e) {
        if (e.story_choices) {
          let t = e.story_choices;
          (t.sort((e, t) => e.time_chosen - t.time_chosen),
            t.forEach((e) => {
              this.m_mapGenreToStickerResponse.set(e.genre, e);
            }));
        }
        (e.badge_granted && (this.m_eStoryBadgeGranted = e.badge_granted),
          e.header && (this.m_strLocalizedStoryHeader = e.header),
          e.header_mobile &&
            (this.m_strLocalizedStoryHeaderMobile = e.header_mobile));
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
    GetClaimForGenre(e) {
      return this.m_mapGenreToStickerResponse.get(e);
    }
    async LoadClaimForGenre(e, t) {
      if (this.m_mapGenreToStickerResponse.has(e) || !u.logged_in) return;
      this.m_mapGenreToStickerResponse.set(e, {});
      let n = null;
      try {
        let r = await d.default.get(
          l.STORE_BASE_URL + `promotion/ajaxhasclaimedgenresticker`,
          { params: { genre: e }, cancelToken: t?.token },
        );
        if (r?.status == 200 && r.data?.success == 1 && r.data?.results) {
          let t = r.data.results;
          this.m_mapGenreToStickerResponse.set(e, t);
          return;
        }
        n = { response: r };
      } catch (e) {
        n = e;
      }
      let r = o(n);
      console.error(`Could not check claim on genre`, e, r.strErrorMsg, r);
    }
    async MakeClaimForGenre(e, t, n) {
      if (!u.logged_in) return 21;
      let r = new FormData();
      (r.append(`genre`, e.toString()),
        r.append(`choice`, t.toString()),
        r.append(`sessionid`, c()));
      let i = null;
      try {
        let a = await d.default.post(
          l.STORE_BASE_URL + `promotion/ajaxclaimstickerforgenre`,
          r,
          { withCredentials: !0, cancelToken: n?.token },
        );
        if (a?.status == 200 && a.data?.success == 1 && a.data?.results) {
          let n = a.data.results,
            r = this.m_mapGenreToStickerResponse.get(e);
          return (
            (r.choice = t),
            (r.sticker_def = n.claimed_sticker_def),
            (r.has_completed_story = n.has_completed_story),
            a.data.success
          );
        }
        i = { response: a };
      } catch (e) {
        i = e;
      }
      let a = o(i);
      return (
        console.error(`Could not make claim on genre`, e, a.strErrorMsg, a),
        i?.data?.success || 2
      );
    }
  };
(s([t], p.prototype, `m_mapGenreToStickerResponse`, void 0),
  s([t], p.prototype, `m_eStoryBadgeGranted`, void 0));
function m() {
  return p.Get().GetStoryBadgeGranted();
}
function h() {
  return p.Get().GetLocalizedStoryHeader();
}
function g() {
  return p.Get().GetLocalizedStoryHeaderMobile();
}
function _() {
  return p.Get().GetAllGenreChoices();
}
function v(e) {
  let t = f.useRef(null);
  return (
    f.useEffect(() => {
      let e = d.default.CancelToken.source();
      return ((t.current = e), () => e.cancel(`useGenreClaim: unmounting`));
    }, []),
    p.Get().LoadClaimForGenre(e, t.current),
    [
      p.Get().GetClaimForGenre(e),
      async (n) => {
        await p.Get().MakeClaimForGenre(e, n, t.current);
      },
    ]
  );
}
var y = 1658760;
function b(e) {
  let [t] = v(e);
  return t?.sticker_def
    ? `${l.MEDIA_CDN_COMMUNITY_URL}images/items/${y}/${t.sticker_def.item_image_small}`
    : null;
}
function x(e) {
  return !e || e >= C.length ? null : C[e];
}
function S() {
  return C.slice(1);
}
var C = [
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
function w() {
  f.useEffect(() => {
    let e = document.createElement(`link`);
    ((e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap`),
      document.head.appendChild(e));
  }, []);
}
export {
  _ as a,
  g as c,
  b as i,
  w as l,
  v as n,
  m as o,
  x as r,
  h as s,
  S as t,
};
