import { IGlobalActionPayload, IGlobalAction, IGlobalState } from "interfaces";

export enum GlobalActionTypes {
  openAppAction = "openAppAction",
  reSizeAppAction = "reSizeAppAction",
  minSizeAppAction = "minSizeAppAction"
}

export function dispatchs(dispatch: React.Dispatch<IGlobalAction>) {
  function openApp(payload: IGlobalActionPayload) {
    return dispatch({ type: GlobalActionTypes.openAppAction, payload });
  }
  function reSizeApp(payload: IGlobalActionPayload) {
    return dispatch({
      type: GlobalActionTypes.reSizeAppAction,
      payload
    });
  }
  function minSizeApp(payload: IGlobalActionPayload) {
    return dispatch({
      type: GlobalActionTypes.minSizeAppAction,
      payload
    });
  }

  return {
    openApp,
    reSizeApp,
    minSizeApp
  };
}
