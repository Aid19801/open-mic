import React, { Component } from 'react';

class Pane extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {

    const { name, location } = this.props;

    return (
      <div className="pane">
        <div className="gig-night-box col-xs-6 col-sm-3">
          <div className="inner-box"> 
            
            <div className="gig-details">
              <h3>{name}</h3>
              <h4>{location}</h4>
              <div id="p-tag">
                <p>This is some blurb about the night that no one cares about</p>
              </div>
            </div>
                
          </div>
        </div>
      </div>
    );
  }
}

export default Pane;