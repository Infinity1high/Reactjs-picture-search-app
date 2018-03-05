import axios from "axios/index";
const SERVER_URL = '//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d23887505ca0929bf9029fac8768775f&format=json&nojsoncallback=1';
const AUTH_URL = '&auth_token=72157691111483562-2d2be411a4085a8c&api_sig=886b8c09c6431349c6a5dac0bfcaa497';
const TEXT_URL = '&text=';
export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_PHOTOS_LOAD_REQUEST = 'ACTION_SEARCH_PHOTOS_LOAD_REQUEST';
export const ACTION_SEARCH_PHOTOS_LOAD_SUCCESS = 'ACTION_SEARCH_PHOTOS_LOAD_SUCCESS';
export const ACTION_SEARCH_PHOTOS_LOAD_FAILURE = 'ACTION_SEARCH_PHOTOS_LOAD_FAILURE';
export const ACTION_SAVE_FAVORITE_RESULTS = 'ACTION_SAVE_FAVORITE_RESULTS';
export const ACTION_REMOVE_FAVORITE_RESULTS = 'ACTION_REMOVE_FAVORITE_RESULTS';
export const ACTION_OPEN_FAVORITE_SECTION = 'ACTION_OPEN_FAVORITE_SECTION';


export function saveFavoriteResults(text_favs, photos_favs) {
    return {
        type: ACTION_SAVE_FAVORITE_RESULTS,
        payload: {
            text_favs,
            photos_favs
        }
    };
}

export function openFavoriteResults(photos_favs) {
    return {
        type: ACTION_OPEN_FAVORITE_SECTION,
        payload: {
            photos_favs
        }
    };
}

export function removeFavoriteResults (removed_item){
    return {
        type: ACTION_REMOVE_FAVORITE_RESULTS,
        payload: {
            removed_item
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
