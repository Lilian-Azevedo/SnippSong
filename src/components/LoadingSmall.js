import React, { Component } from 'react';

export default class LoadingSmall extends Component {
  render() {
    return (
      <div className="container-loading-small">
        <div className="line-small" />
        <div className="line-small" />
        <div className="line-small" />
        <h2 className="loading-text-small">Carregando...</h2>
      </div>);
  }
}
