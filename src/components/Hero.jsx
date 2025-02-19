import React from "react";
import Section from "./Section";
import HeroBg from "../assets/png/HeroBg.png";
import HeroStockVideo from "../assets/mp4/HeroStockVideo.mp4";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import Heading from "./Heading";
import accent1 from "../assets/png/accent1.png";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <Section>
      <div
        id="hero"
        className="object-contain flex flex-col justify-center items-center relative"
      >
        <div className="z-2">
          <video className="videoTag w-screen" autoPlay loop muted>
            <source src={HeroStockVideo} type="video/mp4" />
          </video>
        </div>

        <Heading
          title="The Observatory"
          className="absolute mt-52 px-20 py-5 bg-gradient-to-r from-color-6/10   via-color-6/10 hidden lg:block"
        >
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            officia, consequatur nobis cumque, mollitia asperiores corrupti
            perspiciatis fugiat distinctio impedit ea temporibus deleniti
            consectetur libero corporis velit repudiandae laudantium officiis.
          </p>
        </Heading>

        <div className="flex relative lg:bottom-5 gap-5 py-5 flex-col lg:flex-row lg:w-11/12 w-full px-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              logo={project.logoUrl}
              text={project.text}
            />
          ))}
        </div>
      </div>
      <div className="absolute">
        <img
          className="relative  lg:bottom-[225px] bottom-[790px] lg:h-full h-auto w-screen -z-20"
          src={accent1}
          alt="background"
        />
      </div>

      <div className="relative bottom-[5rem] w-full z-2 px-[10rem] lg:pb-28 mt-[7rem] lg:mt-0">
        <div className="flex items-center justify-center lg:justify-between gap-12 lg:flex-row flex-col">
          <h1 className="font-bold lg:text-[67px] text-[42px] ">
            Enjoy A Luxury Experience at The Observatory
          </h1>

          <div className="border-[10px] border-yellow-500 shadow-1">
            <img
              className="lg:w-[60rem] lg:h-[30rem]"
              width={650}
              height={320}
              src=""
              alt="image"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
