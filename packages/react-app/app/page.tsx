"use client";

import Carousel from "react-multi-carousel";
import { Typography, Button, styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from 'next/navigation'

const CarouselDiv = styled("div")({
  "& .carousel-container": {
    margin: "0",
  },
  "& .carousel-item": {
    padding: "0 6px",
  },
  "& .custom-dot-list-style": {
    marginTop: "8px",
    position: "relative",
  },
  "& .custom-dot-list-style .react-multi-carousel-dot button": {
    margin: "0 0.5rem",
    border: "none",
    backgroundColor: "#9A9A9A",
    width: "10px",
    height: "10px",
  },
  "& .custom-dot-list-style .react-multi-carousel-dot.react-multi-carousel-dot--active button": {
    backgroundColor: "#1A1A1A",
  },
});

const LandingButton = styled(Button)({
  margin: "0 auto",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  borderRadius: "50px",
  "&:hover": {
    backgroundColor: "#000000",
  },
  textTransform: "capitalize",
  fontSize: "16px",
  fontFamily: "var(--font-kanit)",
  padding: "10px 20px",
  display: "block",
  width: "100%",
});

const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 10
  }
};

export default function MiniAppPage() {
  const router = useRouter();

  const goToWidget = (params: string) => {
    router.push(`/widget?${params}`);
  }

  return (
    <main>
      <div
        className="flex flex-shrink-0 items-center"
        onClick={() => goToWidget('')}
      >
          <img
            style={{ width: "100%", height: "auto", padding: "0 20px" }}
            className="block h-8 sm:block w-auto lg:block"
            src="/mini_app_banner.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
          />
      </div>
      <div>
        <Typography variant="h6" sx={{ p: '0 20px', m: '20px 0', fontFamily: 'var(--font-kanit)' }}>🔥 Most Popular</Typography>
      </div>
      <CarouselDiv>
        <Carousel
          swipeable={true}
          draggable={false}
          arrows={false}
          showDots={true}
          responsive={responsiveCarousel}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          renderDotsOutside
          keyBoardControl={true}
          customTransition="all 500ms linear"
          transitionDuration={500}
          centerMode
          //partialVisible={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          <img
            style={{  width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/example_deal_1.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
            onClick={() => {
              window.location.href = "/widget?country=NG&product=a39f5817-5ca7-4c0c-a258-b695750e8cfe";
            }}
          />
          <img
            style={{  width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/example_deal_2.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
            onClick={() => {
              window.location.href = "/widget?country=NG&product=d7e46cf6-4454-4bb1-a8de-a0028ff4d8d6";
            }}
          />
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/example_deal_3.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
            onClick={() => {
              window.location.href = "/widget?product=141a47f6-f158-4d4a-a069-104e52441561&country=NG";
            }}
          />
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/example_deal_4.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
          />
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/img_4.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
            onClick={() => {
              window.location.href = "/widget?product=05388fd4-35c5-4101-b076-66c0cc7d35fa";
            }}
          />
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/img_5.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
            onClick={() => {
              window.location.href = "/widget?country=ZA&product=87caf31e-c7ab-40f8-8def-5779b8db3c9a";
            }}
          />
        </Carousel>
      </CarouselDiv>
      <div>
        <Typography variant="h6" sx={{ p: '0 20px', m: '20px 0', fontFamily: 'var(--font-kanit)' }}>Bando Promos</Typography>
      </div>
      <CarouselDiv>
        <Carousel
          swipeable={true}
          draggable={false}
          arrows={false}
          showDots={true}
          responsive={responsiveCarousel}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          centerMode
          renderDotsOutside
          keyBoardControl={true}
          customTransition="all 500ms linear"
          transitionDuration={500}
          //partialVisible={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/example_promo_1.svg"
            width="180"
            height="20"
            alt="Mini App Banner"
          />
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/img_1.svg"
            width="180"
            height="20"
            alt="Mini App Banner"
            onClick={() => {
              window.location.href = "/widget?country=NG&product=e616ed5d-1f0d-4986-a87d-97f717f56e55";
            }}
          />
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/img_2.svg"
            width="180"
            height="20"
            alt="Mini App Banner"
            onClick={() => {
              window.location.href = "/widget?country=KE&product=a3b0b36b-ece9-4c1c-b4db-46c966468d49";
            }}
          />
          <img
            style={{ width: '100%', height: '100%' }}
            className="block h-8 sm:block w-auto lg:block"
            src="/img_3.svg"
            width="180"
            height="20"
            alt="Mini App Banner"
          />
        </Carousel>
      </CarouselDiv>
      <div style={{ margin: '20px' }}>
        <LandingButton onClick={() => goToWidget('')}>
          Explore Our Products
        </LandingButton>
      </div>
    </main>
  );
}
