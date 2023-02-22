const app = Vue.createApp({
  data: function () {
    return {
      headerNav: {
        logo: "dark-logo",
        buttonIcon: "fa-solid fa-magnifying-glass",
        leftHeader: [
          {
            nav: "Home",
          },
          {
            nav: "Pages",
          },
          {
            nav: "Courses",
          },
          {
            nav: "Features",
          },
          {
            nav: "Blog",
          },
          {
            nav: "Shop",
          },
        ],

        rightHeader: [
          {
            icon: "fa-solid fa-cart-shopping",
          },
          {
            icon: "fa-regular fa-circle-user",
          },
        ],
      },
      footerNav: {
        text: "Address",
        address: [
          {
            address: "382 NE 191st St # 87394 Miami, FL 33179-3899",
          },
          {
            phone: "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
          },
          {
            email: "support@maxcoach.com)",
          },
        ],

        socialMedias: [
          {
            social: "fa-brands fa-square-facebook",
          },
          {
            social: "fa-brands fa-square-twitter",
          },
          {
            social: "fa-brands fa-instagram",
          },
          {
            social: "fa-brands fa-linkedin",
          },
        ],

        navItemsExplore: [
          {
            link: "Start here",
          },
          {
            link: "Blog",
          },
          {
            link: "About us",
          },
        ],

        navItemsExplore2: [
          {
            link: "Success story",
          },
          {
            link: "Courses",
          },
          {
            link: "Contact us",
          },
        ],

        navItemsInformation: [
          {
            link: "Membership",
          },
          {
            link: "Purchase guide",
          },
          {
            link: "Privacy policy",
          },
          {
            link: "Terms of service",
          },
        ],

        textRights: "©2020 Maxcoach. All right Reserved",
      },
    };
  },
});
app.mount("#app");

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
