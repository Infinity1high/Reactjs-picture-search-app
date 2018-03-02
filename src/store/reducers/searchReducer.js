import * as SearchActions from '../actions/searchActions';
import {ACTION_LOCATION_CHANGE} from "../actions/searchActions";


const initState = {
    content: '',
    loader: false,
    photos: [],
    favs: ['name','11'],
    photos_favs: [{
        favs: '',
        photos: []
    }],

};

export default  (state = initState, action) => {
    switch (action.type) {
        case SearchActions.ACTION_SEARCH_TEXT_CHANGED:
            return {
                ...state,
                content: action.payload.text,

            };
        case SearchActions.ACTION_SEARCH_PHOTOS_LOAD_REQUEST:
            return {
                ...state,
                loader: true,
            }
        case SearchActions.ACTION_SEARCH_PHOTOS_LOAD_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loader: false

            };
        case SearchActions.ACTION_SAVE_FAVORITE_RESULTS:
            return {
               ...state,
                photos_favs:  [
                    ...state.photos_favs, //get previos items
                    {
                        favs: action.payload.text_favs, //get text from input
                        photos: action.payload.photos_favs, //get pics from input
                    }


                ]
                // favs: [...state.favs,
                //     action.payload.text],
            }
        default:
            return state;
    }
};