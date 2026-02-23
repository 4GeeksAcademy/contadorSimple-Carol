import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);
    // Mode can be: 'forward', 'paused', or 'backward'
    const [counterMode, setCounterMode] = useState('forward');

    // Helper function to extract a digit from a number at a specific position
    const getDigit = (value, position) => Math.floor(value / Math.pow(10, position - 1)) % 10;

    const digit6 = getDigit(seconds, 6);
    const digit5 = getDigit(seconds, 5);
    const digit4 = getDigit(seconds, 4);
    const digit3 = getDigit(seconds, 3);
    const digit2 = getDigit(seconds, 2);
    const digit1 = getDigit(seconds, 1);

    useEffect(() => {
        // Don't run interval when paused
        if (counterMode === 'paused') return;
        
        // Determine increment direction based on mode
        const increment = counterMode === 'forward' ? 1 : -1;
        
        const intervalId = setInterval(() => {
            setSeconds(prev => {
                const next = prev + increment;
                // Prevent negative numbers
                return next < 0 ? 0 : next;
            });
        }, 1000);
        
        // Cleanup function to prevent memory leaks
        return () => clearInterval(intervalId);
    }, [counterMode]);

    return (
        <div className="big-counter">
            <div className="icon">
                <i className="bi bi-clock"></i>
            </div>
            <button 
                className={counterMode === 'forward' ? 'active' : ''}
                onClick={() => setCounterMode('forward')}
            >
                ▶️ Avanzar contador
            </button>
            <button 
                className={counterMode === 'paused' ? 'active' : ''}
                onClick={() => setCounterMode('paused')}
            >
                ⏸️ Detener contador
            </button>
            <button 
                className={counterMode === 'backward' ? 'active' : ''}
                onClick={() => setCounterMode('backward')}
            >
                ◀️ Retroceder
            </button>
            <button 
                onClick={() => setSeconds(0)}
            >
                🔄 Reset
            </button>
            <div className="digit">{digit6}</div>
            <div className="digit">{digit5}</div>
            <div className="digit">{digit4}</div>
            <div className="digit">{digit3}</div>
            <div className="digit">{digit2}</div>
            <div className="digit">{digit1}</div>
        </div>
    );
};

export default SecondsCounter;



