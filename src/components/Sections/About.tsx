import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { profileImageSrc, description, aboutItems } = aboutData;
  return (
    <Section className="bg-midnight" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImageSrc })}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-3': !!profileImageSrc })}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-bl from-blue-300 via-violet-300 to-fuchsia-300 text-transparent bg-clip-text">
              About me
            </h2>
            <p className="text-base prose prose-sm bg-gradient-to-r from-violet-400 to-pink-300 bg-clip-text text-transparent">
              {description}
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-violet-200" />}
                <span className="text-sm font-bold bg-gradient-to-bl from-blue-300 via-violet-300 to-fuchsia-500 text-transparent bg-clip-text">
                  {label}:
                </span>
                <span className="text-sm bg-gradient-to-bl from-blue-300 via-violet-300 to-fuchsia-500 text-transparent bg-clip-text">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
