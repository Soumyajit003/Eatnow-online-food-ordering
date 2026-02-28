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
        <div className='absolute z-50 w-full h-full bg-black/60 grid place-items-center backdrop-blur-sm animate-fadeIn'>
            <form onSubmit={onLogin} className="place-self-center w-[max(23vw,330px)] bg-white text-slate-600 flex flex-col gap-6 p-8 rounded-2xl text-[14px] shadow-2xl animate-scaleUp">
                <div className="flex justify-between items-center text-black font-bold text-xl">
                    <h2>{currState}</h2>
                    <X
                        onClick={() => setShowLogin(false)}
                        className="cursor-pointer hover:text-primary transition-colors hover:rotate-90 duration-300"
                        size={24}
                    />
                </div>

                <div className="flex flex-col gap-5">
                    {currState === "Login" ? <></> : (
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                name='name'
                                onChange={onChangeHandler}
                                value={data.name}
                                type="text"
                                placeholder='Your name'
                                required
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-slate-50"
                            />
                        </div>
                    )}

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            name='email'
                            onChange={onChangeHandler}
                            value={data.email}
                            type="email"
                            placeholder='Your email'
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-slate-50"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            name='password'
                            onChange={onChangeHandler}
                            value={data.password}
                            type="password"
                            placeholder='Your password'
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-slate-50"
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg font-medium text-[15px] transition-all shadow-md hover:shadow-lg active:scale-95 duration-200"
                >
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>

                <div className="flex items-start gap-2 -mt-2">
                    <input type="checkbox" required id='condition' className="mt-[5px] accent-primary cursor-pointer" />
                    <label htmlFor="condition" className="text-slate-500 cursor-pointer text-xs leading-5">
                        By continuing, I agree to the terms of use and privacy policy.
                    </label>
                </div>

                {currState === "Login"
                    ? <p className="text-slate-500">Create a new account? <span onClick={() => setCurrState("Sign Up")} className="text-primary font-medium cursor-pointer hover:underline">Click here</span></p>
                    : <p className="text-slate-500">Already have an account? <span onClick={() => setCurrState("Login")} className="text-primary font-medium cursor-pointer hover:underline">Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
