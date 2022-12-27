

const Helmet = (props) => {

    document.title = "Mamontenok" + " - " + props.title
    return(
        <div>
            {props.children}
        </div>
    )

}
export default Helmet;