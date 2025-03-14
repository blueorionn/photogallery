"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Trash } from "@geist-ui/icons";
import type { Photo } from "@/shared/data.types";

export default function PhotoCard({ photo }: { photo: Photo }) {
  const [photoTag, setPhotoTag] = useState("");
  const [deletePhoto, setDeletePhoto] = useState(false);

  useEffect(() => {
    setPhotoTag(`${photo.tag}`);
  }, [photo.tag]);

  const hidePhoto = async () => {
    const res = await fetch(`/api/photo/${photo.uuid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag: "hidden" }),
    });

    if (res.ok) {
      setPhotoTag("hidden");
    }
  };

  const handleDeletePhoto = async () => {
    const res = await fetch(`/api/photo/${photo.uuid}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setDeletePhoto(true);
    }
  };

  return (
    <>
      <div className="w-full h-max">
        <Image
          src={photo.photoname}
          alt={"Cloud Photo"}
          className="h-max w-full aspect-auto rounded"
          width={photo.width}
          height={photo.height}
          quality={100}
        />
        <div className="w-full flex justify-between items-center py-2.5 gap-4">
          <button
            type="button"
            onClick={hidePhoto}
            className={`h-full p-2.5 px-4 ${photoTag === "hidden" ? "bg-pink-600" : "bg-gray-900"} rounded`}
          >
            <span className="sr-only">Toogle visiblity</span>
            {photoTag === "hidden" ? (
              <EyeOff size={16} color="#d1d5db" />
            ) : (
              <Eye size={16} color="#d1d5db" />
            )}
          </button>
          <span className="inline-block text-sm p-2.5 px-4 rounded text-gray-300 bg-gray-900">
            {photo.uuid}
          </span>
          <button
            type="button"
            onClick={handleDeletePhoto}
            className={`h-full p-2.5 px-4 ${deletePhoto ? "bg-pink-600" : "bg-gray-900"} rounded`}
          >
            <span className="sr-only">Delete Photo</span>
            <Trash size={16} color="#d1d5db" />
          </button>
        </div>
      </div>
    </>
  );
}
