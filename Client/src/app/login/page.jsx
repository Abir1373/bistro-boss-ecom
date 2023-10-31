"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import loginImg from "/../Client/src/app/assets/others/authentication1.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useAuth } from '../providers/AuthProvider';
import { useRouter } from 'next/navigation';

import { BsGoogle } from "react-icons/bs";




const Login = () => {

    const captchaRef = useRef(null)

    const { user, loading, signIn, googleSignIn } = useAuth()


    const router = useRouter()

    const handleGoogleSignIn = () => {
        
    }


    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        const value = captchaRef.current.value;
        if (validateCaptcha(value) == true) {
            alert('Captcha Matched');
            if (loading) {
                <span className="loading loading-spinner loading-lg"></span>
            }
            signIn(email, password)
                .then(result => {
                    const user = result.user
                    console.log(user);
                    if (loading) {
                        <span className="loading loading-spinner loading-lg"></span>
                    }
                    const loggedUser = {
                        email: email ,
                    }
                    console.log(loggedUser)
                    fetch('http://localhost:5000/jwt',{
                        method:'POST',
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify(loggedUser)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log('jwt response',data)
                        localStorage.setItem('token',data.token)
                    })
                    router.push('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });

            form.reset()
        }
        else {
            alert('Captcha Does Not Match');
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    return (
        <div className="hero min-h-screen bg-base-200 ml-5">
            <div className="hero-content flex-row flex">
                <div className="text-center lg:text-left">
                    <Image src={loginImg} alt="img" width={800} height={700}></Image>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name='captcha' placeholder="Enter The Captcha" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <input className="btn btn-primary" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className='flex flex-col items-center m-2' onClick={handleGoogleSignIn}>
                        <span className='mb-2 text-xl'>OR, Sign In With </span>
                        <div className='flex flex-row mt-2 mb-4'>
                            <button className='hover:bg-gray-400 rounded-lg p-4 '> <BsGoogle style={{ width: '40px', height: '40px' }} /> </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;
