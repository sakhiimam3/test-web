import React from 'react'
import OurVedio from '../component/ourvedio'
import Report from '../component/report'
import Metadata from '../component/metaData'

const Branches:React.FC = () => {
  return (
    <>
    <Metadata title="Branches"/>
       <OurVedio />
       <Report />
    </>
  )
}

export default Branches