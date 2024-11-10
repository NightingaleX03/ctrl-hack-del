import React from 'react';

import "./Home.css";

let charindex = 0;
let currindex = 0;
let typedelay = 200;
let erasedelay = 200;
let newletterdelay = 1000;

let prompts = ["helps patients never miss or forget their medications", "offers a chatbot to help suggest appropriate medications based on Patient's symptoms!"];
let text = "Welcome to PillPal, a Website that helps patients never miss or forget their medications, and offers a chatbot to help suggest appropriate medications based on Patient's symptoms!";
const Home = () => {
  return (
    <div class="main">
      <h1>PillPal</h1>
      <div class="content">
      <p>Welcome to PillPal, a Website that <span class="typed"></span><span class="cursor">1</span></p>
      </div>
    </div>
  );
};

export default Home;



setTimeout(type, 2000);



function type(){
    let typed = document.querySelector(".typed");
    if (charindex < prompts[currindex].length){
        typed.textContent += prompts[currindex].charAt(charindex);
        charindex ++;
        setTimeout(type, typedelay);
    }
    else{
        setTimeout(erase, newletterdelay);
    }
}


function erase(){
    let typed = document.querySelector(".typed");
    if (charindex > 0){
        typed.textContent = typed.textContent.substring(0, charindex-1);
        charindex --;
        setTimeout(erase, erasedelay);
    }
    else{
        console.log(currindex);
        currindex+= 1;
        if (currindex >= prompts.length){
            currindex = 0;
        }
        setTimeout(type, typedelay + 1100);
    }
}