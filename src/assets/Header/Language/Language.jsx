import { Link } from "react-router-dom"

export default Language

function Language (props) {

    return(

        <Link to={props.img} element={<props.img/>}>
            <img className="imglanguage" src={props.img} alt={props.alt}/> 
        </Link>

    )

}