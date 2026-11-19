var e = `Please close %1$s before exiting the launcher.`,
  t = `Synchronizing with cloud`,
  n = `Finishing cloud sync...`,
  r = `Shutting down the launcher...`,
  i = `This will sign you out of the launcher. You will need to re-enter your account name, password, and Steam Guard details to use the launcher again.`,
  a = {
    Steam_AppMustBeClosedToQuit_Info: e,
    DisplayStatus_Synchronizing: t,
    Steam_Shutdown_Waiting_For_Cloud: n,
    Steam_Shutdown_Generic: r,
    SignOut_Description: i,
  };
export {
  t as DisplayStatus_Synchronizing,
  i as SignOut_Description,
  e as Steam_AppMustBeClosedToQuit_Info,
  r as Steam_Shutdown_Generic,
  n as Steam_Shutdown_Waiting_For_Cloud,
  a as default,
};
