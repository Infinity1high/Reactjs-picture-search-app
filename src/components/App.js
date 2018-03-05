import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import './App.css';
import Loader from "./Loader";
import FavoriteContainer from '../containers/FavoriteContainer';
import PicturesContainer from '../containers/PicturesContainer';
import FavoritePicGroupContainer from '../containers/FavoritePicGroupContainer'


class App extends Component {

     componentDidMount(){
     this.props.loadPhotosAction();
     console.log(this.props);
    }


    render() {
        const currentPath = window.location.pathname;
        console.log(currentPath);
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
                    <nav className='navbar navbar-dark bg-dark'>
                        <ul className='navbar-nav '>
                            <li className="nav-item">
                                <NavLink to='/' exact className='nav-link'>Picture Search </NavLink>
                            </li>
                            <li>
                                <NavLink to='/favorite' exact className='nav-link'>Favorite </NavLink>
                            </li>

                            <li>

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
                                    <span className="input-group-text saveBtn"
                                          onClick={() => this.props.saveFavoriteResults(this.props.content, this.props.photos)}>Save</span>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </nav>
                    {loader}
                    <Switch>
                    <Route path='/' exact component={PicturesContainer}/>
                    <Route path='/favorite' component={FavoriteContainer}/>
                    <Route path='/favorite/:id' component={FavoritePicGroupContainer}/>
                    </Switch>
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

// const currentPath = window.location.pathname
// {!currentPath.includes(`chatroom/${param}`) ? <Footer /> : null }




