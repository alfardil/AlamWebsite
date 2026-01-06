import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold">
      <Typewriter
        options={{
          strings: [
            "an open source researcher.",
            "a backend developer.",
            "a 3x hackathon winner.",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
