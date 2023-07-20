import './App.css';
import { Buttons, Title, Restart, Win } from './components';
import { useState } from 'react';
import { checkCondition, showGameOver, reset } from './utils/utils';

function App() {
  const [restart, setRestart] = useState(false);
  const [title, setTitle] = useState('ходят крестики');
  const [count, setCount] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [putEnd, setputEnd] = useState('');
  const [win, setWin] = useState('');
  const [pointerEvents, setPointerEvents] = useState('');
  const [history, setHistory] = useState({
    0: ['0', ''],
    1: ['1', ''],
    2: ['2', ''],
    3: ['3', ''],
    4: ['4', ''],
    5: ['5', ''],
    6: ['6', ''],
    7: ['7', ''],
    8: ['8', ''],
  });

  if (restart) {
    reset({
      history,
      setRestart,
      setTitle,
      setCount,
      setIsEnd,
      setputEnd,
      setWin,
      setPointerEvents,
      setHistory,
    });
  }

  if (count >= 5) {
    const conditionForGameOver = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    conditionForGameOver.forEach(([...keys]) => {
      if (checkCondition(history, keys)) {
        showGameOver({
          setTitle,
          setIsEnd,
          setCount,
          setPointerEvents,
          putEnd,
          setWin,
          history,
          keys,
        });
      }
    });
  }

  if (count === 9) {
    setTitle('игра окончена');
    setIsEnd(true);
    setCount(0);
    setWin('ничья');
  }

  return (
    <div className='App'>
      <Title title={title} setTitle={setTitle} />
      <Win isEnd={isEnd}>{win}</Win>
      <Buttons
        pointerEvents={pointerEvents}
        count={count}
        setCount={setCount}
        setTitle={setTitle}
        history={history}
        setHistory={setHistory}
        setputEnd={setputEnd}
        putEnd={putEnd}
      />
      <Restart isEnd={isEnd} setRestart={setRestart} />
    </div>
  );
}

export default App;
