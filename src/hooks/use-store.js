import { useState } from 'react';
import { store } from '../store';

export const useStore = () => {
  const [state, setState] = useState(store.getState());
  
  const { status, currentPlayer, field } = state;

  const update = () => setState(store.getState());

  return { update, status, currentPlayer, field };
};
