import React from 'react'
import Layout from '../components/layout/Layout'
import report from '../assets/analysis-report.pdf'
import './styled.css'

const Analize = () => {
  return (
    <Layout>

      <div className='wrapper'>
        <embed src={report} type='application/pdf' width='100%' height='100%' />
      </div>
    </Layout>
  )
}

export default Analize