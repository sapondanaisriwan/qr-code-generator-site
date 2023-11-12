import { Box, Button, Stack, TextField } from "@mui/material";
import { QRCode } from "react-qrcode-logo";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { fileTypes, resolutions } from "../../data/dropdown";
import { eyeShapeRadius } from "@/data/radioOptions";
import Dropdown from "./Dropdown";
import download from "downloadjs";

export default function QrCode({ data, handleChange }: QrCodeProps) {
  const handleDownload = async () => {
    try {
      const qrcodeNode = document.getElementById("react-qrcode-logo");
      if (qrcodeNode) {
        let image, extension;
        switch (data.fileTypes) {
          case "png":
            image = await toPng(qrcodeNode);
            extension = "png";
            break;
          case "jpg":
            image = await toJpeg(qrcodeNode);
            extension = "jpeg";
            break;
          case "svg":
            image = await toSvg(qrcodeNode);
            extension = "svg";
            break;
          default:
            console.error("Unsupported file type");
            return;
        }
        download(
          image,
          `${data.suffix === "" ? "adashima-qrcode" : data.suffix}.${extension}`
        );
      }
    } catch (error) {
      console.error("Oops, something went wrong!", error);
    }
  };
  return (
    <Box sx={{ position: "sticky", top: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "470px",
          height: "470px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <QRCode
          logoOnLoad={() => console.log("logo loaded")}
          value={data.urlField}
          size={data.resolution - 20}
          bgColor={data.backgroundColor}
          fgColor={data.foreground}
          qrStyle={data.bodyShapeStyle}
          logoImage={data.logoImage}
          logoWidth={data.logoWidth}
          logoHeight={data.logoHeight}
          logoOpacity={data.logoOpacity}
          logoPadding={data.logoPadding}
          ecLevel={data.ecLevel}
          eyeColor={[
            { outer: data.outerEye, inner: data.innerEye },
            { outer: data.outerEye, inner: data.innerEye },
            { outer: data.outerEye, inner: data.innerEye },
          ]}
          eyeRadius={[
            {
              outer: eyeShapeRadius[data.eyeShapeStyle].outer1,
              inner: eyeShapeRadius[data.eyeShapeStyle].inner1,
            },
            {
              outer: eyeShapeRadius[data.eyeShapeStyle].outer2,
              inner: eyeShapeRadius[data.eyeShapeStyle].inner2,
            },
            {
              outer: eyeShapeRadius[data.eyeShapeStyle].outer3,
              inner: eyeShapeRadius[data.eyeShapeStyle].inner3,
            },
          ]}
        />
      </Box>
      <Stack
        sx={{ marginTop: 1, marginBottom: 1 }}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Dropdown
          name="resolution"
          label="Size"
          size="small"
          options={resolutions}
          value={data.resolution}
          handleChange={handleChange}
        />
        <TextField
          name="suffix"
          id="outlined-basic"
          variant="outlined"
          label="File name"
          size="small"
          value={data.suffix}
          placeholder="Add file name"
          onChange={handleChange}
          sx={{ minWidth: 150 }}
        />
        <Dropdown
          name="fileTypes"
          label="Types"
          size="small"
          options={fileTypes}
          value={data.fileTypes}
          handleChange={handleChange}
        />
      </Stack>
      <Button
        variant="contained"
        onClick={handleDownload}
        sx={{ width: "100%", mb: 2 }}
      >
        CREATE QR CODE
      </Button>
    </Box>
  );
}
