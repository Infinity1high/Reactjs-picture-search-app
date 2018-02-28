import React, {Component} from 'react';

import './App.css';
import Picture from "./Picture";


class App extends Component {

     componentDidMount(){
     this.props.loadPhotosAction();
    }




    renderPictures = () => (
        this.props.photos.map((post, index) => (
            <Picture
                key={index}
                imageUrl={`https://farm${post.farm}.staticflickr.com/${post.server}/${post.id}_${post.secret}.jpg`}
            />
        ))
    );

    render() {
        return (
            <div className="container">
                {/*<Navbar searchText={this.props.content} onSearchChanged={(e) => {*/}
                {/*console.log(e);*/}
                {/*this.props.searchTextChangedAction(e.target.value);*/}
                {/*this.props.loadPhotosAction(e.target.value);*/}

                {/*}}/>*/}

                <div className="row ">
                    <nav className='nav'>
                        <div className='input-group mb-3 search'>
                            <input
                                onChange={(e) => {
                                    console.log(e);
                                    // this.props.searchTextChangedAction(e.target.value);
                                    this.props.loadPhotosAction(e.target.value);
                                }}
                            />

                            <div className="input-group-append">
                                <span className="input-group-text">Search</span>
                            </div>
                        </div>
                    </nav>
                    <div className='flex_container'>
                        {this.renderPictures()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;




