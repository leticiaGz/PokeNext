import Image from "next/dist/client/image"
import styles from '../styles/About.module.css'

function About(){

    return(
   

        <div className={styles.container}>
            
        <h1>Sobre o projeto</h1>

        <p>Projeto feito em Next.js, consumindo API de pokemos</p>

        <Image src="/images/Eevee.png"
            width={250}
            height={250}
            alt="Pokemon Eevee" />

        </div>
        
   
    )

}

export default About