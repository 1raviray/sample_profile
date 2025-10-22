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

    gsap.from("#tools img",{
      opacity:0,scale:0,scrollTrigger:{trigger:"#tools",start:"top 95%",end:"top 50%",scrub:true}
    })
    // gsap.from("#tools h5, #tools p",{
    //   opacity:0,x:-20,stagger:.2,scrollTrigger:{trigger:"#tools",start:"top 95%",end:"top 50%",scrub:true}
    // })
    // gsap.from(".amalsoCardPosition",{rotate:180,x:450,y:150,duration:.4,scrollTrigger:{trigger:".amalsoCardPosition",start:"top 75%",end:"top 50%",scrub:true,markers:true}})
    // gsap.from(".amalsoCardPosition2",{rotate:-180,x:-450,y:150,duration:.4,scrollTrigger:{trigger:".amalsoCardPosition",start:"top 75%",end:"top 50%",scrub:true,markers:true}})
      ScrollTrigger.refresh();


// =====================
// ✨ INTRO SECTION FIX
// =====================
const introP = document.querySelector('#intro p');
const workH5 = document.querySelector('.workExperience h5');
function animateWithGSAP() {
  if (typeof gsap === 'undefined') {
  console.warn('GSAP not available — applying CSS fallback');
  if (introP) { introP.style.transition = 'opacity 800ms, transform 800ms'; introP.style.opacity = '1'; introP.style.transform = 'translateY(0)'; }
  if (workH5) { setTimeout(()=>{ workH5.style.transition = 'opacity 600ms, transform 600ms'; workH5.style.opacity='1'; workH5.style.transform='translateY(0)'; }, 900); }
  return;
  }
  
  gsap.set(".projects",{clearProps:"all"})
    document.querySelectorAll(".projects").forEach((projects) => {
      gsap.from(projects,{
        y:100,
        opacity:0,
        scale:0,
        duration:.3,
        scrollTrigger:{
          trigger:projects,
          start:"top 90%",
          end:"top 50%",
          scrub:true,
          // markers:true
        }
      })
    })
  
  // Before animating, set initial state so gsap.from has something to animate from
  if (introP) {
  introP.style.opacity = '0';
  introP.style.transform = 'translateY(40px)';
  }
  if (workH5) {
  workH5.style.opacity = '0';
  workH5.style.transform = 'translateY(40px)';
  }
  
  
  // Delay a tick so styles apply
  requestAnimationFrame(()=>{
  // run animations on page load (no ScrollTrigger)
  var tl1=gsap.timeline()
  tl1.fromTo(introP, {y: 40, opacity:0}, {y:0, opacity:1, duration:.2, ease:'back.in',delay:.8});
  tl1.fromTo(workH5, {y:40, opacity:0}, {y:0, opacity:1, duration:.2, ease:'back.in'});
  tl1.fromTo(".workExperience h6", {y:40, opacity:0}, {y:0, opacity:1, duration:.2, ease:'back.in'});
  tl1.fromTo(".lineSeperator1", {y:40, opacity:0}, {y:0, opacity:1, duration:.2, ease:'back.in'});
  tl1.fromTo("#item1 >*", {y:40, opacity:0}, {y:0, opacity:1, duration:.1,stagger:.1, ease:'back.in'});
  tl1.fromTo("#intro p img", {scale:0, opacity:0}, {scale:1, opacity:1, duration:.1,stagger:.1, ease:'back.in'});
});

// Each work experience item
gsap.utils.toArray(".work-item >*").forEach((item, i) => {
  gsap.fromTo(item,
    {x: i % 2 === 0 ? -80 : 80, opacity:0}, {
    x:0,
    opacity: 1,
    duration: .5,
    ease: "power3.out",
    stagger:.1,
    scrollTrigger: {
      trigger: item,
      start: "top 95%",
      end: "top 85%",
      scrub: true,
    },
  });
});

// Side timeline lines animation
gsap.from(".lineSeperator1", {
scaleY: 0,
transformOrigin: "top center",
duration: 1.8,
ease: "power.out(1, 0.6)",
scrollTrigger: {
  stagger:.1,
  trigger: ".workExperience",
  start: "top 60%",
  end:"top 30%",
  scrub:true
},
});
gsap.from(".lineSeperator", {
scaleY: 0,
transformOrigin: "top center",
duration: 1.8,
ease: "power.out(1, 0.6)",
scrollTrigger: {
  stagger:.1,
  trigger: "#promote",
  start: "top 60%",
  end:"top 30%",
  scrub:true
},
});

var tl2=gsap.timeline()
tl2.fromTo("#proj", {y:40, opacity:0}, {y:0, opacity:1, duration:.4,delay:.8, ease:'back.in'});
tl2.fromTo("#proj1", {y:40, opacity:0}, {y:0, opacity:1, duration:.4, ease:'back.in'});

var tl3=gsap.timeline()
tl3.fromTo("#Overview h3", {y:30, opacity:0}, {y:0, opacity:1, duration:.4,delay:1.6, ease:'back.in'});
tl3.fromTo("#Overview .img1", {x:-30, opacity:0}, {x:0, opacity:1, duration:.4, ease:'back.in'},"e");
tl3.fromTo("#Overview .img2", {x:30, opacity:0}, {x:0, opacity:1, duration:.4, ease:'back.in'},"e");
tl3.fromTo("#Overview h2", {y:30, opacity:0}, {y:0, opacity:1, duration:.4, ease:'back.in',scrollTrigger:{trigger:"#Overview h2",start:"top 90%",end:"top 80%",scrub:true}});
tl3.fromTo("#Overview p", {x:30, opacity:0}, {x:0, opacity:1, duration:.4, ease:'back.in',scrollTrigger:{trigger:"#Overview p",start:"top 90%",end:"top 80%",scrub:true}});
tl3.fromTo("#Overview h6", {x:30, opacity:0}, {x:0, opacity:1, duration:.4, ease:'back.in',stagger:.1,scrollTrigger:{trigger:"#Overview h6",start:"top 90%",end:"top 80%",scrub:true}});
tl3.fromTo("#TheProposal h1", {x:30, opacity:0}, {x:0, opacity:1, duration:.4, ease:'back.in',scrollTrigger:{trigger:"#TheProposal",start:"top 60%",end:"top 40%",scrub:true}});
gsap.utils.toArray("#proposed .col-10").forEach((item, i) => {
  tl3.fromTo(item,
    {y: i*(i+30), opacity:0}, {
      y:0,
      opacity: 1,
      duration: .5,
      ease: "power3.out",
    stagger:.1,
    scrollTrigger: {
      trigger: item,
      start: "top 60%",
      end: "top 50%",
      scrub: true,
    },
  });
});
tl3.fromTo("#UXChallenges h1", {x:-30, opacity:0}, {x:0, opacity:1, duration:.4, ease:'linear',scrollTrigger:{trigger:"#UXChallenges",start:"top 80%",end:"top 70%",scrub:true}});
gsap.utils.toArray("#UXChallenges .col-10").forEach((item, i) => {
  tl3.fromTo(item,
    {x: i%2==0?40:-40, opacity:0}, {
      x:0,
      opacity: 1,
      duration: .5,
      ease: "power3.out",
      stagger:.1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 60%",
        scrub: true
      },
    });
});
tl3.fromTo("#AudienceTiming h2", {y:30, opacity:0}, {y:0, opacity:1, duration:.4, ease:'linear',scrollTrigger:{trigger:"#AudienceTiming",start:"top 80%",end:"top 70%",scrub:true}});
gsap.utils.toArray("#AudienceTiming img").forEach((item, i) => {
  tl3.fromTo(item,
    {opacity:0,scale:0}, {
      scale:1,
      opacity: 1,
      duration: .5,
      ease: "power3.out",
      stagger:.1,
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "top 75%",
        scrub: true
      },
    });
  });
tl3.fromTo("#EmpathyDiscovery h2", {y:30, opacity:0}, {y:0, opacity:1, duration:.4, ease:'linear',scrollTrigger:{trigger:"#EmpathyDiscovery",start:"top 80%",end:"top 70%",scrub:true}});
tl3.fromTo("#EmpathyDiscovery p", {y:30, opacity:0}, {y:0, opacity:1, duration:.4, ease:'linear',scrollTrigger:{trigger:"#EmpathyDiscovery",start:"top 70%",end:"top 60%",scrub:true}});
gsap.utils.toArray("#EmpathyDiscovery .empathyCard >*").forEach((item, i) => {
  tl3.fromTo(item,
    {opacity:0,y:30}, {
      y:0,
      opacity: 1,
      duration: .5,
      ease: "power3.out",
      stagger:.1,
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "top 75%",
        scrub: true
      },
    });
  });  
gsap.utils.toArray("#CompetitorDeepDive .col-10 >*").forEach((item, i) => {
  tl3.fromTo(item,
    {opacity:0,y:30}, {
      y:0,
      opacity: 1,
      duration: .5,
      ease: "power3.out",
      stagger:.1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 50%",
        scrub: true
      },
    });
  });  
  tl3.fromTo("#Design h2", {y:30, opacity:0}, {y:0, opacity:1, duration:.4, ease:'linear',scrollTrigger:{trigger:"#Design",start:"top 70%",end:"top 60%",scrub:true}});
gsap.utils.toArray("#Design .col-10 >*,#Design .last >*,#Design #DesignLast >*").forEach((item, i) => {
  tl3.fromTo(item,
    {opacity:0,y:30}, {
      y:0,
      opacity: 1,
      duration: .5,
      ease: "power3.out",
      stagger:.1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 30%",
        scrub: true
      },
    });
  });  
tl3.fromTo(".DesignBg,.DesignBg >*", {y:30, opacity:0}, {y:0, opacity:1, duration:.4, ease:'linear',scrollTrigger:{trigger:".DesignBg",start:"top 80%",end:"top 40%",scrub:true}});
// tl3.fromTo(".last >*", {y:30, opacity:0}, {y:0, opacity:1, duration:.4, ease:'linear',scrollTrigger:{trigger:".last",start:"top 80%",end:"top 40%",scrub:true}});




console.log('GSAP animation started');
  }
  
  
  // Run animations after DOMContentLoaded to be safe
  if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateWithGSAP);
  } else {
  animateWithGSAP();
  }
  
  
  // Extra debug: watch for errors
  window.addEventListener('error', (ev) => console.error('window error:', ev.message, ev.filename, ev.lineno));
  window.addEventListener('unhandledrejection', (ev) => console.error('unhandledrejection:', ev.reason));


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