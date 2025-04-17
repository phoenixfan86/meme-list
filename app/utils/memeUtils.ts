import { Meme } from "@/app/types";

function getNextId() {
  const saved = localStorage.getItem("nextId");
  const next = saved ? parseInt(saved, 10) + 1 : 1;

  localStorage.setItem("nextId", next.toString());

  return next;
}

export function createMeme(data: Omit<Meme, "id" | "likes">): Meme {
  return {
    id: getNextId(),
    title: data.title,
    imageUrl: data.imageUrl,
    likes: Math.floor(Math.random() * 100),
  };
}
