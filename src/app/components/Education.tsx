/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import ktu from "../../../public/images/ktu_svg.svg";
import bit from "../../../public/images/bit_svg.svg";

const Education: any = () => {
  return (
    <div
      id="education"
      className="flex flex-col gap-8 text-lg lg:p-6 mb-16 md:mb-24 scroll-mt-16 "
    >
      <Link
        href="https://en.ktu.edu/"
        className="flex gap-2 hover:text-[#5eead4]"
      >
        <Image src={ktu} width={40} height={40} alt="ktu" className="mr-2" />
        <div>
          <p>Kaunas University of Technology</p>
          <p className="text-sm">
            Bachelor's degree in Information System Design
          </p>
        </div>
      </Link>

      <Link href="https://bit.lt/" className="flex gap-2 hover:text-[#5eead4]">
        <Image src={bit} width={40} height={40} alt="bit" className="mr-3" />
        <div>
          <p>Baltic Institute of Technology</p>
          <p className="text-sm">Full-stack developer JavaScript + PHP</p>
        </div>
      </Link>
    </div>
  );
};

export default Education;
