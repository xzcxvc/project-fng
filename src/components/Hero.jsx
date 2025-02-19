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
        className="object-contain flex flex-col justify-center items-center"
      >
        <div className="z-2">
          <video className="videoTag w-screen" autoPlay loop muted>
            <source src={HeroStockVideo} type="video/mp4" />
          </video>
        </div>

        <Heading
          title="The Observatory"
          className="absolute px-20 py-5 bg-gradient-to-r from-color-6/10   via-color-6/10 hidden lg:block"
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

      <div className="relative -top-[229px] -z-10">
        <img className="absolute top-0 left-0 w-screen" src={accent1} alt="background" />
      </div>
    </Section>
  );
};

export default Hero;
