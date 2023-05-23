let htmlData = [
    {
        question: 'What is HTML ?',
        a:'HyperText Markup Language',
        b:'Hyped Mark Language',
        c:'HyperText Mark Language',
        d:'Hyper Markup Language',
        correct:'a' 
          
    },

    {
        question: 'Sequence of HTML tags for starting a webpage:',
        a:"Head, Title, HTML, body",
        b:'HTML, Body, Title, Head',
        c:'HTML, Head, Body, Title ',
        d:'HTML, Head, Title, Body',
        correct:'d'

    },
    {
        question: 'Element responsible for making text bold in HTML:',
        a:"<pre>",
        b:'<a>',
        c:'<b>',
        d:'<br>',
        correct:'c'

    },
    {
        question: 'Tag used for inserting the largest heading in HTML?',
        a:"<h2>",
        b:'<h1>',
        c:'<h4>',
        d:'<h3>',
        correct:'b'

    },
    {
        question: 'Types of unordered or bulleted list in HTML',
        a:"disc, square, triangle",
        b:'polygon, triangle, circle',
        c:'disc, circle, square',
        d:'All of the above',
        correct:'c'

    }
];

 
let cssData = [
    {
        question: 'CSS is the acronym for?',
        a:'Color Style Sheets',
        b:'Cascade Sheets Style',
        c:'Cascade Style Sheet',
        d:'Cascading Style Sheets',
        correct:'d' 
    },
    {
        question: 'HTML element h1 is used in CSS for styling then it is also called a?',
        a:'Attribute',
        b:'Selector',
        c:'Element',
        d:'Tag',
        correct:'b' 
    },
    {
        question: 'In CSS, styling elements can be done by ',
        a:'id',
        b:'Class',
        c:'Tag',
        d:'All of the Abpve',
        correct:'d' 
    },
    {
        question: 'External stylesheets are stored in CSS files ',
        a:'True',
        b:'False',
        c:'Can be true or false',
        d:"Can't Say",
        correct:'a' 
    },
    {
        question: 'Tag used to embed css in html page:',
        a:'<css>',
        b:'<!DOCTYPE html>',
        c:'<script>',
        d:'<style>',
        correct:'d' 

        
    },
]

let jsData = [
    {
        question: 'Which type of JavaScript language is ___',
        a:'Object-Oriented',
        b:'Object Based',
        c:'Assembly Language',
        d:'High Level',
        correct:'b' 
    },
    {
        question: 'The "function" and " var" are known as:',
        a:'Keywords',
        b:'Data types',
        c:'Declaration statements',
        d:'Prototypes',
        correct:'c' 
    },
    {
        question: 'Which of the following type of a variable is volatile? ',
        a:'Mutable variable',
        b:'Dynamic variable',
        c:'Volatile variable',
        d:'Immutable variable',
        correct:'a' 
    },
    {
        question: 'In the JavaScript, which one is not considered as an error:',
        a:'Syntax error',
        b:'Missing of semicolons',
        c:'Division by zero',
        d:"Missing of Bracket",
        correct:'c' 
    },
    {
        question: 'Operator to check a specific property exists or not:',
        a:'Exists',
        b:'Exist',
        c:'Within',
        d:'in',
        correct:'d' 

        
    },
]

let reactData = [
    {
        question: 'What is used in React.js to increase performance?',
        a:'Original DOM',
        b:'Virtual DOM',
        c:'Both A and B.',
        d:'None of the above.',
        correct:'b' 
    },
    {
        question: 'Which of the following acts as the input of a class-based component?',
        a:'Class',
        b:'Factory',
        c:'Render',
        d:'Props',
        correct:'d' 
    },
    {
        question: 'Which of the following keyword is used to create a class inheritance?',
        a:'Create',
        b:'Inherits',
        c:'Extends',
        d:'This',
        correct:'c' 
    },
    {
        question: 'How many numbers of elements a valid react component can return?',
        a:'1',
        b:'2',
        c:'4',
        d:"5",
        correct:'a' 
    },
    {
        question: 'What is a state in React?',
        a:'A permanent storage.',
        b:'Internal storage of the component.',
        c:'External storage of the component.',
        d:'None of the above.',
        correct:'b' 

        
    },
]

let quizdata = htmlData;
let count = 0;
let score = 0;

clickAll();
function clickAll(){
    document.getElementsByClassName('submit')[0].addEventListener("click",quiz);
    document.getElementsByClassName('start')[0].addEventListener("click",start);
    document.getElementsByClassName('html')[0].addEventListener("click",htmlQuiz);
    document.getElementsByClassName('css')[0].addEventListener("click",cssQuiz);
    document.getElementsByClassName('js')[0].addEventListener("click",jsQuiz);
    document.getElementsByClassName('react')[0].addEventListener("click",reactQuiz);
    document.getElementsByClassName('homemenu')[0].addEventListener("click",homeMenu);
    document.getElementsByClassName('exittab')[0].addEventListener("click",exitTab);
   
}
 
function exitTab(){
    document.getElementById('content').style.display='none';
    document.getElementById('Home').style.display='flex';
    document.getElementById('exit').style.display='none';
    document.getElementById('nav').style.display='flex';
}
function homeMenu(){
    document.getElementById('content').style.display='none';
    document.getElementById('container').style.display='none'; 
    document.getElementById('Home').style.display='flex'; 
}
function data(quizdata){

    document.getElementsByTagName('h2')[0].innerText=quizdata[count].question
    document.getElementsByTagName('label')[0].innerText=quizdata[count].a
    document.getElementsByTagName('label')[1].innerText=quizdata[count].b
    document.getElementsByTagName('label')[2].innerText=quizdata[count].c
    document.getElementsByTagName('label')[3].innerText=quizdata[count].d
}

 function start(){
    document.getElementById('Home').style.display='none';
    document.getElementById('container').style.display='flex';
    
}

function basic(){
    count = 0;
    score = 0;
    let check =  document.querySelector('input[name="answers"]:checked');
    if(check!=null){
        check.checked = false;
    }
    document.getElementById('content').style.display='flex';
    document.getElementById('container').style.display='none'; 
    document.getElementById('nav').style.display='none'; 
    document.getElementById('exit').style.display='flex'; 
}

function htmlQuiz(){
    basic();
    quizdata = htmlData;
    data(quizdata);
}


function cssQuiz(){
    basic();
    quizdata = cssData;
    data(quizdata);
}


function jsQuiz(){
    basic();
    quizdata = jsData;
    data(quizdata);
}

function reactQuiz(){
    basic();
    quizdata = reactData;
    data(quizdata);
}

function quiz(){
 let check =  document.querySelector('input[name="answers"]:checked');
 if(check!=null){
   // console.log('not null'); 
    count++;
    if(count<(quizdata.length)){
        document.getElementsByTagName('h2')[0].innerText=quizdata[count].question
        document.getElementsByTagName('label')[0].innerText=quizdata[count].a
        document.getElementsByTagName('label')[1].innerText=quizdata[count].b
        document.getElementsByTagName('label')[2].innerText=quizdata[count].c
        document.getElementsByTagName('label')[3].innerText=quizdata[count].d
        check.checked = false;
        checkScore();
    }
    else{
        document.getElementById('content').style.display='none';
        document.getElementById('container').style.display='flex';
        document.getElementById('nav').style.display='flex';
        document.getElementById('exit').style.display='none';
        checkScore();
        let finished = confirm('Quiz Finished!! Want to see Score?')
        if(finished){
            alert('Hey! You Scored  ::  '+ score + ' out of '+ quizdata.length)
        }
        else{
            alert('Hey!!! You are Done.');
        }
        console.log('quiz finished');
        console.clear();
    }
}
else{
    console.log('select option');
    alert('Choose an option for continue playing or Exit for Home Page.')
    

}


function checkScore(){

      if(check.id == quizdata[count-1].correct){
          console.log('correct')
          score++;
      }
      else{
          console.log('wrong');
      }


   console.log('score '+ score);
}
}

 




