import { Grid, InputLabel } from "@mui/material";
import "./CustomRadio.css";
import Image from "next/image";

const ImageRadioGroup = ({
  name,
  label,
  options,
  data,
  handleChange,
}: ImageRadioGroupProps) => {
  return (
    <>
      <InputLabel sx={{ my: 1 }}>{label}</InputLabel>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
      >
        {options.map((option: any) => (
          <Grid item xs="auto" key={option.id}>
            <label
              className={`radio-label ${
                data[name] === option.value ? "checked" : ""
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={data[name] === option.value}
                onChange={handleChange}
              />
              <Image
                src={option.imageUrl}
                alt={option.label}
                width={64}
                height={64}
                priority={true}
              />
            </label>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ImageRadioGroup;
