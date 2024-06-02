import React from 'react';
import IMG1 from '../../assets/watch.png';
import IMG2 from '../../assets/w.png';
import IMG4 from '../../assets/quiz.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Watch Website',
      img: IMG1,
      description:
        'A website that provides information about the available watches and their details',
      technologies: 'HTML | CSS',
      link: 'https://ani18605.github.io/bonus_marks/',
      github: 'https://github.com/ani18605/bonus_marks',
    },
    {
      id: 2,
      title: 'Quiz App',
      img: IMG4,
      description:
        'Quiz App that provides a set of questions and options to choose from',
      technologies: 'CSS | HTML | JAVASCRIPT ',
      link: 'https://ani18605.github.io/quiz/',
      github: 'https://github.com/ani18605/quiz',
    },
    {
      id: 3,
      title: 'Weather App',
      img: IMG2,
      description: 'Weather App that provides information about the weather in a specific city',
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://ani18605.github.io/weather-app/',
      github: 'https://github.com/ani18605/weather-app',
    },
    
  ];

  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
