
import { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useForm } from 'react-hook-form';



import React from 'react'

export default function Login() {
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
    const openRegisterModal = () => {
      setRegisterModalOpen(true);
    };
  
    const closeRegisterModal = () => {
      setRegisterModalOpen(false);
    };
  
    const handleRegister = (data) => {
      
      console.log('Phone Number:', data.phoneNumber);


      closeRegisterModal();
      reset();
    };
    

  
    return (
      <div>
        <button onClick={openRegisterModal} className="bg-gray-400 text-white p-2 rounded hover:bg-[#FF9910]">
        Войти
        </button>
  
        {isRegisterModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg">
            <div className='ml-[150px] '>
            <h2 className="text-2xl font-bold  text-black font-serif">Вход на сайт</h2>
            </div>
              <p className='text-gray-400 font-medium ml-[100px]  font-serif'>Войдите с вашим номером телефона</p>
  
              <form onSubmit={handleSubmit(handleRegister)}>
                <label className="block mb-2 font-bold text-black" htmlFor="registerPhoneNumber">
                Номер телефона
                  <input
                    type="number"
                    id="registerPhoneNumber"
                    placeholder='000 00 00'
                    {...register('phoneNumber', { required: 'Phone Number is required' })}
                    className={`border border-[#FF9910] rounded-lg p-2 w-full ${errors.phoneNumber ? 'border-red-500' : ''}`}
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500">{errors.phoneNumber.message}</span>
                  )}
                </label>
               
                <button type="submit"  className="  text-white p-2  border-[#FF9910] bg-[#FF9910] border rounded-lg  w-[500px]">
                Подтвердить
                  
                </button>
  
               
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

