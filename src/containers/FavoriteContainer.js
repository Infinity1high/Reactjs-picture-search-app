import * as SearchActions from '../store/actions/searchActions';

import Favorite from "../components/Favorite";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    null //instead of  mapDispatchToProps as it is empty
)(Favorite);