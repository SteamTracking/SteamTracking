(() => {
  (self.webpackChunksiteserverui = self.webpackChunksiteserverui || []).push([
    [8792],
    {
      6400: (an, li, T) => {
        "use strict";
        var m = T(7850),
          In = T(4844);
        function Dr(r, e, ...t) {
          console.assert
            ? t.length == 0
              ? console.assert(!!r, e)
              : console.assert(!!r, e, ...t)
            : r || console.warn(e, ...t);
        }
        function ui(r, e, ...t) {
          if (
            (console.assert
              ? t.length == 0
                ? console.assert(!!r, e)
                : console.assert(!!r, e, ...t)
              : r || console.warn(e, ...t),
            !r)
          )
            throw e;
        }
        function di(r, e, ...t) {
          Dr(!1, e, ...t);
        }
        var F = T(626),
          Xr = T(3288);
        const Tn = 1,
          Ss = 2,
          ug = 3,
          ba = 5,
          dg = 6,
          mg = 7,
          gg = 8,
          fg = 9,
          bg = 10,
          hg = 11,
          Mg = 12,
          pg = 13,
          kg = 14,
          yg = 15,
          Eg = 16,
          wg = 17,
          Bg = 18,
          Tg = 19,
          vg = 20,
          ic = 21,
          Fg = 22,
          zg = 23,
          Rg = 24,
          Og = 25,
          Sg = 26,
          Ag = 27,
          Wg = 28,
          Lg = 29,
          jg = 30,
          xg = 31,
          Ug = 32,
          Pg = 33,
          Ng = 34,
          Gg = 35,
          Dg = 36,
          Vg = 37,
          Ig = 38,
          Hg = 39,
          Kg = 40,
          Yg = 41,
          $g = 42,
          _g = 43,
          Xg = 44,
          Qg = 45,
          Jg = 46,
          Cg = 47,
          Zg = 48,
          qg = 49,
          ef = 50,
          tf = 51,
          rf = 52,
          nf = 53,
          sf = 54,
          af = 55,
          of = 56,
          cf = 57,
          lf = 58,
          uf = 59,
          df = 60,
          mf = 61,
          gf = 62,
          ac = 63,
          ff = 64,
          bf = 65,
          hf = 66,
          Mf = 67,
          pf = 68,
          kf = 69,
          yf = 70,
          Ef = 71,
          wf = 72,
          Bf = 73,
          Tf = 74,
          vf = 75,
          Ff = 76,
          zf = 77,
          Rf = 78,
          Of = 79,
          Sf = 80,
          Af = 81,
          Wf = 82,
          Lf = 83,
          jf = 84,
          As = 85,
          xf = 86,
          Uf = 87,
          oc = 88,
          Pf = 89,
          Nf = 90,
          Gf = 91,
          Df = 92,
          Vf = 93,
          If = 94,
          Hf = 95,
          Kf = 96,
          Yf = 97,
          $f = 98,
          _f = 99,
          Xf = 100,
          Qf = 101,
          Jf = 102,
          Cf = 103,
          Zf = 104,
          qf = 105,
          eb = 106,
          tb = 107,
          rb = 108,
          nb = 109,
          sb = 110,
          ib = 111,
          ab = 112,
          ob = 113,
          cb = 114,
          lb = 115,
          ub = 116,
          db = 117,
          mb = 118,
          gb = 119,
          fb = 120,
          bb = 121,
          hb = 122,
          Mb = 123,
          pb = 124,
          kb = 125,
          yb = 126,
          Eb = 127,
          wb = 128,
          Bb = 129,
          Tb = 130;
        function ha(...r) {
          return r.reduce(
            (e, t) =>
              t
                ? typeof t == "string"
                  ? e
                    ? `${e} ${t}`
                    : t
                  : typeof t == "object"
                    ? e
                      ? `${e} ${Ma(t)}`
                      : Ma(t)
                    : e
                : e,
            "",
          );
        }
        function Ma(r) {
          return Object.keys(r).reduce(
            (e, t) => (r[t] ? (e ? `${e} ${t}` : t) : e),
            "",
          );
        }
        var cc = T(978),
          W = T.n(cc);
        const lc =
            T.p + "images/steam_spinner.png?v=8669e97b288da32670e77181618c3dfb",
          uc = 1,
          vb = 2,
          dc = 3,
          mc = 4,
          Fb = 5,
          zb = 6,
          qr = {
            EUNIVERSE: 0,
            LANGUAGE: "english",
            SUPPORTED_LANGUAGES: [],
            COUNTRY: "",
            AVATAR_BASE_URL: "",
            MEDIA_CDN_COMMUNITY_URL: "",
            MEDIA_CDN_URL: "",
            CLAN_CDN_ASSET_URL: "",
            VIDEO_CDN_URL: "",
            COMMUNITY_CDN_URL: "",
            COMMUNITY_CDN_ASSET_URL: "",
            BASE_URL_SHARED_CDN: "",
            STORE_CDN_URL: "",
            PUBLIC_SHARED_URL: "",
            COMMUNITY_BASE_URL: "",
            CHAT_BASE_URL: "",
            STORE_BASE_URL: "",
            STORE_CHECKOUT_BASE_URL: "",
            LOGIN_BASE_URL: "",
            SUPPORT_BASE_URL: "",
            STORE_ITEM_BASE_URL: "",
            IMG_URL: "",
            STEAMTV_BASE_URL: "",
            HELP_BASE_URL: "",
            PARTNER_BASE_URL: "",
            STATS_BASE_URL: "",
            INTERNAL_STATS_BASE_URL: "",
            IN_CLIENT: !1,
            IN_MOBILE: !1,
            IN_MOBILE_WEBVIEW: !1,
            PLATFORM: "",
            SNR: "",
            EREALM: 0,
            WEBAPI_BASE_URL: "",
            TOKEN_URL: "",
            BUILD_TIMESTAMP: 0,
            PAGE_TIMESTAMP: 0,
            FROM_WEB: !1,
            WEBSITE_ID: "Unknown",
            IN_STEAMUI: !1,
            NOW: 0,
          },
          pa = {
            logged_in: !1,
            steamid: "",
            accountid: 0,
            account_name: "",
            token: void 0,
            token_use_id: void 0,
            webapi_token: "",
            authwgtoken: "",
            is_support: !1,
            is_limited: !1,
            is_partner_member: !1,
            is_valve_email: !1,
            short_url: "",
            country_code: "",
            excluded_content_descriptors: [dc, mc, uc],
          },
          Rb = { steamid: "", clanid: 0, listid: 0 },
          Ob = {
            CLANSTEAMID: "",
            CLANACCOUNTID: 0,
            APPID: 0,
            VANITY_ID: "",
            IS_CREATOR_HOME: !1,
            IS_CURATOR: !1,
            IS_OGG: !1,
            CAN_UPLOAD_IMAGES: !1,
            IS_VALVE_GROUP: !1,
            IS_ALLOWED_SC: !1,
          },
          Sb = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" },
          mi = "webui_config";
        function Ab(r, e = mi) {
          return ka(r, e, !0);
        }
        function Wb(r, e = mi) {
          return ka(r, e, !1);
        }
        function ka(r, e = mi, t) {
          let n;
          if (
            (typeof e == "string"
              ? (n = { NODE_ENV: "production", STEAM_BUILD: "buildbot" }
                  .MOBILE_BUILD
                  ? null
                  : document.getElementById(e))
              : (n = e),
            n)
          )
            try {
              return n.hasAttribute("data-" + r)
                ? JSON.parse(n.getAttribute("data-" + r))
                : null;
            } catch (a) {
              console.error(
                "Failed to parse config for " +
                  UserConfig.steamid +
                  " (" +
                  window.location.href +
                  ")",
                a,
              );
            }
          else t && console.error("Missing config element #", e);
        }
        let gi;
        function Lb() {
          if (!BCanAccessCookies()) return (gi || (gi = ya()), gi);
          let r = GetCookie("sessionid");
          return (r || (r = ya()), r);
        }
        function gc() {
          let r = "";
          for (let e = 0; e < 24; e++) r += RandomInt(0, 35).toString(36);
          return r;
        }
        function ya() {
          const r = gc();
          return (SetCookie("sessionid", r, 0), r);
        }
        function jb(r = CONFIG_ELEMENT_ID) {
          const e = {},
            t = GetConfigJSON("config", r);
          t && (Object.assign(Config, t), (e.config = !0));
          const n = GetConfigJSON("userinfo", r);
          n &&
            (Object.assign(UserConfig, n),
            (e.userConfig = !0),
            UserConfig.is_support && Mc() && (UserConfig.is_support = !1));
          const a = GetConfigJSON("broadcast", r);
          a && (Object.assign(BroadcastConfig, a), (e.broadcastConfig = !0));
          const o = GetConfigJSON("community", r);
          o && (Object.assign(CommunityConfig, o), (e.communityConfig = !0));
          const l = GetConfigJSON("event", r);
          return (
            l && (Object.assign(EventConfig, l), (e.eventConfig = !0)),
            (Ws = !0),
            fi.forEach((u) => u()),
            e
          );
        }
        let fi = new Set(),
          Ws = !1;
        function fc() {
          return Ws
            ? Promise.resolve()
            : new Promise((r) => {
                fi.add(r);
              });
        }
        function bc() {
          Ws || ((Ws = !0), fi.forEach((r) => r()));
        }
        const hc = "presentation_mode";
        function Mc() {
          let r = null;
          return (
            BCanAccessCookies() && (r = GetCookie(hc)),
            !!(r && Number.parseInt(r) === 1)
          );
        }
        const xb = 1,
          Ub = 2,
          pc = 3,
          Pb = 4,
          Nb = 100,
          Gb = 101,
          Db = 102,
          Vb = 103,
          Ib = 104,
          Hb = 0,
          Kb = 1,
          Yb = 2,
          $b = 3,
          _b = 4,
          Xb = 5,
          Qb = 6,
          Jb = 7,
          Cb = 8,
          Zb = 9,
          qb = 10,
          eh = 11,
          th = 12,
          rh = 13,
          nh = 14,
          sh = 15,
          ih = 16,
          ah = 17,
          oh = 18,
          ch = 19,
          lh = 20,
          uh = 21,
          dh = 22,
          mh = 23,
          gh = 24,
          fh = 25,
          bh = 26,
          hh = 27,
          Mh = 28,
          ph = 29,
          kh = 30,
          yh = 31,
          Eh = 32,
          wh = 33,
          Bh = 34,
          Th = 35,
          vh = 36,
          Fh = 37,
          zh = 38,
          Rh = 39,
          Oh = 40,
          Sh = 41,
          Ah = 42,
          Wh = 43,
          Lh = 44,
          jh = 45,
          xh = 46,
          Uh = 47,
          Ph = 48,
          Nh = 49,
          Gh = 50,
          Dh = 51,
          Vh = 52,
          Ih = 53,
          Hh = 54,
          Kh = 55,
          Yh = 56,
          $h = 57,
          _h = 58,
          Xh = 0,
          Qh = 1,
          Jh = 2,
          Ch = 0,
          Zh = 1,
          qh = 2,
          eM = 3,
          tM = 4,
          rM = 0,
          nM = 1,
          sM = 2,
          iM = 3,
          aM = 4,
          oM = 5,
          cM = 6,
          lM = 7,
          uM = 8,
          dM = null,
          mM = 0,
          gM = 1,
          fM = 2,
          bM = 3,
          hM = 4,
          MM = 5,
          pM = 6,
          kM = 7,
          yM = 8,
          EM = 9,
          wM = 10,
          BM = 11,
          TM = 12,
          vM = 13,
          FM = 14,
          zM = 15,
          RM = 16,
          OM = 0,
          SM = 17;
        var kc = ((r) => (
            (r[(r.kPFIFlag_MicroTransactionFile = 1)] =
              "kPFIFlag_MicroTransactionFile"),
            (r[(r.kPFIFlag_Incompatible = 2)] = "kPFIFlag_Incompatible"),
            (r[(r.kPFIFlag_RevenueSplitsFinalized = 4)] =
              "kPFIFlag_RevenueSplitsFinalized"),
            (r[(r.kPFIFlag_AcceptedForUse = 8)] = "kPFIFlag_AcceptedForUse"),
            (r[(r.kPFIFlag_CollectionShowSubscribeAll = 16)] =
              "kPFIFlag_CollectionShowSubscribeAll"),
            (r[(r.kPFIFlag_ItemInProgress = 32)] = "kPFIFlag_ItemInProgress"),
            (r[(r.kPFIFlag_GamePlayable = 64)] = "kPFIFlag_GamePlayable"),
            (r[(r.kPFIFlag_AwaitingModeration = 128)] =
              "kPFIFlag_AwaitingModeration"),
            (r[(r.kPFIFlag_PendingApproval = 256)] =
              "kPFIFlag_PendingApproval"),
            (r[(r.kPFIFlag_FixedStats = 1536)] = "kPFIFlag_FixedStats"),
            (r[(r.kPFIFlag_LatestWorkshopTermsNotAccepted = 2048)] =
              "kPFIFlag_LatestWorkshopTermsNotAccepted"),
            (r[(r.kPFIFlag_DepotContent = 4096)] = "kPFIFlag_DepotContent"),
            (r[(r.kPFIFlag_CollectionAllOwnerItems = 8192)] =
              "kPFIFlag_CollectionAllOwnerItems"),
            (r[(r.kPFIFlag_CollectionIsASet = 16384)] =
              "kPFIFlag_CollectionIsASet"),
            (r[(r.kPFIFlag_Subscribable = 32768)] = "kPFIFlag_Subscribable"),
            (r[(r.kPFIFlag_ForceUnbanned = 65536)] = "kPFIFlag_ForceUnbanned"),
            (r[(r.kPFIFlag_ForceInappropriate = 131072)] =
              "kPFIFlag_ForceInappropriate"),
            (r[(r.kPFIFlag_ForceAppropriate = 262144)] =
              "kPFIFlag_ForceAppropriate"),
            (r[(r.kPFIFlag_RequireVerification = 524288)] =
              "kPFIFlag_RequireVerification"),
            (r[(r.kPFIFlag_HasApprovedSteamChinaContent = 1048576)] =
              "kPFIFlag_HasApprovedSteamChinaContent"),
            (r[(r.kPFIFlag_HasApprovedContent = 2097152)] =
              "kPFIFlag_HasApprovedContent"),
            (r[(r.kPFIFlag_IgnoreTextContentCheckFlag = 4194304)] =
              "kPFIFlag_IgnoreTextContentCheckFlag"),
            (r[(r.kPFIFlag_DisableComments = 8388608)] =
              "kPFIFlag_DisableComments"),
            (r[(r.kPFIFlag_NeedsContentCheck = 16777216)] =
              "kPFIFlag_NeedsContentCheck"),
            (r[(r.kPFIFlag_SteamChinaCreated = 33554432)] =
              "kPFIFlag_SteamChinaCreated"),
            (r[(r.kPFIFlag_RejectedLatestContent = 67108864)] =
              "kPFIFlag_RejectedLatestContent"),
            (r[(r.kPFIFlag_ManagedContentDescriptors = 134217728)] =
              "kPFIFlag_ManagedContentDescriptors"),
            (r[(r.kPFIFlag_HasAuthorSnapshots = 268435456)] =
              "kPFIFlag_HasAuthorSnapshots"),
            r
          ))(kc || {}),
          yc = ((r) => (
            (r[(r.k_EPFSplitType_MicrotransactionItem = 0)] =
              "k_EPFSplitType_MicrotransactionItem"),
            (r[(r.k_EPFSplitType_WorkshopItem = 1)] =
              "k_EPFSplitType_WorkshopItem"),
            (r[(r.k_EPFSplitType_GreenlightItem = 2)] =
              "k_EPFSplitType_GreenlightItem"),
            (r[(r.k_EPFSplitType_SharedFile = 3)] =
              "k_EPFSplitType_SharedFile"),
            r
          ))(yc || {}),
          Ec = ((r) => (
            (r[(r.k_EPFAuditAction_Banned = 1)] = "k_EPFAuditAction_Banned"),
            (r[(r.k_EPFAuditAction_UnBanned = 2)] =
              "k_EPFAuditAction_UnBanned"),
            (r[(r.k_EPFAuditAction_AddedIncompatibleFlag = 3)] =
              "k_EPFAuditAction_AddedIncompatibleFlag"),
            (r[(r.k_EPFAuditAction_RemovedIncompatibleFlag = 4)] =
              "k_EPFAuditAction_RemovedIncompatibleFlag"),
            (r[(r.k_EPFAuditAction_AddedForceInappropriateFlag = 5)] =
              "k_EPFAuditAction_AddedForceInappropriateFlag"),
            (r[(r.k_EPFAuditAction_RemovedForceInappropriateFlag = 6)] =
              "k_EPFAuditAction_RemovedForceInappropriateFlag"),
            (r[(r.k_EPFAuditAction_AddedForceAppropriateFlag = 7)] =
              "k_EPFAuditAction_AddedForceAppropriateFlag"),
            (r[(r.k_EPFAuditAction_RemovedForceAppropriateFlag = 8)] =
              "k_EPFAuditAction_RemovedForceAppropriateFlag"),
            (r[(r.k_EPFAuditAction_AddedAcceptedForUseFlag = 9)] =
              "k_EPFAuditAction_AddedAcceptedForUseFlag"),
            (r[(r.k_EPFAuditAction_RemovedAcceptedForUseFlag = 10)] =
              "k_EPFAuditAction_RemovedAcceptedForUseFlag"),
            (r[(r.k_EPFAuditAction_ClearedReports = 11)] =
              "k_EPFAuditAction_ClearedReports"),
            (r[(r.k_EPFAuditAction_RequireVerification = 12)] =
              "k_EPFAuditAction_RequireVerification"),
            (r[(r.k_EPFAuditAction_ResendVerificationEmail = 13)] =
              "k_EPFAuditAction_ResendVerificationEmail"),
            (r[(r.k_EPFAuditAction_SubmissionVerified = 14)] =
              "k_EPFAuditAction_SubmissionVerified"),
            (r[(r.k_EPFAuditAction_ApprovedByModerator = 15)] =
              "k_EPFAuditAction_ApprovedByModerator"),
            (r[(r.k_EPFAuditAction_RejectedByModerator = 16)] =
              "k_EPFAuditAction_RejectedByModerator"),
            (r[(r.k_EPFAuditAction_ApprovedForSteamChina = 17)] =
              "k_EPFAuditAction_ApprovedForSteamChina"),
            (r[(r.k_EPFAuditAction_RejectedForSteamChina = 18)] =
              "k_EPFAuditAction_RejectedForSteamChina"),
            (r[(r.k_EPFAuditAction_AddedIgnoreTextContentCheckFlag = 19)] =
              "k_EPFAuditAction_AddedIgnoreTextContentCheckFlag"),
            (r[(r.k_EPFAuditAction_RemovedIgnoreTextContentCheckFlag = 20)] =
              "k_EPFAuditAction_RemovedIgnoreTextContentCheckFlag"),
            (r[(r.k_EPFAuditAction_VoteBannedUsers = 21)] =
              "k_EPFAuditAction_VoteBannedUsers"),
            (r[(r.k_EPFAuditAction_ClearedVoteBannedUsers = 22)] =
              "k_EPFAuditAction_ClearedVoteBannedUsers"),
            (r[(r.k_EPFAuditAction_Deleted = 23)] = "k_EPFAuditAction_Deleted"),
            (r[(r.k_EPFAuditAction_PermanentlyDeleted = 24)] =
              "k_EPFAuditAction_PermanentlyDeleted"),
            (r[(r.k_EPFAuditAction_AddedContentDescriptor = 25)] =
              "k_EPFAuditAction_AddedContentDescriptor"),
            (r[(r.k_EPFAuditAction_RemovedContentDescriptor = 26)] =
              "k_EPFAuditAction_RemovedContentDescriptor"),
            (r[(r.k_EPFAuditAction_AddedRestrictedCountry = 27)] =
              "k_EPFAuditAction_AddedRestrictedCountry"),
            (r[(r.k_EPFAuditAction_RemovedRestrictedCountry = 28)] =
              "k_EPFAuditAction_RemovedRestrictedCountry"),
            (r[(r.k_EPFAuditAction_TransferredOwnership = 29)] =
              "k_EPFAuditAction_TransferredOwnership"),
            r
          ))(Ec || {});
        const AM = 0,
          WM = 1,
          LM = 2,
          jM = 3,
          xM = 4,
          UM = 5,
          PM = 255,
          NM = 0,
          GM = 1,
          DM = 2,
          VM = 0,
          IM = 1,
          HM = 2,
          KM = 0,
          YM = 1,
          $M = 2,
          _M = 3,
          XM = 4,
          QM = 5,
          JM = 6,
          CM = 0,
          ZM = 1,
          qM = 2,
          ep = 3,
          tp = 0,
          rp = 1,
          np = 2,
          sp = 3,
          ip = 4,
          ap = 5,
          op = 6,
          cp = 7,
          lp = 8,
          up = 9,
          dp = 10,
          mp = 11,
          gp = 0,
          fp = 1,
          bp = 2,
          hp = 3,
          Mp = 4,
          pp = 5,
          kp = 6,
          yp = 0,
          Ep = 1,
          wp = 2,
          Bp = 3,
          Tp = 4,
          vp = 5,
          Fp = 0,
          zp = 1,
          Rp = 2,
          Op = 3,
          Sp = 4,
          Ap = 5,
          Wp = 6,
          Lp = 7,
          jp = 8,
          xp = 9,
          Up = 10,
          Pp = 11,
          Np = 0,
          Gp = 1,
          Dp = 2,
          wc = 3,
          Vp = 4,
          Bc = 5,
          Ea = 6,
          Ip = 7,
          Hp = 8;
        function Kp(r) {
          return r == wc || r == Ea;
        }
        function Yp(r) {
          return r == Bc || r == Ea;
        }
        const $p = 0,
          _p = 1,
          Xp = 2,
          Qp = 3,
          Jp = 4,
          Cp = 5,
          Zp = 6,
          qp = 7,
          ek = 1,
          tk = 2,
          rk = 4,
          nk = 0,
          sk = 1,
          ik = 2,
          ak = 3,
          ok = 4,
          ck = 6,
          lk = 7,
          uk = 8,
          dk = 9,
          mk = 10,
          gk = 11,
          fk = 14,
          bk = 0,
          hk = 1,
          Mk = 2,
          pk = 3,
          kk = 4,
          yk = 5,
          Ek = 6,
          wk = 7,
          Bk = 8,
          Tk = 9,
          vk = 10,
          Fk = 11,
          zk = 12,
          Rk = 13,
          Ok = 14,
          Sk = 15,
          Ak = 16,
          Wk = 17,
          Lk = 18,
          jk = 20,
          xk = 21,
          Uk = 22,
          Pk = 23,
          Nk = 24,
          Gk = 25,
          Dk = 26,
          Vk = 27,
          Ik = 28,
          Hk = 29,
          Kk = 30,
          Yk = 31,
          $k = 32,
          _k = 33,
          Xk = 50,
          Qk = null,
          Jk = null,
          Ck = null,
          Zk = null,
          qk = null,
          ey = 0,
          ty = 1,
          ry = 3,
          ny = 4,
          sy = 5,
          iy = 6,
          ay = 7,
          oy = 8,
          cy = 9,
          ly = 10,
          uy = 11,
          dy = 13,
          my = 14,
          gy = 16,
          fy = 17,
          by = 18,
          hy = 19,
          My = 20,
          py = 21,
          ky = 24,
          yy = 25,
          Ey = 26,
          wy = 27,
          By = 28,
          Ty = 29,
          vy = 30,
          Fy = 31,
          zy = 32,
          Ry = 33,
          Oy = 34,
          Sy = 35,
          Ay = 36,
          Wy = 37,
          Ly = 38,
          jy = 39,
          xy = 40,
          Uy = 41,
          Py = 42,
          Ny = 43,
          Gy = 44,
          Dy = 45,
          Vy = 46,
          Iy = 47,
          Hy = 48,
          Ky = 49,
          Yy = 50,
          $y = 51,
          _y = 52,
          Xy = 53,
          Qy = 54,
          Jy = 55,
          Cy = 56,
          Zy = 57,
          qy = 58,
          eE = 59,
          tE = 60,
          rE = 61,
          nE = 62,
          sE = 63,
          iE = 64,
          aE = 65,
          oE = 66,
          cE = 67,
          lE = 68,
          uE = 69,
          dE = 70,
          mE = 71,
          gE = 72,
          fE = 73,
          bE = 74,
          hE = 75,
          ME = 76,
          pE = 77,
          kE = 78,
          yE = 79,
          EE = 80,
          wE = 81,
          BE = 82,
          TE = 83,
          vE = 84,
          FE = 85,
          zE = 86,
          RE = 87,
          OE = 88,
          SE = 89,
          AE = 90,
          WE = 91,
          LE = 92,
          jE = 93,
          xE = 94,
          UE = 95,
          PE = 96,
          NE = 97,
          GE = 98,
          DE = 99,
          VE = 100,
          IE = 101,
          HE = 102,
          KE = 103,
          YE = 104,
          $E = 105,
          _E = 106,
          XE = 107,
          QE = 108,
          JE = 109,
          CE = 110,
          ZE = 111,
          qE = 112,
          e0 = 113,
          t0 = 114,
          r0 = 115,
          n0 = 116,
          s0 = 117,
          i0 = 118,
          a0 = 119,
          o0 = 120,
          c0 = 121,
          l0 = 122,
          u0 = 123,
          d0 = 124,
          m0 = 125,
          g0 = 126,
          f0 = 127,
          b0 = 7,
          h0 = 750,
          M0 = 753,
          p0 = 754,
          Tc = 769,
          k0 = 799,
          y0 = 241100,
          E0 = 202355,
          vc = 250820,
          Fc = 330050,
          w0 = 358510,
          B0 = 366490,
          zc = 413080,
          Rc = 413090,
          Oc = 443510,
          T0 = 4161800,
          v0 = 1,
          F0 = 2371090,
          z0 = 761,
          R0 = 766,
          O0 = 767,
          S0 = 753,
          A0 = 765,
          W0 = 730,
          L0 = 710,
          j0 = 268440,
          x0 = 546560;
        function U0(r) {
          return r == vc || r == Fc;
        }
        function P0(r) {
          return r == zc || r == Rc || r == Oc || r == Tc;
        }
        const N0 = "18446744073709551615",
          G0 = 0,
          D0 = 2147483647,
          V0 = null,
          on = 0,
          Hn = 1,
          Kn = 2,
          Yn = 3,
          $n = 4,
          _n = 5,
          Un = 6,
          Xn = 7,
          Qn = 8,
          Jn = 9,
          Cn = 10,
          Zn = 11,
          qn = 12,
          es = 13,
          ts = 14,
          rs = 15,
          ns = 16,
          ss = 17,
          is = 18,
          as = 19,
          os = 20,
          cs = 21,
          Ls = 22,
          ls = 23,
          us = 24,
          ds = 25,
          ms = 26,
          js = 27,
          gs = 28,
          fs = 29,
          Sn = 30,
          bi = 31,
          wa = 32,
          Ba = -1,
          Ta = [
            ["None", "none", Ba],
            ["Afrikaans", "afrikaans", 0],
            ["Albanian", "albanian", 1],
            ["Amharic", "amharic", 2],
            ["Armenian", "armenian", 3],
            ["Assamese", "assamese", 4],
            ["Azerbaijani", "azerbaijani", 5],
            ["Bangla", "bangla", 6],
            ["Basque", "basque", 7],
            ["Belarusian", "belarusian", 8],
            ["Bosnian", "bosnian", 9],
            ["Catalan", "catalan", 10],
            ["Cherokee", "cherokee", 11],
            ["Croatian", "croatian", 12],
            ["Dari", "dari", 13],
            ["Estonian", "estonian", 14],
            ["Filipino", "filipino", 15],
            ["Galician", "galician", 16],
            ["Georgian", "georgian", 17],
            ["Gujarati", "gujarati", 18],
            ["Punjabi (Gurmukhi)", "gurmukhi", 19],
            ["Hausa", "hausa", 20],
            ["Hebrew", "hebrew", 21],
            ["Hindi", "hindi", 22],
            ["Icelandic", "icelandic", 23],
            ["Igbo", "igbo", 24],
            ["Indonesian", "indonesian", 25],
            ["Irish", "irish", 26],
            ["Kannada", "kannada", 27],
            ["Kazakh", "kazakh", 28],
            ["Khmer", "khmer", 29],
            ["K'iche'", "kiche", 30],
            ["Kinyarwanda", "kinyarwanda", 31],
            ["Konkani", "konkani", 32],
            ["Kyrgyz", "kyrgyz", 33],
            ["Latvian", "latvian", 34],
            ["Lithuanian", "lithuanian", 35],
            ["Luxembourgish", "luxembourgish", 36],
            ["Macedonian", "macedonian", 37],
            ["Malay", "malay", 38],
            ["Malayalam", "malayalam", 39],
            ["Maltese", "maltese", 40],
            ["Maori", "maori", 41],
            ["Marathi", "marathi", 42],
            ["Mongolian", "mongolian", 43],
            ["Nepali", "nepali", 44],
            ["Odia", "odia", 45],
            ["Persian", "persian", 46],
            ["Quechua", "quechua", 47],
            ["Scots", "scots", 48],
            ["Serbian", "serbian", 49],
            ["Punjabi (Shahmukhi)", "shahmukhi", 50],
            ["Sindhi", "sindhi", 51],
            ["Sinhala", "sinhala", 52],
            ["Slovak", "slovak", 53],
            ["Slovenian", "slovenian", 54],
            ["Sorani", "sorani", 55],
            ["Sotho", "sotho", 56],
            ["Swahili", "swahili", 57],
            ["Tajik", "tajik", 58],
            ["Tamil", "tamil", 59],
            ["Tatar", "tatar", 60],
            ["Telugu", "telugu", 61],
            ["Tigrinya", "tigrinya", 62],
            ["Tswana", "tswana", 63],
            ["Turkmen", "turkmen", 64],
            ["Urdu", "urdu", 65],
            ["Uyghur", "uyghur", 66],
            ["Uzbek", "uzbek", 67],
            ["Valencian", "valencian", 68],
            ["Welsh", "welsh", 69],
            ["Wolof", "wolof", 70],
            ["Xhosa", "xhosa", 71],
            ["Yoruba", "yoruba", 72],
            ["Zulu", "zulu", 73],
          ].map((r) => ({
            name: r[0],
            shortName: r[1],
            eAdditionalLanguage: r[2],
          }));
        function lw(r, e = Ba) {
          return Ta.find((t) => t.shortName == r)?.eAdditionalLanguage ?? e;
        }
        function uw(r) {
          return (
            Ta.find((e) => e.eAdditionalLanguage == r)?.shortName ?? "unknown"
          );
        }
        function dw(r, e = "en") {
          switch (r) {
            case on:
              return "en";
            case Hn:
              return "de";
            case Kn:
              return "fr";
            case Yn:
              return "it";
            case $n:
              return "ko";
            case _n:
              return "es";
            case Un:
              return "zh-cn";
            case Xn:
              return "zh-tw";
            case Qn:
              return "ru";
            case Jn:
              return "th";
            case Cn:
              return "ja";
            case Zn:
              return "pt";
            case qn:
              return "pl";
            case es:
              return "da";
            case ts:
              return "nl";
            case rs:
              return "fi";
            case ns:
              return "no";
            case ss:
              return "sv";
            case is:
              return "hu";
            case as:
              return "cs";
            case os:
              return "ro";
            case cs:
              return "tr";
            case ds:
              return "ar";
            case Ls:
              return "pt-br";
            case ls:
              return "bg";
            case us:
              return "el";
            case ms:
              return "uk";
            case js:
              return "es-419";
            case gs:
              return "vi";
            case fs:
              return "sc-sc";
            case Sn:
              return "id";
            case bi:
              return "ms";
            default:
              return e;
          }
        }
        const mw = (r) => (r === "koreana" ? "korean" : r);
        function va(r, e = "") {
          switch (r) {
            case on:
              return "english";
            case Hn:
              return "german";
            case Kn:
              return "french";
            case Yn:
              return "italian";
            case $n:
              return "koreana";
            case _n:
              return "spanish";
            case Un:
              return "schinese";
            case Xn:
              return "tchinese";
            case Qn:
              return "russian";
            case Jn:
              return "thai";
            case Cn:
              return "japanese";
            case Zn:
              return "portuguese";
            case qn:
              return "polish";
            case es:
              return "danish";
            case ts:
              return "dutch";
            case rs:
              return "finnish";
            case ns:
              return "norwegian";
            case ss:
              return "swedish";
            case is:
              return "hungarian";
            case as:
              return "czech";
            case os:
              return "romanian";
            case cs:
              return "turkish";
            case ds:
              return "arabic";
            case Ls:
              return "brazilian";
            case ls:
              return "bulgarian";
            case us:
              return "greek";
            case ms:
              return "ukrainian";
            case js:
              return "latam";
            case gs:
              return "vietnamese";
            case fs:
              return "sc_schinese";
            case Sn:
              return "indonesian";
            case bi:
              return "malay";
            default:
              return e;
          }
        }
        function xs(r, e = on) {
          switch (r) {
            case "english":
              return on;
            case "german":
              return Hn;
            case "french":
              return Kn;
            case "italian":
              return Yn;
            case "korean":
            case "koreana":
              return $n;
            case "spanish":
              return _n;
            case "schinese":
              return Un;
            case "tchinese":
              return Xn;
            case "russian":
              return Qn;
            case "thai":
              return Jn;
            case "japanese":
              return Cn;
            case "portuguese":
              return Zn;
            case "polish":
              return qn;
            case "danish":
              return es;
            case "dutch":
              return ts;
            case "finnish":
              return rs;
            case "norwegian":
              return ns;
            case "swedish":
              return ss;
            case "hungarian":
              return is;
            case "czech":
              return as;
            case "romanian":
              return os;
            case "turkish":
              return cs;
            case "arabic":
              return ds;
            case "brazilian":
              return Ls;
            case "bulgarian":
              return ls;
            case "greek":
              return us;
            case "ukrainian":
              return ms;
            case "latam":
              return js;
            case "vietnamese":
              return gs;
            case "sc_schinese":
              return fs;
            case "indonesian":
              return Sn;
            case "malay":
              return bi;
            default:
              return e;
          }
        }
        const _w = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35, 36,
          ],
          Xw = 0,
          Qw = 100,
          Jw = 101,
          Cw = 103,
          Zw = 104,
          qw = 105,
          eB = 106,
          tB = 107,
          rB = 200,
          nB = 300,
          sB = 301,
          iB = 302,
          aB = 303,
          oB = 400,
          cB = 401,
          lB = 402,
          uB = 403,
          dB = 404,
          mB = 405,
          gB = 500,
          fB = 600,
          bB = 601,
          hB = 700,
          MB = 800,
          pB = 801,
          kB = 802,
          yB = 803,
          EB = 804,
          wB = 900,
          BB = 1e3,
          TB = 1001,
          vB = 0,
          FB = 1,
          zB = 2,
          RB = 3,
          OB = 4,
          SB = 1,
          AB = 2,
          WB = 4,
          LB = 8,
          jB = 16,
          xB = 32,
          UB = 64,
          PB = 128,
          NB = 256,
          GB = 512,
          DB = 1024,
          VB = 2048,
          IB = 4096,
          HB = 8192,
          KB = 16384,
          YB = 32768,
          $B = 65536,
          _B = 0,
          XB = 1,
          QB = 2,
          JB = 3,
          CB = 4,
          ZB = 5,
          qB = 0,
          e2 = 1,
          t2 = 2,
          r2 = 3,
          n2 = 1,
          s2 = 2,
          i2 = 3,
          a2 = 4,
          o2 = 5,
          c2 = 6,
          l2 = 0,
          u2 = 1,
          d2 = 2,
          m2 = 3,
          g2 = 4,
          f2 = 5,
          b2 = 6,
          h2 = 7,
          hi = 0,
          Mi = 1,
          Sc = 2,
          Ac = 3,
          pi = 4,
          Wc = 5,
          Lc = 6,
          Fa = 7,
          ki = 8,
          jc = 9,
          M2 = 10;
        function p2(r) {
          switch (r) {
            case hi:
            default:
              return "default";
            case Mi:
              return "pw_dota2";
            case Sc:
              return "nexon_dota2";
            case Ac:
              return "steamcmd";
            case pi:
              return "pw_csgo";
            case Wc:
              return "clientui";
            case Lc:
              return "steamhdl";
            case Fa:
              return "steamchina";
            case ki:
              return "singleapp";
            case jc:
              return "gameserver";
          }
        }
        function k2(r) {
          switch (r) {
            default:
              break;
            case pi:
            case Mi:
            case Fa:
            case ki:
              return !0;
          }
          return !1;
        }
        function xc(r) {
          switch (r) {
            default:
              break;
            case pi:
            case Mi:
            case ki:
              return !0;
          }
          return !1;
        }
        const y2 = null,
          E2 = 2,
          w2 = 4,
          B2 = 8,
          T2 = 16,
          v2 = 30,
          Uc = 0,
          Pc = 1,
          Nc = 2,
          Gc = 3,
          Dc = 4,
          Vc = 5;
        function F2(r) {
          switch (r) {
            case Uc:
              return "invalid";
            case Pc:
              return "gamepad";
            case Nc:
              return "desktop";
            case Gc:
              return "tray";
            case Dc:
              return "all";
            case Vc:
              return "push";
          }
        }
        const Ic = null,
          Hc = 0,
          Kc = 1,
          Yc = 2,
          $c = 3,
          _c = 4,
          Xc = 5,
          Qc = 6,
          Jc = 7,
          z2 = 8;
        function R2(r) {
          switch (r) {
            case Hc:
              return "vgui";
            case Kc:
              return "tenfoot";
            case Yc:
              return "mobile";
            case $c:
              return "web";
            case _c:
              return "gamepad";
            case Xc:
              return "mobilechat";
            case Qc:
              return "embedded";
            case Jc:
              return "desktop";
            case Ic:
            default:
              return "unknown";
          }
        }
        const O2 = 1,
          S2 = 2,
          A2 = 6,
          W2 = 7,
          L2 = 8,
          j2 = 9,
          x2 = 10,
          U2 = 11,
          P2 = 13,
          N2 = 14,
          G2 = 15,
          D2 = 16,
          V2 = 17,
          I2 = 18,
          H2 = 19,
          K2 = 20,
          Y2 = 21,
          $2 = 22,
          _2 = 23,
          X2 = 24,
          Q2 = 25,
          J2 = 26,
          C2 = 27,
          Z2 = 28,
          q2 = 29,
          e3 = 30,
          t3 = 31,
          r3 = 32,
          n3 = 33,
          s3 = 34,
          i3 = 35,
          a3 = 36,
          o3 = 37,
          c3 = 38,
          l3 = 39,
          u3 = 40,
          d3 = 41,
          m3 = 42,
          g3 = 43,
          f3 = 44,
          b3 = 45,
          h3 = 46,
          M3 = 47,
          p3 = 48,
          k3 = 49,
          y3 = 50,
          E3 = 51,
          w3 = 53,
          B3 = 54,
          T3 = 55,
          v3 = 56,
          F3 = 57,
          z3 = 58,
          R3 = 59,
          O3 = 60,
          S3 = 61,
          A3 = 62,
          W3 = 63,
          L3 = 64,
          j3 = 65,
          x3 = 66,
          U3 = 67,
          P3 = 68,
          N3 = 69,
          G3 = 70,
          D3 = 71,
          V3 = 72,
          I3 = 73,
          H3 = 74,
          K3 = 75,
          Y3 = 76,
          $3 = 77,
          _3 = 78,
          X3 = 79,
          Q3 = 80,
          J3 = 81,
          C3 = 82,
          Z3 = 0,
          q3 = 1,
          e4 = 2,
          t4 = 3,
          r4 = 4,
          n4 = 5,
          s4 = 6,
          i4 = 7,
          a4 = 8,
          o4 = 9,
          c4 = 10,
          l4 = 11,
          u4 = 12,
          d4 = 13,
          m4 = 14,
          g4 = 15,
          f4 = 16,
          b4 = 17,
          h4 = 18,
          M4 = 19,
          p4 = 20,
          k4 = 4294967295;
        var Cc = ((r) => (
            (r[(r.k_EConnectivityTestResult_Unknown = 0)] =
              "k_EConnectivityTestResult_Unknown"),
            (r[(r.k_EConnectivityTestResult_Connected = 1)] =
              "k_EConnectivityTestResult_Connected"),
            (r[(r.k_EConnectivityTestResult_CaptivePortal = 2)] =
              "k_EConnectivityTestResult_CaptivePortal"),
            (r[(r.k_EConnectivityTestResult_TimedOut = 3)] =
              "k_EConnectivityTestResult_TimedOut"),
            (r[(r.k_EConnectivityTestResult_Failed = 4)] =
              "k_EConnectivityTestResult_Failed"),
            (r[(r.k_EConnectivityTestResult_WifiDisabled = 5)] =
              "k_EConnectivityTestResult_WifiDisabled"),
            (r[(r.k_EConnectivityTestResult_NoLAN = 6)] =
              "k_EConnectivityTestResult_NoLAN"),
            r
          ))(Cc || {}),
          Zc = ((r) => (
            (r[(r.k_ENetFakeLocalSystemState_Normal = 0)] =
              "k_ENetFakeLocalSystemState_Normal"),
            (r[(r.k_ENetFakeLocalSystemState_NoLAN = 1)] =
              "k_ENetFakeLocalSystemState_NoLAN"),
            (r[(r.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
            (r[(r.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
            (r[(r.k_ENetFakeLocalSystemState_NoInternet = 4)] =
              "k_ENetFakeLocalSystemState_NoInternet"),
            (r[(r.k_ENetFakeLocalSystemState_NoSteam = 5)] =
              "k_ENetFakeLocalSystemState_NoSteam"),
            r
          ))(Zc || {}),
          qc = ((r) => (
            (r[(r.k_ESuspendResumeProgressState_Invalid = 0)] =
              "k_ESuspendResumeProgressState_Invalid"),
            (r[(r.k_ESuspendResumeProgressState_Complete = 1)] =
              "k_ESuspendResumeProgressState_Complete"),
            (r[(r.k_ESuspendResumeProgressState_CloudSync = 2)] =
              "k_ESuspendResumeProgressState_CloudSync"),
            (r[(r.k_ESuspendResumeProgressState_LoggingIn = 3)] =
              "k_ESuspendResumeProgressState_LoggingIn"),
            (r[(r.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
              "k_ESuspendResumeProgressState_WaitingForApp"),
            (r[(r.k_ESuspendResumeProgressState_Working = 5)] =
              "k_ESuspendResumeProgressState_Working"),
            r
          ))(qc || {}),
          el = ((r) => (
            (r[(r.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (r[(r.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (r[(r.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (r[(r.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric"),
            r
          ))(el || {}),
          tl = ((r) => (
            (r[(r.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
            (r[(r.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (r[(r.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (r[(r.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max"),
            r
          ))(tl || {}),
          rl = ((r) => (
            (r[(r.k_EAppUpdateProgress_VerifyingInstalledFiles = 0)] =
              "k_EAppUpdateProgress_VerifyingInstalledFiles"),
            (r[(r.k_EAppUpdateProgress_Preallocating = 1)] =
              "k_EAppUpdateProgress_Preallocating"),
            (r[(r.k_EAppUpdateProgress_Download = 2)] =
              "k_EAppUpdateProgress_Download"),
            (r[(r.k_EAppUpdateProgress_Staging = 3)] =
              "k_EAppUpdateProgress_Staging"),
            (r[(r.k_EAppUpdateProgress_VerifyingStagedFiles = 4)] =
              "k_EAppUpdateProgress_VerifyingStagedFiles"),
            (r[(r.k_EAppUpdateProgress_Copying = 5)] =
              "k_EAppUpdateProgress_Copying"),
            (r[(r.k_EAppUpdateProgress_Committing = 6)] =
              "k_EAppUpdateProgress_Committing"),
            (r[(r.k_EAppUpdateProgress_Max = 7)] = "k_EAppUpdateProgress_Max"),
            r
          ))(rl || {}),
          nl = ((r) => (
            (r[(r.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
            (r[(r.k_EOverlayToStoreFlag_AddToCart = 1)] =
              "k_EOverlayToStoreFlag_AddToCart"),
            (r[(r.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
              "k_EOverlayToStoreFlag_AddToCartAndShow"),
            r
          ))(nl || {}),
          sl = ((r) => (
            (r[(r.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
            (r[(r.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
              "k_EActivateGameOverlayToWebPageMode_Modal"),
            r
          ))(sl || {});
        const y4 = 0,
          E4 = 1,
          w4 = 256,
          B4 = 273,
          T4 = 288,
          v4 = 320,
          F4 = 512,
          z4 = 528,
          R4 = 540,
          O4 = 541,
          S4 = 544,
          A4 = 545,
          W4 = 546,
          L4 = 4999,
          j4 = 5e3,
          x4 = 5001,
          U4 = 5099;
        var il = ((r) => (
            (r[(r.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
            (r[(r.k_ERaiseGameWindowResult_Success = 2)] =
              "k_ERaiseGameWindowResult_Success"),
            (r[(r.k_ERaiseGameWindowResult_Failure = 3)] =
              "k_ERaiseGameWindowResult_Failure"),
            r
          ))(il || {}),
          al = ((r) => (
            (r[(r.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
            (r[(r.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
            (r[(r.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
            (r[(r.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
            (r[(r.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight"),
            r
          ))(al || {}),
          ol = ((r) => (
            (r[(r.k_EAppReleaseState_Unknown = 0)] =
              "k_EAppReleaseState_Unknown"),
            (r[(r.k_EAppReleaseState_Unavailable = 1)] =
              "k_EAppReleaseState_Unavailable"),
            (r[(r.k_EAppReleaseState_Prerelease = 2)] =
              "k_EAppReleaseState_Prerelease"),
            (r[(r.k_EAppReleaseState_PreloadOnly = 3)] =
              "k_EAppReleaseState_PreloadOnly"),
            (r[(r.k_EAppReleaseState_Released = 4)] =
              "k_EAppReleaseState_Released"),
            (r[(r.k_EAppReleaseState_Disabled = 5)] =
              "k_EAppReleaseState_Disabled"),
            r
          ))(ol || {}),
          cl = ((r) => (
            (r[(r.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
            (r[(r.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
            (r[(r.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut"),
            r
          ))(cl || {}),
          ll = ((r) => (
            (r[(r.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
            (r[(r.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
            (r[(r.k_EInstallMgrStateWaitLicense = 2)] =
              "k_EInstallMgrStateWaitLicense"),
            (r[(r.k_EInstallMgrStateFreeLicense = 3)] =
              "k_EInstallMgrStateFreeLicense"),
            (r[(r.k_EInstallMgrStateShowCDKey = 4)] =
              "k_EInstallMgrStateShowCDKey"),
            (r[(r.k_EInstallMgrStateWaitAppInfo = 5)] =
              "k_EInstallMgrStateWaitAppInfo"),
            (r[(r.k_EInstallMgrStateShowPassword = 6)] =
              "k_EInstallMgrStateShowPassword"),
            (r[(r.k_EInstallMgrStateShowConfig = 7)] =
              "k_EInstallMgrStateShowConfig"),
            (r[(r.k_EInstallMgrStateShowEULAs = 8)] =
              "k_EInstallMgrStateShowEULAs"),
            (r[(r.k_EInstallMgrStateCreateApps = 9)] =
              "k_EInstallMgrStateCreateApps"),
            (r[(r.k_EInstallMgrStateReadFromMedia = 10)] =
              "k_EInstallMgrStateReadFromMedia"),
            (r[(r.k_EInstallMgrStateShowChangeMedia = 11)] =
              "k_EInstallMgrStateShowChangeMedia"),
            (r[(r.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
              "k_EInstallMgrStateWaitLegacyCDKeys"),
            (r[(r.k_EInstallMgrStateShowSignup = 13)] =
              "k_EInstallMgrStateShowSignup"),
            (r[(r.k_EInstallMgrStateComplete = 14)] =
              "k_EInstallMgrStateComplete"),
            (r[(r.k_EInstallMgrStateFailed = 15)] = "k_EInstallMgrStateFailed"),
            (r[(r.k_EInstallMgrStateCanceled = 16)] =
              "k_EInstallMgrStateCanceled"),
            r
          ))(ll || {}),
          ul = ((r) => (
            (r[(r.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
            (r[(r.k_EWindowBringToFrontAndForceOS = 1)] =
              "k_EWindowBringToFrontAndForceOS"),
            (r[(r.k_EWindowBringToFrontWithoutForcingOS = 2)] =
              "k_EWindowBringToFrontWithoutForcingOS"),
            (r[(r.k_EWindowBringToFrontUsingExistingOSState = 3)] =
              "k_EWindowBringToFrontUsingExistingOSState"),
            r
          ))(ul || {});
        const P4 = 0,
          N4 = 1,
          G4 = 2,
          D4 = 3,
          V4 = 4,
          I4 = 0,
          H4 = 1,
          K4 = 2,
          Y4 = 3,
          $4 = 4,
          _4 = 5,
          X4 = 6,
          Q4 = 7,
          J4 = 8,
          C4 = 9,
          Z4 = 10,
          q4 = 11,
          eT = 12,
          tT = 13,
          rT = 14,
          nT = 15,
          sT = 16,
          iT = 17,
          aT = 18,
          oT = 19,
          cT = 20,
          lT = 21,
          uT = 22,
          dT = 23,
          mT = 24,
          gT = 25,
          fT = 26,
          bT = 27,
          hT = 28,
          MT = 29,
          pT = 30,
          kT = 31,
          yT = 32,
          ET = 33,
          wT = 34,
          BT = 35,
          TT = 36,
          vT = 37,
          FT = 38,
          zT = 39,
          RT = 40,
          OT = 41,
          ST = 42,
          AT = 43,
          WT = 0,
          LT = 1,
          jT = 2,
          xT = 3,
          UT = 4;
        var dl = ((r) => (
          (r[(r.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
            "k_ETwoFactorTokenSteamguardScheme_None"),
          (r[(r.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
            "k_ETwoFactorTokenSteamguardScheme_Email"),
          (r[(r.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
            "k_ETwoFactorTokenSteamguardScheme_TwoFactor"),
          r
        ))(dl || {});
        const PT = void 0;
        function NT(r) {
          return r;
        }
        const vn = window.Config ?? qr,
          GT = window.UserConfig ?? pa,
          ml = window.Config ? () => Promise.resolve() : fc;
        (window.Config && Object.assign(qr, window.Config),
          window.UserConfig && Object.assign(pa, window.UserConfig),
          window.WebConfig && Object.assign(qr, window.WebConfig));
        const gl = {
          LAUNCHER_TYPE: hi,
          ON_FRAME: !1,
          IS_STEAMOS: !1,
          IN_GAMESCOPE: !1,
          ON_STEAMOS_CLIENT_BRANCH: !1,
          FORCED_DISPLAY_MODE: void 0,
          ARCH: "",
          IN_CHROMEOS: !1,
          USE_LONGEST_LOC_STRING: !1,
          SILENT_STARTUP: !1,
          DEV_MODE: !1,
          LOCAL_HOSTNAME: "",
          PACKAGE_CL: "",
          CLIENT_SESSION: 0,
        };
        function fl(r) {
          return (
            console.assert(
              !r || vn.IN_STEAMUI,
              "SteamUIConfig expected but does not exist in the current context!",
            ),
            vn.IN_STEAMUI ? gl : void 0
          );
        }
        const bl = hl();
        function hl() {
          return window.WebConfig
            ? window.WebConfig
            : {
                get WEBSITE_ID() {
                  return qr.WEBSITE_ID;
                },
              };
        }
        function DT(r) {
          return (
            console.assert(
              !r || !vn.IN_STEAMUI,
              "WebConfig expected but does not exist in the current context!",
            ),
            vn.IN_STEAMUI ? void 0 : bl
          );
        }
        const za = F.createContext({}),
          Us = (r) => {
            const e = React.useContext(za);
            return (
              AssertMsg(
                r?.bSuppressAssert || e.IN_GAMEPADUI !== void 0,
                "Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.",
              ),
              e
            );
          };
        function VT(r) {
          const { IN_GAMEPADUI: e, IN_DESKTOPUI: t, IN_VR: n, children: a } = r,
            o = Us({ bSuppressAssert: !0 }),
            l = GetClientSteamType()?.startsWith("Gamepad VR") ?? !1,
            u = React.useMemo(
              () => ({
                IN_GAMEPADUI:
                  e ??
                  o?.IN_GAMEPADUI ??
                  GetClientSteamType()?.startsWith("Gamepad") ??
                  !1,
                IN_DESKTOPUI: t ?? o?.IN_DESKTOPUI ?? !1,
                IN_VR: n ?? o?.IN_VR ?? l,
              }),
              [o, e, t, n, l],
            );
          return React.createElement(za.Provider, { value: u }, a);
        }
        function Ml(r) {
          return Us(r)?.IN_GAMEPADUI;
        }
        function IT(r) {
          return Us(r)?.IN_DESKTOPUI;
        }
        function HT(r) {
          return Us(r)?.IN_VR;
        }
        function KT(r) {
          return Ml(r) ? k_EUIMode_GamePadUI : k_EUIMode_DesktopUI;
        }
        function pl() {
          return Config.EREALM === ESteamRealm.k_ESteamRealmChina;
        }
        function YT() {
          return pl() ? "steamchina:" : "steam:";
        }
        function $T(r) {
          return [
            "steamchina:",
            "steamchinabeta:",
            "steam:",
            "steambeta:",
          ].includes(r);
        }
        function _T() {
          return Config.PLATFORM == "windows";
        }
        function XT() {
          return Config.PLATFORM == "macos";
        }
        function QT() {
          return Config.PLATFORM == "linux";
        }
        function JT() {
          return GetSteamUIConfig()?.ARCH == "arm64";
        }
        function CT() {
          return GetSteamUIConfig()?.IN_CHROMEOS ?? !1;
        }
        function ZT() {
          return (GetSteamUIConfig()?.IN_GAMESCOPE ?? !1) && kl();
        }
        function qT() {
          return GetSteamUIConfig()?.FORCED_DISPLAY_MODE === "steamdeck";
        }
        function e6() {
          return GetSteamUIConfig()?.FORCED_DISPLAY_MODE === "steammachine";
        }
        function t6(r) {
          return r?.IN_GAMEPADUI;
        }
        function kl() {
          return GetSteamUIConfig()?.IS_STEAMOS ?? !1;
        }
        async function r6(r, e, t) {
          if (t?.config) {
            const a = (await r.get(e + "ajaxgetconfig")).data;
            a && Object.assign(Config, a);
          }
          if (t?.userConfig) {
            const a = (
              await r.get(e + "ajaxgetuserconfig", { withCredentials: !0 })
            ).data;
            a && Object.assign(UserConfig, a);
          }
        }
        function nn(r, e) {
          return e.length != 0 && r.startsWith(e);
        }
        const yl = "unknown";
        function n6() {
          if (!window || !window.location || !window.location.href)
            return (console.warn("Unable to determine base url!"), yl);
          const r = window.location.href;
          return nn(r, Config.STORE_BASE_URL)
            ? Config.STORE_BASE_URL
            : nn(r, Config.COMMUNITY_BASE_URL)
              ? Config.COMMUNITY_BASE_URL
              : nn(r, Config.CHAT_BASE_URL)
                ? Config.CHAT_BASE_URL
                : nn(r, Config.PARTNER_BASE_URL)
                  ? Config.PARTNER_BASE_URL
                  : nn(r, Config.HELP_BASE_URL)
                    ? Config.HELP_BASE_URL
                    : nn(r, Config.STEAMTV_BASE_URL)
                      ? Config.STEAMTV_BASE_URL
                      : nn(r, Config.STATS_BASE_URL)
                        ? Config.STATS_BASE_URL
                        : nn(r, Config.INTERNAL_STATS_BASE_URL)
                          ? Config.INTERNAL_STATS_BASE_URL
                          : nn(r, Config.STORE_CHECKOUT_BASE_URL)
                            ? Config.STORE_CHECKOUT_BASE_URL
                            : nn(r, "https://steamloopback.host")
                              ? "https://steamloopback.host"
                              : "";
        }
        function s6() {
          return "siteserver";
        }
        function El() {
          return qr.IN_CLIENT && xc(fl()?.LAUNCHER_TYPE ?? hi);
        }
        const wl = F.memo(function (e) {
            const {
              className: t,
              size: n,
              string: a,
              position: o,
              static: l,
              msDelayAppear: u,
            } = e;
            let g = [W().LoadingWrapper, "SteamLogoThrobber", Ra(n)];
            const [b, f] = F.useState(!u),
              h = !El();
            return (
              (0, F.useEffect)(() => {
                if (b) return;
                const B = setTimeout(() => f(!0), u);
                return () => clearTimeout(B);
              }, [u, b]),
              a === void 0 && g.push(W().noString),
              t && g.push(t),
              l && g.push(W().Static),
              (0, m.jsxs)("div", {
                className: ha(
                  o == "center" && W().throbber_center_wrapper,
                  !!u && W().ThrobberDelayAppear,
                  b && W().Visible,
                ),
                children: [
                  b &&
                    h &&
                    (0, m.jsx)("div", {
                      className: g.join(" "),
                      children: (0, m.jsx)("div", {
                        className: W().NewThrobber,
                        children: (0, m.jsx)("img", { src: lc }),
                      }),
                    }),
                  !!a &&
                    (0, m.jsx)("div", {
                      className: W().ThrobberText,
                      children: a,
                    }),
                ],
              })
            );
          }),
          i6 = F.memo(function (e) {
            const {
              className: t,
              size: n,
              string: a,
              position: o,
              static: l,
              msDelayAppear: u,
            } = e;
            let g = [W().LoadingWrapper, "SteamLogoThrobber", Ra(n)];
            const [b, f] = F.useState(!u);
            return (
              (0, F.useEffect)(() => {
                if (b) return;
                const h = setTimeout(() => f(!0), u);
                return () => clearTimeout(h);
              }, [u, b]),
              a === void 0 && g.push(W().noString),
              t && g.push(t),
              l && g.push(W().Static),
              (0, m.jsxs)("div", {
                className: ha(
                  o == "center" && W().throbber_center_wrapper,
                  !!u && W().ThrobberDelayAppear,
                  b && W().Visible,
                ),
                children: [
                  b &&
                    (0, m.jsx)("div", {
                      className: g.join(" "),
                      children: (0, m.jsxs)("div", {
                        className: W().Throbber,
                        children: [
                          (0, m.jsx)(Oa, { className: W().base }),
                          (0, m.jsx)(Oa, { className: W().blur }),
                        ],
                      }),
                    }),
                  !!a &&
                    (0, m.jsx)("div", {
                      className: W().ThrobberText,
                      children: a,
                    }),
                ],
              })
            );
          });
        function Ra(r) {
          switch (r) {
            case "small":
              return W().throbber_small;
            case "medium":
              return W().throbber_medium;
            case "xlarge":
              return W().throbber_xlarge;
            case "xxlarge":
              return W().throbber_xxlarge;
            default:
              return W().throbber_large;
          }
        }
        function Oa(r) {
          let e = "SVGIcon_Button SVGIcon_Throbber ";
          return (
            r.className && (e += r.className),
            (0, m.jsxs)("svg", {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: e,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
              children: [
                (0, m.jsxs)("g", {
                  className: W().partCircle,
                  children: [
                    (0, m.jsx)("path", {
                      className: W().roundOuter,
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundOuter,
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M201.432,101.166",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundOuter,
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                    }),
                  ],
                }),
                (0, m.jsxs)("g", {
                  className: W().mainOutline,
                  children: [
                    (0, m.jsx)("path", {
                      className: W().roundFill,
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundOuterOutline,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber01,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber02,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber03,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber04,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber05,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber06,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber07,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber08,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber09,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber10,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber11,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber12,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber13,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber14,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                    (0, m.jsx)("path", {
                      className: W().roundThrobber15,
                      strokeLinecap: "butt",
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: "6",
                      strokeMiterlimit: "10",
                      d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                    }),
                  ],
                }),
                (0, m.jsx)("g", {
                  className: W().bottomCircle,
                  children: (0, m.jsx)("path", {
                    fill: "#ffffff",
                    d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                  }),
                }),
                (0, m.jsx)("g", {
                  className: W().topCircle,
                  children: (0, m.jsx)("circle", {
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    cx: "161.731",
                    cy: "101.274",
                    r: "23.019",
                  }),
                }),
              ],
            })
          );
        }
        var x = T(4947);
        function a6() {
          const [r, e] = useState(!1),
            t = useIntersectionObserver(
              useCallback((u) => e(u.isIntersecting), []),
            ),
            { style: n, ref: a } = Bl(),
            o = useMultipleRefs(t, a),
            l = n ? n.visibility !== "hidden" : !0;
          return { bVisible: r && l, ref: o };
        }
        function Bl() {
          const [r, e] = useState(null),
            [t, n] = useState(null);
          return (
            useEffect(() => {
              r && n(window.getComputedStyle(r));
            }, [r]),
            { style: t, ref: e }
          );
        }
        function o6() {
          const [r, e] = React.useState(0),
            t = React.useCallback(
              (o) => {
                const u = o.target.clientHeight;
                u > r && e(u);
              },
              [r],
            ),
            n = r + "px",
            a = useResizeObserver(t);
          return { strMinHeightStyle: n, refForResizeObserver: a };
        }
        function c6(r) {
          return useRefCallbackWithCleanup(
            (e) => {
              if (!e || !r) return;
              const t = FindScrollableAncestors(e);
              return (
                t.forEach((n) => n.addEventListener("scroll", r)),
                () => t.forEach((n) => n.removeEventListener("scroll", r))
              );
            },
            [r],
          );
        }
        function l6(r) {
          const e = React.useRef(!0),
            t = React.useRef(void 0),
            n = React.useRef(void 0),
            a = React.useRef(r);
          a.current = r;
          const o = React.useRef(void 0),
            l = React.useCallback((f) => {
              o.current !== f && ((o.current = f), (e.current = !0));
            }, []),
            u = React.useCallback(() => {
              const f = o.current?.offsetWidth ?? 0,
                h = o.current?.offsetHeight ?? 0;
              (t.current !== f || n.current !== h) &&
                (a.current?.(f, h), (t.current = f), (n.current = h));
            }, []);
          React.useLayoutEffect(() => {
            e.current && (u(), (e.current = !1));
          });
          const g = useResizeObserver(u);
          return useMultipleRefs(l, g);
        }
        function R(r, e, t) {
          return {
            get() {
              let n = t.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, e) ||
                  Object.defineProperty(this, e, { value: n }),
                n
              );
            },
          };
        }
        async function Tl(r, e = "SHA-256") {
          let t;
          typeof r == "string" ? (t = Fl(r)) : (t = r);
          const n = await window.crypto.subtle.digest(e, t);
          return vl(n);
        }
        function vl(r) {
          const e = new Uint8Array(r);
          let t = "";
          for (let n = 0; n < e.length; n++)
            t += ("00" + e[n].toString(16)).slice(-2);
          return t;
        }
        function Fl(r) {
          return new TextEncoder().encode(r).buffer;
        }
        var d = T(613),
          c = T.n(d);
        const s = d.BinaryReader.prototype,
          i = d.BinaryWriter.prototype;
        function M(r) {
          const e = {},
            { fields: t } = r;
          for (const n in t) {
            const a = t[n];
            e[a.n] = a;
          }
          return e;
        }
        function p(r, e) {
          const { proto: t, fields: n } = r,
            a = new t();
          if (e == null) return a;
          for (const o in n) {
            const { n: l, c: u, r: g, d: b, q: f } = n[o];
            if (!Object.prototype.hasOwnProperty.call(e, o)) continue;
            const h = e[o];
            u
              ? g
                ? d.Message.setRepeatedWrapperField(
                    a,
                    l,
                    Array.isArray(h) ? h.map((B) => u.fromObject(B)) : [],
                  )
                : d.Message.setWrapperField(a, l, u.fromObject(h))
              : d.Message.setField(a, l, h);
          }
          return a;
        }
        function k(r, e, t) {
          const { proto: n, fields: a } = r,
            o = {};
          for (const l in a) {
            const { n: u, c: g, r: b, d: f, q: h } = a[l];
            if (g)
              if (b)
                o[l] = d.Message.toObjectList(
                  d.Message.getRepeatedWrapperField(t, g, u),
                  g.toObject,
                  e,
                );
              else {
                const B = d.Message.getWrapperField(t, g, u, h ? 1 : 0);
                B && (o[l] = g.toObject(e, B));
              }
            else {
              const B = d.Message.getFieldWithDefault(
                t,
                u,
                f !== void 0 ? f : null,
              );
              (B !== null || h) && (o[l] = B);
            }
          }
          return (e && (o.$jspbMessageInstance = t), o);
        }
        function y(r, e, t) {
          for (; t.nextField() && !t.isEndGroup();) {
            const n = t.getFieldNumber(),
              a = r[n];
            if (a) {
              const { n: o, c: l, r: u, d: g, q: b, br: f } = a;
              if (l) {
                const h = new l();
                (t.readMessage(h, l.deserializeBinaryFromReader),
                  u
                    ? d.Message.addToRepeatedWrapperField(e, o, h, l)
                    : d.Message.setWrapperField(e, o, h));
              } else if (f) {
                const h = f.call(t);
                u
                  ? d.Message.addToRepeatedField(e, o, h)
                  : d.Message.setField(e, o, h);
              } else
                (console.assert(
                  !!f,
                  `Reader func not set for field number ${o} in class ${l}`,
                ),
                  t.skipField());
            } else t.skipField();
          }
          return e;
        }
        function E(r, e, t) {
          const { fields: n } = r;
          for (const a in n) {
            const { n: o, c: l, r: u, d: g, q: b, bw: f } = n[a];
            if (l)
              if (u) {
                const h = d.Message.getRepeatedWrapperField(e, l, o);
                ((h && h.length) || b) &&
                  t.writeRepeatedMessage(o, h, l.serializeBinaryToWriter);
              } else {
                const h = d.Message.getWrapperField(e, l, o, b ? 1 : 0);
                h && t.writeMessage(o, h, l.serializeBinaryToWriter);
              }
            else if (f) {
              const h = d.Message.getField(e, o);
              typeof h < "u" && f.call(t, o, h);
            } else
              console.assert(
                !!f,
                `Writer func not set for field number ${o} in class ${l}`,
              );
          }
        }
        function w(r) {
          const e = r.proto;
          for (const t in r.fields) {
            const n = r.fields[t],
              { n: a, c: o, r: l, d: u, q: g } = n;
            (Object.prototype.hasOwnProperty.call(n, "d")
              ? (e.prototype[t] = yi(d.Message.getFieldWithDefault, a, u))
              : o
                ? l
                  ? (e.prototype[t] = yi(
                      d.Message.getRepeatedWrapperField,
                      o,
                      a,
                    ))
                  : (e.prototype[t] = zl(o, a))
                : (e.prototype[t] = yi(d.Message.getField, a)),
              o
                ? l
                  ? (e.prototype[`set_${t}`] = Ei(
                      d.Message.setRepeatedWrapperField,
                      a,
                    ))
                  : (e.prototype[`set_${t}`] = Ei(d.Message.setWrapperField, a))
                : (e.prototype[`set_${t}`] = Ei(d.Message.setField, a)),
              l && (e.prototype[`add_${t}`] = Rl(a, o)));
          }
        }
        function yi(r, ...e) {
          return function () {
            return r(this, ...e);
          };
        }
        function zl(r, e) {
          return function (t = !0) {
            return d.Message.getWrapperField(this, r, e, t ? 1 : 0);
          };
        }
        function Ei(r, e) {
          return function (t) {
            return r(this, e, t);
          };
        }
        function Rl(r, e) {
          return e
            ? function (t, n) {
                return d.Message.addToRepeatedWrapperField(this, r, t, e, n);
              }
            : function (t, n) {
                d.Message.addToRepeatedField(this, r, t, n);
              };
        }
        class J extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              J.prototype.original_hostname || w(J.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    original_hostname: {
                      n: 1,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    actual_hostname: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    path: { n: 3, br: s.readString, bw: i.writeString },
                    base_name: { n: 4, br: s.readString, bw: i.writeString },
                    success: { n: 5, br: s.readBool, bw: i.writeBool },
                    status_code: { n: 6, br: s.readUint32, bw: i.writeUint32 },
                    address_of_request_url: {
                      n: 7,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    response_time_ms: {
                      n: 8,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    bytes_received: {
                      n: 9,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    num_retries: { n: 10, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return (J.sm_mbf || (J.sm_mbf = M(J.M())), J.sm_mbf);
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, t) {
            return k(J.M(), e, t);
          }
          static fromObject(e) {
            return p(J.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new J();
            return J.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(J.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (J.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(J.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ClientBootstrap_RequestInfo";
          }
        }
        class de extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              de.prototype.launcher_type || w(de.M()),
              d.Message.initialize(this, e, 0, -1, [7, 8], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    launcher_type: {
                      n: 1,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    steam_realm: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    beta_name: { n: 3, br: s.readString, bw: i.writeString },
                    download_completed: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    total_time_ms: {
                      n: 6,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    manifest_requests: { n: 7, c: J, r: !0, q: !0 },
                    package_requests: { n: 8, c: J, r: !0, q: !0 },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return (de.sm_mbf || (de.sm_mbf = M(de.M())), de.sm_mbf);
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, t) {
            return k(de.M(), e, t);
          }
          static fromObject(e) {
            return p(de.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new de();
            return de.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(de.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (de.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(de.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ClientBootstrap_Summary";
          }
        }
        class me extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              me.prototype.class_100 || w(me.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    class_100: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    class_200: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    class_300: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    class_400: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                    class_500: { n: 5, br: s.readUint32, bw: i.writeUint32 },
                    no_response: { n: 6, br: s.readUint32, bw: i.writeUint32 },
                    class_unknown: {
                      n: 7,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return (me.sm_mbf || (me.sm_mbf = M(me.M())), me.sm_mbf);
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, t) {
            return k(me.M(), e, t);
          }
          static fromObject(e) {
            return p(me.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new me();
            return me.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(me.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (me.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(me.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ContentDownloadResponse_Counts";
          }
        }
        class ge extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ge.prototype.hostname || w(ge.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    hostname: { n: 1, br: s.readString, bw: i.writeString },
                    source_type: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    counts: { n: 3, c: me },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return (ge.sm_mbf || (ge.sm_mbf = M(ge.M())), ge.sm_mbf);
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ge.M(), e, t);
          }
          static fromObject(e) {
            return p(ge.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ge();
            return ge.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ge.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ge.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ge.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ContentDownloadResponse_HostCounts";
          }
        }
        class fe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              fe.prototype.hosts || w(fe.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: { hosts: { n: 1, c: ge, r: !0, q: !0 } },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return (fe.sm_mbf || (fe.sm_mbf = M(fe.M())), fe.sm_mbf);
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(fe.M(), e, t);
          }
          static fromObject(e) {
            return p(fe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new fe();
            return fe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(fe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (fe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(fe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ContentDownloadResponse_Hosts";
          }
        }
        const Ol = 0,
          u6 = 1;
        function d6(r) {
          return "unknown EBanContentCheckResult ( " + r + " )";
        }
        function m6(r) {
          return "unknown EProtoClanEventType ( " + r + " )";
        }
        function g6(r) {
          return "unknown PartnerEventNotificationType ( " + r + " )";
        }
        class be extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              be.prototype.v4 || w(be.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    v4: { n: 1, br: s.readFixed32, bw: i.writeFixed32 },
                    v6: { n: 2, br: s.readBytes, bw: i.writeBytes },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return (be.sm_mbf || (be.sm_mbf = M(be.M())), be.sm_mbf);
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, t) {
            return k(be.M(), e, t);
          }
          static fromObject(e) {
            return p(be.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new be();
            return be.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(be.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (be.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(be.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgIPAddress";
          }
        }
        class vr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              vr.prototype.original_ip_address || w(vr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    original_ip_address: { n: 1, c: be },
                    bucket: {
                      n: 2,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return (vr.sm_mbf || (vr.sm_mbf = M(vr.M())), vr.sm_mbf);
          }
          toObject(e = !1) {
            return vr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(vr.M(), e, t);
          }
          static fromObject(e) {
            return p(vr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new vr();
            return vr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(vr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (vr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(vr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgIPAddressBucket";
          }
        }
        class he extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              he.prototype.dst_gcid_queue || w(he.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    dst_gcid_queue: {
                      n: 1,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    dst_gc_dir_index: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return (he.sm_mbf || (he.sm_mbf = M(he.M())), he.sm_mbf);
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, t) {
            return k(he.M(), e, t);
          }
          static fromObject(e) {
            return p(he.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new he();
            return he.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(he.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (he.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(he.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgGCRoutingProtoBufHeader";
          }
        }
        class C extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              C.prototype.steamid || w(C.M()),
              d.Message.initialize(this, e, 0, -1, [27, 41], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    client_sessionid: {
                      n: 2,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    routing_appid: {
                      n: 3,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    jobid_source: {
                      n: 10,
                      d: "18446744073709551615",
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    jobid_target: {
                      n: 11,
                      d: "18446744073709551615",
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    target_job_name: {
                      n: 12,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    seq_num: { n: 24, br: s.readInt32, bw: i.writeInt32 },
                    eresult: { n: 13, d: 2, br: s.readInt32, bw: i.writeInt32 },
                    error_message: {
                      n: 14,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    ip: { n: 15, br: s.readUint32, bw: i.writeUint32 },
                    ip_v6: { n: 29, br: s.readBytes, bw: i.writeBytes },
                    auth_account_flags: {
                      n: 16,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    token_source: {
                      n: 22,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    admin_spoofing_user: {
                      n: 23,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    transport_error: {
                      n: 17,
                      d: 1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    messageid: {
                      n: 18,
                      d: "18446744073709551615",
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    publisher_group_id: {
                      n: 19,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    sysid: { n: 20, br: s.readUint32, bw: i.writeUint32 },
                    webapi_key_id: {
                      n: 25,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    is_from_external_source: {
                      n: 26,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    forward_to_sysid: {
                      n: 27,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    cm_sysid: { n: 28, br: s.readUint32, bw: i.writeUint32 },
                    launcher_type: {
                      n: 31,
                      d: 0,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    realm: { n: 32, d: 0, br: s.readUint32, bw: i.writeUint32 },
                    timeout_ms: {
                      n: 33,
                      d: -1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    debug_source: {
                      n: 34,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    debug_source_string_index: {
                      n: 35,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    token_id: {
                      n: 36,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    routing_gc: { n: 37, c: he },
                    session_disposition: {
                      n: 38,
                      d: Ol,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    wg_token: { n: 39, br: s.readString, bw: i.writeString },
                    webui_auth_key: {
                      n: 40,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    exclude_client_sessionids: {
                      n: 41,
                      r: !0,
                      q: !0,
                      br: s.readInt32,
                      pbr: s.readPackedInt32,
                      bw: i.writeRepeatedInt32,
                    },
                    admin_request_spoofing_steamid: {
                      n: 43,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    is_valveds: { n: 44, br: s.readBool, bw: i.writeBool },
                    trace_tag: {
                      n: 45,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    wg_msg_trace_flags: {
                      n: 46,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    wg_msg_trace_instance: {
                      n: 47,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    wg_msg_trace_gid: {
                      n: 48,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    wg_msg_trace_token: {
                      n: 49,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    wg_msg_trace_steamid: {
                      n: 50,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    wg_msg_trace_status: {
                      n: 51,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    trace_flags: { n: 52, br: s.readUint32, bw: i.writeUint32 },
                    browserapi_site: {
                      n: 53,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return (C.sm_mbf || (C.sm_mbf = M(C.M())), C.sm_mbf);
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, t) {
            return k(C.M(), e, t);
          }
          static fromObject(e) {
            return p(C.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new C();
            return C.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(C.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (C.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(C.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgProtoBufHeader";
          }
        }
        function f6(r) {
          return "unknown CMsgProtoBufHeader_ESessionDisposition ( " + r + " )";
        }
        class Fr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Fr.prototype.hdr || w(Fr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    hdr: { n: 1, c: Me },
                    payload: { n: 2, br: s.readBytes, bw: i.writeBytes },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return (Fr.sm_mbf || (Fr.sm_mbf = M(Fr.M())), Fr.sm_mbf);
          }
          toObject(e = !1) {
            return Fr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Fr.M(), e, t);
          }
          static fromObject(e) {
            return p(Fr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Fr();
            return Fr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Fr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Fr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Fr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgKubeRPCPacket";
          }
        }
        class Me extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Me.prototype.jobid_source || w(Me.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    jobid_source: {
                      n: 10,
                      d: "18446744073709551615",
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    jobid_target: {
                      n: 11,
                      d: "18446744073709551615",
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    eresult: { n: 13, d: 2, br: s.readInt32, bw: i.writeInt32 },
                    target_job_name: {
                      n: 12,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    error_message: {
                      n: 14,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    reply_address: {
                      n: 42,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return (Me.sm_mbf || (Me.sm_mbf = M(Me.M())), Me.sm_mbf);
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Me.M(), e, t);
          }
          static fromObject(e) {
            return p(Me.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Me();
            return Me.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Me.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Me.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Me.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgKubeRPCPacket_Hdr";
          }
        }
        class zr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              zr.prototype.size_unzipped || w(zr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    size_unzipped: {
                      n: 1,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    message_body: { n: 2, br: s.readBytes, bw: i.writeBytes },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return (zr.sm_mbf || (zr.sm_mbf = M(zr.M())), zr.sm_mbf);
          }
          toObject(e = !1) {
            return zr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(zr.M(), e, t);
          }
          static fromObject(e) {
            return p(zr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new zr();
            return zr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(zr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (zr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(zr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgMulti";
          }
        }
        class Rr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Rr.prototype.message_body || w(Rr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    message_body: { n: 1, br: s.readBytes, bw: i.writeBytes },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return (Rr.sm_mbf || (Rr.sm_mbf = M(Rr.M())), Rr.sm_mbf);
          }
          toObject(e = !1) {
            return Rr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Rr.M(), e, t);
          }
          static fromObject(e) {
            return p(Rr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Rr();
            return Rr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Rr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Rr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Rr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgProtobufWrapped";
          }
        }
        class Or extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Or.prototype.estate || w(Or.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    estate: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    eresult: {
                      n: 2,
                      d: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    steamid: {
                      n: 3,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    h_steam_pipe: { n: 5, br: s.readUint32, bw: i.writeUint32 },
                    ticket_crc: { n: 6, br: s.readUint32, bw: i.writeUint32 },
                    ticket: { n: 7, br: s.readBytes, bw: i.writeBytes },
                    server_secret: { n: 8, br: s.readBytes, bw: i.writeBytes },
                    ticket_type: { n: 9, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return (Or.sm_mbf || (Or.sm_mbf = M(Or.M())), Or.sm_mbf);
          }
          toObject(e = !1) {
            return Or.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Or.M(), e, t);
          }
          static fromObject(e) {
            return p(Or.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Or();
            return Or.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Or.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Or.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Or.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgAuthTicket";
          }
        }
        class Sr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Sr.prototype.appid || w(Sr.M()),
              d.Message.initialize(this, e, 0, -1, [17, 18], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    name: { n: 2, br: s.readString, bw: i.writeString },
                    icon: { n: 3, br: s.readString, bw: i.writeString },
                    tool: { n: 6, br: s.readBool, bw: i.writeBool },
                    demo: { n: 7, br: s.readBool, bw: i.writeBool },
                    media: { n: 8, br: s.readBool, bw: i.writeBool },
                    community_visible_stats: {
                      n: 9,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    friendly_name: {
                      n: 10,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    propagation: { n: 11, br: s.readString, bw: i.writeString },
                    has_adult_content: {
                      n: 12,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    is_visible_in_steam_china: {
                      n: 13,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    app_type: { n: 14, br: s.readUint32, bw: i.writeUint32 },
                    has_adult_content_sex: {
                      n: 15,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    has_adult_content_violence: {
                      n: 16,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    content_descriptorids: {
                      n: 17,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    content_descriptorids_including_dlc: {
                      n: 18,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return (Sr.sm_mbf || (Sr.sm_mbf = M(Sr.M())), Sr.sm_mbf);
          }
          toObject(e = !1) {
            return Sr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Sr.M(), e, t);
          }
          static fromObject(e) {
            return p(Sr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Sr();
            return Sr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Sr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Sr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Sr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCDDBAppDetailCommon";
          }
        }
        class Ar extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ar.prototype.edit_info || w(Ar.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    edit_info: { n: 1, br: s.readBool, bw: i.writeBool },
                    publish: { n: 2, br: s.readBool, bw: i.writeBool },
                    view_error_data: { n: 3, br: s.readBool, bw: i.writeBool },
                    download: { n: 4, br: s.readBool, bw: i.writeBool },
                    upload_cdkeys: { n: 5, br: s.readBool, bw: i.writeBool },
                    generate_cdkeys: { n: 6, br: s.readBool, bw: i.writeBool },
                    view_financials: { n: 7, br: s.readBool, bw: i.writeBool },
                    manage_ceg: { n: 8, br: s.readBool, bw: i.writeBool },
                    manage_signing: { n: 9, br: s.readBool, bw: i.writeBool },
                    manage_cdkeys: { n: 10, br: s.readBool, bw: i.writeBool },
                    edit_marketing: { n: 11, br: s.readBool, bw: i.writeBool },
                    economy_support: { n: 12, br: s.readBool, bw: i.writeBool },
                    economy_support_supervisor: {
                      n: 13,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    manage_pricing: { n: 14, br: s.readBool, bw: i.writeBool },
                    broadcast_live: { n: 15, br: s.readBool, bw: i.writeBool },
                    view_marketing_traffic: {
                      n: 16,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    edit_store_display_content: {
                      n: 17,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return (Ar.sm_mbf || (Ar.sm_mbf = M(Ar.M())), Ar.sm_mbf);
          }
          toObject(e = !1) {
            return Ar.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ar.M(), e, t);
          }
          static fromObject(e) {
            return p(Ar.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ar();
            return Ar.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ar.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ar.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ar.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgAppRights";
          }
        }
        class Wr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Wr.prototype.platform_windows || w(Wr.M()),
              d.Message.initialize(this, e, 0, -1, [9, 10], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    platform_windows: { n: 2, br: s.readBool, bw: i.writeBool },
                    platform_mac: { n: 3, br: s.readBool, bw: i.writeBool },
                    platform_linux: { n: 4, br: s.readBool, bw: i.writeBool },
                    vr_content: { n: 5, br: s.readBool, bw: i.writeBool },
                    adult_content_violence: {
                      n: 6,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    adult_content_sex: {
                      n: 7,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    timestamp_updated: {
                      n: 8,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    tagids_curated: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    tagids_filtered: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    website_title: {
                      n: 11,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    website_url: { n: 12, br: s.readString, bw: i.writeString },
                    discussion_url: {
                      n: 13,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    show_broadcast: { n: 14, br: s.readBool, bw: i.writeBool },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return (Wr.sm_mbf || (Wr.sm_mbf = M(Wr.M())), Wr.sm_mbf);
          }
          toObject(e = !1) {
            return Wr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Wr.M(), e, t);
          }
          static fromObject(e) {
            return p(Wr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Wr();
            return Wr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Wr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Wr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Wr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCuratorPreferences";
          }
        }
        class K extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              K.prototype.language || w(K.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    language: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    localized_string: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return (K.sm_mbf || (K.sm_mbf = M(K.M())), K.sm_mbf);
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, t) {
            return k(K.M(), e, t);
          }
          static fromObject(e) {
            return p(K.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new K();
            return K.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(K.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (K.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(K.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CLocalizationToken";
          }
        }
        class pe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              pe.prototype.clanid || w(pe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    clanid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    event_gid: {
                      n: 2,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    announcement_gid: {
                      n: 3,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    rtime_start: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                    rtime_end: { n: 5, br: s.readUint32, bw: i.writeUint32 },
                    priority_score: {
                      n: 6,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    type: { n: 7, br: s.readUint32, bw: i.writeUint32 },
                    clamp_range_slot: {
                      n: 8,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    appid: { n: 9, br: s.readUint32, bw: i.writeUint32 },
                    rtime32_last_modified: {
                      n: 10,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return (pe.sm_mbf || (pe.sm_mbf = M(pe.M())), pe.sm_mbf);
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(pe.M(), e, t);
          }
          static fromObject(e) {
            return p(pe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new pe();
            return pe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(pe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (pe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(pe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanEventUserNewsTuple";
          }
        }
        class Lr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Lr.prototype.rtime_before || w(Lr.M()),
              d.Message.initialize(this, e, 0, -1, [4], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    rtime_before: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    rtime_after: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    qualified: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    events: { n: 4, c: pe, r: !0, q: !0 },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return (Lr.sm_mbf || (Lr.sm_mbf = M(Lr.M())), Lr.sm_mbf);
          }
          toObject(e = !1) {
            return Lr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Lr.M(), e, t);
          }
          static fromObject(e) {
            return p(Lr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Lr();
            return Lr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Lr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Lr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Lr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanMatchEventByRange";
          }
        }
        class ke extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ke.prototype.gid || w(ke.M()),
              d.Message.initialize(this, e, 0, -1, [9], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    gid: {
                      n: 1,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    clanid: {
                      n: 2,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    posterid: {
                      n: 3,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    headline: { n: 4, br: s.readString, bw: i.writeString },
                    posttime: { n: 5, br: s.readUint32, bw: i.writeUint32 },
                    updatetime: { n: 6, br: s.readUint32, bw: i.writeUint32 },
                    body: { n: 7, br: s.readString, bw: i.writeString },
                    commentcount: { n: 8, br: s.readInt32, bw: i.writeInt32 },
                    tags: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    language: { n: 10, br: s.readInt32, bw: i.writeInt32 },
                    hidden: { n: 11, br: s.readBool, bw: i.writeBool },
                    forum_topic_id: {
                      n: 12,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    event_gid: {
                      n: 13,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    voteupcount: { n: 14, br: s.readInt32, bw: i.writeInt32 },
                    votedowncount: { n: 15, br: s.readInt32, bw: i.writeInt32 },
                    ban_check_result: {
                      n: 16,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    banned: { n: 17, br: s.readBool, bw: i.writeBool },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return (ke.sm_mbf || (ke.sm_mbf = M(ke.M())), ke.sm_mbf);
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ke.M(), e, t);
          }
          static fromObject(e) {
            return p(ke.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ke();
            return ke.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ke.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ke.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ke.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCommunity_ClanAnnouncementInfo";
          }
        }
        class jr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              jr.prototype.gid || w(jr.M()),
              d.Message.initialize(this, e, 0, -1, [28], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    gid: {
                      n: 1,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    clan_steamid: {
                      n: 2,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    event_name: { n: 3, br: s.readString, bw: i.writeString },
                    event_type: { n: 4, br: s.readEnum, bw: i.writeEnum },
                    appid: { n: 5, br: s.readUint32, bw: i.writeUint32 },
                    server_address: {
                      n: 6,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    server_password: {
                      n: 7,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    rtime32_start_time: {
                      n: 8,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    rtime32_end_time: {
                      n: 9,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    comment_count: { n: 10, br: s.readInt32, bw: i.writeInt32 },
                    creator_steamid: {
                      n: 11,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    last_update_steamid: {
                      n: 12,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    event_notes: { n: 13, br: s.readString, bw: i.writeString },
                    jsondata: { n: 14, br: s.readString, bw: i.writeString },
                    announcement_body: { n: 15, c: ke },
                    published: { n: 16, br: s.readBool, bw: i.writeBool },
                    hidden: { n: 17, br: s.readBool, bw: i.writeBool },
                    rtime32_visibility_start: {
                      n: 18,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    rtime32_visibility_end: {
                      n: 19,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    broadcaster_accountid: {
                      n: 20,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    follower_count: {
                      n: 21,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    ignore_count: {
                      n: 22,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    forum_topic_id: {
                      n: 23,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    rtime32_last_modified: {
                      n: 24,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    news_post_gid: {
                      n: 25,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    rtime_mod_reviewed: {
                      n: 26,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    featured_app_tagid: {
                      n: 27,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    referenced_appids: {
                      n: 28,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    build_id: { n: 29, br: s.readUint32, bw: i.writeUint32 },
                    build_branch: {
                      n: 30,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    unlisted: { n: 31, br: s.readBool, bw: i.writeBool },
                    rtime_created: {
                      n: 32,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return (jr.sm_mbf || (jr.sm_mbf = M(jr.M())), jr.sm_mbf);
          }
          toObject(e = !1) {
            return jr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(jr.M(), e, t);
          }
          static fromObject(e) {
            return p(jr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new jr();
            return jr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(jr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (jr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(jr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanEventData";
          }
        }
        class xr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              xr.prototype.first_name || w(xr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    first_name: { n: 1, br: s.readString, bw: i.writeString },
                    last_name: { n: 2, br: s.readString, bw: i.writeString },
                    address1: { n: 3, br: s.readString, bw: i.writeString },
                    address2: { n: 4, br: s.readString, bw: i.writeString },
                    city: { n: 5, br: s.readString, bw: i.writeString },
                    us_state: { n: 6, br: s.readString, bw: i.writeString },
                    country_code: { n: 7, br: s.readString, bw: i.writeString },
                    postcode: { n: 8, br: s.readString, bw: i.writeString },
                    zip_plus4: { n: 9, br: s.readInt32, bw: i.writeInt32 },
                    phone: { n: 10, br: s.readString, bw: i.writeString },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return (xr.sm_mbf || (xr.sm_mbf = M(xr.M())), xr.sm_mbf);
          }
          toObject(e = !1) {
            return xr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(xr.M(), e, t);
          }
          static fromObject(e) {
            return p(xr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new xr();
            return xr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(xr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (xr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(xr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBilling_Address";
          }
        }
        class Ur extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ur.prototype.packageid || w(Ur.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    packageid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    reservation_state: {
                      n: 2,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    queue_position: { n: 3, br: s.readInt32, bw: i.writeInt32 },
                    total_queue_size: {
                      n: 4,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    reservation_country_code: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    expired: { n: 6, br: s.readBool, bw: i.writeBool },
                    time_expires: { n: 7, br: s.readUint32, bw: i.writeUint32 },
                    time_reserved: {
                      n: 8,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    rtime_estimated_notification: {
                      n: 9,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    notificaton_token: {
                      n: 10,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    queue_head_position_at_reservation: {
                      n: 11,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    queue_head_position_now: {
                      n: 12,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    position_is_waitlist: {
                      n: 13,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    user_waitlist_token: {
                      n: 14,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    queue_in_waitlist: {
                      n: 15,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    queue_waitlist_token: {
                      n: 16,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    collection_time_active: {
                      n: 17,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return (Ur.sm_mbf || (Ur.sm_mbf = M(Ur.M())), Ur.sm_mbf);
          }
          toObject(e = !1) {
            return Ur.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ur.M(), e, t);
          }
          static fromObject(e) {
            return p(Ur.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ur();
            return Ur.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ur.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ur.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ur.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPackageReservationStatus";
          }
        }
        class ye extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ye.prototype.name || w(ye.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    name: { n: 1, br: s.readString, bw: i.writeString },
                    value: { n: 2, br: s.readString, bw: i.writeString },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return (ye.sm_mbf || (ye.sm_mbf = M(ye.M())), ye.sm_mbf);
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ye.M(), e, t);
          }
          static fromObject(e) {
            return p(ye.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ye();
            return ye.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ye.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ye.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ye.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgKeyValuePair";
          }
        }
        class Pr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Pr.prototype.pairs || w(Pr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: { pairs: { n: 1, c: ye, r: !0, q: !0 } },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return (Pr.sm_mbf || (Pr.sm_mbf = M(Pr.M())), Pr.sm_mbf);
          }
          toObject(e = !1) {
            return Pr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Pr.M(), e, t);
          }
          static fromObject(e) {
            return p(Pr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Pr();
            return Pr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Pr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Pr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Pr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgKeyValueSet";
          }
        }
        class Nr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Nr.prototype.content_descriptors_to_exclude || w(Nr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    content_descriptors_to_exclude: {
                      n: 1,
                      c: Ee,
                      r: !0,
                      q: !0,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return (Nr.sm_mbf || (Nr.sm_mbf = M(Nr.M())), Nr.sm_mbf);
          }
          toObject(e = !1) {
            return Nr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Nr.M(), e, t);
          }
          static fromObject(e) {
            return p(Nr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Nr();
            return Nr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Nr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Nr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Nr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "UserContentDescriptorPreferences";
          }
        }
        class Ee extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ee.prototype.content_descriptorid || w(Ee.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    content_descriptorid: {
                      n: 1,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    timestamp_added: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return (Ee.sm_mbf || (Ee.sm_mbf = M(Ee.M())), Ee.sm_mbf);
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ee.M(), e, t);
          }
          static fromObject(e) {
            return p(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ee();
            return Ee.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ee.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ee.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ee.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "UserContentDescriptorPreferences_ContentDescriptor";
          }
        }
        class we extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              we.prototype.manufacturer || w(we.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    manufacturer: { n: 1, br: s.readString, bw: i.writeString },
                    model: { n: 2, br: s.readString, bw: i.writeString },
                    dx_video_card: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    dx_vendorid: { n: 4, br: s.readInt32, bw: i.writeInt32 },
                    dx_deviceid: { n: 5, br: s.readInt32, bw: i.writeInt32 },
                    num_gpu: { n: 6, br: s.readUint32, bw: i.writeUint32 },
                    system_ram: {
                      n: 7,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    os: { n: 8, br: s.readString, bw: i.writeString },
                    cpu_vendor: { n: 9, br: s.readString, bw: i.writeString },
                    cpu_name: { n: 10, br: s.readString, bw: i.writeString },
                    gaming_device_type: {
                      n: 11,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    dx_driver_version: {
                      n: 12,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    adapter_description: {
                      n: 14,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    driver_version: {
                      n: 15,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    driver_date: { n: 16, br: s.readString, bw: i.writeString },
                    vram_size: { n: 17, br: s.readUint32, bw: i.writeUint32 },
                    screen_width: {
                      n: 18,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    screen_height: {
                      n: 19,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    precise_frame_rate: {
                      n: 20,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return (we.sm_mbf || (we.sm_mbf = M(we.M())), we.sm_mbf);
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, t) {
            return k(we.M(), e, t);
          }
          static fromObject(e) {
            return p(we.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new we();
            return we.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(we.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (we.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(we.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "UserSystemInformation";
          }
        }
        class Be extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Be.prototype.setting || w(Be.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    setting: { n: 1, br: s.readEnum, bw: i.writeEnum },
                    game_resolution_width: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    game_resolution_height: {
                      n: 3,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return (Be.sm_mbf || (Be.sm_mbf = M(Be.M())), Be.sm_mbf);
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Be.M(), e, t);
          }
          static fromObject(e) {
            return p(Be.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Be();
            return Be.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Be.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Be.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Be.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GamePerformanceSettings";
          }
        }
        function b6(r) {
          return (
            "unknown GamePerformanceSettings_EGamePerformanceSetting ( " +
            r +
            " )"
          );
        }
        function h6(r) {
          return "unknown ESteamPipeOperationType ( " + r + " )";
        }
        function M6(r) {
          return "unknown ESteamPipeWorkType ( " + r + " )";
        }
        function p6(r) {
          return "unknown EClipShareMethod ( " + r + " )";
        }
        function k6(r) {
          return "unknown EClipRangeMethod ( " + r + " )";
        }
        class Te extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Te.prototype.raw_version || w(Te.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    raw_version: { n: 1, br: s.readString, bw: i.writeString },
                    requested_interface_type: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return (Te.sm_mbf || (Te.sm_mbf = M(Te.M())), Te.sm_mbf);
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Te.M(), e, t);
          }
          static fromObject(e) {
            return p(Te.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Te();
            return Te.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Te.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Te.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Te.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_AppInterfaceCreation";
          }
        }
        class ve extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ve.prototype.interface_name || w(ve.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    interface_name: {
                      n: 1,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    method_name: { n: 2, br: s.readString, bw: i.writeString },
                    call_count: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return (ve.sm_mbf || (ve.sm_mbf = M(ve.M())), ve.sm_mbf);
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ve.M(), e, t);
          }
          static fromObject(e) {
            return p(ve.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ve();
            return ve.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ve.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ve.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ve.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_AppInterfaceMethodCounts";
          }
        }
        class Fe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Fe.prototype.game_id || w(Fe.M()),
              d.Message.initialize(this, e, 0, -1, [2, 3], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    game_id: {
                      n: 1,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    interfaces_created: { n: 2, c: Te, r: !0, q: !0 },
                    methods_called: { n: 3, c: ve, r: !0, q: !0 },
                    session_length_seconds: {
                      n: 4,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return (Fe.sm_mbf || (Fe.sm_mbf = M(Fe.M())), Fe.sm_mbf);
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Fe.M(), e, t);
          }
          static fromObject(e) {
            return p(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Fe();
            return Fe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Fe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Fe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Fe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_AppInterfaceStats_Notification";
          }
        }
        class ze extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ze.prototype.protocol_tested || w(ze.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    protocol_tested: {
                      n: 1,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    connectivity_state: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return (ze.sm_mbf || (ze.sm_mbf = M(ze.M())), ze.sm_mbf);
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ze.M(), e, t);
          }
          static fromObject(e) {
            return p(ze.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ze();
            return ze.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ze.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ze.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ze.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_IPv6Connectivity_Result";
          }
        }
        class Re extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Re.prototype.cell_id || w(Re.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    cell_id: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    results: { n: 2, c: ze, r: !0, q: !0 },
                    private_ip_is_rfc6598: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return (Re.sm_mbf || (Re.sm_mbf = M(Re.M())), Re.sm_mbf);
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Re.M(), e, t);
          }
          static fromObject(e) {
            return p(Re.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Re();
            return Re.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Re.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Re.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Re.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_IPv6Connectivity_Notification";
          }
        }
        class Oe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Oe.prototype.product || w(Oe.M()),
              d.Message.initialize(this, e, 0, -1, [3, 4, 5], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    product: { n: 1, br: s.readString, bw: i.writeString },
                    version: { n: 2, br: s.readString, bw: i.writeString },
                    routes: { n: 3, c: Se, r: !0, q: !0 },
                    components: { n: 4, c: Ae, r: !0, q: !0 },
                    actions: { n: 5, c: We, r: !0, q: !0 },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return (Oe.sm_mbf || (Oe.sm_mbf = M(Oe.M())), Oe.sm_mbf);
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Oe.M(), e, t);
          }
          static fromObject(e) {
            return p(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Oe();
            return Oe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Oe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Oe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Oe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportReactUsage_Notification";
          }
        }
        class Se extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Se.prototype.route || w(Se.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    route: { n: 1, br: s.readString, bw: i.writeString },
                    count: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return (Se.sm_mbf || (Se.sm_mbf = M(Se.M())), Se.sm_mbf);
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Se.M(), e, t);
          }
          static fromObject(e) {
            return p(Se.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Se();
            return Se.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Se.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Se.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Se.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportReactUsage_Notification_RouteData";
          }
        }
        class Ae extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ae.prototype.component || w(Ae.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    component: { n: 1, br: s.readString, bw: i.writeString },
                    count: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return (Ae.sm_mbf || (Ae.sm_mbf = M(Ae.M())), Ae.sm_mbf);
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ae.M(), e, t);
          }
          static fromObject(e) {
            return p(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ae();
            return Ae.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ae.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ae.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ae.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
          }
        }
        class We extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              We.prototype.action || w(We.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    action: { n: 1, br: s.readString, bw: i.writeString },
                    count: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return (We.sm_mbf || (We.sm_mbf = M(We.M())), We.sm_mbf);
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, t) {
            return k(We.M(), e, t);
          }
          static fromObject(e) {
            return p(We.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new We();
            return We.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(We.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (We.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(We.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportReactUsage_Notification_ActionData";
          }
        }
        class Z extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Z.prototype.product || w(Z.M()),
              d.Message.initialize(this, e, 0, -1, [3, 4], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    product: { n: 1, br: s.readString, bw: i.writeString },
                    version: { n: 2, br: s.readString, bw: i.writeString },
                    errors: { n: 3, c: q, r: !0, q: !0 },
                    tags: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return (Z.sm_mbf || (Z.sm_mbf = M(Z.M())), Z.sm_mbf);
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Z.M(), e, t);
          }
          static fromObject(e) {
            return p(Z.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Z();
            return Z.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Z.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Z.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Z.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportClientError_Notification";
          }
        }
        class q extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              q.prototype.identifier || w(q.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    identifier: { n: 1, br: s.readString, bw: i.writeString },
                    message: { n: 2, br: s.readString, bw: i.writeString },
                    count: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    context: { n: 4, br: s.readString, bw: i.writeString },
                    url: { n: 5, br: s.readString, bw: i.writeString },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return (q.sm_mbf || (q.sm_mbf = M(q.M())), q.sm_mbf);
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, t) {
            return k(q.M(), e, t);
          }
          static fromObject(e) {
            return p(q.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new q();
            return q.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(q.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (q.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(q.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportClientError_Notification_Error";
          }
        }
        class Le extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Le.prototype.type || w(Le.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    type: { n: 1, br: s.readEnum, bw: i.writeEnum },
                    num_ops: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    num_bytes: {
                      n: 3,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    busy_time_ms: {
                      n: 4,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    idle_time_ms: {
                      n: 5,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    sum_run_time_ms: {
                      n: 6,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    sum_wait_time_ms: {
                      n: 7,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return (Le.sm_mbf || (Le.sm_mbf = M(Le.M())), Le.sm_mbf);
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Le.M(), e, t);
          }
          static fromObject(e) {
            return p(Le.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Le();
            return Le.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Le.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Le.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Le.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_SteamPipeWorkStats_Operation";
          }
        }
        class je extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              je.prototype.appid || w(je.M()),
              d.Message.initialize(this, e, 0, -1, [4], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    depotid: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    work_type: { n: 3, br: s.readEnum, bw: i.writeEnum },
                    operations: { n: 4, c: Le, r: !0, q: !0 },
                    hardware_type: {
                      n: 5,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return (je.sm_mbf || (je.sm_mbf = M(je.M())), je.sm_mbf);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, t) {
            return k(je.M(), e, t);
          }
          static fromObject(e) {
            return p(je.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new je();
            return je.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(je.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (je.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(je.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_SteamPipeWorkStats_Notification";
          }
        }
        class xe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              xe.prototype.summary || w(xe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = { proto: xe, fields: { summary: { n: 1, c: de } } }),
              xe.sm_m
            );
          }
          static MBF() {
            return (xe.sm_mbf || (xe.sm_mbf = M(xe.M())), xe.sm_mbf);
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(xe.M(), e, t);
          }
          static fromObject(e) {
            return p(xe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new xe();
            return xe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(xe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (xe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(xe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ClientBootstrap_Notification";
          }
        }
        class Ue extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ue.prototype.cell_id || w(Ue.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    cell_id: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    stats: { n: 2, c: Pe, r: !0, q: !0 },
                    throttling_kbps: {
                      n: 3,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    os_type: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                    device_type: { n: 5, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return (Ue.sm_mbf || (Ue.sm_mbf = M(Ue.M())), Ue.sm_mbf);
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ue.M(), e, t);
          }
          static fromObject(e) {
            return p(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ue();
            return Ue.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ue.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ue.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ue.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_DownloadRates_Notification";
          }
        }
        class Pe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Pe.prototype.source_type || w(Pe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    source_type: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    source_id: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    bytes: {
                      n: 3,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    host_name: { n: 4, br: s.readString, bw: i.writeString },
                    microseconds: {
                      n: 5,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    used_ipv6: { n: 6, br: s.readBool, bw: i.writeBool },
                    proxied: { n: 7, br: s.readBool, bw: i.writeBool },
                    used_http2: { n: 8, br: s.readBool, bw: i.writeBool },
                    cache_hits: { n: 9, br: s.readUint32, bw: i.writeUint32 },
                    cache_misses: {
                      n: 10,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    hit_bytes: {
                      n: 11,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    miss_bytes: {
                      n: 12,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    chunks_scored: {
                      n: 13,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    sum_chunk_scores: {
                      n: 14,
                      br: s.readDouble,
                      bw: i.writeDouble,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return (Pe.sm_mbf || (Pe.sm_mbf = M(Pe.M())), Pe.sm_mbf);
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Pe.M(), e, t);
          }
          static fromObject(e) {
            return p(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Pe();
            return Pe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Pe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Pe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Pe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_DownloadRates_Notification_StatsInfo";
          }
        }
        class Ne extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ne.prototype.validation_result || w(Ne.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    validation_result: {
                      n: 1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    app_id: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    staged_files: { n: 3, br: s.readBool, bw: i.writeBool },
                    user_initiated: { n: 4, br: s.readBool, bw: i.writeBool },
                    early_out: { n: 5, br: s.readBool, bw: i.writeBool },
                    chunks_scanned: {
                      n: 6,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    chunks_corrupt: {
                      n: 7,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    bytes_scanned: {
                      n: 8,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    chunk_bytes_corrupt: {
                      n: 9,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    total_file_size_corrupt: {
                      n: 10,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return (Ne.sm_mbf || (Ne.sm_mbf = M(Ne.M())), Ne.sm_mbf);
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ne.M(), e, t);
          }
          static fromObject(e) {
            return p(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ne();
            return Ne.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ne.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ne.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ne.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ContentValidation_Notification";
          }
        }
        class Ge extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ge.prototype.app_id || w(Ge.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    app_id: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    platform_type: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    preload: { n: 3, br: s.readBool, bw: i.writeBool },
                    blocking_app_launch: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    files_uploaded: {
                      n: 5,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    files_downloaded: {
                      n: 6,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    files_deleted: {
                      n: 7,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    bytes_uploaded: {
                      n: 8,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    bytes_downloaded: {
                      n: 9,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_total: {
                      n: 10,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_init_caches: {
                      n: 11,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_validate_state: {
                      n: 12,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_ac_launch: {
                      n: 13,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_ac_prep_user_files: {
                      n: 14,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_ac_exit: {
                      n: 15,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_build_sync_list: {
                      n: 16,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_delete_files: {
                      n: 17,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_download_files: {
                      n: 18,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    microsec_upload_files: {
                      n: 19,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    hardware_type: {
                      n: 20,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    files_managed: {
                      n: 21,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return (Ge.sm_mbf || (Ge.sm_mbf = M(Ge.M())), Ge.sm_mbf);
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ge.M(), e, t);
          }
          static fromObject(e) {
            return p(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ge();
            return Ge.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ge.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ge.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ge.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_CloudAppSyncStats_Notification";
          }
        }
        class De extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              De.prototype.cell_id || w(De.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    cell_id: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    data: { n: 2, c: fe },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return (De.sm_mbf || (De.sm_mbf = M(De.M())), De.sm_mbf);
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, t) {
            return k(De.M(), e, t);
          }
          static fromObject(e) {
            return p(De.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new De();
            return De.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(De.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (De.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(De.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
          }
        }
        class Ve extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ve.prototype.eresult || w(Ve.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    eresult: {
                      n: 1,
                      d: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    share_method: { n: 2, br: s.readEnum, bw: i.writeEnum },
                    seconds: { n: 3, br: s.readFloat, bw: i.writeFloat },
                    bytes: {
                      n: 4,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    gameid: {
                      n: 5,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return (Ve.sm_mbf || (Ve.sm_mbf = M(Ve.M())), Ve.sm_mbf);
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ve.M(), e, t);
          }
          static fromObject(e) {
            return p(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ve();
            return Ve.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ve.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ve.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ve.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ClipShare_Notification";
          }
        }
        class Ie extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ie.prototype.original_range_method || w(Ie.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    original_range_method: {
                      n: 1,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    start: { n: 2, c: ee },
                    end: { n: 3, c: ee },
                    seconds: { n: 4, br: s.readFloat, bw: i.writeFloat },
                    gameid: {
                      n: 5,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return (Ie.sm_mbf || (Ie.sm_mbf = M(Ie.M())), Ie.sm_mbf);
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ie.M(), e, t);
          }
          static fromObject(e) {
            return p(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ie();
            return Ie.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ie.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ie.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ie.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ClipRange_Notification";
          }
        }
        class ee extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ee.prototype.original_range_method || w(ee.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    original_range_method: {
                      n: 1,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    latest_range_method: {
                      n: 2,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    delta_ms: { n: 3, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return (ee.sm_mbf || (ee.sm_mbf = M(ee.M())), ee.sm_mbf);
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ee.M(), e, t);
          }
          static fromObject(e) {
            return p(ee.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ee();
            return ee.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ee.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ee.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ee.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
          }
        }
        class He extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              He.prototype.recording_type || w(He.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    recording_type: { n: 1, br: s.readEnum, bw: i.writeEnum },
                    seconds: { n: 2, br: s.readFloat, bw: i.writeFloat },
                    bytes: {
                      n: 3,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    gameid: {
                      n: 4,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    instant_clip: { n: 5, br: s.readBool, bw: i.writeBool },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return (He.sm_mbf || (He.sm_mbf = M(He.M())), He.sm_mbf);
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, t) {
            return k(He.M(), e, t);
          }
          static fromObject(e) {
            return p(He.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new He();
            return He.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(He.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (He.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(He.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_EndGameRecording_Notification";
          }
        }
        class Ke extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ke.prototype.frame_rates || w(Ke.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    frame_rates: { n: 2, c: Ye, r: !0, q: !0 },
                    system_info: { n: 3, c: we },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return (Ke.sm_mbf || (Ke.sm_mbf = M(Ke.M())), Ke.sm_mbf);
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ke.M(), e, t);
          }
          static fromObject(e) {
            return p(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ke();
            return Ke.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ke.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ke.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ke.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_GamePerformance_Notification";
          }
        }
        class Ye extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ye.prototype.gameid || w(Ye.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    gameid: {
                      n: 1,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    frame_rate: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    session_seconds: {
                      n: 3,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    framegen_frame_rate: {
                      n: 4,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    game_settings: { n: 5, c: Be },
                    seconds_since_active: {
                      n: 6,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    frame_rate_limit: {
                      n: 7,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return (Ye.sm_mbf || (Ye.sm_mbf = M(Ye.M())), Ye.sm_mbf);
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ye.M(), e, t);
          }
          static fromObject(e) {
            return p(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ye();
            return Ye.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ye.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ye.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ye.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_GamePerformance_Notification_FrameRate";
          }
        }
        class $e extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              $e.prototype.client_args || w($e.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    client_args: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    gpu_webview_regkey_disabled: {
                      n: 2,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    suppress_gpu_chrome: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    browser_not_supported: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    hw_accel_video_regkey_disabled: {
                      n: 5,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    mini_mode_enabled: {
                      n: 6,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    fps_counter_enabled: {
                      n: 7,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    library_low_bandwidth_mode_enabled: {
                      n: 8,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    library_low_perf_mode_enabled: {
                      n: 9,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    gr_mode: { n: 10, br: s.readEnum, bw: i.writeEnum },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return ($e.sm_mbf || ($e.sm_mbf = M($e.M())), $e.sm_mbf);
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, t) {
            return k($e.M(), e, t);
          }
          static fromObject(e) {
            return p($e.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new $e();
            return $e.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y($e.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ($e.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E($e.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportClientArgs_Notification";
          }
        }
        class _e extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              _e.prototype.accessibility_desktop_ui_scale || w(_e.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    accessibility_desktop_ui_scale: {
                      n: 1,
                      br: s.readFloat,
                      bw: i.writeFloat,
                    },
                    accessibility_screen_reader_enabled: {
                      n: 2,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    accessibility_high_contrast_mode: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    accessibility_reduce_motion: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    accessibility_color_filter_name: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return (_e.sm_mbf || (_e.sm_mbf = M(_e.M())), _e.sm_mbf);
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, t) {
            return k(_e.M(), e, t);
          }
          static fromObject(e) {
            return p(_e.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new _e();
            return _e.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(_e.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (_e.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(_e.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportAccessibilitySettings_Notification";
          }
        }
        class Xe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Xe.prototype.glibc_version_major || w(Xe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    glibc_version_major: {
                      n: 1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    glibc_version_minor: {
                      n: 2,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    account_type: { n: 3, br: s.readInt32, bw: i.writeInt32 },
                    launcher_type: { n: 4, br: s.readInt32, bw: i.writeInt32 },
                    game_server_appid: {
                      n: 5,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    process_name: { n: 6, br: s.readString, bw: i.writeString },
                    kernel_version_major: {
                      n: 7,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    kernel_version_minor: {
                      n: 8,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return (Xe.sm_mbf || (Xe.sm_mbf = M(Xe.M())), Xe.sm_mbf);
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Xe.M(), e, t);
          }
          static fromObject(e) {
            return p(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Xe();
            return Xe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Xe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Xe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Xe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientMetrics_ReportLinuxStats_Notification";
          }
        }
        var wi;
        ((r) => {
          function e(O, L) {
            return O.SendNotification(
              "ClientMetrics.ClientAppInterfaceStatsReport#1",
              Y(Fe, L),
              { ePrivilege: 1 },
            );
          }
          r.ClientAppInterfaceStatsReport = e;
          function t(O, L) {
            return O.SendNotification(
              "ClientMetrics.ClientIPv6ConnectivityReport#1",
              Y(Re, L),
              { ePrivilege: 1 },
            );
          }
          r.ClientIPv6ConnectivityReport = t;
          function n(O, L) {
            return O.SendNotification(
              "ClientMetrics.SteamPipeWorkStatsReport#1",
              Y(je, L),
              { ePrivilege: 1 },
            );
          }
          r.SteamPipeWorkStatsReport = n;
          function a(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportReactUsage#1",
              Y(Oe, L),
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.ReportReactUsage = a;
          function o(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportClientError#1",
              Y(Z, L),
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          r.ReportClientError = o;
          function l(O, L) {
            return O.SendNotification(
              "ClientMetrics.ClientBootstrapReport#1",
              Y(xe, L),
              { ePrivilege: 1 },
            );
          }
          r.ClientBootstrapReport = l;
          function u(O, L) {
            return O.SendNotification(
              "ClientMetrics.ClientDownloadRatesReport#1",
              Y(Ue, L),
              { ePrivilege: 1 },
            );
          }
          r.ClientDownloadRatesReport = u;
          function g(O, L) {
            return O.SendNotification(
              "ClientMetrics.ClientContentValidationReport#1",
              Y(Ne, L),
              { ePrivilege: 1 },
            );
          }
          r.ClientContentValidationReport = g;
          function b(O, L) {
            return O.SendNotification(
              "ClientMetrics.ClientCloudAppSyncStats#1",
              Y(Ge, L),
              { ePrivilege: 1 },
            );
          }
          r.ClientCloudAppSyncStats = b;
          function f(O, L) {
            return O.SendNotification(
              "ClientMetrics.ClientDownloadResponseCodeCounts#1",
              Y(De, L),
              { ePrivilege: 1 },
            );
          }
          r.ClientDownloadResponseCodeCounts = f;
          function h(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportClientArgs#1",
              Y($e, L),
              { ePrivilege: 1 },
            );
          }
          r.ReportClientArgs = h;
          function B(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportLinuxStats#1",
              Y(Xe, L),
              { ePrivilege: 1 },
            );
          }
          r.ReportLinuxStats = B;
          function z(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportAccessibilitySettings#1",
              Y(_e, L),
              { ePrivilege: 1 },
            );
          }
          r.ReportAccessibilitySettings = z;
          function S(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportClipShare#1",
              Y(Ve, L),
              { ePrivilege: 1 },
            );
          }
          r.ReportClipShare = S;
          function A(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportClipRange#1",
              Y(Ie, L),
              { ePrivilege: 1 },
            );
          }
          r.ReportClipRange = A;
          function N(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportEndGameRecording#1",
              Y(He, L),
              { ePrivilege: 1 },
            );
          }
          r.ReportEndGameRecording = N;
          function Gr(O, L) {
            return O.SendNotification(
              "ClientMetrics.ReportGamePerformance#1",
              Y(Ke, L),
              { ePrivilege: 1 },
            );
          }
          r.ReportGamePerformance = Gr;
        })(wi || (wi = {}));
        const Sa =
          window.addEventListener ||
          (globalThis && globalThis.addEventListener) ||
          (() => {});
        let Ps = [],
          Fn = (r, e, t) =>
            Ps.push({ error: r, cCallsitesToIgnore: e, strComponentStack: t }),
          Aa;
        const Ns = !0;
        class Sl extends Error {
          constructor(...e) {
            (super(...e), (this.name = "Assertion Failed"));
          }
        }
        if (Ns) {
          const r = console.assert;
          console.assert = (t, n, ...a) => {
            if (!t) {
              const o = Bi();
              Fn(new Sl(Ti(n, ...a)), 2, o);
            }
            r.apply(console, [t, n, ...a]);
          };
          const e = console.error;
          ((console.error = (t, ...n) => {
            const a = Bi();
            (Fn(new Error(Ti(t, ...n)), 1, a), e.apply(console, [t, ...n]));
          }),
            (console.clogerror = (t, n, ...a) => {
              const o = Bi();
              (Fn(new Error(Ti(n, ...a)), t + 1, o),
                e.apply(console, [n, ...a]));
            }),
            Sa("error", (t) => {
              Fn(t.error, 0);
            }),
            Sa("unhandledrejection", (t) => {
              Fn(t.reason, 0);
            }),
            (Aa = window.setTimeout(() => {
              ((Ps = []), (Fn = () => {}));
            }, 30 * 1e3)));
        }
        const Al = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
          Wl = [
            "(localhost|127.0.0.1):(?!(80|443))",
            "chrome-extension://",
            "HTMLDivElement.onreset \\(/market",
            "/.millennium/Dist",
            "Millennium internal",
            "millenium",
            "millennium",
            "decky://",
            "Refused unauthorized RPC command",
          ];
        function Bi() {
          try {
            const r =
              F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
            if (
              r &&
              typeof r == "object" &&
              typeof r.getCurrentStack == "function"
            ) {
              const e = r.getCurrentStack();
              if (typeof e == "string") return e;
            }
          } catch {}
        }
        class Ll {
          m_strProduct;
          m_strVersion;
          m_transport = null;
          m_rgErrorQueue = [];
          m_sendTimer = null;
          m_bReportingPaused = !1;
          m_pauseTimer = void 0;
          m_fnGetReportingInterval = Vl;
          m_fnGetReportTags = () => [];
          m_fnGetURL = () => location.href;
          strDisplayVersion;
          m_bEnabled = !0;
          m_bInitialized = !1;
          constructor(e = !0) {
            (Ns &&
              (e
                ? (Ps.forEach(
                    ({
                      error: t,
                      cCallsitesToIgnore: n,
                      strComponentStack: a,
                    }) =>
                      this.ReportError(t, {
                        cCallsitesToIgnore: n,
                        strComponentStack: a,
                      }),
                  ),
                  (Fn = (t, n, a) =>
                    this.ReportError(t, {
                      cCallsitesToIgnore: n,
                      strComponentStack: a,
                    })))
                : (Fn = () => {}),
              (Ps = []),
              clearTimeout(Aa)),
              window.setTimeout(() => {
                this.m_bInitialized ||
                  ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
              }, 30 * 1e3));
          }
          Init(e, t, n, a = {}) {
            ((this.m_bInitialized = !0),
              (this.m_strProduct = e),
              (this.m_strVersion = t),
              (this.m_transport = n),
              a.fnGetReportingInterval &&
                (this.m_fnGetReportingInterval = a.fnGetReportingInterval),
              a.fnGetReportTags && (this.m_fnGetReportTags = a.fnGetReportTags),
              a.fnGetURL && (this.m_fnGetURL = a.fnGetURL),
              a.strDisplayVersion &&
                (this.strDisplayVersion = a.strDisplayVersion),
              this.m_bEnabled ||
                (console.error(
                  "Error reporting was initialized after being disabled, possibly dropping errors.",
                ),
                (this.m_bEnabled = !0)),
              this.m_rgErrorQueue.length &&
                (this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = [])));
          }
          SetGetURL(e) {
            this.m_fnGetURL = e;
          }
          async ReportError(e, t) {
            if (!e)
              return (
                console.warn(
                  "Failed to report error: ReportError() was called without an error to report.",
                ),
                null
              );
            try {
              const n = { ...Al, ...t };
              if (!this.m_bEnabled || !Ns) return null;
              const a = await xl(e, n);
              return a
                ? (n.cCallsitesToIgnore &&
                    a.message.splice(1, n.cCallsitesToIgnore),
                  n.strComponentStack &&
                    (a.strComponentStack = n.strComponentStack),
                  (a.strUrl = this.m_fnGetURL()),
                  (a.strDisplayVersion = this.strDisplayVersion),
                  this.SendErrorReport(a),
                  a)
                : null;
            } catch (n) {
              return (console.log(`Failed to report error: ${n}`), null);
            }
          }
          PauseReportingForDuration(e) {
            (this.PauseReporting(),
              (this.m_pauseTimer = window.setTimeout(
                () => this.ResumeReporting(),
                e,
              )));
          }
          PauseReporting() {
            ((this.m_bReportingPaused = !0),
              window.clearTimeout(this.m_pauseTimer));
          }
          ResumeReporting() {
            ((this.m_bReportingPaused = !1),
              window.clearTimeout(this.m_pauseTimer),
              this.ScheduleSend());
          }
          BIsBlacklisted(e) {
            for (let t of e.message) {
              let n = JSON.stringify(t);
              for (let a of Wl) {
                const o = new RegExp(a);
                if (n.match(o))
                  return (console.warn("Report", e, "matched regex", a), !0);
              }
            }
            return !1;
          }
          SendErrorReport(e) {
            if (!this.BIsBlacklisted(e)) {
              if (!this.m_transport) {
                this.m_rgErrorQueue.push(e);
                return;
              }
              this.QueueReport(e);
            }
          }
          QueueReport(e) {
            (this.m_rgErrorQueue.push(e),
              this.m_bReportingPaused || this.ScheduleSend());
          }
          ScheduleSend() {
            this.m_sendTimer ||
              (this.m_sendTimer = window.setTimeout(() => {
                (this.SendErrorReports(this.m_rgErrorQueue),
                  (this.m_rgErrorQueue = []),
                  (this.m_sendTimer = null));
              }, this.m_fnGetReportingInterval()));
          }
          SendErrorReports(e) {
            if (!e || !e.length) return;
            const t = te.Init(Z),
              n = e.reduce(
                (o, l) => (
                  o[l.identifier]
                    ? o[l.identifier].count++
                    : (o[l.identifier] = { report: l, count: 1 }),
                  o
                ),
                {},
              ),
              a = Object.keys(n).map((o) => {
                const { report: l, count: u } = n[o],
                  g = new q();
                (g.set_count(u),
                  g.set_identifier(l.identifier + " " + l.identifierHash),
                  g.set_message(JSON.stringify(l.message)));
                let b;
                return (
                  l.strComponentStack &&
                    ((b ??= {}), (b.componentStack = l.strComponentStack)),
                  l.strDisplayVersion &&
                    ((b ??= {}), (b.strDisplayVersion = l.strDisplayVersion)),
                  b && g.set_context(JSON.stringify(b)),
                  l.strUrl && g.set_url(l.strUrl),
                  g
                );
              });
            (t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              t.Body().set_errors(a));
            for (const o of this.m_fnGetReportTags()) t.Body().add_tags(o);
            wi.ReportClientError(this.m_transport, t);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
          get reporting_enabled() {
            return Ns;
          }
        }
        function Ti(r, ...e) {
          return typeof r == "string" && e.length === 0
            ? r
            : [r, ...e]
                .map((n) => {
                  try {
                    let a = String(n);
                    return (
                      a == "[object Object]" && (a = JSON.stringify(n)), a
                    );
                  } catch {
                    return "[Stringify Error]";
                  }
                })
                .join(", ");
        }
        const Wa = /^\s*at .*(\S+:\d+|\(native\))/m,
          La = /(^|@)\S+:\d+/,
          jl = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
        let ja = !1;
        function xl(r, e) {
          try {
            return r.stack && r.stack.match(Wa)
              ? Ul(r, e)
              : r.stack && r.stack.match(La)
                ? Gl(r, e)
                : r.stack && r.stack.match(jl)
                  ? Dl(r, e)
                  : (ja ||
                      (console.warn(
                        "Error reporter does not know how to parse generated stack:",
                      ),
                      console.warn(r.stack),
                      (ja = !0)),
                    null);
          } catch (t) {
            return (
              console.warn(`Failed to normalize error stack: ${t}`), null
            );
          }
        }
        async function Ul(r, e) {
          const { cCallsitesToIgnore: t, bIncludeMessageInIdentifier: n } = e,
            { message: a, stack: o } = r,
            l =
              o?.split(`
`) ?? [],
            u = l.filter((f) => !!f.match(Wa));
          let g = xa(u[t]);
          n && (g = `${g} ${a}`);
          const b = l
            .map((f) => {
              let h = f.match(/(.*)\((.*):(\d+):(\d+)\)/);
              if (
                ((!h || h.length != 5) &&
                  (h = f.match(/(.*at )(http.*):(\d+):(\d+)/)),
                !h)
              )
                return f;
              if (h.length === 5) {
                const [B, z, S, A, N] = h,
                  Gr = parseInt(A),
                  O = parseInt(N);
                if (!isNaN(Gr) && !isNaN(O)) return [z, S, Gr, O];
              }
              return f;
            })
            .filter((f) => !!f);
          return { identifier: g, identifierHash: await Fi(g), message: b };
        }
        function xa(r) {
          return Nl(Pl(r));
        }
        function Pl(r) {
          const e = r.lastIndexOf("?");
          if (e === -1) return r;
          const t = r.indexOf(":", e);
          return t === -1 ? r : r.slice(0, e) + r.slice(t);
        }
        function Nl(r) {
          const e = "https://",
            t = r.indexOf(e);
          if (t === -1) return r;
          const n = r.indexOf("/", t + e.length);
          return n === -1 ? r : r.slice(0, t) + r.slice(n);
        }
        async function Gl(r, e) {
          const { cCallsitesToIgnore: t, bIncludeMessageInIdentifier: n } = e,
            a =
              r.stack?.split(`
`) ?? [],
            o = a.filter((g) => !!g.match(La));
          let l = xa(o[t]);
          n && (l = `${l} ${r.message}`);
          const u = a
            .map((g) => {
              const b = g.match(/(.*@)?(.*):(\d+):(\d+)/);
              if (!b) return g;
              if (b.length === 5) {
                const [f, h, B, z, S] = b,
                  A = parseInt(z),
                  N = parseInt(S);
                if (!isNaN(A) && !isNaN(N)) return [h, B, A, N];
              }
              return g;
            })
            .filter((g) => !!g);
          return {
            identifier: l,
            identifierHash: await Fi(l),
            message: [r.message, ...u],
          };
        }
        async function Dl(r, e) {
          const { bIncludeMessageInIdentifier: t, cCallsitesToIgnore: n } = e,
            a =
              r.stack?.split(`
`) ?? [],
            o = a[n],
            l = o.split("/");
          let u = l[l.length - 1];
          (o.indexOf("@") > -1 && (u = o.split("@")[0] + "@" + u),
            t && (u = `${u} ${r.message}`));
          const g = a
            .map((b) => {
              const f = b.match(/(.*@)?(.*):(\d+):(\d+)/);
              if (!f) return b;
              if (f.length === 5) {
                const [h, B, z, S, A] = f,
                  N = parseInt(S),
                  Gr = parseInt(A);
                if (!isNaN(N) && !isNaN(Gr)) return [B, z, N, Gr];
              }
              return b;
            })
            .filter((b) => !!b);
          return {
            identifier: u,
            identifierHash: await Fi(u),
            message: [r.message, ...g],
          };
        }
        let vi;
        const Pn = () => (vi || (vi = new Ll()), vi);
        async function Fi(r) {
          try {
            return (await Tl(r)).slice(0, 16);
          } catch {
            return "";
          }
        }
        function Vl() {
          return 1e3 * 10;
        }
        const Il = 0,
          y6 = 1,
          E6 = 2,
          w6 = 100,
          B6 = 100,
          T6 = 113,
          v6 = 115,
          F6 = 120,
          z6 = 121,
          R6 = 123,
          O6 = 124,
          S6 = 126,
          A6 = 127,
          W6 = 130,
          L6 = 131,
          j6 = 132,
          x6 = 133,
          U6 = 134,
          P6 = 135,
          N6 = 136,
          G6 = 137,
          D6 = 138,
          V6 = 139,
          I6 = 140,
          H6 = 141,
          K6 = 142,
          Y6 = 143,
          $6 = 144,
          _6 = 145,
          X6 = 146,
          Q6 = 147,
          J6 = 148,
          C6 = 149,
          Z6 = 150,
          q6 = 151,
          ev = 152,
          tv = 153,
          rv = 200,
          nv = 200,
          sv = 201,
          iv = 202,
          av = 203,
          ov = 204,
          cv = 205,
          lv = 215,
          uv = 221,
          dv = 225,
          mv = 226,
          gv = 227,
          fv = 228,
          bv = 229,
          hv = 230,
          Mv = 233,
          pv = 234,
          kv = 235,
          yv = 236,
          Ev = 237,
          wv = 238,
          Bv = 240,
          Tv = 241,
          vv = 242,
          Fv = 243,
          zv = 244,
          Rv = 245,
          Ov = 246,
          Sv = 247,
          Av = 248,
          Wv = 249,
          Lv = 250,
          jv = 251,
          xv = 300,
          Uv = 300,
          Pv = 301,
          Nv = 307,
          Gv = 308,
          Dv = 309,
          Vv = 316,
          Iv = 317,
          Hv = 318,
          Kv = 320,
          Yv = 321,
          $v = 322,
          _v = 323,
          Xv = 324,
          Qv = 325,
          Jv = 326,
          Cv = 327,
          Zv = 329,
          qv = 331,
          e5 = 332,
          t5 = 334,
          r5 = 335,
          n5 = 336,
          s5 = 337,
          i5 = 338,
          a5 = 339,
          o5 = 340,
          c5 = 341,
          l5 = 342,
          u5 = 343,
          d5 = 344,
          m5 = 400,
          g5 = 402,
          f5 = 405,
          b5 = 406,
          h5 = 423,
          M5 = 424,
          p5 = 425,
          k5 = 426,
          y5 = 431,
          E5 = 432,
          w5 = 434,
          B5 = 435,
          T5 = 436,
          v5 = 500,
          F5 = 504,
          z5 = 505,
          R5 = 508,
          O5 = 509,
          S5 = 510,
          A5 = 511,
          W5 = 512,
          L5 = 513,
          j5 = 516,
          x5 = 517,
          U5 = 518,
          P5 = 519,
          N5 = 522,
          G5 = 523,
          D5 = 525,
          V5 = 526,
          I5 = 527,
          H5 = 528,
          K5 = 529,
          Y5 = 530,
          $5 = 531,
          _5 = 532,
          X5 = 533,
          Q5 = 534,
          J5 = 535,
          C5 = 536,
          Z5 = 537,
          q5 = 538,
          eF = 541,
          tF = 542,
          rF = 550,
          nF = 551,
          sF = 552,
          iF = 553,
          aF = 554,
          oF = 555,
          cF = 560,
          lF = 561,
          uF = 563,
          dF = 566,
          mF = 567,
          gF = 568,
          fF = 569,
          bF = 570,
          hF = 571,
          MF = 572,
          pF = 573,
          kF = 574,
          yF = 575,
          EF = 576,
          wF = 577,
          BF = 578,
          TF = 579,
          vF = 580,
          FF = 581,
          zF = 582,
          RF = 583,
          OF = 584,
          SF = 586,
          AF = 587,
          WF = 588,
          LF = 589,
          jF = 590,
          xF = 591,
          UF = 592,
          PF = 593,
          NF = 596,
          GF = 597,
          DF = 598,
          VF = 600,
          IF = 600,
          HF = 601,
          KF = 602,
          YF = 604,
          $F = 605,
          _F = 606,
          XF = 607,
          QF = 608,
          JF = 609,
          CF = 610,
          ZF = 611,
          qF = 625,
          ez = 628,
          tz = 629,
          rz = 630,
          nz = 631,
          sz = 633,
          iz = 634,
          az = 635,
          oz = 636,
          cz = 637,
          lz = 638,
          uz = 639,
          dz = 640,
          mz = 641,
          gz = 642,
          fz = 643,
          bz = 644,
          hz = 645,
          Mz = 646,
          pz = 650,
          kz = 700,
          yz = 701,
          Ez = 702,
          wz = 703,
          Bz = 704,
          Tz = 705,
          vz = 706,
          Fz = 707,
          zz = 710,
          Rz = 712,
          Oz = 714,
          Sz = 715,
          Az = 716,
          Wz = 718,
          Lz = 719,
          jz = 720,
          xz = 721,
          Uz = 726,
          Pz = 727,
          Nz = 730,
          Gz = 731,
          Dz = 738,
          Vz = 740,
          Iz = 741,
          Hz = 742,
          Kz = 743,
          Yz = 744,
          $z = 745,
          _z = 747,
          Xz = 751,
          Qz = 755,
          Jz = 756,
          Cz = 757,
          Zz = 758,
          qz = 759,
          eR = 760,
          tR = 763,
          rR = 764,
          nR = 765,
          sR = 766,
          iR = 767,
          aR = 768,
          oR = 771,
          cR = 773,
          lR = 774,
          uR = 779,
          dR = 780,
          mR = 782,
          gR = 785,
          fR = 791,
          bR = 792,
          hR = 796,
          MR = 797,
          pR = 798,
          kR = 799,
          yR = 800,
          ER = 801,
          wR = 802,
          BR = 803,
          TR = 805,
          vR = 807,
          FR = 808,
          zR = 809,
          RR = 810,
          OR = 813,
          SR = 814,
          AR = 815,
          WR = 818,
          LR = 819,
          jR = 820,
          xR = 821,
          UR = 822,
          PR = 830,
          NR = 831,
          GR = 832,
          DR = 839,
          VR = 842,
          IR = 845,
          HR = 846,
          KR = 848,
          YR = 849,
          $R = 850,
          _R = 851,
          XR = 855,
          QR = 856,
          JR = 857,
          CR = 858,
          ZR = 860,
          qR = 880,
          eO = 896,
          tO = 897,
          rO = 900,
          nO = 901,
          sO = 903,
          iO = 905,
          aO = 906,
          oO = 907,
          cO = 908,
          lO = 909,
          uO = 918,
          dO = 919,
          mO = 920,
          gO = 921,
          fO = 922,
          bO = 923,
          hO = 936,
          MO = 937,
          pO = 938,
          kO = 939,
          yO = 940,
          EO = 941,
          wO = 1e3,
          BO = 1e3,
          TO = 1004,
          vO = 1005,
          FO = 1006,
          zO = 1010,
          RO = 1019,
          OO = 1020,
          SO = 1023,
          AO = 1024,
          WO = 1025,
          LO = 1026,
          jO = 1027,
          xO = 1028,
          UO = 1029,
          PO = 1100,
          NO = 1100,
          GO = 1101,
          DO = 1102,
          VO = 1103,
          IO = 1104,
          HO = 1105,
          KO = 1106,
          YO = 1107,
          $O = 1108,
          _O = 1109,
          XO = 1110,
          QO = 1111,
          JO = 1112,
          CO = 1114,
          ZO = 1115,
          qO = 1116,
          eS = 1117,
          tS = 1118,
          rS = 1119,
          nS = 1120,
          sS = 1121,
          iS = 1122,
          aS = 1123,
          oS = 1124,
          cS = 1125,
          lS = 1126,
          uS = 1127,
          dS = 1128,
          mS = 1129,
          gS = 1130,
          fS = 1131,
          bS = 1132,
          hS = 1133,
          MS = 1134,
          pS = 1135,
          kS = 1136,
          yS = 1137,
          ES = 1200,
          wS = 1200,
          BS = 1201,
          TS = 1202,
          vS = 1203,
          FS = 1204,
          zS = 1300,
          RS = 1300,
          OS = 1301,
          SS = 1302,
          AS = 1303,
          WS = 1304,
          LS = 1305,
          jS = 1400,
          xS = 1401,
          US = 1402,
          PS = 1403,
          NS = 1404,
          GS = 1406,
          DS = 1408,
          VS = 1409,
          IS = 1410,
          HS = 1411,
          KS = 1417,
          YS = 1418,
          $S = 1421,
          _S = 1422,
          XS = 1425,
          QS = 1426,
          JS = 1427,
          CS = 1433,
          ZS = 1434,
          qS = 1435,
          eA = 1437,
          tA = 1438,
          rA = 1440,
          nA = 1441,
          sA = 1445,
          iA = 1446,
          aA = 1448,
          oA = 1449,
          cA = 1450,
          lA = 1451,
          uA = 1452,
          dA = 1453,
          mA = 1454,
          gA = 1455,
          fA = 1456,
          bA = 1457,
          hA = 1458,
          MA = 1459,
          pA = 1460,
          kA = 1461,
          yA = 1462,
          EA = 1463,
          wA = 1464,
          BA = 1465,
          TA = 1468,
          vA = 1469,
          FA = 1470,
          zA = 1471,
          RA = 1472,
          OA = 1473,
          SA = 1474,
          AA = 1475,
          WA = 1476,
          LA = 1477,
          jA = 1478,
          xA = 1479,
          UA = 1480,
          PA = 1481,
          NA = 1482,
          GA = 1483,
          DA = 1484,
          VA = 1485,
          IA = 1486,
          HA = 1487,
          KA = 1494,
          YA = 1495,
          $A = 1496,
          _A = 1497,
          XA = 1498,
          QA = 1499,
          JA = 1500,
          CA = 1501,
          ZA = 1502,
          qA = 1503,
          eW = 1504,
          tW = 1505,
          rW = 1506,
          nW = 1510,
          sW = 1511,
          iW = 1512,
          aW = 1513,
          oW = 1514,
          cW = 1515,
          lW = 1516,
          uW = 1517,
          dW = 1518,
          mW = 1519,
          gW = 1600,
          fW = 1601,
          bW = 1603,
          hW = 1612,
          MW = 1615,
          pW = 1616,
          kW = 1617,
          yW = 1620,
          EW = 1621,
          wW = 1622,
          BW = 1623,
          TW = 1624,
          vW = 1628,
          FW = 1629,
          zW = 1631,
          RW = 1700,
          OW = 1701,
          SW = 1702,
          AW = 1703,
          WW = 1704,
          LW = 1705,
          jW = 1706,
          xW = 1707,
          UW = 2200,
          PW = 2203,
          NW = 2206,
          GW = 2207,
          DW = 2208,
          VW = 2209,
          IW = 2210,
          HW = 2212,
          KW = 2216,
          YW = 2217,
          $W = 2218,
          _W = 2219,
          XW = 2220,
          QW = 2221,
          JW = 2222,
          CW = 2223,
          ZW = 2224,
          qW = 2225,
          eL = 2226,
          tL = 2227,
          rL = 2228,
          nL = 2229,
          sL = 2230,
          iL = 2231,
          aL = 2232,
          oL = 2233,
          cL = 2234,
          lL = 2235,
          uL = 2236,
          dL = 2237,
          mL = 2238,
          gL = 2239,
          fL = 2240,
          bL = 2241,
          hL = 2242,
          ML = 2243,
          pL = 2244,
          kL = 2245,
          yL = 2246,
          EL = 2247,
          wL = 2500,
          BL = 2502,
          TL = 2900,
          vL = 2902,
          FL = 2903,
          zL = 2905,
          RL = 2907,
          OL = 2908,
          SL = 3e3,
          AL = 3e3,
          WL = 3001,
          LL = 3002,
          jL = 3100,
          xL = 3150,
          UL = 3161,
          PL = 3162,
          NL = 3200,
          GL = 3201,
          DL = 3202,
          VL = 3203,
          IL = 3204,
          HL = 3205,
          KL = 3206,
          YL = 3207,
          $L = 3208,
          _L = 3209,
          XL = 3210,
          QL = 3211,
          JL = 3212,
          CL = 3213,
          ZL = 3214,
          qL = 3400,
          e9 = 3401,
          t9 = 3402,
          r9 = 3403,
          n9 = 3404,
          s9 = 3406,
          i9 = 3600,
          a9 = 4e3,
          o9 = 4001,
          c9 = 4002,
          l9 = 4006,
          u9 = 4007,
          d9 = 4008,
          m9 = 4009,
          g9 = 4010,
          f9 = 4011,
          b9 = 4012,
          h9 = 4013,
          M9 = 4015,
          p9 = 4021,
          k9 = 4022,
          y9 = 4023,
          E9 = 4024,
          w9 = 4025,
          B9 = 4026,
          T9 = 4039,
          v9 = 4040,
          F9 = 4041,
          z9 = 4042,
          R9 = 4043,
          O9 = 4044,
          S9 = 4045,
          A9 = 4046,
          W9 = 4047,
          L9 = 4050,
          j9 = 4051,
          x9 = 4052,
          U9 = 4053,
          P9 = 4054,
          N9 = 4055,
          G9 = 4056,
          D9 = 4057,
          V9 = 4059,
          I9 = 4060,
          H9 = 4061,
          K9 = 4062,
          Y9 = 4064,
          $9 = 4065,
          _9 = 4066,
          X9 = 4067,
          Q9 = 4068,
          J9 = 4073,
          C9 = 4074,
          Z9 = 4075,
          q9 = 4076,
          ej = 4077,
          tj = 4079,
          rj = 4080,
          nj = 4081,
          sj = 4082,
          ij = 4083,
          aj = 4084,
          oj = 4085,
          cj = 4086,
          lj = 4087,
          uj = 4090,
          dj = 4091,
          mj = 4092,
          gj = 4095,
          fj = 4096,
          bj = 4097,
          hj = 4098,
          Mj = 4099,
          pj = 4100,
          kj = 4101,
          yj = 4102,
          Ej = 4103,
          wj = 4104,
          Bj = 4105,
          Tj = 4106,
          vj = 4107,
          Fj = 4108,
          zj = 4110,
          Rj = 4111,
          Oj = 4112,
          Sj = 4113,
          Aj = 4114,
          Wj = 4115,
          Lj = 4116,
          jj = 4117,
          xj = 4118,
          Uj = 4120,
          Pj = 4121,
          Nj = 4122,
          Gj = 4123,
          Dj = 4124,
          Vj = 4125,
          Ij = 4126,
          Hj = 4127,
          Kj = 4128,
          Yj = 4140,
          $j = 4143,
          _j = 4144,
          Xj = 4145,
          Qj = 4147,
          Jj = 4148,
          Cj = 4149,
          Zj = 4152,
          qj = 4153,
          ex = 4158,
          tx = 4159,
          rx = 4160,
          nx = 4161,
          sx = 4162,
          ix = 4163,
          ax = 4165,
          ox = 4166,
          cx = 4172,
          lx = 4173,
          ux = 4174,
          dx = 4175,
          mx = 4184,
          gx = 4185,
          fx = 4190,
          bx = 4191,
          hx = 4194,
          Mx = 4195,
          px = 4197,
          kx = 4198,
          yx = 4199,
          Ex = 4206,
          wx = 4209,
          Bx = 4210,
          Tx = 4211,
          vx = 4213,
          Fx = 4219,
          zx = 4220,
          Rx = 4224,
          Ox = 4231,
          Sx = 4232,
          Ax = 4236,
          Wx = 4241,
          Lx = 4242,
          jx = 4244,
          xx = 4245,
          Ux = 4246,
          Px = 4247,
          Nx = 4248,
          Gx = 4249,
          Dx = 4250,
          Vx = 4251,
          Ix = 4252,
          Hx = 4255,
          Kx = 4256,
          Yx = 4258,
          $x = 4260,
          _x = 4262,
          Xx = 4264,
          Qx = 4265,
          Jx = 4266,
          Cx = 4267,
          Zx = 4269,
          qx = 4270,
          e7 = 4271,
          t7 = 4272,
          r7 = 4278,
          n7 = 4279,
          s7 = 4280,
          i7 = 4281,
          a7 = 4282,
          o7 = 4283,
          c7 = 4284,
          l7 = 4285,
          u7 = 4286,
          d7 = 4287,
          m7 = 4288,
          g7 = 4289,
          f7 = 4290,
          b7 = 4294,
          h7 = 4295,
          M7 = 4298,
          p7 = 4299,
          k7 = 4300,
          y7 = 4301,
          E7 = 4302,
          w7 = 4307,
          B7 = 4308,
          T7 = 4309,
          v7 = 4310,
          F7 = 4311,
          z7 = 4312,
          R7 = 4313,
          O7 = 4314,
          S7 = 4315,
          A7 = 4316,
          W7 = 4317,
          L7 = 4320,
          j7 = 4321,
          x7 = 4322,
          U7 = 4323,
          P7 = 4324,
          N7 = 4325,
          G7 = 4326,
          D7 = 4327,
          V7 = 4328,
          I7 = 4329,
          H7 = 4330,
          K7 = 4331,
          Y7 = 4332,
          $7 = 4333,
          _7 = 4334,
          X7 = 4335,
          Q7 = 4336,
          J7 = 4337,
          C7 = 4338,
          Z7 = 4339,
          q7 = 4340,
          eU = 4341,
          tU = 4342,
          rU = 4344,
          nU = 4345,
          sU = 4346,
          iU = 4347,
          aU = 4348,
          oU = 4349,
          cU = 4350,
          lU = 4351,
          uU = 4352,
          dU = 4353,
          mU = 4354,
          gU = 4355,
          fU = 4356,
          bU = 4357,
          hU = 4358,
          MU = 4359,
          pU = 4360,
          kU = 4361,
          yU = 4362,
          EU = 4365,
          wU = 4366,
          BU = 4367,
          TU = 4368,
          vU = 4372,
          FU = 4373,
          zU = 4374,
          RU = 4375,
          OU = 4376,
          SU = 4377,
          AU = 4380,
          WU = 4381,
          LU = 4383,
          jU = 4384,
          xU = 4385,
          UU = 4386,
          PU = 4389,
          NU = 4390,
          GU = 4391,
          DU = 4392,
          VU = 4393,
          IU = 4394,
          HU = 4395,
          KU = 4396,
          YU = 4397,
          $U = 4398,
          _U = 4399,
          XU = 4400,
          QU = 4401,
          JU = 4402,
          CU = 4403,
          ZU = 4404,
          qU = 4405,
          e8 = 4406,
          t8 = 4407,
          r8 = 4408,
          n8 = 4409,
          s8 = 4410,
          i8 = 4411,
          a8 = 4412,
          o8 = 4413,
          c8 = 4414,
          l8 = 4415,
          u8 = 4416,
          d8 = 4417,
          m8 = 4418,
          g8 = 4419,
          f8 = 4420,
          b8 = 4421,
          h8 = 4422,
          M8 = 4423,
          p8 = 4424,
          k8 = 4425,
          y8 = 4426,
          E8 = 4427,
          w8 = 5e3,
          B8 = 5003,
          T8 = 5004,
          v8 = 5009,
          F8 = 5010,
          z8 = 5011,
          R8 = 5012,
          O8 = 5013,
          S8 = 5014,
          A8 = 5200,
          W8 = 5215,
          L8 = 5217,
          j8 = 5218,
          x8 = 5226,
          U8 = 5227,
          P8 = 5228,
          N8 = 5229,
          G8 = 5230,
          D8 = 5231,
          V8 = 5232,
          I8 = 5233,
          H8 = 5234,
          K8 = 5235,
          Y8 = 5236,
          $8 = 5237,
          _8 = 5238,
          X8 = 5239,
          Q8 = 5240,
          J8 = 5241,
          C8 = 5242,
          Z8 = 5243,
          q8 = 5244,
          eP = 5245,
          tP = 5246,
          rP = 5247,
          nP = 5248,
          sP = 5249,
          iP = 5250,
          aP = 5253,
          oP = 5254,
          cP = 5400,
          lP = 5401,
          uP = 5402,
          dP = 5403,
          mP = 5404,
          gP = 5405,
          fP = 5407,
          bP = 5408,
          hP = 5409,
          MP = 5410,
          pP = 5411,
          kP = 5412,
          yP = 5413,
          EP = 5414,
          wP = 5415,
          BP = 5416,
          TP = 5417,
          vP = 5418,
          FP = 5419,
          zP = 5426,
          RP = 5427,
          OP = 5428,
          SP = 5429,
          AP = 5430,
          WP = 5431,
          LP = 5432,
          jP = 5433,
          xP = 5434,
          UP = 5435,
          PP = 5438,
          NP = 5439,
          GP = 5443,
          DP = 5444,
          VP = 5445,
          IP = 5446,
          HP = 5450,
          KP = 5451,
          YP = 5452,
          $P = 5453,
          _P = 5456,
          XP = 5457,
          QP = 5458,
          JP = 5459,
          CP = 5460,
          ZP = 5461,
          qP = 5463,
          eN = 5464,
          tN = 5465,
          rN = 5466,
          nN = 5467,
          sN = 5480,
          iN = 5481,
          aN = 5482,
          oN = 5485,
          cN = 5486,
          lN = 5487,
          uN = 5488,
          dN = 5489,
          mN = 5490,
          gN = 5491,
          fN = 5492,
          bN = 5493,
          hN = 5494,
          MN = 5495,
          pN = 5496,
          kN = 5497,
          yN = 5498,
          EN = 5500,
          wN = 5501,
          BN = 5502,
          TN = 5503,
          vN = 5504,
          FN = 5505,
          zN = 5506,
          RN = 5508,
          ON = 5509,
          SN = 5511,
          AN = 5512,
          WN = 5514,
          LN = 5515,
          jN = 5516,
          xN = 5517,
          UN = 5518,
          PN = 5519,
          NN = 5520,
          GN = 5521,
          DN = 5522,
          VN = 5523,
          IN = 5524,
          HN = 5525,
          KN = 5526,
          YN = 5527,
          $N = 5528,
          _N = 5529,
          XN = 5530,
          QN = 5531,
          JN = 5532,
          CN = 5535,
          ZN = 5536,
          qN = 5543,
          eG = 5544,
          tG = 5545,
          rG = 5549,
          nG = 5550,
          sG = 5551,
          iG = 5552,
          aG = 5553,
          oG = 5554,
          cG = 5555,
          lG = 5556,
          uG = 5557,
          dG = 5558,
          mG = 5559,
          gG = 5560,
          fG = 5561,
          bG = 5562,
          hG = 5563,
          MG = 5564,
          pG = 5565,
          kG = 5566,
          yG = 5567,
          EG = 5568,
          wG = 5569,
          BG = 5570,
          TG = 5571,
          vG = 5572,
          FG = 5573,
          zG = 5574,
          RG = 5575,
          OG = 5576,
          SG = 5577,
          AG = 5578,
          WG = 5582,
          LG = 5583,
          jG = 5584,
          xG = 5585,
          UG = 5586,
          PG = 5587,
          NG = 5588,
          GG = 5589,
          DG = 5592,
          VG = 5593,
          IG = 5594,
          HG = 5595,
          KG = 5596,
          YG = 5597,
          $G = 5598,
          _G = 5599,
          XG = 5600,
          QG = 5601,
          JG = 5602,
          CG = 5603,
          ZG = 5604,
          qG = 5605,
          eD = 5606,
          tD = 5607,
          rD = 5608,
          nD = 5609,
          sD = 5610,
          iD = 5611,
          aD = 5612,
          oD = 5613,
          cD = 5614,
          lD = 5615,
          uD = 5616,
          dD = 5617,
          mD = 5618,
          gD = 5619,
          fD = 5620,
          bD = 5621,
          hD = 5622,
          MD = 5623,
          pD = 5624,
          kD = 5625,
          yD = 5626,
          ED = 5627,
          wD = 5800,
          BD = 5812,
          TD = 5813,
          vD = 5827,
          FD = 5828,
          zD = 5829,
          RD = 5830,
          OD = 5831,
          SD = 5844,
          AD = 5847,
          WD = 5848,
          LD = 5849,
          jD = 6200,
          xD = 6201,
          UD = 6202,
          PD = 6400,
          ND = 6401,
          GD = 6403,
          DD = 6404,
          VD = 6405,
          ID = 6406,
          HD = 6407,
          KD = 6600,
          YD = 6601,
          $D = 6602,
          _D = 6603,
          XD = 6604,
          QD = 6605,
          JD = 6606,
          CD = 6607,
          ZD = 6608,
          qD = 6609,
          eV = 6610,
          tV = 6611,
          rV = 6612,
          nV = 6613,
          sV = 6614,
          iV = 6615,
          aV = 6616,
          oV = 6617,
          cV = 6618,
          lV = 6619,
          uV = 6620,
          dV = 6621,
          mV = 6622,
          gV = 6623,
          fV = 6624,
          bV = 6625,
          hV = 6626,
          MV = 6627,
          pV = 6628,
          kV = 6629,
          yV = 6630,
          EV = 6631,
          wV = 6800,
          BV = 6801,
          TV = 6802,
          vV = 6803,
          FV = 6804,
          zV = 6805,
          RV = 6806,
          OV = 6807,
          SV = 6808,
          AV = 6809,
          WV = 6810,
          LV = 6812,
          jV = 6813,
          xV = 6814,
          UV = 6815,
          PV = 7e3,
          NV = 7001,
          GV = 7002,
          DV = 7003,
          VV = 7004,
          IV = 7005,
          HV = 7006,
          KV = 7007,
          YV = 7100,
          $V = 7101,
          _V = 7200,
          XV = 7300,
          QV = 7301,
          JV = 7302,
          CV = 7307,
          ZV = 7308,
          qV = 7309,
          eI = 7310,
          tI = 7311,
          rI = 7312,
          nI = 7315,
          sI = 7316,
          iI = 7325,
          aI = 7326,
          oI = 7327,
          cI = 7328,
          lI = 7331,
          uI = 7337,
          dI = 7338,
          mI = 7339,
          gI = 7341,
          fI = 7342,
          bI = 7343,
          hI = 7344,
          MI = 7349,
          pI = 7350,
          kI = 7351,
          yI = 7352,
          EI = 7353,
          wI = 7354,
          BI = 7355,
          TI = 7356,
          vI = 7359,
          FI = 7364,
          zI = 7365,
          RI = 7366,
          OI = 7367,
          SI = 7369,
          AI = 7370,
          WI = 7371,
          LI = 7378,
          jI = 7379,
          xI = 7380,
          UI = 7381,
          PI = 7500,
          NI = 7501,
          GI = 7502,
          DI = 7503,
          VI = 7504,
          II = 7505,
          HI = 7506,
          KI = 7507,
          YI = 7508,
          $I = 7510,
          _I = 7511,
          XI = 7512,
          QI = 7513,
          JI = 7514,
          CI = 7515,
          ZI = 7516,
          qI = 7517,
          eH = 7518,
          tH = 7519,
          rH = 7520,
          nH = 7521,
          sH = 7522,
          iH = 7523,
          aH = 7524,
          oH = 7525,
          cH = 7526,
          lH = 7527,
          uH = 7528,
          dH = 7529,
          mH = 7530,
          gH = 7600,
          fH = 7600,
          bH = 7601,
          hH = 7602,
          MH = 7603,
          pH = 7604,
          kH = 7605,
          yH = 7606,
          EH = 7607,
          wH = 7700,
          BH = 7701,
          TH = 7702,
          vH = 7703,
          FH = 7704,
          zH = 7705,
          RH = 7706,
          OH = 7707,
          SH = 7708,
          AH = 7711,
          WH = 7712,
          LH = 7713,
          jH = 7714,
          xH = 7800,
          UH = 7800,
          PH = 7801,
          NH = 7803,
          GH = 7804,
          DH = 7805,
          VH = 7806,
          IH = 7807,
          HH = 7808,
          KH = 7900,
          YH = 7900,
          $H = 7901,
          _H = 7902,
          XH = 8e3,
          QH = 8100,
          JH = 8200,
          CH = 8300,
          ZH = 8300,
          qH = 8301,
          eK = 8303,
          tK = 8304,
          rK = 8305,
          nK = 8306,
          sK = 8400,
          iK = 8401,
          aK = 8402,
          oK = 8500,
          cK = 8503,
          lK = 8504,
          uK = 8507,
          dK = 8508,
          mK = 8509,
          gK = 8510,
          fK = 8600,
          bK = 8600,
          hK = 8601,
          MK = 8700,
          pK = 8700,
          kK = 8701,
          yK = 8900,
          EK = 8901,
          wK = 8902,
          BK = 8903,
          TK = 8904,
          vK = 8905,
          FK = 8906,
          zK = 8907,
          RK = 8908,
          OK = 9e3,
          SK = 9e3,
          AK = 9001,
          WK = 9002,
          LK = 9100,
          jK = 9100,
          xK = 9101,
          UK = 9102,
          PK = 9103,
          NK = 9104,
          GK = 9105,
          DK = 9106,
          VK = 9107,
          IK = 9110,
          HK = 9111,
          KK = 9112,
          YK = 9113,
          $K = 9114,
          _K = 9115,
          XK = 9116,
          QK = 9117,
          JK = 9118,
          CK = 9119,
          ZK = 9120,
          qK = 9121,
          eY = 9122,
          tY = 9123,
          rY = 9124,
          nY = 9125,
          sY = 9126,
          iY = 9127,
          aY = 9128,
          oY = 9129,
          cY = 9130,
          lY = 9131,
          uY = 9132,
          dY = 9133,
          mY = 9134,
          gY = 9135,
          fY = 9200,
          bY = 9200,
          hY = 9201,
          MY = 9202,
          pY = 9203,
          kY = 9300,
          yY = 9330,
          EY = 9331,
          wY = 9400,
          BY = 9406,
          TY = 9500,
          vY = 9500,
          FY = 9501,
          zY = 9502,
          RY = 9503,
          OY = 9504,
          SY = 9505,
          AY = 9506,
          WY = 9507,
          LY = 9508,
          jY = 9509,
          xY = 9510,
          UY = 9511,
          PY = 9512,
          NY = 9513,
          GY = 9514,
          DY = 9515,
          VY = 9516,
          IY = 9517,
          HY = 9518,
          KY = 9519,
          YY = 9520,
          $Y = 9521,
          _Y = 9522,
          XY = 9523,
          QY = 9524,
          JY = 9525,
          CY = 9526,
          ZY = 9527,
          qY = 9528,
          e$ = 9529,
          t$ = 9530,
          r$ = 9531,
          n$ = 9532,
          s$ = 9533,
          i$ = 9534,
          a$ = 9535,
          o$ = 9536,
          c$ = 9537,
          l$ = 9538,
          u$ = 9539,
          d$ = 9540,
          m$ = 9600,
          g$ = 9600,
          f$ = 9601,
          b$ = 9700,
          h$ = 9700,
          M$ = 9701,
          p$ = 9702,
          k$ = 9704,
          y$ = 9800,
          E$ = 9800,
          w$ = 9801,
          B$ = 9802,
          T$ = 9803,
          v$ = 9804,
          F$ = 9805,
          z$ = 9806,
          R$ = 9807,
          O$ = 9808,
          S$ = 9900,
          A$ = 9900,
          W$ = 9901,
          L$ = 9902,
          j$ = 9903,
          x$ = 9999,
          U$ = 1e4,
          P$ = 1e4,
          N$ = 10100,
          G$ = 10100,
          D$ = 10101,
          V$ = 10102,
          I$ = 10103,
          H$ = 10104,
          K$ = 10105,
          Y$ = 10106,
          $$ = 12e3,
          _$ = 12e3,
          X$ = 12001,
          Q$ = 12100,
          J$ = 12100,
          C$ = 12200,
          Z$ = 12200,
          q$ = 12201,
          e_ = 12202,
          t_ = 12203,
          r_ = 12204,
          n_ = 12300,
          s_ = 12301;
        class zi {
          m_nOffset;
          m_nLength;
          m_viewPacket;
          m_rgubPacket;
          m_iGet;
          m_iPut;
          constructor(e, t = 0, n) {
            ((this.m_nOffset = t || 0),
              e instanceof Uint8Array || e instanceof DataView
                ? ((this.m_nLength = n || e.byteLength - this.m_nOffset),
                  (this.m_nOffset += e.byteOffset),
                  (this.m_viewPacket = new DataView(
                    e.buffer,
                    this.m_nOffset,
                    this.m_nLength,
                  )))
                : ((this.m_nLength = n || e.byteLength - this.m_nOffset),
                  (this.m_viewPacket = new DataView(
                    e,
                    this.m_nOffset,
                    this.m_nLength,
                  ))),
              (this.m_rgubPacket = new Uint8Array(
                this.m_viewPacket.buffer,
                this.m_viewPacket.byteOffset,
                this.m_viewPacket.byteLength,
              )),
              (this.m_iGet = 0),
              (this.m_iPut = 0));
          }
          TellGet() {
            return this.m_iGet + this.m_viewPacket.byteOffset;
          }
          GetPacket() {
            return this.m_viewPacket.buffer;
          }
          GetUint8() {
            return this.m_viewPacket.getUint8(this.m_iGet++);
          }
          GetUint32(e = !0) {
            const t = this.m_viewPacket.getUint32(this.m_iGet, e);
            return ((this.m_iGet += 4), t);
          }
          SeekGetHead(e = 0) {
            this.m_iGet = e || 0;
          }
          SeekGetCurrent(e) {
            this.m_iGet += e;
          }
          TellPut() {
            return this.m_iPut + this.m_viewPacket.byteOffset;
          }
          TellMaxPut() {
            return this.m_viewPacket.byteLength;
          }
          PutUint8(e) {
            this.m_viewPacket.setUint8(this.m_iPut++, e);
          }
          PutUint32(e, t = !0) {
            (this.m_viewPacket.setUint32(this.m_iPut, e, t),
              (this.m_iPut += 4));
          }
          PutBytes(e) {
            (this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length));
          }
          SeekPut(e) {
            this.m_iPut += e;
          }
          GetCountBytesRemaining() {
            return this.m_viewPacket.byteLength - this.m_iGet;
          }
        }
        const Ua = null;
        function i_(r) {
          let e = "";
          for (let t = 0; t < r.length; t++) {
            const n = r[t];
            e += Ua[n >>> 4] + Ua[n & 15];
          }
          return e;
        }
        function a_(r) {
          const e = new Uint8Array(r.length / 2);
          for (let t = 0; t < r.length - 1; t += 2)
            e[t / 2] = parseInt(r.substr(t, 2), 16);
          return e;
        }
        const Hl = 8;
        class Ri {
          static InitHeaderFromPacket(e) {
            return new Ri(void 0, e);
          }
          m_eMsg;
          m_bValid;
          m_netPacket;
          m_cubHeader;
          m_header;
          m_body;
          constructor(e, t, n, a, o, l) {
            if (a)
              ((this.m_eMsg = a.m_eMsg),
                (this.m_bValid = a.m_bValid),
                this.m_bValid &&
                  ((this.m_netPacket = a.m_netPacket),
                  (this.m_cubHeader = a.m_cubHeader),
                  (this.m_header = a.m_header),
                  this.InitForType(n)));
            else {
              if (((this.m_header = new C(null)), (this.m_bValid = !0), t))
                if (
                  ((this.m_netPacket = t),
                  this.m_netPacket.SeekGetHead(),
                  (this.m_eMsg = this.m_netPacket.GetUint32()),
                  this.m_eMsg & 2147483648)
                ) {
                  ((this.m_eMsg = this.m_eMsg & 2147483647),
                    (this.m_cubHeader = this.m_netPacket.GetUint32()));
                  try {
                    (C.deserializeBinaryFromReader(
                      this.m_header,
                      new d.BinaryReader(
                        this.m_netPacket.GetPacket(),
                        this.m_netPacket.TellGet(),
                        this.m_cubHeader,
                      ),
                    ),
                      this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                      n && this.InitForType(n));
                  } catch (u) {
                    (console.error("Exception deserializing protobuf", u),
                      (this.m_bValid = !1));
                  }
                } else this.m_bValid = !1;
              else
                (e && (this.m_eMsg = e),
                  l && n
                    ? (this.m_body = n.fromObject(l))
                    : n && (this.m_body = new n()));
              o && this.m_header.set_jobid_target(o.Hdr().jobid_target());
            }
          }
          InitForType(e) {
            ((this.m_body = new e()),
              this.m_netPacket &&
                (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
                this.ReadBodyFromBuffer(e, this.m_netPacket)));
          }
          ReadBodyFromBuffer(e, t) {
            try {
              e.deserializeBinaryFromReader(
                this.m_body,
                new d.BinaryReader(
                  t.GetPacket(),
                  t.TellGet(),
                  t.GetCountBytesRemaining(),
                ),
              );
            } catch (n) {
              this.m_bValid = !1;
              const a = Pn(),
                o = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
              (a &&
                a.ReportError(new Error(o), {
                  bIncludeMessageInIdentifier: !0,
                }),
                console.warn(o),
                console.log(n.stack || n));
            }
          }
          BIsValid() {
            return this.m_bValid;
          }
          Body() {
            return this.m_body;
          }
          SetBodyJSON(e) {
            ((e.toObject = () => e), (this.m_body = e));
          }
          Hdr() {
            return this.m_header;
          }
          GetEMsg() {
            return this.m_eMsg;
          }
          SetEMsg(e) {
            this.m_eMsg = e;
          }
          GetEResult() {
            return this.Hdr().eresult();
          }
          BSuccess() {
            return this.Hdr().eresult() == Tn;
          }
          GetErrorMessage() {
            return this.Hdr().error_message()
              ? this.Hdr().error_message()
              : `eresult ${this.Hdr().eresult()}`;
          }
          Serialize() {
            const e = this.m_header.serializeBinary(),
              t = this.m_body.serializeBinary(),
              n = this.m_eMsg | 2147483648,
              a = new Uint8Array(Hl + e.length + t.length),
              o = new zi(a);
            return (
              o.PutUint32(n),
              o.PutUint32(e.length),
              o.PutBytes(e),
              o.PutBytes(t),
              a
            );
          }
          SerializeBody() {
            const e = this.m_body.serializeBinary(),
              t = new Uint8Array(e.length);
            return (new zi(t).PutBytes(e), t);
          }
          DEBUG_ToObject() {
            return {};
          }
          DEBUG_LogToConsole() {}
        }
        class te extends Ri {
          constructor(e, t = Il, n, a, o) {
            super(t, n, e, a, void 0, o);
          }
          static InitFromPacket(e, t) {
            return new te(e, 0, t);
          }
          static InitFromMsg(e, t) {
            return new te(e, void 0, void 0, t);
          }
          static Init(e, t) {
            return new te(e, t);
          }
          static InitFromObject(e, t) {
            return new te(e, void 0, void 0, void 0, t);
          }
          Body() {
            return super.Body();
          }
          SetBodyFields(e) {
            for (const t in e)
              Array.isArray(e[t])
                ? this.Body()[`add_${t}`] &&
                  e[t].forEach((n) => {
                    this.Body()[`add_${t}`](n);
                  })
                : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
          }
        }
        function Y(r, e, t) {
          let n;
          return (
            e instanceof te ? (n = e) : (n = te.InitFromObject(r, e)),
            t?.strDebugSource !== void 0 &&
              n.Hdr().set_debug_source(t.strDebugSource),
            n
          );
        }
        class Qe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Qe.prototype.username || w(Qe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    username: { n: 1, br: s.readString, bw: i.writeString },
                    password: { n: 2, br: s.readString, bw: i.writeString },
                    steamguardcode: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    remember_password: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return (Qe.sm_mbf || (Qe.sm_mbf = M(Qe.M())), Qe.sm_mbf);
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Qe.M(), e, t);
          }
          static fromObject(e) {
            return p(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Qe();
            return Qe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Qe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Qe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Qe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Login_Request";
          }
        }
        class Je extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Je.prototype.logon_state || w(Je.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    logon_state: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    logon_eresult: { n: 2, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return (Je.sm_mbf || (Je.sm_mbf = M(Je.M())), Je.sm_mbf);
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Je.M(), e, t);
          }
          static fromObject(e) {
            return p(Je.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Je();
            return Je.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Je.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Je.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Je.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Login_Response";
          }
        }
        class cn extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return cn.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new cn();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new cn();
            return cn.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (cn.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              cn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_LoginStatus_Request";
          }
        }
        class Ce extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ce.prototype.username || w(Ce.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    username: { n: 1, br: s.readString, bw: i.writeString },
                    cached_credentials: {
                      n: 2,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    logon_state: { n: 3, br: s.readInt32, bw: i.writeInt32 },
                    logon_eresult: { n: 4, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return (Ce.sm_mbf || (Ce.sm_mbf = M(Ce.M())), Ce.sm_mbf);
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ce.M(), e, t);
          }
          static fromObject(e) {
            return p(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ce();
            return Ce.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ce.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ce.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ce.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_LoginStatus_Response";
          }
        }
        class ln extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return ln.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ln();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ln();
            return ln.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ln.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ln.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_CancelLogin_Request";
          }
        }
        class Ze extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ze.prototype.logon_state || w(Ze.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    logon_state: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    logon_eresult: { n: 2, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return (Ze.sm_mbf || (Ze.sm_mbf = M(Ze.M())), Ze.sm_mbf);
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ze.M(), e, t);
          }
          static fromObject(e) {
            return p(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ze();
            return Ze.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ze.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ze.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ze.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_CancelLogin_Response";
          }
        }
        class un extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return un.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new un();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new un();
            return un.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (un.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              un.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Logout_Request";
          }
        }
        class qe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              qe.prototype.logon_state || w(qe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    logon_state: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    logout_eresult: { n: 2, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return (qe.sm_mbf || (qe.sm_mbf = M(qe.M())), qe.sm_mbf);
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(qe.M(), e, t);
          }
          static fromObject(e) {
            return p(qe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new qe();
            return qe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(qe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (qe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(qe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Logout_Response";
          }
        }
        class et extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              et.prototype.restart || w(et.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    restart: { n: 1, br: s.readBool, bw: i.writeBool },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return (et.sm_mbf || (et.sm_mbf = M(et.M())), et.sm_mbf);
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, t) {
            return k(et.M(), e, t);
          }
          static fromObject(e) {
            return p(et.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new et();
            return et.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(et.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (et.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(et.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Quit_Request";
          }
        }
        class dn extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return dn.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new dn();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new dn();
            return dn.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (dn.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              dn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Quit_Response";
          }
        }
        class mn extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return mn.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new mn();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new mn();
            return mn.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (mn.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              mn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Status_Request";
          }
        }
        class tt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              tt.prototype.logon_state || w(tt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    logon_state: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    logon_eresult: { n: 2, br: s.readInt32, bw: i.writeInt32 },
                    connected: { n: 3, br: s.readBool, bw: i.writeBool },
                    cache_enabled: { n: 4, br: s.readBool, bw: i.writeBool },
                    acct_status: { n: 5, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return (tt.sm_mbf || (tt.sm_mbf = M(tt.M())), tt.sm_mbf);
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(tt.M(), e, t);
          }
          static fromObject(e) {
            return p(tt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new tt();
            return tt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(tt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (tt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(tt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_Status_Response";
          }
        }
        class gn extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return gn.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new gn();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new gn();
            return gn.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (gn.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              gn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_GetLanguage_Request";
          }
        }
        class rt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              rt.prototype.language || w(rt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    language: { n: 1, br: s.readString, bw: i.writeString },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return (rt.sm_mbf || (rt.sm_mbf = M(rt.M())), rt.sm_mbf);
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(rt.M(), e, t);
          }
          static fromObject(e) {
            return p(rt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new rt();
            return rt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(rt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (rt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(rt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_GetLanguage_Response";
          }
        }
        class nt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              nt.prototype.language || w(nt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    language: { n: 1, br: s.readString, bw: i.writeString },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return (nt.sm_mbf || (nt.sm_mbf = M(nt.M())), nt.sm_mbf);
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(nt.M(), e, t);
          }
          static fromObject(e) {
            return p(nt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new nt();
            return nt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(nt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (nt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(nt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_SetLanguage_Request";
          }
        }
        class fn extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return fn.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new fn();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new fn();
            return fn.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (fn.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              fn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_SetLanguage_Response";
          }
        }
        class bn extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return bn.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new bn();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new bn();
            return bn.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (bn.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              bn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ClientStatus_Request";
          }
        }
        class st extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              st.prototype.clients || w(st.M()),
              d.Message.initialize(this, e, 0, -1, [4, 5], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    clients: { n: 4, c: it, r: !0, q: !0 },
                    payments: { n: 5, c: at, r: !0, q: !0 },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return (st.sm_mbf || (st.sm_mbf = M(st.M())), st.sm_mbf);
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, t) {
            return k(st.M(), e, t);
          }
          static fromObject(e) {
            return p(st.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new st();
            return st.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(st.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (st.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(st.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ClientStatus_Response";
          }
        }
        class it extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              it.prototype.ip || w(it.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    ip: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    hostname: { n: 2, br: s.readString, bw: i.writeString },
                    connected: { n: 3, br: s.readBool, bw: i.writeBool },
                    instance_id: {
                      n: 4,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return (it.sm_mbf || (it.sm_mbf = M(it.M())), it.sm_mbf);
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, t) {
            return k(it.M(), e, t);
          }
          static fromObject(e) {
            return p(it.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new it();
            return it.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(it.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (it.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(it.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ClientStatus_Response_ClientInfo";
          }
        }
        class at extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              at.prototype.transid || w(at.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    transid: {
                      n: 1,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    amount: { n: 3, br: s.readString, bw: i.writeString },
                    time_created: { n: 4, br: s.readInt32, bw: i.writeInt32 },
                    purchase_status: {
                      n: 5,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    hostname: { n: 6, br: s.readString, bw: i.writeString },
                    persona_name: { n: 7, br: s.readString, bw: i.writeString },
                    profile_url: { n: 8, br: s.readString, bw: i.writeString },
                    avatar_url: { n: 9, br: s.readString, bw: i.writeString },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return (at.sm_mbf || (at.sm_mbf = M(at.M())), at.sm_mbf);
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, t) {
            return k(at.M(), e, t);
          }
          static fromObject(e) {
            return p(at.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new at();
            return at.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(at.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (at.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(at.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ClientStatus_Response_Payment";
          }
        }
        class en extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return en.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new en();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new en();
            return en.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (en.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              en.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ContentCacheStatus_Request";
          }
        }
        class ot extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ot.prototype.enabled || w(ot.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    enabled: { n: 1, br: s.readBool, bw: i.writeBool },
                    port: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    cache_location: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    max_size_gb: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                    p2p_enabled: { n: 5, br: s.readBool, bw: i.writeBool },
                    explicit_ip_address: {
                      n: 9,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    external_process: {
                      n: 10,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    current_size_gb: {
                      n: 6,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    current_bw: {
                      n: 7,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                    total_bytes_served: {
                      n: 8,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return (ot.sm_mbf || (ot.sm_mbf = M(ot.M())), ot.sm_mbf);
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ot.M(), e, t);
          }
          static fromObject(e) {
            return p(ot.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ot();
            return ot.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ot.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ot.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ot.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ContentCacheStatus_Response";
          }
        }
        class ct extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ct.prototype.enabled || w(ct.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    enabled: { n: 1, br: s.readBool, bw: i.writeBool },
                    port: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    cache_location: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    max_size_gb: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                    p2p_enabled: { n: 5, br: s.readBool, bw: i.writeBool },
                    external_process: { n: 6, br: s.readBool, bw: i.writeBool },
                    explicit_ip_address: {
                      n: 7,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return (ct.sm_mbf || (ct.sm_mbf = M(ct.M())), ct.sm_mbf);
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ct.M(), e, t);
          }
          static fromObject(e) {
            return p(ct.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ct();
            return ct.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ct.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ct.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ct.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ContentCacheConfig_Request";
          }
        }
        class hn extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          toObject(e = !1) {
            return hn.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new hn();
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new hn();
            return hn.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (hn.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              hn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SiteServerUI_ContentCacheConfig_Response";
          }
        }
        var Kl = T(1944),
          Yl = T(1735),
          Pa = T.n(Yl),
          $l = Object.defineProperty,
          _l = Object.getOwnPropertyDescriptor,
          V = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? _l(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && $l(e, t, a), a);
          };
        const Xl = 0,
          Nn = 1,
          Oi = 2,
          zn = 3,
          Na = 4,
          Gs = 0,
          Ql = 1,
          Jl = 2,
          Cl = 3;
        class D {
          m_eView = Xl;
          m_bShutDown = !1;
          m_bConnected = !1;
          m_strLanguage = "None";
          m_bCacheState = !1;
          m_eAcctStatus = Gs;
          m_vecModals = [];
          m_bClientsConnected = !1;
          m_bSteamCmd = !1;
          m_unModalNextKey = 0;
          constructor() {
            (0, x.Gn)(this);
          }
          get view() {
            return this.m_eView;
          }
          SetView(e) {
            this.m_eView = e;
          }
          get shutdown() {
            return this.m_bShutDown;
          }
          SetShutdown() {
            this.m_bShutDown = !0;
          }
          get connected() {
            return this.m_bConnected;
          }
          SetConnection(e) {
            this.m_bConnected = e;
          }
          get language() {
            return this.m_strLanguage;
          }
          SetLanguage(e) {
            this.m_strLanguage = e;
          }
          get cacheEnabled() {
            return this.m_bCacheState;
          }
          SetCacheState(e) {
            this.m_bCacheState = e;
          }
          get acctStatus() {
            return this.m_eAcctStatus;
          }
          SetAcctStatus(e) {
            this.m_eAcctStatus = e;
          }
          get clientsHaveConnected() {
            return this.m_bClientsConnected;
          }
          SetClientsConnected(e) {
            this.m_bClientsConnected = e;
          }
          get steamcmdConnected() {
            return this.m_bSteamCmd;
          }
          SetSteamcmdConnected(e) {
            this.m_bSteamCmd = e;
          }
          get activeModal() {
            return this.m_vecModals.length != 0
              ? this.m_vecModals[this.m_vecModals.length - 1]
              : null;
          }
          ShowModal(e) {
            let t = { handle: null },
              n = (0, x.XI)(() => {
                let l = this.m_vecModals.indexOf(t.handle);
                l >= 0 && this.m_vecModals.splice(l, 1);
              }),
              a = this.m_unModalNextKey++,
              o = F.cloneElement(e, { closeModal: n, key: a });
            (this.m_vecModals.push(o),
              (t.handle = this.m_vecModals[this.m_vecModals.length - 1]));
          }
        }
        (V([x.sH], D.prototype, "m_eView", 2),
          V([x.sH], D.prototype, "m_bShutDown", 2),
          V([x.sH], D.prototype, "m_bConnected", 2),
          V([x.sH], D.prototype, "m_strLanguage", 2),
          V([x.sH], D.prototype, "m_bCacheState", 2),
          V([x.sH], D.prototype, "m_eAcctStatus", 2),
          V([x.sH.shallow], D.prototype, "m_vecModals", 2),
          V([x.sH], D.prototype, "m_bClientsConnected", 2),
          V([x.sH], D.prototype, "m_bSteamCmd", 2),
          V([x.EW], D.prototype, "view", 1),
          V([x.XI.bound], D.prototype, "SetView", 1),
          V([x.EW], D.prototype, "shutdown", 1),
          V([R], D.prototype, "SetShutdown", 1),
          V([x.EW], D.prototype, "connected", 1),
          V([x.XI.bound], D.prototype, "SetConnection", 1),
          V([x.EW], D.prototype, "language", 1),
          V([x.XI.bound], D.prototype, "SetLanguage", 1),
          V([x.EW], D.prototype, "cacheEnabled", 1),
          V([x.XI.bound], D.prototype, "SetCacheState", 1),
          V([x.EW], D.prototype, "acctStatus", 1),
          V([x.XI.bound], D.prototype, "SetAcctStatus", 1),
          V([x.EW], D.prototype, "clientsHaveConnected", 1),
          V([x.XI.bound], D.prototype, "SetClientsConnected", 1),
          V([x.EW], D.prototype, "steamcmdConnected", 1),
          V([x.XI.bound], D.prototype, "SetSteamcmdConnected", 1),
          V([x.EW], D.prototype, "activeModal", 1),
          V([x.XI], D.prototype, "ShowModal", 1));
        const P = new D();
        window.uiStore = P;
        var Zl = Object.defineProperty,
          ql = Object.getOwnPropertyDescriptor,
          Qr = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? ql(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && Zl(e, t, a), a);
          };
        const Ga = 27100;
        var eu = ((r) => (
          (r[(r.k_EMsgTypeGET = 0)] = "k_EMsgTypeGET"),
          (r[(r.k_EMsgTypePOST = 1)] = "k_EMsgTypePOST"),
          r
        ))(eu || {});
        class Yr {
          m_ServiceTransport;
          m_strBaseURL;
          constructor() {
            this.m_strBaseURL = "http://localhost:" + String(Ga) + "/";
          }
          Login(e) {
            return this.SendMsgAndAwaitResponse(e, Je, 1, "login");
          }
          GetLoginStatus(e) {
            return this.SendMsgAndAwaitResponse(e, Ce, 0, "loginstatus");
          }
          CancelLogin(e) {
            return this.SendMsgAndAwaitResponse(e, Ze, 1, "cancellogin");
          }
          Logout(e) {
            return this.SendMsgAndAwaitResponse(e, qe, 1, "logout");
          }
          Quit(e) {
            return this.SendMsgAndAwaitResponse(e, dn, 1, "quit");
          }
          GetStatus(e) {
            return this.SendMsgAndAwaitResponse(e, tt, 0, "status");
          }
          GetLanguage(e) {
            return this.SendMsgAndAwaitResponse(e, rt, 0, "language");
          }
          SetLanguage(e) {
            return this.SendMsgAndAwaitResponse(e, fn, 1, "language");
          }
          GetClientStatus(e) {
            return this.SendMsgAndAwaitResponse(e, st, 0, "clientstatus");
          }
          GetContentCacheStatus(e) {
            return this.SendMsgAndAwaitResponse(e, ot, 0, "cachestatus");
          }
          UpdateCacheConfig(e) {
            return this.SendMsgAndAwaitResponse(e, hn, 1, "cacheconfig");
          }
          async SendMsgAndAwaitResponse(e, t, n, a) {
            let o = null;
            try {
              let l = await this.Send(e, n, a);
              if (l.status != 200 || !l.data) throw new Error("Request Error");
              let u = new zi(l.data);
              ((o = te.Init(t)),
                o.Hdr().set_eresult(Ss),
                l.headers &&
                  (l.headers["x-eresult"] &&
                    o.Hdr().set_eresult(l.headers["x-eresult"]),
                  l.headers["x-error_message"] &&
                    o.Hdr().set_error_message(l.headers["x-error_message"])));
              let g = new d.BinaryReader(
                u.GetPacket(),
                u.TellGet(),
                u.GetCountBytesRemaining(),
              );
              (t.deserializeBinaryFromReader(o.Body(), g),
                P.SetSteamcmdConnected(!0));
            } catch {
              o = this.CreateFailedMsgProtobuf(t, pc, null);
            }
            return o;
          }
          Send(e, t, n) {
            let a = this.CreateWebAPIURL(n),
              o = e.SerializeBody(),
              l = Kl.iI(o),
              u = { responseType: "arraybuffer", params: {} };
            if (t === 1) {
              const g = new FormData();
              return (
                g.append("input_protobuf_encoded", l), Pa().post(a, g, u)
              );
            }
            return (
              (u.params = { ...u.params, input_protobuf_encoded: l }),
              Pa().get(a, u)
            );
          }
          CreateWebAPIURL(e) {
            return this.m_strBaseURL + e;
          }
          CreateFailedMsgProtobuf(e, t, n) {
            let a = te.Init(e);
            return (
              a.Hdr().set_eresult(Ss),
              a.Hdr().set_transport_error(t),
              n && a.Hdr().set_error_message(n),
              a
            );
          }
        }
        (Qr([R], Yr.prototype, "Login", 1),
          Qr([R], Yr.prototype, "GetLoginStatus", 1),
          Qr([R], Yr.prototype, "CancelLogin", 1),
          Qr([R], Yr.prototype, "Logout", 1),
          Qr([R], Yr.prototype, "Quit", 1),
          Qr([R], Yr.prototype, "GetStatus", 1),
          Qr([R], Yr.prototype, "GetLanguage", 1),
          Qr([R], Yr.prototype, "SetLanguage", 1),
          Qr([R], Yr.prototype, "GetClientStatus", 1),
          Qr([R], Yr.prototype, "GetContentCacheStatus", 1),
          Qr([R], Yr.prototype, "UpdateCacheConfig", 1),
          Qr([R], Yr.prototype, "SendMsgAndAwaitResponse", 1),
          Qr([R], Yr.prototype, "Send", 1));
        const $r = new Yr();
        window.loginStore = $r;
        var tu = Object.defineProperty,
          ru = Object.getOwnPropertyDescriptor,
          Ir = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? ru(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && tu(e, t, a), a);
          };
        const Da = -1,
          nu = 0,
          Va = 1,
          Ia = 2,
          su = 3,
          Si = 4,
          iu = 5,
          Ai = 6,
          Ha = 7;
        class Vr {
          m_strAccountName = "";
          m_bUserHasCachedCredentials = !1;
          m_eLoginState = Da;
          m_eLoginResult = Tn;
          m_strPassword = "";
          m_strSteamGuardCode = "";
          m_bRememberPassword = !1;
          constructor() {
            (0, x.Gn)(this);
          }
          get accountName() {
            return this.m_strAccountName;
          }
          get hasCachedCredentials() {
            return this.m_bUserHasCachedCredentials;
          }
          get loginState() {
            return this.m_eLoginState;
          }
          get loginResult() {
            return this.m_eLoginResult;
          }
          SetAccountAndPassword(e, t, n) {
            ((this.m_strAccountName = e),
              (this.m_strPassword = t),
              (this.m_strSteamGuardCode = ""),
              (this.m_bRememberPassword = n));
          }
          SetSteamGuardCode(e) {
            this.m_strSteamGuardCode = e;
          }
          OnLoginStateChange(e, t, n) {
            ((this.m_strAccountName = e),
              (this.m_eLoginState = t),
              (this.m_eLoginResult = n),
              n == ba &&
                this.m_bUserHasCachedCredentials &&
                (this.m_bUserHasCachedCredentials = !1));
          }
          SetLoginStatus(e, t) {
            this.OnLoginStateChange(this.m_strAccountName, e, t);
          }
          SetSteamCmdNotConnected() {
            this.OnLoginStateChange(j.accountName, Ai, Ss);
          }
          async StartLogin() {
            const e = te.Init(Qe);
            (e.Body().set_username(this.m_strAccountName),
              e.Body().set_password(this.m_strPassword),
              e.Body().set_steamguardcode(this.m_strSteamGuardCode),
              e.Body().set_remember_password(this.m_bRememberPassword));
            const t = await $r.Login(e);
            this.OnLoginStateChange(
              this.m_strAccountName,
              t.Body().logon_state(),
              t.Body().logon_eresult(),
            );
          }
          async UpdateLoginStatus() {
            const e = te.Init(cn),
              t = await $r.GetLoginStatus(e);
            t.Hdr().eresult() == Tn
              ? ((this.m_bUserHasCachedCredentials = t
                  .Body()
                  .cached_credentials()),
                this.OnLoginStateChange(
                  t.Body().username(),
                  t.Body().logon_state(),
                  t.Body().logon_eresult(),
                ))
              : this.OnLoginStateChange(this.m_strAccountName, Ai, Ss);
          }
          async CancelLogin() {
            const e = te.Init(ln),
              t = await $r.CancelLogin(e);
            this.OnLoginStateChange(
              this.m_strAccountName,
              t.Body().logon_state(),
              t.Body().logon_eresult(),
            );
          }
          async StartLogout() {
            (this.SetAccountAndPassword("", "", !1),
              (this.m_bUserHasCachedCredentials = !1),
              (this.m_bRememberPassword = !1));
            const e = te.Init(un),
              t = await $r.Logout(e);
            this.OnLoginStateChange(
              "",
              t.Body().logon_state(),
              t.Body().logout_eresult(),
            );
          }
        }
        (Ir([x.sH], Vr.prototype, "m_strAccountName", 2),
          Ir([x.sH], Vr.prototype, "m_bUserHasCachedCredentials", 2),
          Ir([x.sH], Vr.prototype, "m_eLoginState", 2),
          Ir([x.sH], Vr.prototype, "m_eLoginResult", 2),
          Ir([x.EW], Vr.prototype, "accountName", 1),
          Ir([x.EW], Vr.prototype, "hasCachedCredentials", 1),
          Ir([x.EW], Vr.prototype, "loginState", 1),
          Ir([x.EW], Vr.prototype, "loginResult", 1),
          Ir([x.XI.bound], Vr.prototype, "SetAccountAndPassword", 1),
          Ir([R], Vr.prototype, "SetSteamGuardCode", 1),
          Ir([x.XI.bound], Vr.prototype, "OnLoginStateChange", 1),
          Ir([R], Vr.prototype, "SetLoginStatus", 1),
          Ir([R], Vr.prototype, "SetSteamCmdNotConnected", 1),
          Ir([R], Vr.prototype, "StartLogin", 1),
          Ir([R], Vr.prototype, "UpdateLoginStatus", 1),
          Ir([R], Vr.prototype, "CancelLogin", 1),
          Ir([R], Vr.prototype, "StartLogout", 1));
        const j = new Vr();
        window.loginStore = j;
        var Wi = ((r) => (
          (r[(r.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (r[(r.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (r[(r.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina"),
          r
        ))(Wi || {});
        function o_(r) {
          return r === 2;
        }
        class c_ {
          m_rgHandles = [];
          Add(e) {
            e && this.m_rgHandles.push(e);
          }
          Unregister() {
            const e = this.m_rgHandles;
            this.m_rgHandles = [];
            for (const t of e) t && t.unregister();
          }
        }
        function au(r, e = 0, t = Math.random) {
          if (r?.length > 1) {
            let n = e > 0 ? Math.min(e, r.length) : r.length;
            for (; n !== 0;) {
              const a = Math.floor(t() * n);
              n -= 1;
              const o = r[n];
              ((r[n] = r[a]), (r[a] = o));
            }
          }
          return r;
        }
        function l_(r, e = Math.random) {
          return r[Math.floor(e() * r.length)];
        }
        function u_(r, e, t = Math.random) {
          const n = [];
          let a = e;
          for (let o = 0; o < r.length && a > 0; o++)
            t() <= a / (r.length - o) && (n.push(r[o]), a--);
          return n;
        }
        function d_(r, e) {
          const t = r.slice();
          return (au(t), t.slice(0, e));
        }
        function ou(r, e, t) {
          if (e >= 0 && t >= 0) {
            const n = r.splice(e, 1)[0];
            t >= r.length ? (r[t] = n) : r.splice(t, 0, n);
          }
          return r;
        }
        function m_(r, e) {
          ou(r, e, r.length - 1);
        }
        function g_(r, e) {
          if (!r && !e) return !0;
          if (!r || !e || r.length != e.length) return !1;
          for (let t = 0; t < r.length; t++) if (r[t] !== e[t]) return !1;
          return !0;
        }
        function f_(r, e, t) {
          if (!r && !e) return !0;
          if (!r || !e || r.length !== e.length) return !1;
          const n = r.slice().sort(t),
            a = e.slice().sort(t);
          for (let o = 0; o < n.length; o++) if (n[o] !== a[o]) return !1;
          return !0;
        }
        function Ka(r, e) {
          return cu(r, (t) => e == t);
        }
        function cu(r, e) {
          const t = r.findIndex(e);
          return t >= 0 ? (r.splice(t, 1), !0) : !1;
        }
        function b_(r, e) {
          return r.reduce((t, n, a, o) => t + (e(n, a, o) ? 1 : 0), 0);
        }
        function h_(r, e) {
          return r.filter((t) => e !== t);
        }
        function M_(r) {
          return (r ?? []).filter(Boolean);
        }
        function p_(r, e) {
          if (r.length != e.length) return !1;
          for (let t = 0; t < r.length; t++) if (r[t] != e[t]) return !1;
          return !0;
        }
        function lu(r, e) {
          let t = 0,
            n = r.length - 1;
          for (; t <= n;) {
            const a = Math.floor((t + n) / 2),
              o = e(r[a]);
            if (o > 0) t = a + 1;
            else if (o < 0) n = a - 1;
            else {
              if (n == a) return a;
              if (a == t) return n > a && e(r[a + 1]) < 0 ? a : a + 1;
              t = a;
            }
          }
          return n;
        }
        function k_(r, e, t) {
          const a = lu(r, (o) => t(e, o));
          r.splice(a + 1, 0, e);
        }
        function y_(r, e) {
          let t = 0,
            n = 0;
          for (; t < r.length;) {
            const a = r[t];
            (e(a, t, r) && (r[n++] = a), t++);
          }
          return ((r.length = n), r);
        }
        function E_(r, e, t) {
          return r
            ? r.length < e
              ? r.concat(Array(e - r.length).fill(t))
              : r
            : (console.error(
                "array should be defined for us to fill in the missing indexes",
              ),
              []);
        }
        function w_(r, e) {
          if (e)
            for (let t = r.length - 1; t >= 0; --t) {
              const n = r[t];
              if (e(n, t, r)) return n;
            }
        }
        function B_(r) {
          return Array.from(new Set(r));
        }
        function T_(r, e, t) {
          const n = r.findIndex(t);
          return n >= 0 ? (r.splice(n, 0, e), !0) : !1;
        }
        function v_(r, e) {
          const t = Math.min(r.length, e.length);
          return Array.from({ length: t }, (n, a) => [r[a], e[a]]);
        }
        function F_(r, e) {
          return r.reduce((n, a) => (n.set(e(a), a), n), new Map());
        }
        function z_(r, e, t = !0) {
          return !r || r.length == 0
            ? r
            : e
              ? r.sort((n, a) =>
                  n == a ? 0 : t ? (n < a ? -1 : 1) : n > a ? -1 : 1,
                )
              : r.sort((n, a) => {
                  const o = n.toLowerCase(),
                    l = a.toLowerCase();
                  return o == l ? 0 : t ? (o < l ? -1 : 1) : o > l ? -1 : 1;
                });
        }
        function R_(r) {
          return r.filter((e) => e != null);
        }
        function O_(r) {
          return r.filter((e) => e != null && e !== !1);
        }
        function S_(r, e) {
          const t = new Set(r),
            n = new Set(e),
            a = [...t].filter((u) => n.has(u)),
            o = [...t].filter((u) => !n.has(u)),
            l = [...n].filter((u) => !t.has(u));
          return { intersection: a, removed: o, added: l };
        }
        function A_(r, e) {
          const t = new Map();
          for (const a of r) {
            const o = e(a);
            if (t.has(o)) {
              const l = t.get(o);
              t.set(o, l + 1);
            } else t.set(o, 1);
          }
          return [...t.entries()];
        }
        class Gn {
          m_vecCallbacks = [];
          Register(e) {
            return (
              this.m_vecCallbacks.push(e),
              {
                Unregister: () => {
                  Ka(this.m_vecCallbacks, e);
                },
              }
            );
          }
          Dispatch(...e) {
            for (const t of Array.from(this.m_vecCallbacks)) t(...e);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
          static PromiseFromAny(e) {
            return new Promise((t) => {
              let n = [];
              const a = () => {
                (n.forEach((o) => o.Unregister()), t());
              };
              for (const o of e) n.push(o.Register(a));
            });
          }
        }
        var uu = Object.defineProperty,
          du = Object.getOwnPropertyDescriptor,
          Ds = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? du(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && uu(e, t, a), a);
          };
        class Vs {
          SyncStore(e) {
            return this.Subscribe(e).Unsubscribe;
          }
          GetValue() {
            return this.Value;
          }
        }
        (Ds([R], Vs.prototype, "SyncStore", 1),
          Ds([R], Vs.prototype, "GetValue", 1));
        class mu extends Vs {}
        class Ya extends mu {
          m_callbacks;
          m_currentValue;
          m_fnEquals;
          constructor(e, t) {
            (super(),
              (this.m_callbacks = new Gn()),
              (this.m_currentValue = e),
              (this.m_fnEquals = t));
          }
          Set(e) {
            if (this.m_fnEquals) {
              if (this.m_fnEquals(this.m_currentValue, e)) return !1;
            } else if (this.m_currentValue === e) return !1;
            return (
              (this.m_currentValue = e), this.m_callbacks.Dispatch(e), !0
            );
          }
          get Value() {
            return this.m_currentValue;
          }
          Subscribe(e) {
            return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
          }
          get SubscriberCount() {
            return this.m_callbacks.CountRegistered();
          }
        }
        function $a(r, e) {
          return new Ya(r, e);
        }
        class gu extends Vs {
          m_fnMap;
          m_originalSubscribableValue;
          m_mappedSubscribableValue;
          m_bMappedValueStale = !1;
          constructor(e, t, n) {
            (super(),
              (this.m_originalSubscribableValue = e),
              (this.m_mappedSubscribableValue = new Ya(t(e.Value), n)),
              (this.m_fnMap = t),
              this.m_originalSubscribableValue.Subscribe(() => {
                this.m_mappedSubscribableValue.SubscriberCount > 0
                  ? this.UpdateMappedValue()
                  : (this.m_bMappedValueStale = !0);
              }));
          }
          get Value() {
            return (
              this.m_bMappedValueStale && this.UpdateMappedValue(),
              this.m_mappedSubscribableValue.Value
            );
          }
          Subscribe(e) {
            return this.m_mappedSubscribableValue.Subscribe(e);
          }
          UpdateMappedValue() {
            (this.m_mappedSubscribableValue.Set(
              this.m_fnMap(this.m_originalSubscribableValue.Value),
            ),
              (this.m_bMappedValueStale = !1));
          }
        }
        function W_(r, e, t) {
          return new gu(r, e, t);
        }
        class fu {
          m_schTimer;
          m_fnCallback;
          m_fnOnCancel;
          Schedule(e, t) {
            (this.IsScheduled() && this.Cancel(),
              (this.m_fnCallback = t),
              (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e)));
          }
          AsyncSchedule(e, t) {
            return new Promise((n, a) => {
              (this.Schedule(e, () => {
                (t(), n());
              }),
                (this.m_fnOnCancel = a));
            });
          }
          IsScheduled() {
            return this.m_schTimer !== void 0;
          }
          Cancel() {
            if (this.m_schTimer) {
              const e = this.m_fnOnCancel;
              (clearTimeout(this.m_schTimer), this.Reset(), e && e());
            }
          }
          Reset() {
            ((this.m_schTimer = void 0),
              (this.m_fnCallback = void 0),
              (this.m_fnOnCancel = void 0));
          }
          ScheduledInternal() {
            const e = this.m_fnCallback;
            (this.Reset(), e?.());
          }
        }
        Ds([R], fu.prototype, "ScheduledInternal", 1);
        class L_ {
          m_rgListeners = [];
          AddEventListener(e, t, n) {
            (e.addEventListener(t, n),
              this.m_rgListeners.push({ element: e, type: t, listener: n }));
          }
          Unregister() {
            for (const e of this.m_rgListeners)
              e.element.removeEventListener(e.type, e.listener);
            this.m_rgListeners = [];
          }
        }
        async function j_(r) {
          const e = [],
            t = Object.keys(r);
          t.forEach((o) => e.push(r[o]));
          const n = await Promise.all(e),
            a = {};
          return n.reduce((o, l, u) => ((o[t[u]] = l), o), a);
        }
        class bu {
          m_vecCallbacks = [];
          Push(e) {
            this.m_vecCallbacks.push(e);
          }
          PushArrayRemove(e, t) {
            this.m_vecCallbacks.push(() => Ka(e, t));
          }
          Unregister() {
            for (const e of this.m_vecCallbacks) e();
            this.m_vecCallbacks = [];
          }
          GetUnregisterFunc() {
            return this.Unregister;
          }
        }
        Ds([R], bu.prototype, "Unregister", 1);
        const hu = [
            "sc_schinese",
            "schinese",
            "tchinese",
            "japanese",
            "koreana",
            "thai",
            "arabic",
            "indonesian",
            "malay",
            "bulgarian",
            "czech",
            "danish",
            "german",
            "english",
            "spanish",
            "latam",
            "greek",
            "french",
            "italian",
            "hungarian",
            "dutch",
            "norwegian",
            "polish",
            "portuguese",
            "brazilian",
            "romanian",
            "russian",
            "finnish",
            "swedish",
            "turkish",
            "vietnamese",
            "ukrainian",
          ],
          Mu = new Set(hu);
        function pu(r) {
          return Mu.has(r);
        }
        const _a = new Map([
          ["en", "english"],
          ["de", "german"],
          ["fr", "french"],
          ["it", "italian"],
          ["ko", "koreana"],
          ["es-419", "latam"],
          ["es", "spanish"],
          ["zh", "schinese"],
          ["zh-cn", "schinese"],
          ["zh-tw", "tchinese"],
          ["ru", "russian"],
          ["ar", "arabic"],
          ["th", "thai"],
          ["ja", "japanese"],
          ["pt-br", "brazilian"],
          ["pt", "portuguese"],
          ["pl", "polish"],
          ["da", "danish"],
          ["nl", "dutch"],
          ["fi", "finnish"],
          ["nb", "norwegian"],
          ["no", "norwegian"],
          ["sv", "swedish"],
          ["hu", "hungarian"],
          ["cs", "czech"],
          ["ro", "romanian"],
          ["tr", "turkish"],
          ["bg", "bulgarian"],
          ["el", "greek"],
          ["uk", "ukrainian"],
          ["vn", "vietnamese"],
          ["vi", "vietnamese"],
          ["id", "indonesian"],
          ["ms", "malay"],
        ]);
        function x_(r) {
          return _a.has(r);
        }
        const An = new Map();
        for (const [r, e] of _a.entries()) An.set(e, r);
        (An.set("sc_schinese", An.get("schinese")),
          An.set("korean", An.get("koreana")));
        function U_(r) {
          return An.get(r);
        }
        function Li(r) {
          if (r !== "english")
            return r === "sc_schinese" ? "schinese" : "english";
        }
        function P_(r) {
          return r === "arabic";
        }
        const N_ = 0,
          G_ = 1,
          D_ = 2,
          V_ = 3,
          I_ = 4,
          ku = 5;
        function Xa(r, ...e) {
          return (
            e.length == 0 ||
              (r = r.replace(/%(?:(\d+)\$)?s/g, function (t, n) {
                if (n <= e.length && n >= 1) {
                  const a = e[n - 1];
                  return String(a ?? "");
                }
                return t;
              })),
            r
          );
        }
        let bs;
        bs ??= new Set();
        let Qa;
        function H_() {
          return (Qa ??= Promise.all(bs));
        }
        function yu(r) {
          ((bs ??= new Set()), bs.add(r), (Qa = Promise.all(bs)));
        }
        class lt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              lt.prototype.title || w(lt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    title: { n: 1, br: s.readString, bw: i.writeString },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return (lt.sm_mbf || (lt.sm_mbf = M(lt.M())), lt.sm_mbf);
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(lt.M(), e, t);
          }
          static fromObject(e) {
            return p(lt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new lt();
            return lt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(lt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (lt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(lt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamAward_Localization";
          }
        }
        class ut extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ut.prototype.voteid || w(ut.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    voteid: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    localization: { n: 2, c: lt },
                    award_year: { n: 3, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return (ut.sm_mbf || (ut.sm_mbf = M(ut.M())), ut.sm_mbf);
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ut.M(), e, t);
          }
          static fromObject(e) {
            return p(ut.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ut();
            return ut.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ut.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ut.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ut.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamAward";
          }
        }
        class dt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              dt.prototype.rtime || w(dt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    rtime: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    coming_soon_display_type: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return (dt.sm_mbf || (dt.sm_mbf = M(dt.M())), dt.sm_mbf);
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(dt.M(), e, t);
          }
          static fromObject(e) {
            return p(dt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new dt();
            return dt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(dt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (dt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(dt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSeasonPassDateAndDisplay";
          }
        }
        class mt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              mt.prototype.milestone_id || w(mt.M()),
              d.Message.initialize(this, e, 0, -1, [2, 5, 9, 10], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    milestone_id: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    title: { n: 2, c: K, r: !0, q: !0 },
                    appid: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    event_gid: {
                      n: 4,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    dates: { n: 5, c: dt, r: !0, q: !0 },
                    shipped: { n: 6, br: s.readBool, bw: i.writeBool },
                    rtime_complete: {
                      n: 7,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    milestone_desc: { n: 9, c: K, r: !0, q: !0 },
                    image: { n: 10, c: K, r: !0, q: !0 },
                    backfilled_release: {
                      n: 11,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    coming_soon_appid: {
                      n: 12,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return (mt.sm_mbf || (mt.sm_mbf = M(mt.M())), mt.sm_mbf);
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(mt.M(), e, t);
          }
          static fromObject(e) {
            return p(mt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new mt();
            return mt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(mt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (mt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(mt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSeasonPassMilestone";
          }
        }
        class gt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              gt.prototype.appid || w(gt.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    milestones: { n: 2, c: mt, r: !0, q: !0 },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return (gt.sm_mbf || (gt.sm_mbf = M(gt.M())), gt.sm_mbf);
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(gt.M(), e, t);
          }
          static fromObject(e) {
            return p(gt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new gt();
            return gt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(gt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (gt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(gt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSeasonPass";
          }
        }
        function K_(r) {
          return "unknown EContentHubDiscountFilterType ( " + r + " )";
        }
        class re extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              re.prototype.sale_filter || w(re.M()),
              d.Message.initialize(this, e, 0, -1, [3], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    sale_filter: { n: 1, c: ft },
                    content_hub_filter: { n: 2, c: bt },
                    store_filters: { n: 3, c: Mt, r: !0, q: !0 },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return (re.sm_mbf || (re.sm_mbf = M(re.M())), re.sm_mbf);
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, t) {
            return k(re.M(), e, t);
          }
          static fromObject(e) {
            return p(re.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new re();
            return re.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(re.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (re.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(re.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePageFilter";
          }
        }
        class ft extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ft.prototype.sale_tagid || w(ft.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    sale_tagid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    creator_clan_account_id: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return (ft.sm_mbf || (ft.sm_mbf = M(ft.M())), ft.sm_mbf);
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ft.M(), e, t);
          }
          static fromObject(e) {
            return p(ft.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ft();
            return ft.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ft.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ft.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ft.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePageFilter_SalePageFilter";
          }
        }
        class bt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              bt.prototype.hub_type || w(bt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    hub_type: { n: 1, br: s.readString, bw: i.writeString },
                    hub_category: { n: 2, br: s.readString, bw: i.writeString },
                    hub_tagid: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    discount_filter: { n: 4, br: s.readEnum, bw: i.writeEnum },
                    optin: { n: 5, c: ht },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return (bt.sm_mbf || (bt.sm_mbf = M(bt.M())), bt.sm_mbf);
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(bt.M(), e, t);
          }
          static fromObject(e) {
            return p(bt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new bt();
            return bt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(bt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (bt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(bt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePageFilter_ContentHubFilter";
          }
        }
        class ht extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ht.prototype.name || w(ht.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    name: { n: 1, br: s.readString, bw: i.writeString },
                    optin_tagid: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    prune_tagid: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    optin_only: { n: 4, br: s.readBool, bw: i.writeBool },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return (ht.sm_mbf || (ht.sm_mbf = M(ht.M())), ht.sm_mbf);
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ht.M(), e, t);
          }
          static fromObject(e) {
            return p(ht.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ht();
            return ht.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ht.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ht.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ht.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePageFilter_ContentHubFilter_OptInInfo";
          }
        }
        class Mt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Mt.prototype.filter_json || w(Mt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    filter_json: { n: 1, br: s.readString, bw: i.writeString },
                    cache_key: { n: 2, br: s.readString, bw: i.writeString },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return (Mt.sm_mbf || (Mt.sm_mbf = M(Mt.M())), Mt.sm_mbf);
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Mt.M(), e, t);
          }
          static fromObject(e) {
            return p(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Mt();
            return Mt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Mt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Mt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Mt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePageFilter_StoreFilter";
          }
        }
        const Y_ = 0,
          Eu = 1,
          $_ = 2,
          __ = 3,
          wu = 4,
          Bu = 5,
          Ja = 6,
          Ca = 7,
          Tu = 8,
          X_ = 9,
          vu = 10,
          Fu = 11,
          Q_ = 12,
          J_ = 13,
          C_ = 14,
          zu = 0,
          Z_ = 10,
          q_ = 20,
          eX = 30,
          tX = 40,
          rX = 50;
        function nX(r) {
          return "unknown EStoreItemType ( " + r + " )";
        }
        function sX(r) {
          return "unknown EStoreAppType ( " + r + " )";
        }
        function iX(r) {
          return "unknown EStoreCategoryType ( " + r + " )";
        }
        function aX(r) {
          return "unknown EUserReviewScore ( " + r + " )";
        }
        function oX(r) {
          return "unknown EStoreLinkType ( " + r + " )";
        }
        function cX(r) {
          return "unknown EStoreAppDocumentType ( " + r + " )";
        }
        function lX(r) {
          return "unknown ETrailerCategory ( " + r + " )";
        }
        function uX(r) {
          return "unknown EStoreBrowseFilterFailure ( " + r + " )";
        }
        function dX(r) {
          return "unknown EStoreAgeGateState ( " + r + " )";
        }
        function mX(r) {
          return "unknown EStoreAgeGateReason ( " + r + " )";
        }
        class pt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              pt.prototype.type || w(pt.M()),
              d.Message.initialize(this, e, 0, -1, [3, 9, 12], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    type: { n: 1, br: s.readString, bw: i.writeString },
                    rating: { n: 2, br: s.readString, bw: i.writeString },
                    descriptors: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    interactive_elements: {
                      n: 4,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    agency: { n: 5, br: s.readEnum, bw: i.writeEnum },
                    banned: { n: 6, br: s.readBool, bw: i.writeBool },
                    esrb_online_music_not_rated: {
                      n: 7,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      n: 8,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    survey_interactive_elements: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                    required_age: { n: 10, br: s.readInt32, bw: i.writeInt32 },
                    use_age_gate: { n: 11, br: s.readBool, bw: i.writeBool },
                    descriptor_images: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                    content_survey_notes: {
                      n: 13,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    image_url: { n: 20, br: s.readString, bw: i.writeString },
                    image_target: {
                      n: 21,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return (pt.sm_mbf || (pt.sm_mbf = M(pt.M())), pt.sm_mbf);
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(pt.M(), e, t);
          }
          static fromObject(e) {
            return p(pt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new pt();
            return pt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(pt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (pt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(pt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreGameRating";
          }
        }
        class I extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              I.prototype.item_type || w(I.M()),
              d.Message.initialize(
                this,
                e,
                0,
                -1,
                [11, 12, 20, 21, 25, 41, 52, 71, 74, 77, 78],
                null,
              ));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    item_type: { n: 1, br: s.readEnum, bw: i.writeEnum },
                    id: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    gid: {
                      n: 76,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                    success: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    visible: { n: 4, br: s.readBool, bw: i.writeBool },
                    unvailable_for_country_restriction: {
                      n: 5,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    name: { n: 6, br: s.readString, bw: i.writeString },
                    store_url_path: {
                      n: 7,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    store_url_slug: {
                      n: 8,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    appid: { n: 9, br: s.readUint32, bw: i.writeUint32 },
                    type: { n: 10, br: s.readEnum, bw: i.writeEnum },
                    included_types: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                    included_appids: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    is_free: { n: 13, br: s.readBool, bw: i.writeBool },
                    is_early_access: { n: 14, br: s.readBool, bw: i.writeBool },
                    related_items: { n: 15, c: Et },
                    included_items: { n: 16, c: wt },
                    content_descriptorids: {
                      n: 20,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                    tagids: {
                      n: 21,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    categories: { n: 22, c: Bt },
                    reviews: { n: 23, c: Tt },
                    basic_info: { n: 24, c: vt },
                    tags: { n: 25, c: Ft, r: !0, q: !0 },
                    assets: { n: 30, c: se },
                    release: { n: 31, c: zt },
                    platforms: { n: 32, c: Rt },
                    game_rating: { n: 33, c: pt },
                    is_coming_soon: { n: 34, br: s.readBool, bw: i.writeBool },
                    best_purchase_option: { n: 40, c: X },
                    purchase_options: { n: 41, c: X, r: !0, q: !0 },
                    self_purchase_option: { n: 43, c: X },
                    screenshots: { n: 50, c: Wt },
                    trailers: { n: 51, c: Lt },
                    supported_languages: { n: 52, c: Ut, r: !0, q: !0 },
                    store_url_path_override: {
                      n: 53,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    free_weekend: { n: 54, c: Pt },
                    unlisted: { n: 55, br: s.readBool, bw: i.writeBool },
                    game_count: { n: 56, br: s.readUint32, bw: i.writeUint32 },
                    internal_name: {
                      n: 57,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    full_description_bbcode: {
                      n: 58,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    is_free_temporarily: {
                      n: 59,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    assets_without_overrides: { n: 60, c: se },
                    user_filter_failure: { n: 70, c: Br },
                    links: { n: 71, c: Nt, r: !0, q: !0 },
                    purchase_description_bbcode: {
                      n: 72,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    package_groups: { n: 74, c: Gt, r: !0, q: !0 },
                    extra_details: { n: 75, c: Dt },
                    optin_registration_tags: { n: 77, c: er, r: !0, q: !0 },
                    purchase_notes: { n: 78, c: tr, r: !0, q: !0 },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return (I.sm_mbf || (I.sm_mbf = M(I.M())), I.sm_mbf);
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, t) {
            return k(I.M(), e, t);
          }
          static fromObject(e) {
            return p(I.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new I();
            return I.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(I.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (I.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(I.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem";
          }
        }
        class ne extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ne.prototype.appid || w(ne.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    label: { n: 2, br: s.readString, bw: i.writeString },
                    show_above_purchase: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return (ne.sm_mbf || (ne.sm_mbf = M(ne.M())), ne.sm_mbf);
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ne.M(), e, t);
          }
          static fromObject(e) {
            return p(ne.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ne();
            return ne.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ne.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ne.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ne.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Demo";
          }
        }
        class kt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              kt.prototype.appid || w(kt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    is_open: { n: 2, br: s.readBool, bw: i.writeBool },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return (kt.sm_mbf || (kt.sm_mbf = M(kt.M())), kt.sm_mbf);
          }
          toObject(e = !1) {
            return kt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(kt.M(), e, t);
          }
          static fromObject(e) {
            return p(kt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new kt();
            return kt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(kt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (kt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(kt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Playtest";
          }
        }
        class yt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              yt.prototype.appid || w(yt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    header_text: { n: 2, br: s.readString, bw: i.writeString },
                    description_text: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return (yt.sm_mbf || (yt.sm_mbf = M(yt.M())), yt.sm_mbf);
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(yt.M(), e, t);
          }
          static fromObject(e) {
            return p(yt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new yt();
            return yt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(yt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (yt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(yt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_RelatedF2P";
          }
        }
        class Et extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Et.prototype.parent_appid || w(Et.M()),
              d.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6, 9], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    parent_appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    demo_appid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    standalone_demo_appid: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    demos: { n: 4, c: ne, r: !0, q: !0 },
                    standalone_demos: { n: 5, c: ne, r: !0, q: !0 },
                    playtests: { n: 6, c: kt, r: !0, q: !0 },
                    related_f2p: { n: 7, c: yt },
                    dlc_parent_appids: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return (Et.sm_mbf || (Et.sm_mbf = M(Et.M())), Et.sm_mbf);
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Et.M(), e, t);
          }
          static fromObject(e) {
            return p(Et.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Et();
            return Et.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Et.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Et.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Et.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_RelatedItems";
          }
        }
        class wt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              wt.prototype.included_apps || w(wt.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    included_apps: { n: 1, c: I, r: !0, q: !0 },
                    included_packages: { n: 2, c: I, r: !0, q: !0 },
                    included_bundles: { n: 3, c: I, r: !0, q: !0 },
                    included_creators: { n: 4, c: I, r: !0, q: !0 },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return (wt.sm_mbf || (wt.sm_mbf = M(wt.M())), wt.sm_mbf);
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(wt.M(), e, t);
          }
          static fromObject(e) {
            return p(wt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new wt();
            return wt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(wt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (wt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(wt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_IncludedItems";
          }
        }
        class Bt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Bt.prototype.supported_player_categoryids || w(Bt.M()),
              d.Message.initialize(this, e, 0, -1, [2, 3, 4], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    supported_player_categoryids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    feature_categoryids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    controller_categoryids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return (Bt.sm_mbf || (Bt.sm_mbf = M(Bt.M())), Bt.sm_mbf);
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Bt.M(), e, t);
          }
          static fromObject(e) {
            return p(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Bt();
            return Bt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Bt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Bt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Bt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Categories";
          }
        }
        class Tt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Tt.prototype.summary_filtered || w(Tt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    summary_filtered: { n: 1, c: $ },
                    summary_unfiltered: { n: 2, c: $ },
                    summary_language_specific: { n: 3, c: $ },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return (Tt.sm_mbf || (Tt.sm_mbf = M(Tt.M())), Tt.sm_mbf);
          }
          toObject(e = !1) {
            return Tt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Tt.M(), e, t);
          }
          static fromObject(e) {
            return p(Tt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Tt();
            return Tt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Tt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Tt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Tt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Reviews";
          }
        }
        class $ extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              $.prototype.review_count || w($.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    review_count: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    percent_positive: {
                      n: 2,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    review_score: { n: 3, br: s.readEnum, bw: i.writeEnum },
                    review_score_label: {
                      n: 4,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return ($.sm_mbf || ($.sm_mbf = M($.M())), $.sm_mbf);
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, t) {
            return k($.M(), e, t);
          }
          static fromObject(e) {
            return p($.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new $();
            return $.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y($.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ($.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E($.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Reviews_StoreReviewSummary";
          }
        }
        class vt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              vt.prototype.short_description || w(vt.M()),
              d.Message.initialize(this, e, 0, -1, [2, 3, 4], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    short_description: {
                      n: 1,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    publishers: { n: 2, c: _, r: !0, q: !0 },
                    developers: { n: 3, c: _, r: !0, q: !0 },
                    franchises: { n: 4, c: _, r: !0, q: !0 },
                    capsule_headline: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return (vt.sm_mbf || (vt.sm_mbf = M(vt.M())), vt.sm_mbf);
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(vt.M(), e, t);
          }
          static fromObject(e) {
            return p(vt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new vt();
            return vt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(vt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (vt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(vt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_BasicInfo";
          }
        }
        class _ extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              _.prototype.name || w(_.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: { n: 1, br: s.readString, bw: i.writeString },
                    creator_clan_account_id: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return (_.sm_mbf || (_.sm_mbf = M(_.M())), _.sm_mbf);
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, t) {
            return k(_.M(), e, t);
          }
          static fromObject(e) {
            return p(_.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new _();
            return _.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(_.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (_.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(_.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_BasicInfo_CreatorHomeLink";
          }
        }
        class Ft extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ft.prototype.tagid || w(Ft.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    tagid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    weight: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return (Ft.sm_mbf || (Ft.sm_mbf = M(Ft.M())), Ft.sm_mbf);
          }
          toObject(e = !1) {
            return Ft.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ft.M(), e, t);
          }
          static fromObject(e) {
            return p(Ft.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ft();
            return Ft.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ft.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ft.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ft.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Tag";
          }
        }
        class se extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              se.prototype.asset_url_format || w(se.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    asset_url_format: {
                      n: 1,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    main_capsule: { n: 2, br: s.readString, bw: i.writeString },
                    main_capsule_2x: {
                      n: 18,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    small_capsule: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    small_capsule_2x: {
                      n: 19,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    header: { n: 4, br: s.readString, bw: i.writeString },
                    header_2x: { n: 20, br: s.readString, bw: i.writeString },
                    package_header: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    page_background: {
                      n: 6,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    hero_capsule: { n: 7, br: s.readString, bw: i.writeString },
                    hero_capsule_2x: {
                      n: 8,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    library_capsule: {
                      n: 9,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    library_capsule_2x: {
                      n: 10,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    library_hero: {
                      n: 11,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    library_hero_2x: {
                      n: 12,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    community_icon: {
                      n: 13,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    clan_avatar: { n: 14, br: s.readString, bw: i.writeString },
                    page_background_path: {
                      n: 15,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    raw_page_background: {
                      n: 16,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    edition_comparison: {
                      n: 17,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    last_modified: {
                      n: 21,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    creator_home_background: {
                      n: 22,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return (se.sm_mbf || (se.sm_mbf = M(se.M())), se.sm_mbf);
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, t) {
            return k(se.M(), e, t);
          }
          static fromObject(e) {
            return p(se.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new se();
            return se.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(se.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (se.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(se.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Assets";
          }
        }
        class zt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              zt.prototype.steam_release_date || w(zt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    steam_release_date: {
                      n: 1,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    original_release_date: {
                      n: 2,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    original_steam_release_date: {
                      n: 3,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    release_from_early_access_date: {
                      n: 11,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    release_from_early_access_style: {
                      n: 12,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    is_coming_soon: { n: 4, br: s.readBool, bw: i.writeBool },
                    is_preload: { n: 5, br: s.readBool, bw: i.writeBool },
                    custom_release_date_message: {
                      n: 6,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    is_abridged_release_date: {
                      n: 7,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    coming_soon_display: {
                      n: 8,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    is_early_access: { n: 10, br: s.readBool, bw: i.writeBool },
                    mac_release_date: {
                      n: 20,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    linux_release_date: {
                      n: 21,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    limited_launch_active: {
                      n: 22,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    advance_access_date: {
                      n: 23,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return (zt.sm_mbf || (zt.sm_mbf = M(zt.M())), zt.sm_mbf);
          }
          toObject(e = !1) {
            return zt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(zt.M(), e, t);
          }
          static fromObject(e) {
            return p(zt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new zt();
            return zt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(zt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (zt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(zt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ReleaseInfo";
          }
        }
        class Rt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Rt.prototype.windows || w(Rt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    windows: { n: 1, br: s.readBool, bw: i.writeBool },
                    mac: { n: 2, br: s.readBool, bw: i.writeBool },
                    steamos_linux: { n: 3, br: s.readBool, bw: i.writeBool },
                    vr_support: { n: 10, c: Ot },
                    steam_deck_compat_category: {
                      n: 11,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    steam_os_compat_category: {
                      n: 12,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    steam_frame_compat_category: {
                      n: 13,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    steam_machine_compat_category: {
                      n: 14,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return (Rt.sm_mbf || (Rt.sm_mbf = M(Rt.M())), Rt.sm_mbf);
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Rt.M(), e, t);
          }
          static fromObject(e) {
            return p(Rt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Rt();
            return Rt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Rt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Rt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Rt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Platforms";
          }
        }
        class Ot extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ot.prototype.vrhmd || w(Ot.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    vrhmd: { n: 1, br: s.readBool, bw: i.writeBool },
                    vrhmd_only: { n: 2, br: s.readBool, bw: i.writeBool },
                    show_optional_vr_mode_notice: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    htc_vive: { n: 40, br: s.readBool, bw: i.writeBool },
                    oculus_rift: { n: 41, br: s.readBool, bw: i.writeBool },
                    windows_mr: { n: 42, br: s.readBool, bw: i.writeBool },
                    valve_index: { n: 43, br: s.readBool, bw: i.writeBool },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return (Ot.sm_mbf || (Ot.sm_mbf = M(Ot.M())), Ot.sm_mbf);
          }
          toObject(e = !1) {
            return Ot.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ot.M(), e, t);
          }
          static fromObject(e) {
            return p(Ot.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ot();
            return Ot.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ot.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ot.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ot.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Platforms_VRSupport";
          }
        }
        class X extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              X.prototype.packageid || w(X.M()),
              d.Message.initialize(this, e, 0, -1, [20], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    packageid: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    bundleid: { n: 2, br: s.readInt32, bw: i.writeInt32 },
                    purchase_option_name: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    final_price_in_cents: {
                      n: 5,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    original_price_in_cents: {
                      n: 6,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    formatted_final_price: {
                      n: 8,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    formatted_original_price: {
                      n: 9,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    discount_pct: { n: 10, br: s.readInt32, bw: i.writeInt32 },
                    bundle_discount_pct: {
                      n: 12,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    is_free_to_keep: { n: 13, br: s.readBool, bw: i.writeBool },
                    price_before_bundle_discount: {
                      n: 14,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    formatted_price_before_bundle_discount: {
                      n: 15,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    active_discounts: { n: 20, c: St, r: !0, q: !0 },
                    user_can_purchase_as_gift: {
                      n: 31,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    is_commercial_license: {
                      n: 40,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    should_suppress_discount_pct: {
                      n: 41,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    hide_discount_pct_for_compliance: {
                      n: 42,
                      d: !1,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    included_game_count: {
                      n: 43,
                      d: 1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    lowest_recent_price_in_cents: {
                      n: 44,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    requires_shipping: {
                      n: 45,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    recurrence_info: { n: 46, c: At },
                    free_to_keep_ends: {
                      n: 47,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    must_purchase_as_set: {
                      n: 48,
                      d: !1,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    package_group: {
                      n: 49,
                      d: "default",
                      br: s.readString,
                      bw: i.writeString,
                    },
                    is_edition: { n: 50, br: s.readBool, bw: i.writeBool },
                    free_to_keep_base_package: {
                      n: 51,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    price_cannot_be_displayed_as_discount: {
                      n: 52,
                      d: !1,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    price_to_base_discount_on: {
                      n: 53,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    free_with_master_sub_appid: {
                      n: 54,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    formatted_lowest_recent_price: {
                      n: 55,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    is_free_license: { n: 56, br: s.readBool, bw: i.writeBool },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return (X.sm_mbf || (X.sm_mbf = M(X.M())), X.sm_mbf);
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, t) {
            return k(X.M(), e, t);
          }
          static fromObject(e) {
            return p(X.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new X();
            return X.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(X.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (X.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(X.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_PurchaseOption";
          }
        }
        class St extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              St.prototype.discount_amount || w(St.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    discount_amount: {
                      n: 1,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    discount_description: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    discount_end_date: {
                      n: 3,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    master_sub_appid: {
                      n: 4,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return (St.sm_mbf || (St.sm_mbf = M(St.M())), St.sm_mbf);
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, t) {
            return k(St.M(), e, t);
          }
          static fromObject(e) {
            return p(St.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new St();
            return St.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(St.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (St.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(St.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_PurchaseOption_Discount";
          }
        }
        class At extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              At.prototype.packageid || w(At.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    packageid: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    billing_agreement_type: {
                      n: 2,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    renewal_time_unit: {
                      n: 3,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    renewal_time_period: {
                      n: 4,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    renewal_price_in_cents: {
                      n: 5,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    formatted_renewal_price: {
                      n: 6,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return (At.sm_mbf || (At.sm_mbf = M(At.M())), At.sm_mbf);
          }
          toObject(e = !1) {
            return At.toObject(e, this);
          }
          static toObject(e, t) {
            return k(At.M(), e, t);
          }
          static fromObject(e) {
            return p(At.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new At();
            return At.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(At.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (At.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(At.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_PurchaseOption_RecurrenceInfo";
          }
        }
        class Wt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Wt.prototype.all_ages_screenshots || w(Wt.M()),
              d.Message.initialize(this, e, 0, -1, [2, 3], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    all_ages_screenshots: { n: 2, c: ie, r: !0, q: !0 },
                    mature_content_screenshots: { n: 3, c: ie, r: !0, q: !0 },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return (Wt.sm_mbf || (Wt.sm_mbf = M(Wt.M())), Wt.sm_mbf);
          }
          toObject(e = !1) {
            return Wt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Wt.M(), e, t);
          }
          static fromObject(e) {
            return p(Wt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Wt();
            return Wt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Wt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Wt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Wt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Screenshots";
          }
        }
        class ie extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ie.prototype.filename || w(ie.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    filename: { n: 1, br: s.readString, bw: i.writeString },
                    ordinal: { n: 2, br: s.readInt32, bw: i.writeInt32 },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return (ie.sm_mbf || (ie.sm_mbf = M(ie.M())), ie.sm_mbf);
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ie.M(), e, t);
          }
          static fromObject(e) {
            return p(ie.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ie();
            return ie.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ie.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ie.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ie.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Screenshots_Screenshot";
          }
        }
        class Lt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Lt.prototype.highlights || w(Lt.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    highlights: { n: 1, c: ae, r: !0, q: !0 },
                    other_trailers: { n: 2, c: ae, r: !0, q: !0 },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return (Lt.sm_mbf || (Lt.sm_mbf = M(Lt.M())), Lt.sm_mbf);
          }
          toObject(e = !1) {
            return Lt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Lt.M(), e, t);
          }
          static fromObject(e) {
            return p(Lt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Lt();
            return Lt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Lt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Lt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Lt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Trailers";
          }
        }
        class jt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              jt.prototype.filename || w(jt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    filename: { n: 1, br: s.readString, bw: i.writeString },
                    type: { n: 2, br: s.readString, bw: i.writeString },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return (jt.sm_mbf || (jt.sm_mbf = M(jt.M())), jt.sm_mbf);
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(jt.M(), e, t);
          }
          static fromObject(e) {
            return p(jt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new jt();
            return jt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(jt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (jt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(jt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Trailers_VideoSource";
          }
        }
        class xt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              xt.prototype.cdn_path || w(xt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    cdn_path: { n: 1, br: s.readString, bw: i.writeString },
                    encoding: { n: 2, br: s.readString, bw: i.writeString },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return (xt.sm_mbf || (xt.sm_mbf = M(xt.M())), xt.sm_mbf);
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(xt.M(), e, t);
          }
          static fromObject(e) {
            return p(xt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new xt();
            return xt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(xt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (xt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(xt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Trailers_AdaptiveTrailer";
          }
        }
        class ae extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ae.prototype.trailer_name || w(ae.M()),
              d.Message.initialize(this, e, 0, -1, [5, 6], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    trailer_name: { n: 1, br: s.readString, bw: i.writeString },
                    trailer_url_format: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    trailer_category: {
                      n: 13,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    microtrailer: { n: 5, c: jt, r: !0, q: !0 },
                    adaptive_trailers: { n: 6, c: xt, r: !0, q: !0 },
                    captions_manifest: {
                      n: 7,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    screenshot_medium: {
                      n: 10,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    screenshot_full: {
                      n: 11,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    trailer_base_id: {
                      n: 12,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    all_ages: { n: 14, br: s.readBool, bw: i.writeBool },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return (ae.sm_mbf || (ae.sm_mbf = M(ae.M())), ae.sm_mbf);
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ae.M(), e, t);
          }
          static fromObject(e) {
            return p(ae.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ae();
            return ae.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ae.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ae.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ae.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Trailers_Trailer";
          }
        }
        class Ut extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ut.prototype.elanguage || w(Ut.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    elanguage: {
                      n: 1,
                      d: -1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    eadditionallanguage: {
                      n: 5,
                      d: -1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    supported: { n: 2, br: s.readBool, bw: i.writeBool },
                    full_audio: { n: 3, br: s.readBool, bw: i.writeBool },
                    subtitles: { n: 4, br: s.readBool, bw: i.writeBool },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return (Ut.sm_mbf || (Ut.sm_mbf = M(Ut.M())), Ut.sm_mbf);
          }
          toObject(e = !1) {
            return Ut.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ut.M(), e, t);
          }
          static fromObject(e) {
            return p(Ut.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ut();
            return Ut.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ut.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ut.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ut.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_SupportedLanguage";
          }
        }
        class Pt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Pt.prototype.start_time || w(Pt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    start_time: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    end_time: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    text: { n: 3, br: s.readString, bw: i.writeString },
                    appid: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return (Pt.sm_mbf || (Pt.sm_mbf = M(Pt.M())), Pt.sm_mbf);
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Pt.M(), e, t);
          }
          static fromObject(e) {
            return p(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Pt();
            return Pt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Pt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Pt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Pt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_FreeWeekend";
          }
        }
        class Nt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Nt.prototype.link_type || w(Nt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    link_type: { n: 1, br: s.readEnum, bw: i.writeEnum },
                    url: { n: 2, br: s.readString, bw: i.writeString },
                    text: { n: 3, br: s.readString, bw: i.writeString },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return (Nt.sm_mbf || (Nt.sm_mbf = M(Nt.M())), Nt.sm_mbf);
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Nt.M(), e, t);
          }
          static fromObject(e) {
            return p(Nt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Nt();
            return Nt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Nt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Nt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Nt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_Link";
          }
        }
        class Gt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Gt.prototype.name || w(Gt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    name: { n: 1, br: s.readString, bw: i.writeString },
                    heading: { n: 2, br: s.readString, bw: i.writeString },
                    display_type: { n: 3, br: s.readEnum, bw: i.writeEnum },
                    dropdown_title: {
                      n: 4,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    dropdown_description_bbcode: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return (Gt.sm_mbf || (Gt.sm_mbf = M(Gt.M())), Gt.sm_mbf);
          }
          toObject(e = !1) {
            return Gt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Gt.M(), e, t);
          }
          static fromObject(e) {
            return p(Gt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Gt();
            return Gt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Gt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Gt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Gt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_PackageGroup";
          }
        }
        function gX(r) {
          return (
            "unknown StoreItem_PackageGroup_EPackageGroupDisplayType ( " +
            r +
            " )"
          );
        }
        class Dt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Dt.prototype.steam_award || w(Dt.M()),
              d.Message.initialize(
                this,
                e,
                0,
                -1,
                [1, 10, 13, 15, 18, 31],
                null,
              ));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    steam_award: { n: 1, c: ut, r: !0, q: !0 },
                    vetted: { n: 2, br: s.readBool, bw: i.writeBool },
                    no_mouse_keyboard_support: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    controller_wizard_complete: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    drm_third_party_type: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    drm_activation_limit: {
                      n: 6,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    user_account_third_party: {
                      n: 7,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    user_account_third_party_link_to_steam: {
                      n: 8,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    anticheat: { n: 9, c: Vt },
                    eula: { n: 10, c: It, r: !0, q: !0 },
                    ai_generation_service: { n: 11, c: Ht },
                    refund_checks_ea_playtime: {
                      n: 12,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    section: { n: 13, c: Kt, r: !0, q: !0 },
                    legal_notice_bbcode: {
                      n: 14,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    interactive_elements: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                    content_survey_notes: {
                      n: 16,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    content_survey_ai_notes: {
                      n: 17,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    press_review: { n: 18, c: Yt, r: !0, q: !0 },
                    partner_awards_bbcode: {
                      n: 19,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    early_access: { n: 20, c: $t },
                    season_pass: { n: 21, c: gt },
                    links_and_info: { n: 22, c: _t },
                    item_store_eligible: {
                      n: 23,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    points_shop_eligible: {
                      n: 24,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    metacritic: { n: 26, c: Xt },
                    cast_and_crew: { n: 27, c: Qt },
                    system_requirements: { n: 28, c: Jt },
                    running_time_minutes: {
                      n: 29,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    episode: { n: 30, c: Zt },
                    seasons: { n: 31, c: qt, r: !0, q: !0 },
                    video_extras_note: {
                      n: 32,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return (Dt.sm_mbf || (Dt.sm_mbf = M(Dt.M())), Dt.sm_mbf);
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Dt.M(), e, t);
          }
          static fromObject(e) {
            return p(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Dt();
            return Dt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Dt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Dt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Dt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails";
          }
        }
        function fX(r) {
          return (
            "unknown StoreItem_ExtraDetails_EVideoExtrasNote ( " + r + " )"
          );
        }
        class Vt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Vt.prototype.kernel_mode || w(Vt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    kernel_mode: { n: 1, br: s.readBool, bw: i.writeBool },
                    uninstall_completely: {
                      n: 2,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    boot_protection: { n: 3, br: s.readBool, bw: i.writeBool },
                    boot_protection_name: {
                      n: 4,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    name: { n: 5, br: s.readString, bw: i.writeString },
                    name_loc: { n: 6, br: s.readString, bw: i.writeString },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return (Vt.sm_mbf || (Vt.sm_mbf = M(Vt.M())), Vt.sm_mbf);
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Vt.M(), e, t);
          }
          static fromObject(e) {
            return p(Vt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Vt();
            return Vt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Vt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Vt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Vt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_Anticheat";
          }
        }
        class It extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              It.prototype.name || w(It.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    name: { n: 1, br: s.readString, bw: i.writeString },
                    url: { n: 2, br: s.readString, bw: i.writeString },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return (It.sm_mbf || (It.sm_mbf = M(It.M())), It.sm_mbf);
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, t) {
            return k(It.M(), e, t);
          }
          static fromObject(e) {
            return p(It.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new It();
            return It.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(It.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (It.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(It.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_Eula";
          }
        }
        class Ht extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ht.prototype.name || w(Ht.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: {
                    name: { n: 1, br: s.readString, bw: i.writeString },
                    url: { n: 2, br: s.readString, bw: i.writeString },
                  },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return (Ht.sm_mbf || (Ht.sm_mbf = M(Ht.M())), Ht.sm_mbf);
          }
          toObject(e = !1) {
            return Ht.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ht.M(), e, t);
          }
          static fromObject(e) {
            return p(Ht.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ht();
            return Ht.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ht.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ht.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ht.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_AIGeneratedContentService";
          }
        }
        class Kt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Kt.prototype.label || w(Kt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    label: { n: 1, br: s.readString, bw: i.writeString },
                    content_bbcode: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    banner: { n: 3, br: s.readEnum, bw: i.writeEnum },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return (Kt.sm_mbf || (Kt.sm_mbf = M(Kt.M())), Kt.sm_mbf);
          }
          toObject(e = !1) {
            return Kt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Kt.M(), e, t);
          }
          static fromObject(e) {
            return p(Kt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Kt();
            return Kt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Kt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Kt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Kt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_PageSection";
          }
        }
        function bX(r) {
          return (
            "unknown StoreItem_ExtraDetails_PageSection_EPageSectionBanner ( " +
            r +
            " )"
          );
        }
        class Yt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Yt.prototype.quote || w(Yt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    quote: { n: 1, br: s.readString, bw: i.writeString },
                    score: { n: 2, br: s.readString, bw: i.writeString },
                    site: { n: 3, br: s.readString, bw: i.writeString },
                    url: { n: 4, br: s.readString, bw: i.writeString },
                  },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return (Yt.sm_mbf || (Yt.sm_mbf = M(Yt.M())), Yt.sm_mbf);
          }
          toObject(e = !1) {
            return Yt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Yt.M(), e, t);
          }
          static fromObject(e) {
            return p(Yt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Yt();
            return Yt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Yt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Yt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Yt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_PressReview";
          }
        }
        class $t extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              $t.prototype.why_bbcode || w($t.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    why_bbcode: { n: 1, br: s.readString, bw: i.writeString },
                    how_long_bbcode: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    full_version_bbcode: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    current_state_bbcode: {
                      n: 4,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    pricing_bbcode: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    community_bbcode: {
                      n: 6,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    description_bbcode: {
                      n: 7,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return ($t.sm_mbf || ($t.sm_mbf = M($t.M())), $t.sm_mbf);
          }
          toObject(e = !1) {
            return $t.toObject(e, this);
          }
          static toObject(e, t) {
            return k($t.M(), e, t);
          }
          static fromObject(e) {
            return p($t.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new $t();
            return $t.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y($t.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ($t.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E($t.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_EarlyAccess";
          }
        }
        class _t extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              _t.prototype.website || w(_t.M()),
              d.Message.initialize(this, e, 0, -1, [6, 7, 8], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: {
                    website: { n: 1, br: s.readString, bw: i.writeString },
                    stats_url: { n: 2, br: s.readString, bw: i.writeString },
                    online_manual_url: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    health_warning_url: {
                      n: 4,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    privacy_policy_url: {
                      n: 5,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    available_documents: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                    genreids: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    manufacturers: {
                      n: 8,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    achievements_visible: {
                      n: 9,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    achievement_count: {
                      n: 10,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return (_t.sm_mbf || (_t.sm_mbf = M(_t.M())), _t.sm_mbf);
          }
          toObject(e = !1) {
            return _t.toObject(e, this);
          }
          static toObject(e, t) {
            return k(_t.M(), e, t);
          }
          static fromObject(e) {
            return p(_t.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new _t();
            return _t.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(_t.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (_t.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(_t.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_LinksAndInfo";
          }
        }
        class Xt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Xt.prototype.score || w(Xt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    score: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    url: { n: 2, br: s.readString, bw: i.writeString },
                    always_show: { n: 3, br: s.readBool, bw: i.writeBool },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return (Xt.sm_mbf || (Xt.sm_mbf = M(Xt.M())), Xt.sm_mbf);
          }
          toObject(e = !1) {
            return Xt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Xt.M(), e, t);
          }
          static fromObject(e) {
            return p(Xt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Xt();
            return Xt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Xt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Xt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Xt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_Metacritic";
          }
        }
        class Qt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Qt.prototype.directors || w(Qt.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    directors: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    producers: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    writers: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    music: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                    actors: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return (Qt.sm_mbf || (Qt.sm_mbf = M(Qt.M())), Qt.sm_mbf);
          }
          toObject(e = !1) {
            return Qt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Qt.M(), e, t);
          }
          static fromObject(e) {
            return p(Qt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Qt();
            return Qt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Qt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Qt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Qt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_CastAndCrew";
          }
        }
        class Jt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Jt.prototype.platforms || w(Jt.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: { platforms: { n: 1, c: Ct, r: !0, q: !0 } },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return (Jt.sm_mbf || (Jt.sm_mbf = M(Jt.M())), Jt.sm_mbf);
          }
          toObject(e = !1) {
            return Jt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Jt.M(), e, t);
          }
          static fromObject(e) {
            return p(Jt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Jt();
            return Jt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Jt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Jt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Jt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_SystemRequirements";
          }
        }
        function hX(r) {
          return (
            "unknown StoreItem_ExtraDetails_SystemRequirements_EUnsupportedOSNote ( " +
            r +
            " )"
          );
        }
        function MX(r) {
          return (
            "unknown StoreItem_ExtraDetails_SystemRequirements_ESysReqPlatform ( " +
            r +
            " )"
          );
        }
        class Q extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Q.prototype.amount || w(Q.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    amount: { n: 1, br: s.readString, bw: i.writeString },
                    units: { n: 2, br: s.readString, bw: i.writeString },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return (Q.sm_mbf || (Q.sm_mbf = M(Q.M())), Q.sm_mbf);
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Q.M(), e, t);
          }
          static fromObject(e) {
            return p(Q.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Q();
            return Q.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Q.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Q.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Q.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_SystemRequirements_Size";
          }
        }
        class oe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              oe.prototype.os_version || w(oe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    os_version: { n: 1, br: s.readString, bw: i.writeString },
                    os_version_unsupported: {
                      n: 2,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    processor: { n: 3, br: s.readString, bw: i.writeString },
                    memory: { n: 4, c: Q },
                    graphics: { n: 5, br: s.readString, bw: i.writeString },
                    directx: { n: 6, br: s.readString, bw: i.writeString },
                    broadband: { n: 7, br: s.readBool, bw: i.writeBool },
                    storage: { n: 8, c: Q },
                    storage_hq: { n: 9, c: Q },
                    sound_card: { n: 10, br: s.readString, bw: i.writeString },
                    vr_support: { n: 11, br: s.readString, bw: i.writeString },
                    notes: { n: 12, br: s.readString, bw: i.writeString },
                    legacy_bbcode: {
                      n: 13,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return (oe.sm_mbf || (oe.sm_mbf = M(oe.M())), oe.sm_mbf);
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, t) {
            return k(oe.M(), e, t);
          }
          static fromObject(e) {
            return p(oe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new oe();
            return oe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(oe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (oe.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(oe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_SystemRequirements_Requirements";
          }
        }
        class Ct extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Ct.prototype.platform || w(Ct.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: {
                    platform: { n: 1, br: s.readEnum, bw: i.writeEnum },
                    minimum: { n: 2, c: oe },
                    recommended: { n: 3, c: oe },
                    requires_64bit: { n: 4, br: s.readBool, bw: i.writeBool },
                    requires_apple_silicon: {
                      n: 5,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    unsupported_os_note: {
                      n: 6,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                  },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return (Ct.sm_mbf || (Ct.sm_mbf = M(Ct.M())), Ct.sm_mbf);
          }
          toObject(e = !1) {
            return Ct.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Ct.M(), e, t);
          }
          static fromObject(e) {
            return p(Ct.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Ct();
            return Ct.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Ct.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Ct.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Ct.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements";
          }
        }
        class Zt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Zt.prototype.number || w(Zt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    number: { n: 1, br: s.readString, bw: i.writeString },
                    type: { n: 2, br: s.readEnum, bw: i.writeEnum },
                    hide_details: { n: 3, br: s.readBool, bw: i.writeBool },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return (Zt.sm_mbf || (Zt.sm_mbf = M(Zt.M())), Zt.sm_mbf);
          }
          toObject(e = !1) {
            return Zt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Zt.M(), e, t);
          }
          static fromObject(e) {
            return p(Zt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Zt();
            return Zt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Zt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Zt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Zt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_Episode";
          }
        }
        function pX(r) {
          return (
            "unknown StoreItem_ExtraDetails_Episode_EEpisodeType ( " + r + " )"
          );
        }
        class qt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              qt.prototype.index || w(qt.M()),
              d.Message.initialize(this, e, 0, -1, [3], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    index: { n: 1, br: s.readInt32, bw: i.writeInt32 },
                    name: { n: 2, br: s.readString, bw: i.writeString },
                    episode_appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                  },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return (qt.sm_mbf || (qt.sm_mbf = M(qt.M())), qt.sm_mbf);
          }
          toObject(e = !1) {
            return qt.toObject(e, this);
          }
          static toObject(e, t) {
            return k(qt.M(), e, t);
          }
          static fromObject(e) {
            return p(qt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new qt();
            return qt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(qt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (qt.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(qt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_ExtraDetails_Season";
          }
        }
        class er extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              er.prototype.optin_name || w(er.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    optin_name: { n: 1, br: s.readString, bw: i.writeString },
                    values: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.readString,
                      bw: i.writeRepeatedString,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return (er.sm_mbf || (er.sm_mbf = M(er.M())), er.sm_mbf);
          }
          toObject(e = !1) {
            return er.toObject(e, this);
          }
          static toObject(e, t) {
            return k(er.M(), e, t);
          }
          static fromObject(e) {
            return p(er.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new er();
            return er.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(er.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (er.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(er.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_OptInRegistrationTags";
          }
        }
        class tr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              tr.prototype.type || w(tr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    type: { n: 1, br: s.readEnum, bw: i.writeEnum },
                    highlighted: { n: 2, br: s.readBool, bw: i.writeBool },
                    text_bbcode: { n: 3, br: s.readString, bw: i.writeString },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return (tr.sm_mbf || (tr.sm_mbf = M(tr.M())), tr.sm_mbf);
          }
          toObject(e = !1) {
            return tr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(tr.M(), e, t);
          }
          static fromObject(e) {
            return p(tr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new tr();
            return tr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(tr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (tr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(tr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItem_PurchaseNote";
          }
        }
        function kX(r) {
          return (
            "unknown StoreItem_PurchaseNote_EPurchaseNoteType ( " + r + " )"
          );
        }
        class ce extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ce.prototype.include_assets || w(ce.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    include_assets: { n: 1, br: s.readBool, bw: i.writeBool },
                    include_release: { n: 2, br: s.readBool, bw: i.writeBool },
                    include_platforms: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_all_purchase_options: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_screenshots: {
                      n: 5,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_trailers: { n: 6, br: s.readBool, bw: i.writeBool },
                    include_ratings: { n: 7, br: s.readBool, bw: i.writeBool },
                    include_tag_count: {
                      n: 8,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    include_reviews: { n: 9, br: s.readBool, bw: i.writeBool },
                    include_basic_info: {
                      n: 10,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_supported_languages: {
                      n: 11,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_full_description: {
                      n: 12,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_included_items: {
                      n: 13,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    included_item_data_request: { n: 14, c: ce },
                    include_assets_without_overrides: {
                      n: 15,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    apply_user_filters: {
                      n: 16,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_links: { n: 17, br: s.readBool, bw: i.writeBool },
                    include_extra_details: {
                      n: 18,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_best_purchase_option: {
                      n: 19,
                      d: !0,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    include_optin_registration_tags: {
                      n: 20,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return (ce.sm_mbf || (ce.sm_mbf = M(ce.M())), ce.sm_mbf);
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ce.M(), e, t);
          }
          static fromObject(e) {
            return p(ce.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ce();
            return ce.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ce.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ce.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ce.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreBrowseItemDataRequest";
          }
        }
        class H extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              H.prototype.language || w(H.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    language: { n: 1, br: s.readString, bw: i.writeString },
                    elanguage: { n: 2, br: s.readInt32, bw: i.writeInt32 },
                    country_code: { n: 3, br: s.readString, bw: i.writeString },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return (H.sm_mbf || (H.sm_mbf = M(H.M())), H.sm_mbf);
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, t) {
            return k(H.M(), e, t);
          }
          static fromObject(e) {
            return p(H.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new H();
            return H.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(H.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (H.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(H.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreBrowseContext";
          }
        }
        class le extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              le.prototype.appid || w(le.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    packageid: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    bundleid: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    tagid: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                    creatorid: { n: 5, br: s.readUint32, bw: i.writeUint32 },
                    hubcategoryid: {
                      n: 6,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    salepagegid: {
                      n: 7,
                      br: s.readFixed64String,
                      bw: i.writeFixed64String,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return (le.sm_mbf || (le.sm_mbf = M(le.M())), le.sm_mbf);
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, t) {
            return k(le.M(), e, t);
          }
          static fromObject(e) {
            return p(le.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new le();
            return le.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(le.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (le.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(le.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreItemID";
          }
        }
        class rr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              rr.prototype.ids || w(rr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    ids: { n: 1, c: le, r: !0, q: !0 },
                    context: { n: 2, c: H },
                    data_request: { n: 3, c: ce },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return (rr.sm_mbf || (rr.sm_mbf = M(rr.M())), rr.sm_mbf);
          }
          toObject(e = !1) {
            return rr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(rr.M(), e, t);
          }
          static fromObject(e) {
            return p(rr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new rr();
            return rr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(rr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (rr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(rr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetItems_Request";
          }
        }
        class nr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              nr.prototype.store_items || w(nr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: { store_items: { n: 1, c: I, r: !0, q: !0 } },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return (nr.sm_mbf || (nr.sm_mbf = M(nr.M())), nr.sm_mbf);
          }
          toObject(e = !1) {
            return nr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(nr.M(), e, t);
          }
          static fromObject(e) {
            return p(nr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new nr();
            return nr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(nr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (nr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(nr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetItems_Response";
          }
        }
        class sr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              sr.prototype.language || w(sr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    language: { n: 1, br: s.readString, bw: i.writeString },
                    elanguage: {
                      n: 2,
                      d: -1,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return (sr.sm_mbf || (sr.sm_mbf = M(sr.M())), sr.sm_mbf);
          }
          toObject(e = !1) {
            return sr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(sr.M(), e, t);
          }
          static fromObject(e) {
            return p(sr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new sr();
            return sr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(sr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (sr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(sr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetStoreCategories_Request";
          }
        }
        class ir extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ir.prototype.categories || w(ir.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: { categories: { n: 1, c: ar, r: !0, q: !0 } },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return (ir.sm_mbf || (ir.sm_mbf = M(ir.M())), ir.sm_mbf);
          }
          toObject(e = !1) {
            return ir.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ir.M(), e, t);
          }
          static fromObject(e) {
            return p(ir.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ir();
            return ir.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ir.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ir.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ir.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetStoreCategories_Response";
          }
        }
        class ar extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ar.prototype.categoryid || w(ar.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    categoryid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    type: { n: 2, br: s.readEnum, bw: i.writeEnum },
                    internal_name: {
                      n: 3,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    display_name: { n: 4, br: s.readString, bw: i.writeString },
                    image_url: { n: 5, br: s.readString, bw: i.writeString },
                    show_in_search: { n: 6, br: s.readBool, bw: i.writeBool },
                    computed: { n: 7, br: s.readBool, bw: i.writeBool },
                    edit_url: { n: 8, br: s.readString, bw: i.writeString },
                    edit_sort_order: {
                      n: 9,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return (ar.sm_mbf || (ar.sm_mbf = M(ar.M())), ar.sm_mbf);
          }
          toObject(e = !1) {
            return ar.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ar.M(), e, t);
          }
          static fromObject(e) {
            return p(ar.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ar();
            return ar.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ar.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ar.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ar.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetStoreCategories_Response_Category";
          }
        }
        class or extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              or.prototype.context || w(or.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    context: { n: 1, c: H },
                    excluded_content_descriptorids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return (or.sm_mbf || (or.sm_mbf = M(or.M())), or.sm_mbf);
          }
          toObject(e = !1) {
            return or.toObject(e, this);
          }
          static toObject(e, t) {
            return k(or.M(), e, t);
          }
          static fromObject(e) {
            return p(or.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new or();
            return or.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(or.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (or.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(or.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetContentHubConfig_Request";
          }
        }
        class cr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              cr.prototype.hubconfigs || w(cr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { hubconfigs: { n: 1, c: lr, r: !0, q: !0 } },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return (cr.sm_mbf || (cr.sm_mbf = M(cr.M())), cr.sm_mbf);
          }
          toObject(e = !1) {
            return cr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(cr.M(), e, t);
          }
          static fromObject(e) {
            return p(cr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new cr();
            return cr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(cr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (cr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(cr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetContentHubConfig_Response";
          }
        }
        class lr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              lr.prototype.hubcategoryid || w(lr.M()),
              d.Message.initialize(this, e, 0, -1, [6, 7, 8, 9], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    hubcategoryid: {
                      n: 1,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    type: { n: 2, br: s.readString, bw: i.writeString },
                    handle: { n: 3, br: s.readString, bw: i.writeString },
                    display_name: { n: 4, br: s.readString, bw: i.writeString },
                    url_path: { n: 5, br: s.readString, bw: i.writeString },
                    replaces_tags: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    must_have_tags: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    any_one_of_tags: {
                      n: 8,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    must_not_have_tags: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    hub_description: {
                      n: 10,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return (lr.sm_mbf || (lr.sm_mbf = M(lr.M())), lr.sm_mbf);
          }
          toObject(e = !1) {
            return lr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(lr.M(), e, t);
          }
          static fromObject(e) {
            return p(lr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new lr();
            return lr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(lr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (lr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(lr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig";
          }
        }
        class ur extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              ur.prototype.country_code || w(ur.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    country_code: { n: 1, br: s.readString, bw: i.writeString },
                    currency_code: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return (ur.sm_mbf || (ur.sm_mbf = M(ur.M())), ur.sm_mbf);
          }
          toObject(e = !1) {
            return ur.toObject(e, this);
          }
          static toObject(e, t) {
            return k(ur.M(), e, t);
          }
          static fromObject(e) {
            return p(ur.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new ur();
            return ur.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(ur.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (ur.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(ur.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetPriceStops_Request";
          }
        }
        class dr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              dr.prototype.price_stops || w(dr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    price_stops: { n: 1, c: mr, r: !0, q: !0 },
                    currency_code: {
                      n: 2,
                      br: s.readString,
                      bw: i.writeString,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return (dr.sm_mbf || (dr.sm_mbf = M(dr.M())), dr.sm_mbf);
          }
          toObject(e = !1) {
            return dr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(dr.M(), e, t);
          }
          static fromObject(e) {
            return p(dr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new dr();
            return dr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(dr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (dr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(dr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetPriceStops_Response";
          }
        }
        class mr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              mr.prototype.formatted_amount || w(mr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    formatted_amount: {
                      n: 1,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    amount_in_cents: {
                      n: 2,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return (mr.sm_mbf || (mr.sm_mbf = M(mr.M())), mr.sm_mbf);
          }
          toObject(e = !1) {
            return mr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(mr.M(), e, t);
          }
          static fromObject(e) {
            return p(mr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new mr();
            return mr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(mr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (mr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(mr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetPriceStops_Response_PriceStop";
          }
        }
        class gr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              gr.prototype.context || w(gr.M()),
              d.Message.initialize(this, e, 0, -1, [3], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    context: { n: 1, c: H },
                    store_page_filter: { n: 2, c: re },
                    appids: { n: 3, c: le, r: !0, q: !0 },
                    steamid: {
                      n: 4,
                      br: s.readUint64String,
                      bw: i.writeUint64String,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return (gr.sm_mbf || (gr.sm_mbf = M(gr.M())), gr.sm_mbf);
          }
          toObject(e = !1) {
            return gr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(gr.M(), e, t);
          }
          static fromObject(e) {
            return p(gr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new gr();
            return gr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(gr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (gr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(gr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetDLCForApps_Request";
          }
        }
        class fr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              fr.prototype.dlc_data || w(fr.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    dlc_data: { n: 1, c: br, r: !0, q: !0 },
                    playtime: { n: 2, c: hr, r: !0, q: !0 },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return (fr.sm_mbf || (fr.sm_mbf = M(fr.M())), fr.sm_mbf);
          }
          toObject(e = !1) {
            return fr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(fr.M(), e, t);
          }
          static fromObject(e) {
            return p(fr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new fr();
            return fr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(fr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (fr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(fr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetDLCForApps_Response";
          }
        }
        class br extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              br.prototype.appid || w(br.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    parentappid: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    release_date: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                    coming_soon: { n: 4, br: s.readBool, bw: i.writeBool },
                    price: {
                      n: 5,
                      br: s.readInt64String,
                      bw: i.writeInt64String,
                    },
                    discount: { n: 6, br: s.readUint32, bw: i.writeUint32 },
                    free: { n: 7, br: s.readBool, bw: i.writeBool },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return (br.sm_mbf || (br.sm_mbf = M(br.M())), br.sm_mbf);
          }
          toObject(e = !1) {
            return br.toObject(e, this);
          }
          static toObject(e, t) {
            return k(br.M(), e, t);
          }
          static fromObject(e) {
            return p(br.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new br();
            return br.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(br.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (br.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(br.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetDLCForApps_Response_DLCData";
          }
        }
        class hr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              hr.prototype.appid || w(hr.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    playtime: { n: 2, br: s.readUint32, bw: i.writeUint32 },
                    last_played: { n: 3, br: s.readUint32, bw: i.writeUint32 },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return (hr.sm_mbf || (hr.sm_mbf = M(hr.M())), hr.sm_mbf);
          }
          toObject(e = !1) {
            return hr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(hr.M(), e, t);
          }
          static fromObject(e) {
            return p(hr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new hr();
            return hr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(hr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (hr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(hr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
          }
        }
        class Mr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Mr.prototype.context || w(Mr.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    context: { n: 1, c: H },
                    appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    flavor: { n: 3, br: s.readString, bw: i.writeString },
                    count: { n: 4, br: s.readUint32, bw: i.writeUint32 },
                    store_page_filter: { n: 5, c: re },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return (Mr.sm_mbf || (Mr.sm_mbf = M(Mr.M())), Mr.sm_mbf);
          }
          toObject(e = !1) {
            return Mr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Mr.M(), e, t);
          }
          static fromObject(e) {
            return p(Mr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Mr();
            return Mr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Mr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Mr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Mr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetDLCForAppsSolr_Request";
          }
        }
        class pr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              pr.prototype.dlc_lists || w(pr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: { dlc_lists: { n: 1, c: kr, r: !0, q: !0 } },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return (pr.sm_mbf || (pr.sm_mbf = M(pr.M())), pr.sm_mbf);
          }
          toObject(e = !1) {
            return pr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(pr.M(), e, t);
          }
          static fromObject(e) {
            return p(pr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new pr();
            return pr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(pr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (pr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(pr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetDLCForAppsSolr_Response";
          }
        }
        class kr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              kr.prototype.parent_appid || w(kr.M()),
              d.Message.initialize(this, e, 0, -1, [2], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    parent_appid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    dlc_appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return (kr.sm_mbf || (kr.sm_mbf = M(kr.M())), kr.sm_mbf);
          }
          toObject(e = !1) {
            return kr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(kr.M(), e, t);
          }
          static fromObject(e) {
            return p(kr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new kr();
            return kr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(kr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (kr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(kr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
          }
        }
        class yr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              yr.prototype.packageid || w(yr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    packageid: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    context: { n: 2, c: H },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return (yr.sm_mbf || (yr.sm_mbf = M(yr.M())), yr.sm_mbf);
          }
          toObject(e = !1) {
            return yr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(yr.M(), e, t);
          }
          static fromObject(e) {
            return p(yr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new yr();
            return yr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(yr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (yr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(yr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetHardwareItems_Request";
          }
        }
        class Er extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Er.prototype.packageid || w(Er.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    packageid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
                    inventory_available: {
                      n: 3,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    high_pending_orders: {
                      n: 4,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    account_restricted_from_purchasing: {
                      n: 5,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    requires_reservation: {
                      n: 6,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    rtime_estimated_notification: {
                      n: 7,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    notificaton_token: {
                      n: 8,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    reservation_state: {
                      n: 9,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    expired: { n: 10, br: s.readBool, bw: i.writeBool },
                    time_expires: {
                      n: 11,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    time_reserved: {
                      n: 12,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    allow_quantity_purchase: {
                      n: 13,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    max_quantity_per_purchase: {
                      n: 14,
                      br: s.readInt32,
                      bw: i.writeInt32,
                    },
                    allow_purchase_in_country: {
                      n: 15,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    estimated_delivery_soonest_business_days: {
                      n: 17,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    estimated_delivery_latest_business_days: {
                      n: 18,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    not_allowed_to_reserved_because_already_owned: {
                      n: 19,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    appid_ownership_not_allowed_to_reserve: {
                      n: 20,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    account_first_date_purchase_requirement: {
                      n: 21,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    position_is_waitlist: {
                      n: 22,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    user_waitlist_token: {
                      n: 23,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    queue_in_waitlist: {
                      n: 24,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    queue_waitlist_token: {
                      n: 25,
                      br: s.readString,
                      bw: i.writeString,
                    },
                    collection_time_active: {
                      n: 26,
                      br: s.readUint32,
                      bw: i.writeUint32,
                    },
                    reservation_not_allowed: {
                      n: 27,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    requires_signature: {
                      n: 28,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return (Er.sm_mbf || (Er.sm_mbf = M(Er.M())), Er.sm_mbf);
          }
          toObject(e = !1) {
            return Er.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Er.M(), e, t);
          }
          static fromObject(e) {
            return p(Er.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Er();
            return Er.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Er.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Er.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Er.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHardwarePackageDetails";
          }
        }
        class wr extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              wr.prototype.details || w(wr.M()),
              d.Message.initialize(this, e, 0, -1, [1], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: { details: { n: 1, c: Er, r: !0, q: !0 } },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return (wr.sm_mbf || (wr.sm_mbf = M(wr.M())), wr.sm_mbf);
          }
          toObject(e = !1) {
            return wr.toObject(e, this);
          }
          static toObject(e, t) {
            return k(wr.M(), e, t);
          }
          static fromObject(e) {
            return p(wr.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new wr();
            return wr.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(wr.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (wr.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(wr.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreBrowse_GetHardwareItems_Response";
          }
        }
        class Br extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            (super(),
              Br.prototype.filter_failure || w(Br.M()),
              d.Message.initialize(this, e, 0, -1, [21, 30], null));
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    filter_failure: {
                      n: 1,
                      d: zu,
                      br: s.readEnum,
                      bw: i.writeEnum,
                    },
                    already_owned: { n: 5, br: s.readBool, bw: i.writeBool },
                    on_wishlist: { n: 6, br: s.readBool, bw: i.writeBool },
                    ignored: { n: 7, br: s.readBool, bw: i.writeBool },
                    not_in_users_language: {
                      n: 10,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    not_on_users_platform: {
                      n: 11,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    demo_for_owned_game: {
                      n: 12,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    dlc_for_unowned_game: {
                      n: 13,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    nonpreferred_product_early_access: {
                      n: 22,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    nonpreferred_product_prepurchase: {
                      n: 23,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    nonpreferred_product_software: {
                      n: 24,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    nonpreferred_product_vr: {
                      n: 25,
                      br: s.readBool,
                      bw: i.writeBool,
                    },
                    excluded_tagids: {
                      n: 21,
                      r: !0,
                      q: !0,
                      br: s.readUint32,
                      pbr: s.readPackedUint32,
                      bw: i.writeRepeatedUint32,
                    },
                    excluded_content_descriptorids: {
                      n: 30,
                      r: !0,
                      q: !0,
                      br: s.readEnum,
                      pbr: s.readPackedEnum,
                      bw: i.writeRepeatedEnum,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return (Br.sm_mbf || (Br.sm_mbf = M(Br.M())), Br.sm_mbf);
          }
          toObject(e = !1) {
            return Br.toObject(e, this);
          }
          static toObject(e, t) {
            return k(Br.M(), e, t);
          }
          static fromObject(e) {
            return p(Br.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (c().BinaryReader)(e),
              n = new Br();
            return Br.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return y(Br.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return (Br.serializeBinaryToWriter(this, e), e.getResultBuffer());
          }
          static serializeBinaryToWriter(e, t) {
            E(Br.M(), e, t);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreBrowseFilterFailure";
          }
        }
        var Za;
        ((r) => {
          function e(g, b, f) {
            return g.SendMsg("StoreBrowse.GetItems#1", Y(rr, b, f), nr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["partner", "help"],
            });
          }
          r.GetItems = e;
          function t(g, b, f) {
            return g.SendMsg(
              "StoreBrowse.GetStoreCategories#1",
              Y(sr, b, f),
              ir,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          r.GetStoreCategories = t;
          function n(g, b, f) {
            return g.SendMsg(
              "StoreBrowse.GetContentHubConfig#1",
              Y(or, b, f),
              cr,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetContentHubConfig = n;
          function a(g, b, f) {
            return g.SendMsg("StoreBrowse.GetPriceStops#1", Y(ur, b, f), dr, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["partner"],
            });
          }
          r.GetPriceStops = a;
          function o(g, b, f) {
            return g.SendMsg("StoreBrowse.GetDLCForApps#1", Y(gr, b, f), fr, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }
          r.GetDLCForApps = o;
          function l(g, b, f) {
            return g.SendMsg(
              "StoreBrowse.GetDLCForAppsSolr#1",
              Y(Mr, b, f),
              pr,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetDLCForAppsSolr = l;
          function u(g, b, f) {
            return g.SendMsg(
              "StoreBrowse.GetHardwareItems#1",
              Y(yr, b, f),
              wr,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetHardwareItems = u;
        })(Za || (Za = {}));
        const Ru = {
          [Bu]: "_Guide",
          [vu]: "_Hardware",
          [wu]: "_DLC",
          [Fu]: "_Music",
          [Tu]: "_Series",
          [Eu]: "_Demo",
        };
        function Ou(r, e, t) {
          switch (e) {
            case Ja:
              return r + "_Software";
            case Ca:
              return r + "_Video";
          }
          const n = Ru[e];
          return n && t(r + n) ? r + n : r;
        }
        function Su(r) {
          const e = new Map();
          async function t() {
            await ml();
            const b = ji(),
              f = new Set([]);
            for (const h of b.languages) {
              f.add(h.strLanguage);
              const B = Li(h.strLanguage);
              B && f.add(B);
            }
            return Promise.all(
              Array.from(f).map((h) =>
                r(h).then((B) => {
                  if (!B) {
                    console.error(
                      `Project loc failed to load language ${h}, got ${B}`,
                    );
                    return;
                  }
                  const z = new Map();
                  for (const [S, A] of Object.entries(B)) z.set("#" + S, A);
                  e.set(h, z);
                }),
              ),
            );
          }
          const n = t();
          let a = !1,
            o = !1;
          (n
            .then(() => (a = !0))
            .catch((b) => {
              (console.error("LoadStrings error", b), (o = !0));
            }),
            yu(n));
          function l(b, f) {
            const [h, ...B] = f,
              z =
                e.get(h.strLanguage)?.get(b) ??
                e.get(Li(h.strLanguage) ?? "english")?.get(b);
            if (z !== void 0) return z;
            if (B.length === 0) {
              if (o)
                return (
                  console.warn(
                    `Couldn't find localization key ${b} after erroring loading strings`,
                  ),
                  b
                );
              if (!a) throw n;
              return (
                Pn().ReportError(
                  new Error(`Couldn't find localization key ${b}`),
                  { bIncludeMessageInIdentifier: !0 },
                ),
                console.warn(`Couldn't find localization key ${b}`),
                b
              );
            }
            return l(b, B);
          }
          function u(b, ...f) {
            const h = ji().languages,
              B = l(b, h);
            return Xa(B, ...f);
          }
          function g(b) {
            const f = ji().languages,
              h = [...f.map((B) => B.strLanguage), Li(f[0].strLanguage)];
            for (const B of h) {
              if (!B) continue;
              const z = e.get(B);
              if (z && z.has(b)) return !0;
            }
            return !1;
          }
          return {
            Localize(b, ...f) {
              return u(b, ...f);
            },
            LocalizeReact(b, ...f) {
              const h = this.Localize(b);
              if (h === b) return h;
              const B = [],
                z = /(.*?)%(\d+)\$s/g;
              let S = 0,
                A;
              for (; (A = z.exec(h));) {
                ((S += A[0].length), B.push(A[1]));
                const N = parseInt(A[2]);
                N >= 1 && N <= f.length && B.push(f[N - 1]);
              }
              return (
                B.push(h.slice(S)), F.createElement(F.Fragment, null, ...B)
              );
            },
            LocalizePlural(b, f, ...h) {
              return f === 1 || f === "1"
                ? u(b, f, ...h)
                : u(b + "_Plural", f, ...h);
            },
            GetAppTypeLocKey(b, f) {
              return Ou(b, f, g);
            },
            GetAppTypePluralLocKey(b, f) {
              switch (f) {
                case Ja:
                  return b + "_Software";
                case Ca:
                  return b + "_Video";
                default:
                  return b;
              }
            },
            LocalizeInSpecificLang(b, f, ...h) {
              const B = l(f, [b]);
              return Xa(B, ...h);
            },
            Ready() {
              return n;
            },
            IsReady() {
              return a;
            },
            HasKey: g,
          };
        }
        function ji() {
          if (!pu(vn.LANGUAGE)) throw `unknown language ${vn.LANGUAGE}`;
          return {
            languages: [
              {
                strLanguage: vn.LANGUAGE,
                strISOCode: An.get(vn.LANGUAGE),
                eSource: ku,
              },
            ],
          };
        }
        const G = {};
        ((G.arabic = () => T.e(361).then(T.t.bind(T, 361, 19))),
          (G.brazilian = () => T.e(9333).then(T.t.bind(T, 9333, 19))),
          (G.bulgarian = () => T.e(9854).then(T.t.bind(T, 9854, 19))),
          (G.czech = () => T.e(3296).then(T.t.bind(T, 3296, 19))),
          (G.danish = () => T.e(8356).then(T.t.bind(T, 8356, 19))),
          (G.dutch = () => T.e(4401).then(T.t.bind(T, 4401, 19))),
          (G.english = () => T.e(1031).then(T.t.bind(T, 1031, 19))),
          (G.finnish = () => T.e(7688).then(T.t.bind(T, 7688, 19))),
          (G.french = () => T.e(2589).then(T.t.bind(T, 2589, 19))),
          (G.german = () => T.e(1359).then(T.t.bind(T, 1359, 19))),
          (G.greek = () => T.e(4175).then(T.t.bind(T, 4175, 19))),
          (G.hungarian = () => T.e(2330).then(T.t.bind(T, 2330, 19))),
          (G.indonesian = () => T.e(1229).then(T.t.bind(T, 1229, 19))),
          (G.italian = () => T.e(2711).then(T.t.bind(T, 2711, 19))),
          (G.japanese = () => T.e(8010).then(T.t.bind(T, 8010, 19))),
          (G.koreana = () => T.e(764).then(T.t.bind(T, 764, 19))),
          (G.latam = () => T.e(684).then(T.t.bind(T, 684, 19))),
          (G.malay = () => T.e(8515).then(T.t.bind(T, 8515, 19))),
          (G.norwegian = () => T.e(5319).then(T.t.bind(T, 5319, 19))),
          (G.polish = () => T.e(2736).then(T.t.bind(T, 2736, 19))),
          (G.portuguese = () => T.e(3248).then(T.t.bind(T, 3248, 19))),
          (G.romanian = () => T.e(4122).then(T.t.bind(T, 4122, 19))),
          (G.russian = () => T.e(9998).then(T.t.bind(T, 9998, 19))),
          (G.sc_schinese = () => T.e(20).then(T.t.bind(T, 20, 19))),
          (G.schinese = () => T.e(9965).then(T.t.bind(T, 9965, 19))),
          (G.spanish = () => T.e(9431).then(T.t.bind(T, 9431, 19))),
          (G.swedish = () => T.e(7046).then(T.t.bind(T, 7046, 19))),
          (G.tchinese = () => T.e(662).then(T.t.bind(T, 662, 19))),
          (G.thai = () => T.e(1047).then(T.t.bind(T, 1047, 19))),
          (G.turkish = () => T.e(7700).then(T.t.bind(T, 7700, 19))),
          (G.ukrainian = () => T.e(3301).then(T.t.bind(T, 3301, 19))),
          (G.vietnamese = () => T.e(2378).then(T.t.bind(T, 2378, 19))));
        async function Au(r) {
          if (G[r]) return G[r]();
        }
        const Dn = Su(Au),
          yX = {
            PerYear: 31536e3,
            PerMonth: 2628e3,
            PerWeek: 604800,
            PerDay: 86400,
            PerHour: 3600,
            PerMinute: 60,
          };
        function Wu(r, e) {
          return (
            r.getFullYear() == e.getFullYear() &&
            r.getMonth() == e.getMonth() &&
            r.getDate() == e.getDate()
          );
        }
        function EX(r, e) {
          let t = new Date(r);
          return (t.setDate(t.getDate() - 1), Wu(t, e));
        }
        function wX(r, e) {
          return r.getFullYear() == e.getFullYear();
        }
        function BX(r) {
          return new Date(
            r.getFullYear(),
            r.getMonth(),
            r.getDate(),
            r.getHours(),
            0,
            0,
            0,
          );
        }
        function TX(r) {
          return new Date(
            r.getFullYear(),
            r.getMonth(),
            r.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function vX(r) {
          return new Date(r.getFullYear(), r.getMonth(), 1, 0, 0, 0, 0);
        }
        function FX(r) {
          return new Promise((e) => setTimeout(e, r));
        }
        function zX() {
          return Math.floor(Date.now() / 1e3);
        }
        function RX(r) {
          return Math.floor(r.getTime() / 1e3);
        }
        function OX(r) {
          const e = Math.round(r / 1e3),
            t = Math.floor(e % 60),
            n = Math.floor((e / 60) % 60),
            a = Math.floor(e / 3600);
          let o = !1,
            l = "";
          return (
            a > 0 && ((l += a + ":"), (o = !0)),
            (l += o && n < 10 ? "0" + n + ":" : n + ":"),
            (l += t < 10 ? "0" + t : t),
            l
          );
        }
        const Lu = 2147483647;
        var ju = ((r) => (
          (r[(r.None = 0)] = "None"),
          (r[(r.Ago = 1)] = "Ago"),
          (r[(r.Remaining = 2)] = "Remaining"),
          r
        ))(ju || {});
        function SX(r, e) {
          const t = Date.now() / 1e3 - r;
          return xu(t, e);
        }
        function xu(r, e, t) {
          let n;
          typeof e == "boolean"
            ? (n = {
                eSuffix: e ? 0 : 1,
                bForceSingleUnits: t,
                bHighGranularity: !1,
              })
            : (n = {
                eSuffix: 1,
                bForceSingleUnits: !1,
                bHighGranularity: !1,
                ...e,
              });
          let a = "#TimeInterval_";
          n.eSuffix == 1
            ? (a = "#TimeSince_")
            : n.eSuffix == 2 && (a = "#TimeRemaining_");
          let o = (l) => Math.floor(l);
          if (
            (n.bAllowDecimal && (o = (l) => Math.round(l * 10) / 10),
            r >= Seconds.PerYear * 2)
          )
            return Localize(a + "XYears", o(r / Seconds.PerYear));
          if (r >= Seconds.PerYear)
            return (
              (r -= Seconds.PerYear),
              r >= Seconds.PerMonth * 2 && !n.bForceSingleUnits
                ? Localize(a + "1YearXMonths", o(r / Seconds.PerMonth))
                : Localize(a + "1Year")
            );
          if (r >= Seconds.PerMonth * 2)
            return Localize(a + "XMonths", o(r / Seconds.PerMonth));
          if (r >= Seconds.PerWeek * 2)
            return Localize(a + "XWeeks", o(r / Seconds.PerWeek));
          if (r >= Seconds.PerWeek)
            return Localize(a + "1Week", o(r / Seconds.PerWeek));
          if (r >= Seconds.PerDay * 2)
            return Localize(a + "XDays", o(r / Seconds.PerDay));
          if (r >= Seconds.PerDay)
            return (
              (r -= Seconds.PerDay),
              r >= Seconds.PerHour * 2 && !n.bForceSingleUnits
                ? Localize(a + "1DayXHours", o(r / Seconds.PerHour))
                : Localize(a + "1Day")
            );
          if (r >= Seconds.PerHour * 2)
            return Localize(a + "XHours", o(r / Seconds.PerHour));
          if (r >= Seconds.PerHour)
            return (
              (r -= Seconds.PerHour),
              r >= Seconds.PerMinute * 2 && !n.bForceSingleUnits
                ? Localize(a + "1HourXMinutes", o(r / Seconds.PerMinute))
                : Localize(a + "1Hour")
            );
          if (r >= Seconds.PerMinute * 2) {
            const l = Math.floor(r / Seconds.PerMinute),
              u = r % Seconds.PerMinute;
            return !n.bHighGranularity || u == 0
              ? Localize(a + "XMinutes", o(r / Seconds.PerMinute))
              : u == 1
                ? Localize(a + "XMinutes1Second", l)
                : Localize(a + "XMinutesXSeconds", l, u);
          } else if (r >= Seconds.PerMinute) {
            const l = r % Seconds.PerMinute;
            return !n.bHighGranularity || l == 0
              ? Localize(a + "1Minute")
              : l == 1
                ? Localize(a + "1Minute1Second")
                : Localize(a + "1MinuteXSeconds", l);
          } else
            return n.bHighGranularity
              ? r == 1
                ? Localize(a + "1Second")
                : Localize(a + "XSeconds", r)
              : Localize(a + "LessThanAMinute");
        }
        function Uu(r, e, t) {
          let n;
          e === void 0 || e === !0 || e === !1
            ? (n = {
                weekday: t ? "long" : "short",
                year: e ? void 0 : "numeric",
              })
            : (n = e);
          let a = new Date(r * 1e3);
          const o = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...n,
          };
          return a.toLocaleDateString(
            LocalizationManager.GetPreferredLocales(),
            o,
          );
        }
        function AX(r, e, t = !1) {
          let n = new Date(r * 1e3),
            a = new Date(e * 1e3);
          return !t &&
            (n.getFullYear() != a.getFullYear() ||
              n.getMonth() != a.getMonth() ||
              n.getDate() != a.getDate())
            ? Pu(r, e)
            : Wn(r) + " - " + Wn(e);
        }
        function Pu(r, e, t) {
          let n = new Date(r * 1e3),
            a = new Date(e * 1e3);
          const o = new Date();
          if (
            n.getFullYear() != a.getFullYear() ||
            o.getFullYear() != n.getFullYear() ||
            t
          )
            return `${xi(r)} - ${xi(e)}`;
          const l = { month: "short", day: "numeric" },
            u =
              n.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                l,
              ) + " - ";
          if (n.getMonth() == a.getMonth()) {
            const g = { day: "numeric" };
            return (
              u +
              a.toLocaleDateString(LocalizationManager.GetPreferredLocales(), g)
            );
          } else
            return (
              u +
              a.toLocaleDateString(LocalizationManager.GetPreferredLocales(), l)
            );
        }
        function xi(r, e) {
          let t = new Date(r * 1e3);
          const n = { year: "numeric", month: "short", day: "numeric", ...e };
          return t.toLocaleDateString(
            LocalizationManager.GetPreferredLocales(),
            n,
          );
        }
        function WX(r) {
          let e = new Date(r * 1e3);
          return Hs(e);
        }
        function LX(r) {
          let e = new Date(r * 1e3);
          return oo(e);
        }
        const qa = new Map();
        function Nu(r) {
          let e = qa.get(r);
          if (e === !0 || e === !1) return e;
          const t = new Date();
          t.setHours(15);
          const n = t.toLocaleTimeString(r, { hour: "numeric" }),
            a = t.toLocaleTimeString(r, { hour: "numeric", hour12: !1 });
          return ((e = n == a), qa.set(r, e), e);
        }
        function Wn(r, e, t) {
          const n = new Date(r * 1e3),
            a = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            o = { hour: "numeric", minute: "2-digit" },
            l = LocalizationManager.GetPreferredLocales(),
            g = { ...(e?.bForce24HourClock || Nu(l[0]) ? a : o), ...t };
          return n.toLocaleTimeString(l, g);
        }
        const eo = new Map();
        function jX(r, e, t = !0, n = !0, a = !1) {
          const o = new Date(),
            l = new Date(r * 1e3);
          if (l.getFullYear() != o.getFullYear()) return xi(r);
          n && MobxUtils.now(new Date().setHours(24, 0, 0, 0) - o.getTime());
          const u = new Date();
          if ((u.setHours(0, 0, 0, 0), t)) {
            if (l >= u) {
              if ((u.setDate(u.getDate() + 1), l < u))
                return Localize("#Time_Today");
              if ((u.setDate(u.getDate() + 1), l < u))
                return Localize("#Time_Tomorrow");
            } else if ((u.setDate(u.getDate() - 1), l >= u))
              return Localize("#Time_Yesterday");
          }
          const g = { month: e ? "long" : "short", day: "numeric" };
          a && (g.weekday = "long");
          const b = l.setHours(0, 0, 0, 0) + g.month;
          let f = eo.get(b);
          return (
            f ||
            ((f = l.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              g,
            )),
            eo.set(b, f),
            f)
          );
        }
        function xX(r, e, t, n) {
          const a = new Date(r * 1e3);
          return (
            Gu(a, !1, !1) +
            " " +
            Wn(r, { bForce24HourClock: e }, { timeZone: n }) +
            " " +
            t
          );
        }
        function UX(r, e) {
          const t = new Date(r * 1e3),
            n = new Date(),
            a = {
              bGranularFutureTime: !1,
              bGranularTodayTimeOnly: !1,
              bGranularToday: !1,
              bGranularYesterday: !1,
              bGranularWeek: !1,
              bGranularPast: !1,
              bAbbreviateDayOfWeek: !1,
              bForce24HourClock: !1,
              ...e,
            };
          if (t > n) {
            if (!a.bGranularFutureTime)
              return (
                MobxUtils.now(Math.min(t.getTime() - n.getTime(), Lu)),
                t.getFullYear() == n.getFullYear() ? Ui(t) : Hs(t)
              );
            MobxUtils.now(new Date().setHours(24, 0, 0, 0) - n.getTime());
            let u = new Date();
            return (
              u.setHours(0, 0, 0, 0),
              u.setDate(u.getDate() + 1),
              t < u
                ? Localize("#Time_Today")
                : (u.setDate(u.getDate() + 1),
                  t < u
                    ? Localize("#Time_Tomorrow")
                    : (u.setDate(u.getDate() + 5),
                      t < u ? Du(t) : ao(t, !0, a.bAbbreviateDayOfWeek)))
            );
          }
          MobxUtils.now(new Date().setHours(24, 0, 0, 0) - n.getTime());
          let o = new Date();
          if ((o.setHours(0, 0, 0, 0), t >= o))
            return a.bGranularToday
              ? a.bGranularTodayTimeOnly
                ? Wn(r, { bForce24HourClock: a.bForce24HourClock })
                : Localize(
                    "#Time_Today_At",
                    Wn(r, { bForce24HourClock: a.bForce24HourClock }),
                  )
              : Localize("#Time_Today");
          if ((o.setDate(n.getDate() - 1), t >= o))
            return a.bGranularYesterday
              ? Localize(
                  "#Time_Yesterday_At",
                  Wn(r, { bForce24HourClock: a.bForce24HourClock }),
                )
              : Localize("#Time_Yesterday");
          o.setDate(n.getDate() - 6);
          const l = new Date(o);
          if (a.bGranularWeek && t >= l)
            return ao(t, !1, !a.bAbbreviateDayOfWeek);
          if (a.bGranularPast)
            return Localize(
              "#Time_Past_At",
              Uu(
                r,
                t.getFullYear() == n.getFullYear(),
                !a.bAbbreviateDayOfWeek,
              ),
              Wn(r, { bForce24HourClock: a.bForce24HourClock }),
            );
          if (t >= l) return Localize("#TimeSince_ThisWeek");
          if (
            t.getMonth() == n.getMonth() &&
            t.getFullYear() == n.getFullYear()
          ) {
            const u =
              Math.floor(
                (l.valueOf() - t.valueOf()) / (Seconds.PerWeek * 1e3),
              ) + 1;
            return u == 1
              ? Localize("#TimeSince_1Week")
              : Localize("#TimeSince_XWeeks", u);
          }
          return t.getFullYear() == n.getFullYear() ? Ui(t) : Hs(t);
        }
        function PX(r) {
          const e = new Date(r * 1e3),
            t = new Date();
          MobxUtils.now(new Date().setHours(24, 0, 0, 0) - t.getTime());
          let n = new Date();
          return (
            n.getDate() < 15 && n.setMonth(n.getMonth() - 1),
            (n = RoundToBeginningOfMonth(n)),
            e >= n
              ? Localize("#Time_Recent")
              : e.getFullYear() == t.getFullYear()
                ? Ui(e)
                : t.getMonth() < 6 && e.getFullYear() == t.getFullYear() - 1
                  ? Hs(e)
                  : oo(e)
          );
        }
        const to = new Map(),
          ro = new Map(),
          no = new Map(),
          so = new Map(),
          Is = new Map(),
          io = new Map();
        function Gu(r, e = !1, t = !0) {
          const n = {
              weekday: t ? "long" : "short",
              day: "numeric",
              month: e ? "long" : "short",
              year: "numeric",
            },
            a = r.setHours(0, 0, 0, 0) + n.weekday + n.month;
          let o = Is.get(a);
          return (
            o ||
            ((o = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              n,
            )),
            Is.set(a, o),
            o)
          );
        }
        function ao(r, e = !1, t = !0) {
          const n = {
              weekday: t ? "long" : "short",
              day: "numeric",
              month: e ? "long" : "short",
            },
            a = r.setHours(0, 0, 0, 0) + n.weekday + n.month;
          let o = Is.get(a);
          return (
            o ||
            ((o = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              n,
            )),
            Is.set(a, o),
            o)
          );
        }
        function Du(r) {
          let e = to.get(r.getDay());
          return (
            e ||
            ((e = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              { weekday: "long" },
            )),
            to.set(r.getDay(), e),
            e)
          );
        }
        function Ui(r) {
          let e = ro.get(r.getMonth());
          return (
            e ||
            ((e = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              { month: "long" },
            )),
            ro.set(r.getMonth(), e),
            e)
          );
        }
        function NX(r) {
          let e = io.get(r.getMonth());
          return (
            e ||
            ((e = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              { month: "short" },
            )),
            io.set(r.getMonth(), e),
            e)
          );
        }
        function oo(r) {
          let e = no.get(r.getFullYear());
          return (
            e ||
            ((e = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              { year: "numeric" },
            )),
            no.set(r.getFullYear(), e),
            e)
          );
        }
        function Hs(r) {
          const e = r.getMonth() + 12 * r.getFullYear();
          let t = so.get(e);
          return (
            t ||
            ((t = r.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              { month: "long", year: "numeric" },
            )),
            so.set(e, t),
            t)
          );
        }
        function GX(r, e) {
          switch (r.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return Localize(
                e
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                r.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return Localize(
                e
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                r.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return Localize(
                e
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                r.getUTCFullYear(),
              );
            default:
              return Localize(
                e
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                r.getUTCFullYear(),
              );
          }
        }
        function DX(r) {
          const e = Math.floor(r / Seconds.PerYear),
            t = Math.floor(r / Seconds.PerMonth),
            n = Math.floor((r % Seconds.PerMonth) / Seconds.PerDay),
            a = Math.floor((r % Seconds.PerDay) / Seconds.PerHour),
            o = Math.floor((r % Seconds.PerHour) / Seconds.PerMinute);
          return (
            (r = r % Seconds.PerMinute),
            e > 0
              ? Localize("#TimeRemaining_MoreThanOneYear")
              : t > 0
                ? Localize("#TimeRemaining_MonthsDays", t, n)
                : n > 0
                  ? Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      n,
                      a.toString().padStart(2, "0"),
                      o.toString().padStart(2, "0"),
                    )
                  : a > 0
                    ? Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        a.toString().padStart(2, "0"),
                        o.toString().padStart(2, "0"),
                        r.toString().padStart(2, "0"),
                      )
                    : Localize(
                        "#TimeRemaining_MinutesSeconds",
                        o.toString().padStart(2, "0"),
                        r.toString().padStart(2, "0"),
                      )
          );
        }
        function hs(r, e, t) {
          for (; r.length < e;) r = t + r;
          return r;
        }
        function Pi(r) {
          return (
            (r === void 0 || isNaN(r)) && (r = 0),
            {
              hours: Math.floor(r / 3600),
              minutes: Math.floor((r % 3600) / 60),
              seconds: Math.floor(r % 60),
              fraction: r - Math.floor(r),
            }
          );
        }
        function VX(r, e, t) {
          let n = r < 0;
          r = n ? 0 - r : r;
          const a = Pi(r),
            o = a.fraction.toFixed(2).split(".")[1],
            l = e ?? !0;
          let u = !l || o == "00";
          n &&
            a.hours == 0 &&
            a.minutes == 0 &&
            a.seconds == 0 &&
            u &&
            (n = !1);
          let g = "";
          if (a.hours) {
            const b = a.hours.toString(),
              f = hs(a.minutes.toString(), 2, "0"),
              h = hs(a.seconds.toString(), 2, "0"),
              B = l
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            g = Localize(B, b, f, h, o);
          } else if (a.minutes) {
            const b = a.minutes.toString(),
              f = hs(a.seconds.toString(), 2, "0"),
              h = l
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            g = Localize(h, b, f, o);
          } else if (a.seconds) {
            const b = a.seconds.toString(),
              f = l
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            g = Localize(f, b, o);
          }
          return (
            n &&
              (t
                ? (g = Localize("#Duration_WrittenNegation", g))
                : (g = "-" + g)),
            g
          );
        }
        function IX(r, e, t) {
          let n = r < 0;
          r = n ? 0 - r : r;
          const a = Pi(r),
            o = hs(a.seconds.toString(), 2, "0"),
            l = a.fraction.toFixed(2).split(".")[1],
            u = e ?? !0;
          let g = !u || l == "00";
          n &&
            a.hours == 0 &&
            a.minutes == 0 &&
            a.seconds == 0 &&
            g &&
            (n = !1);
          let b = "";
          if (a.hours) {
            const f = hs(a.minutes.toString(), 2, "0"),
              h = u
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            b = Localize(h, a.hours, f, o, l);
          } else {
            const f = a.minutes.toString(),
              h = u
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            b = SharedLocalization.Localize(h, f, o, l);
          }
          return (
            n &&
              (t
                ? (b = SharedLocalization.Localize(
                    "#Duration_WrittenNegation",
                    b,
                  ))
                : (b = "-" + b)),
            b
          );
        }
        function HX(r) {
          const e = Pi(r),
            t = e.hours * 60 + e.minutes,
            n = e.hours,
            a = Math.floor(e.hours / 24),
            o = Math.floor(a / 30);
          return o > 1
            ? Localize("#ReadableDuration_Months", o)
            : o === 1
              ? Localize("#ReadableDuration_OneMonth", a)
              : a > 1
                ? Localize("#ReadableDuration_Days", a)
                : n > 2
                  ? Localize("#ReadableDuration_Hours", n)
                  : t > 2
                    ? Localize("#ReadableDuration_Minutes", t)
                    : t > 1
                      ? Localize("#ReadableDuration_OneMinute")
                      : Localize("#ReadableDuration_LessThanOneMinute");
        }
        class Ms {
          m_mapTokens = new Map();
          m_mapFallbackTokens = new Map();
          m_cbkTokensChanged = new Gn();
          m_rgLocalesToUse;
          m_bReportIndividualMissingTokens = !0;
          m_bReady = !1;
          static GetLanguageFallback(e) {
            return e === "sc_schinese" ? "schinese" : "english";
          }
          static GetELanguageFallback(e) {
            return e === fs ? Un : on;
          }
          static IsELanguageValidInRealm(e, t) {
            const n = e === fs ? Wi.k_ESteamRealmChina : Wi.k_ESteamRealmGlobal;
            return t === n;
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = on; n < wa; n++)
              for (const a of e)
                if (this.IsELanguageValidInRealm(n, a)) {
                  t.push(n);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, n, a) {
            (a && (this.m_bReportIndividualMissingTokens = !1),
              n || this.m_mapTokens.clear(),
              this.AddTokens(e, t || {}),
              this.m_cbkTokensChanged.Dispatch());
          }
          InitDirect(e, t) {
            (this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t),
              this.m_cbkTokensChanged.Dispatch());
          }
          SetReady(e) {
            this.m_bReady = e;
          }
          AddTokens(e, t) {
            (Object.keys(e).forEach((n) => {
              this.m_mapTokens.set(n, e[n]);
            }),
              t &&
                Object.keys(t).forEach((n) => {
                  (this.m_mapTokens.has(n) || this.m_mapTokens.set(n, t[n]),
                    this.m_mapFallbackTokens.set(n, t[n]));
                }));
          }
          GetTokensChangedCallbackList() {
            return this.m_cbkTokensChanged;
          }
          GetPreferredLocales() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
                ? navigator.languages
                : ["en-US"];
          }
          GetELanguageFallbackOrder(e = null) {
            let t = new Array();
            return (
              t.push(xs(qr.LANGUAGE)),
              (qr.SUPPORTED_LANGUAGES || []).forEach((a) => {
                a.value != qr.LANGUAGE && t.push(xs(a.value));
              }),
              e &&
                Ms.GetLanguageListForRealms(e).forEach((o) => {
                  t.indexOf(o) == -1 && t.push(o);
                }),
              t
            );
          }
          SetPreferredLocales(e) {
            this.m_rgLocalesToUse = e;
          }
          BLooksLikeToken(e) {
            return !!e && e.length > 0 && e.charAt(0) == "#";
          }
          LocalizeIfToken(e, t) {
            return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
          }
          LocalizeString(e, t) {
            if (!this.BLooksLikeToken(e)) return;
            let n = this.m_mapTokens.get(e.substring(1));
            if (n === void 0) {
              if (Dn.HasKey(e)) return Dn.Localize(e);
              this.m_mapTokens.size === 0
                ? Dr(
                    !1,
                    `Attempting to localize token '${e}' with no tokens in our map for language '${qr.LANGUAGE}'. SharedLoc ready: ${Dn.IsReady()}. site has inited: ${this.m_bReady}`,
                  )
                : !t &&
                  this.m_bReportIndividualMissingTokens &&
                  Pn().ReportError(
                    new Error(
                      `Unable to find localization token '${e}' for language '${qr.LANGUAGE}', ${this.m_mapTokens.size} tokens in map. SharedLoc ready: ${Dn.IsReady()}. site has inited: ${this.m_bReady}`,
                    ),
                    { bIncludeMessageInIdentifier: !0 },
                  );
              return;
            }
            return n;
          }
          LocalizeStringFromFallback(e) {
            if (!e || e.length == 0 || e.charAt(0) != "#") return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            if (t !== void 0) return t;
          }
          static GetTokenWithFallback(e) {
            if (!e) return "";
            const t = xs(qr.LANGUAGE),
              n = e.find((l) => l.language == t);
            if (n) return n.localized_string;
            const a = Ms.GetELanguageFallback(t);
            return e.find((l) => l.language == a)?.localized_string ?? "";
          }
          static BHasTokenLanguage(e, t) {
            return !!t.find((n) => n.language == e);
          }
        }
        function KX(r) {
          return tn.LocalizeString(r, !0) != null;
        }
        function YX(r, ...e) {
          let t = tn.LocalizeString(r, !0);
          return t === void 0 ? r : Gi(t, ...e);
        }
        function v(r, ...e) {
          let t = tn.LocalizeString(r);
          return t === void 0 ? r : Gi(t, ...e);
        }
        function Vn(r, ...e) {
          let t = tn.LocalizeString(r);
          if (t === void 0) return r;
          let n = [],
            a = /(.*?)%(\d+)\$s/g,
            o = 0,
            l;
          for (; (l = a.exec(t));) {
            ((o += l[0].length), n.push(l[1]));
            let u = parseInt(l[2]);
            u >= 1 && u <= e.length && n.push(e[u - 1]);
          }
          return (n.push(t.substr(o)), F.createElement(F.Fragment, null, ...n));
        }
        function $X(r, e, ...t) {
          return e === 1 || e === "1"
            ? Vn(r, e, ...t)
            : Vn(
                r + "_Plural",
                e.toLocaleString(tn.GetPreferredLocales()),
                ...t,
              );
        }
        function _X(r, ...e) {
          let t = tn.LocalizeIfToken(r);
          return t === void 0 ? r : Ni(t, ...e);
        }
        function XX(r, e, ...t) {
          let n;
          return (
            e === 1 || e === "1" ? (n = v(r, e)) : (n = v(r + "_Plural", e)),
            n === void 0 ? r : Ni(n, ...t)
          );
        }
        function Ni(r, ...e) {
          let t = [],
            n = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
            a = 0,
            o;
          for (; (o = n.exec(r));) {
            ((a += o[0].length), t.push(o[1]));
            let l = parseInt(o[2]),
              u = o[3] || "",
              g = Ni(u, ...e),
              f = (l >= 1 && l <= e.length ? e[l - 1] : null)
                ? React.cloneElement(e[l - 1], {}, u ? g : null)
                : u;
            t.push(f);
          }
          return (
            t.push(r.substr(a)), React.createElement(React.Fragment, null, ...t)
          );
        }
        function QX(r, e, ...t) {
          return e === 1 || e === "1"
            ? v(r, e, ...t)
            : v(r + "_Plural", e, ...t);
        }
        function JX(r, e, ...t) {
          return e === 1 ? v(r, ...t) : v(r + "_Plural", ...t);
        }
        function CX(r, ...e) {
          let t = tn.LocalizeStringFromFallback(r);
          return t === void 0 ? r : Gi(t, ...e);
        }
        function Gi(r, ...e) {
          return (
            e.length == 0 ||
              (r = r.replace(/%(?:(\d+)\$)?s/g, function (t, n) {
                if (n <= e.length && n >= 1) {
                  let a = e[n - 1];
                  return String(a ?? "");
                }
                return t;
              })),
            r
          );
        }
        class Di {
          static Set(e, t, n) {
            if (
              (e || (e = PadArray([], k_ELanguage_MAX, null)), e.length <= t)
            ) {
              if (t >= k_ELanguage_MAX) return e;
              e = PadArray(e, t + 1, null);
            }
            return ((e[t] = n), e);
          }
          static Get(e, t) {
            return (e && e.length > t && e[t]) || "";
          }
          static GetWithFallback(e, t) {
            return e
              ? Di.Get(e, t) || Di.Get(e, Ms.GetELanguageFallback(t))
              : null;
          }
          static BHas(e, t) {
            return !!(e && e.length > t && e[t]);
          }
        }
        const ZX = {
            english: "English",
            german: "Deutsch",
            french: "Fran\xE7ais",
            italian: "Italiano",
            korean: "\uD55C\uAD6D\uC5B4",
            spanish: "Espa\xF1ol \u2014 Espa\xF1a",
            schinese: "\u7B80\u4F53\u4E2D\u6587",
            tchinese: "\u7E41\u9AD4\u4E2D\u6587",
            russian: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
            thai: "\u0E44\u0E17\u0E22",
            japanese: "\u65E5\u672C\u8A9E",
            portuguese: "Portugu\xEAs",
            polish: "Polski",
            danish: "Dansk",
            dutch: "Nederlands",
            finnish: "Suomi",
            norwegian: "Norsk",
            swedish: "Svenska",
            hungarian: "Magyar",
            czech: "\u010Ce\u0161tina",
            romanian: "Rom\xE2n\u0103",
            turkish: "T\xFCrk\xE7e",
            arabic: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
            brazilian: "Portugu\xEAs\xA0\u2014\xA0Brasil",
            bulgarian: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
            greek: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
            ukrainian:
              "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
            latam: "Espa\xF1ol\xA0\u2014\xA0Latinoam\xE9rica",
            vietnamese: "Ti\u1EBFng Vi\u1EC7t",
            koreana: "\uD55C\uAD6D\uC5B4",
            indonesian: "Bahasa Indonesia",
            malay: "Bahasa Melayu",
          },
          co = {
            english: "en",
            german: "de",
            french: "fr",
            italian: "it",
            korean: "ko",
            latam: "es-419",
            spanish: "es",
            schinese: "zh-cn",
            tchinese: "zh-tw",
            russian: "ru",
            thai: "th",
            japanese: "ja",
            brazilian: "pt-br",
            portuguese: "pt",
            polish: "pl",
            danish: "da",
            dutch: "nl",
            finnish: "fi",
            norwegian: "no",
            swedish: "sv",
            hungarian: "hu",
            czech: "cs",
            romanian: "ro",
            turkish: "tr",
            arabic: "ar",
            bulgarian: "bg",
            greek: "el",
            ukrainian: "uk",
            vietnamese: "vi",
            indonesian: "id",
            malay: "ms",
            sc_schinese: "zh-cn",
            koreana: "ko",
          },
          qX = {
            en: on,
            "en-US": on,
            de: Hn,
            "de-DE": Hn,
            fr: Kn,
            "fr-FR": Kn,
            it: Yn,
            "it-IT": Yn,
            ko: $n,
            "ko-KR": $n,
            es: _n,
            "es-ES": _n,
            "zh-cn": Un,
            "zh-CN": Un,
            "zh-tw": Xn,
            "zh-TW": Xn,
            ru: Qn,
            "ru-RU": Qn,
            th: Jn,
            "th-TH": Jn,
            ja: Cn,
            "ja-JP": Cn,
            pt: Zn,
            "pt-PT": Zn,
            pl: qn,
            "pl-PL": qn,
            da: es,
            "da-DK": es,
            nl: ts,
            "nl-NL": ts,
            fi: rs,
            "fi-FI": rs,
            nb: ns,
            "nb-NO": ns,
            sv: ss,
            "sv-SE": ss,
            hu: is,
            "hu-HU": is,
            cs: as,
            "cs-CZ": as,
            ro: os,
            "ro-RO": os,
            tr: cs,
            "tr-TR": cs,
            "pt-BR": Ls,
            bg: ls,
            "bg-BG": ls,
            el: us,
            "el-GR": us,
            ar: ds,
            "ar-SA": ds,
            uk: ms,
            "uk-UA": ms,
            "es-419": js,
            vi: gs,
            "vi-VN": gs,
            id: Sn,
            "id-ID": Sn,
            ms: Sn,
            "ms-MY": Sn,
          };
        function eQ() {
          return co[Config.LANGUAGE] || null;
        }
        function tQ(r) {
          return co[r];
        }
        async function rQ(r, e) {
          let t = await r;
          if (
            (t?.default && Object.keys(t).length === 1 && (t = t.default),
            !t || Object.keys(t).length === 0)
          )
            throw new Error(`Empty localization file for ${e}`);
          return t;
        }
        function nQ(r) {
          let e,
            t = new Promise((o) => (e = o)),
            n = Array(r.length),
            a = r.length;
          return (
            r.forEach((o, l) => {
              Promise.resolve(o)
                .then((u) => {
                  ((n[l] = u), a--, a == 0 && e(n));
                })
                .catch((u) => {
                  (console.error("Failed to load localization file: " + u),
                    (n[l] = {}),
                    a--,
                    a == 0 && e(n));
                });
            }),
            t
          );
        }
        function sQ(r = !1) {
          const e = new Map();
          for (let t = k_ELanguage_English; t < k_ELanguage_MAX; ++t) {
            if (
              t == k_ELanguage_Arabic ||
              (t == k_ELanguage_SteamChina_SChinese && !r)
            )
              continue;
            const n = ELanguagePchLanguage(t);
            e.set(n, v("#Language_" + n));
          }
          return e;
        }
        function iQ(r) {
          return (
            typeof r == "number" && (r = ELanguagePchLanguage(r)),
            r === "none" ? "None" : v(`#language_selection_${r}`)
          );
        }
        function aQ(r, e) {
          const t = [];
          return (
            r.forEach((n, a, o) => {
              const l = e(n, a, o);
              t.push(l);
            }),
            t
          );
        }
        const tn = new Ms();
        window.LocalizationManager = tn;
        var Vu = T(2630),
          Iu = T(3741),
          Hu = Object.defineProperty,
          Ku = Object.getOwnPropertyDescriptor,
          Yu = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Ku(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && Hu(e, t, a), a);
          };
        let Vi = class extends F.Component {
          render() {
            return P.activeModal;
          }
        };
        Vi = Yu([Xr.PA], Vi);
        function oQ(r) {
          let e = (t) => {
            t.target === t.currentTarget &&
              (r.onCancel && r.onCancel(), r.closeModal());
          };
          return jsx("div", {
            className: "modal_background",
            onClick: e,
            children: jsx("div", {
              className:
                "PopupGeneric PopupVisible " +
                (r.className != null ? " " + r.className : ""),
              children: r.children,
            }),
          });
        }
        function $u(r, ...e) {
          return v(r, ...e)
            .split("<br>")
            .map((t, n) =>
              (0, m.jsxs)("span", { children: [t, (0, m.jsx)("br", {})] }, n),
            );
        }
        function lo(r) {
          let e = (u) => {
              u.target === u.currentTarget &&
                (r.onCancel && r.onCancel(), r.closeModal && r.closeModal());
            },
            t = (u) => {
              let g = !0;
              (u.onOk && (g = u.onOk()), g && u.closeModal && u.closeModal());
            },
            n = (u) => {
              let g = !0;
              (u.onCancel && (g = u.onCancel()),
                g && u.closeModal && u.closeModal());
            },
            a = v("#Button_OK");
          r.strOkButtonText && (a = r.strOkButtonText);
          let o = v("#Button_Cancel");
          r.strCancelButtonText && (o = r.strCancelButtonText);
          const l = F.useRef(null);
          return (0, m.jsx)(Vu.A, {
            children: (0, m.jsx)(
              Iu.A,
              {
                nodeRef: l,
                classNames: "modal-anim",
                timeout: 500,
                appear: !0,
                children: (0, m.jsx)("div", {
                  ref: l,
                  className: "modal_background",
                  onClick: e,
                  children: (0, m.jsxs)("div", {
                    className:
                      "PopupGeneric PopupVisible" +
                      (r.className != null ? " " + r.className : ""),
                    children: [
                      (0, m.jsx)("div", {
                        className: "PopupGenericBackground",
                      }),
                      (0, m.jsxs)("div", {
                        className: "PopupGenericContainer",
                        children: [
                          r.strTitle &&
                            (0, m.jsx)("div", {
                              className: "modal_title",
                              children: (0, m.jsx)("div", {
                                className: "PopupGenericTitle",
                                children: r.strTitle,
                              }),
                            }),
                          (0, m.jsxs)("div", {
                            className: "model_content",
                            children: [
                              r.strMessage &&
                                (0, m.jsx)("div", {
                                  className: "PopupGenericBodyText",
                                  children: $u(r.strMessage),
                                }),
                              (0, m.jsx)("div", {
                                className: "PopupGenericChildren",
                                children: r.children,
                              }),
                              (0, m.jsxs)("div", {
                                className: "GenericButtonGroup",
                                children: [
                                  (r.bShowOK || r.bShowOK == null) &&
                                    (0, m.jsx)("button", {
                                      className: "GenericButton",
                                      onClick: () => {
                                        t(r);
                                      },
                                      children: a,
                                    }),
                                  r.optionalButtons,
                                  (r.bShowCancel || r.bShowCancel == null) &&
                                    (0, m.jsx)("button", {
                                      className: "GenericButton",
                                      onClick: () => {
                                        n(r);
                                      },
                                      children: o,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              },
              0,
            ),
          });
        }
        class uo extends F.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return (0, m.jsx)(lo, {
              closeModal: this.props.closeModal,
              strTitle: this.props.strTitle,
              className: "GenericDialog",
              bShowCancel: this.props.bShowCancel,
              onOk: this.props.onOk,
              children: (0, m.jsx)("div", {
                className: "GenericDialogContainer",
                children: (0, m.jsx)("div", {
                  className: "PopupGenericBodyText",
                  children: this.props.strBodyText,
                }),
              }),
            });
          }
        }
        async function mo(r) {
          try {
            bc();
            const [e] = await Promise.all([
                T(2857)(`./siteserverui_${r}.json`),
                Dn.Ready(),
              ]),
              t = { ...e.default };
            if (r !== "english") {
              const a = {
                ...(await T.e(2895).then(T.t.bind(T, 2895, 19))).default,
              };
              tn.InitFromObjects(t, a);
            } else tn.InitFromObjects(t, null);
          } catch {
            console.log(
              "InitLocalization Error: Failed to load loc files for",
              r,
            );
            const [t] = await Promise.all([
                T.e(2895).then(T.t.bind(T, 2895, 19)),
                Dn.Ready(),
              ]),
              n = { ...t.default };
            tn.InitFromObjects(n, null);
          }
        }
        function go(r = !1) {
          ({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
            .ELECTRON_BUILD && P.SetShutdown();
          const e = te.Init(et);
          return (e.Body().set_restart(r), $r.Quit(e));
        }
        function Ii(r = null) {
          let e = (0, m.jsx)(uo, {
            strTitle: v("#Status_Error"),
            strBodyText: r,
            bShowCancel: !1,
          });
          P.ShowModal(e);
        }
        class Ln extends F.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return (0, m.jsx)("div", {
              className: "tooltip tooltip-icon",
              children: (0, m.jsx)("div", {
                className: "tooltip-container",
                children: (0, m.jsx)("span", {
                  className: "tooltiptext",
                  children: this.props.strText,
                }),
              }),
            });
          }
        }
        var _u = Object.defineProperty,
          Xu = Object.getOwnPropertyDescriptor,
          ps = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Xu(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && _u(e, t, a), a);
          };
        let Hi = class extends F.Component {
          constructor(r) {
            super(r);
          }
          render() {
            return (0, m.jsx)("div", {
              className: "MainWindowTitleBar TitleBar",
              children: (0, m.jsxs)("div", {
                className: "MainNavContainer",
                children: [
                  (0, m.jsx)("div", { className: "SteamLogoMainNav" }),
                  (0, m.jsxs)("div", {
                    children: [
                      (0, m.jsx)("div", {
                        className: "TitleBarTitle",
                        children: v("#Title"),
                      }),
                      (0, m.jsx)(Ks, {}),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        Hi = ps([Xr.PA], Hi);
        let ks = class extends F.Component {
          constructor(r) {
            super(r);
          }
          render() {
            return (0, m.jsx)("div", {
              className: "MainWindowTitleBar TitleBar",
              children: (0, m.jsxs)("div", {
                className: "MainNavContainer",
                children: [
                  (0, m.jsx)("div", { className: "SteamLogoMainNav" }),
                  (0, m.jsx)("div", {
                    children: (0, m.jsx)("div", {
                      className: "TitleBarTitle",
                      children: v("#Title"),
                    }),
                  }),
                ],
              }),
            });
          }
        };
        ks = ps([Xr.PA], ks);
        class Ks extends F.Component {
          async Language() {
            P.SetView(Oi);
          }
          async Cache() {
            P.SetView(Na);
          }
          OnChangeAccount() {
            let e = F.createElement(
              uo,
              {
                strTitle: v("#Logout_Logout"),
                strBodyText: v("#Logout_Prompt_ChangeUser"),
                onOk: () => this.Logout(),
              },
              null,
            );
            P.ShowModal(e);
          }
          Logout() {
            return (j.StartLogout(), !0);
          }
          render() {
            return (0, m.jsxs)("div", {
              className: "MainWindowTitleBarButton",
              children: [
                v("#Menu_Header_Settings"),
                (0, m.jsx)("div", {
                  className: "MainNavPopout",
                  children: (0, m.jsxs)("div", {
                    className:
                      "TopNavSettingsPopoutContents TopNavPopoutContents",
                    children: [
                      (0, m.jsx)("a", {
                        className: "SteamFeatureNavItem",
                        href: "#",
                        onClick: this.Language,
                        children: v("#Menu_Language"),
                      }),
                      (0, m.jsx)("a", {
                        className: "SteamFeatureNavItem",
                        href: "#",
                        onClick: this.Cache,
                        children: v("#Menu_Cache"),
                      }),
                      (0, m.jsx)("a", {
                        className: "SteamFeatureNavItem",
                        href: "#",
                        onClick: this.OnChangeAccount,
                        children: v("#Menu_ChangeAccount"),
                      }),
                    ],
                  }),
                }),
              ],
            });
          }
        }
        (ps([R], Ks.prototype, "Language", 1),
          ps([R], Ks.prototype, "Cache", 1),
          ps([R], Ks.prototype, "OnChangeAccount", 1));
        var Qu = Object.defineProperty,
          Ju = Object.getOwnPropertyDescriptor,
          ys = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Ju(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && Qu(e, t, a), a);
          };
        let Ki = class extends F.Component {
          constructor(r) {
            super(r);
          }
          render() {
            let r = P.connected
                ? v("#Status_Connected")
                : v("#Status_NotConnected"),
              e = P.cacheEnabled ? v("#Status_Enabled") : v("#Status_Disabled");
            return (0, m.jsxs)("div", {
              className: "Footer",
              children: [
                (0, m.jsx)(ws, {}),
                (0, m.jsxs)("div", {
                  className: "FooterConnectionStatus",
                  children: [
                    (0, m.jsx)("div", {
                      className: "FooterStatusName",
                      children: v("#Status_SteamService") + ": ",
                    }),
                    (0, m.jsx)("div", {
                      className: "FooterStatusValue",
                      children: r,
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "FooterCacheStatus",
                  children: [
                    (0, m.jsx)("div", {
                      className: "FooterStatusName",
                      children: v("#Status_ContentCache") + ": ",
                    }),
                    (0, m.jsx)("div", {
                      className: "FooterStatusValue",
                      children: e,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Ki = ys([Xr.PA], Ki);
        let Es = class extends F.Component {
          constructor(r) {
            super(r);
          }
          render() {
            let r = P.connected
              ? v("#Status_Connected")
              : v("#Status_NotConnected");
            return (0, m.jsx)("div", { className: "Footer" });
          }
        };
        Es = ys([Xr.PA], Es);
        let ws = class extends F.Component {
          m_eAcctStatusLast = Gs;
          m_bAlertDismissed = !1;
          constructor(r) {
            (super(r), (this.state = { bToggle: !1 }));
          }
          Dismiss() {
            ((this.m_bAlertDismissed = !0),
              this.setState({ bToggle: !this.state.bToggle }));
          }
          Show() {
            ((this.m_bAlertDismissed = !1),
              this.setState({ bToggle: !this.state.bToggle }));
          }
          render() {
            let r = P.acctStatus,
              e = !1;
            r != Gs
              ? r != this.m_eAcctStatusLast
                ? ((this.m_bAlertDismissed = !1), (e = !0))
                : this.m_bAlertDismissed || (e = !0)
              : (e = !this.m_bAlertDismissed);
            let t = (0, m.jsx)("a", {
                className: "link",
                href: "https://partner.steamgames.com",
                children: "partner.steamgames.com",
              }),
              n = (0, m.jsx)("a", {
                className: "link",
                href: "https://store.steampowered.com/pccafe/",
                children: "store.steampowered.com",
              }),
              a = "",
              o = !0;
            switch (P.acctStatus) {
              case Gs:
                ((a = Vn("#ForAdditionalInfo", t)), (o = !1));
                break;
              case Ql:
                a = Vn("#AcctStatus_NoLicenses", n);
                break;
              case Jl:
                a = Vn("#AcctStatus_NotAssociated", t);
                break;
              case Cl:
                a = v("#AcctStatus_LoggedInElsewhere");
                break;
            }
            this.m_eAcctStatusLast = r;
            const l = o ? "AcctAlertIcon" : "AcctInfoIcon",
              u = e ? { display: "none" } : {};
            return (0, m.jsxs)("div", {
              children: [
                (0, m.jsxs)("div", {
                  className: "AcctStatusAlert " + (e ? "slideup" : "slidedown"),
                  children: [
                    (0, m.jsx)("div", { className: l }),
                    (0, m.jsx)("div", {
                      className: "AcctStatusAlertMsg",
                      children: a,
                    }),
                    (0, m.jsx)("div", {
                      className: "TitleButtonBar",
                      children: (0, m.jsx)("div", {
                        className: "title-area-icon closeButton",
                        onClick: this.Dismiss,
                        children: (0, m.jsx)("div", {
                          className: "closeButtonContainer",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, m.jsx)("div", {
                  className: "ExpandAlertIcon",
                  style: u,
                  onClick: this.Show,
                }),
              ],
            });
          }
        };
        (ys([R], ws.prototype, "Dismiss", 1),
          ys([R], ws.prototype, "Show", 1),
          (ws = ys([Xr.PA], ws)));
        var Cu = Object.defineProperty,
          Zu = Object.getOwnPropertyDescriptor,
          Jr = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Zu(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && Cu(e, t, a), a);
          };
        function fo(r) {
          switch (r) {
            case ba:
              return v("#Login_PasswordMismatch");
            case oc:
              return v("#Login_TwoFactorMismatch");
          }
          let e = "#Steam_EResult_" + r;
          return v(e) + " (" + String(r) + ")";
        }
        class Bs extends F.PureComponent {
          constructor(e) {
            super(e);
          }
          render() {
            return (0, m.jsxs)("div", {
              className: "MainWindow",
              children: [
                (0, m.jsx)(ks, {}),
                (0, m.jsx)("div", {
                  className: "LoginWindowContentContainer",
                  children: (0, m.jsx)("div", {
                    className: "LoginWindowContent",
                    children: (0, m.jsx)("div", {
                      className: "LoginWindowContentGradient",
                      children: (0, m.jsx)("div", {
                        className: "LoginBackground",
                        children: (0, m.jsx)("div", {
                          className: "LoginContainer",
                          children: this.props.children,
                        }),
                      }),
                    }),
                  }),
                }),
                (0, m.jsx)(Es, {}),
              ],
            });
          }
        }
        let Mn = class extends F.Component {
          m_bShowErrors = !0;
          constructor(r) {
            (super(r),
              (this.state = {
                strAccountName: "",
                strPassword: "",
                strUser: "",
                bRememberPassword: !1,
              }));
          }
          componentWillMount() {
            this.setState({ strAccountName: j.accountName });
          }
          OnGetLoginUsers(r) {
            this.setState({ strUser: r });
          }
          LoginWithCachedCredentials(r) {
            (j.SetSteamGuardCode(""),
              j.SetAccountAndPassword(this.state.strAccountName, "", !0),
              j.StartLogin(),
              (this.m_bShowErrors = !0));
          }
          OnAccountNameChange(r) {
            this.setState({ strAccountName: r.target.value });
          }
          OnPasswordChange(r) {
            this.setState({ strPassword: r.target.value });
          }
          OnRememberChange(r) {
            this.setState({ bRememberPassword: r.target.checked });
          }
          LoginWithCredentials(r) {
            (r.preventDefault(),
              j.SetSteamGuardCode(""),
              this.state.strAccountName &&
                this.state.strPassword &&
                (j.SetAccountAndPassword(
                  this.state.strAccountName,
                  this.state.strPassword,
                  this.state.bRememberPassword,
                ),
                j.StartLogin()),
              (this.m_bShowErrors = !0));
          }
          async ShowLoginFailure() {
            (await Ii(v("#Login_LastError", fo(j.loginResult))),
              (this.m_bShowErrors = !1));
          }
          render() {
            if (this.state.strAccountName && j.hasCachedCredentials)
              return (
                this.LoginWithCachedCredentials(this.state.strAccountName),
                (0, m.jsx)(Bs, {})
              );
            j.loginResult != Tn &&
              j.loginResult != ic &&
              this.m_bShowErrors &&
              this.ShowLoginFailure();
            let r = this.state.bRememberPassword ? "checked" : "";
            return (0, m.jsxs)(Bs, {
              children: [
                (0, m.jsx)("div", {
                  className: "PopupGenericTitle",
                  children: v("#Login_EnterCredentials"),
                }),
                (0, m.jsxs)("form", {
                  className: "MainLoginForm",
                  children: [
                    (0, m.jsxs)("div", {
                      className: "MainLoginFormGroup",
                      children: [
                        (0, m.jsx)("label", {
                          className: "PopupGenericBodyText",
                          children: v("#Login_AccountName"),
                        }),
                        (0, m.jsx)(Ln, { strText: v("#Login_AccountHelp") }),
                        (0, m.jsx)("input", {
                          type: "text",
                          autoFocus: !0,
                          value: this.state.strAccountName,
                          onChange: this.OnAccountNameChange,
                        }),
                      ],
                    }),
                    (0, m.jsxs)("div", {
                      className: "MainLoginFormGroup",
                      children: [
                        (0, m.jsx)("label", {
                          className: "PopupGenericBodyText",
                          children: v("#Login_Password"),
                        }),
                        (0, m.jsx)("input", {
                          type: "password",
                          value: this.state.strPassword,
                          onChange: this.OnPasswordChange,
                        }),
                      ],
                    }),
                    (0, m.jsxs)("div", {
                      className: "MainLoginFormRemember",
                      children: [
                        (0, m.jsx)("input", {
                          type: "checkbox",
                          value: r,
                          onChange: this.OnRememberChange,
                        }),
                        (0, m.jsx)("label", {
                          className: "PopupGenericBodyText",
                          children: v("#Login_RememberPassword"),
                        }),
                      ],
                    }),
                    (0, m.jsxs)("div", {
                      className: "GenericButtonGroup",
                      children: [
                        (0, m.jsx)("button", {
                          className: "GenericButton default",
                          type: "submit",
                          onClick: this.LoginWithCredentials,
                          children: v("#Login_Login"),
                        }),
                        (0, m.jsx)("button", {
                          className: "GenericButton",
                          type: "button",
                          onClick: this.props.onCancel,
                          children: v("#Button_Cancel"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        (Jr([R], Mn.prototype, "OnGetLoginUsers", 1),
          Jr([R], Mn.prototype, "LoginWithCachedCredentials", 1),
          Jr([R], Mn.prototype, "OnAccountNameChange", 1),
          Jr([R], Mn.prototype, "OnPasswordChange", 1),
          Jr([R], Mn.prototype, "OnRememberChange", 1),
          Jr([R], Mn.prototype, "LoginWithCredentials", 1),
          (Mn = Jr([Xr.PA], Mn)));
        class Yi extends F.PureComponent {
          m_bShowErrors = !0;
          constructor(e) {
            (super(e), (this.state = { strAuthCode: "" }));
          }
          OnAuthCodeChange(e) {
            this.setState({ strAuthCode: e.target.value });
          }
          LoginWithSteamGuard(e) {
            (e.preventDefault(),
              j.SetSteamGuardCode(this.state.strAuthCode),
              j.StartLogin(),
              (this.m_bShowErrors = !0));
          }
          async ShowFailure() {
            (await Ii(v("#Login_LastError", fo(j.loginResult))),
              (this.m_bShowErrors = !1));
          }
          render() {
            j.loginResult != Tn &&
              j.loginResult != ac &&
              j.loginResult != As &&
              this.m_bShowErrors &&
              this.ShowFailure();
            let e =
                j.loginResult == As
                  ? v("#Login_EnterTwoFactor", j.accountName)
                  : v("#Login_EnterSteamGuard", j.accountName),
              t =
                j.loginResult == As
                  ? v("#Login_TwoFactorTitle", j.accountName)
                  : v("#Login_SteamGuardTitle", j.accountName),
              n =
                j.loginResult == As
                  ? v("#Login_TwoFactorDesc", j.accountName)
                  : v("#Login_SteamGuardDesc", j.accountName);
            return (0, m.jsxs)(Bs, {
              children: [
                (0, m.jsx)("div", {
                  className: "PopupGenericTitle",
                  children: t,
                }),
                (0, m.jsx)("br", {}),
                (0, m.jsx)("label", {
                  className: "PopupGenericBodyText",
                  children: n,
                }),
                (0, m.jsxs)("form", {
                  className: "SteamGuardForm",
                  children: [
                    (0, m.jsxs)("div", {
                      className: "MainLoginFormGroup",
                      children: [
                        (0, m.jsx)("label", {
                          className: "PopupGenericBodyText",
                          children: e,
                        }),
                        (0, m.jsx)("input", {
                          type: "text",
                          maxLength: 5,
                          autoFocus: !0,
                          value: this.state.strAuthCode,
                          onChange: this.OnAuthCodeChange,
                        }),
                      ],
                    }),
                    (0, m.jsxs)("div", {
                      className: "GenericButtonGroup",
                      children: [
                        (0, m.jsx)("button", {
                          className: "GenericButton default",
                          type: "submit",
                          onClick: this.LoginWithSteamGuard,
                          children: v("#Login_Login"),
                        }),
                        (0, m.jsx)("button", {
                          className: "GenericButton",
                          onClick: this.props.onCancel,
                          children: v("#Button_Cancel"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (Jr([R], Yi.prototype, "OnAuthCodeChange", 1),
          Jr([R], Yi.prototype, "LoginWithSteamGuard", 1));
        let Ys = class extends F.Component {
          m_TimerID;
          m_bRequestInFlight;
          constructor(r) {
            (super(r), (this.m_TimerID = 0), (this.m_bRequestInFlight = !1));
          }
          CancelLogin() {}
          componentDidMount() {
            this.m_TimerID = window.setInterval(() => this.tick(), 1e3);
          }
          componentWillUnmount() {
            (clearInterval(this.m_TimerID), (this.m_TimerID = 0));
          }
          tick() {
            !this.m_bRequestInFlight &&
              !P.shutdown &&
              ((this.m_bRequestInFlight = !0),
              j.UpdateLoginStatus(),
              (this.m_bRequestInFlight = !1));
          }
          render() {
            let r = "",
              e = !1,
              t = v("#Button_Cancel"),
              n = null;
            switch (this.props.loginState) {
              case Va:
                ((r = v("#Login_ConnectingUser") + " " + j.accountName),
                  (e = !0));
                break;
              case iu:
                ((r = v("#Status_NoConnection")),
                  (e = !0),
                  (t = v("#Menu_Exit")));
                break;
              case su:
                r = v("#Login_LoggingOut");
                break;
              case Ai:
                ((r = v("#Status_NoSteamCmd")),
                  (n =
                    !P.steamcmdConnected &&
                    (0, m.jsxs)("div", {
                      className: "HelpText",
                      children: [
                        (0, m.jsx)("br", {}),
                        v("#Status_NoSteamCmd_Help", String(Ga)),
                      ],
                    })));
                break;
            }
            return (0, m.jsx)(Bs, {
              children: (0, m.jsxs)("div", {
                className: "LoginStatusContainer",
                children: [
                  (0, m.jsx)("div", {
                    style: { width: "100%", height: "100%" },
                    children: (0, m.jsx)(wl, {
                      size: "medium",
                      position: "center",
                    }),
                  }),
                  (0, m.jsx)("div", {
                    className: "LoginStatusMessage",
                    children: (0, m.jsx)("div", {
                      className: "LoginStatus PopupGenericBodyText",
                      children: r,
                    }),
                  }),
                  n,
                  (0, m.jsx)("div", {
                    className: "LoginStatusButtonContainer",
                    children:
                      e &&
                      (0, m.jsx)("button", {
                        className: "GenericButton",
                        onClick: this.props.onCancel,
                        children: t,
                      }),
                  }),
                ],
              }),
            });
          }
        };
        (Jr([R], Ys.prototype, "CancelLogin", 1), (Ys = Jr([Xr.PA], Ys)));
        let $s = class extends F.Component {
          constructor(r) {
            super(r);
          }
          CancelLogin() {
            j.loginState == Ia || j.loginState == Va || j.loginState == Ha
              ? j.CancelLogin()
              : go();
          }
          componentDidMount() {
            j.UpdateLoginStatus();
          }
          render() {
            let r = j.loginState;
            switch (r) {
              case Da:
                return (0, m.jsx)(Bs, {});
              case nu:
                return (0, m.jsx)(Mn, { onCancel: this.CancelLogin });
              case Ia:
              case Ha:
                return (0, m.jsx)(Yi, {
                  loginState: r,
                  onCancel: this.CancelLogin,
                });
              default:
                return (0, m.jsx)(Ys, {
                  loginState: r,
                  onCancel: this.CancelLogin,
                });
            }
          }
        };
        (Jr([R], $s.prototype, "CancelLogin", 1), ($s = Jr([Xr.PA], $s)));
        var qu = Object.defineProperty,
          ed = Object.getOwnPropertyDescriptor,
          _s = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? ed(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && qu(e, t, a), a);
          };
        let $i = class extends F.Component {
          constructor(r) {
            super(r);
          }
          render() {
            return (0, m.jsxs)("div", {
              className: "MainWindow",
              children: [
                (0, m.jsx)(ks, {}),
                (0, m.jsx)("div", {
                  className: "LanguageWindowContentContainer",
                  children: (0, m.jsx)("div", {
                    className: "LanguageWindowContent",
                    children: (0, m.jsx)("div", {
                      className: "LanguageWindowContentGradient",
                      children: (0, m.jsx)("div", {
                        className: "LanguageBackground",
                        children: (0, m.jsx)(Xs, {}),
                      }),
                    }),
                  }),
                }),
                (0, m.jsx)(Es, {}),
              ],
            });
          }
        };
        $i = _s([Xr.PA], $i);
        class Xs extends F.Component {
          constructor(e) {
            (super(e), (this.state = { strLanguage: P.language }));
          }
          async Save() {
            let e = this.state.strLanguage;
            e === "None" && (e = "english");
            const t = te.Init(nt);
            (t.Body().set_language(e),
              await $r.SetLanguage(t),
              await mo(e),
              P.SetLanguage(e),
              P.SetView(zn));
          }
          Cancel() {
            P.SetView(zn);
          }
          onSelect(e) {
            this.setState({ strLanguage: e.target.value });
          }
          render() {
            let e = [];
            for (let t = on; t < wa; t++) {
              let n = va(t),
                a = v("#Language_" + n);
              e.push({ key: t, value: n, name: a });
            }
            return (0, m.jsxs)("div", {
              className: "LanguageContainer",
              children: [
                (0, m.jsx)("div", {
                  className: "PopupGenericTitle",
                  children: v("#Language_Configure"),
                }),
                (0, m.jsx)("br", {}),
                (0, m.jsxs)("form", {
                  className: "LanguageForm",
                  children: [
                    (0, m.jsx)("div", {
                      className: "LanguageFormGroup",
                      children: (0, m.jsx)("select", {
                        value: this.state.strLanguage,
                        onChange: this.onSelect,
                        children: e.map((t, n) =>
                          (0, m.jsx)(
                            "option",
                            { value: t.value, children: t.name },
                            n,
                          ),
                        ),
                      }),
                    }),
                    (0, m.jsxs)("div", {
                      className: "GenericButtonGroup",
                      children: [
                        (0, m.jsx)("button", {
                          className: "GenericButton",
                          type: "submit",
                          onClick: this.Save,
                          children: v("#Button_Save"),
                        }),
                        (0, m.jsx)("button", {
                          className: "GenericButton",
                          type: "button",
                          onClick: this.Cancel,
                          children: v("#Button_Cancel"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (_s([R], Xs.prototype, "Save", 1),
          _s([R], Xs.prototype, "Cancel", 1),
          _s([R], Xs.prototype, "onSelect", 1));
        const Qs = F.createContext({
          focusNavWindow: null,
          bSupportsFocus: !0,
        });
        function cQ(r) {
          const {
              ownerWindow: e,
              refFocusNavContext: t,
              parentWindowContext: n,
              children: a,
              suppressGamepadInput: o = !1,
            } = r,
            l = useFocusNavController(),
            u = React.useContext(Qs),
            g = useInVR(),
            [b] = React.useState(
              () => n ?? u.focusNavWindow ?? l.CreateContext(e, o, g),
            ),
            f = useSubscribableValue(l.NavigationSourceSupportsFocus) ?? !1;
          (React.useEffect(
            () => (
              b.OnMount(e),
              e.document?.hasFocus() && b.OnActivate(e),
              () => {
                b.Destroy(e);
              }
            ),
            [b, e],
          ),
            useSetRef(t, b));
          const h = React.useMemo(
            () => ({ focusNavWindow: b, bSupportsFocus: f }),
            [b, f],
          );
          return jsxs(Qs.Provider, {
            value: h,
            children: [
              !b?.BIsVR() && jsx(td, { ownerWindow: e, context: b }),
              a,
            ],
          });
        }
        function td(r) {
          const { ownerWindow: e, context: t } = r,
            n = React.useMemo(() => () => t.OnActivate(e), [t, e]),
            a = React.useMemo(() => () => t.OnDeactivate(e), [t, e]);
          return (
            useGlobalEventListener(e, "touchstart", n, { capture: !0 }),
            useGlobalEventListener(e, "mousedown", n, { capture: !0 }),
            useGlobalEventListener(e, "focus", n),
            useGlobalEventListener(e?.document, "focusin", n),
            useGlobalEventListener(e, "blur", a),
            null
          );
        }
        function rd() {
          return F.useContext(Qs)?.focusNavWindow;
        }
        function bo(r = !0) {
          return F.useContext(Qs)?.bSupportsFocus ?? r;
        }
        function lQ(r, e) {
          return (t, n, a) => a;
        }
        function nd(r, e, t = []) {
          const n = React.useCallback(r, []);
          React.useEffect(() => {
            if (!n) return;
            const a = setTimeout(n, e);
            return () => clearTimeout(a);
          }, [e, ...t]);
        }
        function uQ(r, e, t = []) {
          const n = React.useRef(r);
          ((n.current = r),
            React.useEffect(() => {
              if (!n.current) return;
              const a = setTimeout(() => {
                n.current && n.current();
              }, e);
              return () => clearTimeout(a);
            }, [e, ...t]));
        }
        function sd(r, e, t = [], n = !0) {
          const a = React.useRef(r);
          ((a.current = r),
            React.useEffect(() => {
              if (!a.current || !n) return;
              const l = setInterval(() => {
                a.current && a.current();
              }, e);
              return () => clearInterval(l);
            }, [e, n, ...t]));
        }
        function dQ(r) {
          const { msInterval: e, bEnabled: t = !0 } = r,
            n = ho();
          sd(n, e, [], t);
        }
        function id(r, e, t = !0, n = !1) {
          const a = React.useRef(e);
          a.current = e;
          const [o, l] = React.useState(!1),
            u = React.useRef(0),
            g = React.useCallback(() => {
              (l(!0), a.current && a.current());
            }, []),
            b = React.useCallback(() => {
              window.clearTimeout(u.current);
            }, []),
            f = React.useCallback(() => {
              (l(!1), b(), (u.current = window.setTimeout(g, r)));
            }, [b, r, g]),
            h = React.useCallback(() => {
              t && f();
            }, [t, f]);
          return (
            React.useEffect(h, [r, h]),
            React.useEffect(() => b, [b]),
            React.useEffect(() => {
              o && n && f();
            }, [o, n, f]),
            { bTimerCompleted: o, fnStopTimer: b, fnRestartTimer: f }
          );
        }
        function mQ(r, e = []) {
          const [t, n] = React.useState(r <= 0);
          return (React.useEffect(() => n(!1), e), nd(() => n(!0), r, e), t);
        }
        function gQ(r, e, t) {
          const [n, a] = React.useState(t);
          return (
            React.useEffect(() => {
              let o = !0;
              const l = r();
              return (
                l &&
                  l.then((u) => {
                    o && a(u);
                  }),
                () => {
                  o = !1;
                }
              );
            }, e),
            n
          );
        }
        function ho() {
          const [, r] = React.useState(0);
          return React.useCallback(() => r((t) => t + 1), []);
        }
        function fQ() {
          const r = React.useRef(!1);
          return (
            React.useEffect(
              () => () => {
                r.current = !0;
              },
              [],
            ),
            React.useCallback(() => r.current, [])
          );
        }
        function bQ(r) {
          const e = React.useRef({
            flLastExecutionTimeMs: 0,
            fnLatestCallback: null,
            nTimeoutHandle: 0,
            fnExecuteLatestCallback() {
              (this.fnLatestCallback != null &&
                (this.fnLatestCallback(),
                (this.fnLatestCallback = null),
                (this.flLastExecutionTimeMs = performance.now())),
                window.clearTimeout(this.nTimeoutHandle),
                (this.nTimeoutHandle = 0));
            },
          });
          return (
            React.useEffect(() => {
              const t = e.current;
              return () => t.fnExecuteLatestCallback();
            }, []),
            React.useCallback(
              (t) => {
                const n = e.current;
                n.fnLatestCallback = t;
                const o = performance.now() - n.flLastExecutionTimeMs,
                  l = Math.max(r - o, 0);
                (window.clearTimeout(n.nTimeoutHandle),
                  (n.nTimeoutHandle = window.setTimeout(
                    () => n.fnExecuteLatestCallback(),
                    l,
                  )));
              },
              [r],
            )
          );
        }
        function _i(r, e) {
          F.useLayoutEffect(() => {
            if (!e || !r) return;
            const t = r.Register(e);
            return () => t.Unregister();
          }, [r, e]);
        }
        function hQ(r) {
          const e = ho();
          _i(r, e);
        }
        function ad(r) {
          return Xi;
        }
        function Xi() {}
        function Qi(r) {
          return F.useSyncExternalStore(
            r ? r.SyncStore : ad,
            r ? r.GetValue : Xi,
            r ? r.GetValue : Xi,
          );
        }
        function MQ(r, e) {
          React.useEffect(() => {
            if (!(!r || !e)) return r.Subscribe(e).Unsubscribe;
          }, [r, e]);
        }
        function pQ(r, e, t = 1e3) {
          const n = React.useRef(e);
          n.current = e;
          const [a, o] = React.useState(r),
            [l, u] = React.useState(!1),
            g = React.useCallback(() => {
              (o(r), u(!1));
            }, [r, o]),
            { fnStopTimer: b, fnRestartTimer: f } = id(t, g, !1),
            h = React.useCallback(
              (B) => {
                (f(), o(B), u(!0), n.current && n.current(B));
              },
              [o, f],
            );
          return [l ? a : r, h, g];
        }
        function kQ(r) {
          const e = React.useRef(null);
          return (
            React.useEffect(() => {
              e.current = r;
            }),
            e.current
          );
        }
        function Mo(r, e) {
          const [t, n] = React.useState(r);
          return (
            React.useEffect(() => {
              if (r) {
                n(!0);
                return;
              } else {
                const a = window.setTimeout(() => n(!1), e);
                return () => window.clearTimeout(a);
              }
            }, [r, e]),
            t
          );
        }
        function yQ(r, e) {
          return Mo(r, e) || r;
        }
        function EQ(r, e) {
          const t = r != null,
            n = Mo(t, e),
            a = React.useRef(r);
          return (
            React.useEffect(() => {
              r != null && r != a.current && (a.current = r);
            }, [r]),
            t ? r : n ? a.current : r
          );
        }
        function wQ(r = !1) {
          const [e, t] = React.useState(r),
            n = React.useCallback(() => t(!0), []),
            a = React.useCallback(() => t(!1), []);
          return [e, n, a];
        }
        let od = 0;
        function BQ() {
          const [r] = React.useState(() => `:valve${(od++).toString(32)}:`);
          return r;
        }
        function TQ(r) {
          const e = React.useRef(void 0);
          return React.useCallback(
            () => (
              (!e.current || e.current.factory != r) &&
                (e.current = { value: r(), factory: r }),
              e.current.value
            ),
            [r],
          );
        }
        function vQ(r) {
          const e = React.useRef({ value: void 0, bConstructed: !1 });
          return (
            e.current.bConstructed ||
              (e.current = { value: r(), bConstructed: !0 }),
            e.current.value
          );
        }
        function FQ(r, e) {
          const t = React.useRef(void 0);
          return r == null
            ? ((t.current = r), r)
            : ((t.current == null || isNaN(t.current)) && (t.current = r),
              (t.current = Math.min(t.current, r + e)),
              (t.current = Math.max(t.current, r - e)),
              t.current);
        }
        function zQ() {
          const [r, e] = React.useState(() => PromiseWithResolvers()),
            t = React.useCallback(() => {
              const n = PromiseWithResolvers();
              return (e(n), n);
            }, []);
          return { ...r, reset: t };
        }
        function cd(r, ...e) {
          let t = [],
            n = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
            a = 0,
            o;
          for (; (o = n.exec(r));) {
            ((a += o[0].length), t.push(o[1]));
            let l = parseInt(o[2]),
              u = o[3] || "",
              g = cd(u, ...e),
              f = (l >= 1 && l <= e.length ? e[l - 1] : null)
                ? React.cloneElement(e[l - 1], {}, u ? g : null)
                : u;
            t.push(f);
          }
          return (
            t.push(r.slice(a)), React.createElement(React.Fragment, null, ...t)
          );
        }
        function RQ(r) {
          const e = React.useRef(r);
          return (
            (e.current.length !== r.length ||
              e.current.some((t, n) => t !== r[n])) &&
              (e.current = r),
            e.current
          );
        }
        function OQ(r) {
          return !!(
            r.props &&
            typeof r.props == "object" &&
            "children" in r.props &&
            r.props.children
          );
        }
        function pn(r, e) {
          r != null &&
            (typeof r == "function" ? r(e) : "current" in r && (r.current = e));
        }
        function Js(...r) {
          return F.useCallback((e) => {
            for (const t of r) pn(t, e);
          }, r);
        }
        function SQ(...r) {
          if (!(!r || r.length === 0))
            return r.length === 1
              ? r[0]
              : (e) =>
                  r.forEach((t) => {
                    if (t) typeof t == "function" ? t(e) : (t.current = e);
                    else return;
                  });
        }
        function ld(r, e) {
          const t = F.useRef(void 0);
          return F.useCallback((a) => {
            (t.current && t.current(), (t.current = r(a)));
          }, e);
        }
        function AQ(r) {
          const e = React.useRef(null),
            t = Js(r, e);
          return { refWithValue: e, refForElement: t };
        }
        function WQ(r, e) {
          const t = React.useRef(!1);
          (React.useLayoutEffect(
            () => () => {
              t.current && pn(r, void 0);
            },
            [r],
          ),
            React.useLayoutEffect(() => {
              (e || t.current) && (pn(r, e), (t.current = !!e));
            }, [r, e]));
        }
        var ud = T(4238),
          Cs = T.n(ud),
          po = ((r) => (
            (r[(r.LaunchGame = 0)] = "LaunchGame"),
            (r[(r.FriendMessage = 1)] = "FriendMessage"),
            (r[(r.ChatMention = 2)] = "ChatMention"),
            (r[(r.ChatMessage = 3)] = "ChatMessage"),
            (r[(r.ToastMessage = 4)] = "ToastMessage"),
            (r[(r.ToastAchievement = 5)] = "ToastAchievement"),
            (r[(r.ToastMisc = 6)] = "ToastMisc"),
            (r[(r.ToastMiscShort = 7)] = "ToastMiscShort"),
            (r[(r.FriendOnline = 8)] = "FriendOnline"),
            (r[(r.FriendInGame = 9)] = "FriendInGame"),
            (r[(r.VolSound = 10)] = "VolSound"),
            (r[(r.ShowModal = 11)] = "ShowModal"),
            (r[(r.HideModal = 12)] = "HideModal"),
            (r[(r.IntoGameDetail = 13)] = "IntoGameDetail"),
            (r[(r.OutOfGameDetail = 14)] = "OutOfGameDetail"),
            (r[(r.PagedNavigation = 15)] = "PagedNavigation"),
            (r[(r.ToggleOn = 16)] = "ToggleOn"),
            (r[(r.ToggleOff = 17)] = "ToggleOff"),
            (r[(r.SliderUp = 18)] = "SliderUp"),
            (r[(r.SliderDown = 19)] = "SliderDown"),
            (r[(r.ChangeTabs = 20)] = "ChangeTabs"),
            (r[(r.DefaultOk = 21)] = "DefaultOk"),
            (r[(r.OpenSideMenu = 22)] = "OpenSideMenu"),
            (r[(r.CloseSideMenu = 23)] = "CloseSideMenu"),
            (r[(r.BasicNav = 24)] = "BasicNav"),
            (r[(r.FailedNav = 25)] = "FailedNav"),
            (r[(r.Typing = 26)] = "Typing"),
            (r[(r.TimerExpired = 27)] = "TimerExpired"),
            (r[(r.Screenshot = 28)] = "Screenshot"),
            r
          ))(po || {});
        class dd {
          m_fnCallbackOnPlaySound = new Gn();
          m_fnCallbackOnSuppressSound = new Gn();
          RegisterCallbackOnPlaySound(e) {
            return this.m_fnCallbackOnPlaySound.Register(e);
          }
          PlayNavSound(e, t) {
            this.m_fnCallbackOnPlaySound.Dispatch(e, t);
          }
          RegisterCallbackOnSuppressNavImminentSound(e) {
            return this.m_fnCallbackOnSuppressSound.Register(e);
          }
          SuppressImminentNavSound() {
            this.m_fnCallbackOnSuppressSound.Dispatch();
          }
        }
        const md = new dd();
        function Zs(r) {
          return r != null && r.focus !== void 0;
        }
        function LQ(r) {
          if (!r.clientX && !r.clientY && !r.screenX && !r.screenY) return !0;
          if (r.relatedTarget) return !ko(r.currentTarget, r.relatedTarget);
          {
            const e = r.currentTarget.getBoundingClientRect();
            return r.clientX <= e.left ||
              r.clientX >= e.right ||
              r.clientY <= e.top ||
              r.clientY >= e.bottom
              ? (console.log(`${r.clientX} <= ${e.left} || ${r.clientX} >= ${e.right} ||
				${r.clientY} <= ${e.top} || ${r.clientY} >= ${e.bottom}`),
                !0)
              : !1;
          }
        }
        function ko(r, e) {
          let t = e;
          for (; t;) {
            if (
              (t.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                (t = t.parentNode.host),
              t == r)
            )
              return !0;
            t = t.parentElement;
          }
          return !1;
        }
        function jQ(r, e) {
          let t = e;
          for (; t;) if (((t = t.parentElement), t == r)) return !0;
          return !1;
        }
        function xQ(r) {
          const e = window.getSelection();
          if (!e) return !1;
          let t = 0;
          for (let n = 0; n < e.rangeCount; n++) {
            const a = e.getRangeAt(n);
            if (a.startOffset == a.endOffset) continue;
            const o = a.commonAncestorContainer;
            ko(r, o) && t++;
          }
          return e.rangeCount > 0 && e.rangeCount == t;
        }
        function UQ(r, e) {
          let t = r.offsetTop;
          (r.offsetParent != e && (t -= e.offsetTop),
            t < e.scrollTop
              ? r.scrollIntoView(!0)
              : t + r.offsetHeight > e.scrollTop + e.offsetHeight &&
                r.scrollIntoView(!1));
        }
        function PQ(r, e, t) {
          let n = 0,
            a = 0;
          return (
            e < r.left ? (n = r.left - e) : e > r.right && (n = e - r.right),
            t < r.top ? (a = r.top - t) : t > r.bottom && (a = t - r.bottom),
            Math.sqrt(n * n + a * a)
          );
        }
        function gd(r, e) {
          let t = 0,
            n = 0;
          return (
            e.right < r.left
              ? (t = r.left - e.right)
              : e.left > r.right && (t = e.left - r.right),
            e.bottom < r.top
              ? (n = r.top - e.bottom)
              : e.top > r.bottom && (n = e.top - r.bottom),
            Math.sqrt(t * t + n * n)
          );
        }
        function NQ(r, e) {
          return {
            top: r.screenTop + e.top,
            bottom: r.screenTop + e.bottom,
            left: r.screenLeft + e.left,
            right: r.screenLeft + e.right,
          };
        }
        function GQ(r) {
          return r.right - r.left;
        }
        function DQ(r) {
          return r.bottom - r.top;
        }
        function VQ(r) {
          let e = 1,
            t = r;
          for (; t != null && t.tagName != "HTML";) {
            const n = getComputedStyle(t);
            if (n.zoom) {
              const a = Number.parseFloat(n.zoom);
              isNaN(a) || (e *= a);
            }
            t = t.parentElement;
          }
          return e;
        }
        function IQ(r) {
          let e;
          return (
            r &&
              Zs(r.currentTarget) &&
              (e = r.currentTarget.ownerDocument.defaultView),
            e
          );
        }
        function HQ(r) {
          let e;
          return (r && (e = r.ownerDocument.defaultView), e);
        }
        function KQ(r) {
          return r.navigator.clipboard.readText();
        }
        function fd(r) {
          const e = window.top ?? window,
            t = e.document,
            n = t.createElement("textarea");
          ((n.textContent = r),
            (n.style.position = "fixed"),
            t.body.appendChild(n),
            n.select());
          try {
            if (
              (BWindowHasSteamClientMethod(e, "Browser.NotifyUserActivation") &&
                e.SteamClient.Browser.NotifyUserActivation(),
              !t.execCommand("copy"))
            )
              throw "document.execCommand false";
          } catch (a) {
            console.warn("Copy to clipboard failed.", a);
          } finally {
            t.body.removeChild(n);
          }
        }
        function YQ(r) {
          const e = "steam://openurl/";
          (r.startsWith(e) && (r = r.slice(e.length)), fd(r));
        }
        function $Q(r) {
          return !r ||
            r.clipboardData.files.length == 0 ||
            r.clipboardData.types.some(
              (t) =>
                (t == "text" || t.startsWith("text/")) && t !== "text/html",
            )
            ? null
            : r.clipboardData.files[0];
        }
        function bd(r) {
          const e = r.ownerDocument;
          return !!(
            e.fullscreen ||
            e.webkitIsFullScreen ||
            e.mozFullScreen ||
            e.msFullscreenElement
          );
        }
        let Ts;
        function _Q() {
          if (Ts !== void 0) return Ts;
          let r = document.createElement("div");
          return (
            r.requestFullscreen ||
            r.webkitRequestFullscreen ||
            r.mozRequestFullScreen ||
            r.msRequestFullscreen
              ? (Ts = !0)
              : (Ts = !1),
            Ts
          );
        }
        function hd(r, e) {
          const t = r;
          return t.requestFullscreen
            ? (t.requestFullscreen(), !0)
            : t.webkitRequestFullscreen
              ? (t.webkitRequestFullscreen(), !0)
              : e && e.webkitSetPresentationMode
                ? (e.webkitSetPresentationMode("fullscreen"), !0)
                : t.mozRequestFullScreen
                  ? (t.mozRequestFullScreen(), !0)
                  : t.msRequestFullscreen
                    ? (t.msRequestFullscreen(), !0)
                    : !1;
        }
        function Md(r) {
          const e = r.ownerDocument;
          e.exitFullscreen
            ? e.exitFullscreen()
            : e.cancelFullscreen
              ? e.cancelFullscreen()
              : e.webkitCancelFullScreen
                ? e.webkitCancelFullScreen()
                : e.mozCancelFullScreen
                  ? e.mozCancelFullScreen()
                  : e.msExitFullscreen && e.msExitFullscreen();
        }
        function XQ(r) {
          bd(r) ? Md(r) : hd(r);
        }
        function QQ(r) {
          return r.nodeName === "INPUT";
        }
        function JQ(r) {
          return r.nodeName === "TEXTAREA";
        }
        function CQ(r, e) {
          switch (r) {
            case "TEXTAREA":
              return !0;
            case "INPUT":
              switch (e) {
                case "date":
                case "datetime-local":
                case "datetime":
                case "email":
                case "month":
                case "number":
                case "password":
                case "search":
                case "tel":
                case "text":
                case "time":
                case "url":
                case "week":
                  return !0;
                default:
                  return !1;
              }
            default:
              return !1;
          }
        }
        function ZQ(r) {
          document.readyState == "loading"
            ? document.addEventListener("DOMContentLoaded", r)
            : r();
        }
        class qQ {
          m_nBufferPx;
          m_elParent;
          m_bNeedSort = !1;
          m_bOffsetsInvalidated = !1;
          m_rgChildren = [];
          m_nLastYMin;
          m_nLastYMax;
          constructor(e) {
            this.m_nBufferPx = e;
          }
          SetParent(e) {
            (this.m_elParent &&
              this.m_elParent.ownerDocument.defaultView?.removeEventListener(
                "resize",
                this.RecomputeVisibility,
              ),
              (this.m_elParent = e),
              this.m_elParent &&
                this.m_elParent.ownerDocument.defaultView?.addEventListener(
                  "resize",
                  this.RecomputeVisibility,
                ));
          }
          InvalidateOffsetsAndRecompute() {
            ((this.m_bOffsetsInvalidated = !0), this.RecomputeVisibility());
          }
          RecomputeVisibility = () => {
            const e = this.m_elParent.scrollTop - this.m_nBufferPx,
              t =
                this.m_elParent.scrollTop +
                this.m_elParent.clientHeight +
                this.m_nBufferPx;
            this.EnsureSort();
            for (const n of this.m_rgChildren)
              if (!(n.yOffset < e)) {
                if (n.yOffset > t) break;
                n.fnCallback(!0);
              }
            ((this.m_nLastYMin = e), (this.m_nLastYMax = t));
          };
          EnsureSort() {
            if (this.m_bOffsetsInvalidated) {
              for (let e = 0; e < this.m_rgChildren.length; e++)
                this.m_rgChildren[e].yOffset =
                  this.m_rgChildren[e].element.offsetTop;
              this.m_bOffsetsInvalidated = !1;
            }
            this.m_bNeedSort &&
              (this.m_rgChildren.sort((e, t) => e.yOffset - t.yOffset),
              (this.m_bNeedSort = !1));
          }
          RegisterChild(e, t) {
            (this.m_rgChildren.push({
              element: e,
              yOffset: e.offsetTop,
              fnCallback: t,
            }),
              (this.m_bNeedSort = !0),
              this.m_nLastYMin !== void 0 &&
                this.m_nLastYMax !== void 0 &&
                e.offsetTop >= this.m_nLastYMin &&
                e.offsetTop <= this.m_nLastYMax &&
                t(!0));
          }
          UnregisterChild(e) {
            ArrayUtils.FindAndRemoveWhere(
              this.m_rgChildren,
              (t) => t.element == e,
            );
          }
        }
        function eJ(r, e) {
          const t = r;
          return (
            (t.lastModifiedDate = new Date()),
            (t.name = e || Date.now().toString()),
            r
          );
        }
        function tJ(r, e, t) {
          let n = e.parentElement;
          for (; n && n !== r && !n.hasAttribute(t);) n = n.parentElement;
          return n || r;
        }
        function rJ(r, e) {
          const t = [],
            n = Array.prototype.slice.call(r.children).reverse();
          for (; n.length > 0;) {
            const a = n.pop();
            a.hasAttribute(e)
              ? t.push(a)
              : n.push(...Array.prototype.slice.call(a.children).reverse());
          }
          return t;
        }
        function pd(r, e) {
          let t = r?.parentElement;
          for (; t;) {
            if (Zs(t)) {
              if (!e || e == "x") {
                const n = window.getComputedStyle(t);
                if (
                  n.overflowX == "scroll" ||
                  n.overflowX == "auto" ||
                  n.position == "fixed"
                )
                  break;
              }
              if (!e || e == "y") {
                const n = window.getComputedStyle(t);
                if (
                  n.overflowY == "scroll" ||
                  n.overflowY == "auto" ||
                  n.position == "fixed"
                )
                  break;
              }
            }
            t = t.parentElement;
          }
          return Zs(t) ? t : null;
        }
        function nJ(r, e) {
          const t = [];
          let n = r;
          for (; (n = pd(n, e));) t.push(n);
          return t;
        }
        function sJ(r, e) {
          let t = r;
          for (; t;) {
            if (e(t)) return t;
            t = t.parentElement;
          }
        }
        function iJ(r, e) {
          if (!("ownerDocument" in r)) return !0;
          const t = r.ownerDocument.defaultView.getComputedStyle(r),
            n = e === "x" ? t.overflowX : t.overflowY;
          return n === "auto" || n === "scroll";
        }
        async function aJ(r, e) {
          let t;
          const a = await new Promise((o) => {
            ((t = o), r.addEventListener(e, o));
          });
          return (r.removeEventListener(e, t), a);
        }
        function oJ() {
          return kd(document);
        }
        function kd(r) {
          const e = {};
          return (
            r.querySelectorAll('link[rel="stylesheet"]').forEach((n) => {
              e[n.href] = n;
            }),
            e
          );
        }
        function cJ(r, e) {
          yo(r.document, e, !0);
        }
        function yo(r, e, t) {
          const n = Object.assign({}, e),
            a = r.getElementsByTagName("head")[0],
            o = a.getElementsByTagName("link"),
            l = o.length;
          for (let g = 0; g < l; ++g) {
            const b = o[g];
            n[b.href] ? delete n[b.href] : t && b.parentNode?.removeChild(b);
          }
          const u = [];
          for (const g in n) {
            const b = n[g],
              f = r.createElement("link");
            for (let h = 0; h < b.attributes.length; h++) {
              const B = b.attributes.item(h);
              f.setAttribute(B.name, B.value);
            }
            u.push(f);
          }
          return (a.prepend(...u), u);
        }
        function lJ(r, e) {
          const t = (u) => decodeURI(u.split("?")[0]).replace(/\\/g, "/"),
            n = Object.keys(e).reduce((u, g) => ((u[t(g)] = [g, e[g]]), u), {}),
            o = r.getElementsByTagName("head")[0].getElementsByTagName("link");
          for (let u = 0; u < o.length; u++) {
            const g = o[u],
              b = n[t(g.href)];
            if (b) {
              const f = g,
                [h, B] = b;
              for (let z = 0; z < B.attributes.length; z++) {
                const S = B.attributes.item(z);
                f.setAttribute(S.name, S.value);
              }
              delete n[t(g.href)];
            }
          }
          const l = Object.keys(n).reduce((u, g) => {
            const [b, f] = n[g];
            return ((u[b] = f), u);
          }, {});
          yo(r, l);
        }
        function uJ(r, e, t) {
          if (r.type === "childList") {
            for (let n = 0; n < r.addedNodes.length; n++) {
              const a = r.addedNodes[n];
              if (a.nodeType === Node.ELEMENT_NODE) {
                const o = a;
                o.parentElement && e(o);
              }
            }
            for (let n = 0; n < r.removedNodes.length; n++) {
              const a = r.removedNodes[n];
              a.nodeType === Node.ELEMENT_NODE && t?.(a);
            }
          }
        }
        function dJ(r, e) {
          let t = r ?? null;
          for (; t && !t.contains(e);) t = t.parentElement;
          return t;
        }
        function mJ(r, e) {
          let t = r ?? null;
          for (; t && !t.contains(e);) t = t.parentNode;
          return t;
        }
        var yd = Object.defineProperty,
          Ed = Object.getOwnPropertyDescriptor,
          vs = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Ed(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && yd(e, t, a), a);
          },
          wd = ((r) => (
            (r[(r.Debug = 0)] = "Debug"),
            (r[(r.Info = 1)] = "Info"),
            (r[(r.Warning = 2)] = "Warning"),
            (r[(r.Error = 3)] = "Error"),
            r
          ))(wd || {});
        class kn {
          m_sName;
          m_fnIdGenerator = void 0;
          constructor(e, t) {
            ((this.m_sName = e),
              (this.m_fnIdGenerator = t),
              Tr.Get().RegisterLogName(e));
          }
          Debug(...e) {
            this.Log(0, ...e);
          }
          Info(...e) {
            this.Log(1, ...e);
          }
          Warning(...e) {
            this.Log(2, ...e);
          }
          Error(...e) {
            this.Log(3, ...e);
          }
          Assert(e, ...t) {
            e || this.Log(3, "Assertion failed:", ...t);
          }
          IsDebugEnabled() {
            return Tr.Get().IsDebugLogEnabled(this.m_sName);
          }
          Log(e, ...t) {
            const n = Tr.Get().IsDebugLogEnabled(this.m_sName);
            if (e == 0 && !n) return;
            let a = this.m_sName;
            const o = this.m_fnIdGenerator?.() ?? null;
            o != null && (a += " (" + o + ")");
            const l = Tr.Get().IncludeBacktraceInLog,
              u = Tr.Get().AllowCSSInLogStyling;
            Eo(e, n, l, u, a, this.m_sName, ...t);
          }
        }
        (vs([R], kn.prototype, "Debug", 1),
          vs([R], kn.prototype, "Info", 1),
          vs([R], kn.prototype, "Warning", 1),
          vs([R], kn.prototype, "Error", 1),
          vs([R], kn.prototype, "Assert", 1));
        class Tr {
          static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
          static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
          static k_AllowCSSInLogColors_StorageKey = "AllowCSSInLogColors";
          m_setKnownDebugLogs = new Set();
          m_setEnabledDebugLogs = new Set();
          m_bIncludeBacktraceInLog = !1;
          m_bAllowCSSInLogStyling = !0;
          m_SettingsChangedCallback = new Gn();
          m_bLoading = !0;
          constructor() {
            this.LoadSettings();
          }
          LogAsLogManager(...e) {
            Eo(
              1,
              !0,
              this.IncludeBacktraceInLog,
              this.AllowCSSInLogStyling,
              "LogManager",
              "LogManager",
              ...e,
            );
          }
          async LoadSettings() {
            const e = (n, a) => {
              try {
                const o = localStorage.getItem(n);
                return o ? JSON.parse(o) : a;
              } catch {
                return a;
              }
            };
            ((this.m_bIncludeBacktraceInLog = !!e(
              Tr.k_IncludeBacktraceInLog_StorageKey,
              !1,
            )),
              (this.m_bAllowCSSInLogStyling = !!e(
                Tr.k_AllowCSSInLogColors_StorageKey,
                !0,
              )));
            const t = e(Tr.k_EnabledLogNames_StorageKey, void 0);
            if (Array.isArray(t)) {
              this.m_setEnabledDebugLogs = new Set(t);
              for (const n of t) this.m_setKnownDebugLogs.add(n);
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              );
            }
            ((this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch());
          }
          async SaveSettings() {
            (localStorage.setItem(
              Tr.k_EnabledLogNames_StorageKey,
              JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
            ),
              localStorage.setItem(
                Tr.k_IncludeBacktraceInLog_StorageKey,
                JSON.stringify(this.m_bIncludeBacktraceInLog),
              ),
              localStorage.setItem(
                Tr.k_AllowCSSInLogColors_StorageKey,
                JSON.stringify(this.m_bAllowCSSInLogStyling),
              ),
              this.LogAsLogManager(
                "Saved enabled debug log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              ));
          }
          PrintEnabledLogs(...e) {
            (e &&
              e.length > 0 &&
              console.warn(
                `Use DebugLogEnable( '${e.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
              ),
              this.LogAsLogManager(
                "Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              ));
          }
          static Get() {
            return (
              window.g_LogManager == null && (window.g_LogManager = new Tr()),
              window.g_LogManager
            );
          }
          get Loading() {
            return this.m_bLoading;
          }
          get LogNames() {
            return this.m_setKnownDebugLogs.values();
          }
          RegisterLogName(e) {
            this.m_setKnownDebugLogs.add(e);
          }
          IsLogName(e) {
            return this.m_setKnownDebugLogs.has(e);
          }
          IsDebugLogEnabled(e) {
            return this.m_setEnabledDebugLogs.has(e);
          }
          async ToggleDebugLogEnabled(e) {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          }
          async SetDebugLogEnabled(e, t) {
            if (!this.IsLogName(e)) {
              console.warn(
                `No log named "${e}", available logs:`,
                this.GetLogNames(),
              );
              return;
            }
            (t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              await this.SaveSettings());
          }
          async SetDebugLogsEnabled(e, ...t) {
            t.forEach((n) => this.SetDebugLogEnabled(n, e));
          }
          async SetAllDebugLogsEnabled(e) {
            ((this.m_setEnabledDebugLogs = e
              ? new Set(this.m_setKnownDebugLogs)
              : new Set()),
              this.m_SettingsChangedCallback.Dispatch(),
              await this.SaveSettings());
          }
          RegisterForSettingsChanges(e) {
            return this.m_SettingsChangedCallback.Register(e);
          }
          get IncludeBacktraceInLog() {
            return this.m_bIncludeBacktraceInLog;
          }
          async SetIncludeBacktraceInLog(e) {
            ((this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              await this.SaveSettings());
          }
          get AllowCSSInLogStyling() {
            return this.m_bAllowCSSInLogStyling;
          }
          async SetAllowCSSInLogStyling(e) {
            ((this.m_bAllowCSSInLogStyling = e),
              this.m_SettingsChangedCallback.Dispatch(),
              await this.SaveSettings());
          }
          GetLogNames() {
            return Array.from(this.LogNames).sort();
          }
        }
        function Bd(r) {
          let e = 0;
          for (let t = 0; t < r.length; t++)
            e = r.charCodeAt(t) + ((e << 5) - e);
          return [(e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255];
        }
        function Td(r) {
          return (r[0] * 299 + r[1] * 587 + r[2] * 114) / 1e3 >= 128;
        }
        function vd(r) {
          switch (r) {
            case 0:
              return String.fromCodePoint(128027);
            case 1:
              return String.fromCodePoint(8505);
            case 2:
              return String.fromCodePoint(9888);
            case 3:
              return String.fromCodePoint(128165);
          }
        }
        function Eo(r, e, t, n, a, o, ...l) {
          let u = a;
          t && (u = vd(r) + " " + u);
          let g;
          if (n && e) {
            const f = Bd(o).map((S, A) =>
                Math.round(
                  Math.max(
                    0,
                    Math.min(255, ((S / 255 - 0.5) * 0.8 + 0.15) * 255),
                  ),
                ),
              ),
              h = Td(f),
              B =
                l.length >= 1 && typeof l[0] == "string" && l[0].includes("%c"),
              z = B && l.shift();
            g = [
              `%c${u}%c:${B ? " %c" + z : ""}`,
              `color: ${h ? "black" : "white"}; background: rgb(${f.join(",")}); padding: 0 1ch; border-radius: 3px;`,
              "color: transparent; margin-right: -1ch",
              ...(B ? [""] : []),
              ...l,
            ];
          } else g = [`${u}:`, ...l];
          if (t)
            (console.groupCollapsed(...g),
              console.trace("Callstack"),
              console.groupEnd());
          else
            switch (r) {
              case 0:
              case 1:
                console.log(...g);
                break;
              case 2:
                console.warn(...g);
                break;
              case 3:
                console.clogerror
                  ? console.clogerror(3, ...g)
                  : console.error(...g);
                break;
            }
        }
        ((window.DebugLogEnable = (...r) =>
          Tr.Get().SetDebugLogsEnabled(!0, ...r)),
          (window.DebugLogDisable = (...r) =>
            Tr.Get().SetDebugLogsEnabled(!1, ...r)),
          (window.DebugLogEnableAll = () =>
            Tr.Get().SetAllDebugLogsEnabled(!0)),
          (window.DebugLogDisableAll = () =>
            Tr.Get().SetAllDebugLogsEnabled(!1)),
          (window.DebugLogEnableBacktrace = () =>
            Tr.Get().SetIncludeBacktraceInLog(!0)),
          (window.DebugLogDisableBacktrace = () =>
            Tr.Get().SetIncludeBacktraceInLog(!1)),
          (window.DebugLogNames = () => Tr.Get().GetLogNames()),
          (window.DebugLogEnabled = (...r) => Tr.Get().PrintEnabledLogs(...r)),
          (window.EnableSteamConsole = (r = !0) =>
            Tr.Get().SetDebugLogEnabled("SteamClient", r)));
        var U = ((r) => (
            (r[(r.INVALID = 0)] = "INVALID"),
            (r[(r.OK = 1)] = "OK"),
            (r[(r.CANCEL = 2)] = "CANCEL"),
            (r[(r.SECONDARY = 3)] = "SECONDARY"),
            (r[(r.OPTIONS = 4)] = "OPTIONS"),
            (r[(r.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
            (r[(r.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
            (r[(r.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
            (r[(r.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
            (r[(r.DIR_UP = 9)] = "DIR_UP"),
            (r[(r.DIR_DOWN = 10)] = "DIR_DOWN"),
            (r[(r.DIR_LEFT = 11)] = "DIR_LEFT"),
            (r[(r.DIR_RIGHT = 12)] = "DIR_RIGHT"),
            (r[(r.SELECT = 13)] = "SELECT"),
            (r[(r.START = 14)] = "START"),
            (r[(r.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
            (r[(r.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
            (r[(r.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
            (r[(r.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
            (r[(r.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
            (r[(r.LPAD_CLICK = 20)] = "LPAD_CLICK"),
            (r[(r.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
            (r[(r.RPAD_CLICK = 22)] = "RPAD_CLICK"),
            (r[(r.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
            (r[(r.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
            (r[(r.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
            (r[(r.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
            (r[(r.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
            (r[(r.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU"),
            (r[(r.DUMMY_INPUT = 29)] = "DUMMY_INPUT"),
            r
          ))(U || {}),
          Fd = ((r) => (
            (r[(r.UNKNOWN = 0)] = "UNKNOWN"),
            (r[(r.GAMEPAD = 1)] = "GAMEPAD"),
            (r[(r.KEYBOARD_SIMULATOR = 2)] = "KEYBOARD_SIMULATOR"),
            (r[(r.MOUSE = 3)] = "MOUSE"),
            (r[(r.TOUCH = 4)] = "TOUCH"),
            (r[(r.LPAD = 5)] = "LPAD"),
            (r[(r.RPAD = 6)] = "RPAD"),
            r
          ))(Fd || {});
        function gJ(r) {
          return r === 1 || r === 2;
        }
        class fJ {
          m_OnGamepadDetectedCallbacks = new CCallbackList();
          m_ButtonDownCallbacks = new CCallbackList();
          m_ButtonUpCallbacks = new CCallbackList();
          m_AnalogCallbacks = new CCallbackList();
          m_NavigationTypeChangeCallbacks = new CCallbackList();
          m_eNavigationSourceType;
          m_fLastActiveTime;
          m_nLastActiveControllerIndex = -1;
          m_ButtonRepeatHandler = new CButtonRepeatStateManager({
            inputsThatRepeat: new Set([9, 10, 11, 12]),
            firstRepeatInterval_ms: 400,
            repeatInterval_ms: 50,
          });
          m_bGamepadDetected = !1;
          Init(e) {
            return { Unregister: () => {} };
          }
          RegisterForGamepadDetected(e) {
            return this.m_OnGamepadDetectedCallbacks.Register(e);
          }
          RegisterForGamepadButtonDown(e) {
            return this.m_ButtonDownCallbacks.Register(e);
          }
          RegisterForGamepadButtonUp(e) {
            return this.m_ButtonUpCallbacks.Register(e);
          }
          RegisterForAnalog(e) {
            return this.m_AnalogCallbacks.Register(e);
          }
          RegisterForNavigationTypeChange(e) {
            return this.m_NavigationTypeChangeCallbacks.Register(e);
          }
          SetSourceType(e) {
            this.m_eNavigationSourceType = e;
          }
          GetSourceType() {
            return this.m_eNavigationSourceType;
          }
          SetControllerActive(e) {
            ((this.m_nLastActiveControllerIndex = e),
              (this.m_fLastActiveTime = Date.now()));
          }
          GetActiveControllerIndex() {
            return this.m_nLastActiveControllerIndex;
          }
          GetActiveControllerTime() {
            return this.m_fLastActiveTime;
          }
          SetRepeatAllowed(e) {
            this.m_ButtonRepeatHandler.SetRepeatAllowed(e);
          }
          OnGamepadDetected() {
            (console.log("Gamepad detected"),
              (this.m_bGamepadDetected = !0),
              this.m_OnGamepadDetectedCallbacks.Dispatch());
          }
          OnButtonDown(e, t, n, a) {
            (t === void 0 && (t = -1),
              this.SetControllerActive(t),
              this.m_ButtonRepeatHandler.HandleInputButtonDown(
                e,
                () => this.DispatchButtonDown(e, !1, n, a),
                () => this.DispatchButtonDown(e, !0, n, a),
              ));
          }
          OnButtonUp(e, t) {
            (t === void 0 && (t = -1),
              this.SetControllerActive(t),
              this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
              this.m_ButtonUpCallbacks.Dispatch(
                e,
                this.m_eNavigationSourceType,
                this.m_nLastActiveControllerIndex,
              ));
          }
          DispatchButtonDown(e, t, n, a) {
            this.m_ButtonDownCallbacks.Dispatch(
              e,
              this.m_eNavigationSourceType,
              this.m_nLastActiveControllerIndex,
              t,
              n,
              a,
            );
          }
          OnAnalogPad(e, t, n, a) {
            (a === void 0 && (a = -1),
              this.SetControllerActive(a),
              this.m_AnalogCallbacks.Dispatch(
                e,
                this.m_nLastActiveControllerIndex,
                t,
                n,
              ));
          }
          OnNavigationTypeChanged(e) {
            this.m_NavigationTypeChangeCallbacks.Dispatch(e);
          }
        }
        function Ji(r) {
          return typeof r == "object" && r !== null && "value" in r;
        }
        function zd(r, e) {
          return Ji(r) && Ji(e)
            ? r.value === e.value &&
                !!r.bShowOnLeft == !!e.bShowOnLeft &&
                !!r.bShowOnFloatingVRFooter == !!e.bShowOnFloatingVRFooter
            : r === e;
        }
        function bJ(r) {
          return Ji(r) ? r.value : r;
        }
        var Hr = ((r) => (
          (r[(r.GAMEPAD = 0)] = "GAMEPAD"),
          (r[(r.KEYBOARD = 1)] = "KEYBOARD"),
          (r[(r.APPLICATION = 2)] = "APPLICATION"),
          (r[(r.BROWSER = 3)] = "BROWSER"),
          (r[(r.AUTOFOCUS = 4)] = "AUTOFOCUS"),
          r
        ))(Hr || {});
        function hJ(r) {
          return (typeof r == "object" && r?.type?.startsWith("vgp_")) ?? !1;
        }
        let Rd = {
          [U.OK]: "vgp_onok",
          [U.CANCEL]: "vgp_oncancel",
          [U.SECONDARY]: "vgp_onsecondaryaction",
          [U.OPTIONS]: "vgp_onoptions",
          [U.START]: "vgp_onmenu",
        };
        function Cr(r, e, t) {
          return (r.addEventListener(e, t), () => Od(r, e, t));
        }
        function Od(r, e, t) {
          r.removeEventListener(e, t);
        }
        function Sd(r, e) {
          return Cr(r, "vgp_onbuttondown", e);
        }
        function Ad(r, e) {
          return Cr(r, "vgp_onbuttonup", e);
        }
        function wo(r, e) {
          return Cr(r, "vgp_onok", jn(e));
        }
        function Wd(r, e) {
          return Cr(r, "vgp_oncancel", jn(e));
        }
        function Ld(r, e) {
          return Cr(r, "vgp_onsecondaryaction", jn(e));
        }
        function jd(r, e) {
          return Cr(r, "vgp_onoptions", jn(e));
        }
        function xd(r, e) {
          return Cr(r, "vgp_onmenu", jn(e));
        }
        function Bo(r, e) {
          return Cr(r, "vgp_ondirection", jn(e));
        }
        function Ud(r, e) {
          return Cr(r, "vgp_onfocus", e);
        }
        function To(r, e) {
          return Cr(r, "vgp_onblur", e);
        }
        function Pd(r, e) {
          return Cr(r, "vgp_requestfocus", jn(e));
        }
        function qs(r, e, t) {
          let n = r;
          if (!n || !n.ownerDocument || !n.ownerDocument.defaultView) return !0;
          let a = new n.ownerDocument.defaultView.CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: t,
          });
          return n.dispatchEvent(a);
        }
        function MJ(r, e) {
          const t = {
            button: e,
            source: ENavigationSourceType.GAMEPAD,
            is_repeat: !1,
          };
          (qs(r, "vgp_onbuttondown", t), qs(r, "vgp_onbuttonup", t));
        }
        function pJ(r) {
          const e = [
            EGamepadButton.DIR_UP,
            EGamepadButton.DIR_DOWN,
            EGamepadButton.DIR_LEFT,
            EGamepadButton.DIR_RIGHT,
          ];
          let t = !0,
            n = !1,
            a = Rd[r.detail.button];
          return (
            a
              ? ((n = !0), (t = qs(r.target, a, r.detail)))
              : e.indexOf(r.detail.button) !== -1 &&
                ((n = !0), (t = qs(r.target, "vgp_ondirection", r.detail))),
            { bUnhandled: t, bHadLogicalEventMapping: n }
          );
        }
        function jn(r) {
          return (e) => {
            r(e) !== !1 && (e.stopPropagation(), e.preventDefault());
          };
        }
        function Nd(r) {
          const {
              onOKActionDescription: e,
              onCancelActionDescription: t,
              onSecondaryActionDescription: n,
              onOptionsActionDescription: a,
              onMenuActionDescription: o,
              actionDescriptionMap: l,
            } = r,
            u = { ...l };
          return (
            e !== void 0 && (u[U.OK] = e),
            t !== void 0 && (u[U.CANCEL] = t),
            n !== void 0 && (u[U.SECONDARY] = n),
            a !== void 0 && (u[U.OPTIONS] = a),
            o !== void 0 && (u[U.START] = o),
            u
          );
        }
        function kJ(r, e, t, n) {
          React.useEffect(() => {
            const a = r?.current;
            if (!(!a || !t)) return Cr(a, e, t);
          }, [r, e, t]);
        }
        function yJ(r, e, t) {
          return useRefCallbackWithCleanup(
            (n) => {
              if (!(!n || !e)) return Cr(n, r, e);
            },
            [r, e],
          );
        }
        const Gd = new kn("GamepadEvents").Debug;
        function EJ(r) {
          const {
              gamepadEvents: e,
              actionDescriptions: t,
              props: n,
            } = ExpandGamepadEventProps(r),
            a = React.useRef(null);
          return (ei(e, a), jsx("div", { ...n, ref: a }));
        }
        function ei(r, e, t) {
          (t === void 0 &&
            (t = [
              r.onButtonDown,
              r.onButtonUp,
              r.onOKButton,
              r.onCancelButton,
              r.onSecondaryButton,
              r.onOptionsButton,
              r.onMenuButton,
              r.onGamepadDirection,
              r.onGamepadFocus,
              r.onGamepadBlur,
            ]),
            F.useEffect(() => {
              let n = e.current;
              const a = [];
              return (
                n &&
                  (r.onButtonDown && a.push(Sd(n, r.onButtonDown)),
                  r.onButtonUp && a.push(Ad(n, r.onButtonUp)),
                  r.onOKButton && a.push(wo(n, r.onOKButton)),
                  r.onCancelButton && a.push(Wd(n, r.onCancelButton)),
                  r.onSecondaryButton && a.push(Ld(n, r.onSecondaryButton)),
                  r.onOptionsButton && a.push(jd(n, r.onOptionsButton)),
                  r.onMenuButton && a.push(xd(n, r.onMenuButton)),
                  r.onGamepadDirection && a.push(Bo(n, r.onGamepadDirection)),
                  r.onGamepadFocus && a.push(Ud(n, r.onGamepadFocus)),
                  r.onGamepadBlur && a.push(To(n, r.onGamepadBlur))),
                () => a.forEach((o) => o())
              );
            }, t));
        }
        function yn(r) {
          return (r.stopPropagation(), !1);
        }
        function Dd(r, e, t) {
          const { onButtonDown: n, ...a } = r,
            o = F.useCallback(
              (u) => {
                (n && n(u),
                  Gd(
                    "Gamepad Event fired:",
                    u.detail.button,
                    ", handled:",
                    n != null,
                    ", propagation stopped:",
                    u.cancelBubble,
                  ),
                  !u.cancelBubble && t.OnRootButtonDown(u));
              },
              [n, t],
            );
          (ei(a, e),
            ei(
              {
                onButtonDown: o,
                onButtonUp: yn,
                onOKButton: yn,
                onCancelButton: yn,
                onSecondaryButton: yn,
                onOptionsButton: yn,
                onMenuButton: yn,
                onGamepadDirection: yn,
                onGamepadFocus: yn,
                onGamepadBlur: yn,
              },
              e,
              [o],
            ));
        }
        const Ci = new kn("FocusHistory"),
          vo = Ci.Debug,
          Rn = 0,
          Vd = 1,
          wJ = 2;
        class _r {
          m_root;
          constructor(e) {
            this.m_root = e;
          }
          static SerializeNavState(e, t = !0, n = !0) {
            return {
              root: _r.SerializeNavNode(e, t, n),
              bHadFocus: e.BFocusWithin() && e.Tree.BIsActiveWithinContext(),
            };
          }
          static SerializeNavNode(e, t = !0, n = !0) {
            let a;
            const [o, l] = e.GetChildren();
            o.length &&
              l != -1 &&
              t &&
              (a = o.map((g, b) => _r.SerializeNavNode(g, b == l || n, n)));
            const u = { rgChildren: a };
            return (
              e.NavKey && (u.sNavKey = e.NavKey),
              l != -1 && (u.iActiveChild = l),
              u
            );
          }
          static RestoreSerializedNavState(e, t, n = Rn) {
            const { root: a, bHadFocus: o } = t;
            e.Tree.Controller.RestoreHistoryTransaction(() => {
              (_r.RestoreSerializedNavNode(e, a),
                (n == Vd || (n == Rn && o)) && e.BTakeFocus(Hr.APPLICATION));
            });
          }
          static RestoreSerializedNavNode(e, t, n = 0) {
            const { sNavKey: a, iActiveChild: o = -1, rgChildren: l } = t;
            (a && Dr(a == e.NavKey, "navkey mismatch"), e.SetActiveChild(o));
            const u = Ci.IsDebugEnabled() ? `[${e.Tree.id}]${$d(n)}` : "";
            if (l && l.length) {
              const [g] = e.GetChildren();
              if (o != -1 && Ci.IsDebugEnabled()) {
                const B = l.length != g.length;
                vo(
                  `${u}Restoring node ${e.NavKey} which had active child ${o} of ${l.length}${B ? `- now ${g.length} children.` : ""}`,
                );
              }
              let b = new Map();
              g.forEach((B) => {
                B.NavKey && b.set(B.NavKey, B);
              });
              for (const B of l) {
                if (!B.sNavKey) continue;
                const z = b.get(B.sNavKey);
                z && _r.RestoreSerializedNavNode(z, B, n + 1);
              }
              if (o != -1 && l[o]?.sNavKey) {
                const B = b.get(l[o].sNavKey);
                (vo(
                  `${u}Restoring node ${e.NavKey}, child with focus: ${l[o].sNavKey} ${B === void 0 ? "MISSING!!" : ""}`,
                ),
                  B && e.SetActiveChild(g.indexOf(B)));
              }
              let f = 0,
                h = 0;
              for (; f < g.length && h < l.length;) {
                for (; f < g.length && g[f].NavKey;) f++;
                for (; h < l.length && l[h].sNavKey;) h++;
                if (f >= g.length || h >= l.length) break;
                (_r.RestoreSerializedNavNode(g[f], l[h], n + 1), f++, h++);
              }
            }
          }
        }
        function Id(r) {
          return _r.SerializeNavState(r, !0, !1);
        }
        function Hd(r, e, t = Rn) {
          return _r.RestoreSerializedNavState(r, e, t);
        }
        class Kd extends _r {
          m_rgHistory = [];
          PushState() {
            this.m_rgHistory.push(_r.SerializeNavState(this.m_root));
          }
          PopState(e = Rn) {
            this.m_rgHistory.length &&
              _r.RestoreSerializedNavState(
                this.m_root,
                this.m_rgHistory.pop(),
                e,
              );
          }
        }
        class Yd extends _r {
          m_mapHistory = new Map();
          SaveState(e) {
            this.m_mapHistory.set(e, _r.SerializeNavState(this.m_root));
          }
          RestoreState(e, t = Rn) {
            const n = this.m_mapHistory.get(e);
            return n
              ? (console.log(`Restoring history for state ${e}`),
                _r.RestoreSerializedNavState(this.m_root, n, t),
                !0)
              : !1;
          }
        }
        function $d(r) {
          if (r == 0) return "";
          let e = "";
          for (let t = 0; t < r; t++) e += "*";
          return ((e += " "), e);
        }
        function Zi(r) {
          return r != null && r.focus !== void 0;
        }
        function BJ(r) {
          if (!r.clientX && !r.clientY && !r.screenX && !r.screenY) return !0;
          if (r.relatedTarget) return !Fo(r.currentTarget, r.relatedTarget);
          {
            const e = r.currentTarget.getBoundingClientRect();
            return r.clientX <= e.left ||
              r.clientX >= e.right ||
              r.clientY <= e.top ||
              r.clientY >= e.bottom
              ? (console.log(`${r.clientX} <= ${e.left} || ${r.clientX} >= ${e.right} ||
				${r.clientY} <= ${e.top} || ${r.clientY} >= ${e.bottom}`),
                !0)
              : !1;
          }
        }
        function Fo(r, e) {
          let t = e;
          for (; t;) {
            if (
              (t.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                (t = t.parentNode.host),
              t == r)
            )
              return !0;
            t = t.parentElement;
          }
          return !1;
        }
        function TJ(r, e) {
          let t = e;
          for (; t;) if (((t = t.parentElement), t == r)) return !0;
          return !1;
        }
        function vJ(r) {
          const e = window.getSelection();
          if (!e) return !1;
          let t = 0;
          for (let n = 0; n < e.rangeCount; n++) {
            const a = e.getRangeAt(n);
            if (a.startOffset == a.endOffset) continue;
            const o = a.commonAncestorContainer;
            Fo(r, o) && t++;
          }
          return e.rangeCount > 0 && e.rangeCount == t;
        }
        function FJ(r, e) {
          let t = r.offsetTop;
          (r.offsetParent != e && (t -= e.offsetTop),
            t < e.scrollTop
              ? r.scrollIntoView(!0)
              : t + r.offsetHeight > e.scrollTop + e.offsetHeight &&
                r.scrollIntoView(!1));
        }
        function zJ(r, e, t) {
          let n = 0,
            a = 0;
          return (
            e < r.left ? (n = r.left - e) : e > r.right && (n = e - r.right),
            t < r.top ? (a = r.top - t) : t > r.bottom && (a = t - r.bottom),
            Math.sqrt(n * n + a * a)
          );
        }
        function _d(r, e) {
          let t = 0,
            n = 0;
          return (
            e.right < r.left
              ? (t = r.left - e.right)
              : e.left > r.right && (t = e.left - r.right),
            e.bottom < r.top
              ? (n = r.top - e.bottom)
              : e.top > r.bottom && (n = e.top - r.bottom),
            Math.sqrt(t * t + n * n)
          );
        }
        function RJ(r, e) {
          return {
            top: r.screenTop + e.top,
            bottom: r.screenTop + e.bottom,
            left: r.screenLeft + e.left,
            right: r.screenLeft + e.right,
          };
        }
        function OJ(r) {
          return r.right - r.left;
        }
        function SJ(r) {
          return r.bottom - r.top;
        }
        function AJ(r) {
          let e = 1,
            t = r;
          for (; t != null && t.tagName != "HTML";) {
            const n = getComputedStyle(t);
            if (n.zoom) {
              const a = Number.parseFloat(n.zoom);
              isNaN(a) || (e *= a);
            }
            t = t.parentElement;
          }
          return e;
        }
        function WJ(r) {
          let e;
          return (
            r &&
              Zi(r.currentTarget) &&
              (e = r.currentTarget.ownerDocument.defaultView),
            e
          );
        }
        function zo(r) {
          let e;
          return (r && (e = r.ownerDocument.defaultView), e);
        }
        function LJ(r) {
          return r.navigator.clipboard.readText();
        }
        function Xd(r) {
          let e = window.document;
          try {
            e = window.top.document;
          } catch {}
          const t = e.createElement("textarea");
          ((t.textContent = r),
            (t.style.position = "fixed"),
            e.body.appendChild(t),
            t.select());
          try {
            e.execCommand("copy");
          } catch (n) {
            console.warn("Copy to clipboard failed.", n);
          } finally {
            e.body.removeChild(t);
          }
        }
        function jJ(r) {
          const e = "steam://openurl/";
          (r.startsWith(e) && (r = r.slice(e.length)), Xd(r));
        }
        function xJ(r) {
          return !r ||
            r.clipboardData.files.length == 0 ||
            r.clipboardData.types.some(
              (t) =>
                (t == "text" || t.startsWith("text/")) && t !== "text/html",
            )
            ? null
            : r.clipboardData.files[0];
        }
        function Qd(r) {
          const e = r.ownerDocument;
          return (
            e.fullscreen ||
            e.webkitIsFullScreen ||
            e.mozFullScreen ||
            e.msFullscreenElement
          );
        }
        function Jd(r, e) {
          const t = r;
          t.requestFullscreen
            ? t.requestFullscreen()
            : t.webkitRequestFullscreen
              ? t.webkitRequestFullscreen()
              : e && e.webkitSetPresentationMode
                ? e.webkitSetPresentationMode("fullscreen")
                : t.mozRequestFullScreen
                  ? t.mozRequestFullScreen()
                  : t.msRequestFullscreen && t.msRequestFullscreen();
        }
        function Cd(r) {
          const e = r.ownerDocument;
          e.cancelFullscreen
            ? e.cancelFullscreen()
            : e.webkitCancelFullScreen
              ? e.webkitCancelFullScreen()
              : e.mozCancelFullScreen
                ? e.mozCancelFullScreen()
                : e.msExitFullscreen && e.msExitFullscreen();
        }
        function UJ(r) {
          Qd(r) ? Cd(r) : Jd(r);
        }
        function PJ(r) {
          return r.nodeName === "INPUT";
        }
        function NJ(r) {
          return r.nodeName === "TEXTAREA";
        }
        function GJ(r, e) {
          switch (r) {
            case "TEXTAREA":
              return !0;
            case "INPUT":
              switch (e) {
                case "date":
                case "datetime-local":
                case "datetime":
                case "email":
                case "month":
                case "number":
                case "password":
                case "search":
                case "tel":
                case "text":
                case "time":
                case "url":
                case "week":
                  return !0;
                default:
                  return !1;
              }
            default:
              return !1;
          }
        }
        function DJ(r) {
          "document" in globalThis && document.readyState == "loading"
            ? document.addEventListener("DOMContentLoaded", r)
            : r();
        }
        class VJ {
          m_nBufferPx;
          m_elParent;
          m_bNeedSort = !1;
          m_bOffsetsInvalidated = !1;
          m_rgChildren = [];
          m_nLastYMin;
          m_nLastYMax;
          constructor(e) {
            this.m_nBufferPx = e;
          }
          SetParent(e) {
            (this.m_elParent &&
              this.m_elParent.ownerDocument.defaultView?.removeEventListener(
                "resize",
                this.RecomputeVisibility,
              ),
              (this.m_elParent = e),
              this.m_elParent &&
                this.m_elParent.ownerDocument.defaultView?.addEventListener(
                  "resize",
                  this.RecomputeVisibility,
                ));
          }
          InvalidateOffsetsAndRecompute() {
            ((this.m_bOffsetsInvalidated = !0), this.RecomputeVisibility());
          }
          RecomputeVisibility = () => {
            const e = this.m_elParent.scrollTop - this.m_nBufferPx,
              t =
                this.m_elParent.scrollTop +
                this.m_elParent.clientHeight +
                this.m_nBufferPx;
            this.EnsureSort();
            for (const n of this.m_rgChildren)
              if (!(n.yOffset < e)) {
                if (n.yOffset > t) break;
                n.fnCallback(!0);
              }
            ((this.m_nLastYMin = e), (this.m_nLastYMax = t));
          };
          EnsureSort() {
            if (this.m_bOffsetsInvalidated) {
              for (let e = 0; e < this.m_rgChildren.length; e++)
                this.m_rgChildren[e].yOffset =
                  this.m_rgChildren[e].element.offsetTop;
              this.m_bOffsetsInvalidated = !1;
            }
            this.m_bNeedSort &&
              (this.m_rgChildren.sort((e, t) => e.yOffset - t.yOffset),
              (this.m_bNeedSort = !1));
          }
          RegisterChild(e, t) {
            (this.m_rgChildren.push({
              element: e,
              yOffset: e.offsetTop,
              fnCallback: t,
            }),
              (this.m_bNeedSort = !0),
              this.m_nLastYMin !== void 0 &&
                this.m_nLastYMax !== void 0 &&
                e.offsetTop >= this.m_nLastYMin &&
                e.offsetTop <= this.m_nLastYMax &&
                t(!0));
          }
          UnregisterChild(e) {
            ArrayUtils.FindAndRemoveWhere(
              this.m_rgChildren,
              (t) => t.element == e,
            );
          }
        }
        function IJ(r, e) {
          const t = r;
          return (
            (t.lastModifiedDate = new Date()),
            (t.name = e || Date.now().toString()),
            r
          );
        }
        function HJ(r, e, t) {
          let n = e.parentElement;
          for (; n && n !== r && !n.hasAttribute(t);) n = n.parentElement;
          return n || r;
        }
        function KJ(r, e) {
          const t = [],
            n = Array.prototype.slice.call(r.children).reverse();
          for (; n.length > 0;) {
            const a = n.pop();
            a.hasAttribute(e)
              ? t.push(a)
              : n.push(...Array.prototype.slice.call(a.children).reverse());
          }
          return t;
        }
        function Ro(r, e) {
          let t = r?.parentElement;
          for (; t;) {
            if (Zi(t)) {
              const n = window.getComputedStyle(t);
              if (
                n.position == "fixed" ||
                n.position == "sticky" ||
                ((!e || e == "x") &&
                  (n.overflowX == "scroll" || n.overflowX == "auto")) ||
                ((!e || e == "y") &&
                  (n.overflowY == "scroll" || n.overflowY == "auto"))
              )
                break;
            }
            t = t.parentElement;
          }
          return Zi(t) ? t : null;
        }
        function YJ(r, e) {
          const t = [];
          let n = r;
          for (; (n = Ro(n, e));) t.push(n);
          return t;
        }
        function $J(r, e) {
          let t = r;
          for (; t;) {
            if (e(t)) return t;
            t = t.parentElement;
          }
        }
        function ti(r, e) {
          if (!("ownerDocument" in r)) return !0;
          const t = r.ownerDocument.defaultView.getComputedStyle(r),
            n = e === "x" ? t.overflowX : t.overflowY;
          return n === "auto" || n === "scroll";
        }
        async function _J(r, e) {
          let t;
          const a = await new Promise((o) => {
            ((t = o), r.addEventListener(e, o));
          });
          return (r.removeEventListener(e, t), a);
        }
        function XJ() {
          return Zd(document);
        }
        function Zd(r) {
          const e = {};
          return (
            r.querySelectorAll('link[rel="stylesheet"]').forEach((n) => {
              e[n.href] = n;
            }),
            e
          );
        }
        function QJ(r, e) {
          Oo(r.document, e, !0);
        }
        function Oo(r, e, t) {
          const n = Object.assign({}, e),
            a = r.getElementsByTagName("head")[0],
            o = a.getElementsByTagName("link"),
            l = o.length;
          for (let g = 0; g < l; ++g) {
            const b = o[g];
            n[b.href] ? delete n[b.href] : t && b.parentNode?.removeChild(b);
          }
          const u = [];
          for (const g in n) {
            const b = n[g],
              f = r.createElement("link");
            for (let h = 0; h < b.attributes.length; h++) {
              const B = b.attributes.item(h);
              f.setAttribute(B.name, B.value);
            }
            u.push(f);
          }
          return (a.prepend(...u), u);
        }
        function JJ(r, e) {
          const t = (u) => decodeURI(u.split("?")[0]).replace(/\\/g, "/"),
            n = Object.keys(e).reduce((u, g) => ((u[t(g)] = [g, e[g]]), u), {}),
            o = r.getElementsByTagName("head")[0].getElementsByTagName("link");
          for (let u = 0; u < o.length; u++) {
            const g = o[u],
              b = n[t(g.href)];
            if (b) {
              const f = g,
                [h, B] = b;
              for (let z = 0; z < B.attributes.length; z++) {
                const S = B.attributes.item(z);
                f.setAttribute(S.name, S.value);
              }
              delete n[t(g.href)];
            }
          }
          const l = Object.keys(n).reduce((u, g) => {
            const [b, f] = n[g];
            return ((u[b] = f), u);
          }, {});
          Oo(r, l);
        }
        function CJ(r, e, t) {
          if (r.type === "childList") {
            for (let n = 0; n < r.addedNodes.length; n++) {
              const a = r.addedNodes[n];
              if (a.nodeType === Node.ELEMENT_NODE) {
                const o = a;
                o.parentElement && e(o);
              }
            }
            for (let n = 0; n < r.removedNodes.length; n++) {
              const a = r.removedNodes[n];
              a.nodeType === Node.ELEMENT_NODE && t?.(a);
            }
          }
        }
        function ZJ(r, e) {
          let t = r ?? null;
          for (; t && !t.contains(e);) t = t.parentElement;
          return t;
        }
        function qJ(r, e) {
          let t = r ?? null;
          for (; t && !t.contains(e);) t = t.parentNode;
          return t;
        }
        const So =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        function eC(r) {
          return r.querySelector(So);
        }
        function tC(r) {
          return [...r.querySelectorAll(So)];
        }
        const xn = { x: "y", y: "x" };
        function rC() {
          return { x: 0, y: 0 };
        }
        function qd() {
          return { x: 0, y: 0 };
        }
        function Ao(r, e) {
          return r.x * e.x + r.y * e.y;
        }
        function em(r, e) {
          return { x: e.x - r.x, y: e.y - r.y };
        }
        function nC(r, e) {
          return { x: r.x + e.x, y: r.y + e.y };
        }
        function sC(r, e) {
          const t = em(r, e);
          return Math.sqrt(Ao(t, t));
        }
        function tm(r, e) {
          return { x: r.x * e, y: r.y * e };
        }
        function iC(r) {
          const e = Math.sqrt(Ao(r, r));
          return e === 0 ? qd() : tm(r, 1 / e);
        }
        function Wo(r) {
          return (r.min + r.max) / 2;
        }
        function aC(r, e) {
          return {
            min: r.min < e.min ? r.min : e.min,
            max: r.max > e.max ? r.max : e.max,
          };
        }
        function oC(r, e) {
          return e >= r.min && e <= r.max;
        }
        function Lo(r, e) {
          return !(r.max < e.min || e.max < r.min);
        }
        function cC(r) {
          return { x: Wo(r.x), y: Wo(r.y) };
        }
        function lC(r, e) {
          return Lo(r.x, e.x) && Lo(r.y, e.y);
        }
        function rm(r, e, t) {
          return r == null || e == null
            ? r === e
            : typeof r != "object" ||
                typeof e != "object" ||
                Object.keys(r).length !== Object.keys(e).length
              ? !1
              : ((t = t ?? ((n, a) => n === a)),
                Object.keys(r).every(
                  (n) => e.hasOwnProperty(n) && t(r[n], e[n]),
                ));
        }
        function jo(r, e, t) {
          const n = [],
            [a, o] = r.GetChildren(),
            l = r.GetActiveChild();
          let u;
          const g = l ? l.Element?.getBoundingClientRect() : null;
          if (l) {
            const h = Po(l, e, t);
            if (
              h &&
              !h.offScreen &&
              ((u = xo(l, h, h.overlap, t)), u && !u.visibility.offScreen)
            )
              return u;
            h && n.push({ child: l, visibility: h });
          }
          const b = t || g;
          for (let h = 0; h < a.length; h++) {
            const B = a[h];
            if (B == l) continue;
            const z = Po(B, e, b ?? void 0);
            z && n.push({ child: B, visibility: z });
          }
          n.sort(Uo);
          let f;
          for (const h of n) {
            const { child: B, visibility: z } = h;
            if (
              z.offScreen &&
              f &&
              (!f.visibility.offScreen ||
                (z.distance && z.distance > f.visibility.distance))
            )
              break;
            const S = B == l ? u : xo(B, z, z.overlap || e, b ?? void 0);
            S && (!f || Uo(S, f) < 0) && (f = S);
          }
          return f;
        }
        function xo(r, e, t, n) {
          switch (r.GetFocusable()) {
            case "none":
              return;
            case "children":
              return jo(r, e.overlap || t, n);
            case "self":
              return { child: r, visibility: e };
          }
        }
        function Uo(r, e) {
          const t = r.visibility,
            n = e.visibility;
          return t.offScreen
            ? n.offScreen
              ? t.distance - n.distance
              : 1
            : n.offScreen
              ? -1
              : t.distance - n.distance;
        }
        function Po(r, e, t) {
          const n = r.Element?.getBoundingClientRect(),
            a = r.GetFocusable();
          let o;
          if (a == "none" || !n || !e) return null;
          if (a == "self") {
            if (
              n.top < e.top ||
              n.right > e.right ||
              n.bottom > e.bottom ||
              n.left < e.left
            ) {
              const u = n.top + n.height / 2,
                g = n.left + n.width / 2;
              if (u < e.top) return { offScreen: "top", distance: e.top - u };
              if (g > e.right)
                return { offScreen: "right", distance: g - e.right };
              if (u > e.bottom)
                return { offScreen: "bottom", distance: u - e.bottom };
              if (g < e.left)
                return { offScreen: "left", distance: e.left - g };
            }
            t && (o = gd(n, t));
          } else if (a == "children") {
            const u = r.Element;
            if (!u) return null;
            if (u.scrollHeight > n.height || u.scrollWidth > n.width) {
              const g = u.ownerDocument.defaultView.getComputedStyle(u);
              if (g.overflowX == "visible" || g.overflowY == "visible")
                return { overlap: e };
            }
            if (n.bottom < e.top)
              return { offScreen: "top", distance: e.top - n.bottom };
            if (n.left > e.right)
              return { offScreen: "right", distance: n.left - e.right };
            if (n.top > e.bottom)
              return { offScreen: "bottom", distance: n.top - e.bottom };
            if (n.right < e.left)
              return { offScreen: "left", distance: e.left - n.right };
          }
          return {
            overlap: {
              top: Math.max(n.top, e.top),
              right: Math.min(n.right, e.right),
              bottom: Math.min(n.bottom, e.bottom),
              left: Math.max(n.left, e.left),
            },
            distance: o,
          };
        }
        class uC {
          m_nTargetX = 0;
          m_nTargetY = 0;
          GetBoundingRectAdjustedForScroll(e) {
            const t = e.getBoundingClientRect(),
              n = this.m_nTargetX - window.scrollX,
              a = this.m_nTargetY - window.scrollY;
            return {
              top: t.top + a,
              right: t.right + n,
              bottom: t.bottom + a,
              left: t.left + n,
            };
          }
          GetLagDistance(e) {
            return e == "x"
              ? this.m_nTargetX - window.scrollX
              : e == "y"
                ? this.m_nTargetY - window.scrollY
                : NaN;
          }
        }
        function dC(r, e) {
          return (
            (r = Math.ceil(r)),
            (e = Math.floor(e)),
            Math.floor(Math.random() * (e - r + 1)) + r
          );
        }
        function Fs(r, e, t) {
          return r == null || isNaN(r) ? r : Math.max(e, Math.min(t, r));
        }
        function mC(r, e, t) {
          return r == null || isNaN(r) ? !1 : r >= e && r <= t;
        }
        function gC(r, e) {
          return r == null || isNaN(r) || e == null
            ? !1
            : r >= 0 && r < e.length;
        }
        function fC(r, e, t, n, a) {
          return n + ((a - n) * (r - e)) / (t - e);
        }
        function bC(r, e, t, n, a) {
          return Fs(
            n + ((a - n) * (r - e)) / (t - e),
            Math.min(n, a),
            Math.max(n, a),
          );
        }
        function hC(r) {
          if (!r) return !1;
          for (let e = 0; e < r.length; e++) {
            const t = r.charCodeAt(e);
            if (t < 48 || t > 57) return !1;
          }
          return !0;
        }
        function MC(r) {
          if (!r) return !1;
          for (let e = 0; e < r.length; e++) {
            const t = r.charCodeAt(e);
            if (
              !(t >= 48 && t <= 57) &&
              !(t >= 97 && t <= 102) &&
              !(t >= 65 && t <= 70)
            )
              return !1;
          }
          return !0;
        }
        function pC(r) {
          if (!/^-?\d+$/.test(r)) return !1;
          const t = BigInt("-9223372036854775808"),
            n = BigInt("9223372036854775807");
          try {
            const a = BigInt(r);
            return a >= t && a <= n;
          } catch {
            return !1;
          }
        }
        function kC(r, e, t, n) {
          let a = t / r,
            o = n / e,
            l = Math.min(a, o);
          return [r * l, e * l];
        }
        class No {
          m_options;
          m_msStart;
          m_msEnd;
          m_bActive = !1;
          m_fnBoundAnimationFunc = void 0;
          m_window;
          constructor(e, t) {
            ((this.m_window = e), (this.m_options = { timing: "sine", ...t }));
          }
          Start() {
            ((this.m_msStart = performance.now()),
              (this.m_msEnd = this.m_msStart + this.m_options.msDuration));
            let e;
            switch (this.m_options.timing) {
              case "linear":
                e = function (t) {
                  return t;
                };
                break;
              case "cubic-in-out":
                e = function (t) {
                  return t < 0.5
                    ? 4 * t * t * t
                    : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                };
                break;
              default:
                e = function (t) {
                  return 0.5 - Math.cos(t * Math.PI) / 2;
                };
                break;
            }
            ((this.m_bActive = !0),
              (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
              this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc));
          }
          BIsActive() {
            return this.m_bActive;
          }
          End() {
            if (this.m_bActive) {
              try {
                this.Update(1);
              } catch {}
              (this.ClearInterval(), this.FireOnComplete());
            }
          }
          FireOnComplete() {
            this.m_options.onComplete && this.m_options.onComplete();
          }
          Cancel() {
            this.m_bActive = !1;
          }
          OnInterval(e) {
            if (!this.m_bActive) return;
            let t = performance.now() - this.m_msStart,
              n = !1;
            if (t >= this.m_options.msDuration) {
              this.End();
              return;
            }
            let a = t / this.m_options.msDuration;
            try {
              this.Update(e(a));
            } catch {}
            this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
          }
          ClearInterval() {
            this.m_bActive = !1;
          }
        }
        class nm extends No {
          m_fnCallback;
          constructor(e, t, n) {
            (super(e, t), (this.m_fnCallback = n));
          }
          Update(e) {
            this.m_fnCallback(e);
          }
        }
        class sm extends No {
          m_object;
          m_propTargets;
          m_props = {};
          constructor(e, t, n) {
            (super("ownerDocument" in e ? zo(e) : e, n),
              (this.m_object = e),
              (this.m_propTargets = t));
          }
          Start() {
            this.m_props = {};
            for (let e in this.m_propTargets) {
              let t = parseFloat(this.m_object[e]) || 0,
                n = this.m_propTargets[e];
              t != n && (this.m_props[e] = { start: t, end: n });
            }
            super.Start();
          }
          Update(e) {
            for (let t in this.m_props) {
              let n = this.m_props[t],
                a = n.start + (n.end - n.start) * e;
              this.m_object[t] = a;
            }
          }
        }
        var im = Object.defineProperty,
          am = Object.getOwnPropertyDescriptor,
          om = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? am(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && im(e, t, a), a);
          };
        const rn = new kn("ScrollSnap").Debug;
        let Go = !1;
        function yC(r) {
          Go = r;
        }
        const EC = 1.4;
        let qi;
        const cm = 500;
        function lm(r, e, t, n, a) {
          const o = r.Element;
          if (!o) return;
          let l = [
            { node: r, eScrollType: r.m_Properties?.scrollIntoViewType },
          ];
          for (let u = r.Parent; u; u = u.Parent) {
            const g = u.m_Properties?.scrollIntoViewWhenChildFocused,
              b = u.m_Properties?.scrollIntoViewType;
            if (g) {
              const f = { node: u, eScrollType: b };
              g === "force" ? (l = [f]) : l.push(f);
            }
            if (b !== void 0)
              for (
                let f = l.length - 1;
                f >= 0 && l[f].eScrollType === void 0;
                f--
              )
                l[f].eScrollType = b;
          }
          for (; l.length;) {
            let { node: u, eScrollType: g } = l.pop(),
              b = l.length == 0;
            if (
              (g === void 0 && (Go ? (g = Rs.NoTransform) : (g = Rs.Standard)),
              u?.m_Properties?.fnScrollIntoViewHandler &&
                u.m_Properties.fnScrollIntoViewHandler(r, e, u) !== !1)
            )
              continue;
            const f = u.m_element,
              h = g == Rs.NoTransform || g == Rs.NoTransformSparseContent || !b;
            if (!e && t !== Hr.GAMEPAD)
              (rn("No previous element for scrolling, will jump"),
                h
                  ? ta(o, f, "auto")
                  : (rn(
                      "Scrolling Into View ('auto' via browser scrollIntoView):",
                      f,
                    ),
                    f?.scrollIntoView({
                      behavior: "auto",
                      block: "nearest",
                      inline: "nearest",
                    })));
            else {
              const B = h ? ri(f) : f.getBoundingClientRect(),
                z = f.ownerDocument.defaultView.innerHeight,
                S = 40,
                A = a ? S : Math.max(z * 0.4, S);
              let N = !1;
              const Gr = qi && performance.now() - qi < cm;
              (Gr || B.bottom < -A || B.top > z + A) &&
                ((N = !0),
                Gr ||
                  rn(
                    `Disabling smooth scrolling, ${B.bottom} < ${-A}, ${B.top} > ${z} + ${A} `,
                  ));
              let O = N ? "auto" : "smooth";
              (N && (qi = performance.now()),
                r.Tree.Controller.BIsRestoringHistory() && (O = "auto"),
                h
                  ? ta(o, f, O)
                  : (rn(
                      `Scrolling Into View ('${O}' via browser scrollIntoView):`,
                      f,
                    ),
                    f.scrollIntoView({ behavior: O, block: "nearest" })));
            }
          }
          um(r, n);
        }
        function um(r, e) {
          const t = Os(e);
          if (!t) return;
          let n = null;
          for (let a = r; a; a = a.GetNavParentCrossingTrees())
            a.m_Properties?.scrollRegionToStartOrEnd && (n = a);
          if (n)
            for (
              let a = r;
              a &&
              !(
                a.BHasNavTargetInDirection(e, !0) ||
                (a != r &&
                  a.Element &&
                  a.m_Properties?.scrollRegionToStartOrEnd &&
                  dm(a.Element, e, t),
                a == n)
              );
              a = a.GetNavParentCrossingTrees()
            );
        }
        function dm(r, e, t) {
          let n = r,
            a = n.ownerDocument;
          if (
            (n == a.body && a.defaultView && !ti(n, t) && (n = a.defaultView),
            !ti(n, t))
          )
            return;
          const o = zs(n);
          if (t == "y") {
            const l = e == U.DIR_DOWN ? o.MaxScrollTop() : 0;
            o.scrollTo({ top: l, behavior: "smooth" });
          } else {
            const l = e == U.DIR_RIGHT ? o.MaxScrollLeft() : 0;
            o.scrollTo({ left: l, behavior: "smooth" });
          }
        }
        function ri(r) {
          if (!r) return { left: 0, top: 0, right: 0, bottom: 0 };
          if (!("ownerDocument" in r))
            return {
              left: 0,
              right: r.innerWidth,
              top: 0,
              bottom: r.innerHeight,
            };
          let e = 0,
            t = 0,
            n = r;
          for (; n;) {
            if ("ownerDocument" in n) {
              const a = window.getComputedStyle(n);
              if (a.position === "fixed" || a.position === "sticky") break;
            }
            ((e += n.offsetTop), (t += n.offsetLeft), (n = n.offsetParent));
          }
          for (n = r?.parentElement; n;) {
            const { scrollTop: a, scrollLeft: o } = bm(n);
            if (((e -= a), (t -= o), "ownerDocument" in n)) {
              const l = window.getComputedStyle(n);
              if (l.position === "fixed" || l.position === "sticky") break;
            }
            n = n.parentElement;
          }
          return {
            left: t,
            top: e,
            right: t + r.offsetWidth,
            bottom: e + r.offsetHeight,
          };
        }
        function ea(r, e) {
          return e == "x"
            ? [r.left, r.right, r.right - r.left]
            : [r.top, r.bottom, r.bottom - r.top];
        }
        function Do(r, e, t, n) {
          let [a, o, l] = ea(r, n),
            [u, g, b] = ea(e, n),
            [f, h] = ea(t, n);
          if (a < u && o > g) return 0;
          const B = a - f,
            z = o + h,
            S = l > b;
          return (B < u && !S) || (z > g && S)
            ? B - u
            : (B < u && S) || (z > g && !S)
              ? z - g
              : 0;
        }
        function On(r) {
          return r == "auto"
            ? 0
            : r.endsWith("px")
              ? parseInt(r)
              : (console.log("Unsupported length", r), 0);
        }
        function mm(r) {
          let e;
          return (
            "ownerDocument" in r
              ? (e = r.ownerDocument.defaultView.getComputedStyle(r))
              : (e = r.document.defaultView.getComputedStyle(
                  window.document.documentElement,
                )),
            {
              left: On(e.scrollPaddingLeft),
              right: On(e.scrollPaddingRight),
              top: On(e.scrollPaddingTop),
              bottom: On(e.scrollPaddingBottom),
            }
          );
        }
        function gm(r) {
          if (!("ownerDocument" in r))
            return { left: 0, right: 0, top: 0, bottom: 0 };
          const e = r.ownerDocument.defaultView.getComputedStyle(r);
          return {
            left: On(e.scrollMarginLeft),
            right: On(e.scrollMarginRight),
            top: On(e.scrollMarginTop),
            bottom: On(e.scrollMarginBottom),
          };
        }
        function fm(r, e) {
          let t = mm(r);
          return {
            left: Math.max(0, e.left + t.left),
            right: Math.max(0, e.right - t.right),
            top: Math.max(0, e.top + t.top),
            bottom: Math.max(0, e.bottom - t.bottom),
          };
        }
        function ni(r) {
          return r > -1 && r < 1;
        }
        function ta(r, e, t, n, a) {
          (rn(
            "----------------------------------------------------------------------------------",
          ),
            rn("Scrolling Into View (NoTransform):", e));
          let o = [],
            l = e,
            u = ri(e),
            g = a ?? Number.MAX_VALUE;
          for (; l;) {
            let f = Ro(l);
            f || (f = zo(l));
            let h = gm(l),
              B = ri(f),
              z = fm(f, B),
              S = zs(f),
              A = { element: f, left: 0, top: 0 };
            if (
              (rn(
                "Checking scroll div",
                f,
                `scroll y:${S.scrollTop} of ${S.MaxScrollTop()}, x:${S.scrollLeft} of ${S.MaxScrollLeft()}, adjusted =>`,
                z,
                "target => ",
                u,
              ),
              (!n || n == "y") &&
                ti(f, "y") &&
                ((A.top = Do(u, z, h, "y")),
                (A.top = Fs(
                  A.top,
                  -S.scrollTop,
                  S.MaxScrollTop() - S.scrollTop,
                )),
                a &&
                  ((A.top =
                    Math.min(g, Math.abs(A.top)) * (A.top < 0 ? -1 : 1)),
                  (g -= Math.abs(A.top))),
                rn(`- checked y: ${A.top}`)),
              (!n || n == "x") &&
                ti(f, "x") &&
                ((A.left = Do(u, z, h, "x")),
                (A.left = Fs(
                  A.left,
                  -S.scrollLeft,
                  S.MaxScrollLeft() - S.scrollLeft,
                )),
                a &&
                  ((A.left =
                    Math.min(g, Math.abs(A.left)) * (A.left < 0 ? -1 : 1)),
                  (g -= Math.abs(A.left))),
                rn(`- checked x: ${A.left}`)),
              o.push(A),
              (a && !g) || !("ownerDocument" in f))
            )
              break;
            const N = window.getComputedStyle(f);
            if (N.position === "fixed" || N.position === "sticky") break;
            ((l = f),
              (u = {
                top: u.top - A.top,
                right: u.right - A.left,
                bottom: u.bottom - A.top,
                left: u.left - A.left,
              }));
          }
          let b = !1;
          for (let f of o) {
            if (ni(f.left) && ni(f.top)) continue;
            let h = zs(f.element),
              B = h.scrollTop + f.top,
              z = h.scrollLeft + f.left;
            ((z = Fs(z, 0, h.MaxScrollLeft())),
              (B = Fs(B, 0, h.MaxScrollTop())),
              !(ni(h.scrollLeft - z) && ni(h.scrollTop - B)) &&
                (h.scrollTo({ left: z, top: B, behavior: t }),
                b || (rn("Scrolling:"), (b = !0)),
                rn(
                  `- ${f.top},${f.left} => ${B}, ${z}, behavior: ${t}`,
                  f.element,
                )));
          }
        }
        function wC(r, e) {
          const { top: t, left: n, behavior: a } = e,
            o = zs(r);
          o.scrollTo({
            top: o.scrollTop + (t ?? 0),
            left: o.scrollLeft + (n ?? 0),
            behavior: a,
          });
        }
        function BC(r, e) {
          zs(r).scrollTo(e);
        }
        class Vo {
          m_element;
          m_fnOriginalScrollTo;
          m_window;
          m_scrollTopTarget = void 0;
          m_scrollLeftTarget = void 0;
          m_animation = void 0;
          constructor(e) {
            "ownerDocument" in e
              ? ((this.m_element = e),
                (this.m_fnOriginalScrollTo = e.scrollTo),
                (this.m_element.scrollTo = (t, n) => {
                  typeof t == "number"
                    ? this.scrollTo({ left: t, top: n })
                    : this.scrollTo(t);
                }))
              : ((this.m_window = e),
                (this.m_element = e.document.documentElement));
          }
          ResetScrollState() {
            ((this.m_scrollTopTarget = void 0),
              (this.m_scrollLeftTarget = void 0),
              this.m_window || (this.m_element.style.scrollSnapType = ""));
          }
          scrollTo(e) {
            if (e?.behavior != "smooth")
              (this.m_animation &&
                (this.m_animation.Cancel(), (this.m_animation = void 0)),
                this.m_window
                  ? this.m_window.scrollTo(e)
                  : this.m_fnOriginalScrollTo?.apply(this.m_element, [e]),
                this.ResetScrollState());
            else {
              const t = e.left ?? this.scrollLeft,
                n = e.top ?? this.scrollTop;
              let a = "sine";
              if (
                (this.m_animation &&
                  (this.m_animation.Cancel(), (a = "linear")),
                Math.max(
                  Math.abs(this.currentScrollTop - n),
                  Math.abs(this.currentScrollLeft - t),
                ) > 0)
              ) {
                const u = {
                  msDuration: 200,
                  timing: a,
                  onComplete: this.ResetScrollState,
                };
                if (this.m_window) {
                  const g = this.currentScrollLeft,
                    b = this.currentScrollTop;
                  this.m_animation = new nm(this.m_window, u, (f) => {
                    this.m_window?.scrollTo({
                      left: g + (t - g) * f,
                      top: b + (n - b) * f,
                      behavior: "auto",
                    });
                  });
                } else
                  ((this.m_element.style.scrollSnapType = "initial"),
                    (this.m_animation = new sm(
                      this.m_element,
                      { scrollTop: n, scrollLeft: t },
                      u,
                    )));
                ((this.m_scrollLeftTarget = t),
                  (this.m_scrollTopTarget = n),
                  this.m_animation.Start());
              }
            }
          }
          get clientWidth() {
            return this.m_window
              ? this.m_window.innerWidth
              : this.m_element.clientWidth;
          }
          get clientHeight() {
            return this.m_window
              ? this.m_window.innerHeight
              : this.m_element.clientHeight;
          }
          get currentScrollLeft() {
            return this.m_window
              ? this.m_window.scrollX
              : this.m_element.scrollLeft;
          }
          get currentScrollTop() {
            return this.m_window
              ? this.m_window.scrollY
              : this.m_element.scrollTop;
          }
          get scrollLeft() {
            return this.m_scrollLeftTarget ?? this.currentScrollLeft;
          }
          get scrollTop() {
            return this.m_scrollTopTarget ?? this.currentScrollTop;
          }
          get scrollWidth() {
            return this.m_element.scrollWidth;
          }
          get scrollHeight() {
            return this.m_element.scrollHeight;
          }
          MaxScrollTop() {
            return this.scrollHeight - this.clientHeight;
          }
          MaxScrollLeft() {
            return this.scrollWidth - this.clientWidth;
          }
        }
        om([R], Vo.prototype, "ResetScrollState", 1);
        const ra = new WeakMap();
        function zs(r) {
          let e = ra.get(r);
          return (e || ((e = new Vo(r)), ra.set(r, e)), e);
        }
        function bm(r) {
          const e = ra.get(r);
          return e
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
        }
        var hm = Object.defineProperty,
          Mm = Object.getOwnPropertyDescriptor,
          na = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Mm(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && hm(e, t, a), a);
          };
        const Io = new kn("FocusNavigationMovement"),
          En = Io.Debug;
        var ue = ((r) => (
            (r[(r.NONE = 0)] = "NONE"),
            (r[(r.COLUMN = 1)] = "COLUMN"),
            (r[(r.ROW = 2)] = "ROW"),
            (r[(r.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
            (r[(r.ROW_REVERSE = 4)] = "ROW_REVERSE"),
            (r[(r.GRID = 5)] = "GRID"),
            (r[(r.GEOMETRIC = 6)] = "GEOMETRIC"),
            r
          ))(ue || {}),
          Ho = ((r) => (
            (r[(r.FIRST = 0)] = "FIRST"),
            (r[(r.LAST = 1)] = "LAST"),
            (r[(r.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (r[(r.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (r[(r.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD"),
            r
          ))(Ho || {}),
          Rs = ((r) => (
            (r[(r.Standard = 0)] = "Standard"),
            (r[(r.NoTransform = 1)] = "NoTransform"),
            (r[(r.NoTransformSparseContent = 2)] = "NoTransformSparseContent"),
            r
          ))(Rs || {}),
          pm = ((r) => (
            (r[(r.INVALID = 0)] = "INVALID"),
            (r[(r.FORWARD = 1)] = "FORWARD"),
            (r[(r.BACKWARD = 2)] = "BACKWARD"),
            r
          ))(pm || {});
        const sa = class sc {
          m_Tree;
          m_Parent;
          m_rgChildren = [];
          m_ActiveChild;
          m_iLastActiveChildIndex = -1;
          m_Properties;
          m_element;
          m_FocusRing;
          m_bChildrenSorted = !1;
          m_bAutoFocusChild = !1;
          m_bMounted = !1;
          m_nDepth;
          m_Focused = $a(!1);
          m_FocusWithin = $a(!1);
          m_ActionDescriptionsChangedCallbackList = new Gn();
          m_FocusableIfEmptyAncestor = null;
          m_rgNavigationHandlers = [];
          m_rgFocusHandlers = [];
          constructor(e, t, n) {
            ((this.m_Tree = e),
              (this.m_Parent = t),
              (this.m_FocusRing = n),
              (this.m_nDepth = t ? t.m_nDepth + 1 : 0));
          }
          CreateHandle() {
            return new km(this);
          }
          get Tree() {
            return this.m_Tree;
          }
          get NavKey() {
            if (this.m_Properties?.navKey) return this.m_Properties.navKey;
          }
          get Element() {
            return this.m_element;
          }
          get Parent() {
            return this.m_Parent;
          }
          GetNavParentCrossingTrees() {
            return this.m_Parent
              ? this.m_Parent
              : this.m_Tree.GetParentEmbeddedNavTree() && this.Element
                ? (this.Element.__nav_wrapper ?? null)
                : null;
          }
          GetWrappedTree() {
            return null;
          }
          SetProperties(e) {
            const t = !rm(
                this.m_Properties?.actionDescriptionMap,
                e?.actionDescriptionMap,
                zd,
              ),
              n = this.m_Properties?.focusableIfEmpty,
              a = this.m_Properties?.noFocusRing;
            ((this.m_Properties = e || {}),
              t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
              this.m_Properties.focusableIfEmpty && !n
                ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
                : !this.m_Properties.focusableIfEmpty &&
                  n &&
                  this.PropagateFocusableIfEmptyAncestorToDescendants(
                    this.m_FocusableIfEmptyAncestor,
                  ),
              this.m_Properties.noFocusRing && !a && this.BHasFocus()
                ? this.m_FocusRing?.OnBlur(Hr.APPLICATION, this, this)
                : !this.m_Properties.noFocusRing &&
                  a &&
                  this.BHasFocus() &&
                  this.m_FocusRing?.OnFocus(Hr.APPLICATION, this, this),
              this.m_element && this.RegisterDOMEvents());
          }
          BWantsAutoFocus() {
            return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
          }
          BWantsPreferredFocus() {
            return this.m_Properties?.preferredFocus;
          }
          BWantsFocusRing() {
            return (
              !this.m_Properties?.noFocusRing ||
              this.m_Tree.Controller.GetShowDebugFocusRing().Value
            );
          }
          GetBoundingRect() {
            return this.m_element?.getBoundingClientRect();
          }
          GetElementForFocusRingMeasure() {
            const e = this.m_element;
            return this.m_Properties?.focusRingSizeElementID
              ? (e?.ownerDocument?.getElementById(
                  this.m_Properties.focusRingSizeElementID,
                ) ?? e)
              : e;
          }
          GetBoundingRectForFocusRing() {
            return this.GetElementForFocusRingMeasure()?.getBoundingClientRect();
          }
          GetBorderRadiusForFocusRing() {
            if (!this.m_Properties?.focusRingHasBorderRadius) return;
            const e = this.GetElementForFocusRingMeasure();
            if (!e) return;
            const t = e.ownerDocument?.defaultView?.getComputedStyle(e);
            if (t)
              return {
                borderTopLeftRadius: t.borderTopLeftRadius,
                borderTopRightRadius: t.borderTopRightRadius,
                borderBottomRightRadius: t.borderBottomRightRadius,
                borderBottomLeftRadius: t.borderBottomLeftRadius,
              };
          }
          SetHasFocus(e) {
            this.m_Focused.Set(e);
          }
          SetFocusWithin(e) {
            this.m_FocusWithin.Set(e) &&
              this.m_Properties?.onFocusWithin &&
              this.m_Properties.onFocusWithin(e);
          }
          get SubscribableHasFocus() {
            return this.m_Focused;
          }
          BHasFocus() {
            return this.m_Focused.Value;
          }
          get SubscribableFocusWithin() {
            return this.m_FocusWithin;
          }
          BFocusWithin() {
            return this.m_FocusWithin.Value;
          }
          ForceMeasureFocusRing() {
            this.m_FocusRing?.OnForceMeasureFocusRing();
          }
          get ActionDescriptionChangedCallbackList() {
            return this.m_ActionDescriptionsChangedCallbackList;
          }
          GetActiveActionDescriptions() {
            return this.BuildConsolidatedActionDescriptionMap({});
          }
          BuildConsolidatedActionDescriptionMap(e) {
            const t = this.m_Properties?.actionDescriptionMap;
            if (t)
              for (const n in t) {
                const a = n;
                e[a] === void 0 && (e[a] = t[a]);
              }
            return this.m_Parent
              ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
              : this.m_Tree.GetParentEmbeddedNavTree()
                ? this.m_Tree
                    .GetParentEmbeddedNavTree()
                    .Root.BuildConsolidatedActionDescriptionMap(e)
                : e;
          }
          AddChild(e) {
            (this.m_rgChildren.push(e),
              (this.m_bChildrenSorted = !1),
              this.m_element && this.RegisterDOMEvents(),
              this.m_Properties?.focusableIfEmpty
                ? e.SetFocusableIfEmptyAncestor(this)
                : this.m_FocusableIfEmptyAncestor &&
                  e.SetFocusableIfEmptyAncestor(
                    this.m_FocusableIfEmptyAncestor,
                  ),
              this.m_bMounted &&
                e.BFocusWithin() &&
                (Dr(
                  !this.m_ActiveChild && this.BFocusWithin(),
                  "Invalid focus state in AddChild",
                ),
                this.SetActiveChild(this.m_rgChildren.length - 1)));
          }
          OnMount(e) {
            ((this.m_element = e),
              this.m_Parent
                ? this.m_Parent.AddChild(this)
                : Dr(
                    this == this.m_Tree.Root,
                    "Only root should have no parent",
                  ),
              (this.m_bMounted = !0),
              this.RegisterDOMEvents());
            const t =
                this.m_FocusableIfEmptyAncestor &&
                this.m_FocusableIfEmptyAncestor.BHasFocus(),
              n = this.m_Properties?.autoFocus || t;
            if (this.BWantsAutoFocus() || n) {
              let a = -1;
              (this.m_rgChildren.length &&
                (this.EnsureChildrenSorted(),
                (a = this.m_rgChildren.findIndex((o) => o.BWantsAutoFocus()))),
                (this.m_Properties?.autoFocus || n || a !== -1) &&
                  (this.SetActiveChild(a),
                  !this.m_Parent || this.m_Parent.m_element
                    ? t
                      ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                        this.m_Tree.DeferredFocus.RequestFocus(
                          this.m_FocusableIfEmptyAncestor,
                          { bFocusDescendant: !0 },
                        )
                      : this.Tree.DeferredFocus.RequestFocus(this)
                    : (this.m_Parent.m_bAutoFocusChild = !0)));
            } else if (this.m_rgChildren.length) {
              const a = this.m_rgChildren.findIndex((o) => o.BFocusWithin());
              a != -1 &&
                (this.SetActiveChild(a),
                Dr(
                  this.BFocusWithin(),
                  "Child has focus, we should be m_bFocusWithin",
                ));
            }
          }
          DEV_SetDebugPropsOnElement() {}
          OnUnmount() {
            (this.m_Properties?.focusableIfEmpty &&
              this.PropagateFocusableIfEmptyAncestorToDescendants(
                this.m_FocusableIfEmptyAncestor,
              ),
              (this.m_bMounted = !1));
            const e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
            ((this.BHasFocus() || e) &&
              (En(
                `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? "will transfer to retain focus ancestor" : "will blur"}.`,
              ),
              e && this.Tree.DeferredFocus.RequestFocus(null),
              this.m_FocusableIfEmptyAncestor
                ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(
                    this,
                  )
                : this.BHasFocus() &&
                  this.m_Tree.TransferFocus(Hr.APPLICATION, null)),
              this.UnregisterDOMEvents(),
              this.m_Parent
                ? this.m_Parent.RemoveChild(this)
                : Dr(
                    this == this.m_Tree.Root,
                    "Only root should have no parent",
                  ));
          }
          RegisterDOMEvents() {
            (!this.m_rgNavigationHandlers.length &&
              this.m_element &&
              (this.m_rgChildren.length >= 2 ||
                this.m_Properties?.layout != 0 ||
                this.m_Properties.onMoveUp ||
                this.m_Properties.onMoveRight ||
                this.m_Properties.onMoveDown ||
                this.m_Properties.onMoveLeft) &&
              this.m_rgNavigationHandlers.push(
                Bo(this.m_element, this.OnNavigationEvent),
              ),
              (this.m_Properties?.focusable ||
                this.m_Properties?.focusableIfEmpty ||
                this.m_rgChildren.length == 0) &&
                (this.m_rgFocusHandlers.length ||
                  (this.m_element?.addEventListener("focus", this.OnDOMFocus),
                  this.m_element?.addEventListener("blur", this.OnDOMBlur),
                  this.m_rgFocusHandlers.push(() => {
                    (this.m_element?.removeEventListener(
                      "focus",
                      this.OnDOMFocus,
                    ),
                      this.m_element?.removeEventListener(
                        "blur",
                        this.OnDOMBlur,
                      ));
                  }))));
          }
          RemoveChild(e) {
            let t = this.m_rgChildren.indexOf(e);
            (Dr(t !== -1, "Child was not found to remove"),
              t !== -1 &&
                (this.m_ActiveChild == e && (this.m_ActiveChild = void 0),
                this.m_rgChildren.splice(t, 1)));
          }
          UnregisterDOMEvents() {
            (this.m_rgNavigationHandlers.forEach((e) => e()),
              (this.m_rgNavigationHandlers = []),
              this.m_rgFocusHandlers.forEach((e) => e()),
              (this.m_rgFocusHandlers = []));
          }
          GetActiveDescendant() {
            const e = this.GetActiveChild();
            return e ? e.GetActiveDescendant() : this;
          }
          IsValidChildIndex(e) {
            return e >= 0 && e < this.m_rgChildren.length;
          }
          GetActiveChild() {
            return this.m_ActiveChild
              ? this.m_ActiveChild
              : (this.EnsureChildrenSorted(),
                this.IsValidChildIndex(this.m_iLastActiveChildIndex)
                  ? this.m_rgChildren[this.m_iLastActiveChildIndex]
                  : null);
          }
          GetActiveChildIndex() {
            if (this.m_ActiveChild) {
              if (
                this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
                this.m_rgChildren[this.m_iLastActiveChildIndex] ==
                  this.m_ActiveChild
              )
                return this.m_iLastActiveChildIndex;
              this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
                this.m_ActiveChild,
              );
            }
            return this.m_iLastActiveChildIndex;
          }
          EnsureChildrenSorted(e = !1) {
            (!this.m_bChildrenSorted || e) &&
              (this.m_rgChildren.sort((t, n) => {
                const a = t.m_element,
                  o = n.m_element;
                if (!a || !a.isConnected) return !o || !o.isConnected ? 0 : 1;
                if (!o || !o.isConnected) return -1;
                const l = a.compareDocumentPosition(o);
                return l & Node.DOCUMENT_POSITION_PRECEDING
                  ? 1
                  : l & Node.DOCUMENT_POSITION_FOLLOWING
                    ? -1
                    : 0;
              }),
              this.m_ActiveChild &&
                (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
                  this.m_ActiveChild,
                )),
              (this.m_bChildrenSorted = !0));
          }
          GetLastFocusElement() {
            const e = this.GetActiveChild();
            return e ? e.GetLastFocusElement() : this.m_element;
          }
          OnDOMFocus(e) {
            if (!this.BHasFocus()) {
              if (this.GetFocusable() == "children") {
                const t = this.FindFocusableDescendant();
                if (t && t !== this) {
                  (En(
                    "Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.",
                    this.m_element,
                    t.m_element,
                  ),
                    this.m_Tree.TransferFocus(Hr.BROWSER, t));
                  return;
                }
              }
              this.m_Tree.TransferFocus(Hr.BROWSER, this);
            }
          }
          OnDOMBlur(e) {
            this.BHasFocus() &&
              this.m_element?.ownerDocument.hasFocus() &&
              this.m_Tree.TransferFocus(Hr.BROWSER, null);
          }
          UpdateParentActiveChild() {
            this.m_Parent &&
              (this.m_Parent.SetActiveChild(this),
              this.m_Parent.UpdateParentActiveChild());
          }
          GetFocusable() {
            const {
              focusable: e,
              focusableIfEmpty: t,
              childFocusDisabled: n,
              fnCanTakeFocus: a,
            } = this.m_Properties;
            return !this.m_bMounted || (a && !a(this))
              ? "none"
              : e || (t && (n || this.m_rgChildren.length == 0))
                ? "self"
                : !n && this.m_rgChildren.length
                  ? "children"
                  : "none";
          }
          BTakeFocus(e, t) {
            const n = this.FindFocusableNode(t);
            return this.InternalFocusDescendant(n, e, t);
          }
          FindFocusableNode(e, t) {
            switch (this.GetFocusable()) {
              case "none":
                return null;
              case "self":
                return this;
              case "children":
                return this.FindFocusableDescendant(e, t);
            }
          }
          BChildTakeFocus(e, t) {
            const n = this.FindFocusableDescendant(t);
            return this.InternalFocusDescendant(n, e, t);
          }
          BFocusFirstChild(e) {
            const t = this.FindNextFocusableChildInDirection(-1, 1, U.INVALID);
            return this.InternalFocusDescendant(t, e);
          }
          BFocusLastChild(e) {
            const t = this.FindNextFocusableChildInDirection(
              this.m_rgChildren.length,
              2,
              U.INVALID,
            );
            return this.InternalFocusDescendant(t, e);
          }
          FindFocusableDescendant(e, t) {
            const n = Os(e),
              { focusableIfEmpty: a, childFocusDisabled: o } =
                this.m_Properties ?? {};
            if (o) return null;
            if (this.m_rgChildren.length) {
              this.EnsureChildrenSorted();
              const { navEntryPreferPosition: l, resetNavOnEntry: u } =
                this.m_Properties ?? {};
              let g = this.GetActiveChildIndex();
              u && e !== void 0 && (g = -1);
              const b = this.GetLayout();
              this.IsValidChildIndex(g) ||
                (g >= this.m_rgChildren.length || b == 4 || b == 3 || l == 1
                  ? (g = this.m_rgChildren.length - 1)
                  : (g = 0));
              let f, h;
              if (
                (l == 2
                  ? (h = "x")
                  : l == 3
                    ? (h = "y")
                    : b == 6 && n && (h = xn[n]),
                (h || t) && n)
              ) {
                const B = this.m_Tree.GetLastFocusedNode();
                if (t || (B && h == xn[n])) {
                  const z =
                    t ||
                    this.AdjustRectForLastMovementOnTangentAxis(
                      B.GetBoundingRect(),
                      n,
                    );
                  (En(
                    `Taking focus while preserving ${l && Ho[l]} preserved: ${h} movement: ${n}, node:`,
                    z,
                  ),
                    (f = this.FindClosestFocusableNodeToRect(e, z)));
                } else if (h != xn[n]) {
                  const z = this.ComputeRelativeDirection(e, 5),
                    S = z == 2 ? this.m_rgChildren.length : -1;
                  f = this.FindNextFocusableChildInDirection(S, z, e);
                }
              } else if (l == 4) {
                let B = this.m_rgChildren;
                for (; B.length;) {
                  let z = [];
                  for (const S of B) {
                    if (
                      ((f = S.BWantsPreferredFocus()
                        ? S.FindFocusableNode(e)
                        : void 0),
                      f)
                    )
                      return f;
                    z.push(...S.m_rgChildren);
                  }
                  B = z;
                }
              } else
                l == 1 &&
                  (f = this.FindNextFocusableChildInDirection(g + 1, 2, e));
              return (
                f || (f = this.FindNextFocusableChildInDirection(g - 1, 1, e)),
                f || (f = this.FindNextFocusableChildInDirection(g, 2, e)),
                f || (a ? this : null)
              );
            }
            return null;
          }
          BVisibleChildTakeFocus(e) {
            const t = this.Element?.ownerDocument?.defaultView ?? window,
              n = {
                top: 0,
                left: 0,
                right: t.innerWidth,
                bottom: t.innerHeight,
              },
              a = jo(this, n);
            return (
              En(
                `Focusing visible child, best child match is ${a?.child?.Element?.className} - ${JSON.stringify(a?.visibility)}`,
              ),
              a ? a.child.BTakeFocus(e) : !1
            );
          }
          GetLayout() {
            return this.m_Properties?.layout
              ? this.m_Properties.layout
              : this.m_rgChildren.length < 2
                ? 0
                : Bm(this.m_element);
          }
          OnNavigationEvent(e) {
            const t = e.detail.button;
            if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1))
              return !0;
            const {
              onMoveUp: a,
              onMoveRight: o,
              onMoveDown: l,
              onMoveLeft: u,
            } = this.m_Properties ?? {};
            let g = !1;
            switch (t) {
              case U.DIR_UP:
                a && (g = a(e.detail, this));
                break;
              case U.DIR_RIGHT:
                o && (g = o(e.detail, this));
                break;
              case U.DIR_DOWN:
                l && (g = l(e.detail, this));
                break;
              case U.DIR_LEFT:
                u && (g = u(e.detail, this));
                break;
            }
            return g;
          }
          InternalFocusDescendant(e, t, n) {
            return e ? (this.m_Tree.TransferFocus(t, e, n, !1), !0) : !1;
          }
          BHasNavTargetInDirection(e, t) {
            if (this.HasMovementHandler(e)) return !0;
            let n = this.FindNextFocusableChild(e);
            if (t && n) {
              let a = n.GetWrappedTree();
              if (a && a.GetExcludeFromScrollRegionSearch()) return !1;
            }
            return !!n;
          }
          HasMovementHandler(e) {
            switch (e) {
              case U.DIR_UP:
                return !!this.m_Properties?.onMoveUp;
              case U.DIR_DOWN:
                return !!this.m_Properties?.onMoveDown;
              case U.DIR_LEFT:
                return !!this.m_Properties?.onMoveLeft;
              case U.DIR_RIGHT:
                return !!this.m_Properties?.onMoveRight;
            }
            return !1;
          }
          FindNextFocusableChild(e) {
            const t = this.GetLayout(),
              n = this.ComputeRelativeDirection(e, t);
            if (n == 0 || (this.m_Properties?.focusable && this.BHasFocus()))
              return null;
            if ((this.EnsureChildrenSorted(!0), t == 5))
              return this.FindNextFocusableChildInGrid(
                this.GetActiveChildIndex(),
                n,
                e,
              );
            if (t == 6) return this.FindNextFocusableChildGeometric(n, e);
            let a = this.GetActiveChildIndex();
            return (
              this.IsValidChildIndex(a) ||
                (a = n == 1 ? -1 : this.m_rgChildren.length),
              this.FindNextFocusableChildInDirection(a, n, e)
            );
          }
          BTryInternalNavigation(e, t) {
            En(
              `Handling navigation event ${U[e]} - ${ue[this.GetLayout()]}`,
              this.m_element,
            );
            const n = this.FindNextFocusableChild(e);
            if (!n) return !1;
            const a = Os(e),
              o = this.ComputeRelativeDirection(e, this.GetLayout());
            if (
              this.GetScrollIntoViewType() == 2 ||
              n.GetScrollIntoViewType() == 2
            ) {
              const l = n.Element?.ownerDocument.defaultView;
              if (l) {
                const u =
                    (a == "y" ? l.innerHeight : l.innerWidth) /
                    (t ? 4.5 : 3.33),
                  g = ri(n.Element);
                let b = !1;
                if (
                  (a == "y"
                    ? o == 1
                      ? (b =
                          g.top > l.innerHeight && g.bottom > l.innerHeight + u)
                      : o == 2 && (b = g.bottom < 0 && g.top < -u)
                    : a == "x" &&
                      (o == 1
                        ? (b =
                            g.left > l.innerWidth && g.right > l.innerWidth + u)
                        : o == 2 && (b = g.right < 0 && g.left < -u)),
                  b)
                )
                  return (
                    En(`Element too far away, scrolling ${u} on ${a} axis `),
                    ta(n.Element, n.Element, "smooth", a, u),
                    !0
                  );
              }
            }
            return (this.m_Tree.TransferFocus(Hr.GAMEPAD, n, e), !0);
          }
          GetScrollIntoViewType() {
            return this.m_Properties?.scrollIntoViewType !== void 0 &&
              this.m_Properties?.scrollIntoViewType !== null
              ? this.m_Properties.scrollIntoViewType
              : this.m_Parent
                ? this.m_Parent.GetScrollIntoViewType()
                : 0;
          }
          GetRelativeDirection(e) {
            return this.ComputeRelativeDirection(e, this.GetLayout());
          }
          ComputeRelativeDirection(e, t) {
            let n = t == 4 || t == 3;
            switch (t) {
              case 2:
              case 4:
                switch (e) {
                  case U.DIR_LEFT:
                    return n ? 1 : 2;
                  case U.DIR_RIGHT:
                    return n ? 2 : 1;
                  default:
                    return 0;
                }
              case 1:
              case 3:
                switch (e) {
                  case U.DIR_UP:
                    return n ? 1 : 2;
                  case U.DIR_DOWN:
                    return n ? 2 : 1;
                  default:
                    return 0;
                }
              case 5:
              case 6:
                switch (e) {
                  case U.DIR_LEFT:
                  case U.DIR_UP:
                    return n ? 1 : 2;
                  case U.DIR_RIGHT:
                  case U.DIR_DOWN:
                    return n ? 2 : 1;
                  default:
                    return 0;
                }
              default:
                return 0;
            }
          }
          AdvanceIndex(e, t) {
            return e + (t == 1 ? 1 : -1);
          }
          FindNextFocusableChildInDirection(e, t, n) {
            let a = t == 1 ? 1 : -1;
            for (
              let o = e + a;
              o >= 0 && o < this.m_rgChildren.length;
              o += a
            ) {
              const l = this.m_rgChildren[o].FindFocusableNode(n);
              if (l) return l;
            }
            return null;
          }
          ScanChildren(e, t, n) {
            let a = t == 1 ? 1 : -1;
            for (let o = e; o >= 0 && o < this.m_rgChildren.length; o += a)
              if (n(this.m_rgChildren[o], o)) return o;
            return -1;
          }
          FindNextFocusableChildInGrid(e, t, n) {
            const a = n == U.DIR_UP || n == U.DIR_DOWN,
              o = this.GetLastFocusElement();
            if (!o || o == this.m_element)
              return (
                Dr(
                  !1,
                  "No active child for grid navigation",
                  this.m_iLastActiveChildIndex,
                  this.m_rgChildren.length,
                  o,
                ),
                this.FindFocusableDescendant(n)
              );
            let l = this.GetActiveDescendant().GetBoundingRect();
            if (
              ((n == U.DIR_UP || n == U.DIR_DOWN) &&
                (l = this.AdjustRectForLastMovementOnTangentAxis(l, "y")),
              a)
            ) {
              let u = e;
              for (; u != -1;) {
                const g = this.ScanChildren(
                  this.AdvanceIndex(u, t),
                  t,
                  (b) => !ia("y", l, b.GetBoundingRect()),
                );
                if (g != -1) {
                  const b = this.m_rgChildren[g].GetBoundingRect(),
                    f = this.FindClosestChildInNextAxiallyAlignedSet(
                      "x",
                      t,
                      n,
                      l,
                      g,
                      b,
                    );
                  if (f) return f;
                }
                u = g;
              }
            } else {
              let u = t == 1 ? 1 : -1;
              for (
                let g = this.AdvanceIndex(e, t);
                g >= 0 && g < this.m_rgChildren.length;
                g += u
              ) {
                const b = this.m_rgChildren[g];
                if (!ia("y", l, b.GetBoundingRect())) return null;
                let f = b.FindFocusableNode(n);
                if (f) return f;
              }
            }
            return null;
          }
          FindNextFocusableChildGeometric(e, t) {
            const n = this.GetLastFocusElement();
            if (!n || n == this.m_element)
              return (
                Dr(
                  !1,
                  "No active child for geometric navigation",
                  this.m_iLastActiveChildIndex,
                  this.m_rgChildren.length,
                  n,
                ),
                this.FindFocusableDescendant(t)
              );
            const a = Os(t);
            if (!a) return null;
            const o = this.AdjustRectForLastMovementOnTangentAxis(
              this.GetActiveDescendant().GetBoundingRect(),
              a,
            );
            return this.FindClosetChildInDirection(a, o, e, t);
          }
          AdjustRectForLastMovementOnTangentAxis(e, t) {
            const n = this.m_Tree.GetLastFocusedMovementRect(xn[t]);
            return n
              ? t == "x"
                ? { left: e.left, right: e.right, top: n.top, bottom: n.bottom }
                : { left: n.left, right: n.right, top: e.top, bottom: e.bottom }
              : e;
          }
          FindClosestFocusableNodeToRect(e, t) {
            const n = Os(e),
              a = n && xn[n],
              o = [];
            for (const l of this.m_rgChildren) {
              const u = l.GetBoundingRect();
              if (u) {
                const g = _d(t, u),
                  b = a ? aa(a, t, u) : 0;
                o.push({ child: l, overlap: b, dist: g });
              }
            }
            o.sort((l, u) =>
              l.dist != u.dist ? l.dist - u.dist : u.overlap - l.overlap,
            );
            for (const { child: l } of o) {
              const u = l.FindFocusableNode(e, t);
              if (u) return u;
            }
            return null;
          }
          FindClosetChildInDirection(e, t, n, a) {
            En(
              `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
            );
            const o = oa(e, t),
              l = [];
            for (const u of this.m_rgChildren) {
              const g = u.GetBoundingRect();
              if (g) {
                const b = oa(e, g);
                let f;
                (n == 1 ? (f = b.min - o.max) : (f = o.min - b.max),
                  f >= 0 &&
                    l.push({ child: u, overlap: aa(xn[e], t, g), dist: f }));
              }
            }
            if (
              (l.sort((u, g) => {
                if (u.overlap) {
                  if (!g.overlap) return -1;
                } else if (g.overlap) return 1;
                const b = u.dist - g.dist;
                return b || g.overlap - u.overlap;
              }),
              Io.IsDebugEnabled())
            ) {
              const u = l
                .slice(0, 3)
                .map(
                  ({ dist: g, overlap: b, child: f }) =>
                    `[ node: ${f.m_element?.className} dist: ${g} overlap: ${b} ]`,
                );
              En(`Found nodes on axis, top 3 (of ${l.length}: ${u.join(", ")}`);
            }
            for (const { child: u } of l) {
              const g = u.FindFocusableNode(a, t);
              if (g) return g;
            }
            return null;
          }
          FindClosestChildInNextAxiallyAlignedSet(e, t, n, a, o, l) {
            (!o || o < 0) && (o = 0);
            let u = [];
            if (!a) return null;
            const g = Em(a);
            (this.ScanChildren(o, t, (b) => {
              const f = b.GetBoundingRect();
              return f
                ? l && !ia(xn[e], l, f)
                  ? !0
                  : (u.push({
                      child: b,
                      overlap: aa(e, a, f),
                      dist: ym(e, g, f),
                    }),
                    !1)
                : !1;
            }),
              t == 2 && u.reverse(),
              u.sort((b, f) => {
                const h = f.overlap - b.overlap;
                return h != 0 ? h : b.dist - f.dist;
              }));
            for (const { child: b } of u) {
              const f = b.FindFocusableNode(n, a);
              if (f) return f;
            }
            return null;
          }
          GetChildren() {
            return (
              this.EnsureChildrenSorted(),
              [this.m_rgChildren, this.m_iLastActiveChildIndex]
            );
          }
          SetActiveChild(e) {
            e instanceof sc
              ? (this.EnsureChildrenSorted(),
                (this.m_ActiveChild = e),
                (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(e)))
              : (this.IsValidChildIndex(e) &&
                  (this.m_ActiveChild = this.m_rgChildren[e]),
                (this.m_iLastActiveChildIndex = e));
          }
          GetDepth() {
            return this.m_nDepth;
          }
          SetFocusableIfEmptyAncestor(e) {
            ((this.m_FocusableIfEmptyAncestor = e),
              this.m_Properties?.focusableIfEmpty ||
                this.PropagateFocusableIfEmptyAncestorToDescendants(e));
          }
          PropagateFocusableIfEmptyAncestorToDescendants(e) {
            for (let t = 0; t < this.m_rgChildren.length; t++)
              this.m_rgChildren[t].SetFocusableIfEmptyAncestor(e);
          }
          OnFocusedDecendantRemoved(e) {
            this.m_Tree.DeferredFocus.RequestFocus(this, {
              bFocusDescendant: !0,
            });
          }
          SetDOMFocusAndScroll(e, t, n, a) {
            (this.UpdateParentActiveChild(),
              this.m_Tree.OnChildActivated(e),
              this.m_Tree.BIsActiveFocus()
                ? (Dr(
                    !this.m_Tree.BUseVirtualFocus(),
                    "Virtual focus tree should not have browser focus",
                  ),
                  this.m_element?.focus({ preventScroll: !0 }))
                : this.m_Tree.BUseVirtualFocus() ||
                  En(
                    `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
                  ),
              this.m_Tree.BIsActive() && lm(this, t, e, n, a));
          }
        };
        (na([R], sa.prototype, "OnDOMFocus", 1),
          na([R], sa.prototype, "OnDOMBlur", 1),
          na([R], sa.prototype, "OnNavigationEvent", 1));
        let TC = null;
        function vC(r, e = window) {
          return e[r];
        }
        class km {
          m_node;
          m_History;
          m_StateHistory;
          constructor(e) {
            this.m_node = e;
          }
          TakeFocus(e) {
            return this.m_node.BTakeFocus(e ? Hr.GAMEPAD : Hr.APPLICATION, e);
          }
          ParentTakeFocus(e) {
            this.m_node.Parent?.BTakeFocus(e ? Hr.GAMEPAD : Hr.APPLICATION, e);
          }
          ChildTakeFocus(e) {
            return this.m_node.BChildTakeFocus(
              e ? Hr.GAMEPAD : Hr.APPLICATION,
              e,
            );
          }
          FocusVisibleChild(e) {
            return this.m_node.BVisibleChildTakeFocus(e);
          }
          BHasFocus() {
            return this.m_node.BHasFocus();
          }
          BFocusWithin() {
            return this.m_node.BFocusWithin();
          }
          get NavKey() {
            return this.m_node.NavKey;
          }
          PushState() {
            (this.m_History || (this.m_History = new Kd(this.m_node)),
              this.m_History.PushState());
          }
          PopState(e = Rn) {
            this.m_History && this.m_History.PopState(e);
          }
          SaveState(e) {
            (this.m_StateHistory || (this.m_StateHistory = new Yd(this.m_node)),
              this.m_StateHistory.SaveState(e));
          }
          RestoreState(e, t = Rn) {
            return this.m_StateHistory
              ? this.m_StateHistory.RestoreState(e, t)
              : !1;
          }
          GetFocusSnapshot() {
            return Id(this.m_node);
          }
          RestoreFocusSnapshot(e, t = Rn) {
            return Hd(this.m_node, e, t);
          }
          NavTree() {
            return this.m_node.Tree;
          }
          Node() {
            return this.m_node;
          }
        }
        function ia(r, e, t, n = 0.001) {
          return r == "x"
            ? e.right > t.left + n && e.left + n < t.right
            : r == "y"
              ? e.bottom > t.top + n && e.top + n < t.bottom
              : (Dr(!1, `Invalid axis ${r}`), !1);
        }
        function aa(r, e, t) {
          let n;
          return (
            r == "x"
              ? (n = Math.min(e.right, t.right) - Math.max(e.left, t.left))
              : r == "y"
                ? (n = Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top))
                : (Dr(!1, `Invalid axis ${r}`), (n = 0)),
            n < 0 ? 0 : n
          );
        }
        function oa(r, e) {
          return r == "x"
            ? { min: e.left, max: e.right }
            : { min: e.top, max: e.bottom };
        }
        function ym(r, e, t) {
          const n = e[r],
            a = oa(r, t);
          return n < a.min ? a.min - n : n > a.max ? n - a.max : 0;
        }
        function Em(r) {
          return { x: r.left, y: r.top };
        }
        const wm = {
          OnBlur: () => {},
          OnFocus: () => {},
          OnFocusChange: () => {},
          OnForceMeasureFocusRing: () => {},
        };
        function Bm(r) {
          if (!r) return ue.NONE;
          const e = r.ownerDocument.defaultView,
            t = e.getComputedStyle(r);
          if (t.display == "flex")
            switch (t.flexDirection) {
              case "row":
                return t.flexWrap == "wrap" ? ue.GRID : ue.ROW;
              case "row-reverse":
                return ue.ROW_REVERSE;
              case "column":
                return ue.COLUMN;
              case "column-reverse":
                return ue.COLUMN_REVERSE;
            }
          else {
            if (t.display == "grid")
              return t.gridTemplateAreas !== "none" ? ue.GEOMETRIC : ue.GRID;
            if (r.childElementCount > 0) {
              const n = e.getComputedStyle(r.firstElementChild);
              if (n.float === "left") return ue.ROW;
              if (n.float === "right") return ue.ROW_REVERSE;
              if (n.display === "inline" || n.display === "inline-block")
                return ue.GRID;
            }
          }
          return ue.COLUMN;
        }
        function Os(r) {
          switch (r) {
            case U.DIR_UP:
            case U.DIR_DOWN:
              return "y";
            case U.DIR_LEFT:
            case U.DIR_RIGHT:
              return "x";
            default:
              return;
          }
        }
        function Ko(r) {
          if (!r) return ue.NONE;
          switch (r) {
            case "column":
              return ue.COLUMN;
            case "column-reverse":
              return ue.COLUMN_REVERSE;
            case "row":
              return ue.ROW;
            case "row-reverse":
              return ue.ROW_REVERSE;
            case "grid":
              return ue.GRID;
            case "geometric":
              return ue.GEOMETRIC;
            default:
              return (di(r, `Unhandled flow-children: ${r}`), ue.NONE);
          }
        }
        function Tm(r) {
          return {
            ShowVirtualKeyboard: () => {},
            ShowModalKeyboard: () => {},
            SetAsCurrentVirtualKeyboardTarget: () => {},
            HideVirtualKeyboard: () => {},
            DelayHideVirtualKeyboard: () => {},
            BIsActive: () => !1,
            BIsElementValidForInput: () => !1,
          };
        }
        const Yo = F.createContext(Tm);
        function FC(r) {
          const { factory: e, children: t } = r,
            n = React.useMemo(() => e.CreateVirtualKeyboardRef.bind(e), [e]);
          return React.createElement(Yo.Provider, { value: n }, t);
        }
        function vm(r, e) {
          const { onTextEntered: t, ...n } = r,
            a = F.useRef(null),
            o = F.useRef({});
          Object.assign(o.current, {
            ...n,
            BIsElementValidForInput: () =>
              a.current && document.activeElement == a.current,
          });
          const l = Fm(o.current),
            u = F.useCallback(
              (h) => {
                if (
                  !(!document.hasFocus() && document.activeElement == a.current)
                ) {
                  if (h.currentTarget != a.current) {
                    console.warn(
                      "keyboard got blur event, but it's not the active element",
                    );
                    return;
                  }
                  h.detail.focusedNode?.Element != a.current &&
                    ((!l.BIsActive() && !l.bInVR) ||
                      l.DelayHideVirtualKeyboard());
                }
              },
              [l],
            ),
            g = F.useCallback(
              (h) => !l.bInVR && h.pointerType === "mouse",
              [l],
            ),
            b = F.useCallback(
              (h) => {
                g(h) || l.ShowVirtualKeyboard();
              },
              [l, g],
            ),
            f = ld(
              (h) => {
                a.current = h;
                const B = [];
                return (
                  h &&
                    (h.addEventListener(
                      "focus",
                      l.SetAsCurrentVirtualKeyboardTarget,
                    ),
                    B.push(() =>
                      h.removeEventListener(
                        "focus",
                        l.SetAsCurrentVirtualKeyboardTarget,
                      ),
                    ),
                    h.addEventListener("click", b),
                    B.push(() => h.removeEventListener("click", b)),
                    B.push(wo(h, l.ShowVirtualKeyboard)),
                    B.push(To(h, u))),
                  () => B.forEach((z) => z())
                );
              },
              [u, b, l],
            );
          return (
            F.useLayoutEffect(
              () => (
                pn(e, {
                  TakeFocusAndShowKeyboard: (h) => {
                    const B = a.current;
                    B &&
                      (document.activeElement != B && B.focus(),
                      !(h && g(h)) && l.ShowVirtualKeyboard());
                  },
                  HideVirtualKeyboard: () => {
                    l.HideVirtualKeyboard();
                  },
                }),
                () => pn(e, null)
              ),
              [l, e, g],
            ),
            f
          );
        }
        function Fm(r) {
          const e = F.useRef(void 0),
            t = F.useContext(Yo);
          return (e.current || (e.current = t(r || {})), e.current);
        }
        function zm(r) {
          const {
            onEnterKeyPress: e,
            strEnterKeyLabel: t,
            onKeyboardNavOut: n,
            onKeyboardShow: a,
            onKeyboardFullyVisible: o,
            onTextEntered: l,
            BIsElementValidForInput: u,
            ...g
          } = r;
          return {
            virtualKeyboardProps: {
              onEnterKeyPress: e,
              strEnterKeyLabel: t,
              onKeyboardNavOut: n,
              onKeyboardShow: a,
              onKeyboardFullyVisible: o,
              onTextEntered: l,
              BIsElementValidForInput: u,
            },
            props: g,
          };
        }
        const $o = F.createContext(void 0);
        function zC(r) {
          const { controller: e } = r;
          return (
            React.useEffect(() => {
              e.Init();
            }, [e]),
            jsx($o.Provider, { value: e, children: r.children })
          );
        }
        function si() {
          return F.useContext($o);
        }
        function RC() {
          return useSubscribableValue(si()?.GetShowDebugFocusRing()) ?? !1;
        }
        function OC(r) {
          const e = si();
          React.useEffect(() => {
            if (r) return e.RegisterInputSource(r);
          }, [e, r]);
        }
        const SC = F.forwardRef(function (e, t) {
          const {
              navID: n,
              onActivated: a,
              onDeactivated: o,
              navTreeRef: l,
              enabled: u,
              modal: g,
              virtualFocus: b,
              historyMode: f,
              parentEmbeddedNavTree: h,
              onGlobalButtonDown: B,
              disableFocusClasses: z,
              disabledRoot: S,
              excludeFromScrollRegionSearch: A,
              "flow-children": N,
              ...Gr
            } = e,
            { elemProps: O, navOptions: L, gamepadEvents: Kr } = ca(Gr);
          return si()
            ? (0, m.jsx)(Rm, {
                navID: n,
                onActivated: a,
                onDeactivated: o,
                navTreeRef: l,
                enabled: u,
                modal: g,
                virtualFocus: b,
                historyMode: f,
                parentEmbeddedNavTree: h,
                onGlobalButtonDown: B,
                disableFocusClasses: z,
                disabledRoot: S,
                excludeFromScrollRegionSearch: A,
                "flow-children": N,
                ...L,
                ...Kr,
                children: (0, m.jsx)("div", { ...O, ref: t }),
              })
            : (0, m.jsx)("div", { ...O, ref: t });
        });
        function Rm(r) {
          const {
              navID: e,
              onActivated: t,
              onDeactivated: n,
              navTreeRef: a,
              enabled: o = !0,
              modal: l = !1,
              virtualFocus: u = !1,
              historyMode: g,
              children: b,
              parentEmbeddedNavTree: f,
              onGlobalButtonDown: h,
              disableFocusClasses: B = !1,
              disabledRoot: z = !1,
              excludeFromScrollRegionSearch: S = !1,
              "flow-children": A,
              ...N
            } = r,
            { elemProps: Gr, navOptions: O, gamepadEvents: L } = ca(N),
            { refDiv: Kr, tree: Bn } = Om({
              navID: e,
              parentEmbeddedNavTree: f,
              disabledRoot: z,
              enabled: o,
              onGlobalButtonDown: h,
              navTreeRef: a,
              virtualFocus: u,
              modal: l,
              historyMode: g,
              excludeFromScrollRegionSearch: S,
            });
          (_i(Bn.OnActivateCallbacks, t),
            _i(Bn.OnDeactivateCallbacks, n),
            Dd(L, Kr, Bn),
            F.useLayoutEffect(() => {
              const fa = Ko(A);
              Bn.Root.SetProperties({ ...O, layout: fa });
            }));
          const ga = Js(Kr, b.props.ref);
          return (0, m.jsx)(Sm, {
            tree: z ? null : Bn,
            disableFocusClasses: B || z,
            children: (0, m.jsx)(ii.Provider, {
              value: z ? null : Bn.Root,
              children: F.cloneElement(b, {
                id: e,
                "data-react-nav-root": e,
                ref: ga,
              }),
            }),
          });
        }
        function Om(r) {
          const {
              navID: e,
              parentEmbeddedNavTree: t,
              disabledRoot: n,
              excludeFromScrollRegionSearch: a,
              enabled: o,
              navTreeRef: l,
              onGlobalButtonDown: u,
              ...g
            } = r,
            b = si(),
            f = rd() || b.GetDefaultContext(),
            h = F.useContext(ii),
            [B] = F.useState(() =>
              b.NewGamepadNavigationTree(f, e, t ?? h?.Tree, {
                ...g,
                bIsEmbeddedInLegacyTree: !!t,
              }),
            );
          let z = F.useRef(null);
          return (
            B.SetOnGlobalButtonDown(u),
            F.useEffect(
              () => B.RegisterNavigationItem(B.Root, z.current),
              [B, z],
            ),
            F.useEffect(() => {
              B.SetIsEnabled(o);
            }, [B, o]),
            F.useEffect(() => {
              B.SetExcludeFromScrollRegionSearch(a);
            }, [B, a]),
            F.useEffect(() => {
              if (!n)
                return b.RegisterGamepadNavigationTree(
                  B,
                  z.current.ownerDocument.defaultView,
                );
            }, [b, B, n]),
            F.useEffect(() => (pn(l, B), () => pn(l, null)), [l, B]),
            { refDiv: z, tree: B }
          );
        }
        const _o = F.createContext({
          bActiveTree: !1,
          bActiveTreeWithinContext: !1,
          bDisableFocusClasses: !1,
          bIsMounted: !1,
        });
        function Sm(r) {
          const { tree: e, disableFocusClasses: t = !1, children: n } = r,
            [a, o] = F.useState(e?.BIsActive() || !1),
            [l, u] = F.useState(e?.BIsActiveWithinContext() || !1),
            g = Qi(e?.SubscribableIsMounted) ?? !1;
          F.useEffect(() => {
            if (!e) {
              (o(!1), u(!1));
              return;
            }
            return (
              o(e.BIsActive()),
              u(e.BIsActiveWithinContext()),
              e.OnActiveStateChangedCallbacks.Register(() => {
                (o(e.BIsActive()), u(e.BIsActiveWithinContext()));
              }).Unregister
            );
          }, [e]);
          const b = F.useMemo(
            () => ({
              bActiveTree: a,
              bActiveTreeWithinContext: l,
              bDisableFocusClasses: t,
              bIsMounted: g,
            }),
            [a, t, l, g],
          );
          return (0, m.jsx)(_o.Provider, { value: b, children: n });
        }
        function Am() {
          return F.useContext(_o);
        }
        const ii = F.createContext(null),
          Wm = F.createContext(wm);
        function Lm(r, e) {
          let t = F.useRef(null);
          return (
            r &&
              (!t.current || t.current.m_Parent != r) &&
              (t.current = r.Tree.CreateNode(r, e)),
            t.current
          );
        }
        function jm(r) {
          const { navRef: e, ...t } = r,
            n = F.useRef(null),
            a = (0, F.useContext)(ii),
            o = (0, F.useContext)(Wm),
            l = Lm(a, o);
          return (
            F.useLayoutEffect(() => {
              l && l.SetProperties(t);
            }),
            F.useLayoutEffect(() => {
              if (!a) return;
              const u = a.Tree.RegisterNavigationItem(l, n.current);
              return () => {
                u();
              };
            }, [a, l, n]),
            F.useLayoutEffect(() => {
              if (!(!l || !e))
                return (pn(e, l.CreateHandle()), () => pn(e, null));
            }, [l, e]),
            { ref: n, node: l }
          );
        }
        function xm(r) {
          const e = F.useRef(null),
            t = F.useRef(null);
          return (
            F.useEffect(
              () => () => {
                t.current?.();
              },
              [],
            ),
            F.useCallback(
              (a) => {
                e.current !== a &&
                  ((e.current = a),
                  t.current?.(),
                  (t.current = null),
                  a &&
                    (t.current = Pd(a, (o) =>
                      !r || r.GetFocusable() == "none"
                        ? !1
                        : r.BTakeFocus(void 0, o.detail.button),
                    )));
              },
              [r],
            )
          );
        }
        function Um(r) {
          const {
              onButtonDown: e,
              onButtonUp: t,
              onOKButton: n,
              onCancelButton: a,
              onSecondaryButton: o,
              onOptionsButton: l,
              onGamepadDirection: u,
              onGamepadFocus: g,
              onGamepadBlur: b,
              onMenuButton: f,
              onOKActionDescription: h,
              onCancelActionDescription: B,
              onSecondaryActionDescription: z,
              onOptionsActionDescription: S,
              onMenuActionDescription: A,
              actionDescriptionMap: N,
              ...Gr
            } = r,
            O = {};
          (e !== void 0 && (O.onButtonDown = e),
            t !== void 0 && (O.onButtonUp = t),
            n !== void 0 && (O.onOKButton = n),
            a !== void 0 && (O.onCancelButton = a),
            o !== void 0 && (O.onSecondaryButton = o),
            l !== void 0 && (O.onOptionsButton = l),
            f !== void 0 && (O.onMenuButton = f),
            u !== void 0 && (O.onGamepadDirection = u),
            g !== void 0 && (O.onGamepadFocus = g),
            b !== void 0 && (O.onGamepadBlur = b));
          const L = Nd({
            onOKActionDescription: h,
            onCancelActionDescription: B,
            onSecondaryActionDescription: z,
            onOptionsActionDescription: S,
            onMenuActionDescription: A,
            actionDescriptionMap: N,
          });
          return { gamepadEvents: O, actionDescriptions: L, props: Gr };
        }
        function ca(r) {
          const {
              autoFocus: e,
              preferredFocus: t,
              disableNavSounds: n,
              fnCanTakeFocus: a,
              childFocusDisabled: o,
              focusableIfEmpty: l,
              onFocusWithin: u,
              navKey: g,
              noFocusRing: b,
              focusRingSizeElementID: f,
              focusRingHasBorderRadius: h,
              focusable: B,
              navRef: z,
              actionDescriptionMap: S,
              onMoveUp: A,
              onMoveRight: N,
              onMoveDown: Gr,
              onMoveLeft: O,
              navEntryPreferPosition: L,
              scrollIntoViewWhenChildFocused: Kr,
              fnScrollIntoViewHandler: Bn,
              scrollIntoViewType: ga,
              resetNavOnEntry: fa,
              scrollRegionToStartOrEnd: sg,
              ...ig
            } = r,
            { gamepadEvents: ag, actionDescriptions: og, props: cg } = Um(ig),
            lg = {
              autoFocus: e,
              preferredFocus: t,
              disableNavSounds: n,
              fnCanTakeFocus: a,
              childFocusDisabled: o,
              focusableIfEmpty: l,
              onFocusWithin: u,
              navKey: g,
              noFocusRing: b,
              focusRingSizeElementID: f,
              focusRingHasBorderRadius: h,
              focusable: B,
              navRef: z,
              onMoveUp: A,
              onMoveRight: N,
              onMoveDown: Gr,
              onMoveLeft: O,
              navEntryPreferPosition: L,
              scrollIntoViewWhenChildFocused: Kr,
              fnScrollIntoViewHandler: Bn,
              scrollIntoViewType: ga,
              resetNavOnEntry: fa,
              scrollRegionToStartOrEnd: sg,
              actionDescriptionMap: { ...S, ...og },
            };
          return { elemProps: cg, navOptions: lg, gamepadEvents: ag };
        }
        function la(r) {
          return function (t) {
            const {
                focusClassName: n,
                focusWithinClassName: a,
                bFocusableByDefault: o,
                className: l,
                divRef: u,
                node: g,
                tabIndex: b,
                children: f,
                ...h
              } = t,
              B = bo(),
              z = Qi(g.SubscribableHasFocus) && B,
              S = Qi(g.SubscribableFocusWithin) && B,
              {
                bActiveTree: A,
                bActiveTreeWithinContext: N,
                bDisableFocusClasses: Gr,
                bIsMounted: O,
              } = Am(),
              L = A && !Gr,
              Kr = O && !N && (b !== void 0 || o);
            return F.createElement(
              r,
              {
                ...h,
                className: Cs()(l, z && L && n, S && L && a),
                tabIndex: Kr ? -1 : b,
                ref: u,
              },
              f,
            );
          };
        }
        const AC = la("div");
        function Xo(r) {
          return (
            md.PlayNavSound(po.DefaultOk),
            Zs(r.currentTarget) && r.currentTarget.click(),
            !0
          );
        }
        const Qo = F.createContext(void 0),
          WC = Qo.Provider;
        function Jo(r, e, t, n, a) {
          const {
              elemProps: {
                focusClassName: o,
                children: l,
                "flow-children": u,
                ...g
              },
              navOptions: b,
              gamepadEvents: f,
            } = ca(t),
            {
              bFocusableByDefault: h = !0,
              bActivateByDefault: B = !1,
              bDOMElementFocusByDefault: z = h,
            } = a || {};
          b.focusable === void 0 && !g.disabled && h && (b.focusable = !0);
          const S = Ko(u),
            { ref: A, node: N } = jm({ layout: S, ...b });
          (f.onOKButton ||
            ((("onClick" in g && g.onClick) || (B && (B === !0 || B(g)))) &&
              (f.onOKButton = Xo)),
            b.focusable && !z
              ? (g.tabIndex = g.tabIndex || 0)
              : !b.focusable && z && (g.tabIndex = g.tabIndex ?? -1),
            ei(f, A));
          const Gr = xm(N),
            O = Js(n, A, Gr),
            L = (0, F.useContext)(Qo)?.Component;
          let Kr = { ...g };
          return (
            "onClick" in g && (Kr.role ??= "button"),
            N
              ? ((Kr = {
                  ...Kr,
                  divRef: O,
                  node: N,
                  focusClassName: Cs()(o, "gpfocus"),
                  focusWithinClassName: "gpfocuswithin",
                  bFocusableByDefault: z,
                  className: Cs()(g.className, "Focusable"),
                }),
                (0, m.jsx)(ii.Provider, {
                  value: N,
                  children: L
                    ? F.createElement(L, { ...Kr, Component: e }, l)
                    : F.createElement(e, Kr, l),
                }))
              : F.createElement(
                  r,
                  { ...Kr, ref: n, className: Cs()(g.className, "Focusable") },
                  l,
                )
          );
        }
        function wn(r, e) {
          const t = la(r);
          return F.forwardRef(function (a, o) {
            return Jo(r, t, a, o, e);
          });
        }
        function Co(r) {
          const e = la(r);
          return F.forwardRef(function (n, a) {
            const {
                virtualKeyboardProps: o,
                props: { refKeyboardHandle: l, ...u },
              } = zm(n),
              g = vm(o, l),
              b = Js(a, g);
            return Jo(r, e, u, b);
          });
        }
        function LC() {
          return React.createRef();
        }
        const jC = wn("div", { bDOMElementFocusByDefault: !1 }),
          xC = wn("button", { bActivateByDefault: (r) => r.type === "submit" }),
          Pm = wn("a", {
            bActivateByDefault: !0,
            bDOMElementFocusByDefault: !1,
          }),
          Nm = F.forwardRef(function (e, t) {
            const { href: n = "#", ...a } = e;
            return (0, m.jsx)(Pm, { ref: t, href: n, ...a });
          }),
          UC = Co("input"),
          PC = Co("textarea"),
          NC = wn("img", { bDOMElementFocusByDefault: !1 }),
          GC = wn("label", {
            bActivateByDefault: !0,
            bDOMElementFocusByDefault: !1,
          }),
          DC = wn("section", { bFocusableByDefault: !1 }),
          VC = wn("form", { bFocusableByDefault: !1 }),
          IC = wn("summary", { bActivateByDefault: !0 }),
          HC = wn("details", { bFocusableByDefault: !1 });
        function KC(r) {
          const { Component: e, children: t } = r,
            n = React.useMemo(() => ({ Component: e }), [e]);
          return jsx(FocusReactiveElementWrapperProvider, {
            value: n,
            children: t,
          });
        }
        function YC() {
          const { ref: r } = useFocusNavRef({ focusable: !0 });
          return (
            useGamepadEvents(
              { onOKButton: useCallback(() => (r.current?.click(), !0), [r]) },
              r,
            ),
            r
          );
        }
        function $C(r, e, t = !1) {
          React.useEffect(() => {
            const n = r.current;
            n && (e ? n.Activate(t) : n.Deactivate());
          }, [e, t, r]);
        }
        var Gm = Object.defineProperty,
          Dm = Object.getOwnPropertyDescriptor,
          Vm = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Dm(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && Gm(e, t, a), a);
          };
        function _C(r) {
          return function (t) {
            return jsx(ai, { children: jsx(r, { ...t }) });
          };
        }
        function XC(r) {
          return jsx(Fragment, {
            children: React.Children.map(r.children, (e) =>
              jsx(ai, { children: e }),
            ),
          });
        }
        class ai extends F.Component {
          state = {};
          constructor(e) {
            (super(e), (this.state.lastErrorKey = e.errorKey));
          }
          componentDidCatch(e, t) {
            (Pn()
              .ReportError(e, { strComponentStack: t.componentStack || void 0 })
              .then(
                (a) => a && this.setState({ identifierHash: a.identifierHash }),
              ),
              this.setState({
                error: { error: e, info: t },
                lastErrorKey: this.props.errorKey,
              }));
          }
          Reset() {
            this.setState({ error: void 0 });
          }
          render() {
            const { children: e, fallback: t, errorKey: n } = this.props,
              { error: a, identifierHash: o, lastErrorKey: l } = this.state;
            return a && n == l
              ? t !== void 0
                ? typeof t == "function"
                  ? t(a.error)
                  : t
                : Pn().reporting_enabled
                  ? (0, m.jsx)(Hm, {
                      error: a,
                      identifierHash: o,
                      store: Pn(),
                      onRefresh: this.Reset,
                    })
                  : (0, m.jsx)(Im, { error: a, onDismiss: this.Reset })
              : e || null;
          }
        }
        Vm([R], ai.prototype, "Reset", 1);
        const Im = ({ error: r, onDismiss: e }) => {
            let t = r.error ? r.error.stack : "Stack missing",
              n = r.info ? r.info.componentStack : "",
              a = (r.error && r.error.message) || "unknown error";
            return (0, m.jsxs)(qo, {
              children: [
                (0, m.jsxs)(ec, { children: ['Error: "', a, '"'] }),
                "\xA0\xA0\xA0",
                (0, m.jsx)(Zo, { onClick: e, children: "(x) Dismiss" }),
                (0, m.jsx)("br", {}),
                (0, m.jsx)(oi, { children: t }),
                (0, m.jsxs)(oi, {
                  children: ["The error occurred while rendering:", n],
                }),
              ],
            });
          },
          Hm = (r) => {
            const { error: e, onRefresh: t, identifierHash: n, store: a } = r,
              o = (e.error && e.error.message) || "unknown error",
              l = `${a.product}_${a.version}_${n}`;
            return (0, m.jsxs)(qo, {
              children: [
                (0, m.jsxs)(ec, {
                  children: [
                    "Something went wrong while displaying this content. ",
                    (0, m.jsx)(Zo, { onClick: t, children: "Refresh" }),
                  ],
                }),
                (0, m.jsxs)(oi, { children: ["Error Reference: ", l] }),
                (0, m.jsx)(oi, { children: o }),
              ],
            });
          },
          Zo = ({ onClick: r, children: e }) => {
            const t = F.useRef(null),
              n = bo();
            F.useEffect(() => {
              const o = t.current;
              n && o && !o.NavTree().GetLastFocusedNode() && o.TakeFocus();
            }, [n]);
            const a = (o) => {
              (o.preventDefault(), r());
            };
            return (0, m.jsx)(Nm, {
              navRef: t,
              style: {
                color: "inherit",
                textDecoration: "underline",
                cursor: "pointer",
              },
              onClick: a,
              children: e,
            });
          },
          qo = ({ children: r }) =>
            (0, m.jsx)("div", {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
                userSelect: "auto",
                backgroundColor: "black",
              },
              className: "ErrorBoundary",
              children: r,
            }),
          ec = ({ children: r }) =>
            (0, m.jsx)("h1", {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
              children: r,
            }),
          oi = ({ children: r }) =>
            (0, m.jsx)("pre", {
              style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" },
              children: r,
            });
        var Km = Object.defineProperty,
          Ym = Object.getOwnPropertyDescriptor,
          $m = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Ym(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && Km(e, t, a), a);
          },
          _m = ((r) => (
            (r[(r.k_EPurchasePending = 0)] = "k_EPurchasePending"),
            (r[(r.k_EPurchaseSucceeded = 1)] = "k_EPurchaseSucceeded"),
            (r[(r.k_EPurchaseFailed = 2)] = "k_EPurchaseFailed"),
            (r[(r.k_EPurchaseRefunded = 3)] = "k_EPurchaseRefunded"),
            (r[(r.k_EPurchaseInit = 4)] = "k_EPurchaseInit"),
            (r[(r.k_EPurchaseChargedback = 5)] = "k_EPurchaseChargedback"),
            (r[(r.k_EPurchaseRevoked = 6)] = "k_EPurchaseRevoked"),
            (r[(r.k_EPurchaseInDispute = 7)] = "k_EPurchaseInDispute"),
            (r[(r.k_EPurchasePartialRefund = 8)] = "k_EPurchasePartialRefund"),
            (r[(r.k_EPurchaseRefundToWallet = 9)] =
              "k_EPurchaseRefundToWallet"),
            r
          ))(_m || {});
        class Xm extends F.Component {
          m_TimerID;
          m_bRequestInFlight;
          constructor(e) {
            (super(e), (this.state = { rgClients: [], rgPayments: [] }));
          }
          async componentDidMount() {
            (this.refreshStatus(),
              (this.m_TimerID = window.setInterval(
                () => this.refreshStatus(),
                5e3,
              )));
          }
          componentWillUnmount() {
            (clearInterval(this.m_TimerID), (this.m_TimerID = 0));
          }
          renderIP(e) {
            return (
              (e >>> 24) +
              "." +
              ((e >> 16) & 255) +
              "." +
              ((e >> 8) & 255) +
              "." +
              (e & 255)
            );
          }
          async refreshStatus() {
            this.m_bRequestInFlight = !0;
            const e = te.Init(bn),
              t = await $r.GetClientStatus(e);
            if (t.Hdr().eresult() != Tn) return;
            const { clients: n = [], payments: a = [] } = t.Body().toObject(),
              o = n.map((u) => ({
                ip: this.renderIP(u.ip),
                hostname: u.hostname,
                connected: u.connected,
                instanceid: u.instance_id,
              })),
              l = a.map((u) => ({
                transid: u.transid,
                hostname: u.hostname,
                amount: u.amount,
                status: u.purchase_status,
                name: u.persona_name,
                profile: u.profile_url,
                avatar: u.avatar_url,
              }));
            (this.setState({ rgClients: o, rgPayments: l }),
              (this.m_bRequestInFlight = !1));
          }
          render() {
            const e = [
              v("#ClientStatus_IPAddress"),
              v("#ClientStatus_Hostname"),
              v("#ClientStatus_Status"),
            ];
            return (0, m.jsxs)("div", {
              className: "ClientStatusContainerGradient",
              children: [
                (0, m.jsx)(tc, { data: this.state.rgPayments }),
                (0, m.jsx)(Qm, { columns: e, data: this.state.rgClients }),
              ],
            });
          }
        }
        class Qm extends F.Component {
          constructor(e) {
            super(e);
          }
          render() {
            let e = this.props.columns,
              t = this.props.data;
            if (t.length == 0) {
              if (P.clientsHaveConnected)
                return (0, m.jsxs)("div", {
                  children: [
                    (0, m.jsx)("div", {
                      className: "ClientStatusHeader",
                      children: (0, m.jsx)("label", {
                        className: "PopupGenericTitle",
                        children: v("#ClientStatus_Title"),
                      }),
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText",
                      children: v("#ClientStatus_NoClients"),
                    }),
                  ],
                });
              let o = (0, m.jsx)("a", {
                className: "link blue",
                href: "https://help.steampowered.com/faqs/view/2EA8-4D75-DA21-31EB",
                children: "help.steampowered.com",
              });
              return (0, m.jsxs)("div", {
                children: [
                  (0, m.jsx)("div", {
                    className: "ClientStatusHeader",
                    children: (0, m.jsx)("label", {
                      className: "PopupGenericTitle",
                      children: v("#ClientStatus_Title"),
                    }),
                  }),
                  (0, m.jsx)("label", {
                    className: "PopupGenericBodyText",
                    children: v("#ClientStatus_NoClients"),
                  }),
                  (0, m.jsx)("br", {}),
                  (0, m.jsx)("label", {
                    className: "HelpText",
                    children: v("#ClientStatus_Troubleshoot") + ":",
                  }),
                  (0, m.jsxs)("ul", {
                    children: [
                      (0, m.jsx)("li", {
                        children: (0, m.jsx)("label", {
                          className: "HelpText",
                          children: v("#ClientStatus_Troubleshoot1"),
                        }),
                      }),
                      (0, m.jsx)("li", {
                        children: (0, m.jsx)("label", {
                          className: "HelpText",
                          children: Vn("#ClientStatus_Troubleshoot2", o),
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }
            P.SetClientsConnected(!0);
            let n = (0, m.jsx)("tr", {
                children: e.map((o, l) =>
                  (0, m.jsx)("th", { className: "col" + l, children: o }, l),
                ),
              }),
              a = t.map(function (o) {
                let l = o.ip + String(o.instanceid);
                return (0, m.jsx)(
                  "tr",
                  {
                    children: e.map((u, g) => {
                      let b = "";
                      return (
                        g == 0
                          ? (b = o.ip)
                          : g == 1
                            ? (b = o.hostname)
                            : (b = o.connected
                                ? v("#Status_Connected")
                                : v("#Status_NotConnected")),
                        (0, m.jsx)(
                          "td",
                          { className: "col" + g, children: b },
                          g,
                        )
                      );
                    }),
                  },
                  l,
                );
              });
            return (0, m.jsxs)("div", {
              className: "ClientStatusContainer",
              children: [
                (0, m.jsx)("div", {
                  className: "ClientStatusHeader",
                  children: (0, m.jsx)("label", {
                    className: "PopupGenericBodyTitle",
                    children: v("#ClientStatus_Title"),
                  }),
                }),
                (0, m.jsx)("div", {
                  className: "ClientStatusTableContainer",
                  children: (0, m.jsxs)("table", {
                    className:
                      "ClientStatusTable table table-bordered table-hover",
                    children: [
                      (0, m.jsx)("thead", { children: n }),
                      (0, m.jsx)("tbody", { children: a }),
                    ],
                  }),
                }),
              ],
            });
          }
        }
        class tc extends F.Component {
          constructor(e) {
            super(e);
          }
          Approve(e) {
            window.location.href =
              "https://partner.steamgames.com/walletfunding/approval/";
          }
          render() {
            let e = [
                v("#ClientStatus_Action"),
                v("#ClientStatus_Hostname"),
                v("#ClientStatus_Account"),
                v("#ClientStatus_Amount"),
              ],
              t = this.props.data,
              n = (0, m.jsx)("tr", {
                children: e.map((o, l) =>
                  (0, m.jsx)("th", { className: "col" + l, children: o }, l),
                ),
              }),
              a = t.map((o) =>
                (0, m.jsx)(
                  "tr",
                  {
                    children: e.map((l, u) => {
                      switch (u) {
                        case 0:
                          return (0, m.jsx)(
                            "td",
                            {
                              className: "col" + u,
                              children: (0, m.jsx)("button", {
                                className: "btn_blue_white_innerfade",
                                onClick: this.Approve,
                                children: v("#ClientStatus_Approve"),
                              }),
                            },
                            u,
                          );
                        case 1:
                          return (0, m.jsx)(
                            "td",
                            { className: "col" + u, children: o.hostname },
                            u,
                          );
                        case 2:
                          return (0, m.jsx)(
                            "td",
                            {
                              className: "col" + u,
                              children: (0, m.jsxs)("div", {
                                className: "profile",
                                children: [
                                  (0, m.jsx)("a", {
                                    href: o.profile,
                                    children: (0, m.jsx)("img", {
                                      className: "avatar",
                                      src: o.avatar,
                                    }),
                                  }),
                                  (0, m.jsx)("a", {
                                    className: "link",
                                    href: o.profile,
                                    children: o.name,
                                  }),
                                ],
                              }),
                            },
                            u,
                          );
                        case 3:
                          return (0, m.jsx)(
                            "td",
                            { className: "col" + u, children: o.amount },
                            u,
                          );
                        default:
                          return null;
                      }
                    }),
                  },
                  o.transid,
                ),
              );
            return t.length == 0
              ? null
              : (0, m.jsxs)("div", {
                  className: "CafeFundingContainer",
                  children: [
                    (0, m.jsx)("div", {
                      className: "CafeFundingHeader",
                      children: (0, m.jsx)("label", {
                        className: "PopupGenericTitle",
                        children: v("#ClientStatus_FundingRequests"),
                      }),
                    }),
                    (0, m.jsx)("div", {
                      className: "ClientStatusDesc",
                      children: (0, m.jsx)("label", {
                        className: "HelpText",
                        children: v("#ClientStatus_FundingInstr"),
                      }),
                    }),
                    (0, m.jsx)("div", {
                      className: "CafeFundingTableContainer",
                      children: (0, m.jsxs)("table", {
                        className:
                          "CafeFundingTable table table-bordered table-hover",
                        children: [
                          (0, m.jsx)("thead", { children: n }),
                          (0, m.jsx)("tbody", { children: a }),
                        ],
                      }),
                    }),
                  ],
                });
          }
        }
        $m([R], tc.prototype, "Approve", 1);
        var Jm = Object.defineProperty,
          Cm = Object.getOwnPropertyDescriptor,
          Zr = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? Cm(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && Jm(e, t, a), a);
          };
        let ua = class extends F.Component {
          constructor(r) {
            super(r);
          }
          render() {
            return (0, m.jsxs)("div", {
              className: "MainWindow",
              children: [
                (0, m.jsx)(ks, {}),
                (0, m.jsx)("div", {
                  className: "CacheWindowContentContainer",
                  children: (0, m.jsx)("div", {
                    className: "CacheWindowContent",
                    children: (0, m.jsx)("div", {
                      className: "CacheWindowContentGradient",
                      children: (0, m.jsx)("div", {
                        className: "CacheBackground",
                        children: (0, m.jsx)(ci, {}),
                      }),
                    }),
                  }),
                }),
                (0, m.jsx)(Es, {}),
              ],
            });
          }
        };
        ua = Zr([Xr.PA], ua);
        function rc(r) {
          return r == null ? "" : r.toLocaleString([]);
        }
        function Zm(r) {
          return r == null ? "" : (r / 1e6).toFixed(1).toLocaleString();
        }
        function qm(r) {
          return r == null
            ? ""
            : r < 1e3
              ? r.toLocaleString([])
              : r < 1e6
                ? (r / 1e3).toFixed(1).toLocaleString() + " KB"
                : r < 1e9
                  ? (r / 1e6).toFixed(2).toLocaleString() + " MB"
                  : (r / 1e9).toFixed(3).toLocaleString() + " GB";
        }
        class ci extends F.Component {
          m_bEditDialogVisible = !1;
          m_TimerID;
          m_bRequestInFlight = !1;
          constructor(e) {
            (super(e),
              (this.state = {
                bEnabled: !1,
                unPort: 0,
                strCacheLocation: "",
                unMaxSize: 0,
                bP2PEnabled: !1,
                unCurrentSize: 0,
                unCurrentBW: 0,
                unTotalBytesServed: 0,
                strExplicitIP: "",
                bExternalProcess: !1,
              }));
          }
          async Edit() {
            if (this.m_bEditDialogVisible) return;
            let e = F.createElement(
              sn,
              {
                bEnabled: this.state.bEnabled,
                unPort: this.state.unPort,
                strCacheLocation: this.state.strCacheLocation,
                unMaxSize: this.state.unMaxSize,
                bP2PEnabled: this.state.bP2PEnabled,
                bExternalProcess: this.state.bExternalProcess,
                strExplicitIP: this.state.strExplicitIP,
                onOk: (t, n, a, o, l, u, g) =>
                  this.OnUpdate(t, n, a, o, l, u, g),
                CloseModal: () => this.CloseModal(),
              },
              null,
            );
            ((this.m_bEditDialogVisible = !0), P.ShowModal(e));
          }
          Cancel() {
            P.SetView(zn);
          }
          CloseModal() {
            this.m_bEditDialogVisible = !1;
          }
          async OnUpdate(e, t, n, a, o, l, u) {
            const g = te.Init(ct);
            (g.Body().set_enabled(e),
              g.Body().set_port(t),
              g.Body().set_cache_location(n),
              g.Body().set_max_size_gb(a),
              g.Body().set_p2p_enabled(o),
              g.Body().set_explicit_ip_address(u),
              g.Body().set_external_process(l),
              (await $r.UpdateCacheConfig(g)).Hdr().eresult() != Tn
                ? await Ii(v("#Cache_UpdateFailed"))
                : (go(!0), P.SetView(zn)));
          }
          async componentWillMount() {
            const e = te.Init(en),
              t = await $r.GetContentCacheStatus(e);
            (this.setState({
              bEnabled: t.Body().enabled(),
              unPort: t.Body().port(),
              strCacheLocation: t.Body().cache_location(),
              unMaxSize: t.Body().max_size_gb(),
              bP2PEnabled: t.Body().p2p_enabled(),
              bExternalProcess: t.Body().external_process(),
              strExplicitIP: t.Body().explicit_ip_address(),
            }),
              t.Body().enabled() &&
                this.setState({
                  unCurrentSize: t.Body().current_size_gb(),
                  unCurrentBW: parseFloat(t.Body().current_bw()),
                  unTotalBytesServed: parseFloat(t.Body().total_bytes_served()),
                }),
              (this.m_TimerID = window.setInterval(() => this.tick(), 1e3)));
          }
          componentWillUnmount() {
            (clearInterval(this.m_TimerID), (this.m_TimerID = 0));
          }
          async tick() {
            if (this.m_bRequestInFlight || P.shutdown) return;
            this.m_bRequestInFlight = !0;
            const e = te.Init(en),
              t = await $r.GetContentCacheStatus(e);
            (t.Body().enabled() &&
              this.setState({
                unCurrentSize: t.Body().current_size_gb(),
                unCurrentBW: parseFloat(t.Body().current_bw()),
                unTotalBytesServed: parseFloat(t.Body().total_bytes_served()),
              }),
              (this.m_bRequestInFlight = !1));
          }
          render() {
            let e = this.state.bEnabled
                ? v("#Status_Enabled")
                : v("#Status_Disabled"),
              t = this.state.bP2PEnabled
                ? v("#Status_Enabled")
                : v("#Status_Disabled"),
              n = this.state.bExternalProcess
                ? v("#Status_Enabled")
                : v("#Status_Disabled");
            return (0, m.jsxs)("div", {
              className: "CacheContainer",
              children: [
                (0, m.jsx)("div", {
                  className: "PopupGenericTitle",
                  children: v("#Cache_Configure"),
                }),
                (0, m.jsx)("br", {}),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_Location") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: e,
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_Location") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: this.state.strCacheLocation,
                    }),
                    (0, m.jsx)(Ln, { strText: v("#Cache_LocationTip") }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_Port") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: this.state.unPort,
                    }),
                    (0, m.jsx)(Ln, { strText: v("#Cache_PortTip") }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_MaxSize") + " (GB):",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: rc(this.state.unMaxSize),
                    }),
                    (0, m.jsx)(Ln, { strText: v("#Cache_MaxSizeTip") }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_P2P") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: t,
                    }),
                    (0, m.jsx)(Ln, { strText: v("#Cache_P2PTip") }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_Explicit_IP") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: this.state.strExplicitIP,
                    }),
                    (0, m.jsx)(Ln, { strText: v("#Cache_ExplicitIPTip") }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_External_Process") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: n,
                    }),
                    (0, m.jsx)(Ln, { strText: v("#Cache_ExternalProcessTip") }),
                  ],
                }),
                (0, m.jsx)("br", {}),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_CurrentSize") + " (GB):",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: rc(this.state.unCurrentSize),
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_Bandwidth") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: Zm(this.state.unCurrentBW) + " Mbps",
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "CacheFormGroup",
                  children: [
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: v("#Cache_BytesServed") + ":",
                    }),
                    (0, m.jsx)("label", {
                      className: "PopupGenericBodyText TextPairValue",
                      children: qm(this.state.unTotalBytesServed),
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "GenericButtonGroup",
                  children: [
                    (0, m.jsx)("button", {
                      className: "GenericButton",
                      type: "submit",
                      onClick: this.Edit,
                      children: v("#Button_Edit"),
                    }),
                    (0, m.jsx)("button", {
                      className: "GenericButton",
                      type: "button",
                      onClick: this.Cancel,
                      children: v("#Button_Cancel"),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (Zr([R], ci.prototype, "Edit", 1),
          Zr([R], ci.prototype, "Cancel", 1),
          Zr([R], ci.prototype, "CloseModal", 1));
        class sn extends F.Component {
          constructor(e) {
            (super(e),
              (this.state = {
                bEnabled: this.props.bEnabled,
                unPort: this.props.unPort,
                strCacheLocation: this.props.strCacheLocation,
                unMaxSize: this.props.unMaxSize,
                bP2PEnabled: this.props.bP2PEnabled,
                bExternalProcess: this.props.bExternalProcess,
                strExplicitIP: this.props.strExplicitIP,
              }));
          }
          Save() {
            return (
              this.props.onOk(
                this.state.bEnabled,
                this.state.unPort,
                this.state.strCacheLocation,
                this.state.unMaxSize,
                this.state.bP2PEnabled,
                this.state.bExternalProcess,
                this.state.strExplicitIP,
              ),
              this.props.CloseModal(),
              !0
            );
          }
          Cancel() {
            return (this.props.CloseModal(), !0);
          }
          OnEnableChange(e) {
            (this.setState({ bEnabled: e.target.checked }),
              e.target.checked &&
                this.state.unPort == 0 &&
                this.setState({ unPort: 80 }));
          }
          OnP2PChange(e) {
            this.setState({ bP2PEnabled: e.target.checked });
          }
          OnPortChange(e) {
            this.setState({ unPort: Number(e.target.value) });
          }
          OnMaxSizeChange(e) {
            this.setState({ unMaxSize: Number(e.target.value) });
          }
          OnLocationChange(e) {
            this.setState({ strCacheLocation: e.target.value });
          }
          OnExternalProcessChange(e) {
            this.setState({ bExternalProcess: e.target.checked });
          }
          OnExplicitIPChange(e) {
            this.setState({ strExplicitIP: e.target.value });
          }
          render() {
            return (0, m.jsx)(lo, {
              closeModal: this.props.closeModal,
              onOk: this.Save,
              onCancel: this.Cancel,
              strTitle: v("#Cache_Configure"),
              className: "CacheEditDialog",
              strOkButtonText: v("#Button_Restart"),
              children: (0, m.jsxs)("div", {
                className: "CacheEditContainer",
                children: [
                  (0, m.jsxs)("div", {
                    className: "CacheEditGroup CacheStateEnable",
                    children: [
                      (0, m.jsx)("input", {
                        type: "checkbox",
                        checked: this.state.bEnabled,
                        onChange: this.OnEnableChange,
                      }),
                      (0, m.jsx)("label", {
                        className: "PopupGenericBodyText TextPairName",
                        children: v("#Cache_EnableCache"),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "CacheEditGroup",
                    children: [
                      (0, m.jsx)("label", {
                        className: "PopupGenericBodyText TextPairName",
                        children: v("#Cache_Location") + ":",
                      }),
                      (0, m.jsx)("input", {
                        className: "CacheEditLocation TextPairValue",
                        type: "text",
                        value: this.state.strCacheLocation,
                        onChange: this.OnLocationChange,
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "CacheEditGroup",
                    children: [
                      (0, m.jsxs)("div", {
                        className: "CacheFormGroup",
                        children: [
                          (0, m.jsx)("label", {
                            className: "PopupGenericBodyText TextPairName",
                            children: v("#Cache_MaxSize") + " (GB):",
                          }),
                          (0, m.jsx)("input", {
                            className: "CacheEditMaxSize TextPairValue",
                            type: "number",
                            value: this.state.unMaxSize,
                            onChange: this.OnMaxSizeChange,
                          }),
                        ],
                      }),
                      (0, m.jsxs)("div", {
                        className: "CacheFormGroup",
                        children: [
                          (0, m.jsx)("label", {
                            className: "PopupGenericBodyText TextPairName",
                            children: v("#Cache_Port") + ":",
                          }),
                          (0, m.jsx)("input", {
                            className: "CacheEditPort TextPairValue",
                            type: "number",
                            value: this.state.unPort,
                            onChange: this.OnPortChange,
                          }),
                        ],
                      }),
                      (0, m.jsxs)("div", {
                        className: "CacheFormGroup",
                        children: [
                          (0, m.jsx)("label", {
                            className: "PopupGenericBodyText TextPairName",
                            children: v("#Cache_Explicit_IP") + ":",
                          }),
                          (0, m.jsx)("input", {
                            className: "CacheEditPort TextPairValue",
                            type: "text",
                            value: this.state.strExplicitIP,
                            onChange: this.OnExplicitIPChange,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "CacheEditGroup CachePNPEnable",
                    children: [
                      (0, m.jsx)("input", {
                        type: "checkbox",
                        checked: this.state.bP2PEnabled,
                        onChange: this.OnP2PChange,
                      }),
                      (0, m.jsx)("label", {
                        className: "PopupGenericBodyText TextPairName",
                        children: v("#Cache_EnableP2P"),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "CacheEditGroup CacheExternalProcess",
                    children: [
                      (0, m.jsx)("input", {
                        type: "checkbox",
                        checked: this.state.bExternalProcess,
                        onChange: this.OnExternalProcessChange,
                      }),
                      (0, m.jsx)("label", {
                        className: "PopupGenericBodyText TextPairName",
                        children: v("#Cache_External_Process"),
                      }),
                    ],
                  }),
                  (0, m.jsx)("div", {
                    className: "CacheEditGroup",
                    children: (0, m.jsx)("label", {
                      className: "PopupGenericBodyText",
                      children: v("#Cache_RestartRequired"),
                    }),
                  }),
                ],
              }),
            });
          }
        }
        (Zr([R], sn.prototype, "Save", 1),
          Zr([R], sn.prototype, "Cancel", 1),
          Zr([R], sn.prototype, "OnEnableChange", 1),
          Zr([R], sn.prototype, "OnP2PChange", 1),
          Zr([R], sn.prototype, "OnPortChange", 1),
          Zr([R], sn.prototype, "OnMaxSizeChange", 1),
          Zr([R], sn.prototype, "OnLocationChange", 1),
          Zr([R], sn.prototype, "OnExternalProcessChange", 1),
          Zr([R], sn.prototype, "OnExplicitIPChange", 1));
        var eg = Object.defineProperty,
          tg = Object.getOwnPropertyDescriptor,
          nc = (r, e, t, n) => {
            for (
              var a = n > 1 ? void 0 : n ? tg(e, t) : e, o = r.length - 1, l;
              o >= 0;
              o--
            )
              (l = r[o]) && (a = (n ? l(e, t, a) : l(a)) || a);
            return (n && a && eg(e, t, a), a);
          };
        let da = class extends F.Component {
          m_TimerID;
          m_bRequestInFlight;
          constructor(r) {
            (super(r), (this.state = { bLocalizationComplete: !1 }));
          }
          async componentDidMount() {
            const r = te.Init(gn);
            let e;
            const t = te.Init(en);
            await Promise.all([
              $r.GetLanguage(r),
              $r.GetContentCacheStatus(t),
            ]).then((o) => {
              e = o[0];
              const l = o[1];
              P.SetCacheState(l.Body().enabled());
            });
            let n = e.Body().language() === "None",
              a = va(xs(e.Body().language()));
            (e.Body().language() !== "None" && P.SetLanguage(a),
              await mo(a),
              this.setState({ bLocalizationComplete: !0 }),
              P.SetView(n ? Oi : Nn),
              (this.m_TimerID = window.setInterval(() => this.tick(), 1e3)));
          }
          componentWillUnmount() {
            (clearInterval(this.m_TimerID), (this.m_TimerID = 0));
          }
          async tick() {
            if (this.m_bRequestInFlight || P.shutdown) return;
            this.m_bRequestInFlight = !0;
            const r = te.Init(mn),
              e = await $r.GetStatus(r);
            (e.Hdr().eresult() != Tn
              ? (j.SetSteamCmdNotConnected(), P.SetView(Nn))
              : (j.SetLoginStatus(
                  e.Body().logon_state(),
                  e.Body().logon_eresult(),
                ),
                P.SetConnection(e.Body().connected()),
                P.SetCacheState(e.Body().cache_enabled()),
                P.SetAcctStatus(e.Body().acct_status())),
              j.loginState == Si && P.view == Nn
                ? P.SetView(zn)
                : j.loginState != Si && P.view == zn && P.SetView(Nn),
              (this.m_bRequestInFlight = !1));
          }
          render() {
            let r = P.view;
            return (
              r == zn && j.loginState != Si && (r = Nn),
              (0, m.jsx)("div", {
                id: "SiteServerMain",
                className: "SiteServerMain",
                children: (0, m.jsxs)(ai, {
                  children: [
                    r == Nn && (0, m.jsx)($s, {}),
                    r == Oi && (0, m.jsx)($i, {}),
                    r == zn && (0, m.jsx)(rg, {}),
                    r == Na && (0, m.jsx)(ua, {}),
                    (0, m.jsx)(Vi, {}),
                  ],
                }),
              })
            );
          }
        };
        da = nc([Xr.PA], da);
        class rg extends F.PureComponent {
          constructor(e) {
            (super(e), (this.state = { bSidebarCollapsed: !1 }));
          }
          render() {
            return (0, m.jsxs)("div", {
              className: "MainWindow",
              children: [
                (0, m.jsx)(Hi, {}),
                (0, m.jsx)("div", {
                  className: "MainWindowContentContainer",
                  children: (0, m.jsx)(ma, {}),
                }),
                (0, m.jsx)(Ki, {}),
              ],
            });
          }
        }
        let ma = class extends F.Component {
          constructor(r) {
            super(r);
          }
          render() {
            return (0, m.jsx)("div", {
              className: "MainWindowContent",
              children: (0, m.jsx)("div", {
                className: "MainWindowContentGradient",
                children: (0, m.jsx)("div", {
                  className: "MainWindowClientStatusContainer",
                  children: (0, m.jsx)(Xm, {}),
                }),
              }),
            });
          }
        };
        ma = nc([Xr.PA], ma);
        const ng = da;
        ((0, x.jK)({ enforceActions: "never" }),
          (window.AssertMsg = Dr),
          In.createRoot(document.getElementById("root")).render(
            (0, m.jsx)(ng, {}),
          ));
      },
      978: (an) => {
        an.exports = {
          LoadingWrapper: "_2wAKy-0ZkO_vhbiQCP9MgE",
          Static: "_1QfwpLmLTSuiIRLDzdY_7l",
          none: "_1F0lzP-Krz_y5P9ewZEvBD",
          bottomCircle: "_2qjZm0dB7I6lcRkZhNTqvD",
          noString: "_1Sy0pXVZOdWbgouFyD2zJj",
          Throbber: "lYUEjD8Qh3GM_ZrZeLwpI",
          throbber_small: "_2zbyh5jEDlV5HVD3iUve-k",
          throbber_medium: "_2CphUsHNDgIWItNIzeIldY",
          throbber_large: "_1x18vR7Qop8v8_G8qSR6CL",
          throbber_center_wrapper: "_3IYPzqtvB2ZE7x710d5x2C",
          ThrobberText: "_21nVi2jNuF_prxLY1mAaKK",
          blur: "_1ctjA2yjeB21eCDj_r1mVz",
          ThrobberRoundLoop: "_1O-cWE6nuIVO3x6-Onw0IU",
          roundOuterOutline: "_1Vv--mA6PueyEKXXMTwljt",
          roundOuter: "_2K0LzwjOXDopMHoqY_v_CO",
          roundFill: "_3sQFkavAEPhliH6DiFmHRH",
          ThrobberFillLoop: "ofdi9VLSRZ5W98WsXVHiq",
          topCircle: "_1LZffuoDq-N25wNHckxsf",
          circlePulse: "_1XN6ZJ1l8nVoUxp1WnOBqw",
          ThrobberTopCircleLoop: "_1jALk36CiS_T9Pg7vBjpIQ",
          ThrobberBottomCircleLoop: "_1KvOgdKiNE9XuSYUau3hKW",
          roundThrobber15: "_2LGHpu_-ihfOhQwdfR3Kiy",
          roundThrobber14: "_2FGCneH2AemMrIrZnZskw_",
          roundThrobber13: "_1X-5j16jaQntVrZfadibyc",
          roundThrobber12: "_1pj1Q3Ef4FdHDdl9QEtpxp",
          roundThrobber11: "xFmZaMe5nZpoTc5PQBKn3",
          roundThrobber10: "_3MGYowzMQ6TwbH3fu9SVjt",
          roundThrobber09: "ktVJ42jiVhWEVV9O6z2FK",
          roundThrobber08: "_3s_7my869lIOj-1vnqJ39y",
          roundThrobber07: "_11MVp53Me_frOuaJfsQ4FE",
          roundThrobber06: "_2cl-maglen-RF0YQjShgqG",
          roundThrobber05: "_3-JE0FpIzECzeqtd5cyjGI",
          roundThrobber04: "_1xNIKvHdzLhBldONo6yIZs",
          roundThrobber03: "_1S17yicfcrPc11m83ydGp3",
          roundThrobber02: "_1-oUJqmCLOoGqVJz5dgj6J",
          roundThrobber01: "_2tXgejjqNKy6cSX1Lv7PrG",
          ThrobberRoundLoopThickness: "_1fs4RGcMBRzbQQirDBiFoM",
          throbber_xlarge: "_1gYeZMYKBDqNpVuw58_LCl",
          throbber_xxlarge: "_3j-p4JOqdpaF4obGtIeAB",
          ThrobberDelayAppear: "I3aEq3lbK7Pm8ujENvtri",
          Visible: "_2SwSJd-DlX2dRiDGxZWHI5",
          NewThrobber: "_1m8iQOSVziKDHiInrfskv_",
        };
      },
      2857: (an, li, T) => {
        var m = {
          "./siteserverui_arabic.json": [8449, 8449],
          "./siteserverui_brazilian.json": [6125, 6125],
          "./siteserverui_bulgarian.json": [3814, 3814],
          "./siteserverui_czech.json": [6680, 6680],
          "./siteserverui_danish.json": [2444, 2444],
          "./siteserverui_dutch.json": [5001, 5001],
          "./siteserverui_english.json": [2895, 2895],
          "./siteserverui_finnish.json": [5024, 5024],
          "./siteserverui_french.json": [1189, 1189],
          "./siteserverui_german.json": [1319, 1319],
          "./siteserverui_greek.json": [4279, 4279],
          "./siteserverui_hungarian.json": [1698, 1698],
          "./siteserverui_indonesian.json": [5701, 5701],
          "./siteserverui_italian.json": [1103, 1103],
          "./siteserverui_japanese.json": [9666, 9666],
          "./siteserverui_koreana.json": [7476, 7476],
          "./siteserverui_latam.json": [8676, 8676],
          "./siteserverui_malay.json": [4539, 4539],
          "./siteserverui_norwegian.json": [4719, 4719],
          "./siteserverui_polish.json": [9400, 9400],
          "./siteserverui_portuguese.json": [7896, 7896],
          "./siteserverui_romanian.json": [578, 578],
          "./siteserverui_russian.json": [6742, 6742],
          "./siteserverui_schinese.json": [7077, 7077],
          "./siteserverui_spanish.json": [6975, 6975],
          "./siteserverui_swedish.json": [5294, 5294],
          "./siteserverui_tchinese.json": [4846, 4846],
          "./siteserverui_thai.json": [1695, 1695],
          "./siteserverui_turkish.json": [9423, 9423],
          "./siteserverui_ukrainian.json": [9709, 9709],
          "./siteserverui_vietnamese.json": [8050, 8050],
        };
        function In(Dr) {
          if (!T.o(m, Dr))
            return Promise.resolve().then(() => {
              var F = new Error("Cannot find module '" + Dr + "'");
              throw ((F.code = "MODULE_NOT_FOUND"), F);
            });
          var ui = m[Dr],
            di = ui[0];
          return T.e(ui[1]).then(() => T.t(di, 19));
        }
        ((In.keys = () => Object.keys(m)), (In.id = 2857), (an.exports = In));
      },
    },
    (an) => {
      var li = (m) => an((an.s = m));
      an.O(0, [8997], () => li(6400));
      var T = an.O();
    },
  ]);
})();
