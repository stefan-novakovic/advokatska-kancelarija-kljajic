import { Carousel } from "@mohammedsrehan/react-responsive-carousel";
import "@mohammedsrehan/react-responsive-carousel/lib/styles/carousel.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

const ImageCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      swipeable
      showStatus={false}
      showThumbs={false}
      interval={12000}
      transitionTime={500}
    >
      <LazyLoadImage
        src={AboutUsPageData.SRB.aboutUsImageArray[0]}
        alt=""
        threshold={4750}
        effect="opacity"
      />
      <img src={AboutUsPageData.SRB.aboutUsImageArray[1]} alt="" />
      <img src={AboutUsPageData.SRB.aboutUsImageArray[2]} alt="" />
      <img src={AboutUsPageData.SRB.aboutUsImageArray[3]} alt="" />
    </Carousel>
  );
};

export default ImageCarousel;
