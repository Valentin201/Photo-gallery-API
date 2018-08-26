import React from 'react';
import Image from './Image';
import '../App.css';
import ImageNotFound from './ImageNotfound'




const ImageGallery = (props) => {
 let data = props.data;
  let images; 


if(data.length > 0) {images = data.map((img) => <Image url={img.urls.small} key={img.id} download={img.links.download} name={img.user.name}/>) }
else {
 images = <ImageNotFound/>
}

return (
      <ul className="img-list">
      {images}
      </ul>
    );
}

export default ImageGallery ;
 