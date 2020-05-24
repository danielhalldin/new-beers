import { useEffect, useState } from "react";

const useScrolling = (callback: any) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [show, setShow] = useState(true);
  const handleScroll = (e: Event) => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scrollPos);

    callback(show);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
};

export default useScrolling;
