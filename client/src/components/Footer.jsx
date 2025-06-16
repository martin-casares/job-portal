import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img width={160} alt="" src={assets.logo} />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @GreatStack | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <img width={38} alt="" src={assets.facebook_icon} />
        <img width={38} alt="" src={assets.twitter_icon} />
        <img width={38} alt="" src={assets.instagram_icon} />
      </div>
    </div>
  );
};

export default Footer;
