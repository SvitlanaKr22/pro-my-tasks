import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers";
import sprite from "../../../images/sprite.svg";
import { Span, Div, Text } from "./Calendar.Styled";
import Popover from "@mui/material/Popover";

import dayjs from "dayjs";
import { useState } from "react";

import "./Calendar.css";

export default function Calendar({ onSelectDay }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [value, setValue] = useState(null);
  const [dateDedline, setDateDedline] = useState(
    `Today, ${dayjs().format("MMMM D")}`
  );

  const CalendarDay = (props) => <PickersDay {...props} className="DayItem" />;

  const onChange = (newValue) => {
    setValue(newValue);
    onSelectDay(newValue);
    setDateDedline(`${dayjs(newValue).format("dddd, MMMM D, YYYY")}`);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Div>
        <Text onClick={handleClick}>{dateDedline}</Text>
        <Span onClick={handleClick}>
          <svg width="18" height="18" stroke="var(--accentColor)">
            <use href={sprite + `#icon-chevron-down`}></use>
          </svg>
        </Span>
      </Div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPopover-paper": {
            borderRadius: "6px",
            backgroundColor: "inherit",
          },
        }}
      >
        <DateCalendar
          className="CalendarContainer"
          sx={{
            "& .MuiDayCalendar-weekDayLabel": {
              fontFamily: "var(--poppinsFont)",
              color: "var(--filterModalText)",
              fontSize: "14px",
              width: "21px",
              height: "21px",
              margin: "14px 6px 11px 6px",
            },

            "& .MuiPickersCalendarHeader-root": {
              position: "relative",
              maxHeight: "56px",
              height: "56px",
              minHeight: "56px",
              paddingLeft: "0px",
              marginTop: "0px",
              marginBottom: "0px",
            },
            "& .MuiPickersCalendarHeader-root::after": {
              content: '""',
              width: "210px",
              height: "1px",
              backgroundColor: "var(--filterLines)",
              position: "absolute",
              top: "100%",
              left: "10%",
            },
            "& .MuiPickersFadeTransitionGroup-root": {
              position: "static",
            },
            "& .MuiPickersCalendarHeader-label": {
              position: "absolute",
              top: "30%",
              left: "calc(30% );",
            },
            "& .MuiPickersArrowSwitcher-spacer": {
              width: "180px",
            },
            "& .MuiPickersArrowSwitcher-button": {
              color: "var(--calendarCurrentMonth)",
            },
            "& .MuiPickersArrowSwitcher-button.Mui-disabled": {
              color: "var(--opacityWhite)",
            },
          }}
          defaultValue={dayjs()}
          views={["day"]}
          disablePast
          disableHighlightToday
          showDaysOutsideCurrentMonth={true}
          value={value}
          onChange={onChange}
          slots={{
            day: CalendarDay,
          }}
        />
      </Popover>
    </LocalizationProvider>
  );
}
