import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOption}
                onClick={props.handlePick}>
                what should i do?
                </button>
        </div>
    )
}

export default Action