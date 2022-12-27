import React, {useState} from "react";
import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import {Link, useNavigate} from "react-router-dom"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "./Login.css"
import {signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth, db, storage} from "../firebase.config";
import {toast} from "react-toastify";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const signIn = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            setLoading(false)
            toast.success('Авторизація пройшла успішно')
            navigate('/checkout')
        } catch (error) {
            setLoading(false)
            toast.error("Виникла помилка")
        }
    }

    return (
        <Helmet title="Авторизація">
            <CommonSection title="Авторизація" />
            <section>
                <Container>
                    <Row>
                        {
                            loading
                            ? <Col lg='12' className="text-center"><h5 className="fw-bold">Loading......</h5></Col>
                            : <Col lg='6' className="mt-auto text-center">
                                    <h3 className="fs-4 fw-bold mb-2">Авторизація</h3>
                                    <Form className="auth__form" onSubmit={signIn}>
                                        <FormGroup className="form__group">
                                            <input type="email" placeholder="Введіть свій email"
                                                   value={email} onChange={e => setEmail(e.target.value)}
                                            />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                            <input type="password" placeholder="Введіть свій пароль"
                                                   value={password} onChange={e => setPassword(e.target.value)}
                                            />
                                        </FormGroup>
                                        <button type="submit" className="buy_btn login__btn">Увійти</button>
                                        <p className="">У Вас немає аккаунту? {"  "}
                                            <Link to="/signup">Створити аккаунт</Link></p>
                                    </Form>
                                </Col>
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default Login;