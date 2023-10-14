import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageScrollbar = ({data}) => {
    const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + data.length) % data.length);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FaArrowAltCircleLeft className="text-2xl" onClick={prevImage}/>
    <div className="flex items-center justify-center" onClick={nextImage}>
      <img
        src={data[currentImage]}
        alt={`Image ${currentImage}`}
        width={1000}
        height={500}
      />
    </div>
    <FaArrowAltCircleRight className="text-2xl" onClick={nextImage} />
  </div>
  )
}

export default ImageScrollbar