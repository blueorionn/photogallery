"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "@geist-ui/icons";
import type { Photo } from "@/shared/data.types";

export default function PhotoCard({ photo }: { photo: Photo }) {
  const [photoTag, setPhotoTag] = useState("");

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
        <div className="py-2.5 flex gap-4">
          <button
            type="button"
            onClick={hidePhoto}
            className={`p-2.5 px-4 ${photoTag === "hidden" ? "bg-pink-600" : "bg-gray-900"} rounded`}
          >
            <span className="sr-only">Toogle visiblity</span>
            {photoTag === "hidden" ? (
              <Eye size={16} color="#d1d5db" />
            ) : (
              <EyeOff size={16} color="#d1d5db" />
            )}
          </button>
          <span className="inline-block p-2.5 px-4 rounded text-gray-300 bg-gray-900">
            {photo.uuid}
          </span>
        </div>
      </div>
    </>
  );
}
