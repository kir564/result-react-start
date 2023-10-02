import { Component } from 'react';
import { Information, Field, Restart } from './components';
import { initialState } from './utils';
// import styles from './App.module.css';

class App extends Component {
  constructor() {
    super();

    this.state = initialState();
  }

  changeState = (key, value) => {
    this.setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  restart = () => {
    this.setState(initialState());
  };

  render() {
    return (
      <div className="text-center">
        <Information {...this.state} />
        <Field {...this.state} changeState={this.changeState} />
        <Restart restart={this.restart} status={this.state.status}/>
      </div>
    );
  }
}

export default App;
