import React from 'react'
import CardBase from '../components/cardBase.jsx';
function Cyber() {
   let items = [
     {
       id: 1,
       img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
       title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
       description:
         "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
     
     },
     {
       id: 2,
       img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
       title: "What Is Hacking? Types of Hacking & More",
       description:
         "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      
     },
     {
       id: 3,
       img: "https://static.guvi.in/course-thumbnail/webps/dark-web.webp",
       title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
       description:
         "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
     
     },
     
     
     {
      id: 4,
      img:"https://static.guvi.in/course-thumbnail/webps/ethical_en_bundle.webp",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    
    },
   ];
   return (
<div className="d-flex align-content-between flex-wrap">
         {items.map((e, i) => {
         return <CardBase data={e} key={i} />;
       })}
     </div>
   );
}

export default Cyber