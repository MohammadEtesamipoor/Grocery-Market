import * as React from 'react';

type Props = {
    children?: React.ReactNode;
};

export function Modal({children}: Props) {
    return (
        <div className="flex absolute top-0 z-[80] w-full h-full items-center justify-center ">
            <div className={"border border-gray-300 bg-white  w-7/12 overflow-hidden rounded-md "}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};