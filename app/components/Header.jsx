"use client";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const showMobileMenu = () => {
    setMobileMenuVisible(true);
    console.log("clicked");
  };

  const hideMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <div id="header">
      {mobileMenuVisible && (
        <div className="mobile-menu">
          <Image
            src="/../public/icons/exit-icon.png"
            width={25}
            height={25}
            className="icon-exit"
            onClick={hideMobileMenu}
            alt="exit button"
          />
          <ul>
            <li>
              <Link href="/performance">Performance</Link>
            </li>
            <li>
              <Link href="/instruction">Instruction</Link>
            </li>
            <li>
              <Link href="/media">Media</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
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
        onClick={showMobileMenu}
      />
    </div>
  );
};

export default Header;
