import React from 'react'

const Option = (props) => {
    return (
        <div>
            <p>option are::: {props.optionText}</p>
            <button
                onClick={(e) => {
                    props.handleDeleteOne(props.optionText)
                }}>
                remove
            </button>
        </div>
    )
}

export default Option;