// @flow
import * as React from 'react';
import { ErrorMessage } from '@hookform/error-message';

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    id: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'tel';
    register: any;
    registerOptions?: any;
    errors?:any;
}

export function Input({ id, label, type, register, registerOptions = {}, errors,...rest }: Props) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={id}
                    type={type}
                    {...register(id, registerOptions)}
                    {...rest}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <ErrorMessage
                    errors={errors}
                    name={id}
                    render={({ message }) => <p className="text-xs mt-1 text-red-600">{message}</p>}
                />
            </div>
        </div>
    );
}
