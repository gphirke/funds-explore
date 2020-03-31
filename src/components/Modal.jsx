import React, {Component} from "react";
import "./css/modal.css";

class Modal extends Component {
	render(){
		return (
			<div className="modal show-modal">
	        <div className="modal-content" >
	         <span className="close-button" onClick={() => {
	         	this.props.closeModal()
	         }}>x</span>
	           <div>{this.props.children}</div>
	        </div>    
    		</div>
		)
	}
}

export default Modal;