import React, {Component} from 'react';
import FavoritePic from './FavoritePic';
import {Link, Route, BrowserRouter} from 'react-router-dom';
import {withRouter} from 'react-router';
import FavoritePicGroupContainer from "../containers/FavoritePicGroupContainer";


class Favorite extends Component {

    renderFavPictures = () => (
        this.props.photos_favs.map((post, index) => {
            this.props.match.params.id = index;
            let id = index;
            console.log(this.props.match.params.id);
            if (post.photos.length > 0)
                return (
                    <div key={index}>
                        <div className='favName'>
                            {post.favs}
                            <i
                                className="fa fa-trash-o"
                               onClick={() => this.props.removeFavoriteResults(index)}>

                            </i>
                        </div>
                        <Link to={`/favorite/${index}`} >
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

            <div className='favContainer'>
                {this.renderFavPictures()}
            </div>



        )
    }
}
export default withRouter(Favorite);