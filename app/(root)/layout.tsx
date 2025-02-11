import Navbar from "@/components/Navbar";
import "../globals.css";
import Image from "next/image";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full">
      <div
        className="w-full flex flex-col md:flex-row p-2 md:p-20 gap-2"
        style={{
          background:
            "linear-gradient(to bottom,rgb(218, 100, 126) 0%,rgb(228, 187, 195) 50%, rgba(15, 14, 15, 0) 100%)",
          // "linear-gradient(to bottom, #ff9a9e 0%, #fad0c4 50%, rgba(251,194,235, 0) 100%)",
        }}
      >
        <section className="flex flex-col md:flex-row w-full md:w-1/2 mt-8 md:mt-0">
          <div className="min-h-[200px] md:h-[400px] w-full md:w-1/2">
            <Image
              src="/perfect-removebg.png"
              alt="maryam"
              width={600}
              height={600}
              layout="responsive"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/3 min-h-[150px] md:h-[400px] flex flex-1 items-center justify-center">
            <h1 className="font-dancing-script text-xl md:text-3xl rotate-[-35deg] text-gray-600 font-semibold">
              Is anyone there?...
            </h1>
          </div>
        </section>

        <section
          className="w-full md:w-1/2 flex flex-col gap-0 min-h-[400px] mt-1 md:mt-16 rounded-xl"
          style={{
            boxShadow:
              "0 -4px 6px -2px rgba(0,0,0,0.2), -4px 4px 6px -2px rgba(0,0,0,0.2), 4px 4px 6px -2px rgba(0,0,0,0.3)",
          }}
        >
          <div className="w-full">
            <h2 className="text-center text-2xl font-semibold h-[100px]  py-8">
              Maryam Habibpour
            </h2>
            <Navbar />
          </div>
          <div className="">{children}</div>
        </section>
        <ChatBot />
      </div>
      <Footer />
    </main>
  );
}
