const form = document.querySelector('.form-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector('#type');
const button = document.querySelector('#orderButton');

let total = parseInt(typeSelect.value);
let toppings = [];
let extras = [];

const pancakePriceCalc = () => {
  const totalPriceElement = document.querySelector('#totalPrice');
  const priceBanner = document.querySelector('.price-banner');

  total = parseInt(typeSelect.value);
  toppings = [];
  extras = [];

  checkboxes.forEach((item) => {
    if (item.checked) {
      total += parseInt(item.value);
      if (item.dataset.category === 'toppings') {
        toppings.push(item.dataset.name);
      } else {
        extras.push(item.dataset.name);
      }
    }
  });

  totalPriceElement.textContent = `${total}€`;
  priceBanner.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.05)' },
      { transform: 'scale(1)' },
    ],
    { duration: 100, iterations: 1 }
  );
};

const displayOrder = () => {
  const customerName = document.querySelector('#customerName').value.trim();
  if (!customerName) {
    alert('Ole hyvä ja syötä nimesi ennen tilaamista!');
    return;
  }

  document.querySelector('#order_type').textContent = typeSelect.selectedOptions[0].text;
  document.querySelector('#order_toppings').textContent = toppings.join(', ') || 'Ei lisukkeita';
  document.querySelector('#order_extras').textContent = extras.join(', ') || 'Ei ekstraa';
  document.querySelector('#order_name').textContent = customerName;
  document.querySelector('#order_price').textContent = `${total}€`;
};

form.addEventListener('change', pancakePriceCalc);
button.addEventListener('click', displayOrder);