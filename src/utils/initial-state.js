import { getInitialsField } from "../utils";
import { STATUS, PLAYER } from "../constants";

export const initialState = () => ({
  status: STATUS.GO,
  currentPlayer: PLAYER.CROSS,
  field: getInitialsField(),
});

