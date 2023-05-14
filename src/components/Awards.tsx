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
        <thead>
          <tr className="table-row">
            <th className="">Awards</th>
            <th className="">Categories</th>
            <th className="">Location</th>
            <th className="">Year</th>
          </tr>
        </thead>
        {table.map((award) => (
          <tbody key={award.id}>
            <tr className="table-row">
              <td><h2>{award.name}</h2></td>
              <td>{award.category}</td>
              <td>{award.location}</td>
              <td>{award.year}</td>
            </tr>
          </tbody>
        ))}
      </div>
    </div>
  );
};
