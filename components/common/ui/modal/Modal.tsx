import * as React from 'react';

type Props = {
    children?: React.ReactNode;
};

export function Modal({children}: Props) {
    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-NestMartTextHeading/70">
            <div className={"border border-gray-300 bg-white w-11/12 max-w-3xl max-h-[90vh] overflow-auto rounded-md"}>
                <div onClick={(e)=>e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};