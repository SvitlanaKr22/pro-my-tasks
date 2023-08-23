import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers";
import sprite from "../../../images/sprite.svg";
import { Span, Div, Text } from "./Calendar.Styled";
import Modal from "../Modal";
import Popover from "@mui/material/Popover";

import dayjs from "dayjs";
import { useState } from "react";

import "./Calendar.css";

export default function Calendar({ onSelectDay }) {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [value, setValue] = useState(null);
  const [dateDedline, setDateDedline] = useState(
    `Today, ${dayjs().format("MMMM D")}`
  );

  const CalendarDay = (props) => <PickersDay {...props} className="DayItem" />;

  const openModalCalendar = () => {
    setIsShowCalendar(true);
  };

  const closeModalCalendar = () => {
    setIsShowCalendar(false);
  };

  const onChange = (newValue) => {
    setValue(newValue);
    onSelectDay(newValue);
    setDateDedline(`${dayjs(newValue).format("dddd, MMMM D, YYYY")}`);
    closeModalCalendar();
  };
  //-----------------------------------------------------------------------
  // return (
  //   <LocalizationProvider dateAdapter={AdapterDayjs}>
  //     <Div onClick={openModalCalendar}>
  //       <Text>{dateDedline}</Text>
  //       <Span>
  //         <svg width="18" height="18" stroke="var(--accentColor)">
  //           <use href={sprite + `#icon-chevron-down`}></use>
  //         </svg>
  //       </Span>
  //     </Div>

  //     {isShowCalendar && (
  //       <Popover
  //         open={open}
  //         anchorEl={anchorEl}
  //         onClose={closeModalCalendar}
  //         anchorOrigin={{
  //           vertical: "bottom",
  //           horizontal: "left",
  //         }}
  //       >
  //         <DateCalendar
  //           className="CalendarContainer"
  //           sx={{
  //             "& .MuiDayCalendar-weekDayLabel": {
  //               fontFamily: "var(--poppinsFont)",
  //               color: "var(--filterModalText)",
  //               fontSize: "14px",
  //               width: "21px",
  //               height: "21px",
  //               margin: "14px 6px 11px 6px",
  //             },

  //             "& .MuiPickersCalendarHeader-root": {
  //               position: "relative",
  //               maxHeight: "56px",
  //               height: "56px",
  //               minHeight: "56px",
  //               paddingLeft: "0px",
  //               marginTop: "0px",
  //               marginBottom: "0px",
  //             },
  //             "& .MuiPickersCalendarHeader-root::after": {
  //               content: '""',
  //               width: "210px",
  //               height: "1px",
  //               backgroundColor: "var(--filterLines)",
  //               position: "absolute",
  //               top: "100%",
  //               left: "10%",
  //             },
  //             "& .MuiPickersFadeTransitionGroup-root": {
  //               position: "static",
  //             },
  //             "& .MuiPickersCalendarHeader-label": {
  //               position: "absolute",
  //               top: "30%",
  //               left: "calc(30% );",
  //             },
  //             "& .MuiPickersArrowSwitcher-spacer": {
  //               width: "180px",
  //             },
  //             "& .MuiPickersArrowSwitcher-button": {
  //               color: "var(--calendarCurrentMonth)",
  //             },
  //             "& .MuiPickersArrowSwitcher-button.Mui-disabled": {
  //               color: "var(--opacityWhite)",
  //             },
  //           }}
  //           defaultValue={dayjs()}
  //           views={["day"]}
  //           disablePast
  //           disableHighlightToday
  //           showDaysOutsideCurrentMonth={true}
  //           value={value}
  //           onChange={onChange}
  //           slots={{
  //             day: CalendarDay,
  //           }}
  //         />
  //       </Popover>
  //     )}
  //   </LocalizationProvider>
  // );

  //-----------------------------------------------------------------------
  //-----------------------------------------------------------------------

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Div onClick={openModalCalendar}>
        <Text>{dateDedline}</Text>
        <Span>
          <svg width="18" height="18" stroke="var(--accentColor)">
            <use href={sprite + `#icon-chevron-down`}></use>
          </svg>
        </Span>
      </Div>

      {isShowCalendar && (
        <Modal close={closeModalCalendar}>
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
        </Modal>
      )}
    </LocalizationProvider>
  );
}
// Кастомизируемость
// Возможность подстраивать компоненты под собственный дизайн.
// Material-UI

// С помощью MuiThemeProvider. Компонент использует контекст библиотеки React для передачи объекта с темой всем дочерним компонентам.

// Через добавление классов. Все компоненты поддерживают атрибут className.

// Для кастомизации дочерних компонентов необходимо воспользоваться атрибутом classes.

// Библиотека заточена на применение CSS-in-Js, что может вызвать определенные трудности,
//если стили для приложения содержатся в CSS - файлах.
//Для внедрения кастомных стилей CSS -in -Js предоставляется HOC withStyles()
// либо хук makeStyles() для функциональных компонентов.

// Позволяет изменять корневые элементы с помощью атрибута component.

// Например, компонент List по дефолту рендерит <ul> элемент. Его можно заменить другим элементом или React компонентом:

// <List component="nav">
//   <ListItem button>
//     <ListItemText primary="Trash" />
//   </ListItem>
//   <ListItem button>
//     <ListItemText primary="Spam" />
//   </ListItem>
// </List>
