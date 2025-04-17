"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import AddMemeForm from "./AddMemeForm";
import { useMemeContext } from "@/app/context/MemeContext";

export default function AddModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="default" variant="faded" className="px-2 sm:px-3 text-xs sm:text-base">
        Додати Мем
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => <AddModalInner onClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
}

function AddModalInner({ onClose }: { onClose: () => void }) {
  const { addMeme } = useMemeContext();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    if (title.length < 3 || title.length > 100) {
      alert("Title must be 3–100 chars");
      return;
    }
    if (!/^https?:\/\/.*\.jpe?g$/i.test(imageUrl)) {
      alert("Image must be a valid JPG URL");
      return;
    }

    addMeme({ title, imageUrl });
    setTitle("");
    setImageUrl("");
    onClose();
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Додати новий мем</ModalHeader>
      <ModalBody>
        <p>Додайте заголовок і посилання на картинку</p>
        <AddMemeForm
          title={title}
          imageUrl={imageUrl}
          setTitle={setTitle}
          setImageUrl={setImageUrl}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Закрити
        </Button>
        <Button color="primary" onPress={handleSubmit}>
          Додати
        </Button>
      </ModalFooter>
    </>
  );
}
