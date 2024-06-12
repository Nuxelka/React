import React, {useState} from "react"
import styles from './Counter.module.css'
function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    return( <div className={styles.counter}>
                <p className={styles.count_display}>{count}</p> 
                <div className={styles.counter_container}>
                    <button className={styles.counter_button} onClick={decrement}>-1</button>
                    <button className={styles.counter_button} onClick={reset}>Reset</button>
                    <button className={styles.counter_button} onClick={increment}>+1</button>
                </div>
            </div>)
}

export default Counter