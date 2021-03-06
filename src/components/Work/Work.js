import React from 'react';
import './Work.scss';

class Work extends React.Component {

  render() {
    return (
      <section id='work-section'>
        <h1 className='section-title'>My Work</h1>
        <hr />
        <div className='project-card-container'>
          <article className='project-card'>
            <div className='project-header'>
              <h2>SnackTime</h2>
              <div className='project-button-container'>
                <a className='project-card-button' href='https://snacktime.netlify.app/'>
                  View
                </a>
                <a className='project-card-button' href='https://github.com/lux-coded/snack-time'>
                  Code
                </a>
                {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
              </div>
            </div>
            <div className='project-image-container'>
              <a href='https://snacktime.netlify.app/'>
                <img src='https://d33wubrfki0l68.cloudfront.net/6096f4db9d5adf00073362c5/screenshot_2021-05-08-20-30-59-0000.png' className='project-image' alt='project_thumbnail' />
              </a>
            </div>
            <h4>Built with:</h4>
            <br></br>
            <div className='tech-tag-container'>
              <p className='tech-tag'>HTML</p>
              <p className='tech-tag'>CSS</p>
              <p className='tech-tag'>Sass</p>
              <p className='tech-tag'>Javascript</p>
              <p className='tech-tag'>React</p>
              <p className='tech-tag'>Redux</p>
            </div>
            <br></br>
            <p>A movie & TV show browsing app.</p>

          </article>
          <article className='project-card'>
            <div className='project-header'>
              <h2>TuneSurge</h2>
              <div className='project-button-container'>
                <a className='project-card-button' href='https://tunesurge.netlify.app/'>
                  View
                </a>
                <a className='project-card-button' href='https://github.com/lux-coded/tunesurge'>
                  Code
                </a>
                {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
              </div>
            </div>
            <div className='project-image-container'>
              <a href='https://tunesurge.netlify.app/'>
                <img src='images/tunesurge-thumbnail.PNG' className='project-image' alt='project_thumbnail' />
              </a>
            </div>
            <h4>Built with:</h4>
            <br></br>
            <div className='tech-tag-container'>
              <p className='tech-tag'>HTML</p>
              <p className='tech-tag'>CSS</p>
              <p className='tech-tag'>Sass</p>
              <p className='tech-tag'>Javascript</p>
              <p className='tech-tag'>React</p>
              <p className='tech-tag'>Redux</p>
              <p className='tech-tag'>Express</p>
              <p className='tech-tag'>Node</p>
            </div>
            <br></br>
            <p>Music browsing app.</p>
            <p>
              (It takes a while for the app to load initially because the server on Heroku is put
              to sleep after hour of inactivity. Please be patient until the app loads.)
            </p>

          </article>
          <article className='project-card'>
            <div className='project-header'>
              <h2>eStore</h2>
              <div className='project-button-container'>
                <a className='project-card-button' href='https://e-store-commerce.netlify.app/'>
                  View
                </a>
                <a className='project-card-button' href='https://github.com/lux-coded/e-store'>
                  Code
                </a>
                {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
              </div>
            </div>
            <div className='project-image-container'>
              <a href='https://e-store-commerce.netlify.app/'>
                <img src='https://d33wubrfki0l68.cloudfront.net/60ba97900bf73210925fc925/screenshot_2021-06-04-21-15-42-0000.png' className='project-image' alt='project_thumbnail' />
              </a>
            </div>
            <h4>Built with:</h4>
            <br></br>
            <div className='tech-tag-container'>
              <p className='tech-tag'>HTML</p>
              <p className='tech-tag'>CSS</p>
              <p className='tech-tag'>Sass</p>
              <p className='tech-tag'>Javascript</p>
              <p className='tech-tag'>React</p>
              <p className='tech-tag'>Stripe</p>
              <p className='tech-tag'>Commerce.js</p>
            </div>
            <br></br>
            <p>E-Commerce store integrated with Stripe for technology purchases.</p>
          </article>
          <article className='project-card'>
            <div className='project-header'>
              <h2>Japan</h2>
              <div className='project-button-container'>
                <a className='project-card-button' href='https://visiting-japan.netlify.app/'>
                  View
                </a>
                <a className='project-card-button' href='https://github.com/lux-coded/japan-tour-guide'>
                  Code
                </a>
                {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
              </div>
            </div>
            <div className='project-image-container'>
              <a href='https://visiting-japan.netlify.app/'>
                <img src='https://d33wubrfki0l68.cloudfront.net/60c4bfb16748be0007bcdedc/screenshot_2021-06-12-14-08-11-0000.png' className='project-image' alt='project_thumbnail' />
              </a>
            </div>
            <h4>Built with:</h4>
            <br></br>
            <div className='tech-tag-container'>
              <p className='tech-tag'>HTML</p>
              <p className='tech-tag'>CSS</p>
              <p className='tech-tag'>Sass</p>
              <p className='tech-tag'>Javascript</p>
              <p className='tech-tag'>React</p>
            </div>
            <br></br>
            <p>Beautiful Japan checklist website.</p>
          </article>
        </div>
      </section>
    );
  }
}

export default Work;
