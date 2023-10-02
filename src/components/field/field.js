import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fieldSelector } from '../../selectors';
import { store } from '../../store';
import { CELL_CONTENT, PLAYER, STATUS, KEY } from '../../constants';
import { checkEmptyCells, checkWin } from '../../utils';


export class Field extends Component {
  constructor(props) {
    super(props);
  }

  handleCell(index) {
    if (
      this.props.status === STATUS.WIN ||
      this.props.status === STATUS.DRAW ||
      this.props.field[index] !== PLAYER.NOBODY
    ) {
      return;
    }

    const newField = [...this.props.field];
    newField[index] = this.props.currentPlayer;
    this.props.changeState(KEY.FIELD, newField);

    if (checkWin(newField, this.props.currentPlayer)) {
      this.props.changeState(KEY.STATUS, STATUS.WIN);
      return;
    }

    if (!checkEmptyCells(newField)) {
      this.props.changeState(KEY.STATUS, STATUS.DRAW);
      return;
    }

    if (this.props.currentPlayer === PLAYER.CROSS) {
      this.props.changeState(KEY.CURRENT_PLAYER, PLAYER.NOUGHT);
    }

    if (this.props.currentPlayer === PLAYER.NOUGHT) {
      this.props.changeState(KEY.CURRENT_PLAYER, PLAYER.CROSS);
    }
  }

  render() {
    return (
      <div className='field'>
        {this.props.field.map((cellPlayer, index) => (
          <button
            key={index}
            className='cell bg-neutral-300'
            onClick={() => {
              this.handleCell(index);
            }}
          >
            {CELL_CONTENT[cellPlayer]}
          </button>
        ))}
      </div>
    );
  }
}
