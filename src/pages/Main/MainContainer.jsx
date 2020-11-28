import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { setTracks } from '../../store/tracks-reducer';

class MainContainer extends React.Component {

  componentDidMount() {
    axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a5fb42f50f89f9b58dd27259ca9ae98f&format=json').then(response => {
      this.props.setTracks(response.data.tracks.track)
    })
  }

  render() {
    return (
      <Main tracks={this.props.tracks}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
      tracks: state.tracksState.tracks,
  }
}

export default connect(mapStateToProps, { setTracks })(MainContainer);