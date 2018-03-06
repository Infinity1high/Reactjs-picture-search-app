import React, {Component} from 'react';
import Picture from './Picture';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

class FavoritePicGroup extends Component {
    renderPictures = () => (
        this.props.photos_favs[this.props.match.params.id].photos.map((post, index) => (
            <Picture
                key={index}
                imageUrl={`https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`}
            />
        ))
    );

    render() {
        return (
            <div className='flex_container'>
                {this.renderPictures()}
            </div>
        )
    }
}

export default withRouter(FavoritePicGroup);