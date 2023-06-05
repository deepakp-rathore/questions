//grab DOM elements
const openButtons = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.individual-questions');

questions.forEach(function(question) {  
    const btn = question.querySelector('.question-btn'); 
    btn.addEventListener('click', function() { 

        
        questions.forEach(function(item) {  
            if (item !== question) {  
                item.classList.remove('show-text'); 
            }
        });
        question.classList.toggle('show-text'); 
    });
});


