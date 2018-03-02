import axios from "axios/index";
const SERVER_URL = '//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b1b9ec77efa8005894263ccd60021409&format=json&nojsoncallback=1';
const AUTH_URL = '&auth_token=72157693265171994-e62518929c49189a&api_sig=9741775ae6988f2542c70e2e7e729d70';
const TEXT_URL = '&text=';
export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_PHOTOS_LOAD_REQUEST = 'ACTION_SEARCH_PHOTOS_LOAD_REQUEST';
export const ACTION_SEARCH_PHOTOS_LOAD_SUCCESS = 'ACTION_SEARCH_PHOTOS_LOAD_SUCCESS';
export const ACTION_SEARCH_PHOTOS_LOAD_FAILURE = 'ACTION_SEARCH_PHOTOS_LOAD_FAILURE';
export const ACTION_SAVE_FAVORITE_RESULTS = 'ACTION_SAVE_FAVORITE_RESULTS';


export function saveFavoriteResults(text_favs, photos_favs) {
    return {
        type: ACTION_SAVE_FAVORITE_RESULTS,
        payload: {
            text_favs,
            photos_favs
        }
    };
}

export function searchTextChangedAction(text) {
    return {
        type: ACTION_SEARCH_TEXT_CHANGED,
        payload: {text}
    };
}

export function loadPhotosAction(searchText) {
    console.log(searchText);
    return (dispatch) => {
        dispatch({type: ACTION_SEARCH_PHOTOS_LOAD_REQUEST});
        var URL;
        if (searchText===''){
            URL = SERVER_URL+AUTH_URL;
        }
        else {
            URL = SERVER_URL+TEXT_URL+searchText;
        }
            axios.get(URL)
                .then((response) => {
                    const {data: {photos: {photo}}} = response;
                    console.log(response);
                    dispatch({
                        type: ACTION_SEARCH_PHOTOS_LOAD_SUCCESS,
                        payload: {photos: photo},

                    });
                })
                .catch((err) => dispatch({type: ACTION_SEARCH_PHOTOS_LOAD_FAILURE, payload: {err}}))
            };
}
