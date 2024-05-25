import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './registerSchema'
import { fetchData } from '../../api/api'
import RegisterModal from '../../components/Modal/Modal'
import { registerConfig } from '../../config/config'

import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './style.css'

interface FormValues {
    name: string,
    email: string,
    password: string
}

const RegisterPage: React.FC = () => {

    const { title } = registerConfig
    const [isRegistered, setIsRegistered] = useState<boolean | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const res = await fetchData.sendRegisterData(data)
            
            if (res.status === 200 || res.status === 201) {
                setIsRegistered(true)
            }
        } catch (error) {
            setIsRegistered(false)
            toast('Registration failed, invaild email address', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                style: {
                    color: 'red',
                }
            });
        }
    };

    function renderModal() {
        if (isRegistered === null) return null
        if (isRegistered) {
            return <RegisterModal
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
            />
        } else {
            return <ToastContainer />
        }
    }

    return (
        <div className='register_page_div'>
            {renderModal()}
            <h2>{title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="register_inputs_div">
                    <label>
                        <input
                            type="text"
                            placeholder='name'
                            autoComplete='off'
                            {...register('name', {
                                required: "name field is required"
                            })}
                        />
                        <p>{errors.name?.message}</p>
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder='email'
                            autoComplete='off'
                            {...register('email', {
                                required: "email field is required"
                            })}
                        />
                        <p>{errors.email?.message}</p>
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder='password'
                            autoComplete='off'
                            {...register('password', {
                                required: "password field is required"
                            })}
                        />
                        <p>{errors.password?.message}</p>
                    </label>
                </div>
                <button className='register_btn'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage
