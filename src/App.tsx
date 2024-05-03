import axios from "axios";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

function App() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    const fetchData = async (selectedDate: Date | undefined) => {
      // Mengubah format tanggal menjadi yyyy-mm-dd
      const formattedDate = selectedDate?.toISOString().split("T")[0];

      const options = {
        method: "GET",
        url: "https://masehi-ke-hijriyah.p.rapidapi.com/",
        params: {
          tanggal: formattedDate,
        },
        headers: {
          "X-RapidAPI-Key":
            "7d6e466c9cmsh3e43eff1b185c05p140032jsn5de8bb82e460",
          "X-RapidAPI-Host": "masehi-ke-hijriyah.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData(date);
  }, [date]);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}

export default App;
