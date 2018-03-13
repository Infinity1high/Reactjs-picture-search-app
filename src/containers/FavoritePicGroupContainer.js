import * as SearchActions from '../store/actions/searchActions';

import FavoritePicGroup from "../components/FavoritePicGroup";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    loadPhotosAction: SearchActions.loadPhotosAction,
    openModal: SearchActions.openModal,
    loadNextPhoto: SearchActions.loadNextPhoto
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritePicGroup);