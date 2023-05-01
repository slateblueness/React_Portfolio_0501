import React from 'react'

// 부트스트랩 사용
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// 폰트어썸 아이콘 사용
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFile, faImage, faComment, faGear } from '@fortawesome/free-solid-svg-icons';

export default function NavComp() {
    return (
        <Navbar bg="light" expand="lg" fixed="bottom">
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mx-auto justify-content-center">
                    <Nav.Link className="mx-5">
                        <FontAwesomeIcon icon={faHouse} size="2x"/>
                    </Nav.Link>
                    <Nav.Link className="mx-5">
                        <FontAwesomeIcon icon={faFile} size="2x"/>
                    </Nav.Link>
                    <Nav.Link className="mx-5">
                        <FontAwesomeIcon icon={faImage} size="2x"/>
                    </Nav.Link>
                    <Nav.Link className="mx-5">
                        <FontAwesomeIcon icon={faComment} size="2x"/>
                    </Nav.Link>
                    <Nav.Link className="mx-5">
                        <FontAwesomeIcon icon={faGear} size="2x"/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
