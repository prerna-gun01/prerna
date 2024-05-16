"use client"
import React from 'react';
import Big from './components/Big';
import Small from './components/Small';
import Footer from './components/Footer';
import Style from '../css/home.module.css'
const Page = () => {
  return (
    <div>
      <div className={`${Style.bigContainer}`}>
        <Big className='' />
      </div>
      <div className={`${Style.smallContainer}`}>
        <Small className='' />
      </div>
      <Footer className='bg-[#3D3E3F]'/>
    </div>
  );
};

export default Page;
