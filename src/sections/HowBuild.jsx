import React from 'react';
import SectionHead from '../components/SectionHead';
import { howWeBuildSection } from '../constants';
import HowWeBuildCard from '../components/HowWeBuildCard';

const HowBuild = () => {
    return (
        <section>
            
            <section className='mx-auto max-w-[1312px] mt-[69px]'>
                <div className='px-[20px] mx-auto'>
                    <SectionHead data={howWeBuildSection.sectionHead} />
                </div>
            </section>

            <section className='howWeBuild max-w-[1440px] mx-auto'>

                <div className='flex justify-evenly mt-[110px]'>

                    {howWeBuildSection.sectionCircles.map((circle) => (
                        <HowWeBuildCard key={circle.number} data={circle} />
                    ))}

                </div>

            </section>

        </section>
    );
}

export default HowBuild;
