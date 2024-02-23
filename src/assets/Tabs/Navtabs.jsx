import Button from "./Button"
export default Navtabs


function Navtabs () {     

    return(
        
        <nav className="border flex">
            <Button tab="Copywriting"/>
            <Button tab="Growth"/>
            <Button tab="Performance" />
            <Button tab="SEO"/>
            <Button tab="Licensing"/>               
        </nav>
    )
}