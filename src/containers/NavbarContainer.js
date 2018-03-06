import * as SearchActions from '../store/actions/searchActions';

import Navbar from "../components/Navbar";
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
)(Navbar);