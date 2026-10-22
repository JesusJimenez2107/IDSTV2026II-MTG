import { useState } from "react";

const DEFAULT_COUNTER = 20;

const usePlayer = () => {
    const [counter, setCounter] = useState<number> (DEFAULT_COUNTER);
    const increaseCounter = () =>{
        setCounter(prevCounter => prevCounter + 1);
    };
    const decreaseCounter = () =>{
        setCounter(prevCounter => {
            if (prevCounter <= 0){
                return 0;
            }
            return prevCounter - 1
        });
    };
    const resetCounter = () =>{
        setCounter(DEFAULT_COUNTER);
    };
    
    return{
        counter,
        increaseCounter,
        decreaseCounter,
        resetCounter
    }

};

export default usePlayer;