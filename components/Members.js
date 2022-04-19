import React from "react";
import Card from "./Card";
const Members = ({ title, Advisory }) => {
  return (
    <div className="text-white relative py-60">
      <h1 className="text-center text-2xl font-semibold mb-10">{title}</h1>

      {Advisory && (
        <>
          <img
            className="absolute right-0 
        bottom-20 h-80"
            src="images/Vector_94.svg "
            alt="vector"
          />
          <img
            className="absolute right-0 
        bottom-0 left-[50%] 
        transform translate-x-[-50%] h-80"
            src="images/blur1.svg "
            alt="blur"
          />
        </>
      )}
      <div
        className="grid
      p-20 place-items-center xl:grid-cols-4 md:grid-cols-2 
      grid-cols-1 lg:grid-cols-3 space-y-6 gap-3"
      >
        <Card
          image="/images/Michelle.jpg"
          name="MICHELLE JANICE"
          position="FOUNDER-CEO"
          company1="/images/bdd.png"
          company2="/images/citibank.png"
          description="Senior Art Director with over 10+ years of experience who has spearheaded fortune 500 projects valued at over $200 million. Has worked with some of the largest gaming, betting and entertainment  giants helping them strategically position products for optimization. Has 100% success rate in increasing user base and utility of platforms."
        />
        <Card
          image="/images/Rouchelle.jpg"
          name="ROUCHELLE IRANI"
          position="CO-FOUNDER-COO"
          company1="/images/bdd.png"
          company2="/images/citibank.png"
          description="Senior Business Developer and Partnerships Manager at BBDO with over 7 years experience managing a $100 million portfolio. Crypto enthusiast with thorough understanding of the industry's requirements, strategies, and goals, Rouchelle is skilled at maintaining operations, outreach, and partnerships."
        />
        <Card
          image="/images/Michelle.jpg"
          name="ROUCHELLE IRANI"
          position="CO-FOUNDER-COO"
          company1="/images/bdd.png"
          company2="/images/citibank.png"
          description="Senior Business Developer and Partnerships Manager at BBDO with over 7 years experience managing a $100 million portfolio. Crypto enthusiast with thorough understanding of the industry's requirements, strategies, and goals, Rouchelle is skilled at maintaining operations, outreach, and partnerships."
        />
        <Card
          image="/images/Michelle.jpg"
          name="ROUCHELLE IRANI"
          position="CO-FOUNDER-COO"
          company1="/images/bdd.png"
          company2="/images/citibank.png"
          description="Senior Business Developer and Partnerships Manager at BBDO with over 7 years experience managing a $100 million portfolio. Crypto enthusiast with thorough understanding of the industry's requirements, strategies, and goals, Rouchelle is skilled at maintaining operations, outreach, and partnerships."
        />
      </div>
    </div>
  );
};

export default Members;
