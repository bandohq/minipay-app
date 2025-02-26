import Image from "next/image";
import { useTheme } from "@mui/material/styles";
type Props = {
  className?: string;
};

const navigation = [
  {
    name: "X",
    href: "https://x.com/BandoCool/",
    icon: (props: Props) => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24"  {...props}><g><polygon points="12.153992,10.729553 8.088684,5.041199 5.92041,5.041199 10.956299,12.087097 11.59021,12.97345    15.900635,19.009583 18.068909,19.009583 12.785217,11.615906  "/><path d="M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z"/></g></svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/bando-cool",
    icon: (props: Props) => (
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" {...props}><path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"/></svg>
    ),
  }
];

const footerLinks = [
  {
    name: "Privacy Policy",
    href: "https://app.bando.cool/privacy-notice",
  },
  {
    name: "Terms of Service",
    href: "https://app.bando.cool/terms-of-service",
  },  
];

export default function Footer() {
  const theme = useTheme();
  return (
    <footer className="bg-gypsum mt-auto">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{ fontSize: '14px', fontFamily: 'Kanit, sans-serif', color: '#40B494' }}
            >
                {item.name}
            </a>
          ))}
        </div>

        <div className="mt-2 md:order-1 md:mt-0 flex justify-between">
          <p
            className="text-left text-base text-black"
            style={{ fontSize: '12px', fontFamily: 'Kanit, sans-serif', display: 'flex', alignItems: 'center' }}
          >
            &copy; {new Date().getFullYear()} Powered by <Image style={{ display: 'inline-flex', marginLeft: '4px' }} src="/bando.svg" alt="Bando Logo" width={50} height={10} />
          </p>
          <div className="flex md:order-2 md:space-x-6 justify-between">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-forest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-4 w-4 mr-1" aria-hidden="true" />
              </a>
            ))}
        </div>
        </div>
      </div>
    </footer>
  );
}
