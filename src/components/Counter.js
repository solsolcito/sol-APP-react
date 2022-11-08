import { useState } from "react"

const Counter = (props) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <span>Cantidad: {count} </span>
            <button onClick={() => setCount(count + 1)}>
                Contar
            </button>
            <br />
            
            <button onClick={() => setCount(count - 1)}>
                Restar
            </button>
        </>

    )

}
export default Counter 