"use client";

interface AddMemeFormProps {
  title: string;
  imageUrl: string;
  setTitle: (value: string) => void;
  setImageUrl: (value: string) => void;
}

export default function AddMemeForm({ title,
  imageUrl,
  setTitle,
  setImageUrl, }: AddMemeFormProps) {

  return (
    <div className="space-y-4 mb-6">
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="url"
        placeholder="URL (jpg)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full border p-2 rounded"
      />
    </div>
  );
}
