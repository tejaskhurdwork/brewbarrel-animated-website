let mm = gsap.matchMedia();

/* ================= DESKTOP ONLY ================= */
mm.add("(min-width: 1529px) and (max-width: 1550px)", () => {

  // header animation

  let tl = gsap.timeline();

  tl.from(".brand-name", {
    y: -20,
    duration: 3, 
    opacity: 0
  });

  tl.from(".aside i", {
    x: -20,
    duration: 3,   
    opacity: 0
  }, "<")

  tl.from(".header button", {
    y: -20,
    duration: 3, 
    opacity: 0
  }, "<");

  tl.from(".moving-beer", {
    y: -20,
    duration: 1.5, 
    opacity: 0,
    scale:0.4
  }, "<")





  // Beer bottle aniamtion

  // Beer bottle animation
  let st1 = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "bottom 90%",
      end: "bottom -410%",
      scrub: 2,
      // markers: true
    }
  });

  st1.to(".moving-beer", {
    y: "380vh",
    rotate: 0,
  });

  let st2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".avaliablity",
      start: "-15 -13%",
      end: "30% 15%",
      scrub: 3,
      // markers: true
    }
  });

  st2.to(".moving-beer", {
    y: "440vh",
    scale: 0.7
  });


  // page animations

  let tl2 = gsap.timeline();

  tl2.to(".hero h1", {
    y: -150,
    scrollTrigger: {
      trigger: ".hero",
      start: "top 0%",
      end: "center 30%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.to(".left-content, .right-content", {
    y: -150,
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "80% 80%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.to(".contact h1", {
    y: -200,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      end: "center 80%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.to(".contact-content", {
    y: -250,
    scrollTrigger: {
      trigger: ".contact",
      start: "30% 60%",
      end: "70% 60%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.to(".red-splash", {
    y: -250,
    scrollTrigger: {
      trigger: ".contact",
      start: "50% 60%",
      end: "90% 60%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.to(".black-splash", {
    y: -300,
    scrollTrigger: {
      trigger: ".contact",
      start: "55% 60%",
      end: "90% 60%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.to(".beer-glass", {
    y: -250,
    scrollTrigger: {
      trigger: ".contact",
      start: "50% 60%",
      end: "90% 60%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.from(".recipe-content img", {
    y: -10,
    scrollTrigger: {
      trigger: ".recipe",
      start: "top 60%",
      end: "30% 80%",
      scrub: 1,
      // markers: true
    }
  });

  tl2.fromTo(".recipe-content .text",
    { scale: 0,
      duration: 3
    },
    {
      scale: 1,
      y: -10,
      delay: 1,
      scrollTrigger: {
        trigger: ".recipe",
        start: "top 60%",
        end: "30% 80%",
        scrub: 2,
      }
    }
  );

  // footer

  tl2.to(".footer", {
    y: -50,
    scrollTrigger: {
      trigger: ".footer",
      start: "top 70%",
      end: "30% 80%",
      scrub: 1,
      // markers: true
    }
  });
  
});


/*  ALL DEVICES  */
mm.add("(max-width: 1528px)", () => {

  
});
