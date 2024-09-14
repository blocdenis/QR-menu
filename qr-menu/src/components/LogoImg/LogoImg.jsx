import { useEffect, useState } from 'react';
import Logo from '../../../public/vite.svg'
import getFullInfoRestaurant from '../../Fetch/getFullInfoRestaurant';
function LogoImg({ rest_logo }) {
  const [restaurantLogo, setRestaurantLogo] = useState('');
  // useEffect(() => {
  //   getFullInfoRestaurant()
  //     .then(allRestaurantData => {
  //       if(allRestaurantData.logo){
  //         setRestaurantLogo(`data:image/jpeg;base64,${allRestaurantData.logo}`)
  //       }
       
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [restaurantLogo]);


  useEffect(() => {
    if (rest_logo) {
      setRestaurantLogo(`data:image/jpeg;base64,${rest_logo}`);
    } else {
      getFullInfoRestaurant()
        .then(allRestaurantData => {
          if (allRestaurantData.logo) {
            setRestaurantLogo(`data:image/jpeg;base64,${allRestaurantData.logo}`);
          } else {
            setRestaurantLogo(Logo); 
          }
        })
        .catch(error => {
          console.error(error);
          setRestaurantLogo(Logo); 
        });
    }
  }, [rest_logo]);

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
