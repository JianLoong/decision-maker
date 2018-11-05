import Modal from "react-modal";
import React from "react";

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={100}
        className="modal"
    >
        <h3 className="modal__title">Selected option: </h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button 
            className="modal__button"
            onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;
