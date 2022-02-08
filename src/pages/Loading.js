import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className="container-loading">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <h2 className="loading-text">Carregando...</h2>
      </div>);
  }
}
