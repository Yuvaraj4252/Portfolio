import React from 'react';
import './Achievement.css';

const Achievements = () => {
  return (
    <div className="achievements-table-container">
      <h2>Achievements / Awards / Recognition</h2>
      <table className="achievements-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Recognized as “A” Grade faculty for contribution towards research publications at SSE</td>
            <td>2021-2022</td>
          </tr>
          <tr>
            <td>Received research awards for the contribution towards research publications at VIT University</td>
            <td>2015 & 2016</td>
          </tr>
          <tr>
            <td>Organising committee member for “ICEEE 2021: International Conference on Electrical and Electronics Engineering”, Seoul, South Korea</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Organizing committee member in International Conference on “ICCPEIC-2013” at Adhiparasakthi Engineering College, Melmaruvathur</td>
            <td>2013</td>
          </tr>
          <tr>
            <td>Served as session chair in one of the panels in the International Conference on Smart Grid & Electric Vehicle ICSGEV 2021 & 2023 at Hindustan Institute of Technology and Science, Chennai, India</td>
            <td>2021 & 2023</td>
          </tr>
          <tr>
            <td>Collaborated with professors from Foreign Universities on numerous published papers focusing on coloration</td>
            <td>Various</td>
          </tr>
          <tr>
            <td>Developed and delivered flipped instructional videos for the "Basic Electrical and Electronics Engineering" course amidst the Covid-19 pandemic</td>
            <td>2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Achievements;
