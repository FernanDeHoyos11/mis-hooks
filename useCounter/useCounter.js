import { useState } from "react"


export const useCounter = (initValue = 1) => {

   const [counter, setCounter] = useState(initValue);
   const [valor, setValor] = useState(1);
   
   const valorContador = () => {setValor(valor + 1)}

   const increment = (value = 1) => { setCounter((current) => current + valor )}
   const decrement = () => {setCounter( counter - 1 )}
   const reset = () => {setCounter(initValue)}
   
   

    return {
        counter,
        valor,
        increment,
        decrement,
        reset,
        valorContador,
    }
}