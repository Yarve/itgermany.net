const correctAnswers = [
    'D', 'B', 'A', 'C', 'C',
    'D', 'A', 'A', 'C', 'D',
    'A', 'C', 'D', 'B', 'B',
    'A', 'D', 'A', 'A', 'D'];
    const form = document.querySelector('.quiz-form');
    const result = document.querySelector('.result');
    const resultMessage = document.querySelector('#result-message');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        let score = 0;
        const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, 
        form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, 
        form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value, form.q16.value, 
        form.q17.value, form.q18.value, form.q19.value, form.q20.value];
    
        // check answers
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]){
                score += 5;
            }
        });
    
        // show result on page:
        scrollTo(0,0);
        result.classList.remove('d-none');
    
        let output = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            if(output === score){
                clearInterval(timer);
                if (score >= 50) {
                    resultMessage.textContent = "BESTANDEN :)";
                    resultMessage.style.color = "limegreen";
                } else {
                    resultMessage.textContent = "NICHT BESTANDEN :(";
                    resultMessage.style.color = "red";
                }
            } else {
                output++;
            }
        }, 10);
    
    });
    