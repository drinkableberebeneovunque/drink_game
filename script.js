const questions = [
    {
        text: "Come finisce la tua serata ideale?",
        subText: "Il gran finale dice tutto!",
        options: [
            {
                text: "Party scatenato con i Looney Tunes",
                subText: "Energia fino all'ultimo secondo", 
                image: "images/buttons/spiderman/question1.png",
                weights: {
                    ragnoRosso: 2,
                    cristalloCenerentola: 0,
                    formulaPuffo: 1,
                    segretoPantera: 0.5
                }
            },
            {
                text: "Inseguimento con Tom e Jerry",
                subText: "Risate e adrenalina garantite",
                image: "images/buttons/puffo/question1.png",
                weights: {
                    ragnoRosso: 1,
                    cristalloCenerentola: 0,
                    formulaPuffo: 2,
                    segretoPantera: 1
                }
            },
            {
                text: "Relax con Garfield",
                subText: "Momento di puro comfort",
                image: "images/buttons/pantera-rosa/question1.png",
                weights: {
                    ragnoRosso: 0.5,
                    cristalloCenerentola: 0.5,
                    formulaPuffo: 0,
                    segretoPantera: 2
                }
            },
            {
                text: "Tramonto con Topolino",
                subText: "Un dolce finale da favola",
                image: "images/buttons/cenerentola/question1.png",
                weights: {
                    ragnoRosso: 0,
                    cristalloCenerentola: 2,
                    formulaPuffo: 1,
                    segretoPantera: 0.5
                }
            }
        ]
    },
    {
        text: "Quale missione segreta sceglieresti?",
        subText: "L'avventura che fa per te!",
        options: [
            {
                text: "Caccia al tesoro con Scooby-Doo",
                subText: "Misteri e sorprese dietro ogni angolo",
                image: "images/buttons/pantera-rosa/question2.png",
                weights: {
                    ragnoRosso: 0.5,
                    cristalloCenerentola: 0,
                    formulaPuffo: 1,
                    segretoPantera: 2
                }
            },
            {
                text: "Missione notturna con Batman",
                subText: "Intensità e mistero nella notte",
                image: "images/buttons/spiderman/question2.png",
                weights: {
                    ragnoRosso: 2,
                    cristalloCenerentola: 0,
                    formulaPuffo: 0,
                    segretoPantera: 1
                }
            },
            {
                text: "Scherzi con Bugs Bunny",
                subText: "Astuzia e divertimento garantiti",
                image: "images/buttons/puffo/question2.png",
                weights: {
                    ragnoRosso: 1,
                    cristalloCenerentola: 0,
                    formulaPuffo: 2,
                    segretoPantera: 0.5
                }
            },
            {
                text: "Ballo reale con Cenerentola",
                subText: "Una serata di pura magia",
                image: "images/buttons/cenerentola/question2.png",
                weights: {
                    ragnoRosso: 0,
                    cristalloCenerentola: 2,
                    formulaPuffo: 0.5,
                    segretoPantera: 1
                }
            }
        ]
    },
    {
        text: "Quale potere dei cartoni vorresti avere?",
        subText: "Ogni superpotere rivela qualcosa di te...",
        options: [
            {
                text: "La velocità di Speedy Gonzales",
                subText: "Rapido e frizzante come una bolla di champagne",
                image: "images/buttons/spiderman/question3.png",
                weights: {
                    ragnoRosso: 2,
                    cristalloCenerentola: 0,
                    formulaPuffo: 1,
                    segretoPantera: 0.5
                }
            },
            {
                text: "La magia di Silvestro",
                subText: "Trasformare ogni momento in qualcosa di speciale",
                image: "images/buttons/cenerentola/question3.png",
                weights: {
                    ragnoRosso: 0,
                    cristalloCenerentola: 2,
                    formulaPuffo: 1,
                    segretoPantera: 0
                }
            },
            {
                text: "I gadget di Ispettore Gadget",
                subText: "Sempre pronto a ogni situazione",
                image: "images/buttons/puffo/question3.png",
                weights: {
                    ragnoRosso: 1,
                    cristalloCenerentola: 0,
                    formulaPuffo: 2,
                    segretoPantera: 1
                }
            },
            {
                text: "L'eleganza della Pantera Rosa",
                subText: "Stile e classe in ogni movimento",
                image: "images/buttons/pantera-rosa/question3.png",
                weights: {
                    ragnoRosso: 0,
                    cristalloCenerentola: 1,
                    formulaPuffo: 0,
                    segretoPantera: 2
                }
            }
        ]
    }
 ];
 
 const drinks = {
    ragnoRosso: {
        name: "Il Ragno Rosso",
        description: "Un Americano audace e deciso, proprio come Spider-Man!",
        base: "Americano",
        character: "Spider-Man",
        color: "#ef4444",
        glass: "Tumbler alto",
        garnish: "Arancia"
    },
    cristalloCenerentola: {
        name: "Il Cristallo di Cenerentola",
        description: "Un Martini elegante e raffinato, magico come una serata a palazzo.",
        base: "Martini",
        character: "Cenerentola",
        color: "#06b6d4",
        glass: "Coppa Martini",
        garnish: "Twist di limone"
    },
    formulaPuffo: {
        name: "La Formula di Puffo",
        description: "Un Daiquiri fresco e allegro, perfetto per chi ha un animo magico!",
        base: "Daiquiri",
        character: "Puffo",
        color: "#3b82f6",
        glass: "Coppetta cocktail",
        garnish: "Fetta di lime"
    },
    segretoPantera: {
        name: "Il Segreto della Pantera",
        description: "Un Paloma misterioso ed elegante, rosa come la Pantera!",
        base: "Paloma",
        character: "Pantera Rosa",
        color: "#ec4899",
        glass: "Collins",
        garnish: "Pompelmo rosa"
    }
 };
 
 let currentQuestion = 0;
 let scores = {};
 
 function initializeQuiz() {
    Object.keys(drinks).forEach(drink => scores[drink] = 0);
    showQuestion();
 }
 
 function showQuestion() {
    const questionData = questions[currentQuestion];
    document.querySelector('.question-title').textContent = questionData.text;
    document.querySelector('.question-subtext').textContent = questionData.subText;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach(option => {
       const button = document.createElement('button');
        button.className = 'option-button';
        button.style.backgroundImage = `url(${option.image})`;
        button.style.backgroundSize = 'cover';
        
        const content = document.createElement('div');
        content.className = 'option-content';
        
        content.innerHTML = `
            <span class="option-text">${option.text}</span>
            <span class="option-subtext">${option.subText}</span>
        `;
        
        button.appendChild(content);
        button.onclick = () => selectOption(option.weights);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('progress').textContent = 
        `Domanda ${currentQuestion + 1} di ${questions.length}`;
 }
 
 function selectOption(weights) {
    Object.keys(weights).forEach(drink => {
        scores[drink] += weights[drink];
    });
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
 }
 
 function showResult() {
    const winner = Object.entries(scores).reduce((a, b) => 
        scores[a[0]] > scores[b[0]] ? a : b
    )[0];
    
    const resultContainer = document.getElementById('result-container');
    
    resultContainer.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
            <img src="images/results/${winner}.png" class="result-image" alt="Il tuo drink ideale">
            <button class="restart-button" onclick="restartQuiz()">
                Prova un altro drink! 🍹
            </button>
        </div>
    `;
    
    document.getElementById('question-container').style.display = 'none';
    resultContainer.style.display = 'flex';
}
 
 function restartQuiz() {
    currentQuestion = 0;
    scores = {};
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    initializeQuiz();
 }
 
 // Inizializza il quiz al caricamento
 document.addEventListener('DOMContentLoaded', initializeQuiz);
