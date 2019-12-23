import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';

class Seat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			occupied : false,
			user : props.user
		}
	}

	join() {
		this.setState({
			occupied : true,
			user : "User " + new Date().getTime()
		});
	}

	render() {

		const isOccupied = this.state.occupied;
		const name = isOccupied ? this.state.user : "";
		return (
	      <Card>
	        <CardImg top width="100%" src="/256x256.svg" alt="User" />
	        <CardBody>
			     {isOccupied ? <CardText>{name}</CardText> : <Button variant="primary" onClick={()=>this.join()} >Join</Button>}
	        </CardBody>
	      </Card>	
		);
	}
}

export default Seat;