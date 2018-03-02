import React, {Component} from 'react';
import FavoritePic from './FavoritePic';



class Favorite extends Component {

    renderFavPictures =() => (
       this.props.favs.map((item)=> (

            <div className='favPicture' >{item}


            </div>
                ))
);
    render() {

        return (
            <div className='favSection'>
                <div >
                    {this.renderFavPictures()}
                </div>
            </div>
        )

    }
}

export default Favorite;