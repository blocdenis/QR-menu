import { useRef, useState } from 'react';
import IconShow from '../../SVG/IconShow.jsx';
import IconDeleteImg from '../../SVG/IconDeleteImg.jsx';
import './ImgUpLoaderNew.scss';

function ImgUploaderNew({ id, value, onChange, src, onImageChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.onload = () => {
          const MAX_WIDTH = 144; // Maximum width for the image
          const MAX_HEIGHT = 111; // Maximum height for the image
          let width = image.width;
          let height = image.height;

          if (width > height && width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          } else if (height > width && height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, width, height);
          const resizedDataURL = canvas.toDataURL('image/jpeg', 0.8); 
          setSelectedImage(resizedDataURL);
          onChange({ target: { name: id, value: resizedDataURL } });
          onImageChange(true);
        };
        image.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

    }
  };
  const handleClick = () => {
    imageInputRef.current.click();
  };

  return (
    <div className="image-uploader-container">
      <div className="imgdiv">
        <div className="image-uploader" onClick={handleClick}>
          <label htmlFor="image-input" className="label">
            <div className="upload-box">
              <span className="plusicon">+</span>
              <span className="upload-text">Upload your image</span>
            </div>
            <input
              type="file"
              id="img-input"
              accept="image/*"
              ref={imageInputRef}
              onChange={handleImageChange}
              style={{  display:'none' }}
            />
          </label>
        </div>
        {/* {selectedImage && ( */}
          <div className="uploaded-image-container">
            <div className="action">
              <IconShow />
              <IconDeleteImg />
            </div>
            <img className="imgloaded" src={selectedImage || `data:image/jpeg;base64,${src}`} alt="Uploaded Image" />
          </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default ImgUploaderNew;
