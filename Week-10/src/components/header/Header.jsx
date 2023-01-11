import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className='leftHeader'>
        <div className='brand'>
          Shortly
        </div>
      </div>
      <div className='rightHeader'>
        <ul className='navItems'>
          <li className='navItem'><Link className="navLink" to="/">Home</Link></li>
          <li className='navItem'><Link className="navLink" to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header