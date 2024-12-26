"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/signin");
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`flex items-center gap-6 py-3 opacity-50 hover:opacity-100`}
    >
      <FontAwesomeIcon
        icon={faArrowRightFromBracket}
        flip="horizontal"
        className="size-6"
      />
      <div className="text-lg">Sair</div>
    </a>
  );
};
