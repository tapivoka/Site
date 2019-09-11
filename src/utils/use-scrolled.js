import { useEffect, useState } from "react"

export function useScrolled(minY) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    setScrolled(window.scrollY > 20);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  })

  return scrolled;
}
