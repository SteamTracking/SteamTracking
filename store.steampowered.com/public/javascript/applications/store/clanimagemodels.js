/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import {
  Iu as r,
  Jx as i,
  Ly as a,
  Ub as o,
  mS as s,
  uS as c,
} from "./main.js";
function l() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
var u = `{STEAM_CLAN_IMAGE}`,
  d = `{STEAM_CLAN_LOC_IMAGE}`,
  f = `{STEAM_APP_IMAGE}`;
function p(e) {
  let t = e.toLowerCase();
  if (t.endsWith(`.jpg`) || t.endsWith(`.jpeg`)) return `image/jpeg`;
  if (t.endsWith(`.png`)) return `image/png`;
  if (t.endsWith(`.gif`)) return `image/gif`;
  if (t.endsWith(`.mp4`)) return `video/mp4`;
  if (t.endsWith(`.webm`)) return `video/webm`;
  if (t.endsWith(`.srt`)) return `text/srt`;
  if (t.endsWith(`.vtt`)) return `text/vtt`;
  if (t.endsWith(`.webp`)) return `image/webp`;
}
function m(e) {
  switch (e) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function h(e) {
  let t = l(),
    n = new Image();
  return (
    (n.onload = () => t.resolve(n)),
    (n.onerror = (e) => {
      (console.error(`LoadImage failed to load the image, details`, e),
        t.resolve(void 0));
    }),
    (n.src = e),
    t.promise
  );
}
function g(e) {
  let t = l(),
    n = document.createElement(`video`);
  return (
    (n.preload = `metadata`),
    n.addEventListener(`loadedmetadata`, () => t.resolve(n)),
    (n.onerror = (e) => {
      (console.error(`LoadVideo failed to load the video, details`, e),
        t.resolve(void 0));
    }),
    (n.src = e),
    t.promise
  );
}
function _(e) {
  return e.startsWith(`image/`);
}
function v(e) {
  return e.startsWith(`video/`);
}
async function y(e, t) {
  if (t) return g(URL.createObjectURL(e));
  {
    let t = l(),
      n = new FileReader();
    ((n.onload = () => t.resolve(n.result ?? void 0)),
      (n.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          n.error,
        ),
          t.resolve(void 0));
      }),
      n.readAsDataURL(e));
    let r = await t.promise;
    return r ? h(r.toString()) : void 0;
  }
}
function b(e) {
  return e
    ? e instanceof HTMLVideoElement
      ? { width: e.videoWidth, height: e.videoHeight }
      : { width: e.width, height: e.height }
    : { width: 0, height: 0 };
}
var x = e(t(), 1);
n();
function S(e, t) {
  return `${e}/${t}`;
}
var C = x.createContext({});
function w() {
  return x.useContext(C);
}
RegExp(`${d.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function T(e, t, n = 0) {
  return E(e, t, n, w());
}
function E(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return D.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = D.GetBaseURL(),
      a = e.substring(d.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = D.GenerateURLFromHashAndExt(o, s);
    if (r?.[S(o, s)] === !1) return c;
    let l = D.GetLocalizedClanImageFileNames(s, t).map(
      (e) => i + o + `/` + e + `?t=` + n,
    );
    return (l.push(c), l);
  }
  return e;
}
var D = {
    GetBaseURL() {
      return `${o.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${o.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(u, this.GetBaseURL())), e.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(e) {
      let t =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          e,
        );
      return t?.groups
        ? [t.groups.filename, parseInt(t.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(e) {
      return (e.file_type == null ? null : m(e.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(e) {
      return e ? e.image_hash + this.GetExtensionString(e) : null;
    },
    GetThumbHashAndExt(e) {
      return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
    },
    GetHashFromHashAndExt(e) {
      let t = e.substring(e.lastIndexOf(`.`));
      return e.substring(0, e.length - t.length);
    },
    GetExtStringFromHashAndExt(e) {
      return e.substring(e.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(e, t) {
      if (t == null) return [];
      let n = this.GetHashFromHashAndExt(e),
        r = this.GetExtStringFromHashAndExt(e),
        i = [n + `/` + c(t) + r];
      return (t == 4 && i.push(n + `/` + s(c(t)) + r), i);
    },
    GenerateURLFromHashAndExt(e, t, n = O.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = O.full, r, i) {
      e instanceof a && (e = e.GetAccountID());
      let o = this.GetBaseURL(),
        l = r != null && r != -1;
      if (n == O.full && !l) return o + e + `/` + t;
      {
        let a = t.substring(t.lastIndexOf(`.`)),
          u = t.substring(0, t.length - a.length);
        return !l || r == 0 || i != `localized_image_group`
          ? o + e + `/` + u + n + a
          : o + e + `/` + u + `/` + s(c(r)) + a;
      }
    },
    GetHashAndExtFromURL(e) {
      let t = this.GetBaseURL();
      return !e?.startsWith(t) ||
        ((e = e.substring(t.length)), e.indexOf(`/`) == -1)
        ? null
        : ((e = e.substring(e.indexOf(`/`) + 1)), e);
    },
    GenerateEditableURLFromHashAndExt(e, t, n) {
      let r =
        o.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return (n && (r += `&lang=` + n), r);
    },
    GetMimeType(e) {
      return p(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(e, t, n) {
      let a = l(),
        o = new Image();
      ((o.crossOrigin = `anonymous`),
        (o.onerror = (t) => {
          let i = { success: 2 };
          (n ||
            ((i.err_msg =
              `Load fail on url ` + e + ` with error: ` + r(t).strErrorMsg),
            console.error(i.err_msg)),
            (i.success = 2),
            a.resolve(i));
        }),
        (o.onload = () => {
          let t = { success: 2 };
          ((t.width = o.width),
            (t.height = o.height),
            !(o.width > 0) || !(o.height > 0)
              ? (i(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + e,
                ),
                (t.err_msg = `No resolution reported for url ` + e),
                a.resolve(t))
              : ((t.success = 1), a.resolve(t)));
        }),
        (o.src = e),
        t.token.promise.catch(() => {
          ((o.onload = () => {}),
            (o.onerror = () => {}),
            a.resolve({ success: 52 }));
        }));
      let s,
        c = new Promise((e, t) => {
          s = setTimeout(() => t(), 1e4);
        }),
        u;
      try {
        u = await Promise.race([c, a.promise]);
      } catch {
        u = { success: 16, err_msg: `We timed out processing images` };
      } finally {
        clearTimeout(s);
      }
      return u;
    },
    BIsClanImageVideo(e) {
      return e.file_type == 4 || e.file_type == 5;
    },
  },
  O = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  k = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ];
export {
  _ as a,
  y as c,
  d,
  u as f,
  T as i,
  b as l,
  k as n,
  v as o,
  D as r,
  m as s,
  O as t,
  f as u,
};
