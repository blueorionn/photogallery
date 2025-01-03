import { useEffect, useState, useRef, useMemo } from "react";

type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

type UseIntersectionObserverReturn<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  isIntersecting: boolean;
};

export function useIntersectionObserver<T extends HTMLElement>(
  options: IntersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }
): UseIntersectionObserverReturn<T> {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  // memorized options
  const memoizedOptions = useMemo(() => options, [options]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, memoizedOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, memoizedOptions]);

  return { ref, isIntersecting };
}
