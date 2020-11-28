import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { getUserThunk } from '../../store/tracks-reducer';

class MainContainer extends React.Component {

  componentDidMount() {
    this.props.getUserThunk();
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

export default connect(mapStateToProps, { getUserThunk })(MainContainer);