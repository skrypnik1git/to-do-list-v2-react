import React, { Component } from 'react';

export default class ModalWindow extends Component {

    render() {
        const { isOpen, onConfirm, onClose } = this.props;
        return isOpen ? (
                <div>
                    <div className="cover-div">
                    </div>
                    <div className="confirmation">
                        <div className="text-for-cover">
                            Delete this Task?
                        </div>
                        <div className="cover-btns">
                            <input type="button" value="Ok" className="btn blue-btn" onClick={onConfirm}>
                            </input>
                            <input type="button" value="Cancel" className="btn blue-red" onClick={onClose}>
                            </input>
                        </div>
                    </div>
                </div>
            ) : null
    }
}