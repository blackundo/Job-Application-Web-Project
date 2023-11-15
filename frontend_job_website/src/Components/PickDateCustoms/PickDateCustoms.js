import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";

export default function PickDateCustoms({ label }) {
  return (
    <div className="py-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDateRangePicker"]}>
          <DemoItem label={label} component="MobileDateRangePicker">
            <MobileDateRangePicker
              defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
