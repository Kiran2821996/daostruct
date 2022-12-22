import React from 'react'
import InfiniteScroll from './InfiniteScroll'
import SpotLight from './SpotLight'
import { Skeleton } from 'antd';

function MainNasa() {
  return (
   <>
   <div className='section'>
   <SpotLight/>
   <InfiniteScroll/>
   <div className='skeleton'>
   <Skeleton active/>
   <Skeleton active/>
   <Skeleton active/>
   <Skeleton active/>
   </div>
   
   </div>
   
   </>
  )
}

export default MainNasa