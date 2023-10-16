/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ktu from "../../../public/images/ktu_svg.svg";
import bit from "../../../public/images/bit_svg.svg";

const Education: any = () => {
  return (
    <div
      id="education"
      className="flex flex-col gap-8 text-lg text-slate-300 mb-16 scroll-mt-16 md:mb-24"
    >
      <div className="flex gap-2">
        <Image src={ktu} width={50} height={50} alt="ktu" className="p-2" />
        <div>
          <p>Kaunas University of Technology</p>
          <p className="text-sm">
            Bachelor's degree in Information System Design
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Image src={bit} width={50} height={50} alt="bit" className="p-3" />
        <div>
          <p>Baltic Institute of Technology</p>
          <p className="text-sm">Full-stack developer JavaScript + PHP</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
