import React, {Component} from 'react';
import PropTypes from 'prop-types';




const Picture = ({imageUrl}) => (
    <div
        className="cont"
        style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundColor: "#C0C0C0"
        }}
    >
    </div>
);

Picture.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default Picture;