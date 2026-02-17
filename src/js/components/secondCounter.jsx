//include images into your bundle
import { use } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import React, { useState, useEffect } from "react";
const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);
    const [avanzar, setAvanzar] = useState(true);
    const [retroceder, setRetroceder] = useState(false);
    const [detener, setDetener] = useState(false);

    const six = Math.floor(seconds / 100000) % 10;
    const five = Math.floor(seconds / 10000) % 10;
    const four = Math.floor(seconds / 1000) % 10;
    const three = Math.floor(seconds / 100) % 10;
    const two = Math.floor(seconds / 10) % 10;
    const one = seconds % 10;

    useEffect(() => { console.log(avanzar) }, [avanzar])

    useEffect(() => {
        if (avanzar) {
            console.log("avanzar")

            const intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }

        if (detener) {
            console.log("detener")

            return
        }

        if (retroceder) {
            console.log("retroceder")

            const intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds - 1 : prevSeconds)
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [avanzar, detener, retroceder]);

    return (
        <div className="big-counter">
            <div className="icon">
                <i className="bi bi-clock"></i>
            </div>
            <button onClick={() => {
                setDetener(false)
                setRetroceder(false)
                setAvanzar(true)
            }}>avanzar contador</button>
            <button onClick={() => {
                setRetroceder(false)
                setAvanzar(false)
                setDetener(true)

            }}>detener contador</button>
            <button onClick={() => {
                setDetener(false)
                setAvanzar(false)
                setRetroceder(true)

            }}>retroceder</button>
            <div className="digit">{six}</div>
            <div className="digit">{five}</div>
            <div className="digit">{four}</div>
            <div className="digit">{three}</div>
            <div className="digit">{two}</div>
            <div className="digit">{one}</div>
        </div>
    );
};

export default SecondsCounter;



