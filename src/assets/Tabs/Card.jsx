export default Card

function Card(props){

    return(

        <article className="card">
            
            <div>
                <img src={props.imagem} alt={props.alttext} width="100px"/>                
            </div>
            <div>
                <h2>{props.titulo}</h2>                    
                <ul>
                    <li>{props.descrição}</li>                                               
                </ul>
            </div>
            
        </article>
    )

}