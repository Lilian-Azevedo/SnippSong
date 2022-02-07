import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFoundAlbum from './NotFoundAlbum';

export default class NotFound extends Component {
  render() {
    return (
      <div data-testid="page-not-found" className="page-not-found">
        <Link to="/search">
          <button type="button">Voltar para busca</button>
        </Link>
        <NotFoundAlbum />
      </div>);
  }
}
