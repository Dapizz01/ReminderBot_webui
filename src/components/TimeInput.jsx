import React from "react";

function TimeInput({time, setTime}){
    return (
        <>
            <input type='time' 
                id="time"
                className="input input-bordered text-center w-full max-w-xs m-8"
                onChange={(e) => {
                    setTime(e.target.value)
                }}
                />
        </>
    )
}

export default TimeInput