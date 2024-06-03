import React from 'react'
import CardBase from '../components/cardBase.jsx';
function Ds() {
  let items = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
    
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
  
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
     
    },
    {
      id: 4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
     
    },
    {
      id: 5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
     
    },
    {
      id: 6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
     
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

export default Ds