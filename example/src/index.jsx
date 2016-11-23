import React from 'react';
import ReactDOM from 'react-dom';
import ReactMountStyles from '../../src/';
import Example from './Example';

class Ansh extends React.Component {

  render() {
    return (
      <div>
        <Example/>
        <Example/>
      </div>
    );
  }
}

ReactDOM.render(<Ansh/>, document.querySelector('#app'));
