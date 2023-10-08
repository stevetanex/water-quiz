const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The process by which water vapour is formed from water',
    answers: [
      { text: 'Evaporation', correct: true },
      { text: 'Condensation', correct: false },
      { text: 'Transition', correct: false },
      { text: 'Sublimation', correct: false }
    ]
  },
  {
    question: ' What is the alternate name of water?',
    answers: [
      { text: 'Azide', correct: false },
      { text: 'Oxidane', correct: true },
      { text: 'Dihydrogen oxide', correct: false },
      { text: 'Hydroxide', correct: false }
    ]
  },
  {
    question: 'Which one is the purest form of water?',
    answers: [
      { text: 'River water', correct: false },
      { text: 'Ground water', correct: false},
      { text: 'Rain water', correct: true },
      { text: 'Tap water', correct: false }
    ]
  },
  {
    question: 'The zeolite softening process is used in removing both the temporary and permanent hardness of the water. In this process, the calcium and magnesium present in water are precipitated as',
    answers: [
      { text: 'Insoluble carbonates', correct: false },
      { text: 'Insoluble zeolites', correct: true },
      { text: 'Insoluble chlorides', correct: false },
      { text: 'Insoluble sulfates', correct: false}
    ]
  },
  {
    question: 'Which of the following is a source of freshwater',
    answers: [
      { text: 'Groundwater', correct: false },
      { text: 'Rainwater', correct: false },
      { text: ' Surface run-off', correct: false},
      { text: ' All of the above', correct: true }
    ]
  },
  {
    question: 'Heavy rainfalls lead to:',
    answers: [
      { text: 'Drought', correct: false },
      { text: 'Landslides', correct: false},
      { text: 'Earthquake', correct: false },
      { text: 'Flood', correct: true }
    ]
  },
  {
    question: ' The % of total drinking water available on earth is:',
    answers: [
      { text: '45%', correct: false },
      { text: '15%', correct: false },
      { text: '25%', correct: false },
      { text: '0.3%', correct: true }
    ]
  },
  {
    question: 'Which of the following sources cannot be used for drinking purpouse ',
    answers: [
      { text: 'Rivers', correct: false },
      { text: 'River water', correct: false },
      { text: 'Lakes', correct: false },
      { text: 'none of above', correct: true }
    ]
  },
  {
    question: ' The formation of clouds is due to ____ ',
    answers: [
      { text: 'Evaporation', correct: false },
      { text: 'Condensation', correct: true },
      { text: 'Precipitation', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    question: ' Which of the following will lead to a reduction in the availability of groundwater?',
    answers: [
      { text: ' Afforestation', correct: false },
      { text: 'Constructing dams and lakes', correct: false },
      { text: ' Rainwater harvesting', correct: false },
      { text: 'Building concrete roads', correct: true }
    ]
  },
  {
    question: 'Water cycle is?',
    answers: [
      { text: 'Water falling from clouds in the form of rain, sleet, snow or hail', correct: false },
      { text: ' Movement of water from the atmosphere to the earth and then back to the atmosphere', correct: true },
      { text: 'The process of water passing out from the surface of the leaves of a plant', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    question: 'Groundwater is a:?',
    answers: [
      { text: 'Inexhaustible resource', correct: false },
      { text: 'Non-renewable resource', correct: false },
      { text: 'Renewable resource', correct: true },
      { text: 'Exhaustible resource', correct: false }
    ]
  },
  {
    question: 'Condensation process is the opposite of ____',
    answers: [
      { text: 'Sublimation', correct: false },
      { text: ' Evaporation', correct: true },
      { text: 'Freezing', correct: false },
      { text: 'Transpiration', correct: false }
    ]
  },
  {
    question: 'The coming down of water in the form of rain, snow, hail, etc., is ____.',
    answers: [  
      { text: 'Precipitation', correct: true },
      { text: 'Evaporation', correct: false },
      { text: ' None of the above', correct: false },
      { text: ' Condensation', correct: false }

    ]
  },
  {
    question: ' Water exists in ____ forms.',
    answers: [
      { text: ' Five', correct: false },
      { text: 'Four', correct: false },
      { text: 'Three', correct: true },
      { text: 'Two', correct: false }
    ]
  },
  {
    question: ' The loss of water from plants is termed as: ',
    answers: [
      { text: 'Transpiration', correct: true },
      { text: 'Transfusion', correct: false },
      { text: ' Translocation', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    question: 'The process of collecting rainwater is called ____.',
    answers: [
      { text: 'Rainwater replenishing', correct: false },
      { text: ' Rainwater recharging', correct: false },
      { text: 'Rainwater harvesting', correct: true },
      { text: ' Rainwater collecting', correct: false }
    ]
  },
  {
    question: 'Choose the correct statement from the following: ',
    answers: [
      { text: 'In agriculture, water is used to grow food', correct: false },
      { text: 'Plants and animals will die if they do not have access to water', correct: false },
      { text: 'All of the above', correct: true },
      { text: ' Water is required for the survival of all living things, including plants and animals', correct: false }
    ]
  },
  {
    question: 'The patterns of rainfall depend on: ',
    answers: [
      
      { text: 'The number of water bodies in an area', correct: true },
      { text: 'The prevailing season in an area', correct: false },
      { text: 'The density pattern of human population in an area', correct: false },
      { text: 'Water table', correct: false }
    ]
  },
  {
    question: 'The water that is fit for drinking is called _____.',
    answers: [
      { text: 'Portable water', correct: false },
      { text: 'None of the above', correct: false },
      { text: ' Portrait water', correct: false },
      { text: 'Potable water', correct:  true }
    ]
  }
]