import React, { useState, useEffect } from "react";

import "./Survey.css";

const Survey = props => {
    const [input, setInput] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
        console.log(input);
    }
    useEffect(() => {
        props.logResults(input);
    });
    return (
        <div className="survey">
            <div className="survey-questions">
                <div className="question">
                    <div className="">
                        In React, props allow children to control their parents'
                        state.
                    </div>
                    <label htmlFor="">True</label>
                    <input
                        type="radio"
                        checked={input.question1 === "true"}
                        name="question1"
                        value="true"
                        onChange={handleChange}
                    />
                    <label htmlFor="">False</label>
                    <input
                        type="radio"
                        checked={input.question1 === "false"}
                        name="question1"
                        value="false"
                        onChange={handleChange}
                    />
                </div>
                <div className="question">
                    <div className="">
                        With hooks you can use lifecycle methods with functional
                        components.{" "}
                    </div>
                    <label htmlFor="">True</label>
                    <input
                        type="radio"
                        checked={input.question2 === "true"}
                        name="question2"
                        value="true"
                        onChange={handleChange}
                    />
                    <label htmlFor="">False</label>
                    <input
                        type="radio"
                        checked={input.question2 === "false"}
                        name="question2"
                        value="false"
                        onChange={handleChange}
                    />
                </div>
                <div className="question">
                    <div className="">
                        Hooks only come out of the box, you can not create your
                        own.
                    </div>
                    <label htmlFor="">True</label>
                    <input
                        type="radio"
                        checked={input.question3 === "true"}
                        name="question3"
                        value="true"
                        onChange={handleChange}
                    />
                    <label htmlFor="">False</label>
                    <input
                        type="radio"
                        checked={input.question3 === "false"}
                        name="question3"
                        value="false"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Survey;
