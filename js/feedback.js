/* =========================================
   CAMPUS PULSE - FEEDBACK
========================================= */


/* =========================================
   COURSE SELECTION
========================================= */

const courseCards = document.querySelectorAll(".course-card");

const orbCourse = document.querySelector(".orb-course");


courseCards.forEach(card => {

    card.addEventListener("click", () => {

        courseCards.forEach(item => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        const course = card.dataset.course;

        if (orbCourse) {
            orbCourse.textContent = course;
        }

    });

});


/* =========================================
   EMOTION SYSTEM
========================================= */

const emotions = document.querySelectorAll(".emotion");

const ratingTitle =
    document.getElementById("ratingTitle");

const ratingDescription =
    document.getElementById("ratingDescription");

const questionText =
    document.getElementById("questionText");


const ratingData = {

    1: {
        title: "Needs Improvement",
        description:
            "We'd like to understand what could have been better.",
        question:
            "WHAT COULD HAVE BEEN BETTER?"
    },

    2: {
        title: "Okay",
        description:
            "Tell us what could improve your experience.",
        question:
            "WHAT WOULD IMPROVE YOUR EXPERIENCE?"
    },

    3: {
        title: "Good",
        description:
            "What did you enjoy about this experience?",
        question:
            "WHAT DID YOU ENJOY ABOUT THE COURSE?"
    },

    4: {
        title: "Great",
        description:
            "Tell us what worked particularly well.",
        question:
            "WHAT WORKED PARTICULARLY WELL?"
    },

    5: {
        title: "Excellent",
        description:
            "We're glad you had a great experience.",
        question:
            "WHAT MADE THIS EXPERIENCE EXCELLENT?"
    }

};


emotions.forEach(emotion => {

    emotion.addEventListener("click", () => {

        emotions.forEach(item => {
            item.classList.remove("active");
        });

        emotion.classList.add("active");

        const rating =
            emotion.dataset.rating;

        const data =
            ratingData[rating];

        ratingTitle.textContent =
            data.title;

        ratingDescription.textContent =
            data.description;

        questionText.textContent =
            data.question;

    });

});


/* =========================================
   CHARACTER COUNT
========================================= */

const feedbackText =
    document.getElementById("feedbackText");

const charCount =
    document.getElementById("charCount");


feedbackText.addEventListener("input", () => {

    const length =
        feedbackText.value.length;

    charCount.textContent =
        `${length} / 500`;

});


/* =========================================
   TAG SELECTION
========================================= */

const tags =
    document.querySelectorAll(".tag");


tags.forEach(tag => {

    tag.addEventListener("click", () => {

        tag.classList.toggle("selected");

    });

});


/* =========================================
   SUBMIT
========================================= */

const submitButton =
    document.getElementById("submitFeedback");

const successOverlay =
    document.getElementById("successOverlay");

const closeSuccess =
    document.getElementById("closeSuccess");


submitButton.addEventListener("click", () => {

    const selectedCourse =
        document.querySelector(".course-card.selected");

    const selectedRating =
        document.querySelector(".emotion.active");

    const feedback =
        feedbackText.value.trim();


    if (!selectedCourse) {

        alert("Please select a course.");

        return;

    }


    if (!selectedRating) {

        alert("Please select your experience.");

        return;

    }


    if (feedback.length < 5) {

        alert("Please share a little about your experience.");

        feedbackText.focus();

        return;

    }


    /* Show success animation */

    successOverlay.classList.add("show");

});


/* =========================================
   CLOSE SUCCESS
========================================= */

closeSuccess.addEventListener("click", () => {

    successOverlay.classList.remove("show");

});