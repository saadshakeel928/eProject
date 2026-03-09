  /* ======================================== JQUREY ===================================== */
  
  $(document).ready(function () {
        /* ================= SMOOTH SCROLL ================= */
        $('a[href^="#"]').on("click", function (e) {
          e.preventDefault();
          var target = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(target).offset().top - 90,
            },
            800,
          );
        });

        /* ================= NAVBAR SCROLL ANIMATION ================= */
        $(window).scroll(function () {
          if ($(this).scrollTop() > 80) {
            $(".navbar").addClass("scrolled");
          } else {
            $(".navbar").removeClass("scrolled");
          }
        });

        /* ================= HERO TEXT TYPE EFFECT ================= */
        let text = "Tools That Turn Ideas Into Reality";
        let i = 0;
        function typing() {
          if (i < text.length) {
            $(".hero span").text(text.substring(0, i + 1));
            i++;
            setTimeout(typing, 60);
          }
        }
        $(".hero span").text("");
        typing();

        

        /* ================= SCROLL REVEAL EFFECT ================= */
        function reveal() {
          $(".about-card, .card, .brand-slider").each(function () {
            let top_of_element = $(this).offset().top;
            let bottom_of_screen = $(window).scrollTop() + $(window).height();

            if (bottom_of_screen > top_of_element + 100) {
              $(this).css({
                opacity: "1",
                transform: "translateY(0)",
              });
            }
          });
        }

        $(".about-card, .card, .brand-slider").css({
          opacity: "0",
          transform: "translateY(50px)",
          transition: "all 0.8s ease",
        });

        $(window).on("scroll", reveal);
        reveal();

        /* ================= MEGA MENU HOVER (DESKTOP ONLY) ================= */
        if ($(window).width() > 992) {
          $(".mega-dropdown").hover(
            function () {
              $(this).find(".dropdown-menu").stop(true, true).slideDown(300);
            },
            function () {
              $(this).find(".dropdown-menu").stop(true, true).slideUp(300);
            },
          );
        }
      });


      /* ======================================== JAVASCRIPT ===================================== */


       window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 80) {
          navbar.classList.add("scrolled", "bg-white", "shadow-sm");
        } else {
          navbar.classList.remove("scrolled", "bg-white", "shadow-sm");
        }
      });