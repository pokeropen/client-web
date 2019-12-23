import React from "react"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			rooms : []
		}
	}

	componentWillMount() {
		fetch('http://localhost:8080/catalog/room', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                this.setState({rooms : result})
                if (result.Status == 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
	}

	openRoom(roomId) {
        this.props.history.push("/room/"+roomId);
	}

	render() {
	    return (
	      <div>
	        <h1>Room List</h1>
	        <ul>
	          {this.state.rooms.map(room => {
	            return <li key={room.id}>
               		 <Link to={'/room/'+room.id} className="nav-link">{room.name}</Link></li>
	          })}
	        </ul>
	      </div>
	    )
	}
}

export default Dashboard;