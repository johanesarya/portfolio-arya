import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div
        id="myHero"
        className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage2}
              className="w-10 rounded-md"
              loading="lazy"
            ></img>
            <q>
              Hidup mengajarkan keseimbangan lewat roda yang tak henti
              berputar.😌
            </q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">
            Haloha, Saya Johanes Arya Pramesta Nugraha S.Ak., S.Kom.
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya adalah seorang guru <b>bisnis digital</b> di SMK Pangudi Luhur
            Tarcisius yang merupakan lulusan dari Soegijapranata Catholic
            University Program Studi Akuntansi dan Sistem Informasi yang
            berhasil menyelesaikan studi dalam waktu 3,5 tahun. Saya memiliki
            minat yang tinggi dalam bidang pengembangan web dan aplikasi, bisnis
            digital, editing foto dan video, serta selalu antusias untuk
            mempelajari hal-hal baru.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#myProyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className=" rounded-2xl w-[450px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        ></img>
      </div>

      {/* Tools Section */}
      <div className="tools mt-32 py-10">
        <h1 className="text-4xl/snug font-bold mb-4">Tools</h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
          website ataupun design:
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
            >
              <img
                src={tool.gambar}
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                loading="lazy"
              ></img>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proyek */}
      <div id="myProyek" className="proyek mt-32 py-10">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} loading="lazy"></img>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
