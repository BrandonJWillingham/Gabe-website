import Image from "next/image";
import Navigation from "@/app/components/Nav";
import ContactForm from "../components/Contact";
import styles from './contactPage.module.css'

export default function Contact(){

    return(
        <main className={styles.Contact}>
            <div style={{marginBottom:"10px"}}>
                <Navigation/> 
            </div>
           
        <div className={styles.flexContainer} style={{display:"flex",width:"100%",height:"90vh",padding:"0px clamp(0px,1vw,30px)"}}>
            <div className={styles.contactParentDiv} style={{position:"relative",paddingLeft:"8%",display:"flex", alignSelf:"center",flexDirection:"column"}}>
                <div className={`${styles.sub_text} text-[clamp(1.35rem,2.5vw,2.5rem)]`} >
                    <h3 className={styles.linear_gradient}data-text="Youre one step away">
                        You're one step away
                    </h3>
                    <h3 className={styles.linear_gradient} style={{marginLeft:"4vw"}} data-text="From training like a champ">
                        From training like a champ
                    </h3>
                </div>
                <p className={styles.CTA_subtext}style={{}} >
                    Fill out the form below and I will reach out to you within 24 hours to set up your next appointment
                </p>
                <div className={styles.contactForm} >
                    <ContactForm/>
                </div>
            </div>
            
            <div className={styles.imgDiv} style={{position:"relative",borderRadius:"10px",boxShadow:"0 0 4px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Image
                src={"/Gabe-heavybag.jpg"}
                fill
                style={{objectFit:"cover",zIndex:-1,borderRadius:"10px",objectPosition:"0px 10%"}} 
                alt="Photo of Gabriel Jospeh wearing a padded jockstrap, gloves and a mouth guard getting ready to hit a heavy bag"
                />
                <div className={`${styles.sub_text_mobile} text-[clamp(1.35rem,2.5vw,2.5rem)]`} >
                    <h3 className={styles.linear_gradient_mobile}data-text="You're one step away">
                        You're one step away
                    </h3>
                    <h3 className={styles.linear_gradient_mobile} style={{paddingLeft:"4vw"}} data-text="From training like a champ">
                        From training like a champ
                    </h3>
                    <p className={styles.CTA_subtext_mobile}style={{}} >
                     Fill out the form below and I will reach out to you within 24 hours to set up your next appointment
                    </p>
                </div>    
            </div>
            
        </div>
        </main>
    )
}