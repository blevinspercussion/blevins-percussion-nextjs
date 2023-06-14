import Image from "next/image";

const Header = () => {
  return (
    <div id="header">
      <Image
        src="/../public/photos/blevperclogo_white_cropped.png"
        width="195"
        height="90"
        className="logo"
      />
      <Image
        src="/../public/icons/icons8-menu-rounded-30.png"
        width="50"
        height="50"
        className="mobile-menu"
      />
    </div>
  );
};

export default Header;
