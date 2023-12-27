import React from 'react';
import '../css/scss/navbarsystem.scss';
import { useState } from 'react';
import { Link} from 'react-router-dom';

function NavbarSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCategor, setIsOpenCategor] = useState(false);
  const openOrder= ()=>{setIsOpen(!isOpen)}
  const openCategor= ()=>{setIsOpenCategor(!isOpenCategor)}
  return (
    <div className='navbar-wrap'>
    <button onClick= {openOrder} className="btn-nav btn-table">
        <div className='svg-table'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path d="M3.288 15.116L4.635 11.769C4.721 11.5783 4.85033 11.4216 5.023 11.299C5.19633 11.1763 5.38867 11.115 5.6 11.115H8.058V6.30197C5.77733 6.25664 3.864 5.97131 2.318 5.44597C0.772667 4.92064 0 4.30397 0 3.59597C0 2.83464 0.827667 2.19231 2.483 1.66897C4.13833 1.14564 6.16333 0.883972 8.558 0.883972C10.9567 0.883972 12.9827 1.14564 14.636 1.66897C16.2893 2.19231 17.116 2.83464 17.116 3.59597C17.116 4.31597 16.34 4.93597 14.788 5.45597C13.236 5.97464 11.326 6.25664 9.058 6.30197V11.115H11.516C11.7233 11.115 11.9147 11.1763 12.09 11.299C12.2647 11.4216 12.395 11.5783 12.481 11.769L13.827 15.115H12.789L11.589 12.115H5.527L4.327 15.115H3.289L3.288 15.116ZM8.558 5.30697C10.354 5.30697 11.972 5.13964 13.412 4.80497C14.852 4.4703 15.732 4.06697 16.052 3.59497C15.732 3.12297 14.852 2.71964 13.412 2.38497C11.972 2.05031 10.354 1.88331 8.558 1.88397C6.762 1.88397 5.144 2.05131 3.704 2.38597C2.264 2.72064 1.384 3.12397 1.064 3.59597C1.384 4.06797 2.264 4.47131 3.704 4.80597C5.144 5.14064 6.762 5.30697 8.558 5.30697Z" fill="#8E8E8E"/>
            </svg>
        </div>
            <h4 className='btn-title'>Tables</h4>
   
              <svg className='svg-select' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1.65453 7.60956L5.62948 3.65277C5.83411 3.44908 6.16589 3.44907 6.37052 3.65277L10.3455 7.60956C10.6756 7.93816 10.4418 8.5 9.97495 8.5H2.02505C1.55822 8.5 1.32442 7.93816 1.65453 7.60956Z" fill="#8E8E8E"/>
              </svg>
    </button>
    <Link to={'/orders'} className= 'btn-nav btn-link' style={{display: isOpen ? 'block' : 'none'}}>
      <h4 className='btn-title-orders'>Orders</h4>
    </Link>
    {/* menu */}
   
    <button onClick={openCategor} className='btn-nav'>
    <div className='svg-menu'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13.885 9.59198V8.66197C14.4217 8.38997 14.997 8.18598 15.611 8.04998C16.225 7.91398 16.8547 7.84598 17.5 7.84598C17.8693 7.84598 18.2237 7.86964 18.563 7.91698C18.903 7.96431 19.2537 8.03164 19.615 8.11898V9.02698C19.2663 8.91564 18.9263 8.83831 18.595 8.79498C18.2637 8.75231 17.8987 8.73098 17.5 8.73098C16.8533 8.73098 16.2227 8.80364 15.608 8.94898C14.9927 9.09431 14.4183 9.30864 13.885 9.59198ZM13.885 15.054V14.084C14.3963 13.8126 14.9683 13.6093 15.601 13.474C16.2337 13.3373 16.8667 13.269 17.5 13.269C17.8693 13.269 18.2237 13.2926 18.563 13.34C18.903 13.388 19.2537 13.4553 19.615 13.542V14.45C19.2663 14.3386 18.9263 14.2613 18.595 14.218C18.2637 14.1753 17.8987 14.154 17.5 14.154C16.8533 14.154 16.2227 14.232 15.608 14.388C14.9927 14.5446 14.4183 14.7666 13.885 15.054ZM13.885 12.342V11.373C14.4217 11.101 14.997 10.8973 15.611 10.762C16.2243 10.626 16.854 10.558 17.5 10.558C17.8693 10.558 18.2237 10.5813 18.563 10.628C18.903 10.676 19.2537 10.7436 19.615 10.831V11.738C19.2663 11.6266 18.9263 11.5496 18.595 11.507C18.2637 11.4636 17.8987 11.442 17.5 11.442C16.8533 11.442 16.2227 11.5213 15.608 11.68C14.9927 11.838 14.4183 12.0586 13.885 12.342ZM6.5 16.038C7.37333 16.038 8.22233 16.1383 9.047 16.339C9.87233 16.5396 10.69 16.8663 11.5 17.319V7.50798C10.778 6.99264 9.98233 6.60598 9.113 6.34798C8.24433 6.09064 7.37333 5.96198 6.5 5.96198C5.9 5.96198 5.37467 5.99764 4.924 6.06897C4.47333 6.14097 3.97333 6.27431 3.424 6.46898C3.26933 6.52031 3.16 6.59398 3.096 6.68998C3.032 6.78664 3 6.89264 3 7.00798V16.023C3 16.203 3.064 16.3343 3.192 16.417C3.32067 16.5003 3.46167 16.5103 3.615 16.447C3.98033 16.3236 4.40267 16.2246 4.882 16.15C5.36067 16.0753 5.9 16.038 6.5 16.038ZM12.5 17.319C13.31 16.8663 14.1277 16.5396 14.953 16.339C15.7777 16.139 16.6267 16.039 17.5 16.039C18.1 16.039 18.6393 16.076 19.118 16.15C19.5973 16.2246 20.0197 16.3233 20.385 16.446C20.5383 16.51 20.6793 16.5003 20.808 16.417C20.936 16.3336 21 16.2023 21 16.023V7.00798C21 6.89264 20.968 6.78998 20.904 6.69998C20.84 6.60997 20.731 6.53331 20.577 6.46997C20.027 6.27464 19.5267 6.14131 19.076 6.06998C18.6253 5.99798 18.1 5.96198 17.5 5.96198C16.6267 5.96198 15.7557 6.09064 14.887 6.34798C14.0177 6.60598 13.222 6.99264 12.5 7.50798V17.319ZM12 18.769C11.1867 18.213 10.3133 17.7856 9.38 17.487C8.44667 17.1876 7.48667 17.038 6.5 17.038C5.98 17.038 5.46867 17.0816 4.966 17.169C4.464 17.2563 3.97533 17.3963 3.5 17.589C3.13733 17.7336 2.79667 17.69 2.478 17.458C2.15933 17.226 2 16.9053 2 16.496V6.83098C2 6.58364 2.065 6.35398 2.195 6.14198C2.325 5.93064 2.50733 5.78331 2.742 5.69998C3.32933 5.44131 3.94033 5.25364 4.575 5.13698C5.20967 5.02031 5.85133 4.96198 6.5 4.96198C7.48 4.96198 8.43533 5.10298 9.366 5.38498C10.2973 5.66698 11.1753 6.07697 12 6.61497C12.8247 6.07697 13.7027 5.66698 14.634 5.38498C15.5653 5.10298 16.5207 4.96198 17.5 4.96198C18.1487 4.96198 18.7903 5.02031 19.425 5.13698C20.0597 5.25364 20.6707 5.44131 21.258 5.69998C21.4927 5.78331 21.675 5.93064 21.805 6.14198C21.935 6.35398 22 6.58364 22 6.83098V16.496C22 16.9053 21.828 17.2193 21.484 17.438C21.1393 17.658 20.7727 17.6953 20.384 17.55C19.9213 17.37 19.4487 17.24 18.966 17.16C18.4833 17.0786 17.9947 17.038 17.5 17.038C16.5133 17.038 15.5533 17.1876 14.62 17.487C13.6867 17.7856 12.8133 18.213 12 18.769Z" fill="#8E8E8E"/>
        </svg>
    </div>
    <h4 className='btn-title'>Menu</h4>
        <svg className='svg-select' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1.65453 7.60956L5.62948 3.65277C5.83411 3.44908 6.16589 3.44907 6.37052 3.65277L10.3455 7.60956C10.6756 7.93816 10.4418 8.5 9.97495 8.5H2.02505C1.55822 8.5 1.32442 7.93816 1.65453 7.60956Z" fill="#8E8E8E"/>
        </svg>
    </button>
      <Link to={'/categor'} className= 'btn-nav btn-link' style={{display: isOpenCategor ? 'block' : 'none'}}>
        <h4 className='btn-title-orders'>Categories</h4>
      </Link>
 {/* settings */}
   
    <button className='btn-nav'>
      <div className='svg-settings'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3C16.7348 3 16.4804 3.10536 16.2929 3.29289C16.1054 3.48043 16 3.73478 16 4V5H4C3.73478 5 3.48043 5.10536 3.29289 5.29289C3.10536 5.48043 3 5.73478 3 6C3 6.26522 3.10536 6.51957 3.29289 6.70711C3.48043 6.89464 3.73478 7 4 7H16V8C16 8.26522 16.1054 8.51957 16.2929 8.70711C16.4804 8.89464 16.7348 9 17 9C17.2652 9 17.5196 8.89464 17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8V7H20C20.2652 7 20.5196 6.89464 20.7071 6.70711C20.8946 6.51957 21 6.26522 21 6C21 5.73478 20.8946 5.48043 20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H18V4ZM4 11C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H6V14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15C7.26522 15 7.51957 14.8946 7.70711 14.7071C7.89464 14.5196 8 14.2652 8 14V13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11H8V10C8 9.73478 7.89464 9.48043 7.70711 9.29289C7.51957 9.10536 7.26522 9 7 9C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10V11H4ZM3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H16V16C16 15.7348 16.1054 15.4804 16.2929 15.2929C16.4804 15.1054 16.7348 15 17 15C17.2652 15 17.5196 15.1054 17.7071 15.2929C17.8946 15.4804 18 15.7348 18 16V17H20C20.2652 17 20.5196 17.1054 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21C16.7348 21 16.4804 20.8946 16.2929 20.7071C16.1054 20.5196 16 20.2652 16 20V19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18Z" fill="#8E8E8E"/>
        </svg>
      </div>
          <h4 className='btn-title'>Settings</h4>
              <svg className='svg-select' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1.65453 7.60956L5.62948 3.65277C5.83411 3.44908 6.16589 3.44907 6.37052 3.65277L10.3455 7.60956C10.6756 7.93816 10.4418 8.5 9.97495 8.5H2.02505C1.55822 8.5 1.32442 7.93816 1.65453 7.60956Z" fill="#8E8E8E"/>
              </svg>
    </button>
    </div>
  )
}

export default NavbarSystem