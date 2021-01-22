import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onInputChange(e) {
    this.setState({term:e.target.value})
  }

  onFormSubmit(e) {
    e.preventDefault();
    // Calling action creator
    this.props.fetchWeather(this.state.term);
    // Clear search input and component rerenders
    this.setState({term: ''});
  }

  render() {
    return (
      <div>
        <form onSumbmit={this.onFormSubmit} className="input-group">
          <input 
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

// Null says container doesn't care about state
export default connect(null, mapDispatchToProps)(SearchBar);