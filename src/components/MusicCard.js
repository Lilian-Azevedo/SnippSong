import React from 'react';
import { string } from 'prop-types';

export default class MusicCard extends React.Component {
  render() {
    const {
      trackName,
      previewUrl,
    } = this.props;
    return (
      <section className="musicTrack">
        <h3>{trackName}</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
      </section>

    );
  }
}

MusicCard.propTypes = {
  trackName: string.isRequired,
  previewUrl: string.isRequired,
};
