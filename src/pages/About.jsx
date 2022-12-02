import React from "react";

const About = () => {
  return (
    <div className="p-5 font-mono">
      <div className="underline text-3xl mb-2">About:</div>
      <div>
        <div className="space-y-2 mb-5">
          <div> made out using reactjs, vite and tailwidcss.</div>
          <div>
            used Newsapi to get the newsfeed, using axios captured data in json
            form..
          </div>
        </div>
        <div>
          published the app sourcecode at github..
          <a href="https://github.com/grim909/">chick here to visit github</a>
        </div>
      </div>
    </div>
  );
};

export default About;
