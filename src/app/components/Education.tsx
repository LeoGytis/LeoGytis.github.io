/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import ktu from "../../../public/images/ktu_svg.svg";
import bit from "../../../public/images/bit_svg.svg";
import SvgKtu from "../../../public/images/ktu_svg2";
import SvgBit from "../../../public/images/bit_svg2";

const Education: any = () => {
  return (
    <div
      id="education"
      className="flex flex-col gap-8 text-lg lg:p-6 mb-16 md:mb-24 scroll-mt-16 experience_container"
    >
      <Link
        href="https://en.ktu.edu/"
        className="flex gap-2 hover:text-secondary"
      >
        <SvgKtu width={40} height={40} className="fill-tag mr-3" />
        <div className="hover:text-secondary">
          <div>Kaunas University of Technology</div>
          <p className="text-sm ">
            Bachelor's degree in Information System Design
          </p>
        </div>
      </Link>

      <Link href="https://bit.lt/" className="flex gap-2 hover:text-secondary">
        <SvgBit width={40} height={40} className="fill-tag mr-3" />
        <div className="!important:hover:text-secondary">
          <div>Baltic Institute of Technology</div>
          <p className="text-sm">Full-stack developer JavaScript + PHP</p>
        </div>
      </Link>
    </div>
  );
};

export default Education;
