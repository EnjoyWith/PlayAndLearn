// Definir las preguntas y respuestas
const questions = [
    {
      question: "¿Cuánto es 2 x 8?",
      options: ["6", "20", "16", "8"],
      answer: "16"
    },
    {
      question: "¿Cuál es el antónimo de 'grande'?",
      options: ["Pequeño", "Rápido", "Alto", "Largo"],
      answer: "Pequeño"
    },
    {
      question: "Traduce 'house' a español.",
      options: ["Casa", "Coche", "Perro", "Gato"],
      answer: "Casa"
    },
    {
      question: "¿Cuánto es 25 + 20?",
      options: ["40", "45", "50", "35"],
      answer: "45"
    },
    {
      question: "¿Cuánto es 52 + 18?",
      options: ["70", "84", "26", "65"],
      answer: "70"
    },
    {
      question: "¿Como se dice 'vaca' en inglés?",
      options: ["Dog", "Bird", "Cow", "Cat"],
      answer: "Cow"
    },
    {
      question: "Completa la oración: Ayer fui al _____ después de clases.",
      options: ["Restaurante", "Perro", "Gato", "Luna"],
      answer: "Restaurante"
    },
    {
      question: "¿Como se dice 'cerdo' en inglés?",
      options: ["Pig", "Monkey", "Chicken", "Horse"],
      answer: "Pig"
    },
    {
      question: "Traduce 'human' a español.",
      options: ["Comida", "Humano", "Hola", "Correr"],
      answer: "Humano"
    },
    {
      question: "¿Cuánto es 20 ÷ 5?",
      options: ["2", "5", "1", "4"],
      answer: "4"
    },
    {
      question: "¿Cuál es el sinónimo de 'Bonito'?",
      options: ["Feo", "Hermoso", "Horrible", "Sucio"],
      answer: "Hermoso"
    },
    {
      question: "¿Cuál es la forma correcta de escribir la palabra?",
      options: ["Zanahoria", "Sanahoria", "Zanaoria", "Sanaoria"],
      answer: "Zanahoria"
    },    {
      question: "¿Cuánto es 7 x 4?",
      options: ["21", "28", "35", "30"],
      answer: "28"
    },
    {
      question: "¿Como se dice 'amarillo' en inglés?",
      options: ["Yellow", "Red", "Green", "Blue"],
      answer: "Yellow"
    },
    {
      question: "Completa la oración: Ayer estaba _____ por la calle .",
      options: ["Comer", "Perro", "Vaca", "Caminando"],
      answer: "Caminando"
    },
    {
      question: "¿Cuál es el antónimo de 'flaco'?",
      options: ["Delgado", "Gordo", "Alto", "Bajo"],
      answer: "Gordo"
    },
    {
      question: "Traduce 'run' a español.",
      options: ["Comer", "Pegar", "Correr", "Caminar"],
      answer: "Correr"
    },
    {
      question: "¿Cuánto es 50 ÷ 2?",
      options: ["25", "20", "10", "30"],
      answer: "25"
    },
    {
      question: "¿Cuál es la forma correcta de escribir la palabra?",
      options: ["umano", "Humano", "Humamo", "Unamo"],
      answer: "Humano"
    },
    {
        question: "¿Cuánto es 20 + 60?",
        options: ["52", "40", "30", "80"],
        answer: "80"
    }
    // Agrega más preguntas aquí
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  
  function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
  
    question.options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerText = option;
      optionElement.addEventListener("click", checkAnswer);
      optionsElement.appendChild(optionElement);
    });
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target;
    const answer = questions[currentQuestion].answer;
  
    if (selectedOption.innerText === answer) {
      score++;
      resultElement.innerText = "¡Correcto!";
      resultElement.style.opacity = 1;
      setTimeout(() => {
        resultElement.style.opacity = 0;
      }, 1000);
    } else {
      resultElement.innerText = "Incorrecto";
      resultElement.style.opacity = 1;
      setTimeout(() => {
        resultElement.style.opacity = 0;
      }, 1000);
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
        setTimeout(() => {
            showScore();
        }, 1000);
    }

  }
  
  function showScore() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.innerText = `Puntuación final: ${score} de ${questions.length}`;
  }
  
  displayQuestion();
  
  // script.js
// ...

function displayQuestion() {
    const question = questions[currentQuestion];
  
    // Agrega transición de desvanecimiento para la pregunta
    questionElement.style.opacity = 0;
    setTimeout(() => {
      questionElement.innerText = question.question;
      questionElement.style.opacity = 1;
    }, 300); // Ajusta la duración de la transición si lo deseas
  
    optionsElement.innerHTML = "";
  
    question.options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerText = option;
      optionElement.addEventListener("click", checkAnswer);
      optionsElement.appendChild(optionElement);
    });
  }
  
  function showScore() {
    // Agrega transición de desvanecimiento para mostrar la puntuación final
    questionElement.style.opacity = 0;
    optionsElement.style.opacity = 0;
    setTimeout(() => {
      questionElement.style.display = "none";
      optionsElement.style.display = "none";
      resultElement.innerText = `Puntuación final: ${score} de ${questions.length}`;
      resultElement.style.opacity = 1;
    }, 300); // Ajusta la duración de la transición si lo deseas
  }
  

  function displayQuestion() {
    const question = questions[currentQuestion];
  
    questionElement.style.opacity = 0;
    setTimeout(() => {
      questionElement.innerText = question.question;
      questionElement.style.opacity = 1;
    }, 300);
  
    optionsElement.style.opacity = 0;
    setTimeout(() => {
      optionsElement.innerHTML = "";
  
      question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.addEventListener("click", checkAnswer);
  
        // Agrega transición de rebote para las opciones
        optionElement.style.opacity = 0;
        optionElement.style.transform = "translateY(100px)";
        setTimeout(() => {
          optionElement.style.opacity = 1;
          optionElement.style.transform = "translateY(0)";
        }, 300 + index * 100);
  
        optionsElement.appendChild(optionElement);
      });
  
      optionsElement.style.opacity = 1;
    }, 300);
  }
  
// script.js
// ...


  