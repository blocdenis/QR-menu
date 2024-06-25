import { useEffect, useState } from 'react';
import Logo from '../../../public/vite.svg'
import getFullInfoRestaurant from '../../Fetch/getFullInfoRestaurant';
function LogoImg() {
  const [restaurantLogo, setRestaurantLogo] = useState('');
  useEffect(() => {
    getFullInfoRestaurant()
      .then(allRestaurantData => {
        if(allRestaurantData.restaurant_data['logo']){
          setRestaurantLogo(`data:image/jpeg;base64,${allRestaurantData.restaurant_data['logo']}`)
        }
       
      })
      .catch(error => {
        console.error(error);
      });
  }, [restaurantLogo]);

  // const [fileUploadStatus, setFileUploadStatus] = useState('idle');
  // const fileInputRef = useRef(null);

  const handleClick = e => {
    e.preventDefault();
    const fileInput = fileInputRef.current;
    if (!fileInput) return;
    fileInput.click();
  };
  // const handleFileChange = e => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const imgUrl = e.target.result;
  //     setImgUrl(imgUrl);
  //     if(file){ 
  //     const formData = new FormData();
  //     formData.append('image', file);

  //     const xhr = new XMLHttpRequest();
  //     xhr.open('POST', 'http://localhost:5173/upload-image');
  //     xhr.onload = () => {
  //       if (xhr.status === 200) {
  //         setFileUploadStatus('success');
  //       } else {
  //         setFileUploadStatus('error');
  //       }
  //     };
  //     xhr.send(formData);
  //   }
  //   console.log('Selected file:', file);
  //   };
  //   reader.readAsDataURL(file); 
  // };
 
   
  return (
    <div>
      <a onClick={handleClick}>
      {restaurantLogo ? <img src={restaurantLogo} alt="Your logo" /> : <img src={Logo} alt="Your logo" />}
        {/* <h4>Your logo</h4> */}
      </a>
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      {fileUploadStatus === 'success' && <p>Файл успішно завантажено!</p>}
      {fileUploadStatus === 'error' && <p>Помилка завантаження файлу!</p>} */}
    </div>
  );
}

export default LogoImg;
