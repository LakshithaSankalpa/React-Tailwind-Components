import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  bottom-0">
      {/* Animated Wave SVG */}
      <svg viewBox="0 0 120 28" className="w-full">
        <defs>
          <mask id="xxx">
            <circle cx="7" cy="12" r="40" fill="white" />
          </mask>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 13 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>

          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use
          id="wave3"
          className="fill-[#000000] opacity-30 animate-wave3"
          xlinkHref="#wave"
          x="0"
          y="-2"
        />

        <use
          id="wave2"
          className="fill-[#000000] opacity-60 animate-wave2"
          xlinkHref="#wave"
          x="0"
          y="0"
        />

        <g className="animate-ball cursor-pointer">
          <circle
            className="ball"
            cx="110"
            cy="8"
            r="4"
            stroke="none"
            strokeWidth="0"
            fill="red"
          />
          <g className="stroke-yellow stroke-[0.3px]">
            <polyline points="108,8 110,6 112,8" fill="none" />
            <polyline points="110,6 110,10.5" fill="none" />
          </g>
        </g>

        <g className="filter-goo">
          <circle
            className="animate-drop1 stroke-[#000000] stroke-[0.5px] opacity-60 fill-transparent"
            cx="20"
            cy="2"
            r="1.8"
          />
          <circle
            className="animate-drop2 stroke-[#000000] stroke-[0.5px] opacity-60 fill-transparent"
            cx="25"
            cy="2.5"
            r="1.5"
          />
          <circle
            className="animate-drop3 stroke-[#000000] stroke-[0.5px] opacity-60 fill-transparent"
            cx="16"
            cy="2.8"
            r="1.2"
          />
          <use
            id="wave1"
            className="fill-[#000000] animate-wave"
            xlinkHref="#wave"
            x="0"
            y="1"
          />
        </g>
      </svg>

      {/* Footer Content */}
      <div className="bg-[#000000] -mt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">Company Name</h3>
              <p className="mb-2">123 Main Street</p>
              <p className="mb-2">Colombo, Sri Lanka</p>
              <p className="mb-2">Phone: +94 11 234 5678</p>
              <p>Email: contact@company.com</p>
            </div>

            {/* Quick Links */}
            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Web Development
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    Cloud Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">
                Subscribe to our newsletter for updates and news.
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded bg-blue-600 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-100 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-8 pt-8 border-t border-blue-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  LinkedIn
                </a>
              </div>
              <div className="text-white text-sm">
                &copy; {new Date().getFullYear()} Company Name. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
