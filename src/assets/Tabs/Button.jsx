import { Link } from "react-router-dom"

export default Button

function Button (props){
            
    return(

        <Link className="button" to={props.tab} element={<props.tab/>}>
        {props.tab}
        </Link>               
            
    )

}

