import React from 'react';
import { string, func, bool, number } from 'prop-types';

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
          <label className="heart-label" htmlFor={ trackId }>
            <input
              name="favorite"
              checked={ favorite }
              id={ trackId }
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              onChange={ onHandleFavorite }
            />
         {/*    {' '}
            Favorita */}
            <div className="heart" />
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
  trackId: number.isRequired,
  onHandleFavorite: func.isRequired,
};
