import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useTitle = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const path = router.pathname;

  let fullname = path.substring(1, path.length);
  let first_letter = fullname.charAt(0).toUpperCase();

  const cap_path = first_letter + path.slice(2);

  useEffect(() => {
    setTitle(`Thomas Brandoli | ${cap_path}`);
  }, []);

  return title;
};

export default useTitle;
