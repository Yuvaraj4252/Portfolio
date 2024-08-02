import React from 'react'
import image from './Assets/WhatsApp Image 2024-08-02 at 13.26.25_00b15429.jpg'
import './Home.css'
const Home = () => {
  return (
    <div className='container'>
        <div className='content'>
            <div className='profileContent'>
                <h1 className='Name'>Dr.Yuvaraj.T, M.E, Ph.D</h1>
                <div className='links'>
                    <a href="https://scholar.google.com/citations?hl=en&user=DTdG_E8AAAAJ" className='link'>Google Scholar</a>
                    <a href="https://orcid.org/0000-0002-8892-9417" className='link'>ORCID iD</a>
                </div>
                <h5 className='h5'>Career Objective</h5>
                <p className='intro'>
                Looking forward to build my career by utilizing all opportunities 
to implement my skills and knowledge in order to pursue a long 
term relationship with the organization.
                </p>
                <h5 className='h5'>Research Objective</h5>
                <p className='intro'>
                A dedicated Research & Development professional with a robust 
background encompassing over three years of academic 
research, seven years of teaching expertise, and two years of 
industry exposure. Seeking a Postdoctoral position to further 
explore and contribute to the domains of Electric Vehicles, 
Power System Optimization, Smart Grids, Renewable Energy 
Resources, and Virtual Power Plants. 
<br></br>
<br></br>
Passionate about inspiring 
and nurturing students to achieve academic and personal 
excellence, aiming to foster a dynamic and stimulating learning 
environment conducive to lifelong scholarship and learning. 
Committed to advancing research endeavors with a proven track 
record of multiple published articles and a drive to continue 
making impactful contributions to the field.
                </p>
                <div className="experience-table-container">
      <table className="experience-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teaching Experience</td>
            <td>7 years</td>
          </tr>
          <tr>
            <td>Research Experience</td>
            <td>3 years</td>
          </tr>
          <tr>
            <td>Industry Experience</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>Total Experience</td>
            <td>12 years</td>
          </tr>
          <tr>
            <td>Total No of Publications</td>
            <td>85+</td>
          </tr>
          <tr>
            <td>Cumulative Impact Factor</td>
            <td>100.09+</td>
          </tr>
          <tr>
            <td>Citations (Scopus)</td>
            <td>1271+</td>
          </tr>
          <tr>
            <td>H-Index (Scopus)</td>
            <td>18+</td>
          </tr>
        </tbody>
      </table>
    </div>
            </div>
            <div className='imagesPlace'>
                <img src={image} alt="pic of portfolio" className='imgtag'></img>
            </div>
        </div>
    </div>
  )
}

export default Home