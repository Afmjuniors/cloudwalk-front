import React from 'react'
import Header from '../header/Header'

const Layout = (props) => {

    return (
        <div className='container'>
        
            <Header />
        
            {props.children}
        
        </div>
          )
        }
        

export default Layout