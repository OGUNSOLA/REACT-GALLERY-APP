import React, { Component } from 'react';
import image_404 from '../404_Error.jpg'; 

export default class SearchGallery extends Component {
    render() {
        return (
            <div>
              <img src={image_404} alt="image_404" />
            </div>
        )
    }
}

