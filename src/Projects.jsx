import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const carouselRef = useRef(null);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [totalGroups, setTotalGroups] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [dots, setDots] = useState([]); // State for dots

  useEffect(() => {
    const updateCarouselMetrics = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const cards = carousel.querySelectorAll(".projects-card");
      if (!cards.length) return;

      const slideWidth = cards[0].offsetWidth;
      const newVisibleSlides = Math.floor(carousel.offsetWidth / slideWidth);
      const newTotalGroups = Math.ceil(cards.length / newVisibleSlides);

      setVisibleSlides(newVisibleSlides);
      setTotalGroups(newTotalGroups);
    };

    updateCarouselMetrics();
    window.addEventListener("resize", updateCarouselMetrics);

    return () => window.removeEventListener("resize", updateCarouselMetrics);
  }, []);

  useEffect(() => {
    setDots([...Array(totalGroups).keys()]); // Update dots dynamically
  }, [totalGroups]);

  const slideProjects = (direction) => {
    if (!carouselRef.current) return;

    const cardWidth =
      carouselRef.current.querySelector(".projects-card").offsetWidth;
    const gap = parseInt(getComputedStyle(carouselRef.current).gap, 10) || 0;
    const scrollAmount = visibleSlides * (cardWidth + gap);
    const newGroup = Math.min(
      Math.max(0, currentGroup + direction),
      totalGroups - 1
    );

    setCurrentGroup(newGroup);
    carouselRef.current.scrollTo({
      left: newGroup * scrollAmount,
      behavior: "smooth",
    });
  };

  const goToSlideGroup = (group) => {
    if (!carouselRef.current) return;

    const cardWidth =
      carouselRef.current.querySelector(".projects-card").offsetWidth;
    const gap = parseInt(getComputedStyle(carouselRef.current).gap, 10) || 0;
    const scrollAmount = visibleSlides * (cardWidth + gap);

    setCurrentGroup(group);
    carouselRef.current.scrollTo({
      left: group * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div id="projects" className="section">
      <h1>Some projects I have previously worked on</h1>
      <div className="projects-section">
        <button className="slide-btn left" onClick={() => slideProjects(-1)}>
          &#10094;
        </button>
        <div className="projects-carousel" ref={carouselRef}>
          {[
            {
              img: "src/assets/images/wordlewebsite.png",
              title: "Wordle",
              description:
                "A recreation of Wordle where you have to find the 5-letter word.",
              link: "https://markus-kodehode.github.io/Wordle/",
            },
            {
              img: "src/assets/images/numberguesserwebsite.png",
              title: "Number Guesser",
              description: "Guess the number ranging from 1 - 100",
              link: "https://markus-kodehode.github.io/Random-number-guesser/",
            },
            {
              img: "images/thiswebsite.png",
              title: "Project 3",
              description: "",
              link: "https://example.com",
            },
            {
              img: "images/thiswebsite.png",
              title: "Project 4",
              description: "",
              link: "https://example.com",
            },
            {
              img: "images/thiswebsite.png",
              title: "Project 5",
              description: "",
              link: "https://example.com",
            },
            {
              img: "images/thiswebsite.png",
              title: "Project 6",
              description: "",
              link: "https://example.com",
            },
          ].map((project, index) => (
            <div className="projects-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="projects-overlay">
                <h2>{project.title}</h2>
                {project.description && <p>{project.description}</p>}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="slide-btn right" onClick={() => slideProjects(1)}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {dots.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentGroup ? "active" : ""}`}
            onClick={() => goToSlideGroup(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
