"use client"
import React, { useState } from 'react';
import TranslateModal from './TranslateModal';

const PreAbout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className='p-1 border border-cyan-200 rounded-xl'>
      <div className='w-full m-0 h-[40px] bg-yellow-200 rounded flex justify-center items-center'>
        <button
          onClick={openModal}
          className='text-center text-xl md:text-3xl lg:text-4xl text-slate-800 font-bold'
        >
          Translate Page
        </button>
      </div>
      {modalOpen && <TranslateModal closeModal={closeModal} />}
    </div>
  )
}

export default PreAbout;