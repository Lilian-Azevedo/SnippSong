import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  state = { musics: [], infoArtist: [] };

  componentDidMount() {
    this.getMusicsFromAlbum();
  }

  getMusicsFromAlbum = async () => {
    const { match: { params } } = this.props;
    const response = await getMusics(params.id);
    if (response) {
      this.setState({
        musics: [...response],
        infoArtist: response[0],
      });
    }
  }

  render() {
    const { musics, infoArtist } = this.state;
    const { artistName, artworkUrl100, collectionName } = infoArtist;
    musics.splice(0, 1);
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <div>
            <img
              className="photoAlbum"
              src={ artworkUrl100 }
              alt={ artistName }
            />
            <h2 data-testid="album-name">{collectionName}</h2>
            <h4 data-testid="artist-name">{artistName}</h4>
          </div>
          { musics.map((music) => (
            <div key={ Math.random() }>
              <MusicCard { ...music } />
            </div>))}
        </div>
      </div>);
  }
}

Album.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};
