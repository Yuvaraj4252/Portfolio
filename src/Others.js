import React from 'react';
import './Others.css'; // Assuming you have a CSS file for styling

const Others = () => {
  return (
    <div className="others-container">
      <section>
        <h2>Reviewer Role in Reputed Journal</h2>
        <ol>
          <li>IEEE Access - IEEE</li>
          <li>International Journal of Electrical Power & Energy Systems - Elsevier</li>
          <li>Smart Science - Taylor & Francis</li>
          <li>International Journal of Power and Energy Conversion - Interscience Journal</li>
          <li>Gazi University Journal of Science - Gazi University</li>
          <li>Multimedia Tools and Applications - Springer</li>
          <li>Sustainable Energy Technologies and Assessments - Elsevier</li>
          <li>International Journal of Ambient Energy - Taylor & Francis</li>
        </ol>
      </section>

      <section>
        <h2>Professional Membership Details</h2>
        <ol>
          <li>IET</li>
          <li>IAENG</li>
        </ol>
      </section>

      <section>
        <h2>Summary</h2>
        <table className="summary-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Items</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Indexed by Web of Science</td><td>23</td></tr>
            <tr><td>2</td><td>Indexed by Scopus</td><td>43</td></tr>
            <tr><td>3</td><td>Indexed by Google Scholar</td><td>17</td></tr>
            <tr><td>4</td><td>Total Publications</td><td>83</td></tr>
            <tr><td>5</td><td>Cumulative Impact Factor</td><td>100.09</td></tr>
            <tr><td>6</td><td>Citation (Google Scholar)</td><td>1652</td></tr>
            <tr><td>7</td><td>I-10 Index (Google Scholar)</td><td>27</td></tr>
            <tr><td>8</td><td>H-Index (Google Scholar)</td><td>20</td></tr>
            <tr><td>9</td><td>Book Chapters</td><td>06</td></tr>
            <tr><td>10</td><td>Conference Attended</td><td>07</td></tr>
            <tr><td>11</td><td>Seminars/Workshops/FDP</td><td>36</td></tr>
            <tr><td>12</td><td>Industrial Training Programs Attended</td><td>03</td></tr>
          </tbody>
        </table>
      </section>

      <section className="references">
        <h2>References</h2>
        <div>
          <h3>Dr. Sudhakar Babu Thanikanti</h3>
          <p>Associate Director R & D and Associate Professor, Department of Electrical and Electronics Engineering, Chaitanya Bharathi Institute of Technology, Hyderabad, Telangana, India.</p>
          <p>E-mail: <a href="mailto:sudhakarbabu66@gmail.com">sudhakarbabu66@gmail.com</a></p>
          <p>Phone: +91 7382163424</p>
        </div>
        <div>
          <h3>Dr. K. Palanisamy</h3>
          <p>Deputy Director EM & Projects and Professor, School of Electrical Engineering, VIT University, Vellore, Tamil Nadu, India.</p>
          <p>E-mail: <a href="mailto:kpalanisamy@vit.ac.in">kpalanisamy@vit.ac.in</a></p>
          <p>Phone: +91 9894718720</p>
        </div>
        <div>
          <h3>Dr. N. Sudhakar</h3>
          <p>Assistant Dean Students Welfare and Professor, School of Electrical Engineering, VIT University, Vellore, Tamil Nadu, India.</p>
          <p>E-mail: <a href="mailto:nsudhakar@vit.ac.in">nsudhakar@vit.ac.in</a></p>
          <p>Phone: +91 9942002947</p>
        </div>
      </section>
    </div>
  );
};

export default Others;
