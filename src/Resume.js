import React, { Fragment } from 'react';

const Resume = () => {
  return (
  <Fragment>
    <section className="resume-section">
  <div class="section-name">
    <h3>Education</h3>
  </div>
  <div class="section-content">
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="http://unc.edu" target="_blank">
            The University of North Carolina at Chapel Hill
          </a>
        </div>
        <div>Chapel Hill, NC</div>
      </div>
      <div class="subsection">
        <div class="italic">M.S., Computer Science</div>
        <div>August 2013</div>
      </div>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="http://utexas.edu" target="_blank">
            The University of Texas at Austin
          </a>
        </div>
        <div>Austin, TX</div>
      </div>
      <div class="subsection">
        <div class="italic">B.S., Electrical Engineering</div>
        <div>August 2011</div>
      </div>
    </div>
  </div>
</section>
<section class="resume-section">
  <div class="section-name">
    <h3>Experience</h3>
  </div>
  <div class="section-content">
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="http://able.co/" target="_blank">Able</a>
        </div>
        <div>Remote</div>
      </div>
      <div class="subsection">
        <div class="italic">Senior Software Engineer</div>
        <div>September 2017-Present</div>
      </div>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="https://www.fisglobal.com/" target="_blank">FIS</a>
        </div>
        <div>Lima, Peru</div>
      </div>
      <div class="subsection">
        <div class="italic">Software Engineer III (Contract)</div>
        <div>April 2016-July 2017</div>
      </div>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="https://www.rapid7.com" target="_blank">Rapid7</a>
        </div>
        <div>Austin, TX</div>
      </div>
      <div class="subsection">
        <div class="italic">Software Engineer II</div>
        <div>November 2015-January 2016</div>
      </div>
      <ul>
        <li>
          Developed new features for application currently in production
        </li>
        <li>Used Backbone.js for the front end</li>
      </ul>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="https://www.mirth.com" target="_blank">Mirth Corporation</a>
        </div>
        <div>Austin, TX</div>
      </div>
      <div class="subsection">
        <div class="italic">Software Engineer</div>
        <div>April 2015-October 2015</div>
      </div>
      <ul>
        <li>
          Worked with HTML5, CSS3, JavaScript, and AngularJS to develop
          single-page web application
        </li>
        <li>
          Developed bower component containing a set of angular modules,
          directives, services, and CSS styles that is being used for the
          rapid development of a suite of products
        </li>
        <li>Worked remotely for company located in California</li>
      </ul>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="https://www.nextgen.com" target="_blank">NextGen Healthcare</a>
        </div>
        <div>Austin, TX</div>
      </div>
      <div class="subsection">
        <div class="italic">Software Engineer</div>
        <div>March 2014-April 2015</div>
      </div>
      <ul>
        <li>
          Worked with HTML5, CSS3, JavaScript, and AngularJS to develop
          single-page web application
        </li>
        <li>
          Used Git in a feature branch workflow to collaborate with other
          engineers, making sure only quality code gets merged into the
          master branch
        </li>
        <li>
          Worked in a continuous integration environment using Jenkins to
          deploy the application several times per day
        </li>
      </ul>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="http://cs.unc.edu" target="_blank">UNC Computer Science Department</a>
        </div>
        <div>Chapel Hill, NC</div>
      </div>
      <div class="subsection">
        <div class="italic">Graduate Research Assistant</div>
        <div>August 2011-July 2013</div>
      </div>
      <ul>
        <li>
          Created TCP Rapid throughput model in the presence of a simple
          periodic on-off cross-traffic source to identify parameter
          values that optimize performance
        </li>
        <li>Validated models by running
          <a href="http://www.isi.edu/nsnam/ns" target="_blank">ns-2</a> simulations
        </li>
      </ul>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="http://www.smartsandstamina.com" target="_blank">Smarts and Stamina</a>
        </div>
        <div>Chapel Hill, NC</div>
      </div>
      <div class="subsection">
        <div class="italic">Software Developer</div>
        <div>January 2013-May 2013</div>
      </div>
      <ul>
        <li>Worked in a collaborative environment to develop personal fitness
          mobile application
        </li>
        <li>Wrote HTML, CSS, and Javascript, and used PhoneGap framework
          to make the application work in different mobile platforms
        </li>
      </ul>
    </div>
    <div class="section-item">
      <div class="subsection">
        <div class="item-name">
          <a href="http://www.me.utexas.edu" target="_blank">
            UT Austin Mechanical Engineering Department
          </a>
        </div>
        <div>Austin, TX</div>
      </div>
      <div class="subsection">
        <div class="italic">Undergraduate Researcher</div>
        <div>September 2010-May 2011</div>
      </div>
      <ul>
        <li>Built workflow application for users to visually drag, drop,
          and connect components of the Bright nuclear fuel cycle model
        </li>
        <li>Wrote documentation and tutorial for using BriPy, a set of
          Python bindings for the Bright nuclear fuel cycle model
        </li>
      </ul>
    </div>
  </div>
</section>
<section class="resume-section">
  <div class="section-name">
    <h3>Skills</h3>
  </div>
  <div class="skills-section">
    <div>
      <span class="italic skill">Programming Languages:</span> JavaScript,
      Java, and Python
    </div>
    <div>
      <span class="italic skill">Markup Languages:</span> HTML5 and LaTeX
    </div>
    <div>
      <span class="italic skill">Web Technologies:</span> React, Node.js,
      webpack, AngularJS, Express, Backbone.js, CSS3, Sass, and JQuery
    </div>
    <div><span class="italic skill">Databases:</span> MongoDB</div>
    <div><span class="italic skill">Version Control System:</span> Git</div>
    <div>Fluent in Spanish</div>
  </div>
</section>
</Fragment>
  );
};

export default Resume;
