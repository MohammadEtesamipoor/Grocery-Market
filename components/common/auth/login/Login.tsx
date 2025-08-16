// @flow
import * as React from 'react';
import {ImageComponent, Modal, Register} from "@/components";
import {useEffect, useState} from "react";
import {useOverlay} from "@/hooks/use-overlay";
import {useModal} from "@/store/ModalContext";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

interface FormData {
    email: string;
    password: string;
}

export function Login() {
    const {register:inputRegister, handleSubmit,formState:{errors}}=useForm<FormData>();
    const[register, setRegister] = useState<boolean>(false);
    const {closeModal}=useModal();

    useOverlay({
        onClick: () => {
            setRegister(false)
        }
    })

    const onSubmit=(data:FormData)=>{
        console.log(data)
    }
    return (
        <>
            {register ?
            <Register setRegister={setRegister}/>
                :
                <Modal>
                    <div className={"flex justify-between items-center  p-3 text-2xl text-NestMartTextHeading font-montserrat "}>
                        <div className={"flex gap-2 text-NestMartTextHeading"}>
                            <h3 className={" cursor-pointer bg-gray-200 p-2 rounded-md"}
                            >
                                Login</h3>
                            <div className="border-l-2 border-gray-400 h-12"></div>
                            <h3 className={"cursor-pointer p-2"}
                                onClick={() => setRegister(prevState => !prevState)}
                            >Register</h3>
                        </div>
                        <p className={"cursor-pointer"} onClick={()=>closeModal()}>Close</p>
                    </div>
                    <hr className={"border-gray-300"} />
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center flex-col items-center">
                            <ImageComponent src={"/assets/images/login.png"} alt={"Company"}  width={100} height={100} />
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-NestMartTextHeading">
                                Sign in to your account
                            </h2>
                        </div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            {...inputRegister("email",{required:"Enter email address"})}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    <ErrorMessage errors={errors} name="email"
                                                  render={({ message }) => <p className={"text-xs mt-1 text-red-600"}>{message}</p>}/>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            type="password"
                                            required
                                            {...inputRegister("password",{required:true,minLength:{value:5,message:"Min 3 characters"}})}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                        <ErrorMessage errors={errors} name="password"
                                                      render={({ message }) => <p className={"text-xs mt-1 text-red-600"}>{message}</p>}/>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </form>
                            <p className={"text-NestMartTextHeading mt-3"}>Dont have an account? <span
                                onClick={()=>setRegister(prevState => !prevState)}
                                className={"text-red-300 cursor-pointer"}>Sign up</span></p>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
};