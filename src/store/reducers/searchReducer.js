import * as SearchActions from '../actions/searchActions';



const initState = {
    content: '',
    loader: false,
    photos: [],
    modal: false,
    modal_photo: '',
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

            }
        case SearchActions.ACTION_REMOVE_FAVORITE_RESULTS:
            const updated_photos_favs = [...state.photos_favs];
            updated_photos_favs.splice(action.payload.removed_item,1);
            return {
                ...state,
                photos_favs: updated_photos_favs
            }
        case SearchActions.ACTION_OPEN_MODAL:
            return {
                ...state,
                modal: !state.modal,
                modal_photo: action.payload.img_url
            }

        default:
            return state;
    }
};