/* Third-party software licenses can be found at licenses.txt */
import {
  o as e,
  r as t,
  t as n,
} from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  $a as r,
  Bn as i,
  Da as a,
  Dn as o,
  En as s,
  F as c,
  Ga as l,
  H as u,
  Ia as d,
  Jr as f,
  Ka as p,
  M as m,
  Ma as h,
  Mr as g,
  Nn as _,
  Oa as v,
  Pn as y,
  S as b,
  Sa as x,
  Wi as S,
  _t as C,
  at as w,
  ct as T,
  d as E,
  di as D,
  eo as ee,
  et as O,
  fi as k,
  ii as A,
  it as j,
  lt as M,
  n as N,
  nt as P,
  on as F,
  ot as te,
  p as ne,
  pi as re,
  pn as I,
  pt as ie,
  qr as L,
  rt as R,
  s as z,
  t as ae,
  tt as oe,
  u as se,
  w as ce,
  wt as le,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  Bu as ue,
  Ct as de,
  D as fe,
  Hs as pe,
  Hu as me,
  M as B,
  Nu as he,
  Oc as ge,
  Pc as _e,
  Rs as ve,
  Ru as ye,
  S as be,
  T as xe,
  Vt as Se,
  Vu as Ce,
  an as we,
  c as Te,
  d as Ee,
  dc as De,
  el as Oe,
  f as ke,
  h as Ae,
  i as je,
  l as Me,
  lt as Ne,
  n as Pe,
  o as Fe,
  on as Ie,
  r as Le,
  s as Re,
  sl as ze,
  t as Be,
  u as Ve,
  wt as He,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as V } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import {
  $ as Ue,
  A as We,
  Ct as Ge,
  Dt as Ke,
  G as qe,
  I as Je,
  K as Ye,
  N as Xe,
  Ot as Ze,
  Q as Qe,
  St as H,
  V as $e,
  Z as et,
  _ as tt,
  a as nt,
  d as rt,
  f as it,
  g as at,
  kt as ot,
  m as st,
  mt as ct,
  o as lt,
  p as ut,
  vt as dt,
  w as ft,
  x as pt,
  xt as mt,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { t as ht } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { d as gt, t as _t } from "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { t as vt } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { ct as yt, n as bt } from "./library.js?contenthash=CVZWwsCP";
import { t as xt } from "./chunk~103fa94b69.js?contenthash=BAq6YOYj";
import { i as St } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
var Ct = (function (e) {
  return (
    (e[(e.EBrowserType_OffScreen = 0)] = `EBrowserType_OffScreen`),
    (e[(e.EBrowserType_OpenVROverlay = 1)] = `EBrowserType_OpenVROverlay`),
    (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
      `EBrowserType_OpenVROverlay_Dashboard`),
    (e[(e.EBrowserType_DirectHWND = 3)] = `EBrowserType_DirectHWND`),
    (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
      `EBrowserType_DirectHWND_Borderless`),
    (e[(e.EBrowserType_ChildHWNDNative = 6)] = `EBrowserType_ChildHWNDNative`),
    (e[(e.EBrowserType_Offscreen_SteamUI = 12)] =
      `EBrowserType_Offscreen_SteamUI`),
    (e[(e.EBrowserType_OpenVROverlay_Subview = 13)] =
      `EBrowserType_OpenVROverlay_Subview`),
    e
  );
})({});
function wt(e) {
  return (
    e == Ct.EBrowserType_OpenVROverlay ||
    e == Ct.EBrowserType_OpenVROverlay_Dashboard ||
    e == Ct.EBrowserType_OpenVROverlay_Subview
  );
}
var Tt = (function (e) {
    return (
      (e[(e.SystemKey0 = 0)] = `SystemKey0`),
      (e[(e.SystemKey1 = 1)] = `SystemKey1`),
      e
    );
  })({}),
  Et = (function (e) {
    return (
      (e[(e.Hidden = 0)] = `Hidden`),
      (e[(e.Notification = 1)] = `Notification`),
      (e[(e.Overlay = 2)] = `Overlay`),
      (e[(e.Opaque = 3)] = `Opaque`),
      (e[(e.OverlayKeyboard = 4)] = `OverlayKeyboard`),
      e
    );
  })({}),
  Dt = (function (e) {
    return (
      (e[(e.MainGamepadUI = 0)] = `MainGamepadUI`),
      (e[(e.OverlayGamepadUI = 1)] = `OverlayGamepadUI`),
      (e[(e.Keyboard = 2)] = `Keyboard`),
      (e[(e.ControllerConfigurator = 3)] = `ControllerConfigurator`),
      (e[(e.MainVRGamepadUI = 4)] = `MainVRGamepadUI`),
      (e[(e.MainDesktopUI = 5)] = `MainDesktopUI`),
      (e[(e.DesktopLogin = 6)] = `DesktopLogin`),
      (e[(e.OverlayDesktopUI = 7)] = `OverlayDesktopUI`),
      (e[(e.SteamChinaReviewLauncher = 8)] = `SteamChinaReviewLauncher`),
      (e[(e.OverlayVRGamepadUI = 9)] = `OverlayVRGamepadUI`),
      e
    );
  })({}),
  Ot = (function (e) {
    return (
      (e[(e.Invalid = 0)] = `Invalid`),
      (e[(e.TrackingSystemName_String = 1e3)] = `TrackingSystemName_String`),
      (e[(e.ModelNumber_String = 1001)] = `ModelNumber_String`),
      (e[(e.SerialNumber_String = 1002)] = `SerialNumber_String`),
      (e[(e.RenderModelName_String = 1003)] = `RenderModelName_String`),
      (e[(e.WillDriftInYaw_Bool = 1004)] = `WillDriftInYaw_Bool`),
      (e[(e.ManufacturerName_String = 1005)] = `ManufacturerName_String`),
      (e[(e.TrackingFirmwareVersion_String = 1006)] =
        `TrackingFirmwareVersion_String`),
      (e[(e.HardwareRevision_String = 1007)] = `HardwareRevision_String`),
      (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
        `AllWirelessDongleDescriptions_String`),
      (e[(e.ConnectedWirelessDongle_String = 1009)] =
        `ConnectedWirelessDongle_String`),
      (e[(e.DeviceIsWireless_Bool = 1010)] = `DeviceIsWireless_Bool`),
      (e[(e.DeviceIsCharging_Bool = 1011)] = `DeviceIsCharging_Bool`),
      (e[(e.DeviceBatteryPercentage_Float = 1012)] =
        `DeviceBatteryPercentage_Float`),
      (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
        `StatusDisplayTransform_Matrix34`),
      (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
        `Firmware_UpdateAvailable_Bool`),
      (e[(e.Firmware_ManualUpdate_Bool = 1015)] = `Firmware_ManualUpdate_Bool`),
      (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
        `Firmware_ManualUpdateURL_String`),
      (e[(e.HardwareRevision_Uint64 = 1017)] = `HardwareRevision_Uint64`),
      (e[(e.FirmwareVersion_Uint64 = 1018)] = `FirmwareVersion_Uint64`),
      (e[(e.FPGAVersion_Uint64 = 1019)] = `FPGAVersion_Uint64`),
      (e[(e.VRCVersion_Uint64 = 1020)] = `VRCVersion_Uint64`),
      (e[(e.RadioVersion_Uint64 = 1021)] = `RadioVersion_Uint64`),
      (e[(e.DongleVersion_Uint64 = 1022)] = `DongleVersion_Uint64`),
      (e[(e.BlockServerShutdown_Bool = 1023)] = `BlockServerShutdown_Bool`),
      (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
        `CanUnifyCoordinateSystemWithHmd_Bool`),
      (e[(e.ContainsProximitySensor_Bool = 1025)] =
        `ContainsProximitySensor_Bool`),
      (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
        `DeviceProvidesBatteryStatus_Bool`),
      (e[(e.DeviceCanPowerOff_Bool = 1027)] = `DeviceCanPowerOff_Bool`),
      (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
        `Firmware_ProgrammingTarget_String`),
      (e[(e.DeviceClass_Int32 = 1029)] = `DeviceClass_Int32`),
      (e[(e.HasCamera_Bool = 1030)] = `HasCamera_Bool`),
      (e[(e.DriverVersion_String = 1031)] = `DriverVersion_String`),
      (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
        `Firmware_ForceUpdateRequired_Bool`),
      (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
        `ViveSystemButtonFixRequired_Bool`),
      (e[(e.ParentDriver_Uint64 = 1034)] = `ParentDriver_Uint64`),
      (e[(e.ResourceRoot_String = 1035)] = `ResourceRoot_String`),
      (e[(e.RegisteredDeviceType_String = 1036)] =
        `RegisteredDeviceType_String`),
      (e[(e.InputProfilePath_String = 1037)] = `InputProfilePath_String`),
      (e[(e.NeverTracked_Bool = 1038)] = `NeverTracked_Bool`),
      (e[(e.NumCameras_Int32 = 1039)] = `NumCameras_Int32`),
      (e[(e.CameraFrameLayout_Int32 = 1040)] = `CameraFrameLayout_Int32`),
      (e[(e.CameraStreamFormat_Int32 = 1041)] = `CameraStreamFormat_Int32`),
      (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
        `AdditionalDeviceSettingsPath_String`),
      (e[(e.DevicePowerUsage_Float = 1052)] = `DevicePowerUsage_Float`),
      (e[(e.ActualTrackingSystemName_String = 1054)] =
        `ActualTrackingSystemName_String`),
      (e[(e.AllowCameraToggle_Bool = 1055)] = `AllowCameraToggle_Bool`),
      (e[(e.AllowLightSourceFrequency_Bool = 1056)] =
        `AllowLightSourceFrequency_Bool`),
      (e[(e.IsDedicatedVRHeadset_Bool = 1058)] = `IsDedicatedVRHeadset_Bool`),
      (e[(e.HasEyeTracker_Bool = 1060)] = `HasEyeTracker_Bool`),
      (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] = `ReportsTimeSinceVSync_Bool`),
      (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
        `SecondsFromVsyncToPhotons_Float`),
      (e[(e.DisplayFrequency_Float = 2002)] = `DisplayFrequency_Float`),
      (e[(e.UserIpdMeters_Float = 2003)] = `UserIpdMeters_Float`),
      (e[(e.CurrentUniverseId_Uint64 = 2004)] = `CurrentUniverseId_Uint64`),
      (e[(e.PreviousUniverseId_Uint64 = 2005)] = `PreviousUniverseId_Uint64`),
      (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
        `DisplayFirmwareVersion_Uint64`),
      (e[(e.IsOnDesktop_Bool = 2007)] = `IsOnDesktop_Bool`),
      (e[(e.DisplayMCType_Int32 = 2008)] = `DisplayMCType_Int32`),
      (e[(e.DisplayMCOffset_Float = 2009)] = `DisplayMCOffset_Float`),
      (e[(e.DisplayMCScale_Float = 2010)] = `DisplayMCScale_Float`),
      (e[(e.EdidVendorID_Int32 = 2011)] = `EdidVendorID_Int32`),
      (e[(e.DisplayMCImageLeft_String = 2012)] = `DisplayMCImageLeft_String`),
      (e[(e.DisplayMCImageRight_String = 2013)] = `DisplayMCImageRight_String`),
      (e[(e.DisplayGCBlackClamp_Float = 2014)] = `DisplayGCBlackClamp_Float`),
      (e[(e.EdidProductID_Int32 = 2015)] = `EdidProductID_Int32`),
      (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
        `CameraToHeadTransform_Matrix34`),
      (e[(e.DisplayGCType_Int32 = 2017)] = `DisplayGCType_Int32`),
      (e[(e.DisplayGCOffset_Float = 2018)] = `DisplayGCOffset_Float`),
      (e[(e.DisplayGCScale_Float = 2019)] = `DisplayGCScale_Float`),
      (e[(e.DisplayGCPrescale_Float = 2020)] = `DisplayGCPrescale_Float`),
      (e[(e.DisplayGCImage_String = 2021)] = `DisplayGCImage_String`),
      (e[(e.LensCenterLeftU_Float = 2022)] = `LensCenterLeftU_Float`),
      (e[(e.LensCenterLeftV_Float = 2023)] = `LensCenterLeftV_Float`),
      (e[(e.LensCenterRightU_Float = 2024)] = `LensCenterRightU_Float`),
      (e[(e.LensCenterRightV_Float = 2025)] = `LensCenterRightV_Float`),
      (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
        `UserHeadToEyeDepthMeters_Float`),
      (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
        `CameraFirmwareVersion_Uint64`),
      (e[(e.CameraFirmwareDescription_String = 2028)] =
        `CameraFirmwareDescription_String`),
      (e[(e.DisplayFPGAVersion_Uint64 = 2029)] = `DisplayFPGAVersion_Uint64`),
      (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
        `DisplayBootloaderVersion_Uint64`),
      (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
        `DisplayHardwareVersion_Uint64`),
      (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
        `AudioFirmwareVersion_Uint64`),
      (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
        `CameraCompatibilityMode_Int32`),
      (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
        `ScreenshotHorizontalFieldOfViewDegrees_Float`),
      (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
        `ScreenshotVerticalFieldOfViewDegrees_Float`),
      (e[(e.DisplaySuppressed_Bool = 2036)] = `DisplaySuppressed_Bool`),
      (e[(e.DisplayAllowNightMode_Bool = 2037)] = `DisplayAllowNightMode_Bool`),
      (e[(e.DisplayMCImageWidth_Int32 = 2038)] = `DisplayMCImageWidth_Int32`),
      (e[(e.DisplayMCImageHeight_Int32 = 2039)] = `DisplayMCImageHeight_Int32`),
      (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
        `DisplayMCImageNumChannels_Int32`),
      (e[(e.DisplayMCImageData_Binary = 2041)] = `DisplayMCImageData_Binary`),
      (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
        `SecondsFromPhotonsToVblank_Float`),
      (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
        `DriverDirectModeSendsVsyncEvents_Bool`),
      (e[(e.DisplayDebugMode_Bool = 2044)] = `DisplayDebugMode_Bool`),
      (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] = `GraphicsAdapterLuid_Uint64`),
      (e[(e.DriverProvidedChaperonePath_String = 2048)] =
        `DriverProvidedChaperonePath_String`),
      (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
        `ExpectedTrackingReferenceCount_Int32`),
      (e[(e.ExpectedControllerCount_Int32 = 2050)] =
        `ExpectedControllerCount_Int32`),
      (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
        `NamedIconPathControllerLeftDeviceOff_String`),
      (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
        `NamedIconPathControllerRightDeviceOff_String`),
      (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
        `NamedIconPathTrackingReferenceDeviceOff_String`),
      (e[(e.DoNotApplyPrediction_Bool = 2054)] = `DoNotApplyPrediction_Bool`),
      (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
        `CameraToHeadTransforms_Matrix34_Array`),
      (e[(e.DistortionMeshResolution_Int32 = 2056)] =
        `DistortionMeshResolution_Int32`),
      (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
        `DriverIsDrawingControllers_Bool`),
      (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
        `DriverRequestsApplicationPause_Bool`),
      (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
        `DriverRequestsReducedRendering_Bool`),
      (e[(e.MinimumIpdStepMeters_Float = 2060)] = `MinimumIpdStepMeters_Float`),
      (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
        `AudioBridgeFirmwareVersion_Uint64`),
      (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
        `ImageBridgeFirmwareVersion_Uint64`),
      (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
        `ImuToHeadTransform_Matrix34`),
      (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] = `ImuFactoryGyroBias_Vector3`),
      (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
        `ImuFactoryGyroScale_Vector3`),
      (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
        `ImuFactoryAccelerometerBias_Vector3`),
      (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
        `ImuFactoryAccelerometerScale_Vector3`),
      (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
        `ConfigurationIncludesLighthouse20Features_Bool`),
      (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
        `Prop_AdditionalRadioFeatures_Uint64`),
      (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
        `Prop_CameraWhiteBalance_Vector4_Array`),
      (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
        `Prop_CameraDistortionFunction_Int32_Array`),
      (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
        `Prop_CameraDistortionCoefficients_Float_Array`),
      (e[(e.Prop_ExpectedControllerType_String = 2074)] =
        `Prop_ExpectedControllerType_String`),
      (e[(e.HmdTrackingStyle_Int32 = 2075)] = `HmdTrackingStyle_Int32`),
      (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
        `DriverProvidedChaperoneVisibility_Bool`),
      (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
        `HmdColumnCorrectionSettingPrefix_String`),
      (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
        `CameraSupportsCompatibilityModes_Bool`),
      (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
        `SupportsRoomViewDepthProjection_Bool`),
      (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
        `DisplayAvailableFrameRates_Float_Array`),
      (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
        `DisplaySupportsRuntimeFramerateChange_Bool`),
      (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
        `DisplaySupportsAnalogGain_Bool`),
      (e[(e.DisplayMinAnalogGain_Float = 2086)] = `DisplayMinAnalogGain_Float`),
      (e[(e.DisplayMaxAnalogGain_Float = 2087)] = `DisplayMaxAnalogGain_Float`),
      (e[(e.DashboardLinkSupport_Int32 = 2097)] = `DashboardLinkSupport_Int32`),
      (e[(e.DisplayMinUIAnalogGain_Float = 2098)] =
        `DisplayMinUIAnalogGain_Float`),
      (e[(e.DashboardScale_Float = 2091)] = `DashboardScale_Float`),
      (e[(e.IpdUIRangeMinMeters_Float = 2100)] = `IpdUIRangeMinMeters_Float`),
      (e[(e.IpdUIRangeMaxMeters_Float = 2101)] = `IpdUIRangeMaxMeters_Float`),
      (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
        `Hmd_SupportsHDCP14LegacyCompat_Bool`),
      (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
        `Hmd_SupportsMicMonitoring_Bool`),
      (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
        `Hmd_SupportsDisplayPortTrainingMode_Bool`),
      (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
        `Hmd_SupportsRoomViewDirect_Bool`),
      (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
        `Hmd_SupportsAppThrottling_Bool`),
      (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
        `Hmd_SupportsGpuBusMonitoring_Bool`),
      (e[(e.DriverProvidedIPDVisibility_Bool = 2108)] =
        `DriverProvidedIPDVisibility_Bool`),
      (e[(e.Prop_SupportsVRGamepadMode_Bool = 2117)] =
        `Prop_SupportsVRGamepadMode_Bool`),
      (e[(e.Prop_AllowHomeApp2Setting_Int32 = 2119)] =
        `Prop_AllowHomeApp2Setting_Int32`),
      (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
        `DriverRequestedMuraCorrectionMode_Int32`),
      (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
        `DriverRequestedMuraFeather_InnerLeft_Int32`),
      (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
        `DriverRequestedMuraFeather_InnerRight_Int32`),
      (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
        `DriverRequestedMuraFeather_InnerTop_Int32`),
      (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
        `DriverRequestedMuraFeather_InnerBottom_Int32`),
      (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
        `DriverRequestedMuraFeather_OuterLeft_Int32`),
      (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
        `DriverRequestedMuraFeather_OuterRight_Int32`),
      (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
        `DriverRequestedMuraFeather_OuterTop_Int32`),
      (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
        `DriverRequestedMuraFeather_OuterBottom_Int32`),
      (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
        `Audio_SupportsDualSpeakerAndJackOutput_Bool`),
      (e[(e.Hmd_ForceRoomViewOutsideChaperone_Bool = 2500)] =
        `Hmd_ForceRoomViewOutsideChaperone_Bool`),
      (e[(e.AttachedDeviceId_String = 3e3)] = `AttachedDeviceId_String`),
      (e[(e.SupportedButtons_Uint64 = 3001)] = `SupportedButtons_Uint64`),
      (e[(e.Axis0Type_Int32 = 3002)] = `Axis0Type_Int32`),
      (e[(e.Axis1Type_Int32 = 3003)] = `Axis1Type_Int32`),
      (e[(e.Axis2Type_Int32 = 3004)] = `Axis2Type_Int32`),
      (e[(e.Axis3Type_Int32 = 3005)] = `Axis3Type_Int32`),
      (e[(e.Axis4Type_Int32 = 3006)] = `Axis4Type_Int32`),
      (e[(e.ControllerRoleHint_Int32 = 3007)] = `ControllerRoleHint_Int32`),
      (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
        `FieldOfViewLeftDegrees_Float`),
      (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
        `FieldOfViewRightDegrees_Float`),
      (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
        `FieldOfViewTopDegrees_Float`),
      (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
        `FieldOfViewBottomDegrees_Float`),
      (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
        `TrackingRangeMinimumMeters_Float`),
      (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
        `TrackingRangeMaximumMeters_Float`),
      (e[(e.ModeLabel_String = 4006)] = `ModeLabel_String`),
      (e[(e.IconPathName_String = 5e3)] = `IconPathName_String`),
      (e[(e.NamedIconPathDeviceOff_String = 5001)] =
        `NamedIconPathDeviceOff_String`),
      (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
        `NamedIconPathDeviceSearching_String`),
      (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
        `NamedIconPathDeviceSearchingAlert_String`),
      (e[(e.NamedIconPathDeviceReady_String = 5004)] =
        `NamedIconPathDeviceReady_String`),
      (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
        `NamedIconPathDeviceReadyAlert_String`),
      (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
        `NamedIconPathDeviceNotReady_String`),
      (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
        `NamedIconPathDeviceStandby_String`),
      (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
        `NamedIconPathDeviceAlertLow_String`),
      (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
        `DisplayHiddenArea_Binary_Start`),
      (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
        `DisplayHiddenArea_Binary_End`),
      (e[(e.ParentContainer = 5151)] = `ParentContainer`),
      (e[(e.UserConfigPath_String = 6e3)] = `UserConfigPath_String`),
      (e[(e.InstallPath_String = 6001)] = `InstallPath_String`),
      (e[(e.HasDisplayComponent_Bool = 6002)] = `HasDisplayComponent_Bool`),
      (e[(e.HasControllerComponent_Bool = 6003)] =
        `HasControllerComponent_Bool`),
      (e[(e.HasCameraComponent_Bool = 6004)] = `HasCameraComponent_Bool`),
      (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
        `HasDriverDirectModeComponent_Bool`),
      (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
        `HasVirtualDisplayComponent_Bool`),
      (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
        `HasSpatialAnchorsSupport_Bool`),
      (e[(e.ControllerType_String = 7e3)] = `ControllerType_String`),
      (e[(e.LegacyInputProfile_String = 7001)] = `LegacyInputProfile_String`),
      (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
        `VendorSpecific_Reserved_Start`),
      (e[(e.VendorSpecific_Reserved_End = 10999)] =
        `VendorSpecific_Reserved_End`),
      (e[(e.SupportsInHMDRoomSetup_Bool = 11003)] =
        `SupportsInHMDRoomSetup_Bool`),
      (e[(e.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
        `VRLinkClientHMDSupportsRoomSetupRequests_Bool`),
      (e[(e.TrackedDeviceProperty_Max = 1e6)] = `TrackedDeviceProperty_Max`),
      e
    );
  })({}),
  kt = (function (e) {
    return (
      (e[(e.k_EButton_System = 0)] = `k_EButton_System`),
      (e[(e.k_EButton_ApplicationMenu = 1)] = `k_EButton_ApplicationMenu`),
      (e[(e.k_EButton_Grip = 2)] = `k_EButton_Grip`),
      (e[(e.k_EButton_DPad_Left = 3)] = `k_EButton_DPad_Left`),
      (e[(e.k_EButton_DPad_Up = 4)] = `k_EButton_DPad_Up`),
      (e[(e.k_EButton_DPad_Right = 5)] = `k_EButton_DPad_Right`),
      (e[(e.k_EButton_DPad_Down = 6)] = `k_EButton_DPad_Down`),
      (e[(e.k_EButton_A = 7)] = `k_EButton_A`),
      (e[(e.k_EButton_ProximitySensor = 31)] = `k_EButton_ProximitySensor`),
      (e[(e.k_EButton_Axis0 = 32)] = `k_EButton_Axis0`),
      (e[(e.k_EButton_Axis1 = 33)] = `k_EButton_Axis1`),
      (e[(e.k_EButton_Axis2 = 34)] = `k_EButton_Axis2`),
      (e[(e.k_EButton_Axis3 = 35)] = `k_EButton_Axis3`),
      (e[(e.k_EButton_Axis4 = 36)] = `k_EButton_Axis4`),
      (e[(e.k_EButton_SteamVR_Touchpad = 32)] = `k_EButton_SteamVR_Touchpad`),
      (e[(e.k_EButton_SteamVR_Trigger = 33)] = `k_EButton_SteamVR_Trigger`),
      (e[(e.k_EButton_Dashboard_Back = 2)] = `k_EButton_Dashboard_Back`),
      (e[(e.k_EButton_IndexController_A = 2)] = `k_EButton_IndexController_A`),
      (e[(e.k_EButton_IndexController_B = 1)] = `k_EButton_IndexController_B`),
      (e[(e.k_EButton_IndexController_JoyStick = 35)] =
        `k_EButton_IndexController_JoyStick`),
      (e[(e.k_EButton_Reserved0 = 50)] = `k_EButton_Reserved0`),
      (e[(e.k_EButton_Reserved1 = 51)] = `k_EButton_Reserved1`),
      (e[(e.k_EButton_Max = 64)] = `k_EButton_Max`),
      e
    );
  })({}),
  At = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.ButtonEnter = 1)] = `ButtonEnter`),
      (e[(e.ButtonLeave = 2)] = `ButtonLeave`),
      (e[(e.Snap = 3)] = `Snap`),
      (e[(e.Sliding = 4)] = `Sliding`),
      (e[(e.SlidingEdge = 5)] = `SlidingEdge`),
      e
    );
  })({}),
  jt = (function (e) {
    return (
      (e[(e.Minimal = 1)] = `Minimal`),
      (e[(e.Modal = 2)] = `Modal`),
      (e[(e.ShowArrowKeys = 4)] = `ShowArrowKeys`),
      (e[(e.HideDoneKey = 8)] = `HideDoneKey`),
      e
    );
  })({}),
  Mt = (function (e) {
    return (
      (e[(e.Unknown = -1)] = `Unknown`),
      (e[(e.Idle = 0)] = `Idle`),
      (e[(e.UserInteraction = 1)] = `UserInteraction`),
      (e[(e.UserInteraction_Timeout = 2)] = `UserInteraction_Timeout`),
      (e[(e.Standby = 3)] = `Standby`),
      (e[(e.Idle_Timeout = 4)] = `Idle_Timeout`),
      e
    );
  })({}),
  Nt = (function (e) {
    return (
      (e[(e.Notification_Shown = 600)] = `Notification_Shown`),
      (e[(e.Notification_Hidden = 601)] = `Notification_Hidden`),
      (e[(e.Notification_BeginInteraction = 602)] =
        `Notification_BeginInteraction`),
      (e[(e.Notification_Destroyed = 603)] = `Notification_Destroyed`),
      e
    );
  })({}),
  Pt = (function (e) {
    return (
      (e[(e.Unknown = 0)] = `Unknown`),
      (e[(e.LaserMouse = 1)] = `LaserMouse`),
      (e[(e.Gamepad = 2)] = `Gamepad`),
      e
    );
  })({}),
  Ft = (function (e) {
    return (
      (e[(e.Invalid = 0)] = `Invalid`),
      (e[(e.ControllerPairing = 1)] = `ControllerPairing`),
      (e[(e.WelcomeToSteamFrame = 2)] = `WelcomeToSteamFrame`),
      (e[(e.PlayspaceSetup = 3)] = `PlayspaceSetup`),
      (e[(e.LaserMouse = 4)] = `LaserMouse`),
      (e[(e.SystemButtonHideDashboard = 5)] = `SystemButtonHideDashboard`),
      (e[(e.SystemButtonDashboardHidden = 6)] = `SystemButtonDashboardHidden`),
      (e[(e.SystemButtonShowDashboard = 7)] = `SystemButtonShowDashboard`),
      (e[(e.PairWifiDongle = 8)] = `PairWifiDongle`),
      (e[(e.TourSendOff = 9)] = `TourSendOff`),
      (e[(e.SteamGuidedTourFinished = 10)] = `SteamGuidedTourFinished`),
      e
    );
  })({});
function It(e, t) {
  return e.m_unPID == t.m_unPID && e.m_nBrowserID == t.m_nBrowserID;
}
var Lt = { m_unPID: 0, m_nBrowserID: -1 },
  Rt = [],
  zt = 1e3;
function Bt(e) {
  Rt = e;
}
var Vt = class {
  m_fnRender;
  m_rgLoadingLinks = [];
  m_doc;
  constructor(e, t, n) {
    if (((this.m_doc = e), (this.m_rgLoadingLinks = []), n))
      for (let e = 0; e < n.length; e++) this.AddLink(n[e], !0);
    else if (e) {
      let t = e.getElementsByTagName(`link`);
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        this.AddLink(n, !1);
      }
    }
  }
  AddLink(e, t) {
    if (t) {
      let t = !1;
      try {
        (e.sheet && e.sheet.cssRules && e.sheet.cssRules.length != 0) ||
          (t = !0);
      } catch {}
      t &&
        (e.addEventListener(`load`, this.OnLinkLoad),
        this.m_rgLoadingLinks.push(e));
    } else
      (e.addEventListener(`load`, this.OnLinkLoad),
        this.m_rgLoadingLinks.push(e));
  }
  SetTarget(e) {
    ((this.m_fnRender = e),
      this.m_rgLoadingLinks.length == 0 && this.RenderWhenFontsReady());
  }
  RenderWhenFontsReady() {
    let e = this.m_doc?.fonts,
      t = e ? Rt.filter((t) => !e.check(t)) : [];
    if (t.length == 0) {
      this.Render();
      return;
    }
    let n = window.setTimeout(this.Render, zt);
    Promise.all(t.map((t) => e.load(t)))
      .catch((e) => console.warn(`CRenderWhenLinksReady: font load failed`, e))
      .then(() => {
        (window.clearTimeout(n), this.Render());
      });
  }
  Render() {
    (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
  OnLinkLoad(e) {
    (e.currentTarget.removeEventListener(`load`, this.OnLinkLoad),
      A(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 && this.RenderWhenFontsReady());
  }
};
(I([f], Vt.prototype, `Render`, null),
  I([f], Vt.prototype, `OnLinkLoad`, null));
var U = e(ee()),
  Ht = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Minimized = 1)] = `Minimized`),
      (e[(e.Hidden = 2)] = `Hidden`),
      (e[(e.TooltipHint = 4)] = `TooltipHint`),
      (e[(e.NoTaskbarIcon = 8)] = `NoTaskbarIcon`),
      (e[(e.Resizable = 16)] = `Resizable`),
      (e[(e.NoScalePosition = 32)] = `NoScalePosition`),
      (e[(e.NoScaleSize = 64)] = `NoScaleSize`),
      (e[(e.Maximized = 128)] = `Maximized`),
      (e[(e.Composited = 256)] = `Composited`),
      (e[(e.NotFocusable = 512)] = `NotFocusable`),
      (e[(e.FullScreen = 1024)] = `FullScreen`),
      (e[(e.Fullscreen_Exclusive = 2048)] = `Fullscreen_Exclusive`),
      (e[(e.ApplyBrowserScaleToDimensions = 4096)] =
        `ApplyBrowserScaleToDimensions`),
      (e[(e.AlwaysOnTop = 8192)] = `AlwaysOnTop`),
      (e[(e.NoWindowShadow = 16384)] = `NoWindowShadow`),
      (e[(e.NoMinimize = 32768)] = `NoMinimize`),
      (e[(e.PopUpMenuHint = 65536)] = `PopUpMenuHint`),
      (e[(e.IgnoreSavedSize = 131072)] = `IgnoreSavedSize`),
      (e[(e.NoRoundedCorners = 262144)] = `NoRoundedCorners`),
      (e[(e.ForceRoundedCorners = 524288)] = `ForceRoundedCorners`),
      (e[(e.OverrideRedirect = 1048576)] = `OverrideRedirect`),
      (e[(e.IgnoreSteamDisplayScale = 2097152)] = `IgnoreSteamDisplayScale`),
      (e[(e.TransparentParentWindow = 4194304)] = `TransparentParentWindow`),
      (e[(e.DisableDPIScale = 8388608)] = `DisableDPIScale`),
      (e[(e.ForceBrowserVisible = 16777216)] = `ForceBrowserVisible`),
      (e[(e.NoWindowTransitions = 33554432)] = `NoWindowTransitions`),
      (e[(e.StartBelowSplash = 67108864)] = `StartBelowSplash`),
      (e[(e.SharedTexture = 134217728)] = `SharedTexture`),
      e
    );
  })({}),
  Ut = (function (e) {
    return (
      (e[(e.Overlay = 0)] = `Overlay`),
      (e[(e.Notification = 1)] = `Notification`),
      (e[(e.Tooltip = 2)] = `Tooltip`),
      (e[(e.PopupContextMenu = 3)] = `PopupContextMenu`),
      (e[(e.StandaloneContextMenu = 4)] = `StandaloneContextMenu`),
      e
    );
  })({});
function Wt() {
  return o() ? 256 : 0;
}
function Gt(e) {
  let t = 0;
  switch (e) {
    case 0:
      return ((t |= 8192), (t |= 8), (t |= 512), (t |= 4194304), t);
    case 1:
      return (
        (t |= Gt(0)),
        (t |= 16384),
        (t |= 262144),
        (t |= 1048576),
        (t |= 16777216),
        t
      );
    case 2:
      return (
        (t |= Gt(0)), (t |= 262144), (t |= 16384), (t |= 4), (t |= Wt()), t
      );
    case 3:
      return (
        (t |= 8),
        (t |= 262144),
        (t |= 16384),
        (t |= 65536),
        (t |= 4194304),
        (t |= Wt()),
        t
      );
    case 4:
      return (
        (t = 8),
        (t |= 262144),
        (t |= 16384),
        (t |= 1048576),
        (t |= 4194304),
        (t |= Wt()),
        t
      );
  }
}
function Kt() {
  let { ownerWindow: e } = Ce();
  return G.GetPopupForWindow(e)?.browser_info || Lt;
}
function qt() {
  let e = Ce(),
    t = U.useCallback(
      () => e.ownerWindow.SteamClient.Window.GetWindowDetails(),
      [e],
    ),
    [n, r] = U.useState(0),
    i = U.useCallback(() => r((e) => e + 1), [r]);
  ot(e.ownerWindow, `window_details_changed`, i);
  let a = { bUnderlaySupported: !0 },
    o = u(t, [t, n], a);
  return o === void 0 ? a : o;
}
var W = class {
  m_strName;
  m_strTitle;
  m_rgParams;
  m_popup;
  m_element;
  m_renderWhenReady;
  m_bCreateHidden;
  m_bCreated = !1;
  m_onCreateRender = null;
  m_bFocused = !1;
  constructor(e, t) {
    (l(this),
      k(
        e,
        `Name is required.  This is an internal name, different from title.`,
      ),
      (this.m_strName = e));
    let { title: n, eCreationFlags: r, ...i } = t;
    ((this.m_rgParams = { ...i, eCreationFlags: r ?? 0 }),
      this.m_rgParams.target_browser &&
        (this.m_strName += `_uid` + this.m_rgParams.target_browser.m_unPID),
      (this.m_bCreateHidden = !!(this.m_rgParams.eCreationFlags & 2)),
      (this.m_strTitle = n));
  }
  UpdateParamsBeforeShow(e) {
    return e;
  }
  OnDrop(e) {
    (console.log(`Ignoring drop onto toplevel window`, e),
      e.preventDefault(),
      e.stopPropagation());
  }
  OnDragOver(e) {
    (e.preventDefault(),
      (e.dataTransfer.dropEffect = `none`),
      e.stopPropagation());
  }
  OnMessage(e) {
    (e.data === `window_moved` && this.OnMove(),
      e.data === `window_resized` && this.OnResize(),
      e.data === `popup-created` && this.OnCreateInternal());
  }
  Show(e = S.k_EWindowBringToFrontAndForceOS) {
    let t;
    ((t =
      typeof e == `boolean`
        ? e
          ? S.k_EWindowBringToFrontAndForceOS
          : S.k_EWindowBringToFrontInvalid
        : e),
      window.SteamClient && (this.m_rgParams.eCreationFlags |= 2),
      this.m_rgParams.eCreationFlags & 512 &&
        (t = S.k_EWindowBringToFrontInvalid),
      this.BIsValid() &&
        (this.BIsClosed()
          ? ((this.m_popup = void 0), (this.m_element = void 0))
          : t != S.k_EWindowBringToFrontInvalid && this.Focus(t)));
    let n = G.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let r, i, a;
    (n
      ? ((i = n.m_element),
        (r = n.m_popup),
        (a = n.m_renderWhenReady),
        G.RemoveTrackedPopup(n),
        n.ReleasePopup(),
        r?.removeEventListener(`beforeunload`, n.OnBeforeUnloadEvent),
        r?.removeEventListener(`unload`, n.OnUnload),
        r?.removeEventListener(`resize`, n.OnResizeEvent),
        r?.removeEventListener(`focus`, this.OnFocusInternal),
        r?.removeEventListener(`blur`, this.OnBlurInternal),
        r?.removeEventListener(`drop`, n.OnDrop),
        r?.removeEventListener(`dragover`, n.OnDragOver),
        r?.removeEventListener(`message`, this.OnMessage))
      : (({ popup: r, element: i } = Yt.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new Vt(r?.document, i))),
      r &&
        i &&
        ((r.document.title = this.m_strTitle),
        r.addEventListener(`beforeunload`, this.OnBeforeUnloadEvent),
        r.addEventListener(`unload`, this.OnUnload),
        r.addEventListener(`resize`, this.OnResizeEvent),
        r.addEventListener(`focus`, this.OnFocusInternal),
        r.addEventListener(`blur`, this.OnBlurInternal),
        r.addEventListener(`drop`, this.OnDrop),
        r.addEventListener(`dragover`, this.OnDragOver),
        r.addEventListener(`message`, this.OnMessage),
        h.LANGUAGE &&
          (r.document.documentElement.setAttribute(`lang`, ie() ?? ``),
          F(h.LANGUAGE) &&
            r.document.documentElement.setAttribute(`dir`, `rtl`)),
        (this.m_popup = r),
        (this.m_element = i),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, t);
        })),
      G.AddTrackedPopup(this),
      n &&
        (this.OnCreateInternal(),
        t != S.k_EWindowBringToFrontInvalid && this.Focus(t)));
  }
  RemoveEventListeners() {
    (this.window?.removeEventListener(`beforeunload`, this.OnBeforeUnloadEvent),
      this.window?.removeEventListener(`unload`, this.OnUnload),
      this.window?.removeEventListener(`resize`, this.OnResizeEvent),
      this.window?.removeEventListener(`focus`, this.OnFocusInternal),
      this.window?.removeEventListener(`blur`, this.OnBlurInternal),
      this.window?.removeEventListener(`drop`, this.OnDrop),
      this.window?.removeEventListener(`dragover`, this.OnDragOver),
      this.window?.removeEventListener(`message`, this.OnMessage));
  }
  RenderInternal(e, t, n) {
    this.m_bCreated
      ? (this.browser_info &&
          wt(this.browser_info.m_eBrowserType) &&
          (t.ownerDocument.body.className += ` VR`),
        this.Render(e, t),
        this.OnLoad(),
        e?.SteamClient &&
          !this.m_bCreateHidden &&
          (n == S.k_EWindowBringToFrontInvalid
            ? e.SteamClient.Window.ShowWindow()
            : e.SteamClient.Window.BringToFront(n)))
      : (this.m_onCreateRender = () => this.RenderInternal(e, t, n));
  }
  OnCreateInternal() {
    this.m_bCreated ||
      ((this.m_bCreated = !0),
      this.OnCreate(),
      (this.m_onCreateRender &&= (this.m_onCreateRender(), null)));
  }
  OnCreate() {}
  OnResizeEvent() {
    this.OnResize();
  }
  OnBeforeUnloadEvent() {
    this.OnBeforeUnload();
  }
  OnUnload(e) {
    (this.RemoveEventListeners(),
      G.RemoveTrackedPopup(this),
      this.OnClose(),
      (this.m_popup = void 0));
  }
  get browser_info() {
    return this.m_rgParams.target_browser;
  }
  get window() {
    return this.m_popup;
  }
  get root_element() {
    return this.m_element;
  }
  get title() {
    return this.m_strTitle;
  }
  set title(e) {
    ((this.m_strTitle = e),
      this.m_popup && (this.m_popup.document.title = this.m_strTitle));
  }
  get params() {
    return this.m_rgParams;
  }
  Focus(e = S.k_EWindowBringToFrontAndForceOS) {
    this.m_popup &&
      e != S.k_EWindowBringToFrontInvalid &&
      (M(this.m_popup, `Window.BringToFront`)
        ? this.m_popup.SteamClient.Window.BringToFront(e)
        : this.m_popup.focus());
  }
  Close() {
    this.m_popup &&
      (M(this.m_popup, `Window.Close`)
        ? this.m_popup.SteamClient.Window.Close()
        : this.m_popup.close());
  }
  GetName() {
    return this.m_strName;
  }
  BIsValid() {
    return !!this.m_popup;
  }
  BIsClosed() {
    return !this.m_popup || this.m_popup.closed;
  }
  BIsVisible() {
    return !(
      !this.m_popup ||
      this.m_popup.closed ||
      this.m_popup.document.visibilityState != `visible`
    );
  }
  BIsFocused() {
    return this.BIsVisible() && !!this.m_popup?.document.hasFocus();
  }
  OnFocusInternal() {
    (this.m_popup && this.m_popup.document.body.classList.add(`WindowFocus`),
      (this.m_bFocused = !0),
      this.OnFocus());
  }
  OnBlurInternal() {
    (this.m_popup && this.m_popup.document.body.classList.remove(`WindowFocus`),
      (this.m_bFocused = !1),
      this.OnBlur());
  }
  get focused() {
    return this.m_bFocused;
  }
  GetWindowRestoreDetails() {
    return M(this.m_popup, `Window.GetWindowRestoreDetails`) &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve(``);
  }
  IsMinimized() {
    return M(this.m_popup, `Window.IsWindowMinimized`) && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return M(this.m_popup, `Window.IsWindowMaximized`) && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMaximized()
      : Promise.resolve(!1);
  }
  ReleasePopup() {
    (this.OnClose(), (this.m_popup = null));
  }
  OnMove() {}
  OnResize() {
    this.IsMaximized().then((e) => {
      e
        ? this.m_popup?.document.body.classList.add(`Maximized`)
        : this.m_popup?.document.body.classList.remove(`Maximized`);
    });
  }
  OnBeforeUnload() {}
  OnFocus() {}
  OnBlur() {}
  m_rgChildBrowserViews = [];
  get childBrowserViews() {
    return this.m_rgChildBrowserViews;
  }
  RegisterChildBrowserView(e) {
    return (
      this.m_rgChildBrowserViews.push(e),
      {
        Unregister: () =>
          (this.m_rgChildBrowserViews = this.m_rgChildBrowserViews.filter(
            (t) => t != e,
          )),
      }
    );
  }
};
(I([p], W.prototype, `m_bFocused`, void 0),
  I([f], W.prototype, `OnMessage`, null),
  I([f], W.prototype, `RenderInternal`, null),
  I([f], W.prototype, `OnCreateInternal`, null),
  I([f], W.prototype, `OnResizeEvent`, null),
  I([f], W.prototype, `OnBeforeUnloadEvent`, null),
  I([f], W.prototype, `OnUnload`, null),
  I([f], W.prototype, `OnFocusInternal`, null),
  I([f], W.prototype, `OnBlurInternal`, null));
var Jt = class extends W {
  m_strSavedDimensionsKey;
  m_strInitialSavedDimensionsKey;
  m_strInitialRestoreDetails;
  m_bExpires;
  constructor(e, t, n, r) {
    (super(e, n), this.SetSavedDimensionsKey(t), (this.m_bExpires = r));
  }
  BIsInOverlay() {
    return (
      this.browser_info &&
      this.browser_info.m_unPID != 0 &&
      this.browser_info.m_nBrowserID != -1
    );
  }
  SetSavedDimensionsKey(e) {
    this.m_strSavedDimensionsKey = e;
  }
  UpdateParamsBeforeShow(e) {
    return (
      this.m_strSavedDimensionsKey &&
      !e.bIgnoreSavedDimensions &&
      !e.strRestoreDetails
        ? ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          (e.strRestoreDetails = G.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          G.SetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
            e.strRestoreDetails,
            this.m_bExpires,
          )),
      e
    );
  }
  OnLoad() {
    this.GetWindowRestoreDetails().then((e) => {
      ((this.m_strInitialRestoreDetails = e), this.OnResizeComplete(e));
    });
  }
  OnMove() {
    (super.OnMove(), this.QueryAndStoreWindowPosition());
  }
  OnResize() {
    (super.OnResize(), this.QueryAndStoreWindowPosition());
  }
  OnResizeComplete(e) {}
  QueryAndStoreWindowPosition() {
    if (this.m_strInitialRestoreDetails) {
      let e = this.GetSavedDimensionsKey();
      this.m_popup?.setTimeout(() => {
        this.GetWindowRestoreDetails().then((t) => {
          let n =
            this.m_rgParams.strRestoreDetails == t &&
            e == this.m_strInitialSavedDimensionsKey;
          this.m_popup &&
            this.m_strSavedDimensionsKey &&
            t &&
            !n &&
            (G.SetRestoreDetails(e, t, this.m_bExpires),
            (this.m_rgParams.strRestoreDetails = t),
            (this.m_strInitialSavedDimensionsKey = e),
            this.OnResizeComplete(t));
        });
      }, 30);
    }
  }
  OnBeforeUnload() {
    (this.QueryAndStoreWindowPosition(), super.OnBeforeUnload());
  }
  OnClose() {}
  SaveWindowPosition(e) {
    (G.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e));
  }
};
I([f], Jt.prototype, `QueryAndStoreWindowPosition`, null);
var Yt = class {
  m_bShuttingDown = !1;
  m_mapPopups = p.map([], { deep: !1 });
  m_rgShutdownCallbacks = [];
  m_rgPopupCreatedCallbacks = new L();
  m_rgPopupDestroyedCallbacks = new L();
  m_unCurrentAccountID = 0;
  m_mapRestoreDetails = new Map();
  m_bSaveRequired = !1;
  m_DynamicCSSObserver;
  constructor() {
    if (`addEventListener` in window) {
      window.addEventListener(`beforeunload`, (e) => {
        this.m_bShuttingDown = !0;
        for (let e of this.m_rgShutdownCallbacks) e();
        let t = [];
        this.m_mapPopups.forEach((e) => {
          e.BIsValid() && !e.BIsClosed() && t.push(e);
        });
        for (let e of t)
          (M(e.window, `Browser.SetShouldExitSteamOnBrowserClosed`) &&
            e.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(!1),
            M(e.window, `Window.SetHideOnClose`) &&
              e.window.SteamClient.Window.SetHideOnClose(!1),
            e.Close());
        (this.m_bSaveRequired && this.SaveSavedDimensionStore(),
          this.m_mapPopups.clear());
      });
      let e = document.querySelector(`head`);
      (k(e, `Couldn't find head element`),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let e = ce();
            this.m_mapPopups.forEach((t) => {
              N(t.window.document, e, !1);
            });
          })),
          this.m_DynamicCSSObserver.observe(e, { childList: !0 })));
    }
  }
  BAnyPopupHasFocus() {
    for (let e of this.m_mapPopups.values()) if (e.focused) return !0;
    return !1;
  }
  BAnyMenuHasFocus() {
    for (let e of this.m_mapPopups.values())
      if (e.focused && (e.params.eCreationFlags ?? 0) & 8) return !0;
    return !1;
  }
  SetCurrentLoggedInAccountID(e) {
    this.m_unCurrentAccountID != e &&
      ((this.m_unCurrentAccountID = e),
      e ? this.LoadSavedDimensionStore() : this.ClearSavedDimensionStore());
  }
  AddShutdownCallback(e) {
    this.m_rgShutdownCallbacks.push(e);
  }
  AddPopupCreatedCallback(e) {
    return this.m_rgPopupCreatedCallbacks.Register(e);
  }
  AddPopupDestroyedCallback(e) {
    return this.m_rgPopupDestroyedCallbacks.Register(e);
  }
  AddTrackedPopup(e) {
    (this.m_mapPopups.set(e.GetName(), e),
      e.BIsValid() && this.m_rgPopupCreatedCallbacks.Dispatch(e));
  }
  RemoveTrackedPopup(e) {
    (this.m_rgPopupDestroyedCallbacks.Dispatch(e),
      this.m_mapPopups.delete(e.GetName()));
  }
  GetExistingPopup(e) {
    return this.m_mapPopups.get(e);
  }
  GetPopups() {
    return this.m_mapPopups.values();
  }
  GetPopupForWindow(e) {
    for (let t of this.m_mapPopups.values()) if (t.window === e) return t;
  }
  GetPopupForVROverlayKey(e) {
    if (e)
      return Array.from(this.m_mapPopups.values()).find(
        (t) => t.params.strVROverlayKey == e,
      );
  }
  ClosePopupsOwnedByBrowser(e) {
    this.m_mapPopups.forEach((t) => {
      t.browser_info &&
        t.browser_info.m_nBrowserID == e.m_nBrowserID &&
        t.browser_info.m_unPID == e.m_unPID &&
        t.Close();
    });
  }
  static CreatePopup(e, t) {
    let n = t.dimensions || {},
      r = n.width || 300,
      i = n.height || 300,
      a = t.title,
      o = `width=` + r + `,height=` + i;
    (n.left !== void 0 && (o += `,left=` + n.left),
      n.top !== void 0 && (o += `,top=` + n.top),
      (o += `,resizeable,status=0,toolbar=0,menubar=0,location=0`));
    let s = `about:blank`,
      c = [];
    (c.push(`createflags=` + t.eCreationFlags),
      t.minWidth && c.push(`minwidth=` + t.minWidth),
      t.minHeight && c.push(`minheight=` + t.minHeight),
      t.maxWidth && t.maxWidth != 1 / 0 && c.push(`maxwidth=` + t.maxWidth),
      t.maxHeight && t.maxHeight != 1 / 0 && c.push(`maxheight=` + t.maxHeight),
      t.target_browser
        ? (c.push(`pid=` + t.target_browser.m_unPID),
          c.push(`browser=` + t.target_browser.m_nBrowserID),
          t.target_browser.m_eBrowserType
            ? c.push(`browserType=` + t.target_browser.m_eBrowserType)
            : t.browserType && c.push(`browserType=` + t.browserType),
          t.availscreenwidth &&
            t.availscreenheight &&
            (c.push(`screenavailwidth=` + t.availscreenwidth),
            c.push(`screenavailheight=` + t.availscreenheight)))
        : t.browserType && c.push(`browserType=` + t.browserType),
      t.strVROverlayKey && c.push(`vrOverlayKey=` + t.strVROverlayKey),
      t.strRestoreDetails && c.push(`restoredetails=` + t.strRestoreDetails),
      t.window_opener_id && c.push(`openerid=` + t.window_opener_id),
      t.parent_container_popup_id &&
        c.push(`parentcontainerpopupid=` + t.parent_container_popup_id),
      t.center_on_window &&
        n.left === void 0 &&
        n.top === void 0 &&
        c.push(
          `centerOnBrowserID=` +
            t.center_on_window.SteamClient.Browser.GetBrowserID(),
        ),
      t.strUserAgent && c.push(`useragent=` + t.strUserAgent),
      t.hwndParent && c.push(`hwndParent=` + t.hwndParent),
      t.bPinned && c.push(`pinned=true`),
      t.bModal && c.push(`modal=true`),
      c && (s += `?` + c.join(`&`)));
    let l = (t.owner_window || window).open(s, e, o);
    if (!l)
      return (
        console.error(
          `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
        ),
        {}
      );
    let u = ``;
    t.html_class && (u = `class="${t.html_class}"`);
    let d = ``;
    t.body_class && (d = `class="${t.body_class}"`);
    let f = ``;
    t.body_role && (f = `role="${t.body_role}"`);
    let p = ``;
    t.popup_class && (p = `class="${t.popup_class}"`);
    let m = `<!DOCTYPE html><html ${u}><head><title></title></head><body ${d} ${f}><div id="popup_target" ${p}></div></body></html>`;
    return (
      l.document.write(m),
      (l.document.title = a),
      l.document.close(),
      ae(l, ce()),
      { popup: l, element: l.document.getElementById(`popup_target`) }
    );
  }
  BShuttingDown() {
    return this.m_bShuttingDown;
  }
  GetLocalStorageKey() {
    return `PopupSavedDimensions_` + this.m_unCurrentAccountID;
  }
  LoadSavedDimensionStore() {
    if (!this.m_unCurrentAccountID) return;
    let e = this.GetLocalStorageKey();
    this.m_mapRestoreDetails.clear();
    let t = window.localStorage.getItem(e);
    if (t)
      try {
        let e = JSON.parse(t);
        this.m_mapRestoreDetails = new Map(e);
      } catch {}
  }
  SaveSavedDimensionStore() {
    if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
    let e = this.GetLocalStorageKey(),
      t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
    try {
      (window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1));
    } catch (n) {
      if (`name` in n && n.name == `QuotaExceededError`) {
        console.log(`Quota exceeded`);
        for (let t of Object.keys(window.localStorage))
          t.startsWith(`PopupSavedDimensions_`) &&
            t != e &&
            window.localStorage.removeItem(t);
        (window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1));
      }
    }
  }
  DebouncedSaveSavedDimensionStore() {
    this.SaveSavedDimensionStore();
  }
  ClearSavedDimensionStore() {
    (this.m_mapRestoreDetails?.clear(), (this.m_bSaveRequired = !1));
  }
  GetRestoreDetails(e) {
    if (!this.m_mapRestoreDetails?.has(e)) return ``;
    let t = this.m_mapRestoreDetails.get(e);
    return (
      (t.last_used = Date.now()),
      (this.m_bSaveRequired = !0),
      t.strRestoreDetails
    );
  }
  SetRestoreDetails(e, t, n) {
    if (e) {
      if (t) {
        if (this.m_mapRestoreDetails.size > 50) {
          let e = null,
            t = Date.now();
          for (let n of Array.from(this.m_mapRestoreDetails.keys())) {
            let r = this.m_mapRestoreDetails.get(n);
            r.last_used < t && r.bExpires && ((t = r.last_used), (e = n));
          }
          e && this.m_mapRestoreDetails.delete(e);
        }
        let r = { strRestoreDetails: t, last_used: Date.now(), bExpires: n };
        this.m_mapRestoreDetails.set(e, r);
      } else this.m_mapRestoreDetails.delete(e);
      ((this.m_bSaveRequired = !0),
        this.m_bShuttingDown
          ? this.SaveSavedDimensionStore()
          : this.DebouncedSaveSavedDimensionStore());
    }
  }
};
I([f, me(100)], Yt.prototype, `DebouncedSaveSavedDimensionStore`, null);
var G = new Yt();
window.g_PopupManager = G;
function Xt(e) {
  let [t] = U.useState(() => new WeakMap());
  (0, U.useEffect)(() => {
    let n = (n) => {
        let r = e(n);
        r && t.set(n, r);
      },
      r = (e) => {
        let n = t.get(e);
        n && (n(), t.delete(e));
      },
      { Unregister: i } = G.AddPopupCreatedCallback(n),
      { Unregister: a } = G.AddPopupDestroyedCallback(r);
    return (
      Array.from(G.GetPopups()).forEach(n),
      () => {
        (i(), a(), Array.from(G.GetPopups()).forEach(r));
      }
    );
  }, [t, e]);
}
function Zt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Qt(e, t) {
  return (
    (Qt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Qt(e, t)
  );
}
function K(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Qt(e, t));
}
var $t = n((e, t) => {
    t.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
  }),
  en = n((e, t) => {
    var n = $t();
    function r() {}
    function i() {}
    ((i.resetWarningCache = r),
      (t.exports = function () {
        function e(e, t, r, i, a, o) {
          if (o !== n) {
            var s = Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
            );
            throw ((s.name = `Invariant Violation`), s);
          }
        }
        e.isRequired = e;
        function t() {
          return e;
        }
        var a = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: r,
        };
        return ((a.PropTypes = a), a);
      }));
  }),
  tn = n((e, t) => {
    t.exports = en()();
  });
function nn(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (` ` + (e.className.baseVal || e.className) + ` `).indexOf(
        ` ` + t + ` `,
      ) !== -1;
}
function rn(e, t) {
  e.classList
    ? e.classList.add(t)
    : nn(e, t) ||
      (typeof e.className == `string`
        ? (e.className = e.className + ` ` + t)
        : e.setAttribute(
            `class`,
            ((e.className && e.className.baseVal) || ``) + ` ` + t,
          ));
}
function an(e, t) {
  return e
    .replace(RegExp(`(^|\\s)` + t + `(?:\\s|$)`, `g`), `$1`)
    .replace(/\s+/g, ` `)
    .replace(/^\s*|\s*$/g, ``);
}
function on(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == `string`
      ? (e.className = an(e.className, t))
      : e.setAttribute(
          `class`,
          an((e.className && e.className.baseVal) || ``, t),
        );
}
var sn = e(r()),
  cn = { disabled: !1 },
  ln = U.createContext(null),
  un = function (e) {
    return e.scrollTop;
  },
  dn = `unmounted`,
  fn = `exited`,
  pn = `entering`,
  mn = `entered`,
  hn = `exiting`,
  gn = (function (e) {
    K(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this,
        i = n,
        a = i && !i.isMounting ? t.enter : t.appear,
        o;
      return (
        (r.appearStatus = null),
        t.in
          ? a
            ? ((o = fn), (r.appearStatus = pn))
            : (o = mn)
          : (o = t.unmountOnExit || t.mountOnEnter ? dn : fn),
        (r.state = { status: o }),
        (r.nextCallback = null),
        r
      );
    }
    t.getDerivedStateFromProps = function (e, t) {
      return e.in && t.status === `unmounted` ? { status: fn } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== `entering` && n !== `entered` && (t = pn)
            : (n === `entering` || n === `entered`) && (t = hn);
        }
        this.updateStatus(!1, t);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var e = this.props.timeout,
          t = (n = r = e),
          n,
          r;
        return (
          e != null &&
            typeof e != `number` &&
            ((t = e.exit),
            (n = e.enter),
            (r = e.appear === void 0 ? n : e.appear)),
          { exit: t, enter: n, appear: r }
        );
      }),
      (n.updateStatus = function (e, t) {
        if ((e === void 0 && (e = !1), t !== null)) {
          if ((this.cancelNextCallback(), t === `entering`)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : sn.default.findDOMNode(this);
              n && un(n);
            }
            this.performEnter(e);
          } else this.performExit();
        } else
          this.props.unmountOnExit &&
            this.state.status === `exited` &&
            this.setState({ status: dn });
      }),
      (n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          i = this.props.nodeRef ? [r] : [sn.default.findDOMNode(this), r],
          a = i[0],
          o = i[1],
          s = this.getTimeouts(),
          c = r ? s.appear : s.enter;
        (!e && !n) || cn.disabled
          ? this.safeSetState({ status: mn }, function () {
              t.props.onEntered(a);
            })
          : (this.props.onEnter(a, o),
            this.safeSetState({ status: pn }, function () {
              (t.props.onEntering(a, o),
                t.onTransitionEnd(c, function () {
                  t.safeSetState({ status: mn }, function () {
                    t.props.onEntered(a, o);
                  });
                }));
            }));
      }),
      (n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : sn.default.findDOMNode(this);
        !t || cn.disabled
          ? this.safeSetState({ status: fn }, function () {
              e.props.onExited(r);
            })
          : (this.props.onExit(r),
            this.safeSetState({ status: hn }, function () {
              (e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: fn }, function () {
                    e.props.onExited(r);
                  });
                }));
            }));
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (e, t) {
        ((t = this.setNextCallback(t)), this.setState(e, t));
      }),
      (n.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : sn.default.findDOMNode(this),
          r = e == null && !this.props.addEndListener;
        if (!n || r) setTimeout(this.nextCallback, 0);
        else {
          if (this.props.addEndListener) {
            var i = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              a = i[0],
              o = i[1];
            this.props.addEndListener(a, o);
          }
          e != null && setTimeout(this.nextCallback, e);
        }
      }),
      (n.render = function () {
        var e = this.state.status;
        if (e === `unmounted`) return null;
        var t = this.props,
          n = t.children;
        (t.in,
          t.mountOnEnter,
          t.unmountOnExit,
          t.appear,
          t.enter,
          t.exit,
          t.timeout,
          t.addEndListener,
          t.onEnter,
          t.onEntering,
          t.onEntered,
          t.onExit,
          t.onExiting,
          t.onExited,
          t.nodeRef);
        var r = Zt(t, [
          `children`,
          `in`,
          `mountOnEnter`,
          `unmountOnExit`,
          `appear`,
          `enter`,
          `exit`,
          `timeout`,
          `addEndListener`,
          `onEnter`,
          `onEntering`,
          `onEntered`,
          `onExit`,
          `onExiting`,
          `onExited`,
          `nodeRef`,
        ]);
        return U.createElement(
          ln.Provider,
          { value: null },
          typeof n == `function`
            ? n(e, r)
            : U.cloneElement(U.Children.only(n), r),
        );
      }),
      t
    );
  })(U.Component);
((gn.contextType = ln), (gn.propTypes = {}));
function _n() {}
((gn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _n,
  onEntering: _n,
  onEntered: _n,
  onExit: _n,
  onExiting: _n,
  onExited: _n,
}),
  (gn.UNMOUNTED = dn),
  (gn.EXITED = fn),
  (gn.ENTERING = pn),
  (gn.ENTERED = mn),
  (gn.EXITING = hn));
var vn = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return rn(e, t);
      })
    );
  },
  yn = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return on(e, t);
      })
    );
  },
  bn = (function (e) {
    K(t, e);
    function t() {
      var t,
        n = [...arguments];
      return (
        (t = e.call.apply(e, [this].concat(n)) || this),
        (t.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (t.onEnter = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1];
          (t.removeClasses(i, `exit`),
            t.addClass(i, a ? `appear` : `enter`, `base`),
            t.props.onEnter && t.props.onEnter(e, n));
        }),
        (t.onEntering = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.addClass(i, a, `active`),
            t.props.onEntering && t.props.onEntering(e, n));
        }),
        (t.onEntered = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.removeClasses(i, a),
            t.addClass(i, a, `done`),
            t.props.onEntered && t.props.onEntered(e, n));
        }),
        (t.onExit = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `appear`),
            t.removeClasses(n, `enter`),
            t.addClass(n, `exit`, `base`),
            t.props.onExit && t.props.onExit(e));
        }),
        (t.onExiting = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.addClass(n, `exit`, `active`),
            t.props.onExiting && t.props.onExiting(e));
        }),
        (t.onExited = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `exit`),
            t.addClass(n, `exit`, `done`),
            t.props.onExited && t.props.onExited(e));
        }),
        (t.resolveArguments = function (e, n) {
          return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
        }),
        (t.getClassNames = function (e) {
          var n = t.props.classNames,
            r = typeof n == `string`,
            i = r && n ? n + `-` : ``,
            a = r ? `` + i + e : n[e];
          return {
            baseClassName: a,
            activeClassName: r ? a + `-active` : n[e + `Active`],
            doneClassName: r ? a + `-done` : n[e + `Done`],
          };
        }),
        t
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (e, t, n) {
        var r = this.getClassNames(t)[n + `ClassName`],
          i = this.getClassNames(`enter`).doneClassName;
        (t === `appear` && n === `done` && i && (r += ` ` + i),
          n === `active` && e && un(e),
          r && ((this.appliedClasses[t][n] = r), vn(e, r)));
      }),
      (n.removeClasses = function (e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          i = n.active,
          a = n.done;
        ((this.appliedClasses[t] = {}),
          r && yn(e, r),
          i && yn(e, i),
          a && yn(e, a));
      }),
      (n.render = function () {
        var e = this.props;
        e.classNames;
        var t = Zt(e, [`classNames`]);
        return U.createElement(
          gn,
          ye({}, t, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(U.Component);
((bn.defaultProps = { classNames: `` }), (bn.propTypes = {}));
function xn(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function Sn(e, t) {
  var n = function (e) {
      return t && (0, U.isValidElement)(e) ? t(e) : e;
    },
    r = Object.create(null);
  return (
    e &&
      U.Children.map(e, function (e) {
        return e;
      }).forEach(function (e) {
        r[e.key] = n(e);
      }),
    r
  );
}
function Cn(e, t) {
  ((e ||= {}), (t ||= {}));
  function n(n) {
    return n in t ? t[n] : e[n];
  }
  var r = Object.create(null),
    i = [];
  for (var a in e) a in t ? i.length && ((r[a] = i), (i = [])) : i.push(a);
  var o,
    s = {};
  for (var c in t) {
    if (r[c])
      for (o = 0; o < r[c].length; o++) {
        var l = r[c][o];
        s[r[c][o]] = n(l);
      }
    s[c] = n(c);
  }
  for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
  return s;
}
function wn(e, t, n) {
  return n[t] == null ? e.props[t] : n[t];
}
function Tn(e, t) {
  return Sn(e.children, function (n) {
    return (0, U.cloneElement)(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: wn(n, `appear`, e),
      enter: wn(n, `enter`, e),
      exit: wn(n, `exit`, e),
    });
  });
}
function En(e, t, n) {
  var r = Sn(e.children),
    i = Cn(t, r);
  return (
    Object.keys(i).forEach(function (a) {
      var o = i[a];
      if ((0, U.isValidElement)(o)) {
        var s = a in t,
          c = a in r,
          l = t[a],
          u = (0, U.isValidElement)(l) && !l.props.in;
        c && (!s || u)
          ? (i[a] = (0, U.cloneElement)(o, {
              onExited: n.bind(null, o),
              in: !0,
              exit: wn(o, `exit`, e),
              enter: wn(o, `enter`, e),
            }))
          : !c && s && !u
            ? (i[a] = (0, U.cloneElement)(o, { in: !1 }))
            : c &&
              s &&
              (0, U.isValidElement)(l) &&
              (i[a] = (0, U.cloneElement)(o, {
                onExited: n.bind(null, o),
                in: l.props.in,
                exit: wn(o, `exit`, e),
                enter: wn(o, `enter`, e),
              }));
      }
    }),
    i
  );
}
var Dn =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  On = {
    component: `div`,
    childFactory: function (e) {
      return e;
    },
  },
  kn = (function (e) {
    K(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this;
      return (
        (r.state = {
          contextValue: { isMounting: !0 },
          handleExited: r.handleExited.bind(xn(r)),
          firstRender: !0,
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        ((this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (e, t) {
        var n = t.children,
          r = t.handleExited;
        return {
          children: t.firstRender ? Tn(e, r) : En(e, n, r),
          firstRender: !1,
        };
      }),
      (n.handleExited = function (e, t) {
        var n = Sn(this.props.children);
        e.key in n ||
          (e.props.onExited && e.props.onExited(t),
          this.mounted &&
            this.setState(function (t) {
              var n = ye({}, t.children);
              return (delete n[e.key], { children: n });
            }));
      }),
      (n.render = function () {
        var e = this.props,
          t = e.component,
          n = e.childFactory,
          r = Zt(e, [`component`, `childFactory`]),
          i = this.state.contextValue,
          a = Dn(this.state.children).map(n);
        return (
          delete r.appear,
          delete r.enter,
          delete r.exit,
          t === null
            ? U.createElement(ln.Provider, { value: i }, a)
            : U.createElement(
                ln.Provider,
                { value: i },
                U.createElement(t, r, a),
              )
        );
      }),
      t
    );
  })(U.Component);
((kn.propTypes = {}), (kn.defaultProps = On));
var An = e(yt()),
  jn = class {
    activeObject;
    instance;
    constructor(e) {
      this.instance = new Mn(e, !1);
    }
  },
  Mn = class {
    m_parent;
    m_window;
    m_container = null;
    iIntervalShow;
    m_bRemoveOnHide;
    m_reactRoot;
    constructor(e, t = !0) {
      ((this.m_parent = e),
        (this.m_window = e.ownerDocument.defaultView),
        (this.m_bRemoveOnHide = t));
    }
    Show(e, t) {
      return (
        this.CancelShowInterval(),
        t
          ? new Promise((n, r) => {
              this.iIntervalShow = this.m_window.setTimeout(() => {
                let t = this.m_parent.ownerDocument;
                t.defaultView &&
                  !t.defaultView.closed &&
                  (this.InternalShow(e), n());
              }, t);
            })
          : (this.InternalShow(e), Promise.resolve())
      );
    }
    InternalShow(e) {
      (this.m_container ||
        ((this.m_container = this.m_parent.ownerDocument.createElement(`div`)),
        this.m_parent.appendChild(this.m_container)),
        (this.m_reactRoot ||= An.createRoot(this.m_container)),
        this.m_reactRoot.render(e));
    }
    Hide(e) {
      (this.CancelShowInterval(),
        e
          ? (this.iIntervalShow = this.m_window.setTimeout(() => {
              this.InternalHide();
            }, e))
          : this.InternalHide());
    }
    InternalHide() {
      ((this.m_reactRoot &&= (this.m_reactRoot.unmount(), void 0)),
        this.m_container &&
          this.m_bRemoveOnHide &&
          (this.m_parent.removeChild(this.m_container),
          (this.m_container = null)));
    }
    CancelShowInterval() {
      this.iIntervalShow !== void 0 &&
        (this.m_window.clearInterval(this.iIntervalShow),
        (this.iIntervalShow = void 0));
    }
    BIsChildElement(e) {
      return this.m_container && z(this.m_container, e);
    }
  },
  Nn = class {
    m_strUniqueID;
    m_mapEmbeddedHovers = new WeakMap();
    constructor(e) {
      this.m_strUniqueID = e;
    }
    ShowElementDelayed(e, t, n, r) {
      let i = this.GetEmbeddedElement(e);
      return ((i.activeObject = r), i.instance.Show(n, t));
    }
    ShowElement(e, t, n) {
      let r = this.GetEmbeddedElement(e);
      ((r.activeObject = n), r.instance.Show(t));
    }
    HideElement(e, t, n) {
      let r = this.GetEmbeddedElement(e);
      r.activeObject == t && ((r.activeObject = void 0), r.instance.Hide(n));
    }
    GetEmbeddedElement(e) {
      let t = this.m_mapEmbeddedHovers.get(e);
      return (
        t || ((t = new jn(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t
      );
    }
  },
  Pn = class e {
    key;
    static sm_lastKey = 0;
    ModalClosedCallback = new L();
    constructor() {
      this.key = `Modal_${e.sm_lastKey++}`;
    }
  },
  Fn = class extends Pn {
    element;
    ModalUpdatedCallback = new L();
    constructor(e) {
      (super(), (this.element = e));
    }
    UpdateModal(e) {
      ((this.element = e), this.ModalUpdatedCallback.Dispatch());
    }
  },
  In = class extends Pn {
    m_OnElementReadyCallbacks = new L();
    m_OnActiveModalCallbacks = new L();
    constructor() {
      super();
    }
    get OnElementReadyCallbacks() {
      return this.m_OnElementReadyCallbacks;
    }
    get OnModalActiveCallbacks() {
      return this.m_OnActiveModalCallbacks;
    }
    RefModalElement(e) {
      e && this.m_OnElementReadyCallbacks.Dispatch(e);
    }
    SetActive(e) {
      this.m_OnActiveModalCallbacks.Dispatch(e);
    }
  };
I([f], In.prototype, `RefModalElement`, null);
var Ln = class extends Fn {
    m_strName;
    m_modalProps;
    m_options;
    constructor(e, t, n, r) {
      (super(t),
        (this.m_strName = e),
        (this.m_modalProps = n),
        (this.m_options = r));
    }
    get name() {
      return this.m_strName;
    }
    get modalProps() {
      return this.m_modalProps;
    }
    get options() {
      return this.m_options;
    }
  },
  q = ht(),
  Rn = U.createContext(null);
function zn(e) {
  let {
      refContextMenuManager: t,
      bRegisterMenuManager: n = !0,
      children: r,
    } = e,
    i = Ce()?.ownerWindow || window,
    a = U.useRef(void 0);
  return (
    (a.current ||= new je()),
    U.useLayoutEffect(() => {
      if (n)
        return (
          Le.SetMenuManager(i, a.current), () => Le.SetMenuManager(i, void 0)
        );
    }, [i, n]),
    U.useLayoutEffect(() => (P(t, a.current), () => P(t, void 0)), [t]),
    (0, q.jsx)(Rn.Provider, { value: a.current, children: r })
  );
}
function Bn() {
  return U.useContext(Rn);
}
var Vn = U.createContext({ body_class: `` });
function Hn() {
  return U.useContext(Vn);
}
function Un(e) {
  let { body_class: t, children: n, bReplace: r } = e,
    i = Hn(),
    a = U.useMemo(
      () => ({ body_class: r ? (t ?? ``) : Wn(i.body_class, t) }),
      [i, t, r],
    );
  return (0, q.jsx)(Vn.Provider, { value: a, children: n });
}
function Wn(e, t) {
  let n = e ? e.split(/\s/) : [];
  return (n.push(...(t ? t.split(/\s/) : [])), D(n).join(` `));
}
function Gn(e, t) {
  let n = U.useCallback(
      (n, r) => {
        (e?.onCreate && e.onCreate(n, r), t?.onCreate && t.onCreate(n, r));
      },
      [e, t],
    ),
    r = U.useCallback(
      (n, r) => {
        (e?.onLoad && e.onLoad(n, r), t?.onLoad && t.onLoad(n, r));
      },
      [e, t],
    ),
    i = U.useCallback(
      (n, r) => {
        (e?.onClose && e.onClose(n, r), t?.onClose && t.onClose(n, r));
      },
      [e, t],
    ),
    a = U.useCallback(
      (n, r) => {
        (e?.onBlur && e.onBlur(n, r), t?.onBlur && t.onBlur(n, r));
      },
      [e, t],
    ),
    o = U.useCallback(
      (n, r) => {
        (e?.onFocus && e.onFocus(n, r), t?.onFocus && t.onFocus(n, r));
      },
      [e, t],
    ),
    s = U.useCallback(
      (n, r) => {
        (e?.onMove && e.onMove(n, r), t?.onMove && t.onMove(n, r));
      },
      [e, t],
    ),
    c = U.useCallback(
      (n, r) => {
        (e?.onResize && e.onResize(n, r), t?.onResize && t.onResize(n, r));
      },
      [e, t],
    ),
    l = U.useCallback(
      (n) => (
        e?.updateParamsBeforeShow && (n = e.updateParamsBeforeShow(n)),
        t?.updateParamsBeforeShow && (n = t.updateParamsBeforeShow(n)),
        n
      ),
      [e, t],
    );
  return {
    onCreate: e?.onCreate || t?.onCreate ? n : void 0,
    onLoad: e?.onLoad || t?.onLoad ? r : void 0,
    onClose: e?.onClose || t?.onClose ? i : void 0,
    onBlur: e?.onBlur || t?.onBlur ? a : void 0,
    onFocus: e?.onFocus || t?.onFocus ? o : void 0,
    onMove: e?.onMove || t?.onMove ? s : void 0,
    onResize: e?.onResize || t?.onResize ? c : void 0,
    updateParamsBeforeShow:
      e?.updateParamsBeforeShow || t?.updateParamsBeforeShow ? l : void 0,
  };
}
function Kn(e, t, n) {
  let r = U.useRef(void 0),
    [i, a] = U.useState(void 0),
    o = Hn();
  return (
    (r.current ||= new Jn(e, qn(t, o), a)),
    (r.current.m_callbacks = n),
    U.useEffect(
      () => (
        r.current?.params.bNoInitialShow ||
          r.current?.Show(
            r.current?.params.eWindowBringToFront ??
              S.k_EWindowBringToFrontAndForceOS,
          ),
        () => {
          ((r.current.m_callbacks = void 0),
            r.current.window?.SteamClient.Window.SetHideOnClose &&
              r.current.window?.SteamClient.Window.SetHideOnClose(!1),
            r.current.Close());
        }
      ),
      [],
    ),
    U.useEffect(() => {
      r.current.window?.SteamClient.Window.SetHideOnClose &&
        r.current.window?.SteamClient.Window.SetHideOnClose(!!t.bHideOnClose);
    }, [t.bHideOnClose]),
    { popup: r.current.window, element: i, popupObj: r.current }
  );
}
function qn(e, t) {
  return { ...e, body_class: V(e.body_class, t.body_class) };
}
var Jn = class extends W {
  m_callbacks;
  m_fnReadyToRender;
  constructor(e, t, n) {
    (super(e, t), (this.m_fnReadyToRender = n));
  }
  DoCallback(e) {
    this.m_callbacks?.[e]?.(this.m_popup, this.m_element);
  }
  UpdateParamsBeforeShow(e) {
    return this.m_callbacks?.updateParamsBeforeShow
      ? this.m_callbacks.updateParamsBeforeShow(e)
      : e;
  }
  OnCreate() {
    this.m_callbacks?.onCreate &&
      this.m_callbacks.onCreate(this.m_popup, this.m_element);
  }
  OnBlur() {
    this.DoCallback(`onBlur`);
  }
  OnFocus() {
    this.DoCallback(`onFocus`);
  }
  OnLoad() {
    this.DoCallback(`onLoad`);
  }
  OnMove() {
    this.DoCallback(`onMove`);
  }
  OnResize() {
    this.DoCallback(`onResize`);
  }
  OnClose() {
    (this.DoCallback(`onClose`), this.m_fnReadyToRender(void 0));
  }
  Render(e, t) {
    this.m_fnReadyToRender(t);
  }
};
function Yn(e) {
  let t = bt();
  U.useEffect(() => {
    let e = new vt(t);
    G.SetCurrentLoggedInAccountID(e.GetAccountID());
  }, [t]);
  let n = U.useRef(void 0),
    r = U.useCallback(
      (t) => (
        !t.bIgnoreSavedDimensions && !t.strRestoreDetails
          ? (t.strRestoreDetails = G.GetRestoreDetails(e))
          : t.strRestoreDetails &&
            G.SetRestoreDetails(e, t.strRestoreDetails, !1),
        t
      ),
      [e],
    ),
    i = U.useCallback(
      (t, r, i) => {
        n.current &&
          t.setTimeout(() => {
            t.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
              let a = n.current != r;
              t &&
                r &&
                (a || i) &&
                (G.SetRestoreDetails(e, r, !1), (n.current = r));
            });
          }, 30);
      },
      [e],
    ),
    a = U.useCallback(
      (e, t) => {
        e.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
          ((n.current = r), i(e, t, !0));
        });
      },
      [i],
    );
  return e
    ? { updateParamsBeforeShow: r, onMove: i, onResize: i, onLoad: a }
    : null;
}
function Xn(e) {
  return function (t) {
    return (0, q.jsx)(J, { children: (0, q.jsx)(e, { ...t }) });
  };
}
function Zn(e) {
  return (0, q.jsx)(q.Fragment, {
    children: U.Children.map(e.children, (e) => (0, q.jsx)(J, { children: e })),
  });
}
var J = class extends U.Component {
  state = {};
  constructor(e) {
    (super(e), (this.state.lastErrorKey = e.errorKey));
  }
  componentDidCatch(e, t) {
    (g()
      .ReportError(e, { strComponentStack: t.componentStack || void 0 })
      .then((e) => e && this.setState({ identifierHash: e.identifierHash })),
      this.setState({
        error: { error: e, info: t },
        lastErrorKey: this.props.errorKey,
      }));
  }
  Reset() {
    this.setState({ error: void 0 });
  }
  render() {
    let { children: e, fallback: t, errorKey: n } = this.props,
      { error: r, identifierHash: i, lastErrorKey: a } = this.state;
    return r && n == a
      ? t === void 0
        ? g().reporting_enabled
          ? (0, q.jsx)($n, {
              error: r,
              identifierHash: i,
              store: g(),
              onRefresh: this.Reset,
            })
          : (0, q.jsx)(Qn, { error: r, onDismiss: this.Reset })
        : typeof t == `function`
          ? t(r.error)
          : t
      : e || null;
  }
};
I([f], J.prototype, `Reset`, null);
var Qn = ({ error: e, onDismiss: t }) => {
    let n = e.error ? e.error.stack : `Stack missing`,
      r = e.info ? e.info.componentStack : ``,
      i = (e.error && e.error.message) || `unknown error`;
    return (0, q.jsxs)(tr, {
      children: [
        (0, q.jsxs)(nr, { children: [`Error: "`, i, `"`] }),
        `\xA0\xA0\xA0`,
        (0, q.jsx)(er, { onClick: t, children: `(x) Dismiss` }),
        (0, q.jsx)(`br`, {}),
        (0, q.jsx)(rr, { children: n }),
        (0, q.jsxs)(rr, {
          children: [`The error occurred while rendering:`, r],
        }),
      ],
    });
  },
  $n = (e) => {
    let { error: t, onRefresh: n, identifierHash: r, store: i } = e,
      a = (t.error && t.error.message) || `unknown error`,
      o = `${i.product}_${i.version}_${r}`;
    return (0, q.jsxs)(tr, {
      children: [
        (0, q.jsxs)(nr, {
          children: [
            `Something went wrong while displaying this content. `,
            (0, q.jsx)(er, { onClick: n, children: `Refresh` }),
          ],
        }),
        (0, q.jsxs)(rr, { children: [`Error Reference: `, o] }),
        (0, q.jsx)(rr, { children: a }),
      ],
    });
  },
  er = ({ onClick: e, children: t }) => {
    let n = U.useRef(null),
      r = Xe();
    return (
      U.useEffect(() => {
        let e = n.current;
        r && e && !e.NavTree().GetLastFocusedNode() && e.TakeFocus();
      }, [r]),
      (0, q.jsx)(it, {
        navRef: n,
        style: {
          color: `inherit`,
          textDecoration: `underline`,
          cursor: `pointer`,
        },
        onClick: (t) => {
          (t.preventDefault(), e());
        },
        children: t,
      })
    );
  },
  tr = ({ children: e }) =>
    (0, q.jsx)(`div`, {
      style: {
        overflow: `auto`,
        marginLeft: `15px`,
        color: `white`,
        fontSize: `16px`,
        userSelect: `auto`,
        backgroundColor: `black`,
      },
      className: `ErrorBoundary`,
      children: e,
    }),
  nr = ({ children: e }) =>
    (0, q.jsx)(`h1`, {
      style: {
        fontSize: `20px`,
        display: `inline-block`,
        marginTop: `15px`,
        userSelect: `auto`,
      },
      children: e,
    }),
  rr = ({ children: e }) =>
    (0, q.jsx)(`pre`, {
      style: { marginTop: `15px`, opacity: 0.7, userSelect: `auto` },
      children: e,
    });
function ir(e) {
  let { managerOverride: t, bSuppressMouseOverlay: n } = e,
    r = c(),
    i = Kt(),
    a = Bn(),
    o = t ?? a;
  m(o.OnMenusChanged, r);
  let s = !n && o.BShouldRenderMouseOverlay(),
    l = o.GetAllMenus();
  return (0, q.jsxs)(q.Fragment, {
    children: [
      s && (0, q.jsx)(Ve, {}),
      l.map((e) =>
        (0, q.jsx)(
          J,
          { children: (0, q.jsx)(ar, { instance: e, browserInfo: i }) },
          e.key,
        ),
      ),
    ],
  });
}
function ar(e) {
  let { instance: t, browserInfo: n, children: r } = e,
    i = Br(),
    a = Ce().ownerWindow,
    o = U.useRef(void 0);
  o.current === void 0 &&
    (o.current =
      (t.options.bForcePopup || a.innerWidth < 400 || i?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let s = U.useMemo(() => ({ instance: t, styles: xe, presentation: 0 }), [t]),
    c = r || t.ReactElement;
  return (0, q.jsx)(Re.Provider, {
    value: s,
    children: o.current
      ? (0, q.jsx)(sr, { instance: t, browserInfo: n, children: c })
      : (0, q.jsx)(or, { instance: t, children: c }),
  });
}
function or(e) {
  let { instance: t, children: n } = e;
  return (0, q.jsx)(Ee, { ...t.position, children: n });
}
function sr(e) {
  let { instance: t, browserInfo: n, children: r } = e,
    [i, a] = U.useState(),
    o = Ce().ownerWindow,
    s = o.SteamClient.Browser.GetBrowserID(),
    c = U.useCallback(
      (e) => {
        let { options: n, position: r } = t,
          i = r.element;
        if (n.bScreenCoordinates)
          e.dimensions = {
            left: r.clientX,
            top: r.clientY,
            width: 2,
            height: 1,
          };
        else {
          let t = se(o, i.getBoundingClientRect());
          ((e.dimensions = { left: t.right, top: t.top, width: 2, height: 1 }),
            (e.availscreenwidth = o.screen.availWidth),
            (e.availscreenheight = o.screen.availHeight));
        }
        return e;
      },
      [o, t],
    ),
    l = t.options.bStandalone
      ? Gt(Ut.StandaloneContextMenu)
      : Gt(Ut.PopupContextMenu);
  (t.options.bCreateHidden && (l |= Ht.Hidden),
    t.options.bAlwaysOnTop && (l |= Ht.AlwaysOnTop));
  let { popupObj: u, element: d } = Kn(
    `contextmenu_` + t.key,
    {
      title: t.options.title || `Menu`,
      html_class: V(be, `client_chat_frame`, t.options.bStandalone && void 0),
      popup_class: void 0,
      body_class: V(void 0, `ContextMenuPopupBody`),
      replace_existing_popup: !1,
      target_browser: n,
      window_opener_id: s,
      bHideOnClose: !0,
      eCreationFlags: l,
    },
    { updateParamsBeforeShow: c },
  );
  return (
    (0, U.useEffect)(() => {
      if (u) {
        if (t.visible) {
          if (i) {
            (i.PositionMenu(), i.PositionPopupWindow());
            let e = t.options.bNoFocusWhenShown
              ? S.k_EWindowBringToFrontWithoutForcingOS
              : S.k_EWindowBringToFrontAndForceOS;
            t.TakeFocus(e);
          }
        } else
          t.options.bRetainOnHide &&
            window.setTimeout(() => {
              u.window?.SteamClient.Window.HideWindow();
            }, 30);
      }
    }, [u, t, t.visible, i]),
    Hr(u.window),
    U.useEffect(() => {
      t.SetPopup(u);
    }, [t, u]),
    d
      ? _t(
          (0, q.jsx)(Ee, {
            ref: a,
            ...t.position,
            parentWin: o,
            popup: u,
            children: r,
          }),
          d,
        )
      : null
  );
}
function cr(e) {
  let [t, n] = (0, U.useState)(!0);
  return (
    (0, U.useEffect)(() => {
      (0, U.startTransition)(() => {
        n(!0);
      });
    }, []),
    t ? e.children : (e.fallback ?? null)
  );
}
function lr(e) {
  let [t, n] = U.useState(!1),
    r = U.useCallback(() => {
      M(e, `Window.IsWindowMaximized`)
        ? e.SteamClient.Window.IsWindowMaximized().then((e) => {
            n(e);
          })
        : e?.screen &&
          n(
            e.screen.availWidth == e.innerWidth &&
              e.screen.availHeight == e.innerHeight,
          );
    }, [e]);
  return (
    U.useEffect(r, [r, e]), Ze(e, `resize`, r), ot(e, `window_resized`, r), t
  );
}
function ur(e, t = 100) {
  let [n, r] = U.useState(!1),
    i = U.useCallback(() => r(!0), [r]),
    a = U.useCallback(() => r(!1), [r]);
  return (
    U.useEffect(() => {
      if (e)
        return (
          e.addEventListener(`focus`, i),
          e.addEventListener(`blur`, a),
          () => {
            (e.removeEventListener(`focus`, i),
              e.removeEventListener(`blur`, a));
          }
        );
    }, [e, i, a]),
    O(n, t)
  );
}
function dr(e) {
  let [t, n] = U.useState(!1),
    r = U.useCallback(() => n(!0), [n]),
    i = U.useCallback(() => n(!1), [n]);
  return (
    U.useEffect(() => {
      if (e)
        return (
          e.document.body.addEventListener(`mouseenter`, r),
          e.document.body.addEventListener(`mouseleave`, i),
          () => {
            (e.document.body.removeEventListener(`mouseenter`, r),
              e.document.body.removeEventListener(`mouseleave`, i));
          }
        );
    }, [e, r, i]),
    t
  );
}
function fr(e) {
  let [t, n] = U.useState(0),
    r = U.useCallback(() => {
      n(e.innerWidth);
    }, [e]);
  return (U.useEffect(r, [r, e]), Ze(e, `resize`, r), t);
}
function pr(e, t = !0) {
  U.useEffect(
    () =>
      t && e && M(e, `Window.SetModal`) && M(e, `Window.BringToFront`)
        ? (e.SteamClient.Window.SetModal(!0),
          e.SteamClient.Window.BringToFront(),
          () => e.SteamClient.Window.SetModal(!1))
        : () => {},
    [e, t],
  );
}
function mr(e) {
  let { popup: t, onMaximize: n, bOSX: r } = e,
    i = lr(t),
    a = U.useCallback(() => {
      n
        ? n()
        : M(t, `Window.ToggleMaximize`) &&
          t.SteamClient.Window.ToggleMaximize();
    }, [t, n]);
  return (0, q.jsx)(_r, {
    className: V(i ? `restoreButton` : `maximizeButton`, `windowControlButton`),
    onClick: a,
    children: !r && (i ? (0, q.jsx)(ze, {}) : (0, q.jsx)(ge, {})),
  });
}
function hr(e) {
  let { popup: t, onMinimize: n, bOSX: r } = e,
    i = U.useCallback(() => {
      t.SteamClient.Window.Minimize();
    }, [t]);
  return (0, q.jsx)(_r, {
    className: `minimizeButton windowControlButton`,
    onClick: n ?? i,
    children: !r && (0, q.jsx)(_e, {}),
  });
}
function gr(e) {
  let { popup: t, onClose: n, bOSX: r } = e,
    i = U.useCallback(() => {
      t && (M(t, `Window.Close`) ? t.SteamClient.Window.Close() : t.close());
    }, [t]);
  return (0, q.jsx)(_r, {
    className: `closeButton windowControlButton`,
    onClick: n ?? i,
    children: !r && (0, q.jsx)(he, {}),
  });
}
function _r(e) {
  let { className: t, onClick: n, children: r } = e,
    i = U.useCallback(
      (e) => {
        n && (e.stopPropagation(), n(e));
      },
      [n],
    );
  return (0, q.jsx)(`div`, {
    className: V(`title-area-icon`, t),
    onClick: i,
    children: (0, q.jsx)(`div`, {
      className: `title-area-icon-inner`,
      children: r,
    }),
  });
}
function vr(e) {
  let {
      className: t,
      style: n,
      hideActions: r,
      hideClose: i,
      hideMin: a,
      hideMax: o,
      bOSX: c = s(),
      bForceWindowFocused: l,
      onMinimize: u,
      onMaximize: d,
      onClose: f,
      extraActions: p,
      popup: m,
      children: h,
    } = e,
    g = ur(m);
  return (0, q.jsxs)(`div`, {
    className: V(
      `TitleBar`,
      `title-area`,
      c && `OSX`,
      (g || l) && `WindowFocus`,
      t,
    ),
    style: n,
    children: [
      (0, q.jsx)(`div`, { className: `title-area-highlight` }),
      (0, q.jsx)(`div`, { className: `title-area-children`, children: h }),
      !r &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            p &&
              (0, q.jsx)(`div`, {
                className: `title-bar-actions extra-actions`,
                children: p,
              }),
            (0, q.jsxs)(`div`, {
              className: `title-bar-actions window-controls`,
              children: [
                !i && (0, q.jsx)(gr, { popup: m, onClose: f, bOSX: c }),
                !o && (0, q.jsx)(mr, { popup: m, onMaximize: d, bOSX: c }),
                !a && (0, q.jsx)(hr, { popup: m, onMinimize: u, bOSX: c }),
              ],
            }),
          ],
        }),
    ],
  });
}
function yr(e) {
  let { Modal: t } = e,
    { name: n, modalProps: r, options: i } = t,
    a = Ce().ownerWindow,
    { popup: o, element: s } = Kn(
      n,
      {
        title: r.strTitle,
        html_class:
          `client_chat_frame fullheight ModalDialogPopup LegacyPopup ` +
          (r.className || ``),
        body_class: `fullheight ModalDialogBody`,
        popup_class: `fullheight popup_chat_frame`,
        owner_window: void 0,
        replace_existing_popup: !0,
        target_browser: r.browserContext,
        availscreenwidth: a.screen.availWidth,
        availscreenheight: a.screen.availHeight,
        bModal: r.bHideMainWindowForPopouts,
      },
      {
        updateParamsBeforeShow: (e) => br(e, r, i, a),
        onClose: () => r.fnOnClose && r.fnOnClose(),
      },
    ),
    c = U.useCallback(() => {
      r.bHideMainWindowForPopouts && o?.SteamClient.Window.BringToFront();
    }, [r.bHideMainWindowForPopouts, o]);
  Ze(a, `click`, c);
  let l = i?.bHideActions,
    u =
      typeof i?.nDragAreaHeight == `number`
        ? { height: i.nDragAreaHeight }
        : void 0;
  return s
    ? _t(
        (0, q.jsx)(ue, {
          ownerWindow: o,
          children: (0, q.jsxs)(`div`, {
            className: `PopupFullWindow`,
            onContextMenu: Ae,
            children: [
              (0, q.jsx)(vr, {
                hideMin: !0,
                hideMax: !0,
                popup: o,
                hideActions: l,
                style: u,
              }),
              (0, q.jsx)(zr, {
                browserInfo: r.browserContext,
                bCenterPopupsOnWindow: i.bCenterOnWindow,
                children: (0, q.jsx)(U.Suspense, {
                  fallback: null,
                  children: t.element,
                }),
              }),
            ],
          }),
        }),
        s,
      )
    : null;
}
function br(e, t, n, r) {
  let i,
    a,
    o = t.popupWidth || 500,
    s = t.popupHeight || 400,
    c;
  if (h.IN_CLIENT && r?.SteamClient?.Browser?.GetBrowserID)
    c = r.SteamClient.Browser.GetBrowserID();
  else {
    let e = r.screen;
    ((i = (e.availWidth - o) / 2), (a = (e.availHeight - s) / 2));
    let t = e;
    t.availLeft !== void 0 &&
      t.availTop !== void 0 &&
      ((i += t.availLeft), (a += t.availTop));
  }
  return {
    ...e,
    dimensions: { width: o, height: s, left: i, top: a },
    center_on_window: n.bCenterOnWindow ? r : void 0,
    window_opener_id: c,
  };
}
var xr = (0, U.createContext)(!1);
function Sr() {
  return (0, U.useContext)(xr);
}
function Cr(e) {
  let { ModalManager: t } = e,
    [n, r] = U.useState(void 0),
    [i, a] = U.useState(!0),
    o = U.useCallback(() => {
      U.startTransition(() => {
        a(!0);
      });
    }, []);
  (U.useEffect(() => t.RegisterMeasureModalCallback(o).Unregister, [t, o]),
    U.useLayoutEffect(() => {
      n ||
        U.startTransition(() => {
          (r(t.TakeMeasureModalRequest()), a(!1));
        });
    }, [t, n, i]));
  let s = U.useCallback((e) => {
    U.startTransition(() => {
      r((t) => (t === e ? void 0 : t));
    });
  }, []);
  return n ? (0, q.jsx)(wr, { onMeasureComplete: s, request: n }, n.id) : null;
}
function wr(e) {
  let [t, n] = U.useState(),
    r = Ce().ownerWindow;
  return (
    U.useLayoutEffect(() => {
      let e = r.document.body,
        t = r.document.createElement(`div`);
      return (
        (t.style.position = `absolute`),
        (t.style.visibility = `hidden`),
        e.appendChild(t),
        n(t),
        () => {
          e.removeChild(t);
        }
      );
    }, [r]),
    t ? sn.createPortal((0, q.jsx)(Tr, { ...e, elContainer: t }), t) : null
  );
}
function Tr(e) {
  let { elContainer: t, onMeasureComplete: n, request: r } = e;
  return (
    U.useEffect(() => {
      let e = !1,
        i = (t) => {
          e ||= (r.fnResults(t), n(r), !0);
        };
      return (Er(t, r.promiseContentReady).then(i), () => i(void 0));
    }, [t, n, r]),
    (0, q.jsx)(xr.Provider, {
      value: !0,
      children: (0, q.jsx)(J, { children: r.rctToMeasure }),
    })
  );
}
async function Er(e, t) {
  t && (await t);
  let n = document;
  h.IN_STEAMUI && n.fonts && (await n.fonts.ready);
  let r = e.getBoundingClientRect();
  return { height: Math.ceil(r.height), width: Math.ceil(r.width) };
}
var Dr = `RC476IADSfM-`,
  Or = `djO4HBSaVEk-`;
function kr(e) {
  U.useEffect(() => {
    if (e)
      return (
        document.body.classList.add(Dr),
        () => document.body.classList.remove(Dr)
      );
  }, [e]);
}
function Ar(e) {
  let t = Ce().ownerWindow,
    n = c(),
    r = U.useCallback(() => {
      t?.SteamClient?.Window && t.SteamClient.Window.BringToFront();
    }, [t]);
  (U.useEffect(() => e.RegisterOverlay(n), [e, n]),
    U.useEffect(() => e.RegisterOnModalShownCallback(r).Unregister, [e, r]));
}
function jr(e, t) {
  return w(
    (n) => {
      if (!n || !t) return;
      let r = n.ownerDocument.defaultView;
      return Wr.RegisterModalManager(e, r);
    },
    [e],
  );
}
function Mr(e) {
  let {
      ModalManager: t,
      bRegisterModalManager: n = !0,
      DialogWrapper: r,
      rctActiveContextMenus: i,
      bUseDialogElement: a = !0,
      style: o,
      ...s
    } = e,
    c = t.modals,
    l = c && !!c.length,
    u = t.active_modal;
  (kr(l), Ar(t));
  let d = jr(t, n),
    f = null,
    p = !a;
  return (
    c && c.length
      ? (f = c.map((e) => {
          let t = e == u,
            n = {
              key: e.key,
              active: t,
              rctActiveContextMenus: t && a ? i : void 0,
            };
          if (e instanceof Fn)
            return (0, U.createElement)(Pr, {
              ...n,
              key: n.key,
              modal: e,
              Component: r ?? Fr,
            });
          if (e instanceof In)
            return (0, U.createElement)(Nr, {
              ...n,
              key: n.key,
              modal: e,
              bUseDialogElement: a,
            });
        }))
      : ((p = !0), (o = { ...o, display: `none` })),
    (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsxs)(cr, {
          children: [
            (0, q.jsxs)(`div`, {
              ...s,
              style: o,
              ref: d,
              className: V(s.className, `FullModalOverlay`),
              children: [
                (0, q.jsx)(`div`, {
                  className: `ModalOverlayContent ModalOverlayBackground`,
                }),
                f,
              ],
            }),
            p && i,
          ],
        }),
        (0, q.jsx)(Cr, { ModalManager: t }),
        (0, q.jsx)(Lr, { ModalManager: t }),
      ],
    })
  );
}
function Nr(e) {
  let {
    modal: t,
    rctActiveContextMenus: n,
    active: r,
    bUseDialogElement: i,
  } = e;
  U.useEffect(() => {
    if (r)
      return (
        t.SetActive(r),
        () => {
          t.SetActive(!1);
        }
      );
  }, [t, r]);
  let a = (0, q.jsxs)(J, {
    children: [
      (0, q.jsx)(`div`, {
        className: V(`ModalOverlayContent`, r ? `active` : `inactive`),
        ref: t.RefModalElement,
      }),
      n,
    ],
  });
  return i ? (0, q.jsx)(Ir, { active: r, children: a }) : a;
}
function Pr(e) {
  let { modal: t, active: n, rctActiveContextMenus: r, Component: i } = e,
    a = c();
  return (
    m(t.ModalUpdatedCallback, a),
    (0, q.jsx)(J, {
      children: (0, q.jsxs)(i, {
        className: V(`ModalOverlayContent`, n ? `active` : `inactive`),
        active: n,
        modalKey: t.key,
        children: [r, t.element],
      }),
    })
  );
}
function Fr(e) {
  let { className: t, active: n, children: r } = e;
  return (0, q.jsx)(Ir, {
    active: n,
    children: (0, q.jsx)(`div`, { className: t, tabIndex: -1, children: r }),
  });
}
function Ir(e) {
  let { active: t, children: n } = e,
    r = U.useRef(null),
    [i, a] = U.useState(!1);
  return (
    U.useLayoutEffect(() => {
      t && !i ? a(!0) : !t && i && r.current?.close();
    }, [t, i]),
    U.useLayoutEffect(() => {
      i && r.current.showModal();
    }, [i]),
    (0, q.jsx)(`dialog`, {
      ref: r,
      className: Or,
      onClose: () => a(!1),
      onCancel: (e) => e.preventDefault(),
      children: n,
    })
  );
}
function Lr(e) {
  let { ModalManager: t } = e,
    n = c();
  return (
    m(t.LegacyPopupModalCountChangedCallbacks, n),
    (0, q.jsx)(q.Fragment, {
      children: t.legacy_popup_modals.map((e) =>
        (0, q.jsx)(yr, { Modal: e }, e.key),
      ),
    })
  );
}
var Rr = U.createContext({}),
  zr = U.memo(function (e) {
    let {
        children: t,
        bRenderOverlayAtRoot: n,
        refModalManager: r,
        DialogWrapper: i,
        bUseDialogElement: a = !0,
        ContextMenuComponent: o = ir,
        refContextMenuManager: s,
        browserInfo: c,
        bUsePopups: l,
        bOnlyPopups: u,
        bCenterPopupsOnWindow: d,
        bRegisterManagersWithWindow: f = !0,
        ...p
      } = e,
      m = U.useRef(void 0);
    m.current ||= new Ur();
    let h = (0, q.jsx)(Mr, {
      ...p,
      DialogWrapper: i,
      ModalManager: m.current,
      bUseDialogElement: a,
      bRegisterModalManager: f,
      rctActiveContextMenus: (0, q.jsx)(o, {}),
    });
    (e.bRenderOverlayAtRoot &&
      typeof document < `u` &&
      `body` in document &&
      (h = sn.createPortal(h, document.body)),
      te(r, m.current),
      l !== void 0 && m.current?.SetUsePopups(l),
      d !== void 0 && m.current?.SetCenterPopupsOnWindow(d),
      u !== void 0 && m.current?.SetOnlyPopups(u),
      m.current.SetBrowserInfo(c));
    let g = U.useMemo(
      () => ({ ModalManager: m.current, DialogWrapper: i }),
      [i],
    );
    return (0, q.jsx)(Rr.Provider, {
      value: g,
      children: (0, q.jsxs)(zn, {
        refContextMenuManager: s,
        bRegisterMenuManager: f,
        children: [(0, q.jsx)(J, { children: h }), e.children],
      }),
    });
  });
function Br() {
  return U.useContext(Rr).ModalManager;
}
function Vr() {
  return U.useContext(Rr).DialogWrapper;
}
function Hr(e) {
  let t = Br();
  U.useEffect(() => {
    if (e) return Wr.RegisterModalManager(t, e);
  }, [e, t]);
}
var Ur = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new L();
    m_OnModalShownCallbacks = new L();
    m_OnModalHiddenCallbacks = new L();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_nMeasureRequestID = 0;
    m_OnMeasureModal = new L();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new L();
    m_browserInfo;
    get ModalCountChangedCallbacks() {
      return this.m_OnModalCountChangedCallbacks;
    }
    get LegacyPopupModalCountChangedCallbacks() {
      return this.m_OnLegacyPopupModalCountChanged;
    }
    RegisterOnModalShownCallback(e) {
      return this.m_OnModalShownCallbacks.Register(e);
    }
    RegisterOnModalHiddenCallback(e) {
      return this.m_OnModalHiddenCallbacks.Register(e);
    }
    RegisterMeasureModalCallback(e) {
      return this.m_OnMeasureModal.Register(e);
    }
    TakeMeasureModalRequest() {
      if (this.m_rgMeasureModalRequests.length)
        return this.m_rgMeasureModalRequests.shift();
    }
    RegisterOverlay(e) {
      (k(
        this.m_cMountedOverlays == 0,
        `Duplicate modal DialogOverlay; modals will appear in both`,
      ),
        this.m_cMountedOverlays++);
      let t = this.m_OnModalCountChangedCallbacks.Register(e);
      return () => {
        (this.m_cMountedOverlays--, t.Unregister());
      };
    }
    OnModalCountChanged(e) {
      (e == `show` &&
        this.m_cMountedOverlays == 0 &&
        window.setTimeout(() => {
          k(
            this.m_cMountedOverlays > 0,
            `Modal was shown but ModalManager has no associated DialogOverlay`,
          );
        }, 50),
        this.m_OnModalCountChangedCallbacks.Dispatch(this.m_rgModals.length),
        e == `show`
          ? this.m_OnModalShownCallbacks.Dispatch(this.m_rgModals.length)
          : e == `hide` &&
            this.m_OnModalHiddenCallbacks.Dispatch(this.m_rgModals.length));
    }
    get modals() {
      return this.m_rgModals;
    }
    get active_modal() {
      if (this.m_rgModals.length)
        return this.m_rgModals[this.m_rgModals.length - 1];
    }
    ShowModal(e) {
      return this.ShowModalInternal(e);
    }
    CloseLegacyModals() {
      for (let e of this.m_rgModals.filter((e) => e instanceof Fn))
        this.RemoveModal(e);
    }
    RemoveModal(e) {
      let t = this.m_rgModals.indexOf(e);
      (t != -1 && this.m_rgModals.splice(t, 1),
        e.ModalClosedCallback.Dispatch(),
        this.OnModalCountChanged(`hide`));
    }
    ShowModalInternal(e) {
      let t = new Fn(e);
      this.m_rgModals.push(t);
      let n = {
        Close: () => {
          this.RemoveModal(t);
        },
        Update: (e) => {
          t.UpdateModal(e);
        },
        ClosedPromise: new Promise((e) => {
          let n = t.ModalClosedCallback.Register(() => {
            (e(), n.Unregister());
          });
        }),
      };
      return (this.OnModalCountChanged(`show`), n);
    }
    ShowPortalModal() {
      k(
        !this.m_bOnlyPopups,
        `Attempting to show modal in popup-only modal manager; will not display.`,
      );
      let e = new In();
      return (
        this.m_rgModals.push(e),
        this.OnModalCountChanged(`show`),
        {
          key: e.key,
          Close: () => {
            this.RemoveModal(e);
          },
          OnElementReadyCallbacks: e.OnElementReadyCallbacks,
          OnModalActiveCallbacks: e.OnModalActiveCallbacks,
        }
      );
    }
    SetUsePopups(e) {
      this.m_bUsePopups = e;
    }
    BUsePopups() {
      return this.m_bUsePopups || this.m_bOnlyPopups;
    }
    SetOnlyPopups(e) {
      this.m_bOnlyPopups = e;
    }
    BOnlyPopups() {
      return this.m_bOnlyPopups;
    }
    SetBrowserInfo(e) {
      this.m_browserInfo = e;
    }
    GetBrowserInfo() {
      return this.m_browserInfo;
    }
    SetCenterPopupsOnWindow(e) {
      this.m_bCenterPopupsOnWindow = e;
    }
    BCenterPopupsOnWindow() {
      return this.m_bCenterPopupsOnWindow;
    }
    RequestModalMeasure(e, t, n) {
      (this.m_rgMeasureModalRequests.push({
        id: this.m_nMeasureRequestID++,
        rctToMeasure: e,
        fnResults: t,
        promiseContentReady: n,
      }),
        this.m_OnMeasureModal.Dispatch());
    }
    get legacy_popup_modals() {
      return this.m_rgLegacyPopupModals;
    }
    ShowLegacyPopupModal(e, t, n, r) {
      let i = () => {
          let e = this.m_rgLegacyPopupModals.indexOf(a);
          (e != -1 && this.m_rgLegacyPopupModals.splice(e, 1),
            this.m_OnLegacyPopupModalCountChanged.Dispatch(
              this.m_rgLegacyPopupModals.length,
            ),
            a.ModalClosedCallback.Dispatch(),
            n.fnOnClose && n.fnOnClose());
        },
        a = new Ln(
          e,
          t,
          { ...n, fnOnClose: i },
          { bCenterOnWindow: this.m_bCenterPopupsOnWindow, ...r },
        );
      return (
        this.m_rgLegacyPopupModals.push(a),
        this.m_OnLegacyPopupModalCountChanged.Dispatch(
          this.m_rgLegacyPopupModals.length,
        ),
        {
          Close: i,
          Update: (e) => {
            a.UpdateModal(e);
          },
          ClosedPromise: new Promise((e) => {
            let t = a.ModalClosedCallback.Register(() => {
              (e(), t.Unregister());
            });
          }),
        }
      );
    }
  },
  Wr = new (class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let t = this.m_mapModalManager.get(e);
      return (
        t ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (t = new Ur()),
          this.m_mapModalManager.set(e, t)),
        t
      );
    }
    RegisterModalManager(e, t) {
      k(
        !this.m_mapModalManager.has(t) || t == window,
        `Stomping CModalManager for ${t.document.title}!`,
      );
      let n = this.m_mapModalManager.get(t);
      return (
        this.m_mapModalManager.set(t, e),
        () => {
          n
            ? this.m_mapModalManager.set(t, n)
            : this.m_mapModalManager.delete(t);
        }
      );
    }
    UnregisterModalManager(e) {
      this.m_mapModalManager.delete(e);
    }
  })();
function Gr(e) {
  return Wr.GetModalManager(e);
}
function Kr(e = window) {
  let t = Br() || Gr(e),
    [n, r] = U.useState(t.modals.length > 0),
    i = U.useCallback(
      (e) => {
        r(e > 0);
      },
      [r],
    );
  return (m(t.ModalCountChangedCallbacks, i), n);
}
var qr = U.createContext({}),
  Jr = () => U.useContext(qr);
function Yr(e) {
  let t = Jr().ModalPosition ?? Xr;
  return (0, q.jsx)(t, { ...e });
}
function Xr(e) {
  let t = {},
    n;
  e.onEscKeypress &&
    ((t.tabIndex = 0),
    (t.onKeyDown = (t) => {
      t.keyCode == 27 && (e.onEscKeypress(), t.stopPropagation());
    }),
    (t.onMouseDown = (t) => {
      t.currentTarget === t.target &&
        !e.bDisableBackgroundDismiss &&
        (e.onEscKeypress(), t.stopPropagation());
    }),
    (n = (e) => {
      e && (z(e, e.ownerDocument.activeElement) || e.focus());
    }));
  let r = [`ModalPosition`];
  (e.className && r.push(e.className),
    e.bDestructiveWarning && r.push(`Destructive`));
  let i = e.renderContent || ((e) => (0, q.jsx)(`div`, { ...e })),
    a = (0, q.jsxs)(q.Fragment, {
      children: [
        !e.hideTopBar &&
          (0, q.jsx)(`div`, { className: `ModalPosition_TopBar` }),
        e.onEscKeypress &&
          !e.bHideCloseIcon &&
          (0, q.jsx)(`div`, {
            className: `ModalPosition_Dismiss`,
            children: (0, q.jsx)(`div`, {
              className: `closeButton`,
              onClick: (t) => {
                (t.stopPropagation(), e.onEscKeypress());
              },
              children: (0, q.jsx)(he, {}),
            }),
          }),
        (0, q.jsx)(J, { children: e.children }),
      ],
    });
  return (0, q.jsx)(`div`, {
    className: r.join(` `),
    ...t,
    ref: n,
    children: i({ className: `ModalPosition_Content`, children: a }),
  });
}
async function Zr(e, t, n) {
  let r = Gr(t),
    i = n?.bForcePopOut || ti(r);
  k(
    !(i && n?.bNeverPopOut),
    `Conflicting popout options; will ignore bNeverPopOut`,
  );
  let a = !i && n?.bNeverPopOut === !0,
    o = ti(r) || (!a && ei(r, t)),
    s = i && n?.popupWidth && n?.popupHeight,
    c;
  o &&
    !s &&
    (c = await ni(
      r,
      U.cloneElement(e, { closeModal: () => {} }),
      n?.promiseRenderComplete,
    ));
  let l = c && c.height / t.innerHeight < 0.9 && c.width / t.innerWidth < 0.8;
  if (a || (!i && l)) return $r(e, t, void 0, { fnOnClose: n?.fnOnClose });
  {
    let i = {
        strTitle: n?.strTitle || C(`#Dialog_DefaultWindowTitle`),
        fnOnClose: n?.fnOnClose,
        popupWidth: n?.popupWidth || c?.width,
        popupHeight: n?.popupHeight || c?.height,
        bHideMainWindowForPopouts: n?.bHideMainWindowForPopouts,
        className: n?.className,
      },
      a = { bHideActions: n?.bHideActionIcons },
      o = n?.browserContext || t.browserInfo;
    return $r(e, t, i.strTitle, i, o, a, r);
  }
}
async function Qr(e, t, n) {
  return Zr(e, t, { bHideMainWindowForPopouts: !0, ...n });
}
function $r(e, t, n, r, i, a, o) {
  let s,
    c,
    l = e.props.closeModal,
    u = () => {
      (c && c.Close(), l && l(), r?.fnOnClose && r.fnOnClose());
    },
    d = () => {
      (s && s.Close(), u());
    },
    f = U.cloneElement(e, { closeModal: d });
  if (((o ||= Gr(t)), ei(o, t) && r && n)) {
    if (r.bHideMainWindowForPopouts) {
      let e = (0, q.jsx)(Yr, {
        className: `Hidden`,
        onEscKeypress: f.props.bDisableBackgroundDismiss ? void 0 : d,
        children: (0, q.jsx)(`div`, {}),
      });
      c = o.ShowModal(e);
    }
    let e = { ...r, fnOnClose: u, browserContext: i };
    s = o.ShowLegacyPopupModal(n, f, e, a);
  } else s = o.ShowModal(f);
  return s;
}
function ei(e, t) {
  return ((e ||= Gr(t || window)), h.IN_CLIENT && e.BUsePopups());
}
function ti(e) {
  return e.BOnlyPopups && e.BOnlyPopups();
}
async function ni(e, t, n) {
  return new Promise((r, i) => {
    e.RequestModalMeasure(t, r, n);
  });
}
function ri(e) {
  return i.COMMUNITY_BASE_URL + `linkfilter/?u=` + encodeURIComponent(e);
}
function ii(e, t) {
  if (e.startsWith(`steam://`) || e.startsWith(`/`)) return !1;
  let n = St(e).toLowerCase(),
    r = St(i.COMMUNITY_BASE_URL).toLowerCase(),
    a = St(i.STORE_BASE_URL).toLowerCase(),
    o = St(i.HELP_BASE_URL).toLowerCase(),
    s = St(i.PARTNER_BASE_URL || ``).toLowerCase();
  return (
    n !== r &&
    n !== a &&
    n !== o &&
    n !== `support.steampowered.com` &&
    n !== s &&
    n !== `www.dota2.com` &&
    (!t || t.filter((e) => n == e).length == 0)
  );
}
function ai(e, t) {
  let n;
  ((n = `currentTarget` in e ? e.currentTarget.ownerDocument.defaultView : e),
    t.indexOf(`steam://`) == 0
      ? M(n, `URL.ExecuteSteamURL`)
        ? n.SteamClient.URL.ExecuteSteamURL(t)
        : (n.location.href = t)
      : n.open(
          t,
          void 0,
          `menubar,location,resizable,scrollbars,status,noopener`,
        ));
}
function oi(e) {
  let {
    bDisableContextMenu: t,
    onContextMenu: n,
    bForceExternal: r,
    href: i,
    bUseLinkFilter: a,
    getPIDFromEvent: o,
    ...s
  } = e;
  (!t && !n && (n = ci), a && i && (i = ri(i)), (o ||= () => 0));
  let c = (e) => {
    (e.preventDefault(),
      i &&
        fi(window, i, {
          bForceExternal: !!r,
          bUseLinkFilter: !!a,
          unPID: o(e),
        }));
  };
  return (0, q.jsx)(`a`, {
    ...s,
    href: i,
    onClick: c,
    onContextMenu: n,
    rel: a ? `noopener noreferrer` : void 0,
    children: e.children,
  });
}
function si(e) {
  let { strURL: t, opts: n } = e;
  return (0, q.jsxs)(U.Fragment, {
    children: [
      (0, q.jsx)(Te, {
        onSelected: () => {
          ne(t);
        },
        children: C(`#ContextMenu_CopyLinkURL`),
      }),
      (0, q.jsx)(Te, {
        onSelected: (e) => {
          fi(e, t, n);
        },
        children: C(`#ContextMenu_OpenLinkInNewWindow`),
      }),
    ],
  });
}
function ci(e, t) {
  let n = e.currentTarget;
  return Pe(
    (0, q.jsx)(Fe, { children: (0, q.jsx)(si, { strURL: n.href, opts: t }) }),
    e,
  );
}
function li(e) {
  let { strFullImageURL: t, unPID: n } = e;
  return (0, q.jsxs)(U.Fragment, {
    children: [
      (0, q.jsx)(Te, {
        onSelected: () => {
          ne(t);
        },
        children: C(`#ContextMenu_CopyImageURL`),
      }),
      (0, q.jsx)(Te, {
        onSelected: (e) => {
          fi(e, t, { unPID: n });
        },
        children: C(`#ContextMenu_OpenImageInNewWindow`),
      }),
    ],
  });
}
function ui(e, t, n) {
  return di(e, e.currentTarget.src, t, n);
}
function di(e, t, n, r) {
  return Pe(
    (0, q.jsxs)(Fe, {
      children: [
        n && (0, q.jsx)(si, { strURL: n, opts: r }),
        (0, q.jsx)(li, { strFullImageURL: t, unPID: r?.unPID }),
      ],
    }),
    e,
  );
}
function fi(e, t, n = {}) {
  let { bForceExternal: r, unPID: i, bUseLinkFilter: a } = n,
    o;
  ((o = `currentTarget` in e ? e.currentTarget.ownerDocument.defaultView : e),
    T(`WebChat.OpenURLInClient`)
      ? SteamClient.WebChat.OpenURLInClient(t, i || 0, !!r)
      : t.indexOf(`steam://`) == 0 &&
          t.indexOf(`steam://remoteplay/connect`) != 0
        ? (o.location.href = t)
        : o.open(
            t,
            void 0,
            `menubar,location,resizable,scrollbars,status,noopener` +
              (a ? `,noreferrer` : ``),
          ));
}
var pi = (e) =>
  (0, q.jsx)(q.Fragment, {
    children: e.condition ? e.wrap(e.children) : e.children,
  });
I(
  [p],
  class {
    m_Promise;
    m_Value = void 0;
    constructor(e) {
      (l(this), (this.promise = e));
    }
    set promise(e) {
      ((this.m_Promise = e),
        (this.m_Value = void 0),
        e?.then((t) => {
          this.m_Promise === e && (this.m_Value = t);
        }));
    }
    get promise() {
      return this.m_Promise;
    }
    get value() {
      return this.m_Value;
    }
  }.prototype,
  `m_Value`,
  void 0,
);
function mi(e, t, n) {
  return U.forwardRef(function (r, i) {
    return (0, q.jsx)(`div`, {
      ...n,
      role: t,
      ...r,
      className: V(e, r.className),
      ref: i,
    });
  });
}
function hi(e) {
  e.result != 1 &&
    console.error(
      `Error`,
      e.result,
      `:`,
      `message` in e ? e.message : `No message.`,
    );
}
function gi(e, t) {
  return e < t ? -1 : +(e > t);
}
function _i(e, t) {
  return Array.from(Array.from(Array(t - e + 1).keys()).map((t) => t + e));
}
function vi(e) {
  if (typeof e != `string`) return NaN;
  let t = !e.includes(`ms`) && e.includes(`s`),
    n = Number.parseFloat(e);
  return (t && (n *= 1e3), n);
}
function yi(e, t = 1) {
  for (; e;) {
    let t = (e.ownerDocument.defaultView || window).getComputedStyle(e),
      n = parseFloat(t.zoom);
    if (n && n != 1) return n;
    e = e.parentElement;
  }
  return t;
}
var bi = `zsscclNHDrk-`;
function xi(e) {
  let { customTooltip: t, tooltip: n, className: r, icon: i, small: a } = e,
    o = t ? lt : nt,
    s = i;
  return (
    (s ??= a ? (0, q.jsx)(Oe, {}) : void 0),
    (s ??= (0, q.jsxs)(q.Fragment, { children: [`\xA0`, (0, q.jsx)(De, {})] })),
    (0, q.jsx)(o, {
      toolTipContent: n,
      className: V(bi, `HelperTooltip`, a && `wShPvD3k-hM-`, r),
      children: s,
    })
  );
}
var Si = U.createContext({}),
  Ci = () => U.useContext(Si);
function wi(e, t) {
  return Ci()[e] ?? t;
}
function Ti() {
  let e = Ci();
  return e ? e.bClassicMode : !1;
}
var Ei = `AZmUeQj5Llg-`,
  Di = `TGphxcMOj6Q-`,
  Oi = `P4QYg6fp7VQ-`,
  ki = `_4C5QmCMW3EU-`,
  Ai = `uWmbIq7PHJs-`,
  ji = `_9dCz1-niBHE-`,
  Mi = `p8-h5e1wZ-E-`,
  Ni = `QmaNeg5jX08-`;
function Pi(e) {
  let t = wi(`ToggleControl`, Fi);
  return (0, q.jsx)(t, { ...e });
}
function Fi(e) {
  let { value: t, onChange: n, disabled: r } = e;
  return (0, q.jsxs)(`div`, {
    className: V(Ei, r && `h-6omscqZ1U-`),
    onClick: () => !r && n && n(!t),
    children: [
      (0, q.jsx)(`div`, { className: Di }),
      (0, q.jsx)(`div`, { className: V(Di, Oi, t ? ki : Ai) }),
      (0, q.jsx)(`div`, { className: V(ji, t ? ki : Ai) }),
    ],
  });
}
var Ii = (e) => {
  let { label: t, value: n, onChange: r, disabled: i, className: a } = e;
  return (0, q.jsxs)(`div`, {
    className: V(Mi, a),
    children: [
      (0, q.jsx)(`div`, { className: V(Ni, i && `h-6omscqZ1U-`), children: t }),
      (0, q.jsx)(Pi, { value: n, onChange: r, disabled: i }),
    ],
  });
};
function Li(e) {
  return U.forwardRef(function (t, n) {
    return (0, q.jsx)(B, { ...t, className: V(e, t.className), ref: n });
  });
}
var Ri = U.createContext(null),
  zi = U.forwardRef(function (e, t) {
    let { id: n, className: r, ...i } = e,
      a = U.useContext(Ri)?.setHeaderId,
      o = U.useId(),
      s = n || o;
    return (
      U.useEffect(() => {
        a && a(s);
      }, [a, s]),
      (0, q.jsx)(`div`, {
        id: s,
        role: `heading`,
        "aria-level": 2,
        ...i,
        className: V(`DialogHeader`, r),
        ref: t,
      })
    );
  }),
  Bi = mi(`DialogSubHeader`, `heading`, { "aria-level": 3 }),
  Vi = mi(`SettingsDialogSubHeader`, `heading`, { "aria-level": 3 }),
  Hi = mi(`DialogFooter`),
  Ui = mi(`DialogLabel _DialogLayout`),
  Wi = mi(`DialogBodyText`),
  Gi = mi(`DialogBody`),
  Ki = Li(`DialogBody`),
  qi = mi(`DialogInnerBody`),
  Ji = mi(`DialogControlsSection`),
  Yi = mi(`DialogControlsSectionHeader`, `heading`, { "aria-level": 3 });
function Xi(e) {
  let { label: t, labelId: n, className: r, children: i, ...a } = e;
  return (0, q.jsxs)(Ji, {
    className: V(`DialogLabelledControlsSection`, r),
    role: `region`,
    "aria-labelledby": n,
    ...a,
    children: [t, i],
  });
}
function Zi(e) {
  let { label: t, className: n, children: r, ...i } = e,
    a = U.useId();
  return (0, q.jsx)(Xi, {
    className: V(`DialogSettingsSection`, n),
    labelId: a,
    label: t ? (0, q.jsx)(Vi, { id: a, children: t }) : void 0,
    ...i,
    children: r,
  });
}
var Qi = Li(`DialogTwoColLayout _DialogColLayout`),
  $i = Li(`DialogThreeColLayout _DialogColLayout`);
Li(`DialogTwoThirdColLayout _DialogColLayout`);
var ea = mi(`DialogColumn _DialogLayout`);
function ta(e) {
  let t = wi(`Content`, na);
  return (0, q.jsx)(t, { ...e });
}
function na(e) {
  let { children: t, bCenterVertically: n, refElem: r, ...i } = e,
    a = `DialogContent _DialogLayout` + (e.className ? ` ` + e.className : ``);
  return (
    n && (a += ` _DialogCenterVertically`),
    (0, q.jsx)(`div`, {
      ...i,
      ref: r,
      className: a,
      children: (0, q.jsx)(`div`, {
        className: `DialogContent_InnerWidth`,
        children: t,
      }),
    })
  );
}
var ra = class extends U.Component {
  OnSubmit(e) {
    (e.preventDefault(),
      e.stopPropagation(),
      this.props.onSubmit && this.props.onSubmit(e));
  }
  render() {
    return (0, q.jsx)(`form`, { ...this.props, onSubmit: this.OnSubmit });
  }
};
I([f], ra.prototype, `OnSubmit`, null);
function ia(e) {
  let { classNameContent: t, bCenterVertically: n, ...r } = e;
  return (0, q.jsx)(ta, {
    className: t,
    bCenterVertically: n,
    children: (0, q.jsx)(ra, { ...r }),
  });
}
function aa(e) {
  let { label: t, tooltip: n, className: r, children: i } = e;
  return (0, q.jsxs)(`label`, {
    className: V(`DialogInputLabelGroup`, `_DialogLayout`, r),
    children: [
      t &&
        (0, q.jsxs)(Ui, {
          children: [t, ` `, n && (0, q.jsx)(xi, { tooltip: n }), ` `],
        }),
      i,
    ],
  });
}
var oa = U.forwardRef(function (e, t) {
    let n = Ci(),
      { svgicon: r, ...i } = e,
      a = V(
        e.className,
        r !== void 0 && `hasSVGIcon`,
        i.disabled && `Disabled`,
        n.strButtonClassName,
      ),
      o = (e) => {
        if (!i.disabled && e)
          return (t) => {
            (t.stopPropagation(), e(t));
          };
      };
    return (0, q.jsxs)(ut, {
      ref: t,
      onOKActionDescription: i.disabled ? null : void 0,
      noFocusRing: !!n.strButtonClassName,
      ...i,
      className: a,
      disabled: !1,
      onClick: o(i.onClick),
      onPointerDown: o(i.onPointerDown),
      onPointerUp: o(i.onPointerUp),
      onPointerCancel: o(i.onPointerCancel),
      onMouseDown: o(i.onMouseDown),
      onMouseUp: o(i.onMouseUp),
      onTouchStart: o(i.onTouchStart),
      onTouchEnd: o(i.onTouchEnd),
      onTouchCancel: o(i.onTouchCancel),
      onSubmit: o(i.onSubmit),
      children: [r && r(), e.children],
    });
  }),
  sa = U.forwardRef(function (e, t) {
    return (0, q.jsx)(oa, {
      preferredFocus: !0,
      type: e.onClick ? `button` : `submit`,
      ...e,
      ref: t,
      className: V(e.className, `DialogButton`, `_DialogLayout`, `Primary`),
    });
  }),
  ca = U.forwardRef(function (e, t) {
    return (0, q.jsx)(oa, {
      type: `button`,
      ...e,
      ref: t,
      className: V(e.className, `DialogButton`, `_DialogLayout`, `Secondary`),
    });
  }),
  la = U.forwardRef(function (e, t) {
    return (0, q.jsx)(oa, {
      type: `button`,
      ...e,
      ref: t,
      className: V(e.className, `DialogButton`, `_DialogLayout`, `EmptyButton`),
    });
  }),
  ua = U.forwardRef(function (e, t) {
    return (0, q.jsx)(oa, {
      type: `button`,
      ...e,
      ref: t,
      className: V(e.className, `DialogButton _DialogLayout Small`),
    });
  }),
  da = U.forwardRef(function (e, t) {
    return (0, q.jsx)(oa, {
      type: `button`,
      ...e,
      ref: t,
      className: V(e.className, `TextButton`),
    });
  });
function fa(e) {
  let t = `DialogHBar` + (e.className ? ` ` + e.className : ``);
  return (0, q.jsx)(`div`, { ...e, className: t });
}
function pa(e) {
  return (0, q.jsxs)(Qi, {
    className: e.className,
    children: [
      (0, q.jsxs)(sa, {
        onClick: e.onOK,
        disabled: e.bOKDisabled,
        autoFocus: e.focusButton == `primary`,
        children: [e.strOKText || C(`#Button_Confirm`), ` `],
      }),
      (0, q.jsx)(ca, {
        onClick: e.onCancel,
        disabled: e.bCancelDisabled,
        autoFocus: e.focusButton == `secondary`,
        children: e.strCancelText || C(`#Button_Cancel`),
      }),
    ],
  });
}
function ma(e) {
  let t = e.bOKDisabled ? ca : sa,
    n = e.bOKDisabled ? sa : ca;
  return (0, q.jsxs)($i, {
    children: [
      (0, q.jsxs)(t, {
        onClick: e.onOK,
        disabled: e.bOKDisabled,
        autoFocus: e.focusButton == `primary`,
        children: [e.strOKText || C(`#Button_Confirm`), ` `],
      }),
      (0, q.jsxs)(n, {
        onClick: e.onUpdate,
        disabled: e.bUpdateDisabled,
        children: [e.strUpdateText || C(`#Button_Update`), ` `],
      }),
      (0, q.jsx)(ca, {
        onClick: e.onCancel,
        disabled: e.bCancelDisabled,
        autoFocus: e.focusButton == `secondary`,
        children: e.strCancelText || C(`#Button_Cancel`),
      }),
    ],
  });
}
function ha(e) {
  let {
    onPrimary: t,
    onSecondary: n,
    onCancel: r,
    bDisableSecondary: i,
    strPrimaryButtonText: a,
    strSecondaryButtonText: o,
    strCancelButtonText: s,
    className: c,
    classNamePrimary: l,
  } = e;
  return (0, q.jsxs)(`div`, {
    className: c,
    children: [
      (0, q.jsx)(sa, {
        onClick: t,
        className: V(`Stacked`, l),
        autoFocus: !0,
        children: a,
      }),
      (0, q.jsxs)(Qi, {
        children: [
          (0, q.jsx)(ca, { onClick: r, children: s || C(`#Button_Cancel`) }),
          (0, q.jsx)(ca, { onClick: n, disabled: i, children: o }),
        ],
      }),
    ],
  });
}
var ga = class extends U.Component {
  constructor(e) {
    (super(e), (this.state = { checked: e.checked, disabled: e.disabled }));
  }
  componentDidUpdate(e) {
    (this.props.controlled ||
      (e.checked != this.props.checked &&
        this.props.checked != this.state.checked &&
        this.setState({ checked: this.props.checked })),
      e.disabled != this.props.disabled &&
        this.props.disabled != this.state.disabled &&
        this.setState({ disabled: this.props.disabled }));
  }
  shouldComponentUpdate(e, t) {
    return (
      e.label != this.props.label ||
      e.description != this.props.description ||
      e.onChange != this.props.onChange ||
      e.controlled != this.props.controlled ||
      e.disabled != this.props.disabled ||
      t.disabled != this.state.disabled ||
      e.checked != this.checked ||
      t.checked != this.state.checked
    );
  }
  get checked() {
    return this.props.controlled ? this.props.checked : this.state.checked;
  }
  GetPanelElementProps() {
    let {
      onChange: e,
      checked: t,
      label: n,
      description: r,
      tabIndex: i,
      disabled: a,
      className: o,
      tooltip: s,
      color: c,
      highlightColor: l,
      bottomSeparator: u,
      controlled: d,
      ...f
    } = this.props;
    return {
      ...f,
      tabIndex: i || 0,
      onActivate: this.Toggle,
      onKeyDown: this.KeyDown,
    };
  }
  Toggle() {
    if (this.props.disabled) return;
    let e = !this.checked;
    (this.props.controlled || this.setState({ checked: e }),
      this.props.onChange && this.props.onChange(e));
  }
  KeyDown(e) {
    e.keyCode == 32 && (this.Toggle(), e.preventDefault(), e.stopPropagation());
  }
  SetChecked(e, t) {
    (this.setState({ checked: e }),
      t && this.props.onChange && this.props.onChange(e));
  }
};
(I([f], ga.prototype, `Toggle`, null),
  I([f], ga.prototype, `KeyDown`, null),
  I([f], ga.prototype, `SetChecked`, null));
var _a = class extends ga {
    render() {
      let e = `DialogCheckbox` + (this.checked ? ` Active` : ``);
      return (
        this.state.disabled == 1 && (e += ` Disabled`),
        this.props.label
          ? (0, q.jsxs)(B, {
              role: `checkbox`,
              "aria-checked": this.checked,
              className:
                `DialogCheckbox_Container _DialogLayout ` +
                (this.props.className ? this.props.className : ``) +
                (this.state.disabled ? ` Disabled` : ``),
              ...this.GetPanelElementProps(),
              children: [
                (0, q.jsx)(`div`, {
                  className: e,
                  children: (0, q.jsx)(ve, {
                    color: this.props.color,
                    highlightColor: this.props.highlightColor,
                  }),
                }),
                (0, q.jsxs)(`div`, {
                  className: `DialogToggle_Label`,
                  children: [
                    typeof this.props.label == `string` &&
                      (0, q.jsx)(`span`, { children: this.props.label }),
                    typeof this.props.label != `string` && this.props.label,
                    this.props.tooltip &&
                      (0, q.jsx)(xi, { tooltip: this.props.tooltip }),
                  ],
                }),
                (0, q.jsx)(`div`, { style: { clear: `left` } }),
                this.props.description &&
                  (0, q.jsx)(`div`, {
                    className: `DialogToggle_Description`,
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            })
          : (0, q.jsx)(B, {
              role: `checkbox`,
              "aria-checked": this.checked,
              className: e,
              ...this.GetPanelElementProps(),
              children: (0, q.jsx)(ve, {}),
            })
      );
    }
  },
  va = class extends ga {
    render() {
      let e = this.checked ? ` Active` : ``;
      return (
        this.state.disabled == 1 && (e += ` Disabled`),
        (0, q.jsxs)(B, {
          className: V(
            `DialogRoundCheckboxField_Container`,
            this.props.className,
            this.props.label ? `WithLabel` : ``,
            e,
          ),
          ...this.GetPanelElementProps(),
          children: [
            (0, q.jsx)(`div`, {
              className: `DialogRoundCheckboxField`,
              children: (0, q.jsx)(`div`, {
                className: `DialogRoundCheckboxField_Control` + e,
                children: (0, q.jsx)(`div`, {
                  className: `DialogRoundCheckboxField_OuterCircle`,
                  children: (0, q.jsx)(`div`, {
                    className: `DialogRoundCheckboxField_InnerCircle`,
                  }),
                }),
              }),
            }),
            this.props.label &&
              (0, q.jsxs)(`div`, {
                className: `DialogToggle_Label`,
                children: [
                  (0, q.jsx)(`span`, { children: this.props.label }),
                  this.props.tooltip &&
                    (0, q.jsx)(xi, { tooltip: this.props.tooltip }),
                ],
              }),
          ],
        })
      );
    }
  },
  ya = U.forwardRef(function (e, t) {
    let n = wi(`ToggleField`, ba);
    return (0, q.jsx)(n, { ref: t, ...e });
  }),
  ba = class extends ga {
    OnOffKeyDown(e) {
      (e.keyCode == 37 && this.checked) || (e.keyCode == 39 && !this.checked)
        ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
        : this.KeyDown(e);
    }
    OnNewUIToggle(e) {
      e !== this.checked && this.Toggle();
    }
    render() {
      let e =
        `DialogToggleField _DialogInputContainer _DialogLayout ` +
        (this.props.className ? this.props.className : ``);
      return (
        this.props.disabled && (e += ` Disabled`),
        (0, q.jsxs)(`div`, {
          className: e,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, q.jsxs)(`div`, {
              className: `displayColumn alignSelfCenter`,
              children: [
                (0, q.jsxs)(`div`, {
                  className: `DialogToggle_Label`,
                  children: [
                    (0, q.jsx)(`span`, { children: this.props.label }),
                    this.props.tooltip &&
                      (0, q.jsx)(xi, { tooltip: this.props.tooltip }),
                  ],
                }),
                this.props.description &&
                  (0, q.jsx)(`div`, {
                    className: `DialogToggle_Description`,
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, q.jsx)(`div`, {
                  className: `DialogToggleField_NewUIContainer`,
                  children: (0, q.jsx)(Pi, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, q.jsx)(`div`, {
                  className: `DialogToggleField_Control`,
                  onClick: this.Toggle,
                  children: (0, q.jsxs)(B, {
                    className: `DialogToggleField_OptionPanel`,
                    onOKButton: this.Toggle,
                    children: [
                      (0, q.jsx)(`div`, {
                        className:
                          `DialogToggleField_Option Off` +
                          (this.checked ? `` : ` Active`),
                        children: C(`#Dialog_Off`),
                      }),
                      (0, q.jsx)(`div`, {
                        className:
                          `DialogToggleField_Option On` +
                          (this.checked ? ` Active` : ``),
                        children: C(`#Dialog_On`),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
(I([f], ba.prototype, `OnOffKeyDown`, null),
  I([f], ba.prototype, `OnNewUIToggle`, null));
var xa = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(e, t) {
      ((this.m_window = e), (this.m_options = { timing: `sine`, ...t }));
    }
    Start() {
      ((this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration));
      let e;
      switch (this.m_options.timing) {
        case `linear`:
          e = function (e) {
            return e;
          };
          break;
        case `cubic-in-out`:
          e = function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          };
          break;
        default:
          e = function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          };
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
      let t = performance.now() - this.m_msStart;
      if (t >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let n = t / this.m_options.msDuration;
      try {
        this.Update(e(n));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  Sa = class extends xa {
    m_fnCallback;
    constructor(e, t, n) {
      (super(e, t), (this.m_fnCallback = n));
    }
    Update(e) {
      this.m_fnCallback(e);
    }
  },
  Ca = class extends xa {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(e, t, n) {
      (super(`ownerDocument` in e ? b(e) : e, n),
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
          r = n.start + (n.end - n.start) * e;
        this.m_object[t] = r;
      }
    }
  },
  wa = class extends xa {
    m_component;
    m_propTargets;
    m_props = {};
    m_setStateOnComplete;
    constructor(e, t, n) {
      (super(b(e.ref.current), n),
        (this.m_component = e),
        (this.m_propTargets = t),
        (this.m_setStateOnComplete = n.setStateOnComplete));
    }
    Start() {
      this.m_props = {};
      for (let e in this.m_propTargets) {
        let t = parseFloat(this.m_component.state[e]) || 0,
          n = this.m_propTargets[e];
        t != n && (this.m_props[e] = { start: t, end: n });
      }
      super.Start();
    }
    Update(e) {
      let t = {};
      for (let n in this.m_props) {
        let r = this.m_props[n];
        t[n] = r.start + (r.end - r.start) * e;
      }
      this.m_component.setState(t);
    }
    FireOnComplete() {
      (super.FireOnComplete(),
        this.m_setStateOnComplete &&
          this.m_component.setState(this.m_setStateOnComplete));
    }
  },
  Ta = U.forwardRef(function (e, t) {
    let n = wi(`InputElement`, at);
    return (0, q.jsx)(n, { ...e, ref: t });
  }),
  Ea = class e extends U.PureComponent {
    m_CopiedAnimation;
    ref = U.createRef();
    constructor(e) {
      (super(e),
        this.CheckProps(e),
        (this.state = {
          m_CopiedYPos: 0,
          m_bPlayingCopiedAnimation: !1,
          m_bCompletedCopiedAnimation: !1,
          m_bNumberBelowMinRange: !1,
          m_bNumberAboveMaxRange: !1,
          m_bIsNotNumeric: !1,
          m_bIsInvalidURL: !1,
          m_strInvalidURLMessage: null,
          m_bIsInvalidEmail: !1,
          m_bAboveMaxChars: !1,
        }));
    }
    componentDidUpdate(e) {
      this.CheckProps(this.props);
    }
    m_elInput;
    OnInputRef(e) {
      ((this.m_elInput = e),
        this.m_elInput && this.props.focusOnMount && this.m_elInput.focus());
    }
    get element() {
      return this.m_elInput;
    }
    get value() {
      return this.m_elInput && this.m_elInput.value;
    }
    Focus() {
      this.m_elInput?.focus();
    }
    static validateUrl(e) {
      return (
        e != null &&
        (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          e,
        ) ||
          /^steam:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}/i.test(e))
      );
    }
    static validateEmail(e) {
      return (
        e != null &&
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e.toLowerCase(),
        )
      );
    }
    Validate() {
      this.setState({
        m_bNumberBelowMinRange:
          this.props.rangeMin !== null &&
          this.props.rangeMin !== void 0 &&
          Number(this.m_elInput?.value) < this.props.rangeMin,
        m_bNumberAboveMaxRange:
          this.props.rangeMax !== null &&
          this.props.rangeMax !== void 0 &&
          Number(this.m_elInput?.value) > this.props.rangeMax,
        m_bIsNotNumeric:
          this.props.mustBeNumeric == 1 && isNaN(Number(this.m_elInput?.value)),
        m_bIsInvalidURL:
          this.props.mustBeURL == 1 && !e.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == 1 &&
          !e.validateEmail(this.m_elInput?.value),
        m_bAboveMaxChars:
          this.props.maxChars != null &&
          this.m_elInput != null &&
          this.m_elInput.value.length > this.props.maxChars,
      });
    }
    OnChanged(e) {
      (this.props.onChange && this.props.onChange(e), this.Validate());
    }
    OnCopyClick(e) {
      if (!this.m_elInput) return;
      this.m_elInput.select();
      let t = this.m_elInput.ownerDocument;
      t.queryCommandEnabled(`copy`) &&
        (t.execCommand(`copy`),
        e.currentTarget.focus(),
        this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel(),
        this.setState({ m_bCompletedCopiedAnimation: !1 }),
        this.setState({ m_CopiedYPos: -4 }, () => {
          ((this.m_CopiedAnimation = new wa(
            this,
            { m_CopiedYPos: -24 },
            {
              msDuration: 300,
              timing: `sine`,
              setStateOnComplete: { m_bCompletedCopiedAnimation: !0 },
            },
          )),
            this.m_CopiedAnimation.Start());
        }));
    }
    OnClearClick(e) {
      this.m_elInput &&
        this.m_elInput.value &&
        (Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          `value`,
        ).set.call(this.m_elInput, ``),
        this.m_elInput.dispatchEvent(new Event(`input`, { bubbles: !0 })));
    }
    CheckProps(e) {
      k(
        !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
        `In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.`,
      );
    }
    render() {
      let {
          label: e,
          description: t,
          requiredLabel: n,
          bShowCopyAction: r,
          bShowClearAction: i,
          bAlwaysShowClearAction: a,
          rangeMin: o,
          rangeMax: s,
          mustBeNumeric: c,
          mustBeURL: l,
          fnStrValidateURL: u,
          mustBeEmail: d,
          focusOnMount: f,
          tooltip: p,
          inlineControls: m,
          maxChars: h,
          ...g
        } = this.props,
        _ =
          `DialogInput DialogInputPlaceholder DialogTextInputBase` +
          (g.className ? ` ` + g.className : ``),
        v = `copiedAnimation`,
        y = this.state.m_bCompletedCopiedAnimation;
      (this.m_CopiedAnimation && (v = `copiedAnimation animationPlaying`),
        y && (v = `copiedAnimation animationComplete`));
      let b = {};
      this.state.m_CopiedYPos !== void 0 &&
        (b.transform = `translateY(` + this.state.m_CopiedYPos + `px)`);
      let x = (0, q.jsxs)(U.Fragment, {
        children: [
          (0, q.jsxs)(B, {
            className: `DialogInput_Wrapper _DialogLayout`,
            "flow-children": `row`,
            ref: this.ref,
            children: [
              (0, q.jsx)(Ta, {
                type: `text`,
                ...g,
                className: _,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              r &&
                (0, q.jsxs)(`div`, {
                  className: `displayRow`,
                  children: [
                    (0, q.jsx)(ca, {
                      className: `DialogInput_CopyAction Primary`,
                      onClick: this.OnCopyClick,
                      children: C(`#Button_Copy`),
                    }),
                    (0, q.jsx)(`div`, {
                      style: b,
                      className: v,
                      children: C(`#Button_Copied`),
                    }),
                  ],
                }),
              (a || (i && g.value)) &&
                (0, q.jsx)(`div`, {
                  className: `DialogInput_ClearAction`,
                  onClick: this.OnClearClick,
                  children: (0, q.jsx)(he, {}),
                }),
              m,
            ],
          }),
          t &&
            (0, q.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: t,
            }),
        ],
      });
      return e
        ? (0, q.jsx)(`div`, {
            className: `DialogInputLabelGroup _DialogLayout DialogRequirementLabel`,
            children: (0, q.jsxs)(`label`, {
              children: [
                (0, q.jsxs)(`div`, {
                  className: `DialogLabel`,
                  children: [
                    e,
                    ` `,
                    this.props.tooltip &&
                      (0, q.jsx)(xi, { tooltip: this.props.tooltip }),
                    (0, q.jsx)(`span`, {
                      className: `DialogInputRequirementLabel`,
                      children: this.props.requiredLabel,
                    }),
                    ` `,
                  ],
                }),
                x,
                this.state.m_bNumberBelowMinRange
                  ? (0, q.jsxs)(`div`, {
                      children: [` `, C(`#Input_Error_NumberTooSmall`), ` `],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, q.jsxs)(`div`, {
                      children: [` `, C(`#Input_Error_NumberTooLarge`), ` `],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, q.jsxs)(`div`, {
                      children: [` `, C(`#Input_Error_MustBeURL`), ` `],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, q.jsxs)(`div`, {
                      children: [` `, this.state.m_strInvalidURLMessage, ` `],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, q.jsxs)(`div`, {
                      children: [` `, C(`#Input_Error_MustBeEmail`), ` `],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, q.jsxs)(`div`, {
                      children: [` `, C(`#Input_Error_MustBeNumber`), ` `],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, q.jsxs)(`div`, {
                      children: [
                        ` `,
                        le(`#Input_Error_TooManyCharacters`, h),
                        ` `,
                      ],
                    })
                  : null,
              ],
            }),
          })
        : x;
    }
  };
(I([f], Ea.prototype, `OnInputRef`, null),
  I([f], Ea.prototype, `OnChanged`, null),
  I([f], Ea.prototype, `OnCopyClick`, null),
  I([f], Ea.prototype, `OnClearClick`, null));
var Da = class extends Ea {
  m_bFocused = !1;
  OnBackgroundClick() {
    this.m_elInput && this.m_elInput.focus();
  }
  OnInputFocus(e) {
    (this.m_bFocused || ((this.m_bFocused = !0), this.forceUpdate()),
      this.props.onFocus && this.props.onFocus(e));
  }
  OnInputBlur(e) {
    (this.m_bFocused && ((this.m_bFocused = !1), this.forceUpdate()),
      this.props.onBlur && this.props.onBlur(e));
  }
  render() {
    let {
      label: e,
      description: t,
      requiredLabel: n,
      bShowCopyAction: r,
      bShowClearAction: i,
      bAlwaysShowClearAction: a,
      rangeMin: o,
      rangeMax: s,
      maxChars: c,
      mustBeNumeric: l,
      mustBeURL: u,
      fnStrValidateURL: d,
      mustBeEmail: f,
      focusOnMount: p,
      tooltip: m,
      inlineControls: h,
      className: g,
      children: _,
      ...v
    } = this.props;
    return (0, q.jsx)(`div`, {
      className: `DialogInputLabelGroup _DialogLayout DialogListBuilderInput`,
      children: (0, q.jsxs)(`label`, {
        children: [
          e && (0, q.jsx)(`div`, { className: `DialogLabel`, children: e }),
          (0, q.jsx)(`div`, {
            className: V(
              `_DialogInputContainer`,
              `DialogTextInputBase`,
              this.m_bFocused && `Active`,
            ),
            onClick: this.OnBackgroundClick,
            children: (0, q.jsxs)(B, {
              className: `DialogListBuilderInput_List`,
              "flow-children": `row`,
              children: [
                U.Children.map(_, (e, t) =>
                  (0, q.jsx)(
                    `div`,
                    {
                      className: `DialogListBuilderInput_ListItem`,
                      children: e,
                    },
                    t,
                  ),
                ),
                (0, q.jsx)(at, {
                  type: `text`,
                  ...v,
                  className: `DialogListBuilderInput_Input DialogInputPlaceholder`,
                  ref: this.OnInputRef,
                  onFocus: this.OnInputFocus,
                  onBlur: this.OnInputBlur,
                  size: 4,
                }),
              ],
            }),
          }),
          t &&
            (0, q.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: t,
            }),
        ],
      }),
    });
  }
};
(I([f], Da.prototype, `OnBackgroundClick`, null),
  I([f], Da.prototype, `OnInputFocus`, null),
  I([f], Da.prototype, `OnInputBlur`, null));
var Oa = (e, t) =>
    `` + (e == null ? null : Number.parseFloat(e.toFixed(3))) + (t ?? ``),
  ka = (e) => {
    let t = wi(`SliderField`, Aa);
    return (0, q.jsx)(t, { ...e });
  },
  Aa = class extends U.Component {
    m_flLastSetValue = null;
    constructor(e) {
      super(e);
    }
    ClampValue(e) {
      return e === void 0 || isNaN(e) || e < this.props.min
        ? this.props.min
        : e > this.props.max
          ? this.props.max
          : e;
    }
    BPropsValid() {
      return this.props.max > this.props.min;
    }
    m_elSlider;
    m_rectSlider;
    OnMouseDown(e) {
      ((this.m_elSlider = e.currentTarget),
        (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
        this.props.onChangeStart && this.props.onChangeStart(1),
        this.AdjustSliderForClientX(e.clientX, 1),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `mousemove`,
          this.OnMouseMove,
        ),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `mouseup`,
          this.OnMouseUp,
        ));
    }
    OnMouseMove(e) {
      this.AdjustSliderForClientX(e.clientX, 1);
    }
    OnMouseUp(e) {
      (this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        `mousemove`,
        this.OnMouseMove,
      ),
        this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
          `mouseup`,
          this.OnMouseUp,
        ),
        this.CompleteChange(1));
    }
    OnTouchStart(e) {
      ((this.m_elSlider = e.currentTarget),
        (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
        this.props.onChangeStart && this.props.onChangeStart(0),
        this.AdjustSliderForClientX(e.touches[0].clientX, 0),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `touchmove`,
          this.OnTouchMove,
        ),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `touchend`,
          this.OnTouchEnd,
        ));
    }
    OnTouchMove(e) {
      this.AdjustSliderForClientX(e.touches[0].clientX, 0);
    }
    OnTouchEnd(e) {
      (this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        `touchmove`,
        this.OnTouchMove,
      ),
        this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
          `touchend`,
          this.OnTouchEnd,
        ),
        this.CompleteChange(0));
    }
    OnKeyDown(e) {
      let t = 1;
      (e.ctrlKey &&
        (t = Math.max(
          1,
          Math.floor((this.props.max - this.props.min) * 0.1 + 0.5),
        )),
        e.keyCode == 37
          ? (this.IncrementValue(-1 * t), e.preventDefault())
          : e.keyCode == 39 && (this.IncrementValue(1 * t), e.preventDefault()),
        this.CompleteChange(2));
    }
    AdjustSliderForClientX(e, t) {
      let n =
        (e - this.m_rectSlider.left) /
        (this.m_rectSlider.right - this.m_rectSlider.left);
      this.m_elSlider?.matches(`:dir(rtl)`) && (n = 1 - n);
      let r = n * (this.props.max - this.props.min) + this.props.min;
      r = Math.floor(r + 0.5);
      let i = this.ClampValue(r);
      i != this.props.value &&
        (this.props.onChange && this.props.onChange(i, t),
        (this.m_flLastSetValue = i));
    }
    CompleteChange(e) {
      this.m_flLastSetValue != null &&
        (this.props.onChangeComplete &&
          this.props.onChangeComplete(this.m_flLastSetValue, e),
        (this.m_flLastSetValue = null));
    }
    IncrementValue(e) {
      let t = this.ClampValue(this.props.value + e);
      t != this.props.value &&
        (this.props.onChange && this.props.onChange(t, 2),
        (this.m_flLastSetValue = t));
    }
    render() {
      let e = {},
        t = {};
      if (this.BPropsValid()) {
        let n =
          (100 * (this.props.value - this.props.min)) /
            (this.props.max - this.props.min) +
          `%`;
        ((e.width = n), (t = { "--position": n }));
      }
      let { label: n, description: r, tooltip: i, ...a } = this.props,
        o = this.props.renderValue ?? Oa;
      return (0, q.jsxs)(`div`, {
        className:
          `DialogSlider_Container _DialogInputContainer _DialogLayout` +
          (this.props.className ? ` ` + this.props.className : ``),
        onKeyDown: this.OnKeyDown,
        tabIndex: this.props.tabIndex || 0,
        children: [
          n &&
            (0, q.jsxs)(`div`, {
              className: `DialogLabel`,
              children: [n, !!i && (0, q.jsx)(xi, { tooltip: i })],
            }),
          (0, q.jsxs)(`div`, {
            className: `DialogSlider_Slider`,
            onMouseDown: this.OnMouseDown,
            onTouchStart: this.OnTouchStart,
            children: [
              (0, q.jsx)(`div`, { className: `DialogSlider_Value`, style: e }),
              (0, q.jsx)(`div`, {
                className: `DialogSlider_Grabber`,
                style: t,
              }),
            ],
          }),
          this.props.showValue &&
            (0, q.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: o(this.props.value, this.props.valueSuffix),
            }),
          r &&
            (0, q.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: r,
            }),
        ],
      });
    }
  };
(I([f], Aa.prototype, `OnMouseDown`, null),
  I([f], Aa.prototype, `OnMouseMove`, null),
  I([f], Aa.prototype, `OnMouseUp`, null),
  I([f], Aa.prototype, `OnTouchStart`, null),
  I([f], Aa.prototype, `OnTouchMove`, null),
  I([f], Aa.prototype, `OnTouchEnd`, null),
  I([f], Aa.prototype, `OnKeyDown`, null));
var ja = `S-ML1xJ2g6g-`,
  Ma = `_6zj1EJeADnw-`,
  Na = U.createContext({ setValue: () => {} });
function Pa(e) {
  let {
      value: t,
      onChange: n,
      classNames: r,
      disabled: i,
      labelId: a,
      descriptionId: o,
      role: s = `radiogroup`,
      children: c,
      centeredPillStyle: l,
      ...u
    } = e,
    d = { value: t, setValue: n, disabled: i };
  return (0, q.jsx)(Na.Provider, {
    value: d,
    children: (0, q.jsx)(B, {
      role: s,
      "aria-labelledby": a,
      "aria-describedby": o,
      ...u,
      className: V(
        ja,
        `Shared_Radio_Group`,
        r,
        i && `TjMqoWzoLY4-`,
        d.bVertical && void 0,
        l && `_7vVqomqu9DQ-`,
      ),
      children: c,
    }),
  });
}
function Fa(e) {
  let { value: t, children: n, role: r = `radio`, ...i } = e,
    { value: a, setValue: o, disabled: s } = U.useContext(Na),
    c = o,
    l = t === a;
  return (0, q.jsx)(st, {
    role: r,
    "aria-checked": l,
    "aria-selected": l,
    className: V(Ma, `RadioButton`, l && `mHUNUyJB78w-`, s && `TjMqoWzoLY4-`),
    onClick: s ? void 0 : () => c(t),
    ...i,
    children: n,
  });
}
function Ia(e) {
  return (0, q.jsx)(Pa, {
    ...e,
    role: `tablist`,
    "aria-orientation": `horizontal`,
    labelId: void 0,
  });
}
function La(e) {
  let { controlsId: t, ...n } = e;
  return (0, q.jsx)(Fa, { ...n, role: `tab`, "aria-controls": t });
}
var Ra = `S7ceo4XABGY-`,
  za = `HqQV85GkSvw-`,
  Ba = `AWM2T-sfNd0-`;
function Va(e) {
  return typeof e == `object` && `data` in e;
}
function Ha(e) {
  return typeof e == `object` && `bIsSeparator` in e;
}
function Ua(e) {
  return typeof e == `object` && `options` in e;
}
function Wa(e, t) {
  if (e === t) return !0;
  if (!Array.isArray(e) || !Array.isArray(t) || e.length != t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!Ga(e[n], t[n])) return !1;
  return !0;
}
function Ga(e, t) {
  return e == null || t == null
    ? e == t
    : Ha(e) && Ha(t)
      ? !0
      : !(
          Ha(e) ||
          Ha(t) ||
          typeof e.label != typeof t.label ||
          (typeof e.label == `string` && e.label !== t.label) ||
          e.tooltip !== t.tooltip ||
          Ua(e) != Ua(t) ||
          (Ua(e) && Ua(t) && !Wa(e.options, t.options)) ||
          (Va(e) && Va(t) && e.data !== t.data)
        );
}
function Ka(e) {
  let t = [e],
    n = [];
  for (; t.length > 0;) {
    let e = t.shift();
    Array.isArray(e) &&
      e.forEach((e) => {
        Va(e) ? n.push(e) : Ua(e) && t.push(e.options);
      });
  }
  return n;
}
function qa(e, t) {
  if (e != null)
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (Va(r) && r.data === t) return r;
      if (Ua(r)) {
        let e = qa(r.options, t);
        if (e != null) return e;
      }
    }
}
function Ja(e) {
  let t = wi(`DropDownField`, Ya);
  return (0, q.jsx)(t, { ...e });
}
function Ya(e) {
  let {
    label: t,
    tooltip: n,
    strClassName: r,
    dropDownControlRef: i,
    ...a
  } = e;
  return (0, q.jsx)(aa, {
    label: t,
    tooltip: n,
    className: r,
    children: (0, q.jsx)(Za, { menuLabel: t, ...a, ref: i }),
  });
}
var Xa = U.forwardRef(function (e, t) {
    return (0, q.jsxs)(ut, {
      id: e.id,
      focusable: e.focusable,
      className: V(e.className, `DialogDropDown`, `_DialogInputContainer`, {
        Active: e.opened,
        Disabled: e.disabled,
      }),
      tabIndex: e.tabIndex,
      onClick: e.onClick,
      onKeyDown: e.onKeyDown,
      disabled: e.disabled,
      type: `button`,
      ref: t,
      noFocusRing: e.noFocusRing,
      role: e.role ?? `combobox`,
      "aria-controls": e[`aria-controls`],
      "aria-expanded": e.opened,
      "aria-label": e[`aria-label`],
      "aria-labelledby": e[`aria-labelledby`],
      "aria-describedby": e[`aria-describedby`],
      children: [
        (0, q.jsx)(`div`, {
          className: `DialogDropDown_CurrentDisplay`,
          children: e.children,
        }),
        !e.disabled &&
          (0, q.jsx)(`div`, {
            className: V(e.arrowClassName, `DialogDropDown_Arrow`),
            children: (0, q.jsx)(pe, { role: `presentation` }),
          }),
      ],
    });
  }),
  Za = class extends U.Component {
    static contextType = Si;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      (super(e),
        (this.state = {
          value: qa(e.rgOptions, e.selectedOption),
          bOpened: !1,
        }));
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let t = qa(this.props.rgOptions, e);
      Ga(t, this.value) || this.setState({ value: t });
    }
    get value() {
      return this.props.controlled
        ? qa(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, t, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        t.bOpened !== this.state.bOpened ||
        !Wa(this.props.rgOptions, e.rgOptions) ||
        !Ga(t.value, this.value)
      )
        return !0;
      for (let t of [
        `selectedOption`,
        `tabIndex`,
        `onChange`,
        `strDefaultLabel`,
      ])
        if (e[t] !== this.props[t]) return !0;
      return !1;
    }
    componentDidUpdate(e, t) {
      k(
        this.props.controlled === e.controlled,
        `"controlled" prop should never change after mount`,
      );
      let n = !Wa(e.rgOptions, this.props.rgOptions),
        r = e.selectedOption !== this.props.selectedOption,
        i = !Ga(this.value, t.value);
      (!this.props.controlled &&
        (n || i || r) &&
        (r || this.value == null
          ? this.SetSelectedOption(this.props.selectedOption)
          : this.SetSelectedOption(this.value.data)),
        (n || i) &&
          (this.state.bOpened
            ? (this.m_iMenuInstance?.SetOnHideCallback(void 0),
              this.m_iMenuInstance?.Hide(),
              (this.m_iMenuInstance = void 0),
              this.BuildMenu())
            : (this.m_iMenuInstance &&=
                (this.m_iMenuInstance.SetOnHideCallback(void 0), void 0))));
    }
    OnInputRef(e) {
      e && (this.m_elInput = e);
    }
    get element() {
      return this.m_elInput;
    }
    ToggleMenu() {
      if (this.state.bOpened) this.HideMenu();
      else {
        if (
          this.props.onMenuWillOpen &&
          this.props.onMenuWillOpen(this.ShowMenu) == 0
        )
          return;
        this.ShowMenu();
      }
    }
    OnValueSelected(e, t) {
      (this.HideMenu(),
        this.setState({ value: t }),
        this.props.onChange && this.props.onChange(t, this, e));
    }
    BuildMenu() {
      let e = `DialogMenuPosition`;
      this.props.strDropDownClassName &&
        (e += ` ` + this.props.strDropDownClassName);
      let t = {
          bOverlapHorizontal: !0,
          bMatchWidth: this.props.bMatchWidth ?? !0,
          bFitToWindow: !0,
          strClassName: e,
          bDisableMouseOverlay: this.props.bDisableMouseOverlay,
          ...this.props.contextMenuPositionOptions,
        },
        n = this.props.contextMenuPositionOptions?.onCancel;
      ((this.m_iMenuInstance = Pe(
        (0, q.jsx)($a, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: n,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
          id: `dropdownmenu_${this.m_iMenuInstance?.key}`,
        }),
        this.m_elInput,
        t,
      )),
        this.m_iMenuInstance.SetLabel(
          this.props.menuLabel ??
            (typeof this.props.strDefaultLabel == `string` &&
              this.props.strDefaultLabel),
        ),
        this.m_iMenuInstance.SetOnHideCallback(this.HideMenu));
    }
    ShowMenu() {
      (this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
        this.props.onMenuOpened && this.props.onMenuOpened(),
        this.setState({ bOpened: !0 }));
    }
    HideMenu() {
      (this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
        this.setState({ bOpened: !1 }, () => this.m_elInput.focus()));
    }
    OnKeyDown(e) {
      eo(e, this.props.rgOptions.filter(Va), this.value?.data, (e) =>
        this.OnValueSelected(void 0, e),
      );
    }
    render() {
      let e = this.value?.label ?? this.props.strDefaultLabel;
      this.props.renderButtonValue != null &&
        (e = this.props.renderButtonValue(e));
      let t = this.props.focusable ?? !0,
        n = this.props.renderButton || this.context.DropDownControlButton || Xa;
      return (0, q.jsx)(n, {
        focusable: t,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (t ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        role: `combobox`,
        "aria-controls": this.m_iMenuInstance
          ? `dropdownmenu_${this.m_iMenuInstance.key}`
          : void 0,
        "aria-expanded": this.state.bOpened,
        "aria-label": this.props[`aria-label`],
        "aria-labelledby": this.props[`aria-labelledby`],
        "aria-describedby": this.props[`aria-describedby`],
        children: e,
      });
    }
  };
(I([f], Za.prototype, `OnInputRef`, null),
  I([f], Za.prototype, `ToggleMenu`, null),
  I([f], Za.prototype, `OnValueSelected`, null),
  I([f], Za.prototype, `ShowMenu`, null),
  I([f], Za.prototype, `HideMenu`, null),
  I([f], Za.prototype, `OnKeyDown`, null));
var Qa = U.createContext(null);
function $a(e) {
  let t = wi(`DropDownMenu`, to);
  return (0, q.jsx)(Qa.Provider, {
    value: {},
    children: (0, q.jsx)(t, { ...e }),
  });
}
function eo(e, t, n, r) {
  let i;
  if (e.key === `ArrowDown`)
    i = (t.findIndex((e) => e.data === n) + 1) % t.length;
  else if (e.key === `ArrowUp`) {
    let e = t.findIndex((e) => e.data === n);
    i = e <= 0 ? t.length - 1 : e - 1;
  }
  i !== void 0 && (r(t[i]), e.preventDefault());
}
function to(e) {
  let {
      rgOptions: t,
      strDropDownItemClassName: n,
      onValueSelected: r,
      selectedValue: i,
    } = e,
    [a, o] = U.useState(i),
    s = U.useMemo(() => t.filter(Va), [t]),
    c = U.useCallback(
      (e) => {
        eo(e, s, a, (e) => o(e.data));
      },
      [a, s],
    );
  return (0, q.jsx)(`div`, {
    className: V(Ba, `_DialogInputContainer`, e.strDropDownMenuCtnClass),
    onKeyDown: c,
    children: (0, q.jsx)(no, {
      rgOptions: t,
      strDropDownItemClassName: n,
      onValueSelected: r,
      activeValue: a,
      setActiveValue: o,
    }),
  });
}
function no(e) {
  let { rgOptions: t, ...n } = e;
  return t.map((e, t) =>
    Ha(e)
      ? (0, q.jsx)(`hr`, { className: V(Ra, za) }, t)
      : Ua(e)
        ? (0, q.jsx)(no, { ...n, rgOptions: e.options }, t)
        : (0, q.jsx)(ro, { ...n, option: e }, t),
  );
}
function ro(e) {
  let {
      option: t,
      strDropDownItemClassName: n,
      onValueSelected: r,
      activeValue: i,
      setActiveValue: a,
    } = e,
    o = U.useCallback((e) => e && e.focus(), []),
    s = U.useCallback(() => {
      a(t.data);
    }, [a, t]),
    c = t.data === i;
  return (0, q.jsx)(`button`, {
    type: `button`,
    className: V(Ra, n, t.strOptionClass, c && `ContextMenuAutoFocus`),
    onClick: (e) => r(e, t),
    ref: c ? o : void 0,
    onMouseEnter: s,
    role: `option`,
    "aria-selected": c,
    children: t.tooltip
      ? (0, q.jsx)(nt, {
          toolTipContent: t.tooltip,
          bTopmost: !0,
          className: `TooltipContainer`,
          children: t.label,
        })
      : (0, q.jsx)(`div`, { children: t.label }),
  });
}
var io = class extends U.Component {
  state = { rgOptions: void 0 };
  async OnMenuOpened() {
    if (!this.state.rgOptions) {
      let e = await this.props.fnLoadOptions();
      this.setState({ rgOptions: e });
    }
  }
  render() {
    let {
        fnLoadOptions: e,
        strInitialDisplay: t,
        initialValue: n,
        ...r
      } = this.props,
      { rgOptions: i } = this.state;
    return (
      i === void 0 &&
        (t || n
          ? ((i = [{ label: t, data: n }]), (r.selectedOption = n))
          : (i = [])),
      (0, q.jsx)(Ja, { ...r, rgOptions: i, onMenuOpened: this.OnMenuOpened })
    );
  }
};
I([f], io.prototype, `OnMenuOpened`, null);
var ao = `mYpDuVHVsJM-`,
  oo = `u6bp3PlaM60-`,
  so = `_3L1VI5GIie4-`;
function co(e) {
  let t = e.descriptionVisibility ?? `always`,
    n = e.upperDescriptionVisibility ?? `always`,
    r = e.iconVisibility ?? `always`,
    i = V(ao, e.strClassNames),
    a = U.useContext(Qa) != null,
    o = e.description != null && (a || t == `always`),
    s = e.upperDescription != null && (a || n == `always`),
    c = e.icon != null && (a || r == `always`);
  return (0, q.jsxs)(`div`, {
    className: i,
    children: [
      c && (0, q.jsx)(`div`, { className: `_273uGCwWKuU-`, children: e.icon }),
      (0, q.jsxs)(`div`, {
        className: oo,
        children: [
          s &&
            (0, q.jsx)(`div`, {
              className: `cmSOQfHwvqo-`,
              children: e.upperDescription,
            }),
          (0, q.jsx)(`div`, {
            className: V(so, e.strTitleClassNames),
            children: e.title,
          }),
          o &&
            (0, q.jsx)(`div`, {
              className: `YPbcZU2JQOg-`,
              children: e.description,
            }),
        ],
      }),
    ],
  });
}
var lo = new xt(`DragDrop`).Debug;
function uo(e) {
  return e.children;
}
var fo = class extends U.Component {
  m_coordinator = new ho();
  OnDrop(e, t) {
    (t > e && t--, t != e && this.props.onReorder(e, t));
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, q.jsx)(
          yo,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (e) => e.props.data != 0,
            fnOnDrop: (e) => this.OnDrop(e.props.data, 0),
          },
          `dropregion_top`,
        ),
      ),
      U.Children.forEach(this.props.children, (t, n) => {
        let r = t.props.id || `__list_` + n,
          i = n + 1;
        (e.push(
          (0, q.jsx)(
            Y,
            { coordinator: this.m_coordinator, data: n, children: t },
            r,
          ),
        ),
          e.push(
            (0, q.jsx)(
              yo,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (e) => e.props.data != i,
                fnOnDrop: (e) => this.OnDrop(e.props.data, i),
              },
              `dropregion_` + r,
            ),
          ));
      }),
      (0, q.jsx)(`div`, { className: `DialogReorderableList`, children: e })
    );
  }
};
I([f], fo.prototype, `OnDrop`, null);
function po(e) {
  if (`touches` in e) {
    let t = e;
    return [t.touches[0].clientX, t.touches[0].clientY];
  }
  return [e.clientX, e.clientY];
}
function mo(e, t, n, r) {
  return r
    ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
    : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
}
var ho = class {
  m_embeddedElement = new Nn(`DragGhosts`);
  m_rgDropRegions = [];
  m_activeDraggable;
  m_rgActiveDropRegions = [];
  m_activeDropRegion;
  m_dropGhost;
  m_dragGhost;
  m_dragOffWindowTimer;
  RegisterDropRegion(e) {
    (this.m_rgDropRegions.push(e),
      this.m_activeDraggable &&
        e.BAcceptDraggable(this.m_activeDraggable) &&
        (e.OnDragStarted(this.m_activeDraggable),
        this.m_rgActiveDropRegions.push(e)));
  }
  UnregisterDropRegion(e) {
    (A(this.m_rgDropRegions, e),
      A(this.m_rgActiveDropRegions, e),
      this.m_activeDropRegion == e &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost()));
  }
  OnDragGhostRef(e) {
    this.m_dragGhost = e;
  }
  ShowDragGhost() {
    let e = this.m_activeDraggable.renderDragGhost(),
      t = V(
        e.props.className,
        !!this.m_activeDropRegion && `DraggedOverActiveDrop`,
      ),
      n = U.cloneElement(e, { ref: this.OnDragGhostRef, className: t });
    this.m_embeddedElement.ShowElement(
      this.m_activeDraggable.GetDragDocument(),
      n,
      this.m_activeDraggable,
    );
  }
  HideDragGhost() {
    this.m_embeddedElement.HideElement(
      this.m_activeDraggable.GetDragDocument(),
      this.m_activeDraggable,
    );
  }
  m_elCloneContainer;
  m_elCloneOriginal;
  m_nodeCloneCopy;
  MakeDragClone(e) {
    (k(
      !this.m_nodeCloneCopy && !this.m_elCloneOriginal,
      `Drag already in progress`,
    ),
      (this.m_elCloneOriginal = e.m_divRef.current),
      (this.m_nodeCloneCopy = this.m_elCloneOriginal.cloneNode(!0)),
      e.m_divRef.current.replaceWith(this.m_nodeCloneCopy),
      this.m_elCloneContainer ||
        ((this.m_elCloneContainer = e
          .GetDragDocument()
          .body.ownerDocument.createElement(`div`)),
        e.GetDragDocument().body.appendChild(this.m_elCloneContainer)),
      this.m_elCloneContainer.appendChild(this.m_elCloneOriginal));
  }
  ReverseDragClone() {
    (this.m_nodeCloneCopy.parentNode?.replaceChild(
      this.m_elCloneOriginal,
      this.m_nodeCloneCopy,
    ),
      (this.m_nodeCloneCopy = void 0),
      (this.m_elCloneOriginal = void 0));
  }
  OnDragStart(e) {
    ((this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []));
    for (let t of this.m_rgDropRegions)
      t.BAcceptDraggable(e) &&
        (t.OnDragStarted(e), this.m_rgActiveDropRegions.push(t));
    (this.MakeDragClone(e), this.ShowDragGhost());
  }
  EndDrag() {
    if (this.m_activeDraggable) {
      (this.ReverseDragClone(),
        this.HideDragGhost(),
        this.m_activeDropRegion &&
          this.m_activeDropRegion.OnDrop(this.m_activeDraggable));
      for (let e of this.m_rgActiveDropRegions)
        e.OnDragEnded(this.m_activeDraggable);
      ((this.m_activeDraggable = void 0),
        (this.m_dropGhost = void 0),
        (this.m_rgActiveDropRegions = []));
    }
  }
  FindBestActiveDropRegionForPoint(e, t) {
    let n = this.m_activeDraggable.GetDragDocument(),
      r;
    if ((`elementsFromPoint` in n && (r = n.elementsFromPoint(e, t)), r)) {
      let e = new Map();
      this.m_rgActiveDropRegions.forEach((t) => e.set(t.GetElement(), t));
      for (let t of r) {
        let n = e.get(t);
        if (n) return n;
      }
    } else {
      if (
        this.m_activeDropRegion &&
        this.m_activeDropRegion.BDraggableInRegion(e, t, this.m_activeDraggable)
      )
        return this.m_activeDropRegion;
      for (let n = this.m_rgActiveDropRegions.length - 1; n >= 0; n--) {
        let r = this.m_rgActiveDropRegions[n];
        if (r.BDraggableInRegion(e, t, this.m_activeDraggable)) return r;
      }
    }
  }
  m_prevClientX = 0;
  m_prevClientY = 0;
  OnDrag(e, t, n) {
    let r = this.m_prevClientX || t,
      i = this.m_prevClientY || n;
    if (
      (e.props.bEnableHTMLDrag &&
        this.m_dragOffWindowTimer &&
        window.clearTimeout(this.m_dragOffWindowTimer),
      this.m_dragGhost)
    ) {
      let t = r === void 0 ? 0 : r - (this.m_dragGhost.state.clientX ?? 0),
        n = i === void 0 ? 0 : i - (this.m_dragGhost.state.clientY ?? 0);
      if (
        (this.m_dragGhost.setState({
          clientX: r,
          clientY: i,
          clientXDelta: t,
          clientYDelta: n,
          bVisible: !0,
        }),
        e.props.bEnableHTMLDrag && (t || n))
      ) {
        let o = r + t,
          s = i + n,
          c = e.GetDragDocument().body.getBoundingClientRect();
        if (mo(r, i, c) && !mo(o, s, c, !0)) {
          let t = a(o, c.left, c.right, c.left - 200, c.right + 200),
            n = a(s, c.top, c.bottom, c.top - 100, c.bottom + 100);
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, t, n);
          }, 50);
        }
      }
    }
    let o = this.FindBestActiveDropRegionForPoint(r, i);
    ((this.m_prevClientX = t),
      (this.m_prevClientY = n),
      !!this.m_activeDropRegion != !!o &&
        (this.ShowDragGhost(),
        (this.m_dropGhost ||= this.m_activeDraggable.renderDropGhost())),
      this.m_activeDropRegion &&
        this.m_activeDropRegion != o &&
        this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
      o &&
        this.m_activeDropRegion != o &&
        o.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
      (this.m_activeDropRegion = o),
      this.m_activeDropRegion &&
        this.m_activeDropRegion.OnDragMove(r, i, this.m_activeDraggable));
  }
};
I([f], ho.prototype, `OnDragGhostRef`, null);
var Y = class extends U.Component {
  constructor(e) {
    (super(e), l(this));
  }
  m_DragInfo = {
    bStarted: !1,
    startClientX: void 0,
    startClientY: void 0,
    startOffsetX: void 0,
    startOffsetY: void 0,
    startWidth: void 0,
    startHeight: void 0,
    ownerWin: void 0,
  };
  m_divRef = U.createRef();
  GetDragDocument() {
    return this.m_DragInfo.ownerWin?.document;
  }
  RecordDragStart(e, t, n) {
    ((this.m_DragInfo.startClientX = t), (this.m_DragInfo.startClientY = n));
    let r = e.getBoundingClientRect();
    ((this.m_DragInfo.startOffsetX = t - r.left),
      (this.m_DragInfo.startOffsetY = n - r.top),
      (this.m_DragInfo.startWidth = r.width),
      (this.m_DragInfo.startHeight = r.height),
      (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView));
  }
  ProcessDragMove(e) {
    lo(`ProcessDragMove`, e, this.props.data);
    let [t, n] = po(e);
    if (!this.m_DragInfo.bStarted)
      (t - (this.m_DragInfo.startClientX ?? 0)) ** 2 +
        (n - (this.m_DragInfo.startClientY ?? 0)) ** 2 >=
        25 &&
        ((this.m_DragInfo.bStarted = !0),
        this.forceUpdate(),
        this.props.fnOnDragStart && this.props.fnOnDragStart(),
        this.props.coordinator.OnDragStart(this),
        this.props.coordinator.OnDrag(this, t, n));
    else if (this.props.bEnableHTMLDrag && t == 0 && n == 0) return;
    else this.props.coordinator.OnDrag(this, t, n);
  }
  OnMouseDown(e) {
    !this.m_DragInfo.bStarted &&
      e.button == 0 &&
      (this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
      this.m_DragInfo.ownerWin?.addEventListener(
        `mousemove`,
        this.ProcessDragMove,
      ),
      this.m_DragInfo.ownerWin?.addEventListener(`mouseup`, this.OnMouseUp));
  }
  OnMouseUp(e) {
    (this.m_DragInfo.ownerWin?.removeEventListener(
      `mousemove`,
      this.ProcessDragMove,
    ),
      this.m_DragInfo.ownerWin?.removeEventListener(`mouseup`, this.OnMouseUp),
      this.ResetDragState());
  }
  OnTouchStart(e) {
    this.m_DragInfo.bStarted ||
      (this.RecordDragStart(
        e.currentTarget,
        e.touches[0].clientX,
        e.touches[0].clientY,
      ),
      this.m_DragInfo.ownerWin?.addEventListener(
        `touchmove`,
        this.ProcessDragMove,
      ),
      this.m_DragInfo.ownerWin?.addEventListener(`touchend`, this.OnTouchEnd));
  }
  OnTouchEnd(e) {
    (this.m_DragInfo.ownerWin?.removeEventListener(
      `touchmove`,
      this.ProcessDragMove,
    ),
      this.m_DragInfo.ownerWin?.removeEventListener(
        `touchend`,
        this.OnTouchEnd,
      ),
      this.ResetDragState());
  }
  ResetDragState() {
    (lo(`ResetDragState`, this.props.data),
      this.m_DragInfo.bStarted &&
        (this.props.coordinator.EndDrag(),
        this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
      (this.m_DragInfo.bStarted = !1),
      (this.m_DragInfo.startClientX = void 0),
      (this.m_DragInfo.startClientY = void 0),
      (this.m_DragInfo.startOffsetX = void 0),
      (this.m_DragInfo.startOffsetY = void 0),
      (this.m_DragInfo.ownerWin = void 0),
      this.forceUpdate());
  }
  OnHTMLDragStart(e) {
    (lo(`HTMLDragStart`, e, this.props.data, this.props.strHTMLDragData),
      (e.dataTransfer.effectAllowed = `copyMove`),
      this.props.strHTMLDragData &&
        this.props.strHTMLDragData.forEach((t, n) =>
          e.dataTransfer.setData(n, t),
        ),
      e.dataTransfer.getData(`text/plain`) ||
        e.dataTransfer.setData(`text/plain`, this.props.data.toString()));
    let t = new Image();
    (e.dataTransfer.setDragImage(t, 0, 0),
      this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
      this.m_DragInfo.ownerWin?.addEventListener(`drag`, this.OnHTMLDrag),
      this.m_DragInfo.ownerWin?.addEventListener(
        `dragend`,
        this.OnHTMLDragEnd,
      ));
  }
  OnHTMLDrag(e) {
    (lo(`HTMLDrag`, e, e.dataTransfer?.types.length), this.ProcessDragMove(e));
  }
  OnHTMLDragEnd(e) {
    (lo(
      `HTMLDragEnd`,
      e,
      e.dataTransfer?.getData(`text/plain`) || `NOTHING`,
      this.props.data,
    ),
      this.m_DragInfo.ownerWin?.removeEventListener(`drag`, this.OnHTMLDrag),
      this.m_DragInfo.ownerWin?.removeEventListener(
        `dragend`,
        this.OnHTMLDragEnd,
      ),
      this.ResetDragState());
  }
  render() {
    let {
        coordinator: e,
        data: t,
        bEnableHTMLDrag: n,
        strHTMLDragData: r,
        fnOnDragStart: i,
        fnOnDragEnd: a,
        fnRenderDragGhost: o,
        fnRenderDropGhost: s,
        className: c,
        strActiveClassName: l,
        children: u,
        ...d
      } = this.props,
      f = {},
      p = c || `DialogDraggable`;
    return (
      this.m_DragInfo.bStarted
        ? ((p = V(p, l || `DraggedOut`)),
          n && (f = { onDragEnd: this.OnHTMLDragEnd }))
        : (f = n
            ? { onDragStart: this.OnHTMLDragStart }
            : {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
      (0, q.jsx)(`div`, {
        ref: this.m_divRef,
        className: p,
        ...f,
        ...d,
        draggable: n,
        children: u,
      })
    );
  }
  renderDropGhost() {
    return this.props.fnRenderDropGhost
      ? this.props.fnRenderDropGhost()
      : (0, q.jsx)(go, { elContent: this.GetClone() });
  }
  renderDragGhost() {
    return this.props.fnRenderDragGhost
      ? this.props.fnRenderDragGhost()
      : (0, q.jsx)(_o, {
          elContent: this.GetClone(),
          offsetX: this.m_DragInfo.startOffsetX,
          offsetY: this.m_DragInfo.startOffsetY,
          width: this.m_DragInfo.startWidth,
          height: this.m_DragInfo.startHeight,
        });
  }
  GetClone() {
    let e = this.m_divRef.current,
      t;
    if (e && e.childElementCount) {
      if (e.childElementCount == 1) t = e.firstElementChild.cloneNode(!0);
      else {
        t = document.createElement(`div`);
        for (let n = e.firstChild; n; n = n.nextSibling)
          t.appendChild(n.cloneNode(!0));
      }
    }
    return t;
  }
};
(I([f], Y.prototype, `ProcessDragMove`, null),
  I([f], Y.prototype, `OnMouseDown`, null),
  I([f], Y.prototype, `OnMouseUp`, null),
  I([f], Y.prototype, `OnTouchStart`, null),
  I([f], Y.prototype, `OnTouchEnd`, null),
  I([d], Y.prototype, `ResetDragState`, null),
  I([f], Y.prototype, `OnHTMLDragStart`, null),
  I([f], Y.prototype, `OnHTMLDrag`, null),
  I([f], Y.prototype, `OnHTMLDragEnd`, null));
var go = class extends U.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, q.jsx)(`div`, {
      className: `DialogDraggable_DropGhost`,
      ref: this.OnRef,
    });
  }
};
I([f], go.prototype, `OnRef`, null);
var _o = class extends U.Component {
  state = {
    clientX: void 0,
    clientY: void 0,
    bVisible: !0,
    clientXDelta: void 0,
    clientYDelta: void 0,
  };
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  CalculateRotationDegrees(e) {
    return !e || Math.abs(e) < 4
      ? 0
      : (e > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
  }
  render() {
    if (
      !this.state.bVisible ||
      this.state.clientX === void 0 ||
      this.state.clientY === void 0
    )
      return (0, q.jsx)(`div`, {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || `auto`,
        height: this.props.height || `auto`,
        perspective: `600px`,
      },
      t = a(
        this.CalculateRotationDegrees(this.state.clientYDelta),
        -90,
        90,
        2,
        0,
      ),
      n = {
        transform: `rotateX(${this.CalculateRotationDegrees(-1 * (this.state.clientYDelta ?? 0))}deg) rotateY( ${this.CalculateRotationDegrees(this.state.clientXDelta)}deg)`,
        transition: `transform .16s ease-out, filter .16s ease-out`,
        filter: `brightness(` + t + `)`,
      },
      r = this.props.className || `DialogDraggable_DragGhost`;
    return (0, q.jsx)(`div`, {
      className: r,
      style: e,
      children: (0, q.jsx)(`div`, { ref: this.OnRef, style: n }),
    });
  }
};
I([f], _o.prototype, `OnRef`, null);
var vo = class extends U.Component {
    m_divRef = U.createRef();
    constructor(e) {
      (super(e), (this.state = {}));
    }
    componentDidMount() {
      this.props.coordinator.RegisterDropRegion(this);
    }
    componentWillUnmount() {
      this.props.coordinator.UnregisterDropRegion(this);
    }
    OnDragStarted(e) {
      this.setState({ bDraggableActive: !0 });
    }
    OnDragEnded(e) {
      this.setState({ bDraggableActive: !1 });
    }
    OnDragEnter(e, t) {
      (this.setState({ dropGhost: t }),
        this.props.fnOnDragEnter && this.props.fnOnDragEnter(e));
    }
    OnDragLeave(e) {
      (this.setState({ dropGhost: void 0 }),
        this.props.fnOnDragLeave && this.props.fnOnDragLeave(e));
    }
    OnDragMove(e, t, n) {}
    OnDrop(e) {
      (this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e));
    }
    BAcceptDraggable(e) {
      return !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(e);
    }
    BDraggableInRegion(e, t, n) {
      return mo(e, t, this.GetClientRect());
    }
    GetElement() {
      return this.m_divRef.current;
    }
    GetClientRect() {
      return (
        this.m_divRef.current && this.m_divRef.current.getBoundingClientRect()
      );
    }
    render() {
      let {
          coordinator: e,
          fnBAcceptDraggable: t,
          fnOnDrop: n,
          fnOnDragEnter: r,
          fnOnDragLeave: i,
          className: a,
          strActiveClassName: o,
          children: s,
          focusable: c,
          containerRef: l,
          ...u
        } = this.props,
        d = V(
          a || `DialogDropRegion`,
          this.state.bDraggableActive && (o || `Active`),
        );
      return (0, q.jsxs)(st, {
        ref: oe(l, this.m_divRef),
        className: d,
        ...u,
        focusable: c === void 0 ? !!u.onClick : c,
        children: [this.state.dropGhost, s],
      });
    }
  },
  yo = class extends vo {
    BDraggableInRegion(e, t, n) {
      let r = this.GetClientRect();
      return r
        ? e >= r.left && e <= r.right && t >= r.top - 20 && t <= r.bottom + 20
        : !1;
    }
  },
  bo = t({
    Active: () => zo,
    DisabledItem: () => Ro,
    Hidden: () => Ao,
    HidePageListButton: () => Uo,
    NewNoteButton: () => jo,
    NoPadding: () => ko,
    PageListItem_Icon: () => Io,
    PageListItem_Title: () => Lo,
    PageListSeparator: () => Vo,
    PageListSpacer: () => Bo,
    PagedSettingDialog_ContentColumn: () => wo,
    PagedSettingsDialog: () => Co,
    PagedSettingsDialog_PageContent: () => Oo,
    PagedSettingsDialog_PageList: () => No,
    PagedSettingsDialog_PageListColumn: () => To,
    PagedSettingsDialog_PageListItem: () => Fo,
    PagedSettingsDialog_PageList_DisableScrolling: () => Po,
    PagedSettingsDialog_Title: () => Mo,
    ResponsiveActivePage: () => Do,
    ResponsivePageList: () => Eo,
    ReturnToPageListButton: () => Wo,
    Transparent: () => Ho,
    default: () => Go,
    "duration-app-launch": () => So,
    narrowWidth: () => xo,
  }),
  xo = `500px`,
  So = `800ms`,
  Co = `mORFK1ZCuIg-`,
  wo = `DzZHob0k3yg-`,
  To = `OrbQbwXDhqM-`,
  Eo = `ZZvAdjiSYLs-`,
  Do = `_8VNLBL23-Uw-`,
  Oo = `rLxoT9L8pa8-`,
  ko = `_3Ox-NUTg9h4-`,
  Ao = `Igl8J1Vx0OY-`,
  jo = `wpFUO2kDCcs-`,
  Mo = `HDo1-kQMln0-`,
  No = `dJXaNmBy-Ag-`,
  Po = `ULhVm5K-zhc-`,
  Fo = `rB0bL-tvRQQ-`,
  Io = `JQcvLkhr-Qg-`,
  Lo = `E3HjqSjUVtk-`,
  Ro = `UKhzwGNpZmo-`,
  zo = `mSrabfQ3MsQ-`,
  Bo = `_--hdAKe1xrA-`,
  Vo = `hMFxgFd052k-`,
  Ho = `HbztwWG73kA-`,
  Uo = `_7WOoBmFX-uw-`,
  Wo = `zt0l3PnZsMI-`,
  Go = {
    narrowWidth: xo,
    "duration-app-launch": `800ms`,
    PagedSettingsDialog: Co,
    PagedSettingDialog_ContentColumn: wo,
    PagedSettingsDialog_PageListColumn: To,
    ResponsivePageList: Eo,
    ResponsiveActivePage: Do,
    PagedSettingsDialog_PageContent: Oo,
    NoPadding: ko,
    Hidden: Ao,
    NewNoteButton: jo,
    PagedSettingsDialog_Title: Mo,
    PagedSettingsDialog_PageList: No,
    PagedSettingsDialog_PageList_DisableScrolling: Po,
    PagedSettingsDialog_PageListItem: Fo,
    PageListItem_Icon: Io,
    PageListItem_Title: Lo,
    DisabledItem: Ro,
    Active: zo,
    PageListSpacer: Bo,
    PageListSeparator: Vo,
    Transparent: Ho,
    HidePageListButton: Uo,
    ReturnToPageListButton: Wo,
  },
  Ko = `separator`,
  qo = `spacer`,
  Jo = class {
    constructor() {
      l(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
(I([p], Jo.prototype, `m_flPageListScrollTop`, void 0),
  I([p], Jo.prototype, `m_flPageScrollTop`, void 0));
var Yo = class e {
  static s_Instance;
  static Get() {
    return ((e.s_Instance ||= new e()), e.s_Instance);
  }
  constructor() {
    l(this);
  }
  m_setPagedSettingsInstances = new Set();
};
I([p], Yo.prototype, `m_setPagedSettingsInstances`, void 0);
var Xo = (function (e) {
  return (
    (e[(e.k_EPagedSettingsInitialFocus_Default = 0)] =
      `k_EPagedSettingsInitialFocus_Default`),
    (e[(e.k_EPagedSettingsInitialFocus_PageList = 1)] =
      `k_EPagedSettingsInitialFocus_PageList`),
    (e[(e.k_EPagedSettingsInitialFocus_PageContent = 2)] =
      `k_EPagedSettingsInitialFocus_PageContent`),
    e
  );
})({});
function Zo(e) {
  let {
      stylesheet: t,
      pages: n,
      iActivePage: r,
      onPageSelected: i,
      PageListItemComponent: a = Qo,
      PageListSeparatorComponent: o = es,
    } = e,
    s = U.useContext(ns);
  return n
    .filter((e, t) => {
      if (e === `separator` || e === `spacer`) {
        for (let e = t + 1; e < n.length; e++) {
          let t = n[e];
          if (t !== `separator` && t !== `spacer` && t.visible) return !0;
        }
        return !1;
      }
      return !0;
    })
    .map((e, n) => {
      let c = n === r;
      if (e === `separator`) {
        let e = n === r + 1 || n === r - 1;
        return (0, q.jsx)(o, { role: `separator`, bTransparent: e }, n);
      }
      if (e === `spacer`) return (0, q.jsx)(`div`, { className: Bo }, n);
      {
        if (e.visible === !1) return null;
        let r = e.identifier || e.title || n.toString(),
          o = () => i(n, e);
        return (0, q.jsx)(
          a,
          {
            className: V(t.PagedSettingsDialog_PageListItem, { [t.Active]: c }),
            onClick: o,
            title: e.title,
            icon: e.icon,
            active: c,
            id: s + e.identifier,
            role: `tab`,
            "aria-selected": c,
            "aria-controls": s + e.identifier + `_Content`,
          },
          r,
        );
      }
    });
}
function Qo(e) {
  let { title: t, icon: n, active: r, className: i, onClick: a, ...o } = e;
  return (0, q.jsxs)(`div`, {
    className: i,
    onClick: a,
    ...o,
    children: [
      n ? (0, q.jsx)(`div`, { className: Io, children: n }) : null,
      (0, q.jsx)(`div`, { className: Lo, ...o, children: t }),
    ],
  });
}
var $o = U.forwardRef(function (e, t) {
  let { activePage: n, style: r, stylesheet: i } = e,
    a = U.useContext(ns),
    o = n?.padding ?? `standard`;
  return (0, q.jsxs)(ta, {
    style: r,
    className: V(
      i?.PagedSettingsDialog_PageContent,
      n?.pageClassName,
      o == `none` && i?.NoPadding,
    ),
    refElem: t,
    role: `tabpanel`,
    "aria-labelledby": a + n?.identifier,
    id: a + n?.identifier + `_Content`,
    children: [
      n?.header,
      !n?.hideTitle && (0, q.jsx)(zi, { children: n?.title }),
      (0, q.jsx)(J, { children: n?.content }),
    ],
  });
});
function es(e) {
  let { bTransparent: t, className: n, ...r } = e;
  return (0, q.jsx)(`div`, { className: V(n, Vo, { [Ho]: t }), ...r });
}
function ts(e) {
  let t = wi(`PagedSettings`, rs);
  return (0, q.jsx)(t, { ...e });
}
var ns = U.createContext(void 0),
  rs = U.forwardRef(function (e, t) {
    let {
        stylesheet: n = bo,
        pages: r,
        onPageRequested: i,
        eInitialFocus: a,
      } = e,
      o = U.useId(),
      s = e.page == null,
      [c, l] = U.useState(() =>
        e.startingPage === void 0
          ? -1
          : r.findIndex(
              (t) => typeof t == `object` && t.identifier === e.startingPage,
            ),
      ),
      u = c;
    (s ||
      (u = r.findIndex((t) => typeof t == `object` && t.identifier === e.page)),
      (u < 0 || u >= r.length) && (u = 0));
    let d = null;
    typeof r[u] == `object` && (d = r[u]);
    let f = U.useRef(null),
      p = U.useCallback(() => f.current?.TakeFocus() || !1, [f]),
      [m, h] = U.useState(!1),
      g = m ? p : void 0,
      _ = U.useCallback((e) => {
        e && h(!0);
      }, []),
      v = U.useCallback(
        (e, t) => {
          (h(!0),
            mt.PlayNavSound(H.PagedNavigation),
            i && i(t.identifier),
            t.click ? t.click() : s && l(e));
        },
        [s, i],
      ),
      y = U.useRef(null),
      b = (e) => {
        e.detail.button == dt.OK && y.current?.TakeFocus(e.detail.button);
      },
      x = e.showTitle ?? !0,
      S = V(`DialogContentTransition`, n.PagedSettingDialog_ContentColumn);
    U.useEffect(() => {
      a === 2 && y.current?.TakeFocus();
    }, []);
    let { refForPageList: C, refForPage: w } = ds();
    return (0, q.jsx)(ns.Provider, {
      value: o,
      children: (0, q.jsxs)(B, {
        className: V(n.PagedSettingsDialog, e.className),
        ref: t,
        children: [
          (0, q.jsxs)(B, {
            className: V(
              n.PagedSettingsDialog_PageListColumn,
              e.hideList && `Igl8J1Vx0OY-`,
              `PageListColumn`,
            ),
            navRef: f,
            onButtonDown: b,
            onFocusWithin: _,
            children: [
              x &&
                (0, q.jsx)(`div`, {
                  className: n.PagedSettingsDialog_Title,
                  children: e.title,
                }),
              e.topControls && (0, q.jsx)(`div`, { children: e.topControls }),
              (0, q.jsx)(B, {
                className: V(
                  n.PagedSettingsDialog_PageList,
                  e.disablePageListScrolling &&
                    n.PagedSettingsDialog_PageList_DisableScrolling,
                  x && n.PagedSettingsDialog_PageList_ShowTitle,
                  e.bNoHeaderPadding &&
                    n.PageSettingsDialog_PageList_NoHeaderPadding,
                ),
                role: `tablist`,
                "aria-orientation": `vertical`,
                navEntryPreferPosition: qe.PREFERRED_CHILD,
                ref: C,
                children: (0, q.jsx)(Zo, {
                  stylesheet: n,
                  pages: r,
                  iActivePage: u,
                  onPageSelected: v,
                  PageListItemComponent: e.PageListItemComponent,
                  PageListSeparatorComponent: e.PageListSeparatorComponent,
                }),
              }),
              e.bottomControls &&
                (0, q.jsx)(`div`, { children: e.bottomControls }),
            ],
          }),
          (0, q.jsxs)(B, {
            className: S,
            onCancelButton: g,
            navRef: y,
            children: [
              e.toggleHideList &&
                (0, q.jsx)(us, {
                  hideList: e.hideList,
                  toggleHideList: e.toggleHideList,
                }),
              e.renderPageContent
                ? e.renderPageContent(d, w, $o)
                : (0, q.jsx)($o, { ref: w, activePage: d, stylesheet: n }),
            ],
          }),
        ],
      }),
    });
  });
function is(e) {
  if (e == `PageList`) return Eo;
  if (e == `ActivePage`) return Do;
  re(e, `Unsupported responsive state: ${e}`);
}
function as(e) {
  let { onActivate: t } = e;
  return (0, q.jsx)(B, {
    className: V(Wo, void 0),
    onActivate: t,
    fnCanTakeFocus: fe,
    children: (0, q.jsx)(Ne, { direction: `left` }),
  });
}
function os(e) {
  let { pages: t, stylesheet: n = bo } = e,
    r = U.useMemo(() => t.filter((e) => typeof e == `object`), [t]),
    i = (e, t, i) =>
      r.map((r) =>
        (0, q.jsx)(
          ls,
          {
            page: r,
            isActive: r === e,
            refForPage: r === e ? t : void 0,
            PageComponent: i,
            stylesheet: n,
          },
          r.identifier,
        ),
      );
  return (0, q.jsx)(ts, { ...e, renderPageContent: i });
}
var ss = U.createContext(!1);
function cs() {
  return U.useContext(ss);
}
var ls = U.memo(function (e) {
  let {
      isActive: t,
      refForPage: n,
      page: r,
      PageComponent: i,
      stylesheet: a,
    } = e,
    o = U.useContext(ns),
    s = U.useRef(!1);
  if (!t && !s.current) return null;
  s.current = !0;
  let c = t ? void 0 : { display: `none` };
  return (0, q.jsx)(ss.Provider, {
    value: t,
    children: (0, q.jsx)(i, {
      ref: n,
      style: c,
      activePage: r,
      stylesheet: a,
      role: `tabpanel`,
      "aria-labelledby": o + r.identifier,
      id: o + r.identifier + `_Content`,
    }),
  });
});
function us(e) {
  let { hideList: t, toggleHideList: n } = e;
  return (0, q.jsx)(`div`, {
    className: V(Uo, t && void 0),
    onClick: n,
    children: t
      ? (0, q.jsx)(Se, { direction: `right` })
      : (0, q.jsx)(Se, { direction: `left` }),
  });
}
function ds() {
  let e = U.useMemo(() => new Jo(), []);
  U.useEffect(
    () => (
      Yo.Get().m_setPagedSettingsInstances.add(e),
      () => {
        Yo.Get().m_setPagedSettingsInstances.delete(e);
      }
    ),
    [e],
  );
  let t = U.useCallback(
      (t) => (e.m_flPageListScrollTop = t.currentTarget.scrollTop),
      [e],
    ),
    n = U.useCallback(
      (t) => (e.m_flPageScrollTop = t.currentTarget.scrollTop),
      [e],
    ),
    r = Ke(`scroll`, t),
    i = Ke(`scroll`, n),
    a = U.useCallback(
      (t) => {
        e.m_flPageListScrollTop = t?.scrollTop ?? 0;
      },
      [e],
    ),
    o = U.useCallback(
      (t) => {
        e.m_flPageScrollTop = t?.scrollTop ?? 0;
      },
      [e],
    );
  return { refForPageList: R(r, a), refForPage: R(i, o) };
}
var fs = class extends U.Component {
  m_refTextArea = U.createRef();
  m_nTextAreaPadding;
  m_cEntryLength = Number.MAX_VALUE;
  get textarea() {
    return this.m_refTextArea.current;
  }
  get value() {
    return this.m_refTextArea.current?.value;
  }
  focus() {
    this.m_refTextArea.current?.focus();
  }
  InternalOnInput() {
    let e = this.m_refTextArea.current,
      t = this.GetMinHeight(),
      n = this.GetMaxHeight(),
      r,
      i = e.value.length;
    if (
      (this.m_nTextAreaPadding === void 0 && this.CalculatePadding(),
      i < this.m_cEntryLength &&
        ((r = window.scrollY), (e.style.height = t + `px`)),
      e.scrollHeight > n)
    )
      ((e.style.height = n + `px`), (e.style.overflow = `auto`));
    else if (e.scrollHeight != e.clientHeight) {
      let n = Math.max(e.scrollHeight, t);
      ((e.style.height = n - this.m_nTextAreaPadding + `px`),
        e.style.overflow == `auto` && (e.style.overflow = `hidden`));
    }
    (r !== void 0 && window.scrollTo(window.scrollX, r),
      (this.m_cEntryLength = i));
  }
  CalculatePadding() {
    let e = getComputedStyle(this.m_refTextArea.current);
    this.m_nTextAreaPadding =
      e.boxSizing == `border-box`
        ? 0
        : parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
  }
  GetMinHeight() {
    return this.props.nMinHeight || 20;
  }
  GetMaxHeight() {
    return this.props.nMaxHeight || 500;
  }
  DeferredInternalOnInput() {
    window.setTimeout(this.InternalOnInput, 1);
  }
  OnKeyUp(e) {
    (this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e));
  }
  OnBlur(e) {
    (this.DeferredInternalOnInput(), this.props.onBlur && this.props.onBlur(e));
  }
  OnClick(e) {
    (this.InternalOnInput(), this.props.onClick && this.props.onClick(e));
  }
  OnPaste(e) {
    (this.DeferredInternalOnInput(),
      this.props.onPaste && this.props.onPaste(e));
  }
  OnCut(e) {
    (this.InternalOnInput(), this.props.onCut && this.props.onCut(e));
  }
  componentDidMount() {
    ((this.m_refTextArea.current.style.overflow = `hidden`),
      (this.m_refTextArea.current.style.resize = `none`),
      this.InternalOnInput());
  }
  componentDidUpdate(e) {
    ((e.nMinHeight != this.props.nMinHeight ||
      e.nMaxHeight != this.props.nMaxHeight) &&
      (this.m_cEntryLength = Number.MAX_VALUE),
      this.m_refTextArea.current?.value.length != this.m_cEntryLength &&
        this.InternalOnInput());
  }
  render() {
    let { nMinHeight: e, nMaxHeight: t, ...n } = this.props;
    return (0, q.jsx)(tt, {
      ...n,
      ref: this.m_refTextArea,
      onKeyUp: this.OnKeyUp,
      onBlur: this.OnBlur,
      onClick: this.OnClick,
      onPaste: this.OnPaste,
      onCut: this.OnCut,
    });
  }
};
(I([f], fs.prototype, `InternalOnInput`, null),
  I([f], fs.prototype, `OnKeyUp`, null),
  I([f], fs.prototype, `OnBlur`, null),
  I([f], fs.prototype, `OnClick`, null),
  I([f], fs.prototype, `OnPaste`, null),
  I([f], fs.prototype, `OnCut`, null));
var ps = `lEqqqt0n--k-`,
  ms = `LfGMZCNzH20-`,
  hs = `kwxrGJQL5-4-`,
  gs = `VCubv9Yx4Q0-`,
  _s = `PZj-hOZa3Q8-`,
  vs = `tZJ0p3KkoMw-`,
  ys = `d9idqOcUtlU-`,
  bs = `BS96L19566Q-`,
  xs = `KCUAMncpiAg-`,
  Ss = `ApdBYSq-TZo-`,
  Cs = `_7IQ7dO6JJsQ-`,
  ws = `_4UYxIKgcQq4-`,
  Ts = `_92AC1lv53VI-`,
  Es = `P3v2mjrES6c-`,
  Ds = `S9g96mcfmi4-`,
  Os = `WZzEh-SQnS4-`,
  ks = `lLuNx2UE5xM-`,
  As = `_3voolpCtr6w-`,
  js = `UyZdvt4zZpI-`,
  Ms = `afIqIzaVohw-`,
  Ns = `mF7P-GaWW84-`,
  Ps = `kYWJ-fTvdPQ-`,
  Fs = `MGJwtg4H5Gw-`,
  Is = `ls-795tDYbY-`,
  Ls = `O6SsL9fKklo-`,
  Rs = `nXfSwUfMNG0-`,
  zs = `_3hRhxB634VE-`,
  Bs = `zRC7XaDPwrE-`,
  Vs = `_8wZT5dUg-Ls-`;
function Hs(e) {
  let {
      className: t,
      modalClassName: n,
      onCancel: r,
      closeModal: i,
      bOKDisabled: a,
      bCloseAfterOK: o = !0,
      onOK: s,
      bAllowFullSize: c,
      bDestructiveWarning: l,
      bDisableBackgroundDismiss: u,
      bHideCloseIcon: d,
      children: f,
      "aria-labelledby": p,
      ...m
    } = e,
    h = y();
  k(
    i || r,
    `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${t} ${n}`,
  );
  let g = U.useCallback(() => {
      (r && r()) || (i && i());
    }, [r, i]),
    _ = U.useCallback(async () => {
      a || (s && (await s()), o && i && i());
    }, [a, o, s, i]);
  return (0, q.jsx)(Yr, {
    onEscKeypress: g,
    className: n,
    bDestructiveWarning: l,
    bDisableBackgroundDismiss: u,
    bHideCloseIcon: d,
    children: (0, q.jsx)(ia, {
      role: `dialog`,
      "aria-labelledby": p || void 0,
      ...m,
      classNameContent: V(
        `GenericDialogBase`,
        `GenericConfirmDialog`,
        c && `DialogContentFullSize`,
        t,
      ),
      onSubmit: _,
      bCenterVertically: !h,
      children: f,
    }),
  });
}
function Us(e) {
  let { title: t, titleClassName: n, children: r, ...i } = e,
    a = U.useId();
  return (0, q.jsxs)(Hs, {
    "aria-labelledby": t ? a : ``,
    ...i,
    children: [t && (0, q.jsx)(zi, { id: a, className: n, children: t }), r],
  });
}
function Ws(e, t, n, r, i, a, o) {
  return new Promise((s, c) => {
    e(
      (0, q.jsx)(Ks, {
        strTitle: t,
        strDescription: n,
        strOKButtonText: r,
        strCancelButtonText: i,
        onOK: s,
        onCancel: c,
        bDestructiveWarning: a,
        children: o,
      }),
    );
  });
}
function Gs(e, t, n, r, i) {
  return new Promise((a, o) => {
    e(
      (0, q.jsx)(Ks, {
        bAlertDialog: !0,
        strTitle: t,
        strDescription: n,
        strOKButtonText: r,
        onOK: a,
        onCancel: a,
        children: i,
      }),
    );
  });
}
function Ks(e) {
  function t(t) {
    return () => {
      (t && t(), e.closeModal && e.closeModal());
    };
  }
  let {
      strTitle: n,
      strDescription: r,
      strOKButtonText: i,
      strCancelButtonText: a,
      onGamepadCancel: o,
      strGamepadCancelDescription: s,
      strMiddleButtonText: c,
      onMiddleButton: l,
      bAlertDialog: u,
      bProgressDialog: d,
      focusButton: f,
      children: p,
      ...m
    } = e,
    h = i || C(`#Button_Close`),
    g = (0, q.jsx)(pa, {
      bOKDisabled: e.bOKDisabled,
      bCancelDisabled: e.bCancelDisabled,
      strOKText: i,
      onCancel: t(e.onCancel),
      strCancelText: a,
      focusButton: f,
    });
  d
    ? (g = void 0)
    : u
      ? (g = (0, q.jsx)(sa, { children: h }))
      : l &&
        (g = (0, q.jsx)(ma, {
          bOKDisabled: e.bOKDisabled,
          bCancelDisabled: e.bCancelDisabled,
          strOKText: i,
          onCancel: t(e.onCancel),
          strCancelText: a,
          focusButton: f,
          onUpdate: () => {
            (l(), e.closeModal && e.closeModal());
          },
          strUpdateText: c,
          bUpdateDisabled: e.bMiddleDisabled,
        }));
  let _ = U.useId();
  return (0, q.jsx)(Us, {
    ...m,
    title: n || (0, q.jsx)(q.Fragment, { children: `\xA0` }),
    "aria-describedby": _,
    children: (0, q.jsxs)(Ki, {
      onCancelButton: t(o || e.onCancel),
      onCancelActionDescription: s,
      children: [
        (0, q.jsxs)(Wi, {
          children: [
            (0, q.jsx)(`div`, {
              id: _,
              style: { display: `contents` },
              children: r,
            }),
            p,
          ],
        }),
        (0, q.jsx)(Hi, { children: g }),
      ],
    }),
  });
}
function qs(e) {
  let t = {
    strTitle: C(`#Error_FailureNotice`),
    strDescription: C(`#Error_GenericFailureDescription`),
    bAlertDialog: !0,
    bDestructiveWarning: !0,
    onOK: () => {},
    onCancel: () => {},
    ...e,
  };
  return (0, q.jsx)(Ks, { ...t });
}
function Js(e, t) {
  Qr((0, q.jsx)(qs, { strDescription: e }), t);
}
function Ys(e) {
  let t = {
    onOK: () => {},
    onCancel: () => {},
    strDescription: (0, q.jsxs)(`span`, {
      style: { whiteSpace: `pre-line` },
      children: [` `, e.strDescription, ` `],
    }),
    bAlertDialog: !0,
    ...e,
  };
  return (0, q.jsx)(Ks, { ...t });
}
function Xs(e, t, n) {
  Qr((0, q.jsx)(Ys, { strTitle: e, strDescription: t }), n);
}
function Zs(e) {
  return e ? e + `_Label` : void 0;
}
function Qs(e) {
  return e ? e + `_Description` : void 0;
}
function $s(e, t) {
  let { label: n, description: r } = t;
  return {
    "aria-labelledby": n ? Zs(e) : void 0,
    "aria-describedby": r ? Qs(e) : void 0,
  };
}
function X(e, t) {
  let {
      accessibilityId: n,
      label: r,
      description: i,
      icon: a,
      children: o,
      childrenLayout: s,
      inlineWrap: c,
      childrenContainerWidth: l,
      spacingBetweenLabelAndChild: u,
      padding: d,
      disabled: f,
      bottomSeparator: p,
      className: m,
      highlightOnFocus: h,
      indentLevel: g,
      verticalAlignment: _,
      iconLocation: v,
      tooltip: y,
      explainer: b,
      explainerTitle: x,
      transparentBackground: S,
      ...C
    } = e,
    w = Ti(),
    T = s ?? `inline`,
    E = v ?? `front`,
    D = E == `front` && !!a,
    ee = E == `before-children` && !!a,
    O = T == `inline` && !!o,
    k = T == `below` && !!o,
    A = c ?? `keep-inline`,
    j = !!(C.onClick || C.onActivate || C.focusable),
    M = (D && !!a) || !!r,
    N = l ?? `min`,
    P = u ?? `standard`,
    F = d ?? `standard`,
    te = p ?? `standard`,
    ne = h ?? !0,
    re = g ?? 0,
    I = _ ?? `center`,
    ie = !w && !S,
    L = tc(x ?? r, b),
    z = U.useRef(void 0),
    ae = R(z, e.navRef),
    oe = U.useCallback(
      (e) => {
        z.current && (z.current?.TakeFocus(), e.preventDefault());
      },
      [z],
    ),
    se = (0, q.jsxs)(`div`, {
      className: ys,
      children: [
        ee &&
          (0, q.jsx)(`div`, {
            className: V(`-mv7APUvgY0-`, `p1s7AZ5q4Ao-`),
            children: a,
          }),
        (0, q.jsx)(`div`, { className: bs, children: o }),
      ],
    });
  return (0, q.jsxs)(B, {
    focusable: j,
    noFocusRing: !0,
    scrollIntoViewWhenChildFocused: !0,
    onActivate: C.onClick ? (e) => C.onClick?.(e) : void 0,
    ref: t,
    onMouseDown: j ? void 0 : oe,
    ...C,
    ...L,
    navRef: ae,
    className: V(
      m,
      hs,
      w && `-EO4FT59VAE-`,
      f && `tZJ0p3KkoMw-`,
      O && void 0,
      k && `_9pFiF1gbI9o-`,
      I == `center` && `FMpWcLvqFIY-`,
      A == `shift-children-below` && `JWxNjd0AnXw-`,
      te == `standard` && `CF7n8ePpMiI-`,
      te == `thick` && `MYSrDGxxWHs-`,
      N == `fixed` && `_85iACv78fHc-`,
      N == `max` && `eM2QEVfngbM-`,
      P == `standard` && `umeu-qXKQjo-`,
      F == `standard` && `yEWiNUJm9rE-`,
      F == `compact` && `Lp7SIUigpfY-`,
      j && `DEO4wTNKBQY-`,
      ne && `ypXE1Kh2LZY-`,
      ie && `-ELZx7BKnW4-`,
    ),
    style: { "--indent-level": re },
    children: [
      (0, q.jsxs)(`div`, {
        className: xs,
        children: [
          M &&
            (0, q.jsx)(`div`, {
              className: `bQjqavPfRH4-`,
              children: (0, q.jsxs)(`div`, {
                className: `ApdBYSq-TZo-`,
                id: Zs(n),
                children: [
                  D &&
                    (0, q.jsx)(`div`, {
                      className: V(`-mv7APUvgY0-`, `g1VEgslk2-k-`),
                      children: a,
                    }),
                  r,
                  y && (0, q.jsx)(xi, { tooltip: y }),
                ],
              }),
            }),
          k && se,
          i && (0, q.jsx)(ec, { accessibilityId: Qs(n), children: i }),
        ],
      }),
      O && (0, q.jsx)(`div`, { className: `VG45c-H2PHw-`, children: se }),
    ],
  });
}
function ec(e) {
  let { accessibilityId: t, className: n, children: r } = e;
  return (0, q.jsx)(`div`, { className: V(Cs, n), id: Qs(t), children: r });
}
function tc(e, t) {
  let n = Ce(),
    r = U.useCallback(() => {
      Xs(e, t, n.ownerWindow ?? window);
    }, [n, e, t]);
  return t == null
    ? {}
    : {
        onOptionsButton: r,
        onOptionsActionDescription: C(`#Field_MoreInfo_Action`),
      };
}
var nc = U.forwardRef(function (e, t) {
  return (0, q.jsx)(X, { ref: t, accessibilityId: null, ...e });
});
function rc(e) {
  let {
    layout: t,
    label: n,
    transparentBackground: r,
    description: i,
    ...a
  } = e;
  return (0, q.jsx)(X, {
    accessibilityId: null,
    label: n,
    description: i,
    spacingBetweenLabelAndChild: `none`,
    childrenLayout: e.layout,
    transparentBackground: r,
    ...a,
    children: (0, q.jsx)(`div`, { className: Is, children: e.children }),
  });
}
function ic(e, t, n = [`label`, `button`]) {
  let r = U.useId(),
    i = $s(e, t),
    a = { id: r, "aria-labelledby": `` };
  return (
    (a[`aria-labelledby`] = n
      .map((e) => (e == `button` ? r : i[`aria-labelledby`]))
      .join(` `)),
    (a[`aria-describedby`] = i[`aria-describedby`]),
    a
  );
}
var ac = U.forwardRef(function (e, t) {
    let {
        label: n,
        description: r,
        explainer: i,
        icon: a,
        layout: o,
        disabled: s,
        onActivate: c,
        indentLevel: l,
        bottomSeparator: u,
        highlightOnFocus: d,
        childrenContainerWidth: f,
        padding: p,
        inlineWrap: m,
        transparentBackground: h,
        fieldClassName: g,
        fieldChildren: _,
        accessibilityNameOrder: v,
        ...y
      } = e,
      { refWithValue: b, refForElement: x } = j(t),
      S = U.useId();
    return (0, q.jsxs)(X, {
      accessibilityId: S,
      label: n,
      indentLevel: l,
      description: r,
      icon: a,
      bottomSeparator: u,
      highlightOnFocus: d,
      childrenLayout: o ?? `inline`,
      childrenContainerWidth: f ?? `min`,
      onMouseDown: (e) => {
        (b.current?.focus(), e.preventDefault());
      },
      padding: p,
      inlineWrap: m,
      explainer: i,
      className: g,
      disabled: s,
      transparentBackground: h,
      onActivate: s ? c : void 0,
      children: [(0, q.jsx)(oc, { accessibilityId: S, ...e, ref: x }), _],
    });
  }),
  oc = U.forwardRef(function (e, t) {
    let {
        accessibilityId: n,
        label: r,
        description: i,
        explainer: a,
        icon: o,
        layout: s,
        disabled: c,
        onActivate: l,
        indentLevel: u,
        bottomSeparator: d,
        highlightOnFocus: f,
        childrenContainerWidth: p,
        padding: m,
        inlineWrap: h,
        transparentBackground: g,
        fieldClassName: _,
        fieldChildren: v,
        accessibilityNameOrder: y,
        ...b
      } = e,
      x = ic(n, e, y);
    return (0, q.jsx)(ca, { ...b, ...x, disabled: c, ref: t });
  }),
  sc = U.forwardRef(function (e, t) {
    let {
        label: n,
        description: r,
        icon: i,
        layout: a,
        bottomSeparator: o,
        highlightOnFocus: s,
        ...c
      } = e,
      { refWithValue: l, refForElement: u } = j(t),
      d = U.useId();
    return (0, q.jsx)(X, {
      accessibilityId: d,
      label: n,
      description: r,
      icon: i,
      bottomSeparator: o,
      highlightOnFocus: s,
      childrenLayout: a ?? `inline`,
      childrenContainerWidth: `fixed`,
      onMouseDown: (e) => {
        (l.current?.element?.focus(), e.preventDefault());
      },
      children: (0, q.jsx)(Ea, { ...$s(d, e), ...c, ref: u }),
    });
  });
function cc(e) {
  let t = e.alignItems ?? `left`,
    n = e.spacing ?? `standard`,
    r = e.itemMaxSize ?? `gamepad`;
  return (0, q.jsx)(B, {
    className: V(
      Rs,
      t == `left` && `_6M0V7laGEWg-`,
      t == `right` && `ABpWqwPRxjo-`,
      t == `center` && `d0EakOJDrII-`,
      n == `standard` && `ekxT6PeL5ks-`,
      n == `extra` && `v3covqW1fis-`,
      r == `desktop` && `gTjATirka8Y-`,
      e.fullWidth && `uaD7cyI7zCE-`,
    ),
    navEntryPreferPosition: qe.PREFERRED_CHILD,
    children: U.Children.map(
      e.children,
      (e) => e && (0, q.jsx)(`div`, { className: `-Bhx7w1DZSA-`, children: e }),
    ),
  });
}
function lc(e) {
  let t = Ci(),
    n = U.useMemo(() => ({ ...t, bClassicMode: !0 }), [t]);
  return (0, q.jsx)(Si.Provider, { value: n, children: e.children });
}
function uc(e) {
  let {
      children: t,
      alignItems: n,
      spacing: r,
      itemMaxSize: i,
      fullWidth: a,
      ...o
    } = e,
    s = {
      fullWidth: a,
      children: t,
      alignItems: n,
      spacing: r,
      itemMaxSize: i,
    };
  return (0, q.jsx)(X, {
    childrenLayout: `below`,
    ...o,
    children: (0, q.jsx)(cc, { ...s }),
  });
}
function dc(e) {
  let { name: t, value: n, ...r } = e;
  return (0, q.jsx)(
    rc,
    {
      label: t,
      focusable: !0,
      inlineWrap: `shift-children-below`,
      ...r,
      children: n,
    },
    t,
  );
}
function fc(e) {
  return (0, q.jsx)(`div`, {
    className: V(_s, e.className),
    role: `separator`,
  });
}
function pc(e) {
  let {
      bottomSeparator: t,
      childrenContainerWidth: n,
      childrenLayout: r,
      description: i,
      disabled: a,
      explainer: o,
      explainerTitle: s,
      highlightOnFocus: c,
      icon: l,
      iconLocation: u,
      indentLevel: d,
      inlineWrap: f,
      label: p,
      padding: m,
      spacingBetweenLabelAndChild: h,
      tooltip: g,
      verticalAlignment: _,
      className: v,
      children: y,
      inputClassName: b,
      ref: x,
      ...S
    } = e,
    C = U.useId(),
    w = {
      accessibilityId: C,
      bottomSeparator: t,
      childrenContainerWidth: n,
      childrenLayout: r,
      description: i,
      disabled: a,
      explainer: o,
      explainerTitle: s,
      highlightOnFocus: c,
      icon: l,
      iconLocation: u,
      indentLevel: d,
      inlineWrap: f,
      label: p,
      padding: m,
      spacingBetweenLabelAndChild: h,
      tooltip: g,
      verticalAlignment: _,
      className: v,
      ref: x,
    };
  return (0, q.jsxs)(X, {
    ...w,
    children: [(0, q.jsx)(Ea, { ...$s(C, e), ...S, className: b }), y],
  });
}
var mc = `xHfPnCn4bHY-`,
  hc = `P6bKJOwuOC8-`;
function gc(e) {
  let {
      childrenKey: t,
      childrenClasses: n,
      children: r,
      directionClass: i,
      animate: a = !0,
      sizeClass: o,
    } = e,
    s = V(mc, i);
  return (0, q.jsx)(kn, {
    className: s,
    appear: !1,
    enter: a,
    exit: a,
    children: (0, q.jsx)(
      _c,
      { childrenClasses: n, sizeClass: o, children: r },
      t,
    ),
  });
}
function _c(e) {
  let { sizeClass: t, children: n, childrenClasses: r, navKey: i, ...a } = e,
    [o, s, c, l] = vc(),
    u = U.useRef(!0),
    d = U.useCallback(() => u.current, [u]),
    f = U.useCallback(() => {
      ((u.current = !0), c());
    }, [c]),
    p = U.useCallback(() => {
      ((u.current = !1), l());
    }, [l]),
    m = e.childrenClasses,
    h = {
      enter: m.enterStart,
      enterActive: m.enterEnd,
      exit: m.exitStart,
      exitActive: m.exitEnd,
    };
  return o.current && !o.current.ownerDocument.defaultView
    ? null
    : (0, q.jsx)(bn, {
        nodeRef: o,
        classNames: h,
        in: !0,
        timeout: 1e4,
        addEndListener: s,
        onEntering: f,
        onExiting: p,
        ...a,
        children: (0, q.jsx)(`div`, {
          ref: o,
          className: V(hc, m.base),
          children: (0, q.jsx)(B, {
            className: t,
            fnCanTakeFocus: d,
            navKey: i,
            children: e.children,
          }),
        }),
      });
}
function vc() {
  let e = U.useRef(null),
    t = U.useRef(void 0);
  return (
    U.useLayoutEffect(() => {
      let n = e.current;
      if (!n || t.current) return;
      t.current = {
        element: n,
        activeProps: new Set(),
        bExiting: !1,
        fnDone: null,
      };
      let r = t.current;
      n.addEventListener(
        `transitionrun`,
        (e) => {
          e.target == n && r.activeProps.add(e.propertyName);
        },
        !1,
      );
      let i = (e) => {
        e.target == n &&
          (r.activeProps.delete(e.propertyName),
          r.fnDone && r.activeProps.size == 0 && r.bExiting && r.fnDone());
      };
      (n.addEventListener(`transitionend`, i, !1),
        n.addEventListener(`transitioncancel`, i, !1));
    }, []),
    [
      e,
      U.useCallback(
        (e) => {
          t.current ? (t.current.fnDone = e) : e();
        },
        [t],
      ),
      U.useCallback(() => {
        t.current && (t.current.bExiting = !1);
      }, [t]),
      U.useCallback(() => {
        t.current && (t.current.bExiting = !0);
      }, [t]),
    ]
  );
}
function yc(e, t) {
  return {
    base: t,
    enterStart: e.Enter,
    enterEnd: e.EnterActive,
    exitStart: e.Exit,
    exitEnd: e.ExitActive,
  };
}
var bc = (function (e) {
  return (
    (e[(e.None = 0)] = `None`),
    (e[(e.Left = 1)] = `Left`),
    (e[(e.Right = 2)] = `Right`),
    (e[(e.Up = 3)] = `Up`),
    (e[(e.Down = 4)] = `Down`),
    e
  );
})({});
function xc(e, t) {
  return t == 1
    ? e.Left
    : t == 2
      ? e.Right
      : t == 3
        ? e.Up
        : t == 4
          ? e.Down
          : ``;
}
function Sc(e, t, n, r) {
  let i = U.useRef(null),
    a = U.useRef(0);
  if (i.current == t) return a.current;
  let o = n(e, t),
    s = o;
  i.current != null && (s = n(e, i.current));
  let c = 0;
  return (
    s < o ? (c = r[1]) : s > o && (c = r[0]),
    (i.current = t),
    (a.current = c),
    c
  );
}
var Cc = t({
    Active: () => Lc,
    ContentTransition: () => Wc,
    DisabledItem: () => Rc,
    Down: () => Yc,
    Enter: () => Gc,
    EnterActive: () => Kc,
    Exit: () => qc,
    ExitActive: () => Jc,
    NoPadding: () => Oc,
    PageListItem_Icon: () => zc,
    PageListItem_Title: () => Bc,
    PageSettingsDialog_PageList_NoHeaderPadding: () => Pc,
    PagedSettingDialog_ContentColumn: () => Hc,
    PagedSettingsDialog: () => Ec,
    PagedSettingsDialog_PageContent: () => Dc,
    PagedSettingsDialog_PageList: () => jc,
    PagedSettingsDialog_PageListColumn: () => kc,
    PagedSettingsDialog_PageListItem: () => Fc,
    PagedSettingsDialog_PageList_DisableScrolling: () => Mc,
    PagedSettingsDialog_PageList_ShowTitle: () => Nc,
    PagedSettingsDialog_Title: () => Ac,
    ScaledChildren: () => Ic,
    Separator: () => Vc,
    Up: () => Uc,
    default: () => Xc,
    "duration-app-launch": () => Tc,
    narrowWidth: () => wc,
  }),
  wc = `500px`,
  Tc = `800ms`,
  Ec = `XmRaTX9nRio-`,
  Dc = `XgL1zVKoM5U-`,
  Oc = `tRxkS5dSDs4-`,
  kc = `bJnp2JbJE5I-`,
  Ac = `xxrsRfi-CE0-`,
  jc = `tDi3vkWVNT8-`,
  Mc = `yw9Di5-BZng-`,
  Nc = `r26AAci40bg-`,
  Pc = `inL6FXXj20Y-`,
  Fc = `_2z011FprYp4-`,
  Ic = `-voy6YS5gVI-`,
  Lc = `KlMMMvJKCns-`,
  Rc = `leLilL4f09o-`,
  zc = `uhMC-cx3wOw-`,
  Bc = `_2Dsdn0Fwg7g-`,
  Vc = `P22D4NZrWWg-`,
  Hc = `wX5zd8908TY-`,
  Uc = `STSxs-D-b0Q-`,
  Wc = `JA3DA-Sni-Q-`,
  Gc = `sNcy4tCU2EY-`,
  Kc = `_6ep--B-wEvA-`,
  qc = `G9QQ1eE8MTA-`,
  Jc = `bF-37ZL-5J0-`,
  Yc = `_3OEp4YweKt4-`,
  Xc = {
    narrowWidth: wc,
    "duration-app-launch": `800ms`,
    PagedSettingsDialog: Ec,
    PagedSettingsDialog_PageContent: Dc,
    NoPadding: Oc,
    PagedSettingsDialog_PageListColumn: kc,
    PagedSettingsDialog_Title: Ac,
    PagedSettingsDialog_PageList: jc,
    PagedSettingsDialog_PageList_DisableScrolling: Mc,
    PagedSettingsDialog_PageList_ShowTitle: Nc,
    PageSettingsDialog_PageList_NoHeaderPadding: Pc,
    PagedSettingsDialog_PageListItem: Fc,
    ScaledChildren: Ic,
    Active: Lc,
    DisabledItem: Rc,
    PageListItem_Icon: zc,
    PageListItem_Title: Bc,
    Separator: Vc,
    PagedSettingDialog_ContentColumn: Hc,
    Up: Uc,
    ContentTransition: Wc,
    Enter: Gc,
    EnterActive: Kc,
    Exit: qc,
    ExitActive: Jc,
    Down: Yc,
  },
  Zc = U.createContext(null);
function Qc(e) {
  let t = U.useContext(Zc),
    { title: n, icon: r, active: i, ...a } = e,
    o = a.onClick,
    s = U.useCallback(
      (e) => {
        e.detail.focusSource === ct.GAMEPAD && o?.();
      },
      [o],
    );
  return (0, q.jsx)(B, {
    preferredFocus: i,
    navRef: i && t ? t : void 0,
    noFocusRing: !0,
    onActivate: o,
    onGamepadFocus: s,
    ...a,
    children: (0, q.jsxs)(`div`, {
      className: Ic,
      children: [
        r && (0, q.jsx)(`div`, { className: `uhMC-cx3wOw-`, children: r }),
        (0, q.jsx)(`div`, { className: Bc, children: n }),
      ],
    }),
  });
}
function $c(e) {
  let { bTransparent: t, className: n, ...r } = e;
  return (0, q.jsx)(`div`, { className: V(n, Vc), ...r });
}
function el(e, t) {
  let { page: n, eInitialFocus: r, showTitle: i = !1 } = e,
    a = U.useRef(null),
    o = U.useRef(!0);
  U.useEffect(() => {
    let e = !r || r === Xo.k_EPagedSettingsInitialFocus_PageList;
    ((!o.current || e) && a.current?.TakeFocus(), (o.current = !1));
  }, [n, r]);
  let s = (t, n, r) =>
    (0, q.jsx)(tl, {
      pages: e.pages,
      activePage: t,
      refForPage: n,
      PageComponent: r,
    });
  return (0, q.jsx)(Zc.Provider, {
    value: a,
    children: (0, q.jsx)(rs, {
      ...e,
      stylesheet: Cc,
      showTitle: i,
      PageListItemComponent: Qc,
      PageListSeparatorComponent: $c,
      renderPageContent: e.renderPageContent || s,
    }),
  });
}
function tl(e) {
  let { pages: t, activePage: n, refForPage: r, PageComponent: i } = e,
    a = nl(U.useMemo(() => t.findIndex((e) => e == n), [t, n])),
    o = rl(n?.identifier, r),
    s = xc(Cc, a);
  return (0, q.jsx)(gc, {
    childrenKey: n?.identifier,
    childrenClasses: yc(Cc, Wc),
    directionClass: s,
    animate: a != bc.None,
    children:
      n &&
      (0, q.jsx)(
        i,
        { ref: o(n.identifier), stylesheet: Cc, activePage: n },
        n.identifier,
      ),
  });
}
function nl(e) {
  let t = U.useRef(e),
    n = U.useRef(bc.None),
    r = t.current;
  if (r == e) return n.current;
  let i = bc.None;
  return (
    r < e ? (i = bc.Down) : r > e && (i = bc.Up),
    (t.current = e),
    (n.current = i),
    i
  );
}
function rl(e, t) {
  let n = U.useMemo(() => new Map(), []),
    r = U.useRef(e);
  r.current = e;
  let i = U.useRef(t);
  i.current = t;
  let a = U.useCallback(
    (e) => (t) => {
      (n.set(e, t), e === r.current && P(i.current, t));
    },
    [n],
  );
  return (
    U.useEffect(() => (P(t, e && n.get(e)), () => P(t, void 0)), [n, e, t]), a
  );
}
function il(e) {
  return (0, q.jsx)(at, {
    noFocusRing: !0,
    ...e,
    className: V(js, e.className),
    size: e.size ?? 1,
  });
}
function al(e) {
  return (0, q.jsx)(ll, { layout: `below`, ...e });
}
function ol(e) {
  return (0, q.jsx)(Si.Provider, {
    value: {
      PagedSettings: el,
      Content: ep,
      DropDownControlButton: fl,
      DropDownField: al,
      DropDownMenu: dl,
      ToggleField: $f,
      ToggleControl: Zf,
      InputElement: il,
      SliderField: Hf,
      strButtonClassName: gs,
    },
    children: e.children,
  });
}
function sl(e) {
  if (!e.children) return null;
  let t = e.topPadding ?? `standard`,
    n = e.alignItems ?? `left`,
    r = V(
      zs,
      t == `standard` && `yEWiNUJm9rE-`,
      t == `compact` && `Lp7SIUigpfY-`,
    );
  return (0, q.jsx)(`div`, {
    className: r,
    children: (0, q.jsx)(uc, {
      alignItems: n,
      spacing: `extra`,
      bottomSeparator: `none`,
      highlightOnFocus: !1,
      navRef: e.navRef,
      children: e.children,
    }),
  });
}
var cl = `NpNHKlakUCs-`;
function ll(e) {
  let {
      label: t,
      icon: n,
      tooltip: r,
      explainer: i,
      explainerTitle: a,
      disabled: o,
      strClassName: s,
      dropDownControlRef: c,
      description: l,
      layout: u,
      bottomSeparator: d,
      highlightOnFocus: f,
      autoFocus: p,
      indentLevel: m,
      childrenContainerWidth: h = `fixed`,
      onContextMenu: g,
      onActivate: v,
      padding: y,
      inlineWrap: b,
      contextMenuPositionOptions: x,
      ...S
    } = e,
    { actionDescriptions: C, gamepadEvents: w, props: T } = pt(S),
    E = U.useId(),
    D = { label: t, description: l ?? r },
    ee = _(),
    O = u ?? `inline`,
    k = x;
  return (
    !k && O == `inline` && (k = { bMatchWidth: !ee }),
    (0, q.jsx)(X, {
      accessibilityId: E,
      ...D,
      className: s,
      disabled: o,
      onActivate: v,
      icon: n,
      childrenLayout: O,
      childrenContainerWidth: h,
      bottomSeparator: d,
      highlightOnFocus: f,
      autoFocus: p,
      indentLevel: m,
      onContextMenu: g,
      actionDescriptionMap: C,
      explainer: i,
      explainerTitle: a,
      padding: y,
      inlineWrap: b,
      ...w,
      children: (0, q.jsx)(Za, {
        ...$s(E, D),
        contextMenuPositionOptions: k,
        menuLabel: t,
        disabled: o,
        ...T,
        ref: c,
      }),
    })
  );
}
function ul(e, t) {
  for (let n of e.options)
    if ((Va(n) && n.data === t) || (Ua(n) && ul(n, t))) return !0;
  return !1;
}
function dl(e) {
  let t = (n) =>
    n?.map((n, r) =>
      Ha(n)
        ? (0, q.jsx)(ke, {}, r)
        : Va(n)
          ? (0, q.jsx)(
              Te,
              {
                role: `option`,
                onSelected: (t) => e.onValueSelected && e.onValueSelected(t, n),
                selected: e.selectedValue === n.data,
                children: (0, q.jsx)(q.Fragment, { children: n.label }),
              },
              r,
            )
          : Ua(n)
            ? (0, q.jsx)(
                Me,
                {
                  label: n.label,
                  selectedWithin: ul(n, e.selectedValue),
                  children: t(n.options),
                },
                r,
              )
            : null,
    );
  return (0, q.jsx)(Fe, {
    onCancel: e.onCancel,
    role: `listbox`,
    children: t(e.rgOptions),
  });
}
var fl = U.forwardRef(function (e, t) {
    let {
        className: n,
        opened: r,
        arrowClassName: i,
        "aria-label": a,
        "aria-labelledby": o = ``,
        ...s
      } = e,
      c = U.useId(),
      l = U.useId();
    return (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsx)(ca, {
          id: c,
          className: V(cl, n),
          "aria-labelledby": o || l,
          ...s,
          ref: t,
          children: (0, q.jsxs)(`div`, {
            className: Ls,
            children: [
              (0, q.jsx)(`div`, {
                className: `DialogDropDown_CurrentDisplay`,
                children: e.children,
              }),
              (0, q.jsx)(Ne, { direction: `down` }),
            ],
          }),
        }),
        a &&
          (0, q.jsx)(`div`, { id: l, style: { display: `none` }, children: a }),
      ],
    });
  }),
  pl = `Cw4uxrkspko-`,
  ml = `VUdu-pcuE-8-`,
  hl = `BNSyOf0Yaj8-`,
  gl = U.forwardRef(function (e, t) {
    let { className: n, ...r } = e,
      i = U.useRef(void 0),
      a = R(t, i),
      [o, s] = U.useState(!1),
      c = U.useCallback(() => {
        (s((e) => !e), window.setTimeout(() => i.current?.Focus(), 1));
      }, []);
    return (0, q.jsx)(B, {
      className: n,
      onOptionsButton: c,
      onOptionsActionDescription: C(
        o ? `#Login_HidePassword` : `#Login_ShowPassword`,
      ),
      children: (0, q.jsx)(Ea, {
        autoComplete: `off`,
        ref: a,
        inlineControls: (0, q.jsx)(ca, {
          "aria-label": C(o ? `#Login_HidePassword` : `#Login_ShowPassword`),
          className: pl,
          onPointerDown: c,
          onOKButton: c,
          children: o ? (0, q.jsx)(Ie, {}) : (0, q.jsx)(we, {}),
        }),
        ...r,
        type: o ? `text` : `password`,
      }),
    });
  }),
  _l = U.forwardRef(function (e, t) {
    let {
        label: n,
        className: r,
        description: i,
        icon: a,
        bottomSeparator: o,
        highlightOnFocus: s,
        ...c
      } = e,
      l = U.useId();
    return (0, q.jsx)(X, {
      accessibilityId: l,
      className: r,
      label: n,
      description: i,
      icon: a,
      bottomSeparator: o,
      highlightOnFocus: s,
      childrenContainerWidth: `fixed`,
      children: (0, q.jsx)(gl, { ...$s(l, e), ...c, ref: t }),
    });
  });
function vl(e) {
  let t = e.split(`.`);
  if (t.length > 4) return !1;
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (n == ``) {
      if (e == t.length - 1) continue;
      return !1;
    }
    if (!/^[0-9]*$/.test(n)) return !1;
    let r = parseInt(n);
    if (!(r >= 0 && r <= 255)) return !1;
  }
  return !0;
}
var yl = U.forwardRef(function (e, t) {
  let { className: n, value: r, ...i } = e,
    a = r ?? ``,
    o = (e) => {
      let t = e.target.value;
      if (vl(t)) i.onChange && i.onChange(e);
      else {
        e.target.value = a;
        return;
      }
    };
  return (0, q.jsx)(sc, {
    autoComplete: `off`,
    value: a,
    ref: t,
    placeholder: `   .   .   .   `,
    ...i,
    onChange: o,
  });
});
function bl(e) {
  let {
      digits: t,
      onChange: n,
      autoFocus: r,
      type: i,
      className: a,
      digitClassName: o,
      value: s,
      validateDigit: c,
      onEnterKeyPress: l,
      strEnterKeyLabel: u,
    } = e,
    d = U.useRef([]),
    f = U.useRef([]),
    p = U.useRef(void 0);
  U.useEffect(() => {
    let e = Math.min(s.length, t - 1);
    d.current[e]?.current?.TakeFocus();
    let n = p.current === void 0,
      i = !n && p.current != s;
    p.current = s;
    let a = f.current[e]?.current?.element,
      o = a?.ownerDocument.activeElement;
    if (!a || o == a) return;
    let c = !o || o == a.ownerDocument.body;
    (i || (n && r && c)) && a.focus({ preventScroll: !0 });
  }, [t, s, r]);
  let m = (e) => {
      (!c || c(e.target.value)) && n(s + e.target.value);
    },
    h = (e) => {
      e.key === `Backspace` && (n(s.slice(0, -1)), e.preventDefault());
    },
    g = (e) => {
      let r = e.clipboardData.getData(`Text`);
      (c &&
        (r = r
          .split(``)
          .filter((e) => c(e))
          .join(``)),
        n((s + r).slice(0, t)),
        e.preventDefault());
    },
    _ = [];
  for (let e = 0; e < t; e++)
    (d.current[e] || (d.current[e] = rt()),
      f.current[e] || (f.current[e] = U.createRef()),
      _.push(
        (0, q.jsx)(
          B,
          {
            className: o,
            navRef: d.current[e],
            children: (0, q.jsx)(Ea, {
              ref: f.current[e],
              type: i || `password`,
              maxLength: 1,
              autoFocus: r && e == 0,
              onChange: m,
              onPaste: g,
              onKeyDown: h,
              onEnterKeyPress: l,
              strEnterKeyLabel: u,
              value: s.charAt(e),
              disabled: e != Math.min(s.length, t - 1),
              className: V(hl),
            }),
          },
          `digit_` + e,
        ),
      ));
  return (0, q.jsx)(B, {
    "flow-children": `row`,
    className: V(a, ml),
    children: _,
  });
}
var xl = `500ms`,
  Sl = `lOrYsgAQ7xY-`,
  Cl = `Ct1W6wKv3q8-`,
  wl = `HsioiS8tolM-`,
  Tl = `bhfWNpXbH4Q-`,
  El = `_064mqllehJ0-`,
  Dl = `_0-HS3A7ajm4-`,
  Ol = `tfvGMBsZSsA-`,
  kl = `s6-ODwm5a2Y-`,
  Al = `_1MCEBwX9aDk-`,
  jl = `BAxvn17x9dE-`,
  Ml = `_4fkFHifv83g-`,
  Nl = `dNORf-cVwV8-`,
  Pl = `MG-bKpXBaVY-`,
  Fl = `yUOhceFAk-c-`,
  Il = `_9NUL7pDqdlI-`,
  Ll = `mA3CQrjmNSA-`,
  Rl = `EmppAFlVcd4-`,
  zl = `j2YrMR9hDME-`,
  Bl = `oylEDEXxd0k-`,
  Vl = `YjupvOMzUko-`,
  Hl = `rWj49Kc43eE-`,
  Ul = `SOCVIgNFc8Q-`,
  Wl = `d-EXaHAzQm4-`,
  Gl = `YTUnL3ejwlA-`,
  Kl = `_9XKxg7u6vBk-`,
  ql = `_3N7jdKv05Dw-`,
  Jl = `Ns-2I9SmOro-`;
function Yl(e) {
  return e.charAt(0) === `/`;
}
function Xl(e, t) {
  for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
  e.pop();
}
function Zl(e, t) {
  t === void 0 && (t = ``);
  var n = (e && e.split(`/`)) || [],
    r = (t && t.split(`/`)) || [],
    i = e && Yl(e),
    a = t && Yl(t),
    o = i || a;
  if (
    (e && Yl(e) ? (r = n) : n.length && (r.pop(), (r = r.concat(n))), !r.length)
  )
    return `/`;
  var s;
  if (r.length) {
    var c = r[r.length - 1];
    s = c === `.` || c === `..` || c === ``;
  } else s = !1;
  for (var l = 0, u = r.length; u >= 0; u--) {
    var d = r[u];
    d === `.` ? Xl(r, u) : d === `..` ? (Xl(r, u), l++) : l && (Xl(r, u), l--);
  }
  if (!o) for (; l--;) r.unshift(`..`);
  !o || r[0] === `` || (r[0] && Yl(r[0])) || r.unshift(``);
  var f = r.join(`/`);
  return (s && f.substr(-1) !== `/` && (f += `/`), f);
}
function Ql(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function $l(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e))
    return (
      Array.isArray(t) &&
      e.length === t.length &&
      e.every(function (e, n) {
        return $l(e, t[n]);
      })
    );
  if (typeof e == `object` || typeof t == `object`) {
    var n = Ql(e),
      r = Ql(t);
    return n !== e || r !== t
      ? $l(n, r)
      : Object.keys(Object.assign({}, e, t)).every(function (n) {
          return $l(e[n], t[n]);
        });
  }
  return !1;
}
function eu(e) {
  return e.charAt(0) === `/` ? e : `/` + e;
}
function tu(e) {
  return e.charAt(0) === `/` ? e.substr(1) : e;
}
function nu(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    `/?#`.indexOf(e.charAt(t.length)) !== -1
  );
}
function ru(e, t) {
  return nu(e, t) ? e.substr(t.length) : e;
}
function iu(e) {
  return e.charAt(e.length - 1) === `/` ? e.slice(0, -1) : e;
}
function au(e) {
  var t = e || `/`,
    n = ``,
    r = ``,
    i = t.indexOf(`#`);
  i !== -1 && ((r = t.substr(i)), (t = t.substr(0, i)));
  var a = t.indexOf(`?`);
  return (
    a !== -1 && ((n = t.substr(a)), (t = t.substr(0, a))),
    { pathname: t, search: n === `?` ? `` : n, hash: r === `#` ? `` : r }
  );
}
function Z(e) {
  var t = e.pathname,
    n = e.search,
    r = e.hash,
    i = t || `/`;
  return (
    n && n !== `?` && (i += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (i += r.charAt(0) === `#` ? r : `#` + r),
    i
  );
}
function Q(e, t, n, r) {
  var i;
  typeof e == `string`
    ? ((i = au(e)), (i.state = t))
    : ((i = ye({}, e)),
      i.pathname === void 0 && (i.pathname = ``),
      i.search
        ? i.search.charAt(0) !== `?` && (i.search = `?` + i.search)
        : (i.search = ``),
      i.hash
        ? i.hash.charAt(0) !== `#` && (i.hash = `#` + i.hash)
        : (i.hash = ``),
      t !== void 0 && i.state === void 0 && (i.state = t));
  try {
    i.pathname = decodeURI(i.pathname);
  } catch (e) {
    throw e instanceof URIError
      ? URIError(
          `Pathname "` +
            i.pathname +
            `" could not be decoded. This is likely caused by an invalid percent-encoding.`,
        )
      : e;
  }
  return (
    n && (i.key = n),
    r
      ? i.pathname
        ? i.pathname.charAt(0) !== `/` &&
          (i.pathname = Zl(i.pathname, r.pathname))
        : (i.pathname = r.pathname)
      : i.pathname || (i.pathname = `/`),
    i
  );
}
function ou(e, t) {
  return (
    e.pathname === t.pathname &&
    e.search === t.search &&
    e.hash === t.hash &&
    e.key === t.key &&
    $l(e.state, t.state)
  );
}
function su() {
  var e = null;
  function t(t) {
    return (
      (e = t),
      function () {
        e === t && (e = null);
      }
    );
  }
  function n(t, n, r, i) {
    if (e != null) {
      var a = typeof e == `function` ? e(t, n) : e;
      typeof a == `string`
        ? typeof r == `function`
          ? r(a, i)
          : i(!0)
        : i(a !== !1);
    } else i(!0);
  }
  var r = [];
  function i(e) {
    var t = !0;
    function n() {
      t && e.apply(void 0, arguments);
    }
    return (
      r.push(n),
      function () {
        ((t = !1),
          (r = r.filter(function (e) {
            return e !== n;
          })));
      }
    );
  }
  function a() {
    var e = [...arguments];
    r.forEach(function (t) {
      return t.apply(void 0, e);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: n,
    appendListener: i,
    notifyListeners: a,
  };
}
var cu = !!(
  typeof window < `u` &&
  window.document &&
  window.document.createElement
);
function lu(e, t) {
  t(window.confirm(e));
}
function uu() {
  var e = window.navigator.userAgent;
  return (e.indexOf(`Android 2.`) !== -1 || e.indexOf(`Android 4.0`) !== -1) &&
    e.indexOf(`Mobile Safari`) !== -1 &&
    e.indexOf(`Chrome`) === -1 &&
    e.indexOf(`Windows Phone`) === -1
    ? !1
    : window.history && `pushState` in window.history;
}
function du() {
  return window.navigator.userAgent.indexOf(`Trident`) === -1;
}
function fu() {
  return window.navigator.userAgent.indexOf(`Firefox`) === -1;
}
function pu(e) {
  return e.state === void 0 && navigator.userAgent.indexOf(`CriOS`) === -1;
}
var mu = `popstate`,
  hu = `hashchange`;
function gu() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function _u(e) {
  (e === void 0 && (e = {}), !cu && Be(!1));
  var t = window.history,
    n = uu(),
    r = !du(),
    i = e,
    a = i.forceRefresh,
    o = a !== void 0 && a,
    s = i.getUserConfirmation,
    c = s === void 0 ? lu : s,
    l = i.keyLength,
    u = l === void 0 ? 6 : l,
    d = e.basename ? iu(eu(e.basename)) : ``;
  function f(e) {
    var t = e || {},
      n = t.key,
      r = t.state,
      i = window.location,
      a = i.pathname,
      o = i.search,
      s = i.hash,
      c = a + o + s;
    return (d && (c = ru(c, d)), Q(c, r, n));
  }
  function p() {
    return Math.random().toString(36).substr(2, u);
  }
  var m = su();
  function h(e) {
    (ye(N, e), (N.length = t.length), m.notifyListeners(N.location, N.action));
  }
  function g(e) {
    pu(e) || y(f(e.state));
  }
  function _() {
    y(f(gu()));
  }
  var v = !1;
  function y(e) {
    if (v) ((v = !1), h());
    else {
      var t = `POP`;
      m.confirmTransitionTo(e, t, c, function (n) {
        n ? h({ action: t, location: e }) : b(e);
      });
    }
  }
  function b(e) {
    var t = N.location,
      n = S.indexOf(t.key);
    n === -1 && (n = 0);
    var r = S.indexOf(e.key);
    r === -1 && (r = 0);
    var i = n - r;
    i && ((v = !0), E(i));
  }
  var x = f(gu()),
    S = [x.key];
  function C(e) {
    return d + Z(e);
  }
  function w(e, r) {
    var i = `PUSH`,
      a = Q(e, r, p(), N.location);
    m.confirmTransitionTo(a, i, c, function (e) {
      if (e) {
        var r = C(a),
          s = a.key,
          c = a.state;
        if (n) {
          if ((t.pushState({ key: s, state: c }, null, r), o))
            window.location.href = r;
          else {
            var l = S.indexOf(N.location.key),
              u = S.slice(0, l + 1);
            (u.push(a.key), (S = u), h({ action: i, location: a }));
          }
        } else window.location.href = r;
      }
    });
  }
  function T(e, r) {
    var i = `REPLACE`,
      a = Q(e, r, p(), N.location);
    m.confirmTransitionTo(a, i, c, function (e) {
      if (e) {
        var r = C(a),
          s = a.key,
          c = a.state;
        if (n) {
          if ((t.replaceState({ key: s, state: c }, null, r), o))
            window.location.replace(r);
          else {
            var l = S.indexOf(N.location.key);
            (l !== -1 && (S[l] = a.key), h({ action: i, location: a }));
          }
        } else window.location.replace(r);
      }
    });
  }
  function E(e) {
    t.go(e);
  }
  function D() {
    E(-1);
  }
  function ee() {
    E(1);
  }
  var O = 0;
  function k(e) {
    ((O += e),
      O === 1 && e === 1
        ? (window.addEventListener(mu, g), r && window.addEventListener(hu, _))
        : O === 0 &&
          (window.removeEventListener(mu, g),
          r && window.removeEventListener(hu, _)));
  }
  var A = !1;
  function j(e) {
    e === void 0 && (e = !1);
    var t = m.setPrompt(e);
    return (
      (A ||= (k(1), !0)),
      function () {
        return (A && ((A = !1), k(-1)), t());
      }
    );
  }
  function M(e) {
    var t = m.appendListener(e);
    return (
      k(1),
      function () {
        (k(-1), t());
      }
    );
  }
  var N = {
    length: t.length,
    action: `POP`,
    location: x,
    createHref: C,
    push: w,
    replace: T,
    go: E,
    goBack: D,
    goForward: ee,
    block: j,
    listen: M,
  };
  return N;
}
var vu = `hashchange`,
  yu = {
    hashbang: {
      encodePath: function (e) {
        return e.charAt(0) === `!` ? e : `!/` + tu(e);
      },
      decodePath: function (e) {
        return e.charAt(0) === `!` ? e.substr(1) : e;
      },
    },
    noslash: { encodePath: tu, decodePath: eu },
    slash: { encodePath: eu, decodePath: eu },
  };
function bu(e) {
  var t = e.indexOf(`#`);
  return t === -1 ? e : e.slice(0, t);
}
function xu() {
  var e = window.location.href,
    t = e.indexOf(`#`);
  return t === -1 ? `` : e.substring(t + 1);
}
function Su(e) {
  window.location.hash = e;
}
function Cu(e) {
  window.location.replace(bu(window.location.href) + `#` + e);
}
function wu(e) {
  (e === void 0 && (e = {}), !cu && Be(!1));
  var t = window.history;
  fu();
  var n = e,
    r = n.getUserConfirmation,
    i = r === void 0 ? lu : r,
    a = n.hashType,
    o = a === void 0 ? `slash` : a,
    s = e.basename ? iu(eu(e.basename)) : ``,
    c = yu[o],
    l = c.encodePath,
    u = c.decodePath;
  function d() {
    var e = u(xu());
    return (s && (e = ru(e, s)), Q(e));
  }
  var f = su();
  function p(e) {
    (ye(P, e), (P.length = t.length), f.notifyListeners(P.location, P.action));
  }
  var m = !1,
    h = null;
  function g(e, t) {
    return (
      e.pathname === t.pathname && e.search === t.search && e.hash === t.hash
    );
  }
  function _() {
    var e = xu(),
      t = l(e);
    if (e !== t) Cu(t);
    else {
      var n = d(),
        r = P.location;
      if ((!m && g(r, n)) || h === Z(n)) return;
      ((h = null), v(n));
    }
  }
  function v(e) {
    if (m) ((m = !1), p());
    else {
      var t = `POP`;
      f.confirmTransitionTo(e, t, i, function (n) {
        n ? p({ action: t, location: e }) : y(e);
      });
    }
  }
  function y(e) {
    var t = P.location,
      n = C.lastIndexOf(Z(t));
    n === -1 && (n = 0);
    var r = C.lastIndexOf(Z(e));
    r === -1 && (r = 0);
    var i = n - r;
    i && ((m = !0), D(i));
  }
  var b = xu(),
    x = l(b);
  b !== x && Cu(x);
  var S = d(),
    C = [Z(S)];
  function w(e) {
    var t = document.querySelector(`base`),
      n = ``;
    return (
      t && t.getAttribute(`href`) && (n = bu(window.location.href)),
      n + `#` + l(s + Z(e))
    );
  }
  function T(e, t) {
    var n = `PUSH`,
      r = Q(e, void 0, void 0, P.location);
    f.confirmTransitionTo(r, n, i, function (e) {
      if (e) {
        var t = Z(r),
          i = l(s + t);
        if (xu() !== i) {
          ((h = t), Su(i));
          var a = C.lastIndexOf(Z(P.location)),
            o = C.slice(0, a + 1);
          (o.push(t), (C = o), p({ action: n, location: r }));
        } else p();
      }
    });
  }
  function E(e, t) {
    var n = `REPLACE`,
      r = Q(e, void 0, void 0, P.location);
    f.confirmTransitionTo(r, n, i, function (e) {
      if (e) {
        var t = Z(r),
          i = l(s + t);
        xu() !== i && ((h = t), Cu(i));
        var a = C.indexOf(Z(P.location));
        (a !== -1 && (C[a] = t), p({ action: n, location: r }));
      }
    });
  }
  function D(e) {
    t.go(e);
  }
  function ee() {
    D(-1);
  }
  function O() {
    D(1);
  }
  var k = 0;
  function A(e) {
    ((k += e),
      k === 1 && e === 1
        ? window.addEventListener(vu, _)
        : k === 0 && window.removeEventListener(vu, _));
  }
  var j = !1;
  function M(e) {
    e === void 0 && (e = !1);
    var t = f.setPrompt(e);
    return (
      (j ||= (A(1), !0)),
      function () {
        return (j && ((j = !1), A(-1)), t());
      }
    );
  }
  function N(e) {
    var t = f.appendListener(e);
    return (
      A(1),
      function () {
        (A(-1), t());
      }
    );
  }
  var P = {
    length: t.length,
    action: `POP`,
    location: S,
    createHref: w,
    push: T,
    replace: E,
    go: D,
    goBack: ee,
    goForward: O,
    block: M,
    listen: N,
  };
  return P;
}
function Tu(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Eu(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.getUserConfirmation,
    r = t.initialEntries,
    i = r === void 0 ? [`/`] : r,
    a = t.initialIndex,
    o = a === void 0 ? 0 : a,
    s = t.keyLength,
    c = s === void 0 ? 6 : s,
    l = su();
  function u(e) {
    (ye(C, e),
      (C.length = C.entries.length),
      l.notifyListeners(C.location, C.action));
  }
  function d() {
    return Math.random().toString(36).substr(2, c);
  }
  var f = Tu(o, 0, i.length - 1),
    p = i.map(function (e) {
      return typeof e == `string`
        ? Q(e, void 0, d())
        : Q(e, void 0, e.key || d());
    }),
    m = Z;
  function h(e, t) {
    var r = `PUSH`,
      i = Q(e, t, d(), C.location);
    l.confirmTransitionTo(i, r, n, function (e) {
      if (e) {
        var t = C.index + 1,
          n = C.entries.slice(0);
        (n.length > t ? n.splice(t, n.length - t, i) : n.push(i),
          u({ action: r, location: i, index: t, entries: n }));
      }
    });
  }
  function g(e, t) {
    var r = `REPLACE`,
      i = Q(e, t, d(), C.location);
    l.confirmTransitionTo(i, r, n, function (e) {
      e && ((C.entries[C.index] = i), u({ action: r, location: i }));
    });
  }
  function _(e) {
    var t = Tu(C.index + e, 0, C.entries.length - 1),
      r = `POP`,
      i = C.entries[t];
    l.confirmTransitionTo(i, r, n, function (e) {
      e ? u({ action: r, location: i, index: t }) : u();
    });
  }
  function v() {
    _(-1);
  }
  function y() {
    _(1);
  }
  function b(e) {
    var t = C.index + e;
    return t >= 0 && t < C.entries.length;
  }
  function x(e) {
    return (e === void 0 && (e = !1), l.setPrompt(e));
  }
  function S(e) {
    return l.appendListener(e);
  }
  var C = {
    length: p.length,
    action: `POP`,
    location: p[f],
    index: f,
    entries: p,
    createHref: m,
    push: h,
    replace: g,
    go: _,
    goBack: v,
    goForward: y,
    canGo: b,
    block: x,
    listen: S,
  };
  return C;
}
var Du = n((e, t) => {
    t.exports =
      Array.isArray ||
      function (e) {
        return Object.prototype.toString.call(e) == `[object Array]`;
      };
  }),
  Ou = n((e, t) => {
    var n = Du();
    ((t.exports = v),
      (t.exports.parse = i),
      (t.exports.compile = o),
      (t.exports.tokensToFunction = l),
      (t.exports.tokensToRegExp = _));
    var r = RegExp(
      `(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))`,
      `g`,
    );
    function i(e, t) {
      for (
        var n = [], i = 0, o = 0, s = ``, c = (t && t.delimiter) || `/`, l;
        (l = r.exec(e)) != null;
      ) {
        var u = l[0],
          f = l[1],
          p = l.index;
        if (((s += e.slice(o, p)), (o = p + u.length), f)) s += f[1];
        else {
          var m = e[o],
            h = l[2],
            g = l[3],
            _ = l[4],
            v = l[5],
            y = l[6],
            b = l[7];
          s &&= (n.push(s), ``);
          var x = h != null && m != null && m !== h,
            S = y === `+` || y === `*`,
            C = y === `?` || y === `*`,
            w = h || c,
            T = _ || v,
            E =
              h || (typeof n[n.length - 1] == `string` ? n[n.length - 1] : ``);
          n.push({
            name: g || i++,
            prefix: h || ``,
            delimiter: w,
            optional: C,
            repeat: S,
            partial: x,
            asterisk: !!b,
            pattern: T ? d(T) : b ? `.*` : a(w, E),
          });
        }
      }
      return (o < e.length && (s += e.substr(o)), s && n.push(s), n);
    }
    function a(e, t) {
      return !t || t.indexOf(e) > -1
        ? `[^` + u(e) + `]+?`
        : u(t) + `|(?:(?!` + u(t) + `)[^` + u(e) + `])+?`;
    }
    function o(e, t) {
      return l(i(e, t), t);
    }
    function s(e) {
      return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return `%` + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function c(e) {
      return encodeURI(e).replace(/[?#]/g, function (e) {
        return `%` + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function l(e, t) {
      for (var r = Array(e.length), i = 0; i < e.length; i++)
        typeof e[i] == `object` &&
          (r[i] = RegExp(`^(?:` + e[i].pattern + `)$`, p(t)));
      return function (t, i) {
        for (
          var a = ``,
            o = t || {},
            l = (i || {}).pretty ? s : encodeURIComponent,
            u = 0;
          u < e.length;
          u++
        ) {
          var d = e[u];
          if (typeof d == `string`) a += d;
          else {
            var f = o[d.name],
              p;
            if (f == null) {
              if (d.optional) {
                d.partial && (a += d.prefix);
                continue;
              }
              throw TypeError(`Expected "` + d.name + `" to be defined`);
            }
            if (n(f)) {
              if (!d.repeat)
                throw TypeError(
                  `Expected "` +
                    d.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(f) +
                    "`",
                );
              if (f.length === 0) {
                if (d.optional) continue;
                throw TypeError(`Expected "` + d.name + `" to not be empty`);
              }
              for (var m = 0; m < f.length; m++) {
                if (((p = l(f[m])), !r[u].test(p)))
                  throw TypeError(
                    `Expected all "` +
                      d.name +
                      `" to match "` +
                      d.pattern +
                      '", but received `' +
                      JSON.stringify(p) +
                      "`",
                  );
                a += (m === 0 ? d.prefix : d.delimiter) + p;
              }
            } else {
              if (((p = d.asterisk ? c(f) : l(f)), !r[u].test(p)))
                throw TypeError(
                  `Expected "` +
                    d.name +
                    `" to match "` +
                    d.pattern +
                    `", but received "` +
                    p +
                    `"`,
                );
              a += d.prefix + p;
            }
          }
        }
        return a;
      };
    }
    function u(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, `\\$1`);
    }
    function d(e) {
      return e.replace(/([=!:$\/()])/g, `\\$1`);
    }
    function f(e, t) {
      return ((e.keys = t), e);
    }
    function p(e) {
      return e && e.sensitive ? `` : `i`;
    }
    function m(e, t) {
      var n = e.source.match(/\((?!\?)/g);
      if (n)
        for (var r = 0; r < n.length; r++)
          t.push({
            name: r,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
      return f(e, t);
    }
    function h(e, t, n) {
      for (var r = [], i = 0; i < e.length; i++) r.push(v(e[i], t, n).source);
      return f(RegExp(`(?:` + r.join(`|`) + `)`, p(n)), t);
    }
    function g(e, t, n) {
      return _(i(e, n), t, n);
    }
    function _(e, t, r) {
      (n(t) || ((r = t || r), (t = [])), (r ||= {}));
      for (
        var i = r.strict, a = r.end !== !1, o = ``, s = 0;
        s < e.length;
        s++
      ) {
        var c = e[s];
        if (typeof c == `string`) o += u(c);
        else {
          var l = u(c.prefix),
            d = `(?:` + c.pattern + `)`;
          (t.push(c),
            c.repeat && (d += `(?:` + l + d + `)*`),
            (d = c.optional
              ? c.partial
                ? l + `(` + d + `)?`
                : `(?:` + l + `(` + d + `))?`
              : l + `(` + d + `)`),
            (o += d));
        }
      }
      var m = u(r.delimiter || `/`),
        h = o.slice(-m.length) === m;
      return (
        i || (o = (h ? o.slice(0, -m.length) : o) + `(?:` + m + `(?=$))?`),
        (o += a ? `$` : i && h ? `` : `(?=` + m + `|$)`),
        f(RegExp(`^` + o, p(r)), t)
      );
    }
    function v(e, t, r) {
      return (
        n(t) || ((r = t || r), (t = [])),
        (r ||= {}),
        e instanceof RegExp ? m(e, t) : n(e) ? h(e, t, r) : g(e, t, r)
      );
    }
  }),
  ku = n((e) => {
    typeof Symbol == `function` && Symbol.for;
  }),
  Au = n((e, t) => {
    t.exports = ku();
  }),
  ju = n((e) => {
    var t = typeof Symbol == `function` && Symbol.for,
      n = t ? Symbol.for(`react.element`) : 60103,
      r = t ? Symbol.for(`react.portal`) : 60106,
      i = t ? Symbol.for(`react.fragment`) : 60107,
      a = t ? Symbol.for(`react.strict_mode`) : 60108,
      o = t ? Symbol.for(`react.profiler`) : 60114,
      s = t ? Symbol.for(`react.provider`) : 60109,
      c = t ? Symbol.for(`react.context`) : 60110,
      l = t ? Symbol.for(`react.async_mode`) : 60111,
      u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
      d = t ? Symbol.for(`react.forward_ref`) : 60112,
      f = t ? Symbol.for(`react.suspense`) : 60113,
      p = t ? Symbol.for(`react.suspense_list`) : 60120,
      m = t ? Symbol.for(`react.memo`) : 60115,
      h = t ? Symbol.for(`react.lazy`) : 60116,
      g = t ? Symbol.for(`react.block`) : 60121,
      _ = t ? Symbol.for(`react.fundamental`) : 60117,
      v = t ? Symbol.for(`react.responder`) : 60118,
      y = t ? Symbol.for(`react.scope`) : 60119;
    function b(e) {
      if (typeof e == `object` && e) {
        var t = e.$$typeof;
        switch (t) {
          case n:
            switch (((e = e.type), e)) {
              case l:
              case u:
              case i:
              case o:
              case a:
              case f:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case c:
                  case d:
                  case h:
                  case m:
                  case s:
                    return e;
                  default:
                    return t;
                }
            }
          case r:
            return t;
        }
      }
    }
    function x(e) {
      return b(e) === u;
    }
    ((e.AsyncMode = l),
      (e.ConcurrentMode = u),
      (e.ContextConsumer = c),
      (e.ContextProvider = s),
      (e.Element = n),
      (e.ForwardRef = d),
      (e.Fragment = i),
      (e.Lazy = h),
      (e.Memo = m),
      (e.Portal = r),
      (e.Profiler = o),
      (e.StrictMode = a),
      (e.Suspense = f),
      (e.isAsyncMode = function (e) {
        return x(e) || b(e) === l;
      }),
      (e.isConcurrentMode = x),
      (e.isContextConsumer = function (e) {
        return b(e) === c;
      }),
      (e.isContextProvider = function (e) {
        return b(e) === s;
      }),
      (e.isElement = function (e) {
        return typeof e == `object` && !!e && e.$$typeof === n;
      }),
      (e.isForwardRef = function (e) {
        return b(e) === d;
      }),
      (e.isFragment = function (e) {
        return b(e) === i;
      }),
      (e.isLazy = function (e) {
        return b(e) === h;
      }),
      (e.isMemo = function (e) {
        return b(e) === m;
      }),
      (e.isPortal = function (e) {
        return b(e) === r;
      }),
      (e.isProfiler = function (e) {
        return b(e) === o;
      }),
      (e.isStrictMode = function (e) {
        return b(e) === a;
      }),
      (e.isSuspense = function (e) {
        return b(e) === f;
      }),
      (e.isValidElementType = function (e) {
        return (
          typeof e == `string` ||
          typeof e == `function` ||
          e === i ||
          e === u ||
          e === o ||
          e === a ||
          e === f ||
          e === p ||
          (typeof e == `object` &&
            !!e &&
            (e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === s ||
              e.$$typeof === c ||
              e.$$typeof === d ||
              e.$$typeof === _ ||
              e.$$typeof === v ||
              e.$$typeof === y ||
              e.$$typeof === g))
        );
      }),
      (e.typeOf = b));
  }),
  Mu = n((e, t) => {
    t.exports = ju();
  }),
  Nu = n((e, t) => {
    var n = Mu(),
      r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      o = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      s = {};
    ((s[n.ForwardRef] = a), (s[n.Memo] = o));
    function c(e) {
      return n.isMemo(e) ? o : s[e.$$typeof] || r;
    }
    var l = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      d = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      m = Object.prototype;
    function h(e, t, n) {
      if (typeof t != `string`) {
        if (m) {
          var r = p(t);
          r && r !== m && h(e, r, n);
        }
        var a = u(t);
        d && (a = a.concat(d(t)));
        for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
          var _ = a[g];
          if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
            var v = f(t, _);
            try {
              l(e, _, v);
            } catch {}
          }
        }
      }
      return e;
    }
    t.exports = h;
  }),
  Pu = e(tn()),
  Fu = e(Ou());
Au();
var Iu = e(Nu()),
  Lu = 1073741823,
  Ru =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
function zu() {
  var e = `__global_unique_id__`;
  return (Ru[e] = (Ru[e] || 0) + 1);
}
function Bu(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function Vu(e) {
  var t = [];
  return {
    on: function (e) {
      t.push(e);
    },
    off: function (e) {
      t = t.filter(function (t) {
        return t !== e;
      });
    },
    get: function () {
      return e;
    },
    set: function (n, r) {
      ((e = n),
        t.forEach(function (t) {
          return t(e, r);
        }));
    },
  };
}
function Hu(e) {
  return Array.isArray(e) ? e[0] : e;
}
function Uu(e, t) {
  var n,
    r,
    i = `__create-react-context-` + zu() + `__`,
    a = (function (e) {
      K(n, e);
      function n() {
        var t,
          n = [...arguments];
        return (
          (t = e.call.apply(e, [this].concat(n)) || this),
          (t.emitter = Vu(t.props.value)),
          t
        );
      }
      var r = n.prototype;
      return (
        (r.getChildContext = function () {
          var e = {};
          return ((e[i] = this.emitter), e);
        }),
        (r.componentWillReceiveProps = function (e) {
          if (this.props.value !== e.value) {
            var n = this.props.value,
              r = e.value,
              i;
            Bu(n, r)
              ? (i = 0)
              : ((i = typeof t == `function` ? t(n, r) : Lu),
                (i |= 0),
                i !== 0 && this.emitter.set(e.value, i));
          }
        }),
        (r.render = function () {
          return this.props.children;
        }),
        n
      );
    })(U.Component);
  a.childContextTypes = ((n = {}), (n[i] = Pu.default.object.isRequired), n);
  var o = (function (t) {
    K(n, t);
    function n() {
      var e,
        n = [...arguments];
      return (
        (e = t.call.apply(t, [this].concat(n)) || this),
        (e.observedBits = void 0),
        (e.state = { value: e.getValue() }),
        (e.onUpdate = function (t, n) {
          (e.observedBits | 0) & n && e.setState({ value: e.getValue() });
        }),
        e
      );
    }
    var r = n.prototype;
    return (
      (r.componentWillReceiveProps = function (e) {
        var t = e.observedBits;
        this.observedBits = t ?? Lu;
      }),
      (r.componentDidMount = function () {
        this.context[i] && this.context[i].on(this.onUpdate);
        var e = this.props.observedBits;
        this.observedBits = e ?? Lu;
      }),
      (r.componentWillUnmount = function () {
        this.context[i] && this.context[i].off(this.onUpdate);
      }),
      (r.getValue = function () {
        return this.context[i] ? this.context[i].get() : e;
      }),
      (r.render = function () {
        return Hu(this.props.children)(this.state.value);
      }),
      n
    );
  })(U.Component);
  return (
    (o.contextTypes = ((r = {}), (r[i] = Pu.default.object), r)),
    { Provider: a, Consumer: o }
  );
}
var Wu = U.createContext || Uu,
  Gu = function (e) {
    var t = Wu();
    return ((t.displayName = e), t);
  },
  Ku = Gu(`Router-History`),
  qu = Gu(`Router`),
  Ju = (function (e) {
    (K(t, e),
      (t.computeRootMatch = function (e) {
        return { path: `/`, url: `/`, params: {}, isExact: e === `/` };
      }));
    function t(t) {
      var n = e.call(this, t) || this;
      return (
        (n.state = { location: t.history.location }),
        (n._isMounted = !1),
        (n._pendingLocation = null),
        t.staticContext ||
          (n.unlisten = t.history.listen(function (e) {
            n._pendingLocation = e;
          })),
        n
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var e = this;
        ((this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (t) {
              e._isMounted && e.setState({ location: t });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation }));
      }),
      (n.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (n.render = function () {
        return U.createElement(
          qu.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          U.createElement(Ku.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          }),
        );
      }),
      t
    );
  })(U.Component),
  Yu = (function (e) {
    K(t, e);
    function t() {
      var t,
        n = [...arguments];
      return (
        (t = e.call.apply(e, [this].concat(n)) || this),
        (t.history = Eu(t.props)),
        t
      );
    }
    var n = t.prototype;
    return (
      (n.render = function () {
        return U.createElement(Ju, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(U.Component),
  Xu = (function (e) {
    K(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (n.componentDidUpdate = function (e) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, e);
      }),
      (n.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (n.render = function () {
        return null;
      }),
      t
    );
  })(U.Component),
  Zu = {},
  Qu = 1e4,
  $u = 0;
function ed(e) {
  if (Zu[e]) return Zu[e];
  var t = Fu.default.compile(e);
  return ($u < Qu && ((Zu[e] = t), $u++), t);
}
function td(e, t) {
  return (
    e === void 0 && (e = `/`),
    t === void 0 && (t = {}),
    e === `/` ? e : ed(e)(t, { pretty: !0 })
  );
}
function nd(e) {
  var t = e.computedMatch,
    n = e.to,
    r = e.push,
    i = r !== void 0 && r;
  return U.createElement(qu.Consumer, null, function (e) {
    !e && Be(!1);
    var r = e.history,
      a = e.staticContext,
      o = i ? r.push : r.replace,
      s = Q(
        t
          ? typeof n == `string`
            ? td(n, t.params)
            : ye({}, n, { pathname: td(n.pathname, t.params) })
          : n,
      );
    return a
      ? (o(s), null)
      : U.createElement(Xu, {
          onMount: function () {
            o(s);
          },
          onUpdate: function (e, t) {
            var n = Q(t.to);
            ou(n, ye({}, s, { key: n.key })) || o(s);
          },
          to: n,
        });
  });
}
var rd = {},
  id = 1e4,
  ad = 0;
function od(e, t) {
  var n = `` + t.end + t.strict + t.sensitive,
    r = rd[n] || (rd[n] = {});
  if (r[e]) return r[e];
  var i = [],
    a = { regexp: (0, Fu.default)(e, i, t), keys: i };
  return (ad < id && ((r[e] = a), ad++), a);
}
function sd(e, t) {
  (t === void 0 && (t = {}),
    (typeof t == `string` || Array.isArray(t)) && (t = { path: t }));
  var n = t,
    r = n.path,
    i = n.exact,
    a = i !== void 0 && i,
    o = n.strict,
    s = o !== void 0 && o,
    c = n.sensitive,
    l = c !== void 0 && c;
  return [].concat(r).reduce(function (t, n) {
    if (!n && n !== ``) return null;
    if (t) return t;
    var r = od(n, { end: a, strict: s, sensitive: l }),
      i = r.regexp,
      o = r.keys,
      c = i.exec(e);
    if (!c) return null;
    var u = c[0],
      d = c.slice(1),
      f = e === u;
    return a && !f
      ? null
      : {
          path: n,
          url: n === `/` && u === `` ? `/` : u,
          isExact: f,
          params: o.reduce(function (e, t, n) {
            return ((e[t.name] = d[n]), e);
          }, {}),
        };
  }, null);
}
function cd(e) {
  return U.Children.count(e) === 0;
}
var ld = (function (e) {
  K(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var e = this;
      return U.createElement(qu.Consumer, null, function (t) {
        !t && Be(!1);
        var n = e.props.location || t.location,
          r = e.props.computedMatch
            ? e.props.computedMatch
            : e.props.path
              ? sd(n.pathname, e.props)
              : t.match,
          i = ye({}, t, { location: n, match: r }),
          a = e.props,
          o = a.children,
          s = a.component,
          c = a.render;
        return (
          Array.isArray(o) && cd(o) && (o = null),
          U.createElement(
            qu.Provider,
            { value: i },
            i.match
              ? o
                ? typeof o == `function`
                  ? o(i)
                  : o
                : s
                  ? U.createElement(s, i)
                  : c
                    ? c(i)
                    : null
              : typeof o == `function`
                ? o(i)
                : null,
          )
        );
      });
    }),
    t
  );
})(U.Component);
U.Component;
var ud = (function (e) {
  K(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var e = this;
      return U.createElement(qu.Consumer, null, function (t) {
        !t && Be(!1);
        var n = e.props.location || t.location,
          r,
          i;
        return (
          U.Children.forEach(e.props.children, function (e) {
            if (i == null && U.isValidElement(e)) {
              r = e;
              var a = e.props.path || e.props.from;
              i = a ? sd(n.pathname, ye({}, e.props, { path: a })) : t.match;
            }
          }),
          i ? U.cloneElement(r, { location: n, computedMatch: i }) : null
        );
      });
    }),
    t
  );
})(U.Component);
function dd(e) {
  var t = `withRouter(` + (e.displayName || e.name) + `)`,
    n = function (t) {
      var n = t.wrappedComponentRef,
        r = Zt(t, [`wrappedComponentRef`]);
      return U.createElement(qu.Consumer, null, function (t) {
        return (!t && Be(!1), U.createElement(e, ye({}, r, t, { ref: n })));
      });
    };
  return ((n.displayName = t), (n.WrappedComponent = e), (0, Iu.default)(n, e));
}
var fd = U.useContext;
function pd() {
  return fd(Ku);
}
function md() {
  return fd(qu).location;
}
function hd() {
  var e = fd(qu).match;
  return e ? e.params : {};
}
function gd(e) {
  var t = md(),
    n = fd(qu).match;
  return e ? sd(t.pathname, e) : n;
}
var _d = !!(typeof window < `u` && window.navigation);
function vd(e) {
  if (_d) {
    let t = e(window.navigation.currentEntry?.getState() ?? {});
    window.navigation.updateCurrentEntry({ state: t });
  } else history.replaceState(e(history.state ?? {}), ``);
}
function yd(e, t) {
  if (_d) {
    console.assert(
      !window.navigation.transition,
      `ReplaceHistoryStateAndURL during transition`,
    );
    let n = e(window.navigation.currentEntry?.getState());
    window.navigation.navigate(typeof t == `string` ? t : t.toString(), {
      state: n,
      info: { SSR: !0 },
      history: `replace`,
    });
  } else history.replaceState(e(history.state), ``, t);
}
function bd(e, t) {
  if (_d) {
    console.assert(
      !window.navigation.transition,
      `ReplaceHistoryStateAndURL during transition`,
    );
    let n = e(window.navigation.currentEntry?.getState());
    window.navigation.navigate(typeof t == `string` ? t : t.toString(), {
      state: n,
      info: { SSR: !0, bSkipFetch: !0 },
      history: `push`,
    });
  } else history.pushState(e(history.state), ``, t);
}
function xd() {
  return _d
    ? window.navigation?.currentEntry?.getState()
    : window.history?.state;
}
var Sd = new Set(),
  Cd;
function wd() {
  (location.href !== Cd &&
    Sd.forEach((e) => {
      try {
        e();
      } catch {}
    }),
    (Cd = location.href),
    Sd.size > 0 && requestAnimationFrame(wd));
}
function Td(e) {
  let t = () => {
    e();
  };
  return _d
    ? (window.navigation.addEventListener(`currententrychange`, t),
      () => window.navigation.removeEventListener(`currententrychange`, t))
    : ((Cd = location.href),
      requestAnimationFrame(wd),
      Sd.add(t),
      () => Sd.delete(t));
}
var Ed, Dd, Od;
function kd() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: xd(),
  };
}
function Ad() {
  return _d ? window.navigation.currentEntry : window.history.state;
}
function jd() {
  let e = Ad();
  return (
    (Ed && Dd == window.location.href && Od === e) ||
      ((Dd = window.location.href), (Od = e), (Ed = kd())),
    Ed
  );
}
var Md, Nd;
function Pd() {
  return (
    (Md && Nd == window.location.href) ||
      ((Nd = window.location.href),
      (Md = {
        pathname: window.location.pathname,
        search: window.location.search ?? ``,
        hash: ``,
        state: void 0,
      })),
    Md
  );
}
var Fd = new Set(),
  Id;
function Ld() {
  ((Ed = void 0), Fd.forEach((e) => e()));
}
function Rd(e) {
  return (
    Fd.size == 0 && (window.addEventListener(`popstate`, Ld), (Id = Td(Ld))),
    Fd.add(e),
    () => {
      (Fd.delete(e),
        Fd.size == 0 &&
          (window.removeEventListener(`popstate`, Ld), Id?.(), (Id = void 0)));
    }
  );
}
var zd = `_HistoryValue`;
function Bd(e) {
  return (
    e && Object.fromEntries(Object.entries(e).filter(([e]) => !e.endsWith(zd)))
  );
}
function Vd(e, t, n) {
  let r = new URL(e, window.location.href),
    i = (e) => ({ ...e, ...t });
  (n
    ? bd((e) => ({ ...Bd(e), ...t }), r)
    : r.href == window.location.href
      ? vd(i)
      : yd(i, r),
    Ld());
}
function Hd() {
  return () => {};
}
function Ud() {}
function Wd() {
  let e = U.useContext(qu),
    t = Rd,
    n = jd,
    r = Pd;
  e && ((t = Hd), (n = Ud), (r = Ud));
  let i = U.useSyncExternalStore(t, n, r);
  return e ? e.location : i;
}
var Gd = {
  get location() {
    return kd();
  },
  push(e, t) {
    Vd(e, t, !0);
  },
  replace(e, t) {
    Vd(e, t, !1);
  },
};
function Kd() {
  return pd() ?? Gd;
}
function qd(e) {
  let t = pd(),
    [n, r] = U.useState(() => !!sd(t?.location.pathname, e));
  return (
    U.useEffect(() => t?.listen((t) => r(!!sd(t.pathname, e))), [t, e]), n
  );
}
function Jd(e) {
  let t = pd(),
    [n, r] = U.useState(() => e(t.location.pathname));
  return (U.useEffect(() => t.listen((t) => r(e(t.pathname))), [t, e]), n);
}
function Yd(e, t) {
  let n = `${e}${zd}`,
    r = Kd();
  return [
    Wd().state?.[n] ?? t,
    U.useCallback(
      (e) => {
        r.replace(r.location.pathname, { ...r.location.state, [n]: e });
      },
      [r, n],
    ),
  ];
}
function Xd(e, t, n) {
  let r = `${e}${zd}`,
    i = Kd(),
    a = Wd().state?.[r] ?? n,
    o = U.useRef(!1),
    s = U.useRef(void 0),
    c = U.useRef(void 0),
    l = U.useCallback(
      (e) => {
        if (o.current && ((s.current = e), !c.current)) {
          let e = i.location.pathname;
          c.current = window.setTimeout(() => {
            (i.location.pathname != e ||
              (i.location.state && i.location.state[r] == s.current) ||
              i.replace(i.location.pathname, {
                ...(i.location.state || {}),
                [r]: s.current,
              }),
              (c.current = void 0));
          }, t);
        }
      },
      [i, r, t],
    );
  return (
    U.useEffect(() => {
      o.current = !0;
    }, []),
    [a, l]
  );
}
function Zd(e) {
  let [t, n] = U.useState(e?.location);
  return (U.useEffect(() => e?.listen(() => n(e.location)), [e]), t);
}
var Qd = new xt(`ScrollSnap`).Debug;
function $d(e, t) {
  let n = U.useRef(void 0);
  return U.useCallback(
    (r, i) => {
      let a = `sine`;
      if ((n.current && (n.current.Cancel(), (a = `linear`)), !e.current))
        return;
      (r === void 0 && (r = e.current.scrollTop),
        i === void 0 && (i = e.current.scrollLeft));
      let o = Math.max(
        Math.abs(e.current.scrollTop - r),
        Math.abs(e.current.scrollLeft - i),
      );
      if (o > 0) {
        let s = Math.max(Math.min((o / 1e3) * 200, 500), 300);
        ((n.current = new Ca(
          e.current,
          { scrollTop: r, scrollLeft: i },
          { msDuration: s, timing: a, onComplete: t },
        )),
          n.current.Start());
      } else t && t();
    },
    [e, t],
  );
}
function ef(e, t = `smooth`, n, r) {
  let i = (n ?? 30) / 100,
    a = U.useRef(void 0),
    o = U.useRef(void 0),
    s = U.useCallback(() => {
      ((a.current = void 0), (o.current = void 0));
    }, []),
    c = $d(e, s);
  return U.useCallback(
    (n) => {
      if ((r && !r(n)) || n.defaultPrevented || !e.current) return !1;
      let {
          scrollTop: l,
          scrollHeight: u,
          clientHeight: d,
          scrollLeft: f,
          scrollWidth: p,
          clientWidth: m,
        } = e.current,
        h = a.current ?? l,
        g = o.current ?? f;
      switch (n.detail.button) {
        case dt.DIR_UP:
          if (h <= 2) return !1;
          a.current = Math.max(0, h - d * i);
          break;
        case dt.DIR_DOWN:
          if (h >= u - d - 2) return !1;
          a.current = Math.min(u - d, h + d * i);
          break;
        case dt.DIR_LEFT:
          if (g <= 2) return !1;
          o.current = Math.max(0, g - m * i);
          break;
        case dt.DIR_RIGHT:
          if (g >= p - m - 2) return !1;
          o.current = Math.min(p - m, g + m * i);
          break;
        default:
          return !1;
      }
      return (
        Qd(
          `ScrollOnGamepadDirection top:${a.current} left:${o.current}, behavior:${t ?? `auto`} `,
          e.current,
        ),
        !t || t == `smooth`
          ? c(a.current, o.current)
          : (e.current.scrollTo({
              top: a.current,
              left: o.current,
              behavior: `auto`,
            }),
            s()),
        !0
      );
    },
    [r, e, t, i, c, s],
  );
}
function tf() {
  let e = U.useRef({ width: 0, height: 0 }),
    t = U.useRef(null),
    n = U.useCallback(
      (n) => {
        if (!t.current?.BFocusWithin()) return;
        let r = Math.round(n.contentRect.width),
          i = Math.round(n.contentRect.height),
          a = Math.abs(r - e.current.width),
          o = Math.abs(i - e.current.height);
        (a >= 1 || o >= 1) &&
          ((e.current = { width: r, height: i }),
          Qd(
            `KeepFocusedElementInViewOnResize scrolling focused element into view due to resize of`,
            n.target,
          ),
          t.current
            .Node()
            ?.GetLastFocusElement()
            ?.scrollIntoView({ behavior: `auto`, block: `nearest` }));
      },
      [t],
    );
  return { ref: gt(n), navRef: t };
}
function nf(e, t) {
  U.useEffect(() => {
    if (!e) return;
    let n = !1,
      r = () => {
        t.current?.BFocusWithin() && n && t.current?.TakeFocus();
      },
      i = () => {
        t.current?.BFocusWithin() && t.current?.TakeFocus();
      },
      a = () => (n = !0),
      o = () => (n = !1);
    return (
      e.addEventListener(`scroll`, r),
      e.addEventListener(`wheel`, i),
      e.addEventListener(`touchstart`, a),
      e.addEventListener(`touchend`, o),
      () => {
        (e.removeEventListener(`scroll`, r),
          e.removeEventListener(`wheel`, i),
          e.removeEventListener(`touchstart`, a),
          e.removeEventListener(`touchend`, o));
      }
    );
  }, [e, t]);
}
var rf = `_-5HDHEcJvzI-`,
  af = `bXqaBMkoZYQ-`,
  of = e(Ge(), 1),
  sf = new xt(`FocusNavigation`).Debug;
function cf(e) {
  let { children: t, disableFocusRing: n, ...r } = e,
    [i, a] = U.useState({
      bFocusWithin: !1,
      navTarget: null,
      prevTarget: null,
    }),
    o = U.useRef(null),
    s = U.useMemo(
      () => ({
        OnBlur: (e, t, n) => {
          a({ bFocusWithin: !1, navTarget: null, prevTarget: null });
        },
        OnFocus: (e, t, n) => {
          a({ bFocusWithin: !0, navTarget: t, prevTarget: null });
        },
        OnFocusChange: (e, t, n) => {
          a({ bFocusWithin: !0, navTarget: n, prevTarget: t });
        },
        OnForceMeasureFocusRing: () => {
          o.current?.MeasureElementAndUpdate();
        },
      }),
      [a],
    );
  return (0, q.jsxs)(q.Fragment, {
    children: [
      !n && (0, q.jsx)(lf, { ...r, ...i, refMeasure: o }),
      (0, q.jsx)(ft.Provider, { value: s, children: t }),
    ],
  });
}
function lf(e) {
  let {
      rootClassName: t,
      className: n,
      bFocusWithin: r,
      navTarget: i,
      refMeasure: a,
    } = e,
    [o, s] = U.useState(null),
    c = Je(),
    l = y(),
    u = Xe(!1);
  return !l && !u
    ? null
    : (0, q.jsx)(`div`, {
        className: (0, of.default)(rf, t),
        ref: s,
        children: (0, q.jsx)(df, {
          refMeasure: a,
          className: (0, of.default)(n, c && `_-1XKPob6-3c-`),
          bFocusWithin: r && (u || c),
          navTarget: i,
          elContainer: o,
          bDebug: c,
        }),
      });
}
function uf(e, t) {
  return (
    e.left == t.left &&
    e.top == t.top &&
    e.height == t.height &&
    e.width == t.width &&
    e.borderRadius?.borderTopLeftRadius ==
      t.borderRadius?.borderTopLeftRadius &&
    e.borderRadius?.borderTopRightRadius ==
      t.borderRadius?.borderTopRightRadius &&
    e.borderRadius?.borderBottomRightRadius ==
      t.borderRadius?.borderBottomRightRadius &&
    e.borderRadius?.borderBottomLeftRadius ==
      t.borderRadius?.borderBottomLeftRadius
  );
}
function df(e) {
  let {
      className: t,
      bFocusWithin: n,
      navTarget: r,
      elContainer: i,
      bDebug: a,
      refMeasure: o,
    } = e,
    [s, c] = U.useState(null),
    [l, u] = U.useReducer((e) => e + 1, 0),
    [d, f] = U.useReducer((e) => e + 1, 0);
  te(
    o,
    U.useMemo(() => ({ MeasureElementAndUpdate: f }), []),
  );
  let { bActiveTree: p, bDisableFocusClasses: m } = We(),
    h = p && !m,
    g = mf(a, r),
    _ = U.useCallback(() => {
      if (!r || !r.BWantsFocusRing() || !i || !h) {
        c(null);
        return;
      }
      let e = r.GetBoundingRectForFocusRing(),
        t = i.getBoundingClientRect(),
        n = r.GetBorderRadiusForFocusRing(),
        a = {
          left: e.x - t.x,
          top: e.y - t.y,
          height: e.height,
          width: e.width,
          borderRadius: n,
        };
      c((e) => (!e || !uf(a, e) ? a : e));
    }, [r, i, h]);
  (U.useLayoutEffect(() => _(), [_]),
    U.useLayoutEffect(() => {
      u();
    }, [r]));
  let v = n;
  return (
    r && i && (r.BWantsFocusRing() || (v = !1)),
    U.useEffect(() => {
      if (!v) return;
      let e = performance.now(),
        t,
        n = () => {
          (_(), performance.now() - e <= 500 && (t = requestAnimationFrame(n)));
        };
      return (n(), () => cancelAnimationFrame(t));
    }, [v, _, s, d]),
    !v || !s
      ? null
      : (0, U.createElement)(pf, {
          ...s,
          key: l,
          className: (0, of.default)(t, g && `CNmM8EjeTxQ-`),
          target: r,
        })
  );
}
function ff(e) {
  let { children: t } = e;
  return Je()
    ? (0, q.jsx)(cf, { children: t })
    : (0, q.jsx)(ft.Provider, { value: $e, children: t });
}
function pf(e) {
  let {
      className: t,
      left: n,
      top: r,
      height: i,
      width: a,
      borderRadius: o,
      target: s,
    } = e,
    c = {
      left: (n ?? 0) - 0 + `px`,
      top: (r ?? 0) - 0 + `px`,
      height: i + `px`,
      width: a + `px`,
      ...o,
    };
  return (0, q.jsx)(`div`, { className: (0, of.default)(af, t), style: c });
}
function mf(e, t) {
  let [n, r] = U.useState(!1);
  return (
    (0, U.useEffect)(() => {
      if (e && t) {
        let e = t.GetBoundingRectForFocusRing(),
          n = t.Element,
          i = n.ownerDocument.defaultView,
          a = (t) =>
            i.getComputedStyle(t).display == `none` ||
            (e?.width == 0 && e.height == 0 && e.x == 0 && e.y == 0);
        for (; a(n) && n?.parentElement;)
          ((n = n.parentElement), (e = n.getBoundingClientRect()));
        let o = t.Element != n;
        r(
          (e) => (
            o &&
              o != e &&
              sf(
                `Focused on hidden item: `,
                t.Element,
                `. Closest visible ancestor: `,
                n,
              ),
            o
          ),
        );
      }
    }, [e, t]),
    n
  );
}
var hf = `_57zTbik3FTE-`,
  gf = `_2bMiEsk5eQU-`,
  _f = `rifDlMuk-r8-`,
  vf = `WbXmiUakQYk-`,
  yf = U.forwardRef(function (e, t) {
    let {
        scrollDirection: n,
        scrollPaddingTop: r,
        scrollPaddingRight: i,
        scrollPaddingBottom: a,
        scrollPaddingLeft: o,
        className: s,
        children: c,
        style: l,
        ...u
      } = e,
      d;
    switch (n) {
      case `x`:
        d = _f;
        break;
      case `both`:
        d = vf;
        break;
      default:
        d = gf;
    }
    let f = { ...l };
    ((r || r === 0) && (f.scrollPaddingTop = r),
      (i || i === 0) && (f.scrollPaddingRight = i),
      (a || a === 0) && (f.scrollPaddingBottom = a),
      (o || o === 0) && (f.scrollPaddingLeft = o));
    let { ref: p, navRef: m } = tf(),
      h = R(m, u.navRef),
      g = R(p, t);
    return (0, q.jsx)(B, {
      ...u,
      style: f,
      className: (0, of.default)(s, hf, d),
      ref: g,
      navRef: h,
      children: (0, q.jsx)(cf, { children: c }),
    });
  }),
  bf = U.forwardRef(function (e, t) {
    let { scrollStepPercent: n, scrollBehavior: r, ...i } = e,
      a = U.useRef(null),
      o = ef(
        a,
        r,
        n,
        U.useCallback((e) => e.currentTarget != e.target, []),
      ),
      s = R(a, t);
    return (0, q.jsx)(yf, {
      ...i,
      onGamepadDirection: o,
      ref: s,
      scrollIntoViewType: Ye.NoTransformSparseContent,
    });
  }),
  xf = U.forwardRef(function (e, t) {
    let { name: n, msScrollRestoreDelay: r, onScroll: i, ...a } = e;
    return (0, q.jsx)(Cf, {
      name: n,
      msScrollRestoreDelay: r,
      parentOnScroll: i,
      refDiv: t,
      children: (e, t) => (0, q.jsx)(yf, { ...a, onScroll: e, ref: t }),
    });
  }),
  Sf = U.forwardRef(function (e, t) {
    let { name: n, msScrollRestoreDelay: r, onScroll: i, ...a } = e;
    return (0, q.jsx)(Cf, {
      name: n,
      msScrollRestoreDelay: r,
      parentOnScroll: i,
      refDiv: t,
      children: (e, t) => (0, q.jsx)(bf, { ...a, onScroll: e, ref: t }),
    });
  });
function Cf(e) {
  let {
      name: t,
      msScrollRestoreDelay: n,
      parentOnScroll: r,
      refDiv: i,
      children: a,
    } = e,
    [o, s] = Xd(`${t}ScrollTop`, 250, 0),
    [c, l] = Xd(`${t}ScrollLeft`, 250, 0),
    u = U.useRef(0),
    d = U.useRef(0),
    f = U.useRef(void 0),
    p = U.useCallback(
      (e) => {
        let { scrollTop: t, scrollLeft: n } = e.currentTarget;
        (s(t), (u.current = t), l(n), (d.current = n), r && r(e));
      },
      [s, l, r],
    );
  U.useLayoutEffect(() => {
    let e = function () {
      f.current &&
        (k(
          f.current.scrollHeight >= o,
          `Element is ${f.current.scrollHeight} high but trying to restore scrollTop of ${o}, element may need more time to lay out.`,
          f.current,
        ),
        (u.current = o),
        (d.current = c),
        f.current.scrollTo({ top: o, left: c, behavior: `auto` }),
        f.current.dispatchEvent(new UIEvent(`scroll`)));
    };
    (o != u.current || c != d.current) && (n ? window.setTimeout(e, n) : e());
  }, [o, c, n]);
  let m = R(f, i);
  return U.useMemo(() => a(p, m), [p, m, a]);
}
var wf = U.forwardRef(function (e, t) {
  let {
      onExplicitFocusLevelChanged: n,
      onOKButton: r,
      onCancelButton: i,
      navRef: a,
      focusable: o,
      ...s
    } = e,
    c = U.useRef(null),
    { fnOnOKButton: l, fnOnCancelButton: u } = Df({
      navRefPanel: c,
      onOKButton: r,
      onCancelButton: i,
      onExplicitFocusLevelChanged: n,
    }),
    d = R(a, c);
  return (0, q.jsx)(B, {
    ...s,
    onOKButton: l,
    onCancelButton: u,
    navRef: d,
    ref: t,
    focusable: o !== !1,
  });
});
function Tf(e) {
  let { children: t, ...n } = e,
    [r, i] = (0, U.useState)(!1),
    [a, o] = (0, U.useState)(!1);
  return (0, q.jsx)(wf, {
    onExplicitFocusLevelChanged: i,
    onFocusWithin: o,
    focusable: !r || a,
    ...n,
    children: typeof t == `function` ? t(r) : t,
  });
}
var Ef = U.forwardRef(function (e, t) {
  let { onOKButton: n, onCancelButton: r, navRef: i, focusable: a, ...o } = e,
    s = U.useRef(null),
    c = U.useRef(null),
    { fnOnOKButton: l, fnOnCancelButton: u } = Df({
      navRefPanel: s,
      onOKButton: n,
      onCancelButton: r,
      fnFocusChildren: U.useCallback((e, t) => e.FocusVisibleChild(), []),
    }),
    d = R(c, t),
    f = R(i, s);
  return (0, q.jsx)(bf, {
    ...o,
    onOKButton: (e) => l?.(e),
    onCancelButton: u,
    navRef: f,
    ref: d,
    focusable: a !== !1,
  });
});
function Df(e) {
  let {
    navRefPanel: t,
    onOKButton: n,
    onCancelButton: r,
    onExplicitFocusLevelChanged: i,
    fnFocusChildren: a,
  } = e;
  return (
    (a ??= Of),
    {
      fnOnOKButton: U.useCallback(
        (e) => {
          let r = t.current;
          return r?.BHasFocus() && a(r, e.detail.button)
            ? (i && i(!0), !0)
            : n
              ? n(e)
              : !1;
        },
        [t, n, i, a],
      ),
      fnOnCancelButton: U.useCallback(
        (e) => {
          let n = t.current;
          return n.Node().GetFocusable() == `self`
            ? n.BFocusWithin() && !n.BHasFocus() && n.TakeFocus(e.detail.button)
              ? (i && i(!1), !0)
              : r
                ? r(e)
                : !1
            : (console.warn(
                `PanelGroup is not focusable - ignoring cancel action`,
              ),
              !1);
        },
        [t, r, i],
      ),
    }
  );
}
function Of(e, t) {
  return e.ChildTakeFocus(t);
}
var kf = 10,
  Af = 1,
  jf = !0,
  Mf = 0.01,
  Nf = 0.05,
  Pf = 2,
  Ff = vi(xl);
function If(e, t) {
  return t < 0 ? 0 : t > 1 ? 1 : e == 0 ? t : Math.round(t / e) * e;
}
function Lf(e, t, n) {
  let r = e + n * (t - e);
  return Number.parseFloat(r.toFixed(10));
}
function Rf(e, t, n) {
  return (n - e) / (t - e);
}
var $ = class extends U.Component {
  m_refSlider = U.createRef();
  m_refHandle = U.createRef();
  m_navRefSlider = U.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = void 0;
  m_eDragMode = 0;
  m_vTouchStartPosition = Ue();
  m_fStartValue;
  m_fLatestUserValue;
  m_fLatestOnChangeValue;
  m_bInnerSliderHasFocus = !1;
  m_nRepeatCount = 0;
  m_fInitalRepeatTime = void 0;
  get showHandle() {
    return this.props.showHandle ?? !0;
  }
  get isKeyNavTarget() {
    return this.props.isKeyNavTarget ?? !0;
  }
  get validRange() {
    return this.props.min < this.props.max;
  }
  get range() {
    return this.validRange ? this.props.max - this.props.min : 0;
  }
  get step() {
    return Math.abs(this.props.step ?? Af);
  }
  get stepSound() {
    return this.props.stepSound ?? jf;
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      t = e > 0 ? e / this.range : Mf;
    return Math.max(t, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : x(this.props.value, this.props.min, this.props.max);
    return Rf(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return Rf(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = x(0, this.props.min, this.props.max);
    return Rf(this.props.min, this.props.max, e);
  }
  get CanResetToDefault() {
    return (
      this.props.resetValue != null && this.props.value != this.props.resetValue
    );
  }
  get SliderChangeSource() {
    switch (this.m_eDragMode) {
      case 1:
        return 1;
      case 3:
      case 2:
        return 0;
      case 4:
        return 2;
      case 0:
        return;
    }
  }
  constructor(e) {
    (super(e),
      (this.m_fStartValue = this.props.value),
      (this.m_fLatestUserValue = this.props.value),
      (this.m_fLatestOnChangeValue = this.props.value));
  }
  RecomputeSliderBounds() {
    ((this.m_sliderBounds = this.m_refSlider.current?.getBoundingClientRect()),
      (this.m_handleBounds =
        this.m_refHandle.current?.getBoundingClientRect()));
  }
  SetDragMode(e) {
    if (e != this.m_eDragMode) {
      switch (
        ((this.m_eDragMode = e),
        e != 0 &&
          this.props.onChangeStart &&
          this.props.onChangeStart(this.SliderChangeSource),
        e)
      ) {
        case 1:
        case 3:
        case 2:
        case 4:
          (this.RecomputeSliderBounds(),
            (this.m_fStartValue = this.props.value),
            (this.m_fLatestUserValue = this.props.value));
      }
      switch (e) {
        case 1:
          (this.m_refSlider.current?.ownerDocument?.addEventListener(
            `mousemove`,
            this.OnWindowMouseMove,
            { passive: !1 },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              `mouseup`,
              this.OnWindowMouseUp,
              { passive: !1 },
            ));
          break;
        case 2:
        case 3:
          (this.m_refSlider.current?.ownerDocument?.addEventListener(
            `touchmove`,
            this.OnWindowTouchMove,
            { passive: !1 },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              `touchend`,
              this.OnWindowTouchEnd,
              { passive: !1 },
            ));
          break;
        case 0:
          this.RemoveDocumentEventListeners();
      }
    }
  }
  OnGamepadDirection(e) {
    if (this.props.disabled) return !1;
    let t = 0;
    if (e.detail.button == dt.DIR_LEFT) t = -1;
    else if (e.detail.button == dt.DIR_RIGHT) t = 1;
    else return !1;
    e.detail.is_repeat
      ? (this.m_nRepeatCount == 0 &&
          (this.m_fInitalRepeatTime = performance.now()),
        this.m_nRepeatCount++)
      : ((this.m_nRepeatCount = 0),
        (this.m_fInitalRepeatTime = performance.now()));
    let n = performance.now() - this.m_fInitalRepeatTime,
      r = v(n, 0, 2e3, 500, 250),
      i = 2 ** Math.floor(n / r),
      a = this.normalizedDpadStep * i,
      o = x(a, this.normalizedDpadStep, Nf) * t,
      s = If(this.normalizedStep, this.normalizedClampedValue + o),
      c = Lf(this.props.min, this.props.max, s);
    if (
      ((c = x(
        c,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      c != this.props.value)
    ) {
      this.m_eDragMode == 0 && this.SetDragMode(4);
      let e = c > this.m_fLatestUserValue;
      (mt.PlayNavSound(e ? H.SliderUp : H.SliderDown),
        (this.m_fLatestUserValue = c),
        this.FireOnChange(c, 2));
    } else mt.PlayNavSound(H.FailedNav);
    return !0;
  }
  FireOnChange(e, t) {
    this.m_fLatestOnChangeValue != e &&
      ((this.m_fLatestOnChangeValue = e),
      this.props.onChange && this.props.onChange(e, t));
  }
  ComputeNormalizedValueForMousePosition(e) {
    if (this.m_sliderBounds == null) return 0;
    let t = e / this.GetZoom(),
      n = this.m_sliderBounds.right - this.m_sliderBounds.left,
      r =
        this.m_handleBounds == null
          ? 0
          : this.m_handleBounds.right - this.m_handleBounds.left,
      i = n - r,
      a = (t - this.m_sliderBounds.left - r / 2) / i;
    return this.m_refSlider.current?.matches(`:dir(rtl)`) ? 1 - a : a;
  }
  BShouldTriggerHapticOnSnap() {
    let e = this.normalizedStep;
    return e > 0 && e >= 1 / 40;
  }
  PlayHaptic(e) {
    this.m_refSlider.current?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
      e,
      0,
    );
  }
  UpdateSliderValueForPosition(e) {
    if (this.props.disabled || !this.m_refSlider.current) return;
    let t = this.ComputeNormalizedValueForMousePosition(e),
      n = If(this.normalizedStep, t),
      r = Lf(this.props.min, this.props.max, n),
      i = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((r = x(r, i, a)), r != this.props.value)) {
      let e = r > this.props.value,
        t = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !t) &&
          this.props.stepSound &&
          mt.PlayNavSound(e ? H.SliderUp : H.SliderDown),
        this.m_eDragMode == 1 || this.m_eDragMode == 3)
      ) {
        let e = !1;
        ((r == i || r == a) &&
        this.m_fLatestUserValue > i &&
        this.m_fLatestUserValue < a &&
        !e
          ? (this.PlayHaptic(At.SlidingEdge), (e = !0))
          : !this.BShouldTriggerHapticOnSnap() &&
            this.m_fLatestUserValue >= i &&
            this.m_fLatestUserValue <= a &&
            Math.floor(((this.m_fLatestUserValue - i) / (a - i)) * 40) !=
              Math.floor(((r - i) / (a - i)) * 40) &&
            !e &&
            (this.PlayHaptic(At.Sliding), (e = !0)),
          !t && !e && (this.PlayHaptic(At.Snap), (e = !0)));
      }
      ((this.m_fLatestUserValue = r),
        this.FireOnChange(r, this.SliderChangeSource));
    }
  }
  OnWindowMouseMove(e) {
    this.UpdateSliderValueForPosition(e.clientX);
  }
  OnWindowMouseUp(e) {
    this.m_eDragMode != 0 && this.Complete();
  }
  OnMouseDown(e) {
    e.button == 0 &&
      (this.props.disabled ||
        (e.preventDefault(),
        this.SetDragMode(1),
        this.UpdateSliderValueForPosition(e.clientX)));
  }
  OnTouchStart(e) {
    if (this.props.disabled || e.touches.length != 1) return;
    e.preventDefault();
    let t = this.ComputeNormalizedValueForMousePosition(e.touches[0].clientX);
    t < 0 ||
      t > 1 ||
      (this.SetDragMode(2),
      (this.m_vTouchStartPosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }));
  }
  OnWindowTouchMove(e) {
    if (e.touches.length == 1) {
      switch (this.m_eDragMode) {
        case 2:
          let t = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          if (Qe(this.m_vTouchStartPosition, t) >= kf) {
            let e = et(this.m_vTouchStartPosition, t);
            Math.abs(e.x) > Math.abs(e.y)
              ? (this.SetDragMode(3), this.m_refSlider.current?.focus())
              : this.SetDragMode(0);
          }
          break;
        case 3:
          this.UpdateSliderValueForPosition(e.touches[0].clientX);
      }
      e.preventDefault();
    }
  }
  OnWindowTouchEnd(e) {
    this.m_eDragMode != 0 && this.Complete();
  }
  Complete() {
    let e = this.m_eDragMode != 0;
    (this.FireOnChange(this.m_fLatestUserValue, this.SliderChangeSource),
      this.props.onChangeComplete &&
        this.props.onChangeComplete(
          this.m_fLatestUserValue,
          this.SliderChangeSource,
        ),
      this.SetDragMode(0));
    let t = this.step == 0;
    if (
      this.m_fLatestUserValue != this.m_fStartValue &&
      (t || !this.props.stepSound) &&
      e
    ) {
      let e = this.m_fLatestUserValue > this.m_fStartValue;
      mt.PlayNavSound(e ? H.SliderUp : H.SliderDown);
    }
  }
  RemoveDocumentEventListeners() {
    (this.m_refSlider.current?.ownerDocument?.removeEventListener(
      `mousemove`,
      this.OnWindowMouseMove,
    ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        `touchmove`,
        this.OnWindowTouchMove,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        `mouseup`,
        this.OnWindowMouseUp,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        `touchend`,
        this.OnWindowTouchEnd,
      ));
  }
  GetZoom() {
    return (
      this.m_fZoom === void 0 &&
        this.m_refSlider.current &&
        (this.m_fZoom = E(this.m_refSlider.current)),
      this.m_fZoom ?? 1
    );
  }
  componentWillUnmount() {
    this.RemoveDocumentEventListeners();
  }
  BlurInnerSlider() {
    this.m_navRefSlider.current?.ParentTakeFocus();
  }
  OnInnerSliderFocus() {
    ((this.m_bInnerSliderHasFocus = !0),
      (this.m_fStartValue = this.props.value));
  }
  OnInnerSliderBlur() {
    ((this.m_bInnerSliderHasFocus = !1),
      (this.m_fStartValue != this.m_fLatestUserValue ||
        this.m_eDragMode != 0) &&
        this.Complete());
  }
  ResetToDefault() {
    if (!this.CanResetToDefault || this.m_eDragMode != 0) return;
    let e;
    ((this.m_fLatestUserValue = this.props.resetValue),
      (this.m_fLatestOnChangeValue = this.props.value),
      this.FireOnChange(this.props.resetValue, 4),
      this.m_bInnerSliderHasFocus
        ? (e = this.props.resetValue > this.m_fLatestUserValue)
        : ((e = this.props.resetValue > this.props.value),
          this.props.onChangeComplete &&
            this.props.onChangeComplete(this.props.resetValue, 4)),
      mt.PlayNavSound(e ? H.SliderUp : H.SliderDown));
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let t = (0, q.jsx)(Fe, {
        children: (0, q.jsx)(Te, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: C(`#ResetToDefault`),
        }),
      });
      Pe(t, e);
    }
  }
  render() {
    let {
        min: e,
        max: t,
        value: n,
        clampMax: r,
        clampMin: i,
        className: a,
        disabled: o,
        dpadStep: s,
        extraNotchPadding: c,
        focusable: l,
        handleType: u,
        innerRef: d,
        isKeyNavTarget: f,
        navRef: p,
        notchCount: m,
        notchLabels: h,
        notchTicksVisible: g,
        onChange: _,
        onChangeComplete: v,
        onChangeStart: y,
        renderNotch: b,
        renderValue: x,
        resetValue: S,
        resetValueAppearance: w = `top-caret`,
        resetValueSecondaryButtonDisabled: T,
        showBookendLabels: E,
        showHandle: D,
        step: ee,
        stepSound: O,
        strValueSuffix: k,
        trackStyleOverride: A,
        trackStyleBackground: j,
        trackForegroundVisible: M = !0,
        trackTone: N,
        ...P
      } = this.props,
      F = E ?? !1,
      te = g ?? !F,
      ne = F ? 2 : m,
      re = [
        { notchIndex: 0, label: `${e}` },
        { notchIndex: 1, label: `${t}` },
      ],
      I = F ? re : h,
      ie = l ?? !0,
      L = this.normalizedDefaultValue,
      R = this.normalizedSliderOrigin,
      z = L != null,
      ae = w == `top-caret`,
      se = !ae,
      ce = x || Oa,
      le = {},
      ue = this.CanResetToDefault && !T;
    ue && (le[dt.SECONDARY] = C(`#ResetToDefault`));
    let fe = `${Al} SliderHandle`,
      pe = `${Dl} SliderHandleContainer `;
    u == `verticalline`
      ? ((fe = `${jl} SliderHandle`), (pe = `${Ol} SliderHandleContainer `))
      : (u == `leftparen` || u == `rightparen`) &&
        ((fe = V(Ml, u == `leftparen` ? Nl : Gl, `SliderHandle`)),
        (pe = V(kl, u == `leftparen` ? Nl : Gl, `SliderHandleContainer`)));
    let me = ce(n);
    return (0, q.jsx)(wf, {
      noFocusRing: !0,
      className: V(Sl, `SliderControlPanelGroup`, a),
      navRef: p,
      onMouseDown: (e) => this.OnMouseDown(e.nativeEvent),
      onTouchStart: (e) => this.OnTouchStart(e.nativeEvent),
      onOKActionDescription: o ? null : C(`#Slider_AdjustSlider`),
      focusable: ie,
      childFocusDisabled: o || !ie,
      onContextMenu: this.OnContextMenu,
      onOKButton: o ? () => mt.PlayNavSound(H.FailedNav) : void 0,
      onSecondaryButton: ue ? this.ResetToDefault : void 0,
      onSecondaryActionDescription: ue ? C(`#ResetToDefault`) : void 0,
      actionDescriptionMap: le,
      "aria-roledescription": C(`#Slider_Button`),
      "aria-labelledby": P[`aria-labelledby`],
      "aria-label": P[`aria-label`],
      children: (0, q.jsxs)(st, {
        role: `slider`,
        "aria-valuenow": n,
        "aria-valuetext": me,
        ...P,
        className: V(
          Cl,
          o && `_3xlF3xf0oqs-`,
          z && `v-Z71UJwoeE-`,
          z && se && `L1H8c1tG81w-`,
          z && se && w.side == `left` && `Q8VDUuiGgkQ-`,
          z && se && w.side != `left` && `Mjp7w5cCo5w-`,
          !M && `_2DsxUL5BQgE-`,
        ),
        focusable: this.isKeyNavTarget,
        noFocusRing: !0,
        onFocus: this.OnInnerSliderFocus,
        onBlur: this.OnInnerSliderBlur,
        style: {
          "--normalized-slider-value": this.normalizedClampedValue,
          "--normalized-slider-default-value": L,
          "--normalized-slider-origin": R,
          "--default-value-track-color": se ? w.trackForegroundColor : void 0,
          "--slider-extra-notch-padding": c ?? `0px`,
        },
        ref: oe(this.m_refSlider, d),
        navRef: this.m_navRefSlider,
        onGamepadDirection: this.OnGamepadDirection,
        onOKButton: this.BlurInnerSlider,
        onOKActionDescription: null,
        onCancelButton: this.BlurInnerSlider,
        onCancelActionDescription: C(`#ActionButtonLabelDone`),
        children: [
          (0, q.jsxs)(`div`, {
            className: V(wl, `SliderControl`),
            children: [
              (0, q.jsx)(`div`, {
                className: V(
                  Tl,
                  m != null && te && `amoqVtEqkzM-`,
                  { [El]: N === `dark` },
                  j,
                  `SliderTrack`,
                ),
                style: this.props.trackStyleOverride,
              }),
              z &&
                ae &&
                (0, q.jsx)(`div`, {
                  className: `fabcIwFUsS8-`,
                  children: (0, q.jsx)(`div`, {
                    className: `iCZ9qGvSyRk-`,
                    children: (0, q.jsx)(Ne, { direction: `down` }),
                  }),
                }),
              this.validRange &&
                n != null &&
                !isNaN(n) &&
                this.showHandle &&
                (0, q.jsx)(`div`, {
                  className: pe,
                  children: (0, q.jsxs)(`div`, {
                    className: fe,
                    ref: this.m_refHandle,
                    children: [
                      u == `leftparen` && (0, q.jsx)(de, {}),
                      u == `rightparen` && (0, q.jsx)(He, {}),
                    ],
                  }),
                }),
            ],
          }),
          (0, q.jsx)(zf, {
            notchCount: ne,
            notchLabels: I,
            sliderValue: this.normalizedClampedValue,
            notchTicksVisible: te,
            renderNotch: b,
          }),
        ],
      }),
    });
  }
};
(I([f], $.prototype, `RecomputeSliderBounds`, null),
  I([f], $.prototype, `SetDragMode`, null),
  I([f], $.prototype, `OnGamepadDirection`, null),
  I([f], $.prototype, `UpdateSliderValueForPosition`, null),
  I([f], $.prototype, `OnWindowMouseMove`, null),
  I([f], $.prototype, `OnWindowMouseUp`, null),
  I([f], $.prototype, `OnMouseDown`, null),
  I([f], $.prototype, `OnTouchStart`, null),
  I([f], $.prototype, `OnWindowTouchMove`, null),
  I([f], $.prototype, `OnWindowTouchEnd`, null),
  I([f], $.prototype, `Complete`, null),
  I([f], $.prototype, `BlurInnerSlider`, null),
  I([f], $.prototype, `OnInnerSliderFocus`, null),
  I([f], $.prototype, `OnInnerSliderBlur`, null),
  I([f], $.prototype, `ResetToDefault`, null),
  I([f], $.prototype, `OnContextMenu`, null));
function zf(e) {
  let {
      sliderValue: t,
      notchCount: n,
      notchLabels: r,
      notchTicksVisible: i,
      renderNotch: a,
    } = e,
    o = r ?? [];
  if (!n) return null;
  let s = [];
  for (let e = 0; e < n; ++e) {
    let r = o.find((t) => t.notchIndex == e);
    s.push(
      (0, q.jsx)(
        Bf,
        {
          notchIndex: e,
          sliderValue: t,
          notchLabel: r,
          notchCount: n,
          notchTicksVisible: i,
          renderNotch: a,
        },
        e,
      ),
    );
  }
  return (0, q.jsx)(B, { className: V(Pl), children: s });
}
function Bf(e) {
  let t = e.notchIndex <= (e.notchCount - 1) * e.sliderValue,
    n = e.notchCount <= 3 && !e.notchTicksVisible,
    r = n && e.notchIndex == 0,
    i = n && e.notchIndex == e.notchCount - 1,
    a = { ...e, alignLeftEnd: r, alignRightEnd: i, active: t };
  return (0, q.jsx)(`div`, {
    className: V(Fl, n && `L6aX6lNYkBQ-`),
    children: e.renderNotch ? e.renderNotch(a) : (0, q.jsx)(Vf, { ...a }),
  });
}
function Vf(e) {
  let { alignLeftEnd: t, alignRightEnd: n, active: r } = e;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      e.notchTicksVisible &&
        (0, q.jsx)(`div`, {
          className: V(`_8QUbXerP35s-`, r && `Bn3jk5M5rr0-`),
        }),
      e.notchLabel &&
        (0, q.jsx)(`div`, {
          className: V(
            `lIytNTWn4Pk-`,
            t && `JtuvOS1ZPD0-`,
            n && `ODeyFZ01cgg-`,
          ),
          children: e.notchLabel?.label,
        }),
    ],
  });
}
function Hf(e) {
  let {
      label: t,
      description: n,
      tabIndex: r,
      className: i,
      showValue: a,
      renderValue: o,
      valueSuffix: s,
      validValues: c,
      tooltip: l,
      layout: u,
      padding: d,
      bottomSeparator: f,
      notchCount: p,
      indentLevel: m,
      editableValue: h,
      highlightOnFocus: g,
      parentSliderRef: _,
      onOptionsButton: v,
      onOptionsActionDescription: y,
      iconLocation: b,
      childrenContainerWidth: x,
      explainer: S,
      explainerTitle: w,
      onActivate: T,
      disabled: E,
      transparentBackground: D,
      ...ee
    } = e,
    { icon: O, ...k } = ee,
    A = U.useRef(null),
    j = U.useRef(null),
    M = U.useRef(null),
    N = (o ?? Oa)(e.value, e.valueSuffix),
    P = Gf(e),
    [F, te] = U.useState(!1),
    ne = () => {
      (e.onChangeStart && e.onChangeStart(3), te(!0));
    },
    re = (t) => {
      (P(t) &&
        (e.onChange && e.onChange(t, 3),
        e.onChangeComplete && e.onChangeComplete(t, 3)),
        te(!1));
    };
  U.useEffect(() => {
    !F && M.current?.BHasFocus() && j.current?.TakeFocus();
  }, [M, j, F]);
  let I = t;
  h
    ? (I = (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)(`div`, { className: Il, children: e.label }),
          (0, q.jsx)(Uf, {
            navRef: M,
            editing: F,
            renderedValue: N,
            valueSuffix: e.valueSuffix,
            onClick: ne,
            onChangeComplete: re,
            validator: P,
          }),
        ],
      }))
    : a &&
      (I = (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsx)(`div`, { className: Il, children: e.label }),
          (0, q.jsx)(`div`, {
            className: Ll,
            "aria-hidden": !0,
            children: (0, q.jsx)(`span`, { className: Rl, children: N }),
          }),
        ],
      }));
  let ie = U.useRef(null),
    L = U.useCallback(
      (e) => {
        ie.current?.OnTouchStart(e.nativeEvent);
      },
      [ie],
    ),
    z = U.useCallback(
      (e) => {
        ie.current?.OnContextMenu(e);
      },
      [ie],
    ),
    ae = R(ie, _),
    oe = h ? ne : void 0,
    se = h ? C(`#Slider_EditValue`) : void 0,
    ce = v || oe,
    le = v ? y : se,
    ue = v ? oe : void 0,
    de = v ? se : void 0,
    fe = U.useId(),
    pe = { label: I, description: n };
  return (0, q.jsx)(X, {
    accessibilityId: fe,
    ...pe,
    disabled: E,
    childrenLayout: u ?? `below`,
    padding: d,
    bottomSeparator: f,
    childrenContainerWidth: x ?? `fixed`,
    ref: A,
    className: i,
    onTouchStart: L,
    onContextMenu: z,
    indentLevel: m,
    onMenuActionDescription: de,
    onMenuButton: ue,
    onActivate: T,
    highlightOnFocus: g,
    onOptionsButton: ce,
    onOptionsActionDescription: le,
    icon: O,
    iconLocation: b ?? `before-children`,
    explainer: S,
    explainerTitle: w,
    transparentBackground: D,
    children: (0, q.jsx)($, {
      ref: ae,
      ...$s(fe, pe),
      disabled: E,
      notchCount: p,
      focusable: !F,
      navRef: j,
      renderValue: o,
      strValueSuffix: s,
      ...k,
    }),
  });
}
function Uf(e) {
  let {
      editing: t,
      renderedValue: n,
      valueSuffix: r,
      onClick: i,
      onChangeComplete: a,
      navRef: o,
      validator: s,
    } = e,
    c = U.useRef(null),
    l = U.useRef(null),
    u = U.useRef(null),
    d = R(o, u),
    { fnTriggerErrorShake: f, bPlayingErrorShake: p } = Wf(c),
    m = t || p,
    [h, g] = U.useState(``),
    _ = (e) => g(e.target.value.trim());
  U.useEffect(() => {
    m || g(``);
  }, [m]);
  let v = s(Number.parseFloat(h)),
    y = U.useRef(!1),
    b = U.useCallback(
      (e) => {
        (!v && h.length > 0 && f(),
          y.current ||
            ((v || e) &&
              (a(Number.parseFloat(h)),
              (y.current = !0),
              l.current?.HideVirtualKeyboard())));
      },
      [v, h, f, a],
    ),
    x = U.useCallback(
      (e) => {
        e.key == `Enter` &&
          (!v && h.length > 0 && f(),
          y.current ||
            (v &&
              (a(Number.parseFloat(h)),
              (y.current = !0),
              l.current?.HideVirtualKeyboard(),
              e.stopPropagation(),
              e.preventDefault())));
      },
      [v, f, a, h],
    ),
    S = () => (y.current = !1),
    w = U.useCallback(() => l.current?.TakeFocusAndShowKeyboard(), [l]),
    T = U.useRef(void 0),
    E = (e) => {
      ((T.current = t ? void 0 : e.nativeEvent), i());
    },
    D = U.useRef(!1);
  U.useEffect(() => {
    (t &&
      !D.current &&
      (l.current?.TakeFocusAndShowKeyboard(T.current), (T.current = void 0)),
      (D.current = t));
  }, [u, t, l]);
  let ee = p || (m && !v && h.length > 0 && h != `-`),
    O = V(Ll, ee && `_2WqNvpFX2Ec-`),
    [k, A] = U.useState(0),
    [j, M] = U.useState(0),
    N = U.useRef(void 0),
    P = U.useCallback(() => {
      let e = N.current.clientWidth;
      m ? M(e) : A(e);
    }, [m]);
  U.useLayoutEffect(P, [P]);
  let F = gt(P),
    te = R(N, F);
  U.useEffect(() => {
    u.current?.BHasFocus() && u.current?.Node().ForceMeasureFocusRing();
  }, [j]);
  let ne = m ? h : n,
    re = m ? Math.max(k, j) : k;
  return (0, q.jsxs)(`div`, {
    className: O,
    children: [
      (0, q.jsx)(`div`, { className: Bl, ref: te, children: ne }),
      (0, q.jsx)(at, {
        refKeyboardHandle: l,
        navRef: d,
        ref: c,
        focusable: t,
        className: zl,
        style: { width: re },
        onEnterKeyPress: () => b(!1),
        strEnterKeyLabel: C(`#ActionButtonLabelDone`),
        onClick: E,
        onFocus: S,
        onBlur: () => b(!0),
        value: ne,
        placeholder: n,
        onChange: _,
        onCancelButton: () => b(!0),
        onCancelActionDescription: C(`#ActionButtonLabelDone`),
        onOKButton: w,
        onOKActionDescription: C(`#Slider_EditValue`),
        onOptionsActionDescription: void 0,
        onOptionsButton: w,
        onKeyDown: x,
      }),
    ],
  });
}
function Wf(e) {
  let [t, n] = U.useState(!1),
    r = U.useRef(void 0),
    i = U.useRef(void 0),
    a = U.useCallback(() => {
      (window.clearTimeout(r.current),
        (r.current = window.setTimeout(() => {
          (e.current?.classList.remove(Vl),
            e.current?.getBoundingClientRect(),
            e.current?.classList.add(Vl));
        }, 0)),
        n(!0),
        window.clearTimeout(i.current),
        (i.current = window.setTimeout(() => n(!1), Ff)));
    }, [e]);
  return (
    U.useEffect(
      () => () => {
        (window.clearTimeout(r.current), window.clearTimeout(i.current));
      },
      [],
    ),
    { fnTriggerErrorShake: a, bPlayingErrorShake: t }
  );
}
function Gf(e) {
  let { min: t, max: n } = e,
    r = e.validValues ?? `steps`,
    i = e.step ?? Af,
    a = U.useCallback((e) => typeof e == `number` && !Number.isNaN(e), []),
    o = U.useCallback((e) => (a(e) ? e >= t && e <= n : !1), [a, t, n]),
    s = U.useCallback(
      (e) => (o(e) ? i == 0 || ((e - t) / i) % 1 == 0 : !1),
      [o, t, i],
    ),
    c = U.useCallback(
      (e) => (!a(e) || typeof r != `function` ? !1 : r(e)),
      [a, r],
    );
  switch (r) {
    case `all`:
      return a;
    case `range`:
      return o;
    case `steps`:
      return s;
    default:
      return c;
  }
}
function Kf(e) {
  let {
      label: t,
      description: n,
      className: r,
      layout: i,
      indentLevel: a,
      sliders: o,
      useLeftRightParen: s,
    } = e,
    c = U.useRef([]),
    l = [];
  o.forEach((e, t) => {
    let { noLabel: n, minimumDpadPercent: r, renderLabel: i, ...a } = e,
      o = `verticalline`;
    (s && !n && (o = t == 0 ? `rightparen` : `leftparen`),
      l.push(
        (0, q.jsx)(
          Hf,
          {
            className: V(
              Wl,
              t == 0
                ? `CompoundSliderSubSliderUpper`
                : `CompoundSliderSubSliderLower`,
            ),
            handleType: o,
            highlightOnFocus: !1,
            parentSliderRef: (e) => {
              c.current[t] = e;
            },
            dpadStep: r,
            transparentBackground: !0,
            padding: `none`,
            ...a,
          },
          t,
        ),
      ));
  });
  let u = U.useId();
  return (0, q.jsx)(X, {
    accessibilityId: u,
    childrenLayout: i ?? `below`,
    childrenContainerWidth: `max`,
    label: t,
    description: n,
    className: V(Hl, r),
    indentLevel: a,
    highlightOnFocus: !1,
    transparentBackground: !0,
    padding: `none`,
    children: (0, q.jsxs)(`div`, {
      className: Ul,
      children: [(0, q.jsx)(Jf, { sliders: o, sliderRefs: c }, `labels`), l],
    }),
  });
}
var qf = U.forwardRef(function (e, t) {
  let {
    label: n,
    labelIndex: r,
    xOffset: i,
    onResize: a,
    OnMouseDown: o,
    OnTouchStart: s,
  } = e;
  U.useEffect(() => {
    a(r);
  }, [a, r]);
  let c = U.useCallback(
      (e) => {
        a(r);
      },
      [a, r],
    ),
    l = gt(c),
    u = R(l, t);
  return (0, q.jsx)(`div`, {
    className: ql,
    ref: u,
    onMouseDown: o,
    onTouchStart: s,
    style: { transform: `translateX(${i}px)` },
    children: (0, q.jsx)(`div`, {
      className: V(Jl, `CompoundSliderSubSliderLabelInternal`),
      children: n,
    }),
  });
});
function Jf(e) {
  let { sliders: t, sliderRefs: n } = e,
    r = U.useRef(null),
    i = t.length,
    a = U.useRef([]),
    [o, s] = U.useState(Array(i)),
    c = U.useCallback(
      (e) => {
        s((t) => {
          let n = [...t];
          return ((n[e] = a.current[e].clientWidth), n);
        });
      },
      [a],
    ),
    l = 0;
  if (r.current) {
    let e = window.getComputedStyle(r.current);
    l =
      r.current.clientWidth -
      parseFloat(e.paddingLeft) -
      parseFloat(e.paddingRight);
  }
  let u = t.filter((e) => !e.noLabel),
    d = [],
    f = [],
    p = [];
  u.forEach((e, t) => {
    let n =
      e.value == null || isNaN(e.value) ? e.min : x(e.value, e.min, e.max);
    p.push(Rf(e.min, e.max, n));
    let r = ((e) => l * p[e])(t),
      i = !1;
    if (t > 0) {
      let e = r + o[t] * 0.5;
      if (e + Pf >= d[t - 1] - o[t - 1] * 0.5) {
        let n = f[t - 1] ? d[t - 1] : d[t - 1] + o[t - 1] * 0.5,
          a = Math.min(n - o[t] * 0.5, e);
        ((r = a - o[t] * 0.5 - Pf * 0.5),
          (d[t - 1] = a + o[t - 1] * 0.5 + Pf * 0.5),
          (i = !0));
      }
    }
    (d.push(r), f.push(i));
  });
  let m = [];
  return (
    u.forEach((e, t) => {
      let r = e.renderLabel
          ? e.renderLabel(e.value)
          : `` + Math.round(p[t] * 100),
        i = n.current?.[t];
      m.push(
        (0, q.jsx)(
          qf,
          {
            ref: (e) => {
              a.current[t] = e;
            },
            labelIndex: t,
            onResize: c,
            label: r,
            xOffset: d[t],
            OnMouseDown: (e) => {
              i?.OnMouseDown(e.nativeEvent);
            },
            OnTouchStart: (e) => {
              i?.OnTouchStart(e.nativeEvent);
            },
          },
          t,
        ),
      );
    }),
    (0, q.jsx)(`div`, {
      className: V(Kl, `CompoundSliderSubSliderLabels`),
      ref: r,
      children: m,
    })
  );
}
function Yf(e, t) {
  let n = e.findIndex((e) => e == t);
  return (
    n < 0 &&
      (console.error(
        `Failed to find a corresponding index for initial GamepadDiscreteValuesSlider value`,
      ),
      (n = 0)),
    n
  );
}
function Xf(e) {
  let {
      rValues: t,
      onChange: n,
      onChangeComplete: r,
      value: i,
      renderValue: a,
      showBookendLabels: o = !1,
      ...s
    } = e,
    [c, l] = U.useState(Yf(t, i)),
    u = U.useCallback(
      (e, r) => {
        (l(e), n && n(t[e], r));
      },
      [t, n],
    ),
    d = U.useCallback(
      (e, n) => {
        r && r(t[e], n);
      },
      [t, r],
    ),
    f = U.useCallback((e, n) => (a ? a(t[e], n) : t[e].toString()), [t, a]);
  U.useEffect(() => {
    l(Yf(t, i));
  }, [t, i]);
  let p = t.length - 1,
    m = [
      { notchIndex: 0, label: t[0]?.toString() },
      { notchIndex: 1, label: t[p]?.toString() },
    ];
  return (0, q.jsx)(Hf, {
    onChange: u,
    onChangeComplete: d,
    min: 0,
    max: p,
    value: c,
    step: 1,
    notchCount: 2,
    notchLabels: o ? m : void 0,
    renderValue: f,
    notchTicksVisible: !1,
    ...s,
  });
}
var Zf = U.forwardRef(function (e, t) {
  let {
      value: n,
      onChange: r,
      disabled: i,
      className: a,
      focusable: o,
      children: s,
      navRef: c,
      autoFocus: l,
      toggleRef: u,
      ...d
    } = e,
    f = U.useCallback(() => {
      if (!i && r) {
        let e = !n;
        (r(e), mt.PlayNavSound(e ? H.ToggleOn : H.ToggleOff));
      }
    }, [i, r, n]);
  return (
    U.useEffect(() => {
      P(u, { toggle: f });
    }, [u, f]),
    (0, q.jsxs)(st, {
      ...d,
      autoFocus: l,
      noFocusRing: !0,
      className: V(a, Ms, { [vs]: !!i, [Ps]: !!n }),
      onClick: f,
      ref: t,
      navRef: c,
      focusable: o,
      role: `checkbox`,
      "aria-checked": !!n,
      children: [
        (0, q.jsx)(`div`, { className: Ns }),
        (0, q.jsx)(`div`, { className: Fs }),
        s,
      ],
    })
  );
});
function Qf(e) {
  let t = !!e.disabled,
    { actionDescriptions: n, gamepadEvents: r } = pt(e),
    i = U.useId(),
    { autoFocus: a, "aria-expanded": o, "aria-controls": s } = e;
  return (0, q.jsx)(X, {
    accessibilityId: i,
    className: e.className,
    disabled: t,
    label: e.label,
    icon: e.icon,
    description: e.description,
    explainer: e.explainer,
    explainerTitle: e.explainerTitle,
    padding: e.padding,
    bottomSeparator: e.bottomSeparator,
    highlightOnFocus: e.highlightOnFocus,
    inlineWrap: `keep-inline`,
    onContextMenu: e.onContextMenu,
    actionDescriptionMap: n,
    onClick: e.onClick,
    indentLevel: e.indentLevel,
    transparentBackground: e.transparentBackground,
    ...r,
    children: (0, q.jsx)(Zf, {
      autoFocus: a,
      "aria-expanded": o,
      "aria-controls": s,
      ...$s(i, e),
      onChange: e.OnToggleChange,
      value: e.checked,
      disabled: t,
      navRef: e.navRef,
    }),
  });
}
var $f = class extends ga {
  OnToggleChange(e) {
    !this.props.disabled && e !== this.checked && this.Toggle();
  }
  render() {
    return (0, q.jsx)(Qf, {
      ...this.props,
      OnToggleChange: this.OnToggleChange,
      checked: this.checked,
    });
  }
};
I([f], $f.prototype, `OnToggleChange`, null);
function ep(e) {
  let { children: t, bCenterVertically: n, refElem: r, ...i } = e,
    a = V(
      ps,
      `DialogContent _DialogLayout`,
      e.className,
      n && ` _DialogCenterVertically`,
    ),
    { ref: o, navRef: s } = tf(),
    c = R(r, o);
  return (0, q.jsx)(B, {
    ...i,
    className: a,
    ref: c,
    navRef: s,
    children: (0, q.jsx)(B, {
      className: V(ms, `DialogContent_InnerWidth`),
      children: t,
    }),
  });
}
export {
  gc as $,
  Qi as $n,
  kn as $r,
  Y as $t,
  sd as A,
  Pt as Ai,
  ia as An,
  Vr as Ar,
  Ss as At,
  Z as B,
  Ui as Bn,
  fr as Br,
  Ds as Bt,
  Wd as C,
  Mt as Ci,
  Gi as Cn,
  Qr as Cr,
  Ws as Ct,
  Ju as D,
  Nt as Di,
  _a as Dn,
  Wr as Dr,
  Hs as Dt,
  ld as E,
  kt as Ei,
  ca as En,
  Gr as Er,
  Us as Et,
  dd as F,
  Et as Fi,
  Hi as Fn,
  _r as Fr,
  As as Ft,
  gl as G,
  Zi as Gn,
  Xn as Gr,
  os as Gt,
  Il as H,
  ma as Hn,
  ir as Hr,
  Yo as Ht,
  _u as I,
  ra as In,
  ur as Ir,
  _s as It,
  sl as J,
  ha as Jn,
  Yn as Jr,
  qo as Jt,
  _l as K,
  Vi as Kn,
  Gn as Kr,
  as as Kt,
  wu as L,
  fa as Ln,
  dr as Lr,
  Vs as Lt,
  md as M,
  Ct as Mi,
  Yi as Mn,
  kr as Mr,
  ks as Mt,
  hd as N,
  Dt as Ni,
  Ri as Nn,
  Sr as Nr,
  ws as Nt,
  ud as O,
  Ft as Oi,
  ea as On,
  Kr as Or,
  js as Ot,
  gd as P,
  Tt as Pi,
  la as Pn,
  vr as Pr,
  Os as Pt,
  yc as Q,
  ya as Qn,
  Nn as Qr,
  _o as Qt,
  Q as R,
  zi as Rn,
  lr as Rr,
  Bs as Rt,
  Kd as S,
  It as Si,
  Ca as Sn,
  $r as Sr,
  Gs as St,
  nd as T,
  Ot as Ti,
  Wi as Tn,
  qr as Tr,
  Xs as Tt,
  yl as U,
  sa as Un,
  J as Ur,
  Xo as Ut,
  au as V,
  pa as Vn,
  cr as Vr,
  fs as Vt,
  bl as W,
  va as Wn,
  Zn as Wr,
  ts as Wt,
  bc as X,
  da as Xn,
  zn as Xr,
  is as Xt,
  ol as Y,
  Bi as Yn,
  Un as Yr,
  cs as Yt,
  xc as Z,
  $i as Zn,
  Bn as Zr,
  ho as Zt,
  ef as _,
  qt as _i,
  ka as _n,
  _i as _r,
  fc as _t,
  $ as a,
  gn as ai,
  Ya as an,
  vi as ar,
  oc as at,
  qd as b,
  Bt as bi,
  wa as bn,
  ri as br,
  qs as bt,
  Ef as c,
  Qt as ci,
  $a as cn,
  yi as cr,
  uc as ct,
  Sf as d,
  Jt as di,
  Va as dn,
  mi as dr,
  sc as dt,
  xn as ei,
  vo as en,
  Pi as er,
  _c as et,
  yf as f,
  Ht as fi,
  Fa as fn,
  ui as fr,
  $s as ft,
  nf as g,
  Kt as gi,
  Aa as gn,
  ai as gr,
  dc as gt,
  cf as h,
  G as hi,
  Ia as hn,
  fi as hr,
  pc as ht,
  Xf as i,
  hn as ii,
  Xa as in,
  xi as ir,
  ac as it,
  pd as j,
  wt as ji,
  Ji as jn,
  Br as jr,
  Es as jt,
  qu as k,
  At as ki,
  ta as kn,
  zr as kr,
  Cs as kt,
  Tf as l,
  Zt as li,
  Ka as ln,
  li as lr,
  X as lt,
  ff as m,
  Gt as mi,
  La as mn,
  ci as mr,
  Zs as mt,
  $f as n,
  mn as ni,
  fo as nn,
  Si as nr,
  nc as nt,
  Hf as o,
  ln as oi,
  Za as on,
  hi as or,
  lc as ot,
  bf as p,
  Ut as pi,
  Pa as pn,
  di as pr,
  Qs as pt,
  ll as q,
  ua as qn,
  Kn as qr,
  Ko as qt,
  Kf as r,
  pn as ri,
  co as rn,
  Ci as rr,
  rc as rt,
  wf as s,
  K as si,
  Ja as sn,
  pi as sr,
  cc as st,
  Zf as t,
  bn as ti,
  uo as tn,
  Ii as tr,
  Sc as tt,
  xf as u,
  W as ui,
  Ua as un,
  oi as ur,
  ec as ut,
  Zd as v,
  Xt as vi,
  Ea as vn,
  gi as vr,
  ic as vt,
  Yu as w,
  jt as wi,
  Ki as wn,
  Yr as wr,
  Js as wt,
  Jd as x,
  Lt as xi,
  Sa as xn,
  Zr as xr,
  Ys as xt,
  Yd as y,
  Vt as yi,
  Da as yn,
  ii as yr,
  Ks as yt,
  Eu as z,
  qi as zn,
  pr as zr,
  Ts as zt,
};
