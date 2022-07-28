import Link from "next/link"
import Image from "next/dist/client/image"

import styles from '../styles/NavBar.module.css'

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokebola.png" width={30} height={30} alt="PokeNext" />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>

                <li> <Link href='/' ><label>Home</label></Link></li>
                <li> <Link href='/About'><label>Sobre</label></Link></li>
                
            </ul>
        </nav>
    )
}

export default NavBar