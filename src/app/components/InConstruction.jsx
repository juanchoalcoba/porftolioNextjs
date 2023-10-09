import React from 'react'
import Image from 'next/image'
const InConstruction = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[100px] '>
        <Image
        src="/images/paginaConstruccion.jpg"
        width={800}
        height={600} 
        alt="Sitio en construccion"
        />
        <h1 className='text-slate-400 text-4xl mt-4'>Disculpe las molestias</h1>
    </div>
  )
}

export default InConstruction