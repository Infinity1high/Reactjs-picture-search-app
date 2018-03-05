import React, {Component} from 'react';
import FavoritePic from './FavoritePic';



class Favorite extends Component {


    renderFavPictures =() => (
       this.props.photos_favs.map((post, index)=> {
           if (post.photos.length>0)
            return (
            <div className='favPicture'
                 key={index}>
                <div className='favName'>{post.favs}
                    <i className="fa fa-trash-o" onClick={()=>this.props.removeFavoriteResults(index)}></i>
                </div>
                <FavoritePic
                    imageUrl={`https://farm${post.photos[1].farm}.staticflickr.com/${post.photos[1].server}/${post.photos[1].id}_${post.photos[1].secret}.jpg`} />
                <FavoritePic
                    imageUrl={`https://farm${post.photos[2].farm}.staticflickr.com/${post.photos[2].server}/${post.photos[2].id}_${post.photos[2].secret}.jpg`} />
                <FavoritePic
                    imageUrl={`https://farm${post.photos[3].farm}.staticflickr.com/${post.photos[3].server}/${post.photos[3].id}_${post.photos[3].secret}.jpg`} />
            </div>)

})
);
    render() {

        return (
            <div className='favContainer'>
                    {this.renderFavPictures()}
            </div>
        )

    }
}

export default Favorite;