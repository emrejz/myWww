import { GlobalActionTypes } from "./actions";
import { openApp, reSize, minSize } from "./functions";
import { IGlobalState, IGlobalAction } from "interfaces";
export const reducer = (
  state: IGlobalState,
  { type, payload }: IGlobalAction
): IGlobalState => {
  switch (type) {
    case GlobalActionTypes.openAppAction:
      return openApp(state, payload);
    case GlobalActionTypes.reSizeAppAction:
      return reSize(state, payload);
    case GlobalActionTypes.minSizeAppAction:
      return minSize(state, payload);
    default:
      return state;
  }
};
