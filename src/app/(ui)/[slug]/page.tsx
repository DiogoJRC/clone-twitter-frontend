import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
  const isLoggedUser = true;

  const numberCompactor = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });

  return (
    <>
      <GeneralHeader backHref="/">
        <div className="font-medium text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>
      <section className="px-6 pb-2 border-b-2 border-gray-900">
        <div
          className="-mx-6 bg-gray-600 h-32 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(" + user.cover + ")" }}
        ></div>
        <div className="-mt-12 flex justify-between items-end">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="w-36">
            {isLoggedUser && (
              <Link href={`/${user.slug}/edit`}>
                <Button label="Editar perfil" size={2} />
              </Link>
            )}
            {!isLoggedUser && <Button label="Seguir" size={2} />}
          </div>
        </div>
        <div className="flex flex-col m-4 gap-4">
          <div>
            <div className="font-medium text-xl">{user.name}</div>
            <div className="text-gray-500">@{user.slug}</div>
          </div>
          {user.bio && (
            <div className="mt-2 font-light text-lg text-gray-400">
              {user.bio}
            </div>
          )}
          {user.link && (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLink} className="size-4" />
              <Link
                href={user.link}
                target="_blank"
                className="text-sky-600 hover:underline"
              >
                {user.link}
              </Link>
            </div>
          )}
          <div className="flex gap-6 text-lg text-gray-400 font-light">
            <div>
              <span className="mr-2 text-white font-medium">
                {numberCompactor.format(user.following)}
              </span>
              Seguindo
            </div>
            <div>
              <span className="mr-2 text-white font-medium">
                {numberCompactor.format(user.followers)}
              </span>
              Seguidores
            </div>
          </div>
        </div>
      </section>
      <ProfileFeed />
    </>
  );
}
