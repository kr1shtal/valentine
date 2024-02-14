const answers = [
  "Are u sure?",
  "Really sure?",
  "Think twice",
  "Think again",
  "One more time",
  "Last chance",
  "Give another thought",
  "What if I asked really nicely?",
  "This could be a mistake",
  "You might reget this",
  "Are you absolutely certain",
  "Surely not",
  "Would you recognize?",
  "Have a heart",
  "Don't be so cold",
  "Change of heart",
  "Is that your final answer?",
  "Better said yes <3",
  "Pretty please",
  "I'm gonna cry...",
  "Your breaking my heart T_T",
  "I am going to die",
  "Yep i'm dead.",
  "Ok, now ur talking with my ghost."
]

let count = 0;

let btnYes = document.getElementById('btn-yes');
let btnNo = document.getElementById('btn-no');

let h = btnYes.style.height = 100;
let w = btnYes.style.width = 200;
let f = btnYes.style.fontSize = 24;

function positive() {
  document.getElementById('picture').src = 'res/happy.gif';
  document.getElementById('row').innerText = 'Yaaay. I love you)';

  btnYes.style.display = 'none';
  btnNo.style.display = 'none';
}

function negative() {
  console.log(answers[count]);
  if (answers[count] === undefined) {
    btnNo.innerHTML = answers[answers.length - 1];
  } else {
    btnNo.innerHTML = answers[count];

    h += 10;
    w += 20;
    f += 4;

    btnYes.style.height = h + 'px';
    btnYes.style.width = w + 'px';
    btnYes.style.fontSize = f + 'px'

    count++;
  }
}