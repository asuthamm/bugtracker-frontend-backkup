import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    // console.log(e.target.value)
    this.props.getSearchStr(e.target.value)
  }
 
  render() {
    // console.log(this.props)
    return (
      <div className="ui container category search" align="center">
        <br/>
        <div className="ui left icon input">
          <i className="search icon"></i>
          <input className='prompt' onChange={this.handleChange} type="text"  placeholder="project name search" value={this.props.searchTerm}/>
        </div>
        <br/><br/>
      </div>
    );
  }

}

export default SearchBar;

