import React from 'react';
import { string, func, bool } from 'prop-types';

export default class MusicCard extends React.Component {
  render() {
    const {
      trackName,
      favorite,
      previewUrl,
      trackId,
      onHandleFavorite,
    } = this.props;

    return (
      <section className="music-track">
        <h3>{trackName}</h3>
        <div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <input
            name="favorite"
            checked={ favorite }
            id={ trackId }
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ onHandleFavorite }
          />
          <label className="heart" htmlFor={ trackId }>
            {' '}
            Favorita
          </label>
        </div>
      </section>

    );
  }
}

MusicCard.propTypes = {
  trackName: string.isRequired,
  previewUrl: string.isRequired,
  favorite: bool.isRequired,
  trackId: string.isRequired,
  onHandleFavorite: func.isRequired,
};
