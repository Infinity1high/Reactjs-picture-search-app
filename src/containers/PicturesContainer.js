import * as SearchActions from '../store/actions/searchActions';

import Pictures from "../components/Pictures";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    openModal: SearchActions.openModal

};

export default connect(
    mapStateToProps,
    mapDispatchToProps //instead of  mapDispatchToProps as it is empty
)(Pictures);