import Heading from "@/shared/Heading";
import Image from "next/image";
import React from "react";

const Personal = () => {
  return (
    <main className="w-full h-fit-content py-4 px-4">
      <section className="w-full flex flex-col md:flex-row gap-2 items-center justify-center">
        <div className="flex items-center">
          <Image
            src="/maryam.jpg"
            alt="maryam"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        <div className="">
          <Heading
            title="Maryam."
            text={
              <>
                My name is{" "}
                <span className="text-red-800 font-semibold">Maryam</span>{" "}
                (written as
                <span className="text-red-800 font-semibold"> "مریم"</span> in
                Persian). It is a name of deep historical and religious
                significance, as it is also the name of
                <span className="text-red-800 font-semibold">
                  {" "}
                  Mary, the mother of Jesus Christ
                </span>
                , revered in both Christianity and Islam.
              </>
            }
          />
        </div>
      </section>

      <section className="container flex flex-row gap-2 items-center mt-2 mb-4">
        <Heading
          className="text-justify"
          title="Activities, Interests, Hobbies."
          text={[
            "I have an insatiable hunger for learning—random documentaries, tech articles, history, psychology, and even deep dives into ",
            <a
              key="wikipedia"
              href="https://en.wikipedia.org/wiki/Special:Random"
              target="_blank"
              className="text-red-800 font-semibold"
            >
              Wikipedia's “random article”
            </a>,
            " button. I also enjoy scrolling through ",
            <a
              key="twitter"
              href="https://twitter.com"
              target="_blank"
              className="text-red-800 font-semibold"
            >
              X (formerly Twitter)
            </a>,
            ", reading and exploring different topics.",
            <br key="br1" />,
            "I’m a huge ",
            <span key="movie" className="text-red-800 font-semibold pl-1">
              movie enthusiast
            </span>,
            ", and one of my all-time favorite series is ",
            <span
              key="power"
              className="italic font-semibold text-purple-700 pl-1"
            >
              Power
            </span>,
            ", which I’ve rewatched multiple times over the past five years.",
            <br key="br2" />,
            "Beyond tech and movies, I have a deep love for ",
            <span key="animals" className="text-red-800 font-semibold">
              animals
            </span>,
            ". Their presence brings me joy, and I’ve always felt a strong connection to them.",
            <br key="br3" />,
            "Sports have been a big part of my life since childhood. I played ",
            <span key="handball" className="text-red-800 font-semibold pl-1">
              handball
            </span>,
            " for six years as part of my regional team, winning medals alongside my teammates. Nowadays, I enjoy ",
            <span
              key="rockclimbing"
              className="text-red-800 font-semibold pl-1"
            >
              rock climbing
            </span>,
            ", ",
            <span key="horseback" className="text-red-800 font-semibold pl-1">
              horseback riding
            </span>,
            ", and most importantly, ",
            <span
              key="weighttraining"
              className="text-red-800 font-semibold pl-1"
            >
              weight training
            </span>,
            ", which has become an essential part of my routine.",
          ]}
        />
      </section>
    </main>
  );
};

export default Personal;
