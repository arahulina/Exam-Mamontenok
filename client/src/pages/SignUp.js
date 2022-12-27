import React, {useState} from "react";
import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import {Link, useNavigate} from "react-router-dom"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "./Login.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from "../firebase.config"
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import {storage} from "../firebase.config"
import {toast} from "react-toastify";
import {setDoc, doc} from "firebase/firestore";
import {db} from "../firebase.config"



const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [file, setFile] = useState(null)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async(e) => {
      e.preventDefault()
      setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            const storageRef = ref(storage, `images/${Date.now() + userName}`)
            const uploadTask = uploadBytesResumable(storageRef, file )
            uploadTask.on((error)=>{toast.error(error.message)},
                ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURl) => {
                    await updateProfile(user ,{
                        displayName: userName,
                        photoURL: downloadURl,
                    });
                    await setDoc(doc(db, "user", user.uid), {
                        uid: user.uid,
                        displayName: userName,
                        email,
                        photoURl: downloadURl
                    })

                })}
            )

            setLoading(false)
            toast.success('Аккаунт створено успішно')
            navigate('/login')
        } catch (error) {
            setLoading(false)
            toast.error("Виникла помилка")
        }
    }

    return (
        <Helmet title="Реєстрація">
            <CommonSection title="Реєстрація" />
            <section>
                <Container>
                    <Row>
                        {
                            loading
                                ? (<Col lg='12' className="text-center"><h5>Loading.....</h5></Col>)
                                : (<Col lg='6' className="mt-auto text-center">
                                    <h3 className="fs-4 fw-bold mb-2">Реєстрація</h3>
                                    <Form className="auth__form" onSubmit={signup}>
                                        <FormGroup className="form__group">
                                            <input type="text" placeholder="Введіть своє ім'я"
                                                   value={userName} onChange={e => setUserName(e.target.value)}
                                            />
                                        </FormGroup>
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
                                        <FormGroup className="form__group">
                                            <input type="file" onChange={e => setFile(e.target.files[0])}/>
                                        </FormGroup>
                                        <button type="submit" className="buy_btn login__btn">Зарєструватися</button>
                                        <p className="">У Вас вже є аккаунт? {"  "}
                                            <Link to="/login">Авторизуйтеся</Link></p>
                                    </Form>
                                </Col>)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default SignUp;