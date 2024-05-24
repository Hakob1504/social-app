import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Rootstate } from '../../store/store'
import { fetchLoginData } from '../../api/api'
import { setLoginError } from '../../store/slices/loginSlice'
import './style.css'
import { useNavigate } from 'react-router-dom'



interface FormValues {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { title, loginError } = useSelector((state: Rootstate) => state.loginData);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>();

    //todo make requests in redux thunk, 

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const res = await fetchLoginData.sendLoginData(data);

            if (res.status === 200 || res.status === 201) {
                navigate('/profile');
            } else {
                dispatch(setLoginError('Password or email are incorrect'));
            }
        } catch (error) {
            dispatch(setLoginError('Password or email are incorrect'));
        }
    };

    return (
        <div className='login_page_div'>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button className='login_btn'>Login</button>
                {loginError && <p className="error-message">{loginError}</p>} 
            </form>
        </div>
    )
}

export default LoginPage;
