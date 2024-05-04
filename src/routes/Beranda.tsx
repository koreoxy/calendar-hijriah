import { CalenderHijriah } from "@/components/CalenderHijriah";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Beranda = () => {
  return (
    <div>
      <section className="w-full h-[250px] md:h-[500px]">
        <div className="w-full h-[100%] bg-[url(/hero-img.jpg)] bg-no-repeat bg-cover bg-center relative">
          <div className="bg-gray-800/50 w-full h-full">
            <div className="text-center mx-auto py-16 md:py-36 xl:py-40">
              <h2 className="text-white font-bold sm:text-lg md:text-4xl">
                <em>Risalah asy-Syaikh ‘Abd ar-Rauf fi at-Taqwim</em>
              </h2>
              <h1 className="mt-5 text-white font-bold text-3xl md:text-6xl font-pacifico">
                SEULAYAN
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="flex flex-col items-center max-w-3xl mx-auto p-10">
          <h1 className="font-bold text-lg md:text-3xl">Misi Project</h1>
          <ol className="mt-5 list-decimal text-md md:text-lg">
            <li>
              Untuk mengetahui cara pemanfaatan Naskah{" "}
              <em>Risalah asy-Syaikh ‘Abd ar-Rauf fi at-Taqwim</em> menjadi
              bentuk aplikasi
            </li>
            <li>
              Untuk mengetahui cara men-digitalisasikan naskah{" "}
              <em>Risalah asy-Syaikh ‘Abd ar-Rauf fi at-Taqwim</em> menggunakan
              basis bahasa java untuk Ilmu Falak
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-5 py-16">
          <Card className="flex flex-col md:flex-row items-center">
            <CardHeader className="text-center md:text-start">
              <CardTitle>
                NASKAH RISALAH ASY-SYAIKH 'ABD AR-RAUF FI AT-TAQWIM
              </CardTitle>
              <CardDescription>
                Naskah tersebut sebagai rujukan dasar dari perhitungan Hisab
                Awal Bulan Qamariyah dalam kalender Hijriah.
              </CardDescription>
            </CardHeader>
            <div className="p-2">
              <img src="/naskah.jpg" className="objcet-cover" />
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <CalenderHijriah />
      </section>
    </div>
  );
};
