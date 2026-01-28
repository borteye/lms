import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { toast } from "@workspace/ui/lib/server";
import { ControllerRenderProps } from "@workspace/ui/lib/client";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Props {
  placeholder?: string;
  description?: string;
  field?: ControllerRenderProps<any, any>;
  className?: string;
}

export default function ImageCard({
  placeholder,
  description,
  field,
  className,
}: Props) {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    field?.value instanceof File ? URL.createObjectURL(field.value) : undefined
  );
  return (
    <div
      className={cn(
        "group relative w-[110px] p-3 h-[110px] mx-auto bg-input border-2 rounded-full flex items-center justify-center border-dashed border-ring",
        className
      )}
    >
      {imagePreview ? (
        <Image
          src={URL.createObjectURL(field?.value)}
          alt="description"
          width={1000}
          height={1000}
          quality={100}
          priority
          className="w-full object-contain h-full"
        />
      ) : (
        <p className="font-bold text-center">{placeholder}</p>
      )}

      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-[black]/65 h-full w-full rounded-full inset-0 flex items-center justify-center">
        <Input
          id={field?.name}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            if (file && file.type.startsWith("image/")) {
              field?.onChange(file);
              setImagePreview(URL.createObjectURL(file));
            } else {
              toast.error("Please select a valid image file.");
            }
          }}
        />
        <Label
          htmlFor={field?.name}
          className="w-full h-full items-center justify-center flex flex-col cursor-pointer"
        >
          {description}
          <p>Edit</p>
        </Label>
      </div>
    </div>
  );
}
