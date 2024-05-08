import React, { useState } from "react";
import dayjs from "dayjs";
import { Button } from "./ui/button";

interface CalendarInputProps {
  onSelectDate: (date: dayjs.Dayjs) => void;
}

export const CalenderInput: React.FC<CalendarInputProps> = ({
  onSelectDate,
}) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = dayjs(event.target.value);
    setSelectedDate(selected);
  };

  const handleSubmit = () => {
    onSelectDate(selectedDate);
  };

  return (
    <div className="flex gap-2 items-center">
      <input
        className="border p-2 rounded-md"
        type="date"
        value={selectedDate.format("YYYY-MM-DD")}
        onChange={handleDateChange}
      />

      <Button onClick={handleSubmit} variant="default">
        Konversi Ke Hijriah
      </Button>
    </div>
  );
};
