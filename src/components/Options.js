
import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>please add an option to get started</p>}

            <button onClick={props.handleDeleteOption}>remove All</button>

            {props.options.map((item) => {
                // return <p key={item}>{item}</p>
                return <Option
                    handleDeleteOne={props.handleDeleteOne}
                    key={item}
                    optionText={item}
                />
            })}
        </div>
    )
}

export default Options