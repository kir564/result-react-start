import { Component } from 'react';
import { useDispatch } from 'react-redux';
import { handleRestart } from '../../handlers';
export class Restart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.restart}>Начать заново</button>;
  }
}
