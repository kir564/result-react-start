import { STATUS, PLAYER_NAME, PLAYER_ACTION } from '../../constants';

export const Information = ({ status, currentPlayer }) => {
  const info =
    status === STATUS.DRAW
      ? PLAYER_ACTION[status]
      : `${PLAYER_ACTION[status]} ${PLAYER_NAME[currentPlayer]}`;

  return <h3>{info}</h3>;
};
