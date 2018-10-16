import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://raw.githubusercontent.com/effexts/ClubDeportivo/master/src/api-off/data.json?token=ABtA_zt00YGFz3fzVnfKV1Du_p4_ai3rks5bzxuMwA%3D%3D')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}
export default AlbumList;
