import "./Hero.scss";
import { useState, useRef, useEffect } from "react";

export const Hero: React.FC = () => {
  interface Images {
    id: number;
    img: string;
    location: string;
    details: string;
  }
  let slider: Images[] = [];

  slider = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      location: "Iceland",
      details: "Sample",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1534143826428-81fc61582afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      location: "France",
      details: "Sample",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      location: "Denmark",
      details: "Sample",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slider.length;
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="hero-container">
      <div className="hero">
        {slider.map((slide, index) => (
          <div className="slider" key={index}>
            {index === current && (
              <div className="slide">
                <img src={slide.img} />
                <div className="content">
                  <p>from {slide.location} to</p>
                  <h2>{slide.details}</h2>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
