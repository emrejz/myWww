import { IGlobalState, IGlobalActionPayload } from "interfaces";

const openApp = (
  state: IGlobalState,
  payload: IGlobalActionPayload
): IGlobalState => {
  return {
    ...state,
    zIndexInit: state.zIndexInit + 2,
    appList: state.appList.map(item =>
      item.name == payload.name
        ? {
            ...item,
            ...payload,
            zIndex: state.zIndexInit + 2,
            isActive: payload.open ? true : false
          }
        : { ...item, isActive: false }
    )
  };
};
const reSize = (
  state: IGlobalState,
  payload: IGlobalActionPayload
): IGlobalState => {
  return {
    ...state,
    appList: state.appList.map(item =>
      item.name == payload.name
        ? { ...item, size: item.size == "100%" ? "80%" : "100%" }
        : item
    )
  };
};
const minSize = (
  state: IGlobalState,
  payload: IGlobalActionPayload
): IGlobalState => {
  return {
    ...state,
    appList: state.appList.map(item =>
      item.name == payload.name
        ? { ...item, zIndex: 19, isActive: false }
        : item
    )
  };
};
export { openApp, reSize, minSize };
