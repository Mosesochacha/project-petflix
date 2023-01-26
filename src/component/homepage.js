import React from "react";
import { Link as NavLink } from "react-router-dom";
import "./homepage.css";

function HomepageLayout() {
  return (
    <div className="landingDiv">

<NavLink className="homepageLinks" to="/login">LOG IN</NavLink>
      <NavLink className="homepageLinks" to="/register">SIGN UP</NavLink>

      <h1 style={{textAlign: "left", padding: "0px 10px 10px 10px", fontSize:"4vw", fontFamily:"fantasy"}}>PETFLIX</h1>


      <div style={{textAlign:"right", paddingRight:"30px"}}>
      <p><b style={{fontSize:"2vw"}}>A humane, compassionate future for every animal friend.</b></p>
      </div>

      <div className="insideHomePage">



      <div className="missionDiv">
      <p style={{fontWeight:"700", fontFamily:"fantasy"}}>
        We are an online adoption website who anticipate the future needs of our animal
        friends—the animals we love and our friends who love animals.
        We are professional, qualified, and devoted to our organizational
        duties. ADOPT PLEASE!
      </p>
    </div>

    <div className="testUl">
    <h1>Testimonials</h1>

      <div className="testLi">

          <p>
          "In January of 2020 I adopted a a tuxedo with a white-tipped tail now known as Roscoe, It was the greatest decision of my life!  What a guy he turned out to be. He follows me all over the house, greets me at the door with a “meow” when I come home, and snuggles in bed sometimes, and I would not have it any other way. He settled in with my nine other indoor cats, all rescues, very easily!"
          </p>
          <b>~Peter Wells adopted Roscoe in June 2020.</b>

      </div>


      <div className="testLi">

          <p>
          Thank you for the wonderful experience of adopting Daisy. She has been wonderful. She settled into our journey across the States like a pro, as if she were part of us from the very beginning. Just wanted to let you know that we are truly grateful for how well cared for she was and how much she will be loved here. Lots of hugs!”
          </p>
          <b>~Cyndi and Louella Voegeli adopted Daisy in August 2019.</b>

        </div>


        <div className="testLi">

          <p>
          "Over the last two years we've learned a lot from Beaker (like why he was named Rocket while at petflix). We've certainly had some challenges, but he has made tremendous progress and has taught us to be more patient and to enjoy the small things in life. We couldn't be happier! Beaker is a great companion, whether we're running, hiking, or just sitting at home. We can't imagine our lives without him! Thank you for bringing him into our lives."
          </p>
          <b>~The Cheryl and Ben Rubinstein adopted Beaker in September 2022</b>

        </div>


        <div className="testLi">

          <p>
          "ThCarole Saxe and Sagecropwebanks to all the caring adoption staff who spent time introducing us to Sage (formerly
known as Sadie). She's a great little dog! She seems quite happy and we are thrilled to have her."
          </p>
          <b>~Sammy Cherono adopted Daisy in December 2021</b>
        </div>


        </div>

        <h2>Our Mission Statement</h2>


        <blockquote>
        To rescue, rehabilitate and rehome animals in crisis, ensure healthy
        pets through education, advocacy and affordable services, and inspire a
        community where the animal-human bond is celebrated and nurtured.
      </blockquote>

<small><b>	&#169; 2022 PETFLIX</b></small>

        </div>





    </div>
  );
}

export default HomepageLayout;
