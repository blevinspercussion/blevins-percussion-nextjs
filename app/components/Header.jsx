import Image from "next/image";

const Header = () => {
  return (
    <div id="header">
      <Image
        src="/../public/photos/blevperclogo_white_cropped.png"
        width="150"
        height="65"
        className="logo"
      />
      <Image
        src="/../public/icons/icons8-menu-rounded-30.png"
        width="40"
        height="40"
        className="mobile-menu-icon"
      />
    </div>
  );
};

export default Header;
