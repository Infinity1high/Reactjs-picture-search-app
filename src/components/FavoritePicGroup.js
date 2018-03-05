import React, {Component} from 'react';
import Picture from './Picture';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class FavoritePicGroup extends Component {
    renderPictures = (fav_pics) => (
        fav_pics.map((post, index) => (
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

export default FavoritePicGroup;