"use client";
import { motion } from "framer-motion";
import { HeroHighlight,Highlight } from "../ui/hero-highlight";

import { BackgroundBeams } from "../ui/background-beams";

export function Hero() {
  return (
    // <HeroHighlight>
    //   <motion.h1
    //     initial={{
    //       opacity: 0,
    //       y: 20,
    //     }}
    //     animate={{
    //       opacity: 1,
    //       y: [20, -5, 0],
    //     }}
    //     transition={{
    //       duration: 0.5,
    //       ease: [0.4, 0.0, 0.2, 1],
    //     }}
    //     className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
    //   >
    //     Transforming Ideas into Experiences, One Line of{" "}
    //     <Highlight className="text-black dark:text-white">
    //     Code at a Time.
    //     </Highlight>
    //   </motion.h1>
    // </HeroHighlight>
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}