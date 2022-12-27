import React from "react";
import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "./CheckOut.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CheckOut = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)


    return (
        <Helmet title="Оформлення замовлення">
           <CommonSection title="Оформлення замовлення" />
           <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className="mb-4 fw-bold">Інфомація</h6>
                            <Form className="billing__form">
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Введіть своє ім'я"/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="email" placeholder="Введіть свій email"/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="tel" placeholder="Введіть свій номер телефону"/>
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Оберіть відділення Нової пошти"/>
                                </FormGroup>
                            </Form>

                        </Col>
                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Всього товарів: <span>{totalQty} шт</span></h6>
                                <h6>Загальна вартість: <span>{totalAmount}</span></h6>
                                <h6><span>Доставка:<br/> Безкоштовна доставка</span> <span>0</span></h6>
                                <h4>Total: <span>{totalAmount}</span></h4>
                                <button className="buy_btn login__btn w-100"><Link to="/login">Place an order</Link></button>
                            </div>

                        </Col>
                    </Row>
                </Container>
           </section>
        </Helmet>
    )
}
export default CheckOut;