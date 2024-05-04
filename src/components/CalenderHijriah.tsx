import axios from "axios";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

export const CalenderHijriah = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    const fetchData = async (selectedDate: Date | undefined) => {
      if (!selectedDate) {
        // Jika tanggal tidak dipilih, set data ke null
        setData(null);
        return;
      }

      // Mengubah format tanggal menjadi yyyy-mm-dd
      const formattedDate = selectedDate?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

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
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData(date);
  }, [date]);

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="flex flex-col md:flex-row gap-2 p-5">
        <div className="">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border h-full"
          />
        </div>

        <Card className="p-5 w-full">
          <CardHeader>
            <CardTitle className="font-bold">Kalender Hijriah</CardTitle>
          </CardHeader>
          <CardContent>
            {error && <div>Error: {error}</div>}
            {data ? (
              <div className="">
                <div className="font-bold text-3xl">
                  {data[0].hari} - {data[0].tanggal_hijriyah}
                </div>
                <div>Bulan, {data[0].bulan_hijriyah}</div>
                <div>Tahun, {data[0].tahun_hijriyah}</div>
                <Card className="mt-2 p-2 bg-green-300">
                  <h1 className="font-bold">Acara</h1>
                  <p>{data[0].acaranya || "Tidak ada Acara"} </p>
                </Card>
                <Card className="mt-2 p-2 bg-sky-300">
                  <h1 className="font-bold">Puasa</h1>
                  <p>{data[0].puasanya || "Tidak ada Puasa"} </p>
                </Card>
                <div>
                  <Link
                    to="/details-calender"
                    className="underline underline-offset-2"
                  >
                    See details
                  </Link>
                </div>
                {/* <p>hari: {data[0].hari}</p>
              <p>tanggal hijriyah: {data[0].tanggal_hijriyah}</p>
              <p>bulan hijriyah: {data[0].bulan_hijriyah}</p>
              <p>tahun hijriyah: {data[0].tahun_hijriyah}</p>
              <p>tanggal masehi: {data[0].tanggal_masehi}</p>
              <p>bulan masehi: {data[0].bulan_masehi}</p>
              <p>tahun masehi: {data[0].tahun_masehi}</p>
              <p>acaranya: {data[0].acaranya}</p>
              <p>Puasanya: {data[0].puasanya}</p>
              <p>Puasanya2: {data[0].puasanya2}</p> */}
              </div>
            ) : (
              <div className="text-center font-bold my-10">
                <h1>Tanggal tidak ditemukan</h1>
                <p>Silahkan pilih tanggal !</p>
              </div>
            )}
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};
