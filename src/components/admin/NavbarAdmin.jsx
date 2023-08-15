import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import AddUser from './AddUser'
import AddCategory from './AddCategory';
import AddBrand from './AddBrand';
import UpdateUser from './UpdateUser';
import UpdateBrand from './UpdateBrand';
import UpdateCategory from './UpdateCategory';
import DeleteCategory from './DeleteCategory';
import DeleteBrand from './DeleteBrand';
import DeleteUser from './DeleteUser';
import showUsers from './ShowUsers';
import { Link } from 'react-router-dom';
import './app';
import './style.css'
import { PiSignOut } from "react-icons/pi";
import ProfileForm from "../../components/ProfileForm";
import { ButtonGroup } from "react-bootstrap";

function NavbarAdmin() {
	const logOutUser = () => {
		loginDispatch({ type: "LOGOUT_USER" });
	}
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="white" sticky="top" className="custom-navbar">
				<Container>
					<Navbar.Brand href="/" className='nav-brand text-success'>ShopSmart</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<Link className="text-decoration-none mx-2 nav-color" to="/admin">
									Home
								</Link>
							</Nav.Link>
							<NavDropdown title="User" id="collapsible-nav-dropdown" className="d-flex">
								<NavDropdown.Item href="#action/3.1"><AddUser /></NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2"><UpdateUser /></NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3"><DeleteUser /></NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin/showusers">View All</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Brand" className='mx-2' id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1"><AddBrand /></NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									<UpdateBrand />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3"><DeleteBrand /></NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									<Link to='/admin/showbrands' className="text-decoration-none mx-2 nav-color">View All</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Category" className='' id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1"><AddCategory /></NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									<UpdateCategory />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3"><DeleteCategory /></NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									<Link to='/admin/showcategory' className='text-decoration-none ms-3 text-dark'>View All</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Order" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Add Order</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Update Order
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Delete Order</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin/orders" className="text-decoration-none mx-2 nav-color">
									View All
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						{/* <Form inline>
							<Row>
								<Col xs="auto">
									<Form.Control
										type="text"
										placeholder="Search"
										className="mt-1 p-2 pb-2 m-0"
									/>
								</Col>
								<Col xs="auto">
									<Button type="submit" className='custom-button px-3 d-flex align-items-center'><FaSearch /></Button>
								</Col>
							</Row>
						</Form> */}
						<ButtonGroup aria-label="Basic example">
							<ProfileForm />
							<Button variant="light" className="custom-button d-flex align-items-center gap-2" onClick={logOutUser}>
								<PiSignOut className="navbar-icon text-white" />
								<span className="d-none d-lg-inline text-white"> Sign Out</span>
							</Button>
						</ButtonGroup>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarAdmin;