import { NavBar } from "../NavBar";
// import logo from "../../logo.svg";
import images from "../../images.png";


import "./style.css";

export const Header = () =>   (
 <header className="App-header">

{/* <img src={logo} className="App-logo" alt="logo" /> */}
<img src={images} className="App-image" alt="image" />
<NavBar> </NavBar>

</header>
);