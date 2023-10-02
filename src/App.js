import { Component } from 'react';
import { Information, Field, Restart } from './components';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='text-center'>
        <Information />
        <Field />
        <Restart />
      </div>
    );
  }
}

export default App;
