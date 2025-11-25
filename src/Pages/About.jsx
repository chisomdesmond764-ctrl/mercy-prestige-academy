import React from 'react'
 

const About = () => {
  return (
    <div>
        <div className="about-section">
      <h2>About Us</h2>
 <div className="about-content">
     <div className="about-image">
    </div>
       <div className="about-text">
          <h3>Welcome To Mercy Prestige Academy</h3>
          <p>
            Founded in 2018, Mercy Prestige Academy (MPA) is a co-educational
            Christian school dedicated to fostering and nurturing a holistic
            learning environment. We believe in excellence, discipline, and
            moral upbringing as we guide each child to achieve their full
            potential.
          </p>
         <Link to="/about" className="about-btn">Learn More</Link>      
      </div>
      </div>
    </div>
  </div>
  )
}

export default About;