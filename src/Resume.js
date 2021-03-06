import React, { Fragment } from 'react';

const Resume = () => {
  return (
    <Fragment>
      <section className="resume-section">
        <div className="section-name">
          <h3>Education</h3>
        </div>
        <div className="section-content">
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://unc.edu">
                  The University of North Carolina at Chapel Hill
                </a>
              </div>
              <div>Chapel Hill, NC</div>
            </div>
            <div className="subsection">
              <div className="italic">M.S., Computer Science</div>
              <div>August 2013</div>
            </div>
          </div>
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://utexas.edu">
                  The University of Texas at Austin
                </a>
              </div>
              <div>Austin, TX</div>
            </div>
            <div className="subsection">
              <div className="italic">B.S., Electrical Engineering</div>
              <div>August 2011</div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume-section">
        <div className="section-name">
          <h3>Experience</h3>
        </div>
        <div className="section-content">
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://www.ebi.ac.uk">
                  European Bioinformatics Institute
                </a>
              </div>
              <div>Cambridge, UK</div>
            </div>
            <div className="subsection">
              <div className="italic">Software Engineer</div>
              <div>July 2018-Present</div>
            </div>
          </div>
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://able.co">Able</a>
              </div>
              <div>Remote</div>
            </div>
            <div className="subsection">
              <div className="italic">Senior Software Engineer</div>
              <div>September 2017-June 2018</div>
            </div>
          </div>
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://www.fisglobal.com/">FIS</a>
              </div>
              <div>Lima, Peru</div>
            </div>
            <div className="subsection">
              <div className="italic">Software Engineer III (Contract)</div>
              <div>April 2016-July 2017</div>
            </div>
          </div>
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://www.rapid7.com">Rapid7</a>
              </div>
              <div>Austin, TX</div>
            </div>
            <div className="subsection">
              <div className="italic">Software Engineer II</div>
              <div>November 2015-January 2016</div>
            </div>
          </div>
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://www.nextgen.com">NextGen Healthcare</a>
              </div>
              <div>Austin, TX</div>
            </div>
            <div className="subsection">
              <div className="italic">Software Engineer</div>
              <div>March 2014-October 2015</div>
            </div>
          </div>
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://cs.unc.edu">UNC Computer Science Department</a>
              </div>
              <div>Chapel Hill, NC</div>
            </div>
            <div className="subsection">
              <div className="italic">Graduate Research Assistant</div>
              <div>August 2011-July 2013</div>
            </div>
          </div>
          <div className="section-item">
            <div className="subsection">
              <div className="item-name">
                <a href="https://www.me.utexas.edu">
                  UT Austin Mechanical Engineering Department
                </a>
              </div>
              <div>Austin, TX</div>
            </div>
            <div className="subsection">
              <div className="italic">Undergraduate Researcher</div>
              <div>September 2010-May 2011</div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume-section">
        <div className="section-name">
          <h3>Skills</h3>
        </div>
        <div className="skills-section">
          <div>
            <span className="italic skill">Programming Languages:</span>{' '}
            JavaScript, Java, and Python
          </div>
          <div>
            <span className="italic skill">Markup Languages:</span> HTML5 and
            LaTeX
          </div>
          <div>
            <span className="italic skill">Web Technologies:</span> React,
            Node.js, webpack, AngularJS, Express, Backbone.js, CSS3, Sass, and
            JQuery
          </div>
          <div>
            <span className="italic skill">Databases:</span> MongoDB
          </div>
          <div>
            <span className="italic skill">Version Control System:</span> Git
          </div>
          <div>Fluent in Spanish</div>
        </div>
      </section>
    </Fragment>
  );
};

export default Resume;
