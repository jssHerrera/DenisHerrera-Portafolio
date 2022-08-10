import { Avatar } from "./Avatar";
import DowloadedCv from "./DowloadCv";
import "./Header.css";
import Slice from "./Slice";
import SocialMenu from "./SocialMenu";
import TitleMenu from "./TitleMenu";

const Header = () => {
  return (
    <header className="header ">
      <div className="header__container container">
        <TitleMenu />
        <DowloadedCv/>
        <SocialMenu />
        <Avatar/>
        <Slice/>
      </div>
    </header>
  );
};
export default Header;
