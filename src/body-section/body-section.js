import React, { Component } from 'react';
import Panes from '../panes/panes';
import styles from './style.css';

class BodySection extends Component {

  constructor() {
    super();
    this.state = {
      firstRow: {
        gig1: {},
        gig2: {},
        gig3: {},
        gig4: {},
      },
      secondRow: {
        gig1: {},
        gig2: {},
        gig3: {},
        gig4: {}
      }
    }
  }

  componentWillMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => data.json()
        .then((dataJSON) => dataJSON)
        ).then((useableData) => this.setState({
          firstRow: {
            gig1: {
              name: useableData[0].name,
              location: useableData[0].address.city
            },
            gig2: {
              name: useableData[1].name,
              location: useableData[1].address.city
            },
            gig3: {
              name: useableData[2].name,
              location: useableData[2].address.city
            },
            gig4: {
              name: useableData[3].name,
              location: useableData[3].address.city
            }
          },
          secondRow: {
            gig1: {
              name: useableData[4].name,
              location: useableData[4].address.city
            },
            gig2: {
              name: useableData[5].name,
              location: useableData[5].address.city
            },
            gig3: {
              name: useableData[6].name,
              location: useableData[6].address.city
            },
            gig4: {
              name: useableData[7].name,
              location: useableData[7].address.city
            }
          }
        }))
    }
    
  render() {
    
    let { firstRow, secondRow } = this.state;


    return (
      <div>
        <Panes data={firstRow}/>
        
          <div className="container">
            <div className="row">
              <div className="jumbotron promotron">
                <h1>London Gigs</h1>
              </div>
            </div>
          </div>

        <Panes data={secondRow}/>


      </div>
    );
  }
}

export default BodySection;