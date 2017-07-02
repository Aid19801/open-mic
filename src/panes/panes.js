import React, { Component } from 'react';
import Pane from './pane';
import style from './style.css';

class Panes extends Component {

  render() {
    let { data } = this.props;
    console.log('data: ', data.gig1.name);
    return (
      <div className="row">
        <Pane name={data.gig1.name} location={data.gig1.location} />
        <Pane name={data.gig2.name} location={data.gig2.location} />
        <Pane name={data.gig3.name} location={data.gig3.location} />
        <Pane name={data.gig4.name} location={data.gig4.location} />
      </div>
    );
  }
}

export default Panes;