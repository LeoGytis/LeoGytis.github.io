/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import SvgBit from '../../public/images/svg/svgBit';
import SvgKtu from '../../public/images/svg/svgKtu';

const Education: any = () => {
  return (
    <div
      id="education"
      className="flex flex-col gap-8 text-lg lg:p-4 mb-16 md:mb-24 scroll-mt-16 hover_border hover:bg-background"
    >
      <Link
        href="https://en.ktu.edu/"
        className="flex items-center gap-2 group"
      >
        <SvgKtu width={40} height={40} className="fill-secondary mr-3" />
        <div className="group-hover:text-secondary">
          <div>Kaunas University of Technology</div>
          <p className="text-sm group-hover:text-secondary">
            Bachelor's degree in Information System Design
          </p>
        </div>
      </Link>

      <Link href="https://bit.lt/" className="flex items-center gap-2 group ">
        <SvgBit width={40} height={40} className="fill-secondary mr-3" />
        <div className="group-hover:text-secondary">
          <div>Baltic Institute of Technology</div>
          <p className="text-sm group-hover:text-secondary">
            Full-stack developer JavaScript + PHP
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Education;
