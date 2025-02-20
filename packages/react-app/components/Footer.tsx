import Image from "next/image";

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
    href: "https://www.linkedin.com/company/bandocool/",
    icon: (props: Props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}> </svg>
    ),
  }
];

const footerLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gypsum mt-auto border-t">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap gap-4 justify-evenly">
          {footerLinks.map((item) => (
            <a key={item.name} href={item.href} style={{ fontSize: '14px', fontFamily: 'Kanit, sans-serif' }}>{item.name}</a>
          ))}
        </div>
        <div className="flex justify-center space-x-6 md:order-2 mt-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black hover:text-forest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-2 md:order-1 md:mt-0">
          <p className="text-center text-base text-black" style={{ fontSize: '12px', fontFamily: 'Kanit, sans-serif' }}>
            &copy; {new Date().getFullYear()} Powered with ❤️ by <Image style={{ display: 'inline-block' }} src="/bando.svg" alt="Bando Logo" width={50} height={10} />
          </p>
        </div>
      </div>
    </footer>
  );
}
