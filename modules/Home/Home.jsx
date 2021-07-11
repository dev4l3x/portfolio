import Image from "next/image";
import me from "../../resources/me-fade.png";
import useResponsive, { SIZES } from "../../hooks/responsiveHook";
import styles from "./Home.module.css";

const Home = ({ className }) => {
  const component_classes = " grid grid-cols-2";

  const width = useResponsive();

  return (
    <section className={className + component_classes}>
      {width > SIZES.SM && (
        <div className="justify-self-center">
          <img src="/me-fade.png" alt="" className={styles["image"]} />
        </div>
      )}
      <div className="col-span-2 sm:col-span-1 justify-self-center sm:justify-self-start p-10 pt-0 sm:pt-10 max-w-lg">
        <h1 className="text-2xl sm:text-3xl">
          Hey there! Welcome to my web.
          <br />
          I'm a <span className="highlight">software engineer</span> who
          <br />
          <span className="highlight">loves</span> what he does
        </h1>
        <p className="text-justify mt-5 text-gray-500">
          Throughout high school, I wondered how desktop applications and
          dynamic pages were supported. This led me to get a brief introduction
          to the awesome world of object oriented programming. I started
          learning some Java while trying to do some new projects.
        </p>
      </div>
    </section>
  );
};

export default Home;
