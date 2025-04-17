"use client";

interface AddMemeFormProps {
  title: string;
  imageUrl: string;
  setTitle: (value: string) => void;
  setImageUrl: (value: string) => void;
}

export default function AddMemeForm({
  title,
  imageUrl,
  setTitle,
  setImageUrl,
}: AddMemeFormProps) {
  return (
    <div className="space-y-4 mb-6">
      <input
        className="w-full border p-2 rounded"
        placeholder="Заголовок"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="URL (jpg)"
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
    </div>
  );
}
