<<<<<<< HEAD
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../../store/store';
import { loginAsync } from '../../store/slices/loginSlice';
import './style.css';
import { useNavigate } from 'react-router-dom';
=======
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Rootstate } from '../../store/store'
import { fetchData } from '../../api/api'
import { setLoginError } from '../../store/features/login/loginSlice'
import { loginConfig } from '../../config/config'
import { useNavigate } from 'react-router-dom'
import { useCustomDispatch, useCustomSelector } from '../../customHooks/customHooks'

import './style.css'

>>>>>>> 029635aaedf8ec618b076c702d94484594b85db7

interface FormValues {
    email: string;
    password: string;
  
}

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
<<<<<<< HEAD
    const dispatch = useDispatch();
    const { error } = useSelector((state: Rootstate) => state.loginData); 
=======
    const dispatch = useCustomDispatch();
    const { loginError } = useCustomSelector((state: Rootstate) => state.loginData);
    const { title } = loginConfig
>>>>>>> 029635aaedf8ec618b076c702d94484594b85db7

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
<<<<<<< HEAD
        const resultAction: = await dispatch(loginAsync(data));
        if (loginAsync.fulfilled.match(resultAction)) {
            navigate('/profile');
=======
        try {
            const res = await fetchData.sendLoginData(data);

            if (res.status === 200 || res.status === 201) {
                navigate('/profile');
            } else {
                dispatch(setLoginError('Password or email are incorrect'));
            }
        } catch (error) {
            dispatch(setLoginError('Password or email are incorrect'));
>>>>>>> 029635aaedf8ec618b076c702d94484594b85db7
        }
    };

    return (
        <div className='login_page_div'>
            <h2>Login</h2>
           
            <form onSubmit={handleSubmit(onSubmit)}>
            {error && <p className="error-message">{error}</p>}
                <div className="login_inputs_div">
                    <label>
                        <input
                            type="text"
                            placeholder='email'
                            autoComplete='off'
                            {...register('email', {
                                required: "Email field is required"
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
                                required: "Password field is required"
                            })}
                        />
                        <p>{errors.password?.message}</p>
                    </label>
                </div>
<<<<<<< HEAD
                <button type="submit" className='login_btn'>Login</button>
=======
                <button className='login_btn'>Login</button>
                {loginError && <p className="error-message">{loginError}</p>}
>>>>>>> 029635aaedf8ec618b076c702d94484594b85db7
            </form>
        </div>
    );
};

export default LoginPage;