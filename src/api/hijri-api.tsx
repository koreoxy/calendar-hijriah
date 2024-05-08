import axios from "axios";

interface Props {
  tanggal: string;
}

export const ApiHijri = async (props: Props) => {
  const fetchData = async (tanggal: string) => {
    const options = {
      method: "GET",
      url: "https://masehi-ke-hijriyah.p.rapidapi.com/",
      params: {
        tanggal: tanggal,
      },
      headers: {
        "X-RapidAPI-Key": "7d6e466c9cmsh3e43eff1b185c05p140032jsn5de8bb82e460",
        "X-RapidAPI-Host": "masehi-ke-hijriyah.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  };

  return await fetchData(props.tanggal);
};
