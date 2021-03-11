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
        // before closing the modal
        closeTimeoutMS={200}
        // to make custom style on modal
        // by applying custom class ,,react modal will not use the inbuilt styles
        // it will remove all the default styles
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        { props.selectedOption && <p className="modal__body ">{props.selectedOption}</p>}
        <button className="btn" onClick={props.clearSelectedOption}>Okay</button>
    </Modal >
)

export default OptionModal
