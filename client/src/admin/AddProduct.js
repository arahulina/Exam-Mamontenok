import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Row, Form, FormGroup} from "reactstrap";
import {toast} from "react-toastify";


const AddProduct = () => {

    const onSubmit = function (data) {

        fetch('http://localhost:3333/api' + '/product',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if(res.status !==201) {
                    toast.error("Ошибка")
                    return null
                }
                return res.json()
            })
            .then(data => {
                if(data === null) {
                    //console.log("Я ничего не делаю")
                    return
                }
                toast.success("Вы успешно создали объявление")
                console.log(data)
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })

    }


    return(
        <Helmet title="Створення товару">
            <CommonSection title="Створення товару"/>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h4 className="mb-4">Add product</h4>
                            <Form onSubmit={onSubmit}>
                                <FormGroup className="form__group">
                                    <span>Назва товару</span>
                                    <input type="text" placeholder="" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <span>Короткий опис</span>
                                    <input type="text" placeholder="" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <span>Опис</span>
                                    <input type="text" placeholder="" />
                                </FormGroup>
                                <div className="">
                                    <FormGroup className="form__group">
                                        <span>Ціна</span>
                                        <input type="number" placeholder="" />
                                    </FormGroup>
                                    <FormGroup className="form__group">
                                        <span>Категорія</span>
                                        <select>
                                            <option value="sofa">Sofa</option>
                                            <option value="chair">Chair</option>
                                            <option value="mobile">Mobile</option>
                                            <option value="watch">Watch</option>
                                        </select>
                                    </FormGroup>
                                </div>
                                <div>
                                    <FormGroup className="form__group">
                                        <span>Зображення товару</span>
                                        <input type="file" />
                                    </FormGroup>
                                </div>

                                <button className="buy_btn"> Додати товар</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default AddProduct;