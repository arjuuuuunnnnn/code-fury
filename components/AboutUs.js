import React from 'react';
import './AboutUs.css'; // Import CSS for styling

const teamMembers = [
  {
    name: 'Member 1',
    image: '/path/to/member1.jpg',
    description: 'A brief description about Member 1.',
  },
  {
    name: 'Member 2',
    image: '/path/to/member2.jpg',
    description: 'A brief description about Member 2.',
  },
  {
    name: 'Member 3',
    image: '/path/to/member3.jpg',
    description: 'A brief description about Member 3.',
  },
  {
    name: 'Member 4',
    image: '/path/to/member4.jpg',
    description: 'A brief description about Member 4.',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
