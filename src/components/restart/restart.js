import { useDispatch } from 'react-redux';
import { handleRestart } from '../../handlers';

export const Restart = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    handleRestart(dispatch);
  };
  return <button onClick={onClick}>Начать заново</button>;
};
