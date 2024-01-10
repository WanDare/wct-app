import React from "react";

const truncateDescription = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const Description = ({ text, limit }) => {
  const truncatedText = truncateDescription(text, limit);

  return <p className="text-ellipsis">{truncatedText}</p>;
};

export default Description;
