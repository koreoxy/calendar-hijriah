import dayjs, { Dayjs } from "dayjs";

interface DateObject {
  currentMonth: boolean;
  date: Dayjs;
  today?: boolean;
}

export const generateDate = (
  month: number = dayjs().month(),
  year: number = dayjs().year()
): DateObject[] => {
  const firstDateOfMonth: Dayjs = dayjs()
    .year(year)
    .month(month)
    .startOf("month");
  const lastDateOfMonth: Dayjs = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate: DateObject[] = [];

  //CREATE PREFIX DATE
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.day(i) });
  }

  //GENERATE CURRENT DATE
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      currentMonth: true,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remaining: number = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({ date: lastDateOfMonth.date(i), currentMonth: false });
  }

  return arrayOfDate;
};

export const months: string[] = [
  "Januari",
  "Febuari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "July",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
