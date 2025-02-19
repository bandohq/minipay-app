import { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import { Drawer, Button, Typography, styled } from "@mui/material";
import { useWidgetEvents, WidgetEvent } from "@bandohq/widget";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselDiv = styled("div")({
  "& .custom-dot-list-style": {
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

const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 120
  }
};

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const widgetEvents = useWidgetEvents();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleInsufficientBalance = () =>
    setTimeout(() => setDrawerOpen(true), 0);
  const handleNoTokensAvailable = () =>
    setTimeout(() => setDrawerOpen(true), 0);

  useEffect(() => {
    if (!widgetEvents) return;

    widgetEvents.on(WidgetEvent.InsufficientBalance, handleInsufficientBalance);
    widgetEvents.on(WidgetEvent.NoTokensAvailable, handleNoTokensAvailable);

    return () => {
      widgetEvents.off(
        WidgetEvent.InsufficientBalance,
        handleInsufficientBalance
      );
      widgetEvents.off(WidgetEvent.NoTokensAvailable, handleNoTokensAvailable);
    };
  }, [widgetEvents, handleInsufficientBalance, handleNoTokensAvailable]);

  return (
    <>
      <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-shrink-0 items-center">
          <Image
            style={{ width: "100%", height: "auto", padding: "0 20px" }}
            className="block h-8 sm:block w-auto lg:block"
            src="/mini_app_banner.svg"
            width="100"
            height="20"
            alt="Mini App Banner"
          />
        </div>
        <div>
          <Typography variant="h6" sx={{ p: '0 20px', m: '20px 0'}}>🔥 Hottest Deals</Typography>
        </div>
        <CarouselDiv>
          <Carousel
            swipeable={true}
            draggable={false}
            arrows={false}
            showDots={true}
            responsive={responsiveCarousel}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            renderDotsOutside
            keyBoardControl={true}
            customTransition="all 1s linear"
            transitionDuration={700}
            partialVisible={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <img
              style={{ height: "auto", padding: "0 20px" }}
              className="block h-8 sm:block w-auto lg:block"
              src="/example_deal_1.svg"
              width="100"
              height="20"
              alt="Mini App Banner"
            />
            <img
              style={{ height: "auto", padding: "0 20px" }}
              className="block h-8 sm:block w-auto lg:block"
              src="/example_deal_2.svg"
              width="100"
              height="20"
              alt="Mini App Banner"
            />
          </Carousel>
        </CarouselDiv>
        <div className="max-w-7xl mx-auto" style={{ width: "100%" }}>
          {children}
        </div>
      </div>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "1rem 1rem 0 0",
            minHeight: "45%",
            fontFamily: "Be Vietnam Pro, sans-serif",
          },
        }}
      >
        <div className="bg-white p-4 m-auto">
          <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
            Add some funds!
          </h1>
          <p style={{ textAlign: "center" }}>
            Your wallet does not have enough funds to complete this transaction.
          </p>
          <Button
            sx={{
              backgroundColor: "#00955f",
              color: "white",
              marginTop: "1rem",
              width: "100%",
              minHeight: "3rem",
              textTransform: "capitalize",
            }}
            href="https://minipay.opera.com/add_cash"
          >
            Fund MiniPay
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Layout;
