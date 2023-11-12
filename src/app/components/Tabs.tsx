import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import StyleSection from "./Customize/StyleSection";
import ColorsSection from "./Customize/ColorsSection";
import LogoSection from "./Customize/LogoSection";
import QrCode from "./QrCode";
import QrOptionSection from "./Customize/QrOptionSection";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box mb={4}>{children}</Box>}
    </div>
  );
}

export default function ColorTabs({ data, handleChange }: ColorTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2} spacing={2} wrap="wrap">
        <Grid item xs={12} md={8}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="scrollable auto tabs"
              variant="scrollable"
              allowScrollButtonsMobile
              scrollButtons="auto"
            >
              <Tab value={0} label="All" />
              <Tab value={1} label="Styles" />
              <Tab value={2} label="Colors" />
              <Tab value={3} label="Logo" />
              <Tab value={4} label="QR Options" />
              <Tab value={5} label="Templates" />
            </Tabs>
            <TextField
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              name="urlField"
              id="outlined-basic"
              variant="outlined"
              label="Enter your URL"
              value={data.urlField}
              placeholder="https://example.com"
              onChange={handleChange}
            />
            <TabPanel value={value} index={0}>
              <InputLabel
                sx={{ textTransform: "uppercase", fontWeight: "bold", mt: 1 }}
              >
                Styles
              </InputLabel>
              <StyleSection data={data} handleChange={handleChange} />

              <InputLabel
                sx={{ textTransform: "uppercase", fontWeight: "bold", mt: 4 }}
              >
                Colors
              </InputLabel>
              <ColorsSection data={data} handleChange={handleChange} />

              <InputLabel
                sx={{ textTransform: "uppercase", fontWeight: "bold", mt: 4 }}
              >
                Logo
              </InputLabel>
              <LogoSection data={data} handleChange={handleChange} />

              <InputLabel
                sx={{ textTransform: "uppercase", fontWeight: "bold", mt: 4 }}
              >
                Qr Options
              </InputLabel>
              <QrOptionSection data={data} handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <StyleSection data={data} handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ColorsSection data={data} handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <LogoSection data={data} handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <QrOptionSection data={data} handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              Coming!
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <QrCode data={data} handleChange={handleChange} />
        </Grid>
      </Grid>
    </>
  );
}
