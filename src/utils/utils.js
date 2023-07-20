export function checkCondition(history, keys) {
  const [key1, key2, key3] = keys;
  return (
    history[key1][0] === history[key2][0] &&
    history[key1][0] === history[key3][0]
  );
}

export function changeBackGround(history, keys) {
  keys.forEach((key) => (history[key][1].style.backgroundColor = 'green'));
}

export function showGameOver({
  setTitle,
  setIsEnd,
  setCount,
  setPointerEvents,
  putEnd,
  setWin,
  history, 
  keys
}) {
  changeBackGround(history, keys)
  setTitle('игра окончена');
  setIsEnd(true);
  setCount(0);
  setPointerEvents('none');
  if (putEnd === 'o') {
    setWin('победили нолики');
  }
  if (putEnd === 'x') {
    setWin('победили крестики');
  }
}

export function reset({
  history,
  setRestart,
  setTitle,
  setCount,
  setIsEnd,
  setputEnd,
  setWin,
  setPointerEvents,
  setHistory,
}) {
  Object.values({...history})
    .filter((elem) => elem[1])
    .map((elem) => elem[1])
    .forEach((elem) => {
      elem.style.backgroundColor = '';
      elem.disabled = false;
      elem.firstChild.className = '';
    });
  setRestart(false);
  setTitle('ходят крестики');
  setCount(0);
  setIsEnd(false);
  setputEnd('');
  setWin('');
  setPointerEvents('');
  setHistory({
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
}
