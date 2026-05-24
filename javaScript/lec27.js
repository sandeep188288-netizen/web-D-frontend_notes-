// based on month: size 22 
const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries",
        "Taurus", "Gemini", "Cancer", "Leo",
        "Virgo", "Libra", "Scorpio", "Sagittarius"
];

// based on date, size 31 
const compliments = [
    "You have an amazing personality.",
    "Your smile can brighten anyone's day.",
    "You are incredibly talented.",
    "You have a beautiful soul.",
    "Your confidence is inspiring.",
    "You make people feel special.",
    "You are smarter than you think.",
    "Your kindness is your superpower.",
    "You bring positive energy everywhere.",
    "You are truly one of a kind.",
    "Your creativity is impressive.",
    "You have a golden heart.",
    "You are stronger than any challenge.",
    "Your presence makes everything better.",
    "You are naturally charming.",
    "You have an incredible sense of humor.",
    "You are full of great ideas.",
    "You look amazing today.",
    "You inspire people around you.",
    "You are very hardworking.",
    "You deserve all the happiness.",
    "You have excellent leadership qualities.",
    "You are a wonderful human being.",
    "Your positivity is contagious.",
    "You are destined for success.",
    "You make the world a better place.",
    "You are absolutely unforgettable.",
    "Your intelligence is admirable.",
    "You have a calm and beautiful mind.",
    "You are capable of achieving anything.",
    "You shine brighter than the stars."
];

// size: 20 
const victimCardCompliments = [
    "You always give your best to others, even when nobody notices.",
    "Your heart is too pure for this selfish world.",
    "You care deeply for people who often take you for granted.",
    "You always stand for others, even when nobody stands for you.",
    "You deserve the same love you give to everyone.",
    "People often fail to appreciate your genuine intentions.",
    "You always help others without expecting anything back.",
    "Your kindness is rare, but sadly not everyone values it.",
    "You silently handle pain while still making others smile.",
    "You forgive people even when they hurt you deeply.",
    "You always put others first, even at your own expense.",
    "Your loyalty is unmatched, even when others disappoint you.",
    "You keep supporting people who don't always support you back.",
    "You are the kind of person everyone needs but few deserve.",
    "You carry everyone's problems while hiding your own struggles.",
    "You often sacrifice your happiness just to keep others happy.",
    "Your efforts are bigger than the appreciation you receive.",
    "You stay kind even after being hurt multiple times.",
    "You always choose peace even when life is unfair to you.",
    "You give people endless chances because your heart is soft."
];

// size: 30 
const recommendations = [
    "Feed a street dog whenever you can.",
    "Spend more time with your parents.",
    "Wake up early and enjoy the morning peace.",
    "Drink enough water every day.",
    "Read at least 10 pages of a good book daily.",
    "Take care of your mental health.",
    "Exercise regularly to stay active and healthy.",
    "Help someone without expecting anything in return.",
    "Learn to forgive and move forward.",
    "Stay away from unnecessary negativity.",
    "Save money for your future goals.",
    "Travel to new places whenever possible.",
    "Practice gratitude every single day.",
    "Respect people regardless of their status.",
    "Spend less time comparing yourself to others.",
    "Take breaks and enjoy small moments in life.",
    "Listen more and speak thoughtfully.",
    "Plant a tree and care for nature.",
    "Call your loved ones more often.",
    "Avoid overthinking things you cannot control.",
    "Learn a new skill every year.",
    "Sleep properly and maintain a healthy routine.",
    "Keep your surroundings clean.",
    "Support local businesses and workers.",
    "Be kind to animals and birds.",
    "Write down your goals and work on them daily.",
    "Smile more often and spread positivity.",
    "Stay honest even when it's difficult.",
    "Donate clothes or food to people in need.",
    "Believe in yourself even during hard times."
]; 

// size: 20 
const predictions = [
    "You will become a crorepati in the future.",
    "A big success is waiting for you very soon.",
    "Your hard work will make you famous one day.",
    "You will achieve your dream lifestyle.",
    "A life-changing opportunity is coming your way.",
    "You will inspire many people in your journey.",
    "Financial growth will surprise you positively.",
    "You will travel to your dream destination.",
    "Your future business will become successful.",
    "You will make your family proud.",
    "A powerful and happy phase of life is ahead.",
    "You will meet people who truly value you.",
    "Your talent will bring you recognition.",
    "You will own a luxurious house one day.",
    "Your future looks bright and prosperous.",
    "You will achieve goals beyond your expectations.",
    "Happiness and peace will soon enter your life.",
    "You will become stronger after every challenge.",
    "Your future partner will bring positivity into your life.",
    "You are destined for a successful and meaningful life."
];

const form = document.getElementById('astroForm');


form.addEventListener('submit',(event)=>{

    event.preventDefault();

    const Name = document.getElementById('name').value;
    const SurName = document.getElementById('surname').value;
    const Day = Number(document.getElementById('day').value);
    const Month = Number(document.getElementById('month').value);
    const Year = Number(document.getElementById('year').value);

    const result = document.getElementById("result");

    const first_message = `Hello ${Name} ${SurName}`;
    // zodiac
    const second_message =
    `Your Zodiac sign is ${zodiacSigns[(Month-1)%12]}`;


    // compliment
    const third_message = compliments[(Day-1)%31];


    // random victim compliment
    let index = Math.floor(Math.random()*20);
    const fourth_message = victimCardCompliments[index];


    // recommendation
    index = (Name.length * SurName.length * Year) % 30;
    const fifth_message = recommendations[index];


    // prediction
    index = (Day * Month * Year) % 20;
    const sixth_message = predictions[index];

    result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} ${fifth_message} ${sixth_message}`;
})