"use client"

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@heroui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useMemeContext } from "@/app/context/MemeContext";
import { Meme } from "@/app/types";
import { useState } from "react";

export default function MemeTable() {
  const { isOpen, onOpenChange } = useDisclosure();
  const { memes, updateMeme, isInitialized } = useMemeContext();
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  const hendleEdit = (meme: Meme) => {
    setSelectedMeme(meme);
    onOpenChange();
  }

  const handleSave = () => {
    if (selectedMeme) updateMeme(selectedMeme);
    onOpenChange();
  };

  if (!isInitialized) return <p>Завантаження...</p>
  return (
    <>
      <Table aria-label="Meme collection table" isStriped >
        <TableHeader>
          <TableColumn className="px-2 sm:px-3 text-center">ID</TableColumn>
          <TableColumn className="px-2 sm:px-3 text-center">Назва</TableColumn>
          <TableColumn className="px-2 sm:px-3 text-center">Зображення</TableColumn>
          <TableColumn className="px-2 sm:px-3 text-center">Лайки</TableColumn>
          <TableColumn className="px-2 sm:px-3 text-center">Дія</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell className="text-xs sm:text-base px-2 sm:px-3 text-center">
                {meme.id}
              </TableCell>
              <TableCell className="text-xs sm:text-base px-2 sm:px-3 text-center">
                {meme.title}
              </TableCell>
              <TableCell className="text-xs sm:text-base px-2 sm:px-3 text-center">
                <a href={meme.imageUrl} target="_blank" className="text-blue-500">Link</a>
              </TableCell>
              <TableCell className="text-xs sm:text-base px-2 sm:px-3 text-center">
                {meme.likes} ❤️
              </TableCell>
              <TableCell className="text-xs sm:text-base px-2 sm:px-3 text-center">
                <Button onPress={() => hendleEdit(meme)} color="default" variant="faded" className="">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Властивості
              </ModalHeader>
              <ModalBody>
                {selectedMeme && (
                  <>
                    <Input
                      label="Назва"
                      value={selectedMeme.title}
                      onChange={(e) =>
                        setSelectedMeme({ ...selectedMeme, title: e.target.value })
                      }
                    />
                    <Input
                      label="Зображення (URL)"
                      value={selectedMeme.imageUrl}
                      onChange={(e) =>
                        setSelectedMeme({ ...selectedMeme, imageUrl: e.target.value })
                      }
                    />
                    <Dropdown>
                      <DropdownTrigger>
                        <Button endContent={<ChevronDownIcon className="w-4 h-4" />}>
                          {selectedMeme.likes} ❤️
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Вибрати кількість лайків"
                        onAction={(key) =>
                          setSelectedMeme({ ...selectedMeme, likes: Number(key) })
                        }
                      >
                        {[0, 25, 50, 75, 100].map((count) => (
                          <DropdownItem key={count}>{count}</DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрити
                </Button>
                <Button color="primary" onPress={handleSave}>
                  Зберегти
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
