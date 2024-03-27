import React from "react";

//metadata mainly used to be displayed on the page such as page title etc
export const metadata = {
  title: 'About Flynt'
};


const AboutPage = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-2xl p-3'>About Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        minus odio quo amet architecto, ullam consequatur quaerat soluta
        corporis? Dolorem exercitationem tempore neque at? Nostrum recusandae
        sequi error dolorem assumenda?
      </p>
    </div>
  );
};

export default AboutPage;
