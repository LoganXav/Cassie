import "../sass/components/team.scss";

export const Team: React.FC = () => {
  interface Member {
    id: number;
    name: string;
    img: string;
    role: string;
  }
  let members: Member[] = [];

  members = [
    {
      id: 1,
      name: "Stacy Morgan",
      img: "https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?b=1&s=170667a&w=0&k=20&c=z-tvJG0r-SNUrIGwZb7YjLI9f_cOnkN30vcPafskrkQ=",
      role: "Creative Director",
    },
    {
      id: 2,
      name: "Hannah Hill",
      img: "https://media.istockphoto.com/id/1336160947/photo/happy-african-american-photographer-holding-a-camera-and-smiling.jpg?b=1&s=170667a&w=0&k=20&c=6H6lZh5uDZ7DGX9L5RtlA8PwSi_oYbaVq60YNpBhRbM=",
      role: "Photographer",
    },
    {
      id: 3,
      name: "Irene Paige",
      img: "https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=zkLn4o1T0CMCXmTQZlwheJDYuW9fOXXkvTJ9zbl3sCs=",
      role: "Editor",
    },
    {
      id: 4,
      name: "John Anderson",
      img: "https://media.istockphoto.com/id/482100176/photo/confident-in-his-business-ability.jpg?b=1&s=170667a&w=0&k=20&c=t62jCkHRoFB2LeXDOWBWuXmJzUR3N4taHuuiTZnMcxY=",
      role: "Photographer",
    },
  ];

  return (
    <div className="team-container">
      <div className="team">
        <div className="top">
          <span>PHOTOGRAPHY TEAM</span>
          <h2>MEET OUR TEAM</h2>
        </div>
        <div className="cards">
            {members.map(member => (
                <div className= "card" key={member.id}>
                    <img src= {member.img}/>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className= "buttons">
                        <span>BE</span>
                        <span>LI</span>
                        <span>IG</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
