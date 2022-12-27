import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import {motion} from "framer-motion";

import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png"
import products from "../assets/data/products";

import "./Home.css";

import Helmet from "../components/Helmet/Helmet";
import Services from "../components/Services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";


const Home = () => {

    const [trendingProducts,setTrendingProducts] = useState([])
    const [bestSalesProducts,setBestSalesProducts] = useState([])
    const [newArrivalsProducts,setNewArrivalsProducts] = useState([])
    const [popularProducts,setPopularProducts] = useState([])

    useEffect(()=>{
        const filteredTrendingProducts = products.filter(
            (item) => item.category === "chair");
        setTrendingProducts(filteredTrendingProducts)

        const filteredBestSalesProducts = products.filter(
            (item) => item.category === "sofa");
        setBestSalesProducts(filteredBestSalesProducts)

        const filteredNewArrivalsProducts = products.filter(
            (item) => item.category === "mobile");
        setNewArrivalsProducts(filteredNewArrivalsProducts)

        const filteredPopularProducts = products.filter(
            (item) => item.category === "watch");
        setPopularProducts(filteredPopularProducts)
    }, [])

    return (
        <Helmet title={"Home"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md="6">
                            <div className="hero__content">
                                <p>Trending products in 2022</p>
                                <h2>Make your interior more modern</h2>
                                <p> Lorem..... </p>
                                <motion.button whileTap={{scale: 1.2}} className="buy_btn"><Link to="/shop">SHOP NOW</Link></motion.button>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="hero_img">
                                <img src={heroImg} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Trending products</h2>
                        </Col>
                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="clock__top-content">
                                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                            </div>
                            <Clock/>
                            <motion.button whileTap={{scale: 1.2}} className="buy_btn store__btn"><Link to="/shop">Visit Store</Link></motion.button>
                        </Col>
                        <Col lg='6' md='6' className="text-end counter__img">
                            <img src={counterImg} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-4">
                            <h2 className="section__title">New Arrivals</h2>
                        </Col>
                        <ProductList data={newArrivalsProducts} />
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-5">
                            <h2 className="section__title">Popular in Categories</h2>
                        </Col>
                        <ProductList data={popularProducts} />
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}
export default Home;