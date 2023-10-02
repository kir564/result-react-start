import { Component } from 'react';
import { connect } from 'react-redux';
import { CELL_CONTENT, PLAYER, STATUS, KEY } from '../../constants';
import { checkEmptyCells, checkWin } from '../../utils';
import {
  changePlayerAction,
  changeStatusAction,
  clickCellAction,
} from '../../actions';

export class FieldContainer extends Component {
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
    this.props.dispatch(clickCellAction(newField));

    if (checkWin(newField, this.props.currentPlayer)) {
      this.props.dispatch(changeStatusAction(STATUS.WIN));
      return;
    }

    if (!checkEmptyCells(newField)) {
      this.props.dispatch(changeStatusAction(STATUS.DRAW));
      return;
    }

    if (this.props.currentPlayer === PLAYER.CROSS) {
      this.props.dispatch(changePlayerAction(PLAYER.NOUGHT));
    }

    if (this.props.currentPlayer === PLAYER.NOUGHT) {
      this.props.dispatch(changePlayerAction(PLAYER.CROSS));
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

const mapStateToProps = (state) => ({
  status: state.status,
  currentPlayer: state.currentPlayer,
  field: state.field,
});

export const Field = connect(mapStateToProps)(FieldContainer);
