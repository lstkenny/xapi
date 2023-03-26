import { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Collapse from "react-bootstrap/Collapse"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

export default function Navigations({ onSubmit }) {

	function toggleOptions(e) {
		e.preventDefault()
		setOptionsExpanded(!optionsExpanded)
	}

	const [optionsExpanded, setOptionsExpanded] = useState(false)

	return (
		<Navbar bg="light">
			<Form className="w-100" onSubmit={onSubmit}>
				<Container fluid>
					<Row gx={3} className="w-100">
						<Col sm={9}>
							<Form.Control name="url" aria-label="URL" placeholder="Enter endpoint URL" type="url" />
						</Col>
						<Col sm={2}>
							<Form.Select name="method" defaultValue="GET" aria-label="Method">
								<option value="GET" label="GET" />
								<option value="POST" label="POST"/>
								<option value="PUT" label="PUT"/>
								<option value="DELETE" label="DELETE"/>
							</Form.Select>
							<Form.Text>
								<a href="#moreOptions" 
									data-bs-toggle="collapse" 
									data-bs-target="#advanced" 
									aria-expanded="false" 
									aria-controls="advanced"
									onClick={toggleOptions}>
									{optionsExpanded ? "Less" : "More"} options
								</a>
							</Form.Text>
						</Col>
						<Col sm={1}>
							<Button variant="secondary" type="submit">
								Request
							</Button>
						</Col>
					</Row>
					<Collapse in={optionsExpanded}>
						<Row>
							<Tabs defaultActiveKey="Payload" className="mb-3 px-2">
								<Tab eventKey="Payload" title="Payload">
									<Form.Control as="textarea" name="payload" className="font-monospace" rows="8" placeholder="Enter payload JSON"></Form.Control>
								</Tab>
								<Tab eventKey="Authorization" title="Authorization">
									<Tabs defaultActiveKey="Bearer" className="mb-3">
										<Tab eventKey="Bearer" title="Bearer">
											<Form.Control name="bearer_token" placeholder="Enter bearer token" />
										</Tab>
										<Tab eventKey="Basic" title="Basic">
											<Row>
												<Col>
													<Form.Control name="basic_user" placeholder="Enter username" />
												</Col>
												<Col>
													<Form.Control name="basic_password" placeholder="Enter password" />
												</Col>
											</Row>
										</Tab>
									</Tabs>
								</Tab>
							</Tabs>
						</Row>
					</Collapse>
				</Container>
			</Form>
		</Navbar>
	)
}