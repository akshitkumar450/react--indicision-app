
import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3>Your Options</h3>
                <button
                    className="btn btn-link"
                    onClick={props.handleDeleteOption}
                >
                    Remove All
                 </button>
            </div>

            {props.options.length === 0 && <p className="widget-message">please add an option to get started</p>}
            {
                props.options.map((item, idx) => {
                    // return <p key={item}>{item}</p>
                    return <Option
                        handleDeleteOne={props.handleDeleteOne}
                        key={item}
                        index={idx + 1}
                        optionText={item}
                    />
                })
            }
        </div>
    )
}

export default Options