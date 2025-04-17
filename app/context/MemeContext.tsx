"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Meme } from "@/app/types";
import { createMeme } from "@/app/utils/memeUtils";
import defaultMemes from "@/app/data/memes.json";

type MemeContextType = {
  memes: Meme[];
  addMeme: (data: Omit<Meme, "id" | "likes">) => void;
  updateMeme: (updatedMeme: Meme) => void;
  isInitialized: boolean;
};

const MemeContext = createContext<MemeContextType | null>(null);

export function MemeProvider({ children }: { children: ReactNode }) {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("memes");

    if (saved) {
      setMemes(JSON.parse(saved));
    } else {
      const initialMemes = defaultMemes.map((data) =>
        createMeme(data)
      );
      setMemes(initialMemes);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("memes", JSON.stringify(memes));
    }
  }, [memes, isInitialized]);

  const addMeme = (data: Omit<Meme, "id" | "likes">) => {
    const newMeme = createMeme(data);

    setMemes((prev) => [...prev, newMeme]);
  };

  const updateMeme = (updatedMeme: Meme) => {
    setMemes((prev: Meme[]) =>
      prev.map((meme: Meme) =>
        meme.id === updatedMeme.id ? updatedMeme : meme,
      ),
    );
  };

  return (
    <MemeContext.Provider value={{ memes, addMeme, updateMeme, isInitialized }}>
      {children}
    </MemeContext.Provider>
  );
}

export function useMemeContext() {
  const context = useContext(MemeContext);

  if (!context)
    throw new Error("useMemeContext must be used within MemeProvider");

  return context;
}
