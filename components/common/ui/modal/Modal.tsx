import * as React from 'react';

type Props = {
    children?: React.ReactNode;
};

export function Modal({children}: Props) {
    return (
        <div className="flex absolute top-0 z-[80] w-full h-full items-center justify-center bg-NestMartTextHeading/70 ">
            <div className={"border border-gray-300 bg-white w-10/12  lg:w-7/12 overflow-hidden rounded-md animate-pulse-1"}>
                <div onClick={(e)=>e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};