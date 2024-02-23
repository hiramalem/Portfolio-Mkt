import HeaderLink from "./Info/HeaderLink"
import Language from "./Language/Language"
import Social from "./Social Media/Social"

export default function Navbar (){
    return(
    <>
        <nav className="HeaderNav">
            <div className="links">
                <HeaderLink tab="Home"/>
                <HeaderLink tab="Certifications"/>                
                <HeaderLink tab="Contact"/>                
            </div>
           
                <div className="socialmedia">
                    <Social link="https://twitter.com/yuukale_" img="/Images/logo.svg" alt="Logo do Twitter"/>
                    <Social link="https://www.github.com/hiramalem" img="/Images/github-mark-white.png" alt="Logo do Github"/>                        
                    <Social link="https://www.linkedin.com/in/hiramalem" img="/Images/LI-In-Bug.png" alt="Logo do Linkedin"/>
                </div>
                <div className="languages">
                    <Language img="/Images/bandeira-brasil.png" alt="Bandeira do Brasil"/>
                    <Language img="/Images/bandeira-eua.png" alt="Bandeira dos EUA"/>
                </div>
           
        </nav>
    </>
    )
}

