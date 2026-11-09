/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t } from "./libraries.js";
import { xl as n } from "./main.js";
var ee = e(t()),
  r = `700px`,
  i = {
    strMaxMobileWidth: r,
    strMaxResponsiveWidth: `910px`,
    strMaxTabletWidth: `1080px`,
  };
function a() {
  return window.innerWidth < parseInt(r);
}
function o() {
  let e = n();
  return (
    ee.useEffect(
      () => (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      ),
      [e],
    ),
    window.innerWidth < parseInt(r)
  );
}
var s = new URL(
    `../../../images/applications/store/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  c = -700,
  l = -600,
  u = -599,
  d = -598,
  f = -597,
  p = -596,
  m = -595,
  h = -594,
  g = -593,
  _ = -592,
  v = -591,
  y = -590,
  b = -589,
  x = -588,
  S = -587,
  C = -586,
  w = -585,
  T = -584,
  E = -583,
  D = -582,
  O = -581,
  k = -580,
  A = -579,
  j = -578,
  M = -577,
  N = -576,
  P = -575,
  F = -574,
  I = -573,
  L = -572,
  te = -571,
  R = -500,
  z = -499,
  B = -498,
  V = -497,
  H = -496,
  U = -300,
  W = -203,
  G = -202,
  K = -201,
  q = -200,
  J = -199,
  Y = -198,
  X = -197,
  Z = -196,
  Q = -195,
  ne = -194,
  re = -193,
  ie = -192,
  ae = -191,
  oe = -190,
  se = -189,
  ce = -188,
  le = -187,
  ue = -186,
  de = -185,
  fe = -184,
  pe = -183,
  $ = -182,
  me = -102,
  he = -101,
  ge = -100;
function _e(e) {
  switch (e) {
    case 0:
      return `Windows`;
    case 1:
      return `Windows 3.11`;
    case 2:
      return `Windows 95`;
    case 3:
      return `Windows 98`;
    case 4:
      return `Windows ME`;
    case 5:
      return `Windows NT`;
    case 6:
      return `Windows 2000`;
    case 7:
      return `Windows XP`;
    case 8:
      return `Windows 2003`;
    case 9:
      return `Windows Vista`;
    case 10:
      return `Windows 7`;
    case 11:
      return `Windows 2008`;
    case 12:
      return `Windows 2012`;
    case 15:
      return `Windows 2012 R2`;
    case 13:
      return `Windows 8`;
    case 14:
      return `Windows 8.1`;
    case 16:
      return `Windows 10`;
    case 17:
      return `Windows 2016`;
    case 18:
      return `Windows 2019`;
    case 19:
      return `Windows 2022`;
    case 20:
      return `Windows 11`;
    case me:
      return `Mac OS`;
    case he:
      return `MacOS 10.4`;
    case ge:
      return `MacOS 10.5`;
    case -99:
      return `MacOS 10.5.8`;
    case -95:
      return `MacOS 10.6`;
    case -94:
      return `MacOS 10.6.3`;
    case -93:
      return `MacOS 10.6.4 with Apple's Snow Leopard Graphics Update`;
    case -92:
      return `MacOS 10.6.7`;
    case -90:
      return `MacOS 10.7`;
    case -89:
      return `MacOS 10.8`;
    case -88:
      return `MacOS 10.9`;
    case -87:
      return `MacOS 10.10`;
    case -86:
      return `MacOS 10.11`;
    case -85:
      return `MacOS 10.12`;
    case -84:
      return `MacOS 10.13`;
    case -83:
      return `MacOS 10.14`;
    case -82:
      return `MacOS 10.15`;
    case -81:
      return `MacOS 11 (as 10.16)`;
    case -75:
      return `MacOS 12 (as 10.17)`;
    case -70:
      return `MacOS 13 (as 10.18)`;
    case -80:
      return `MacOS 11`;
    case -79:
      return `MacOS 11.1`;
    case -74:
      return `MacOS 12`;
    case -69:
      return `MacOS 13`;
    case -68:
      return `MacOS 14`;
    case -67:
      return `MacOS 15`;
    case W:
      return `Linux`;
    case G:
      return `Linux 2.2`;
    case K:
      return `Linux 2.4`;
    case q:
      return `Linux 2.6`;
    case J:
      return `Linux 3.2`;
    case Y:
      return `Linux 3.5`;
    case X:
      return `Linux 3.6`;
    case Z:
      return `Linux 3.10`;
    case Q:
      return `Linux 3.16`;
    case ne:
      return `Linux 3.18`;
    case re:
      return `Linux 3.x`;
    case ae:
      return `Linux 4.1`;
    case oe:
      return `Linux 4.4`;
    case se:
      return `Linux 4.9`;
    case ce:
      return `Linux 4.14`;
    case le:
      return `Linux 4.19`;
    case ie:
      return `Linux 4.x`;
    case ue:
      return `Linux 5.x`;
    case de:
      return `Linux 5.4`;
    case fe:
      return `Linux 6.x`;
    case pe:
      return `Linux 7.x`;
    case $:
      return `Linux 5.10`;
    case U:
      return `PS3`;
    case c:
      return `Web Client`;
    case R:
      return `Android`;
    case z:
      return `Android 6.x`;
    case B:
      return `Android 7.x`;
    case V:
      return `Android 8.x`;
    case H:
      return `Android 9.x`;
    case l:
      return `iOS`;
    case u:
      return `iOS 1`;
    case d:
      return `iOS 2`;
    case f:
      return `iOS 3`;
    case p:
      return `iOS 4`;
    case m:
      return `iOS 5`;
    case h:
      return `iOS 6`;
    case g:
      return `iOS 6.1`;
    case _:
      return `iOS 7`;
    case v:
      return `iOS 7.1`;
    case y:
      return `iOS 8`;
    case b:
      return `iOS 8.1`;
    case x:
      return `iOS 8.2`;
    case S:
      return `iOS 8.3`;
    case C:
      return `iOS 8.4`;
    case w:
      return `iOS 9`;
    case T:
      return `iOS 9.1`;
    case E:
      return `iOS 9.2`;
    case D:
      return `iOS 9_.3`;
    case O:
      return `iOS 10`;
    case k:
      return `iOS 10.1`;
    case A:
      return `iOS 10.2`;
    case j:
      return `iOS 10.3`;
    case M:
      return `iOS 11`;
    case N:
      return `iOS 11.1`;
    case P:
      return `iOS 11.2`;
    case F:
      return `iOS 11.3`;
    case I:
      return `iOS 11.4`;
    case L:
      return `iOS 12`;
    case te:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var ve = (function (e) {
  return (
    (e[(e.k_EPlatformTypeUnknown = 0)] = `k_EPlatformTypeUnknown`),
    (e[(e.k_EPlatformTypeWin32 = 1)] = `k_EPlatformTypeWin32`),
    (e[(e.k_EPlatformTypeWin64 = 2)] = `k_EPlatformTypeWin64`),
    (e[(e.k_EPlatformTypeLinux64 = 3)] = `k_EPlatformTypeLinux64`),
    (e[(e.k_EPlatformTypeOSX = 4)] = `k_EPlatformTypeOSX`),
    (e[(e.k_EPlatformTypePS3 = 5)] = `k_EPlatformTypePS3`),
    (e[(e.k_EPlatformTypeLinux32 = 6)] = `k_EPlatformTypeLinux32`),
    (e[(e.k_EPlatformTypeAndroid32 = 7)] = `k_EPlatformTypeAndroid32`),
    (e[(e.k_EPlatformTypeAndroid64 = 8)] = `k_EPlatformTypeAndroid64`),
    (e[(e.k_EPlatformTypeIOS32 = 9)] = `k_EPlatformTypeIOS32`),
    (e[(e.k_EPlatformTypeIOS64 = 10)] = `k_EPlatformTypeIOS64`),
    (e[(e.k_EPlatformTypeTVOS = 11)] = `k_EPlatformTypeTVOS`),
    (e[(e.k_EPlatformTypeEmbeddedClient = 12)] =
      `k_EPlatformTypeEmbeddedClient`),
    (e[(e.k_EPlatformTypeBrowser = 13)] = `k_EPlatformTypeBrowser`),
    (e[(e.k_EPlatformTypeMax = 14)] = `k_EPlatformTypeMax`),
    e
  );
})({});
export { o as a, a as i, _e as n, i as o, s as r, ve as t };
