import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        // The modal "window"
        const modalStyle = {
            position: 'fixed',
            backgroundColor: '#fff',
            borderRadius: 5,
            width: 400,
            height: 400,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30,
            textAlign: 'center'
        };
        const imageStyle = {
            borderRadius: 5,
            position: 'absolute',
            margin: 'auto',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }

        return (
            <div className="backdrop" style={backdropStyle}>

                <img style={imageStyle} src={this.props.src}/>
                <div className="footer">
                        <i onClick={this.props.onClose} class="fa fa-close"></i>
                </div>

            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    modal: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;
