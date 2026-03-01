import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { X, Mail, Lock, User, Check } from 'lucide-react';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);

    const [currState, setCurrState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }
        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        } else {
            alert(response.data.message);
        }
    };

    return (
        <div className='fixed inset-0 z-[60] w-full h-full bg-black/80 flex items-center justify-center backdrop-blur-md animate-fadeIn'>
            <form onSubmit={onLogin} className="w-[max(25vw,350px)] bg-red-mid/90 backdrop-blur-2xl border border-white/10 text-white flex flex-col gap-6 p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-scaleUp">
                <div className="flex justify-between items-center font-bold text-2xl">
                    <h2>{currState}</h2>
                    <X
                        onClick={() => setShowLogin(false)}
                        className="cursor-pointer hover:text-accent transition-all hover:rotate-90 duration-300"
                        size={28}
                    />
                </div>

                <div className="flex flex-col gap-5">
                    {currState === "Login" ? <></> : (
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                            <input
                                name='name'
                                onChange={onChangeHandler}
                                value={data.name}
                                type="text"
                                placeholder='Your name'
                                required
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/30"
                            />
                        </div>
                    )}

                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                        <input
                            name='email'
                            onChange={onChangeHandler}
                            value={data.email}
                            type="email"
                            placeholder='Your email'
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/30"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                        <input
                            name='password'
                            onChange={onChangeHandler}
                            value={data.password}
                            type="password"
                            placeholder='Your password'
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/30"
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    className="w-full btn-gradient py-4 text-lg mt-2"
                >
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>

                <div className="flex items-start gap-3 -mt-2">
                    <input type="checkbox" required id='condition' className="mt-1 accent-accent cursor-pointer w-4 h-4 shrink-0" />
                    <label htmlFor="condition" className="text-white/60 cursor-pointer text-xs leading-5">
                        By continuing, I agree to the terms of use and privacy policy.
                    </label>
                </div>

                {currState === "Login"
                    ? <p className="text-white/70 text-center">New here? <span onClick={() => setCurrState("Sign Up")} className="text-accent font-bold cursor-pointer hover:underline underline-offset-4">Create account</span></p>
                    : <p className="text-white/70 text-center">Already have account? <span onClick={() => setCurrState("Login")} className="text-accent font-bold cursor-pointer hover:underline underline-offset-4">Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
