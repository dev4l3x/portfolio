import { Image } from "next/image";
import styles from "./About.module.css";
import useResponsive, { SIZES } from "../../hooks/responsiveHook";

const About = () => {
  const width = useResponsive();

  return (
    <section className="alternative-section grid grid-cols-1 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10">
      <div>
        <h1 className="title">about('me')</h1>
        <p className="text-justify text-gray-500 mt-10">
          I started software development when I was a little boy. I am a very
          curious person and always trying to learn about the things that I feel
          unknown. That is the reason why I started coding when I was a boy, to
          understand how computer apps were made. I started with javascript,
          making static pages (after some hello world‘s) without much
          complexity. I remember that great feeling of just writing some code
          and see how the computer just did whatever you told him to do.
          <br />
          <br />
          Throughout high school, I wondered how desktop applications and
          dynamic pages were supported. This led me to get a brief introduction
          to the awesome world of object oriented programming. I started
          learning some Java while trying to do some new projects. This passion
          made me focus on computer programming, which I already knew was my
          passion. Then, I started my computer science degree where I learned a
          lot of interesting things like algorithms, design patterns, compilers
          and many other things. But the most valuable lesson that I learned at
          university is how much there was yet to learn. <br />
          <br />
          Now I still have this passion and I keep learning day by day, keeping
          in mind that there is always something new to learn or build.
        </p>
      </div>
      {width >= SIZES.SM && (
        <div className="self-center justify-self-center">
          <img src="/server.jpg" className={styles["server-image"]} alt="" />
        </div>
      )}
    </section>
  );
};

export default About;
