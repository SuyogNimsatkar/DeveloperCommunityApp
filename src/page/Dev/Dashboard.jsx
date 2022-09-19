import React from 'react'

import Dashquery from '../../component/Dashquery';
import DevNav from '../../component/DevNav';


export default function Dashboard() {
  return (
    <>
      <div>
        <DevNav/>
        <br/><br/><br/>
        <Dashquery/>
      </div>
   </>
  )
}
