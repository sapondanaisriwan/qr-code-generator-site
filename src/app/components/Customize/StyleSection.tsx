import { InputLabel } from "@mui/material";
import ImageRadioGroup from "../ImageRadioGroup";
import { bodyShapeOptions, eyeShapeStyle } from "@/data/radioOptions";

export default function StyleSection({
  data,
  handleChange,
}: StyleSectionProps) {
  return (
    <>
      <ImageRadioGroup
        name="bodyShapeStyle"
        label="Body Shape"
        options={bodyShapeOptions}
        data={data}
        handleChange={handleChange}
      />
      <ImageRadioGroup
        name="eyeShapeStyle"
        label="Eye Shape"
        options={eyeShapeStyle}
        data={data}
        handleChange={handleChange}
      />
    </>
  );
}
