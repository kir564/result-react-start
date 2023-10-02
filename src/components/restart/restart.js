import { Component } from 'react';
import { useDispatch } from 'react-redux';
import { STATUS } from '../../constants';
import { handleRestart } from '../../handlers';
export class Restart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isValid =
      this.props.status === STATUS.DRAW || this.props.status === STATUS.WIN;

    return (
      <button
        className={`button pl-3 pr-3 bg-neutral-300 ${
          isValid && 'bg-green-300'
        }`}
        onClick={this.props.restart}
      >
        Начать заново
      </button>
    );
  }
}
