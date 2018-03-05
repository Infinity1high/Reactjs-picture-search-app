import React, {Component} from 'react';
import FavoritePic from './FavoritePic';
import {Link, Route, BrowserRouter} from 'react-router-dom';

class Favorite extends Component {


    renderFavPictures = () => (
        this.props.photos_favs.map((post, index) => {
            const id= this.props.match.params.path;
            console.log(id);
            if (post.photos.length > 0)
                return (
                    <div key={index}>
                        <div className='favName'>{post.favs}
                            <i className="fa fa-trash-o" onClick={() => this.props.removeFavoriteResults(index)}></i>
                        </div>
                        <Link to={'/favorite/' + index}
                              >
                        <div className='favPicture'>
                            {post.photos.slice(0, 6).map((item, key1) => (
                                <FavoritePic
                                    key={key1}
                                    imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}/>
                            ))}
                            {/*<FavoritePic*/}
                            {/*imageUrl={`https://farm${post.photos[3].farm}.staticflickr.com/${post.photos[3].server}/${post.photos[3].id}_${post.photos[3].secret}.jpg`}/>*/}
                        </div>
                        </Link>
                    </div>)
        })
    );

    render() {
        console.log(this.props);
        return (
            <BrowserRouter>
            <div className='favContainer'>
                {this.renderFavPictures()}
            </div>
            </BrowserRouter>

        )
    }
}
export default Favorite;