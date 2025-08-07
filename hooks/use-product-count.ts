import { useState, ChangeEvent } from "react";

function useProductCount() {
    const [productCount, setProductCount] = useState<string>("");

    const handelInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[0-9]+$/.test(value)) {
            setProductCount(value);
        }
    };

    const handelClickValue = () => {
        if (productCount === "0") {
            setProductCount("");
        } else if (!Number(productCount)) {
            setProductCount("1");
        }

        if (productCount === "") {
            setProductCount("1");
        }
    };

    return { productCount, handelInputValue, handelClickValue };
}

export default useProductCount;
