import { Injectable } from '@angular/core';

interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  correct?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private rrbQuestions: Question[] = [
      {
        id: 1,
        questionText: 'What is the boiling point of water?',
        options: ['90°C', '100°C', '110°C', '120°C'],
        correctAnswer: '100°C',
        correct: false
      },
      {
        id: 2,
        questionText: 'If the speed of an object is doubled, the Kinetic energy becomes?',
        options: ['Half', 'FourTimes', 'NoChanges', 'Double'],
        correctAnswer: 'FourTimes',
        correct: false
      },
      {
        id: 3,
        questionText: 'If 2 = 12, 3 = 36, 4 = 72, then 5 = ?',
        options: ['100', '120', '150', '200'],
        correctAnswer: '120',
        correct: false
      },
      {
        id: 4,
        questionText: 'What is the value of 7 factorial (7!)?',
        options: ['5040', '4030', '3020', '2010'],
        correctAnswer: '5040',
        correct: false
      },
      {
        id: 5,
        questionText: 'What is the value of π (pi) to two decimal places?',
        options: ['3.12', '3.14', '3.16', '3.18'],
        correctAnswer: '3.14',
        correct: false
      },
      {
        id: 6,
        questionText: 'Which gas is commonly known as laughing gas?',
        options: ['Nitrous Oxide', 'Carbon Dioxide', 'Oxygen', 'Hydrogen'],
        correctAnswer: 'Nitrous Oxide',
        correct: false
      },
      {
        id: 7,
        questionText: 'Which gas is most abundant in the Earth\'s atmosphere?',
        options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
        correctAnswer: 'Nitrogen',
        correct: false
      },
      {
        id: 8,
        questionText: 'Who is known as the Iron Man of India?',
        options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose'],
        correctAnswer: 'Sardar Patel',
        correct: false
      },
      {
        id: 9,
        questionText: 'What is the formula for the area of a circle?',
        options: ['πr²', '2πr', 'πd', 'πr'],
        correctAnswer: 'πr²',
        correct: false
      },
      {
        id: 10,
        questionText: 'If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?',
        options: ['Father', 'Brother', 'Uncle', 'Grandfather'],
        correctAnswer: 'Uncle',
        correct: false
      },
      {
        id: 11,
        questionText: 'Who won the FIDE world chess championship 2024?',
        options: ['Ding Liren', 'Gukesh Dommaraju', 'Praggnandhaa', 'Magnus Carlsen'],
        correctAnswer: 'Gukesh Dommaraju',
        correct: false
      },
      {
        id: 12,
        questionText: 'Which element is known as the King of Chemicals?',
        options: ['Sulfuric Acid', 'Hydrochloric Acid', 'Nitric Acid', 'Acetic Acid'],
        correctAnswer: 'Sulfuric Acid',
        correct: false
      },
      {
        id: 13,
        questionText: "If a pen costs Rs 10 and a notebook costs Rs 40, how much will 5 pens and 2 notebooks cost?",
        options: ["Rs 90", "Rs 100", "Rs 80", "Rs 70"],
        correctAnswer: "Rs 90",
        correct: false
      },
      {
        id: 14,
        questionText: 'What is the value of the expression (2³ - 2) - 1?',
        options: ['6', '5', '9', '12'],
        correctAnswer: '5',
        correct: false
      },
      {
        id: 15,
        questionText: 'Which is the longest river in the world?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        correctAnswer: 'Nile',
        correct: false
      },
      {
        id: 16,
        questionText: 'Which breakthrough technology was recognized in the 2025 Technology Awards?',
        options: ['Quantum Computing', 'Artificial Intelligence', 'Blockchain', '5G Technology'],
        correctAnswer: 'Quantum Computing',
        correct: false
      },
      {
        id: 17,
        questionText: 'Who wrote the national anthem of India?',
        options: ['Rabindranath Tagore', 'Bankim Chandra Chatterjee', 'Sarojini Naidu', 'Mahatma Gandhi'],
        correctAnswer: 'Rabindranath Tagore',
        correct: false
      },
      {
        id: 18,
        questionText: 'Which element has the atomic number 1?',
        options: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
        correctAnswer: 'Hydrogen',
        correct: false
      },
      {
        id: 19,
        questionText: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean',
        correct: false
      },
      {
        id: 20,
        questionText: 'Which chemical is used in the detection of blood stains?',
        options: ['Potassium chloride', 'Sodium Chloride', 'Luminol', 'Calcium carbonate'],
        correctAnswer: 'Diamond',
        correct: false
      },
      {
        id: 21,
        questionText: 'Who discovered penicillin?',
        options: ['Alexander Fleming', 'Marie Curie', 'Louis Pasteur', 'Isaac Newton'],
        correctAnswer: 'Alexander Fleming',
        correct: false
      },
      {
        id: 22,
        questionText: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Pb', 'Fe'],
        correctAnswer: 'Au',
        correct: false
      },
      {
        id: 23,
        questionText: 'What is the chemical symbol for Sodium?',
        options: ['Na', 'S', 'N', 'Si'],
        correctAnswer: 'Na',
        correct: false
      },
      {
        id: 24,
        questionText: 'Which planet is known as the Morning Star?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Venus',
        correct: false
      },
      {
        id: 25,
        questionText: 'Who was the first President of India?',
        options: ['Jawaharlal Nehru', 'Rajendra Prasad', 'Indira Gandhi', 'Sardar Patel'],
        correctAnswer: 'Rajendra Prasad',
        correct: false
      },
      {
        id: 26,
        questionText: 'What is the value of the expression 9 + 6 ÷ 3?',
        options: ['5', '7', '11', '15'],
        correctAnswer: '11',
        correct: false
      },
      {
        id: 27,
        questionText: 'What is the value of the expression 5²?',
        options: ['10', '15', '20', '25'],
        correctAnswer: '25',
        correct: false
      },
      {
        id: 28,
        questionText: 'Which is the smallest continent by land area?',
        options: ['Asia', 'Europe', 'Australia', 'Antarctica'],
        correctAnswer: 'Australia',
        correct: false
      },
      {
        id: 29,
        questionText: 'What is the square root of 144?',
        options: ['10', '11', '12', '13'],
        correctAnswer: '12',
        correct: false
      },
      {
        id: 30,
        questionText: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
        correct: false
      },
      {
        id: 31,
        questionText: 'Which is the largest desert in the world?',
        options: ['Sahara', 'Gobi', 'Kalahari', 'Arctic'],
        correctAnswer: 'Sahara',
        correct: false
      },
      {
        id: 32,
        questionText: 'In a certain code language, if "CAT" is written as "XZG", how will "DOG" be written?',
        options: ['WLT', 'WLR', 'XLT', 'XLR'],
        correctAnswer: 'WLT',
        correct: false
      },
      {
        id: 33,
        questionText: 'What is the formula for the volume of a cube?',
        options: ['s³', 's²', 's⁴', 's'],
        correctAnswer: 's³',
        correct: false
      },
      {
        id: 34,
        questionText: 'If 5 + 3 = 28, 7 + 2 = 63, and 6 + 4 = 210, what is 9 + 1?',
        options: ['90', '91', '99', '100'],
        correctAnswer: '90',
        correct: false
      },
      {
        id: 35,
        questionText: 'What is the value of the expression 2 + 2 ÷ 2?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        correct: false
      },
      {
        id: 36,
        questionText: 'What is the most common gas in the Earth\'s atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
        correctAnswer: 'Nitrogen',
        correct: false
      },
      {
        id: 37,
        questionText: 'What is the chemical formula for water?',
        options: ['H2O', 'CO2', 'O2', 'H2'],
        correctAnswer: 'H2O',
        correct: false
      },
      {
        id: 38,
        questionText: 'What is the value of the expression ((2 + 2 * 2 ) - 1 ?',
        options: ['8', '7', '4', '5'],
        correctAnswer: '5',
        correct: false
      },
      {
        id: 39,
        questionText: 'What is the only metal that is liquid at room temperature?',
        options: ['Gallium', 'Mercury', 'Lead', 'Tin'],
        correctAnswer: 'Mercury',
        correct: false
      },
      {
        id: 40,
        questionText: 'What is the longest bone in the human body?',
        options: ['Femur', 'Tibia', 'Humerus', 'Fibula'],
        correctAnswer: 'Femur',
        correct: false
      },
      {
        id: 41,
        questionText: 'Who was the first woman Prime Minister of India?',
        options: ['Indira Gandhi', 'Sonia Gandhi', 'Pratibha Patil', 'Sarojini Naidu'],
        correctAnswer: 'Indira Gandhi',
        correct: false
      },
      {
        id: 42,
        questionText: 'Which is the largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Jupiter',
        correct: false
      },
      {
        id: 43,
        questionText: 'What is the chemical symbol for Iron?',
        options: ['Ir', 'Fe', 'I', 'In'],
        correctAnswer: 'Fe',
        correct: false
      },
      {
        id: 44,
        questionText: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'Korea', 'Thailand'],
        correctAnswer: 'Japan',
        correct: false
      },
      {
        id: 45,
        questionText: 'What is the capital of Australia?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        correctAnswer: 'Canberra',
        correct: false
      },
      {
        id: 46,
        questionText: 'Who invented the telephone?',
        options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
        correctAnswer: 'Alexander Graham Bell',
        correct: false
      },
      {
        id: 47,
        questionText: 'What is the chemical formula for table salt?',
        options: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'],
        correctAnswer: 'NaCl',
        correct: false
      },
      {
        id: 48,
        questionText: 'Which planet is known as the Blue Planet?',
        options: ['Earth', 'Neptune', 'Uranus', 'Saturn'],
        correctAnswer: 'Earth',
        correct: false
      },
      {
        id: 49,
        questionText: 'What is the speed of light?',
        options: ['300,000 km/s', '150,000 km/s', '200,000 km/s', '250,000 km/s'],
        correctAnswer: '300,000 km/s',
        correct: false
      },
      {
        id: 50,
        questionText: 'Who is known as the Father of the Indian Constitution?',
        options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'B. R. Ambedkar', 'Sardar Patel'],
        correctAnswer: 'B. R. Ambedkar',
        correct: false
      },
      {
        id: 51,
        questionText: 'What is the chemical symbol for Potassium?',
        options: ['P', 'K', 'Pt', 'Po'],
        correctAnswer: 'K',
        correct: false
      },
      {
        id: 52,
        questionText: 'Which is the smallest planet in our solar system?',
        options: ['Mercury', 'Venus', 'Mars', 'Pluto'],
        correctAnswer: 'Mercury',
        correct: false
      },
      {
        id: 53,
        questionText: 'What is the capital of Canada?',
        options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
        correctAnswer: 'Ottawa',
        correct: false
      },
      {
        id: 54,
        questionText: 'Who discovered gravity?',
        options: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Nikola Tesla'],
        correctAnswer: 'Isaac Newton',
        correct: false
      },
      {
        id: 55,
        questionText: 'What is the chemical formula for carbon dioxide?',
        options: ['CO', 'CO2', 'C2O', 'C2O2'],
        correctAnswer: 'CO2',
        correct: false
      },
      {
        id: 56,
        questionText: 'Which planet is known as the Evening Star?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Venus',
        correct: false
      },
      {
        id: 57,
        questionText: 'What is the capital of Italy?',
        options: ['Rome', 'Milan', 'Naples', 'Venice'],
        correctAnswer: 'Rome',
        correct: false
      },
      {
        id: 58,
        questionText: 'Who invented the light bulb?',
        options: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'James Watt'],
        correctAnswer: 'Thomas Edison',
        correct: false
      },
      {
        id: 59,
        questionText: 'What is the chemical formula for methane?',
        options: ['CH4', 'C2H6', 'C3H8', 'C4H10'],
        correctAnswer: 'CH4',
        correct: false
      },
      {
        id: 60,
        questionText: 'Which planet is known as the Gas Giant?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctAnswer: 'Jupiter',
        correct: false
      },
      {
        id: 61,
        questionText: 'What is the capital of Australia?',
        options: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
        correctAnswer: 'Canberra',
        correct: false
      },
      {
        id: 62,
        questionText: 'Which organism is known as the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Endoplasmic Reticulum'],
        correctAnswer: 'Mitochondria',
        correct: false
      },
      {
        id: 63,
        questionText: 'Who is the author of the book "The Alchemist"?',
        options: ['Paulo Coelho', 'Haruki Murakami', 'Mark Twain', 'J.K. Rowling'],
        correctAnswer: 'Paulo Coelho',
        correct: false
      },
      {
        id: 64,
        questionText: 'Which planet is known for its rings?',
        options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
        correctAnswer: 'Saturn',
        correct: false
      },
      {
        id: 65,
        questionText: 'What is the chemical symbol for Iron?',
        options: ['Fe', 'Ir', 'I', 'Ar'],
        correctAnswer: 'Fe',
        correct: false
      },
      {
        id: 66,
        questionText: 'In which year did India gain independence?',
        options: ['1945', '1947', '1950', '1952'],
        correctAnswer: '1947',
        correct: false
      },
      {
        id: 67,
        questionText: 'Which is the smallest country in the world?',
        options: ['Vatican City', 'Monaco', 'San Marino', 'Nauru'],
        correctAnswer: 'Vatican City',
        correct: false
      },
      {
        id: 68,
        questionText: 'What is the primary language spoken in Brazil?',
        options: ['Spanish', 'English', 'Portuguese', 'French'],
        correctAnswer: 'Portuguese',
        correct: false
      },
      {
        id: 69,
        questionText: 'What is the hardest natural mineral?',
        options: ['Topaz', 'Diamond', 'Sapphire', 'Ruby'],
        correctAnswer: 'Diamond',
        correct: false
      },
      {
        id: 70,
        questionText: 'Which law states that energy cannot be created or destroyed?',
        options: ['Newton\'s First Law', 'Law of Conservation of Energy', 'Law of Thermodynamics', 'Ohm\'s Law'],
        correctAnswer: 'Law of Conservation of Energy',
        correct: false
      },
      {
        id: 71,
        questionText: 'What is the capital city of Japan?',
        options: ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima'],
        correctAnswer: 'Tokyo',
        correct: false
      },
      {
        id: 72,
        questionText: 'Which gas do plants primarily absorb from the atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide',
        correct: false
      },
      {
        id: 73,
        questionText: 'How many continents are there on Earth?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        correct: false
      },
      {
        id: 74,
        questionText: 'Which instrument is used to measure atmospheric pressure?',
        options: ['Thermometer', 'Barometer', 'Hygrometer', 'Anemometer'],
        correctAnswer: 'Barometer',
        correct: false
      },
      {
        id: 75,
        questionText: 'What type of animal is a Komodo dragon?',
        options: ['Mammal', 'Bird', 'Reptile', 'Fish'],
        correctAnswer: 'Reptile',
        correct: false
      },
      {
        id: 76,
        questionText: 'Which is the longest river in Africa?',
        options: ['Nile', 'Amazon', 'Congo', 'Zambezi'],
        correctAnswer: 'Nile',
        correct: false
      },
      {
        id: 77,
        questionText: 'What is the primary function of red blood cells?',
        options: ['Fight infections', 'Clot blood', 'Transport oxygen', 'Maintain blood pressure'],
        correctAnswer: 'Transport oxygen',
        correct: false
      },
      {
        id: 78,
        questionText: 'In economics, what does GDP stand for?',
        options: ['Gross Domestic Product', 'Gross Development Product', 'General Domestic Price', 'Gross Direct Profit'],
        correctAnswer: 'Gross Domestic Product',
        correct: false
      },
      {
        id: 79,
        questionText: 'Which is the tallest mountain in the world?',
        options: ['K2', 'Kangchenjunga', 'Makalu', 'Mount Everest'],
        correctAnswer: 'Mount Everest',
        correct: false
      },
      {
        id: 80,
        questionText: 'Which planet is closest to the Sun?',
        options: ['Mars', 'Earth', 'Mercury', 'Venus'],
        correctAnswer: 'Mercury',
        correct: false
      },
      {
        id: 81,
        questionText: 'If 2 = 12, 3 = 36, 4 = 72, then 5 = ?',
        options: ['100', '120', '150', '200'],
        correctAnswer: '120',
        correct: false
      },
      {
        id: 82,
        questionText: 'Which number should come next in the following series? 7, 14, 28, 56, __',
        options: ['100', '112', '120', '150'],
        correctAnswer: '112',
        correct: false
      },
      {
        id: 83,
        questionText: 'Find the missing number: 5, 10, 20, __, 80',
        options: ['30', '40', '50', '60'],
        correctAnswer: '40',
        correct: false
      },
      {
        id: 84,
        questionText: 'If A is to B and B is to C, then A is to ____?',
        options: ['D', 'C', 'E', 'None'],
        correctAnswer: 'C',
        correct: false
      },
      {
        id: 85,
        questionText: 'In a certain code, if "GREAT" is coded as "HRSBS", how is "BAD" coded?',
        options: ['DCE', 'DDL', 'CAD', 'CBE'],
        correctAnswer: 'CBE',
        correct: false
      },
      {
        id: 86,
        questionText: 'Which vitamin is produced when a person is exposed to sunlight?',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correctAnswer: 'Vitamin D',
        correct: false
      },
      {
        id: 87,
        questionText: 'What part of the plant conducts photosynthesis?',
        options: ['Root', 'Stem', 'Leaf', 'Flower'],
        correctAnswer: 'Leaf',
        correct: false
      },
      {
        id: 88,
        questionText: 'What is the main gas found in the air we breathe?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Nitrogen',
        correct: false
      },
      {
        id: 89,
        questionText: 'What is the freezing point of water?',
        options: ['0°C', '32°C', '100°C', '212°C'],
        correctAnswer: '0°C',
        correct: false
      },
      {
        id: 90,
        questionText: 'Which of the following is a non-renewable resource?',
        options: ['Solar energy', 'Wind energy', 'Coal', 'Tidal energy'],
        correctAnswer: 'Coal',
        correct: false
      },
      {
        id: 91,
        questionText: 'Who won the 2025 FIFA Women\'s World Cup?',
        options: ['USA', 'Germany', 'Japan', 'Brazil'],
        correctAnswer: 'USA',
        correct: false
      },
      {
        id: 92,
        questionText: 'Which country hosted the 2025 UN Climate Change Conference?',
        options: ['UK', 'Brazil', 'India', 'Canada'],
        correctAnswer: 'India',
        correct: false
      },
      {
        id: 93,
        questionText: 'In 2025, which Indian state launched an initiative to achieve 100% literacy?',
        options: ['Kerala', 'Tamil Nadu', 'Uttar Pradesh', 'Maharashtra'],
        correctAnswer: 'Kerala',
        correct: false
      },
      {
        id: 94,
        questionText: 'Which organization awarded the 2025 Nobel Prize in Literature?',
        options: ['American Academy of Arts and Letters', 'The Royal Swedish Academy', 'The British Academy', 'The Academy of American Poets'],
        correctAnswer: 'The Royal Swedish Academy',
        correct: false
      },
      {
        id: 95,
        questionText: 'Which country hosted the 2024 Summer olympics?',
        options: ['Japan', 'China', 'France', 'Norway'],
        correctAnswer: 'France',
        correct: false
      },
      {
        id: 96,
        questionText: 'If 2x + 3 = 11, what is the value of x?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        correct: false
      },
      {
        id: 97,
        questionText: 'Solve for x: 5x - 7 = 3x + 9',
        options: ['4', '6', '8', '10'],
        correctAnswer: '8',
        correct: false
      },
      {
        id: 98,
        questionText: 'If the equation 3x + 4 = 10 holds true, what is the value of x?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        correct: false
      },
      {
        id: 99,
        questionText: 'Which of the following represents the expression for the area A of a rectangle with length l and width w?',
        options: ['l + w', 'lw', 'l - w', '2(l + w)'],
        correctAnswer: 'lw',
        correct: false
      },
      {
        id: 100,
        questionText: 'If the roots of the quadratic equation ax^2 + bx + c = 0 are equal, what is the value of the discriminant?',
        options: ['b^2 - 4ac = 0', 'b^2 - 4ac > 0', 'b^2 - 4ac < 0', 'None of the above'],
        correctAnswer: 'b^2 - 4ac = 0',
        correct: false
      },
      {
        id: 101,
        questionText: "What is the pH level of pure water at 25°C?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
        correct: false
      },
      {
        id: 102,
        questionText: "Which vitamin is known as ascorbic acid?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: "Vitamin C",
        correct: false
      },
      {
        id: 103,
        questionText: "What is the primary function of red blood cells?",
        options: ["Transport carbon dioxide", "Transport oxygen", "Fight infections", "Clotting blood"],
        correctAnswer: "Transport oxygen",
        correct: false
      },
      {
        id: 104,
        questionText: "In physics, what term describes the rate of change of momentum?",
        options: ["Velocity", "Acceleration", "Force", "Mass"],
        correctAnswer: "Force",
        correct: false
      },
      {
        id: 105,
        questionText: "What is the chemical formula for ozone?",
        options: ["O₂", "O₃", "O₄", "O"],
        correctAnswer: "O₃",
        correct: false
      },
      {
        id: 106,
        questionText: "Which gas is produced during photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
        correctAnswer: "Oxygen",
        correct: false
      },
      {
        id: 107,
        questionText: "What is the powerhouse of the cell known as?",
        options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
        correctAnswer: "Mitochondria",
        correct: false
      },
      {
        id: 108,
        questionText: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: "Albert Einstein",
        correct: false
      },
      {
        id: 109,
        questionText: "What is the function of the endocrine system?",
        options: ["Digestion", "Respiration", "Hormone production", "Blood circulation"],
        correctAnswer: "Hormone production",
        correct: false
      },
      {
        id: 110,
        questionText: "What is the boiling point of water at sea level in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C",
        correct: false
      },
      {
        id: 111,
        questionText: "If the ratio of two numbers is 2:3 and their sum is 40, what are the two numbers?",
        options: ["16 and 24", "10 and 30", "12 and 28", "20 and 20"],
        correctAnswer: "16 and 24",
        correct: false
      },
      {
        id: 112,
        questionText: "What is the value of 12^2 - 8^2?",
        options: ["48", "80", "64", "49"],
        correctAnswer: "80",
        correct: false
      },
      {
        id: 113,
        questionText: "Solve for x: 3x + 7 = 22.",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        correct: false
      },
      {
        id: 114,
        questionText: "What is the area of a triangle with a base of 10 cm and a height of 5 cm?",
        options: ["25 cm²", "50 cm²", "30 cm²", "40 cm²"],
        correctAnswer: "25 cm²",
        correct: false
      },
      {
        id: 115,
        questionText: "If a percentage increase of a number is 25% and the original number is 80, what is the new number?",
        options: ["90", "100", "110", "120"],
        correctAnswer: "100",
        correct: false
      },
      {
        id: 116,
        questionText: "What is the least common multiple (LCM) of 12 and 15?",
        options: ["30", "60", "120", "45"],
        correctAnswer: "60",
        correct: false
      },
      {
        id: 117,
        questionText: "The square root of which number is 7?",
        options: ["49", "50", "48", "56"],
        correctAnswer: "49",
        correct: false
      },
      {
        id: 118,
        questionText: "If a train travels at a speed of 60 km/h, how long will it take to cover 180 km?",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"],
        correctAnswer: "3 hours",
        correct: false
      },
      {
        id: 119,
        questionText: "If the interest on a sum of money after 3 years is Rs 600 at 10% per annum, what is the principal amount?",
        options: ["Rs 2000", "Rs 1800", "Rs 1500", "Rs 1750"],
        correctAnswer: "Rs 2000",
        correct: false
      },
      {
        id: 120,
        questionText: "Simplify: 5(2x - 3) + 3(4 - x).",
        options: ["7x - 9", "7x + 9", "5x - 9", "x + 9"],
        correctAnswer: "7x - 9",
        correct: false
      },
      {
        id: 121,
        questionText: "If all Bloogs are Zogs and some Zogs are Lops, are all Bloogs definitely Lops?",
        options: ["Yes", "No", "Sometimes", "Uncertain"],
        correctAnswer: "No",
        correct: false
      },
      {
        id: 122,
        questionText: "If a clock shows 3:15, what is the angle between the hour and the minute hand?",
        options: ["45 degrees", "52.5 degrees", "75 degrees", "90 degrees"],
        correctAnswer: "52.5 degrees",
        correct: false
      },
      {
        id: 123,
        questionText: "Which number does not belong in this series: 2, 3, 5, 7, 10, 11?",
        options: ["10", "3", "5", "11"],
        correctAnswer: "10",
        correct: false
      },
      {
        id: 124,
        questionText: "How many times can you subtract 10 from 100?",
        options: ["100", "10", "1", "0"],
        correctAnswer: "1",
        correct: false
      },
      {
        id: 125,
        questionText: "What is the next number in the series: 2, 4, 8, 16, ...?",
        options: ["32", "24", "40", "20"],
        correctAnswer: "32",
        correct: false
      },
      {
        id: 126,
        questionText: "Complete the analogy: Hand is to glove as foot is to _____?",
        options: ["Shoe", "Sock", "Sandals", "Boot"],
        correctAnswer: "Sock",
        correct: false
      },
      {
        id: 127,
        questionText: "If A is taller than B and B is taller than C, who is the shortest?",
        options: ["A", "B", "C", "Cannot be determined"],
        correctAnswer: "C",
        correct: false
      },
      {
        id: 128,
        questionText: "Which word is similar to 'LETHARGIC'?",
        options: ["Energetic", "Active", "Sluggish", "Busy"],
        correctAnswer: "Sluggish",
        correct: false
      },
      {
        id: 129,
        questionText: "In a certain code, if 'CAT' is coded as '3120', how is 'DOG' coded in the same code language?",
        options: ["4157", "3247", "2041", "5031"],
        correctAnswer: "4157",
        correct: false
      },
      {
        id: 130,
        questionText: "If all Gators are Monsters and some Monsters are Witches, which statement is true?",
        options: ["Some Gators are Witches", "No Gators are Witches", "All Witches are Gators", "Some Monsters are Gators"],
        correctAnswer: "Some Gators are Witches",
        correct: false
      },
      {
        id: 131,
        questionText: "If K = 3, L = 6, and M = 9, what is the value of (K + L + M) ÷ 3?",
        options: ["6", "9", "8", "7"],
        correctAnswer: "6",
        correct: false
      },
      {
        id: 132,
        questionText: "What is the result of 8! / 6!?",
        options: ["56", "64", "7", "8"],
        correctAnswer: "56",
        correct: false
      },
      {
        id: 133,
        questionText: "If the angles of a triangle are in the ratio of 2:3:4, find the angles.",
        options: ["40°, 60°, 80°", "30°, 60°, 90°", "20°, 50°, 70°", "45°, 45°, 90°"],
        correctAnswer: "40°, 60°, 80°",
        correct: false
      },
      {
        id: 134,
        questionText: "What is the cube of 3?",
        options: ["9", "27", "18", "6"],
        correctAnswer: "27",
        correct: false
      },
      {
        id: 135,
        questionText: "Which one of the following is least like the others: Dog, Cat, Mouse, Car?",
        options: ["Dog", "Cat", "Mouse", "Car"],
        correctAnswer: "Car",
        correct: false
      },
      {
        id: 136,
        questionText: "In a class of 40 students, 25 are boys. What percentage of the class are girls?",
        options: ["37.5%", "50%", "62.5%", "25%"],
        correctAnswer: "37.5%",
        correct: false
      },
      {
        id: 137,
        questionText: "If P is 20% of Q and Q is 50% of R, what is P as a percentage of R?",
        options: ["20%", "10%", "15%", "25%"],
        correctAnswer: "10%",
        correct: false
      },
      {
        id: 138,
        questionText: "How many sides does a heptagon have?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        correct: false
      },
      {
        id: 139,
        questionText: "If a pen costs Rs 10 and a notebook costs Rs 40, how much will 5 pens and 2 notebooks cost?",
        options: ["Rs 90", "Rs 100", "Rs 80", "Rs 70"],
        correctAnswer: "Rs 90",
        correct: false
      },
      {
        id: 140,
        questionText: "In the sequence 1, 4, 9, 16, what is the next number?",
        options: ["25", "20", "30", "24"],
        correctAnswer: "25",
        correct: false
      },
      {
        id: 141,
        questionText: "If A is twice as old as B and B is 10 years younger than C, what is C’s age if A is 30?",
        options: ["30 years", "25 years", "35 years", "40 years"],
        correctAnswer: "25 years",
        correct: false
      },
      {
        id: 142,
        questionText: "If all P are Q and all Q are R, then what can be inferred?",
        options: ["All P are R", "No P are R", "Some P are R", "Some Q are R"],
        correctAnswer: "All P are R",
        correct: false
      },
      {
        id: 143,
        questionText: "A man is 2 years older than his wife. If the wife is represented by W, how old is the man?",
        options: ["W", "W + 2", "W - 2", "2W"],
        correctAnswer: "W + 2",
        correct: false
      },
      {
        id: 144,
        questionText: "If it takes 10 men 10 days to build a wall, how long will it take 5 men to build the same wall?",
        options: ["10 days", "20 days", "15 days", "30 days"],
        correctAnswer: "20 days",
        correct: false
      },
      {
        id: 145,
        questionText: "A sequence is given as follows: 3, 6, 11, 18, __?",
        options: ["27", "30", "25", "20"],
        correctAnswer: "27",
        correct: false
      },
      {
        id: 146,
        questionText: "How many ways can the letters of the word 'MATH' be arranged?",
        options: ["12 ways", "24 ways", "6 ways", "36 ways"],
        correctAnswer: "24 ways",
        correct: false
      },
      {
        id: 147,
        questionText: "If the first day of the year 2023 was a Sunday, what day of the week will it be on December 31, 2023?",
        options: ["Saturday", "Sunday", "Monday", "Tuesday"],
        correctAnswer: "Sunday",
        correct: false
      },
      {
        id: 148,
        questionText: "What is the greatest common divisor (GCD) of 48 and 180?",
        options: ["6", "12", "24", "36"],
        correctAnswer: "12",
        correct: false
      },
      {
        id: 149,
        questionText: "What is the next prime number after 10?",
        options: ["11", "13", "17", "14"],
        correctAnswer: "11",
        correct: false
      },
      {
        id: 150,
        questionText: "What is 15% of 200?",
        options: ["30", "25", "40", "35"],
        correctAnswer: "30",
        correct: false
      },
      {
        id: 151,
        questionText: "Who is the current Prime Minister of India as of 2025?",
        options: ["Rahul Gandhi", "Narendra Modi", "Arvind Kejriwal", "Amit Shah"],
        correctAnswer: "Narendra Modi",
        correct: false
      },
      {
        id: 152,
        questionText: "Which country hosted the 2022 FIFA World Cup?",
        options: ["Brazil", "Qatar", "Russia", "Germany"],
        correctAnswer: "Qatar",
        correct: false
      },
      {
        id: 153,
        questionText: "What is the capital of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        correctAnswer: "Canberra",
        correct: false
      },
      {
        id: 154,
        questionText: "Which organization won the Nobel Peace Prize in 2022?",
        options: ["United Nations", "World Health Organization", "International Committee of the Red Cross", "World Food Program"],
        correctAnswer: "World Food Program",
        correct: false
      },
      {
        id: 155,
        questionText: "In which year did India gain independence?",
        options: ["1945", "1947", "1950", "1965"],
        correctAnswer: "1947",
        correct: false
      },
      {
        id: 156,
        questionText: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        correct: false
      },
      {
        id: 157,
        questionText: "What is the chemical symbol for the element Gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au",
        correct: false
      },
      {
        id: 158,
        questionText: "Which gas do plants absorb from the atmosphere for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
        correct: false
      },
      {
        id: 159,
        questionText: "What is the powerhouse of the cell known as?",
        options: ["Ribosome", "Nucleus", "Mitochondria", "Chloroplast"],
        correctAnswer: "Mitochondria",
        correct: false
      },
      {
        id: 160,
        questionText: "Which is the smallest continent by area?",
        options: ["Asia", "Australia", "Africa", "Europe"],
        correctAnswer: "Australia",
        correct: false
      },
      {
        id: 161,
        questionText: "If A is taller than B and B is taller than C, who is the shortest?",
        options: ["A", "B", "C", "Cannot be determined"],
        correctAnswer: "C",
        correct: false
      },
      {
        id: 162,
        questionText: "If some roses are flowers and all flowers are plants, what can be concluded?",
        options: ["Some roses are plants", "All roses are plants", "No roses are plants", "Some plants are not roses"],
        correctAnswer: "Some roses are plants",
        correct: false
      },
      {
        id: 163,
        questionText: "In a class of 50 students, if 30 are boys, how many are girls?",
        options: ["20", "25", "15", "30"],
        correctAnswer: "20",
        correct: false
      },
      {
        id: 164,
        questionText: "What is the total number of degrees in a triangle?",
        options: ["180", "360", "90", "270"],
        correctAnswer: "180",
        correct: false
      },
      {
        id: 165,
        questionText: "Which branch of science deals with the study of living organisms?",
        options: ["Physics", "Chemistry", "Biology", "Geology"],
        correctAnswer: "Biology",
        correct: false
      },
      {
        id: 166,
        questionText: "Which chemical element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        correctAnswer: "Hydrogen",
        correct: false
      },
      {
        id: 167,
        questionText: "Which is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        correctAnswer: "Blue Whale",
        correct: false
      },
      {
        id: 168,
        questionText: "Which of the following is a non-renewable resource?",
        options: ["Solar Energy", "Wind Energy", "Natural Gas", "Hydropower"],
        correctAnswer: "Natural Gas",
        correct: false
      },
      {
        id: 169,
        questionText: "What part of the plant is responsible for photosynthesis?",
        options: ["Roots", "Stem", "Leaves", "Flowers"],
        correctAnswer: "Leaves",
        correct: false
      },
      {
        id: 170,
        questionText: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "Korea", "Thailand"],
        correctAnswer: "Japan",
        correct: false
      },
      {
        id: 171,
        questionText: "Which ancient civilization is known for building pyramids?",
        options: ["Mesopotamia", "Egyptian", "Indus Valley", "Chinese"],
        correctAnswer: "Egyptian",
        correct: false
      },
      {
        id: 172,
        questionText: "Which gas is responsible for global warming?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: "Carbon Dioxide",
        correct: false
      },
      {
        id: 173,
        questionText: "If all birds lay eggs and some birds can fly, what can we conclude?",
        options: ["All flying creatures lay eggs", "Some flying creatures do not lay eggs", "Some birds do not lay eggs", "All birds are flying creatures"],
        correctAnswer: "Some birds can fly",
        correct: false
      },
      {
        id: 174,
        questionText: "What is the function of the heart?",
        options: ["Digestion", "Respiration", "Pumping blood", "Excretion"],
        correctAnswer: "Pumping blood",
        correct: false
      },
      {
        id: 175,
        questionText: "Which planet is closest to the sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        correctAnswer: "Mercury",
        correct: false
      },
      {
        id: 176,
        questionText: "Which of the following is a noble gas?",
        options: ["Hydrogen", "Helium", "Nitrogen", "Oxygen"],
        correctAnswer: "Helium",
        correct: false
      },
      {
        id: 177,
        questionText: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correctAnswer: "Nitrogen",
        correct: false
      },
      {
        id: 178,
        questionText: "Which organ in the human body is primarily responsible for detoxification?",
        options: ["Heart", "Kidney", "Liver", "Lungs"],
        correctAnswer: "Liver",
        correct: false
      },
      {
        id: 179,
        questionText: "In reasoning, if a car is to a road, a train is to what?",
        options: ["Bridge", "Railway", "Air", "Station"],
        correctAnswer: "Railway",
        correct: false
      },
      {
        id: 180,
        questionText: "What year did the Titanic sink?",
        options: ["1912", "1920", "1905", "1898"],
        correctAnswer: "1912",
        correct: false
      },
      {
        id: 181,
        questionText: "Which vitamin is produced when a person is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"],
        correctAnswer: "Vitamin D",
        correct: false
      },
      {
        id: 182,
        questionText: "What is the primary component of the Earth’s crust?",
        options: ["Oxygen", "Silicon", "Iron", "Aluminum"],
        correctAnswer: "Silicon",
        correct: false
      },
      {
        id: 183,
        questionText: "Which of the following is a renewable resource?",
        options: ["Coal", "Plastic", "Solar Energy", "Natural Gas"],
        correctAnswer: "Solar Energy",
        correct: false
      },
      {
        id: 184,
        questionText: "What is the freezing point of water in Celsius?",
        options: ["0°C", "100°C", "32°C", "-32°C"],
        correctAnswer: "0°C",
        correct: false
      },
      {
        id: 185,
        questionText: "If two pencils cost 8 rupees, how much do 5 pencils cost?",
        options: ["20 rupees", "15 rupees", "25 rupees", "10 rupees"],
        correctAnswer: "20 rupees",
        correct: false
      },
      {
        id: 186,
        questionText: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        correctAnswer: "Delhi",
        correct: false
      },
      {
        id: 187,
        questionText: "Which phenomenon explains the downward movement of water towards the sea?",
        options: ["Evaporation", "Precipitation", "Gravity", "Infiltration"],
        correctAnswer: "Gravity",
        correct: false
      },
      {
        id: 188,
        questionText: "What is the main gas found in the sun?",
        options: ["Hydrogen", "Helium", "Carbon Dioxide", "Oxygen"],
        correctAnswer: "Hydrogen",
        correct: false
      },
      {
        id: 189,
        questionText: "Which animal is known as the King of the Jungle?",
        options: ["Elephant", "Lion", "Tiger", "Bear"],
        correctAnswer: "Lion",
        correct: false
      },
      {
        id: 190,
        questionText: "Which of the following is a non-renewable energy source?",
        options: ["Wind", "Solar", "Natural Gas", "Hydroelectric"],
        correctAnswer: "Natural Gas",
        correct: false
      },
      {
        id: 191,
        questionText: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correctAnswer: "Diamond",
        correct: false
      },
      {
        id: 192,
        questionText: "Which scientist is known for the theory of relativity?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
        correctAnswer: "Albert Einstein",
        correct: false
      },
      {
        id: 193,
        questionText: "If a clock shows 3:00, what is the angle between the hour and minute hands?",
        options: ["90 degrees", "180 degrees", "45 degrees", "135 degrees"],
        correctAnswer: "90 degrees",
        correct: false
      },
      {
        id: 194,
        questionText: "In which month is Independence Day celebrated in the USA?",
        options: ["June", "July", "August", "September"],
        correctAnswer: "July",
        correct: false
      },
      {
        id: 195,
        questionText: "Which nutrient is primarily responsible for muscle growth?",
        options: ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
        correctAnswer: "Proteins",
        correct: false
      },
      {
        id: 196,
        questionText: "Which two countries share the longest international border?",
        options: ["USA and Canada", "Brazil and Argentina", "India and Bangladesh", "Russia and China"],
        correctAnswer: "USA and Canada",
        correct: false
      },
      {
        id: 197,
        questionText: "Which of the following is considered a primary color?",
        options: ["Green", "Yellow", "Blue", "Purple"],
        correctAnswer: "Blue",
        correct: false
      },
      {
        id: 198,
        questionText: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Henry Ford"],
        correctAnswer: "Alexander Graham Bell",
        correct: false
      },
      {
        id: 199,
        questionText: "How many bones are there in the adult human body?",
        options: ["206", "205", "201", "210"],
        correctAnswer: "206",
        correct: false
      },
      {
        id: 200,
        questionText: "What type of organism is a mushroom?",
        options: ["Plant", "Animal", "Fungi", "Bacteria"],
        correctAnswer: "Fungi",
        correct: false
      }
  ];
  public rrbUserKey: string = "";
  public readonly rrbUserKeys: string[] = [
    'key1234', 'key2345', 'key3456', 'key4567', 'key5678', 
    'key6789', 'key7890', 'key8901', 'key9012', 'key0123'
  ];

  constructor() { }
  getQuestions(examNumber: any): Question[] {
    const startIndex = (examNumber - 1) * 20;
    const endIndex = startIndex + 20;
    return this.rrbQuestions.slice(startIndex, endIndex);
  }
}
