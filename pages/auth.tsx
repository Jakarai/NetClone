 import Input from '../components/Input'
import { useCallback, useState } from 'react';
import React from 'react';
 
 
 const Auth = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState("Login");

    const toggleVariant = useCallback(() => {
        setVariant((preV) => preV == "Login" ? "Register" : "Login") 
    }, [])


    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className=" px-12 py-5">
                    <img src= "/images/logo.png" className=" h-12" alt="Logo"/>
                </nav>
                <div className=" flex justify-center ">
                    <div className=" bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className=" text-white text-4xl mb-8 font-semibold">
                            {variant == "Login" ? "Sign in" : "Register"}
                        </h2>
                        <div className=" flex flex-col gap-4">
                            {variant == "Login" ? "" : <Input id={"username"} onChange={(ev: any)=> setUsername(ev.target.value)} value={username} label={'Username'}/>}
                            <Input id={"email"} onChange={(ev: any)=> setEmail(ev.target.value)} value={email} label={'Email'} type="email"/>
                            <Input id={"password"} onChange={(ev: any)=> setPassword(ev.target.value)} value={password} label={'Password'} type="password" />
                        </div>
                        <button className='rounded-md w-full text-white text-md py-3 bg-red-600 mt-10 hover:bg-red-700 transition ' > Login</button>
                        <p className='text-neutral-500 text-sm mt-12'>
                            {variant == "Login" ? "First time using" : "Already have an account?"} 
                             <span className='text-white px-2 cursor-pointer' onClick={toggleVariant} >
                                 { variant == "Login" ?  "Register Here" : "Login Here"}
                            </span>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Auth;
