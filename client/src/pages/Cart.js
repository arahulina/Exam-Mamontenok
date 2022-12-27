import React from "react";
import "./Cart.css"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import {Container, Row, Col} from "reactstrap";
import {motion} from "framer-motion";
import {cartActions} from "../redux/slices/cartSlice";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";




const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <Helmet title={"Корзина"}>
           <CommonSection title={"Корзина"}/>
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0
                                    ? (<h2> У корзині товари відсутні</h2>)
                                    : (<table className="table border">
                                    <thead>
                                    <tr>
                                        <th>Зображення</th>
                                        <th>Назва товару</th>
                                        <th>Ціна</th>
                                        <th>Кількість</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <Tr item={item} key={index} />
                                        ))
                                    }
                                    </tbody>
                                </table>)
                            }
                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className="d-flex align-items-center justify-content-between">Загальна сума:
                                    <span className="fs-4 fw-bold">{totalAmount} грн</span>
                                </h6>

                            </div>
                            <p>Замовлення від 1000грн доставляються безкоштовно</p>
                            <div>
                                <button className="buy_btn w-100"><Link to="/checkout">Оформити замовлення</Link></button>
                                <button className="buy_btn w-100"><Link to="/shop">Продовжити покупки</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({item}) =>{

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return (
        <tr>
            <td><img src={item.imgUrl} alt=""/></td>
            <td>{item.productName}</td>
            <td>{item.price} грн</td>
            <td>{item.quantity}</td>
            <td><motion.i className="ri-delete-bin-line"
                          onClick={deleteProduct}
                          whileTap={{scale:1.2}}/></td>
        </tr>
    )
}
export default Cart;