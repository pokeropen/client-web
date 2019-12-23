import React from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username : null,
			password : null
		}

		this.setUserName = this.setUserName.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.login = this.login.bind(this);
	}

	setUserName(event) {
		this.setState({ username : event.target.value});
	}

	setPassword(event) {
		this.setState({ password : event.target.value});
	}

	login() {
		fetch('http://localhost:8080/api/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (!result.sucess)
                    alert('Invalid Username or password');
                else
                    this.props.history.push("/Dashboard");
            })

	}

	render() {
		return (
			 <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div className="row" className="mb-2 pageheading">
                                                <div className="col-sm-12 btn btn-primary">
                                                    Login
                            					 </div>
                                            </div>
                                            <InputGroup className="mb-3">
                                                <Input type="text" onChange={this.setUserName} placeholder="Enter username" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" onChange={this.setPassword} placeholder="Enter Password" />
                                            </InputGroup>
                                            <Button onClick={this.login} color="success" block>Login</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
	}
}

export default Login;