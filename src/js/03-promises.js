import { Notify } from "notiflix"; 


const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault()
  const data = new FormData(event.target);

  let delay = Number(data.get('delay'));
  let step = Number(data.get('step'));
  let amount = Number(data.get('amount'));

  form.reset();
  
  for (let i = 1; i <= amount; i++) {
    i === 1
      ? delay 
      : delay += step
    
    createPromise(i, delay)
    .then(({position, delay}) => {
    Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
    Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
      resolve({ position, delay })
    } else {
      reject({ position, delay })
      }
      }, delay);
  }); 
  }
