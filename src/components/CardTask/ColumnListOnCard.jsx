import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectColumnsItems } from "../../redux/column/columnSlice";
import { selectCards } from "../../redux/cards/selectors";
import { List } from "./ColumnListOnCard.Styled";
import sprite from "../../images/sprite.svg";
import { addCard, deleteCard } from "../../redux/cards/operations";
import dayjs from "dayjs";

export default function ColumnListOnCard({ currentCol, idCard }) {
  const columns = useSelector(selectColumnsItems);
  const cards = useSelector(selectCards);

  const { ownerUser, ownerDesk, title, taskValue, priority, deadline } =
    cards.find((card) => card._id === idCard);

  const dispatch = useDispatch();

  const handleClickChoice = (idColumn) => {
    console.log(idColumn);
    console.log(idCard);

    dispatch(deleteCard(idCard));

    dispatch(
      addCard({
        ownerUser,
        ownerDesk,
        ownerColumn: idColumn,
        title,
        taskValue,
        priority,
        deadline: `${dayjs(deadline).format("MM-DD-YYYY")}`,
      })
    );
  };

  return (
    <List>
      {columns
        .filter((item) => item._id !== currentCol)
        .map((item) => (
          <li key={item._id} onClick={() => handleClickChoice(item._id)}>
            {item.title}
            <svg width="20" height="20" fill="none" stroke="var(--cardTxt)">
              <use href={sprite + `#icon-arrow-circle-broken-right`}></use>
            </svg>
          </li>
        ))}
    </List>
  );
}
