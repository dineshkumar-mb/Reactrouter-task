import React from 'react'
import CardBase from '../components/cardBase.jsx';
function Fsd() {
    let items = [
      {
        id: 1,
        img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
        title:
          "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
        description:
          "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
       
      },
      {
        id: 2,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        title:
          "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
        description:
          "When you’re hiring a full-stack developer, what are the most important things you look for?",
       
      },
      {
        id: 3,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        title:
          "Top Differences: Full Stack Developer vs Software Engineer 2024",
        description:
          "A Full Stack Developer is a tech all-rounder. They work on both the front and",
       
      },

      {
        id: 4,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        title:
          "Top Differences: Full Stack Developer vs Software Engineer 2024",
        description:
          "A Full Stack Developer is a tech all-rounder. They work on both the front and",
       
      },
      {
        id: 5,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        title:
          "Top Differences: Full Stack Developer vs Software Engineer 2024",
        description:
          "A Full Stack Developer is a tech all-rounder. They work on both the front and",
       
      },
      {
        id: 6,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        title:
          "Top Differences: Full Stack Developer vs Software Engineer 2024",
        description:
          "A Full Stack Developer is a tech all-rounder. They work on both the front and",
       
      },
    ];
    return (
      <div className="d-flex justify-content-between flex-wrap p-3">
        {items.map((e, i) => {
          return <CardBase data={e} key={i} />;
        })}
      </div>
    );
}

export default Fsd