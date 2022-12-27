import "./Footer.css";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link, NavLink} from "react-router-dom";

const Footer = () => {

    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' className="mb-4">
                        <div className="logo text-white">
                            <NavLink to="/">
                                <h1 className="text-white">MAMONTENOK</h1>
                                <p className="mt-1">Since 2016</p>
                            </NavLink>
                        </div>
                        <p className="footer__text mt-4">
                            Lorem....
                        </p>
                    </Col>
                    <Col lg='3' className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0"><Link to="/">Chair</Link></ListGroupItem>
                                <ListGroupItem className="ps-0 border-0"><Link to="/">Sofa</Link></ListGroupItem>
                                <ListGroupItem className="ps-0 border-0"><Link to="/">Mobile</Link></ListGroupItem>
                                <ListGroupItem className="ps-0 border-0"><Link to="/">Watch</Link></ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Usefull Links</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0"><Link to="/shop">Shop</Link></ListGroupItem>
                                <ListGroupItem className="ps-0 border-0"><Link to="/cart">Cart</Link></ListGroupItem>
                                <ListGroupItem className="ps-0 border-0"><Link to="/login">Login</Link></ListGroupItem>
                                <ListGroupItem className="ps-0 border-0"><Link to="#">Privacy Policy</Link></ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
                            <ListGroup className="mb-3 footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>м. Миколаїв, вул. 12-а Поздовжня, 51</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+380970500357</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <a href="#" className="m-3"><span><i className="ri-instagram-line"></i></span></a>
                                    <a href="#" className="m-3"><span><i className="ri-facebook-box-fill"></i></span></a>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className="footer__copyright">Copyright 2022 developed by Me. All right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;