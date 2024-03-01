import { Link } from "react-router-dom"

export default HeaderLink

function HeaderLink (props){
            
    return(

        <Link className="headerlink" to={props.tab} element={<props.tab/>}>
        {props.name}
        </Link>               
            
    )

}
