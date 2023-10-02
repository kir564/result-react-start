import { Component } from 'react';
import { connect } from 'react-redux';
import { restartAction } from '../../actions';
import { STATUS } from '../../constants';

export class RestartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isValid =
      this.props.status === STATUS.DRAW || this.props.status === STATUS.WIN;

    return (
      <button
        className={`button pl-3 pr-3  ${
          isValid ? 'bg-green-300' : 'bg-neutral-300'
        }`}
        onClick={this.props.restart}
      >
        Начать заново
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
});

const mapDispatchToProps = (dispatch) => ({
  restart: () => dispatch(restartAction()),
});

export const Restart = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestartContainer);
