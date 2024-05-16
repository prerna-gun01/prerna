"use client"
import React from 'react';
import Big from './components/Big';
import Small from './components/Small';
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
    </div>
  );
};

export default Page;
