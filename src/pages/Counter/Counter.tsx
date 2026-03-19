import { useEffect, useRef, useState } from 'react';
import './Counter.css';
export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [showLimitexceeded, setShowLimitExceeded] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const calculate = (move: number) => {
        setCounter((counter) => {
            if (counter === 0 && move === -1) return counter;
            if (counter >= 10 && move === 1) return counter;
            return counter + move;
        });
    };

    const handleMouseDown = () => {
        timeoutRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                calculate(1);
            }, 1000)
        }, 1000);
    };

    const stopTimers = () => {
        console.log('stopTimers');
        
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }

    useEffect(() => {
        return () => stopTimers();
    }, []);


    useEffect(() => {
        setShowLimitExceeded(counter >= 10);
    }, [ counter]);

    return (
        <>
            <h3 className='counterTitleHeading'>Counter</h3>
            <p className='counter'>{counter}</p>
            <div className='containerButtons'>
                <button className='item--xsmall' onClick={() => calculate(-1)}>-</button>
                <button
                    className='item--xsmall'
                    onClick={() => calculate(1)}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={stopTimers}
                >+</button>
            </div>
            {showLimitexceeded && (
                <h1 className='limitExceededAlert'>Limit Exceeded</h1>
            )}
        </>
    )
}