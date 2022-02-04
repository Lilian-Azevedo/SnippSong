import React from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumCard extends React.Component {
  render() {
    const {
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
    } = this.props;
    return (
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        <section className="card">
          <div className="area-intern">
            <img
              className="photoPerson"
              src={ artworkUrl100 }
              alt={ artistName }
            />
            <h2>{artistName}</h2>
            <p>{collectionName}</p>
          </div>
        </section>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  artistName: string.isRequired,
  artworkUrl100: string.isRequired,
  collectionName: string.isRequired,
  collectionId: number.isRequired,
};
