import React from 'react';
import twitterImg from '../public/assets/projects/twitter.png';
import baadayeImg from '../public/assets/projects/baadaye.png';
import paystackImg from '../public/assets/projects/paystack.png';
import flutterwaveImg from '../public/assets/projects/flutterwave.png';
import winampImg from '../public/assets/projects/winamp.png';
import netflixImg from '../public/assets/projects/netflix.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Baadaye UI Clone'
            backgroundImg={baadayeImg}
            projectUrl='/baadaye'
            tech='Next JS'
          />
          <ProjectItem
            title='Paystack UI Clone'
            backgroundImg={paystackImg}
            projectUrl='/paystack'
            tech='React JS'

          />
          <ProjectItem
            title='Twitter Clone'
            backgroundImg={twitterImg}
            projectUrl='/twitter'
            tech='React JS'
          />
          <ProjectItem
            title='Flutterwave UI Clone'
            backgroundImg={flutterwaveImg}
            projectUrl='/flutterwave'
            tech='React JS'

          />
          <ProjectItem
            title='Winamp UI Clone'
            backgroundImg={winampImg}
            projectUrl='/winamp'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
