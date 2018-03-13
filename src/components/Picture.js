import React from 'react';
import PropTypes from 'prop-types';


const Picture = ({imageUrl, click}) => (
    <div
        className="cont"
        style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundColor: "#C0C0C0",
        }}
        onClick={click}
    >
    </div>
);

Picture.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default Picture;