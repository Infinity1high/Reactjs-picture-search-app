import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router'


class Navbar extends Component {

    componentWillMount() {
        console.log('mounting');
        this.props.history.listen((location) => {
            let search = document.getElementById('search');
            console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
            if (location.pathname.includes('/favorite')) {
                search.classList.add('hidden');
            }
            else {
                search.classList.remove('hidden');
            }
        });

    }

    render() {

        console.log(this.props.match.url);
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <ul className='navbar-nav '>
                        <li className="nav-item">
                            <NavLink to='/' exact className='nav-link'>Picture Search </NavLink>
                        </li>
                        <li>
                            <NavLink to='/favorite' exact className='nav-link'>Favorite </NavLink>
                        </li>
                        <li>
                            <div className='input-group mb-3 search' id="search">
                                <input
                                    onChange={(e) => {
                                        console.log(e);
                                        this.props.searchTextChangedAction(e.target.value);
                                        this.props.loadPhotosAction(e.target.value);
                                    }}
                                />
                                <div className="input-group-append " id='search'>
                                <span
                                      className="input-group-text saveBtn"
                                      onClick={() => this.props.saveFavoriteResults(this.props.content, this.props.photos)}
                                >
                                    Save</span>
                                </div>


                            </div>
                        </li>

                    </ul>

                </div>
            </nav>


        )
    }
};

export default withRouter(Navbar);