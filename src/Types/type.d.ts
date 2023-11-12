type UserInput = {
  urlField: string;
  logoImage: string;
  bodyShapeStyle: "squares" | "dots";

  fileTypes: "png" | "jpeg" | "svg";
  suffix: string;

  foreground: string;
  backgroundColor: string;
  innerEye: string;
  outerEye: string;

  logoWidth: number;
  logoHeight: number;
  logoOpacity: number;
  logoPadding: number;

  resolution: number;
  eyeShapeStyle: string;
  ecLevel: "L" | "M" | "Q" | "H";
};

type FormFieldProps = {
  data: any;
  handleChange: (event: any) => void;
};

type ImageRadioGroupProps = {
  name: string;
  label: string;
  options: any;
  data: any;
  handleChange: (event: any) => void;
};

type EyeShapeRadiusItem = {
  [key: string]: [number, number, number, number];
};

type EyeShapeRadius = {
  [key: string]: EyeShapeRadiusItem;
};

type UploaderProps = FormFieldProps;
type ModalProps = FormFieldProps;
type QrOptionSectionProps = FormFieldProps;
type ColorTabsProps = FormFieldProps;
type QrCodeProps = FormFieldProps;
type StyleSectionProps = FormFieldProps;
type LogoSectionProps = FormFieldProps;
type ResolutionSectionProps = FormFieldProps;
type ColorsSectionProps = FormFieldProps;
