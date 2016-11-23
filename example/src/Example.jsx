import React, { Component } from 'react';
import ReactMountStyles from '../../src/';
import CSS from './Styles';

var styles = ReactMountStyles(CSS);

class Example extends Component {
  render() {
    return (
      <div className={styles.ansh}>Anshul</div>
    )
  }
}

export default Example;
