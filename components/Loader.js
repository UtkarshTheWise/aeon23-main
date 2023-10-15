'use client';
import React from 'react'
import classNames from "classnames";
import { useState } from "react";


export default function Loader() {
  const [isloading, setLoading] = useState(false);
  
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <div className={classNames({
        "bg-[rgb(242,238,237)] fixed inset-x-0 inset-y-0 z-30 flex items-center justify-center transition-all duration-300": true,
        "translate-y-0": !isloading,
        "-translate-y-full": isloading,
    })}>
        <img src='./loader.gif' className='h-[30rem]'/>
    </div>
  )
}
