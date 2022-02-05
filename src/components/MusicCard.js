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
      <section className="musicTrack">
        <h3>{trackName}</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor={ trackId }>
          {' '}
          Favorita
          <input
            name="favorite"
            checked={ favorite }
            id={ trackId }
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ onHandleFavorite }
          />
        </label>
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
