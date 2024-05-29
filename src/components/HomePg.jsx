import { Carousal, CarousalCategory, CarousalProduct, HomePgCard } from "./";

const HomePg = () => {
  return (
    <>
      <div className="bg-amazonclone-background overflow-hidden ">
        <div className="w-full m-auto  ">
          <Carousal />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <HomePgCard
              title="We have a surprise for you"
              img="../images/home_grid_1.jpg"
              link="See terms and conditions"
            />
            <HomePgCard
              title="Watch The Rings of Power"
              img="../images/home_grid_2.jpg"
              link="See terms and conditions"
            />
            <HomePgCard
              title="Unlimited streaming"
              img="../images/home_grid_3.jpg"
              link="See terms and conditions"
            />
            <HomePgCard
              title="More titles to explore"
              img="../images/home_grid_4.jpg"
              link="See terms and conditions"
            />
            <HomePgCard
              title="Shop pet supplies"
              img="../images/home_grid_5.jpg"
              link="See terms and conditions"
            />
            <HomePgCard
              title="Spring sales"
              img="../images/home_grid_6.jpg"
              link="See terms and conditions"
            />
            <HomePgCard
              title="Echo Buds"
              img="../images/home_grid_7.jpg"
              link="See terms and conditions"
            />
            <HomePgCard
              title="Family Plan: 3 months free"
              img="../images/home_grid_8.jpg"
              link="See terms and conditions"
            />
            <div className="m-3 pt-4">
              <img
                className="xl:hidden"
                src="../images/banner_image_2.jpg"
                alt="banner"
              />
            </div>
          </div>
          <CarousalProduct />
          <CarousalCategory />
          <div className="h-[200px] ">
            <img
              className="h-[100%] m-auto"
              src="../images/banner_image.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePg;
