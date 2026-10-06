import logo from "../image/logo.webp"

const Navbar = () => {
  return (
    <div className="navbar"> 
    <img src={logo} alt="logo_of web_Site" />

    <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

    <button className="btn1">LogIn</button>
    </div>
  )
}

export default Navbar;