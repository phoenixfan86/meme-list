"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/react";

import { useMemeContext } from "@/app/context/MemeContext";

export default function MemeCard() {
  const { memes, isInitialized } = useMemeContext();

  if (!isInitialized) return <p>Завантаження...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {memes.map((meme) => (
        <Card key={meme.id}>
          <CardHeader>{meme.title}</CardHeader>
          <CardBody>
            <div className="w-full flex items-center justify-center">
              <Image
                isBlurred
                alt={meme.title}
                className="h-48 object-cover rounded"
                src={meme.imageUrl}
              />
            </div>
          </CardBody>
          <CardFooter>{meme.likes} ❤️</CardFooter>
        </Card>
      ))}
    </div>
  );
}
