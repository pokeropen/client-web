import React from 'react'
import Seat from './Seat'
import {CardDeck} from 'reactstrap'


class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roomId : props.match.params.id
		}
	}

	componentWillMount() {
		fetch('http://localhost:8080/catalog/room/'+this.state.roomId, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((Response) => Response.json())
            .then((result) => {
                this.setState({room : result})
            })
	}


	render() {
		 const seats = []
		 const room = this.state.room || {name : "Loading", smallBlind : "", bigBlind : "", capacity : 0}
		  for (var i=1; i< room.capacity+1; i++) {
		    seats.push(<Seat seatNo={i} user="null" />)
		  }
	    return (
	      <div>
	       Room Name : {room.name} <br/>
	       Small Blind : {room.smallBlind} <br/>
	       Big Blind : {room.bigBlind} <br/>
	       <CardDeck>
	      	 {seats}
	       </CardDeck>
	      </div>
	    )
	}
}

export default Room;