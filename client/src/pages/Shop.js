import {useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Row} from "reactstrap";

import "./Shop.css"
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handlerFilter = e => {
        const filteredValue = e.target.value
        if (filteredValue === 'sofa') {
            const filteredProducts = products.filter(
                (item) => item.category === 'sofa'
            )
            setProductsData(filteredProducts)
        }
        if (filteredValue === 'chair') {
            const filteredProducts = products.filter(
                (item) => item.category === 'chair'
            )
            setProductsData(filteredProducts)
        }
        if (filteredValue === 'mobile') {
            const filteredProducts = products.filter(
                (item) => item.category === 'mobile'
            )
            setProductsData(filteredProducts)
        }
        if (filteredValue === 'watch') {
            const filteredProducts = products.filter(
                (item) => item.category === 'watch'
            )
            setProductsData(filteredProducts)
        }
    }

    const handlerSearch = e => {
        const searchTerm = e.target.value
        const searchedProducts = products.filter(
            (item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setProductsData(searchedProducts)
    }

    return (
        <Helmet title='Shop'>
            <CommonSection  title="Products" />

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='3'>
                            <div className="filter__widget">
                                <select onChange={handlerFilter}>
                                    <option>Filter by Category</option>
                                    <option value="chair">Chair</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="watch">Watch</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='3'>
                            <div className="filter__widget">
                                <select>
                                    <option>Sort by</option>
                                    <option value="asc">Ascending</option>
                                    <option value="desc">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="search__box">
                                <input type="text"
                                       placeholder="search........"
                                       onChange={handlerSearch}
                                />
                                <span><i className="ri-search-line"/></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="products__list">
                <Container>
                    <Row>
                        <Col className="products__list">
                            {
                                productsData.length === 0
                                    ? <h1 className="text-center fs-2">Товари не знайдено</h1>
                                    : <ProductList data={productsData}/>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default Shop;