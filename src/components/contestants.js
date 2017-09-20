import React, { Component } from 'react';
import './../App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {votePartyOne, votePartyTwo, votePartyThree} from './../actions/index';

class Contestants extends Component {
     
  render() {      
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>Test App on Finnish online voting</h2>
          <h6>developed by: <b>Fidel</b></h6>
          <h4>Vote your choose between these political parties</h4>
          <br />

          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="sdplogo.png" height="96" alt="sdplogo logo" onClick={this.props.partyOneClick}></img>
            </div>
            <div className="col-xs-2">
              <img src="greenlogo.png" height="96" alt="greenlogo logo" onClick={ this.props.partyTwoClick}></img>
            </div>
            <div className="col-xs-2">
              <img src="Kokooslogo.png" height="96" alt="Kokooslogo logo" onClick={this.props.partyThreeClick}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {    
      partyOneClick: bindActionCreators(votePartyOne, dispatch),    
      partyTwoClick: bindActionCreators(votePartyTwo, dispatch),    
      partyThreeClick: bindActionCreators(votePartyThree, dispatch)    
  };
}

export default connect(null, mapDispatchToProps )(Contestants);

