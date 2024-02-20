import { Link } from "react-router-dom"

export default Social

function Social (props) {

    return(

        <a href={props.link}>
            <img className="sociallogo" target="_blank" src={props.img} alt={props.alt}/> 
        </a>  

        

    )

}