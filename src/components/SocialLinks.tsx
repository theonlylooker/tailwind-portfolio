import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import SocialLinkItem from "./SocialLinkItem";

const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/eduard-basurco/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/theonlylooker",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <nav>
        <ul>
          {Links &&
            Links.map(({ id, child, href, style, download }) => (
              <SocialLinkItem
                key={id}
                child={child}
                href={href}
                style={style}
                download={download}
              />
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default SocialLinks;
