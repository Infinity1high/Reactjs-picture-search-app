import React, {Component} from 'react';
import Picture from './Picture';
import Modal from './Modal';


class Pictures extends Component {

    openModal = (url) => (
        this.props.openModal(url)
    )
    renderPictures = () => (
        this.props.photos.map((post, index) => (
            <Picture
                key={index}
                imageUrl={`https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`}
                click = {() => this.openModal(`https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`)}
            />
    ))
    );


    render() {

        console.log(this.props);
        return (
            <div className='flex_container'>
                {this.renderPictures()}
                <Modal show={this.props.modal}
                       onClose={this.openModal}
                       src={this.props.modal_photo}>
                </Modal>
            </div>
        )
    }
}

export default Pictures;