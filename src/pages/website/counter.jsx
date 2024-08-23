// Counter.js
import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // Start counting when the component mounts
        const id = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= 100) {
                    clearInterval(id);
                    return prevCount;
                }
                return prevCount + 1;
            });
        }, 40);

        setIntervalId(id);

        // Clean up interval on component unmount
        return () => clearInterval(id);
    }, []);

    return (
        <div className="">
            <div className="">
                <div className="">{count}</div>
            </div>
        </div>
    );
};

export default Counter;
