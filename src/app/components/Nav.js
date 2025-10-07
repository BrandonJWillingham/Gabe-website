import { SlSocialInstagram  } from "react-icons/sl";
import styles from "./Components.module.css"
export default function Navigation(){

    return(
        <div className={styles.nav} style={{width:"100%",display:"flex", justifyContent:"space-between",paddingTop:"10px"}}>
            <a href="/" style={{paddingLeft:"10px",color:"white"}}>
                <p style={{fontWeight:""}}>
                    Home
                </p>    
            </a>
            <div style={{display:"flex",position:"relative"}}>
                <a href="/Contact"style={{marginRight:"25px",color:"white"}}>
                    <p>
                        Contact
                    </p>
                </a>
                <a href="https://www.instagram.com/gabe_joseph/" style={{marginRight:"15px"}}>
                    <SlSocialInstagram style={{position: "relative",top: "50%",left: "50%",transform: "translate(-50%, -50%)",width: "clamp(10px, 3vw, 25px)",height: "clamp(10px, 3vw, 25px)"}}  color="#ffffffff"/>
                </a>
            </div>
            
        </div>
    )
}