export default Card

function Card(props){

    return(

        <article className="card">
            <a href={props.link} target="_blank">
                <img src={props.imagem} alt={props.alttext} className="cardimg"/>                                
            </a>
            <h2>{props.titulo}</h2>
            <p>  
                {props.descrição}
            </p>
            
        </article>
    )

}