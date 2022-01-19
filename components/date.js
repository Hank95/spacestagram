import { parseISO, format } from "date-fns";

export default function FormateDate({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className=" m-auto" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
