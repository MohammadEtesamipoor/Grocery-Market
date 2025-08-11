import {useState} from "react";

const useDebounce=(fn:void,delay:number):any => {
    const[timer,setTimer]=useState<number>()
    return function timeout(){
        clearTimeout(timer)
        let timerTimeout=setTimeout(fn,delay)
        setTimer(timerTimeout)
    }
}
export default useDebounce