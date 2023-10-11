"use client"
import React from 'react';

const TranslateModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay bg-opacity-75 fixed inset-0 bg-gray-900"></div>
      <div className="modal bg-white p-6 rounded shadow-lg z-10">
        <p className="text-xl text-center mb-4">
        Sorry for the inconvenience, construction site
        </p>
        <button
          onClick={closeModal}
          className="block mx-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default TranslateModal;