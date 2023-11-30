import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'
 
export default function MyApp({ Component, pageProps }: AppProps) {

    // es perfecto para trabajar con Providers y con Context de React, para crear custom Themes, para pasar data de un lado a otro
    // otro uso es hacer un layout y aplicarlo si es comun para todas las paginas a traves del component myapp para todas las paginas que hemos exportado
    // tambien nos sirve para pasar Props adicionales 

//   return <Component {...pageProps} title={''} />

    return <Layout>
    
    <Component {...pageProps} />

    </Layout>

}