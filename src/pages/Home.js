// import React from 'react';

// import "./Home.css";

// let charindex = 0;
// let currindex = 0;
// let typedelay = 200;
// let erasedelay = 200;
// let newletterdelay = 1000;

// let prompts = ["helps patients never miss or forget their medications", "offers a chatbot to help suggest appropriate medications based on Patient's symptoms!"];
// let text = "Welcome to PillPal, a Website that helps patients never miss or forget their medications, and offers a chatbot to help suggest appropriate medications based on Patient's symptoms!";
// const Home = () => {
//   return (
//     <div class="main">
//       <h1>PillPal</h1>
//       <div class="content">
//       <p>Welcome to PillPal, a Website that <span class="typed"></span><span class="cursor">1</span></p>
//       </div>
//     </div>
//   );
// };

// export default Home;



// setTimeout(type, 2000);



// function type(){
//     let typed = document.querySelector(".typed");
//     if (charindex < prompts[currindex].length){
//         typed.textContent += prompts[currindex].charAt(charindex);
//         charindex ++;
//         setTimeout(type, typedelay);
//     }
//     else{
//         setTimeout(erase, newletterdelay);
//     }
// }


// function erase(){
//     let typed = document.querySelector(".typed");
//     if (charindex > 0){
//         typed.textContent = typed.textContent.substring(0, charindex-1);
//         charindex --;
//         setTimeout(erase, erasedelay);
//     }
//     else{
//         console.log(currindex);
//         currindex+= 1;
//         if (currindex >= prompts.length){
//             currindex = 0;
//         }
//         setTimeout(type, typedelay + 1100);
//     }
// }

import React, { useEffect } from 'react';
import "./Home.css";

let charindex = 0;
let currindex = 0;
const typedelay = 50;
const erasedelay = 50;
const newletterdelay = 200;

const prompts = [
  "helps patients never miss or forget their medications",
  "offers a chatbot to help suggest appropriate medications based on Patient's symptoms!"
];

const Home = () => {
  useEffect(() => {
    // Start the typing effect after 2 seconds
    const typingTimeout = setTimeout(type, 2000);

    // Cleanup function to stop intervals when component unmounts
    return () => {
      clearTimeout(typingTimeout);
      charindex = 0;
      currindex = 0;
    };
  }, []);

  return (
    <div className="main">
      <h1>PillPal</h1>
      <div className="content">
        <p>Welcome to PillPal, a Website that <span className="typed"></span><span className="cursor">|</span></p>
      </div>
    </div>
  );
};

export default Home;

// Typing function
function type() {
  const typed = document.querySelector(".typed");
  if (!typed) return; // Exit if element doesn't exist (e.g., when unmounted)

  if (charindex < prompts[currindex].length) {
    typed.textContent += prompts[currindex].charAt(charindex);
    charindex++;
    setTimeout(type, typedelay);
  } else {
    setTimeout(erase, newletterdelay);
  }
}

// Erasing function
function erase() {
  const typed = document.querySelector(".typed");
  if (!typed) return; // Exit if element doesn't exist

  if (charindex > 0) {
    typed.textContent = typed.textContent.substring(0, charindex - 1);
    charindex--;
    setTimeout(erase, erasedelay);
  } else {
    currindex = (currindex + 1) % prompts.length;
    setTimeout(type, typedelay + 1100);
  }
}
