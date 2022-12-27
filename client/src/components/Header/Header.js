
import {useRef, useEffect} from "react";
import {Container, Row} from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import "./Header.css"
import {motion} from "framer-motion";
import { useSelector } from "react-redux";

const nav_links = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "/shop",
        display: "Shop"
    },
    {
        path: "/cart",
        display: "Cart"
    }
]

const Header = () => {

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()
        return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

    const navigate = useNavigate()
    const navigateToCart = () => {
        navigate('/cart')
    }

    const navigateToAddProduct = () => {
        navigate('/add')
    }

    return(
        <header className="header" ref={headerRef}>
           <Container>
               <Row>
                   <div className="nav__wrapper">
                       <div className="navigation" ref={menuRef} onClick={menuToggle}>
                           <ul className="menu">
                               {nav_links.map((item, index) =>(
                                   <li className="nav__item" key={index}>
                                       <NavLink to={item.path}
                                                className={(navClass)=>navClass.isActive ? 'nav__active' : ''}
                                       >
                                           {item.display}
                                       </NavLink>
                                   </li>
                               ))}
                           </ul>
                       </div>
                       <div className="logo">
                           <NavLink to="/">
                                   <h1>MAMONTENOK</h1>
                                   <p>Since 2016</p>
                           </NavLink>
                       </div>
                       <div className="nav__icons">
                           <motion.span whileTap={{scale: 1.5}} className="fav__icon">
                               <i className="ri-heart-line"/>
                               <span className="badge"><p>1</p></span>
                           </motion.span>
                           <motion.span whileTap={{scale: 1.5}} className="cart__icon" onClick={navigateToCart}>
                               <i className="ri-shopping-bag-line" />
                               <span className="badge"><p>{totalQuantity}</p></span>
                           </motion.span>
                           <motion.span whileTap={{scale: 1.5}} className="user__icon" onClick={navigateToAddProduct}>
                               <i className="ri-user-line" />
                           </motion.span>
                           <div className="mobile__menu">
                                <span onClick={menuToggle}>
                                    <i className="ri-menu-line"></i>
                                </span>
                           </div>
                       </div>
                   </div>
               </Row>
           </Container>
        </header>
    )
}

export default Header;