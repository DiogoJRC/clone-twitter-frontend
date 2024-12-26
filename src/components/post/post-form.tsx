"use client";

import { user } from "@/data/user";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export const PostForm = () => {
  const handleImageUpload = () => {};
  const handlePostSubmit = () => {};

  return (
    <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
      <img src={user.avatar} alt={user.name} className="size-12 rounded-full" />
      <div className="flex-1">
        <textarea
          rows={1}
          placeholder="O que está acontecendo?"
          defaultValue=""
          className="w-full min-h-14 outline-none bg-black resize-none"
        />
        {/* <div
          className="inline-block w-full min-h-14 outline-none text-white empty:before:content-['Teste'] empty:before:text-gray-500"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
        ></div> */}
        <div className="flex justify-between items-center mt-2">
          <a href="#" onClick={handleImageUpload}>
            <FontAwesomeIcon icon={faImage} className="size-6" />
          </a>
          <div className="w-28">
            <Button label="Postar" size={2} onClick={handlePostSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
