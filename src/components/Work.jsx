import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

const Work = () => {
  return (
    <div className="bg-slate-950" id="work">
      <HeroParallax products={products} />
    </div>
  );
};
export const products = [
  {
    title: "Booknerds Eswatini",
    link: "https://booknerdseswatini.com/",
    thumbnail: "https://phiwazulu.co.za/assets/booknerds-8225281c.png",
  },
  {
    title: "Gamers Hut",
    link: "https://zuluphiwa.github.io/gamers/",
    thumbnail: "https://phiwazulu.co.za/assets/gamersh-8f361c3c.png",
  },
  {
    title: "App Ye Budget",
    link: "https://play.google.com/store/apps/details?id=com.dreamories.appyebudget",
    thumbnail: "https://phiwazulu.co.za/assets/budget-6bcd40ab.png",
  },

  {
    title: "App Ye Stoko",
    link: "https://play.google.com/store/apps/details?id=com.dreamories.app_ye_stoko",
    thumbnail: "https://phiwazulu.co.za/assets/stoko-d9a4d249.png",
  },
  {
    title: "Nkonyeni Golf Estate",
    link: "https://play.google.com/store/apps/details?id=com.dreamories.nkonyenigolfestate",
    thumbnail: "https://phiwazulu.co.za/assets/nkon-d08fb729.png",
  },
  {
    title: "TippyTask",
    link: "https://play.google.com/store/apps/details?id=com.dreamories.tippytask&pli=1",
    thumbnail: "https://phiwazulu.co.za/assets/tippy-5e969ee5.png",
  },

  {
    title: "Paths",
    link: "https://zuluphiwa.github.io/paths/",
    thumbnail: "https://phiwazulu.co.za/assets/paths-6bcce65e.png",
  },
  {
    title: "Kitman",
    link: "https://zuluphiwa.github.io/kitman/",
    thumbnail: "https://phiwazulu.co.za/assets/kitman-b6cd1c77.png",
  },
  {
    title: "Sibongakonkhe Investment",
    link: "https://sibongainvest.co.sz/",
    thumbnail: "https://sibongainvest.co.sz/assets/office300-DgWx0SlX.png",
  },
];
export default Work;
