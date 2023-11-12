import { DragEvent, useRef } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import "./Uploader.css";
import { Box, TextField } from "@mui/material";

export default function Uploader({ data, handleChange }: UploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const toggleBorderColor = (toggle: boolean) => {
    if (!dropZoneRef.current) {
      return;
    }
    toggle
      ? dropZoneRef.current.classList.add("drop_zone__over")
      : dropZoneRef.current.classList.remove("drop_zone__over");
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleBorderColor(true);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    retrievePathFile(e.dataTransfer.files);
    toggleBorderColor(false);
  };

  const retrievePathFile = (files: any) => {
    try {
      const file = files[0];
      if (file.type !== "image/png" && file.type !== "image/jpeg") {
        console.error("Only png and jpg/jpeg allowed.");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
          handleChange({ target: { name: "logoImage", value: reader.result } });
        };
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box sx={{ width: { lg: 500 } }}>
      <div
        id="drop-zone"
        className="drop_zone"
        ref={dropZoneRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={() => toggleBorderColor(false)}
        onDragEnd={() => toggleBorderColor(false)}
        onClick={() => inputRef.current?.click()}
      >
        <p>
          <FileUploadOutlinedIcon sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
        </p>
        <span className="drop_zone__prompt">
          Drag & Drop or <span style={{ color: "#0058cb" }}>Choose file</span>{" "}
          to upload
        </span>
        <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>PNG or JPEG</p>
        <input
          type="file"
          accept="image/*"
          placeholder="upload your file"
          ref={inputRef}
          hidden
          onChange={(e) => retrievePathFile(e.target.files)}
        />
      </div>
      <div className="separator">OR</div>
      <TextField
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        name="logoImage"
        id="outlined-basic"
        variant="outlined"
        label="Import from URL"
        value={data.logoImage}
        placeholder="Add file URL"
        onChange={handleChange}
      />
    </Box>
  );
}
