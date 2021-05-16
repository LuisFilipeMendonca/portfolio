import { useRef, useEffect } from "react";

const useAnimation = () => {
  const ref = useRef(null);

  const handleObserver = (entities) => {
    const observerTarget = entities[0];

    if (observerTarget.isIntersecting) {
      const { target } = observerTarget;
      const animation = target.getAttribute("data-animation");
      const delay = target.getAttribute("data-delay");
      const duration = target.getAttribute("data-duration");
      target.style.animation = `${animation} ${duration} ease-in ${delay} forwards`;
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return {
    ref,
  };
};

export default useAnimation;
