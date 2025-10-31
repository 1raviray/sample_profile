document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".influencer-nav .nav-link");
  const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute("href").slice(1);
    return document.getElementById(id);
  });

  const designLink = document.querySelector('.nav-link[href="#Design"]');
  const designSection = document.getElementById("Design");

  function updateActiveLink() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.offsetHeight;

    // If near bottom of the page, keep Design highlighted
    if (scrollPos + windowHeight >= documentHeight - 10) {
      navLinks.forEach(link => link.classList.remove("active"));
      designLink.classList.add("design-persist");
      return;
    }

    // Remove all highlights initially
    navLinks.forEach(link => link.classList.remove("active", "design-persist"));

    // Loop through sections to find current view
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        navLinks[i].classList.add("active");

        // if we’ve passed Design, keep it highlighted
        if (sec.id === "Design") {
          navLinks[i].classList.add("design-persist");
        }
      }
    }

    // If scrolled past Design, persist highlight
    const designBottom = designSection.getBoundingClientRect().bottom;
    if (designBottom < 0) {
      navLinks.forEach(link => link.classList.remove("active"));
      designLink.classList.add("design-persist");
    }
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // run on load
});



function sendMail(event) {
  event.preventDefault();
  const name = (document.getElementById('name').value);
  const email = (document.getElementById('email').value);
  const message = (document.getElementById('message').value);

  const subject = encodeURIComponent("New message from contact form");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  // window.location.href = `mailto:karunanjali.gurram@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = `mailto:raviray66667@gmail.com?subject=${subject}&body=${body}`;
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay:true,
  autoplayTimeout:2000,
  dots:false,
  responsive: {
    0: {
      items: 3.5,
    },
    1000: {
      items: 6.5,
    },
    1000: {
      items: 8.5,
    },
  },
});