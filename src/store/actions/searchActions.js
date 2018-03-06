import axios from "axios/index";
const SERVER_URL = '//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=93fa20a32f75348b7ba9167fb392e4ef&format=json&nojsoncallback=1';
const AUTH_URL = '&auth_token=72157666438390278-44dc0c90a3109e64&api_sig=344ff0b82822ed65859990e2735ab32c';
const TEXT_URL = '&text=';
export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_PHOTOS_LOAD_REQUEST = 'ACTION_SEARCH_PHOTOS_LOAD_REQUEST';
export const ACTION_SEARCH_PHOTOS_LOAD_SUCCESS = 'ACTION_SEARCH_PHOTOS_LOAD_SUCCESS';
export const ACTION_SEARCH_PHOTOS_LOAD_FAILURE = 'ACTION_SEARCH_PHOTOS_LOAD_FAILURE';
export const ACTION_SAVE_FAVORITE_RESULTS = 'ACTION_SAVE_FAVORITE_RESULTS';
export const ACTION_REMOVE_FAVORITE_RESULTS = 'ACTION_REMOVE_FAVORITE_RESULTS';




export function saveFavoriteResults(text_favs, photos_favs) {
    return {
        type: ACTION_SAVE_FAVORITE_RESULTS,
        payload: {
            text_favs,
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
