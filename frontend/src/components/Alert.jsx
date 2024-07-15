// src/components/Alert.js
import React from 'react';

export const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg">
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-xl font-bold">&times;</button>
      </div>
    </div>
  );
};
