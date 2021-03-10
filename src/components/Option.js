import React from 'react'

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                className="btn btn-link"
                onClick={(e) => {
                    props.handleDeleteOne(props.optionText)
                }}>
                Remove
            </button>
        </div>
    )
}

export default Option;