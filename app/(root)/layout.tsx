import Navbar from "@/components/Navbar";
import "../globals.css";
import Image from "next/image";
import Footer from "@/components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full flex flex-col md:flex-row p-2 md:p-20 gap-2 md:gap-10"
      style={{
        background: "linear-gradient(to bottom, #ff9a9e 0%, #fad0c4 50%, rgba(251,194,235, 0) 100%)"
      }}
       >
        <section className="flex flex-row w-full md:w-1/2 border border-red-800  md:min-h-[1500px]">
          <div className="h-[400px] w-2/3 bg-green-800">
            <Image
              src="/mr.png"
              alt="maryam"
              width={800}
              height={800}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/3 h-[400px] border border-red-800 flex items-center justify-center">
            <h1 className="text-center">hello world..</h1>
          </div>
        </section>

        <section className="w-full md:w-1/2 flex flex-col gap-0 min-h-[400px]">
          <div className="border border-red-800 pt:20 md:pt-60">
            <Navbar />
          </div>
          <div className="border border-red-800 min-h-screen">{children}</div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
