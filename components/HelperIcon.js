import React from "react";

const HelperIcon = ({ ForCard, src, description, title }) => {
  return (
    <div
      className={
        ForCard ? `absolute top-4 right-10` : `flex flex-col items-center`
      }
    >
      <img
        className={ForCard ? ` Icon mb-2 p-2` : ` Icon mb-7 px-8 py-8`}
        src={src}
        alt="card-image"
      />
      {title && description && (
        <div className="mt-5 text-white">
          <h4 className="text-center mb-4">{title}</h4>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default HelperIcon;
