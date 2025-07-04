"use client";

import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';
import { generateCarImageUrl } from '@/utils';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  
  const { fuel_type, drive, make, model, transmission, year } = car;
  
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                RM
            </span>
                600
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt="car model" fill priority className="object-contain" />
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                    <p className='text-[14px]'>
                        {transmission === 'a' ? 'Auto' : 'Manual'}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                    <p className='text-[14px]'>
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/gas.svg" width={20} height={20} alt="gas" />
                    <p className='text-[14px]'>
                        {fuel_type.toUpperCase()}
                    </p>
                </div>
            </div>
            <div className="car-card__btn-container">
                <CustomButton 
                    title="View More"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard