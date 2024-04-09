gsap.to("#logo1", { duration: 2, x: 1000 });
gsap.to("#name", { duration: 2, x: 1000, backgroundColor: "#560563", borderRadius: "20%", border: "5px solid white" });
gsap.to("#logo2", { duration: 2, x: 1000,borderRadius: "20%", border: "5px solid white", ease: "bounce" });
gsap.set("#logo3, #logo4", {  transformOrigin : "50% 50%"});
gsap.to("#logo3, #logo4", { duration: 2, rotation : 360 });