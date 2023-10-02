import { Component } from 'react';
import { useSelector } from 'react-redux';
import { STATUS, PLAYER_NAME, PLAYER_ACTION } from '../../constants';
import { statusSelector, currentPlayerSelector } from '../../selectors';

export class Information extends Component {
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
    return <h3>{info}</h3>;
  }
}
