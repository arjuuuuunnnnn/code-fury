import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Hemanth S Banur',
    role: 'Backend Developer',
    image: '/assets/hemanth.jpeg',
    description: 'I am a 5th-semester B.Tech student at PES University, specializing in Computer Science and Engineering (CSE) with a focus on Artificial Intelligence and Machine Learning (AIML). My strengths in full-stack development and machine learning enable me to excel in the dynamic tech industry. I am driven by a passion for innovation and solving real-world problems through software development and AI technologies.',
    contact: '+91 6363546350',
    email: 'arjunbanur27@gmail.com',
    github: 'https://github.com/arjuuuuunnnnn'
  },
  {
    name: 'Atheek Hebbar',
    role: 'Backend Developer',
    image: '/assets/atheek.jpeg',
    description: 'I am a 5th-semester B.Tech student at PES University, focusing on Artificial Intelligence and Machine Learning (AIML). My expertise lies in full-stack development and machine learning, equipping me with the tools to thrive in today’s tech-driven world. I am passionate about leveraging my skills to create innovative solutions and tackle challenges in both software development and AI.',
    contact: '+91 6361970815',
    email: 'atheekhebbar@gamil.com',
    github: 'https://github.com/atheek2003'
  },
  {
    name: 'B R Arjun',
    role: 'Frontend Developer',
    image: '/assets/arjun.jpeg',
    description: 'I am a B.Tech student at PES University, currently in my 5th semester, pursuing a specialization in Artificial Intelligence and Machine Learning (AIML). With a solid foundation in full-stack development and machine learning, I am well-prepared to navigate the fast-paced tech landscape. My academic journey and technical skills demonstrate a strong dedication to driving innovation and solving complex problems in software development and AI.',
    contact: '+91 9449542890',
    email: 'arjunperdur123@gmail.com',
    github: 'https://github.com/BRArjun'
  },
  {
    name: 'Abhishek HS',
    role: 'Frontend Developer',
    image: '/assets/abhi.jpeg',
    description: 'I am a B.Tech student at PES University, currently in my 5th semester, specializing in Artificial Intelligence and Machine Learning (AIML). I have strong skills in full-stack development and machine learning, which position me well for the rapidly evolving tech industry. My academic focus and technical expertise reflect a deep commitment to innovation and problem-solving in both software development and AI-driven solutions.',
    contact: '+91 8660210830',
    email: 'abhiaklapura@gmail.com',
    github: 'https://github.com/abhi29032004'
  },
];

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <p className="text-xl text-center mb-16">
          We are a team of four dedicated individuals working together to make a difference in disaster management and community support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{member.role}</h3>
                <p className="text-gray-700 mb-4">{member.description}</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Contact:</strong> {member.contact}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline">{member.email}</a></p>
                  <p><strong>GitHub:</strong> <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{member.github.replace('https://github.com/', '')}</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;