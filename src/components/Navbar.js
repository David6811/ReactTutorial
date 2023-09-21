import * as Icon from 'react-bootstrap-icons';
import { useRef } from "react";


function Navbar({ onValueChange }) {

  const HomeElementRef = useRef(null);
  const FAQElementRef = useRef(null);

  const handleClick = (value) => {
    console.log(`Button clicked with value: ${value}`);

    if (value === 'Home') {
      HomeElementRef.current.className = 'nav-link  text-white active';
      FAQElementRef.current.className = 'nav-link  text-white';
    } else if (value === 'FAQ') {
      HomeElementRef.current.className = 'nav-link  text-white ';
      FAQElementRef.current.className = 'nav-link  text-white active';
    } 


    onValueChange(value);
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark " style={{ height: '100vh' }}>

      <ul className="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a onClick={() => handleClick('Home')} ref={HomeElementRef}  className="nav-link  text-white active">
            <div className="d-flex justify-content-between" >
              <div className="fw-bold"><Icon.House /><span className='m-3' >Home</span></div>
            </div>
          </a>
        </li>
        <li>
          <a onClick={() => handleClick('FAQ')} ref={FAQElementRef} className="nav-link  text-white">
            <div className="d-flex justify-content-between" >
              <div className="fw-bold"><Icon.QuestionCircle /><span className='m-3' >FAQ</span></div>
            </div>
          </a>
        </li>
      </ul>
    </div>

  )
}

export default Navbar;