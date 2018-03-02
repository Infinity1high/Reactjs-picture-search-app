import React, {Component} from 'react';
import PropTypes from 'prop-types';




const FavoritePic = ({imageUrl}) => (
    <div
        className=""
        style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "#C0C0C0"
    }}
        >
        eee
    </div>
);
FavoritePic.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default FavoritePic;