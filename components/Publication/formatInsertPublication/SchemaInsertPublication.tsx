'use client'
import React, { MutableRefObject, use, useEffect, useRef } from 'react'
import HeaderInsertPublication from './HeaderInsertPublication'
import FooterInsertPublication from './FooterInsertPublication';
import InsertComment from '../particles/InsertComment';

import { useState } from 'react';
import ModalUtil from '../../../utils/ModalUtil';
import InsertPublication from '../particles/InsertPublication';

type Props = {
  setRenderData: React.Dispatch<React.SetStateAction<boolean>>,
  renderData:boolean
}

const SchemaInsertPublication = (props: Props) => {
  const {setRenderData, renderData} = props;
  const [data, setData] = useState(false);
  const [render, setRender] = useState(false);
  
  


  return (
    <>
      <div className='p-3'>
      {/* <HeaderInsertPublication/> */}
        <InsertPublication data={data} setData={setData} />
        <ModalUtil data={data} setData={setData} setRenderData={setRenderData} renderData={renderData}/>
        {/* <FooterInsertPublication/> */}
      </div>
      
      
    </>
  )
}

export default SchemaInsertPublication