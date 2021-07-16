import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Navbar({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const LG_SIZE = 1024;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav className="p-10 grid grid-cols-2">
      <div className="mx-auto col-start-1 col-end-3 row-start-1 lg:col-start-1 lg:col-end-2">
        <h1 className="inline font-bold text-2xl">ALEX SÁNCHEZ</h1>
      </div>
      <button
        className={styles["hamburguer-menu"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>
      {width < LG_SIZE ? (
        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames={{
            enter: styles["mobile-menu-enter"],
            enterActive: styles["mobile-menu-enter-active"],
            enterDone: styles["mobile-menu-enter-done"],
            exit: styles["mobile-menu-exit"],
            exitActive: styles["mobile-menu-exit-active"],
            exitDone: styles["mobile-menu-exit-done"],
          }}
        >
          <ul className="float-right col-span-2 mt-5 hidden">
            <li
              className={styles["link-mobile"]}
              onClick={() => onClick("experience")}
            >
              experience()
            </li>
            <li
              className={styles["link-mobile"]}
              onClick={() => onClick("skills")}
            >
              skills()
            </li>
            <li
              className={styles["link-mobile"]}
              onClick={() => onClick("projects")}
            >
              projects()
            </li>
            <li
              className={styles["link-mobile"]}
              onClick={() => onClick("linkedin")}
            >
              linkedin()
            </li>
          </ul>
        </CSSTransition>
      ) : (
        <ul className="float-right sm:ml-10 mx-auto col-span-1 inline">
          <li className={styles.link} onClick={() => onClick("experience")}>
            experience()
          </li>
          <li className={styles.link} onClick={() => onClick("skills")}>
            skills()
          </li>
          <li className={styles.link} onClick={() => onClick("projects")}>
            projects()
          </li>
          <li className={styles.link} onClick={() => onClick("linkedin")}>
            linkedin()
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
