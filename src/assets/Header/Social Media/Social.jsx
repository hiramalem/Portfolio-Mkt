import { Link } from "react-router-dom"

export default Social

function Social (props) {

    return(

        <a href={props.link} target="_blank">
            <img className="sociallogo" src={props.img} alt={props.alt}/> 
        </a>        

    )

}