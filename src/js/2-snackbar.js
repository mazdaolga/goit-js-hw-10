import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import '../css/2-snackbar.css';

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const delay = parseInt(form.elements.delay.value);
    const state = form.elements.state.value;
    
    createPromise(delay, state)
        .then(delay => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight'
            });
        });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

