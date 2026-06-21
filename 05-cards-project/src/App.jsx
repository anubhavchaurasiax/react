import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const jobOpenings = [
    {
      companyName: "Vortex ",
      brandLogo: "https://companieslogo.com/img/orig/VERX-d89cec60.png?t=1751226149",
      post: "Senior Frontend Engineer",
      datePosted: "2 days ago",
      tag: "Full-time",
      experienceLevel: "Senior level",
      offerMoney: "$120/hr",
      location: "Mumbai, India"
    },
    {
      companyName: "PixelPerfect ",
      brandLogo: "data:image/jpeg;base64,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",
      post: "UI/UX Designer",
      datePosted: "Just now",
      tag: "Part-time",
      experienceLevel: "Junior level",
      offerMoney: "$55/hr",
      location: "Mumbai, India"
    },
    {
      companyName: "Apex ",
      brandLogo: "https://t3.ftcdn.net/jpg/18/77/44/08/240_F_1877440834_pMsQ3RTWoFNTpHRVwilVNPbgCKSfAPFn.jpg",
      post: "Data Analyst",
      datePosted: "5 days ago",
      tag: "Full-time",
      experienceLevel: "Junior level",
      offerMoney: "$65/hr",
      location: "Mumbai, India"
    },
    {
      companyName: "GreenSprout ",
      brandLogo: "https://t4.ftcdn.net/jpg/20/28/09/41/240_F_2028094197_bAhOoNGCg9tWYi0yxeVl8R5ueszk0kvg.jpg",
      post: "Social Media Manager",
      datePosted: "3 days ago",
      tag: "Part-time",
      experienceLevel: "Junior level",
      offerMoney: "$35/hr",
      location: "Bengaluru, India"
    },
    {
      companyName: "CloudScale ",
      brandLogo: "https://t3.ftcdn.net/jpg/20/35/75/10/240_F_2035751092_omGKi07H9uz85xvabGIoqtXkdRmmt2fo.jpg",
      post: "DevOps Architect",
      datePosted: "1 week ago",
      tag: "Full-time",
      experienceLevel: "Senior level",
      offerMoney: "$150/hr",
      location: "Bengaluru, India "
    },
    {
      companyName: "Nova Health ",
      brandLogo: "https://t4.ftcdn.net/jpg/17/65/22/41/240_F_1765224172_nnawxosTW53IH3ODGLQlp0Ur1hDMQu1U.jpg",
      post: "Mobile App Developer (iOS)",
      datePosted: "4 days ago",
      tag: "Full-time",
      experienceLevel: "Senior level",
      offerMoney: "$110/hr",
      location: "Mumbai, India"
    },
    {
      companyName: "BrightMind ",
      brandLogo: "https://t3.ftcdn.net/jpg/19/96/81/68/240_F_1996816878_oPGTg0bU6qXpMSeDAGhhStG0R2cE5DQ3.jpg",
      post: "Curriculum Writer",
      datePosted: "6 days ago",
      tag: "Part-time",
      experienceLevel: "Junior level",
      offerMoney: "$45/hr",
      location: "New Delhi, India"
    },
    {
      companyName: "CyberShield ",
      brandLogo: "https://t3.ftcdn.net/jpg/15/56/98/72/240_F_1556987257_0Ttsh0sF01pV8aXCY6OMGOkZj8fSG8Dc.jpg",
      post: "Security Operations Analyst",
      datePosted: "2 days ago",
      tag: "Full-time",
      experienceLevel: "Senior level",
      offerMoney: "$125/hr",
      location: "Pune, India"
    },
    {
      companyName: "Quantum AI ",
      brandLogo: "https://t3.ftcdn.net/jpg/20/51/43/40/240_F_2051434068_cplh28DmJqTeaZuBL51Cf3ybYQkUoRug.jpg",
      post: "Machine Learning Researcher",
      datePosted: "Yesterday",
      tag: "Full-time",
      experienceLevel: "Senior level",
      offerMoney: "$180/hr",
      location: "Hyderabad, India"
    },
    {
      companyName: "Echo Commerce",
      brandLogo: "https://t3.ftcdn.net/jpg/19/26/73/96/240_F_1926739657_EQJLvfruytm6jNhQaBFND6QPNrhdTUXf.jpg",
      post: "Customer Support Specialist",
      datePosted: "5 days ago",
      tag: "Part-time",
      experienceLevel: "Junior level",
      offerMoney: "$25/hr",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="parent">
      {jobOpenings.map((el, idx) => {
        console.log(idx);
        return <div key={idx}>
          <Card company={el.companyName} brand={el.brandLogo} post={el.post} date={el.datePosted} tag={el.tag} exp={el.experienceLevel} offer={el.offerMoney} city={el.location} />
        </div>
      })}

    </div>

  )
}

export default App

