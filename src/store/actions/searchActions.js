import axios from "axios/index";
const SERVER_URL = '//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d4d4115f135db75f97687b564ae5ff9d&format=json&nojsoncallback=1';
const SERVER_URL_1 = '//api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1f151ce655586c89d045c055df10edf6&format=json&nojsoncallback=1';
const AUTH_URL = '&auth_token=72157664634306637-30c1b9fc5618bbda&api_sig=8aee7905ba9019fb5b531e75dc5d6879';
const TEXT_URL = '&text='
export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_PHOTOS_LOAD_REQUEST = 'ACTION_SEARCH_PHOTOS_LOAD_REQUEST';
export const ACTION_SEARCH_PHOTOS_LOAD_SUCCESS = 'ACTION_SEARCH_PHOTOS_LOAD_SUCCESS';
export const ACTION_SEARCH_PHOTOS_LOAD_FAILURE = 'ACTION_SEARCH_PHOTOS_LOAD_FAILURE';
export const ACTION_SAVE_FAVORITE_RESULTS = 'ACTION_SAVE_FAVORITE_RESULTS';
export const ACTION_REMOVE_FAVORITE_RESULTS = 'ACTION_REMOVE_FAVORITE_RESULTS';
export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export const ACTION_LOAD_NEXT_PHOTO= 'ACTION_LOAD_NEXT_PHOTO';





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

export function openModal (img_url, index) {
    return {
        type: ACTION_OPEN_MODAL,
        payload: {
            img_url,
            index
        }
    }
}

export function loadNextPhoto (index) {
    return {
        type: ACTION_LOAD_NEXT_PHOTO,
        payload: {
            index
        }
    }
}

