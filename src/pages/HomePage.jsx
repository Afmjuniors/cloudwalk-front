import React from 'react'
import './styled.css'
import reportImg from '../assets/report-img.png'
import grafImg from '../assets/trans-img.png'
import { goToAnalize, goToRealTimeTransactions } from '../routes/coordinator'
import { useLocation, useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <Layout>

    <div className='wrapper-homepage'>
      <div className='wrapper-link' onClick={()=>goToAnalize(navigate)}>
        <h2 className='link-title'>Analize Report</h2>
        <img className='image-link' src={reportImg} alt='links image' />
      </div>
      <div className='wrapper-link' onClick={()=>goToRealTimeTransactions(navigate)}>
        <h2 className='link-title'>Transactions</h2>
        <img className='image-link' src={grafImg} alt='links image' />
      </div>
      
    </div>
    </Layout>
  )
}

export default HomePage