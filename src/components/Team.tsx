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
      name: "Ella Anderson",
      img: "https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic=",
      role: "Photographer",
    },
    {
      id: 2,
      name: "Hannah Hill",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      role: "Photographer",
    },
    {
      id: 3,
      name: "Irene Paige",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      role: "Editor",
    },
    {
      id: 4,
      name: "Lee Morgan",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      role: "Creative Director",
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
