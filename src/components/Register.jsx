
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import React from 'react'

export default function Register() {
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
    const openRegisterModal = () => {
      setRegisterModalOpen(true);
    };
  
    const closeRegisterModal = () => {
      setRegisterModalOpen(false);
    };
  
    const handleRegister = (data) => {
      // Add your registration logic here using data.phoneNumber, data.username, and data.surname
     
      console.log('Surname:', data.surname);
      // You can add your registration logic here
      // For simplicity, I'm just closing the modal and resetting the form in this example
      closeRegisterModal();
      reset();
    };
  
    return (
      <div>
        <button onClick={openRegisterModal} className="bg-gray-400 text-white p-2 rounded hover:bg-[#FF9910] transition-[0.5s]">
        Pегистрация
        </button>
  
        {/* Register Modal */}
        {isRegisterModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-2xl font-bold ml-[50px] text-black">Регистрация</h2>
              <p className='text-gray-400 font-serif font-medium ml-[30px]'>Войдите с вашим именем</p>
  
              <form onSubmit={handleSubmit(handleRegister)}>
  
                <label className="block mb-2 font-serif font-bold text-black" htmlFor="registerSurname">
                ФИО:
                  <input
                    type="text"
                    id="registerSurname"
                    {...register('surname', { required: 'Surname is required' })}
                    className={`border border-[#FF9910] rounded-lg p-2 w-full ${errors.surname ? 'border-red-500' : ''}`}
                  />
                  {errors.surname && (
                    <span className="text-red-500">{errors.surname.message}</span>
                  )}
                </label>
  
                <button type="submit" className="border-[#FF9910] bg-[#FF9910] border rounded-lg  w-full text-white p-2 ">
                Подтвердить
                </button>
  
              
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };


