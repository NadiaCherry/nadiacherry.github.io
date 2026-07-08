const competencyCards = document.querySelectorAll(".competency-card");

competencyCards.forEach(card => {

    card.addEventListener("click", () => {

        // Close all other cards
        competencyCards.forEach(otherCard => {

            if (otherCard !== card) {

                otherCard.classList.remove("active");

                otherCard.querySelector(".competency-details").classList.add("hidden");

            }

        });

        // Toggle current card
        card.classList.toggle("active");

        const details = card.querySelector(".competency-details");

        details.classList.toggle("hidden");

    });

});