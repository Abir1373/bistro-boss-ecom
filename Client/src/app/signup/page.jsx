"use client"
import Image from 'next/image';
import logoutImg from "/../Client/src/app/assets/others/authentication1.png"
import { useAuth } from '../providers/AuthProvider';
import { BsGoogle } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const SignUp = () => {

    const { user, loading, createUser, googleSignIn } = useAuth();

    const router = useRouter()

    const handleGoogleSignIn = () => {
        console.log("handleGoogleSignIn")
        
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const userInfo = {
            name: name,
            email: email,
            user_role: 'user'
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data')
                    })
                router.push('/login')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })



        form.reset()
    }

    console.log(loading)

    return (
        <div className="hero min-h-screen bg-base-200 ml-5">
            <div className="hero-content flex-row flex">
                <div className="text-center lg:text-left">
                    <Image src={logoutImg} alt="img" width={800} height={700}></Image>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-4">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='flex flex-col items-center m-2' onClick={handleGoogleSignIn}>
                        <span className='mb-2 text-xl'>Or, Sign Up With </span>
                        <div className='flex flex-row mt-2 mb-4'>
                            <button className='hover:bg-gray-400 rounded-lg p-4 '> <BsGoogle style={{ width: '40px', height: '40px' }} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
