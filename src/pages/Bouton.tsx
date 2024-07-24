// components/EstimerMesRevenusLocatifs.tsx

import React, { FC, MouseEventHandler } from 'react';

interface EstimerMesRevenusLocatifsProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const EstimerMesRevenusLocatifs: FC<EstimerMesRevenusLocatifsProps> = ({ onClick, className = '', ...props }) => {
  return (
    <div>
      <button
        className={`px-8 py-2 text-sm md:px-12 md:py-2 md:text-base lg:px-16 lg:py-2 lg:text-lg cursor-pointer bg-custom-pink rounded-full font-medium text-white ${className}`}
        onClick={onClick}
        {...props}
      >
        Estimer mes revenus locatifs
      </button>
    </div>
  );
};

export default EstimerMesRevenusLocatifs;
