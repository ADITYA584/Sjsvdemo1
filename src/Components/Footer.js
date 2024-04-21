import { Fragment } from "react";
import Image from "next/image";
import Asset26 from "../../public/Assets/Elements/SVG/Asset26.svg";
const Footer = () => {
  return (
    <Fragment>
      <div className="flex z-100 bg-black p-5 fixed w-full justify-around text-white">
        <div>LOCAL/ 46° 28' 58.6272"N</div>
        <div>
          <Image src={Asset26} height={30} alt="logo"></Image>
        </div>
        <div>Studio/ 90° N 28’ 90 S </div>
      </div>
    </Fragment>
  );
};

export default Footer;
