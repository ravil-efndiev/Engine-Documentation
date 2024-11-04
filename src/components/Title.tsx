import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  title: string;
}

function Title({ title }: Props) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} - RVL Docs`;
  }, [location, title]);

  return null;
}

export default Title;
