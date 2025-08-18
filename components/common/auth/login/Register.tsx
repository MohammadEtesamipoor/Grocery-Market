
import * as React from 'react';
import {ImageComponent, Input, Modal} from "@/components";
import { useForm } from "react-hook-form";


type Props = {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
    email: string;
    password: string;
    "confirm-password": string;
};

export function Register({ setRegister }: Props) {
    const { register: inputRegister, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
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
                            id="email"
                            label="Email address"
                            type="email"
                            register={inputRegister}
                            registerOptions={{ required: "Enter email address" }}
                            errors={errors}
                            {...{placeholder:"your.email@example.com"}}
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

                        <Input
                            id="confirm-password"
                            label="Confirm password"
                            type="password"
                            register={inputRegister}
                            registerOptions={{ required: "Please confirm your password" }}
                            errors={errors}
                            {...{placeholder:"Confirm your password"}}
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
