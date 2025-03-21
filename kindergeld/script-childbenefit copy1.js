document.addEventListener("DOMContentLoaded", function () {
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");
  const ageSection = document.getElementById("kid1-age");
  const balanceSection = document.getElementById("kid1-balancedue");
  const ageText = ageSection.querySelector("p");
  const balanceText = balanceSection.querySelector("p");

  const monthlyKindergeld = 250; // Kindergeld per month
  const maxMonths = 216; // Maximum months for Kindergeld (18 years)

  function updateKindergeldDetails() {
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year <= 0) {
      alert("Please enter a valid month (1-12) and year.");
      return;
    }

    const currentDate = new Date();
    const birthDate = new Date(year, month - 1); // Months are 0-indexed
    const totalMonths = Math.max(
      0,
      (currentDate.getFullYear() - birthDate.getFullYear()) * 12 +
        currentDate.getMonth() -
        birthDate.getMonth()
    );

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    // Update age section
    ageText.innerHTML = `Your child is ${years} year and ${remainingMonths} months old. 
    Which is ${totalMonths} months in total.`;
    ageText.style.color = "blue";

    // Calculate remaining months and Kindergeld due
    const monthsRemaining = Math.max(0, maxMonths - totalMonths);
    const totalDue = monthsRemaining * monthlyKindergeld;

    // Update balance section
    balanceText.innerHTML = `If you will apply for Kindergeld now and formalities last about 2 months, 
    you will receive ${totalDue.toLocaleString()} Euro in total.`;
    balanceText.style.color = "crimson";
  }

  monthInput.addEventListener("input", updateKindergeldDetails);
  yearInput.addEventListener("input", updateKindergeldDetails);
});
