//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaReact } from "react-icons/fa";
import { BiUser, BiMap} from "react-icons/bi";
import {MdComputer} from "react-icons/md";
import {IoMdNotifications} from "react-icons/io";
import {HiPuzzle, HiOutlineMenuAlt1} from "react-icons/hi";
import Button from 'react-bootstrap/Button';

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    

    //create a custom function that will change menucollapse state from false to true and true to false
  
  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader > 
          
              {/* small and big change using menucollapse state */}
              
              <div className="content">
              <FaReact className="logo"/>
              
              <p className="logotext">argon</p>
              
            </div>
            
          </SidebarHeader>
          <SidebarContent>
            <Menu className="menu">
              <MenuItem icon={<MdComputer className="Dashboard" />} >Dashboard</MenuItem>
              <MenuItem icon={<FaReact  className="Icons"/>}>Icons</MenuItem>
              <MenuItem icon={<BiMap  className="Map" />}>Map</MenuItem>
              <MenuItem icon={<BiUser className="User" />} >User Profile</MenuItem>
              <MenuItem icon={<IoMdNotifications className="Notification" />} >Notification</MenuItem>
              <MenuItem icon={<HiPuzzle className="Table_lsit" />} >Table List</MenuItem> 
              <MenuItem icon={<HiOutlineMenuAlt1  className="Typography" />}>Typography</MenuItem>
              <>  
              <Button variant="primary">Primary</Button>
              </>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;