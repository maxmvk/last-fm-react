import React from 'react';
import { connect } from 'react-redux';
import { getArtistInfoThunk } from '../../store/artist-reducer';
import Artist from './Artist';
import { withRouter } from 'react-router-dom';

class ArtistContainer extends React.Component {

  componentDidMount() {
    let artistName = this.props.match.params.id;
    this.props.getArtistInfoThunk(artistName);
  }

  render() {
    return (
      <Artist info={this.props.info}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    info: state.artistState.info,
  }
}

let withUrlDataContainerComponent = withRouter(ArtistContainer)

export default connect(mapStateToProps, { getArtistInfoThunk })(withUrlDataContainerComponent);