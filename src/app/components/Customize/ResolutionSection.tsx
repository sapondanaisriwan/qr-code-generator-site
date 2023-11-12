import {
  Box,
  FormControl,
  InputLabel,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function ResolutionSection({
  data,
  handleChange,
}: ResolutionSectionProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <InputLabel
        id="resolution"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        Resolution
      </InputLabel>
      <Slider
        name="resolution"
        id="resolution"
        aria-label="Temperature"
        value={data.resolution}
        valueLabelDisplay="auto"
        onChange={handleChange}
        step={50}
        marks
        min={150}
        max={500}
      />
    </Box>
  );
}
