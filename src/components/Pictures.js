import React, {Component} from 'react';
import Picture from './Picture';
import {withRouter} from 'react-router-dom';


class Pictures extends Component {

    renderPictures = () => (
        this.props.photos.map((post, index) => (
            <Picture

                key={index}
                imageUrl={`https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`}
            />
        ))
    );

    render() {
        console.log(this.props);
        return (

            <div className='flex_container'>
                {this.renderPictures()}
            </div>
        )
    }


}
export default Pictures;