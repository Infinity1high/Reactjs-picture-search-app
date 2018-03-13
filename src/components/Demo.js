import React from 'react';

class Demo extends React.Component {
    render() {
        const style = {
            width: 400,
            height: 300,
            backgroundSize: 'cover'
        };
        const config = {
            viewedImageSize: 0.8,
            backgroundOpacity: 0.6
        };
        return (
            <div>
                <ImageViewer
                    style={style}
                    config={config}
                    image={this.props.modal_photo}
                />
            </div>
        );
    }
}

export default Demo;