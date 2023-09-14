import Popover from "@mui/material/Popover";
//import Typography from "@mui/material/Typography";
import ColumnListOnCard from "./ColumnListOnCard";

export default function PopoverCard({
  anchorEl,
  onClose,
  ownerColumn,
  idCard,
}) {
  const open = Boolean(anchorEl);

  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* <Typography sx={{ p: 2 }}>This should be a list of columns</Typography> */}
        <ColumnListOnCard currentCol={ownerColumn} idCard={idCard} />
      </Popover>
    </>
  );
}
