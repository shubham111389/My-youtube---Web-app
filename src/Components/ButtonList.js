import React from "react";
import Button from "./Button";

//const buttonList = ["All", "Gaming", "Songs"];
// use scrollable button list for more buttons
const ButtonList = () => {
  const buttonList = [
    "All",
    "C++",
    "JavaScript",
    "React JS",
    "Music",
    "Comedy",
    "Gaming",
    "Live",
    "TED Talks",
    "Entertainment",
    "Rocket Science",
    "India",
    "Electinos",
   
  ];
  return (
    <div>
   {buttonList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;