import { TextField } from "@mui/material";
import LogoSection from "./Customize/LogoSection";
import ColorsSection from "./Customize/ColorsSection";
import StyleSection from "./Customize/StyleSection";

export default function FormField({ data, handleChange }: FormFieldProps) {
  return (
    <>
      <TextField
        fullWidth
        name="urlField"
        id="outlined-basic"
        variant="outlined"
        label="Enter your URL"
        value={data.urlField}
        placeholder="https://example.com"
        onChange={handleChange}
      />
      <StyleSection data={data} handleChange={handleChange} />
      <ColorsSection data={data} handleChange={handleChange} />
      <LogoSection data={data} handleChange={handleChange} />
      {/* <ResolutionSection data={data} handleChange={handleChange} /> */}
    </>
  );
}
