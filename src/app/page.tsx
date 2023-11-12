"use client";

import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { userInputData } from "../data/userInput";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import FormField from "./components/FormField";
import QrCode from "./components/QrCode";

import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from "@mui/material/styles";
import VerticalTabs from "./components/Tabs";

declare module "@mui/material/styles" {
  interface CustomPalette {
    primary: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    primary: createColor("#3062d4"),
  },
});

export default function Home() {
  const [data, setData] = useState<{ [key: string]: any }>(userInputData);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(name, value);
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <VerticalTabs data={data} handleChange={handleChange} />
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
