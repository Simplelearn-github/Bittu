import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React from 'react'



const Home = () => {
  return (
    <div >
      <div>
      
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Cars Page</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Couses">ReactCourse</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div>
     <Carousel>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/1-0-home/page-properties/rrmc-homepage-ghost-share-image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <h1>Rolls Royce</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgd.aeplcdn.com/0x0/cw/ec/37095/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914.jpg?wm=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <h1>BMW</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mercedes-benz-concepts-161110101015115021600x1060.jpg?itok=OF_dSiT7"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
           mercedes
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Home