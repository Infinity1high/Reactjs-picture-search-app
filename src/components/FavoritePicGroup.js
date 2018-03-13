import React, {Component} from 'react';
import Picture from './Picture';
import {withRouter} from 'react-router';
import Lightbox from "react-image-lightbox";




class FavoritePicGroup extends Component {
    renderPictures = () => (
        this.props.photos_favs[this.props.match.params.id].photos.map((post, index) => (
            <Picture
                key={index}
                imageUrl={`https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`}
                click={()=> this.props.openModal('',index)}
            />
        ))
    );
    getPictureUrl = (arr, index) =>(
        `https://farm${arr[index].farm}.staticflickr.com/${arr[index].server}/${arr[index].id}_${arr[index].secret}.jpg`
)


    render() {
        let favPicturesArray = this.props.photos_favs[this.props.match.params.id].photos;
        console.log(favPicturesArray);

        return (
            <div>
            <div className='flex_container'>
                {this.renderPictures()}
            </div>
        {this.props.modal && (
            <Lightbox
                mainSrc={(this.getPictureUrl(favPicturesArray, this.props.modal_photo.index)).toString()}
                nextSrc={(this.getPictureUrl (favPicturesArray, (this.props.modal_photo.index + 1) % favPicturesArray.length)).toString()}
                prevSrc={(this.getPictureUrl (favPicturesArray,(this.props.modal_photo.index  + favPicturesArray.length - 1) % favPicturesArray.length)).toString()}
                onCloseRequest={this.props.openModal}
                onMovePrevRequest={() =>
                    this.props.loadNextPhoto(
                        (this.props.modal_photo.index + favPicturesArray.length - 1) % favPicturesArray.length
                    )}
                onMoveNextRequest={() =>
                    this.props.loadNextPhoto(
                        (this.props.modal_photo.index+ 1) % favPicturesArray.length
                    )}
            />

        )}
            </div>
        )
    }
}

export default withRouter(FavoritePicGroup);