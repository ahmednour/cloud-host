import Image from "next/image";
import logo from "../../../public/cloud-hosting.png";
const About = () => {
  return (
    <section className="text-center">
      <h1 className="text-3xl text-gray-800">About Page</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <Image
        src={logo}
        width={500}
        height={500}
        alt="logo"
        className="m-auto"
      />
    </section>
  );
};

export default About;
