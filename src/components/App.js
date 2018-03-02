import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Loader from "./Loader";
import FavoriteContainer from '../containers/FavoriteContainer';
import PicturesContainer from '../containers/PicturesContainer';


class App extends Component {

     componentDidMount(){
     this.props.loadPhotosAction();

    }



    /*renderPictures = () => (
        this.props.photos.map((post, index) => (
            <Picture

                key={index}
                imageUrl={`https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`}
            />
        ))
    );*/


    render() {

        let loader;
        let favs;
        if (this.props.loader) {
            loader = <Loader />
        }
        else {
            loader = ''
        }
        return (
            <BrowserRouter>
            <div className="container">
                {/*<Navbar searchText={this.props.content} onSearchChanged={(e) => {*/}
                {/*console.log(e);*/}
                {/*this.props.searchTextChangedAction(e.target.value);*/}
                {/*this.props.loadPhotosAction(e.target.value);*/}

                {/*}}/>*/}

                <div className="row">
                    <nav className='nav'>
                        <div className="container">
                            <div className="row">
                                <div className='col-md-4'>

                                    <div className='input-group mb-3 search'>
                                        <input
                                            onChange={(e) => {
                                                console.log(e);
                                                this.props.searchTextChangedAction(e.target.value);
                                                this.props.loadPhotosAction(e.target.value);
                                                favs = e.target.value;
                                            }}
                                        />

                                        <div className="input-group-append">
                                            <span className="input-group-text saveBtn" onClick={() => this.props.saveFavoriteResults(this.props.content, this.props.photos)} >Save</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'  >
                                    <Link to='/pictures'>Picture Search </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to='/favorite'>Favorite </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {loader}
                    <Route path='/pictures' component={PicturesContainer}/>
                    <Route path='/favorite' component={FavoriteContainer}/>

                    {/*<div className='flex_container'>*/}
                        {/*{this.renderPictures()}*/}
                    {/*</div> */}
                </div>
            </div>
            </BrowserRouter>
        );

    }

}

export default App;




