import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";

export default function PickDateCustoms({ label, onChange }) {
  const handleDateChange = (newDates) => {
    // Extract start and end dates and pass them to the parent component
    const [start, end] = newDates;
    console.log(start, end);
    onChange({ start, end });
  };
  return (
    <div className="py-3">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["MobileDateRangePicker"]}>
          <DemoItem label={label} component="MobileDateRangePicker">
            <MobileDateRangePicker
              defaultValue={[new Date(2022, 3, 17), new Date(2022, 3, 21)]}
              onChange={handleDateChange}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
