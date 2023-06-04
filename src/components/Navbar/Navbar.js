import 'bootstrap/dist/css/bootstrap.css'
import '../Navbar/Navbar.css'
import clock_logo from '/Downloads/React/react-clocktab/clock-tab/src/clock-logo.svg'

function Navbar() {
    return (
        <div>
            <div className='nav container-fluid d-flex justify-content-center align-items-center p-3'>
                <a className='nav-items'>
                    <img src={clock_logo}/>
                </a>
                <a className='nav-items ps-2'>
                    <h1 className='fw-bolder m-0 me-5 align-text-center'>Clock Tab</h1>
                </a>
                <a className='nav-items px-3 fw-medium'>Countdown</a>
                <a className='nav-items px-3 fw-medium'>Timer Tab</a>
                <a className='nav-items px-3 fw-medium'>Msg Tab</a>
            </div>
        </div>
    )
}

export default Navbar;