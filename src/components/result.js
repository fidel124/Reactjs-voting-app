import React, {Component} from 'react';
import {connect} from 'react-redux';

class Results extends Component{	

	voteFirstPartyInPercent(){
		if(this.props.firstValue.firstParty){
			return(this.props.firstValue.firstParty / (this.props.firstValue.firstParty + this.props.secondValue.secondParty + this.props.thirdValue.thirdParty)) * 100 ;
		}else{
			return 0;
		}
	}

	voteSecondPartyInPercent(){
		if(this.props.secondValue.secondParty){
			return(this.props.secondValue.secondParty / (this.props.firstValue.firstParty + this.props.secondValue.secondParty + this.props.thirdValue.thirdParty)) * 100 ;
		}else{
			return 0;
		}
	}

	voteThirdPartyInPercent(){
		if(this.props.thirdValue.thirdParty){
			return(this.props.thirdValue.thirdParty / (this.props.firstValue.firstParty + this.props.secondValue.secondParty + this.props.thirdValue.thirdParty)) * 100 ;
		}else{
			return 0;
		}
	}

	voteFirstPartyInPercentStyle(){
		return{
			width: this.voteFirstPartyInPercent()+'%'
		}
	}

	voteSecondPartyInPercentStyle(){
		return{
			width: this.voteSecondPartyInPercent()+'%'
		}
	}

	voteThirdPartyInPercentStyle(){
		return{
			width: this.voteThirdPartyInPercent()+'%'
		}
	}

	render(){
		return(
			<div>				
				<div className="row">
					<div className="col-md-10">
						<span className="label label-danger">SDP Party: {this.voteFirstPartyInPercent().toFixed(2) + '%'}</span>
						<div className="progress progress-striped active">
							<div className="progress-bar progress-bar-danger" style={this.voteFirstPartyInPercentStyle()}></div>
						</div>
					</div>
					<div className="col-md-2">Votes: <b>{this.props.firstValue.firstParty}</b></div>
				</div>

				<div className="row">
					<div className="col-md-10">
						<span className="label label-success">Green Party: {this.voteSecondPartyInPercent().toFixed(2) + '%'}</span>
						<div className="progress progress-striped active">
							<div className="progress-bar progress-bar-success" style={this.voteSecondPartyInPercentStyle()}></div>
						</div>
					</div>					
					<div className="col-md-2">Votes: <b>{this.props.secondValue.secondParty}</b></div>
				</div>

				<div className="row">
					<div className="col-md-10">
						<span className="label label-info">Kokoomus: {this.voteThirdPartyInPercent().toFixed(2) + '%'}</span>
						<div className="progress progress-striped active">
							<div className="progress-bar progress-bar-info " style={this.voteThirdPartyInPercentStyle()}></div>
						</div>
					</div>
					<div className="col-md-2">Votes: <b>{this.props.thirdValue.thirdParty}</b></div>					
				</div>

				<div className="row">
					<div className="col-md-2 col-md-offset-10">Total: <b>{this.props.firstValue.firstParty + this.props.secondValue.secondParty + this.props.thirdValue.thirdParty}</b></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return{
    firstValue: state.partyOneReducer,    
    secondValue: state.partyTwoReducer,    
    thirdValue: state.partyThreeReducer    
  }
}

export default connect(mapStateToProps)(Results);