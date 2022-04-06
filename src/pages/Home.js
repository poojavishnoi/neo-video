import React from "react";
import "../style/home.css";
import { useNavigate } from "react-router-dom";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { VideoCard } from "../component/";
import { useVideo } from "../context/video-context";

export function Home() {
  const navigate = useNavigate();

  const { acousticList, indieList, instruList } = useVideo();

  return (
    <div className="home_container">
      <div className="home_center_section">
        <img
          className="center_img"
          src="https://yt3.ggpht.com/P1QnEX53rhYHhAHYrrM75hJcluhBv166t3y2J6suDdze9dRwpPDVVCmsPBigTTJLcf0RgR301MBJ=s576"
          alt="center_image"
        />
        <div className="overlap_text">
          <h1>Indian Indie</h1>
          <br />
          <h2>
            Discover Indian Artists like Anuv Jain. Taba Chaka, Ashu Shukla an
            many more...
          </h2>
          <button
            className="btn discover_btn primary_solid_btn"
            onClick={() => {
              navigate("/videolist");
            }}
          >
            Discover Now
          </button>
        </div>
      </div>

      <div className="explore_container">
        <h1>Indie music</h1>
        <div className="explore_main_container">
          <Splide
            className="splide-slide"
            options={{
              perPage: 3,
              gap: "2rem",
              rewind: true,
              pagination: false,
              breakpoints: {
                700: {
                  destroy: true,
                },
              },
            }}
          >
            {indieList.map((item) => {
              return (
                <SplideSlide key={item._id}>
                  <VideoCard data={item} />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>

      <div className="explore_container">
        <h1>Acoustic cover music</h1>
        <div className="explore_main_container">
          <Splide
            className="splide-slide"
            options={{
              perPage: 3,
              gap: "2rem",
              rewind: true,
              pagination: false,
              breakpoints: {
                700: {
                  destroy: true,
                },
              },
            }}
          >
            {acousticList.map((item) => {
              return (
                <SplideSlide key={item._id}>
                  <VideoCard data={item} />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>

        <div className="explore_container">
          <h1>Instrumental music</h1>
          <div className="explore_main_container">
            <Splide
              className="splide-slide"
              options={{
                perPage: 3,
                gap: "2rem",
                rewind: true,
                pagination: false,
                breakpoints: {
                  700: {
                    destroy: true,
                  },
                },
              }}
            >
              {instruList.map((item) => {
                return (
                  <SplideSlide key={item._id}>
                    <VideoCard data={item} />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
