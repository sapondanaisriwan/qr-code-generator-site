import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type DropdownProps = {
  value: string;
  name: string;
  size?: "small" | "medium";
  options: {
    id: number;
    value: string | number;
    label: string;
  }[];
  label: string;
  handleChange: (event: any) => void;
};

export default function Dropdown({
  value,
  handleChange,
  name,
  size,
  options,
  label,
}: DropdownProps) {
  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          name={name}
          size={size}
          label={label}
          onChange={handleChange}
        >
          {options &&
            options.map((item) => (
              <MenuItem key={item.id} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
