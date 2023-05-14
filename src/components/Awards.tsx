import "../sass/components/awards.scss";

export const Awards: React.FC = () => {
  interface Rows {
    id: number;
    name: string;
    category: string;
    location: string;
    year: string;
  }
  let table: Rows[] = [];

  table = [
    {
      id: 1,
      name: "Still Photo Festival",
      category: "Editorial / Commercial",
      location: "New York / Usa",
      year: "2016 / 17",
    },
    {
      id: 2,
      name: "Filming Day Awards",
      category: "Documentary",
      location: "Copenhagen / Denmark",
      year: "2018 / 19",
    },
    {
      id: 3,
      name: "Chicago Photo Festival",
      category: "Editorial / Commercial",
      location: "Chicago / Usa",
      year: "2016 / 17",
    },
    {
      id: 4,
      name: "Editing Awards",
      category: "Commercial",
      location: "Paris / France",
      year: "2018 / 19",
    },
  ];

  return (
    <div className="awards-container">
      <div className="awards">
        <div className="thead">
          <div className="table-row">
            <div className="th">Awards</div>
            <div className="th">Categories</div>
            <div className="th">Location</div>
            <div className="th">Year</div>
          </div>
        </div>
        {table.map((award) => (
          <div className="tbody" key={award.id}>
            <div className="table-row">
              <div className="td"><h2>{award.name}</h2></div>
              <div className="td">{award.category}</div>
              <div className="td">{award.location}</div>
              <div className="td">{award.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
