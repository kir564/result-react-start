import { Component } from 'react';
import { connect } from 'react-redux';
import { STATUS, PLAYER_NAME, PLAYER_ACTION } from '../../constants';

export class InformationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info =
      this.props.status === STATUS.DRAW
        ? PLAYER_ACTION[this.props.status]
        : `${PLAYER_ACTION[this.props.status]} ${
            PLAYER_NAME[this.props.currentPlayer]
          }`;
    return <h3 className='text-2xl'>{info}</h3>;
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
