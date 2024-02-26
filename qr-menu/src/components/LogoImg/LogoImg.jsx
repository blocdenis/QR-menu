import { useRef, useState } from 'react';

function LogoImg() {
  const [imgUrl, setImgUrl] = useState(null);
  const [fileUploadStatus, setFileUploadStatus] = useState('idle');
  const fileInputRef = useRef(null);

  const handleClick = e => {
    e.preventDefault();
    const fileInput = fileInputRef.current;
    if (!fileInput) return;
    fileInput.click();
  };
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const imgUrl = e.target.result;
      setImgUrl(imgUrl);
      if(file){ 
      const formData = new FormData();
      formData.append('image', file);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:5173/upload-image');
      xhr.onload = () => {
        if (xhr.status === 200) {
          setFileUploadStatus('success');
        } else {
          setFileUploadStatus('error');
        }
      };
      xhr.send(formData);
    }
    console.log('Selected file:', file);
    };
    reader.readAsDataURL(file); 
  };
  
  return (
    <div>
      <a onClick={handleClick}>
      {imgUrl ? <img src={imgUrl} alt="Your logo" /> : <img src="placeholder.jpg" alt="Your logo" />}
        {/* <h4>Your logo</h4> */}
      </a>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      {fileUploadStatus === 'success' && <p>Файл успішно завантажено!</p>}
      {fileUploadStatus === 'error' && <p>Помилка завантаження файлу!</p>}
    </div>
  );
}

export default LogoImg;
