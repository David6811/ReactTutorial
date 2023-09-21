import * as Icon from 'react-bootstrap-icons';

function Navbar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark " style={{ height: '100vh' }}>

        <ul className="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a  className="nav-link  text-white active">
              <div className="d-flex justify-content-between" >
                <div className="fw-bold"><Icon.House /><span className='m-3' >Home</span></div>
              </div>
            </a>
          </li>
          <li>
            <a  className="nav-link  text-white">
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