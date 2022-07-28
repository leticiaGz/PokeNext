import NavBar from "./NavBar";
import Footer from "./Footer";

import Head from "next/dist/shared/lib/head";

function Layout({children}){
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <title>PokeNext</title>
        </Head>
        <NavBar/>
        <main className="main-container">{children}</main>
        <Footer/>
        
        </>
    )
}

export default Layout