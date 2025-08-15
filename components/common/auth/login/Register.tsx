// @flow
import * as React from 'react';
import {ImageComponent, Modal} from "@/components";

type Props = {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Register({setRegister}: Props) {
    return (
        <Modal>
            <div className={"flex justify-between items-center  p-3 text-2xl text-NestMartTextHeading font-montserrat "}>
                <div className={"flex gap-2 text-NestMartTextHeading"}>
                    <h3 className={" cursor-pointer  p-2"}
                    onClick={() => setRegister(prevState => !prevState)}>
                        Login</h3>
                    <div className="border-l-2 border-gray-400 h-12"></div>
                    <h3 className={"cursor-pointer bg-gray-200 p-2 rounded-md"}>Register</h3>
                </div>
                <p className={"cursor-pointer"} onClick={()=>setRegister( (prevState:boolean) => !prevState)}>Close</p>
            </div>
            <hr className={"border-gray-300"} />
            <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8 bg-gray-100">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center flex-col items-center">
                    <ImageComponent src={"/assets/images/login.png"} alt={"Company"}  width={100} height={100} />
                    <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-NestMartTextHeading">
                        Sign up create your account
                    </h2>
                </div>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
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
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                                    Confirm password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="confirm-password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                    <p className={"text-NestMartTextHeading mt-3"}>Already have an account? <span
                        onClick={()=>setRegister(prevState => !prevState)}
                        className={"text-red-300 cursor-pointer"}>Login </span></p>
                </div>
            </div>
        </Modal>
    );
};