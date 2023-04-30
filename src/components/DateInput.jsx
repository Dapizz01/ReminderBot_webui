import React from "react";

function DateInput({date, setDate}){
    return (
        <>
            <input type="datetime-local" 
                id="datetime"
                className="input input-bordered text-center w-full max-w-xs m-8" 
                onChange={(e) => {
                    setDate(e.target.valueAsDate)
                }}/>
        </>
    )
}

export default DateInput