import React from "react";

interface socialLinkItem {
  child: JSX.Element;
  href: string;
  style?: string;
  download?: boolean;
}

const SocialLinkItem = ({
  child,
  href,
  style,
  download = false,
}: socialLinkItem) => {
  return (
    <li
      className={
        "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] duration-300" +
        " " +
        style
      }
    >
      <a
        className="flex justify-between items-center w-full text-white"
        href={href}
        download={download}
        target="_blank"
        rel="noreferrer"
      >
        {child}
      </a>
    </li>
  );
};

export default SocialLinkItem;
