import { Box } from "@mui/material";
import { errorLevels } from "@/data/dropdown";
import Dropdown from "../Dropdown";

export default function QrOptionSection({
  data,
  handleChange,
}: QrOptionSectionProps) {
  return (
    <Box>
      <Dropdown
        value={data.ecLevel}
        name="ecLevel"
        options={errorLevels}
        label={"Error Correction Level"}
        handleChange={handleChange}
      />
    </Box>
  );
}
