import {useState} from "react";
import {useParams} from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import {motion} from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import products from "../assets/data/products";
import "./ProductDetails.css"
import ProductList from "../components/UI/ProductList";

import {useDispatch} from "react-redux";
import {cartActions} from "../redux/slices/cartSlice";
import {toast} from "react-toastify";


const ProductDetails = () => {

    const [tab, setTab] = useState('description')
    const {id} = useParams()
    const product = products.find((item) => item.id === id)
    const {imgUrl, price, productName, avgRating, reviews, shortDesc,description, category} = product

    const relatedProducts = products.filter(item => item.category === category)
    const dispatch = useDispatch()

    const addToCart = ({item}) => {
        dispatch(cartActions.addItem({
            id: item.id,
            imgUrl: item.imgUrl,
            productName: item.productName,
            price: item.price
        }))
        toast.success('Товар успішно додано в корзину')
    }

    return(
        <Helmet title={productName}>
           <CommonSection title={productName} />

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt={productName} />
                        </Col>
                        <Col lg='6'>
                            <div className="products__details">
                                <h2>{productName}</h2>
                                <div className="products__rating d-flex align-items-center gap-5 mt-3">
                                    <div>
                                        <span><i className="ri-star-s-fill" /></span>
                                        <span><i className="ri-star-s-fill" /></span>
                                        <span><i className="ri-star-s-fill" /></span>
                                        <span><i className="ri-star-s-fill" /></span>
                                        <span><i className="ri-star-half-s-fill" /></span>
                                    </div>
                                    <p> <span>rating {avgRating}</span> </p>
                                </div>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="products__price">{price} грн</span>
                                    <span className="products__category">Категорія: {category.toUpperCase()}</span>
                                </div>
                                <p className="mt-3">{shortDesc}</p>

                                <motion.button whileTap={{scale: 1.2}}
                                               className="buy_btn" onClick={addToCart}
                                >
                                    Додати в корзину</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h5 className={`${tab === "desc" ? "active__tab" : ""}`} onClick={() => setTab("desc")}>Опис</h5>
                                <h5 className={`${tab === "rev" ? "active__tab" : ""}`} onClick={() => setTab("rev")}>Відгуки ({reviews.length})</h5>
                            </div>
                            {tab === "desc"
                                    ? (<div className="tab__content mt-3"><p>{description}</p></div>)
                                    : (<div className="product__review mt-5">
                                        <div className="review__wrapper">
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li key={index} className="mt-4">
                                                            <h6 className="mb-2">Марія Карпенко</h6>
                                                            <span>{item.rating} (rating)</span>
                                                            <p>{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="review__form"></div>
                                        </div>
                                    </div>)
                            }
                        </Col>
                        
                        <Col lg='12' className="mt-3">
                            <h2 className="related__title">Вас також можуть зацікавити</h2>
                        </Col>
                        <ProductList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails;
