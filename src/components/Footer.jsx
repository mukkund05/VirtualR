import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4 ">Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>



        <div>
          <h3 className="text-md font-semibold mb-4 ">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-md font-semibold mb-4 ">Community</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
