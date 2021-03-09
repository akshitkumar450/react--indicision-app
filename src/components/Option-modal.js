import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        // to convert to a true boolean value
        // !!undefined == false
        // !! "some valid text"==true
        isOpen={!!props.selectedOption}
        contentLabel="selected option"
        // modal get close when use esc key and clicking outside the modal
        onRequestClose={props.clearSelectedOption}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal
