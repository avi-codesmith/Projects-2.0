const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector(".height");
  const weight = document.querySelector(".weight");
  const result = document.querySelector(".result");
  const hvalue = parseInt(height.value);
  const wvalue = parseInt(weight.value);
  const answer = (wvalue / ((hvalue * hvalue) / 10000)).toFixed(2);
  switch (true) {
    case answer < 18.5:
      result.innerHTML = `Your BMI is ${answer} <strong>Underweight</strong>`;
      break;
    case answer >= 18.5 && answer <= 24.9:
      result.innerHTML = `Your BMI is ${answer} <strong>Normal Weight</strong>`;
      break;
    case answer >= 25 && answer <= 29.9:
      result.innerHTML = `Your BMI is ${answer} <strong>Overweight</strong>`;
      break;
    case answer >= 30:
      result.innerHTML = `Your BMI is ${answer} <strong>Obesity</strong>`;
      break;
  }

  height.value = "";
  weight.value = "";
});
