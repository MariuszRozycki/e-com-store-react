import { ContainerOutletContent, AboutContent } from "../components";

const About = () => {
  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>About</h1>
        <AboutContent />
      </ContainerOutletContent>
    </div>
  );
};

export default About;
