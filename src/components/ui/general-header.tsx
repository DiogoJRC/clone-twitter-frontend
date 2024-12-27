import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  backHref: string;
};

export const GeneralHeader = ({ children, backHref }: Props) => {
  return (
    <header className="flex items-center gap-5 p-6">
      <Link
        href={backHref}
        className="flex justify-center items-center size-12 border-2 border-gray-800 rounded-full hover:bg-gray-800"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="size-6" />
      </Link>
      <div className="flex-1">{children}</div>
    </header>
  );
};
