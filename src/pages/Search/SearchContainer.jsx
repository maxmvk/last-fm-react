import React from 'react';
import { connect } from 'react-redux';
import { getSearchResultThunk } from '../../store/search-reducer';
import Search from './Search';

class SearchContainer extends React.Component {

  handleSubmit = (event, data ) => {
    event.preventDefault()
    this.props.getSearchResultThunk(data);
  }

  render() {
    console.log(this.props)
    return (
      <Search result={this.props.result} handleSubmit={this.handleSubmit}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    result: state.searchState.result,
  }
}

export default connect(mapStateToProps, { getSearchResultThunk })(SearchContainer);