export default Card

function Card(props){

    return(

        <article className="card">
            
            <img src={props.imagem} alt={props.alttext} className="cardimg"/>                
            
            <h2>{props.titulo}</h2>    

            <p>  
                {props.descrição}
            </p>

        </article>
    )

}