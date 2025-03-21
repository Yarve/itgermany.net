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
    const year = yearInput.value; // Keep as a string for length check

    // Ensure the year has 4 digits and the month is valid
    if (year.length !== 4 || isNaN(month) || month < 1 || month > 12) {
      alert("Please enter a valid 4-digit year and a month (1-12).");
      return;
    }

    const yearNumber = parseInt(year, 10);

    const currentDate = new Date();
    const birthDate = new Date(yearNumber, month - 1); // Months are 0-indexed
    const totalMonths = Math.max(
      0,
      (currentDate.getFullYear() - birthDate.getFullYear()) * 12 +
        currentDate.getMonth() -
        birthDate.getMonth()
    );

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    // Update age section
    ageText.innerHTML = `Your child is <span style="color: blue;">${years}</span> year and 
    <span style="color: blue;">${remainingMonths}</span> months old 
    (<span style="color: blue;">${totalMonths}</span> months in total).`;

    // Calculate remaining months and Kindergeld due
    const monthsRemaining = Math.max(0, maxMonths - totalMonths);
    const totalDue = monthsRemaining * monthlyKindergeld;

    // Update balance section
    balanceText.innerHTML = `If you will apply for Kindergeld now and formalities last about 2 months, 
    you will receive <span style="color: crimson;">${totalDue.toLocaleString()}</span> Euro in total.`;
  }

  monthInput.addEventListener("input", updateKindergeldDetails);
  yearInput.addEventListener("input", updateKindergeldDetails);
});
