/* =========================================
   CAMPUS PULSE
   Student Feedback Interface
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       FEEDBACK MODAL
    ===================================== */

    const feedbackBtn =
        document.getElementById("feedbackBtn");

    const feedbackModal =
        document.getElementById("feedbackModal");

    const closeModal =
        document.getElementById("closeModal");


    feedbackBtn.addEventListener("click", () => {

        feedbackModal.classList.add("show");

    });


    closeModal.addEventListener("click", () => {

        feedbackModal.classList.remove("show");

    });


    feedbackModal.addEventListener("click", (event) => {

        if (event.target === feedbackModal) {

            feedbackModal.classList.remove("show");

        }

    });


    /* =====================================
       EMOTION SELECTION
    ===================================== */

    const emotions =
        document.querySelectorAll(".emotion");


    emotions.forEach((emotion) => {

        emotion.addEventListener("click", () => {

            emotions.forEach((item) => {

                item.classList.remove("selected");

            });


            emotion.classList.add("selected");


            const selectedEmotion =
                emotion.dataset.emotion;


            console.log(
                "Selected experience:",
                selectedEmotion
            );

        });

    });


    /* =====================================
       EXPERIENCE NODES
    ===================================== */

    const nodes =
        document.querySelectorAll(".experience-node");


    const tooltip =
        document.getElementById("courseTooltip");


    nodes.forEach((node) => {

        node.addEventListener("click", () => {

            const title =
                node.dataset.title;

            const description =
                node.dataset.description;


            console.log(
                title,
                description
            );


            /*
                If Courses is clicked,
                show the course tooltip.
            */

            if (
                node.classList.contains("courses-node")
            ) {

                tooltip.style.display = "block";

            }


            /*
                Highlight selected node
            */

            nodes.forEach((item) => {

                item.classList.remove(
                    "active-node"
                );

            });


            node.classList.add(
                "active-node"
            );

        });

    });


    /* =====================================
       NAVIGATION ACTIVE STATE
    ===================================== */

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();


            navLinks.forEach((item) => {

                item.classList.remove("active");

            });


            link.classList.add("active");

        });

    });


    /* =====================================
       NOTIFICATION BUTTON
    ===================================== */

    const notificationBtn =
        document.querySelector(
            ".notification-btn"
        );


    notificationBtn.addEventListener(
        "click",
        () => {

            alert(
                "You have 2 pending feedback experiences."
            );

        }
    );


    /* =====================================
       ESCAPE KEY
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                feedbackModal.classList.remove(
                    "show"
                );

            }

        }
    );

});