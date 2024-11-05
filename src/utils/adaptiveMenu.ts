import { useEffect, useRef, useState } from "react";

export function useAdaptiveMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const switchButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      if (
        menuRef.current && 
        switchButtonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !switchButtonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleBodyClick)

    return () => document.removeEventListener("mousedown", handleBodyClick);
  }, []);

  return { menuOpen, setMenuOpen, menuRef, switchButtonRef };
}
