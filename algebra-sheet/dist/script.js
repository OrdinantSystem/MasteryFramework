'use strict';
const steps = [[15,9],[6,9],[6,3],[3,3],[3,0]];
const blocks = (count, label = '') => Array.from({length: count}, () => `<span class="block" aria-hidden="true">${label}</span>`).join('');
document.querySelectorAll('[data-blocks]').forEach(el => {
  el.innerHTML = blocks(Number(el.dataset.blocks), el.dataset.label);
  el.setAttribute('role','img');
  el.setAttribute('aria-label',`${el.dataset.blocks} Blöcke mit je ${el.dataset.label} Einheiten`);
});
document.querySelector('#reduction-steps').innerHTML = steps.map(([a,b],i) => `<div class="reduction-step"><span class="step-number">${i+1}.</span><div aria-label="${a} und ${b} Einheiten"><div class="blocks teal">${blocks(a/3)}</div><div class="blocks blue">${blocks(b/3)}</div></div><span class="tuple">(${a}, ${b})</span><span class="gcd">ggT 3</span></div>`).join('');
document.querySelector('#sum-bars').innerHTML = steps.map(([a,b],i) => `<div class="sum-row"><span>(${a},${b})</span><div class="track"><div class="bar ${i===4?'last':''}" style="width:${(a+b)/24*100}%"></div></div><span>${a+b}</span></div>`).join('');
document.querySelector('#print').addEventListener('click', () => window.print());

document.querySelector('#reading').addEventListener('click', (event) => {
 const active = document.body.classList.toggle('reading');
 event.currentTarget.setAttribute('aria-pressed', String(active));
 event.currentTarget.textContent = active ? 'Kompaktansicht' : 'Lesemodus';
});
