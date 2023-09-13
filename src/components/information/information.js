import { useSelector } from 'react-redux';
import { STATUS, PLAYER_NAME, PLAYER_ACTION } from '../../constants';
import { statusSelector, currentPlayerSelector } from '../../selectors';

export const Information = () => {
  const status = useSelector(statusSelector);
  const currentPlayer = useSelector(currentPlayerSelector);

  const info =
    status === STATUS.DRAW
      ? PLAYER_ACTION[status]
      : `${PLAYER_ACTION[status]} ${PLAYER_NAME[currentPlayer]}`;

  return <h3>{info}</h3>;
};
