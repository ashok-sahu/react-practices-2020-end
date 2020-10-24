import React,{useEffect} from 'react'
import Aos from "aos";

const Animateonscrool = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <div>
      <div className="grids">
        <div className="boxes" data-aos="fade-up">
          1
        </div>
        <div className="boxes" data-aos="fade-down">
          2
        </div>
        <div className="boxes" data-aos="fade-right">
          3
        </div>
        <div className="boxes" data-aos="fade-left">
          4
        </div>
        <div className="boxes" data-aos="fade-up-right">
          5
        </div>
        <div className="boxes" data-aos="fade-up-left">
          6
        </div>
        <div className="boxes" data-aos="fade-down-right">
          7
        </div>
        <div className="boxes" data-aos="fade-down-left">
          8
        </div>
        <div className="boxes" data-aos="flip-left">
          9
        </div>
        <div className="boxes" data-aos="flip-right">
          10
        </div>
        <div className="boxes" data-aos="flip-up">
          11
        </div>
        <div className="boxes" data-aos="flip-down">
          12
        </div>
        <div className="boxes" data-aos="zoom-in">
          13
        </div>
        <div className="boxes" data-aos="zoom-in-up">
          14
        </div>
        <div className="boxes" data-aos="zoom-in-down">
          15
        </div>
        <div className="boxes" data-aos="zoom-in-left">
          16
        </div>
        <div className="boxes" data-aos="zoom-in-right">
          17
        </div>
        <div className="boxes" data-aos="zoom-out">
          18
        </div>
        <div className="boxes" data-aos="zoom-out-up">
          19
        </div>
        <div className="boxes" data-aos="zoom-out-down">
          20
        </div>
        <div className="boxes" data-aos="zoom-out-right">
          21
        </div>
        <div className="boxes" data-aos="zoom-out-left">
          22
        </div>
        <div className="boxes" data-aos="fade-up" data-aos-duration="3000">
          23
        </div>
        <div
          className="boxes"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          24
        </div>
        <div
          className="boxes"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          25
        </div>
        <div
          className="boxes"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          26
        </div>
        <div
          className="boxes"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          27
        </div>
        <div
          className="boxes"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          28
        </div>
        <div
          className="boxes"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          29
        </div>
        <div
          className="boxes"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          30
        </div>
        <div
          className="boxes"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          31
        </div>
        <div
          className="boxes"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          32
        </div>
        <div
          className="boxes"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          32
        </div>
      </div>
    </div>
    )
}

export default Animateonscrool
