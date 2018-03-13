import React from 'react';
import PropTypes from 'prop-types';


const FavoritePic = ({imageUrl, index}) => (
    <div
        className="FavoritePic"
        style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundColor: "#C0C0C0"
        }}
    >

    </div>
);
FavoritePic.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default FavoritePic;