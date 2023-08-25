const length = 10;
const tbody = document.querySelector('table > tbody');

Array.from({length}, () => {
  const tr = document.createElement('tr');
  tr.classList.add('line');

    Array.from({length}, () => {
        const number = 1 + Math.random() * 100 | 0;
        const td = document.createElement('td');
        td.classList.add('box');
        td.innerText = number;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);
});