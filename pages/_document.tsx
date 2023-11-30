import Document, {
    Html,
    Head,
    Main,
    NextScript
  } from 'next/document'
   
  class MyDocument extends Document {
   
    render() {
      return (
        <Html lang="en">
            <Head>
            {/* favicon */}
            {/* webfonts */}
            {/* stylesheet */}
            {/* script/js */}
            </Head>
        <body className='my-body-class'>
            <Main />
            <NextScript />
            {/* < elementos adicionales para todas las paginas fuera de nuestar app> */}
          </body>
        </Html>
      )
    }
  }
   
export default MyDocument