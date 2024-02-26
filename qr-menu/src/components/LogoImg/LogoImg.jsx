import { useRef } from 'react';

function LogoImg() {
  const fileInputRef = useRef(null);
  const handleClick = e => {
    e.preventDefault();
    const faileInput = fileInputRef.current;
    if (!faileInput) return;
    faileInput.click();
  };
  const handleFileChange = e => {
    const faile = e.target.files[0];
    if (!faile) return;
    const reader = new FileReader();
    reader.onload = () => {
      console.log('Loading: successfully!');
    };
    reader.readAsDataURL(faile);
  };

  return (
    <div>
      <a href="#" onClick={handleClick}>
        <img src="image.png" alt="" />
        <h4>Your logo</h4>
      </a>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default LogoImg;
