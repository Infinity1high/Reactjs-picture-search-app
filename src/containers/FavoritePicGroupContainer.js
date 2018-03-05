import * as SearchActions from '../store/actions/searchActions';

import FavoritePicGroup from "../components/Favorite";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    loadPhotosAction: SearchActions.loadPhotosAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritePicGroup);