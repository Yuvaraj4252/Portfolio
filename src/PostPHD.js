import React from 'react';
import './PostPHD.css';

const PostPHD = () => {
  return (
    <div className='postPhdContainer'>
      <h2>Title of PhD Thesis Work</h2>
      <div>
        <div><strong>Title:</strong> Optimal location and sizing of the compensating devices in the distribution networks using optimization algorithms.</div>
        <div><strong>Objective:</strong> To reduce the power losses and improve the stability of the power system using optimization techniques in the radial distribution networks.</div>
      </div>
      <h2>PhD Guidance</h2>
      <div>
        <div><strong>Total No of PhD Scholars:</strong> 06.</div>
        <div><strong>Status of the PhD Scholars:</strong> Ongoing</div>
        <div><strong>University:</strong> Anna University, Chennai, India</div>
      </div>
      <h2>
        University
      </h2>
      <div className="experience-table-container">
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
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostPHD;
