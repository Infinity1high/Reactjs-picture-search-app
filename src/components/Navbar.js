import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router'


class Navbar extends Component {

    render() {
        console.log(this.props.match.url);
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <ul className='navbar-nav '>
                    <li className="nav-item">
                        <NavLink to='/' exact className='nav-link'>Picture Search </NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorite' exact className='nav-link'>Favorite </NavLink>
                    </li>
                    <li>
                        {!this.props.match.url.includes('favorite') ?
                        <div className='input-group mb-3 search'>
                            <input
                                onChange={(e) => {
                                    console.log(e);
                                    this.props.searchTextChangedAction(e.target.value);
                                    this.props.loadPhotosAction(e.target.value);
                                }}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text saveBtn"
                                       onClick={() => this.props.saveFavoriteResults(this.props.content, this.props.photos)}
                                >
                                    Save</span>
                            </div>
                        </div>
                            : null }
                    </li>
                </ul>
            </nav>
        )
    }
};


export default withRouter(Navbar);