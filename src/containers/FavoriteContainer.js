import * as SearchActions from '../store/actions/searchActions';

import Favorite from "../components/Favorite";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    removeFavoriteResults: SearchActions.removeFavoriteResults
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorite);