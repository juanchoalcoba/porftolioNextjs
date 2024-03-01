"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const section_1 = document.getElementById("vertical");
    const col_left = document.querySelector(".col_left");
    const timeIn = gsap.timeline({ paused: true });

    timeIn.fromTo(
      col_left,
      { y: 0 },
      { y: "170vh", duration: 1, ease: "none" },
      0
    );

    const scroll_1 = ScrollTrigger.create({
      animation: timeIn,
      trigger: section_1,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    });

    
  }, []);
  return (
    <>
      <section id="vertical">
        <div className="container">
          <div className="vertical__content">
            <div className="col col_left">
              <h2 className="vertical__heading">
                <span>About</span>
                <span>Me</span>
              </h2>
            </div>
            <div className="col col_right">
              <div className="vertical__item">
                <h3>HELLO WORLD</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, placeat assumenda? Soluta, ab! Ipsa saepe natus
                  adipisci amet laborum, asperiores odit reprehenderit culpa
                  suscipit ipsam libero necessitatibus enim! Quod, quia.
                </p>
              </div>
              <div className="vertical__item">
                <h3>Ahora te hablo un poco de mi</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  reiciendis molestias, ipsa consectetur dolore velit nostrum
                  recusandae nisi accusantium quaerat minima a excepturi
                  architecto deleniti repellendus illum consequatur ullam iste.
                </p>
              </div>
              <div className="vertical__item">
                <h3>Ahora te hablo un poco de mi</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  reiciendis molestias, ipsa consectetur dolore velit nostrum
                  recusandae nisi accusantium quaerat minima a excepturi
                  architecto deleniti repellendus illum consequatur ullam iste.
                </p>
              </div>
              <div className="vertical__item">
                <h3>Ahora te hablo un poco de mi</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  reiciendis molestias, ipsa consectetur dolore velit nostrum
                  recusandae nisi accusantium quaerat minima a excepturi
                  architecto deleniti repellendus illum consequatur ullam iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AboutMe;
