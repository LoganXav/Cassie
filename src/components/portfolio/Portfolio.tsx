import "./Portfolio.scss";

export const Portfolio: React.FC = () => {

  interface Concept {
    id: number;
    name: string;
    img: string;
    year: number;
  }
  let slider: Concept[] = [];

  slider = [
    {
      id: 1,
      name: "Motivation",
      img: "https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic=",
      year: 2017,
    },
    {
      id: 2,
      name: "Beauty",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      year: 2017,
    },
    {
      id: 3,
      name: "Arrangements",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      year: 2017,
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <div className="top">
          <span>PHOTOGRAPHY PORTFOLIO</span>
          <h2>ONLINE PORTFOLIO</h2>
        </div>
        <div className="slider-container">
          {slider.map((slide) => (
            <div className="slide" key={slide.id}>
              <img src={slide.img} alt={slide.name} />
              <h3>{slide.name}</h3>
              <p>{slide.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
