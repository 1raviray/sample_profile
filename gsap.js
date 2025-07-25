gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis();

lenis.on('scroll', () => {
  ScrollTrigger.update();
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


function runanimation(){
  var tl = gsap.timeline();
  
    // Clear potential layout issues
    gsap.set("#hero,.navbar-brand",{opacity:1,scale:1})
    gsap.set(".hero1, .hero-button, .hero2", { clearProps: "all" });
  
    tl.from(".navbar-brand", { y: -30, opacity: 0,scale:0, duration: 0.6, ease: "power2.out" });
  
    tl.from(".navbar-nav a", { y: -20, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" });
  
    tl.from("#hero", { scale: 0.95,x:-30, autoAlpha: 0, duration: 0.2, ease: "back.in(1.7)" },"x");
  
    tl.fromTo(".hero1 > *", { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "back.in"
    });
  
    tl.fromTo(".hero-button", { scale: 0.9, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.5, ease: "back.in(1.7)"
    });
  
    tl.fromTo("#hero2", { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.in"
    },"x");
    tl.fromTo(".hero2 a", { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.in"
    });

    gsap.set(".projects",{clearProps:"all"})
    document.querySelectorAll(".projects").forEach((projects) => {
      gsap.from(projects,{
        y:100,
        opacity:0,
        scale:0,
        duration:.3,
        scrollTrigger:{
          trigger:projects,
          start:"top 85%",
          end:"top 45%",
          scrub:true,
          // markers:true
        }
      })
    })
      
    // gsap.set(".project1",{clearProps:"all"})
    // document.querySelectorAll(".project1").forEach((project,i) => {
    //   const child=project.querySelectorAll("h3, h5, p, a")
    //     gsap.from(child, {
    //       y: 20,
    //       opacity: 0,
    //       duration: 0.2,
    //       ease: "linear",
    //       delay:1,
    //       stagger:.4,
    //       scrollTrigger: {
    //         trigger: project,
    //         start: "top 55%",
    //         end: "top 15%",
    //         scrub:true,
    //         toggleActions: "play none none none",
    //         markers: true
    //       }
    //     });
    //   });

    gsap.from("#tools img",{
      opacity:0,scale:0,scrollTrigger:{trigger:"#tools",start:"top 95%",end:"top 50%",scrub:true}
    })
    // gsap.from("#tools h5, #tools p",{
    //   opacity:0,x:-20,stagger:.2,scrollTrigger:{trigger:"#tools",start:"top 95%",end:"top 50%",scrub:true}
    // })
    // gsap.from(".amalsoCardPosition",{rotate:180,x:450,y:150,duration:.4,scrollTrigger:{trigger:".amalsoCardPosition",start:"top 75%",end:"top 50%",scrub:true,markers:true}})
    // gsap.from(".amalsoCardPosition2",{rotate:-180,x:-450,y:150,duration:.4,scrollTrigger:{trigger:".amalsoCardPosition",start:"top 75%",end:"top 50%",scrub:true,markers:true}})
      ScrollTrigger.refresh();
}

window.addEventListener("DOMContentLoaded",runanimation)

// if (document.readyState === "complete") {
//   runanimation();
// } else {
//   window.addEventListener("load", runanimation);
// }
  
  



const form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Something went wrong!");
      }
    });
  });