
import * as React from 'react';
import {ImageComponent, Input, Modal} from "@/components";
import { useForm } from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth/Auth";
import {useAuth} from "@/store/Auth";


type Props = {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
    username: string;
    email: string;
    password: string;
};

export function Register({ setRegister }: Props) {
    const { register: inputRegister, handleSubmit, formState: { errors } } = useForm<FormData>();
    const mutate=useMutation({mutationFn:registerApiCall})
    const {login}=useAuth();
    const onSubmit = (data: FormData) => {
        console.log(data)
        mutate.mutate(data,{
            onSuccess: (res) => {
                login(res.jwt,res.user);
            }
        })
    };

    return (
        <Modal>
            <div className="flex justify-between items-center p-3 text-2xl text-NestMartTextHeading font-montserrat">
                <div className="flex gap-2 text-NestMartTextHeading">
                    <h3
                        className="cursor-pointer p-2"
                        onClick={() => setRegister(prevState => !prevState)}
                    >
                        Login
                    </h3>
                    <div className="border-l-2 border-gray-400 h-12"></div>
                    <h3 className="cursor-pointer bg-gray-200 p-2 rounded-md">Register</h3>
                </div>
                <p className="cursor-pointer" onClick={() => setRegister(prevState => !prevState)}>Close</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8 bg-gray-100">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center flex-col items-center">
                    <ImageComponent src={"/assets/images/login.png"} alt={"Company"} width={100} height={100} />
                    <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-NestMartTextHeading">
                        Sign up create your account
                    </h2>
                </div>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">

                        <Input
                            id="username"
                            label="User Name"
                            type="text"
                            register={inputRegister}
                            registerOptions={{ required: "Enter user name" }}
                            errors={errors}
                            {...{placeholder:"John week"}}
                        />

                        <Input
                            id="email"
                            label="Email"
                            type="email"
                            register={inputRegister}
                             errors={errors}
                            {...{placeholder:"Enter email address"}}
                        />

                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            register={inputRegister}
                            registerOptions={{ required: true, minLength: { value: 5, message: "Min 3 characters" } }}
                            errors={errors}
                            {...{placeholder:"Enter password"}}
                        />

                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </form>
                    <p className="text-NestMartTextHeading mt-3">
                        Already have an account?{" "}
                        <span
                            onClick={() => setRegister(prevState => !prevState)}
                            className="text-red-300 cursor-pointer"
                        >
              Login
            </span>
                    </p>
                </div>
            </div>
        </Modal>
    );
}
