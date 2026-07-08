console.log("JavaScript Connected!");

const competencyCards = document.querySelectorAll(".competency-card");

competencyCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

        const details = card.querySelector(".competency-details");

        if (details.classList.contains("hidden")) {

            details.classList.remove("hidden");

        } else {

            details.classList.add("hidden");

        }

    });

});