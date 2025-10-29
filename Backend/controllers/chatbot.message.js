import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message = async(req, res)=>{
   try {
    const {text}=req.body;
    console.log(text)
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })

    //Data
    const botResponses={
"hello": "Hi, How I can help you!!",
"can we become friend": "Yes",
"how are you": "I'm just a bot, but I'm doing great! How about you?",
"what is your name": "I'm ChatBot, your virtual assistant.",
"who made you": "I was created by developers to help answer your questions.",
"tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
"what is the time": "I can't see a clock, but your device should know.",
"bye": "Goodbye! Have a great day.",
"thank you": "You're welcome!",
"I love you": "That's sweet! I'm here to help you anytime.",
"where are you from": "I live in the cloud — no rent, no bills!",
"what can you do": "I can chat with you, answer questions, and keep you company.",
"what is python": "Python is a popular high-level programming language known for its simplicity and readability.",
"what is java": "Java is a versatile, object-oriented programming language widely used for building applications.",
"what is c++": "C++ is an extension of C that supports object-oriented programming and is used in system/software development.",
"what is htmi": "HTML stands for HyperText Markup Language, used for structuring web pages.",
"what is css": "CSS stands for Cascading Style Sheets, used to style HTML elements.",
"what is javascript": "JavaScript is a programming language mainly used for web development to add interactivity.",
"what is sal": "SQL stands for Structured Query Language, used to manage and query databases.",
"what is data structure": "A data structure is a way of organizing and storing data efficiently.",
"what is algorithm": "An algorithm is a step-by-step procedure to solve a problem.",
"what is machine leorning": "Machine Learning is a branch of Al where systems learn from data and improve performance automatically.",
"what is ai": "Al stands for Artificial Intelligence - the simulation of human intelligence in machines.",
"who is prime minister of indio": "Narendra Modi is the current Prime Minister of Indio.",
"who is president of usa": "Joe Biden is the current President of the United States.",
"what is g20": "G20 is a group of 19 countries and the European Union for global economic cooperation.",
"what is olympics": "The Olympics is an international multi-sport event held every four years.",
"who is elon musk": "Elon Musk is the CEO of Tesia and Space, known for innovations in tech and space.",
"who is sundar pichai": "Sundar Pichai is the CEO of Google and Alphabet.",
"who is sotya nadella": "Satya Nodella is the CEO of Microsoft.",
"who is virat kohli": "Virat Kohli is a famous indian cricketer.",
"who is ms dhoni": "MS phoni is a former indian cricket captain known as 'Captain Cool'.",
"who is sachin tendulkar": "Sachin Tendulkar is known as the 'God of Cricket' from indio.",
"who won 2011 world cup": "India won the 2011 Cricket World Cup under MS Dhoni's captaincy.",
"who won 2023 cricket world cup": "Australia won the 2023 Cricket World Cup.",
"who is current icc chairman": "Greg Barclay is the current ICC chairman.",
"how many players in cricket team": "A cricket team has 11 players.",
"what is test cricket": "Test cricket is the longest format of the game, lasting up to 5 days.",
"what is square root of 16": "The square root of 16 is 4.",
"what is cube of 3": "The cube of 3 is 27.",
"what is pi value": "The value of it is approximately 3.14159.",
"what is factorial of 5": "Factorial of 5 is 120.",
"what is fibonacci series": "A series where each number is the sum of the two preceding numbers.",
"what is prime number": "A prime number is divisible only by 1 and itself.",
"what is even number": "An even number is divisible by 2.",
"what is odd number": "An odd number is not divisible by 2.",
"what is Icm": "LCM stands for Least Common Multiple.",
"what is hcf": "HCF stands for Highest Common Factor.",
"what is perimeter of square": "Perimeter of a square = 4 x side.",
"what is area of circle": "Area of a circle = n x r.",
"what is pythagores theorem": "In a right triangle: a' + b'= cl.",
"what is logarithm": "Logarithm is the inverse operation of exponentiation.",
"what is integration": "Integration is the process of finding the area under a curve.",
"what is differentiation": "Differentiation is the process of finding the rate of change.",
"tell me an interview question": "Tell me about yourselt.",
"common hr question": "Why should we hire you?",
"what is teamwork": "Teamwork is working togetner to achieve a common gooi.",
"what is leadership": "Leadership is guiding and motivating a team towards success.",
"what is communication skill": "The ability to convey ideas clearly and effectively.",
"what is problem solving": "The ability to analyze a problem and find effective solutions.",
"what is critical thinking": "Critical thinking is analyzing facts logically to form a Judgment.",
"what is time management": "The ability to use time efficiently to complete tasks.",
"what is coding interview": "A coding interview tests problem-solving and programming skills.",
"what is behavioral interview": "Behavioral interviews assess how you handled past situations.",
"how to introduce yourself": "Start with your name, background, skills, and goals.",
"what is resume": "A resume is a summary of your education, experience, and skills.",
"what is cover letter": "A cover letter is a personalized letter sent with a resume.",
"what is aptitude test": "An aptitude test measures logical reasoning and problem-solving ability.",
"what is technical round": "A technical round tests your subject knowledge and coding skills.",
"what is hr round": "HR round checks personality, communication, and cultural fit.",
"how to crack interview": "Prepare well, practice questions, and stay confident.",
"what is group discussion": "Group discussion tests communication, knowledge, and teamwork."
    }

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}