import React from 'react';
import './PrePhd.css';

const PrePhd = () => {
  return (
    <div className="pre-phd-container">
      <div className="experience-table-container">
        <h2>Educational Qualifications</h2>
        <table className="experience-table">
          <thead>
            <tr>
              <th>Degree with Specialization</th>
              <th>School / Institute</th>
              <th>Mode of Study</th>
              <th>Board / University</th>
              <th>Year of Passing</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ph.D (Power System)</td>
              <td>VIT University, Vellore, India</td>
              <td>Regular</td>
              <td>VIT University</td>
              <td>2017</td>
              <td>---</td>
            </tr>
            <tr>
              <td>M.E (Power Electronics and Drives)</td>
              <td>Adhiparasakthi Engineering College, Melmaravathur, India</td>
              <td>Regular</td>
              <td>Anna University</td>
              <td>2013</td>
              <td>74% (First Class)</td>
            </tr>
            <tr>
              <td>B.E (Electrical and Electronics Engineering)</td>
              <td>Sri Balaji Chokalingam Engineering College, Arni, India</td>
              <td>Regular</td>
              <td>Anna University</td>
              <td>2011</td>
              <td>72% (First Class)</td>
            </tr>
            <tr>
              <td>Diploma (Electrical and Electronics Engineering)</td>
              <td>Sri Venkateswara Polytechnic College, Vellore, India</td>
              <td>Regular</td>
              <td>DOTE</td>
              <td>2006</td>
              <td>85% (First Class with Honors)</td>
            </tr>
            <tr>
              <td>Class XII</td>
              <td>Government boy’s higher secondary School, Katpadi, India</td>
              <td>Regular</td>
              <td>State Board</td>
              <td>2004</td>
              <td>71% (First Class)</td>
            </tr>
            <tr>
              <td>Class X</td>
              <td>Government boy’s higher secondary School, Katpadi, India</td>
              <td>Regular</td>
              <td>State Board</td>
              <td>2002</td>
              <td>75% (First Class)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="courses-table-container">
        <h2>Online Courses Completed</h2>
        <table className="experience-table"> {/* Reusing the same class for consistency */}
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration / Grade</th>
              <th>Platform</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Introduction to Machine Learning</td>
              <td>8 weeks, July-Sep-2022</td>
              <td>NPTEL</td>
            </tr>
            <tr>
              <td>Batteries and Electric Vehicles</td>
              <td>87.18%, November-2023</td>
              <td>Coursera</td>
            </tr>
            <tr>
              <td>Electrical Power Distribution</td>
              <td>89.75%, November-2023</td>
              <td>Coursera</td>
            </tr>
            <tr>
              <td>English for Teaching Purposes</td>
              <td>93.97%, November-2023</td>
              <td>Coursera</td>
            </tr>
            <tr>
              <td>Designing Learning Innovation</td>
              <td>100%, November-2023</td>
              <td>Coursera</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrePhd;
