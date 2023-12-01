import React from 'react'
import Navbar from '@components/Navbar/Navbar'

import styles from './Layout.module.css'
// CSS Module. - CSS-in-JS - Post CSS

const Layout: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />
                {children}
            <footer className='container'> This is the footer </footer>

            <style jsx>{`
                {
                    .container {
                        background: pink;
                    }
                    div {
                        padding: 6vh;
                    }
                }
            `}</style>
        </div>
    )
}

export default Layout