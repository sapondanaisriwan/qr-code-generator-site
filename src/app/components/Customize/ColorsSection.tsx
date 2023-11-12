import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import Dropdown from "../Dropdown";

export default function ColorsSection({
  data,
  handleChange,
}: ColorsSectionProps) {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2} flexWrap="wrap">
        <Grid item xs={12} sm={6}>
          <InputLabel sx={{ my: 1 }}>Background</InputLabel>
          <MuiColorInput
            fullWidth
            value={data.backgroundColor}
            onChange={(value) =>
              handleChange({
                target: { name: "backgroundColor", value: value },
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel sx={{ my: 1 }}>Foreground</InputLabel>
          <MuiColorInput
            fullWidth
            value={data.foreground}
            onChange={(value) =>
              handleChange({
                target: { name: "foreground", value: value },
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel sx={{ my: 1 }}>Inner Eye</InputLabel>
          <MuiColorInput
            fullWidth
            value={data.innerEye}
            onChange={(value) =>
              handleChange({
                target: { name: "innerEye", value: value },
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel sx={{ my: 1 }}>Outer Eye</InputLabel>
          <MuiColorInput
            fullWidth
            value={data.outerEye}
            onChange={(value) =>
              handleChange({
                target: { name: "outerEye", value: value },
              })
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
