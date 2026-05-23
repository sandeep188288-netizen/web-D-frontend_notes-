const quesBank = [
{question:"Who has the most centuries in international cricket?",options:["Sachin Tendulkar","Ricky Ponting","Virat Kohli","Jacques Kallis"],answer:"Sachin Tendulkar"},
{question:"Which country won the first ICC Cricket World Cup?",options:["India","Australia","England","West Indies"],answer:"West Indies"},
{question:"Who is known as the 'God of Cricket'?",options:["MS Dhoni","Sachin Tendulkar","Virat Kohli","Rohit Sharma"],answer:"Sachin Tendulkar"},
{question:"What is the highest individual score in ODI cricket?",options:["200","264","237","300"],answer:"264"},
{question:"Which bowler has taken the most wickets in Test cricket?",options:["Shane Warne","Muttiah Muralitharan","Anil Kumble","James Anderson"],answer:"Muttiah Muralitharan"},
{question:"Which country has won the most ICC Cricket World Cups?",options:["India","Australia","England","Pakistan"],answer:"Australia"},
{question:"Who is called Captain Cool?",options:["Virat Kohli","MS Dhoni","Rohit Sharma","Steve Smith"],answer:"MS Dhoni"},
{question:"How many players are there in a cricket team?",options:["9","10","11","12"],answer:"11"},
{question:"Which player is known as the Hitman of cricket?",options:["Virat Kohli","Chris Gayle","Rohit Sharma","AB de Villiers"],answer:"Rohit Sharma"},
{question:"Which country hosted the 2011 Cricket World Cup final?",options:["India","Australia","England","South Africa"],answer:"India"},
{question:"Who scored the first double century in ODI cricket?",options:["Sachin Tendulkar","Virender Sehwag","Rohit Sharma","Chris Gayle"],answer:"Sachin Tendulkar"},
{question:"Which Indian bowler took 10 wickets in a Test innings?",options:["Kapil Dev","Anil Kumble","Harbhajan Singh","Jasprit Bumrah"],answer:"Anil Kumble"},
{question:"What is the length of a cricket pitch?",options:["20 yards","22 yards","24 yards","18 yards"],answer:"22 yards"},
{question:"Which cricketer is known as Universe Boss?",options:["Chris Gayle","Andre Russell","Brian Lara","Dwayne Bravo"],answer:"Chris Gayle"},
{question:"Which team won the ICC T20 World Cup 2007?",options:["India","Pakistan","Australia","England"],answer:"India"},
{question:"Who has the fastest century in ODI cricket?",options:["AB de Villiers","Chris Gayle","Virat Kohli","Shahid Afridi"],answer:"AB de Villiers"},
{question:"Which cricketer is known as King Kohli?",options:["Rohit Sharma","Virat Kohli","KL Rahul","Hardik Pandya"],answer:"Virat Kohli"},
{question:"Who won the ICC Cricket World Cup 2019?",options:["New Zealand","England","India","Australia"],answer:"England"},
{question:"Which batsman scored 400 runs in a Test innings?",options:["Brian Lara","Sachin Tendulkar","Virender Sehwag","Ricky Ponting"],answer:"Brian Lara"},
{question:"Which country invented cricket?",options:["India","Australia","England","South Africa"],answer:"England"},
{question:"Who is the highest run scorer in ODI cricket?",options:["Virat Kohli","Ricky Ponting","Sachin Tendulkar","Kumar Sangakkara"],answer:"Sachin Tendulkar"},
{question:"Which bowler is famous for the 'Doosra' delivery?",options:["Shane Warne","Muttiah Muralitharan","Harbhajan Singh","Saqlain Mushtaq"],answer:"Saqlain Mushtaq"},
{question:"What does LBW stand for in cricket?",options:["Leg Before Wicket","Long Ball Wicket","Leg Behind Wicket","Last Ball Wicket"],answer:"Leg Before Wicket"},
{question:"Who is known as Mr. 360 in cricket?",options:["AB de Villiers","Virat Kohli","David Warner","Joe Root"],answer:"AB de Villiers"},
{question:"Which Indian player is known as the Wall?",options:["Rahul Dravid","VVS Laxman","Sourav Ganguly","Yuvraj Singh"],answer:"Rahul Dravid"}
];

/*function RandomQuestion(){

    // Set is used to store unique questions
    const data = new Set();

    // loop until set size becomes 5
    while(data.size != 5){

        // generate random index
        const index = Math.floor(Math.random() * 25);

        // add question object into set
        data.add(quesBank[index]);
    }

    // convert set into array
    return [...data];
}


// select form
const form = document.querySelector('form');


// store random 5 questions
const problem = RandomQuestion();


// object for storing correct answers
const original_answer = {};


// loop through every question object
problem.forEach((obj,index)=>{

    // create div
    const div_element = document.createElement('div');

    div_element.className = 'question';

    // store correct answer
    original_answer[`q${index+1}`] = obj['answer'];

    // create question paragraph
    const para = document.createElement('p');

    para.textContent = `${index+1}. ${obj['question']}`;

    // append paragraph into div
    div_element.appendChild(para);


    // create 4 options
    obj['options'].forEach((value)=>{

        // create label
        const label = document.createElement('label');

        // create input
        const input = document.createElement('input');

        input.type = "radio";

        input.name = `q${index+1}`;

        input.value = value;

        // append input and text into label
        label.appendChild(input);

        label.appendChild(document.createTextNode(value));

        // append label into div
        div_element.appendChild(label);

        // line break
        div_element.appendChild(document.createElement('br'));
    });

    // append div into form
    form.appendChild(div_element);
});


// create submit button
const button = document.createElement('button');

button.type = 'submit';

button.className = "submit-btn";

button.textContent = "Submit";


// append button into form
form.appendChild(button);


// form submit event
form.addEventListener('submit',(event)=>{

    // stop page refresh
    event.preventDefault();

    let result = 0;

    // check every answer
    const data = new FormData(form);

    for(let [key,value] of data.entries()){

        if(value === original_answer[key]){
            result++;
        }
    }

    // output result
    const out = document.getElementById('out');

    out.innerText = `${result} out of 5 is correct`;

    // reset form
    form.reset();
}); 

*/


// method 2


function RandomQuestion(){

    const temp = [...quesBank]; // ✅ fix (copy banayi)
    const arr = [];
    let length = temp.length;

    for ( let i = 0; i < 5; i++){

        const index = Math.floor(Math.random() * length);
        arr.push(temp[index]);

        // swap
        [temp[index], temp[length-1]] = [temp[length-1], temp[index]];
        length--;
        
    }
    return arr;
}

