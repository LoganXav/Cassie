import "../sass/components/services.scss";

export const Services: React.FC = () => {
  interface group {
    id: number;
    icon: any;
    name: string;
    details: string;
  }
  let items: group[] = [];

  items = [
    {
      id: 1,
      icon: <i className="ri-camera-lens-line"></i>,
      name: "LIGHTENING",
      details: "",
    },
    {
      id: 2,
      icon: <i className="ri-clapperboard-line"></i>,
      name: "ARRANGEMENTS",
      details: "",
    },
    {
      id: 3,
      icon: <i className="ri-printer-line"></i>,
      name: "PRINTING",
      details: "",
    },
    {
      id: 4,
      icon: <i className="ri-camera-3-line"></i>,
      name: "PHOTOSHOOTING",
      details: "",
    },
    {
      id: 5,
      icon: <i className="ri-image-edit-line"></i>,
      name: "EDITING",
      details: "",
    },
    {
      id: 6,
      icon: <i className="ri-macbook-line"></i>,
      name: "SHARING",
      details: "",
    },
    {
      id: 7,
      icon: <i className="ri-gallery-line"></i>,
      name: "EDITORIALS",
      details: "",
    },
    {
      id: 8,
      icon: <i className="ri-blur-off-line"></i>,
      name: "RETOUCHING",
      details: "",
    },
  ];
  return (
    <div className="services-container">
      <div className="services">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <div className="icon">{item.icon}</div>
            <div className="about">
                <h2>{item.name}</h2>
                <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
