import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers";

import sprite from "../../../images/sprite.svg";
import { Span, Div, Text } from "./Calendar.Styled";
import Modal from "../Modal";

import dayjs from "dayjs";
import { useState } from "react";
//import styled from "styled-components";
//import { styled } from "@mui/material/styles";
import "./Calendar.css";

export default function Calendar({ onSelectDay }) {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [value, setValue] = useState(null);
  const [dateDedline, setDateDedline] = useState(
    `Today, ${dayjs().format("MMMM D")}`
  );

  // const MyDay = styled(PickersDay)({
  //   color: "#08da24",
  //   backgroundColor: "aqua",
  // });

  const MyDay1 = (props) => {
    console.log(props);

    // const { selected, disabled, ...otherProps } = props;

    // const bgdColorDay = selected ? "var(--calendarBorder)" : "inherit";
    // const colorDay = selected
    //   ? "var(--calendarCurrentDate)"
    //   : disabled
    //   ? "var(--opacityWhite)"
    //   : "var(--calendarCurrentMonth)";
    // return (
    //   <PickersDay
    //     {...otherProps}
    //     //  disabled={disabled}
    //     sx={{
    //       color: colorDay,
    //       backgroundColor: bgdColorDay,
    //       fontSize: "14px",
    //       "&:focus": {
    //         backgroundColor: "var(--calendarBorder)",
    //         color: "var(--calendarCurrentDate)",
    //       },
    //     }}
    //   />
    // );
    // const { selected, disabled, ...otherProps } = props;

    return <PickersDay {...props} className="DayItem" />;
  };

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
    // closeModalCalendar();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Div>
        <Text>{dateDedline}</Text>
        <Span onClick={openModalCalendar}>
          <svg width="18" height="18" stroke="var(--accentColor)">
            <use href={sprite + `#icon-chevron-down`}></use>
          </svg>
        </Span>
      </Div>

      {isShowCalendar && (
        <Modal close={closeModalCalendar}>
          <DateCalendar
            sx={{
              backgroundColor: "var(--calendarBackground)",
              color: "var(--calendarCurrentMonth)",
              // border: "1px solid var(--calendarBorder)",
              borderRadius: "8px",
            }}
            defaultValue={dayjs()}
            views={["day"]}
            disablePast
            value={value}
            onChange={onChange}
            slots={{ day: MyDay1 }}
            //  slotProps={{  }}
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
