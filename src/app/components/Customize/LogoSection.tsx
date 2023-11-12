import { Box, InputLabel, Slider } from "@mui/material";
import UploadModal from "../UploadModal";

export default function LogoSection({ handleChange, data }: LogoSectionProps) {
  return (
    <>
      <Box
        my={2}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Box
          p={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={256}
          height={128}
          borderRadius={4}
          border="2px dashed #e8eef2"
        >
          {data.logoImage && (
            <Box
              width="100%"
              height={128}
              sx={{
                backgroundImage: `url(${data.logoImage})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
              }}
            ></Box>
          )}
          {!data.logoImage && <Box>No Logo</Box>}
        </Box>
        <UploadModal data={data} handleChange={handleChange} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <InputLabel id="logoWidth" sx={{ my: 1 }}>
          Width
        </InputLabel>
        <Slider
          sx={{ mb: 1 }}
          name="logoWidth"
          aria-label="Temperature"
          value={data.logoWidth}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={50}
          marks
          min={50}
          max={500}
        />
        <InputLabel id="logoHeight" sx={{ my: 1 }}>
          Height
        </InputLabel>
        <Slider
          sx={{ mb: 1 }}
          name="logoHeight"
          aria-label="Temperature"
          value={data.logoHeight}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={50}
          marks
          min={50}
          max={500}
        />
        <InputLabel id="logoOpacity">Opacity</InputLabel>
        <Slider
          name="logoOpacity"
          aria-label="Temperature"
          value={data.logoOpacity}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={0.01}
          min={0}
          max={1}
        />
        <InputLabel id="logoPadding">Padding</InputLabel>
        <Slider
          name="logoPadding"
          aria-label="Temperature"
          value={data.logoPadding}
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={1}
          min={0}
          max={20}
        />
      </Box>
    </>
  );
}
