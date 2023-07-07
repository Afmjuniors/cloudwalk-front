import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToAnalize, goToHomePage, goToRealTimeTransactions } from '../../routes/coordinator'
import './styled.css'

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.pathname)


    return (
        <div className='contanier'>
            <h1 className='title'>Alexandre Machado -  
           <span>
            {location.pathname==='/analize'?
            <span> Data Analize</span>:
            location.pathname==='/transactions'?
            <span> Grafic Transactions</span>:
            <span> Study Case</span>
                
            }
            </span>
             </h1>
            <div className='menu-wrapper'>
                <p className='link-header' onClick={() => goToHomePage(navigate)}>Home</p>
                <div className='spacer'></div>
                <p className='link-header' onClick={() => goToAnalize(navigate)}>Analize</p>
                <div className='spacer'></div>
                <p className='link-header' onClick={() => goToRealTimeTransactions(navigate)}>Transactions</p>
            </div>
        </div>
    )
}

export default Header