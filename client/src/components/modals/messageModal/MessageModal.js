import React from 'react';
import './MessageModal.css';

class MessageModal extends React.Component {
    componentDidMount() {
        setTimeout(this.props.closeModal, 2000);
        this.props.newTotalCount();
    }

    render() {
        return (
            <div className='message-container'>
                {this.props.message.status === 200 ? 
                    <i className="fas fa-check message-icon-success message-icon"></i> : 
                    <i className="fas fa-exclamation-circle message-icon-fail message-icon"></i>
                }
                <p>{this.props.message.text}</p>
            </div>
        );
    }
}

export default MessageModal;