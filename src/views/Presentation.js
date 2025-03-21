import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import Components from "./presentation-sections/Components.js";
import BasicComponents from "./presentation-sections/BasicComponents.js";

import Pricing from "./presentation-sections/Pricing.js";

import Servicios from "./presentation-sections/Servicios.js";
import Cintillos from "views/sections-sections/CintilloNoticiero.js";
import CintilloNoticiero from "./sections-sections/CintilloNoticiero.js";

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    console.log(hrefId)
    console.log(href)
    console.log(document)
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    // we need to add a script for the github buttons
    let script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.id = "github-buttons-script-id";
    document.body.appendChild(script);

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      // let rellax = new Rellax(".rellax", {
      //   center: true,
      // });
      // let rellaxHeader = new Rellax(".rellax-header");
      // let rellaxText = new Rellax(".rellax-text");

      return function cleanup() {
        document.body.classList.remove("presentation-page");
        document.body.classList.remove("sidebar-collapse");

        // we need to remove the script when we change the page
        script.parentNode.removeChild(script);
        // rellax.destroy();
        // rellaxHeader.destroy();
        // rellaxText.destroy();
      };
    }
    else {
      return function cleanup() {
        document.body.classList.remove("presentation-page");
        document.body.classList.remove("sidebar-collapse");
  
        // we need to remove the script when we change the page
        script.parentNode.removeChild(script);
      };
    }
  });
  return (
    <>
      <ScrollTransparentNavbar />
        <PresentationHeader />
        <Components />
        <BasicComponents />
        <Servicios />

        <FooterBlack />
   
    </>
  );
}

export default Presentation;
