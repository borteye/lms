import React from "react";
import { CloudUpload, FileText } from "lucide-react";

interface FileImageInputProps {
  accept: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file?: File | null;
  preview?: string;
  uploadType: "document";
  name?: string;
  value?: string;
}

const FileInput: React.FC<FileImageInputProps> = ({
  accept,
  handleChange,
  file,
  preview,
  uploadType,
  name,
  value,
}) => {
  return (
    <div className="h-[286px] relative rounded-[10px] overflow-hidden flex items-center justify-center border-2 border-dashed">
      <input
        type="file"
        id={`file_${uploadType}`}
        accept={accept}
        name={name}
        value={value}
        className="hidden"
        onChange={handleChange}
      />
      <label
        htmlFor={`file_${uploadType}`}
        className="text-[#B6B6B6] cursor-pointer"
      >
        {uploadType === "document" &&
          (preview ? (
            <div className="flex items-center gap-x-4">
              <FileText className="w-6 h-6" />
              <p>{preview}</p>
            </div>
          ) : file && file.type === "application/pdf" ? (
            <div className="flex items-center gap-x-4">
              <FileText className="w-6 h-6" />
              <p>{file.name}</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-x-3 px-5 py-3 rounded-[10px] border border-[#B6B6B6]">
                <CloudUpload className="w-6 h-6" />
                <span>Upload assignment</span>
              </div>
              <p className="text-center text-black text-sm font-semibold">
                Format: pdf only
              </p>
            </>
          ))}
      </label>
    </div>
  );
};

export default FileInput;
