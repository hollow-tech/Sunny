import { Intro, Advantages, FAQ, Banner, Info, About } from "./Sections";
import { SunnyWattProps } from "./SunnyWatt.types";

export const SunnyWatt: React.FC<SunnyWattProps> = () => {
  return (
    <>
      <Intro />
      <Advantages />
      <About id="about" />
      <Info />
      <Banner />
      <FAQ id="FAQ" />
    </>
  );
};
