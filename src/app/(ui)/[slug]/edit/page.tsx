import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { user } from "@/data/user";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <>
      <GeneralHeader backHref="/">
        <div className="font-medium text-lg">Editar perfil</div>
      </GeneralHeader>
      <section className="px-6 pb-2 border-b-2 border-gray-900">
        <div
          className="-mx-6 flex justify-center items-center gap-4 bg-gray-600 h-32 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(" + user.cover + ")" }}
        >
          <div className="cursor-pointer flex justify-center items-center size-12 rounded-full bg-black/80">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="cursor-pointer flex justify-center items-center size-12 rounded-full bg-black/80">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>
        <div className="-mt-12">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="-mt-24 size-24 flex justify-center items-center">
            <div className="cursor-pointer flex justify-center items-center size-12 rounded-full bg-black/80">
              <FontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-4">
        <label>
          <span className="mb-2 text-lg text-gray-500">Nome</span>
          <Input placeholder="Digite seu nome" value={user.name} />
        </label>
        <label>
          <span className="mb-2 text-lg text-gray-500">Bio</span>
          <Textarea
            placeholder="Descreva você mesmo"
            rows={4}
            value={user.bio}
          />
        </label>
        <label>
          <span className="mb-2 text-lg text-gray-500">Link</span>
          <Input placeholder="Digite um link" value={user.link} />
        </label>
        <Button label="Salvar alterações" size={1} />
      </section>
    </>
  );
}
