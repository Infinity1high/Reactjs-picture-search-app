import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Loader from "./Loader";
import NavbarContainer from '../containers/NavbarContainer';
import FavoriteContainer from '../containers/FavoriteContainer';
import PicturesContainer from '../containers/PicturesContainer';
import FavoritePicGroupContainer from '../containers/FavoritePicGroupContainer'


class App extends Component {
    componentDidMount() {
        this.props.loadPhotosAction();
        console.log(this.props);
    }

    componentWillMount() {
        console.log('mounting');

    }


    render() {
        let loader;
        if (this.props.loader) {
            loader = <Loader/>
        }
        else {
            loader = ''
        }
        return (
            <BrowserRouter>
                <div>
                    <NavbarContainer/>
                    <div className="container">
                        <div className="row">
                            {loader}
                            <Switch>
                                <Route path='/' exact component={PicturesContainer}/>
                                <Route path='/favorite' exact component={FavoriteContainer}/>
                                <Route path='/favorite/:id' component={FavoritePicGroupContainer}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );

    }

}

export default App;





