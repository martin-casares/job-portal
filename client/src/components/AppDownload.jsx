import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div>
      <div className="container px-4 2xl:px-20 mx-auto my-20">
        <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg">
          <div>
            <h1 className="text-2xl sm:text-4x1 font-bold mb-8 max-w-md">
              Download Mobile App For Better Experience
            </h1>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <img className="h-12" alt="" src={assets.play_store} />
              </a>
              <a href="#" className="inline-block">
                <img className="h-12" alt="" src={assets.app_store} />
              </a>
            </div>
          </div>
          <img
            className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden"
            alt=""
            src={assets.app_main_img}
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
