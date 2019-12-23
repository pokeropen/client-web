import React from 'react'
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Registration extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username : null,
			firstName : null,
			lastName : null,
			password: null
		}

		this.setUserName = this.setUserName.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.setFirstName = this.setFirstName.bind(this);
		this.setLastName = this.setLastName.bind(this);
		this.register = this.register.bind(this);
	}

	setUserName(event) {
		this.setState({ username : event.target.value});
	}

	setPassword(event) {
		this.setState({ password : event.target.value});
	}

	setFirstName(event) {
		this.setState({ firstName : event.target.value});
	}

	setLastName(event) {
		this.setState({ lastName : event.target.value});
	}

	register() {
		alert("Register User \n" +
			this.state.username + "\n"+
			this.state.firstName + "\n"+
			this.state.lastName + "\n"+
			this.state.password + "\n"
			)
	}

	render() {

		return (
		 <div className="app flex-row align-items-center">
	        <Container>
	          <Row className="justify-content-center">
	            <Col md="9" lg="7" xl="6">
	              <Card className="mx-4">
	                <CardBody className="p-4">
	                  <Form>
	                    <div className="row" className="mb-2 pageheading">
	                      <div className="col-sm-12 btn btn-primary">
	                        Sign Up
	                        </div>
	                    </div>
	                    <InputGroup className="mb-3">
	                      <Input type="text"  onChange={this.setUserName} placeholder="Enter UserName" />
	                    </InputGroup>
	                    <InputGroup className="mb-3">
	                      <Input type="text"  onChange={this.setFirstName} placeholder="Enter firstName" />
	                    </InputGroup>
	                    <InputGroup className="mb-3">
	                      <Input type="text"  onChange={this.setLastName} placeholder="Enter lastName" />
	                    </InputGroup>
	                    <InputGroup className="mb-3">
	                      <Input type="password"  onChange={this.setPassword} placeholder="Enter Password" />
	                    </InputGroup>
	                    <Button  onClick={this.register}  color="success" block>Create Account</Button>
	                  </Form>
	                </CardBody>
	              </Card>
	            </Col>
	          </Row>
	        </Container>
	      </div>
		);
	}
}

export default Registration;