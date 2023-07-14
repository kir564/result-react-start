import React, { useState } from 'react';
import classes from './calculator.module.css';



export function Calculator() {
  const [value, setValue] = useState('');
  const [color, setColor] = useState('');
  const [operation, setOperation] = useState('')

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ['+', '-', '=', 'C'];

  const buttons = [...numbers, ...operations].map((item) => {
    return (
      <button className={classes.button} key={item}>
        {item}
      </button>
    );
  });

  function showValue(event) {
    const isButton = event.target.closest(`.${classes.button}`);
    const buttonValue = event.target.textContent;

    if (isButton) {
      if (buttonValue == 0) {
        if (!value) return;
      }

      if (buttonValue === 'C') {
        setOperation('');
        setValue('');
      } else if (buttonValue === '=') {
        if (!value) return;
        if (!operation) return;

        const operands = value.split(operation);
        const result = calcResult(operands);
        setColor('green');
        setValue(result);
      } else {
        if (buttonValue === '+' || buttonValue === '-') {
          if (!value) return;

          if (operation) {
            const operands = value.split(operation);
            const result = calcResult(operands);
            setColor('green');
            setValue(result + buttonValue);
            setOperation(buttonValue)

            return;
          }

          setOperation(buttonValue)
        }
        setColor('');
        setValue(value + buttonValue);
      }
    }
  }

  function calcResult(arr) {
    let result;

    switch (operation) {
      case '+':
        result = Number(arr[0]) + Number(arr[1]);
        break;
      case '-':
        result = arr[0] - arr[1];
        break;
    }

    setOperation('');

    return result;
  }

  return (
    <div className={classes.calc}>
      <div className={classes.display} style={{ color: color }}>
        {value}
      </div>
      <div onClick={showValue} className={classes.buttons}>
        {buttons}
      </div>
    </div>
  );
}
