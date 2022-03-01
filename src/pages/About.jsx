import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam
          iure a quia vel sed? Perferendis cumque natus voluptatum. Est debitis
          sint repellendus beatae minus quibusdam. Quas voluptatibus ducimus,
          minus nesciunt ut esse? Officia voluptatibus, repellat exercitationem,
          velit consequuntur laudantium, tempore quos delectus ipsum quasi optio
          quaerat. Possimus nobis atque explicabo, odio, suscipit deleniti nisi
          repellendus eius similique dolore excepturi, neque dolorem sunt
          recusandae magni? Praesentium ipsum ipsa reiciendis optio voluptatum,
          ea molestiae deleniti sunt earum esse officia laboriosam quos quae
          delectus minus id dolore! Atque delectus quas officia eius ullam. Hic
          non doloribus ut repudiandae reiciendis cum deleniti modi.
        </p>
      </div>
    </div>
  );
};

export default About;
