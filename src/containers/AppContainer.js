import * as SearchActions from '../store/actions/searchActions';
import {withRouter} from 'react-router-dom';

import App from "../components/App";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    searchTextChangedAction: SearchActions.searchTextChangedAction,
    loadPhotosAction: SearchActions.loadPhotosAction,
    saveFavoriteResults: SearchActions.saveFavoriteResults

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);