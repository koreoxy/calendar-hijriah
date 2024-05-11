import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { generateDate, months } from "@/utils/calender.js";
import { cn } from "@/lib/utils.js";
import { Card } from "@/components/ui/card";
import { CalenderInput } from "@/components/CalenderInput";
import axios from "axios";

interface HijriData {
  date: string;
  day: string;
  weekday: {
    en: string;
    ar: string;
  };
  month: {
    number: number;
    en: string;
    ar: string;
  };
  year: string;
}

interface GregorianData {
  date: string;
  day: string;
  weekday: {
    en: string;
  };
  month: {
    number: number;
    en: string;
  };
  year: string;
}

interface ApiResponse {
  code: number;
  status: string;
  data: {
    hijri: HijriData;
    gregorian: GregorianData;
  };
}

export const CalenderHijriahPage = () => {
  const days: string[] = [
    "Aleuhad",
    "Seunanyan",
    "Seulasa",
    "Rabu",
    "Hameh",
    "Djeumeu'at",
    "Satu",
  ];

  const bulan = [
    "Asan Usen",
    "Sapha",
    "Maulot Phon",
    "Maulot Teungoh",
    "Maulot Akhe",
    "Khanduri Boh Kayee",
    "Khanduri Apam",
    "Khanduri Bu",
    "Puasa",
    "Uroe Raya",
    "Meuapet/beurapet",
    "Haji",
  ];

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [hijriDate, setHijriDate] = useState<HijriData | null>(null);
  // const [gregorianDate, setGregorianDate] = useState<GregorianData | null>(
  //   null
  // );
  const [additionalApiData, setAdditionalApiData] = useState<any>(null);
  console.log(additionalApiData);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/gToH/${selectDate.format("DD-MM-YYYY")}`
        );
        const data: ApiResponse = await response.json();
        setHijriDate(data.data.hijri);
        // setGregorianDate(data.data.gregorian);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectDate]);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://masehi-ke-hijriyah.p.rapidapi.com/",
          params: {
            tanggal: selectDate.format("YYYY-MM-DD"),
          },
          headers: {
            "X-RapidAPI-Key":
              "7d6e466c9cmsh3e43eff1b185c05p140032jsn5de8bb82e460",
            "X-RapidAPI-Host": "masehi-ke-hijriyah.p.rapidapi.com",
          },
        };
        const response = await axios.request(options);
        setAdditionalApiData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching additional data:", error);
        setIsLoading(false);
      }
    };

    fetchAdditionalData();
  }, [selectDate]);

  const handleDateSelect = (selectedDate: dayjs.Dayjs) => {
    setSelectDate(selectedDate);
  };

  return (
    <div className="">
      <section
        className="flex flex-col items-center max-w-3xl mx-auto mt-10 mb-20"
        id="calender"
      >
        <h1 className="font-bold text-2xl text-center">Kalender</h1>
        <Card className="flex flex-col mx-auto gap-5 p-0 sm:p-2 md:p-5 mt-2">
          <Card className="w-full h-full py-4 px-2 sm:px-3 md:py-0 md:p-5">
            {/* HEADER TOP */}
            <div className="flex justify-between">
              <h1 className="font-semibold">
                {months[today.month()]}, {today.year()}
              </h1>
              <div className="flex items-center gap-5">
                <CircleArrowLeft
                  className="cursor-pointer"
                  onClick={() => {
                    setToday(today.month(today.month() - 1));
                  }}
                />
                <h1
                  className="cursor-pointer"
                  onClick={() => {
                    setToday(currentDate);
                  }}
                >
                  Hari ini
                </h1>
                <CircleArrowRight
                  className="cursor-pointer"
                  onClick={() => {
                    setToday(today.month(today.month() + 1));
                  }}
                />
              </div>
            </div>

            {/* NAME OF DAY */}
            <div className="w-full grid grid-cols-7 text-gray-500">
              {/* DISPLAY FOR DEKSTOP NAME DATE*/}
              {days.map((day, index) => {
                return (
                  <h1
                    key={index}
                    className={cn(
                      "h-14 hidden md:grid place-content-center text-sm"
                    )}
                  >
                    {day}
                  </h1>
                );
              })}
              {/* DISPLAY FOR MOBILE NAME DATE */}
              {days.map((day, index) => {
                const truncatedDay = day.slice(0, 3);
                return (
                  <h1
                    key={index}
                    className={cn(
                      "h-14 grid place-content-center text-sm md:hidden",
                      {
                        truncate: day.length > 5,
                      }
                    )}
                  >
                    {truncatedDay}
                  </h1>
                );
              })}
            </div>

            {/* DATE LIST */}
            <div className="w-full grid grid-cols-7">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  const isAleuhad = days[date.day()] === "Aleuhad";
                  return (
                    <div
                      key={index}
                      className={cn(
                        "h-14 border-t grid place-content-center text-sm",
                        isAleuhad ? "text-red-500" : ""
                      )}
                    >
                      <h1
                        className={cn(
                          currentMonth ? "" : "text-gray-400",
                          today ? "bg-sky-600 text-white" : "",
                          selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                            ? "bg-black text-white"
                            : "",
                          "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                        )}
                        onClick={() => {
                          setSelectDate(date);
                        }}
                      >
                        {date.date()}
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
          </Card>

          <Card className="w-full h-full mt-1 p-5">
            <div>
              <CalenderInput onSelectDate={handleDateSelect} />
            </div>
            <h1 className="font-bold text-xl mt-4 text-center">
              Hasil Kalender Hijriah
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {/* BAHASA ARAB */}
              <Card className="p-2 w-full">
                <h1 className="font-bold">Bahasa Arab :</h1>
                {isLoading ? (
                  <p>Loading Bahasa Arab date...</p>
                ) : (
                  <div>
                    {hijriDate && (
                      <div>
                        <p>Tanggal : {hijriDate.date}</p>{" "}
                        <p>
                          Hari : {hijriDate.weekday.en} - {hijriDate.weekday.ar}
                        </p>
                        <p>
                          Bulan : {hijriDate.month.en} - {hijriDate.month.ar}{" "}
                        </p>
                        <p>Tahun : {hijriDate.year}</p>
                      </div>
                    )}
                    {/* {gregorianDate && (
                    <p>
                      Gregorian Date: {gregorianDate.date} (
                      {gregorianDate.weekday.en}, {gregorianDate.month.en}{" "}
                      {gregorianDate.year})
                    </p>
                  )} */}
                  </div>
                )}
              </Card>

              {/* BAHASA ACEH */}
              <Card className="p-2 w-full">
                <h1 className="font-bold">Bahasa Aceh :</h1>
                {isLoading ? (
                  <p>Loading Bahasa Aceh date...</p>
                ) : (
                  <div>
                    {hijriDate && (
                      <div>
                        <p>Tanggai : {hijriDate.date}</p>
                        <p>
                          Uroe :{" "}
                          {hijriDate.weekday.en === "Al Juma'a"
                            ? "Djeumeu'at"
                            : hijriDate.weekday.en === "Al Athnayn"
                            ? "Seunanyan"
                            : hijriDate.weekday.en === "Al Thalaata"
                            ? "Seulasa"
                            : hijriDate.weekday.en === "Al Arba'a"
                            ? "Rabu"
                            : hijriDate.weekday.en === "Al Khamees"
                            ? "Hameh"
                            : hijriDate.weekday.en === "Al Sabt"
                            ? "Satu"
                            : "Aleuhad"}
                        </p>
                        <p>Buleuen : {bulan[hijriDate.month.number - 1]}</p>
                        <p>Thon : {hijriDate.year}</p>
                      </div>
                    )}
                  </div>
                )}
              </Card>

              <Card className="p-2 w-full col-span-full">
                <h1 className="font-bold">Info lainnya :</h1>
                {additionalApiData && (
                  <div>
                    <Card className="bg-sky-100 p-2">
                      <h1 className="font-bold">Acara : </h1>
                      <p>{additionalApiData[0].acaranya || "-"}</p>
                    </Card>
                    <Card className="bg-green-100 p-2 mt-2">
                      <h1 className="font-bold">Puasa :</h1>
                      <p>{additionalApiData[0].puasanya.slice(2.0) || "-"}</p>
                    </Card>
                  </div>
                )}
              </Card>
            </div>
          </Card>
        </Card>
      </section>
    </div>
  );
};
