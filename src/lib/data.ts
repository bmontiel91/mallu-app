import { Lesson, LearnCard, Exercise, SubTrack } from "./types";

export const trackNames: Record<string, { name: string; icon: string; color: string }> = {
  languages: { name: "Idiomas", icon: "🌍", color: "#a855f7" },
  programming: { name: "Programación", icon: "💻", color: "#3b82f6" },
  cooking: { name: "Cocina", icon: "🍳", color: "#f59e0b" },
};

export const languageSubTracks: Record<string, { name: string; icon: string }> = {
  english: { name: "Inglés", icon: "🇬🇧" },
  italian: { name: "Italiano", icon: "🇮🇹" },
  japanese: { name: "Japonés", icon: "🇯🇵" },
  hiragana: { name: "Hiragana", icon: "あ" },
  kanji: { name: "Kanji", icon: "漢" },
  korean: { name: "Coreano", icon: "🇰🇷" },
  hangul: { name: "Hangul", icon: "한" },
  german: { name: "Alemán", icon: "🇩🇪" },
};

export const programmingSubTracks: Record<string, { name: string; icon: string }> = {
  javascript: { name: "JavaScript", icon: "🟨" },
  python: { name: "Python", icon: "🐍" },
  "html-css": { name: "HTML & CSS", icon: "🎨" },
  r: { name: "R", icon: "📊" },
};

export const cookingSubTracks: Record<string, { name: string; icon: string }> = {
  fundamentals: { name: "Fundamentos", icon: "🔪" },
  recipes: { name: "Recetas", icon: "📖" },
  plates: { name: "Platos", icon: "🍽️" },
};


const englishLessons: Lesson[] = [
    {
      "id": "english-1",
      "track": "languages",
      "subTrack": "english",
      "title": "Saludos básicos",
      "description": "Aprende los saludos fundamentales en inglés",
      "icon": "👋",
      "xp": 30,
      "learnCards": [
        {
          "id": "en1-l1",
          "word": "Hello",
          "translation": "Hola",
          "example": "Hello, how are you?"
        },
        {
          "id": "en1-l2",
          "word": "Goodbye",
          "translation": "Adiós",
          "example": "Goodbye, see you later!"
        },
        {
          "id": "en1-l3",
          "word": "Thank you",
          "translation": "Gracias",
          "example": "Thank you very much."
        },
        {
          "id": "en1-l4",
          "word": "Please",
          "translation": "Por favor",
          "example": "Please, come in."
        }
      ],
      "exercises": [
        {
          "id": "en1-e1",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Hola",
            "Adiós",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Hola",
          "explanation": "\"Hello\" significa \"Hola\".",
          "promptExtra": "Hello"
        },
        {
          "id": "en1-e2",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Hola",
            "Adiós",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Adiós",
          "explanation": "\"Goodbye\" significa \"Adiós\".",
          "promptExtra": "Goodbye"
        },
        {
          "id": "en1-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"hola\" en inglés?",
          "options": [
            "Hello",
            "Goodbye",
            "Please",
            "Thank you"
          ],
          "correctAnswer": "Hello",
          "explanation": "\"Hello\" es la forma de saludar en inglés."
        },
        {
          "id": "en1-e4",
          "type": "select",
          "prompt": "¿Cómo se dice \"gracias\" en inglés?",
          "options": [
            "Hello",
            "Goodbye",
            "Please",
            "Thank you"
          ],
          "correctAnswer": "Thank you",
          "explanation": "\"Thank you\" significa \"Gracias\"."
        },
        {
          "id": "en1-e5",
          "type": "select",
          "prompt": "¿Qué significa \"Please\"?",
          "options": [
            "Hola",
            "Adiós",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Por favor",
          "explanation": "\"Please\" se usa para pedir algo educadamente."
        },
        {
          "id": "en1-e6",
          "type": "complete",
          "prompt": "Completa: Th___ you (gracias)",
          "options": [
            "ank",
            "ink",
            "onk",
            "enk"
          ],
          "correctAnswer": "ank",
          "explanation": "\"Thank you\" es la forma correcta.",
          "promptExtra": "ank"
        },
        {
          "id": "en1-e7",
          "type": "complete",
          "prompt": "Completa: Good___ (adiós)",
          "options": [
            "bye",
            "day",
            "bye!",
            "bay"
          ],
          "correctAnswer": "bye",
          "explanation": "\"Goodbye\" se escribe junto, sin espacio.",
          "promptExtra": "bye"
        },
        {
          "id": "en1-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "Thank",
            "you",
            "very",
            "much"
          ],
          "correctAnswer": "Thank you very much",
          "explanation": "\"Thank you very much\" = \"Muchas gracias\"."
        }
      ]
    },
    {
      "id": "english-2",
      "track": "languages",
      "subTrack": "english",
      "title": "Presentaciones",
      "description": "Cómo presentarte correctamente en inglés",
      "icon": "🙋",
      "xp": 40,
      "learnCards": [
        {
          "id": "en2-l1",
          "word": "My name is...",
          "translation": "Mi nombre es...",
          "example": "My name is Anna."
        },
        {
          "id": "en2-l2",
          "word": "I am...",
          "translation": "Yo soy...",
          "example": "I am a student."
        },
        {
          "id": "en2-l3",
          "word": "Nice to meet you",
          "translation": "Mucho gusto",
          "example": "Nice to meet you, John."
        },
        {
          "id": "en2-l4",
          "word": "How are you?",
          "translation": "¿Cómo estás?",
          "example": "Hello, how are you?"
        }
      ],
      "exercises": [
        {
          "id": "en2-e1",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "Mi nombre es...",
            "Yo soy...",
            "Mucho gusto",
            "¿Cómo estás?"
          ],
          "correctAnswer": "Mi nombre es...",
          "explanation": "\"My name is...\" = \"Mi nombre es...\".",
          "promptExtra": "My name is..."
        },
        {
          "id": "en2-e2",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "Mi nombre es...",
            "Yo soy...",
            "Mucho gusto",
            "¿Cómo estás?"
          ],
          "correctAnswer": "Mucho gusto",
          "explanation": "\"Nice to meet you\" = \"Mucho gusto\".",
          "promptExtra": "Nice to meet you"
        },
        {
          "id": "en2-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"Yo soy...\" en inglés?",
          "options": [
            "I am...",
            "My name is...",
            "Nice to meet you",
            "How are you?"
          ],
          "correctAnswer": "I am...",
          "explanation": "\"I am...\" equivale a \"Yo soy...\"."
        },
        {
          "id": "en2-e4",
          "type": "select",
          "prompt": "¿Qué significa \"How are you?\"?",
          "options": [
            "Mi nombre es",
            "Mucho gusto",
            "¿Cómo estás?",
            "Yo soy"
          ],
          "correctAnswer": "¿Cómo estás?",
          "explanation": "\"How are you?\" es un saludo que significa \"¿Cómo estás?\"."
        },
        {
          "id": "en2-e5",
          "type": "select",
          "prompt": "¿Cómo respondes a \"Nice to meet you\"?",
          "options": [
            "Nice to meet you too",
            "I am fine",
            "My name is...",
            "Goodbye"
          ],
          "correctAnswer": "Nice to meet you too",
          "explanation": "La respuesta educada es \"Nice to meet you too\"."
        },
        {
          "id": "en2-e6",
          "type": "complete",
          "prompt": "Completa: I ___ a student (Yo soy estudiante)",
          "options": [
            "am",
            "is",
            "are",
            "be"
          ],
          "correctAnswer": "am",
          "explanation": "Con \"I\" siempre se usa \"am\".",
          "promptExtra": "am"
        },
        {
          "id": "en2-e7",
          "type": "complete",
          "prompt": "Completa: Nice to ___ you (mucho gusto)",
          "options": [
            "meet",
            "see",
            "know",
            "greet"
          ],
          "correctAnswer": "meet",
          "explanation": "\"Nice to meet you\" es la expresión correcta.",
          "promptExtra": "meet"
        },
        {
          "id": "en2-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "My",
            "name",
            "is",
            "Maria"
          ],
          "correctAnswer": "My name is Maria",
          "explanation": "\"My name is Maria\" = \"Mi nombre es Maria\"."
        }
      ]
    },
    {
      "id": "english-3",
      "track": "languages",
      "subTrack": "english",
      "title": "Números y colores",
      "description": "Aprende los números del 1 al 5 y los colores básicos",
      "icon": "🎨",
      "xp": 50,
      "learnCards": [
        {
          "id": "en3-l1",
          "word": "One, two, three",
          "translation": "Uno, dos, tres",
          "phonetic": "wʌn, tuː, θriː"
        },
        {
          "id": "en3-l2",
          "word": "Four, five",
          "translation": "Cuatro, cinco",
          "phonetic": "fɔːr, faɪv"
        },
        {
          "id": "en3-l3",
          "word": "Red, blue",
          "translation": "Rojo, azul",
          "example": "The sky is blue."
        },
        {
          "id": "en3-l4",
          "word": "Green, yellow",
          "translation": "Verde, amarillo",
          "example": "The sun is yellow."
        }
      ],
      "exercises": [
        {
          "id": "en3-e1",
          "type": "match",
          "prompt": "Empareja el número con su traducción",
          "options": [
            "Uno",
            "Dos",
            "Tres",
            "Cuatro"
          ],
          "correctAnswer": "Uno",
          "explanation": "\"One\" significa \"Uno\".",
          "promptExtra": "One"
        },
        {
          "id": "en3-e2",
          "type": "match",
          "prompt": "Empareja el color con su traducción",
          "options": [
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Verde",
          "explanation": "\"Green\" significa \"Verde\".",
          "promptExtra": "Green"
        },
        {
          "id": "en3-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"cinco\" en inglés?",
          "options": [
            "Five",
            "Four",
            "Three",
            "Two"
          ],
          "correctAnswer": "Five",
          "explanation": "\"Five\" es el número cinco."
        },
        {
          "id": "en3-e4",
          "type": "select",
          "prompt": "¿Qué color es \"blue\"?",
          "options": [
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Azul",
          "explanation": "\"Blue\" es el color azul."
        },
        {
          "id": "en3-e5",
          "type": "select",
          "prompt": "¿Cómo se dice \"rojo\" en inglés?",
          "options": [
            "Red",
            "Blue",
            "Green",
            "Yellow"
          ],
          "correctAnswer": "Red",
          "explanation": "\"Red\" es el color rojo."
        },
        {
          "id": "en3-e6",
          "type": "complete",
          "prompt": "Completa: Th___ (tres en inglés)",
          "options": [
            "ree",
            "reee",
            "rei",
            "rea"
          ],
          "correctAnswer": "ree",
          "explanation": "\"Three\" se escribe con \"ee\".",
          "promptExtra": "ree"
        },
        {
          "id": "en3-e7",
          "type": "complete",
          "prompt": "Completa: Y___ow (amarillo)",
          "options": [
            "ell",
            "all",
            "ill",
            "oll"
          ],
          "correctAnswer": "ell",
          "explanation": "\"Yellow\" se escribe con \"ell\".",
          "promptExtra": "ell"
        },
        {
          "id": "en3-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "The",
            "apple",
            "is",
            "red"
          ],
          "correctAnswer": "The apple is red",
          "explanation": "\"The apple is red\" = \"La manzana es roja\"."
        }
      ]
    },
    {
      "id": "english-4",
      "track": "languages",
      "subTrack": "english",
      "title": "Comida y bebida",
      "description": "Vocabulario esencial de alimentos y bebidas",
      "icon": "🍕",
      "xp": 60,
      "learnCards": [
        {
          "id": "en4-l1",
          "word": "Water",
          "translation": "Agua",
          "example": "I drink water every day."
        },
        {
          "id": "en4-l2",
          "word": "Bread",
          "translation": "Pan",
          "example": "I eat bread for breakfast."
        },
        {
          "id": "en4-l3",
          "word": "Apple",
          "translation": "Manzana",
          "example": "This apple is red."
        },
        {
          "id": "en4-l4",
          "word": "Milk",
          "translation": "Leche",
          "example": "I like milk with coffee."
        }
      ],
      "exercises": [
        {
          "id": "en4-e1",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Agua",
          "explanation": "\"Water\" significa \"Agua\".",
          "promptExtra": "Water"
        },
        {
          "id": "en4-e2",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Pan",
          "explanation": "\"Bread\" significa \"Pan\".",
          "promptExtra": "Bread"
        },
        {
          "id": "en4-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"manzana\" en inglés?",
          "options": [
            "Apple",
            "Bread",
            "Water",
            "Milk"
          ],
          "correctAnswer": "Apple",
          "explanation": "\"Apple\" es la palabra para manzana."
        },
        {
          "id": "en4-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Milk\"?",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Leche",
          "explanation": "\"Milk\" es leche en inglés."
        },
        {
          "id": "en4-e5",
          "type": "select",
          "prompt": "¿Qué bebes con el café según el ejemplo?",
          "options": [
            "Water",
            "Bread",
            "Apple",
            "Milk"
          ],
          "correctAnswer": "Milk",
          "explanation": "En el ejemplo: \"I like milk with coffee\"."
        },
        {
          "id": "en4-e6",
          "type": "complete",
          "prompt": "Completa: I drink ___ every day (agua)",
          "options": [
            "water",
            "milk",
            "bread",
            "apple"
          ],
          "correctAnswer": "water",
          "explanation": "\"I drink water every day\" = \"Bebo agua todos los días\".",
          "promptExtra": "water"
        },
        {
          "id": "en4-e7",
          "type": "complete",
          "prompt": "Completa: I eat ___ for breakfast (pan)",
          "options": [
            "bread",
            "water",
            "milk",
            "apple"
          ],
          "correctAnswer": "bread",
          "explanation": "\"I eat bread for breakfast\" = \"Como pan en el desayuno\".",
          "promptExtra": "bread"
        },
        {
          "id": "en4-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "I",
            "like",
            "milk",
            "coffee"
          ],
          "correctAnswer": "I like milk coffee",
          "explanation": "\"I like milk coffee\" = \"Me gusta el café con leche\"."
        }
      ]
    },
    {
      "id": "english-5",
      "track": "languages",
      "subTrack": "english",
      "title": "Frases útiles",
      "description": "Expresiones esenciales para el día a día",
      "icon": "💬",
      "xp": 70,
      "learnCards": [
        {
          "id": "en5-l1",
          "word": "Where is...?",
          "translation": "¿Dónde está...?",
          "example": "Where is the bathroom?"
        },
        {
          "id": "en5-l2",
          "word": "How much...?",
          "translation": "¿Cuánto cuesta...?",
          "example": "How much is this?"
        },
        {
          "id": "en5-l3",
          "word": "I want...",
          "translation": "Yo quiero...",
          "example": "I want a coffee, please."
        },
        {
          "id": "en5-l4",
          "word": "Excuse me",
          "translation": "Disculpe",
          "example": "Excuse me, where is the station?"
        }
      ],
      "exercises": [
        {
          "id": "en5-e1",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "¿Dónde está...?",
            "¿Cuánto cuesta...?",
            "Yo quiero...",
            "Disculpe"
          ],
          "correctAnswer": "¿Dónde está...?",
          "explanation": "\"Where is...?\" = \"¿Dónde está...?\".",
          "promptExtra": "Where is...?"
        },
        {
          "id": "en5-e2",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "¿Dónde está...?",
            "¿Cuánto cuesta...?",
            "Yo quiero...",
            "Disculpe"
          ],
          "correctAnswer": "¿Cuánto cuesta...?",
          "explanation": "\"How much...?\" = \"¿Cuánto cuesta...?\".",
          "promptExtra": "How much...?"
        },
        {
          "id": "en5-e3",
          "type": "select",
          "prompt": "¿Cómo preguntas por el precio de algo?",
          "options": [
            "Where is...?",
            "How much...?",
            "I want...",
            "Excuse me"
          ],
          "correctAnswer": "How much...?",
          "explanation": "\"How much...?\" se usa para preguntar precios."
        },
        {
          "id": "en5-e4",
          "type": "select",
          "prompt": "¿Qué dices para llamar la atención educadamente?",
          "options": [
            "I want...",
            "Where is...?",
            "Excuse me",
            "How much...?"
          ],
          "correctAnswer": "Excuse me",
          "explanation": "\"Excuse me\" es la forma educada de llamar la atención."
        },
        {
          "id": "en5-e5",
          "type": "select",
          "prompt": "¿Cómo dices \"Quiero un café\"?",
          "options": [
            "I want a coffee",
            "I have a coffee",
            "I like a coffee",
            "I am a coffee"
          ],
          "correctAnswer": "I want a coffee",
          "explanation": "\"I want...\" expresa deseo o petición."
        },
        {
          "id": "en5-e6",
          "type": "complete",
          "prompt": "Completa: ___ is the bathroom? (¿Dónde está...?)",
          "options": [
            "Where",
            "What",
            "How",
            "Who"
          ],
          "correctAnswer": "Where",
          "explanation": "\"Where\" pregunta por ubicación.",
          "promptExtra": "Where"
        },
        {
          "id": "en5-e7",
          "type": "complete",
          "prompt": "Completa: Excuse ___, where is the station? (Disculpe)",
          "options": [
            "me",
            "you",
            "us",
            "i"
          ],
          "correctAnswer": "me",
          "explanation": "\"Excuse me\" es la expresión fija.",
          "promptExtra": "me"
        },
        {
          "id": "en5-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "I",
            "want",
            "a",
            "coffee"
          ],
          "correctAnswer": "I want a coffee",
          "explanation": "\"I want a coffee\" = \"Quiero un café\"."
        }
      ]
    },
    {
      "id": "english-6",
      "track": "languages",
      "subTrack": "english",
      "title": "Familia",
      "description": "Aprende los nombres de los miembros de la familia en inglés",
      "icon": "👨‍👩‍👧‍👦",
      "xp": 80,
      "learnCards": [
        {"id":"en6-l1","word":"Mother","translation":"Madre","example":"My mother is a teacher."},
        {"id":"en6-l2","word":"Father","translation":"Padre","example":"His father works in an office."},
        {"id":"en6-l3","word":"Brother","translation":"Hermano","example":"I have one brother."},
        {"id":"en6-l4","word":"Sister","translation":"Hermana","example":"Her sister is younger."}
      ],
      "exercises": [
        {"id":"en6-e1","type":"match","prompt":"Empareja la palabra con su traducción","options":["Madre","Padre","Hermano","Hermana"],"correctAnswer":"Madre","explanation":"\"Mother\" significa \"Madre\".","promptExtra":"Mother"},
        {"id":"en6-e2","type":"match","prompt":"Empareja la palabra con su traducción","options":["Madre","Padre","Hermano","Hermana"],"correctAnswer":"Padre","explanation":"\"Father\" significa \"Padre\".","promptExtra":"Father"},
        {"id":"en6-e3","type":"select","prompt":"¿Cómo se dice \"hermano\" en inglés?","options":["Brother","Sister","Father","Mother"],"correctAnswer":"Brother","explanation":"\"Brother\" = \"Hermano\"."},
        {"id":"en6-e4","type":"select","prompt":"¿Cómo se dice \"hermana\" en inglés?","options":["Sister","Brother","Mother","Father"],"correctAnswer":"Sister","explanation":"\"Sister\" = \"Hermana\"."},
        {"id":"en6-e5","type":"select","prompt":"¿Qué significa \"Father\"?","options":["Padre","Madre","Hermano","Hermana"],"correctAnswer":"Padre","explanation":"\"Father\" = \"Padre\"."},
        {"id":"en6-e6","type":"complete","prompt":"Completa: M___er (madre)","options":["oth","ath","eth","ith"],"correctAnswer":"oth","explanation":"\"Mother\" se escribe con \"oth\".","promptExtra":"oth"},
        {"id":"en6-e7","type":"complete","prompt":"Completa: B___er (hermano)","options":["roth","rith","reth","ruth"],"correctAnswer":"roth","explanation":"\"Brother\" se escribe con \"roth\".","promptExtra":"roth"},
        {"id":"en6-e8","type":"arrange","prompt":"Ordena las palabras para formar una frase","options":["My","mother","is","kind"],"correctAnswer":"My mother is kind","explanation":"\"My mother is kind\" = \"Mi madre es amable\"."}
      ]
    },
    {
      "id": "english-7",
      "track": "languages",
      "subTrack": "english",
      "title": "Ropa",
      "description": "Vocabulario esencial de prendas de vestir",
      "icon": "👕",
      "xp": 80,
      "learnCards": [
        {"id":"en7-l1","word":"Shirt","translation":"Camisa","example":"He wears a blue shirt."},
        {"id":"en7-l2","word":"Pants","translation":"Pantalones","example":"These pants are new."},
        {"id":"en7-l3","word":"Shoes","translation":"Zapatos","example":"I need new shoes."},
        {"id":"en7-l4","word":"Jacket","translation":"Chaqueta","example":"Take a jacket, it's cold."}
      ],
      "exercises": [
        {"id":"en7-e1","type":"match","prompt":"Empareja la palabra con su traducción","options":["Camisa","Pantalones","Zapatos","Chaqueta"],"correctAnswer":"Camisa","explanation":"\"Shirt\" = \"Camisa\".","promptExtra":"Shirt"},
        {"id":"en7-e2","type":"match","prompt":"Empareja la palabra con su traducción","options":["Camisa","Pantalones","Zapatos","Chaqueta"],"correctAnswer":"Pantalones","explanation":"\"Pants\" = \"Pantalones\".","promptExtra":"Pants"},
        {"id":"en7-e3","type":"select","prompt":"¿Cómo se dice \"zapatos\" en inglés?","options":["Shoes","Shirt","Pants","Jacket"],"correctAnswer":"Shoes","explanation":"\"Shoes\" = \"Zapatos\"."},
        {"id":"en7-e4","type":"select","prompt":"¿Qué prenda es \"Jacket\"?","options":["Chaqueta","Camisa","Pantalones","Zapatos"],"correctAnswer":"Chaqueta","explanation":"\"Jacket\" = \"Chaqueta\"."},
        {"id":"en7-e5","type":"select","prompt":"¿Qué significa \"Shirt\"?","options":["Camisa","Falda","Vestido","Corbata"],"correctAnswer":"Camisa","explanation":"\"Shirt\" = \"Camisa\"."},
        {"id":"en7-e6","type":"complete","prompt":"Completa: Pa___ (pantalones)","options":["nts","nt","ns","nst"],"correctAnswer":"nts","explanation":"\"Pants\" termina en \"nts\".","promptExtra":"nts"},
        {"id":"en7-e7","type":"complete","prompt":"Completa: S___s (zapatos)","options":["hoe","hoo","hoe","hao"],"correctAnswer":"hoe","explanation":"\"Shoes\" contiene \"hoe\".","promptExtra":"hoe"},
        {"id":"en7-e8","type":"arrange","prompt":"Ordena las palabras para formar una frase","options":["I","like","your","shirt"],"correctAnswer":"I like your shirt","explanation":"\"I like your shirt\" = \"Me gusta tu camisa\"."}
      ]
    },
    {
      "id": "english-8",
      "track": "languages",
      "subTrack": "english",
      "title": "Tiempo y Clima",
      "description": "Expresiones para hablar del clima en inglés",
      "icon": "🌤️",
      "xp": 80,
      "learnCards": [
        {"id":"en8-l1","word":"Sunny","translation":"Soleado","example":"It is sunny today."},
        {"id":"en8-l2","word":"Rainy","translation":"Lluvioso","example":"It will be rainy tomorrow."},
        {"id":"en8-l3","word":"Hot","translation":"Caluroso","example":"Summer is very hot."},
        {"id":"en8-l4","word":"Cold","translation":"Frío","example":"Winter is cold here."}
      ],
      "exercises": [
        {"id":"en8-e1","type":"match","prompt":"Empareja con su traducción","options":["Soleado","Lluvioso","Caluroso","Frío"],"correctAnswer":"Soleado","explanation":"\"Sunny\" = \"Soleado\".","promptExtra":"Sunny"},
        {"id":"en8-e2","type":"match","prompt":"Empareja con su traducción","options":["Soleado","Lluvioso","Caluroso","Frío"],"correctAnswer":"Lluvioso","explanation":"\"Rainy\" = \"Lluvioso\".","promptExtra":"Rainy"},
        {"id":"en8-e3","type":"select","prompt":"¿Cómo dices que hace calor?","options":["It is hot","It is cold","It is sunny","It is rainy"],"correctAnswer":"It is hot","explanation":"\"Hot\" describe temperatura alta."},
        {"id":"en8-e4","type":"select","prompt":"¿Qué significa \"Rainy\"?","options":["Lluvioso","Soleado","Nublado","Nevado"],"correctAnswer":"Lluvioso","explanation":"\"Rainy\" = \"Lluvioso\", viene de \"rain\" (lluvia)."},
        {"id":"en8-e5","type":"select","prompt":"¿Cómo describes un día con sol?","options":["Sunny day","Rainy day","Cloudy day","Windy day"],"correctAnswer":"Sunny day","explanation":"\"Sunny\" = \"Soleado\"."},
        {"id":"en8-e6","type":"complete","prompt":"Completa: It is s___ today (soleado)","options":["unny","anny","inny","onny"],"correctAnswer":"unny","explanation":"\"Sunny\" se forma de \"sun\" + \"ny\".","promptExtra":"unny"},
        {"id":"en8-e7","type":"complete","prompt":"Completa: It is co___ (frío)","options":["ld","lt","l","la"],"correctAnswer":"ld","explanation":"\"Cold\" termina en \"ld\".","promptExtra":"ld"},
        {"id":"en8-e8","type":"arrange","prompt":"Ordena las palabras para formar una frase","options":["It","is","a","sunny","day"],"correctAnswer":"It is a sunny day","explanation":"\"It is a sunny day\" = \"Es un día soleado\"."}
      ]
    },
    {
      "id": "english-9",
      "track": "languages",
      "subTrack": "english",
      "title": "Transporte",
      "description": "Vocabulario de medios de transporte en inglés",
      "icon": "🚗",
      "xp": 80,
      "learnCards": [
        {"id":"en9-l1","word":"Car","translation":"Coche","example":"I drive a car."},
        {"id":"en9-l2","word":"Bus","translation":"Autobús","example":"The bus arrives at 8."},
        {"id":"en9-l3","word":"Train","translation":"Tren","example":"We travel by train."},
        {"id":"en9-l4","word":"Airplane","translation":"Avión","example":"The airplane is fast."}
      ],
      "exercises": [
        {"id":"en9-e1","type":"match","prompt":"Empareja con su traducción","options":["Coche","Autobús","Tren","Avión"],"correctAnswer":"Coche","explanation":"\"Car\" = \"Coche\".","promptExtra":"Car"},
        {"id":"en9-e2","type":"match","prompt":"Empareja con su traducción","options":["Coche","Autobús","Tren","Avión"],"correctAnswer":"Autobús","explanation":"\"Bus\" = \"Autobús\".","promptExtra":"Bus"},
        {"id":"en9-e3","type":"select","prompt":"¿Cómo se dice \"tren\" en inglés?","options":["Train","Bus","Car","Airplane"],"correctAnswer":"Train","explanation":"\"Train\" = \"Tren\"."},
        {"id":"en9-e4","type":"select","prompt":"¿Qué medio de transporte es \"Airplane\"?","options":["Avión","Tren","Barco","Coche"],"correctAnswer":"Avión","explanation":"\"Airplane\" = \"Avión\" (del aire)."},
        {"id":"en9-e5","type":"select","prompt":"¿Cómo dices \"voy en coche\"?","options":["I go by car","I go by bus","I go by train","I go walking"],"correctAnswer":"I go by car","explanation":"\"By car\" significa \"en coche\"."},
        {"id":"en9-e6","type":"complete","prompt":"Completa: Air___e (avión)","options":["plan","plen","plin","plon"],"correctAnswer":"plan","explanation":"\"Airplane\" contiene \"plan\".","promptExtra":"plan"},
        {"id":"en9-e7","type":"complete","prompt":"Completa: T___n (tren)","options":["rai","rei","roi","rui"],"correctAnswer":"rai","explanation":"\"Train\" contiene \"rai\".","promptExtra":"rai"},
        {"id":"en9-e8","type":"arrange","prompt":"Ordena las palabras para formar una frase","options":["The","bus","is","late"],"correctAnswer":"The bus is late","explanation":"\"The bus is late\" = \"El autobús va tarde\"."}
      ]
    },
    {
      "id": "english-10",
      "track": "languages",
      "subTrack": "english",
      "title": "Profesiones",
      "description": "Nombres de profesiones y oficios en inglés",
      "icon": "👨‍💼",
      "xp": 90,
      "learnCards": [
        {"id":"en10-l1","word":"Doctor","translation":"Doctor/Médico","example":"The doctor is very kind."},
        {"id":"en10-l2","word":"Teacher","translation":"Profesor/Maestro","example":"My teacher explains well."},
        {"id":"en10-l3","word":"Engineer","translation":"Ingeniero","example":"She is an engineer."},
        {"id":"en10-l4","word":"Chef","translation":"Cocinero/Chef","example":"The chef cooks amazing food."}
      ],
      "exercises": [
        {"id":"en10-e1","type":"match","prompt":"Empareja con su traducción","options":["Doctor/Médico","Profesor/Maestro","Ingeniero","Cocinero/Chef"],"correctAnswer":"Doctor/Médico","explanation":"\"Doctor\" = \"Médico\".","promptExtra":"Doctor"},
        {"id":"en10-e2","type":"match","prompt":"Empareja con su traducción","options":["Doctor/Médico","Profesor/Maestro","Ingeniero","Cocinero/Chef"],"correctAnswer":"Profesor/Maestro","explanation":"\"Teacher\" = \"Profesor\".","promptExtra":"Teacher"},
        {"id":"en10-e3","type":"select","prompt":"¿Cómo se dice \"ingeniero\" en inglés?","options":["Engineer","Doctor","Teacher","Chef"],"correctAnswer":"Engineer","explanation":"\"Engineer\" = \"Ingeniero\"."},
        {"id":"en10-e4","type":"select","prompt":"¿Qué hace un \"Chef\"?","options":["Cocina","Enseña","Cura","Construye"],"correctAnswer":"Cocina","explanation":"\"Chef\" es un cocinero profesional."},
        {"id":"en10-e5","type":"select","prompt":"\"She is a teacher\" significa:","options":["Ella es profesora","Ella es doctora","Ella es ingeniera","Ella es cocinera"],"correctAnswer":"Ella es profesora","explanation":"\"Teacher\" = \"Profesor/a\"."},
        {"id":"en10-e6","type":"complete","prompt":"Completa: Doct___ (médico)","options":["or","er","ar","ur"],"correctAnswer":"or","explanation":"\"Doctor\" termina en \"or\".","promptExtra":"or"},
        {"id":"en10-e7","type":"complete","prompt":"Completa: Engin___ (ingeniero)","options":["eer","ere","ear","ier"],"correctAnswer":"eer","explanation":"\"Engineer\" termina en \"eer\".","promptExtra":"eer"},
        {"id":"en10-e8","type":"arrange","prompt":"Ordena las palabras para formar una frase","options":["He","is","a","doctor"],"correctAnswer":"He is a doctor","explanation":"\"He is a doctor\" = \"Él es médico\"."}
      ]
    },
    {
      "id": "english-11",
      "track": "languages",
      "subTrack": "english",
      "title": "Partes del Cuerpo",
      "description": "Vocabulario de las partes del cuerpo humano",
      "icon": "🦵",
      "xp": 90,
      "learnCards": [
        {"id":"en11-l1","word":"Head","translation":"Cabeza","example":"I have a headache."},
        {"id":"en11-l2","word":"Hand","translation":"Mano","example":"Wash your hands."},
        {"id":"en11-l3","word":"Foot","translation":"Pie","example":"My foot hurts."},
        {"id":"en11-l4","word":"Eye","translation":"Ojo","example":"She has blue eyes."}
      ],
      "exercises": [
        {"id":"en11-e1","type":"match","prompt":"Empareja con su traducción","options":["Cabeza","Mano","Pie","Ojo"],"correctAnswer":"Cabeza","explanation":"\"Head\" = \"Cabeza\".","promptExtra":"Head"},
        {"id":"en11-e2","type":"match","prompt":"Empareja con su traducción","options":["Cabeza","Mano","Pie","Ojo"],"correctAnswer":"Mano","explanation":"\"Hand\" = \"Mano\".","promptExtra":"Hand"},
        {"id":"en11-e3","type":"select","prompt":"¿Cómo se dice \"pie\" en inglés?","options":["Foot","Hand","Head","Eye"],"correctAnswer":"Foot","explanation":"\"Foot\" = \"Pie\" (plural: feet)."},
        {"id":"en11-e4","type":"select","prompt":"¿Qué parte del cuerpo es \"Eye\"?","options":["Ojo","Oreja","Nariz","Boca"],"correctAnswer":"Ojo","explanation":"\"Eye\" = \"Ojo\"."},
        {"id":"en11-e5","type":"select","prompt":"\"Wash your hands\" significa:","options":["Lávate las manos","Lávate la cara","Lávate los pies","Lávate el pelo"],"correctAnswer":"Lávate las manos","explanation":"\"Hands\" = \"Manos\"."},
        {"id":"en11-e6","type":"complete","prompt":"Completa: H___ (cabeza)","options":["ead","aed","eed","iad"],"correctAnswer":"ead","explanation":"\"Head\" contiene \"ead\".","promptExtra":"ead"},
        {"id":"en11-e7","type":"complete","prompt":"Completa: F___t (pie)","options":["oo","ee","aa","uu"],"correctAnswer":"oo","explanation":"\"Foot\" contiene \"oo\".","promptExtra":"oo"},
        {"id":"en11-e8","type":"arrange","prompt":"Ordena las palabras para formar una frase","options":["My","head","hurts","a","lot"],"correctAnswer":"My head hurts a lot","explanation":"\"My head hurts a lot\" = \"Me duele mucho la cabeza\"."}
      ]
    },
    {
      "id": "english-12",
      "track": "languages",
      "subTrack": "english",
      "title": "Emociones",
      "description": "Aprende a expresar sentimientos y emociones en inglés",
      "icon": "😊",
      "xp": 90,
      "learnCards": [
        {"id":"en12-l1","word":"Happy","translation":"Feliz","example":"I am very happy today."},
        {"id":"en12-l2","word":"Sad","translation":"Triste","example":"She feels sad."},
        {"id":"en12-l3","word":"Angry","translation":"Enojado","example":"Don't be angry."},
        {"id":"en12-l4","word":"Tired","translation":"Cansado","example":"I am tired after work."}
      ],
      "exercises": [
        {"id":"en12-e1","type":"match","prompt":"Empareja con su traducción","options":["Feliz","Triste","Enojado","Cansado"],"correctAnswer":"Feliz","explanation":"\"Happy\" = \"Feliz\".","promptExtra":"Happy"},
        {"id":"en12-e2","type":"match","prompt":"Empareja con su traducción","options":["Feliz","Triste","Enojado","Cansado"],"correctAnswer":"Triste","explanation":"\"Sad\" = \"Triste\".","promptExtra":"Sad"},
        {"id":"en12-e3","type":"select","prompt":"¿Cómo dices \"estoy cansado\"?","options":["I am tired","I am happy","I am sad","I am angry"],"correctAnswer":"I am tired","explanation":"\"Tired\" = \"Cansado\"."},
        {"id":"en12-e4","type":"select","prompt":"¿Qué significa \"Angry\"?","options":["Enojado","Feliz","Triste","Cansado"],"correctAnswer":"Enojado","explanation":"\"Angry\" = \"Enojado\"."},
        {"id":"en12-e5","type":"select","prompt":"\"She feels sad\" significa:","options":["Ella se siente triste","Ella se siente feliz","Ella está enojada","Ella está cansada"],"correctAnswer":"Ella se siente triste","explanation":"\"Sad\" = \"Triste\"."},
        {"id":"en12-e6","type":"complete","prompt":"Completa: Ha___ (feliz)","options":["ppy","pyy","pp","ppyyt"],"correctAnswer":"ppy","explanation":"\"Happy\" termina en \"ppy\".","promptExtra":"ppy"},
        {"id":"en12-e7","type":"complete","prompt":"Completa: Ti___ (cansado)","options":["red","rad","rid","rud"],"correctAnswer":"red","explanation":"\"Tired\" termina en \"red\".","promptExtra":"red"},
        {"id":"en12-e8","type":"arrange","prompt":"Ordena las palabras para formar una frase","options":["I","am","so","happy"],"correctAnswer":"I am so happy","explanation":"\"I am so happy\" = \"Estoy muy feliz\"."}
      ]
    }
  ];
const italianLessons: Lesson[] = [
    {
      "id": "italian-1",
      "track": "languages",
      "subTrack": "italian",
      "title": "Saluti",
      "description": "Aprende los saludos fundamentales en italiano",
      "icon": "👋",
      "xp": 30,
      "learnCards": [
        {
          "id": "it1-l1",
          "word": "Ciao",
          "translation": "Hola / Adiós",
          "example": "Ciao, come stai?"
        },
        {
          "id": "it1-l2",
          "word": "Buongiorno",
          "translation": "Buenos días",
          "example": "Buongiorno, signora!"
        },
        {
          "id": "it1-l3",
          "word": "Grazie",
          "translation": "Gracias",
          "example": "Grazie mille!"
        },
        {
          "id": "it1-l4",
          "word": "Per favore",
          "translation": "Por favor",
          "example": "Un caffè, per favore."
        }
      ],
      "exercises": [
        {
          "id": "it1-e1",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Hola / Adiós",
            "Buenos días",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Hola / Adiós",
          "explanation": "\"Ciao\" sirve para hola y adiós informal.",
          "promptExtra": "Ciao"
        },
        {
          "id": "it1-e2",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Hola",
            "Buenos días",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Gracias",
          "explanation": "\"Grazie\" significa \"Gracias\".",
          "promptExtra": "Grazie"
        },
        {
          "id": "it1-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"buenos días\" en italiano?",
          "options": [
            "Buongiorno",
            "Ciao",
            "Grazie",
            "Per favore"
          ],
          "correctAnswer": "Buongiorno",
          "explanation": "\"Buongiorno\" = \"Buenos días\"."
        },
        {
          "id": "it1-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Per favore\"?",
          "options": [
            "Hola",
            "Buenos días",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Por favor",
          "explanation": "\"Per favore\" se usa para pedir algo."
        },
        {
          "id": "it1-e5",
          "type": "select",
          "prompt": "¿Cómo se dice \"gracias\" en italiano?",
          "options": [
            "Ciao",
            "Buongiorno",
            "Grazie",
            "Per favore"
          ],
          "correctAnswer": "Grazie",
          "explanation": "\"Grazie\" es la palabra para gracias."
        },
        {
          "id": "it1-e6",
          "type": "complete",
          "prompt": "Completa: Buon___no (buenos días)",
          "options": [
            "gior",
            "gir",
            "guir",
            "ger"
          ],
          "correctAnswer": "gior",
          "explanation": "\"Buongiorno\" se escribe con \"gior\".",
          "promptExtra": "gior"
        },
        {
          "id": "it1-e7",
          "type": "complete",
          "prompt": "Completa: ___zie (gracias)",
          "options": [
            "Gra",
            "Gre",
            "Gri",
            "Gro"
          ],
          "correctAnswer": "Gra",
          "explanation": "\"Grazie\" comienza con \"Gra\".",
          "promptExtra": "Gra"
        },
        {
          "id": "it1-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "Grazie",
            "mille",
            "per",
            "tutto"
          ],
          "correctAnswer": "Grazie mille per tutto",
          "explanation": "\"Grazie mille per tutto\" = \"Muchas gracias por todo\"."
        }
      ]
    },
    {
      "id": "italian-2",
      "track": "languages",
      "subTrack": "italian",
      "title": "Presentazioni",
      "description": "Cómo presentarte en italiano",
      "icon": "🙋",
      "xp": 40,
      "learnCards": [
        {
          "id": "it2-l1",
          "word": "Mi chiamo...",
          "translation": "Me llamo...",
          "example": "Mi chiamo Marco."
        },
        {
          "id": "it2-l2",
          "word": "Io sono...",
          "translation": "Yo soy...",
          "example": "Io sono italiano."
        },
        {
          "id": "it2-l3",
          "word": "Piacere",
          "translation": "Mucho gusto",
          "example": "Piacere di conoscerti!"
        },
        {
          "id": "it2-l4",
          "word": "Come ti chiami?",
          "translation": "¿Cómo te llamas?",
          "example": "Ciao, come ti chiami?"
        }
      ],
      "exercises": [
        {
          "id": "it2-e1",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "Me llamo...",
            "Yo soy...",
            "Mucho gusto",
            "¿Cómo te llamas?"
          ],
          "correctAnswer": "Me llamo...",
          "explanation": "\"Mi chiamo...\" = \"Me llamo...\".",
          "promptExtra": "Mi chiamo..."
        },
        {
          "id": "it2-e2",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "Me llamo...",
            "Yo soy...",
            "Mucho gusto",
            "¿Cómo te llamas?"
          ],
          "correctAnswer": "Mucho gusto",
          "explanation": "\"Piacere\" = \"Mucho gusto\".",
          "promptExtra": "Piacere"
        },
        {
          "id": "it2-e3",
          "type": "select",
          "prompt": "¿Cómo dices \"Yo soy italiano\"?",
          "options": [
            "Io sono italiano",
            "Mi chiamo italiano",
            "Piacere italiano",
            "Come ti chiami italiano"
          ],
          "correctAnswer": "Io sono italiano",
          "explanation": "\"Io sono...\" = \"Yo soy...\"."
        },
        {
          "id": "it2-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Come ti chiami?\"?",
          "options": [
            "Me llamo",
            "Yo soy",
            "Mucho gusto",
            "¿Cómo te llamas?"
          ],
          "correctAnswer": "¿Cómo te llamas?",
          "explanation": "\"Come ti chiami?\" pregunta el nombre."
        },
        {
          "id": "it2-e5",
          "type": "select",
          "prompt": "¿Qué respondes a \"Piacere\"?",
          "options": [
            "Piacere mio",
            "Ciao",
            "Grazie",
            "Buongiorno"
          ],
          "correctAnswer": "Piacere mio",
          "explanation": "Se responde \"Piacere mio\" (el gusto es mío)."
        },
        {
          "id": "it2-e6",
          "type": "complete",
          "prompt": "Completa: Io ___ italiano (Yo soy italiano)",
          "options": [
            "sono",
            "sei",
            "è",
            "siamo"
          ],
          "correctAnswer": "sono",
          "explanation": "\"Io sono\" = \"Yo soy\" (primera persona).",
          "promptExtra": "sono"
        },
        {
          "id": "it2-e7",
          "type": "complete",
          "prompt": "Completa: ___ ti chiami? (¿Cómo te llamas?)",
          "options": [
            "Come",
            "Cosa",
            "Dove",
            "Chi"
          ],
          "correctAnswer": "Come",
          "explanation": "\"Come\" significa \"cómo\" en preguntas.",
          "promptExtra": "Come"
        },
        {
          "id": "it2-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "Mi",
            "chiamo",
            "Sofia",
            "piacere"
          ],
          "correctAnswer": "Mi chiamo Sofia piacere",
          "explanation": "\"Mi chiamo Sofia, piacere\" = \"Me llamo Sofia, mucho gusto\"."
        }
      ]
    },
    {
      "id": "italian-3",
      "track": "languages",
      "subTrack": "italian",
      "title": "Numeri e colori",
      "description": "Aprende los números y colores en italiano",
      "icon": "🎨",
      "xp": 50,
      "learnCards": [
        {
          "id": "it3-l1",
          "word": "Uno, due, tre",
          "translation": "Uno, dos, tres",
          "example": "Ho tre mele."
        },
        {
          "id": "it3-l2",
          "word": "Quattro, cinque",
          "translation": "Cuatro, cinco",
          "example": "Cinque euro, per favore."
        },
        {
          "id": "it3-l3",
          "word": "Rosso, blu",
          "translation": "Rojo, azul",
          "example": "La macchina è rossa."
        },
        {
          "id": "it3-l4",
          "word": "Verde, giallo",
          "translation": "Verde, amarillo",
          "example": "Il limone è giallo."
        }
      ],
      "exercises": [
        {
          "id": "it3-e1",
          "type": "match",
          "prompt": "Empareja el número con su traducción",
          "options": [
            "Uno",
            "Dos",
            "Tres",
            "Cuatro"
          ],
          "correctAnswer": "Dos",
          "explanation": "\"Due\" significa \"Dos\".",
          "promptExtra": "Due"
        },
        {
          "id": "it3-e2",
          "type": "match",
          "prompt": "Empareja el color con su traducción",
          "options": [
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Verde",
          "explanation": "\"Verde\" = \"Verde\" (son similares).",
          "promptExtra": "Verde"
        },
        {
          "id": "it3-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"cinco\" en italiano?",
          "options": [
            "Cinque",
            "Quattro",
            "Tre",
            "Due"
          ],
          "correctAnswer": "Cinque",
          "explanation": "\"Cinque\" es el número cinco."
        },
        {
          "id": "it3-e4",
          "type": "select",
          "prompt": "¿Qué color es \"giallo\"?",
          "options": [
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Amarillo",
          "explanation": "\"Giallo\" es el color amarillo."
        },
        {
          "id": "it3-e5",
          "type": "select",
          "prompt": "¿Cómo se dice \"azul\" en italiano?",
          "options": [
            "Rosso",
            "Blu",
            "Verde",
            "Giallo"
          ],
          "correctAnswer": "Blu",
          "explanation": "\"Blu\" es el color azul."
        },
        {
          "id": "it3-e6",
          "type": "complete",
          "prompt": "Completa: ___ due tre (1, 2, 3)",
          "options": [
            "Uno",
            "Una",
            "Uni",
            "Une"
          ],
          "correctAnswer": "Uno",
          "explanation": "\"Uno, due, tre\" = \"Uno, dos, tres\".",
          "promptExtra": "Uno"
        },
        {
          "id": "it3-e7",
          "type": "complete",
          "prompt": "Completa: Il limone è ___ (amarillo)",
          "options": [
            "giallo",
            "rosso",
            "verde",
            "blu"
          ],
          "correctAnswer": "giallo",
          "explanation": "\"Giallo\" describe el color del limón.",
          "promptExtra": "giallo"
        },
        {
          "id": "it3-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras para formar una frase",
          "options": [
            "Ho",
            "tre",
            "mele",
            "rosse"
          ],
          "correctAnswer": "Ho tre mele rosse",
          "explanation": "\"Ho tre mele rosse\" = \"Tengo tres manzanas rojas\"."
        }
      ]
    },
    {
      "id": "italian-4",
      "track": "languages",
      "subTrack": "italian",
      "title": "Cibo e bevande",
      "description": "Vocabulario de comida y bebida en italiano",
      "icon": "🍕",
      "xp": 60,
      "learnCards": [
        {
          "id": "it4-l1",
          "word": "Acqua",
          "translation": "Agua",
          "example": "Un bicchiere d'acqua, per favore."
        },
        {
          "id": "it4-l2",
          "word": "Pane",
          "translation": "Pan",
          "example": "Il pane è fresco."
        },
        {
          "id": "it4-l3",
          "word": "Mela",
          "translation": "Manzana",
          "example": "Mangio una mela ogni giorno."
        },
        {
          "id": "it4-l4",
          "word": "Latte",
          "translation": "Leche",
          "example": "Bevo latte caldo la mattina."
        }
      ],
      "exercises": [
        {
          "id": "it4-e1",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Agua",
          "explanation": "\"Acqua\" significa \"Agua\".",
          "promptExtra": "Acqua"
        },
        {
          "id": "it4-e2",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Pan",
          "explanation": "\"Pane\" significa \"Pan\".",
          "promptExtra": "Pane"
        },
        {
          "id": "it4-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"manzana\" en italiano?",
          "options": [
            "Mela",
            "Pane",
            "Acqua",
            "Latte"
          ],
          "correctAnswer": "Mela",
          "explanation": "\"Mela\" es manzana en italiano."
        },
        {
          "id": "it4-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Latte\"?",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Leche",
          "explanation": "\"Latte\" es leche en italiano."
        },
        {
          "id": "it4-e5",
          "type": "select",
          "prompt": "¿Qué bebes por la mañana según el ejemplo?",
          "options": [
            "Acqua",
            "Pane",
            "Mela",
            "Latte"
          ],
          "correctAnswer": "Latte",
          "explanation": "En el ejemplo: \"Bevo latte caldo la mattina\"."
        },
        {
          "id": "it4-e6",
          "type": "complete",
          "prompt": "Completa: Un bicchiere d'___ (agua)",
          "options": [
            "acqua",
            "pane",
            "mela",
            "latte"
          ],
          "correctAnswer": "acqua",
          "explanation": "\"Un bicchiere d'acqua\" = \"Un vaso de agua\".",
          "promptExtra": "acqua"
        },
        {
          "id": "it4-e7",
          "type": "complete",
          "prompt": "Completa: Il ___ è fresco (pan)",
          "options": [
            "pane",
            "acqua",
            "mela",
            "latte"
          ],
          "correctAnswer": "pane",
          "explanation": "\"Il pane è fresco\" = \"El pan está fresco\".",
          "promptExtra": "pane"
        },
        {
          "id": "it4-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Bevo",
            "latte",
            "caldo",
            "mattina"
          ],
          "correctAnswer": "Bevo latte caldo mattina",
          "explanation": "\"Bevo latte caldo la mattina\" = \"Bebo leche caliente por la mañana\"."
        }
      ]
    },
    {
      "id": "italian-5",
      "track": "languages",
      "subTrack": "italian",
      "title": "Frasi utili",
      "description": "Expresiones esenciales en italiano",
      "icon": "💬",
      "xp": 70,
      "learnCards": [
        {
          "id": "it5-l1",
          "word": "Dov'è...?",
          "translation": "¿Dónde está...?",
          "example": "Dov'è il bagno?"
        },
        {
          "id": "it5-l2",
          "word": "Quanto costa...?",
          "translation": "¿Cuánto cuesta...?",
          "example": "Quanto costa questo?"
        },
        {
          "id": "it5-l3",
          "word": "Vorrei...",
          "translation": "Quisiera...",
          "example": "Vorrei un caffè."
        },
        {
          "id": "it5-l4",
          "word": "Scusi",
          "translation": "Disculpe",
          "example": "Scusi, dov'è la stazione?"
        }
      ],
      "exercises": [
        {
          "id": "it5-e1",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "¿Dónde está...?",
            "¿Cuánto cuesta...?",
            "Quisiera...",
            "Disculpe"
          ],
          "correctAnswer": "¿Dónde está...?",
          "explanation": "\"Dov'è...?\" = \"¿Dónde está...?\".",
          "promptExtra": "Dov'è...?"
        },
        {
          "id": "it5-e2",
          "type": "match",
          "prompt": "Empareja la frase con su traducción",
          "options": [
            "¿Dónde está...?",
            "¿Cuánto cuesta...?",
            "Quisiera...",
            "Disculpe"
          ],
          "correctAnswer": "¿Cuánto cuesta...?",
          "explanation": "\"Quanto costa...?\" pregunta el precio.",
          "promptExtra": "Quanto costa...?"
        },
        {
          "id": "it5-e3",
          "type": "select",
          "prompt": "¿Cómo pides algo educadamente en un café?",
          "options": [
            "Vorrei un caffè",
            "Dov'è un caffè",
            "Quanto costa un caffè",
            "Scusi un caffè"
          ],
          "correctAnswer": "Vorrei un caffè",
          "explanation": "\"Vorrei...\" = \"Quisiera...\" (forma educada)."
        },
        {
          "id": "it5-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Scusi\"?",
          "options": [
            "Gracias",
            "Disculpe",
            "Por favor",
            "Hola"
          ],
          "correctAnswer": "Disculpe",
          "explanation": "\"Scusi\" es la forma formal de disculparse."
        },
        {
          "id": "it5-e5",
          "type": "select",
          "prompt": "¿Cómo preguntas dónde está el baño?",
          "options": [
            "Dov'è il bagno?",
            "Quanto costa il bagno?",
            "Vorrei il bagno",
            "Scusi il bagno"
          ],
          "correctAnswer": "Dov'è il bagno?",
          "explanation": "\"Dov'è...?\" pregunta ubicación."
        },
        {
          "id": "it5-e6",
          "type": "complete",
          "prompt": "Completa: ___ il bagno? (¿Dónde está el baño?)",
          "options": [
            "Dov'è",
            "Dove",
            "Dov'",
            "Dova"
          ],
          "correctAnswer": "Dov'è",
          "explanation": "\"Dov'è\" es la contracción de \"dove è\".",
          "promptExtra": "Dov'è"
        },
        {
          "id": "it5-e7",
          "type": "complete",
          "prompt": "Completa: ___ un caffè (Quisiera un café)",
          "options": [
            "Vorrei",
            "Voglio",
            "Vado",
            "Vedo"
          ],
          "correctAnswer": "Vorrei",
          "explanation": "\"Vorrei\" es la forma condicional educada.",
          "promptExtra": "Vorrei"
        },
        {
          "id": "it5-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Scusi",
            "dov'è",
            "la",
            "stazione"
          ],
          "correctAnswer": "Scusi dov'è la stazione",
          "explanation": "\"Scusi, dov'è la stazione?\" = \"Disculpe, ¿dónde está la estación?\"."
        }
      ]
    },
    {
      "id": "italian-6",
      "track": "languages",
      "subTrack": "italian",
      "title": "Famiglia",
      "description": "I nomi dei membri della famiglia",
      "icon": "👨‍👩‍👧‍👦",
      "xp": 80,
      "learnCards": [
        {"id":"it6-l1","word":"Madre","translation":"Madre","example":"Mia madre è una maestra."},
        {"id":"it6-l2","word":"Padre","translation":"Padre","example":"Mio padre lavora in ufficio."},
        {"id":"it6-l3","word":"Fratello","translation":"Hermano","example":"Ho un fratello."},
        {"id":"it6-l4","word":"Sorella","translation":"Hermana","example":"Mia sorella è più piccola."}
      ],
      "exercises": [
        {"id":"it6-e1","type":"match","prompt":"Empareja con su traducción","options":["Madre","Padre","Hermano","Hermana"],"correctAnswer":"Madre","explanation":"\"Madre\" = \"Madre\".","promptExtra":"Madre"},
        {"id":"it6-e2","type":"match","prompt":"Empareja con su traducción","options":["Madre","Padre","Hermano","Hermana"],"correctAnswer":"Padre","explanation":"\"Padre\" = \"Padre\".","promptExtra":"Padre"},
        {"id":"it6-e3","type":"select","prompt":"¿Cómo se dice \"hermano\" en italiano?","options":["Fratello","Sorella","Padre","Madre"],"correctAnswer":"Fratello","explanation":"\"Fratello\" = \"Hermano\"."},
        {"id":"it6-e4","type":"select","prompt":"¿Cómo se dice \"hermana\" en italiano?","options":["Sorella","Fratello","Madre","Padre"],"correctAnswer":"Sorella","explanation":"\"Sorella\" = \"Hermana\"."},
        {"id":"it6-e5","type":"select","prompt":"¿Qué significa \"Padre\"?","options":["Padre","Madre","Hermano","Hermana"],"correctAnswer":"Padre","explanation":"\"Padre\" = \"Padre\"."},
        {"id":"it6-e6","type":"complete","prompt":"Completa: Fratel___ (hermano)","options":["lo","la","li","le"],"correctAnswer":"lo","explanation":"\"Fratello\" termina en \"lo\".","promptExtra":"lo"},
        {"id":"it6-e7","type":"complete","prompt":"Completa: Sorel___ (hermana)","options":["la","le","lo","li"],"correctAnswer":"la","explanation":"\"Sorella\" termina en \"la\".","promptExtra":"la"},
        {"id":"it6-e8","type":"arrange","prompt":"Ordena las palabras","options":["Mia","madre","è","gentile"],"correctAnswer":"Mia madre è gentile","explanation":"\"Mia madre è gentile\" = \"Mi madre es amable\"."}
      ]
    },
    {
      "id": "italian-7",
      "track": "languages",
      "subTrack": "italian",
      "title": "Abbigliamento",
      "description": "Vocabolario di vestiti e accessori",
      "icon": "👕",
      "xp": 80,
      "learnCards": [
        {"id":"it7-l1","word":"Camicia","translation":"Camisa","example":"Una camicia bianca."},
        {"id":"it7-l2","word":"Pantaloni","translation":"Pantalones","example":"Questi pantaloni sono nuovi."},
        {"id":"it7-l3","word":"Scarpe","translation":"Zapatos","example":"Ho bisogno di scarpe nuove."},
        {"id":"it7-l4","word":"Giacca","translation":"Chaqueta","example":"Porta una giacca, fa freddo."}
      ],
      "exercises": [
        {"id":"it7-e1","type":"match","prompt":"Empareja con su traducción","options":["Camisa","Pantalones","Zapatos","Chaqueta"],"correctAnswer":"Camisa","explanation":"\"Camicia\" = \"Camisa\".","promptExtra":"Camicia"},
        {"id":"it7-e2","type":"match","prompt":"Empareja con su traducción","options":["Camisa","Pantalones","Zapatos","Chaqueta"],"correctAnswer":"Pantalones","explanation":"\"Pantaloni\" = \"Pantalones\".","promptExtra":"Pantaloni"},
        {"id":"it7-e3","type":"select","prompt":"¿Cómo se dice \"zapatos\" en italiano?","options":["Scarpe","Camicia","Pantaloni","Giacca"],"correctAnswer":"Scarpe","explanation":"\"Scarpe\" = \"Zapatos\"."},
        {"id":"it7-e4","type":"select","prompt":"¿Qué prenda es \"Giacca\"?","options":["Chaqueta","Camisa","Pantalones","Zapatos"],"correctAnswer":"Chaqueta","explanation":"\"Giacca\" = \"Chaqueta\"."},
        {"id":"it7-e5","type":"select","prompt":"\"Una camicia bianca\" significa:","options":["Una camisa blanca","Una chaqueta blanca","Unos pantalones blancos","Unos zapatos blancos"],"correctAnswer":"Una camisa blanca","explanation":"\"Camicia bianca\" = \"Camisa blanca\"."},
        {"id":"it7-e6","type":"complete","prompt":"Completa: Camic___ (camisa)","options":["ia","io","ie","iu"],"correctAnswer":"ia","explanation":"\"Camicia\" termina en \"ia\".","promptExtra":"ia"},
        {"id":"it7-e7","type":"complete","prompt":"Completa: Pantal___ (pantalones)","options":["oni","ani","eni","ini"],"correctAnswer":"oni","explanation":"\"Pantaloni\" termina en \"oni\".","promptExtra":"oni"},
        {"id":"it7-e8","type":"arrange","prompt":"Ordena las palabras","options":["Mi","piace","la","tua","camicia"],"correctAnswer":"Mi piace la tua camicia","explanation":"\"Mi piace la tua camicia\" = \"Me gusta tu camisa\"."}
      ]
    },
    {
      "id": "italian-8",
      "track": "languages",
      "subTrack": "italian",
      "title": "Tempo e Clima",
      "description": "Espressioni per parlare del tempo",
      "icon": "🌤️",
      "xp": 80,
      "learnCards": [
        {"id":"it8-l1","word":"Soleggiato","translation":"Soleado","example":"Oggi è soleggiato."},
        {"id":"it8-l2","word":"Piovoso","translation":"Lluvioso","example":"Domani sarà piovoso."},
        {"id":"it8-l3","word":"Caldo","translation":"Caluroso","example":"L'estate è molto calda."},
        {"id":"it8-l4","word":"Freddo","translation":"Frío","example":"D'inverno fa freddo."}
      ],
      "exercises": [
        {"id":"it8-e1","type":"match","prompt":"Empareja con su traducción","options":["Soleado","Lluvioso","Caluroso","Frío"],"correctAnswer":"Soleado","explanation":"\"Soleggiato\" = \"Soleado\".","promptExtra":"Soleggiato"},
        {"id":"it8-e2","type":"match","prompt":"Empareja con su traducción","options":["Soleado","Lluvioso","Caluroso","Frío"],"correctAnswer":"Lluvioso","explanation":"\"Piovoso\" = \"Lluvioso\".","promptExtra":"Piovoso"},
        {"id":"it8-e3","type":"select","prompt":"¿Cómo dices que hace frío?","options":["Fa freddo","Fa caldo","È soleggiato","È piovoso"],"correctAnswer":"Fa freddo","explanation":"\"Fa freddo\" = \"Hace frío\"."},
        {"id":"it8-e4","type":"select","prompt":"¿Qué significa \"Caldo\"?","options":["Caluroso","Frío","Soleado","Lluvioso"],"correctAnswer":"Caluroso","explanation":"\"Caldo\" = \"Calor/Caluroso\"."},
        {"id":"it8-e5","type":"select","prompt":"\"Fa caldo\" significa:","options":["Hace calor","Hace frío","Está soleado","Está lluvioso"],"correctAnswer":"Hace calor","explanation":"\"Fa caldo\" = \"Hace calor\"."},
        {"id":"it8-e6","type":"complete","prompt":"Completa: F___do (frío)","options":["red","rad","rid","rud"],"correctAnswer":"red","explanation":"\"Freddo\" contiene \"red\".","promptExtra":"red"},
        {"id":"it8-e7","type":"complete","prompt":"Completa: Solegg___ (soleado)","options":["iato","eato","aato","oato"],"correctAnswer":"iato","explanation":"\"Soleggiato\" contiene \"iato\".","promptExtra":"iato"},
        {"id":"it8-e8","type":"arrange","prompt":"Ordena las palabras","options":["Oggi","è","una","bella","giornata"],"correctAnswer":"Oggi è una bella giornata","explanation":"\"Oggi è una bella giornata\" = \"Hoy es un hermoso día\"."}
      ]
    },
    {
      "id": "italian-9",
      "track": "languages",
      "subTrack": "italian",
      "title": "Trasporti",
      "description": "Vocabolario dei mezzi di trasporto",
      "icon": "🚗",
      "xp": 80,
      "learnCards": [
        {"id":"it9-l1","word":"Macchina","translation":"Coche","example":"Guido la macchina."},
        {"id":"it9-l2","word":"Autobus","translation":"Autobús","example":"L'autobus arriva alle 8."},
        {"id":"it9-l3","word":"Treno","translation":"Tren","example":"Viaggiamo in treno."},
        {"id":"it9-l4","word":"Aereo","translation":"Avión","example":"L'aereo è veloce."}
      ],
      "exercises": [
        {"id":"it9-e1","type":"match","prompt":"Empareja con su traducción","options":["Coche","Autobús","Tren","Avión"],"correctAnswer":"Coche","explanation":"\"Macchina\" = \"Coche\".","promptExtra":"Macchina"},
        {"id":"it9-e2","type":"match","prompt":"Empareja con su traducción","options":["Coche","Autobús","Tren","Avión"],"correctAnswer":"Autobús","explanation":"\"Autobus\" = \"Autobús\".","promptExtra":"Autobus"},
        {"id":"it9-e3","type":"select","prompt":"¿Cómo se dice \"tren\" en italiano?","options":["Treno","Autobus","Macchina","Aereo"],"correctAnswer":"Treno","explanation":"\"Treno\" = \"Tren\"."},
        {"id":"it9-e4","type":"select","prompt":"¿Qué medio de transporte es \"Aereo\"?","options":["Avión","Tren","Barco","Coche"],"correctAnswer":"Avión","explanation":"\"Aereo\" = \"Avión\"."},
        {"id":"it9-e5","type":"select","prompt":"\"Viaggiamo in treno\" significa:","options":["Viajamos en tren","Viajamos en coche","Viajamos en avión","Viajamos en autobús"],"correctAnswer":"Viajamos en tren","explanation":"\"In treno\" = \"En tren\"."},
        {"id":"it9-e6","type":"complete","prompt":"Completa: Aere___ (avión)","options":["o","a","e","i"],"correctAnswer":"o","explanation":"\"Aereo\" termina en \"o\".","promptExtra":"o"},
        {"id":"it9-e7","type":"complete","prompt":"Completa: Autob___ (autobús)","options":["us","os","as","is"],"correctAnswer":"us","explanation":"\"Autobus\" termina en \"us\".","promptExtra":"us"},
        {"id":"it9-e8","type":"arrange","prompt":"Ordena las palabras","options":["L'autobus","è","in","ritardo"],"correctAnswer":"L'autobus è in ritardo","explanation":"\"L'autobus è in ritardo\" = \"El autobús va tarde\"."}
      ]
    },
    {
      "id": "italian-10",
      "track": "languages",
      "subTrack": "italian",
      "title": "Professioni",
      "description": "Nomi delle professioni in italiano",
      "icon": "👨‍💼",
      "xp": 90,
      "learnCards": [
        {"id":"it10-l1","word":"Dottore","translation":"Doctor/Médico","example":"Il dottore è gentile."},
        {"id":"it10-l2","word":"Insegnante","translation":"Profesor/Maestro","example":"L'insegnante spiega bene."},
        {"id":"it10-l3","word":"Ingegnere","translation":"Ingeniero","example":"Lei è un ingegnere."},
        {"id":"it10-l4","word":"Cuoco","translation":"Cocinero","example":"Il cuoco prepara piatti ottimi."}
      ],
      "exercises": [
        {"id":"it10-e1","type":"match","prompt":"Empareja con su traducción","options":["Doctor/Médico","Profesor","Ingeniero","Cocinero"],"correctAnswer":"Doctor/Médico","explanation":"\"Dottore\" = \"Médico\".","promptExtra":"Dottore"},
        {"id":"it10-e2","type":"match","prompt":"Empareja con su traducción","options":["Doctor/Médico","Profesor","Ingeniero","Cocinero"],"correctAnswer":"Profesor","explanation":"\"Insegnante\" = \"Profesor\".","promptExtra":"Insegnante"},
        {"id":"it10-e3","type":"select","prompt":"¿Cómo se dice \"ingeniero\" en italiano?","options":["Ingegnere","Dottore","Insegnante","Cuoco"],"correctAnswer":"Ingegnere","explanation":"\"Ingegnere\" = \"Ingeniero\"."},
        {"id":"it10-e4","type":"select","prompt":"¿Qué hace un \"Cuoco\"?","options":["Cocina","Enseña","Cura","Construye"],"correctAnswer":"Cocina","explanation":"\"Cuoco\" = \"Cocinero\"."},
        {"id":"it10-e5","type":"select","prompt":"\"Il dottore è gentile\" significa:","options":["El médico es amable","El profesor es amable","El cocinero es amable","El ingeniero es amable"],"correctAnswer":"El médico es amable","explanation":"\"Dottore\" = \"Médico\"."},
        {"id":"it10-e6","type":"complete","prompt":"Completa: Cuo___ (cocinero)","options":["co","ca","ce","cu"],"correctAnswer":"co","explanation":"\"Cuoco\" termina en \"co\".","promptExtra":"co"},
        {"id":"it10-e7","type":"complete","prompt":"Completa: Insegn___ (profesor)","options":["ante","ente","inte","onte"],"correctAnswer":"ante","explanation":"\"Insegnante\" termina en \"ante\".","promptExtra":"ante"},
        {"id":"it10-e8","type":"arrange","prompt":"Ordena las palabras","options":["Lui","è","un","ingegnere"],"correctAnswer":"Lui è un ingegnere","explanation":"\"Lui è un ingegnere\" = \"Él es ingeniero\"."}
      ]
    },
    {
      "id": "italian-11",
      "track": "languages",
      "subTrack": "italian",
      "title": "Parti del Corpo",
      "description": "Vocabolario del corpo umano",
      "icon": "🦵",
      "xp": 90,
      "learnCards": [
        {"id":"it11-l1","word":"Testa","translation":"Cabeza","example":"Ho mal di testa."},
        {"id":"it11-l2","word":"Mano","translation":"Mano","example":"Lavati le mani."},
        {"id":"it11-l3","word":"Piede","translation":"Pie","example":"Mi fa male il piede."},
        {"id":"it11-l4","word":"Occhio","translation":"Ojo","example":"Ha gli occhi azzurri."}
      ],
      "exercises": [
        {"id":"it11-e1","type":"match","prompt":"Empareja con su traducción","options":["Cabeza","Mano","Pie","Ojo"],"correctAnswer":"Cabeza","explanation":"\"Testa\" = \"Cabeza\".","promptExtra":"Testa"},
        {"id":"it11-e2","type":"match","prompt":"Empareja con su traducción","options":["Cabeza","Mano","Pie","Ojo"],"correctAnswer":"Mano","explanation":"\"Mano\" = \"Mano\".","promptExtra":"Mano"},
        {"id":"it11-e3","type":"select","prompt":"¿Cómo se dice \"pie\" en italiano?","options":["Piede","Mano","Testa","Occhio"],"correctAnswer":"Piede","explanation":"\"Piede\" = \"Pie\"."},
        {"id":"it11-e4","type":"select","prompt":"¿Qué significa \"Occhio\"?","options":["Ojo","Oreja","Nariz","Boca"],"correctAnswer":"Ojo","explanation":"\"Occhio\" = \"Ojo\"."},
        {"id":"it11-e5","type":"select","prompt":"\"Ho mal di testa\" significa:","options":["Me duele la cabeza","Me duele la mano","Me duele el pie","Me duele el ojo"],"correctAnswer":"Me duele la cabeza","explanation":"\"Mal di testa\" = \"Dolor de cabeza\"."},
        {"id":"it11-e6","type":"complete","prompt":"Completa: Te___ (cabeza)","options":["sta","ste","sti","sto"],"correctAnswer":"sta","explanation":"\"Testa\" contiene \"sta\".","promptExtra":"sta"},
        {"id":"it11-e7","type":"complete","prompt":"Completa: Pi___ (pie)","options":["ede","ede","ida","ade"],"correctAnswer":"ede","explanation":"\"Piede\" contiene \"ede\".","promptExtra":"ede"},
        {"id":"it11-e8","type":"arrange","prompt":"Ordena las palabras","options":["Mi","fa","male","la","testa"],"correctAnswer":"Mi fa male la testa","explanation":"\"Mi fa male la testa\" = \"Me duele la cabeza\"."}
      ]
    },
    {
      "id": "italian-12",
      "track": "languages",
      "subTrack": "italian",
      "title": "Emozioni",
      "description": "Esprimi sentimenti ed emozioni in italiano",
      "icon": "😊",
      "xp": 90,
      "learnCards": [
        {"id":"it12-l1","word":"Felice","translation":"Feliz","example":"Sono molto felice oggi."},
        {"id":"it12-l2","word":"Triste","translation":"Triste","example":"Lei si sente triste."},
        {"id":"it12-l3","word":"Arrabbiato","translation":"Enojado","example":"Non essere arrabbiato."},
        {"id":"it12-l4","word":"Stanco","translation":"Cansado","example":"Sono stanco dopo il lavoro."}
      ],
      "exercises": [
        {"id":"it12-e1","type":"match","prompt":"Empareja con su traducción","options":["Feliz","Triste","Enojado","Cansado"],"correctAnswer":"Feliz","explanation":"\"Felice\" = \"Feliz\".","promptExtra":"Felice"},
        {"id":"it12-e2","type":"match","prompt":"Empareja con su traducción","options":["Feliz","Triste","Enojado","Cansado"],"correctAnswer":"Triste","explanation":"\"Triste\" = \"Triste\".","promptExtra":"Triste"},
        {"id":"it12-e3","type":"select","prompt":"¿Cómo dices \"estoy cansado\"?","options":["Sono stanco","Sono felice","Sono triste","Sono arrabbiato"],"correctAnswer":"Sono stanco","explanation":"\"Stanco\" = \"Cansado\"."},
        {"id":"it12-e4","type":"select","prompt":"¿Qué significa \"Arrabbiato\"?","options":["Enojado","Feliz","Triste","Cansado"],"correctAnswer":"Enojado","explanation":"\"Arrabbiato\" = \"Enojado\"."},
        {"id":"it12-e5","type":"select","prompt":"\"Sono molto felice\" significa:","options":["Estoy muy feliz","Estoy muy triste","Estoy muy enojado","Estoy muy cansado"],"correctAnswer":"Estoy muy feliz","explanation":"\"Felice\" = \"Feliz\"."},
        {"id":"it12-e6","type":"complete","prompt":"Completa: Feli___ (feliz)","options":["ce","se","ze","te"],"correctAnswer":"ce","explanation":"\"Felice\" termina en \"ce\".","promptExtra":"ce"},
        {"id":"it12-e7","type":"complete","prompt":"Completa: Sta___ (cansado)","options":["nco","nca","nce","nci"],"correctAnswer":"nco","explanation":"\"Stanco\" termina en \"nco\".","promptExtra":"nco"},
        {"id":"it12-e8","type":"arrange","prompt":"Ordena las palabras","options":["Sono","così","felice","oggi"],"correctAnswer":"Sono così felice oggi","explanation":"\"Sono così felice oggi\" = \"Estoy tan feliz hoy\"."}
      ]
    }
  ];
const japaneseLessons: Lesson[] = [
    {
      "id": "japanese-1",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Hiragana básico - Saludos",
      "description": "Aprende los primeros caracteres hiragana y saludos",
      "icon": "👋",
      "xp": 30,
      "learnCards": [
        {
          "id": "ja1-l1",
          "word": "あ",
          "translation": "a",
          "phonetic": "a",
          "note": "El hiragana es uno de los silabarios japoneses. Cada símbolo representa una sílaba."
        },
        {
          "id": "ja1-l2",
          "word": "い",
          "translation": "i",
          "phonetic": "i",
          "note": "Las vocales son la base del hiragana: あ(a) い(i) う(u) え(e) お(o)"
        },
        {
          "id": "ja1-l3",
          "word": "う",
          "translation": "u",
          "phonetic": "u",
          "example": "うえ (ue) = arriba"
        },
        {
          "id": "ja1-l4",
          "word": "おはよう",
          "translation": "Buenos días",
          "phonetic": "ohayou",
          "example": "おはようございます (ohayou gozaimasu) = Buenos días (formal)",
          "note": "Primera palabra japonesa: お(o) + は(ha) + よ(yo) + う(u)"
        }
      ],
      "exercises": [
        {
          "id": "ja1-e1",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "a",
            "i",
            "u",
            "o"
          ],
          "correctAnswer": "a",
          "explanation": "\"あ\" se pronuncia \"a\", como en español.",
          "promptExtra": "あ"
        },
        {
          "id": "ja1-e2",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "i",
            "a",
            "u",
            "e"
          ],
          "correctAnswer": "i",
          "explanation": "\"い\" se pronuncia \"i\".",
          "promptExtra": "い"
        },
        {
          "id": "ja1-e3",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "amor",
            "casa",
            "arriba",
            "sobrino"
          ],
          "correctAnswer": "amor",
          "explanation": "\"あい\" (ai) = \"amor\".",
          "promptExtra": "あい"
        },
        {
          "id": "ja1-e4",
          "type": "select",
          "prompt": "¿Qué significa \"おはよう\"?",
          "options": [
            "Buenos días",
            "Buenas noches",
            "Hola",
            "Adiós"
          ],
          "correctAnswer": "Buenos días",
          "explanation": "\"おはよう\" (ohayou) = \"Buenos días\"."
        },
        {
          "id": "ja1-e5",
          "type": "select",
          "prompt": "¿Cómo suena \"う\"?",
          "options": [
            "u",
            "e",
            "o",
            "a"
          ],
          "correctAnswer": "u",
          "explanation": "\"う\" suena como la \"u\" española."
        },
        {
          "id": "ja1-e6",
          "type": "select",
          "prompt": "¿Qué significa \"いえ\" (ie)?",
          "options": [
            "Casa",
            "Amor",
            "Arriba",
            "Sobrino"
          ],
          "correctAnswer": "Casa",
          "explanation": "\"いえ\" (ie) significa \"casa\"."
        },
        {
          "id": "ja1-e7",
          "type": "select",
          "prompt": "¿Qué es el hiragana?",
          "options": [
            "Un silabario japonés",
            "Un tipo de kanji",
            "El alfabeto coreano",
            "Una comida japonesa"
          ],
          "correctAnswer": "Un silabario japonés",
          "explanation": "El hiragana es uno de los silabarios del japonés."
        },
        {
          "id": "ja1-e8",
          "type": "select",
          "prompt": "¿Cómo suena \"お\"?",
          "options": [
            "o",
            "a",
            "u",
            "e"
          ],
          "correctAnswer": "o",
          "explanation": "\"お\" suena como la \"o\" española."
        }
      ]
    },
    {
      "id": "japanese-2",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Más hiragana - Presentaciones",
      "description": "Aprende la serie K del hiragana y cómo presentarte",
      "icon": "🙋",
      "xp": 40,
      "learnCards": [
        {
          "id": "ja2-l1",
          "word": "か",
          "translation": "ka",
          "phonetic": "ka",
          "note": "Serie K: か(ka) き(ki) く(ku) け(ke) こ(ko)"
        },
        {
          "id": "ja2-l2",
          "word": "かお",
          "translation": "Cara",
          "phonetic": "kao",
          "example": "かお (kao) = cara / rostro"
        },
        {
          "id": "ja2-l3",
          "word": "こえ",
          "translation": "Voz",
          "phonetic": "koe",
          "example": "こえ (koe) = voz"
        },
        {
          "id": "ja2-l4",
          "word": "わたしは___です",
          "translation": "Yo soy ___",
          "phonetic": "watashi wa ___ desu",
          "example": "わたしは がくせい です (watashi wa gakusei desu) = Soy estudiante",
          "note": "\"わたし\" (watashi) es \"yo\", escrito solo en hiragana"
        }
      ],
      "exercises": [
        {
          "id": "ja2-e1",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "ka",
            "ki",
            "ku",
            "ko"
          ],
          "correctAnswer": "ka",
          "explanation": "\"か\" se pronuncia \"ka\".",
          "promptExtra": "か"
        },
        {
          "id": "ja2-e2",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Cara",
            "Voz",
            "Rojo",
            "Ir"
          ],
          "correctAnswer": "Cara",
          "explanation": "\"かお\" (kao) = \"cara\".",
          "promptExtra": "かお"
        },
        {
          "id": "ja2-e3",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "ko",
            "ka",
            "ki",
            "ke"
          ],
          "correctAnswer": "ko",
          "explanation": "\"こ\" se pronuncia \"ko\".",
          "promptExtra": "こ"
        },
        {
          "id": "ja2-e4",
          "type": "select",
          "prompt": "¿Cómo dices \"Yo soy estudiante\" en japonés?",
          "options": [
            "わたしは がくせい です",
            "わたしの なまえは がくせい です",
            "こんにちは がくせい です",
            "おなまえは がくせい です"
          ],
          "correctAnswer": "わたしは がくせい です",
          "explanation": "\"わたしは___です\" = \"Yo soy ___\"."
        },
        {
          "id": "ja2-e5",
          "type": "select",
          "prompt": "¿Qué significa \"いく\" (iku)?",
          "options": [
            "Ir",
            "Venir",
            "Comer",
            "Beber"
          ],
          "correctAnswer": "Ir",
          "explanation": "\"いく\" (iku) significa \"ir\"."
        },
        {
          "id": "ja2-e6",
          "type": "select",
          "prompt": "¿Cómo suena \"き\"?",
          "options": [
            "ki",
            "ka",
            "ku",
            "ke"
          ],
          "correctAnswer": "ki",
          "explanation": "\"き\" suena como \"ki\"."
        },
        {
          "id": "ja2-e7",
          "type": "select",
          "prompt": "¿Qué significa \"あか\" (aka)?",
          "options": [
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Rojo",
          "explanation": "\"あか\" (aka) significa \"rojo\"."
        },
        {
          "id": "ja2-e8",
          "type": "select",
          "prompt": "¿Qué palabra significa \"yo\" en japonés?",
          "options": [
            "わたし (watashi)",
            "なまえ (namae)",
            "がくせい (gakusei)",
            "こえ (koe)"
          ],
          "correctAnswer": "わたし (watashi)",
          "explanation": "\"わたし\" (watashi) = \"yo\" en hiragana."
        }
      ]
    },
    {
      "id": "japanese-3",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Hiragana - Comida",
      "description": "Aprende la serie S del hiragana y vocabulario de comida",
      "icon": "🍣",
      "xp": 50,
      "learnCards": [
        {
          "id": "ja3-l1",
          "word": "さ",
          "translation": "sa",
          "phonetic": "sa",
          "note": "Serie S: さ(sa) し(shi) す(su) せ(se) そ(so)"
        },
        {
          "id": "ja3-l2",
          "word": "すし",
          "translation": "Sushi",
          "phonetic": "sushi",
          "example": "すし を ください (sushi o kudasai) = Sushi, por favor"
        },
        {
          "id": "ja3-l3",
          "word": "いす",
          "translation": "Silla",
          "phonetic": "isu",
          "example": "いす (isu) = silla"
        },
        {
          "id": "ja3-l4",
          "word": "___を ください",
          "translation": "Deme ___ por favor",
          "phonetic": "___ o kudasai",
          "example": "みず を ください (mizu o kudasai) = Agua, por favor",
          "note": "\"を\" (wo/o) marca el objeto directo"
        }
      ],
      "exercises": [
        {
          "id": "ja3-e1",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "sa",
            "shi",
            "su",
            "so"
          ],
          "correctAnswer": "sa",
          "explanation": "\"さ\" se pronuncia \"sa\".",
          "promptExtra": "さ"
        },
        {
          "id": "ja3-e2",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Sushi",
            "Silla",
            "Paraguas",
            "Mañana"
          ],
          "correctAnswer": "Sushi",
          "explanation": "\"すし\" (sushi) es el famoso plato japonés.",
          "promptExtra": "すし"
        },
        {
          "id": "ja3-e3",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "shi",
            "sa",
            "su",
            "se"
          ],
          "correctAnswer": "shi",
          "explanation": "\"し\" se pronuncia \"shi\" (como \"sh\" inglesa).",
          "promptExtra": "し"
        },
        {
          "id": "ja3-e4",
          "type": "select",
          "prompt": "¿Cómo dices \"Agua, por favor\"?",
          "options": [
            "みず を ください",
            "みず は どこですか",
            "みず が すきです",
            "すみません みず"
          ],
          "correctAnswer": "みず を ください",
          "explanation": "\"___をください\" = \"Deme ___, por favor\"."
        },
        {
          "id": "ja3-e5",
          "type": "select",
          "prompt": "¿Qué significa \"かさ\" (kasa)?",
          "options": [
            "Paraguas",
            "Silla",
            "Sushi",
            "Mañana"
          ],
          "correctAnswer": "Paraguas",
          "explanation": "\"かさ\" (kasa) = \"paraguas\"."
        },
        {
          "id": "ja3-e6",
          "type": "select",
          "prompt": "¿Qué significa \"あさ\" (asa)?",
          "options": [
            "Mañana",
            "Noche",
            "Tarde",
            "Día"
          ],
          "correctAnswer": "Mañana",
          "explanation": "\"あさ\" (asa) = \"mañana\" (parte del día)."
        },
        {
          "id": "ja3-e7",
          "type": "select",
          "prompt": "¿Cómo suena \"そ\"?",
          "options": [
            "so",
            "sa",
            "su",
            "shi"
          ],
          "correctAnswer": "so",
          "explanation": "\"そ\" suena como \"so\"."
        },
        {
          "id": "ja3-e8",
          "type": "select",
          "prompt": "¿Qué partícula marca el objeto directo?",
          "options": [
            "を (wo/o)",
            "は (wa)",
            "が (ga)",
            "の (no)"
          ],
          "correctAnswer": "を (wo/o)",
          "explanation": "\"を\" (se pronuncia \"o\") marca el objeto directo."
        }
      ]
    },
    {
      "id": "japanese-4",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Hiragana - Números y animales",
      "description": "Aprende la serie T del hiragana, números y animales",
      "icon": "🐱",
      "xp": 60,
      "learnCards": [
        {
          "id": "ja4-l1",
          "word": "た, ち, つ, て, と",
          "translation": "ta, chi, tsu, te, to",
          "phonetic": "ta, chi, tsu, te, to",
          "note": "Serie T: た(ta) ち(chi) つ(tsu) て(te) と(to). Nota: \"ち\" = \"chi\" y \"つ\" = \"tsu\" son especiales."
        },
        {
          "id": "ja4-l2",
          "word": "いち, に, さん",
          "translation": "Uno, dos, tres",
          "phonetic": "ichi, ni, san",
          "example": "いち (ichi) = 1,  に (ni) = 2,  さん (san) = 3"
        },
        {
          "id": "ja4-l3",
          "word": "し/よん, ご",
          "translation": "Cuatro, cinco",
          "phonetic": "shi/yon, go",
          "example": "し/よん (shi/yon) = 4,  ご (go) = 5"
        },
        {
          "id": "ja4-l4",
          "word": "いぬ, ねこ, とり",
          "translation": "Perro, gato, pájaro",
          "phonetic": "inu, neko, tori",
          "example": "いぬ (inu) = perro, ねこ (neko) = gato, とり (tori) = pájaro"
        }
      ],
      "exercises": [
        {
          "id": "ja4-e1",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "chi",
            "ta",
            "tsu",
            "to"
          ],
          "correctAnswer": "chi",
          "explanation": "\"ち\" se pronuncia \"chi\".",
          "promptExtra": "ち"
        },
        {
          "id": "ja4-e2",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Perro",
            "Gato",
            "Pájaro",
            "Pez"
          ],
          "correctAnswer": "Perro",
          "explanation": "\"いぬ\" (inu) = \"perro\".",
          "promptExtra": "いぬ"
        },
        {
          "id": "ja4-e3",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "tsu",
            "ta",
            "chi",
            "te"
          ],
          "correctAnswer": "tsu",
          "explanation": "\"つ\" se pronuncia \"tsu\".",
          "promptExtra": "つ"
        },
        {
          "id": "ja4-e4",
          "type": "select",
          "prompt": "¿Cómo se dice \"gato\" en japonés?",
          "options": [
            "ねこ (neko)",
            "いぬ (inu)",
            "とり (tori)",
            "さかな (sakana)"
          ],
          "correctAnswer": "ねこ (neko)",
          "explanation": "\"ねこ\" (neko) = \"gato\"."
        },
        {
          "id": "ja4-e5",
          "type": "select",
          "prompt": "¿Cuánto es \"さん\" (san)?",
          "options": [
            "3",
            "1",
            "2",
            "5"
          ],
          "correctAnswer": "3",
          "explanation": "\"さん\" (san) = 3."
        },
        {
          "id": "ja4-e6",
          "type": "select",
          "prompt": "¿Qué significa \"とり\" (tori)?",
          "options": [
            "Pájaro",
            "Perro",
            "Gato",
            "Pez"
          ],
          "correctAnswer": "Pájaro",
          "explanation": "\"とり\" (tori) = \"pájaro\"."
        },
        {
          "id": "ja4-e7",
          "type": "select",
          "prompt": "¿Cómo se lee \"に\"?",
          "options": [
            "ni",
            "ni (2)",
            "san (3)",
            "ichi (1)"
          ],
          "correctAnswer": "ni",
          "explanation": "\"に\" se pronuncia \"ni\" y representa el número 2."
        },
        {
          "id": "ja4-e8",
          "type": "select",
          "prompt": "¿Cómo se dice \"cuatro\" en japonés?",
          "options": [
            "し/よん (shi/yon)",
            "さん (san)",
            "ご (go)",
            "に (ni)"
          ],
          "correctAnswer": "し/よん (shi/yon)",
          "explanation": "\"四\" se puede leer \"し\" (shi) o \"よん\" (yon)."
        }
      ]
    },
    {
      "id": "japanese-5",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Introducción al Kanji",
      "description": "Descubre el kanji: caracteres de origen chino en japonés",
      "icon": "🈶",
      "xp": 70,
      "learnCards": [
        {
          "id": "ja5-l1",
          "word": "一 ・ 二 ・ 三",
          "translation": "Uno, dos, tres",
          "phonetic": "いち (ichi), に (ni), さん (san)",
          "note": "El japonés tiene 3 sistemas: Hiragana (silabario básico), Katakana (para palabras extranjeras) y Kanji (caracteres de origen chino)."
        },
        {
          "id": "ja5-l2",
          "word": "人 ・ 日 ・ 月",
          "translation": "Persona, día/sol, mes/luna",
          "phonetic": "ひと (hito), にち (nichi), つき (tsuki)",
          "example": "人 (persona), 日 (día/sol), 月 (mes/luna)"
        },
        {
          "id": "ja5-l3",
          "word": "犬 ・ 猫",
          "translation": "Perro, gato",
          "phonetic": "いぬ (inu), ねこ (neko)",
          "example": "犬 = perro,  猫 = gato"
        },
        {
          "id": "ja5-l4",
          "word": "日本",
          "translation": "Japón",
          "phonetic": "にほん/にっぽん (nihon/nippon)",
          "example": "日 (sol) + 本 (origen) = Japón (el origen del sol)",
          "note": "Muchos kanji se combinan para formar palabras nuevas"
        }
      ],
      "exercises": [
        {
          "id": "ja5-e1",
          "type": "match",
          "prompt": "Empareja el kanji con su significado",
          "options": [
            "Uno",
            "Dos",
            "Tres",
            "Persona"
          ],
          "correctAnswer": "Uno",
          "explanation": "\"一\" significa \"uno\".",
          "promptExtra": "一"
        },
        {
          "id": "ja5-e2",
          "type": "match",
          "prompt": "Empareja el kanji con su significado",
          "options": [
            "Día/sol",
            "Persona",
            "Mes/luna",
            "Japón"
          ],
          "correctAnswer": "Día/sol",
          "explanation": "\"日\" significa \"día\" o \"sol\".",
          "promptExtra": "日"
        },
        {
          "id": "ja5-e3",
          "type": "match",
          "prompt": "Empareja el kanji con su significado",
          "options": [
            "Perro",
            "Gato",
            "Persona",
            "Japón"
          ],
          "correctAnswer": "Perro",
          "explanation": "\"犬\" significa \"perro\".",
          "promptExtra": "犬"
        },
        {
          "id": "ja5-e4",
          "type": "select",
          "prompt": "¿Cuáles son los 3 sistemas de escritura japonesa?",
          "options": [
            "Hiragana, Katakana y Kanji",
            "Hangul, Hanja y Kanji",
            "Hiragana, Romaji y Kanji",
            "Katakana, Hanzi y Kanji"
          ],
          "correctAnswer": "Hiragana, Katakana y Kanji",
          "explanation": "El japonés usa Hiragana, Katakana y Kanji."
        },
        {
          "id": "ja5-e5",
          "type": "select",
          "prompt": "¿Qué significa \"日本\" (nihon)?",
          "options": [
            "Japón",
            "China",
            "Corea",
            "Sol naciente"
          ],
          "correctAnswer": "Japón",
          "explanation": "\"日本\" = Japón. Literalmente \"origen del sol\"."
        },
        {
          "id": "ja5-e6",
          "type": "select",
          "prompt": "¿Qué significa \"猫\"?",
          "options": [
            "Gato",
            "Perro",
            "Pájaro",
            "Pez"
          ],
          "correctAnswer": "Gato",
          "explanation": "\"猫\" (neko) = \"gato\"."
        },
        {
          "id": "ja5-e7",
          "type": "select",
          "prompt": "¿Cómo se lee \"人\" (persona)?",
          "options": [
            "hito",
            "inu",
            "neko",
            "nichi"
          ],
          "correctAnswer": "hito",
          "explanation": "\"人\" se lee \"ひと\" (hito)."
        },
        {
          "id": "ja5-e8",
          "type": "select",
          "prompt": "¿Qué kanji significa \"luna/mes\"?",
          "options": [
            "月",
            "日",
            "人",
            "一"
          ],
          "correctAnswer": "月",
          "explanation": "\"月\" (tsuki) = \"luna\" o \"mes\"."
        }
      ]
    },
    {
      "id": "japanese-6",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Más Hiragana",
      "description": "Nuevos caracteres hiragana: ta chi tsu te to, na ni nu ne no",
      "icon": "た",
      "xp": 80,
      "learnCards": [
        {"id":"ja6-l1","word":"た ・ ち ・ つ ・ て ・ と","translation":"ta, chi, tsu, te, to","phonetic":"た行 (ta-gyō) — columna T","example":"たこ (tako) = pulpo, つき (tsuki) = luna"},
        {"id":"ja6-l2","word":"な ・ に ・ ぬ ・ ね ・ の","translation":"na, ni, nu, ne, no","phonetic":"な行 (na-gyō) — columna N","example":"なに (nani) = qué, ねこ (neko) = gato"},
        {"id":"ja6-l3","word":"は ・ ひ ・ ふ ・ へ ・ ほ","translation":"ha, hi, fu, he, ho","phonetic":"は行 (ha-gyō) — columna H","example":"はな (hana) = flor, ふね (fune) = barco"},
        {"id":"ja6-l4","word":"ま ・ み ・ む ・ め ・ も","translation":"ma, mi, mu, me, mo","phonetic":"ま行 (ma-gyō) — columna M","example":"みみ (mimi) = oreja, むし (mushi) = insecto"}
      ],
      "exercises": [
        {"id":"ja6-e1","type":"match","prompt":"Empareja el hiragana con su sonido","options":["ta","chi","tsu","te"],"correctAnswer":"ta","explanation":"\"た\" se lee \"ta\".","promptExtra":"た"},
        {"id":"ja6-e2","type":"match","prompt":"Empareja el hiragana con su sonido","options":["na","ni","nu","ne"],"correctAnswer":"na","explanation":"\"な\" se lee \"na\".","promptExtra":"な"},
        {"id":"ja6-e3","type":"match","prompt":"Empareja el hiragana con su sonido","options":["ha","hi","fu","he"],"correctAnswer":"ha","explanation":"\"は\" se lee \"ha\".","promptExtra":"は"},
        {"id":"ja6-e4","type":"match","prompt":"Empareja el hiragana con su sonido","options":["ma","mi","mu","me"],"correctAnswer":"ma","explanation":"\"ま\" se lee \"ma\".","promptExtra":"ま"},
        {"id":"ja6-e5","type":"select","prompt":"¿Cómo se lee \"つ\"?","options":["tsu","ta","chi","su"],"correctAnswer":"tsu","explanation":"\"つ\" = \"tsu\". No es \"su\" (す)."},
        {"id":"ja6-e6","type":"select","prompt":"¿Qué significa \"ねこ\" (neko)?","options":["Gato","Perro","Pez","Pájaro"],"correctAnswer":"Gato","explanation":"\"ねこ\" (neko) = \"gato\"."},
        {"id":"ja6-e7","type":"select","prompt":"¿Cómo se lee \"ふ\"?","options":["fu","hu","bu","pu"],"correctAnswer":"fu","explanation":"\"ふ\" = \"fu\". Es una F suave, entre F y H."},
        {"id":"ja6-e8","type":"select","prompt":"¿Qué hiragana es \"mi\"?","options":["み","ま","む","め"],"correctAnswer":"み","explanation":"\"み\" = \"mi\"."}
      ]
    },
    {
      "id": "japanese-7",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Números 6-10",
      "description": "Aprende a contar del 6 al 10 en japonés",
      "icon": "🔢",
      "xp": 80,
      "learnCards": [
        {"id":"ja7-l1","word":"六","translation":"Seis (roku)","phonetic":"ろく (roku)","example":"六時 (roku-ji) = las 6 en punto"},
        {"id":"ja7-l2","word":"七","translation":"Siete (shichi/nana)","phonetic":"しち/なな (shichi/nana)","example":"七日 (nanoka) = día 7 del mes"},
        {"id":"ja7-l3","word":"八","translation":"Ocho (hachi)","phonetic":"はち (hachi)","example":"八つ (yattsu) = ocho cosas"},
        {"id":"ja7-l4","word":"九 ・ 十","translation":"Nueve (kyuu/ku), Diez (juu)","phonetic":"きゅう/く (kyuu/ku), じゅう (juu)","example":"九時 (ku-ji), 十時 (juu-ji)"}
      ],
      "exercises": [
        {"id":"ja7-e1","type":"match","prompt":"Empareja el número con su lectura","options":["roku","shichi/nana","hachi","kyuu"],"correctAnswer":"roku","explanation":"\"六\" se lee \"ろく\" (roku).","promptExtra":"六"},
        {"id":"ja7-e2","type":"match","prompt":"Empareja el número con su lectura","options":["roku","shichi/nana","hachi","kyuu"],"correctAnswer":"shichi/nana","explanation":"\"七\" se lee \"しち/なな\" (shichi/nana).","promptExtra":"七"},
        {"id":"ja7-e3","type":"match","prompt":"Empareja el número con su lectura","options":["roku","shichi/nana","hachi","kyuu"],"correctAnswer":"hachi","explanation":"\"八\" se lee \"はち\" (hachi).","promptExtra":"八"},
        {"id":"ja7-e4","type":"match","prompt":"Empareja el número con su lectura","options":["roku","shichi/nana","hachi","kyuu"],"correctAnswer":"kyuu","explanation":"\"九\" se lee \"きゅう\" (kyuu).","promptExtra":"九"},
        {"id":"ja7-e5","type":"select","prompt":"¿Cómo se dice \"diez\" en japonés?","options":["juu","kyuu","hachi","roku"],"correctAnswer":"juu","explanation":"\"十\" (juu) = \"diez\"."},
        {"id":"ja7-e6","type":"select","prompt":"¿Qué número es \"八\"?","options":["Ocho","Siete","Seis","Nueve"],"correctAnswer":"Ocho","explanation":"\"八\" (hachi) = \"ocho\"."},
        {"id":"ja7-e7","type":"select","prompt":"¿Cuál es la lectura kun de \"七\"?","options":["nana","shichi","roku","hachi"],"correctAnswer":"nana","explanation":"\"七\" tiene dos lecturas: on'yomi \"shichi\" y kun'yomi \"nana\"."},
        {"id":"ja7-e8","type":"select","prompt":"¿Cómo se dice \"las 6 en punto\"?","options":["六時 (roku-ji)","六日 (muika)","六月 (roku-gatsu)","六つ (muttsu)"],"correctAnswer":"六時 (roku-ji)","explanation":"\"時\" (ji) = \"hora\". 六時 = las 6."}
      ]
    },
    {
      "id": "japanese-8",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Comida Japonesa",
      "description": "Aprende a pedir y hablar de comida japonesa",
      "icon": "🍣",
      "xp": 90,
      "learnCards": [
        {"id":"ja8-l1","word":"すし ・ さしみ","translation":"Sushi, Sashimi","phonetic":"sushi, sashimi","example":"すしを食べたい (Quiero comer sushi)."},
        {"id":"ja8-l2","word":"ラーメン ・ うどん","translation":"Ramen, Udon","phonetic":"raamen, udon","example":"ラーメンが好きです (Me gusta el ramen)."},
        {"id":"ja8-l3","word":"てんぷら ・ おこのみやき","translation":"Tempura, Okonomiyaki","phonetic":"tenpura, okonomiyaki","example":"てんぷらは美味しい (La tempura está deliciosa)."},
        {"id":"ja8-l4","word":"みそしる ・ おにぎり","translation":"Sopa de miso, Onigiri","phonetic":"misoshiru, onigiri","example":"みそしるをください (Sopa de miso, por favor)."}
      ],
      "exercises": [
        {"id":"ja8-e1","type":"match","prompt":"Empareja la comida con su descripción","options":["Arroz con pescado crudo","Sopa de fideos","Fritura ligera","Bola de arroz"],"correctAnswer":"Arroz con pescado crudo","explanation":"\"すし\" (sushi) = arroz avinagrado con pescado.","promptExtra":"すし"},
        {"id":"ja8-e2","type":"match","prompt":"Empareja la comida con su descripción","options":["Arroz con pescado crudo","Sopa de fideos","Fritura ligera","Bola de arroz"],"correctAnswer":"Sopa de fideos","explanation":"\"ラーメン\" = sopa de fideos.","promptExtra":"ラーメン"},
        {"id":"ja8-e3","type":"match","prompt":"Empareja la comida con su descripción","options":["Arroz con pescado crudo","Sopa de fideos","Fritura ligera","Bola de arroz"],"correctAnswer":"Fritura ligera","explanation":"\"てんぷら\" = tempura (fritura).","promptExtra":"てんぷら"},
        {"id":"ja8-e4","type":"match","prompt":"Empareja la comida con su descripción","options":["Arroz con pescado crudo","Sopa de fideos","Fritura ligera","Bola de arroz"],"correctAnswer":"Bola de arroz","explanation":"\"おにぎり\" = bola de arroz.","promptExtra":"おにぎり"},
        {"id":"ja8-e5","type":"select","prompt":"¿Cómo dices \"está delicioso\" en japonés?","options":["美味しい (oishii)","まずい (mazui)","たべたい (tabetai)","すき (suki)"],"correctAnswer":"美味しい (oishii)","explanation":"\"美味しい\" (oishii) = \"delicioso\"."},
        {"id":"ja8-e6","type":"select","prompt":"¿Qué es \"みそしる\" (misoshiru)?","options":["Sopa de miso","Arroz con curry","Fideos fríos","Té verde"],"correctAnswer":"Sopa de miso","explanation":"\"みそしる\" = sopa de pasta de soja fermentada."},
        {"id":"ja8-e7","type":"select","prompt":"¿Cómo pides algo educadamente?","options":["〜をください (~o kudasai)","〜がほしい (~ga hoshii)","〜をたべる (~o taberu)","〜です (~desu)"],"correctAnswer":"〜をください (~o kudasai)","explanation":"\"〜をください\" = \"Deme ~ por favor\"."},
        {"id":"ja8-e8","type":"select","prompt":"¿Qué es \"おこのみやき\" (okonomiyaki)?","options":["Tortilla japonesa con varios ingredientes","Sopa de miso","Arroz con curry","Fideos udon"],"correctAnswer":"Tortilla japonesa con varios ingredientes","explanation":"\"おこのみやき\" = tortilla/pancake salada japonesa."}
      ]
    },
    {
      "id": "japanese-9",
      "track": "languages",
      "subTrack": "japanese",
      "title": "En el Restaurante",
      "description": "Frases útiles para comer en un restaurante japonés",
      "icon": "🍜",
      "xp": 90,
      "learnCards": [
        {"id":"ja9-l1","word":"いらっしゃいませ","translation":"¡Bienvenido! (al entrar a un local)","phonetic":"irasshaimase","example":"Se dice al entrar en tiendas y restaurantes."},
        {"id":"ja9-l2","word":"注文をお願いします","translation":"Quisiera hacer mi pedido","phonetic":"chuumon o onegai shimasu","example":"ちゅうもんをおねがいします"},
        {"id":"ja9-l3","word":"お会計をお願いします","translation":"La cuenta, por favor","phonetic":"okaikei o onegai shimasu","example":"おかいけいをおねがいします"},
        {"id":"ja9-l4","word":"ごちそうさまでした","translation":"Gracias por la comida (al terminar)","phonetic":"gochisousama deshita","example":"Se dice después de comer para agradecer."}
      ],
      "exercises": [
        {"id":"ja9-e1","type":"match","prompt":"Empareja la frase con su uso","options":["Al entrar al restaurante","Al pedir","Al pagar","Al terminar de comer"],"correctAnswer":"Al entrar al restaurante","explanation":"\"いらっしゃいませ\" es el saludo de bienvenida.","promptExtra":"いらっしゃいませ"},
        {"id":"ja9-e2","type":"match","prompt":"Empareja la frase con su uso","options":["Al entrar al restaurante","Al pedir","Al pagar","Al terminar de comer"],"correctAnswer":"Al pedir","explanation":"\"注文\" (chuumon) = \"pedido\".","promptExtra":"注文をお願いします"},
        {"id":"ja9-e3","type":"match","prompt":"Empareja la frase con su uso","options":["Al entrar al restaurante","Al pedir","Al pagar","Al terminar de comer"],"correctAnswer":"Al pagar","explanation":"\"お会計\" (okaikei) = \"la cuenta\".","promptExtra":"お会計をお願いします"},
        {"id":"ja9-e4","type":"match","prompt":"Empareja la frase con su uso","options":["Al entrar al restaurante","Al pedir","Al pagar","Al terminar de comer"],"correctAnswer":"Al terminar de comer","explanation":"\"ごちそうさまでした\" se dice al terminar.","promptExtra":"ごちそうさまでした"},
        {"id":"ja9-e5","type":"select","prompt":"¿Qué dices al entrar a un restaurante japonés?","options":["Escuchas \"いらっしゃいませ\"","Dices \"さようなら\"","Dices \"こんにちは\"","Dices \"ありがとう\""],"correctAnswer":"Escuchas \"いらっしゃいませ\"","explanation":"El personal dice \"いらっしゃいませ\" al entrar."},
        {"id":"ja9-e6","type":"select","prompt":"¿Cómo pides la cuenta?","options":["お会計をお願いします","注文をお願いします","ごちそうさまでした","いらっしゃいませ"],"correctAnswer":"お会計をお願いします","explanation":"\"お会計\" = \"la cuenta\"."},
        {"id":"ja9-e7","type":"select","prompt":"¿Qué significa \"ごちそうさまでした\"?","options":["Gracias por la comida","La cuenta por favor","Quiero pedir","Hasta luego"],"correctAnswer":"Gracias por la comida","explanation":"Es una expresión de gratitud después de comer."},
        {"id":"ja9-e8","type":"select","prompt":"\"お願いします\" (onegai shimasu) significa:","options":["Por favor","Gracias","Perdón","Hola"],"correctAnswer":"Por favor","explanation":"\"お願いします\" es una forma educada de pedir algo."}
      ]
    },
    {
      "id": "japanese-10",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Expresiones Cotidianas",
      "description": "Frases que usarás a diario en Japón",
      "icon": "🗣️",
      "xp": 90,
      "learnCards": [
        {"id":"ja10-l1","word":"おはようございます","translation":"Buenos días (formal)","phonetic":"ohayou gozaimasu","example":"Se usa hasta las 10-11 AM aproximadamente."},
        {"id":"ja10-l2","word":"おやすみなさい","translation":"Buenas noches (al despedirse)","phonetic":"oyasuminasai","example":"Se dice antes de ir a dormir."},
        {"id":"ja10-l3","word":"すみません","translation":"Disculpe / Perdón","phonetic":"sumimasen","example":"También se usa para llamar al mesero."},
        {"id":"ja10-l4","word":"大丈夫ですか","translation":"¿Estás bien?","phonetic":"daijoubu desu ka","example":"大丈夫です = Estoy bien / No hay problema."}
      ],
      "exercises": [
        {"id":"ja10-e1","type":"match","prompt":"Empareja con su uso","options":["Saludo matutino","Despedida nocturna","Para disculparse","Para preguntar si está bien"],"correctAnswer":"Saludo matutino","explanation":"\"おはようございます\" = \"Buenos días\".","promptExtra":"おはようございます"},
        {"id":"ja10-e2","type":"match","prompt":"Empareja con su uso","options":["Saludo matutino","Despedida nocturna","Para disculparse","Para preguntar si está bien"],"correctAnswer":"Despedida nocturna","explanation":"\"おやすみなさい\" se dice antes de dormir.","promptExtra":"おやすみなさい"},
        {"id":"ja10-e3","type":"match","prompt":"Empareja con su uso","options":["Saludo matutino","Despedida nocturna","Para disculparse","Para preguntar si está bien"],"correctAnswer":"Para disculparse","explanation":"\"すみません\" = \"disculpe/perdón\".","promptExtra":"すみません"},
        {"id":"ja10-e4","type":"match","prompt":"Empareja con su uso","options":["Saludo matutino","Despedida nocturna","Para disculparse","Para preguntar si está bien"],"correctAnswer":"Para preguntar si está bien","explanation":"\"大丈夫ですか\" = \"¿Estás bien?\".","promptExtra":"大丈夫ですか"},
        {"id":"ja10-e5","type":"select","prompt":"¿Cómo dices \"estoy bien\" en japonés?","options":["大丈夫です (daijoubu desu)","おはようございます","すみません","おやすみなさい"],"correctAnswer":"大丈夫です (daijoubu desu)","explanation":"\"大丈夫\" (daijoubu) = \"bien / no hay problema\"."},
        {"id":"ja10-e6","type":"select","prompt":"\"すみません\" se usa para:","options":["Disculparse y llamar la atención","Saludar por la mañana","Despedirse","Dar las gracias"],"correctAnswer":"Disculparse y llamar la atención","explanation":"\"すみません\" es muy versátil: disculpa, llamar mesero, etc."},
        {"id":"ja10-e7","type":"select","prompt":"¿Qué dices antes de dormir?","options":["おやすみなさい","おはようございます","こんばんは","すみません"],"correctAnswer":"おやすみなさい","explanation":"\"おやすみなさい\" = \"buenas noches\" (al ir a dormir)."},
        {"id":"ja10-e8","type":"select","prompt":"¿La forma casual de \"おはようございます\" es?","options":["おはよう","おはよ","おは","ございます"],"correctAnswer":"おはよう","explanation":"\"おはよう\" es la versión casual entre amigos."}
      ]
    },
    {
      "id": "japanese-11",
      "track": "languages",
      "subTrack": "japanese",
      "title": "Direcciones",
      "description": "Cómo preguntar y entender direcciones en japonés",
      "icon": "🗺️",
      "xp": 100,
      "learnCards": [
        {"id":"ja11-l1","word":"まっすぐ","translation":"Todo recto","phonetic":"massugu","example":"まっすぐ行ってください (Vaya todo recto)."},
        {"id":"ja11-l2","word":"右 ・ 左","translation":"Derecha, Izquierda","phonetic":"みぎ (migi), ひだり (hidari)","example":"右に曲がってください (Gire a la derecha)."},
        {"id":"ja11-l3","word":"〜はどこですか","translation":"¿Dónde está ~?","phonetic":"~ wa doko desu ka","example":"駅はどこですか (¿Dónde está la estación?)"},
        {"id":"ja11-l4","word":"信号 ・ 交差点","translation":"Semáforo, cruce","phonetic":"しんごう (shingou), こうさてん (kousaten)","example":"信号を右に曲がって (En el semáforo, gire a la derecha)."}
      ],
      "exercises": [
        {"id":"ja11-e1","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Derecha","Izquierda","¿Dónde está?"],"correctAnswer":"Todo recto","explanation":"\"まっすぐ\" = \"recto/derecho\".","promptExtra":"まっすぐ"},
        {"id":"ja11-e2","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Derecha","Izquierda","¿Dónde está?"],"correctAnswer":"Derecha","explanation":"\"右\" = \"derecha\".","promptExtra":"右"},
        {"id":"ja11-e3","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Derecha","Izquierda","¿Dónde está?"],"correctAnswer":"Izquierda","explanation":"\"左\" = \"izquierda\".","promptExtra":"左"},
        {"id":"ja11-e4","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Derecha","Izquierda","¿Dónde está?"],"correctAnswer":"¿Dónde está?","explanation":"\"〜はどこですか\" = \"¿Dónde está ~?\".","promptExtra":"〜はどこですか"},
        {"id":"ja11-e5","type":"select","prompt":"¿Cómo preguntas dónde está la estación?","options":["駅はどこですか","駅はまっすぐですか","駅は右ですか","駅は左ですか"],"correctAnswer":"駅はどこですか","explanation":"\"駅\" (eki) = \"estación\" + \"どこですか\" = \"¿dónde está?\"."},
        {"id":"ja11-e6","type":"select","prompt":"¿Qué significa \"右に曲がってください\"?","options":["Gire a la derecha","Gire a la izquierda","Siga recto","Pare aquí"],"correctAnswer":"Gire a la derecha","explanation":"\"右\" = derecha, \"曲がる\" = girar."},
        {"id":"ja11-e7","type":"select","prompt":"¿Qué es \"信号\" (shingou)?","options":["Semáforo","Cruce","Estación","Puente"],"correctAnswer":"Semáforo","explanation":"\"信号\" = \"semáforo/señal\"."},
        {"id":"ja11-e8","type":"select","prompt":"¿Cómo se dice \"izquierda\" en japonés?","options":["左 (hidari)","右 (migi)","上 (ue)","下 (shita)"],"correctAnswer":"左 (hidari)","explanation":"\"左\" (hidari) = \"izquierda\"."}
      ]
    },
    {
      "id": "japanese-12",
      "track": "languages",
      "subTrack": "japanese",
      "title": "De Compras",
      "description": "Frases esenciales para ir de compras en Japón",
      "icon": "🛍️",
      "xp": 100,
      "learnCards": [
        {"id":"ja12-l1","word":"これはいくらですか","translation":"¿Cuánto cuesta esto?","phonetic":"kore wa ikura desu ka","example":"これ = esto, いくら = cuánto cuesta"},
        {"id":"ja12-l2","word":"〜をください","translation":"Deme ~ por favor","phonetic":"~ o kudasai","example":"これをください (Deme esto por favor)."},
        {"id":"ja12-l3","word":"安い ・ 高い","translation":"Barato, Caro","phonetic":"やすい (yasui), たかい (takai)","example":"これは安いですね (Esto es barato, ¿verdad?)"},
        {"id":"ja12-l4","word":"カードで払えますか","translation":"¿Se puede pagar con tarjeta?","phonetic":"kaado de haraemasu ka","example":"現金 (genkin) = efectivo, カード (kaado) = tarjeta"}
      ],
      "exercises": [
        {"id":"ja12-e1","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Deme ~ por favor","Barato","Caro"],"correctAnswer":"¿Cuánto cuesta esto?","explanation":"\"これはいくらですか\" pregunta el precio.","promptExtra":"これはいくらですか"},
        {"id":"ja12-e2","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Deme ~ por favor","Barato","Caro"],"correctAnswer":"Deme ~ por favor","explanation":"\"〜をください\" es la forma de pedir algo.","promptExtra":"〜をください"},
        {"id":"ja12-e3","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Deme ~ por favor","Barato","Caro"],"correctAnswer":"Barato","explanation":"\"安い\" (yasui) = \"barato\".","promptExtra":"安い"},
        {"id":"ja12-e4","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Deme ~ por favor","Barato","Caro"],"correctAnswer":"Caro","explanation":"\"高い\" (takai) = \"caro/alto\".","promptExtra":"高い"},
        {"id":"ja12-e5","type":"select","prompt":"¿Cómo preguntas si aceptan tarjeta?","options":["カードで払えますか","現金で払えますか","いくらですか","これをください"],"correctAnswer":"カードで払えますか","explanation":"\"カード\" + \"払えますか\" = \"¿pagar con tarjeta?\"."},
        {"id":"ja12-e6","type":"select","prompt":"¿Qué significa \"高い\" (takai)?","options":["Caro","Barato","Grande","Pesado"],"correctAnswer":"Caro","explanation":"\"高い\" puede significar \"caro\" o \"alto\"."},
        {"id":"ja12-e7","type":"select","prompt":"¿Cómo dices \"deme esto\"?","options":["これをください","これはいくらですか","これは安いです","これは高いです"],"correctAnswer":"これをください","explanation":"\"これをください\" = \"Deme esto por favor\"."},
        {"id":"ja12-e8","type":"select","prompt":"\"いくら\" (ikura) significa:","options":["¿Cuánto cuesta?","¿Dónde está?","¿Qué es?","¿Cuándo?"],"correctAnswer":"¿Cuánto cuesta?","explanation":"\"いくら\" = \"¿cuánto?\" (precio)."}
      ]
    }
  ];
const koreanLessons: Lesson[] = [
    {
      "id": "korean-1",
      "track": "languages",
      "subTrack": "korean",
      "title": "Hangul básico - Saludos",
      "description": "Aprende las primeras letras del hangul y saludos",
      "icon": "👋",
      "xp": 30,
      "learnCards": [
        {
          "id": "ko1-l1",
          "word": "ㅏ ・ ㅓ ・ ㅗ ・ ㅜ ・ ㅣ",
          "translation": "a, eo, o, u, i",
          "phonetic": "a, eo, o, u, i",
          "note": "El hangul es el alfabeto coreano, creado en 1443. Es fonético y fácil de aprender. Las vocales se combinan con consonantes para formar sílabas."
        },
        {
          "id": "ko1-l2",
          "word": "ㄱ ・ ㄴ ・ ㅁ ・ ㅅ",
          "translation": "g/k, n, m, s",
          "phonetic": "g/k, n, m, s",
          "note": "Las consonantes se colocan a la izquierda o arriba de la vocal en cada bloque silábico."
        },
        {
          "id": "ko1-l3",
          "word": "가, 나, 모, 수",
          "translation": "ga, na, mo, su",
          "phonetic": "ga, na, mo, su",
          "example": "가 (ㄱ+ㅏ), 나 (ㄴ+ㅏ), 모 (ㅁ+ㅗ), 수 (ㅅ+ㅜ)"
        },
        {
          "id": "ko1-l4",
          "word": "안녕하세요",
          "translation": "Hola",
          "phonetic": "annyeonghaseyo",
          "example": "안녕하세요! (annyeonghaseyo) = ¡Hola!",
          "note": "Saludo formal coreano. Se usa en cualquier momento del día."
        }
      ],
      "exercises": [
        {
          "id": "ko1-e1",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "a",
            "eo",
            "o",
            "u"
          ],
          "correctAnswer": "a",
          "explanation": "\"ㅏ\" suena como \"a\".",
          "promptExtra": "ㅏ"
        },
        {
          "id": "ko1-e2",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "n",
            "g/k",
            "m",
            "s"
          ],
          "correctAnswer": "n",
          "explanation": "\"ㄴ\" suena como \"n\".",
          "promptExtra": "ㄴ"
        },
        {
          "id": "ko1-e3",
          "type": "match",
          "prompt": "¿Cuál es su lectura?",
          "options": [
            "na",
            "ga",
            "mo",
            "su"
          ],
          "correctAnswer": "na",
          "explanation": "\"나\" (ㄴ+ㅏ) se lee \"na\".",
          "promptExtra": "나"
        },
        {
          "id": "ko1-e4",
          "type": "select",
          "prompt": "¿Qué significa \"안녕하세요\"?",
          "options": [
            "Hola",
            "Gracias",
            "Adiós",
            "Sí"
          ],
          "correctAnswer": "Hola",
          "explanation": "\"안녕하세요\" (annyeonghaseyo) = \"Hola\"."
        },
        {
          "id": "ko1-e5",
          "type": "select",
          "prompt": "¿Cómo suena \"ㅗ\"?",
          "options": [
            "o",
            "a",
            "u",
            "i"
          ],
          "correctAnswer": "o",
          "explanation": "\"ㅗ\" suena como \"o\"."
        },
        {
          "id": "ko1-e6",
          "type": "select",
          "prompt": "¿Qué sílaba forma ㄱ + ㅏ?",
          "options": [
            "가 (ga)",
            "나 (na)",
            "모 (mo)",
            "수 (su)"
          ],
          "correctAnswer": "가 (ga)",
          "explanation": "ㄱ (g/k) + ㅏ (a) = 가 (ga)."
        },
        {
          "id": "ko1-e7",
          "type": "select",
          "prompt": "¿Quién creó el hangul?",
          "options": [
            "El rey Sejong en 1443",
            "Los monjes budistas",
            "Los japoneses",
            "Los chinos"
          ],
          "correctAnswer": "El rey Sejong en 1443",
          "explanation": "El hangul fue creado por el rey Sejong el Grande en 1443."
        },
        {
          "id": "ko1-e8",
          "type": "select",
          "prompt": "¿Cómo se lee \"수\"?",
          "options": [
            "su",
            "mo",
            "ga",
            "na"
          ],
          "correctAnswer": "su",
          "explanation": "\"수\" (ㅅ+ㅜ) se lee \"su\"."
        }
      ]
    },
    {
      "id": "korean-2",
      "track": "languages",
      "subTrack": "korean",
      "title": "Más Hangul - Presentaciones",
      "description": "Aprende más consonantes y cómo presentarte en coreano",
      "icon": "🙋",
      "xp": 40,
      "learnCards": [
        {
          "id": "ko2-l1",
          "word": "ㄷ ・ ㄹ ・ ㅂ ・ ㅈ",
          "translation": "d/t, r/l, b/p, j",
          "phonetic": "d/t, r/l, b/p, j",
          "note": "Más consonantes: ㄷ(d/t), ㄹ(r/l), ㅂ(b/p), ㅈ(j). El hangul tiene 14 consonantes básicas en total."
        },
        {
          "id": "ko2-l2",
          "word": "저 ・ 네 ・ 이름",
          "translation": "Yo, sí, nombre",
          "phonetic": "jeo, ne, ireum",
          "example": "저 (jeo) = yo (formal), 네 (ne) = sí, 이름 (ireum) = nombre"
        },
        {
          "id": "ko2-l3",
          "word": "저는 ___입니다",
          "translation": "Yo soy ___",
          "phonetic": "jeoneun ___ imnida",
          "example": "저는 학생입니다 (jeoneun haksaeng imnida) = Soy estudiante",
          "note": "\"저는\" (jeoneun) = \"yo\" (tema), \"입니다\" (imnida) = \"ser\" formal"
        },
        {
          "id": "ko2-l4",
          "word": "이름이 뭐예요?",
          "translation": "¿Cómo te llamas?",
          "phonetic": "ireumi mwoyeyo?",
          "example": "안녕하세요, 이름이 뭐예요? = Hola, ¿cómo te llamas?"
        }
      ],
      "exercises": [
        {
          "id": "ko2-e1",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "j",
            "d/t",
            "r/l",
            "b/p"
          ],
          "correctAnswer": "j",
          "explanation": "\"ㅈ\" suena como \"j\" (como en inglés \"jump\").",
          "promptExtra": "ㅈ"
        },
        {
          "id": "ko2-e2",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Yo",
            "Sí",
            "Nombre",
            "Gracias"
          ],
          "correctAnswer": "Yo",
          "explanation": "\"저\" (jeo) = \"yo\" formal.",
          "promptExtra": "저"
        },
        {
          "id": "ko2-e3",
          "type": "match",
          "prompt": "¿Cómo se lee este carácter?",
          "options": [
            "r/l",
            "d/t",
            "j",
            "b/p"
          ],
          "correctAnswer": "r/l",
          "explanation": "\"ㄹ\" suena como una mezcla de \"r\" y \"l\".",
          "promptExtra": "ㄹ"
        },
        {
          "id": "ko2-e4",
          "type": "select",
          "prompt": "¿Cómo dices \"Yo soy estudiante\" en coreano?",
          "options": [
            "저는 학생입니다",
            "제 이름은 학생입니다",
            "안녕하세요 학생입니다",
            "이름이 학생이에요"
          ],
          "correctAnswer": "저는 학생입니다",
          "explanation": "\"저는 ___입니다\" = \"Yo soy ___\"."
        },
        {
          "id": "ko2-e5",
          "type": "select",
          "prompt": "¿Qué significa \"네\" (ne)?",
          "options": [
            "Sí",
            "No",
            "Hola",
            "Adiós"
          ],
          "correctAnswer": "Sí",
          "explanation": "\"네\" (ne) = \"sí\" en coreano."
        },
        {
          "id": "ko2-e6",
          "type": "select",
          "prompt": "¿Qué significa \"이름\" (ireum)?",
          "options": [
            "Nombre",
            "Yo",
            "Estudiante",
            "Gracias"
          ],
          "correctAnswer": "Nombre",
          "explanation": "\"이름\" (ireum) = \"nombre\"."
        },
        {
          "id": "ko2-e7",
          "type": "select",
          "prompt": "¿Cómo preguntas el nombre de alguien?",
          "options": [
            "이름이 뭐예요?",
            "저는 누구예요?",
            "이름이 어디예요?",
            "뭐가 이름이에요?"
          ],
          "correctAnswer": "이름이 뭐예요?",
          "explanation": "\"이름이 뭐예요?\" = \"¿Cómo te llamas?\""
        },
        {
          "id": "ko2-e8",
          "type": "select",
          "prompt": "¿Qué consonante suena como \"b/p\"?",
          "options": [
            "ㅂ",
            "ㄷ",
            "ㄹ",
            "ㅈ"
          ],
          "correctAnswer": "ㅂ",
          "explanation": "\"ㅂ\" suena como \"b\" o \"p\" según la posición."
        }
      ]
    },
    {
      "id": "korean-3",
      "track": "languages",
      "subTrack": "korean",
      "title": "Hangul - Comida coreana",
      "description": "Aprende vocabulario de comida típica en coreano",
      "icon": "🍜",
      "xp": 50,
      "learnCards": [
        {
          "id": "ko3-l1",
          "word": "밥",
          "translation": "Arroz",
          "phonetic": "bap",
          "example": "밥 먹었어요? (bap meogeosseoyo?) = ¿Has comido arroz? (saludo común)"
        },
        {
          "id": "ko3-l2",
          "word": "김치",
          "translation": "Kimchi",
          "phonetic": "gimchi",
          "example": "김치 주세요 (gimchi juseyo) = Kimchi, por favor",
          "note": "El kimchi es el plato nacional coreano: vegetales fermentados con especias."
        },
        {
          "id": "ko3-l3",
          "word": "고기 ・ 물",
          "translation": "Carne, agua",
          "phonetic": "gogi, mul",
          "example": "고기 (gogi) = carne, 물 (mul) = agua"
        },
        {
          "id": "ko3-l4",
          "word": "___ 주세요",
          "translation": "Deme ___ por favor",
          "phonetic": "___ juseyo",
          "example": "물 주세요 (mul juseyo) = Agua, por favor",
          "note": "\"주세요\" (juseyo) es la forma educada de pedir algo."
        }
      ],
      "exercises": [
        {
          "id": "ko3-e1",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Arroz",
            "Kimchi",
            "Carne",
            "Agua"
          ],
          "correctAnswer": "Arroz",
          "explanation": "\"밥\" (bap) = \"arroz\" (comida en general).",
          "promptExtra": "밥"
        },
        {
          "id": "ko3-e2",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Kimchi",
            "Arroz",
            "Carne",
            "Agua"
          ],
          "correctAnswer": "Kimchi",
          "explanation": "\"김치\" (gimchi) es el famoso plato fermentado coreano.",
          "promptExtra": "김치"
        },
        {
          "id": "ko3-e3",
          "type": "match",
          "prompt": "¿Cuál es su lectura?",
          "options": [
            "mul",
            "gogi",
            "bap",
            "gimchi"
          ],
          "correctAnswer": "mul",
          "explanation": "\"물\" se lee \"mul\" (agua).",
          "promptExtra": "물"
        },
        {
          "id": "ko3-e4",
          "type": "select",
          "prompt": "¿Cómo pides agua en coreano?",
          "options": [
            "물 주세요",
            "물 있어요",
            "물 먹어요",
            "물 사요"
          ],
          "correctAnswer": "물 주세요",
          "explanation": "\"___ 주세요\" = \"Deme ___ por favor\"."
        },
        {
          "id": "ko3-e5",
          "type": "select",
          "prompt": "¿Qué significa \"고기\" (gogi)?",
          "options": [
            "Carne",
            "Arroz",
            "Kimchi",
            "Agua"
          ],
          "correctAnswer": "Carne",
          "explanation": "\"고기\" (gogi) = \"carne\"."
        },
        {
          "id": "ko3-e6",
          "type": "select",
          "prompt": "¿Qué es el kimchi?",
          "options": [
            "Vegetales fermentados con especias",
            "Arroz con verduras",
            "Sopa de carne",
            "Pescado crudo"
          ],
          "correctAnswer": "Vegetales fermentados con especias",
          "explanation": "El kimchi es el plato nacional coreano de vegetales fermentados."
        },
        {
          "id": "ko3-e7",
          "type": "select",
          "prompt": "¿Qué significa \"밥\" (bap)?",
          "options": [
            "Arroz/comida",
            "Agua",
            "Carne",
            "Kimchi"
          ],
          "correctAnswer": "Arroz/comida",
          "explanation": "\"밥\" significa \"arroz\" y por extensión \"comida\"."
        },
        {
          "id": "ko3-e8",
          "type": "select",
          "prompt": "¿Qué palabra se usa para pedir algo educadamente?",
          "options": [
            "주세요 (juseyo)",
            "있어요 (isseoyo)",
            "먹어요 (meogeoyo)",
            "가세요 (gaseyo)"
          ],
          "correctAnswer": "주세요 (juseyo)",
          "explanation": "\"주세요\" = \"deme por favor\", forma educada."
        }
      ]
    },
    {
      "id": "korean-4",
      "track": "languages",
      "subTrack": "korean",
      "title": "Hangul - Números y colores",
      "description": "Aprende números nativos y colores en coreano",
      "icon": "🎨",
      "xp": 60,
      "learnCards": [
        {
          "id": "ko4-l1",
          "word": "하나, 둘, 셋, 넷, 다섯",
          "translation": "Uno, dos, tres, cuatro, cinco",
          "phonetic": "hana, dul, set, net, daseot",
          "note": "El coreano tiene dos sistemas numéricos: nativo coreano (para contar objetos) y sino-coreano (para fechas, dinero). Aquí aprendemos el nativo."
        },
        {
          "id": "ko4-l2",
          "word": "하나 (1) ・ 둘 (2) ・ 셋 (3)",
          "translation": "1, 2, 3",
          "phonetic": "hana, dul, set",
          "example": "사과 하나 주세요 (sagwa hana juseyo) = Una manzana, por favor"
        },
        {
          "id": "ko4-l3",
          "word": "빨간 ・ 파란",
          "translation": "Rojo, azul",
          "phonetic": "ppalgan, paran",
          "example": "빨간 (ppalgan) = rojo, 파란 (paran) = azul"
        },
        {
          "id": "ko4-l4",
          "word": "초록 ・ 노란",
          "translation": "Verde, amarillo",
          "phonetic": "chorok, noran",
          "example": "초록 (chorok) = verde, 노란 (noran) = amarillo"
        }
      ],
      "exercises": [
        {
          "id": "ko4-e1",
          "type": "match",
          "prompt": "Empareja con su número",
          "options": [
            "1",
            "2",
            "3",
            "5"
          ],
          "correctAnswer": "1",
          "explanation": "\"하나\" (hana) = 1.",
          "promptExtra": "하나"
        },
        {
          "id": "ko4-e2",
          "type": "match",
          "prompt": "Empareja con su color",
          "options": [
            "Azul",
            "Rojo",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Azul",
          "explanation": "\"파란\" (paran) = \"azul\".",
          "promptExtra": "파란"
        },
        {
          "id": "ko4-e3",
          "type": "match",
          "prompt": "Empareja con su romanización",
          "options": [
            "noran",
            "chorok",
            "ppalgan",
            "paran"
          ],
          "correctAnswer": "noran",
          "explanation": "\"노란\" se lee \"noran\" (amarillo).",
          "promptExtra": "노란"
        },
        {
          "id": "ko4-e4",
          "type": "select",
          "prompt": "¿Cómo se dice \"cinco\" en coreano nativo?",
          "options": [
            "다섯 (daseot)",
            "넷 (net)",
            "셋 (set)",
            "둘 (dul)"
          ],
          "correctAnswer": "다섯 (daseot)",
          "explanation": "\"다섯\" (daseot) = 5."
        },
        {
          "id": "ko4-e5",
          "type": "select",
          "prompt": "¿Qué color es \"초록\" (chorok)?",
          "options": [
            "Verde",
            "Rojo",
            "Azul",
            "Amarillo"
          ],
          "correctAnswer": "Verde",
          "explanation": "\"초록\" (chorok) = \"verde\"."
        },
        {
          "id": "ko4-e6",
          "type": "select",
          "prompt": "¿Qué número es \"셋\" (set)?",
          "options": [
            "3",
            "1",
            "2",
            "4"
          ],
          "correctAnswer": "3",
          "explanation": "\"셋\" (set) = 3."
        },
        {
          "id": "ko4-e7",
          "type": "select",
          "prompt": "¿Cuántos sistemas numéricos tiene el coreano?",
          "options": [
            "Dos: nativo y sino-coreano",
            "Uno solo",
            "Tres",
            "Ninguno, usan números arábigos"
          ],
          "correctAnswer": "Dos: nativo y sino-coreano",
          "explanation": "El coreano tiene sistema nativo (contar objetos) y sino-coreano (fechas, dinero)."
        },
        {
          "id": "ko4-e8",
          "type": "select",
          "prompt": "¿Cómo se dice \"rojo\" en coreano?",
          "options": [
            "빨간 (ppalgan)",
            "파란 (paran)",
            "초록 (chorok)",
            "노란 (noran)"
          ],
          "correctAnswer": "빨간 (ppalgan)",
          "explanation": "\"빨간\" (ppalgan) = \"rojo\"."
        }
      ]
    },
    {
      "id": "korean-5",
      "track": "languages",
      "subTrack": "korean",
      "title": "Frases útiles en coreano",
      "description": "Aprende las frases más importantes para comunicarte",
      "icon": "💬",
      "xp": 70,
      "learnCards": [
        {
          "id": "ko5-l1",
          "word": "감사합니다",
          "translation": "Gracias",
          "phonetic": "gamsahamnida",
          "example": "감사합니다! (gamsahamnida) = ¡Gracias!",
          "note": "Forma más formal y educada de agradecer. Para situaciones informales: \"고마워요\" (gomawoyo)."
        },
        {
          "id": "ko5-l2",
          "word": "미안합니다",
          "translation": "Lo siento",
          "phonetic": "mianhamnida",
          "example": "미안합니다 (mianhamnida) = Lo siento / Disculpe"
        },
        {
          "id": "ko5-l3",
          "word": "사랑해요 ・ 맛있어요",
          "translation": "Te quiero, está delicioso",
          "phonetic": "saranghaeyo, masisseoyo",
          "example": "사랑해요 (saranghaeyo) = te quiero, 맛있어요 (masisseoyo) = está delicioso"
        },
        {
          "id": "ko5-l4",
          "word": "얼마예요?",
          "translation": "¿Cuánto cuesta?",
          "phonetic": "eolmayeyo?",
          "example": "이거 얼마예요? (igeo eolmayeyo?) = ¿Cuánto cuesta esto?",
          "note": "Frase esencial para ir de compras en Corea"
        }
      ],
      "exercises": [
        {
          "id": "ko5-e1",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Gracias",
            "Lo siento",
            "Te quiero",
            "¿Cuánto cuesta?"
          ],
          "correctAnswer": "Gracias",
          "explanation": "\"감사합니다\" (gamsahamnida) = \"Gracias\".",
          "promptExtra": "감사합니다"
        },
        {
          "id": "ko5-e2",
          "type": "match",
          "prompt": "Empareja con su significado",
          "options": [
            "Lo siento",
            "Gracias",
            "Te quiero",
            "Está delicioso"
          ],
          "correctAnswer": "Lo siento",
          "explanation": "\"미안합니다\" (mianhamnida) = \"Lo siento\".",
          "promptExtra": "미안합니다"
        },
        {
          "id": "ko5-e3",
          "type": "match",
          "prompt": "Empareja con su romanización",
          "options": [
            "saranghaeyo",
            "masisseoyo",
            "eolmayeyo",
            "gamsahamnida"
          ],
          "correctAnswer": "saranghaeyo",
          "explanation": "\"사랑해요\" se lee \"saranghaeyo\".",
          "promptExtra": "사랑해요"
        },
        {
          "id": "ko5-e4",
          "type": "select",
          "prompt": "¿Cómo dices \"gracias\" en coreano?",
          "options": [
            "감사합니다",
            "미안합니다",
            "사랑해요",
            "안녕하세요"
          ],
          "correctAnswer": "감사합니다",
          "explanation": "\"감사합니다\" (gamsahamnida) = \"Gracias\"."
        },
        {
          "id": "ko5-e5",
          "type": "select",
          "prompt": "¿Qué significa \"맛있어요\" (masisseoyo)?",
          "options": [
            "Está delicioso",
            "Te quiero",
            "Gracias",
            "Lo siento"
          ],
          "correctAnswer": "Está delicioso",
          "explanation": "\"맛있어요\" = \"está delicioso/ríquisimo\"."
        },
        {
          "id": "ko5-e6",
          "type": "select",
          "prompt": "¿Cómo preguntas el precio de algo?",
          "options": [
            "얼마예요?",
            "어디예요?",
            "뭐예요?",
            "주세요?"
          ],
          "correctAnswer": "얼마예요?",
          "explanation": "\"얼마예요?\" (eolmayeyo?) = \"¿Cuánto cuesta?\"."
        },
        {
          "id": "ko5-e7",
          "type": "select",
          "prompt": "¿Qué significa \"사랑해요\" (saranghaeyo)?",
          "options": [
            "Te quiero",
            "Gracias",
            "Está delicioso",
            "Lo siento"
          ],
          "correctAnswer": "Te quiero",
          "explanation": "\"사랑해요\" = \"te quiero\"."
        },
        {
          "id": "ko5-e8",
          "type": "select",
          "prompt": "¿Cuál es la forma informal de \"gracias\"?",
          "options": [
            "고마워요 (gomawoyo)",
            "미안해요 (mianhaeyo)",
            "사랑해요 (saranghaeyo)",
            "안녕 (annyeong)"
          ],
          "correctAnswer": "고마워요 (gomawoyo)",
          "explanation": "\"고마워요\" (gomawoyo) es la forma informal de gracias."
        }
      ]
    },
    {
      "id": "korean-6",
      "track": "languages",
      "subTrack": "korean",
      "title": "Más Hangul",
      "description": "Nuevas sílabas hangul y reglas de pronunciación",
      "icon": "카",
      "xp": 80,
      "learnCards": [
        {"id":"ko6-l1","word":"가갸거겨고교구규그기","translation":"ga, gya, geo, gyeo, go, gyo, gu, gyu, geu, gi","phonetic":"Combinaciones de ㄱ (g/k) con vocales","example":"가구 (gagu) = muebles, 고기 (gogi) = carne"},
        {"id":"ko6-l2","word":"나냐너녀노뇨누뉴느니","translation":"na, nya, neo, nyeo, no, nyo, nu, nyu, neu, ni","phonetic":"Combinaciones de ㄴ (n) con vocales","example":"나 (na) = yo, 누나 (nuna) = hermana mayor"},
        {"id":"ko6-l3","word":"다댜더뎌도됴두듀드디","translation":"da, dya, deo, dyeo, do, dyo, du, dyu, deu, di","phonetic":"Combinaciones de ㄷ (d/t) con vocales","example":"도시 (dosi) = ciudad, 두부 (dubu) = tofu"},
        {"id":"ko6-l4","word":"Batchim (받침)","translation":"Consonante final de sílaba","phonetic":"Reglas de pronunciación","example":"한글 (hangeul) → ㄴ es el batchim de 한"}
      ],
      "exercises": [
        {"id":"ko6-e1","type":"match","prompt":"Empareja la sílaba con su sonido","options":["ga","na","da","geo"],"correctAnswer":"ga","explanation":"\"가\" se lee \"ga\".","promptExtra":"가"},
        {"id":"ko6-e2","type":"match","prompt":"Empareja la sílaba con su sonido","options":["ga","na","da","geo"],"correctAnswer":"na","explanation":"\"나\" se lee \"na\".","promptExtra":"나"},
        {"id":"ko6-e3","type":"match","prompt":"Empareja la sílaba con su sonido","options":["ga","na","da","geo"],"correctAnswer":"da","explanation":"\"다\" se lee \"da\".","promptExtra":"다"},
        {"id":"ko6-e4","type":"match","prompt":"Empareja la sílaba con su sonido","options":["ga","na","da","geo"],"correctAnswer":"geo","explanation":"\"거\" se lee \"geo\".","promptExtra":"거"},
        {"id":"ko6-e5","type":"select","prompt":"¿Qué es el batchim (받침)?","options":["Consonante final de sílaba","Vocal inicial","Tipo de verbo","Forma de cortesía"],"correctAnswer":"Consonante final de sílaba","explanation":"받침 = consonante que cierra una sílaba."},
        {"id":"ko6-e6","type":"select","prompt":"¿Qué significa \"고기\" (gogi)?","options":["Carne","Pescado","Arroz","Verdura"],"correctAnswer":"Carne","explanation":"\"고기\" = \"carne\"."},
        {"id":"ko6-e7","type":"select","prompt":"¿Cómo se lee \"두\"?","options":["du","tu","gu","nu"],"correctAnswer":"du","explanation":"\"두\" = ㄷ + ㅜ = \"du\"."},
        {"id":"ko6-e8","type":"select","prompt":"¿Qué significa \"나\" (na)?","options":["Yo","Tú","Nosotros","Él"],"correctAnswer":"Yo","explanation":"\"나\" = \"yo\" (informal)."}
      ]
    },
    {
      "id": "korean-7",
      "track": "languages",
      "subTrack": "korean",
      "title": "Números 6-10",
      "description": "Aprende a contar del 6 al 10 en coreano (sistema nativo y sino-coreano)",
      "icon": "🔢",
      "xp": 80,
      "learnCards": [
        {"id":"ko7-l1","word":"여섯 / 육","translation":"Seis (nativo: yeoseot, sino: yuk)","phonetic":"여섯 (yeoseot) / 육 (yuk)","example":"여섯 개 (6 cosas), 육월 (junio)"},
        {"id":"ko7-l2","word":"일곱 / 칠","translation":"Siete (nativo: ilgop, sino: chil)","phonetic":"일곱 (ilgop) / 칠 (chil)","example":"일곱 시 (las 7), 칠월 (julio)"},
        {"id":"ko7-l3","word":"여덟 / 팔","translation":"Ocho (nativo: yeodeol, sino: pal)","phonetic":"여덟 (yeodeol) / 팔 (pal)","example":"여덟 명 (8 personas), 팔월 (agosto)"},
        {"id":"ko7-l4","word":"아홉 / 구, 열 / 십","translation":"Nueve (ahop/gu), Diez (yeol/sip)","phonetic":"아홉/구, 열/십","example":"열 시 (las 10), 구월 (septiembre)"}
      ],
      "exercises": [
        {"id":"ko7-e1","type":"match","prompt":"Empareja con su lectura nativa","options":["yeoseot","ilgop","yeodeol","ahop"],"correctAnswer":"yeoseot","explanation":"\"여섯\" se lee \"yeoseot\" (seis).","promptExtra":"여섯"},
        {"id":"ko7-e2","type":"match","prompt":"Empareja con su lectura nativa","options":["yeoseot","ilgop","yeodeol","ahop"],"correctAnswer":"ilgop","explanation":"\"일곱\" se lee \"ilgop\" (siete).","promptExtra":"일곱"},
        {"id":"ko7-e3","type":"match","prompt":"Empareja con su lectura nativa","options":["yeoseot","ilgop","yeodeol","ahop"],"correctAnswer":"yeodeol","explanation":"\"여덟\" se lee \"yeodeol\" (ocho).","promptExtra":"여덟"},
        {"id":"ko7-e4","type":"match","prompt":"Empareja con su lectura nativa","options":["yeoseot","ilgop","yeodeol","ahop"],"correctAnswer":"ahop","explanation":"\"아홉\" se lee \"ahop\" (nueve).","promptExtra":"아홉"},
        {"id":"ko7-e5","type":"select","prompt":"¿Cuál es el número sino-coreano para \"seis\"?","options":["육 (yuk)","칠 (chil)","팔 (pal)","구 (gu)"],"correctAnswer":"육 (yuk)","explanation":"El sistema sino-coreano usa 육 para 6."},
        {"id":"ko7-e6","type":"select","prompt":"¿Cómo se dice \"diez\" en coreano nativo?","options":["열 (yeol)","십 (sip)","아홉 (ahop)","여덟 (yeodeol)"],"correctAnswer":"열 (yeol)","explanation":"\"열\" = 10 (nativo coreano)."},
        {"id":"ko7-e7","type":"select","prompt":"¿Cuándo se usa el sistema sino-coreano?","options":["Fechas, dinero, minutos","Contar objetos","Edad (informal)","Horas (con 시)"],"correctAnswer":"Fechas, dinero, minutos","explanation":"Sino-coreano para fechas, dinero, números grandes."},
        {"id":"ko7-e8","type":"select","prompt":"¿Qué número es \"여덟\"?","options":["Ocho","Siete","Seis","Nueve"],"correctAnswer":"Ocho","explanation":"\"여덟\" (yeodeol) = \"ocho\"."}
      ]
    },
    {
      "id": "korean-8",
      "track": "languages",
      "subTrack": "korean",
      "title": "Comida Coreana",
      "description": "Platos y vocabulario de la gastronomía coreana",
      "icon": "🍖",
      "xp": 90,
      "learnCards": [
        {"id":"ko8-l1","word":"비빔밥 ・ 불고기","translation":"Bibimbap, Bulgogi","phonetic":"bibimbap, bulgogi","example":"비빔밥은 맛있어요 (El bibimbap está delicioso)."},
        {"id":"ko8-l2","word":"김치 ・ 된장찌개","translation":"Kimchi, Estofado de pasta de soja","phonetic":"gimchi, doenjang-jjigae","example":"김치는 매워요 (El kimchi es picante)."},
        {"id":"ko8-l3","word":"삼겹살 ・ 치킨","translation":"Panceta de cerdo a la parrilla, Pollo frito coreano","phonetic":"samgyeopsal, chikin","example":"삼겹살 구워요 (Asamos panceta)."},
        {"id":"ko8-l4","word":"떡볶이 ・ 김밥","translation":"Tteokbokki (pastel de arroz picante), Kimbap","phonetic":"tteokbokki, gimbap","example":"떡볶이 주세요 (Tteokbokki, por favor)."}
      ],
      "exercises": [
        {"id":"ko8-e1","type":"match","prompt":"Empareja el plato con su descripción","options":["Arroz mezclado con verduras","Panceta a la parrilla","Pastel de arroz picante","Rollo de arroz con alga"],"correctAnswer":"Arroz mezclado con verduras","explanation":"\"비빔밥\" = arroz mezclado.","promptExtra":"비빔밥"},
        {"id":"ko8-e2","type":"match","prompt":"Empareja el plato con su descripción","options":["Arroz mezclado con verduras","Panceta a la parrilla","Pastel de arroz picante","Rollo de arroz con alga"],"correctAnswer":"Panceta a la parrilla","explanation":"\"삼겹살\" = panceta de cerdo.","promptExtra":"삼겹살"},
        {"id":"ko8-e3","type":"match","prompt":"Empareja el plato con su descripción","options":["Arroz mezclado con verduras","Panceta a la parrilla","Pastel de arroz picante","Rollo de arroz con alga"],"correctAnswer":"Pastel de arroz picante","explanation":"\"떡볶이\" = tteokbokki.","promptExtra":"떡볶이"},
        {"id":"ko8-e4","type":"match","prompt":"Empareja el plato con su descripción","options":["Arroz mezclado con verduras","Panceta a la parrilla","Pastel de arroz picante","Rollo de arroz con alga"],"correctAnswer":"Rollo de arroz con alga","explanation":"\"김밥\" = rollo de arroz.","promptExtra":"김밥"},
        {"id":"ko8-e5","type":"select","prompt":"¿Qué es \"김치\" (gimchi)?","options":["Verdura fermentada con especias","Sopa de fideos","Arroz frito","Pescado crudo"],"correctAnswer":"Verdura fermentada con especias","explanation":"김치 = col china fermentada con ajo y chile."},
        {"id":"ko8-e6","type":"select","prompt":"¿Cómo dices \"está delicioso\" en coreano?","options":["맛있어요 (masisseoyo)","맛없어요 (maseopseoyo)","매워요 (maewoyo)","주세요 (juseyo)"],"correctAnswer":"맛있어요 (masisseoyo)","explanation":"\"맛있어요\" = \"está delicioso\"."},
        {"id":"ko8-e7","type":"select","prompt":"¿Qué significa \"매워요\" (maewoyo)?","options":["Picante","Dulce","Salado","Amargo"],"correctAnswer":"Picante","explanation":"\"매워요\" = \"es picante\"."},
        {"id":"ko8-e8","type":"select","prompt":"¿Qué es \"불고기\" (bulgogi)?","options":["Carne marinada a la parrilla","Pollo frito","Pescado al vapor","Sopa de tofu"],"correctAnswer":"Carne marinada a la parrilla","explanation":"불고기 = carne de res marinada y asada."}
      ]
    },
    {
      "id": "korean-9",
      "track": "languages",
      "subTrack": "korean",
      "title": "En el Restaurante",
      "description": "Frases para comer en un restaurante coreano",
      "icon": "🍜",
      "xp": 90,
      "learnCards": [
        {"id":"ko9-l1","word":"주문할게요","translation":"Voy a pedir","phonetic":"jumunhalgeyo","example":"주문할게요 (Haré mi pedido)."},
        {"id":"ko9-l2","word":"계산서 주세요","translation":"La cuenta, por favor","phonetic":"gyesanseo juseyo","example":"계산서 주세요 (La cuenta, por favor)."},
        {"id":"ko9-l3","word":"잘 먹겠습니다","translation":"Buen provecho (antes de comer)","phonetic":"jal meokgesseumnida","example":"Se dice antes de empezar a comer."},
        {"id":"ko9-l4","word":"잘 먹었습니다","translation":"Gracias por la comida (después)","phonetic":"jal meogeosseumnida","example":"Se dice después de comer."}
      ],
      "exercises": [
        {"id":"ko9-e1","type":"match","prompt":"Empareja la frase con su uso","options":["Antes de comer","Después de comer","Al pedir","Al pagar"],"correctAnswer":"Antes de comer","explanation":"\"잘 먹겠습니다\" se dice antes de comer.","promptExtra":"잘 먹겠습니다"},
        {"id":"ko9-e2","type":"match","prompt":"Empareja la frase con su uso","options":["Antes de comer","Después de comer","Al pedir","Al pagar"],"correctAnswer":"Después de comer","explanation":"\"잘 먹었습니다\" se dice al terminar.","promptExtra":"잘 먹었습니다"},
        {"id":"ko9-e3","type":"match","prompt":"Empareja la frase con su uso","options":["Antes de comer","Después de comer","Al pedir","Al pagar"],"correctAnswer":"Al pedir","explanation":"\"주문할게요\" = \"voy a pedir\".","promptExtra":"주문할게요"},
        {"id":"ko9-e4","type":"match","prompt":"Empareja la frase con su uso","options":["Antes de comer","Después de comer","Al pedir","Al pagar"],"correctAnswer":"Al pagar","explanation":"\"계산서 주세요\" = \"la cuenta\".","promptExtra":"계산서 주세요"},
        {"id":"ko9-e5","type":"select","prompt":"¿Cómo pides \"por favor\" en coreano?","options":["주세요 (juseyo)","감사합니다 (gamsahamnida)","안녕하세요 (annyeonghaseyo)","미안합니다 (mianhamnida)"],"correctAnswer":"주세요 (juseyo)","explanation":"\"주세요\" = \"por favor / deme\"."},
        {"id":"ko9-e6","type":"select","prompt":"¿Qué dices al terminar de comer?","options":["잘 먹었습니다","잘 먹겠습니다","주문할게요","계산서 주세요"],"correctAnswer":"잘 먹었습니다","explanation":"\"잘 먹었습니다\" = \"comí bien / gracias por la comida\"."},
        {"id":"ko9-e7","type":"select","prompt":"\"계산서\" (gyesanseo) significa:","options":["Cuenta","Menú","Pedido","Propina"],"correctAnswer":"Cuenta","explanation":"\"계산서\" = \"cuenta/factura\"."},
        {"id":"ko9-e8","type":"select","prompt":"¿Qué significa \"물 주세요\" (mul juseyo)?","options":["Agua, por favor","Cuenta, por favor","Arroz, por favor","Carne, por favor"],"correctAnswer":"Agua, por favor","explanation":"\"물\" (mul) = \"agua\". Muy útil en restaurantes."}
      ]
    },
    {
      "id": "korean-10",
      "track": "languages",
      "subTrack": "korean",
      "title": "Expresiones Cotidianas",
      "description": "Frases útiles del día a día en Corea",
      "icon": "🗣️",
      "xp": 90,
      "learnCards": [
        {"id":"ko10-l1","word":"괜찮아요","translation":"Está bien / No importa","phonetic":"gwaenchanayo","example":"괜찮아요? = ¿Estás bien? 괜찮아요 = Está bien."},
        {"id":"ko10-l2","word":"실례합니다","translation":"Disculpe / Con permiso","phonetic":"sillyehamnida","example":"실례합니다, 화장실 어디예요? (Disculpe, ¿dónde está el baño?)"},
        {"id":"ko10-l3","word":"잠시만요","translation":"Un momento, por favor","phonetic":"jamsimanyo","example":"잠시만요! (¡Espere un momento!)"},
        {"id":"ko10-l4","word":"알겠습니다","translation":"Entendido / De acuerdo","phonetic":"algesseumnida","example":"네, 알겠습니다 (Sí, entendido)."}
      ],
      "exercises": [
        {"id":"ko10-e1","type":"match","prompt":"Empareja con su uso","options":["Está bien","Disculpe","Un momento","Entendido"],"correctAnswer":"Está bien","explanation":"\"괜찮아요\" = \"está bien\".","promptExtra":"괜찮아요"},
        {"id":"ko10-e2","type":"match","prompt":"Empareja con su uso","options":["Está bien","Disculpe","Un momento","Entendido"],"correctAnswer":"Disculpe","explanation":"\"실례합니다\" = \"disculpe\".","promptExtra":"실례합니다"},
        {"id":"ko10-e3","type":"match","prompt":"Empareja con su uso","options":["Está bien","Disculpe","Un momento","Entendido"],"correctAnswer":"Un momento","explanation":"\"잠시만요\" = \"un momento\".","promptExtra":"잠시만요"},
        {"id":"ko10-e4","type":"match","prompt":"Empareja con su uso","options":["Está bien","Disculpe","Un momento","Entendido"],"correctAnswer":"Entendido","explanation":"\"알겠습니다\" = \"entendido\".","promptExtra":"알겠습니다"},
        {"id":"ko10-e5","type":"select","prompt":"¿Cómo preguntas \"¿Estás bien?\" en coreano?","options":["괜찮아요?","실례합니다?","잠시만요?","알겠습니다?"],"correctAnswer":"괜찮아요?","explanation":"\"괜찮아요?\" = \"¿Estás bien?\"."},
        {"id":"ko10-e6","type":"select","prompt":"\"잠시만요\" (jamsimanyo) se usa para:","options":["Pedir que esperen un momento","Saludar","Despedirse","Disculparse"],"correctAnswer":"Pedir que esperen un momento","explanation":"\"잠시만요\" = \"un momento, por favor\"."},
        {"id":"ko10-e7","type":"select","prompt":"¿Qué es \"실례합니다\" (sillyehamnida)?","options":["Disculpe / Con permiso","Gracias","Hola","Sí"],"correctAnswer":"Disculpe / Con permiso","explanation":"\"실례합니다\" = forma formal de \"disculpe\"."},
        {"id":"ko10-e8","type":"select","prompt":"\"알겠습니다\" (algesseumnida) significa:","options":["Entendido","No sé","Perdón","Hola"],"correctAnswer":"Entendido","explanation":"\"알겠습니다\" = \"entendido / de acuerdo\"."}
      ]
    },
    {
      "id": "korean-11",
      "track": "languages",
      "subTrack": "korean",
      "title": "Direcciones",
      "description": "Cómo preguntar y dar direcciones en coreano",
      "icon": "🗺️",
      "xp": 100,
      "learnCards": [
        {"id":"ko11-l1","word":"쪽","translation":"Dirección / hacia","phonetic":"jjok","example":"왼쪽 (izquierda), 오른쪽 (derecha)"},
        {"id":"ko11-l2","word":"직진","translation":"Todo recto","phonetic":"jikjin","example":"직진하세요 (Siga recto)."},
        {"id":"ko11-l3","word":"~어디예요?","translation":"¿Dónde está ~?","phonetic":"~eodi-yeyo?","example":"지하철역 어디예요? (¿Dónde está el metro?)"},
        {"id":"ko11-l4","word":"건너편 ・ 앞","translation":"Al otro lado, En frente","phonetic":"geonneopyeon, ap","example":"은행 건너편에 있어요 (Está al otro lado del banco)."}
      ],
      "exercises": [
        {"id":"ko11-e1","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Izquierda","Derecha","¿Dónde está?"],"correctAnswer":"Todo recto","explanation":"\"직진\" = \"recto\".","promptExtra":"직진"},
        {"id":"ko11-e2","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Izquierda","Derecha","¿Dónde está?"],"correctAnswer":"Izquierda","explanation":"\"왼쪽\" = \"izquierda\".","promptExtra":"왼쪽"},
        {"id":"ko11-e3","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Izquierda","Derecha","¿Dónde está?"],"correctAnswer":"Derecha","explanation":"\"오른쪽\" = \"derecha\".","promptExtra":"오른쪽"},
        {"id":"ko11-e4","type":"match","prompt":"Empareja con su significado","options":["Todo recto","Izquierda","Derecha","¿Dónde está?"],"correctAnswer":"¿Dónde está?","explanation":"\"어디예요?\" = \"¿Dónde está?\".","promptExtra":"어디예요?"},
        {"id":"ko11-e5","type":"select","prompt":"¿Cómo preguntas dónde está la estación?","options":["역이 어디예요?","역이 왼쪽이에요?","역이 오른쪽이에요?","역이 멀어요?"],"correctAnswer":"역이 어디예요?","explanation":"\"역\" (yeok) = \"estación\"."},
        {"id":"ko11-e6","type":"select","prompt":"¿Qué significa \"왼쪽으로 가세요\"?","options":["Vaya a la izquierda","Vaya a la derecha","Siga recto","Pare"],"correctAnswer":"Vaya a la izquierda","explanation":"\"왼쪽\" = izquierda, \"가세요\" = vaya."},
        {"id":"ko11-e7","type":"select","prompt":"\"직진하세요\" significa:","options":["Siga recto","Gire a la izquierda","Gire a la derecha","Pare aquí"],"correctAnswer":"Siga recto","explanation":"\"직진\" = recto, \"하세요\" = haga."},
        {"id":"ko11-e8","type":"select","prompt":"¿Qué es \"지하철\" (jihacheol)?","options":["Metro","Autobús","Taxi","Tren"],"correctAnswer":"Metro","explanation":"\"지하철\" = \"metro/subterráneo\"."}
      ]
    },
    {
      "id": "korean-12",
      "track": "languages",
      "subTrack": "korean",
      "title": "De Compras",
      "description": "Vocabulario y frases para ir de compras en Corea",
      "icon": "🛍️",
      "xp": 100,
      "learnCards": [
        {"id":"ko12-l1","word":"이거 얼마예요?","translation":"¿Cuánto cuesta esto?","phonetic":"igeo eolmayeyo?","example":"이거 = esto, 얼마 = cuánto"},
        {"id":"ko12-l2","word":"깎아 주세요","translation":"Hágame descuento / Rebájelo","phonetic":"kkakka juseyo","example":"En mercados tradicionales se puede regatear."},
        {"id":"ko12-l3","word":"싸다 ・ 비싸다","translation":"Barato, Caro","phonetic":"ssada, bissada","example":"너무 비싸요! (¡Es demasiado caro!)"},
        {"id":"ko12-l4","word":"카드 돼요?","translation":"¿Aceptan tarjeta?","phonetic":"kadeu dwaeyo?","example":"현금 (hyeongeum) = efectivo"}
      ],
      "exercises": [
        {"id":"ko12-e1","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Hágame descuento","Barato","Caro"],"correctAnswer":"¿Cuánto cuesta esto?","explanation":"\"이거 얼마예요?\" pregunta el precio.","promptExtra":"이거 얼마예요?"},
        {"id":"ko12-e2","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Hágame descuento","Barato","Caro"],"correctAnswer":"Hágame descuento","explanation":"\"깎아 주세요\" = \"rebájelo\".","promptExtra":"깎아 주세요"},
        {"id":"ko12-e3","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Hágame descuento","Barato","Caro"],"correctAnswer":"Barato","explanation":"\"싸다\" = \"barato\".","promptExtra":"싸다"},
        {"id":"ko12-e4","type":"match","prompt":"Empareja con su significado","options":["¿Cuánto cuesta esto?","Hágame descuento","Barato","Caro"],"correctAnswer":"Caro","explanation":"\"비싸다\" = \"caro\".","promptExtra":"비싸다"},
        {"id":"ko12-e5","type":"select","prompt":"¿Cómo preguntas si aceptan tarjeta?","options":["카드 돼요?","현금 돼요?","얼마예요?","이거 주세요"],"correctAnswer":"카드 돼요?","explanation":"\"카드\" + \"돼요?\" = \"¿aceptan tarjeta?\"."},
        {"id":"ko12-e6","type":"select","prompt":"¿Qué significa \"너무 비싸요\"?","options":["Es demasiado caro","Es muy barato","Está bien","No me gusta"],"correctAnswer":"Es demasiado caro","explanation":"\"너무\" = demasiado, \"비싸요\" = es caro."},
        {"id":"ko12-e7","type":"select","prompt":"¿Cómo dices \"deme esto\"?","options":["이거 주세요","이거 얼마예요?","이거 싸요","이거 비싸요"],"correctAnswer":"이거 주세요","explanation":"\"이거 주세요\" = \"Deme esto\"."},
        {"id":"ko12-e8","type":"select","prompt":"\"얼마\" (eolma) significa:","options":["¿Cuánto?","¿Dónde?","¿Qué?","¿Cuándo?"],"correctAnswer":"¿Cuánto?","explanation":"\"얼마\" = \"¿cuánto?\" (precio o cantidad)."}
      ]
    }
  ];
const germanLessons: Lesson[] = [
    {
      "id": "german-1",
      "track": "languages",
      "subTrack": "german",
      "title": "Begrüßungen",
      "description": "Aprende los saludos básicos en alemán",
      "icon": "👋",
      "xp": 30,
      "learnCards": [
        {
          "id": "de1-l1",
          "word": "Hallo",
          "translation": "Hola",
          "example": "Hallo, wie geht's?"
        },
        {
          "id": "de1-l2",
          "word": "Tschüss",
          "translation": "Adiós",
          "example": "Tschüss, bis morgen!"
        },
        {
          "id": "de1-l3",
          "word": "Danke",
          "translation": "Gracias",
          "example": "Danke schön!"
        },
        {
          "id": "de1-l4",
          "word": "Bitte",
          "translation": "Por favor",
          "example": "Bitte schön."
        }
      ],
      "exercises": [
        {
          "id": "de1-e1",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Hola",
            "Adiós",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Hola",
          "explanation": "\"Hallo\" significa \"Hola\".",
          "promptExtra": "Hallo"
        },
        {
          "id": "de1-e2",
          "type": "match",
          "prompt": "Empareja la palabra con su traducción",
          "options": [
            "Hola",
            "Adiós",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Gracias",
          "explanation": "\"Danke\" significa \"Gracias\".",
          "promptExtra": "Danke"
        },
        {
          "id": "de1-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"adiós\" en alemán?",
          "options": [
            "Tschüss",
            "Hallo",
            "Danke",
            "Bitte"
          ],
          "correctAnswer": "Tschüss",
          "explanation": "\"Tschüss\" es la forma informal de adiós."
        },
        {
          "id": "de1-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Bitte\"?",
          "options": [
            "Hola",
            "Adiós",
            "Gracias",
            "Por favor"
          ],
          "correctAnswer": "Por favor",
          "explanation": "\"Bitte\" = \"Por favor\" (y también \"de nada\")."
        },
        {
          "id": "de1-e5",
          "type": "select",
          "prompt": "¿Cómo se dice \"gracias\" en alemán?",
          "options": [
            "Danke",
            "Hallo",
            "Tschüss",
            "Bitte"
          ],
          "correctAnswer": "Danke",
          "explanation": "\"Danke\" es la palabra para gracias."
        },
        {
          "id": "de1-e6",
          "type": "complete",
          "prompt": "Completa: ___ schön! (muchas gracias)",
          "options": [
            "Danke",
            "Bitte",
            "Hallo",
            "Tschüss"
          ],
          "correctAnswer": "Danke",
          "explanation": "\"Danke schön\" = \"Muchas gracias\".",
          "promptExtra": "Danke"
        },
        {
          "id": "de1-e7",
          "type": "complete",
          "prompt": "Completa: T___üss (adiós)",
          "options": [
            "sch",
            "sh",
            "ch",
            "st"
          ],
          "correctAnswer": "sch",
          "explanation": "\"Tschüss\" lleva \"sch\".",
          "promptExtra": "sch"
        },
        {
          "id": "de1-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Danke",
            "schön",
            "Hallo",
            "Tschüss"
          ],
          "correctAnswer": "Danke schön Hallo Tschüss",
          "explanation": "Ejercicio léxico de palabras alemanas."
        }
      ]
    },
    {
      "id": "german-2",
      "track": "languages",
      "subTrack": "german",
      "title": "Vorstellung",
      "description": "Cómo presentarte en alemán",
      "icon": "🙋",
      "xp": 40,
      "learnCards": [
        {
          "id": "de2-l1",
          "word": "Ich heiße...",
          "translation": "Me llamo...",
          "example": "Ich heiße Anna."
        },
        {
          "id": "de2-l2",
          "word": "Ich bin...",
          "translation": "Yo soy...",
          "example": "Ich bin Student."
        },
        {
          "id": "de2-l3",
          "word": "Freut mich",
          "translation": "Mucho gusto",
          "example": "Freut mich, dich kennenzulernen."
        },
        {
          "id": "de2-l4",
          "word": "Wie heißt du?",
          "translation": "¿Cómo te llamas?",
          "example": "Hallo, wie heißt du?"
        }
      ],
      "exercises": [
        {
          "id": "de2-e1",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "Me llamo...",
            "Yo soy...",
            "Mucho gusto",
            "¿Cómo te llamas?"
          ],
          "correctAnswer": "Me llamo...",
          "explanation": "\"Ich heiße...\" = \"Me llamo...\".",
          "promptExtra": "Ich heiße..."
        },
        {
          "id": "de2-e2",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "Me llamo...",
            "Yo soy...",
            "Mucho gusto",
            "¿Cómo te llamas?"
          ],
          "correctAnswer": "Mucho gusto",
          "explanation": "\"Freut mich\" = \"Mucho gusto\".",
          "promptExtra": "Freut mich"
        },
        {
          "id": "de2-e3",
          "type": "select",
          "prompt": "¿Cómo dices \"Yo soy estudiante\" en alemán?",
          "options": [
            "Ich bin Student",
            "Ich heiße Student",
            "Freut mich Student",
            "Wie heißt du Student"
          ],
          "correctAnswer": "Ich bin Student",
          "explanation": "\"Ich bin...\" = \"Yo soy...\"."
        },
        {
          "id": "de2-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Wie heißt du?\"?",
          "options": [
            "¿Cómo te llamas?",
            "Me llamo",
            "Yo soy",
            "Mucho gusto"
          ],
          "correctAnswer": "¿Cómo te llamas?",
          "explanation": "\"Wie heißt du?\" pregunta el nombre."
        },
        {
          "id": "de2-e5",
          "type": "select",
          "prompt": "¿Cómo respondes a \"Freut mich\"?",
          "options": [
            "Freut mich auch",
            "Danke",
            "Tschüss",
            "Hallo"
          ],
          "correctAnswer": "Freut mich auch",
          "explanation": "Se responde \"Freut mich auch\" (igualmente)."
        },
        {
          "id": "de2-e6",
          "type": "complete",
          "prompt": "Completa: Ich ___ Student (soy)",
          "options": [
            "bin",
            "bist",
            "ist",
            "sind"
          ],
          "correctAnswer": "bin",
          "explanation": "\"Ich bin\" = \"Yo soy\" (1ª persona).",
          "promptExtra": "bin"
        },
        {
          "id": "de2-e7",
          "type": "complete",
          "prompt": "Completa: Wie ___ du? (te llamas)",
          "options": [
            "heißt",
            "heiss",
            "heisst",
            "heiß"
          ],
          "correctAnswer": "heißt",
          "explanation": "\"Wie heißt du?\" lleva \"ß\".",
          "promptExtra": "heißt"
        },
        {
          "id": "de2-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Ich",
            "heiße",
            "Max",
            "mich"
          ],
          "correctAnswer": "Ich heiße Max mich",
          "explanation": "\"Ich heiße Max. Freut mich!\"."
        }
      ]
    },
    {
      "id": "german-3",
      "track": "languages",
      "subTrack": "german",
      "title": "Zahlen und Farben",
      "description": "Aprende números y colores en alemán",
      "icon": "🎨",
      "xp": 50,
      "learnCards": [
        {
          "id": "de3-l1",
          "word": "Eins, zwei, drei",
          "translation": "Uno, dos, tres",
          "example": "Ich habe drei Äpfel."
        },
        {
          "id": "de3-l2",
          "word": "Vier, fünf",
          "translation": "Cuatro, cinco",
          "example": "Fünf Euro, bitte."
        },
        {
          "id": "de3-l3",
          "word": "Rot, blau",
          "translation": "Rojo, azul",
          "example": "Der Himmel ist blau."
        },
        {
          "id": "de3-l4",
          "word": "Grün, gelb",
          "translation": "Verde, amarillo",
          "example": "Die Zitrone ist gelb."
        }
      ],
      "exercises": [
        {
          "id": "de3-e1",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "Uno",
            "Dos",
            "Tres",
            "Cuatro"
          ],
          "correctAnswer": "Dos",
          "explanation": "\"Zwei\" significa \"Dos\".",
          "promptExtra": "Zwei"
        },
        {
          "id": "de3-e2",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Verde",
          "explanation": "\"Grün\" significa \"Verde\".",
          "promptExtra": "Grün"
        },
        {
          "id": "de3-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"cinco\" en alemán?",
          "options": [
            "Fünf",
            "Vier",
            "Drei",
            "Zwei"
          ],
          "correctAnswer": "Fünf",
          "explanation": "\"Fünf\" es el número cinco."
        },
        {
          "id": "de3-e4",
          "type": "select",
          "prompt": "¿Qué color es \"blau\"?",
          "options": [
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo"
          ],
          "correctAnswer": "Azul",
          "explanation": "\"Blau\" es el color azul."
        },
        {
          "id": "de3-e5",
          "type": "select",
          "prompt": "¿Cómo se dice \"rojo\" en alemán?",
          "options": [
            "Rot",
            "Blau",
            "Grün",
            "Gelb"
          ],
          "correctAnswer": "Rot",
          "explanation": "\"Rot\" es el color rojo."
        },
        {
          "id": "de3-e6",
          "type": "complete",
          "prompt": "Completa: Ei___ (uno)",
          "options": [
            "ns",
            "nz",
            "ms",
            "nß"
          ],
          "correctAnswer": "ns",
          "explanation": "\"Eins\" se escribe con \"ns\".",
          "promptExtra": "ns"
        },
        {
          "id": "de3-e7",
          "type": "complete",
          "prompt": "Completa: Die Zitrone ist ___ (amarillo)",
          "options": [
            "gelb",
            "rot",
            "grün",
            "blau"
          ],
          "correctAnswer": "gelb",
          "explanation": "\"Gelb\" describe el color del limón.",
          "promptExtra": "gelb"
        },
        {
          "id": "de3-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Ich",
            "habe",
            "drei",
            "Äpfel"
          ],
          "correctAnswer": "Ich habe drei Äpfel",
          "explanation": "\"Ich habe drei Äpfel\" = \"Tengo tres manzanas\"."
        }
      ]
    },
    {
      "id": "german-4",
      "track": "languages",
      "subTrack": "german",
      "title": "Essen und Trinken",
      "description": "Comida y bebida en alemán",
      "icon": "🥨",
      "xp": 60,
      "learnCards": [
        {
          "id": "de4-l1",
          "word": "Wasser",
          "translation": "Agua",
          "example": "Ein Glas Wasser, bitte."
        },
        {
          "id": "de4-l2",
          "word": "Brot",
          "translation": "Pan",
          "example": "Das Brot ist frisch."
        },
        {
          "id": "de4-l3",
          "word": "Apfel",
          "translation": "Manzana",
          "example": "Ich esse einen Apfel."
        },
        {
          "id": "de4-l4",
          "word": "Milch",
          "translation": "Leche",
          "example": "Ich trinke Milch zum Frühstück."
        }
      ],
      "exercises": [
        {
          "id": "de4-e1",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Agua",
          "explanation": "\"Wasser\" significa \"Agua\".",
          "promptExtra": "Wasser"
        },
        {
          "id": "de4-e2",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Pan",
          "explanation": "\"Brot\" significa \"Pan\".",
          "promptExtra": "Brot"
        },
        {
          "id": "de4-e3",
          "type": "select",
          "prompt": "¿Cómo se dice \"manzana\" en alemán?",
          "options": [
            "Apfel",
            "Brot",
            "Wasser",
            "Milch"
          ],
          "correctAnswer": "Apfel",
          "explanation": "\"Apfel\" es manzana en alemán."
        },
        {
          "id": "de4-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Milch\"?",
          "options": [
            "Agua",
            "Pan",
            "Manzana",
            "Leche"
          ],
          "correctAnswer": "Leche",
          "explanation": "\"Milch\" es leche en alemán."
        },
        {
          "id": "de4-e5",
          "type": "select",
          "prompt": "¿Qué desayunas según el ejemplo?",
          "options": [
            "Milch",
            "Wasser",
            "Brot",
            "Apfel"
          ],
          "correctAnswer": "Milch",
          "explanation": "En el ejemplo: \"Ich trinke Milch zum Frühstück\"."
        },
        {
          "id": "de4-e6",
          "type": "complete",
          "prompt": "Completa: Ein ___ Wasser, bitte (vaso)",
          "options": [
            "Glas",
            "Tasse",
            "Flasche",
            "Teller"
          ],
          "correctAnswer": "Glas",
          "explanation": "\"Ein Glas Wasser\" = \"Un vaso de agua\".",
          "promptExtra": "Glas"
        },
        {
          "id": "de4-e7",
          "type": "complete",
          "prompt": "Completa: Ich ___ einen Apfel (como)",
          "options": [
            "esse",
            "trinke",
            "habe",
            "bin"
          ],
          "correctAnswer": "esse",
          "explanation": "\"Ich esse\" = \"Yo como\".",
          "promptExtra": "esse"
        },
        {
          "id": "de4-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Ich",
            "trinke",
            "Milch",
            "Brot"
          ],
          "correctAnswer": "Ich trinke Milch Brot",
          "explanation": "Ejercicio de vocabulario alemán."
        }
      ]
    },
    {
      "id": "german-5",
      "track": "languages",
      "subTrack": "german",
      "title": "Nützliche Sätze",
      "description": "Frases útiles en alemán",
      "icon": "💬",
      "xp": 70,
      "learnCards": [
        {
          "id": "de5-l1",
          "word": "Wo ist...?",
          "translation": "¿Dónde está...?",
          "example": "Wo ist die Toilette?"
        },
        {
          "id": "de5-l2",
          "word": "Wie viel kostet...?",
          "translation": "¿Cuánto cuesta...?",
          "example": "Wie viel kostet das?"
        },
        {
          "id": "de5-l3",
          "word": "Ich möchte...",
          "translation": "Quisiera...",
          "example": "Ich möchte einen Kaffee."
        },
        {
          "id": "de5-l4",
          "word": "Entschuldigung",
          "translation": "Disculpe",
          "example": "Entschuldigung, wo ist der Bahnhof?"
        }
      ],
      "exercises": [
        {
          "id": "de5-e1",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "¿Dónde está...?",
            "¿Cuánto cuesta...?",
            "Quisiera...",
            "Disculpe"
          ],
          "correctAnswer": "¿Dónde está...?",
          "explanation": "\"Wo ist...?\" = \"¿Dónde está...?\".",
          "promptExtra": "Wo ist...?"
        },
        {
          "id": "de5-e2",
          "type": "match",
          "prompt": "Empareja con su traducción",
          "options": [
            "¿Dónde está...?",
            "¿Cuánto cuesta...?",
            "Quisiera...",
            "Disculpe"
          ],
          "correctAnswer": "¿Cuánto cuesta...?",
          "explanation": "\"Wie viel kostet...?\" pregunta el precio.",
          "promptExtra": "Wie viel kostet...?"
        },
        {
          "id": "de5-e3",
          "type": "select",
          "prompt": "¿Cómo pides algo educadamente en alemán?",
          "options": [
            "Ich möchte...",
            "Wo ist...?",
            "Wie viel kostet...?",
            "Entschuldigung"
          ],
          "correctAnswer": "Ich möchte...",
          "explanation": "\"Ich möchte...\" = \"Quisiera...\"."
        },
        {
          "id": "de5-e4",
          "type": "select",
          "prompt": "¿Qué significa \"Entschuldigung\"?",
          "options": [
            "Gracias",
            "Disculpe",
            "Por favor",
            "Hola"
          ],
          "correctAnswer": "Disculpe",
          "explanation": "\"Entschuldigung\" = \"Disculpe\"."
        },
        {
          "id": "de5-e5",
          "type": "select",
          "prompt": "¿Cómo preguntas dónde está la estación?",
          "options": [
            "Wo ist der Bahnhof?",
            "Wie viel kostet der Bahnhof?",
            "Ich möchte der Bahnhof",
            "Entschuldigung der Bahnhof"
          ],
          "correctAnswer": "Wo ist der Bahnhof?",
          "explanation": "\"Wo ist...?\" pregunta ubicación."
        },
        {
          "id": "de5-e6",
          "type": "complete",
          "prompt": "Completa: ___ ist die Toilette? (¿Dónde está?)",
          "options": [
            "Wo",
            "Wie",
            "Was",
            "Wer"
          ],
          "correctAnswer": "Wo",
          "explanation": "\"Wo\" pregunta ubicación.",
          "promptExtra": "Wo"
        },
        {
          "id": "de5-e7",
          "type": "complete",
          "prompt": "Completa: ___ möchte einen Kaffee (Quisiera)",
          "options": [
            "Ich",
            "Du",
            "Er",
            "Sie"
          ],
          "correctAnswer": "Ich",
          "explanation": "\"Ich möchte\" = \"Quisiera\".",
          "promptExtra": "Ich"
        },
        {
          "id": "de5-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Ich",
            "möchte",
            "einen",
            "Kaffee"
          ],
          "correctAnswer": "Ich möchte einen Kaffee",
          "explanation": "\"Ich möchte einen Kaffee\" = \"Quisiera un café\"."
        }
      ]
    },
    {
      "id": "german-6",
      "track": "languages",
      "subTrack": "german",
      "title": "Familie",
      "description": "Die Familienmitglieder auf Deutsch",
      "icon": "👨‍👩‍👧‍👦",
      "xp": 80,
      "learnCards": [
        {"id":"de6-l1","word":"Mutter","translation":"Madre","example":"Meine Mutter ist Lehrerin."},
        {"id":"de6-l2","word":"Vater","translation":"Padre","example":"Mein Vater arbeitet im Büro."},
        {"id":"de6-l3","word":"Bruder","translation":"Hermano","example":"Ich habe einen Bruder."},
        {"id":"de6-l4","word":"Schwester","translation":"Hermana","example":"Meine Schwester ist jünger."}
      ],
      "exercises": [
        {"id":"de6-e1","type":"match","prompt":"Empareja con su traducción","options":["Madre","Padre","Hermano","Hermana"],"correctAnswer":"Madre","explanation":"\"Mutter\" = \"Madre\".","promptExtra":"Mutter"},
        {"id":"de6-e2","type":"match","prompt":"Empareja con su traducción","options":["Madre","Padre","Hermano","Hermana"],"correctAnswer":"Padre","explanation":"\"Vater\" = \"Padre\".","promptExtra":"Vater"},
        {"id":"de6-e3","type":"select","prompt":"¿Cómo se dice \"hermano\" en alemán?","options":["Bruder","Schwester","Vater","Mutter"],"correctAnswer":"Bruder","explanation":"\"Bruder\" = \"Hermano\"."},
        {"id":"de6-e4","type":"select","prompt":"¿Cómo se dice \"hermana\" en alemán?","options":["Schwester","Bruder","Mutter","Vater"],"correctAnswer":"Schwester","explanation":"\"Schwester\" = \"Hermana\"."},
        {"id":"de6-e5","type":"select","prompt":"¿Qué significa \"Vater\"?","options":["Padre","Madre","Hermano","Hermana"],"correctAnswer":"Padre","explanation":"\"Vater\" = \"Padre\"."},
        {"id":"de6-e6","type":"complete","prompt":"Completa: Mutt___ (madre)","options":["er","or","ar","ur"],"correctAnswer":"er","explanation":"\"Mutter\" termina en \"er\".","promptExtra":"er"},
        {"id":"de6-e7","type":"complete","prompt":"Completa: Schwest___ (hermana)","options":["er","or","ar","ur"],"correctAnswer":"er","explanation":"\"Schwester\" termina en \"er\".","promptExtra":"er"},
        {"id":"de6-e8","type":"arrange","prompt":"Ordena las palabras","options":["Meine","Mutter","ist","nett"],"correctAnswer":"Meine Mutter ist nett","explanation":"\"Meine Mutter ist nett\" = \"Mi madre es amable\"."}
      ]
    },
    {
      "id": "german-7",
      "track": "languages",
      "subTrack": "german",
      "title": "Kleidung",
      "description": "Wortschatz für Kleidungsstücke",
      "icon": "👕",
      "xp": 80,
      "learnCards": [
        {"id":"de7-l1","word":"Hemd","translation":"Camisa","example":"Er trägt ein blaues Hemd."},
        {"id":"de7-l2","word":"Hose","translation":"Pantalones","example":"Diese Hose ist neu."},
        {"id":"de7-l3","word":"Schuhe","translation":"Zapatos","example":"Ich brauche neue Schuhe."},
        {"id":"de7-l4","word":"Jacke","translation":"Chaqueta","example":"Nimm eine Jacke mit."}
      ],
      "exercises": [
        {"id":"de7-e1","type":"match","prompt":"Empareja con su traducción","options":["Camisa","Pantalones","Zapatos","Chaqueta"],"correctAnswer":"Camisa","explanation":"\"Hemd\" = \"Camisa\".","promptExtra":"Hemd"},
        {"id":"de7-e2","type":"match","prompt":"Empareja con su traducción","options":["Camisa","Pantalones","Zapatos","Chaqueta"],"correctAnswer":"Pantalones","explanation":"\"Hose\" = \"Pantalones\".","promptExtra":"Hose"},
        {"id":"de7-e3","type":"select","prompt":"¿Cómo se dice \"zapatos\" en alemán?","options":["Schuhe","Hemd","Hose","Jacke"],"correctAnswer":"Schuhe","explanation":"\"Schuhe\" = \"Zapatos\"."},
        {"id":"de7-e4","type":"select","prompt":"¿Qué prenda es \"Jacke\"?","options":["Chaqueta","Camisa","Pantalones","Zapatos"],"correctAnswer":"Chaqueta","explanation":"\"Jacke\" = \"Chaqueta\"."},
        {"id":"de7-e5","type":"select","prompt":"\"Nimm eine Jacke mit\" significa:","options":["Lleva una chaqueta","Ponte una camisa","Compra zapatos","Lava los pantalones"],"correctAnswer":"Lleva una chaqueta","explanation":"\"Jacke\" = \"Chaqueta\"."},
        {"id":"de7-e6","type":"complete","prompt":"Completa: Sc___e (zapatos)","options":["huh","hue","hou","hie"],"correctAnswer":"huh","explanation":"\"Schuhe\" contiene \"huh\".","promptExtra":"huh"},
        {"id":"de7-e7","type":"complete","prompt":"Completa: H___e (pantalones)","options":["os","as","es","is"],"correctAnswer":"os","explanation":"\"Hose\" contiene \"os\".","promptExtra":"os"},
        {"id":"de7-e8","type":"arrange","prompt":"Ordena las palabras","options":["Ich","mag","dein","Hemd"],"correctAnswer":"Ich mag dein Hemd","explanation":"\"Ich mag dein Hemd\" = \"Me gusta tu camisa\"."}
      ]
    },
    {
      "id": "german-8",
      "track": "languages",
      "subTrack": "german",
      "title": "Wetter",
      "description": "Über das Wetter sprechen",
      "icon": "🌤️",
      "xp": 80,
      "learnCards": [
        {"id":"de8-l1","word":"Sonnig","translation":"Soleado","example":"Es ist sonnig heute."},
        {"id":"de8-l2","word":"Regnerisch","translation":"Lluvioso","example":"Morgen wird es regnerisch."},
        {"id":"de8-l3","word":"Heiß","translation":"Caluroso","example":"Der Sommer ist sehr heiß."},
        {"id":"de8-l4","word":"Kalt","translation":"Frío","example":"Im Winter ist es kalt."}
      ],
      "exercises": [
        {"id":"de8-e1","type":"match","prompt":"Empareja con su traducción","options":["Soleado","Lluvioso","Caluroso","Frío"],"correctAnswer":"Soleado","explanation":"\"Sonnig\" = \"Soleado\".","promptExtra":"Sonnig"},
        {"id":"de8-e2","type":"match","prompt":"Empareja con su traducción","options":["Soleado","Lluvioso","Caluroso","Frío"],"correctAnswer":"Lluvioso","explanation":"\"Regnerisch\" = \"Lluvioso\".","promptExtra":"Regnerisch"},
        {"id":"de8-e3","type":"select","prompt":"¿Cómo dices que hace calor en alemán?","options":["Es ist heiß","Es ist kalt","Es ist sonnig","Es ist regnerisch"],"correctAnswer":"Es ist heiß","explanation":"\"Heiß\" = \"caluroso\"."},
        {"id":"de8-e4","type":"select","prompt":"¿Qué significa \"Kalt\"?","options":["Frío","Calor","Soleado","Lluvioso"],"correctAnswer":"Frío","explanation":"\"Kalt\" = \"Frío\"."},
        {"id":"de8-e5","type":"select","prompt":"\"Es ist sonnig\" significa:","options":["Está soleado","Está lloviendo","Hace frío","Hace calor"],"correctAnswer":"Está soleado","explanation":"\"Sonnig\" viene de \"Sonne\" (sol)."},
        {"id":"de8-e6","type":"complete","prompt":"Completa: Son___ (soleado)","options":["nig","nag","neg","nug"],"correctAnswer":"nig","explanation":"\"Sonnig\" termina en \"nig\".","promptExtra":"nig"},
        {"id":"de8-e7","type":"complete","prompt":"Completa: He___ (caluroso)","options":["iß","iss","ies","ees"],"correctAnswer":"iß","explanation":"\"Heiß\" termina con \"ß\".","promptExtra":"iß"},
        {"id":"de8-e8","type":"arrange","prompt":"Ordena las palabras","options":["Es","ist","ein","schöner","Tag"],"correctAnswer":"Es ist ein schöner Tag","explanation":"\"Es ist ein schöner Tag\" = \"Es un hermoso día\"."}
      ]
    },
    {
      "id": "german-9",
      "track": "languages",
      "subTrack": "german",
      "title": "Verkehrsmittel",
      "description": "Wortschatz für Transportmittel",
      "icon": "🚗",
      "xp": 80,
      "learnCards": [
        {"id":"de9-l1","word":"Auto","translation":"Coche","example":"Ich fahre Auto."},
        {"id":"de9-l2","word":"Bus","translation":"Autobús","example":"Der Bus kommt um 8."},
        {"id":"de9-l3","word":"Zug","translation":"Tren","example":"Wir reisen mit dem Zug."},
        {"id":"de9-l4","word":"Flugzeug","translation":"Avión","example":"Das Flugzeug ist schnell."}
      ],
      "exercises": [
        {"id":"de9-e1","type":"match","prompt":"Empareja con su traducción","options":["Coche","Autobús","Tren","Avión"],"correctAnswer":"Coche","explanation":"\"Auto\" = \"Coche\".","promptExtra":"Auto"},
        {"id":"de9-e2","type":"match","prompt":"Empareja con su traducción","options":["Coche","Autobús","Tren","Avión"],"correctAnswer":"Autobús","explanation":"\"Bus\" = \"Autobús\".","promptExtra":"Bus"},
        {"id":"de9-e3","type":"select","prompt":"¿Cómo se dice \"tren\" en alemán?","options":["Zug","Bus","Auto","Flugzeug"],"correctAnswer":"Zug","explanation":"\"Zug\" = \"Tren\"."},
        {"id":"de9-e4","type":"select","prompt":"¿Qué medio es \"Flugzeug\"?","options":["Avión","Tren","Barco","Coche"],"correctAnswer":"Avión","explanation":"\"Flugzeug\" = \"Avión\" (Flug = vuelo, Zeug = cosa)."},
        {"id":"de9-e5","type":"select","prompt":"\"Ich fahre Auto\" significa:","options":["Conduzco un coche","Viajo en tren","Voy en bus","Vuelo en avión"],"correctAnswer":"Conduzco un coche","explanation":"\"fahren\" = conducir/ir en vehículo."},
        {"id":"de9-e6","type":"complete","prompt":"Completa: Flug___g (avión)","options":["zeu","zau","zou","zei"],"correctAnswer":"zeu","explanation":"\"Flugzeug\" contiene \"zeu\".","promptExtra":"zeu"},
        {"id":"de9-e7","type":"complete","prompt":"Completa: Z___ (tren)","options":["ug","ag","eg","ig"],"correctAnswer":"ug","explanation":"\"Zug\" contiene \"ug\".","promptExtra":"ug"},
        {"id":"de9-e8","type":"arrange","prompt":"Ordena las palabras","options":["Der","Bus","ist","spät"],"correctAnswer":"Der Bus ist spät","explanation":"\"Der Bus ist spät\" = \"El autobús va tarde\"."}
      ]
    },
    {
      "id": "german-10",
      "track": "languages",
      "subTrack": "german",
      "title": "Berufe",
      "description": "Namen von Berufen auf Deutsch",
      "icon": "👨‍💼",
      "xp": 90,
      "learnCards": [
        {"id":"de10-l1","word":"Arzt","translation":"Médico","example":"Der Arzt ist sehr nett."},
        {"id":"de10-l2","word":"Lehrer","translation":"Profesor","example":"Mein Lehrer erklärt gut."},
        {"id":"de10-l3","word":"Ingenieur","translation":"Ingeniero","example":"Sie ist Ingenieurin."},
        {"id":"de10-l4","word":"Koch","translation":"Cocinero","example":"Der Koch macht tolles Essen."}
      ],
      "exercises": [
        {"id":"de10-e1","type":"match","prompt":"Empareja con su traducción","options":["Médico","Profesor","Ingeniero","Cocinero"],"correctAnswer":"Médico","explanation":"\"Arzt\" = \"Médico\".","promptExtra":"Arzt"},
        {"id":"de10-e2","type":"match","prompt":"Empareja con su traducción","options":["Médico","Profesor","Ingeniero","Cocinero"],"correctAnswer":"Profesor","explanation":"\"Lehrer\" = \"Profesor\".","promptExtra":"Lehrer"},
        {"id":"de10-e3","type":"select","prompt":"¿Cómo se dice \"ingeniero\" en alemán?","options":["Ingenieur","Arzt","Lehrer","Koch"],"correctAnswer":"Ingenieur","explanation":"\"Ingenieur\" = \"Ingeniero\"."},
        {"id":"de10-e4","type":"select","prompt":"¿Qué hace un \"Koch\"?","options":["Cocina","Enseña","Cura","Construye"],"correctAnswer":"Cocina","explanation":"\"Koch\" = \"Cocinero\"."},
        {"id":"de10-e5","type":"select","prompt":"\"Sie ist Lehrerin\" significa:","options":["Ella es profesora","Ella es médica","Ella es ingeniera","Ella es cocinera"],"correctAnswer":"Ella es profesora","explanation":"\"Lehrerin\" es la forma femenina de \"Lehrer\"."},
        {"id":"de10-e6","type":"complete","prompt":"Completa: Leh___ (profesor)","options":["rer","rar","ror","rur"],"correctAnswer":"rer","explanation":"\"Lehrer\" termina en \"rer\".","promptExtra":"rer"},
        {"id":"de10-e7","type":"complete","prompt":"Completa: Ingeni___ (ingeniero)","options":["eur","aur","our","iur"],"correctAnswer":"eur","explanation":"\"Ingenieur\" termina en \"eur\".","promptExtra":"eur"},
        {"id":"de10-e8","type":"arrange","prompt":"Ordena las palabras","options":["Er","ist","ein","Arzt"],"correctAnswer":"Er ist ein Arzt","explanation":"\"Er ist ein Arzt\" = \"Él es médico\"."}
      ]
    },
    {
      "id": "german-11",
      "track": "languages",
      "subTrack": "german",
      "title": "Körperteile",
      "description": "Die Teile des menschlichen Körpers",
      "icon": "🦵",
      "xp": 90,
      "learnCards": [
        {"id":"de11-l1","word":"Kopf","translation":"Cabeza","example":"Ich habe Kopfschmerzen."},
        {"id":"de11-l2","word":"Hand","translation":"Mano","example":"Wasch deine Hände."},
        {"id":"de11-l3","word":"Fuß","translation":"Pie","example":"Mein Fuß tut weh."},
        {"id":"de11-l4","word":"Auge","translation":"Ojo","example":"Sie hat blaue Augen."}
      ],
      "exercises": [
        {"id":"de11-e1","type":"match","prompt":"Empareja con su traducción","options":["Cabeza","Mano","Pie","Ojo"],"correctAnswer":"Cabeza","explanation":"\"Kopf\" = \"Cabeza\".","promptExtra":"Kopf"},
        {"id":"de11-e2","type":"match","prompt":"Empareja con su traducción","options":["Cabeza","Mano","Pie","Ojo"],"correctAnswer":"Mano","explanation":"\"Hand\" = \"Mano\".","promptExtra":"Hand"},
        {"id":"de11-e3","type":"select","prompt":"¿Cómo se dice \"pie\" en alemán?","options":["Fuß","Hand","Kopf","Auge"],"correctAnswer":"Fuß","explanation":"\"Fuß\" = \"Pie\"."},
        {"id":"de11-e4","type":"select","prompt":"¿Qué parte del cuerpo es \"Auge\"?","options":["Ojo","Oreja","Nariz","Boca"],"correctAnswer":"Ojo","explanation":"\"Auge\" = \"Ojo\"."},
        {"id":"de11-e5","type":"select","prompt":"\"Ich habe Kopfschmerzen\" significa:","options":["Tengo dolor de cabeza","Tengo dolor de mano","Tengo dolor de pie","Tengo dolor de ojo"],"correctAnswer":"Tengo dolor de cabeza","explanation":"\"Kopf\" + \"Schmerzen\" = \"dolor de cabeza\"."},
        {"id":"de11-e6","type":"complete","prompt":"Completa: Ko___ (cabeza)","options":["pf","ff","ph","pp"],"correctAnswer":"pf","explanation":"\"Kopf\" contiene \"pf\".","promptExtra":"pf"},
        {"id":"de11-e7","type":"complete","prompt":"Completa: Fu___ (pie)","options":["ß","ss","sz","B"],"correctAnswer":"ß","explanation":"\"Fuß\" usa la letra \"ß\" (Eszett).","promptExtra":"ß"},
        {"id":"de11-e8","type":"arrange","prompt":"Ordena las palabras","options":["Mein","Kopf","tut","weh"],"correctAnswer":"Mein Kopf tut weh","explanation":"\"Mein Kopf tut weh\" = \"Me duele la cabeza\"."}
      ]
    },
    {
      "id": "german-12",
      "track": "languages",
      "subTrack": "german",
      "title": "Gefühle",
      "description": "Gefühle und Emotionen ausdrücken",
      "icon": "😊",
      "xp": 90,
      "learnCards": [
        {"id":"de12-l1","word":"Glücklich","translation":"Feliz","example":"Ich bin sehr glücklich heute."},
        {"id":"de12-l2","word":"Traurig","translation":"Triste","example":"Sie fühlt sich traurig."},
        {"id":"de12-l3","word":"Wütend","translation":"Enojado","example":"Sei nicht wütend."},
        {"id":"de12-l4","word":"Müde","translation":"Cansado","example":"Ich bin müde nach der Arbeit."}
      ],
      "exercises": [
        {"id":"de12-e1","type":"match","prompt":"Empareja con su traducción","options":["Feliz","Triste","Enojado","Cansado"],"correctAnswer":"Feliz","explanation":"\"Glücklich\" = \"Feliz\".","promptExtra":"Glücklich"},
        {"id":"de12-e2","type":"match","prompt":"Empareja con su traducción","options":["Feliz","Triste","Enojado","Cansado"],"correctAnswer":"Triste","explanation":"\"Traurig\" = \"Triste\".","promptExtra":"Traurig"},
        {"id":"de12-e3","type":"select","prompt":"¿Cómo dices \"estoy cansado\" en alemán?","options":["Ich bin müde","Ich bin glücklich","Ich bin traurig","Ich bin wütend"],"correctAnswer":"Ich bin müde","explanation":"\"Müde\" = \"Cansado\"."},
        {"id":"de12-e4","type":"select","prompt":"¿Qué significa \"Wütend\"?","options":["Enojado","Feliz","Triste","Cansado"],"correctAnswer":"Enojado","explanation":"\"Wütend\" = \"Enojado\"."},
        {"id":"de12-e5","type":"select","prompt":"\"Ich bin glücklich\" significa:","options":["Estoy feliz","Estoy triste","Estoy enojado","Estoy cansado"],"correctAnswer":"Estoy feliz","explanation":"\"Glücklich\" = \"Feliz\"."},
        {"id":"de12-e6","type":"complete","prompt":"Completa: Glückl___ (feliz)","options":["ich","ach","ech","och"],"correctAnswer":"ich","explanation":"\"Glücklich\" termina en \"ich\".","promptExtra":"ich"},
        {"id":"de12-e7","type":"complete","prompt":"Completa: Trau___ (triste)","options":["rig","rag","reg","rug"],"correctAnswer":"rig","explanation":"\"Traurig\" termina en \"rig\".","promptExtra":"rig"},
        {"id":"de12-e8","type":"arrange","prompt":"Ordena las palabras","options":["Ich","bin","so","glücklich"],"correctAnswer":"Ich bin so glücklich","explanation":"\"Ich bin so glücklich\" = \"Estoy tan feliz\"."}
      ]
    }
  ];
const jsLessons: Lesson[] = [
    {
      "id": "javascript-1",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Introducción a JS",
      "description": "Qué es programar y qué es una variable",
      "icon": "🚀",
      "xp": 30,
      "learnCards": [
        {
          "id": "js1-l1",
          "word": "Variable",
          "translation": "Un espacio en memoria que almacena un valor",
          "example": "let nombre = 'Ana';"
        },
        {
          "id": "js1-l2",
          "word": "let",
          "translation": "Declara una variable que puede cambiar de valor",
          "example": "let puntaje = 100;"
        },
        {
          "id": "js1-l3",
          "word": "const",
          "translation": "Declara una constante cuyo valor no cambia",
          "example": "const PI = 3.1416;"
        },
        {
          "id": "js1-l4",
          "word": "console.log()",
          "translation": "Muestra un mensaje o valor en la consola",
          "example": "console.log('Hola Mundo');"
        }
      ],
      "exercises": [
        {
          "id": "js1-e1",
          "type": "match",
          "prompt": "Empareja el concepto con su descripción",
          "options": [
            "Espacio en memoria para un valor",
            "Muestra datos en consola",
            "Un tipo de bucle",
            "Un archivo JS"
          ],
          "correctAnswer": "Espacio en memoria para un valor",
          "explanation": "Una variable guarda un valor que puede usarse después.",
          "promptExtra": "Variable"
        },
        {
          "id": "js1-e2",
          "type": "match",
          "prompt": "Empareja el concepto con su descripción",
          "options": [
            "Declara variable modificable",
            "Declara constante",
            "Muestra en consola",
            "Define una función"
          ],
          "correctAnswer": "Declara variable modificable",
          "explanation": "\"let\" permite reasignar el valor después.",
          "promptExtra": "let"
        },
        {
          "id": "js1-e3",
          "type": "select",
          "prompt": "¿Qué palabra clave se usa para declarar una constante?",
          "options": [
            "const",
            "let",
            "var",
            "fix"
          ],
          "correctAnswer": "const",
          "explanation": "\"const\" crea una variable que no se puede reasignar."
        },
        {
          "id": "js1-e4",
          "type": "select",
          "prompt": "¿Qué hace console.log('Hola')?",
          "options": [
            "Muestra \"Hola\" en la consola",
            "Crea una variable \"Hola\"",
            "Guarda \"Hola\" en un archivo",
            "Abre una ventana con \"Hola\""
          ],
          "correctAnswer": "Muestra \"Hola\" en la consola",
          "explanation": "console.log() imprime valores en la consola del navegador."
        },
        {
          "id": "js1-e5",
          "type": "select",
          "prompt": "¿Qué imprime: console.log(5 + 3)?",
          "options": [
            "8",
            "53",
            "5 + 3",
            "error"
          ],
          "correctAnswer": "8",
          "explanation": "El operador + suma los números 5 y 3."
        },
        {
          "id": "js1-e6",
          "type": "complete",
          "prompt": "Completa: ___ nombre = 'Ana';",
          "options": [
            "let",
            "const",
            "var",
            "set"
          ],
          "correctAnswer": "let",
          "explanation": "\"let\" declara una variable modificable.",
          "promptExtra": "let"
        },
        {
          "id": "js1-e7",
          "type": "complete",
          "prompt": "Completa: console.___('Hola')",
          "options": [
            "log",
            "print",
            "show",
            "write"
          ],
          "correctAnswer": "log",
          "explanation": "\"console.log()\" es la sintaxis correcta.",
          "promptExtra": "log"
        },
        {
          "id": "js1-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "let",
            "edad",
            "=",
            "25"
          ],
          "correctAnswer": "let edad = 25",
          "explanation": "\"let edad = 25;\" declara una variable con valor 25."
        }
      ]
    },
    {
      "id": "javascript-2",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Tipos de datos",
      "description": "Números, strings y booleanos en JavaScript",
      "icon": "📦",
      "xp": 40,
      "learnCards": [
        {
          "id": "js2-l1",
          "word": "Number",
          "translation": "Tipo de dato para valores numéricos",
          "example": "let edad = 25;"
        },
        {
          "id": "js2-l2",
          "word": "String",
          "translation": "Tipo de dato para texto, entre comillas",
          "example": "let nombre = 'Ana';"
        },
        {
          "id": "js2-l3",
          "word": "Boolean",
          "translation": "Tipo de dato lógico: true o false",
          "example": "let activo = true;"
        },
        {
          "id": "js2-l4",
          "word": "typeof",
          "translation": "Operador que devuelve el tipo de un valor",
          "example": "typeof 'hola' // devuelve 'string'"
        }
      ],
      "exercises": [
        {
          "id": "js2-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Texto entre comillas",
            "Número entero o decimal",
            "Valor true o false",
            "Lista de elementos"
          ],
          "correctAnswer": "Texto entre comillas",
          "explanation": "Un string es una cadena de caracteres.",
          "promptExtra": "String"
        },
        {
          "id": "js2-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Texto entre comillas",
            "Número entero o decimal",
            "Valor true o false",
            "Lista de elementos"
          ],
          "correctAnswer": "Valor true o false",
          "explanation": "Boolean solo puede ser true o false.",
          "promptExtra": "Boolean"
        },
        {
          "id": "js2-e3",
          "type": "select",
          "prompt": "¿Qué tipo de dato es 42?",
          "options": [
            "number",
            "string",
            "boolean",
            "array"
          ],
          "correctAnswer": "number",
          "explanation": "Los números sin comillas son de tipo number."
        },
        {
          "id": "js2-e4",
          "type": "select",
          "prompt": "¿Qué tipo de dato es \"Hola\"?",
          "options": [
            "string",
            "number",
            "boolean",
            "object"
          ],
          "correctAnswer": "string",
          "explanation": "El texto entre comillas es un string."
        },
        {
          "id": "js2-e5",
          "type": "select",
          "prompt": "¿Qué devuelve typeof \"Mallu\"?",
          "options": [
            "\"string\"",
            "\"number\"",
            "\"boolean\"",
            "\"object\""
          ],
          "correctAnswer": "\"string\"",
          "explanation": "typeof devuelve el tipo del valor como string."
        },
        {
          "id": "js2-e6",
          "type": "complete",
          "prompt": "Completa: let activo = ___; (verdadero)",
          "options": [
            "true",
            "false",
            "1",
            "yes"
          ],
          "correctAnswer": "true",
          "explanation": "\"true\" es el valor booleano para verdadero.",
          "promptExtra": "true"
        },
        {
          "id": "js2-e7",
          "type": "complete",
          "prompt": "Completa: let nombre = ___; (texto 'Mallu')",
          "options": [
            "\"Mallu\"",
            "Mallu",
            "'Mallu",
            "Mallu'"
          ],
          "correctAnswer": "\"Mallu\"",
          "explanation": "Los strings van entre comillas dobles o simples.",
          "promptExtra": "\"Mallu\""
        },
        {
          "id": "js2-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "let",
            "activo",
            "=",
            "true"
          ],
          "correctAnswer": "let activo = true",
          "explanation": "Declara una variable booleana con valor true."
        }
      ]
    },
    {
      "id": "javascript-3",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Condicionales",
      "description": "Toma decisiones con if/else",
      "icon": "🔀",
      "xp": 50,
      "learnCards": [
        {
          "id": "js3-l1",
          "word": "if",
          "translation": "Ejecuta código si la condición es verdadera",
          "example": "if (edad >= 18) { console.log('Adulto'); }"
        },
        {
          "id": "js3-l2",
          "word": "else",
          "translation": "Ejecuta código si la condición del if es falsa",
          "example": "else { console.log('Menor'); }"
        },
        {
          "id": "js3-l3",
          "word": "else if",
          "translation": "Evalúa otra condición si la anterior fue falsa",
          "example": "else if (edad >= 13) { console.log('Adolescente'); }"
        },
        {
          "id": "js3-l4",
          "word": "===",
          "translation": "Compara valor y tipo (igualdad estricta)",
          "example": "5 === '5' // false"
        }
      ],
      "exercises": [
        {
          "id": "js3-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Ejecuta si la condición es true",
            "Ejecuta si el if es false",
            "Compara valores",
            "Declara función"
          ],
          "correctAnswer": "Ejecuta si la condición es true",
          "explanation": "if evalúa una condición y ejecuta el bloque si es verdadera.",
          "promptExtra": "if"
        },
        {
          "id": "js3-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Ejecuta si la condición es true",
            "Ejecuta si el if es false",
            "Compara valores",
            "Declara función"
          ],
          "correctAnswer": "Ejecuta si el if es false",
          "explanation": "else es el bloque alternativo cuando if no se cumple.",
          "promptExtra": "else"
        },
        {
          "id": "js3-e3",
          "type": "select",
          "prompt": "¿Qué evalúa un if?",
          "options": [
            "Una condición que da true o false",
            "Un número aleatorio",
            "Solo strings",
            "Nada, siempre se ejecuta"
          ],
          "correctAnswer": "Una condición que da true o false",
          "explanation": "if evalúa una expresión booleana."
        },
        {
          "id": "js3-e4",
          "type": "select",
          "prompt": "¿Qué imprime if (5 > 3) { console.log('Sí'); }?",
          "options": [
            "Sí",
            "No",
            "Error",
            "Nada"
          ],
          "correctAnswer": "Sí",
          "explanation": "5 > 3 es true, así que se ejecuta el bloque."
        },
        {
          "id": "js3-e5",
          "type": "select",
          "prompt": "¿Qué significa === en JavaScript?",
          "options": [
            "Igualdad estricta (valor y tipo)",
            "Asignación",
            "Igualdad de valor solamente",
            "Diferente"
          ],
          "correctAnswer": "Igualdad estricta (valor y tipo)",
          "explanation": "=== compara valor y tipo de dato."
        },
        {
          "id": "js3-e6",
          "type": "complete",
          "prompt": "Completa: if (edad ___ 18) { ... } (mayor o igual)",
          "options": [
            ">=",
            ">",
            "==",
            "="
          ],
          "correctAnswer": ">=",
          "explanation": "\">=\" significa mayor o igual que.",
          "promptExtra": ">="
        },
        {
          "id": "js3-e7",
          "type": "complete",
          "prompt": "Completa: ___ { console.log('No'); } (si no)",
          "options": [
            "else",
            "if",
            "elseif",
            "elif"
          ],
          "correctAnswer": "else",
          "explanation": "\"else\" ejecuta el bloque alternativo.",
          "promptExtra": "else"
        },
        {
          "id": "js3-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "if",
            "(edad",
            ">=",
            "18)"
          ],
          "correctAnswer": "if (edad >= 18)",
          "explanation": "Sintaxis correcta de un condicional."
        }
      ]
    },
    {
      "id": "javascript-4",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Bucles",
      "description": "Repite código con for y while",
      "icon": "🔄",
      "xp": 60,
      "learnCards": [
        {
          "id": "js4-l1",
          "word": "for",
          "translation": "Bucle que repite un bloque un número definido de veces",
          "example": "for (let i = 0; i < 3; i++) { console.log(i); }"
        },
        {
          "id": "js4-l2",
          "word": "while",
          "translation": "Bucle que repite mientras la condición sea verdadera",
          "example": "while (x < 5) { x++; }"
        },
        {
          "id": "js4-l3",
          "word": "i++",
          "translation": "Incrementa la variable i en 1",
          "example": "i++ // equivale a i = i + 1"
        },
        {
          "id": "js4-l4",
          "word": "Bucle infinito",
          "translation": "Bucle que nunca termina porque la condición siempre es true",
          "example": "while (true) { } // ¡peligro!"
        }
      ],
      "exercises": [
        {
          "id": "js4-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Repite un número definido de veces",
            "Repite mientras sea true",
            "Incrementa en 1",
            "Declara variable"
          ],
          "correctAnswer": "Repite un número definido de veces",
          "explanation": "for se usa cuando sabes cuántas veces repetir.",
          "promptExtra": "for"
        },
        {
          "id": "js4-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Repite un número definido de veces",
            "Repite mientras sea true",
            "Incrementa en 1",
            "Declara variable"
          ],
          "correctAnswer": "Repite mientras sea true",
          "explanation": "while repite mientras la condición sea verdadera.",
          "promptExtra": "while"
        },
        {
          "id": "js4-e3",
          "type": "select",
          "prompt": "¿Cuántas veces ejecuta: for (let i=0; i<3; i++)?",
          "options": [
            "3 veces",
            "2 veces",
            "4 veces",
            "Infinitas veces"
          ],
          "correctAnswer": "3 veces",
          "explanation": "i toma valores 0, 1, 2 → 3 iteraciones."
        },
        {
          "id": "js4-e4",
          "type": "select",
          "prompt": "¿Qué hace i++?",
          "options": [
            "Incrementa i en 1",
            "Decrementa i en 1",
            "Multiplica i por 2",
            "No hace nada"
          ],
          "correctAnswer": "Incrementa i en 1",
          "explanation": "i++ es equivalente a i = i + 1."
        },
        {
          "id": "js4-e5",
          "type": "select",
          "prompt": "¿Cuál puede causar un bucle infinito?",
          "options": [
            "while (true)",
            "for (let i=0; i<3; i++)",
            "for (let i=0; i<0; i++)",
            "while (false)"
          ],
          "correctAnswer": "while (true)",
          "explanation": "while(true) nunca deja de ser verdadero → bucle infinito."
        },
        {
          "id": "js4-e6",
          "type": "complete",
          "prompt": "Completa: for (let i = 0; i < 5; ___)",
          "options": [
            "i++",
            "i+1",
            "i=i+1",
            "i=+1"
          ],
          "correctAnswer": "i++",
          "explanation": "\"i++\" es la forma abreviada de incrementar.",
          "promptExtra": "i++"
        },
        {
          "id": "js4-e7",
          "type": "complete",
          "prompt": "Completa: ___ (x < 10) { x++; }",
          "options": [
            "while",
            "for",
            "if",
            "loop"
          ],
          "correctAnswer": "while",
          "explanation": "\"while\" repite mientras la condición sea true.",
          "promptExtra": "while"
        },
        {
          "id": "js4-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "for",
            "(let",
            "i=",
            "0;"
          ],
          "correctAnswer": "for (let i=0;",
          "explanation": "Inicio de la sintaxis de un bucle for."
        }
      ]
    },
    {
      "id": "javascript-5",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Funciones",
      "description": "Cómo crear y usar funciones en JavaScript",
      "icon": "⚙️",
      "xp": 70,
      "learnCards": [
        {
          "id": "js5-l1",
          "word": "function",
          "translation": "Bloque de código reutilizable que realiza una tarea",
          "example": "function saludar() { console.log('Hola'); }"
        },
        {
          "id": "js5-l2",
          "word": "return",
          "translation": "Devuelve un valor desde la función al punto de llamada",
          "example": "function suma(a,b) { return a + b; }"
        },
        {
          "id": "js5-l3",
          "word": "Parámetro",
          "translation": "Variable que recibe un valor al llamar la función",
          "example": "function saludar(nombre) { console.log('Hola ' + nombre); }"
        },
        {
          "id": "js5-l4",
          "word": "Llamar una función",
          "translation": "Ejecutar el código de la función usando su nombre",
          "example": "saludar('Ana'); // llama a la función"
        }
      ],
      "exercises": [
        {
          "id": "js5-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Bloque de código reutilizable",
            "Devuelve un valor",
            "Variable de entrada",
            "Ejecuta la función"
          ],
          "correctAnswer": "Bloque de código reutilizable",
          "explanation": "Una función encapsula código para reutilizarlo.",
          "promptExtra": "function"
        },
        {
          "id": "js5-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Bloque de código reutilizable",
            "Devuelve un valor",
            "Variable de entrada",
            "Ejecuta la función"
          ],
          "correctAnswer": "Devuelve un valor",
          "explanation": "return envía un resultado de vuelta.",
          "promptExtra": "return"
        },
        {
          "id": "js5-e3",
          "type": "select",
          "prompt": "¿Cómo se declara una función en JS?",
          "options": [
            "function miFunc() { }",
            "def miFunc():",
            "fn miFunc() { }",
            "func miFunc() { }"
          ],
          "correctAnswer": "function miFunc() { }",
          "explanation": "La palabra clave es \"function\"."
        },
        {
          "id": "js5-e4",
          "type": "select",
          "prompt": "¿Qué devuelve: function suma(a,b) { return a+b; } con suma(2,3)?",
          "options": [
            "5",
            "23",
            "undefined",
            "error"
          ],
          "correctAnswer": "5",
          "explanation": "return a + b suma 2 + 3 = 5."
        },
        {
          "id": "js5-e5",
          "type": "select",
          "prompt": "¿Qué es un parámetro de función?",
          "options": [
            "Una variable que recibe un valor de entrada",
            "El nombre de la función",
            "El valor que devuelve",
            "Un tipo de bucle"
          ],
          "correctAnswer": "Una variable que recibe un valor de entrada",
          "explanation": "Los parámetros reciben los argumentos al llamar la función."
        },
        {
          "id": "js5-e6",
          "type": "complete",
          "prompt": "Completa: ___ saludar() { } (declara función)",
          "options": [
            "function",
            "def",
            "fn",
            "func"
          ],
          "correctAnswer": "function",
          "explanation": "JS usa la palabra clave \"function\".",
          "promptExtra": "function"
        },
        {
          "id": "js5-e7",
          "type": "complete",
          "prompt": "Completa: function suma(a,b) { ___ a + b; }",
          "options": [
            "return",
            "console",
            "print",
            "output"
          ],
          "correctAnswer": "return",
          "explanation": "\"return\" devuelve el resultado de la función.",
          "promptExtra": "return"
        },
        {
          "id": "js5-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "function",
            "suma",
            "(a,b)",
            "{"
          ],
          "correctAnswer": "function suma(a,b) {",
          "explanation": "Inicio de declaración de función con parámetros."
        }
      ]
    },
    {
      "id": "javascript-6",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Arrays",
      "description": "Colecciones de datos: crear, acceder y manipular arrays",
      "icon": "📋",
      "xp": 80,
      "learnCards": [
        {"id":"js6-l1","word":"Array","translation":"Colección ordenada de elementos","example":"let frutas = ['manzana','pera','uva'];"},
        {"id":"js6-l2","word":".push()","translation":"Añade un elemento al final del array","example":"frutas.push('naranja'); // ['manzana','pera','uva','naranja']"},
        {"id":"js6-l3","word":".pop()","translation":"Elimina y devuelve el último elemento","example":"let ultima = frutas.pop(); // 'naranja'"},
        {"id":"js6-l4","word":".length","translation":"Propiedad que indica el número de elementos","example":"frutas.length // 3"}
      ],
      "exercises": [
        {"id":"js6-e1","type":"match","prompt":"Empareja con su descripción","options":["Colección ordenada","Añadir al final","Eliminar último","Número de elementos"],"correctAnswer":"Colección ordenada","explanation":"Un array almacena múltiples valores.","promptExtra":"Array"},
        {"id":"js6-e2","type":"match","prompt":"Empareja con su descripción","options":["Colección ordenada","Añadir al final","Eliminar último","Número de elementos"],"correctAnswer":"Añadir al final","explanation":".push() agrega un elemento.","promptExtra":".push()"},
        {"id":"js6-e3","type":"select","prompt":"¿Cómo declaras un array vacío?","options":["let arr = [];","let arr = {};","let arr = ();","let arr = '';"],"correctAnswer":"let arr = [];","explanation":"Los arrays se declaran con corchetes []."},
        {"id":"js6-e4","type":"select","prompt":"¿Qué hace frutas.pop()?","options":["Elimina el último elemento","Añade un elemento","Elimina el primer elemento","Ordena el array"],"correctAnswer":"Elimina el último elemento","explanation":".pop() remueve y retorna el último."},
        {"id":"js6-e5","type":"select","prompt":"¿Cómo accedes al primer elemento de un array?","options":["arr[0]","arr[1]","arr.first","arr.get(0)"],"correctAnswer":"arr[0]","explanation":"Los índices empiezan en 0."},
        {"id":"js6-e6","type":"complete","prompt":"Completa: frutas.___('kiwi') (añadir al final)","options":["push","pop","add","append"],"correctAnswer":"push","explanation":".push() agrega al final del array.","promptExtra":"push"},
        {"id":"js6-e7","type":"complete","prompt":"Completa: let total = frutas.___ (longitud)","options":["length","size","count","total"],"correctAnswer":"length","explanation":"La propiedad .length da el tamaño.","promptExtra":"length"},
        {"id":"js6-e8","type":"arrange","prompt":"Ordena para formar código válido","options":["let","numeros","=","[1,2,3];"],"correctAnswer":"let numeros = [1,2,3];","explanation":"Declaración de un array de números."}
      ]
    },
    {
      "id": "javascript-7",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Objetos",
      "description": "Estructuras clave-valor para modelar datos complejos",
      "icon": "📦",
      "xp": 80,
      "learnCards": [
        {"id":"js7-l1","word":"Objeto","translation":"Colección de propiedades clave-valor","example":"let persona = { nombre: 'Ana', edad: 25 };"},
        {"id":"js7-l2","word":"Propiedad","translation":"Par clave: valor dentro de un objeto","example":"persona.nombre // 'Ana'"},
        {"id":"js7-l3","word":"Método","translation":"Función definida dentro de un objeto","example":"let perro = { ladrar() { return 'guau'; } };"},
        {"id":"js7-l4","word":"this","translation":"Referencia al objeto actual dentro de un método","example":"saludar() { return 'Hola ' + this.nombre; }"}
      ],
      "exercises": [
        {"id":"js7-e1","type":"match","prompt":"Empareja con su descripción","options":["Colección clave-valor","Par dentro del objeto","Función del objeto","Referencia al objeto"],"correctAnswer":"Colección clave-valor","explanation":"Un objeto agrupa datos relacionados.","promptExtra":"Objeto"},
        {"id":"js7-e2","type":"match","prompt":"Empareja con su descripción","options":["Colección clave-valor","Par dentro del objeto","Función del objeto","Referencia al objeto"],"correctAnswer":"Par dentro del objeto","explanation":"Las propiedades son los datos.","promptExtra":"Propiedad"},
        {"id":"js7-e3","type":"select","prompt":"¿Cómo accedes a una propiedad?","options":["objeto.propiedad","objeto->propiedad","objeto::propiedad","objeto[propiedad"],"correctAnswer":"objeto.propiedad","explanation":"La notación punto es la más común."},
        {"id":"js7-e4","type":"select","prompt":"¿Qué palabra clave refiere al objeto actual?","options":["this","self","me","obj"],"correctAnswer":"this","explanation":"\"this\" apunta al objeto que contiene el método."},
        {"id":"js7-e5","type":"select","prompt":"¿Cómo declaras un objeto?","options":["let obj = {};","let obj = [];","let obj = ();","let obj = <>;"],"correctAnswer":"let obj = {};","explanation":"Los objetos usan llaves {}."},
        {"id":"js7-e6","type":"complete","prompt":"Completa: persona.___ (acceder a nombre)","options":["nombre","edad","this","prop"],"correctAnswer":"nombre","explanation":"persona.nombre accede a la propiedad.","promptExtra":"nombre"},
        {"id":"js7-e7","type":"complete","prompt":"Completa: ___ propiedad en objeto literal","options":[":","=","=>","->"],"correctAnswer":":","explanation":"En objetos, clave y valor se separan con \":\"."},
        {"id":"js7-e8","type":"arrange","prompt":"Ordena para formar código válido","options":["let","coche","=","{marca:'Toyota'};"],"correctAnswer":"let coche = {marca:'Toyota'};","explanation":"Declaración de un objeto con propiedad."}
      ]
    },
    {
      "id": "javascript-8",
      "track": "programming",
      "subTrack": "javascript",
      "title": "El DOM",
      "description": "Manipula HTML desde JavaScript con el Document Object Model",
      "icon": "🌳",
      "xp": 90,
      "learnCards": [
        {"id":"js8-l1","word":"document.querySelector()","translation":"Selecciona el primer elemento que coincide con un selector CSS","example":"document.querySelector('.clase');"},
        {"id":"js8-l2","word":".innerHTML","translation":"Propiedad que lee o escribe el contenido HTML de un elemento","example":"elemento.innerHTML = '<p>Hola</p>';"},
        {"id":"js8-l3","word":".addEventListener()","translation":"Asigna una función a un evento del elemento","example":"boton.addEventListener('click', () => alert('Click!'));"},
        {"id":"js8-l4","word":".style","translation":"Accede a las propiedades CSS del elemento","example":"elemento.style.color = 'red';"}
      ],
      "exercises": [
        {"id":"js8-e1","type":"match","prompt":"Empareja con su descripción","options":["Seleccionar elemento","Contenido HTML","Escuchar evento","Estilos CSS"],"correctAnswer":"Seleccionar elemento","explanation":"querySelector busca elementos.","promptExtra":"querySelector"},
        {"id":"js8-e2","type":"match","prompt":"Empareja con su descripción","options":["Seleccionar elemento","Contenido HTML","Escuchar evento","Estilos CSS"],"correctAnswer":"Contenido HTML","explanation":".innerHTML lee/escribe el HTML.","promptExtra":".innerHTML"},
        {"id":"js8-e3","type":"select","prompt":"¿Qué significa DOM?","options":["Document Object Model","Digital Object Method","Document Orientation Module","Data Object Map"],"correctAnswer":"Document Object Model","explanation":"DOM = Representación del HTML como objetos."},
        {"id":"js8-e4","type":"select","prompt":"¿Cómo seleccionas un elemento por ID?","options":["document.querySelector('#id')","document.querySelector('.id')","document.getElementById('#id')","document.id('id')"],"correctAnswer":"document.querySelector('#id')","explanation":"# selector CSS para IDs."},
        {"id":"js8-e5","type":"select","prompt":"¿Para qué sirve addEventListener?","options":["Para reaccionar a eventos","Para añadir HTML","Para cambiar estilos","Para crear elementos"],"correctAnswer":"Para reaccionar a eventos","explanation":"Permite ejecutar código cuando ocurre un evento."},
        {"id":"js8-e6","type":"complete","prompt":"Completa: element.___ = '<p>Texto</p>' (contenido)","options":["innerHTML","textContent","outerHTML","innerText"],"correctAnswer":"innerHTML","explanation":".innerHTML permite insertar HTML.","promptExtra":"innerHTML"},
        {"id":"js8-e7","type":"complete","prompt":"Completa: element.___('click', fn) (evento)","options":["addEventListener","onClick","listen","bind"],"correctAnswer":"addEventListener","explanation":".addEventListener() asigna eventos.","promptExtra":"addEventListener"},
        {"id":"js8-e8","type":"arrange","prompt":"Ordena para código válido","options":["document",".querySelector","('h1')",".style",".color='blue';"],"correctAnswer":"document.querySelector('h1').style.color='blue';","explanation":"Cambia el color del h1 a azul."}
      ]
    },
    {
      "id": "javascript-9",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Eventos",
      "description": "Manejo de eventos del usuario: click, teclado, formularios",
      "icon": "🖱️",
      "xp": 90,
      "learnCards": [
        {"id":"js9-l1","word":"click","translation":"Evento que se dispara al hacer clic","example":"elemento.addEventListener('click', handler);"},
        {"id":"js9-l2","word":"keydown / keyup","translation":"Eventos de teclado: tecla presionada / soltada","example":"document.addEventListener('keydown', (e) => console.log(e.key));"},
        {"id":"js9-l3","word":"submit","translation":"Evento que se dispara al enviar un formulario","example":"formulario.addEventListener('submit', (e) => { e.preventDefault(); });"},
        {"id":"js9-l4","word":"Event Object (e)","translation":"Objeto con información del evento ocurrido","example":"e.target = elemento que disparó, e.key = tecla presionada"}
      ],
      "exercises": [
        {"id":"js9-e1","type":"match","prompt":"Empareja con su descripción","options":["Al hacer clic","Tecla presionada","Enviar formulario","Info del evento"],"correctAnswer":"Al hacer clic","explanation":"\"click\" se dispara al hacer clic.","promptExtra":"click"},
        {"id":"js9-e2","type":"match","prompt":"Empareja con su descripción","options":["Al hacer clic","Tecla presionada","Enviar formulario","Info del evento"],"correctAnswer":"Tecla presionada","explanation":"\"keydown\" captura teclas.","promptExtra":"keydown"},
        {"id":"js9-e3","type":"select","prompt":"¿Qué hace e.preventDefault()?","options":["Evita el comportamiento por defecto","Detiene el evento","Remueve el listener","Previene errores"],"correctAnswer":"Evita el comportamiento por defecto","explanation":"Útil para evitar que un formulario recargue la página."},
        {"id":"js9-e4","type":"select","prompt":"¿Cómo sabes qué tecla se presionó?","options":["e.key","e.code","e.which","e.tecla"],"correctAnswer":"e.key","explanation":"La propiedad .key del objeto evento."},
        {"id":"js9-e5","type":"select","prompt":"¿Qué significa \"e.target\"?","options":["El elemento que disparó el evento","El tipo de evento","La función handler","El padre del elemento"],"correctAnswer":"El elemento que disparó el evento","explanation":"e.target refiere al elemento origen."},
        {"id":"js9-e6","type":"complete","prompt":"Completa: btn.addEventListener('___', fn) (clic)","options":["click","push","press","touch"],"correctAnswer":"click","explanation":"El evento de clic es \"click\".","promptExtra":"click"},
        {"id":"js9-e7","type":"complete","prompt":"Completa: e.___Default() (evitar default)","options":["prevent","stop","cancel","block"],"correctAnswer":"prevent","explanation":"preventDefault() evita el comportamiento nativo.","promptExtra":"prevent"},
        {"id":"js9-e8","type":"arrange","prompt":"Ordena para código válido","options":["boton",".addEventListener","('click',","()=>{alert('ok');});"],"correctAnswer":"boton.addEventListener('click',()=>{alert('ok');});","explanation":"Asigna un evento click con alert."}
      ]
    },
    {
      "id": "javascript-10",
      "track": "programming",
      "subTrack": "javascript",
      "title": "Async/Await",
      "description": "Programación asíncrona moderna con async y await",
      "icon": "⏳",
      "xp": 90,
      "learnCards": [
        {"id":"js10-l1","word":"async","translation":"Palabra clave que declara una función asíncrona","example":"async function obtenerDatos() { }"},
        {"id":"js10-l2","word":"await","translation":"Pausa la ejecución hasta que una promesa se resuelva","example":"let datos = await fetch('url');"},
        {"id":"js10-l3","word":"Promesa (Promise)","translation":"Objeto que representa un valor futuro","example":"fetch() devuelve una promesa."},
        {"id":"js10-l4","word":"try/catch","translation":"Estructura para manejar errores en código asíncrono","example":"try { await algo(); } catch(error) { console.log(error); }"}
      ],
      "exercises": [
        {"id":"js10-e1","type":"match","prompt":"Empareja con su descripción","options":["Declara función asíncrona","Espera una promesa","Valor futuro","Manejar errores"],"correctAnswer":"Declara función asíncrona","explanation":"\"async\" marca una función como asíncrona.","promptExtra":"async"},
        {"id":"js10-e2","type":"match","prompt":"Empareja con su descripción","options":["Declara función asíncrona","Espera una promesa","Valor futuro","Manejar errores"],"correctAnswer":"Espera una promesa","explanation":"\"await\" pausa hasta resolver.","promptExtra":"await"},
        {"id":"js10-e3","type":"select","prompt":"¿Qué devuelve una función async?","options":["Una promesa","Un valor directo","undefined","Un callback"],"correctAnswer":"Una promesa","explanation":"Toda función async retorna una promesa."},
        {"id":"js10-e4","type":"select","prompt":"¿Dónde se usa \"await\"?","options":["Solo dentro de funciones async","En cualquier parte","Solo en el ámbito global","En funciones normales"],"correctAnswer":"Solo dentro de funciones async","explanation":"await solo es válido dentro de async."},
        {"id":"js10-e5","type":"select","prompt":"¿Para qué sirve try/catch con async?","options":["Manejar errores de promesas","Acelerar el código","Evitar el await","Definir variables"],"correctAnswer":"Manejar errores de promesas","explanation":"Captura promesas rechazadas."},
        {"id":"js10-e6","type":"complete","prompt":"Completa: ___ function cargar() { }","options":["async","await","promise","defer"],"correctAnswer":"async","explanation":"La palabra clave es \"async\".","promptExtra":"async"},
        {"id":"js10-e7","type":"complete","prompt":"Completa: let datos = ___ fetch(url);","options":["await","async","then","promise"],"correctAnswer":"await","explanation":"\"await\" espera la respuesta de fetch.","promptExtra":"await"},
        {"id":"js10-e8","type":"arrange","prompt":"Ordena para código válido","options":["async","function","cargar","()","{","await","fetch","();","}"],"correctAnswer":"async function cargar() { await fetch(); }","explanation":"Función asíncrona con await."}
      ]
    },
    {
      "id": "javascript-11",
      "track": "programming",
      "subTrack": "javascript",
      "title": "APIs y Fetch",
      "description": "Comunicación con servidores usando fetch API",
      "icon": "🌐",
      "xp": 100,
      "learnCards": [
        {"id":"js11-l1","word":"fetch()","translation":"Función nativa para hacer peticiones HTTP","example":"fetch('https://api.com/data');"},
        {"id":"js11-l2","word":".json()","translation":"Convierte la respuesta a objeto JavaScript","example":"let datos = await respuesta.json();"},
        {"id":"js11-l3","word":"GET / POST","translation":"Métodos HTTP: obtener (GET) y enviar (POST) datos","example":"fetch(url, { method: 'POST', body: JSON.stringify(datos) });"},
        {"id":"js11-l4","word":"Headers","translation":"Metadatos de la petición (tipo de contenido, auth)","example":"headers: { 'Content-Type': 'application/json' }"}
      ],
      "exercises": [
        {"id":"js11-e1","type":"match","prompt":"Empareja con su descripción","options":["Hacer petición HTTP","Convertir a objeto JS","Método de envío","Metadatos de petición"],"correctAnswer":"Hacer petición HTTP","explanation":"fetch() envía peticiones.","promptExtra":"fetch()"},
        {"id":"js11-e2","type":"match","prompt":"Empareja con su descripción","options":["Hacer petición HTTP","Convertir a objeto JS","Método de envío","Metadatos de petición"],"correctAnswer":"Convertir a objeto JS","explanation":".json() parsea la respuesta.","promptExtra":".json()"},
        {"id":"js11-e3","type":"select","prompt":"¿Qué es una API?","options":["Interfaz que permite comunicación entre programas","Un lenguaje de programación","Una base de datos","Un framework"],"correctAnswer":"Interfaz que permite comunicación entre programas","explanation":"API = Application Programming Interface."},
        {"id":"js11-e4","type":"select","prompt":"¿Qué método HTTP obtiene datos?","options":["GET","POST","PUT","DELETE"],"correctAnswer":"GET","explanation":"GET solicita datos del servidor."},
        {"id":"js11-e5","type":"select","prompt":"¿Para qué sirven los headers?","options":["Enviar info adicional como tipo de contenido","Definir la URL","Acelerar la conexión","Encriptar datos"],"correctAnswer":"Enviar info adicional como tipo de contenido","explanation":"Headers = metadatos de la petición."},
        {"id":"js11-e6","type":"complete","prompt":"Completa: ___('https://api.com') (petición)","options":["fetch","get","request","ajax"],"correctAnswer":"fetch","explanation":"fetch() es la función nativa.","promptExtra":"fetch"},
        {"id":"js11-e7","type":"complete","prompt":"Completa: respuesta.___() (parsear JSON)","options":["json","text","parse","data"],"correctAnswer":"json","explanation":".json() convierte la respuesta.","promptExtra":"json"},
        {"id":"js11-e8","type":"arrange","prompt":"Ordena para código válido","options":["let","resp","=","await","fetch(url);","let","datos","=","await","resp.json();"],"correctAnswer":"let resp = await fetch(url); let datos = await resp.json();","explanation":"Patrón típico de fetch con await."}
      ]
    },
    {
      "id": "javascript-12",
      "track": "programming",
      "subTrack": "javascript",
      "title": "LocalStorage",
      "description": "Almacenamiento persistente en el navegador",
      "icon": "💾",
      "xp": 100,
      "learnCards": [
        {"id":"js12-l1","word":"localStorage","translation":"API del navegador para guardar datos localmente","example":"localStorage.setItem('clave', 'valor');"},
        {"id":"js12-l2","word":"setItem() / getItem()","translation":"Guardar y leer datos del almacenamiento","example":"localStorage.setItem('nombre','Ana'); localStorage.getItem('nombre');"},
        {"id":"js12-l3","word":"JSON.stringify()","translation":"Convierte objetos a texto JSON para guardarlos","example":"localStorage.setItem('user', JSON.stringify(usuario));"},
        {"id":"js12-l4","word":"removeItem() / clear()","translation":"Eliminar un dato específico o limpiar todo","example":"localStorage.removeItem('nombre'); localStorage.clear();"}
      ],
      "exercises": [
        {"id":"js12-e1","type":"match","prompt":"Empareja con su descripción","options":["Almacenamiento local","Guardar y leer","Objeto a texto JSON","Eliminar datos"],"correctAnswer":"Almacenamiento local","explanation":"localStorage persiste datos en el navegador.","promptExtra":"localStorage"},
        {"id":"js12-e2","type":"match","prompt":"Empareja con su descripción","options":["Almacenamiento local","Guardar y leer","Objeto a texto JSON","Eliminar datos"],"correctAnswer":"Guardar y leer","explanation":"setItem/getItem manejan datos.","promptExtra":"setItem/getItem"},
        {"id":"js12-e3","type":"select","prompt":"¿Los datos de localStorage se borran al cerrar el navegador?","options":["No, persisten","Sí, se borran","Solo en incógnito","Depende del sitio"],"correctAnswer":"No, persisten","explanation":"localStorage mantiene datos hasta que se borren."},
        {"id":"js12-e4","type":"select","prompt":"¿Por qué usar JSON.stringify?","options":["localStorage solo guarda strings","Es más rápido","Por seguridad","Para comprimir datos"],"correctAnswer":"localStorage solo guarda strings","explanation":"Debes convertir objetos a string."},
        {"id":"js12-e5","type":"select","prompt":"¿Qué hace localStorage.clear()?","options":["Borra todos los datos","Borra un dato específico","Cierra el storage","Reinicia el navegador"],"correctAnswer":"Borra todos los datos","explanation":".clear() limpia todo el localStorage."},
        {"id":"js12-e6","type":"complete","prompt":"Completa: localStorage.___('clave','valor')","options":["setItem","getItem","save","store"],"correctAnswer":"setItem","explanation":"setItem(clave, valor) guarda.","promptExtra":"setItem"},
        {"id":"js12-e7","type":"complete","prompt":"Completa: JSON.___(obj) (a texto)","options":["stringify","parse","toString","serialize"],"correctAnswer":"stringify","explanation":"JSON.stringify convierte objeto a string.","promptExtra":"stringify"},
        {"id":"js12-e8","type":"arrange","prompt":"Ordena para código válido","options":["localStorage",".setItem","('tema',","'oscuro');"],"correctAnswer":"localStorage.setItem('tema','oscuro');","explanation":"Guarda la preferencia de tema."}
      ]
    }
  ];
const pythonLessons: Lesson[] = [
    {
      "id": "python-1",
      "track": "programming",
      "subTrack": "python",
      "title": "Introducción a Python",
      "description": "Qué es programar y qué es una variable en Python",
      "icon": "🐍",
      "xp": 30,
      "learnCards": [
        {
          "id": "py1-l1",
          "word": "Variable",
          "translation": "Un nombre que guarda un valor en memoria",
          "example": "nombre = 'Ana'"
        },
        {
          "id": "py1-l2",
          "word": "print()",
          "translation": "Función que muestra texto o valores en pantalla",
          "example": "print('Hola Mundo')"
        },
        {
          "id": "py1-l3",
          "word": "Asignación",
          "translation": "Usar = para guardar un valor en una variable",
          "example": "edad = 25"
        },
        {
          "id": "py1-l4",
          "word": "Comentario",
          "translation": "Texto ignorado por Python, empieza con #",
          "example": "# Esto es un comentario"
        }
      ],
      "exercises": [
        {
          "id": "py1-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Nombre que guarda un valor",
            "Muestra texto en pantalla",
            "Operador de asignación",
            "Texto ignorado por Python"
          ],
          "correctAnswer": "Nombre que guarda un valor",
          "explanation": "Una variable almacena datos en memoria.",
          "promptExtra": "Variable"
        },
        {
          "id": "py1-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Nombre que guarda un valor",
            "Muestra texto en pantalla",
            "Operador de asignación",
            "Texto ignorado por Python"
          ],
          "correctAnswer": "Muestra texto en pantalla",
          "explanation": "print() envía información a la consola.",
          "promptExtra": "print()"
        },
        {
          "id": "py1-e3",
          "type": "select",
          "prompt": "¿Cómo se declara una variable en Python?",
          "options": [
            "x = 10",
            "let x = 10",
            "int x = 10",
            "var x = 10"
          ],
          "correctAnswer": "x = 10",
          "explanation": "Python no necesita palabra clave, solo \"=\"."
        },
        {
          "id": "py1-e4",
          "type": "select",
          "prompt": "¿Qué hace print('Hola')?",
          "options": [
            "Muestra \"Hola\" en pantalla",
            "Crea una variable \"Hola\"",
            "Abre una ventana",
            "Guarda \"Hola\" en disco"
          ],
          "correctAnswer": "Muestra \"Hola\" en pantalla",
          "explanation": "print() muestra su contenido en la consola."
        },
        {
          "id": "py1-e5",
          "type": "select",
          "prompt": "¿Qué imprime: print(2 + 3)?",
          "options": [
            "5",
            "2 + 3",
            "23",
            "Error"
          ],
          "correctAnswer": "5",
          "explanation": "Python evalúa la expresión y muestra 5."
        },
        {
          "id": "py1-e6",
          "type": "complete",
          "prompt": "Completa: ___('Hola Mundo')",
          "options": [
            "print",
            "echo",
            "console",
            "write"
          ],
          "correctAnswer": "print",
          "explanation": "print() es la función de salida en Python.",
          "promptExtra": "print"
        },
        {
          "id": "py1-e7",
          "type": "complete",
          "prompt": "Completa: nombre ___ 'Ana' (asignar)",
          "options": [
            "=",
            "==",
            ":",
            "<-"
          ],
          "correctAnswer": "=",
          "explanation": "En Python se usa \"=\" para asignar valores.",
          "promptExtra": "="
        },
        {
          "id": "py1-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "edad",
            "=",
            "25",
            "print"
          ],
          "correctAnswer": "edad = 25 print",
          "explanation": "Ejercicio léxico de Python."
        }
      ]
    },
    {
      "id": "python-2",
      "track": "programming",
      "subTrack": "python",
      "title": "Tipos de datos",
      "description": "Números, strings y booleanos en Python",
      "icon": "📦",
      "xp": 40,
      "learnCards": [
        {
          "id": "py2-l1",
          "word": "int",
          "translation": "Tipo de dato para números enteros",
          "example": "edad = 25  # int"
        },
        {
          "id": "py2-l2",
          "word": "str",
          "translation": "Tipo de dato para cadenas de texto",
          "example": "nombre = 'Ana'  # str"
        },
        {
          "id": "py2-l3",
          "word": "bool",
          "translation": "Tipo de dato lógico: True o False",
          "example": "activo = True  # bool"
        },
        {
          "id": "py2-l4",
          "word": "type()",
          "translation": "Función que devuelve el tipo de un valor",
          "example": "type('Hola')  # <class 'str'>"
        }
      ],
      "exercises": [
        {
          "id": "py2-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Cadena de texto",
            "Número entero",
            "Valor True/False",
            "Número decimal"
          ],
          "correctAnswer": "Cadena de texto",
          "explanation": "str es el tipo para texto entre comillas.",
          "promptExtra": "str"
        },
        {
          "id": "py2-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Cadena de texto",
            "Número entero",
            "Valor True/False",
            "Número decimal"
          ],
          "correctAnswer": "Valor True/False",
          "explanation": "bool solo puede ser True o False.",
          "promptExtra": "bool"
        },
        {
          "id": "py2-e3",
          "type": "select",
          "prompt": "¿Qué tipo de dato es 42?",
          "options": [
            "int",
            "str",
            "bool",
            "float"
          ],
          "correctAnswer": "int",
          "explanation": "42 sin comillas es un entero (int)."
        },
        {
          "id": "py2-e4",
          "type": "select",
          "prompt": "¿Qué tipo de dato es 'Hola'?",
          "options": [
            "str",
            "int",
            "bool",
            "float"
          ],
          "correctAnswer": "str",
          "explanation": "El texto entre comillas es string (str)."
        },
        {
          "id": "py2-e5",
          "type": "select",
          "prompt": "¿Qué devuelve type(True)?",
          "options": [
            "<class 'bool'>",
            "<class 'int'>",
            "<class 'str'>",
            "<class 'float'>"
          ],
          "correctAnswer": "<class 'bool'>",
          "explanation": "True es de tipo bool."
        },
        {
          "id": "py2-e6",
          "type": "complete",
          "prompt": "Completa: activo = ___ (verdadero en Python)",
          "options": [
            "True",
            "true",
            "TRUE",
            "1"
          ],
          "correctAnswer": "True",
          "explanation": "En Python, True se escribe con mayúscula inicial.",
          "promptExtra": "True"
        },
        {
          "id": "py2-e7",
          "type": "complete",
          "prompt": "Completa: ___('Hola') # <class 'str'>",
          "options": [
            "type",
            "print",
            "typeof",
            "class"
          ],
          "correctAnswer": "type",
          "explanation": "type() devuelve el tipo de dato.",
          "promptExtra": "type"
        },
        {
          "id": "py2-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "nombre",
            "=",
            "'Ana'",
            "type"
          ],
          "correctAnswer": "nombre = 'Ana' type",
          "explanation": "Ejercicio léxico Python."
        }
      ]
    },
    {
      "id": "python-3",
      "track": "programming",
      "subTrack": "python",
      "title": "Condicionales",
      "description": "Toma decisiones con if/elif/else",
      "icon": "🔀",
      "xp": 50,
      "learnCards": [
        {
          "id": "py3-l1",
          "word": "if",
          "translation": "Ejecuta un bloque si la condición es True",
          "example": "if edad >= 18:\n    print('Adulto')"
        },
        {
          "id": "py3-l2",
          "word": "elif",
          "translation": "Evalúa otra condición si el if anterior fue False",
          "example": "elif edad >= 13:\n    print('Adolescente')"
        },
        {
          "id": "py3-l3",
          "word": "else",
          "translation": "Se ejecuta si ninguna condición anterior se cumplió",
          "example": "else:\n    print('Menor')"
        },
        {
          "id": "py3-l4",
          "word": "Indentación",
          "translation": "Los bloques en Python se definen con espacios al inicio",
          "example": "if True:\n    print('Indentado')  # 4 espacios"
        }
      ],
      "exercises": [
        {
          "id": "py3-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Ejecuta si la condición es True",
            "Evalúa otra condición",
            "Se ejecuta por defecto",
            "Define sangría del bloque"
          ],
          "correctAnswer": "Ejecuta si la condición es True",
          "explanation": "if ejecuta el bloque cuando la condición es verdadera.",
          "promptExtra": "if"
        },
        {
          "id": "py3-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Ejecuta si la condición es True",
            "Evalúa otra condición",
            "Se ejecuta por defecto",
            "Define sangría del bloque"
          ],
          "correctAnswer": "Evalúa otra condición",
          "explanation": "elif permite encadenar condiciones adicionales.",
          "promptExtra": "elif"
        },
        {
          "id": "py3-e3",
          "type": "select",
          "prompt": "¿Qué palabra clave NO existe en Python?",
          "options": [
            "else if",
            "if",
            "elif",
            "else"
          ],
          "correctAnswer": "else if",
          "explanation": "Python usa \"elif\", no \"else if\"."
        },
        {
          "id": "py3-e4",
          "type": "select",
          "prompt": "¿Cómo se define un bloque en Python?",
          "options": [
            "Con indentación (sangría)",
            "Con llaves { }",
            "Con begin/end",
            "Con paréntesis"
          ],
          "correctAnswer": "Con indentación (sangría)",
          "explanation": "Python usa espacios al inicio para definir bloques."
        },
        {
          "id": "py3-e5",
          "type": "select",
          "prompt": "¿Qué imprime if 5 > 3: print('Sí')?",
          "options": [
            "Sí",
            "No",
            "Error",
            "Nada"
          ],
          "correctAnswer": "Sí",
          "explanation": "5 > 3 es True, se ejecuta el print."
        },
        {
          "id": "py3-e6",
          "type": "complete",
          "prompt": "Completa: ___ x > 5: print('Mayor')\nelse: print('Menor')",
          "options": [
            "if",
            "elif",
            "when",
            "case"
          ],
          "correctAnswer": "if",
          "explanation": "\"if\" inicia una condición en Python.",
          "promptExtra": "if"
        },
        {
          "id": "py3-e7",
          "type": "complete",
          "prompt": "Completa: if edad >= 18: print('Adulto')\n___ edad >= 13: print('Adolescente')",
          "options": [
            "elif",
            "else if",
            "else",
            "elseif"
          ],
          "correctAnswer": "elif",
          "explanation": "\"elif\" encadena otra condición.",
          "promptExtra": "elif"
        },
        {
          "id": "py3-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "if",
            "edad",
            ">=",
            "18:"
          ],
          "correctAnswer": "if edad >= 18:",
          "explanation": "Sintaxis correcta: if, variable, operador, valor y dos puntos."
        }
      ]
    },
    {
      "id": "python-4",
      "track": "programming",
      "subTrack": "python",
      "title": "Bucles",
      "description": "Repite código con for y while en Python",
      "icon": "🔄",
      "xp": 60,
      "learnCards": [
        {
          "id": "py4-l1",
          "word": "for",
          "translation": "Recorre elementos de una secuencia uno por uno",
          "example": "for i in range(3):\n    print(i)"
        },
        {
          "id": "py4-l2",
          "word": "while",
          "translation": "Repite mientras la condición sea True",
          "example": "while x < 5:\n    x += 1"
        },
        {
          "id": "py4-l3",
          "word": "range()",
          "translation": "Genera una secuencia de números",
          "example": "range(3)  # 0, 1, 2"
        },
        {
          "id": "py4-l4",
          "word": "break",
          "translation": "Sale inmediatamente del bucle",
          "example": "while True:\n    if x == 5:\n        break"
        }
      ],
      "exercises": [
        {
          "id": "py4-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Recorre elementos de una secuencia",
            "Repite mientras sea True",
            "Genera secuencia de números",
            "Sale del bucle"
          ],
          "correctAnswer": "Recorre elementos de una secuencia",
          "explanation": "for itera sobre listas, rangos, strings, etc.",
          "promptExtra": "for"
        },
        {
          "id": "py4-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Recorre elementos de una secuencia",
            "Repite mientras sea True",
            "Genera secuencia de números",
            "Sale del bucle"
          ],
          "correctAnswer": "Genera secuencia de números",
          "explanation": "range(n) produce 0, 1, ..., n-1.",
          "promptExtra": "range()"
        },
        {
          "id": "py4-e3",
          "type": "select",
          "prompt": "¿Cuántas veces imprime: for i in range(3): print(i)?",
          "options": [
            "3 veces",
            "2 veces",
            "4 veces",
            "1 vez"
          ],
          "correctAnswer": "3 veces",
          "explanation": "range(3) genera 0, 1, 2 → 3 iteraciones."
        },
        {
          "id": "py4-e4",
          "type": "select",
          "prompt": "¿Qué hace while True:?",
          "options": [
            "Bucle infinito",
            "No se ejecuta",
            "Se ejecuta 1 vez",
            "Error de sintaxis"
          ],
          "correctAnswer": "Bucle infinito",
          "explanation": "True siempre es verdadero, nunca sale del bucle."
        },
        {
          "id": "py4-e5",
          "type": "select",
          "prompt": "¿Qué hace break dentro de un bucle?",
          "options": [
            "Sale del bucle inmediatamente",
            "Pausa el bucle",
            "Reinicia el bucle",
            "Ignora la iteración actual"
          ],
          "correctAnswer": "Sale del bucle inmediatamente",
          "explanation": "break termina el bucle por completo."
        },
        {
          "id": "py4-e6",
          "type": "complete",
          "prompt": "Completa: for i in ___(5): print(i)",
          "options": [
            "range",
            "list",
            "iter",
            "loop"
          ],
          "correctAnswer": "range",
          "explanation": "range() genera una secuencia para iterar.",
          "promptExtra": "range"
        },
        {
          "id": "py4-e7",
          "type": "complete",
          "prompt": "Completa: while x ___ 10: (menor que)",
          "options": [
            "<",
            ">",
            "=",
            "!="
          ],
          "correctAnswer": "<",
          "explanation": "\"<\" significa \"menor que\".",
          "promptExtra": "<"
        },
        {
          "id": "py4-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "for",
            "i",
            "in",
            "range(5):"
          ],
          "correctAnswer": "for i in range(5):",
          "explanation": "Sintaxis del bucle for con range."
        }
      ]
    },
    {
      "id": "python-5",
      "track": "programming",
      "subTrack": "python",
      "title": "Funciones",
      "description": "Cómo crear y usar funciones en Python",
      "icon": "⚙️",
      "xp": 70,
      "learnCards": [
        {
          "id": "py5-l1",
          "word": "def",
          "translation": "Palabra clave para definir una función en Python",
          "example": "def saludar():\n    print('Hola')"
        },
        {
          "id": "py5-l2",
          "word": "return",
          "translation": "Devuelve un valor desde la función",
          "example": "def suma(a, b):\n    return a + b"
        },
        {
          "id": "py5-l3",
          "word": "Parámetro",
          "translation": "Variable que recibe datos al llamar la función",
          "example": "def saludar(nombre):\n    print(f'Hola {nombre}')"
        },
        {
          "id": "py5-l4",
          "word": "Argumento",
          "translation": "Valor que se pasa a la función al llamarla",
          "example": "saludar('Ana')  # 'Ana' es el argumento"
        }
      ],
      "exercises": [
        {
          "id": "py5-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Define una función",
            "Devuelve un valor",
            "Recibe datos de entrada",
            "Valor pasado al llamar"
          ],
          "correctAnswer": "Define una función",
          "explanation": "def inicia la definición de una función.",
          "promptExtra": "def"
        },
        {
          "id": "py5-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Define una función",
            "Devuelve un valor",
            "Recibe datos de entrada",
            "Valor pasado al llamar"
          ],
          "correctAnswer": "Devuelve un valor",
          "explanation": "return envía el resultado de vuelta.",
          "promptExtra": "return"
        },
        {
          "id": "py5-e3",
          "type": "select",
          "prompt": "¿Cómo se declara una función en Python?",
          "options": [
            "def mi_func():",
            "function mi_func():",
            "fn mi_func():",
            "func mi_func():"
          ],
          "correctAnswer": "def mi_func():",
          "explanation": "Python usa \"def\" para definir funciones."
        },
        {
          "id": "py5-e4",
          "type": "select",
          "prompt": "¿Qué devuelve def suma(a,b): return a+b con suma(3,4)?",
          "options": [
            "7",
            "34",
            "None",
            "Error"
          ],
          "correctAnswer": "7",
          "explanation": "3 + 4 = 7, return devuelve el resultado."
        },
        {
          "id": "py5-e5",
          "type": "select",
          "prompt": "¿Cuál es la diferencia entre parámetro y argumento?",
          "options": [
            "Parámetro está en la definición, argumento en la llamada",
            "Son lo mismo",
            "Argumento está en la definición",
            "Parámetro es el resultado"
          ],
          "correctAnswer": "Parámetro está en la definición, argumento en la llamada",
          "explanation": "El parámetro se define, el argumento se pasa."
        },
        {
          "id": "py5-e6",
          "type": "complete",
          "prompt": "Completa: ___ saludar(): print('Hola')",
          "options": [
            "def",
            "func",
            "function",
            "define"
          ],
          "correctAnswer": "def",
          "explanation": "\"def\" es la palabra clave para definir funciones.",
          "promptExtra": "def"
        },
        {
          "id": "py5-e7",
          "type": "complete",
          "prompt": "Completa: def suma(a,b): ___ a + b",
          "options": [
            "return",
            "print",
            "yield",
            "output"
          ],
          "correctAnswer": "return",
          "explanation": "return devuelve el valor calculado.",
          "promptExtra": "return"
        },
        {
          "id": "py5-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "def",
            "suma",
            "(a,b):",
            "return"
          ],
          "correctAnswer": "def suma(a,b): return",
          "explanation": "Ejercicio léxico de funciones."
        }
      ]
    },
    {
      "id": "python-6",
      "track": "programming",
      "subTrack": "python",
      "title": "Listas",
      "description": "Colecciones ordenadas de elementos en Python",
      "icon": "📋",
      "xp": 80,
      "learnCards": [
        {"id":"py6-l1","word":"Lista","translation":"Colección ordenada y modificable de elementos","example":"frutas = ['manzana','pera','uva']"},
        {"id":"py6-l2","word":".append()","translation":"Añade un elemento al final de la lista","example":"frutas.append('naranja')"},
        {"id":"py6-l3","word":".pop()","translation":"Elimina y devuelve el último elemento (o por índice)","example":"ultima = frutas.pop()"},
        {"id":"py6-l4","word":"Slicing [:]","translation":"Obtiene una sublista usando índices","example":"frutas[0:2] # ['manzana','pera']"}
      ],
      "exercises": [
        {"id":"py6-e1","type":"match","prompt":"Empareja con su descripción","options":["Colección ordenada","Añadir al final","Eliminar elemento","Sublista por índices"],"correctAnswer":"Colección ordenada","explanation":"Las listas son secuencias mutables.","promptExtra":"Lista"},
        {"id":"py6-e2","type":"match","prompt":"Empareja con su descripción","options":["Colección ordenada","Añadir al final","Eliminar elemento","Sublista por índices"],"correctAnswer":"Añadir al final","explanation":".append() agrega un elemento.","promptExtra":".append()"},
        {"id":"py6-e3","type":"select","prompt":"¿Cómo creas una lista vacía?","options":["lista = []","lista = {}","lista = ()","lista = ''"],"correctAnswer":"lista = []","explanation":"Los corchetes [] crean listas."},
        {"id":"py6-e4","type":"select","prompt":"¿Qué hace lista.pop(0)?","options":["Elimina el primer elemento","Elimina el último","Añade al inicio","Ordena la lista"],"correctAnswer":"Elimina el primer elemento","explanation":".pop(0) elimina índice 0."},
        {"id":"py6-e5","type":"select","prompt":"¿Qué devuelve [1,2,3][::-1]?","options":["[3,2,1]","[1,2,3]","[1]","Error"],"correctAnswer":"[3,2,1]","explanation":"[::-1] invierte la lista."},
        {"id":"py6-e6","type":"complete","prompt":"Completa: frutas.___('kiwi') (añadir)","options":["append","add","push","insert"],"correctAnswer":"append","explanation":".append() es el método para añadir.","promptExtra":"append"},
        {"id":"py6-e7","type":"complete","prompt":"Completa: len(frutas) devuelve la ___ de la lista","options":["longitud","suma","copia","mitad"],"correctAnswer":"longitud","explanation":"len() retorna el número de elementos.","promptExtra":"longitud"},
        {"id":"py6-e8","type":"arrange","prompt":"Ordena para formar código válido","options":["numeros","=","[1,","2,","3]"],"correctAnswer":"numeros = [1, 2, 3]","explanation":"Declaración de lista con números."}
      ]
    },
    {
      "id": "python-7",
      "track": "programming",
      "subTrack": "python",
      "title": "Diccionarios",
      "description": "Estructuras clave-valor en Python",
      "icon": "📖",
      "xp": 80,
      "learnCards": [
        {"id":"py7-l1","word":"Diccionario","translation":"Colección de pares clave: valor","example":"persona = {'nombre':'Ana','edad':25}"},
        {"id":"py7-l2","word":"Claves y valores","translation":"Las claves son únicas, los valores pueden repetirse","example":"persona['nombre'] # 'Ana'"},
        {"id":"py7-l3","word":".keys() / .values()","translation":"Métodos para obtener claves o valores","example":"persona.keys() # dict_keys(['nombre','edad'])"},
        {"id":"py7-l4","word":".items()","translation":"Devuelve pares (clave, valor) para iterar","example":"for k,v in persona.items(): print(k,v)"}
      ],
      "exercises": [
        {"id":"py7-e1","type":"match","prompt":"Empareja con su descripción","options":["Colección clave-valor","Únicas, valores repetibles","Obtener claves","Iterar pares"],"correctAnswer":"Colección clave-valor","explanation":"Los diccionarios usan llaves {}.","promptExtra":"Diccionario"},
        {"id":"py7-e2","type":"match","prompt":"Empareja con su descripción","options":["Colección clave-valor","Únicas, valores repetibles","Obtener claves","Iterar pares"],"correctAnswer":"Únicas, valores repetibles","explanation":"Las claves no se duplican.","promptExtra":"Claves"},
        {"id":"py7-e3","type":"select","prompt":"¿Cómo accedes a un valor?","options":["diccionario['clave']","diccionario.clave","diccionario->clave","diccionario(clave)"],"correctAnswer":"diccionario['clave']","explanation":"Se usan corchetes con la clave."},
        {"id":"py7-e4","type":"select","prompt":"¿Qué método itera clave y valor?","options":[".items()",".keys()",".values()",".get()"],"correctAnswer":".items()","explanation":".items() devuelve tuplas (clave, valor)."},
        {"id":"py7-e5","type":"select","prompt":"¿Qué pasa si accedes a clave inexistente?","options":["KeyError","ValueError","TypeError","None"],"correctAnswer":"KeyError","explanation":"Usa .get() para evitar errores."},
        {"id":"py7-e6","type":"complete","prompt":"Completa: persona.___() (claves)","options":["keys","values","items","get"],"correctAnswer":"keys","explanation":".keys() devuelve las claves.","promptExtra":"keys"},
        {"id":"py7-e7","type":"complete","prompt":"Completa: for k,v in d.___(): (iterar)","options":["items","keys","values","pairs"],"correctAnswer":"items","explanation":".items() para iterar clave y valor.","promptExtra":"items"},
        {"id":"py7-e8","type":"arrange","prompt":"Ordena para código válido","options":["datos","=","{'x':10,","'y':20}"],"correctAnswer":"datos = {'x':10, 'y':20}","explanation":"Declaración de diccionario."}
      ]
    },
    {
      "id": "python-8",
      "track": "programming",
      "subTrack": "python",
      "title": "Archivos",
      "description": "Leer y escribir archivos en Python",
      "icon": "📄",
      "xp": 90,
      "learnCards": [
        {"id":"py8-l1","word":"open()","translation":"Función para abrir archivos","example":"archivo = open('datos.txt', 'r')"},
        {"id":"py8-l2","word":"Modos: r, w, a","translation":"Lectura, escritura (sobrescribe), añadir al final","example":"open('log.txt', 'a') # añade al final"},
        {"id":"py8-l3","word":".read() / .readlines()","translation":"Leer todo el contenido o línea por línea","example":"lineas = archivo.readlines()"},
        {"id":"py8-l4","word":"with open()","translation":"Contexto que cierra el archivo automáticamente","example":"with open('file.txt') as f: contenido = f.read()"}
      ],
      "exercises": [
        {"id":"py8-e1","type":"match","prompt":"Empareja con su descripción","options":["Abrir archivos","Modo lectura","Modo escritura","Modo añadir"],"correctAnswer":"Abrir archivos","explanation":"open() es la función base.","promptExtra":"open()"},
        {"id":"py8-e2","type":"match","prompt":"Empareja con su descripción","options":["Abrir archivos","Modo lectura","Modo escritura","Modo añadir"],"correctAnswer":"Modo lectura","explanation":"'r' = read (lectura).","promptExtra":"r"},
        {"id":"py8-e3","type":"select","prompt":"¿Qué modo borra el contenido anterior?","options":["w (write)","r (read)","a (append)","x (create)"],"correctAnswer":"w (write)","explanation":"'w' sobrescribe todo el archivo."},
        {"id":"py8-e4","type":"select","prompt":"¿Por qué usar \"with\"?","options":["Cierra el archivo automáticamente","Es más rápido","Lee mejor","Evita errores de sintaxis"],"correctAnswer":"Cierra el archivo automáticamente","explanation":"with garantiza el cierre al salir del bloque."},
        {"id":"py8-e5","type":"select","prompt":"¿Cómo lees todas las líneas?","options":[".readlines()",".read()",".readline()",".lines()"],"correctAnswer":".readlines()","explanation":".readlines() devuelve lista de líneas."},
        {"id":"py8-e6","type":"complete","prompt":"Completa: open('file.txt', '__') (leer)","options":["r","w","a","x"],"correctAnswer":"r","explanation":"'r' es el modo de lectura.","promptExtra":"r"},
        {"id":"py8-e7","type":"complete","prompt":"Completa: ___ open('f.txt') as f: (contexto)","options":["with","for","while","if"],"correctAnswer":"with","explanation":"El contexto with maneja el cierre.","promptExtra":"with"},
        {"id":"py8-e8","type":"arrange","prompt":"Ordena para código válido","options":["with","open('test.txt')","as","f:","print(f.read())"],"correctAnswer":"with open('test.txt') as f: print(f.read())","explanation":"Lectura de archivo con contexto."}
      ]
    },
    {
      "id": "python-9",
      "track": "programming",
      "subTrack": "python",
      "title": "Módulos",
      "description": "Organiza tu código en módulos y paquetes",
      "icon": "📦",
      "xp": 90,
      "learnCards": [
        {"id":"py9-l1","word":"import","translation":"Palabra clave para usar código de otro archivo","example":"import math"},
        {"id":"py9-l2","word":"from ... import","translation":"Importa partes específicas de un módulo","example":"from math import sqrt"},
        {"id":"py9-l3","word":"Módulo","translation":"Archivo .py que contiene funciones y variables","example":"# archivo utilidades.py con funciones reutilizables"},
        {"id":"py9-l4","word":"__name__","translation":"Variable que indica si el archivo se ejecuta o se importa","example":"if __name__ == '__main__': main()"}
      ],
      "exercises": [
        {"id":"py9-e1","type":"match","prompt":"Empareja con su descripción","options":["Importar código","Import parcial","Archivo .py","Nombre del módulo"],"correctAnswer":"Importar código","explanation":"\"import\" carga módulos.","promptExtra":"import"},
        {"id":"py9-e2","type":"match","prompt":"Empareja con su descripción","options":["Importar código","Import parcial","Archivo .py","Nombre del módulo"],"correctAnswer":"Import parcial","explanation":"\"from X import Y\" es más específico.","promptExtra":"from...import"},
        {"id":"py9-e3","type":"select","prompt":"¿Qué es un módulo en Python?","options":["Un archivo .py con código","Una función especial","Un tipo de dato","Un error"],"correctAnswer":"Un archivo .py con código","explanation":"Cualquier archivo .py es un módulo."},
        {"id":"py9-e4","type":"select","prompt":"¿Para qué sirve if __name__ == '__main__'?","options":["Ejecutar solo si es script principal","Importar módulos","Definir clases","Manejar errores"],"correctAnswer":"Ejecutar solo si es script principal","explanation":"Distingue entre importación y ejecución."},
        {"id":"py9-e5","type":"select","prompt":"¿Cómo importas solo sqrt de math?","options":["from math import sqrt","import math.sqrt","import sqrt from math","math.import(sqrt)"],"correctAnswer":"from math import sqrt","explanation":"from módulo import función."},
        {"id":"py9-e6","type":"complete","prompt":"Completa: ___ math (importar módulo)","options":["import","from","use","load"],"correctAnswer":"import","explanation":"La palabra clave es \"import\".","promptExtra":"import"},
        {"id":"py9-e7","type":"complete","prompt":"Completa: from math ___ sqrt (import parcial)","options":["import","get","use","take"],"correctAnswer":"import","explanation":"\"from X import Y\" es la sintaxis.","promptExtra":"import"},
        {"id":"py9-e8","type":"arrange","prompt":"Ordena para código válido","options":["from","datetime","import","datetime"],"correctAnswer":"from datetime import datetime","explanation":"Importa la clase datetime del módulo datetime."}
      ]
    },
    {
      "id": "python-10",
      "track": "programming",
      "subTrack": "python",
      "title": "POO en Python",
      "description": "Programación Orientada a Objetos: clases, herencia, métodos",
      "icon": "🏗️",
      "xp": 90,
      "learnCards": [
        {"id":"py10-l1","word":"class","translation":"Palabra clave para definir una clase","example":"class Perro: pass"},
        {"id":"py10-l2","word":"__init__","translation":"Constructor: inicializa atributos del objeto","example":"def __init__(self, nombre): self.nombre = nombre"},
        {"id":"py10-l3","word":"self","translation":"Referencia a la instancia actual de la clase","example":"def ladrar(self): return 'guau'"},
        {"id":"py10-l4","word":"Herencia","translation":"Una clase puede heredar de otra","example":"class Perro(Animal): pass"}
      ],
      "exercises": [
        {"id":"py10-e1","type":"match","prompt":"Empareja con su descripción","options":["Definir clase","Constructor","Referencia a instancia","Heredar de otra clase"],"correctAnswer":"Definir clase","explanation":"\"class\" define una nueva clase.","promptExtra":"class"},
        {"id":"py10-e2","type":"match","prompt":"Empareja con su descripción","options":["Definir clase","Constructor","Referencia a instancia","Heredar de otra clase"],"correctAnswer":"Constructor","explanation":"__init__ inicializa objetos.","promptExtra":"__init__"},
        {"id":"py10-e3","type":"select","prompt":"¿Qué es \"self\"?","options":["La instancia actual","La clase padre","Un módulo","Una variable global"],"correctAnswer":"La instancia actual","explanation":"self refiere al objeto creado."},
        {"id":"py10-e4","type":"select","prompt":"¿Cómo heredas una clase?","options":["class Hija(Padre):","class Hija extends Padre:","class Hija <- Padre:","class Hija: Padre"],"correctAnswer":"class Hija(Padre):","explanation":"La herencia se indica con paréntesis."},
        {"id":"py10-e5","type":"select","prompt":"¿Qué es una instancia?","options":["Un objeto creado de una clase","Una variable local","Un tipo de dato","Un módulo"],"correctAnswer":"Un objeto creado de una clase","explanation":"perro = Perro() crea una instancia."},
        {"id":"py10-e6","type":"complete","prompt":"Completa: ___ Perro: (definir clase)","options":["class","def","type","object"],"correctAnswer":"class","explanation":"\"class\" define una clase.","promptExtra":"class"},
        {"id":"py10-e7","type":"complete","prompt":"Completa: def ___(self, nombre):","options":["__init__","constructor","init","new"],"correctAnswer":"__init__","explanation":"__init__ es el constructor.","promptExtra":"__init__"},
        {"id":"py10-e8","type":"arrange","prompt":"Ordena para código válido","options":["class","Gato:","def","__init__(self,nombre):","self.nombre=nombre"],"correctAnswer":"class Gato: def __init__(self,nombre): self.nombre=nombre","explanation":"Clase con constructor."}
      ]
    },
    {
      "id": "python-11",
      "track": "programming",
      "subTrack": "python",
      "title": "Excepciones",
      "description": "Manejo de errores con try/except en Python",
      "icon": "⚠️",
      "xp": 100,
      "learnCards": [
        {"id":"py11-l1","word":"try/except","translation":"Bloque para capturar y manejar errores","example":"try: x = 1/0 \nexcept ZeroDivisionError: print('Error')"},
        {"id":"py11-l2","word":"Tipos de excepción","translation":"ValueError, TypeError, KeyError, FileNotFoundError","example":"except ValueError: # error de valor"},
        {"id":"py11-l3","word":"finally","translation":"Bloque que se ejecuta siempre, haya o no error","example":"finally: archivo.close()"},
        {"id":"py11-l4","word":"raise","translation":"Lanza una excepción manualmente","example":"if edad < 0: raise ValueError('Edad inválida')"}
      ],
      "exercises": [
        {"id":"py11-e1","type":"match","prompt":"Empareja con su descripción","options":["Capturar errores","Tipo de error","Se ejecuta siempre","Lanzar error"],"correctAnswer":"Capturar errores","explanation":"try/except maneja excepciones.","promptExtra":"try/except"},
        {"id":"py11-e2","type":"match","prompt":"Empareja con su descripción","options":["Capturar errores","Tipo de error","Se ejecuta siempre","Lanzar error"],"correctAnswer":"Tipo de error","explanation":"Cada error tiene su clase.","promptExtra":"Tipos"},
        {"id":"py11-e3","type":"select","prompt":"¿Qué excepción lanza dividir por 0?","options":["ZeroDivisionError","ValueError","TypeError","KeyError"],"correctAnswer":"ZeroDivisionError","explanation":"División entre cero = ZeroDivisionError."},
        {"id":"py11-e4","type":"select","prompt":"¿Cuándo se ejecuta el bloque finally?","options":["Siempre","Solo si hay error","Solo si no hay error","Nunca"],"correctAnswer":"Siempre","explanation":"finally se ejecuta en cualquier caso."},
        {"id":"py11-e5","type":"select","prompt":"¿Para qué sirve \"raise\"?","options":["Lanzar una excepción manualmente","Capturar errores","Ignorar errores","Definir funciones"],"correctAnswer":"Lanzar una excepción manualmente","explanation":"raise permite generar errores."},
        {"id":"py11-e6","type":"complete","prompt":"Completa: ___: (iniciar bloque de manejo)","options":["try","catch","except","error"],"correctAnswer":"try","explanation":"\"try\" envuelve el código riesgoso.","promptExtra":"try"},
        {"id":"py11-e7","type":"complete","prompt":"Completa: ___ ValueError('Mensaje') (lanzar)","options":["raise","throw","launch","error"],"correctAnswer":"raise","explanation":"raise lanza la excepción.","promptExtra":"raise"},
        {"id":"py11-e8","type":"arrange","prompt":"Ordena para código válido","options":["try:","x=int('abc')","except","ValueError:","print('Error')"],"correctAnswer":"try: x=int('abc') \nexcept ValueError: print('Error')","explanation":"Captura error de conversión."}
      ]
    },
    {
      "id": "python-12",
      "track": "programming",
      "subTrack": "python",
      "title": "Pip y Paquetes",
      "description": "Gestión de paquetes externos con pip",
      "icon": "📦",
      "xp": 100,
      "learnCards": [
        {"id":"py12-l1","word":"pip","translation":"Gestor de paquetes de Python","example":"pip install requests"},
        {"id":"py12-l2","word":"pip install","translation":"Instala un paquete desde PyPI","example":"pip install numpy pandas"},
        {"id":"py12-l3","word":"requirements.txt","translation":"Archivo que lista las dependencias del proyecto","example":"pip install -r requirements.txt"},
        {"id":"py12-l4","word":"Entorno virtual (venv)","translation":"Entorno aislado con sus propias dependencias","example":"python -m venv mi_entorno"}
      ],
      "exercises": [
        {"id":"py12-e1","type":"match","prompt":"Empareja con su descripción","options":["Gestor de paquetes","Instalar paquete","Lista de dependencias","Entorno aislado"],"correctAnswer":"Gestor de paquetes","explanation":"pip es el package manager.","promptExtra":"pip"},
        {"id":"py12-e2","type":"match","prompt":"Empareja con su descripción","options":["Gestor de paquetes","Instalar paquete","Lista de dependencias","Entorno aislado"],"correctAnswer":"Instalar paquete","explanation":"pip install descarga paquetes.","promptExtra":"pip install"},
        {"id":"py12-e3","type":"select","prompt":"¿Qué es PyPI?","options":["Repositorio de paquetes Python","Un IDE","Un framework","Un tipo de dato"],"correctAnswer":"Repositorio de paquetes Python","explanation":"Python Package Index = repositorio oficial."},
        {"id":"py12-e4","type":"select","prompt":"¿Para qué sirve un entorno virtual?","options":["Aislar dependencias por proyecto","Ejecutar Python online","Crear interfaz gráfica","Compilar código"],"correctAnswer":"Aislar dependencias por proyecto","explanation":"venv evita conflictos entre versiones."},
        {"id":"py12-e5","type":"select","prompt":"¿Cómo instalas dependencias de un proyecto?","options":["pip install -r requirements.txt","pip install all","pip get requirements","pip requirements.txt"],"correctAnswer":"pip install -r requirements.txt","explanation":"-r lee el archivo de requisitos."},
        {"id":"py12-e6","type":"complete","prompt":"Completa: ___ install pandas (instalar)","options":["pip","python","apt","npm"],"correctAnswer":"pip","explanation":"pip es el gestor de paquetes.","promptExtra":"pip"},
        {"id":"py12-e7","type":"complete","prompt":"Completa: python -m ___ env (entorno virtual)","options":["venv","virtual","env","pip"],"correctAnswer":"venv","explanation":"venv crea entornos virtuales.","promptExtra":"venv"},
        {"id":"py12-e8","type":"arrange","prompt":"Ordena para comando válido","options":["pip","install","-r","requirements.txt"],"correctAnswer":"pip install -r requirements.txt","explanation":"Instala dependencias desde el archivo."}
      ]
    }
  ];
const htmlCssLessons: Lesson[] = [
    {
      "id": "html-css-1",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Introducción a HTML",
      "description": "Qué es HTML y qué es una etiqueta",
      "icon": "🌐",
      "xp": 30,
      "learnCards": [
        {
          "id": "html1-l1",
          "word": "HTML",
          "translation": "Lenguaje de marcado para estructurar páginas web",
          "example": "<!DOCTYPE html>"
        },
        {
          "id": "html1-l2",
          "word": "Etiqueta",
          "translation": "Elemento entre <> que define contenido",
          "example": "<p>Esto es un párrafo</p>"
        },
        {
          "id": "html1-l3",
          "word": "Atributo",
          "translation": "Propiedad extra dentro de una etiqueta de apertura",
          "example": "<a href='url'>Enlace</a>"
        },
        {
          "id": "html1-l4",
          "word": "Anidar",
          "translation": "Poner una etiqueta dentro de otra",
          "example": "<div><p>Hola</p></div>"
        }
      ],
      "exercises": [
        {
          "id": "html1-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Elemento entre <>",
            "Propiedad extra en etiqueta",
            "Poner una dentro de otra",
            "Lenguaje de marcado"
          ],
          "correctAnswer": "Elemento entre <>",
          "explanation": "Las etiquetas HTML van entre < y >.",
          "promptExtra": "Etiqueta"
        },
        {
          "id": "html1-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Elemento entre <>",
            "Propiedad extra en etiqueta",
            "Poner una dentro de otra",
            "Lenguaje de marcado"
          ],
          "correctAnswer": "Propiedad extra en etiqueta",
          "explanation": "Los atributos añaden información a las etiquetas.",
          "promptExtra": "Atributo"
        },
        {
          "id": "html1-e3",
          "type": "select",
          "prompt": "¿Qué significa HTML?",
          "options": [
            "HyperText Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "HyperText Media Language"
          ],
          "correctAnswer": "HyperText Markup Language",
          "explanation": "HTML = HyperText Markup Language."
        },
        {
          "id": "html1-e4",
          "type": "select",
          "prompt": "¿Cómo se cierra un párrafo?",
          "options": [
            "</p>",
            "<p/>",
            "<p><p>",
            "</p/>"
          ],
          "correctAnswer": "</p>",
          "explanation": "Las etiquetas se cierran con </nombre>."
        },
        {
          "id": "html1-e5",
          "type": "select",
          "prompt": "¿Qué hace la etiqueta <h1>?",
          "options": [
            "Crea un encabezado principal",
            "Crea un párrafo",
            "Crea un enlace",
            "Crea una imagen"
          ],
          "correctAnswer": "Crea un encabezado principal",
          "explanation": "<h1> es el título de mayor nivel."
        },
        {
          "id": "html1-e6",
          "type": "complete",
          "prompt": "Completa: <___>Enlace</a>",
          "options": [
            "a href='url'",
            "link",
            "url",
            "href"
          ],
          "correctAnswer": "a href='url'",
          "explanation": "<a href='...'> define un enlace.",
          "promptExtra": "a href='url'"
        },
        {
          "id": "html1-e7",
          "type": "complete",
          "prompt": "Completa: <img ___='foto.jpg' />",
          "options": [
            "src",
            "href",
            "link",
            "url"
          ],
          "correctAnswer": "src",
          "explanation": "src especifica la ruta de la imagen.",
          "promptExtra": "src"
        },
        {
          "id": "html1-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "<div>",
            "<p>Hola</p>",
            "</div>",
            "html"
          ],
          "correctAnswer": "<div> <p>Hola</p> </div> html",
          "explanation": "Ejemplo de anidación de etiquetas."
        }
      ]
    },
    {
      "id": "html-css-2",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Elementos HTML básicos",
      "description": "Etiquetas esenciales: h1, p, a, img",
      "icon": "📄",
      "xp": 40,
      "learnCards": [
        {
          "id": "html2-l1",
          "word": "<h1> a <h6>",
          "translation": "Encabezados de mayor a menor importancia",
          "example": "<h1>Título</h1>\n<h2>Subtítulo</h2>"
        },
        {
          "id": "html2-l2",
          "word": "<p>",
          "translation": "Define un párrafo de texto",
          "example": "<p>Este es un párrafo.</p>"
        },
        {
          "id": "html2-l3",
          "word": "<a>",
          "translation": "Crea un hipervínculo o enlace",
          "example": "<a href='https://google.com'>Google</a>"
        },
        {
          "id": "html2-l4",
          "word": "<img>",
          "translation": "Inserta una imagen (etiqueta auto-cerrada)",
          "example": "<img src='foto.jpg' alt='Descripción' />"
        }
      ],
      "exercises": [
        {
          "id": "html2-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Define un párrafo",
            "Crea un enlace",
            "Inserta una imagen",
            "Encabezado principal"
          ],
          "correctAnswer": "Define un párrafo",
          "explanation": "<p> es la etiqueta de párrafo.",
          "promptExtra": "<p>"
        },
        {
          "id": "html2-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Define un párrafo",
            "Crea un enlace",
            "Inserta una imagen",
            "Encabezado principal"
          ],
          "correctAnswer": "Crea un enlace",
          "explanation": "<a> (anchor) crea hipervínculos.",
          "promptExtra": "<a>"
        },
        {
          "id": "html2-e3",
          "type": "select",
          "prompt": "¿Cuál es el encabezado más importante?",
          "options": [
            "<h1>",
            "<h6>",
            "<h3>",
            "<header>"
          ],
          "correctAnswer": "<h1>",
          "explanation": "<h1> es el de mayor jerarquía."
        },
        {
          "id": "html2-e4",
          "type": "select",
          "prompt": "¿Qué atributo lleva la URL en <a>?",
          "options": [
            "href",
            "src",
            "link",
            "url"
          ],
          "correctAnswer": "href",
          "explanation": "href especifica el destino del enlace."
        },
        {
          "id": "html2-e5",
          "type": "select",
          "prompt": "¿<img> necesita etiqueta de cierre?",
          "options": [
            "No, es auto-cerrada",
            "Sí, con </img>",
            "Depende del navegador",
            "Sí, con <img/>"
          ],
          "correctAnswer": "No, es auto-cerrada",
          "explanation": "<img> es void element, no tiene cierre."
        },
        {
          "id": "html2-e6",
          "type": "complete",
          "prompt": "Completa: <___>Subtítulo</h2>",
          "options": [
            "h2",
            "h1",
            "h3",
            "p"
          ],
          "correctAnswer": "h2",
          "explanation": "<h2> es el encabezado de nivel 2.",
          "promptExtra": "h2"
        },
        {
          "id": "html2-e7",
          "type": "complete",
          "prompt": "Completa: <img ___='foto.jpg' alt='Foto' />",
          "options": [
            "src",
            "href",
            "link",
            "url"
          ],
          "correctAnswer": "src",
          "explanation": "src define la fuente/ruta de la imagen.",
          "promptExtra": "src"
        },
        {
          "id": "html2-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "<a",
            "href='url'>",
            "Clic",
            "</a>"
          ],
          "correctAnswer": "<a href='url'> Clic </a>",
          "explanation": "Sintaxis de un enlace HTML."
        }
      ]
    },
    {
      "id": "html-css-3",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Introducción a CSS",
      "description": "Selectores y propiedades básicas",
      "icon": "🎨",
      "xp": 50,
      "learnCards": [
        {
          "id": "html3-l1",
          "word": "CSS",
          "translation": "Lenguaje de estilos para diseñar páginas web",
          "example": "p { color: red; }"
        },
        {
          "id": "html3-l2",
          "word": "Selector",
          "translation": "Indica a qué elemento HTML se aplica el estilo",
          "example": "h1 { } /* todos los h1 */"
        },
        {
          "id": "html3-l3",
          "word": "Propiedad",
          "translation": "Característica visual que se modifica",
          "example": "color, font-size, margin"
        },
        {
          "id": "html3-l4",
          "word": "Valor",
          "translation": "El ajuste concreto de una propiedad",
          "example": "red, 16px, 10px"
        }
      ],
      "exercises": [
        {
          "id": "html3-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Indica el elemento HTML",
            "Característica visual",
            "Ajuste concreto",
            "Lenguaje de estilos"
          ],
          "correctAnswer": "Indica el elemento HTML",
          "explanation": "El selector apunta al elemento a estilizar.",
          "promptExtra": "Selector"
        },
        {
          "id": "html3-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Indica el elemento HTML",
            "Característica visual",
            "Ajuste concreto",
            "Lenguaje de estilos"
          ],
          "correctAnswer": "Característica visual",
          "explanation": "La propiedad es lo que quieres cambiar (color, tamaño...).",
          "promptExtra": "Propiedad"
        },
        {
          "id": "html3-e3",
          "type": "select",
          "prompt": "¿Qué significa CSS?",
          "options": [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Syntax",
            "Color Style Setup"
          ],
          "correctAnswer": "Cascading Style Sheets",
          "explanation": "CSS = Cascading Style Sheets."
        },
        {
          "id": "html3-e4",
          "type": "select",
          "prompt": "¿Cómo se escribe un estilo CSS?",
          "options": [
            "selector { propiedad: valor; }",
            "selector = propiedad: valor;",
            "selector [ propiedad: valor ]",
            "selector ( propiedad: valor )"
          ],
          "correctAnswer": "selector { propiedad: valor; }",
          "explanation": "La sintaxis CSS usa llaves y punto y coma."
        },
        {
          "id": "html3-e5",
          "type": "select",
          "prompt": "¿Qué hace p { color: blue; }?",
          "options": [
            "Todos los párrafos serán azules",
            "Todos los textos serán azules",
            "Solo el primer párrafo será azul",
            "Nada, la sintaxis es incorrecta"
          ],
          "correctAnswer": "Todos los párrafos serán azules",
          "explanation": "El selector p aplica a todos los <p>."
        },
        {
          "id": "html3-e6",
          "type": "complete",
          "prompt": "Completa: h1 { ___: red; }",
          "options": [
            "color",
            "font",
            "style",
            "text"
          ],
          "correctAnswer": "color",
          "explanation": "\"color\" define el color del texto.",
          "promptExtra": "color"
        },
        {
          "id": "html3-e7",
          "type": "complete",
          "prompt": "Completa: p { font-___: 16px; }",
          "options": [
            "size",
            "style",
            "weight",
            "family"
          ],
          "correctAnswer": "size",
          "explanation": "font-size controla el tamaño de letra.",
          "promptExtra": "size"
        },
        {
          "id": "html3-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "p",
            "{",
            "color:",
            "red;}"
          ],
          "correctAnswer": "p { color: red; }",
          "explanation": "Regla CSS que pone párrafos en rojo."
        }
      ]
    },
    {
      "id": "html-css-4",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Layout y Flexbox",
      "description": "Estructura con div y flexbox",
      "icon": "📐",
      "xp": 60,
      "learnCards": [
        {
          "id": "html4-l1",
          "word": "<div>",
          "translation": "Contenedor genérico para agrupar elementos",
          "example": "<div class='caja'><p>Contenido</p></div>"
        },
        {
          "id": "html4-l2",
          "word": "display: flex",
          "translation": "Activa Flexbox en un contenedor",
          "example": ".contenedor { display: flex; }"
        },
        {
          "id": "html4-l3",
          "word": "justify-content",
          "translation": "Alinea elementos horizontalmente en flex",
          "example": "justify-content: center;"
        },
        {
          "id": "html4-l4",
          "word": "align-items",
          "translation": "Alinea elementos verticalmente en flex",
          "example": "align-items: center;"
        }
      ],
      "exercises": [
        {
          "id": "html4-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Contenedor genérico",
            "Activa Flexbox",
            "Alinea horizontalmente",
            "Alinea verticalmente"
          ],
          "correctAnswer": "Contenedor genérico",
          "explanation": "<div> agrupa elementos para aplicar estilos.",
          "promptExtra": "<div>"
        },
        {
          "id": "html4-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Contenedor genérico",
            "Activa Flexbox",
            "Alinea horizontalmente",
            "Alinea verticalmente"
          ],
          "correctAnswer": "Activa Flexbox",
          "explanation": "display: flex convierte el contenedor en flex.",
          "promptExtra": "display: flex"
        },
        {
          "id": "html4-e3",
          "type": "select",
          "prompt": "¿Qué hace display: flex?",
          "options": [
            "Convierte hijos en elementos flexibles",
            "Oculta el elemento",
            "Cambia el color",
            "Añade un borde"
          ],
          "correctAnswer": "Convierte hijos en elementos flexibles",
          "explanation": "Flexbox organiza los hijos en fila o columna."
        },
        {
          "id": "html4-e4",
          "type": "select",
          "prompt": "¿Qué propiedad centra horizontalmente en flex?",
          "options": [
            "justify-content",
            "align-items",
            "text-align",
            "margin"
          ],
          "correctAnswer": "justify-content",
          "explanation": "justify-content controla el eje principal (horizontal)."
        },
        {
          "id": "html4-e5",
          "type": "select",
          "prompt": "¿Qué propiedad centra verticalmente en flex?",
          "options": [
            "align-items",
            "justify-content",
            "vertical-align",
            "padding"
          ],
          "correctAnswer": "align-items",
          "explanation": "align-items controla el eje cruzado (vertical)."
        },
        {
          "id": "html4-e6",
          "type": "complete",
          "prompt": "Completa: .contenedor { ___: flex; }",
          "options": [
            "display",
            "flex",
            "layout",
            "position"
          ],
          "correctAnswer": "display",
          "explanation": "\"display: flex\" activa el modo flexbox.",
          "promptExtra": "display"
        },
        {
          "id": "html4-e7",
          "type": "complete",
          "prompt": "Completa: justify-___: space-between;",
          "options": [
            "content",
            "items",
            "self",
            "align"
          ],
          "correctAnswer": "content",
          "explanation": "justify-content distribuye espacio entre elementos.",
          "promptExtra": "content"
        },
        {
          "id": "html4-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            ".box",
            "{",
            "display:",
            "flex;}"
          ],
          "correctAnswer": ".box { display: flex; }",
          "explanation": "Clase CSS que activa flexbox."
        }
      ]
    },
    {
      "id": "html-css-5",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Responsive Design",
      "description": "Media queries y diseño adaptable",
      "icon": "📱",
      "xp": 70,
      "learnCards": [
        {
          "id": "html5-l1",
          "word": "Responsive",
          "translation": "Diseño que se adapta a diferentes tamaños de pantalla",
          "example": "Un sitio que se ve bien en móvil y escritorio."
        },
        {
          "id": "html5-l2",
          "word": "@media",
          "translation": "Regla CSS que aplica estilos según condiciones",
          "example": "@media (max-width: 600px) { ... }"
        },
        {
          "id": "html5-l3",
          "word": "max-width",
          "translation": "Condición: se aplica si el ancho es menor o igual",
          "example": "@media (max-width: 768px) { }"
        },
        {
          "id": "html5-l4",
          "word": "min-width",
          "translation": "Condición: se aplica si el ancho es mayor o igual",
          "example": "@media (min-width: 1024px) { }"
        }
      ],
      "exercises": [
        {
          "id": "html5-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Regla condicional de CSS",
            "Ancho máximo",
            "Ancho mínimo",
            "Diseño adaptable"
          ],
          "correctAnswer": "Regla condicional de CSS",
          "explanation": "@media aplica estilos bajo condiciones específicas.",
          "promptExtra": "@media"
        },
        {
          "id": "html5-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Regla condicional de CSS",
            "Ancho máximo",
            "Ancho mínimo",
            "Diseño adaptable"
          ],
          "correctAnswer": "Ancho máximo",
          "explanation": "max-width activa estilos cuando la pantalla es menor o igual.",
          "promptExtra": "max-width"
        },
        {
          "id": "html5-e3",
          "type": "select",
          "prompt": "¿Qué es diseño responsive?",
          "options": [
            "Se adapta a diferentes pantallas",
            "Usa solo colores responsivos",
            "Carga rápido en móviles",
            "Usa solo HTML sin CSS"
          ],
          "correctAnswer": "Se adapta a diferentes pantallas",
          "explanation": "Responsive = adaptable a móvil, tablet y escritorio."
        },
        {
          "id": "html5-e4",
          "type": "select",
          "prompt": "¿Para qué sirve @media?",
          "options": [
            "Aplicar estilos según tamaño de pantalla",
            "Enlazar archivos CSS",
            "Importar fuentes",
            "Crear animaciones"
          ],
          "correctAnswer": "Aplicar estilos según tamaño de pantalla",
          "explanation": "@media consulta condiciones del dispositivo."
        },
        {
          "id": "html5-e5",
          "type": "select",
          "prompt": "¿Cuándo se activa @media (max-width: 600px)?",
          "options": [
            "Pantallas de 600px o menos",
            "Pantallas de 600px o más",
            "Solo pantallas de 600px",
            "Nunca"
          ],
          "correctAnswer": "Pantallas de 600px o menos",
          "explanation": "max-width aplica cuando el ancho ≤ 600px."
        },
        {
          "id": "html5-e6",
          "type": "complete",
          "prompt": "Completa: ___ (max-width: 768px) { body { font-size: 14px; } }",
          "options": [
            "@media",
            "@screen",
            "@mobile",
            "@responsive"
          ],
          "correctAnswer": "@media",
          "explanation": "@media es la regla para consultas de medios.",
          "promptExtra": "@media"
        },
        {
          "id": "html5-e7",
          "type": "complete",
          "prompt": "Completa: @media (___-width: 1024px) { }",
          "options": [
            "min",
            "max",
            "exact",
            "only"
          ],
          "correctAnswer": "min",
          "explanation": "min-width aplica de 1024px hacia arriba.",
          "promptExtra": "min"
        },
        {
          "id": "html5-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "@media",
            "(max-width:",
            "600px)",
            "{ }"
          ],
          "correctAnswer": "@media (max-width: 600px) { }",
          "explanation": "Media query para pantallas pequeñas."
        }
      ]
    },
    {
      "id": "html-css-6",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Flexbox",
      "description": "Sistema de layout unidimensional con display: flex",
      "icon": "📏",
      "xp": 80,
      "learnCards": [
        {"id":"hc6-l1","word":"display: flex","translation":"Activa el modo flexbox en un contenedor","example":".contenedor { display: flex; }"},
        {"id":"hc6-l2","word":"justify-content","translation":"Alinea elementos en el eje principal (horizontal)","example":"justify-content: center; /* centra horizontalmente */"},
        {"id":"hc6-l3","word":"align-items","translation":"Alinea elementos en el eje secundario (vertical)","example":"align-items: center; /* centra verticalmente */"},
        {"id":"hc6-l4","word":"flex-direction","translation":"Define la dirección del eje principal","example":"flex-direction: column; /* apila verticalmente */"}
      ],
      "exercises": [
        {"id":"hc6-e1","type":"match","prompt":"Empareja con su descripción","options":["Activar flexbox","Alineación horizontal","Alineación vertical","Dirección del eje"],"correctAnswer":"Activar flexbox","explanation":"display: flex crea un contenedor flex.","promptExtra":"display: flex"},
        {"id":"hc6-e2","type":"match","prompt":"Empareja con su descripción","options":["Activar flexbox","Alineación horizontal","Alineación vertical","Dirección del eje"],"correctAnswer":"Alineación horizontal","explanation":"justify-content controla el eje principal.","promptExtra":"justify-content"},
        {"id":"hc6-e3","type":"select","prompt":"¿Qué valor centra elementos horizontalmente?","options":["justify-content: center","align-items: center","flex-center: true","text-align: center"],"correctAnswer":"justify-content: center","explanation":"justify-content centra en el eje principal."},
        {"id":"hc6-e4","type":"select","prompt":"¿Cómo alineas verticalmente con flexbox?","options":["align-items: center","vertical-align: middle","justify-content: center","align: center"],"correctAnswer":"align-items: center","explanation":"align-items controla el eje secundario."},
        {"id":"hc6-e5","type":"select","prompt":"¿Qué hace flex-direction: column?","options":["Apila elementos verticalmente","Apila horizontalmente","Invierte el orden","Centra elementos"],"correctAnswer":"Apila elementos verticalmente","explanation":"Cambia el eje principal a vertical."},
        {"id":"hc6-e6","type":"complete","prompt":"Completa: display: ___ (activar flexbox)","options":["flex","block","inline","grid"],"correctAnswer":"flex","explanation":"\"flex\" activa el modelo flexbox.","promptExtra":"flex"},
        {"id":"hc6-e7","type":"complete","prompt":"Completa: align-___: center (vertical)","options":["items","content","self","vertically"],"correctAnswer":"items","explanation":"align-items alinea los hijos.","promptExtra":"items"},
        {"id":"hc6-e8","type":"arrange","prompt":"Ordena para CSS válido","options":[".flex", "{","display:","flex;","justify-content:","space-between;","}"],"correctAnswer":".flex { display: flex; justify-content: space-between; }","explanation":"Contenedor flex con espacio entre items."}
      ]
    },
    {
      "id": "html-css-7",
      "track": "programming",
      "subTrack": "html-css",
      "title": "CSS Grid",
      "description": "Sistema de layout bidimensional con display: grid",
      "icon": "📐",
      "xp": 80,
      "learnCards": [
        {"id":"hc7-l1","word":"display: grid","translation":"Activa el modo grid en un contenedor","example":".contenedor { display: grid; }"},
        {"id":"hc7-l2","word":"grid-template-columns","translation":"Define el número y tamaño de columnas","example":"grid-template-columns: 1fr 2fr 1fr; /* 3 columnas */"},
        {"id":"hc7-l3","word":"grid-template-rows","translation":"Define el número y tamaño de filas","example":"grid-template-rows: auto 200px;"},
        {"id":"hc7-l4","word":"gap","translation":"Espacio entre celdas de la cuadrícula","example":"gap: 16px; /* espacio uniforme */"}
      ],
      "exercises": [
        {"id":"hc7-e1","type":"match","prompt":"Empareja con su descripción","options":["Activar grid","Definir columnas","Definir filas","Espacio entre celdas"],"correctAnswer":"Activar grid","explanation":"display: grid crea una cuadrícula.","promptExtra":"display: grid"},
        {"id":"hc7-e2","type":"match","prompt":"Empareja con su descripción","options":["Activar grid","Definir columnas","Definir filas","Espacio entre celdas"],"correctAnswer":"Definir columnas","explanation":"grid-template-columns define columnas.","promptExtra":"grid-template-columns"},
        {"id":"hc7-e3","type":"select","prompt":"¿Qué significa \"1fr\" en grid?","options":["Una fracción del espacio disponible","Un píxel","Un porcentaje fijo","Una unidad de texto"],"correctAnswer":"Una fracción del espacio disponible","explanation":"fr = fraction, divide el espacio."},
        {"id":"hc7-e4","type":"select","prompt":"¿Qué propiedad crea el espacio entre celdas?","options":["gap","margin","padding","space"],"correctAnswer":"gap","explanation":"gap define el espacio en grid y flexbox."},
        {"id":"hc7-e5","type":"select","prompt":"¿Cómo defines 3 columnas iguales?","options":["grid-template-columns: 1fr 1fr 1fr","columns: 3","grid-columns: repeat(3)","layout: 3-col"],"correctAnswer":"grid-template-columns: 1fr 1fr 1fr","explanation":"repeat(3, 1fr) también funciona."},
        {"id":"hc7-e6","type":"complete","prompt":"Completa: display: ___ (activar grid)","options":["grid","flex","block","table"],"correctAnswer":"grid","explanation":"\"grid\" activa CSS Grid.","promptExtra":"grid"},
        {"id":"hc7-e7","type":"complete","prompt":"Completa: ___: 16px (espacio entre celdas)","options":["gap","margin","space","padding"],"correctAnswer":"gap","explanation":"gap es la propiedad moderna.","promptExtra":"gap"},
        {"id":"hc7-e8","type":"arrange","prompt":"Ordena para CSS válido","options":[".grid", "{","display:","grid;","grid-template-columns:","1fr 2fr;","}"],"correctAnswer":".grid { display: grid; grid-template-columns: 1fr 2fr; }","explanation":"Grid con 2 columnas asimétricas."}
      ]
    },
    {
      "id": "html-css-8",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Diseño Responsive",
      "description": "Técnicas para adaptar tu web a cualquier pantalla",
      "icon": "📱",
      "xp": 90,
      "learnCards": [
        {"id":"hc8-l1","word":"@media","translation":"Regla CSS que aplica estilos según condiciones","example":"@media (max-width: 768px) { }"},
        {"id":"hc8-l2","word":"Mobile First","translation":"Diseñar primero para móvil y luego expandir","example":"Estilos base para móvil, @media (min-width) para desktop"},
        {"id":"hc8-l3","word":"Viewport","translation":"Metaetiqueta que controla la escala en móviles","example":"<meta name='viewport' content='width=device-width, initial-scale=1'>"},
        {"id":"hc8-l4","word":"Unidades relativas","translation":"%, vw, vh, em, rem: se adaptan al contexto","example":"width: 100%; font-size: 2rem;"}
      ],
      "exercises": [
        {"id":"hc8-e1","type":"match","prompt":"Empareja con su descripción","options":["Condiciones de estilo","Diseñar móvil primero","Control de escala","Unidades adaptables"],"correctAnswer":"Condiciones de estilo","explanation":"@media aplica estilos condicionales.","promptExtra":"@media"},
        {"id":"hc8-e2","type":"match","prompt":"Empareja con su descripción","options":["Condiciones de estilo","Diseñar móvil primero","Control de escala","Unidades adaptables"],"correctAnswer":"Diseñar móvil primero","explanation":"Mobile First = empezar por pantallas pequeñas.","promptExtra":"Mobile First"},
        {"id":"hc8-e3","type":"select","prompt":"¿Qué hace width=device-width?","options":["Adapta el ancho al dispositivo","Fija el ancho","Oculta el contenido","Aumenta la resolución"],"correctAnswer":"Adapta el ancho al dispositivo","explanation":"Hace que el viewport coincida con la pantalla."},
        {"id":"hc8-e4","type":"select","prompt":"¿Qué unidad es relativa al viewport?","options":["vw y vh","px","pt","cm"],"correctAnswer":"vw y vh","explanation":"vw = % del ancho, vh = % del alto del viewport."},
        {"id":"hc8-e5","type":"select","prompt":"¿Qué significa rem?","options":["Relativo al font-size del root","Relativo al elemento padre","Píxeles de pantalla","Unidad absoluta"],"correctAnswer":"Relativo al font-size del root","explanation":"rem = root em, relativo al <html>."},
        {"id":"hc8-e6","type":"complete","prompt":"Completa: ___ (max-width: 768px) { } (media query)","options":["@media","@screen","@responsive","@query"],"correctAnswer":"@media","explanation":"@media es la regla para media queries.","promptExtra":"@media"},
        {"id":"hc8-e7","type":"complete","prompt":"Completa: width: 50___ (mitad del viewport)","options":["vw","vh","%","rem"],"correctAnswer":"vw","explanation":"50vw = 50% del ancho del viewport.","promptExtra":"vw"},
        {"id":"hc8-e8","type":"arrange","prompt":"Ordena para CSS válido","options":["@media","(max-width:","600px)","{","body{font-size:14px;}","}"],"correctAnswer":"@media (max-width: 600px) { body{font-size:14px;} }","explanation":"Media query para pantallas pequeñas."}
      ]
    },
    {
      "id": "html-css-9",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Animaciones CSS",
      "description": "Transiciones y keyframes para dar vida a tu web",
      "icon": "✨",
      "xp": 90,
      "learnCards": [
        {"id":"hc9-l1","word":"transition","translation":"Suaviza el cambio entre dos estados de una propiedad","example":"transition: all 0.3s ease;"},
        {"id":"hc9-l2","word":"@keyframes","translation":"Define una secuencia de animación por fotogramas","example":"@keyframes girar { from {transform:rotate(0)} to {transform:rotate(360deg)} }"},
        {"id":"hc9-l3","word":"animation","translation":"Aplica una animación definida con @keyframes","example":"animation: girar 2s infinite;"},
        {"id":"hc9-l4","word":"transform","translation":"Modifica la forma: rotar, escalar, mover, sesgar","example":"transform: scale(1.2) rotate(10deg);"}
      ],
      "exercises": [
        {"id":"hc9-e1","type":"match","prompt":"Empareja con su descripción","options":["Suavizar cambios","Definir fotogramas","Aplicar animación","Rotar/escalar/mover"],"correctAnswer":"Suavizar cambios","explanation":"transition interpola entre estados.","promptExtra":"transition"},
        {"id":"hc9-e2","type":"match","prompt":"Empareja con su descripción","options":["Suavizar cambios","Definir fotogramas","Aplicar animación","Rotar/escalar/mover"],"correctAnswer":"Definir fotogramas","explanation":"@keyframes define la secuencia.","promptExtra":"@keyframes"},
        {"id":"hc9-e3","type":"select","prompt":"¿Qué propiedad rota un elemento?","options":["transform: rotate()","transition: rotate","animation: rotate","rotate()"],"correctAnswer":"transform: rotate()","explanation":"transform con rotate(ángulo)."},
        {"id":"hc9-e4","type":"select","prompt":"¿Para qué sirve \"ease\" en transition?","options":["Suaviza la velocidad de la transición","Define la duración","Especifica el retraso","Elige la propiedad"],"correctAnswer":"Suaviza la velocidad de la transición","explanation":"ease = curva de aceleración."},
        {"id":"hc9-e5","type":"select","prompt":"¿Qué hace \"animation: infinite\"?","options":["Repite la animación sin fin","La ejecuta una vez","La pausa","La acelera"],"correctAnswer":"Repite la animación sin fin","explanation":"infinite = bucle continuo."},
        {"id":"hc9-e6","type":"complete","prompt":"Completa: @___ girar { } (definir animación)","options":["keyframes","animation","transition","transform"],"correctAnswer":"keyframes","explanation":"@keyframes define animaciones.","promptExtra":"keyframes"},
        {"id":"hc9-e7","type":"complete","prompt":"Completa: transition: ___ 0.3s (propiedad)","options":["all","opacity","color","size"],"correctAnswer":"all","explanation":"\"all\" aplica a todas las propiedades.","promptExtra":"all"},
        {"id":"hc9-e8","type":"arrange","prompt":"Ordena para CSS válido","options":[".box","{","transition:","all","0.3s","ease;","}"],"correctAnswer":".box { transition: all 0.3s ease; }","explanation":"Transición suave para cualquier cambio."}
      ]
    },
    {
      "id": "html-css-10",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Formularios",
      "description": "Creación y estilizado de formularios HTML",
      "icon": "📝",
      "xp": 90,
      "learnCards": [
        {"id":"hc10-l1","word":"<form>","translation":"Contenedor de campos de entrada","example":"<form action='/submit' method='POST'>"},
        {"id":"hc10-l2","word":"<input>","translation":"Campo de entrada: text, email, password, number, date","example":"<input type='email' placeholder='tu@email.com'>"},
        {"id":"hc10-l3","word":"<label>","translation":"Etiqueta asociada a un campo (accesibilidad)","example":"<label for='nombre'>Nombre:</label><input id='nombre'>"},
        {"id":"hc10-l4","word":"Validación HTML5","translation":"Atributos como required, pattern, minlength","example":"<input type='email' required>"}
      ],
      "exercises": [
        {"id":"hc10-e1","type":"match","prompt":"Empareja con su descripción","options":["Contenedor de campos","Campo de entrada","Etiqueta del campo","Validación nativa"],"correctAnswer":"Contenedor de campos","explanation":"<form> agrupa los inputs.","promptExtra":"<form>"},
        {"id":"hc10-e2","type":"match","prompt":"Empareja con su descripción","options":["Contenedor de campos","Campo de entrada","Etiqueta del campo","Validación nativa"],"correctAnswer":"Campo de entrada","explanation":"<input> captura datos del usuario.","promptExtra":"<input>"},
        {"id":"hc10-e3","type":"select","prompt":"¿Qué atributo hace un campo obligatorio?","options":["required","mandatory","validate","must"],"correctAnswer":"required","explanation":"El atributo \"required\" exige completar."},
        {"id":"hc10-e4","type":"select","prompt":"¿Para qué sirve <label>?","options":["Accesibilidad y usabilidad","Decoración","Validación","Envío del formulario"],"correctAnswer":"Accesibilidad y usabilidad","explanation":"Asocia texto descriptivo a un campo."},
        {"id":"hc10-e5","type":"select","prompt":"¿Qué input para contraseñas?","options":["type='password'","type='text'","type='secret'","type='hidden'"],"correctAnswer":"type='password'","explanation":"Oculta los caracteres al escribir."},
        {"id":"hc10-e6","type":"complete","prompt":"Completa: <input type='___' placeholder='email'>","options":["email","text","mail","address"],"correctAnswer":"email","explanation":"type='email' valida formato email.","promptExtra":"email"},
        {"id":"hc10-e7","type":"complete","prompt":"Completa: <___ for='nombre'>Nombre:</label>","options":["label","span","div","p"],"correctAnswer":"label","explanation":"<label> se asocia con \"for\".","promptExtra":"label"},
        {"id":"hc10-e8","type":"arrange","prompt":"Ordena para HTML válido","options":["<form>","<input","type='text'","required>","</form>"],"correctAnswer":"<form> <input type='text' required> </form>","explanation":"Formulario con campo obligatorio."}
      ]
    },
    {
      "id": "html-css-11",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Selectores Avanzados",
      "description": "Selectores CSS más allá de clase e ID",
      "icon": "🎯",
      "xp": 100,
      "learnCards": [
        {"id":"hc11-l1","word":"Selector de atributo","translation":"Selecciona por atributo: [type='text']","example":"input[type='email'] { border-color: blue; }"},
        {"id":"hc11-l2","word":"Pseudo-clases","translation":":hover, :focus, :nth-child(), :first-child","example":"li:nth-child(odd) { background: #eee; }"},
        {"id":"hc11-l3","word":"Pseudo-elementos","translation":"::before, ::after: contenido generado","example":".precio::before { content: '$'; }"},
        {"id":"hc11-l4","word":"Combinadores","translation":"Descendiente ( ), hijo (>), adyacente (+), hermano (~)","example":"article > p { } /* solo p hijos directos */"}
      ],
      "exercises": [
        {"id":"hc11-e1","type":"match","prompt":"Empareja con su descripción","options":["Por atributo","Estado del elemento","Contenido generado","Relación entre elementos"],"correctAnswer":"Por atributo","explanation":"[atributo] selecciona por atributo.","promptExtra":"[type]"},
        {"id":"hc11-e2","type":"match","prompt":"Empareja con su descripción","options":["Por atributo","Estado del elemento","Contenido generado","Relación entre elementos"],"correctAnswer":"Estado del elemento","explanation":"Pseudo-clases = estado (:hover).","promptExtra":":hover"},
        {"id":"hc11-e3","type":"select","prompt":"¿Qué selecciona :nth-child(2n)?","options":["Elementos pares","Todos los elementos","El segundo elemento","Elementos impares"],"correctAnswer":"Elementos pares","explanation":"2n = 2,4,6... (pares). odd = impares."},
        {"id":"hc11-e4","type":"select","prompt":"¿Cuál selecciona solo hijos directos?","options":["> (hijo directo)","(espacio) descendiente","+ adyacente","~ hermanos"],"correctAnswer":"> (hijo directo)","explanation":"div > p selecciona p hijos directos de div."},
        {"id":"hc11-e5","type":"select","prompt":"¿Qué hace ::before?","options":["Inserta contenido antes del elemento","Selecciona el primer hijo","Crea una animación","Aplica un borde"],"correctAnswer":"Inserta contenido antes del elemento","explanation":"::before genera contenido virtual."},
        {"id":"hc11-e6","type":"complete","prompt":"Completa: li:___-child(1) (primer hijo)","options":["first","nth","last","only"],"correctAnswer":"first","explanation":":first-child selecciona el primero.","promptExtra":"first"},
        {"id":"hc11-e7","type":"complete","prompt":"Completa: input[___='text'] (tipo)","options":["type","name","id","class"],"correctAnswer":"type","explanation":"[type='text'] filtra por atributo type.","promptExtra":"type"},
        {"id":"hc11-e8","type":"arrange","prompt":"Ordena para CSS válido","options":["ul",">","li:first-child","{","font-weight:","bold;","}"],"correctAnswer":"ul > li:first-child { font-weight: bold; }","explanation":"Primer li hijo directo en negrita."}
      ]
    },
    {
      "id": "html-css-12",
      "track": "programming",
      "subTrack": "html-css",
      "title": "Variables y Custom Properties",
      "description": "Usa variables CSS para temas y consistencia",
      "icon": "🎨",
      "xp": 100,
      "learnCards": [
        {"id":"hc12-l1","word":"--variable","translation":"Define una variable CSS (custom property)","example":":root { --color-primario: #3b82f6; }"},
        {"id":"hc12-l2","word":"var()","translation":"Función que usa el valor de una variable","example":"color: var(--color-primario);"},
        {"id":"hc12-l3","word":":root","translation":"Selector del elemento raíz, ideal para variables globales","example":":root { --font-size: 16px; }"},
        {"id":"hc12-l4","word":"Fallback","translation":"Valor por defecto si la variable no existe","example":"color: var(--color, black); /* black si no existe */"}
      ],
      "exercises": [
        {"id":"hc12-e1","type":"match","prompt":"Empareja con su descripción","options":["Definir variable","Usar variable","Selector raíz","Valor por defecto"],"correctAnswer":"Definir variable","explanation":"--nombre crea una variable.","promptExtra":"--variable"},
        {"id":"hc12-e2","type":"match","prompt":"Empareja con su descripción","options":["Definir variable","Usar variable","Selector raíz","Valor por defecto"],"correctAnswer":"Usar variable","explanation":"var() consume la variable.","promptExtra":"var()"},
        {"id":"hc12-e3","type":"select","prompt":"¿Dónde defines variables globales?","options":[":root","body","html","*"],"correctAnswer":":root","explanation":":root tiene mayor especificidad que html."},
        {"id":"hc12-e4","type":"select","prompt":"¿Ventaja de usar variables CSS?","options":["Cambiar un valor afecta todo el sitio","Son más rápidas","No necesitan CSS","Funcionan sin navegador"],"correctAnswer":"Cambiar un valor afecta todo el sitio","explanation":"Ideal para temas y consistencia."},
        {"id":"hc12-e5","type":"select","prompt":"¿Cómo pones un valor por defecto?","options":["var(--x, default)","var(--x: default)","var(--x) default","default(--x)"],"correctAnswer":"var(--x, default)","explanation":"El segundo parámetro de var() es el fallback."},
        {"id":"hc12-e6","type":"complete","prompt":"Completa: :root { ___color: blue; }","options":["--","var(","$","@"],"correctAnswer":"--","explanation":"Las variables CSS empiezan con --.","promptExtra":"--"},
        {"id":"hc12-e7","type":"complete","prompt":"Completa: color: ___(--color, red);","options":["var","use","get","css"],"correctAnswer":"var","explanation":"var() lee la variable CSS.","promptExtra":"var"},
        {"id":"hc12-e8","type":"arrange","prompt":"Ordena para CSS válido","options":[":root","{","--primary:","#3b82f6;","}"],"correctAnswer":":root { --primary: #3b82f6; }","explanation":"Define variable global de color."}
      ]
    }
  ];
const rLessons: Lesson[] = [
    {
      "id": "r-1",
      "track": "programming",
      "subTrack": "r",
      "title": "Introducción a R",
      "description": "Qué es R y cómo crear variables",
      "icon": "📊",
      "xp": 30,
      "learnCards": [
        {
          "id": "r1-l1",
          "word": "R",
          "translation": "Lenguaje de programación para análisis estadístico y gráficos",
          "example": "# R es usado por estadísticos y científicos de datos"
        },
        {
          "id": "r1-l2",
          "word": "<-",
          "translation": "Operador de asignación en R",
          "example": "x <- 10"
        },
        {
          "id": "r1-l3",
          "word": "Variable",
          "translation": "Nombre que almacena un valor en memoria",
          "example": "nombre <- 'Ana'"
        },
        {
          "id": "r1-l4",
          "word": "print()",
          "translation": "Función que muestra un valor en consola",
          "example": "print('Hola Mundo')"
        }
      ],
      "exercises": [
        {
          "id": "r1-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Operador de asignación",
            "Muestra en consola",
            "Lenguaje estadístico",
            "Nombre de variable"
          ],
          "correctAnswer": "Operador de asignación",
          "explanation": "En R se usa <- para asignar valores.",
          "promptExtra": "<-"
        },
        {
          "id": "r1-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Operador de asignación",
            "Muestra en consola",
            "Lenguaje estadístico",
            "Nombre de variable"
          ],
          "correctAnswer": "Muestra en consola",
          "explanation": "print() muestra valores en la consola de R.",
          "promptExtra": "print()"
        },
        {
          "id": "r1-e3",
          "type": "select",
          "prompt": "¿Para qué se usa principalmente R?",
          "options": [
            "Análisis estadístico y datos",
            "Desarrollo web",
            "Apps móviles",
            "Sistemas operativos"
          ],
          "correctAnswer": "Análisis estadístico y datos",
          "explanation": "R es un lenguaje para estadística y análisis de datos."
        },
        {
          "id": "r1-e4",
          "type": "select",
          "prompt": "¿Cómo se asigna un valor en R?",
          "options": [
            "x <- 10",
            "x = 10",
            "let x = 10",
            "x := 10"
          ],
          "correctAnswer": "x <- 10",
          "explanation": "El operador tradicional de R es <-."
        },
        {
          "id": "r1-e5",
          "type": "select",
          "prompt": "¿Qué hace print(2 + 2)?",
          "options": [
            "Muestra 4",
            "Muestra 2 + 2",
            "Da error",
            "Muestra 22"
          ],
          "correctAnswer": "Muestra 4",
          "explanation": "R evalúa la expresión y muestra el resultado."
        },
        {
          "id": "r1-e6",
          "type": "complete",
          "prompt": "Completa: x ___ 10 (asignar en R)",
          "options": [
            "<-",
            "=",
            ":==",
            "->"
          ],
          "correctAnswer": "<-",
          "explanation": "<- es el operador de asignación en R.",
          "promptExtra": "<-"
        },
        {
          "id": "r1-e7",
          "type": "complete",
          "prompt": "Completa: ___('Hola Mundo')",
          "options": [
            "print",
            "echo",
            "console",
            "cat"
          ],
          "correctAnswer": "print",
          "explanation": "print() muestra valores en la consola.",
          "promptExtra": "print"
        },
        {
          "id": "r1-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "x",
            "<-",
            "25",
            "print"
          ],
          "correctAnswer": "x <- 25 print",
          "explanation": "Ejercicio léxico de R."
        }
      ]
    },
    {
      "id": "r-2",
      "track": "programming",
      "subTrack": "r",
      "title": "Tipos de datos",
      "description": "Numeric, character y logical en R",
      "icon": "📦",
      "xp": 40,
      "learnCards": [
        {
          "id": "r2-l1",
          "word": "numeric",
          "translation": "Tipo de dato para números (enteros y decimales)",
          "example": "edad <- 25  # numeric"
        },
        {
          "id": "r2-l2",
          "word": "character",
          "translation": "Tipo de dato para texto entre comillas",
          "example": "nombre <- 'Ana'  # character"
        },
        {
          "id": "r2-l3",
          "word": "logical",
          "translation": "Tipo de dato lógico: TRUE o FALSE",
          "example": "activo <- TRUE  # logical"
        },
        {
          "id": "r2-l4",
          "word": "class()",
          "translation": "Función que devuelve el tipo/clase de un objeto",
          "example": "class('Hola')  # \"character\""
        }
      ],
      "exercises": [
        {
          "id": "r2-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Texto entre comillas",
            "Número entero o decimal",
            "Valor TRUE o FALSE",
            "Lista de elementos"
          ],
          "correctAnswer": "Texto entre comillas",
          "explanation": "character es el tipo para cadenas de texto.",
          "promptExtra": "character"
        },
        {
          "id": "r2-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Texto entre comillas",
            "Número entero o decimal",
            "Valor TRUE o FALSE",
            "Lista de elementos"
          ],
          "correctAnswer": "Valor TRUE o FALSE",
          "explanation": "logical solo puede ser TRUE o FALSE.",
          "promptExtra": "logical"
        },
        {
          "id": "r2-e3",
          "type": "select",
          "prompt": "¿Qué tipo es 42 en R?",
          "options": [
            "numeric",
            "character",
            "logical",
            "vector"
          ],
          "correctAnswer": "numeric",
          "explanation": "42 es un número, tipo numeric."
        },
        {
          "id": "r2-e4",
          "type": "select",
          "prompt": "¿Qué tipo es \"Hola\" en R?",
          "options": [
            "character",
            "numeric",
            "logical",
            "factor"
          ],
          "correctAnswer": "character",
          "explanation": "El texto entre comillas es character."
        },
        {
          "id": "r2-e5",
          "type": "select",
          "prompt": "¿Qué devuelve class(TRUE)?",
          "options": [
            "\"logical\"",
            "\"numeric\"",
            "\"character\"",
            "\"boolean\""
          ],
          "correctAnswer": "\"logical\"",
          "explanation": "TRUE es de tipo logical en R."
        },
        {
          "id": "r2-e6",
          "type": "complete",
          "prompt": "Completa: activo <- ___ (verdadero en R)",
          "options": [
            "TRUE",
            "true",
            "True",
            "1"
          ],
          "correctAnswer": "TRUE",
          "explanation": "En R, TRUE se escribe en mayúsculas.",
          "promptExtra": "TRUE"
        },
        {
          "id": "r2-e7",
          "type": "complete",
          "prompt": "Completa: ___('Hola') # \"character\"",
          "options": [
            "class",
            "type",
            "typeof",
            "mode"
          ],
          "correctAnswer": "class",
          "explanation": "class() devuelve la clase del objeto.",
          "promptExtra": "class"
        },
        {
          "id": "r2-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "nombre",
            "<-",
            "'Ana'",
            "class"
          ],
          "correctAnswer": "nombre <- 'Ana' class",
          "explanation": "Ejercicio léxico R."
        }
      ]
    },
    {
      "id": "r-3",
      "track": "programming",
      "subTrack": "r",
      "title": "Vectores",
      "description": "Creación y operaciones con vectores en R",
      "icon": "📏",
      "xp": 50,
      "learnCards": [
        {
          "id": "r3-l1",
          "word": "c()",
          "translation": "Función combine: crea un vector de elementos",
          "example": "numeros <- c(1, 2, 3, 4, 5)"
        },
        {
          "id": "r3-l2",
          "word": "seq()",
          "translation": "Genera una secuencia de números",
          "example": "seq(1, 10, by=2)  # 1, 3, 5, 7, 9"
        },
        {
          "id": "r3-l3",
          "word": "length()",
          "translation": "Devuelve el número de elementos de un vector",
          "example": "length(c(1,2,3))  # 3"
        },
        {
          "id": "r3-l4",
          "word": "Índice",
          "translation": "Posición de un elemento, empieza en 1",
          "example": "numeros[1]  # primer elemento"
        }
      ],
      "exercises": [
        {
          "id": "r3-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Crea un vector",
            "Genera secuencia",
            "Número de elementos",
            "Posición de elemento"
          ],
          "correctAnswer": "Crea un vector",
          "explanation": "c() combina valores en un vector.",
          "promptExtra": "c()"
        },
        {
          "id": "r3-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Crea un vector",
            "Genera secuencia",
            "Número de elementos",
            "Posición de elemento"
          ],
          "correctAnswer": "Número de elementos",
          "explanation": "length() dice cuántos elementos hay.",
          "promptExtra": "length()"
        },
        {
          "id": "r3-e3",
          "type": "select",
          "prompt": "¿Qué crea c(10, 20, 30)?",
          "options": [
            "Un vector con 3 números",
            "Una matriz",
            "Un data frame",
            "Una lista"
          ],
          "correctAnswer": "Un vector con 3 números",
          "explanation": "c() crea un vector con los elementos indicados."
        },
        {
          "id": "r3-e4",
          "type": "select",
          "prompt": "¿En qué posición empieza la indexación en R?",
          "options": [
            "1",
            "0",
            "Depende",
            "-1"
          ],
          "correctAnswer": "1",
          "explanation": "A diferencia de Python/JS, R indexa desde 1."
        },
        {
          "id": "r3-e5",
          "type": "select",
          "prompt": "¿Qué hace seq(1, 5)?",
          "options": [
            "Genera 1, 2, 3, 4, 5",
            "Genera 1, 5",
            "Genera 5, 4, 3, 2, 1",
            "Error"
          ],
          "correctAnswer": "Genera 1, 2, 3, 4, 5",
          "explanation": "seq(1,5) crea una secuencia de 1 a 5."
        },
        {
          "id": "r3-e6",
          "type": "complete",
          "prompt": "Completa: numeros <- ___(1, 2, 3)",
          "options": [
            "c",
            "seq",
            "vector",
            "list"
          ],
          "correctAnswer": "c",
          "explanation": "c() combina elementos en un vector.",
          "promptExtra": "c"
        },
        {
          "id": "r3-e7",
          "type": "complete",
          "prompt": "Completa: ___(numeros) # cantidad de elementos",
          "options": [
            "length",
            "count",
            "size",
            "nrow"
          ],
          "correctAnswer": "length",
          "explanation": "length() devuelve la longitud del vector.",
          "promptExtra": "length"
        },
        {
          "id": "r3-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "numeros",
            "<-",
            "c(1,",
            "2,3)"
          ],
          "correctAnswer": "numeros <- c(1, 2,3)",
          "explanation": "Creación de un vector con c()."
        }
      ]
    },
    {
      "id": "r-4",
      "track": "programming",
      "subTrack": "r",
      "title": "Data Frames",
      "description": "Estructura tabular de datos en R",
      "icon": "📋",
      "xp": 60,
      "learnCards": [
        {
          "id": "r4-l1",
          "word": "data.frame()",
          "translation": "Función que crea una tabla de datos bidimensional",
          "example": "df <- data.frame(nombre=c('A','B'), edad=c(25,30))"
        },
        {
          "id": "r4-l2",
          "word": "$",
          "translation": "Operador para acceder a una columna del data frame",
          "example": "df  # vector con la columna edad"
        },
        {
          "id": "r4-l3",
          "word": "nrow()",
          "translation": "Devuelve el número de filas del data frame",
          "example": "nrow(df)  # 2"
        },
        {
          "id": "r4-l4",
          "word": "read.csv()",
          "translation": "Lee un archivo CSV y lo convierte en data frame",
          "example": "datos <- read.csv('archivo.csv')"
        }
      ],
      "exercises": [
        {
          "id": "r4-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Crea una tabla de datos",
            "Accede a columna",
            "Número de filas",
            "Lee archivo CSV"
          ],
          "correctAnswer": "Crea una tabla de datos",
          "explanation": "data.frame() crea una estructura tabular.",
          "promptExtra": "data.frame()"
        },
        {
          "id": "r4-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Crea una tabla de datos",
            "Accede a columna",
            "Número de filas",
            "Lee archivo CSV"
          ],
          "correctAnswer": "Accede a columna",
          "explanation": "df extrae una columna específica.",
          "promptExtra": "$"
        },
        {
          "id": "r4-e3",
          "type": "select",
          "prompt": "¿Qué es un data frame?",
          "options": [
            "Una tabla de datos bidimensional",
            "Un vector simple",
            "Una función matemática",
            "Un gráfico"
          ],
          "correctAnswer": "Una tabla de datos bidimensional",
          "explanation": "Un data frame es como una hoja de cálculo."
        },
        {
          "id": "r4-e4",
          "type": "select",
          "prompt": "¿Cómo accedes a la columna 'nombre' de df?",
          "options": [
            "df",
            "df.nombre",
            "df->nombre",
            "df:nombre"
          ],
          "correctAnswer": "df",
          "explanation": "El operador $ extrae una columna por nombre."
        },
        {
          "id": "r4-e5",
          "type": "select",
          "prompt": "¿Qué hace read.csv('datos.csv')?",
          "options": [
            "Lee un CSV y crea un data frame",
            "Guarda un data frame como CSV",
            "Crea un archivo CSV vacío",
            "Elimina un archivo CSV"
          ],
          "correctAnswer": "Lee un CSV y crea un data frame",
          "explanation": "read.csv() importa datos desde un archivo CSV."
        },
        {
          "id": "r4-e6",
          "type": "complete",
          "prompt": "Completa: df <- ___(nombre=c('A','B'), edad=c(25,30))",
          "options": [
            "data.frame",
            "dataframe",
            "table",
            "matrix"
          ],
          "correctAnswer": "data.frame",
          "explanation": "data.frame() crea una tabla de datos.",
          "promptExtra": "data.frame"
        },
        {
          "id": "r4-e7",
          "type": "complete",
          "prompt": "Completa: ___(df) # número de filas",
          "options": [
            "nrow",
            "ncol",
            "length",
            "dim"
          ],
          "correctAnswer": "nrow",
          "explanation": "nrow() devuelve el número de filas.",
          "promptExtra": "nrow"
        },
        {
          "id": "r4-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "datos",
            "<-",
            "read.csv('archivo.csv')",
            "nrow"
          ],
          "correctAnswer": "datos <- read.csv('archivo.csv') nrow",
          "explanation": "Lectura de CSV en R."
        }
      ]
    },
    {
      "id": "r-5",
      "track": "programming",
      "subTrack": "r",
      "title": "Funciones básicas",
      "description": "Funciones esenciales: mean, sum, plot",
      "icon": "📈",
      "xp": 70,
      "learnCards": [
        {
          "id": "r5-l1",
          "word": "mean()",
          "translation": "Calcula la media aritmética de un vector",
          "example": "mean(c(10, 20, 30))  # 20"
        },
        {
          "id": "r5-l2",
          "word": "sum()",
          "translation": "Suma todos los elementos de un vector",
          "example": "sum(c(1, 2, 3))  # 6"
        },
        {
          "id": "r5-l3",
          "word": "plot()",
          "translation": "Crea un gráfico básico de dispersión",
          "example": "plot(x, y)  # gráfico de puntos"
        },
        {
          "id": "r5-l4",
          "word": "summary()",
          "translation": "Muestra estadísticas descriptivas de un objeto",
          "example": "summary(df)  # min, max, media, mediana..."
        }
      ],
      "exercises": [
        {
          "id": "r5-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Calcula el promedio",
            "Suma elementos",
            "Crea un gráfico",
            "Estadísticas descriptivas"
          ],
          "correctAnswer": "Calcula el promedio",
          "explanation": "mean() calcula la media aritmética.",
          "promptExtra": "mean()"
        },
        {
          "id": "r5-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Calcula el promedio",
            "Suma elementos",
            "Crea un gráfico",
            "Estadísticas descriptivas"
          ],
          "correctAnswer": "Crea un gráfico",
          "explanation": "plot() genera gráficos de dispersión.",
          "promptExtra": "plot()"
        },
        {
          "id": "r5-e3",
          "type": "select",
          "prompt": "¿Qué devuelve mean(c(5, 10, 15))?",
          "options": [
            "10",
            "30",
            "15",
            "5"
          ],
          "correctAnswer": "10",
          "explanation": "(5+10+15)/3 = 10."
        },
        {
          "id": "r5-e4",
          "type": "select",
          "prompt": "¿Qué devuelve sum(c(1, 2, 3, 4))?",
          "options": [
            "10",
            "24",
            "4",
            "1"
          ],
          "correctAnswer": "10",
          "explanation": "1+2+3+4 = 10."
        },
        {
          "id": "r5-e5",
          "type": "select",
          "prompt": "¿Qué tipo de gráfico crea plot(x, y)?",
          "options": [
            "Gráfico de dispersión",
            "Gráfico de barras",
            "Gráfico circular",
            "Histograma"
          ],
          "correctAnswer": "Gráfico de dispersión",
          "explanation": "plot() por defecto crea un scatter plot."
        },
        {
          "id": "r5-e6",
          "type": "complete",
          "prompt": "Completa: ___(c(10, 20, 30)) # promedio",
          "options": [
            "mean",
            "sum",
            "avg",
            "median"
          ],
          "correctAnswer": "mean",
          "explanation": "mean() calcula la media.",
          "promptExtra": "mean"
        },
        {
          "id": "r5-e7",
          "type": "complete",
          "prompt": "Completa: ___(c(1,2,3)) # suma total",
          "options": [
            "sum",
            "total",
            "add",
            "plus"
          ],
          "correctAnswer": "sum",
          "explanation": "sum() suma todos los elementos.",
          "promptExtra": "sum"
        },
        {
          "id": "r5-e8",
          "type": "arrange",
          "prompt": "Ordena para formar código válido",
          "options": [
            "resultado",
            "<-",
            "mean(c(1,2,3))",
            "plot"
          ],
          "correctAnswer": "resultado <- mean(c(1,2,3)) plot",
          "explanation": "Cálculo del promedio en R."
        }
      ]
    },
    {
      "id": "r-6",
      "track": "programming",
      "subTrack": "r",
      "title": "Data Frames",
      "description": "La estructura de datos tabular fundamental en R",
      "icon": "📊",
      "xp": 80,
      "learnCards": [
        {"id":"r6-l1","word":"data.frame()","translation":"Crea un data frame: tabla con filas y columnas","example":"df <- data.frame(nombre=c('Ana','Luis'), edad=c(25,30))"},
        {"id":"r6-l2","word":"Acceso a columnas","translation":"df$columna o df[,'columna']","example":"df$edad # vector con las edades"},
        {"id":"r6-l3","word":"subset()","translation":"Filtra filas según una condición","example":"subset(df, edad > 25)"},
        {"id":"r6-l4","word":"head() / tail()","translation":"Muestra las primeras/últimas filas del data frame","example":"head(df) # primeras 6 filas"}
      ],
      "exercises": [
        {"id":"r6-e1","type":"match","prompt":"Empareja con su descripción","options":["Crear tabla","Acceder columna","Filtrar filas","Primeras filas"],"correctAnswer":"Crear tabla","explanation":"data.frame() crea datos tabulares.","promptExtra":"data.frame()"},
        {"id":"r6-e2","type":"match","prompt":"Empareja con su descripción","options":["Crear tabla","Acceder columna","Filtrar filas","Primeras filas"],"correctAnswer":"Acceder columna","explanation":"df$col accede a una variable.","promptExtra":"df$col"},
        {"id":"r6-e3","type":"select","prompt":"¿Cómo accedes a la columna \"edad\"?","options":["df$edad","df.edad","df['edad']","edad.df"],"correctAnswer":"df$edad","explanation":"El operador $ accede a columnas."},
        {"id":"r6-e4","type":"select","prompt":"¿Qué hace head(df, 10)?","options":["Muestra primeras 10 filas","Muestra últimas 10 filas","Cuenta 10 filas","Elimina 10 filas"],"correctAnswer":"Muestra primeras 10 filas","explanation":"head() muestra el inicio del data frame."},
        {"id":"r6-e5","type":"select","prompt":"¿Cómo filtras filas con edad mayor a 25?","options":["subset(df, edad > 25)","df[edad > 25]","filter(df, edad > 25)","df > 25"],"correctAnswer":"subset(df, edad > 25)","explanation":"subset() filtra por condición lógica."},
        {"id":"r6-e6","type":"complete","prompt":"Completa: ___() (últimas filas)","options":["tail","head","end","last"],"correctAnswer":"tail","explanation":"tail() muestra el final del data frame.","promptExtra":"tail"},
        {"id":"r6-e7","type":"complete","prompt":"Completa: df <- ___(nombre=c('A','B'))","options":["data.frame","dataframe","tibble","table"],"correctAnswer":"data.frame","explanation":"data.frame() es la función base.","promptExtra":"data.frame"},
        {"id":"r6-e8","type":"arrange","prompt":"Ordena para código R válido","options":["df","<-","data.frame","(x=1:3,","y=4:6)"],"correctAnswer":"df <- data.frame(x=1:3, y=4:6)","explanation":"Crea un data frame con 2 columnas."}
      ]
    },
    {
      "id": "r-7",
      "track": "programming",
      "subTrack": "r",
      "title": "ggplot2",
      "description": "Gramática de gráficos para visualización de datos",
      "icon": "📈",
      "xp": 80,
      "learnCards": [
        {"id":"r7-l1","word":"ggplot()","translation":"Función base que inicia un gráfico ggplot2","example":"ggplot(data = df, aes(x = edad, y = salario))"},
        {"id":"r7-l2","word":"aes()","translation":"Mapeo estético: asigna variables a ejes, color, forma","example":"aes(x = variable_x, y = variable_y, color = grupo)"},
        {"id":"r7-l3","word":"Geoms (geometrías)","translation":"Tipo de gráfico: point, line, bar, histogram","example":"+ geom_point() # gráfico de dispersión"},
        {"id":"r7-l4","word":"Facets","translation":"Divide el gráfico en paneles por categoría","example":"+ facet_wrap(~ categoria)"}
      ],
      "exercises": [
        {"id":"r7-e1","type":"match","prompt":"Empareja con su descripción","options":["Iniciar gráfico","Mapear variables","Tipo de gráfico","Dividir en paneles"],"correctAnswer":"Iniciar gráfico","explanation":"ggplot() inicia la visualización.","promptExtra":"ggplot()"},
        {"id":"r7-e2","type":"match","prompt":"Empareja con su descripción","options":["Iniciar gráfico","Mapear variables","Tipo de gráfico","Dividir en paneles"],"correctAnswer":"Mapear variables","explanation":"aes() asigna variables a estéticas.","promptExtra":"aes()"},
        {"id":"r7-e3","type":"select","prompt":"¿Qué geometría para gráfico de barras?","options":["geom_bar()","geom_point()","geom_line()","geom_histogram()"],"correctAnswer":"geom_bar()","explanation":"geom_bar() crea barras."},
        {"id":"r7-e4","type":"select","prompt":"¿Qué hace aes(color = grupo)?","options":["Colorea por la variable grupo","Cambia el fondo","Añade una leyenda de color fijo","Rellena las barras"],"correctAnswer":"Colorea por la variable grupo","explanation":"El mapeo estético diferencia categorías."},
        {"id":"r7-e5","type":"select","prompt":"¿Para qué sirve facet_wrap()?","options":["Crear subgráficos por categoría","Envolver texto","Añadir etiquetas","Rotar el gráfico"],"correctAnswer":"Crear subgráficos por categoría","explanation":"Facets = paneles múltiples."},
        {"id":"r7-e6","type":"complete","prompt":"Completa: ___(data=df, aes(x, y)) (gráfico base)","options":["ggplot","plot","qplot","graph"],"correctAnswer":"ggplot","explanation":"ggplot() es la función principal.","promptExtra":"ggplot"},
        {"id":"r7-e7","type":"complete","prompt":"Completa: + geom___() (puntos)","options":["_point","_line","_bar","_histogram"],"correctAnswer":"_point","explanation":"geom_point() = dispersión.","promptExtra":"_point"},
        {"id":"r7-e8","type":"arrange","prompt":"Ordena para código R válido","options":["ggplot(df,","aes(x=peso,","y=altura))","+","geom_point()"],"correctAnswer":"ggplot(df, aes(x=peso, y=altura)) + geom_point()","explanation":"Gráfico de dispersión peso vs altura."}
      ]
    },
    {
      "id": "r-8",
      "track": "programming",
      "subTrack": "r",
      "title": "dplyr",
      "description": "Manipulación de datos con la gramática de dplyr",
      "icon": "🔧",
      "xp": 90,
      "learnCards": [
        {"id":"r8-l1","word":"filter()","translation":"Selecciona filas que cumplen una condición","example":"filter(df, edad > 25 & ciudad == 'Madrid')"},
        {"id":"r8-l2","word":"select()","translation":"Selecciona columnas por nombre","example":"select(df, nombre, edad)"},
        {"id":"r8-l3","word":"mutate()","translation":"Crea o modifica columnas","example":"mutate(df, imc = peso / (altura^2))"},
        {"id":"r8-l4","word":"%>% (pipe)","translation":"Encadena operaciones pasando el resultado a la siguiente","example":"df %>% filter(edad>25) %>% select(nombre)"}
      ],
      "exercises": [
        {"id":"r8-e1","type":"match","prompt":"Empareja con su descripción","options":["Filtrar filas","Seleccionar columnas","Crear columnas","Encadenar operaciones"],"correctAnswer":"Filtrar filas","explanation":"filter() reduce filas.","promptExtra":"filter()"},
        {"id":"r8-e2","type":"match","prompt":"Empareja con su descripción","options":["Filtrar filas","Seleccionar columnas","Crear columnas","Encadenar operaciones"],"correctAnswer":"Seleccionar columnas","explanation":"select() elige variables.","promptExtra":"select()"},
        {"id":"r8-e3","type":"select","prompt":"¿Qué es el pipe %>%?","options":["Pasa el resultado a la siguiente función","Cierra una tubería","Divide datos","Filtra datos"],"correctAnswer":"Pasa el resultado a la siguiente función","explanation":"%>% permite leer código de izquierda a derecha."},
        {"id":"r8-e4","type":"select","prompt":"¿Qué hace mutate()?","options":["Crear o transformar columnas","Filtrar filas","Ordenar datos","Agrupar datos"],"correctAnswer":"Crear o transformar columnas","explanation":"mutate() añade variables calculadas."},
        {"id":"r8-e5","type":"select","prompt":"¿Cómo seleccionas columnas nombre y edad?","options":["select(df, nombre, edad)","filter(df, nombre, edad)","subset(df, nombre, edad)","df[nombre, edad]"],"correctAnswer":"select(df, nombre, edad)","explanation":"select() elige columnas."},
        {"id":"r8-e6","type":"complete","prompt":"Completa: df %>% ___ (edad > 25) (filtrar)","options":["filter","select","mutate","arrange"],"correctAnswer":"filter","explanation":"filter() selecciona filas.","promptExtra":"filter"},
        {"id":"r8-e7","type":"complete","prompt":"Completa: df %>% ___ (nombre, edad) (columnas)","options":["select","filter","mutate","arrange"],"correctAnswer":"select","explanation":"select() elige columnas.","promptExtra":"select"},
        {"id":"r8-e8","type":"arrange","prompt":"Ordena para código R válido","options":["df","%>%","filter(edad>25)","%>%","select(nombre)"],"correctAnswer":"df %>% filter(edad>25) %>% select(nombre)","explanation":"Pipeline: filtra y selecciona."}
      ]
    },
    {
      "id": "r-9",
      "track": "programming",
      "subTrack": "r",
      "title": "Estadística Básica",
      "description": "Medidas descriptivas y resúmenes estadísticos en R",
      "icon": "📉",
      "xp": 90,
      "learnCards": [
        {"id":"r9-l1","word":"mean() / median()","translation":"Media aritmética y mediana de un vector","example":"mean(c(1,2,3,4,5)) # 3"},
        {"id":"r9-l2","word":"sd() / var()","translation":"Desviación estándar y varianza","example":"sd(datos) # dispersión respecto a la media"},
        {"id":"r9-l3","word":"summary()","translation":"Resumen de 5 números: min, Q1, mediana, media, Q3, max","example":"summary(df$edad)"},
        {"id":"r9-l4","word":"table()","translation":"Tabla de frecuencias para variables categóricas","example":"table(df$ciudad) # conteo por ciudad"}
      ],
      "exercises": [
        {"id":"r9-e1","type":"match","prompt":"Empareja con su descripción","options":["Media","Mediana","Desviación estándar","Frecuencias"],"correctAnswer":"Media","explanation":"mean() = promedio.","promptExtra":"mean()"},
        {"id":"r9-e2","type":"match","prompt":"Empareja con su descripción","options":["Media","Mediana","Desviación estándar","Frecuencias"],"correctAnswer":"Mediana","explanation":"median() = valor central.","promptExtra":"median()"},
        {"id":"r9-e3","type":"select","prompt":"¿Qué función da el resumen completo?","options":["summary()","mean()","table()","sd()"],"correctAnswer":"summary()","explanation":"summary() muestra min, cuartiles, media, max."},
        {"id":"r9-e4","type":"select","prompt":"¿Qué mide la desviación estándar?","options":["Dispersión de los datos","El valor central","El máximo","La frecuencia"],"correctAnswer":"Dispersión de los datos","explanation":"sd() mide cuánto se alejan los datos de la media."},
        {"id":"r9-e5","type":"select","prompt":"¿Qué hace table(df$genero)?","options":["Cuenta cuántos hay de cada género","Muestra una tabla HTML","Crea un data frame","Ordena los datos"],"correctAnswer":"Cuenta cuántos hay de cada género","explanation":"table() = frecuencias de variables categóricas."},
        {"id":"r9-e6","type":"complete","prompt":"Completa: ___(c(1,2,3)) = 2 (promedio)","options":["mean","median","sd","sum"],"correctAnswer":"mean","explanation":"mean() = media aritmética.","promptExtra":"mean"},
        {"id":"r9-e7","type":"complete","prompt":"Completa: ___(df) (resumen completo)","options":["summary","describe","str","info"],"correctAnswer":"summary","explanation":"summary() = resumen estadístico.","promptExtra":"summary"},
        {"id":"r9-e8","type":"arrange","prompt":"Ordena para código R válido","options":["resultado","<-","mean(df$edad,","na.rm=TRUE)"],"correctAnswer":"resultado <- mean(df$edad, na.rm=TRUE)","explanation":"Media ignorando valores NA."}
      ]
    },
    {
      "id": "r-10",
      "track": "programming",
      "subTrack": "r",
      "title": "Regresión Lineal",
      "description": "Modelado estadístico: relación entre variables",
      "icon": "📈",
      "xp": 90,
      "learnCards": [
        {"id":"r10-l1","word":"lm()","translation":"Ajusta un modelo de regresión lineal","example":"modelo <- lm(y ~ x, data = df)"},
        {"id":"r10-l2","word":"Fórmula y ~ x","translation":"y (dependiente) explicada por x (independiente)","example":"lm(salario ~ experiencia, data = df)"},
        {"id":"r10-l3","word":"summary(modelo)","translation":"Muestra coeficientes, R², p-valores del modelo","example":"summary(modelo) # ver resultados"},
        {"id":"r10-l4","word":"predict()","translation":"Predice valores usando el modelo ajustado","example":"predict(modelo, nuevos_datos)"}
      ],
      "exercises": [
        {"id":"r10-e1","type":"match","prompt":"Empareja con su descripción","options":["Ajustar modelo","Relación entre variables","Ver resultados","Predecir valores"],"correctAnswer":"Ajustar modelo","explanation":"lm() = linear model.","promptExtra":"lm()"},
        {"id":"r10-e2","type":"match","prompt":"Empareja con su descripción","options":["Ajustar modelo","Relación entre variables","Ver resultados","Predecir valores"],"correctAnswer":"Relación entre variables","explanation":"y ~ x define la fórmula.","promptExtra":"y ~ x"},
        {"id":"r10-e3","type":"select","prompt":"¿Qué significa R² = 0.85?","options":["El modelo explica el 85% de la variabilidad","85% de precisión","0.85 de error","Correlación de 0.85"],"correctAnswer":"El modelo explica el 85% de la variabilidad","explanation":"R² mide bondad de ajuste."},
        {"id":"r10-e4","type":"select","prompt":"¿Qué hace la función lm()?","options":["Ajusta un modelo lineal","Calcula la media","Hace un gráfico","Importa datos"],"correctAnswer":"Ajusta un modelo lineal","explanation":"lm = linear model (regresión)."},
        {"id":"r10-e5","type":"select","prompt":"¿Para qué sirve predict()?","options":["Estimar nuevos valores","Evaluar el modelo","Graficar resultados","Limpiar datos"],"correctAnswer":"Estimar nuevos valores","explanation":"predict() usa el modelo para predecir."},
        {"id":"r10-e6","type":"complete","prompt":"Completa: modelo <- ___(y ~ x, data=df)","options":["lm","glm","reg","linear"],"correctAnswer":"lm","explanation":"lm() ajusta regresión lineal.","promptExtra":"lm"},
        {"id":"r10-e7","type":"complete","prompt":"Completa: ___(modelo) (ver resultados)","options":["summary","print","show","display"],"correctAnswer":"summary","explanation":"summary() muestra los detalles del modelo.","promptExtra":"summary"},
        {"id":"r10-e8","type":"arrange","prompt":"Ordena para código R válido","options":["modelo","<-","lm(altura","~","peso,","data=df)"],"correctAnswer":"modelo <- lm(altura ~ peso, data=df)","explanation":"Regresión: altura explicada por peso."}
      ]
    },
    {
      "id": "r-11",
      "track": "programming",
      "subTrack": "r",
      "title": "Importar Datos",
      "description": "Carga datos desde CSV, Excel y otras fuentes",
      "icon": "📥",
      "xp": 100,
      "learnCards": [
        {"id":"r11-l1","word":"read.csv()","translation":"Lee archivos CSV (valores separados por coma)","example":"df <- read.csv('datos.csv')"},
        {"id":"r11-l2","word":"read_excel()","translation":"Lee archivos Excel (requiere paquete readxl)","example":"library(readxl); df <- read_excel('datos.xlsx')"},
        {"id":"r11-l3","word":"write.csv()","translation":"Guarda un data frame como archivo CSV","example":"write.csv(df, 'resultado.csv', row.names = FALSE)"},
        {"id":"r11-l4","word":"stringsAsFactors","translation":"Parámetro que controla si textos se convierten a factores","example":"read.csv('datos.csv', stringsAsFactors = FALSE)"}
      ],
      "exercises": [
        {"id":"r11-e1","type":"match","prompt":"Empareja con su descripción","options":["Leer CSV","Leer Excel","Guardar CSV","Control de factores"],"correctAnswer":"Leer CSV","explanation":"read.csv() importa CSVs.","promptExtra":"read.csv()"},
        {"id":"r11-e2","type":"match","prompt":"Empareja con su descripción","options":["Leer CSV","Leer Excel","Guardar CSV","Control de factores"],"correctAnswer":"Leer Excel","explanation":"read_excel() del paquete readxl.","promptExtra":"read_excel()"},
        {"id":"r11-e3","type":"select","prompt":"¿Qué paquete para leer archivos Excel?","options":["readxl","xlsx","excel","openxlsx"],"correctAnswer":"readxl","explanation":"readxl es el más usado para Excel."},
        {"id":"r11-e4","type":"select","prompt":"¿Para qué sirve stringsAsFactors = FALSE?","options":["Evitar que texto se convierta a factor","Acelerar la lectura","Ordenar strings","Filtrar NA"],"correctAnswer":"Evitar que texto se convierta a factor","explanation":"En R moderno es FALSE por defecto."},
        {"id":"r11-e5","type":"select","prompt":"¿Cómo guardas sin números de fila?","options":["row.names = FALSE","index = FALSE","no.rownames = TRUE","skip.rows = TRUE"],"correctAnswer":"row.names = FALSE","explanation":"Evita exportar el índice de filas."},
        {"id":"r11-e6","type":"complete","prompt":"Completa: df <- ___.csv('datos.csv')","options":["read","load","import","open"],"correctAnswer":"read","explanation":"read.csv() es la función base.","promptExtra":"read"},
        {"id":"r11-e7","type":"complete","prompt":"Completa: ___(df, 'output.csv') (guardar)","options":["write.csv","save.csv","export.csv","write_csv"],"correctAnswer":"write.csv","explanation":"write.csv() exporta data frames.","promptExtra":"write.csv"},
        {"id":"r11-e8","type":"arrange","prompt":"Ordena para código R válido","options":["datos","<-","read.csv('file.csv',","stringsAsFactors=FALSE)"],"correctAnswer":"datos <- read.csv('file.csv', stringsAsFactors=FALSE)","explanation":"Importa CSV manteniendo texto como string."}
      ]
    },
    {
      "id": "r-12",
      "track": "programming",
      "subTrack": "r",
      "title": "Estadística Avanzada",
      "description": "Pruebas de hipótesis y análisis de varianza",
      "icon": "🔬",
      "xp": 100,
      "learnCards": [
        {"id":"r12-l1","word":"t.test()","translation":"Prueba t: compara medias de dos grupos","example":"t.test(valor ~ grupo, data = df)"},
        {"id":"r12-l2","word":"aov()","translation":"ANOVA: compara medias de múltiples grupos","example":"aov(valor ~ grupo, data = df)"},
        {"id":"r12-l3","word":"cor()","translation":"Calcula la correlación entre dos variables","example":"cor(df$x, df$y) # entre -1 y 1"},
        {"id":"r12-l4","word":"chisq.test()","translation":"Prueba chi-cuadrado para variables categóricas","example":"chisq.test(table(df$genero, df$preferencia))"}
      ],
      "exercises": [
        {"id":"r12-e1","type":"match","prompt":"Empareja con su descripción","options":["Comparar 2 grupos","Comparar 3+ grupos","Correlación","Variables categóricas"],"correctAnswer":"Comparar 2 grupos","explanation":"t.test() = prueba t de Student.","promptExtra":"t.test()"},
        {"id":"r12-e2","type":"match","prompt":"Empareja con su descripción","options":["Comparar 2 grupos","Comparar 3+ grupos","Correlación","Variables categóricas"],"correctAnswer":"Comparar 3+ grupos","explanation":"aov() = análisis de varianza.","promptExtra":"aov()"},
        {"id":"r12-e3","type":"select","prompt":"¿Qué valor de correlación indica relación perfecta?","options":["1 o -1","0","0.5","100"],"correctAnswer":"1 o -1","explanation":"cor() devuelve valores entre -1 y 1."},
        {"id":"r12-e4","type":"select","prompt":"¿Qué prueba usas para tablas de contingencia?","options":["chisq.test()","t.test()","aov()","cor()"],"correctAnswer":"chisq.test()","explanation":"Chi-cuadrado analiza asociación categórica."},
        {"id":"r12-e5","type":"select","prompt":"¿Qué significa un p-valor < 0.05?","options":["Diferencia estadísticamente significativa","No hay diferencia","Error en los datos","Correlación perfecta"],"correctAnswer":"Diferencia estadísticamente significativa","explanation":"p < 0.05 = se rechaza hipótesis nula."},
        {"id":"r12-e6","type":"complete","prompt":"Completa: ___(df$x, df$y) (correlación)","options":["cor","t.test","aov","cov"],"correctAnswer":"cor","explanation":"cor() calcula coeficiente de correlación.","promptExtra":"cor"},
        {"id":"r12-e7","type":"complete","prompt":"Completa: ___(valor ~ grupo, data=df) (ANOVA)","options":["aov","anova","lm","t.test"],"correctAnswer":"aov","explanation":"aov() = analysis of variance.","promptExtra":"aov"},
        {"id":"r12-e8","type":"arrange","prompt":"Ordena para código R válido","options":["resultado","<-","t.test(peso","~","genero,","data=df)"],"correctAnswer":"resultado <- t.test(peso ~ genero, data=df)","explanation":"Prueba t comparando peso por género."}
      ]
    }
  ];
const cookingFundamentalsLessons: Lesson[] = [
    {
      "id": "fundamentals-1",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Mise en place",
      "description": "La preparación antes de cocinar",
      "icon": "🔪",
      "xp": 30,
      "learnCards": [
        {
          "id": "cf1-l1",
          "word": "Mise en place",
          "translation": "Tener todos los ingredientes medidos, cortados y listos antes de cocinar",
          "note": "Del francés: 'puesto en su lugar'"
        },
        {
          "id": "cf1-l2",
          "word": "Preparación previa",
          "translation": "Lavar, pelar, cortar y medir todo antes de encender el fuego",
          "example": "Pica la cebolla, mide el arroz, ten el caldo listo."
        },
        {
          "id": "cf1-l3",
          "word": "Organización",
          "translation": "Colocar los ingredientes en orden de uso, de izquierda a derecha",
          "note": "Los chefs profesionales trabajan así."
        },
        {
          "id": "cf1-l4",
          "word": "Beneficios",
          "translation": "Reduce estrés, evita errores, cocinas más rápido y seguro",
          "example": "No quemarás el ajo mientras buscas la sal."
        }
      ],
      "exercises": [
        {
          "id": "cf1-e1",
          "type": "match",
          "prompt": "Empareja con su definición",
          "options": [
            "Todo listo antes de cocinar",
            "Técnica de corte",
            "Temperatura de cocción",
            "Tipo de salsa"
          ],
          "correctAnswer": "Todo listo antes de cocinar",
          "explanation": "Mise en place significa preparar todo previamente.",
          "promptExtra": "Mise en place"
        },
        {
          "id": "cf1-e2",
          "type": "match",
          "prompt": "Empareja con su definición",
          "options": [
            "Ingredientes en orden de uso",
            "Lavar los platos",
            "Servir la mesa",
            "Apagar el fuego"
          ],
          "correctAnswer": "Ingredientes en orden de uso",
          "explanation": "Organizar en secuencia agiliza la cocción.",
          "promptExtra": "Organización"
        },
        {
          "id": "cf1-e3",
          "type": "select",
          "prompt": "¿Qué significa 'mise en place'?",
          "options": [
            "Todo en su lugar",
            "Cocinar a fuego alto",
            "Servir el plato",
            "Mezclar ingredientes"
          ],
          "correctAnswer": "Todo en su lugar",
          "explanation": "Del francés: 'mise' (puesto) 'en place' (en lugar)."
        },
        {
          "id": "cf1-e4",
          "type": "select",
          "prompt": "¿Cuándo debes picar la cebolla?",
          "options": [
            "Antes de encender el fuego",
            "Mientras se cocina la carne",
            "Después de servir",
            "Cuando hierva el agua"
          ],
          "correctAnswer": "Antes de encender el fuego",
          "explanation": "Todo debe estar listo antes de empezar a cocinar."
        },
        {
          "id": "cf1-e5",
          "type": "select",
          "prompt": "¿Cuál es un beneficio del mise en place?",
          "options": [
            "Reduce el estrés al cocinar",
            "La comida sabe más dulce",
            "Usas menos ingredientes",
            "El horno calienta más rápido"
          ],
          "correctAnswer": "Reduce el estrés al cocinar",
          "explanation": "Tener todo listo evita prisas y errores."
        },
        {
          "id": "cf1-e6",
          "type": "complete",
          "prompt": "Completa: Mise en ___ (preparación previa)",
          "options": [
            "place",
            "plato",
            "cocina",
            "orden"
          ],
          "correctAnswer": "place",
          "explanation": "Mise en place = todo en su lugar.",
          "promptExtra": "place"
        },
        {
          "id": "cf1-e7",
          "type": "complete",
          "prompt": "Completa: ___ todos los ingredientes antes de cocinar",
          "options": [
            "Prepara",
            "Cocina",
            "Sirve",
            "Mezcla"
          ],
          "correctAnswer": "Prepara",
          "explanation": "La preparación es el primer paso fundamental.",
          "promptExtra": "Prepara"
        },
        {
          "id": "cf1-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos",
          "options": [
            "Preparar",
            "Medir",
            "Cortar",
            "Cocinar"
          ],
          "correctAnswer": "Preparar Medir Cortar Cocinar",
          "explanation": "El orden lógico: preparar, medir, cortar, y finalmente cocinar."
        }
      ]
    },
    {
      "id": "fundamentals-2",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Tipos de corte",
      "description": "Cortes básicos: brunoise, juliana, mirepoix",
      "icon": "🥕",
      "xp": 40,
      "learnCards": [
        {
          "id": "cf2-l1",
          "word": "Brunoise",
          "translation": "Corte en cubos pequeños de 2-3 mm por lado",
          "example": "Se usa para salsas y guarniciones finas."
        },
        {
          "id": "cf2-l2",
          "word": "Juliana",
          "translation": "Corte en tiras finas de 4-5 cm de largo",
          "example": "Ideal para salteados y ensaladas."
        },
        {
          "id": "cf2-l3",
          "word": "Mirepoix",
          "translation": "Corte grueso de verduras (cebolla, zanahoria, apio) para fondos",
          "example": "Base aromática de muchos caldos y salsas."
        },
        {
          "id": "cf2-l4",
          "word": "Chiffonade",
          "translation": "Corte en tiras finas de hojas verdes enrolladas",
          "example": "Se usa para albahaca, espinaca, lechuga."
        }
      ],
      "exercises": [
        {
          "id": "cf2-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Cubos pequeños de 2-3 mm",
            "Tiras finas de 5 cm",
            "Corte grueso para fondos",
            "Tiras de hojas enrolladas"
          ],
          "correctAnswer": "Cubos pequeños de 2-3 mm",
          "explanation": "Brunoise son cubos diminutos y uniformes.",
          "promptExtra": "Brunoise"
        },
        {
          "id": "cf2-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Cubos pequeños de 2-3 mm",
            "Tiras finas de 5 cm",
            "Corte grueso para fondos",
            "Tiras de hojas enrolladas"
          ],
          "correctAnswer": "Tiras finas de 5 cm",
          "explanation": "Juliana son bastones finos y alargados.",
          "promptExtra": "Juliana"
        },
        {
          "id": "cf2-e3",
          "type": "select",
          "prompt": "¿Qué corte produce cubos muy pequeños?",
          "options": [
            "Brunoise",
            "Juliana",
            "Mirepoix",
            "Chiffonade"
          ],
          "correctAnswer": "Brunoise",
          "explanation": "Brunoise = cubos de ~3 mm."
        },
        {
          "id": "cf2-e4",
          "type": "select",
          "prompt": "¿Qué corte se usa para hojas verdes?",
          "options": [
            "Chiffonade",
            "Brunoise",
            "Juliana",
            "Mirepoix"
          ],
          "correctAnswer": "Chiffonade",
          "explanation": "Chiffonade: se enrollan las hojas y se cortan en tiras."
        },
        {
          "id": "cf2-e5",
          "type": "select",
          "prompt": "¿Qué es un mirepoix?",
          "options": [
            "Base aromática de verduras",
            "Un tipo de sartén",
            "Una salsa francesa",
            "Un postre"
          ],
          "correctAnswer": "Base aromática de verduras",
          "explanation": "Mirepoix = cebolla, zanahoria y apio picados."
        },
        {
          "id": "cf2-e6",
          "type": "complete",
          "prompt": "Completa: El corte ___ produce tiras finas alargadas",
          "options": [
            "juliana",
            "brunoise",
            "mirepoix",
            "chiffonade"
          ],
          "correctAnswer": "juliana",
          "explanation": "La juliana son bastones finos.",
          "promptExtra": "juliana"
        },
        {
          "id": "cf2-e7",
          "type": "complete",
          "prompt": "Completa: ___ se hace enrollando hojas y cortando fino",
          "options": [
            "Chiffonade",
            "Brunoise",
            "Juliana",
            "Mirepoix"
          ],
          "correctAnswer": "Chiffonade",
          "explanation": "Chiffonade es el corte para hojas.",
          "promptExtra": "Chiffonade"
        },
        {
          "id": "cf2-e8",
          "type": "arrange",
          "prompt": "Ordena de menor a mayor tamaño de corte",
          "options": [
            "Brunoise",
            "Juliana",
            "Mirepoix",
            "Chiffonade"
          ],
          "correctAnswer": "Brunoise Juliana Mirepoix Chiffonade",
          "explanation": "Orden aproximado por tamaño del corte."
        }
      ]
    },
    {
      "id": "fundamentals-3",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Temperaturas",
      "description": "Control de calor: bajo, medio, alto y horno",
      "icon": "🔥",
      "xp": 50,
      "learnCards": [
        {
          "id": "cf3-l1",
          "word": "Fuego bajo",
          "translation": "Temperatura suave (60-90 °C), ideal para guisos largos y derretir",
          "example": "Derretir chocolate o mantequilla sin quemar."
        },
        {
          "id": "cf3-l2",
          "word": "Fuego medio",
          "translation": "Temperatura moderada (120-180 °C), para saltear y sofreír",
          "example": "Sofreír cebolla hasta que esté transparente."
        },
        {
          "id": "cf3-l3",
          "word": "Fuego alto",
          "translation": "Temperatura máxima (200+ °C), para sellar carnes y hervir",
          "example": "Sellar un filete para que quede dorado por fuera."
        },
        {
          "id": "cf3-l4",
          "word": "Horno",
          "translation": "Temperaturas: suave (150 °C), media (180 °C), fuerte (200+ °C)",
          "example": "Galletas a 180 °C, pizza a 220 °C."
        }
      ],
      "exercises": [
        {
          "id": "cf3-e1",
          "type": "match",
          "prompt": "Empareja con su uso",
          "options": [
            "Derretir chocolate",
            "Sofreír cebolla",
            "Sellar carne",
            "Hornear pizza"
          ],
          "correctAnswer": "Derretir chocolate",
          "explanation": "Fuego bajo evita quemar ingredientes delicados.",
          "promptExtra": "Fuego bajo"
        },
        {
          "id": "cf3-e2",
          "type": "match",
          "prompt": "Empareja con su uso",
          "options": [
            "Derretir chocolate",
            "Sofreír cebolla",
            "Sellar carne",
            "Hornear galletas"
          ],
          "correctAnswer": "Sellar carne",
          "explanation": "Fuego alto sella la superficie rápido.",
          "promptExtra": "Fuego alto"
        },
        {
          "id": "cf3-e3",
          "type": "select",
          "prompt": "¿A qué temperatura hierve el agua?",
          "options": [
            "100 °C",
            "90 °C",
            "110 °C",
            "80 °C"
          ],
          "correctAnswer": "100 °C",
          "explanation": "El agua hierve a 100 °C al nivel del mar."
        },
        {
          "id": "cf3-e4",
          "type": "select",
          "prompt": "¿Para qué se usa el fuego medio?",
          "options": [
            "Sofreír verduras",
            "Derretir chocolate",
            "Hervir agua rápido",
            "Sellar carne"
          ],
          "correctAnswer": "Sofreír verduras",
          "explanation": "Fuego medio es ideal para sofreír sin quemar."
        },
        {
          "id": "cf3-e5",
          "type": "select",
          "prompt": "¿Qué temperatura de horno para pizza?",
          "options": [
            "220 °C",
            "150 °C",
            "180 °C",
            "100 °C"
          ],
          "correctAnswer": "220 °C",
          "explanation": "La pizza necesita horno muy caliente."
        },
        {
          "id": "cf3-e6",
          "type": "complete",
          "prompt": "Completa: Para ___ chocolate usa fuego bajo",
          "options": [
            "derretir",
            "hervir",
            "sellar",
            "freír"
          ],
          "correctAnswer": "derretir",
          "explanation": "El chocolate se quema fácil, necesita calor suave.",
          "promptExtra": "derretir"
        },
        {
          "id": "cf3-e7",
          "type": "complete",
          "prompt": "Completa: El horno a ___ °C es temperatura media",
          "options": [
            "180",
            "100",
            "220",
            "250"
          ],
          "correctAnswer": "180",
          "explanation": "180 °C es la temperatura estándar para hornear.",
          "promptExtra": "180"
        },
        {
          "id": "cf3-e8",
          "type": "arrange",
          "prompt": "Ordena de menor a mayor temperatura",
          "options": [
            "Bajo",
            "Medio",
            "Alto",
            "Horno"
          ],
          "correctAnswer": "Bajo Medio Alto Horno",
          "explanation": "Orden general de temperaturas de cocción."
        }
      ]
    },
    {
      "id": "fundamentals-4",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Métodos de cocción",
      "description": "Hervir, freír, hornear, vapor",
      "icon": "🍳",
      "xp": 60,
      "learnCards": [
        {
          "id": "cf4-l1",
          "word": "Hervir",
          "translation": "Cocinar en agua o caldo a 100 °C",
          "example": "Pasta, arroz, huevos duros."
        },
        {
          "id": "cf4-l2",
          "word": "Saltear",
          "translation": "Cocinar rápido a fuego alto con poco aceite, moviendo constantemente",
          "example": "Verduras en wok, carne en tiras."
        },
        {
          "id": "cf4-l3",
          "word": "Hornear",
          "translation": "Cocinar con calor seco envolvente en el horno",
          "example": "Pan, pasteles, carnes asadas."
        },
        {
          "id": "cf4-l4",
          "word": "Vapor",
          "translation": "Cocinar con el vapor de agua hirviendo, sin sumergir",
          "example": "Brócoli, pescado, dim sum."
        }
      ],
      "exercises": [
        {
          "id": "cf4-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Fuego alto con poco aceite moviendo",
            "Agua a 100 °C",
            "Calor seco en horno",
            "Vapor de agua"
          ],
          "correctAnswer": "Fuego alto con poco aceite moviendo",
          "explanation": "Saltear = cocción rápida agitando.",
          "promptExtra": "Saltear"
        },
        {
          "id": "cf4-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Fuego alto con poco aceite moviendo",
            "Agua a 100 °C",
            "Calor seco en horno",
            "Vapor de agua"
          ],
          "correctAnswer": "Vapor de agua",
          "explanation": "Cocción al vapor preserva nutrientes.",
          "promptExtra": "Vapor"
        },
        {
          "id": "cf4-e3",
          "type": "select",
          "prompt": "¿Qué método usa agua a 100 °C?",
          "options": [
            "Hervir",
            "Saltear",
            "Hornear",
            "Vapor"
          ],
          "correctAnswer": "Hervir",
          "explanation": "Hervir sumerge el alimento en agua hirviendo."
        },
        {
          "id": "cf4-e4",
          "type": "select",
          "prompt": "¿Cuál es el método más saludable?",
          "options": [
            "Vapor",
            "Freír",
            "Hervir",
            "Hornear"
          ],
          "correctAnswer": "Vapor",
          "explanation": "El vapor conserva más vitaminas y no necesita aceite."
        },
        {
          "id": "cf4-e5",
          "type": "select",
          "prompt": "¿Qué método se usa para hacer pan?",
          "options": [
            "Hornear",
            "Hervir",
            "Saltear",
            "Vapor"
          ],
          "correctAnswer": "Hornear",
          "explanation": "El pan se hornea con calor seco."
        },
        {
          "id": "cf4-e6",
          "type": "complete",
          "prompt": "Completa: Para cocinar pasta se necesita ___ agua",
          "options": [
            "hervir",
            "saltear",
            "hornear",
            "vapor"
          ],
          "correctAnswer": "hervir",
          "explanation": "La pasta se cocina en agua hirviendo.",
          "promptExtra": "hervir"
        },
        {
          "id": "cf4-e7",
          "type": "complete",
          "prompt": "Completa: ___ es cocinar a fuego alto con poco aceite",
          "options": [
            "Saltear",
            "Hervir",
            "Hornear",
            "Freír"
          ],
          "correctAnswer": "Saltear",
          "explanation": "Saltear = cocción rápida en sartén.",
          "promptExtra": "Saltear"
        },
        {
          "id": "cf4-e8",
          "type": "arrange",
          "prompt": "Ordena las palabras",
          "options": [
            "Cocinar",
            "al",
            "vapor",
            "verduras"
          ],
          "correctAnswer": "Cocinar al vapor verduras",
          "explanation": "Frase: cocinar verduras al vapor."
        }
      ]
    },
    {
      "id": "fundamentals-5",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Salsas madre",
      "description": "Las 5 salsas base de la cocina clásica",
      "icon": "🥣",
      "xp": 70,
      "learnCards": [
        {
          "id": "cf5-l1",
          "word": "Bechamel",
          "translation": "Salsa blanca: roux (mantequilla + harina) + leche",
          "example": "Base para croquetas y lasaña."
        },
        {
          "id": "cf5-l2",
          "word": "Velouté",
          "translation": "Roux claro + caldo (pollo, pescado o verduras)",
          "example": "Base para sopas cremosas."
        },
        {
          "id": "cf5-l3",
          "word": "Española",
          "translation": "Roux oscuro + caldo de carne + tomate",
          "example": "Base para demi-glace."
        },
        {
          "id": "cf5-l4",
          "word": "Tomate",
          "translation": "Tomate + verduras + hierbas, cocinada a fuego lento",
          "example": "Base para pasta y pizzas."
        }
      ],
      "exercises": [
        {
          "id": "cf5-e1",
          "type": "match",
          "prompt": "Empareja con su composición",
          "options": [
            "Roux + leche",
            "Roux + caldo",
            "Roux oscuro + carne",
            "Tomate + verduras"
          ],
          "correctAnswer": "Roux + leche",
          "explanation": "Bechamel = roux blanco + leche.",
          "promptExtra": "Bechamel"
        },
        {
          "id": "cf5-e2",
          "type": "match",
          "prompt": "Empareja con su composición",
          "options": [
            "Roux + leche",
            "Roux + caldo",
            "Roux oscuro + carne",
            "Tomate + verduras"
          ],
          "correctAnswer": "Roux + caldo",
          "explanation": "Velouté = roux claro + caldo.",
          "promptExtra": "Velouté"
        },
        {
          "id": "cf5-e3",
          "type": "select",
          "prompt": "¿Qué es un roux?",
          "options": [
            "Mezcla de mantequilla y harina cocinadas",
            "Un tipo de carne",
            "Una verdura",
            "Un utensilio de cocina"
          ],
          "correctAnswer": "Mezcla de mantequilla y harina cocinadas",
          "explanation": "El roux es la base espesante de muchas salsas."
        },
        {
          "id": "cf5-e4",
          "type": "select",
          "prompt": "¿Qué salsa usa leche?",
          "options": [
            "Bechamel",
            "Velouté",
            "Española",
            "Tomate"
          ],
          "correctAnswer": "Bechamel",
          "explanation": "La bechamel es la salsa blanca con leche."
        },
        {
          "id": "cf5-e5",
          "type": "select",
          "prompt": "¿Qué salsa se hace con tomate?",
          "options": [
            "Salsa de tomate",
            "Bechamel",
            "Velouté",
            "Española"
          ],
          "correctAnswer": "Salsa de tomate",
          "explanation": "La salsa de tomate es una de las 5 madres."
        },
        {
          "id": "cf5-e6",
          "type": "complete",
          "prompt": "Completa: Roux = mantequilla + ___",
          "options": [
            "harina",
            "leche",
            "agua",
            "aceite"
          ],
          "correctAnswer": "harina",
          "explanation": "El roux se hace con mantequilla y harina.",
          "promptExtra": "harina"
        },
        {
          "id": "cf5-e7",
          "type": "complete",
          "prompt": "Completa: Bechamel = ___ + leche",
          "options": [
            "roux",
            "agua",
            "caldo",
            "tomate"
          ],
          "correctAnswer": "roux",
          "explanation": "Bechamel = roux blanco + leche.",
          "promptExtra": "roux"
        },
        {
          "id": "cf5-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos para hacer bechamel",
          "options": [
            "Derretir",
            "mantequilla",
            "Añadir",
            "harina"
          ],
          "correctAnswer": "Derretir mantequilla Añadir harina",
          "explanation": "Primero se derrite la mantequilla, luego la harina."
        }
      ]
    },
    {
      "id": "fundamentals-6",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Técnicas de Cocción II",
      "description": "Brasear, estofar, cocer al vapor y confitar",
      "icon": "🍲",
      "xp": 80,
      "learnCards": [
        {"id":"cf6-l1","word":"Brasear","translation":"Cocción lenta con poco líquido en olla tapada","example":"Brasear carne en vino tinto por 3 horas."},
        {"id":"cf6-l2","word":"Estofar","translation":"Cocinar en líquido abundante a fuego bajo","example":"Estofado de ternera con verduras."},
        {"id":"cf6-l3","word":"Cocción al vapor","translation":"Cocinar con vapor de agua, sin inmersión","example":"Brócoli al vapor para conservar nutrientes."},
        {"id":"cf6-l4","word":"Confitar","translation":"Cocinar sumergido en grasa a baja temperatura","example":"Confit de pato en su propia grasa."}
      ],
      "exercises": [
        {"id":"cf6-e1","type":"match","prompt":"Empareja la técnica con su descripción","options":["Cocción lenta con poco líquido","Cocción con mucho líquido","Cocción con vapor","Cocción en grasa"],"correctAnswer":"Cocción lenta con poco líquido","explanation":"Brasear = cocción lenta, tapado.","promptExtra":"Brasear"},
        {"id":"cf6-e2","type":"match","prompt":"Empareja la técnica con su descripción","options":["Cocción lenta con poco líquido","Cocción con mucho líquido","Cocción con vapor","Cocción en grasa"],"correctAnswer":"Cocción con mucho líquido","explanation":"Estofar usa abundante líquido.","promptExtra":"Estofar"},
        {"id":"cf6-e3","type":"select","prompt":"¿Qué técnica conserva más nutrientes?","options":["Cocción al vapor","Hervir","Freír","Brasear"],"correctAnswer":"Cocción al vapor","explanation":"El vapor preserva vitaminas hidrosolubles."},
        {"id":"cf6-e4","type":"select","prompt":"¿Qué temperatura para confitar?","options":["Baja (60-85°C)","Alta (180°C+)","Media (150°C)","Muy alta (220°C+)"],"correctAnswer":"Baja (60-85°C)","explanation":"Confitar usa temperatura baja controlada."},
        {"id":"cf6-e5","type":"select","prompt":"¿Qué diferencia brasear de estofar?","options":["Brasear usa menos líquido","Brasear es más rápido","Estofar no lleva líquido","Son iguales"],"correctAnswer":"Brasear usa menos líquido","explanation":"Brasear: poco líquido y tapado."},
        {"id":"cf6-e6","type":"complete","prompt":"Completa: Cocción al ___ (sin inmersión)","options":["vapor","agua","fuego","horno"],"correctAnswer":"vapor","explanation":"El vapor cocina sin sumergir.","promptExtra":"vapor"},
        {"id":"cf6-e7","type":"complete","prompt":"Completa: ___ = cocción lenta, tapado","options":["Brasear","Freír","Hervir","Asar"],"correctAnswer":"Brasear","explanation":"Brasear: carnes duras se ablandan.","promptExtra":"Brasear"},
        {"id":"cf6-e8","type":"arrange","prompt":"Ordena: pasos para brasear carne","options":["Sellar","la carne","Añadir","líquido","Cocinar","tapado"],"correctAnswer":"Sellar la carne Añadir líquido Cocinar tapado","explanation":"Secuencia básica del braseado."}
      ]
    },
    {
      "id": "fundamentals-7",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Seguridad Alimentaria",
      "description": "Normas de higiene y prevención de contaminación",
      "icon": "🛡️",
      "xp": 80,
      "learnCards": [
        {"id":"cf7-l1","word":"Zona de peligro","translation":"4°C a 60°C: rango donde bacterias proliferan","example":"No dejar comida más de 2 horas a temperatura ambiente."},
        {"id":"cf7-l2","word":"Contaminación cruzada","translation":"Transferencia de bacterias entre alimentos","example":"Usar tabla diferente para carne cruda y verduras."},
        {"id":"cf7-l3","word":"Temperaturas seguras","translation":"Pollo 74°C, cerdo 63°C, pescado 63°C interno","example":"Usar termómetro de cocina para verificar."},
        {"id":"cf7-l4","word":"Lavado de manos","translation":"20 segundos con jabón antes y durante la cocción","example":"Especialmente tras tocar carne cruda."}
      ],
      "exercises": [
        {"id":"cf7-e1","type":"match","prompt":"Empareja con su descripción","options":["4-60°C, peligro bacteriano","Transferencia de bacterias","Temp interna segura","Higiene básica"],"correctAnswer":"4-60°C, peligro bacteriano","explanation":"En esa zona las bacterias crecen rápido.","promptExtra":"Zona de peligro"},
        {"id":"cf7-e2","type":"match","prompt":"Empareja con su descripción","options":["4-60°C, peligro bacteriano","Transferencia de bacterias","Temp interna segura","Higiene básica"],"correctAnswer":"Transferencia de bacterias","explanation":"Contaminación cruzada = bacterias pasan de un alimento a otro.","promptExtra":"Contaminación cruzada"},
        {"id":"cf7-e3","type":"select","prompt":"¿Temperatura interna segura para pollo?","options":["74°C","60°C","50°C","100°C"],"correctAnswer":"74°C","explanation":"El pollo debe alcanzar 74°C interno."},
        {"id":"cf7-e4","type":"select","prompt":"¿Cuánto tiempo lavarse las manos?","options":["20 segundos","5 segundos","1 minuto","No es necesario"],"correctAnswer":"20 segundos","explanation":"20 segundos eliminan la mayoría de bacterias."},
        {"id":"cf7-e5","type":"select","prompt":"¿Qué es contaminación cruzada?","options":["Usar mismo utensilio para crudo y cocido","Cocinar a temperatura incorrecta","No lavar verduras","Quemar la comida"],"correctAnswer":"Usar mismo utensilio para crudo y cocido","explanation":"Las bacterias pasan de un alimento a otro."},
        {"id":"cf7-e6","type":"complete","prompt":"Completa: Zona de peligro: ___°C a 60°C","options":["4","0","10","20"],"correctAnswer":"4","explanation":"De 4°C a 60°C las bacterias proliferan.","promptExtra":"4"},
        {"id":"cf7-e7","type":"complete","prompt":"Completa: Usar ___ para verificar temperatura interna","options":["termómetro","temporizador","microondas","cuchara"],"correctAnswer":"termómetro","explanation":"El termómetro garantiza cocción segura.","promptExtra":"termómetro"},
        {"id":"cf7-e8","type":"arrange","prompt":"Ordena los pasos de higiene","options":["Lavar","manos","Limpiar","superficies","Separar","crudos"],"correctAnswer":"Lavar manos Limpiar superficies Separar crudos","explanation":"Los 3 pilares de la seguridad alimentaria."}
      ]
    },
    {
      "id": "fundamentals-8",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Planificación de Menú",
      "description": "Cómo diseñar un menú equilibrado y eficiente",
      "icon": "📅",
      "xp": 80,
      "learnCards": [
        {"id":"cf8-l1","word":"Balance del plato","translation":"50% verduras, 25% proteína, 25% carbohidratos","example":"Guía del plato saludable de Harvard."},
        {"id":"cf8-l2","word":"Variedad de texturas","translation":"Crujiente, cremoso, tierno en un mismo plato","example":"Pollo crujiente + puré cremoso + verduras al dente."},
        {"id":"cf8-l3","word":"Secuenciación","translation":"Organizar preparación para servir todo caliente","example":"Empezar por lo que más tarda en cocinarse."},
        {"id":"cf8-l4","word":"Aprovechamiento","translation":"Usar sobras e ingredientes en múltiples platos","example":"Caldo de pollo → risotto, sopa o salsa."}
      ],
      "exercises": [
        {"id":"cf8-e1","type":"match","prompt":"Empareja con su descripción","options":["Mitad verduras, 25% proteína","Texturas variadas","Coordinar tiempos","Reutilizar ingredientes"],"correctAnswer":"Mitad verduras, 25% proteína","explanation":"El plato balanceado prioriza vegetales.","promptExtra":"Balance del plato"},
        {"id":"cf8-e2","type":"match","prompt":"Empareja con su descripción","options":["Mitad verduras, 25% proteína","Texturas variadas","Coordinar tiempos","Reutilizar ingredientes"],"correctAnswer":"Texturas variadas","explanation":"Contraste de texturas mejora la experiencia.","promptExtra":"Texturas"},
        {"id":"cf8-e3","type":"select","prompt":"¿Qué se cocina primero en un menú?","options":["Lo que más tarda","Lo más rápido","La guarnición","El postre"],"correctAnswer":"Lo que más tarda","explanation":"Planificar por tiempo de cocción."},
        {"id":"cf8-e4","type":"select","prompt":"¿Qué porcentaje de verduras en plato balanceado?","options":["50%","25%","75%","10%"],"correctAnswer":"50%","explanation":"La mitad del plato debe ser vegetal."},
        {"id":"cf8-e5","type":"select","prompt":"¿Qué es aprovechamiento en cocina?","options":["Usar ingredientes en varios platos","Tirar las sobras","Comprar solo caro","Cocinar de más"],"correctAnswer":"Usar ingredientes en varios platos","explanation":"Reduce desperdicio y costos."},
        {"id":"cf8-e6","type":"complete","prompt":"Completa: Planificar por ___ de cocción","options":["tiempos","colores","precios","nombres"],"correctAnswer":"tiempos","explanation":"Organizar según duración de cocción.","promptExtra":"tiempos"},
        {"id":"cf8-e7","type":"complete","prompt":"Completa: El plato balanceado: 50% ___","options":["verduras","proteína","carbohidratos","fruta"],"correctAnswer":"verduras","explanation":"Las verduras son la base del plato."},
        {"id":"cf8-e8","type":"arrange","prompt":"Ordena: secuencia lógica de preparación","options":["Proteína","(más","tarda)","Verduras","Guarnición"],"correctAnswer":"Proteína (más tarda) Verduras Guarnición","explanation":"Empezar por lo que más tiempo necesita."}
      ]
    },
    {
      "id": "fundamentals-9",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Nutrición Básica",
      "description": "Macronutrientes y micronutrientes en la cocina",
      "icon": "🥗",
      "xp": 90,
      "learnCards": [
        {"id":"cf9-l1","word":"Proteínas","translation":"Construyen y reparan tejidos: carne, huevos, legumbres","example":"1g por kg de peso corporal al día."},
        {"id":"cf9-l2","word":"Carbohidratos","translation":"Fuente principal de energía: arroz, pasta, pan","example":"Prefiere integrales para fibra."},
        {"id":"cf9-l3","word":"Grasas saludables","translation":"Aceite de oliva, aguacate, frutos secos, pescado azul","example":"Omega-3: antiinflamatorio natural."},
        {"id":"cf9-l4","word":"Micronutrientes","translation":"Vitaminas y minerales: esenciales en pequeñas cantidades","example":"Hierro (espinacas), calcio (lácteos), vitamina C (cítricos)."}
      ],
      "exercises": [
        {"id":"cf9-e1","type":"match","prompt":"Empareja con su descripción","options":["Construyen tejidos","Fuente de energía","Omega-3, oliva","Vitaminas y minerales"],"correctAnswer":"Construyen tejidos","explanation":"Las proteínas reparan el cuerpo.","promptExtra":"Proteínas"},
        {"id":"cf9-e2","type":"match","prompt":"Empareja con su descripción","options":["Construyen tejidos","Fuente de energía","Omega-3, oliva","Vitaminas y minerales"],"correctAnswer":"Fuente de energía","explanation":"Carbohidratos = combustible principal.","promptExtra":"Carbohidratos"},
        {"id":"cf9-e3","type":"select","prompt":"¿Ejemplo de grasa saludable?","options":["Aceite de oliva","Mantequilla","Manteca","Margarina"],"correctAnswer":"Aceite de oliva","explanation":"Rico en ácidos grasos monoinsaturados."},
        {"id":"cf9-e4","type":"select","prompt":"¿Qué alimento es rico en hierro?","options":["Espinacas","Arroz blanco","Azúcar","Agua"],"correctAnswer":"Espinacas","explanation":"Las espinacas y legumbres aportan hierro."},
        {"id":"cf9-e5","type":"select","prompt":"¿Qué son los micronutrientes?","options":["Vitaminas y minerales","Proteínas y grasas","Carbohidratos","Fibra y agua"],"correctAnswer":"Vitaminas y minerales","explanation":"Se necesitan en cantidades pequeñas."},
        {"id":"cf9-e6","type":"complete","prompt":"Completa: Los ___ son fuente de energía","options":["carbohidratos","micronutrientes","minerales","enzimas"],"correctAnswer":"carbohidratos","explanation":"Carbohidratos = 4 calorías por gramo."},
        {"id":"cf9-e7","type":"complete","prompt":"Completa: Omega-3 se encuentra en pescado ___","options":["azul","blanco","rojo","seco"],"correctAnswer":"azul","explanation":"Salmón, atún, sardinas = omega-3."},
        {"id":"cf9-e8","type":"arrange","prompt":"Ordena: macronutrientes principales","options":["Proteínas","Carbohidratos","Grasas"],"correctAnswer":"Proteínas Carbohidratos Grasas","explanation":"Los 3 macronutrientes esenciales."}
      ]
    },
    {
      "id": "fundamentals-10",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Equipo de Cocina",
      "description": "Utensilios y herramientas esenciales",
      "icon": "🔧",
      "xp": 90,
      "learnCards": [
        {"id":"cf10-l1","word":"Cuchillo de chef","translation":"El más versátil: 20cm, para picar y rebanar","example":"Inversión esencial: un buen cuchillo dura décadas."},
        {"id":"cf10-l2","word":"Sartén de hierro","translation":"Retiene calor, antiadherente natural al curarse","example":"Ideal para sellar carnes y saltear."},
        {"id":"cf10-l3","word":"Termómetro digital","translation":"Precisión en temperatura interna de alimentos","example":"Indispensable para carnes y repostería."},
        {"id":"cf10-l4","word":"Olla de presión","translation":"Reduce tiempos de cocción hasta un 70%","example":"Legumbres y caldos en la mitad de tiempo."}
      ],
      "exercises": [
        {"id":"cf10-e1","type":"match","prompt":"Empareja con su descripción","options":["Versátil, 20cm","Retiene calor","Temperatura exacta","Cocción rápida"],"correctAnswer":"Versátil, 20cm","explanation":"Cuchillo de chef = herramienta principal.","promptExtra":"Cuchillo chef"},
        {"id":"cf10-e2","type":"match","prompt":"Empareja con su descripción","options":["Versátil, 20cm","Retiene calor","Temperatura exacta","Cocción rápida"],"correctAnswer":"Retiene calor","explanation":"Hierro fundido: calor uniforme.","promptExtra":"Sartén hierro"},
        {"id":"cf10-e3","type":"select","prompt":"¿Para qué sirve un termómetro de cocina?","options":["Medir temperatura interna","Medir temperatura ambiente","Pesar alimentos","Cronometrar"],"correctAnswer":"Medir temperatura interna","explanation":"Garantiza cocción segura y precisa."},
        {"id":"cf10-e4","type":"select","prompt":"¿Ventaja de la olla a presión?","options":["Reduce tiempo 70%","No necesita agua","Cocina sin calor","Es desechable"],"correctAnswer":"Reduce tiempo 70%","explanation":"La presión eleva el punto de ebullición."},
        {"id":"cf10-e5","type":"select","prompt":"¿Por qué curar una sartén de hierro?","options":["Crear capa antiadherente natural","Decorarla","Hacerla más pesada","Aumentar tamaño"],"correctAnswer":"Crear capa antiadherente natural","explanation":"El curado forma una pátina protectora."},
        {"id":"cf10-e6","type":"complete","prompt":"Completa: Cuchillo de ___ (versátil, 20cm)","options":["chef","pan","sierra","mondador"],"correctAnswer":"chef","explanation":"El cuchillo de chef es el más usado."},
        {"id":"cf10-e7","type":"complete","prompt":"Completa: Olla de ___ (reduce tiempo)","options":["presión","vapor","hierro","cobre"],"correctAnswer":"presión","explanation":"La presión acelera la cocción.","promptExtra":"presión"},
        {"id":"cf10-e8","type":"arrange","prompt":"Ordena: equipo básico de cocina","options":["Cuchillo","chef","Sartén","hierro","Termómetro"],"correctAnswer":"Cuchillo chef Sartén hierro Termómetro","explanation":"Los 3 imprescindibles según chefs."}
      ]
    },
    {
      "id": "fundamentals-11",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Caldos y Fondos",
      "description": "La base de la cocina: caldos caseros",
      "icon": "🍜",
      "xp": 100,
      "learnCards": [
        {"id":"cf11-l1","word":"Fondo claro","translation":"Caldo ligero de huesos y verduras sin tostar","example":"Base para sopas y risottos."},
        {"id":"cf11-l2","word":"Fondo oscuro","translation":"Huesos y verduras tostados antes de hervir","example":"Para salsas y estofados con sabor intenso."},
        {"id":"cf11-l3","word":"Mirepoix","translation":"Base aromática: cebolla, zanahoria, apio (2:1:1)","example":"La santísima trinidad de la cocina francesa."},
        {"id":"cf11-l4","word":"Desgrasar","translation":"Retirar impurezas y grasa que flotan al hervir","example":"Caldo claro = espumar constantemente."}
      ],
      "exercises": [
        {"id":"cf11-e1","type":"match","prompt":"Empareja con su descripción","options":["Huesos sin tostar","Huesos tostados","Cebolla+zanahoria+apio","Retirar impurezas"],"correctAnswer":"Huesos sin tostar","explanation":"Fondo claro = ingredientes crudos.","promptExtra":"Fondo claro"},
        {"id":"cf11-e2","type":"match","prompt":"Empareja con su descripción","options":["Huesos sin tostar","Huesos tostados","Cebolla+zanahoria+apio","Retirar impurezas"],"correctAnswer":"Huesos tostados","explanation":"Fondo oscuro = tostar para más sabor.","promptExtra":"Fondo oscuro"},
        {"id":"cf11-e3","type":"select","prompt":"¿Qué es mirepoix?","options":["Cebolla, zanahoria, apio","Ajo, cebolla, pimiento","Tomate, cebolla, ajo","Puerro, apio, nabo"],"correctAnswer":"Cebolla, zanahoria, apio","explanation":"Base aromática clásica francesa."},
        {"id":"cf11-e4","type":"select","prompt":"¿Para qué desgrasar el caldo?","options":["Obtener caldo claro y limpio","Añadir más sabor","Acelerar cocción","Espesar el caldo"],"correctAnswer":"Obtener caldo claro y limpio","explanation":"Espumar elimina impurezas."},
        {"id":"cf11-e5","type":"select","prompt":"¿Diferencia fondo claro y oscuro?","options":["Oscuro: ingredientes tostados","Claro: más sal","Oscuro: menos cocción","Claro: solo verduras"],"correctAnswer":"Oscuro: ingredientes tostados","explanation":"Tostar aporta color y profundidad."},
        {"id":"cf11-e6","type":"complete","prompt":"Completa: ___ = cebolla, zanahoria, apio","options":["Mirepoix","Sofrito","Bouquet","Roux"],"correctAnswer":"Mirepoix","explanation":"Mirepoix: proporción 2:1:1.","promptExtra":"Mirepoix"},
        {"id":"cf11-e7","type":"complete","prompt":"Completa: ___ el caldo para clarificarlo","options":["Desgrasar","Salar","Enfriar","Batir"],"correctAnswer":"Desgrasar","explanation":"Desgrasar = retirar espuma y grasa.","promptExtra":"Desgrasar"},
        {"id":"cf11-e8","type":"arrange","prompt":"Ordena para hacer fondo oscuro","options":["Tostar","huesos","Añadir","mirepoix","Cubrir","con agua"],"correctAnswer":"Tostar huesos Añadir mirepoix Cubrir con agua","explanation":"Primero tostar para desarrollar sabor."}
      ]
    },
    {
      "id": "fundamentals-12",
      "track": "cooking",
      "subTrack": "fundamentals",
      "title": "Emplatado",
      "description": "Principios de presentación y estética en el plato",
      "icon": "🍽️",
      "xp": 100,
      "learnCards": [
        {"id":"cf12-l1","word":"Regla del reloj","translation":"Proteína a las 6, carbohidrato a las 2, verdura a las 10","example":"Distribución visual clásica."},
        {"id":"cf12-l2","word":"Altura y volumen","translation":"Apilar elementos crea dimensión e interés","example":"Torre de verduras sobre puré."},
        {"id":"cf12-l3","word":"Color y contraste","translation":"Combinar colores complementarios en el plato","example":"Verde (brócoli) + naranja (zanahoria) + rojo (pimiento)."},
        {"id":"cf12-l4","word":"Salseado","translation":"La salsa decora: puntos, líneas o base bajo el plato","example":"Salsa espejo bajo la proteína principal."}
      ],
      "exercises": [
        {"id":"cf12-e1","type":"match","prompt":"Empareja con su descripción","options":["Distribución en el plato","Apilar para altura","Combinar colores","Decorar con salsa"],"correctAnswer":"Distribución en el plato","explanation":"Reloj: proteína, carbohidrato, verdura.","promptExtra":"Regla reloj"},
        {"id":"cf12-e2","type":"match","prompt":"Empareja con su descripción","options":["Distribución en el plato","Apilar para altura","Combinar colores","Decorar con salsa"],"correctAnswer":"Apilar para altura","explanation":"Altura = plato más atractivo.","promptExtra":"Altura"},
        {"id":"cf12-e3","type":"select","prompt":"¿Dónde va la proteína según la regla del reloj?","options":["A las 6 (abajo)","A las 12 (arriba)","A las 3 (derecha)","A las 9 (izquierda)"],"correctAnswer":"A las 6 (abajo)","explanation":"Proteína abajo, más cercana al comensal."},
        {"id":"cf12-e4","type":"select","prompt":"¿Por qué usar colores contrastantes?","options":["Hace el plato visualmente atractivo","Aumenta las porciones","Cocina más rápido","Reduce calorías"],"correctAnswer":"Hace el plato visualmente atractivo","explanation":"Comemos primero con los ojos."},
        {"id":"cf12-e5","type":"select","prompt":"¿Qué es salseado espejo?","options":["Salsa extendida bajo el alimento","Salsa por encima","Salsa en un cuenco aparte","Salsa mezclada"],"correctAnswer":"Salsa extendida bajo el alimento","explanation":"Crea una base lisa y brillante."},
        {"id":"cf12-e6","type":"complete","prompt":"Completa: Regla del ___ (distribución del plato)","options":["reloj","plato","chef","color"],"correctAnswer":"reloj","explanation":"La regla del reloj organiza el plato.","promptExtra":"reloj"},
        {"id":"cf12-e7","type":"complete","prompt":"Completa: Apilar crea ___ en el plato","options":["altura","peso","calor","sombra"],"correctAnswer":"altura","explanation":"La altura añade dimensión visual."},
        {"id":"cf12-e8","type":"arrange","prompt":"Ordena los elementos del plato","options":["Proteína","(6h)","Carbohidrato","(2h)","Verdura","(10h)"],"correctAnswer":"Proteína (6h) Carbohidrato (2h) Verdura (10h)","explanation":"La disposición clásica del plato."}
      ]
    }
  ];
const cookingRecipesLessons: Lesson[] = [
    {
      "id": "recipes-1",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Cómo leer recetas",
      "description": "Entiende la estructura de una receta",
      "icon": "📖",
      "xp": 30,
      "learnCards": [
        {
          "id": "cr1-l1",
          "word": "Ingredientes",
          "translation": "Lista de alimentos con sus cantidades exactas",
          "example": "200 g de harina, 2 huevos, 100 ml de leche."
        },
        {
          "id": "cr1-l2",
          "word": "Pasos",
          "translation": "Instrucciones numeradas en orden cronológico",
          "example": "1. Precalentar el horno. 2. Mezclar harina y huevos."
        },
        {
          "id": "cr1-l3",
          "word": "Tiempos",
          "translation": "Duración de preparación, cocción y total",
          "example": "Prep: 15 min | Cocción: 30 min | Total: 45 min."
        },
        {
          "id": "cr1-l4",
          "word": "Raciones",
          "translation": "Para cuántas personas alcanza la receta",
          "example": "4 porciones."
        }
      ],
      "exercises": [
        {
          "id": "cr1-e1",
          "type": "match",
          "prompt": "Empareja con su definición",
          "options": [
            "Lista con cantidades",
            "Pasos numerados",
            "Tiempo total",
            "Número de porciones"
          ],
          "correctAnswer": "Lista con cantidades",
          "explanation": "Los ingredientes van con cantidades precisas.",
          "promptExtra": "Ingredientes"
        },
        {
          "id": "cr1-e2",
          "type": "match",
          "prompt": "Empareja con su definición",
          "options": [
            "Lista con cantidades",
            "Pasos numerados",
            "Tiempo total",
            "Número de porciones"
          ],
          "correctAnswer": "Número de porciones",
          "explanation": "Las raciones indican para cuántas personas es.",
          "promptExtra": "Raciones"
        },
        {
          "id": "cr1-e3",
          "type": "select",
          "prompt": "¿Qué contiene una receta estándar?",
          "options": [
            "Ingredientes, pasos, tiempos y raciones",
            "Solo los ingredientes",
            "Solo los pasos",
            "Una foto del plato"
          ],
          "correctAnswer": "Ingredientes, pasos, tiempos y raciones",
          "explanation": "Una receta completa incluye todos estos elementos."
        },
        {
          "id": "cr1-e4",
          "type": "select",
          "prompt": "¿En qué orden van los pasos?",
          "options": [
            "Cronológico",
            "Alfabético",
            "Del más fácil al difícil",
            "Aleatorio"
          ],
          "correctAnswer": "Cronológico",
          "explanation": "Los pasos siguen el orden en que se cocina."
        },
        {
          "id": "cr1-e5",
          "type": "select",
          "prompt": "¿Qué significa 'Prep: 15 min'?",
          "options": [
            "Tiempo de preparación",
            "Tiempo de cocción",
            "Tiempo total",
            "Tiempo de enfriado"
          ],
          "correctAnswer": "Tiempo de preparación",
          "explanation": "Prep indica el tiempo para alistar ingredientes."
        },
        {
          "id": "cr1-e6",
          "type": "complete",
          "prompt": "Completa: Los ___ van con cantidades exactas",
          "options": [
            "ingredientes",
            "pasos",
            "tiempos",
            "raciones"
          ],
          "correctAnswer": "ingredientes",
          "explanation": "Los ingredientes siempre llevan cantidad.",
          "promptExtra": "ingredientes"
        },
        {
          "id": "cr1-e7",
          "type": "complete",
          "prompt": "Completa: La receta indica para cuántas ___ es",
          "options": [
            "personas",
            "horas",
            "veces",
            "ocasiones"
          ],
          "correctAnswer": "personas",
          "explanation": "Las raciones = número de comensales.",
          "promptExtra": "personas"
        },
        {
          "id": "cr1-e8",
          "type": "arrange",
          "prompt": "Ordena las secciones de una receta",
          "options": [
            "Ingredientes",
            "Preparación",
            "Cocción",
            "Presentación"
          ],
          "correctAnswer": "Ingredientes Preparación Cocción Presentación",
          "explanation": "Orden típico de una receta."
        }
      ]
    },
    {
      "id": "recipes-2",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Pasta perfecta",
      "description": "Técnicas para cocinar pasta al dente",
      "icon": "🍝",
      "xp": 40,
      "learnCards": [
        {
          "id": "cr2-l1",
          "word": "Agua abundante",
          "translation": "1 litro de agua por cada 100 g de pasta",
          "example": "La pasta necesita espacio para moverse."
        },
        {
          "id": "cr2-l2",
          "word": "Sal",
          "translation": "10 g de sal por litro de agua (debe saber a mar)",
          "example": "La pasta absorbe la sal durante la cocción."
        },
        {
          "id": "cr2-l3",
          "word": "Al dente",
          "translation": "Cocida pero firme al morder, 1 minuto menos del paquete",
          "example": "Termina la cocción en la sartén con la salsa."
        },
        {
          "id": "cr2-l4",
          "word": "Agua de cocción",
          "translation": "Reserva 1 taza antes de escurrir, ayuda a emulsionar la salsa",
          "example": "El almidón del agua liga la salsa con la pasta."
        }
      ],
      "exercises": [
        {
          "id": "cr2-e1",
          "type": "match",
          "prompt": "Empareja con su explicación",
          "options": [
            "Cocida pero firme",
            "Muy blanda",
            "Cruda",
            "Quemada"
          ],
          "correctAnswer": "Cocida pero firme",
          "explanation": "Al dente = cocida con resistencia al morder.",
          "promptExtra": "Al dente"
        },
        {
          "id": "cr2-e2",
          "type": "match",
          "prompt": "Empareja con su explicación",
          "options": [
            "Ayuda a emulsionar la salsa",
            "Se desecha siempre",
            "Es para beber",
            "Enfría la pasta"
          ],
          "correctAnswer": "Ayuda a emulsionar la salsa",
          "explanation": "El agua con almidón crea salsas cremosas.",
          "promptExtra": "Agua de cocción"
        },
        {
          "id": "cr2-e3",
          "type": "select",
          "prompt": "¿Cuánta agua por 100 g de pasta?",
          "options": [
            "1 litro",
            "500 ml",
            "250 ml",
            "2 litros"
          ],
          "correctAnswer": "1 litro",
          "explanation": "1 L por cada 100 g de pasta."
        },
        {
          "id": "cr2-e4",
          "type": "select",
          "prompt": "¿Cuánta sal por litro de agua?",
          "options": [
            "10 g",
            "1 g",
            "50 g",
            "100 g"
          ],
          "correctAnswer": "10 g",
          "explanation": "Aproximadamente 10 g de sal por litro."
        },
        {
          "id": "cr2-e5",
          "type": "select",
          "prompt": "¿Cómo lograr pasta al dente?",
          "options": [
            "Cocer 1 min menos del paquete",
            "Cocer el doble de tiempo",
            "Usar agua fría",
            "No usar sal"
          ],
          "correctAnswer": "Cocer 1 min menos del paquete",
          "explanation": "Un minuto menos y terminar en la sartén."
        },
        {
          "id": "cr2-e6",
          "type": "complete",
          "prompt": "Completa: Cocina la pasta ___ dente",
          "options": [
            "al",
            "a la",
            "en",
            "con"
          ],
          "correctAnswer": "al",
          "explanation": "\"Al dente\" es la expresión correcta.",
          "promptExtra": "al"
        },
        {
          "id": "cr2-e7",
          "type": "complete",
          "prompt": "Completa: Reserva agua de ___ para la salsa",
          "options": [
            "cocción",
            "beber",
            "grifo",
            "lluvia"
          ],
          "correctAnswer": "cocción",
          "explanation": "El agua de cocción contiene almidón.",
          "promptExtra": "cocción"
        },
        {
          "id": "cr2-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos para cocinar pasta",
          "options": [
            "Hervir",
            "agua",
            "con",
            "sal"
          ],
          "correctAnswer": "Hervir agua con sal",
          "explanation": "Primer paso: hervir agua con sal."
        }
      ]
    },
    {
      "id": "recipes-3",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Arroces y risottos",
      "description": "Domina el arroz en todas sus formas",
      "icon": "🍚",
      "xp": 50,
      "learnCards": [
        {
          "id": "cr3-l1",
          "word": "Proporción",
          "translation": "Arroz blanco: 2 partes de agua por 1 de arroz",
          "example": "1 taza de arroz + 2 tazas de agua."
        },
        {
          "id": "cr3-l2",
          "word": "Risotto",
          "translation": "Arroz arborio cocinado añadiendo caldo poco a poco",
          "example": "Se remueve constantemente para liberar almidón."
        },
        {
          "id": "cr3-l3",
          "word": "Sofrito previo",
          "translation": "Rehogar el arroz en aceite/mantequilla antes del líquido",
          "example": "El grano queda suelto y brillante."
        },
        {
          "id": "cr3-l4",
          "word": "Reposo",
          "translation": "Dejar reposar 5 min tapado después de cocer",
          "example": "El vapor termina la cocción uniformemente."
        }
      ],
      "exercises": [
        {
          "id": "cr3-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Arroz con caldo añadido poco a poco",
            "Arroz hervido en agua",
            "Arroz frito",
            "Arroz al vapor"
          ],
          "correctAnswer": "Arroz con caldo añadido poco a poco",
          "explanation": "El risotto se cocina añadiendo caldo gradualmente.",
          "promptExtra": "Risotto"
        },
        {
          "id": "cr3-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Dejar 5 min tapado",
            "Hervir 20 min",
            "Freír 10 min",
            "Enfriar en nevera"
          ],
          "correctAnswer": "Dejar 5 min tapado",
          "explanation": "El reposo distribuye la humedad.",
          "promptExtra": "Reposo"
        },
        {
          "id": "cr3-e3",
          "type": "select",
          "prompt": "¿Proporción agua/arroz para arroz blanco?",
          "options": [
            "2:1",
            "1:1",
            "3:1",
            "1:2"
          ],
          "correctAnswer": "2:1",
          "explanation": "2 tazas de agua por 1 de arroz."
        },
        {
          "id": "cr3-e4",
          "type": "select",
          "prompt": "¿Qué arroz se usa para risotto?",
          "options": [
            "Arborio",
            "Basmati",
            "Jazmín",
            "Integral"
          ],
          "correctAnswer": "Arborio",
          "explanation": "El arborio libera almidón y da cremosidad."
        },
        {
          "id": "cr3-e5",
          "type": "select",
          "prompt": "¿Por qué se sofríe el arroz primero?",
          "options": [
            "Para que quede suelto",
            "Para que se pegue",
            "Para cocerlo más rápido",
            "No se sofríe"
          ],
          "correctAnswer": "Para que quede suelto",
          "explanation": "El sofrito sella el grano y evita que se pegue."
        },
        {
          "id": "cr3-e6",
          "type": "complete",
          "prompt": "Completa: El risotto se hace con arroz ___",
          "options": [
            "arborio",
            "basmati",
            "jazmín",
            "largo"
          ],
          "correctAnswer": "arborio",
          "explanation": "Arborio es el arroz ideal para risotto.",
          "promptExtra": "arborio"
        },
        {
          "id": "cr3-e7",
          "type": "complete",
          "prompt": "Completa: Deja ___ el arroz 5 min tapado",
          "options": [
            "reposar",
            "hervir",
            "freír",
            "enfriar"
          ],
          "correctAnswer": "reposar",
          "explanation": "El reposo termina la cocción uniformemente.",
          "promptExtra": "reposar"
        },
        {
          "id": "cr3-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos del arroz blanco",
          "options": [
            "Sofreír",
            "Añadir",
            "agua",
            "Reposar"
          ],
          "correctAnswer": "Sofreír Añadir agua Reposar",
          "explanation": "Pasos: sofreír, añadir agua, cocer, reposar."
        }
      ]
    },
    {
      "id": "recipes-4",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Carnes asadas",
      "description": "Técnicas para carnes jugosas y sabrosas",
      "icon": "🥩",
      "xp": 60,
      "learnCards": [
        {
          "id": "cr4-l1",
          "word": "Sellar",
          "translation": "Dorar la carne a fuego alto por todos lados antes de hornear",
          "example": "Crea una costra que retiene los jugos."
        },
        {
          "id": "cr4-l2",
          "word": "Temperatura interna",
          "translation": "La temperatura en el centro determina el punto de cocción",
          "example": "Pollo: 74 °C | Res término medio: 55 °C."
        },
        {
          "id": "cr4-l3",
          "word": "Reposo de la carne",
          "translation": "Dejar reposar 5-10 min después de cocinar",
          "example": "Los jugos se redistribuyen y no se escapan al cortar."
        },
        {
          "id": "cr4-l4",
          "word": "Marinado",
          "translation": "Sumergir la carne en una mezcla de ácido, aceite y especias",
          "example": "Ablanda y aporta sabor (mínimo 30 min)."
        }
      ],
      "exercises": [
        {
          "id": "cr4-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Dorar a fuego alto",
            "Cocinar a fuego bajo",
            "Hervir en agua",
            "Cocinar al vapor"
          ],
          "correctAnswer": "Dorar a fuego alto",
          "explanation": "Sellar = dorar la superficie rápidamente.",
          "promptExtra": "Sellar"
        },
        {
          "id": "cr4-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Dejar 5-10 min tras cocinar",
            "Cocinar más tiempo",
            "Enfriar en nevera",
            "Cortar inmediatamente"
          ],
          "correctAnswer": "Dejar 5-10 min tras cocinar",
          "explanation": "El reposo redistribuye los jugos.",
          "promptExtra": "Reposo"
        },
        {
          "id": "cr4-e3",
          "type": "select",
          "prompt": "¿A qué temperatura está el pollo cocido?",
          "options": [
            "74 °C",
            "55 °C",
            "100 °C",
            "60 °C"
          ],
          "correctAnswer": "74 °C",
          "explanation": "El pollo debe alcanzar 74 °C internos."
        },
        {
          "id": "cr4-e4",
          "type": "select",
          "prompt": "¿Por qué se sella la carne?",
          "options": [
            "Crea costra y retiene jugos",
            "La enfría",
            "La ablanda",
            "La cuece completamente"
          ],
          "correctAnswer": "Crea costra y retiene jugos",
          "explanation": "Sellar carameliza el exterior."
        },
        {
          "id": "cr4-e5",
          "type": "select",
          "prompt": "¿Qué hace el marinado?",
          "options": [
            "Ablanda y da sabor",
            "Cocina la carne",
            "Seca la carne",
            "Enfría la carne"
          ],
          "correctAnswer": "Ablanda y da sabor",
          "explanation": "El ácido del marinado ablanda las fibras."
        },
        {
          "id": "cr4-e6",
          "type": "complete",
          "prompt": "Completa: ___ la carne antes de hornearla",
          "options": [
            "Sella",
            "Hierve",
            "Enfría",
            "Corta"
          ],
          "correctAnswer": "Sella",
          "explanation": "Sellar primero retiene los jugos.",
          "promptExtra": "Sella"
        },
        {
          "id": "cr4-e7",
          "type": "complete",
          "prompt": "Completa: Deja reposar la carne ___ minutos",
          "options": [
            "10",
            "1",
            "60",
            "0"
          ],
          "correctAnswer": "10",
          "explanation": "5-10 minutos de reposo es lo recomendado.",
          "promptExtra": "10"
        },
        {
          "id": "cr4-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos para asar carne",
          "options": [
            "Sellar",
            "Hornear",
            "Reposar",
            "Cortar"
          ],
          "correctAnswer": "Sellar Hornear Reposar Cortar",
          "explanation": "Secuencia correcta del asado."
        }
      ]
    },
    {
      "id": "recipes-5",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Postres básicos",
      "description": "Fundamentos de repostería casera",
      "icon": "🍰",
      "xp": 70,
      "learnCards": [
        {
          "id": "cr5-l1",
          "word": "Batir",
          "translation": "Incorporar aire a una mezcla con movimiento enérgico",
          "example": "Batir huevos con azúcar hasta que blanqueen."
        },
        {
          "id": "cr5-l2",
          "word": "Tamizar",
          "translation": "Pasar harina por un colador para eliminar grumos y airear",
          "example": "Siempre tamiza la harina para bizcochos."
        },
        {
          "id": "cr5-l3",
          "word": "Punto de nieve",
          "translation": "Batir claras hasta que formen picos firmes",
          "example": "Al voltear el bol, las claras no se caen."
        },
        {
          "id": "cr5-l4",
          "word": "Baño María",
          "translation": "Cocinar un recipiente dentro de otro con agua caliente",
          "example": "Para derretir chocolate sin que se queme."
        }
      ],
      "exercises": [
        {
          "id": "cr5-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Pasar por colador para airear",
            "Mezclar con energía",
            "Claras a punto firme",
            "Cocinar sobre agua caliente"
          ],
          "correctAnswer": "Pasar por colador para airear",
          "explanation": "Tamizar elimina grumos y airea la harina.",
          "promptExtra": "Tamizar"
        },
        {
          "id": "cr5-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Pasar por colador para airear",
            "Mezclar con energía",
            "Claras a punto firme",
            "Cocinar sobre agua caliente"
          ],
          "correctAnswer": "Cocinar sobre agua caliente",
          "explanation": "Baño María = calor indirecto y suave.",
          "promptExtra": "Baño María"
        },
        {
          "id": "cr5-e3",
          "type": "select",
          "prompt": "¿Para qué se tamiza la harina?",
          "options": [
            "Eliminar grumos y airear",
            "Añadir sabor",
            "Cambiar el color",
            "Enfriar la masa"
          ],
          "correctAnswer": "Eliminar grumos y airear",
          "explanation": "Tamizar da textura más ligera."
        },
        {
          "id": "cr5-e4",
          "type": "select",
          "prompt": "¿Qué es el punto de nieve?",
          "options": [
            "Claras batidas a picos firmes",
            "Nieve real en la cocina",
            "Harina muy blanca",
            "Azúcar glass"
          ],
          "correctAnswer": "Claras batidas a picos firmes",
          "explanation": "Claras montadas que no se caen del bol."
        },
        {
          "id": "cr5-e5",
          "type": "select",
          "prompt": "¿Cuándo se usa baño María?",
          "options": [
            "Derretir chocolate",
            "Hervir agua",
            "Freír alimentos",
            "Hornear pan"
          ],
          "correctAnswer": "Derretir chocolate",
          "explanation": "El calor indirecto evita que el chocolate se queme."
        },
        {
          "id": "cr5-e6",
          "type": "complete",
          "prompt": "Completa: ___ los huevos hasta que blanqueen",
          "options": [
            "Bate",
            "Hierve",
            "Corta",
            "Enfría"
          ],
          "correctAnswer": "Bate",
          "explanation": "Batir incorpora aire a la mezcla.",
          "promptExtra": "Bate"
        },
        {
          "id": "cr5-e7",
          "type": "complete",
          "prompt": "Completa: Derrite chocolate al ___ María",
          "options": [
            "baño",
            "fuego",
            "horno",
            "vapor"
          ],
          "correctAnswer": "baño",
          "explanation": "Baño María = calor suave indirecto.",
          "promptExtra": "baño"
        },
        {
          "id": "cr5-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos de un bizcocho",
          "options": [
            "Tamizar",
            "Batir",
            "Hornear",
            "Enfriar"
          ],
          "correctAnswer": "Tamizar Batir Hornear Enfriar",
          "explanation": "Secuencia típica de repostería."
        }
      ]
    },
    {
      "id": "recipes-6",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Panadería Casera",
      "description": "El arte de hacer pan en casa",
      "icon": "🍞",
      "xp": 80,
      "learnCards": [
        {"id":"cr6-l1","word":"Levadura","translation":"Microorganismo que fermenta y hace crecer la masa","example":"Levadura seca o fresca: activar en agua tibia (37°C)."},
        {"id":"cr6-l2","word":"Amasado","translation":"Desarrolla el gluten: textura elástica y esponjosa","example":"Amasar 10-15 minutos hasta que la masa esté lisa."},
        {"id":"cr6-l3","word":"Fermentación (levado)","translation":"Reposo para que la levadura produzca gas","example":"Doblar volumen: 1-2 horas en lugar cálido."},
        {"id":"cr6-l4","word":"Horneado con vapor","translation":"Vapor los primeros minutos para corteza crujiente","example":"Bandeja con agua en el horno o pulverizar."}
      ],
      "exercises": [
        {"id":"cr6-e1","type":"match","prompt":"Empareja con su descripción","options":["Hace crecer la masa","Desarrolla gluten","Reposo para gas","Corteza crujiente"],"correctAnswer":"Hace crecer la masa","explanation":"La levadura produce CO2.","promptExtra":"Levadura"},
        {"id":"cr6-e2","type":"match","prompt":"Empareja con su descripción","options":["Hace crecer la masa","Desarrolla gluten","Reposo para gas","Corteza crujiente"],"correctAnswer":"Desarrolla gluten","explanation":"Amasar = red de gluten.","promptExtra":"Amasado"},
        {"id":"cr6-e3","type":"select","prompt":"¿Temperatura ideal para activar levadura?","options":["35-40°C (tibia)","0-5°C (fría)","60-70°C (caliente)","100°C (hirviendo)"],"correctAnswer":"35-40°C (tibia)","explanation":"Agua tibia, no caliente (mata levadura)."},
        {"id":"cr6-e4","type":"select","prompt":"¿Qué es el gluten?","options":["Proteína que da elasticidad","Un tipo de levadura","Azúcar de la harina","Grasa de la masa"],"correctAnswer":"Proteína que da elasticidad","explanation":"El gluten se desarrolla al amasar."},
        {"id":"cr6-e5","type":"select","prompt":"¿Cuánto debe levar la masa?","options":["Hasta doblar volumen","10 minutos","Toda la noche siempre","No necesita levar"],"correctAnswer":"Hasta doblar volumen","explanation":"1-2 horas en ambiente cálido."},
        {"id":"cr6-e6","type":"complete","prompt":"Completa: ___ = desarrollar gluten (masa)","options":["Amasar","Reposar","Hornear","Enfriar"],"correctAnswer":"Amasar","explanation":"Amasar desarrolla la red de gluten.","promptExtra":"Amasar"},
        {"id":"cr6-e7","type":"complete","prompt":"Completa: ___ para corteza crujiente","options":["Vapor","Aceite","Azúcar","Sal"],"correctAnswer":"Vapor","explanation":"El vapor inicial crea corteza."},
        {"id":"cr6-e8","type":"arrange","prompt":"Ordena los pasos del pan","options":["Mezclar","Amasar","Levar","Hornear"],"correctAnswer":"Mezclar Amasar Levar Hornear","explanation":"Los 4 pasos fundamentales del pan."}
      ]
    },
    {
      "id": "recipes-7",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Salsas Madre",
      "description": "Las 5 salsas base de la cocina clásica francesa",
      "icon": "🥣",
      "xp": 80,
      "learnCards": [
        {"id":"cr7-l1","word":"Bechamel","translation":"Roux blanco + leche: base de cremas y gratinados","example":"Lasaña, croquetas, macarrones con queso."},
        {"id":"cr7-l2","word":"Velouté","translation":"Roux claro + caldo claro (pollo, pescado)","example":"Base para salsa de champiñones."},
        {"id":"cr7-l3","word":"Española","translation":"Roux oscuro + caldo oscuro + tomate","example":"Base de demi-glace y salsas de carne."},
        {"id":"cr7-l4","word":"Holandesa y Mayonesa","translation":"Emulsiones: yema + mantequilla (holandesa) o aceite (mayonesa)","example":"Huevos benedictinos, salsa para espárragos."}
      ],
      "exercises": [
        {"id":"cr7-e1","type":"match","prompt":"Empareja con su descripción","options":["Roux blanco + leche","Roux claro + caldo","Roux oscuro + caldo","Emulsión de yema"],"correctAnswer":"Roux blanco + leche","explanation":"Bechamel = salsa blanca base.","promptExtra":"Bechamel"},
        {"id":"cr7-e2","type":"match","prompt":"Empareja con su descripción","options":["Roux blanco + leche","Roux claro + caldo","Roux oscuro + caldo","Emulsión de yema"],"correctAnswer":"Roux claro + caldo","explanation":"Velouté = aterciopelada, ligera.","promptExtra":"Velouté"},
        {"id":"cr7-e3","type":"select","prompt":"¿Qué salsa usa huevos benedictinos?","options":["Holandesa","Bechamel","Española","Velouté"],"correctAnswer":"Holandesa","explanation":"Holandesa = yema + mantequilla clarificada."},
        {"id":"cr7-e4","type":"select","prompt":"¿Qué es un roux?","options":["Harina + grasa cocinadas","Caldo reducido","Yema batida","Verduras salteadas"],"correctAnswer":"Harina + grasa cocinadas","explanation":"Roux = espesante base de muchas salsas."},
        {"id":"cr7-e5","type":"select","prompt":"¿Base de las croquetas cremosas?","options":["Bechamel","Española","Holandesa","Mayonesa"],"correctAnswer":"Bechamel","explanation":"La bechamel espesa es la base."},
        {"id":"cr7-e6","type":"complete","prompt":"Completa: Salsa ___ = yema + mantequilla","options":["holandesa","bechamel","española","velouté"],"correctAnswer":"holandesa","explanation":"Holandesa: emulsión caliente."},
        {"id":"cr7-e7","type":"complete","prompt":"Completa: Roux = harina + ___","options":["grasa","agua","leche","huevo"],"correctAnswer":"grasa","explanation":"Mantequilla o aceite + harina."},
        {"id":"cr7-e8","type":"arrange","prompt":"Ordena para hacer bechamel","options":["Derretir","mantequilla","Añadir","harina","Incorporar","leche"],"correctAnswer":"Derretir mantequilla Añadir harina Incorporar leche","explanation":"Los 3 pasos de la bechamel."}
      ]
    },
    {
      "id": "recipes-8",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Cocina al Vacío",
      "description": "Técnica de precisión: Sous Vide",
      "icon": "🌡️",
      "xp": 90,
      "learnCards": [
        {"id":"cr8-l1","word":"Sous Vide","translation":"Cocinar en bolsa sellada a temperatura exacta en agua","example":"Pechuga de pollo a 63°C por 1.5 horas."},
        {"id":"cr8-l2","word":"Control de temperatura","translation":"Precisión total: el alimento nunca se sobrecocina","example":"Filete a 54°C = término medio perfecto siempre."},
        {"id":"cr8-l3","word":"Sellado final","translation":"Dorar en sartén tras el sous vide para textura","example":"Sartén muy caliente, 30 segundos por lado."},
        {"id":"cr8-l4","word":"Ventajas","translation":"Jugoso, tierno, sin pérdida de nutrientes","example":"Resultados imposibles con métodos tradicionales."}
      ],
      "exercises": [
        {"id":"cr8-e1","type":"match","prompt":"Empareja con su descripción","options":["Cocción en bolsa sellada","Temperatura exacta","Dorar tras cocción","Resultados precisos"],"correctAnswer":"Cocción en bolsa sellada","explanation":"Sous vide = al vacío.","promptExtra":"Sous Vide"},
        {"id":"cr8-e2","type":"match","prompt":"Empareja con su descripción","options":["Cocción en bolsa sellada","Temperatura exacta","Dorar tras cocción","Resultados precisos"],"correctAnswer":"Temperatura exacta","explanation":"El agua mantiene temperatura constante.","promptExtra":"Control temp"},
        {"id":"cr8-e3","type":"select","prompt":"¿Temperatura para pollo sous vide?","options":["60-65°C","100°C","180°C","0-5°C"],"correctAnswer":"60-65°C","explanation":"Baja temperatura = jugoso."},
        {"id":"cr8-e4","type":"select","prompt":"¿Por qué sellar después del sous vide?","options":["Textura crujiente exterior","Terminar cocción","Añadir sabor","Esterilizar"],"correctAnswer":"Textura crujiente exterior","explanation":"Reacción de Maillard en sartén."},
        {"id":"cr8-e5","type":"select","prompt":"¿Principal ventaja del sous vide?","options":["Resultado perfecto y reproducible","Más rápido","Más barato","Sin equipamiento"],"correctAnswer":"Resultado perfecto y reproducible","explanation":"Control exacto = sin errores."},
        {"id":"cr8-e6","type":"complete","prompt":"Completa: ___ Vide (al vacío)","options":["Sous","Sous-","So","Su"],"correctAnswer":"Sous","explanation":"Sous vide = francés \"al vacío\"."},
        {"id":"cr8-e7","type":"complete","prompt":"Completa: ___ final para textura crujiente","options":["Sellado","Hervido","Enfriado","Congelado"],"correctAnswer":"Sellado","explanation":"El sellado aporta la costra dorada."},
        {"id":"cr8-e8","type":"arrange","prompt":"Ordena: pasos del sous vide","options":["Sellar","en bolsa","Cocinar","en agua","Dorar","en sartén"],"correctAnswer":"Sellar en bolsa Cocinar en agua Dorar en sartén","explanation":"Técnica completa: bolsa, agua, sartén."}
      ]
    },
    {
      "id": "recipes-9",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Fermentación",
      "description": "Transforma alimentos con microorganismos beneficiosos",
      "icon": "🫙",
      "xp": 90,
      "learnCards": [
        {"id":"cr9-l1","word":"Fermentación láctica","translation":"Bacterias convierten azúcares en ácido láctico","example":"Chucrut, kimchi, yogur, pepinillos."},
        {"id":"cr9-l2","word":"Kombucha","translation":"Té fermentado con SCOBY (cultivo de bacterias y levaduras)","example":"Fermentar té negro + azúcar por 7-14 días."},
        {"id":"cr9-l3","word":"Masa madre","translation":"Cultivo natural de harina y agua para pan","example":"Alimentar diariamente: sabor único y mejor digestión."},
        {"id":"cr9-l4","word":"Beneficios","translation":"Probióticos, mejor digestión, sabores complejos","example":"Alimentos vivos que mejoran la microbiota intestinal."}
      ],
      "exercises": [
        {"id":"cr9-e1","type":"match","prompt":"Empareja con su descripción","options":["Bacterias → ácido láctico","Té con SCOBY","Harina + agua natural","Salud intestinal"],"correctAnswer":"Bacterias → ácido láctico","explanation":"Fermentación láctica = conservación natural.","promptExtra":"Láctica"},
        {"id":"cr9-e2","type":"match","prompt":"Empareja con su descripción","options":["Bacterias → ácido láctico","Té con SCOBY","Harina + agua natural","Salud intestinal"],"correctAnswer":"Té con SCOBY","explanation":"Kombucha = té fermentado.","promptExtra":"Kombucha"},
        {"id":"cr9-e3","type":"select","prompt":"¿Qué es el kimchi?","options":["Col fermentada coreana","Sopa japonesa","Arroz fermentado","Té asiático"],"correctAnswer":"Col fermentada coreana","explanation":"Fermentación láctica con especias."},
        {"id":"cr9-e4","type":"select","prompt":"¿Qué alimenta la masa madre?","options":["Harina y agua","Azúcar y leche","Sal y aceite","Huevo y mantequilla"],"correctAnswer":"Harina y agua","explanation":"Solo harina y agua, renovados a diario."},
        {"id":"cr9-e5","type":"select","prompt":"¿Beneficio principal de fermentados?","options":["Probióticos para digestión","Más calorías","Mayor caducidad industrial","Sabor más suave"],"correctAnswer":"Probióticos para digestión","explanation":"Microorganismos vivos beneficiosos."},
        {"id":"cr9-e6","type":"complete","prompt":"Completa: ___ = té fermentado","options":["Kombucha","Kimchi","Kéfir","Chucrut"],"correctAnswer":"Kombucha","explanation":"Kombucha: té + SCOBY."},
        {"id":"cr9-e7","type":"complete","prompt":"Completa: Fermentación ___ (ácido láctico)","options":["láctica","alcohólica","acética","butírica"],"correctAnswer":"láctica","explanation":"Láctica = bacterias acidolácticas."},
        {"id":"cr9-e8","type":"arrange","prompt":"Ordena: hacer chucrut","options":["Cortar","col","Añadir","sal","Prensar","Fermentar"],"correctAnswer":"Cortar col Añadir sal Prensar Fermentar","explanation":"Chucrut = col + sal + tiempo."}
      ]
    },
    {
      "id": "recipes-10",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Parrilla y Ahumado",
      "description": "Domina el fuego: carnes, pescados y verduras a la parrilla",
      "icon": "🔥",
      "xp": 90,
      "learnCards": [
        {"id":"cr10-l1","word":"Fuego directo/indirecto","translation":"Directo: sobre las brasas. Indirecto: calor envolvente","example":"Filetes = directo. Costillas = indirecto."},
        {"id":"cr10-l2","word":"Punto de la carne","translation":"Términos: bleu, poco hecho, al punto, hecho","example":"Usar termómetro o prueba del dedo."},
        {"id":"cr10-l3","word":"Ahumado","translation":"Cocinar con humo de maderas aromáticas","example":"Roble (intenso), manzano (dulce), nogal (nuez)."},
        {"id":"cr10-l4","word":"Marinado y rub","translation":"Preparar la carne con mezclas de especias","example":"Rub seco = sal, pimentón, ajo, comino, azúcar."}
      ],
      "exercises": [
        {"id":"cr10-e1","type":"match","prompt":"Empareja con su descripción","options":["Sobre brasas o envolvente","Rojo/rosado/gris","Humo de maderas","Mezcla de especias"],"correctAnswer":"Sobre brasas o envolvente","explanation":"Directo = fuego debajo, indirecto = calor lateral.","promptExtra":"Directo/indirecto"},
        {"id":"cr10-e2","type":"match","prompt":"Empareja con su descripción","options":["Sobre brasas o envolvente","Rojo/rosado/gris","Humo de maderas","Mezcla de especias"],"correctAnswer":"Rojo/rosado/gris","explanation":"Punto = grado de cocción.","promptExtra":"Punto"},
        {"id":"cr10-e3","type":"select","prompt":"¿Qué madera para sabor dulce?","options":["Manzano","Roble","Nogal","Mezquite"],"correctAnswer":"Manzano","explanation":"Manzano = humo dulce y suave."},
        {"id":"cr10-e4","type":"select","prompt":"¿Qué es un rub?","options":["Mezcla seca de especias","Salsa líquida","Tipo de parrilla","Corte de carne"],"correctAnswer":"Mezcla seca de especias","explanation":"Rub = especias frotadas en la carne."},
        {"id":"cr10-e5","type":"select","prompt":"¿Qué cocinas con fuego indirecto?","options":["Piezas grandes (costillas)","Filetes finos","Hamburguesas","Verduras rápidas"],"correctAnswer":"Piezas grandes (costillas)","explanation":"Indirecto cocina lento y uniforme."},
        {"id":"cr10-e6","type":"complete","prompt":"Completa: Madera de ___ (dulce, frutal)","options":["manzano","roble","nogal","mezquite"],"correctAnswer":"manzano","explanation":"Manzano: aroma dulce y afrutado."},
        {"id":"cr10-e7","type":"complete","prompt":"Completa: ___ = especias secas para carne","options":["Rub","Marinada","Salsa","Adobo"],"correctAnswer":"Rub","explanation":"Rub se aplica en seco."},
        {"id":"cr10-e8","type":"arrange","prompt":"Ordena: preparar carne a la parrilla","options":["Aplicar","rub","Precalentar","parrilla","Cocinar","Reposar"],"correctAnswer":"Aplicar rub Precalentar parrilla Cocinar Reposar","explanation":"Secuencia clásica de parrilla."}
      ]
    },
    {
      "id": "recipes-11",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Pastas Artesanales",
      "description": "Haz tu propia pasta fresca desde cero",
      "icon": "🍝",
      "xp": 100,
      "learnCards": [
        {"id":"cr11-l1","word":"Masa base","translation":"Harina de trigo + huevo: proporción 100g harina por 1 huevo","example":"Para 4 personas: 400g harina + 4 huevos."},
        {"id":"cr11-l2","word":"Amasado y reposo","translation":"Amasar 10 min, reposar 30 min para relajar gluten","example":"Envuelta en film para no secarse."},
        {"id":"cr11-l3","word":"Estirado","translation":"Con máquina o rodillo hasta grosor deseado","example":"Tagliatelle: grosor 2mm. Ravioli: más fino."},
        {"id":"cr11-l4","word":"Cocción","translation":"Agua abundante con sal, 2-3 minutos para pasta fresca","example":"Está lista cuando flota. Reserva agua de cocción."}
      ],
      "exercises": [
        {"id":"cr11-e1","type":"match","prompt":"Empareja con su descripción","options":["Harina + huevo","Desarrollar gluten","Adelgazar masa","2-3 min hirviendo"],"correctAnswer":"Harina + huevo","explanation":"Pasta fresca = harina + huevo.","promptExtra":"Masa base"},
        {"id":"cr11-e2","type":"match","prompt":"Empareja con su descripción","options":["Harina + huevo","Desarrollar gluten","Adelgazar masa","2-3 min hirviendo"],"correctAnswer":"Desarrollar gluten","explanation":"Amasar = elasticidad.","promptExtra":"Amasado"},
        {"id":"cr11-e3","type":"select","prompt":"¿Proporción harina/huevo?","options":["100g harina por huevo","50g harina por huevo","200g harina por huevo","1kg harina por huevo"],"correctAnswer":"100g harina por huevo","explanation":"Regla fácil: 1 huevo por cada 100g."},
        {"id":"cr11-e4","type":"select","prompt":"¿Cuánto reposa la masa?","options":["30 minutos","5 minutos","2 horas","No necesita"],"correctAnswer":"30 minutos","explanation":"Reposo relaja el gluten, facilita estirar."},
        {"id":"cr11-e5","type":"select","prompt":"¿Cuánto se cocina la pasta fresca?","options":["2-3 minutos","10-12 minutos","20 minutos","30 segundos"],"correctAnswer":"2-3 minutos","explanation":"Mucho más rápido que la pasta seca."},
        {"id":"cr11-e6","type":"complete","prompt":"Completa: 1 huevo por cada ___g de harina","options":["100","50","200","500"],"correctAnswer":"100","explanation":"Proporción clásica italiana."},
        {"id":"cr11-e7","type":"complete","prompt":"Completa: Reposar ___ min para relajar gluten","options":["30","5","60","0"],"correctAnswer":"30","explanation":"30 minutos de reposo mínimo."},
        {"id":"cr11-e8","type":"arrange","prompt":"Ordena: hacer pasta fresca","options":["Mezclar","harina+huevo","Amasar","10 min","Reposar","Estirar","Cortar","Cocer"],"correctAnswer":"Mezclar harina+huevo Amasar 10 min Reposar Estirar Cortar Cocer","explanation":"Proceso completo de pasta fresca."}
      ]
    },
    {
      "id": "recipes-12",
      "track": "cooking",
      "subTrack": "recipes",
      "title": "Conservas",
      "description": "Técnicas de conservación: mermeladas, encurtidos y más",
      "icon": "🫙",
      "xp": 100,
      "learnCards": [
        {"id":"cr12-l1","word":"Mermelada","translation":"Fruta + azúcar cocida hasta gelificar","example":"Proporción: 60% fruta, 40% azúcar. Pectina natural."},
        {"id":"cr12-l2","word":"Encurtidos","translation":"Vegetales en vinagre, sal y especias","example":"Pepinillos, cebollitas, zanahorias en vinagre."},
        {"id":"cr12-l3","word":"Esterilización","translation":"Hervir frascos para eliminar microorganismos","example":"Frascos en agua hirviendo 10-15 minutos."},
        {"id":"cr12-l4","word":"Confitura vs mermelada","translation":"Confitura: más azúcar y fruta entera. Mermelada: pulpa","example":"Confitura de fresa con trozos visibles."}
      ],
      "exercises": [
        {"id":"cr12-e1","type":"match","prompt":"Empareja con su descripción","options":["Fruta + azúcar cocida","Vegetales en vinagre","Hervir frascos","Fruta entera + azúcar"],"correctAnswer":"Fruta + azúcar cocida","explanation":"Mermelada = pulpa de fruta.","promptExtra":"Mermelada"},
        {"id":"cr12-e2","type":"match","prompt":"Empareja con su descripción","options":["Fruta + azúcar cocida","Vegetales en vinagre","Hervir frascos","Fruta entera + azúcar"],"correctAnswer":"Vegetales en vinagre","explanation":"Encurtidos = conserva ácida.","promptExtra":"Encurtidos"},
        {"id":"cr12-e3","type":"select","prompt":"¿Qué es la pectina?","options":["Agente gelificante natural de la fruta","Un tipo de azúcar","Un conservante artificial","Un tipo de frasco"],"correctAnswer":"Agente gelificante natural de la fruta","explanation":"Manzanas y cítricos son ricos en pectina."},
        {"id":"cr12-e4","type":"select","prompt":"¿Por qué esterilizar frascos?","options":["Eliminar microorganismos","Decorarlos","Enfriarlos","Añadir sabor"],"correctAnswer":"Eliminar microorganismos","explanation":"Esterilizar = conservación segura."},
        {"id":"cr12-e5","type":"select","prompt":"¿Diferencia mermelada y confitura?","options":["Confitura lleva fruta entera","Mermelada lleva más azúcar","Son iguales","Confitura no lleva azúcar"],"correctAnswer":"Confitura lleva fruta entera","explanation":"Confitura = trozos visibles de fruta."},
        {"id":"cr12-e6","type":"complete","prompt":"Completa: ___ = vegetales en vinagre","options":["Encurtidos","Mermeladas","Confituras","Jaleas"],"correctAnswer":"Encurtidos","explanation":"Encurtir = conservar en medio ácido."},
        {"id":"cr12-e7","type":"complete","prompt":"Completa: ___ frascos antes de envasar","options":["Esterilizar","Lavar","Enfriar","Romper"],"correctAnswer":"Esterilizar","explanation":"Hervir frascos = conservación."},
        {"id":"cr12-e8","type":"arrange","prompt":"Ordena para hacer mermelada","options":["Lavar","fruta","Cocinar","con azúcar","Envasar","en caliente"],"correctAnswer":"Lavar fruta Cocinar con azúcar Envasar en caliente","explanation":"Proceso básico de mermelada casera."}
      ]
    }
  ];
const cookingPlatesLessons: Lesson[] = [
    {
      "id": "plates-1",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Sushi",
      "description": "El arte del sushi japonés",
      "icon": "🍣",
      "xp": 30,
      "learnCards": [
        {
          "id": "cp1-l1",
          "word": "Sushi",
          "translation": "Plato japonés de arroz avinagrado combinado con pescado, verduras o huevo",
          "note": "No es pescado crudo: es arroz avinagrado."
        },
        {
          "id": "cp1-l2",
          "word": "Arroz de sushi",
          "translation": "Arroz de grano corto sazonado con vinagre, azúcar y sal",
          "example": "Se lava 3-4 veces antes de cocer."
        },
        {
          "id": "cp1-l3",
          "word": "Nori",
          "translation": "Alga marina seca en láminas para enrollar el sushi",
          "example": "El exterior del maki."
        },
        {
          "id": "cp1-l4",
          "word": "Wasabi",
          "translation": "Pasta verde picante de rábano japonés",
          "note": "Se sirve aparte, no se mezcla con la salsa de soja."
        }
      ],
      "exercises": [
        {
          "id": "cp1-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Arroz avinagrado con acompañamientos",
            "Pescado crudo solo",
            "Sopa de fideos",
            "Tempura frita"
          ],
          "correctAnswer": "Arroz avinagrado con acompañamientos",
          "explanation": "Sushi es arroz avinagrado, no pescado crudo.",
          "promptExtra": "Sushi"
        },
        {
          "id": "cp1-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Alga marina para enrollar",
            "Pasta de rábano picante",
            "Salsa de soja",
            "Jengibre encurtido"
          ],
          "correctAnswer": "Alga marina para enrollar",
          "explanation": "Nori es el alga que envuelve el maki.",
          "promptExtra": "Nori"
        },
        {
          "id": "cp1-e3",
          "type": "select",
          "prompt": "¿De qué país es el sushi?",
          "options": [
            "Japón",
            "China",
            "Corea",
            "Tailandia"
          ],
          "correctAnswer": "Japón",
          "explanation": "El sushi es originario de Japón."
        },
        {
          "id": "cp1-e4",
          "type": "select",
          "prompt": "¿Qué es el wasabi?",
          "options": [
            "Pasta picante de rábano japonés",
            "Salsa de soja dulce",
            "Alga marina",
            "Jengibre"
          ],
          "correctAnswer": "Pasta picante de rábano japonés",
          "explanation": "Wasabi = rábano picante japonés."
        },
        {
          "id": "cp1-e5",
          "type": "select",
          "prompt": "¿Con qué se sazona el arroz de sushi?",
          "options": [
            "Vinagre, azúcar y sal",
            "Salsa de soja",
            "Aceite de sésamo",
            "Sake"
          ],
          "correctAnswer": "Vinagre, azúcar y sal",
          "explanation": "El arroz se aliña con vinagre, azúcar y sal."
        },
        {
          "id": "cp1-e6",
          "type": "complete",
          "prompt": "Completa: El sushi es arroz ___ con acompañamientos",
          "options": [
            "avinagrado",
            "frito",
            "hervido",
            "dulce"
          ],
          "correctAnswer": "avinagrado",
          "explanation": "El arroz de sushi se sazona con vinagre.",
          "promptExtra": "avinagrado"
        },
        {
          "id": "cp1-e7",
          "type": "complete",
          "prompt": "Completa: El ___ envuelve los rollos maki",
          "options": [
            "nori",
            "wasabi",
            "jengibre",
            "tofu"
          ],
          "correctAnswer": "nori",
          "explanation": "Nori es el alga seca para enrollar.",
          "promptExtra": "nori"
        },
        {
          "id": "cp1-e8",
          "type": "arrange",
          "prompt": "Ordena los ingredientes del sushi",
          "options": [
            "Arroz",
            "Vinagre",
            "Pescado",
            "Nori"
          ],
          "correctAnswer": "Arroz Vinagre Pescado Nori",
          "explanation": "Componentes básicos del sushi."
        }
      ]
    },
    {
      "id": "plates-2",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Paella",
      "description": "El plato emblemático de España",
      "icon": "🥘",
      "xp": 40,
      "learnCards": [
        {
          "id": "cp2-l1",
          "word": "Paella",
          "translation": "Plato español de arroz cocinado en sartén ancha y plana",
          "example": "Originaria de Valencia."
        },
        {
          "id": "cp2-l2",
          "word": "Sofrito",
          "translation": "Base de cebolla, ajo y tomate cocinados lentamente",
          "example": "El alma del sabor mediterráneo."
        },
        {
          "id": "cp2-l3",
          "word": "Azafrán",
          "translation": "Especia que da el color amarillo característico",
          "example": "Es la especia más cara del mundo."
        },
        {
          "id": "cp2-l4",
          "word": "Socarrat",
          "translation": "Capa de arroz tostado en el fondo de la paella",
          "example": "La parte más sabrosa y crujiente."
        }
      ],
      "exercises": [
        {
          "id": "cp2-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Base de cebolla, ajo y tomate",
            "Especia amarilla",
            "Arroz tostado del fondo",
            "Sartén para paella"
          ],
          "correctAnswer": "Base de cebolla, ajo y tomate",
          "explanation": "El sofrito es la base de sabor.",
          "promptExtra": "Sofrito"
        },
        {
          "id": "cp2-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Base de cebolla, ajo y tomate",
            "Especia amarilla",
            "Arroz tostado del fondo",
            "Sartén para paella"
          ],
          "correctAnswer": "Arroz tostado del fondo",
          "explanation": "Socarrat es el arroz crujiente del fondo.",
          "promptExtra": "Socarrat"
        },
        {
          "id": "cp2-e3",
          "type": "select",
          "prompt": "¿De qué región es la paella?",
          "options": [
            "Valencia",
            "Cataluña",
            "Andalucía",
            "Madrid"
          ],
          "correctAnswer": "Valencia",
          "explanation": "La paella es originaria de Valencia."
        },
        {
          "id": "cp2-e4",
          "type": "select",
          "prompt": "¿Qué especia da el color amarillo?",
          "options": [
            "Azafrán",
            "Cúrcuma",
            "Pimentón",
            "Colorante"
          ],
          "correctAnswer": "Azafrán",
          "explanation": "El azafrán aporta color y sabor únicos."
        },
        {
          "id": "cp2-e5",
          "type": "select",
          "prompt": "¿Qué es el socarrat?",
          "options": [
            "Arroz tostado del fondo",
            "La sartén especial",
            "Un tipo de marisco",
            "La tapa de la paella"
          ],
          "correctAnswer": "Arroz tostado del fondo",
          "explanation": "Socarrat = capa crujiente de arroz."
        },
        {
          "id": "cp2-e6",
          "type": "complete",
          "prompt": "Completa: La paella se cocina en una ___ ancha",
          "options": [
            "sartén",
            "olla",
            "cazuela",
            "parrilla"
          ],
          "correctAnswer": "sartén",
          "explanation": "La paella se hace en sartén plana (paellera).",
          "promptExtra": "sartén"
        },
        {
          "id": "cp2-e7",
          "type": "complete",
          "prompt": "Completa: El ___ es la base de sabor mediterránea",
          "options": [
            "sofrito",
            "hervido",
            "asado",
            "frito"
          ],
          "correctAnswer": "sofrito",
          "explanation": "Sofrito = cebolla, ajo y tomate.",
          "promptExtra": "sofrito"
        },
        {
          "id": "cp2-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos de la paella",
          "options": [
            "Sofrito",
            "Arroz",
            "Caldo",
            "Reposo"
          ],
          "correctAnswer": "Sofrito Arroz Caldo Reposo",
          "explanation": "Secuencia básica de la paella."
        }
      ]
    },
    {
      "id": "plates-3",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Pizza",
      "description": "La pizza italiana auténtica",
      "icon": "🍕",
      "xp": 50,
      "learnCards": [
        {
          "id": "cp3-l1",
          "word": "Masa",
          "translation": "Harina, agua, levadura, sal y aceite. Reposo mínimo 2 horas",
          "example": "La masa fina y crujiente es clave."
        },
        {
          "id": "cp3-l2",
          "word": "Salsa",
          "translation": "Tomate triturado, ajo, aceite de oliva, albahaca y sal",
          "example": "No se cocina antes: va cruda sobre la masa."
        },
        {
          "id": "cp3-l3",
          "word": "Mozzarella",
          "translation": "Queso fresco italiano que se derrite en el horno",
          "example": "Mozzarella di bufala es la auténtica."
        },
        {
          "id": "cp3-l4",
          "word": "Horno",
          "translation": "Máximo calor posible (250-300 °C), pocos minutos",
          "example": "En horno de leña, 90 segundos."
        }
      ],
      "exercises": [
        {
          "id": "cp3-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Harina, agua, levadura y sal",
            "Tomate y albahaca",
            "Queso fresco italiano",
            "Calor máximo"
          ],
          "correctAnswer": "Harina, agua, levadura y sal",
          "explanation": "La masa es la base de la pizza.",
          "promptExtra": "Masa"
        },
        {
          "id": "cp3-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Harina, agua, levadura y sal",
            "Tomate y albahaca",
            "Queso fresco italiano",
            "Calor máximo"
          ],
          "correctAnswer": "Queso fresco italiano",
          "explanation": "Mozzarella es el queso tradicional de la pizza.",
          "promptExtra": "Mozzarella"
        },
        {
          "id": "cp3-e3",
          "type": "select",
          "prompt": "¿De dónde es originaria la pizza?",
          "options": [
            "Italia",
            "Francia",
            "Grecia",
            "España"
          ],
          "correctAnswer": "Italia",
          "explanation": "La pizza nació en Nápoles, Italia."
        },
        {
          "id": "cp3-e4",
          "type": "select",
          "prompt": "¿A qué temperatura se hornea la pizza?",
          "options": [
            "250-300 °C",
            "180 °C",
            "150 °C",
            "100 °C"
          ],
          "correctAnswer": "250-300 °C",
          "explanation": "La pizza necesita horno muy caliente."
        },
        {
          "id": "cp3-e5",
          "type": "select",
          "prompt": "¿Se cocina la salsa antes de ponerla?",
          "options": [
            "No, va cruda",
            "Sí, 30 min",
            "Sí, 1 hora",
            "Depende"
          ],
          "correctAnswer": "No, va cruda",
          "explanation": "La salsa de tomate va cruda sobre la masa."
        },
        {
          "id": "cp3-e6",
          "type": "complete",
          "prompt": "Completa: La auténtica pizza lleva ___ di bufala",
          "options": [
            "mozzarella",
            "cheddar",
            "parmesano",
            "gouda"
          ],
          "correctAnswer": "mozzarella",
          "explanation": "Mozzarella di bufala es la tradicional.",
          "promptExtra": "mozzarella"
        },
        {
          "id": "cp3-e7",
          "type": "complete",
          "prompt": "Completa: El horno debe estar al ___ calor posible",
          "options": [
            "máximo",
            "mínimo",
            "medio",
            "bajo"
          ],
          "correctAnswer": "máximo",
          "explanation": "Horno al máximo para pizza crujiente.",
          "promptExtra": "máximo"
        },
        {
          "id": "cp3-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos de la pizza",
          "options": [
            "Masa",
            "Salsa",
            "Queso",
            "Horno"
          ],
          "correctAnswer": "Masa Salsa Queso Horno",
          "explanation": "Secuencia de montaje de la pizza."
        }
      ]
    },
    {
      "id": "plates-4",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Tacos",
      "description": "El ícono de la cocina mexicana",
      "icon": "🌮",
      "xp": 60,
      "learnCards": [
        {
          "id": "cp4-l1",
          "word": "Tortilla",
          "translation": "Base de maíz o harina, suave y flexible",
          "example": "Las de maíz son las tradicionales."
        },
        {
          "id": "cp4-l2",
          "word": "Proteína",
          "translation": "Carnes como pastor, carnitas, barbacoa o pollo",
          "example": "El pastor lleva adobo de achiote y piña."
        },
        {
          "id": "cp4-l3",
          "word": "Salsa",
          "translation": "Desde pico de gallo hasta salsa verde o roja picante",
          "example": "La salsa da el toque final de sabor."
        },
        {
          "id": "cp4-l4",
          "word": "Guarnición",
          "translation": "Cebolla, cilantro, limón y piña completan el taco",
          "example": "El cilantro y la cebolla picados son esenciales."
        }
      ],
      "exercises": [
        {
          "id": "cp4-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Base de maíz o harina",
            "Carne adobada",
            "Salsa picante",
            "Cebolla y cilantro"
          ],
          "correctAnswer": "Base de maíz o harina",
          "explanation": "La tortilla es la base del taco.",
          "promptExtra": "Tortilla"
        },
        {
          "id": "cp4-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Base de maíz o harina",
            "Carne adobada",
            "Salsa picante",
            "Cebolla y cilantro"
          ],
          "correctAnswer": "Cebolla y cilantro",
          "explanation": "Cebolla, cilantro y limón son la guarnición clásica.",
          "promptExtra": "Guarnición"
        },
        {
          "id": "cp4-e3",
          "type": "select",
          "prompt": "¿De qué país son los tacos?",
          "options": [
            "México",
            "España",
            "Argentina",
            "Colombia"
          ],
          "correctAnswer": "México",
          "explanation": "Los tacos son el plato más famoso de México."
        },
        {
          "id": "cp4-e4",
          "type": "select",
          "prompt": "¿De qué son las tortillas tradicionales?",
          "options": [
            "Maíz",
            "Trigo",
            "Arroz",
            "Patata"
          ],
          "correctAnswer": "Maíz",
          "explanation": "Las tortillas originales son de maíz nixtamalizado."
        },
        {
          "id": "cp4-e5",
          "type": "select",
          "prompt": "¿Qué lleva el taco al pastor?",
          "options": [
            "Carne adobada con achiote y piña",
            "Pollo con mole",
            "Pescado frito",
            "Solo verduras"
          ],
          "correctAnswer": "Carne adobada con achiote y piña",
          "explanation": "El pastor es cerdo adobado con achiote."
        },
        {
          "id": "cp4-e6",
          "type": "complete",
          "prompt": "Completa: Las tortillas de ___ son las tradicionales",
          "options": [
            "maíz",
            "trigo",
            "arroz",
            "avena"
          ],
          "correctAnswer": "maíz",
          "explanation": "El maíz es la base de la cocina mexicana.",
          "promptExtra": "maíz"
        },
        {
          "id": "cp4-e7",
          "type": "complete",
          "prompt": "Completa: El ___ y la cebolla son la guarnición clásica",
          "options": [
            "cilantro",
            "perejil",
            "orégano",
            "laurel"
          ],
          "correctAnswer": "cilantro",
          "explanation": "Cilantro fresco picado es esencial.",
          "promptExtra": "cilantro"
        },
        {
          "id": "cp4-e8",
          "type": "arrange",
          "prompt": "Ordena el montaje de un taco",
          "options": [
            "Tortilla",
            "Carne",
            "Salsa",
            "Cilantro"
          ],
          "correctAnswer": "Tortilla Carne Salsa Cilantro",
          "explanation": "Secuencia de montaje del taco."
        }
      ]
    },
    {
      "id": "plates-5",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Curry",
      "description": "El plato especiado de la India y Asia",
      "icon": "🍛",
      "xp": 70,
      "learnCards": [
        {
          "id": "cp5-l1",
          "word": "Curry",
          "translation": "Plato de origen indio con mezcla de especias y salsa",
          "example": "No es una especia: es un plato con mezcla de especias."
        },
        {
          "id": "cp5-l2",
          "word": "Especias clave",
          "translation": "Cúrcuma, comino, cilantro, jengibre, garam masala",
          "example": "La cúrcuma da el color amarillo característico."
        },
        {
          "id": "cp5-l3",
          "word": "Base",
          "translation": "Cebolla, ajo y jengibre sofritos como punto de partida",
          "example": "El sofrito inicial define el sabor del curry."
        },
        {
          "id": "cp5-l4",
          "word": "Leche de coco",
          "translation": "Aporta cremosidad y suaviza el picante",
          "example": "Esencial en currys tailandeses e indios del sur."
        }
      ],
      "exercises": [
        {
          "id": "cp5-e1",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Especia que da color amarillo",
            "Base de cebolla y ajo",
            "Líquido cremoso",
            "Mezcla de especias"
          ],
          "correctAnswer": "Especia que da color amarillo",
          "explanation": "La cúrcuma aporta el color dorado.",
          "promptExtra": "Cúrcuma"
        },
        {
          "id": "cp5-e2",
          "type": "match",
          "prompt": "Empareja con su descripción",
          "options": [
            "Especia que da color amarillo",
            "Base de cebolla y ajo",
            "Líquido cremoso",
            "Mezcla de especias"
          ],
          "correctAnswer": "Líquido cremoso",
          "explanation": "La leche de coco suaviza y da cuerpo.",
          "promptExtra": "Leche de coco"
        },
        {
          "id": "cp5-e3",
          "type": "select",
          "prompt": "¿De dónde es originario el curry?",
          "options": [
            "India",
            "Tailandia",
            "China",
            "Japón"
          ],
          "correctAnswer": "India",
          "explanation": "El curry nació en la cocina india."
        },
        {
          "id": "cp5-e4",
          "type": "select",
          "prompt": "¿Qué especia da el color amarillo?",
          "options": [
            "Cúrcuma",
            "Comino",
            "Pimentón",
            "Canela"
          ],
          "correctAnswer": "Cúrcuma",
          "explanation": "La cúrcuma tiñe de amarillo dorado."
        },
        {
          "id": "cp5-e5",
          "type": "select",
          "prompt": "¿Qué hace la leche de coco en el curry?",
          "options": [
            "Aporta cremosidad",
            "Lo hace más picante",
            "Lo tiñe de rojo",
            "Lo vuelve ácido"
          ],
          "correctAnswer": "Aporta cremosidad",
          "explanation": "La leche de coco suaviza y da textura."
        },
        {
          "id": "cp5-e6",
          "type": "complete",
          "prompt": "Completa: El curry lleva ___ de coco para cremosidad",
          "options": [
            "leche",
            "agua",
            "aceite",
            "nata"
          ],
          "correctAnswer": "leche",
          "explanation": "Leche de coco = cremosidad y sabor.",
          "promptExtra": "leche"
        },
        {
          "id": "cp5-e7",
          "type": "complete",
          "prompt": "Completa: La cúrcuma da el color ___ al curry",
          "options": [
            "amarillo",
            "rojo",
            "verde",
            "marrón"
          ],
          "correctAnswer": "amarillo",
          "explanation": "Cúrcuma = color amarillo dorado.",
          "promptExtra": "amarillo"
        },
        {
          "id": "cp5-e8",
          "type": "arrange",
          "prompt": "Ordena los pasos del curry",
          "options": [
            "Sofrito",
            "Especias",
            "Leche",
            "Cocción"
          ],
          "correctAnswer": "Sofrito Especias Leche Cocción",
          "explanation": "Secuencia básica: sofrito, especias, líquido, cocer."
        }
      ]
    },
    {
      "id": "plates-6",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Cocina Tailandesa",
      "description": "El equilibrio de sabores: dulce, ácido, salado, picante",
      "icon": "🍜",
      "xp": 80,
      "learnCards": [
        {"id":"cp6-l1","word":"Pad Thai","translation":"Fideos de arroz salteados con tamarindo, cacahuate y lima","example":"El plato callejero más famoso de Tailandia."},
        {"id":"cp6-l2","word":"Curry tailandés","translation":"Pasta de curry con leche de coco: verde, rojo, amarillo","example":"Curry verde = más picante. Rojo = equilibrado."},
        {"id":"cp6-l3","word":"Salsa de pescado","translation":"Nam pla: condimento umami esencial tailandés","example":"Como la sal en occidente, pero con profundidad."},
        {"id":"cp6-l4","word":"Equilibrio tailandés","translation":"Cada plato busca balance dulce-ácido-salado-picante","example":"Tom Yum: lima (ácido), azúcar palma (dulce), chili (picante)."}
      ],
      "exercises": [
        {"id":"cp6-e1","type":"match","prompt":"Empareja con su descripción","options":["Fideos con tamarindo","Curry con leche coco","Condimento umami","Balance de 4 sabores"],"correctAnswer":"Fideos con tamarindo","explanation":"Pad Thai = fideos salteados.","promptExtra":"Pad Thai"},
        {"id":"cp6-e2","type":"match","prompt":"Empareja con su descripción","options":["Fideos con tamarindo","Curry con leche coco","Condimento umami","Balance de 4 sabores"],"correctAnswer":"Curry con leche coco","explanation":"Leche de coco suaviza el picante.","promptExtra":"Curry tailandés"},
        {"id":"cp6-e3","type":"select","prompt":"¿Qué es nam pla?","options":["Salsa de pescado tailandesa","Salsa de soja","Aceite de sésamo","Vinagre de arroz"],"correctAnswer":"Salsa de pescado tailandesa","explanation":"Nam pla = salsa de pescado fermentado."},
        {"id":"cp6-e4","type":"select","prompt":"¿Los 4 sabores del equilibrio tailandés?","options":["Dulce, ácido, salado, picante","Dulce, amargo, salado, umami","Ácido, amargo, dulce, graso","Salado, umami, ácido, graso"],"correctAnswer":"Dulce, ácido, salado, picante","explanation":"La cocina tailandesa busca armonía."},
        {"id":"cp6-e5","type":"select","prompt":"¿Qué curry tailandés es más picante?","options":["Verde","Rojo","Amarillo","Massaman"],"correctAnswer":"Verde","explanation":"El curry verde usa más chili fresco."},
        {"id":"cp6-e6","type":"complete","prompt":"Completa: ___ Thai (fideos tailandeses)","options":["Pad","Pat","Pod","Pid"],"correctAnswer":"Pad","explanation":"Pad Thai = fideos salteados.","promptExtra":"Pad"},
        {"id":"cp6-e7","type":"complete","prompt":"Completa: Salsa de ___ (umami tailandés)","options":["pescado","soja","ostra","chili"],"correctAnswer":"pescado","explanation":"Nam pla = salsa de pescado.","promptExtra":"pescado"},
        {"id":"cp6-e8","type":"arrange","prompt":"Ordena los sabores tailandeses","options":["Dulce","Ácido","Salado","Picante"],"correctAnswer":"Dulce Ácido Salado Picante","explanation":"Los 4 pilares de la cocina tailandesa."}
      ]
    },
    {
      "id": "plates-7",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Maridaje",
      "description": "El arte de combinar comida con vino y bebidas",
      "icon": "🍷",
      "xp": 80,
      "learnCards": [
        {"id":"cp7-l1","word":"Regla básica","translation":"Vino blanco con pescado, tinto con carne roja","example":"Pero hay excepciones: salmón con pinot noir."},
        {"id":"cp7-l2","word":"Por complemento","translation":"Sabores similares en comida y bebida","example":"Chocolate amargo con vino tinto robusto."},
        {"id":"cp7-l3","word":"Por contraste","translation":"Sabores opuestos se realzan mutuamente","example":"Queso azul salado + vino dulce (Sauternes)."},
        {"id":"cp7-l4","word":"Taninos","translation":"Componente del vino que une con proteínas y grasa","example":"Carne grasa + vino tánico = combinación perfecta."}
      ],
      "exercises": [
        {"id":"cp7-e1","type":"match","prompt":"Empareja con su descripción","options":["Blanco/pescado, tinto/carne","Sabores similares","Sabores opuestos","Componente del vino"],"correctAnswer":"Blanco/pescado, tinto/carne","explanation":"Regla clásica de maridaje.","promptExtra":"Regla básica"},
        {"id":"cp7-e2","type":"match","prompt":"Empareja con su descripción","options":["Blanco/pescado, tinto/carne","Sabores similares","Sabores opuestos","Componente del vino"],"correctAnswer":"Sabores similares","explanation":"Complemento = armonía.","promptExtra":"Complemento"},
        {"id":"cp7-e3","type":"select","prompt":"¿Qué vino con pescado blanco?","options":["Blanco seco","Tinto reserva","Rosado dulce","Espumoso dulce"],"correctAnswer":"Blanco seco","explanation":"Los blancos ligeros no opacan el pescado."},
        {"id":"cp7-e4","type":"select","prompt":"¿Por qué funciona tinto + carne grasa?","options":["Los taninos limpian la grasa del paladar","El alcohol la disuelve","El color combina","Por tradición"],"correctAnswer":"Los taninos limpian la grasa del paladar","explanation":"Taninos + grasa = equilibrio."},
        {"id":"cp7-e5","type":"select","prompt":"¿Ejemplo de maridaje por contraste?","options":["Queso azul + vino dulce","Pollo + vino blanco","Pasta + vino tinto","Ensalada + agua"],"correctAnswer":"Queso azul + vino dulce","explanation":"Salado + dulce = contraste ganador."},
        {"id":"cp7-e6","type":"complete","prompt":"Completa: Vino blanco con ___","options":["pescado","carne roja","chocolate","pasta"],"correctAnswer":"pescado","explanation":"Regla clásica: blanco con pescado."},
        {"id":"cp7-e7","type":"complete","prompt":"Completa: Los ___ limpian la grasa","options":["taninos","azúcares","ácidos","alcoholes"],"correctAnswer":"taninos","explanation":"Taninos del vino tinto."},
        {"id":"cp7-e8","type":"arrange","prompt":"Ordena: principios de maridaje","options":["Complemento","Contraste","Regionalidad","(misma","región)"],"correctAnswer":"Complemento Contraste Regionalidad (misma región)","explanation":"Los 3 enfoques del maridaje."}
      ]
    },
    {
      "id": "plates-8",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Cocina Molecular",
      "description": "Ciencia aplicada a la gastronomía",
      "icon": "🧪",
      "xp": 90,
      "learnCards": [
        {"id":"cp8-l1","word":"Esferificación","translation":"Crear esferas líquidas con alginato y calcio","example":"Caviar de mango: bolitas que explotan en boca."},
        {"id":"cp8-l2","word":"Nitrógeno líquido","translation":"Congelación instantánea a -196°C","example":"Helados cremosos en segundos, texturas únicas."},
        {"id":"cp8-l3","word":"Espumas y aires","translation":"Usar lecitina de soja para crear espumas estables","example":"Aire de limón sobre pescado."},
        {"id":"cp8-l4","word":"Gelificación","translation":"Agar-agar y gelatina para texturas controladas","example":"Gelatina caliente de maracuyá."}
      ],
      "exercises": [
        {"id":"cp8-e1","type":"match","prompt":"Empareja con su descripción","options":["Esferas líquidas","Congelar a -196°C","Espumas estables","Texturas con gelatina"],"correctAnswer":"Esferas líquidas","explanation":"Esferificación = alginato + calcio.","promptExtra":"Esferificación"},
        {"id":"cp8-e2","type":"match","prompt":"Empareja con su descripción","options":["Esferas líquidas","Congelar a -196°C","Espumas estables","Texturas con gelatina"],"correctAnswer":"Congelar a -196°C","explanation":"Nitrógeno líquido = frío extremo.","promptExtra":"Nitrógeno"},
        {"id":"cp8-e3","type":"select","prompt":"¿Qué se usa para esferificación?","options":["Alginato y calcio","Gelatina","Nitrógeno","Lecitina"],"correctAnswer":"Alginato y calcio","explanation":"Reacción de alginato sódico con cloruro cálcico."},
        {"id":"cp8-e4","type":"select","prompt":"¿Temperatura del nitrógeno líquido?","options":["-196°C","0°C","-50°C","100°C"],"correctAnswer":"-196°C","explanation":"Congelación casi instantánea."},
        {"id":"cp8-e5","type":"select","prompt":"¿Para qué sirve la lecitina de soja?","options":["Crear espumas y aires","Gelificar","Congelar","Esferificar"],"correctAnswer":"Crear espumas y aires","explanation":"Lecitina = emulsionante natural."},
        {"id":"cp8-e6","type":"complete","prompt":"Completa: ___ = esferas que explotan","options":["Esferificación","Gelificación","Emulsión","Congelación"],"correctAnswer":"Esferificación","explanation":"Crear perlas líquidas comestibles."},
        {"id":"cp8-e7","type":"complete","prompt":"Completa: ___ líquido a -196°C","options":["Nitrógeno","Oxígeno","Helio","Hidrógeno"],"correctAnswer":"Nitrógeno","explanation":"Nitrógeno líquido para cocina."},
        {"id":"cp8-e8","type":"arrange","prompt":"Ordena: proceso de esferificación","options":["Mezclar","alginato","con","líquido","Verter","en baño","de calcio"],"correctAnswer":"Mezclar alginato con líquido Verter en baño de calcio","explanation":"Así se crean las esferas."}
      ]
    },
    {
      "id": "plates-9",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Cocina de Autor",
      "description": "Creatividad, innovación y sello personal en el plato",
      "icon": "👨‍🍳",
      "xp": 90,
      "learnCards": [
        {"id":"cp9-l1","word":"Deconstrucción","translation":"Reinterpretar un plato clásico en nueva forma","example":"Tortilla de patatas: espuma de patata + huevo sous vide."},
        {"id":"cp9-l2","word":"Técnica + Emoción","translation":"La técnica al servicio de la memoria gustativa","example":"Platos que evocan la infancia con presentación moderna."},
        {"id":"cp9-l3","word":"Producto de temporada","translation":"Materia prima local y de temporada como inspiración","example":"Menú que cambia según lo que ofrece la huerta."},
        {"id":"cp9-l4","word":"Maridaje interno","translation":"Cada elemento del plato se complementa entre sí","example":"Textura crujiente + cremosa + ácida en un bocado."}
      ],
      "exercises": [
        {"id":"cp9-e1","type":"match","prompt":"Empareja con su descripción","options":["Reinventar clásico","Memoria gustativa","Inspiración local","Complemento interno"],"correctAnswer":"Reinventar clásico","explanation":"Deconstruir = nueva forma.","promptExtra":"Deconstrucción"},
        {"id":"cp9-e2","type":"match","prompt":"Empareja con su descripción","options":["Reinventar clásico","Memoria gustativa","Inspiración local","Complemento interno"],"correctAnswer":"Memoria gustativa","explanation":"Emoción + técnica.","promptExtra":"Técnica+Emoción"},
        {"id":"cp9-e3","type":"select","prompt":"¿Qué es deconstruir un plato?","options":["Presentar sus elementos de forma distinta","Destruir la cocina","Cocinar sin receta","Usar solo ingredientes crudos"],"correctAnswer":"Presentar sus elementos de forma distinta","explanation":"Mantiene sabores, cambia presentación."},
        {"id":"cp9-e4","type":"select","prompt":"¿Por qué usar producto de temporada?","options":["Mejor sabor y sostenibilidad","Es más barato siempre","Por obligación legal","No hay diferencia"],"correctAnswer":"Mejor sabor y sostenibilidad","explanation":"Temporada = sabor óptimo."},
        {"id":"cp9-e5","type":"select","prompt":"¿Qué es el maridaje interno?","options":["Elementos del plato se complementan","Maridar con vino","Cocinar varios platos","Combinar cocinas del mundo"],"correctAnswer":"Elementos del plato se complementan","explanation":"Cada componente tiene un propósito."},
        {"id":"cp9-e6","type":"complete","prompt":"Completa: ___ de un plato clásico","options":["Deconstrucción","Destrucción","Reconstrucción","Construcción"],"correctAnswer":"Deconstrucción","explanation":"Reinventar manteniendo la esencia."},
        {"id":"cp9-e7","type":"complete","prompt":"Completa: Producto de ___ (local, óptimo)","options":["temporada","importación","supermercado","marca"],"correctAnswer":"temporada","explanation":"Temporada = máximo sabor."},
        {"id":"cp9-e8","type":"arrange","prompt":"Ordena: crear plato de autor","options":["Elegir","producto","Aplicar","técnica","Expresar","emoción"],"correctAnswer":"Elegir producto Aplicar técnica Expresar emoción","explanation":"Los 3 pilares de la cocina de autor."}
      ]
    },
    {
      "id": "plates-10",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Cenas Temáticas",
      "description": "Diseña experiencias gastronómicas con concepto",
      "icon": "🎉",
      "xp": 90,
      "learnCards": [
        {"id":"cp10-l1","word":"Concepto","translation":"Tema que unifica el menú: región, color, estación","example":"Cena blanca: todos los platos con ingredientes blancos."},
        {"id":"cp10-l2","word":"Menú degustación","translation":"Varios platos pequeños que cuentan una historia","example":"5-8 tiempos con porciones controladas."},
        {"id":"cp10-l3","word":"Ritmo y secuencia","translation":"Progresión de sabores: ligero a intenso, salado a dulce","example":"Entrada ligera → plato principal → postre."},
        {"id":"cp10-l4","word":"Ambientación","translation":"Decoración, música e iluminación coherentes con el tema","example":"Música italiana + mantel a cuadros + velas."}
      ],
      "exercises": [
        {"id":"cp10-e1","type":"match","prompt":"Empareja con su descripción","options":["Tema unificador","Pequeños platos","Progresión de sabores","Decoración y atmósfera"],"correctAnswer":"Tema unificador","explanation":"Concepto = hilo conductor.","promptExtra":"Concepto"},
        {"id":"cp10-e2","type":"match","prompt":"Empareja con su descripción","options":["Tema unificador","Pequeños platos","Progresión de sabores","Decoración y atmósfera"],"correctAnswer":"Pequeños platos","explanation":"Degustación = secuencia de bocados.","promptExtra":"Degustación"},
        {"id":"cp10-e3","type":"select","prompt":"¿Cómo progresa un menú degustación?","options":["De ligero a intenso","Todo al mismo tiempo","De intenso a ligero","Aleatorio"],"correctAnswer":"De ligero a intenso","explanation":"El paladar se prepara gradualmente."},
        {"id":"cp10-e4","type":"select","prompt":"¿Cuántos tiempos en menú degustación?","options":["5-8 típicamente","1-2","15-20","Solo uno"],"correctAnswer":"5-8 típicamente","explanation":"Suficiente variedad sin saturar."},
        {"id":"cp10-e5","type":"select","prompt":"¿Qué incluye la ambientación?","options":["Música, luz, decoración","Solo la comida","Solo las bebidas","Solo los cubiertos"],"correctAnswer":"Música, luz, decoración","explanation":"La experiencia es 360 grados."},
        {"id":"cp10-e6","type":"complete","prompt":"Completa: Menú de ___ (varios tiempos)","options":["degustación","diario","infantil","rápido"],"correctAnswer":"degustación","explanation":"Degustación = variedad de bocados."},
        {"id":"cp10-e7","type":"complete","prompt":"Completa: Progresión: ___ a intenso","options":["ligero","fuerte","dulce","amargo"],"correctAnswer":"ligero","explanation":"De sabores suaves a potentes."},
        {"id":"cp10-e8","type":"arrange","prompt":"Ordena: planificar cena temática","options":["Elegir","concepto","Diseñar","menú","Crear","ambiente"],"correctAnswer":"Elegir concepto Diseñar menú Crear ambiente","explanation":"Planificación de experiencia gastronómica."}
      ]
    },
    {
      "id": "plates-11",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Cocina Fusión",
      "description": "Combinar tradiciones culinarias de diferentes culturas",
      "icon": "🌏",
      "xp": 100,
      "learnCards": [
        {"id":"cp11-l1","word":"Nikkei","translation":"Fusión peruano-japonesa: tiraditos, sushi con ají","example":"Tiradito: pescado fresco con salsa de ají amarillo."},
        {"id":"cp11-l2","word":"Tex-Mex","translation":"Cocina texana + mexicana: chili, nachos, fajitas","example":"Fajitas: carne a la parrilla + tortillas + guacamole."},
        {"id":"cp11-l3","word":"Regla de fusión","translation":"Respetar identidad de cada cocina, encontrar puntos en común","example":"Ambas usan arroz: paella japonesa o risotto asiático."},
        {"id":"cp11-l4","word":"Técnica vs Sabor","translation":"Técnica de una cultura, ingredientes de otra","example":"Tempura japonesa con verduras mediterráneas."}
      ],
      "exercises": [
        {"id":"cp11-e1","type":"match","prompt":"Empareja con su descripción","options":["Perú + Japón","Texas + México","Respetar identidades","Técnica + ingredientes"],"correctAnswer":"Perú + Japón","explanation":"Nikkei = fusión peruano-japonesa.","promptExtra":"Nikkei"},
        {"id":"cp11-e2","type":"match","prompt":"Empareja con su descripción","options":["Perú + Japón","Texas + México","Respetar identidades","Técnica + ingredientes"],"correctAnswer":"Texas + México","explanation":"Tex-Mex: chili con carne, nachos.","promptExtra":"Tex-Mex"},
        {"id":"cp11-e3","type":"select","prompt":"¿Qué es la cocina Nikkei?","options":["Fusión peruana y japonesa","Fusión china e italiana","Fusión mexicana y francesa","Fusión india y tailandesa"],"correctAnswer":"Fusión peruana y japonesa","explanation":"Inmigración japonesa en Perú."},
        {"id":"cp11-e4","type":"select","prompt":"¿Principio de buena fusión?","options":["Encontrar puntos en común","Mezclar todo","Ignorar tradiciones","Usar solo ingredientes caros"],"correctAnswer":"Encontrar puntos en común","explanation":"La fusión respeta ambas tradiciones."},
        {"id":"cp11-e5","type":"select","prompt":"¿Ejemplo de fusión técnica-ingredientes?","options":["Tempura de verduras mediterráneas","Paella valenciana","Sushi tradicional","Pizza margarita"],"correctAnswer":"Tempura de verduras mediterráneas","explanation":"Técnica japonesa + producto español."},
        {"id":"cp11-e6","type":"complete","prompt":"Completa: Cocina ___ (fusión Perú+Japón)","options":["Nikkei","Tex-Mex","Chifa","Fusión"],"correctAnswer":"Nikkei","explanation":"Nikkei = cocina peruano-japonesa."},
        {"id":"cp11-e7","type":"complete","prompt":"Completa: ___ = Texas + México","options":["Tex-Mex","Cajún","Sureña","Californiana"],"correctAnswer":"Tex-Mex","explanation":"Tex-Mex: fajitas, chili, nachos."},
        {"id":"cp11-e8","type":"arrange","prompt":"Ordena: crear plato fusión","options":["Identificar","puntos","comunes","Aplicar","técnica","Respetar","identidad"],"correctAnswer":"Identificar puntos comunes Aplicar técnica Respetar identidad","explanation":"Los 3 pasos de la fusión exitosa."}
      ]
    },
    {
      "id": "plates-12",
      "track": "cooking",
      "subTrack": "plates",
      "title": "Postres del Mundo",
      "description": "Un viaje dulce por los postres emblemáticos globales",
      "icon": "🍰",
      "xp": 100,
      "learnCards": [
        {"id":"cp12-l1","word":"Tiramisú","translation":"Postre italiano: mascarpone, café, cacao y bizcocho","example":"Sin horno, solo refrigeración."},
        {"id":"cp12-l2","word":"Crème Brûlée","translation":"Natilla francesa con costra de azúcar caramelizado","example":"El contraste: crema fría + caramelo caliente."},
        {"id":"cp12-l3","word":"Mochi","translation":"Pastelito japonés de arroz glutinoso relleno","example":"Relleno de anko (pasta de judía roja) o helado."},
        {"id":"cp12-l4","word":"Baklava","translation":"Pastel de capas de filo, frutos secos y miel","example":"Postre del Medio Oriente y Mediterráneo oriental."}
      ],
      "exercises": [
        {"id":"cp12-e1","type":"match","prompt":"Empareja con su origen","options":["Italia","Francia","Japón","Medio Oriente"],"correctAnswer":"Italia","explanation":"Tiramisú = italiano.","promptExtra":"Tiramisú"},
        {"id":"cp12-e2","type":"match","prompt":"Empareja con su origen","options":["Italia","Francia","Japón","Medio Oriente"],"correctAnswer":"Francia","explanation":"Crème Brûlée = francesa.","promptExtra":"Crème Brûlée"},
        {"id":"cp12-e3","type":"select","prompt":"¿De qué país es el tiramisú?","options":["Italia","Francia","España","Grecia"],"correctAnswer":"Italia","explanation":"Tiramisú nació en el Véneto, Italia."},
        {"id":"cp12-e4","type":"select","prompt":"¿Qué caracteriza la crème brûlée?","options":["Costra de caramelo crujiente","Se hornea","Lleva chocolate","Es un helado"],"correctAnswer":"Costra de caramelo crujiente","explanation":"El caramelo se quema con soplete."},
        {"id":"cp12-e5","type":"select","prompt":"¿Qué es el mochi?","options":["Pastelito de arroz glutinoso","Galleta de té verde","Helado frito","Pastel de chocolate"],"correctAnswer":"Pastelito de arroz glutinoso","explanation":"Mochi = textura elástica y suave."},
        {"id":"cp12-e6","type":"complete","prompt":"Completa: ___ Brûlée (natilla francesa)","options":["Crème","Creme","Crema","Cream"],"correctAnswer":"Crème","explanation":"Crème Brûlée = crema quemada."},
        {"id":"cp12-e7","type":"complete","prompt":"Completa: ___ = pastel de arroz japonés","options":["Mochi","Mochi","Sushi","Dango"],"correctAnswer":"Mochi","explanation":"Mochi: arroz glutinoso machacado."},
        {"id":"cp12-e8","type":"arrange","prompt":"Ordena: capas de baklava","options":["Masa","filo","Frutos","secos","Miel","jarabe"],"correctAnswer":"Masa filo Frutos secos Miel jarabe","explanation":"Capas de filo + frutos secos + miel."}
      ]
    }
  ];

const hiraganaLessons: Lesson[] = [
  {
    "id":"hiragana-1","track":"languages","subTrack":"hiragana","title":"Vocales hiragana","description":"Aprende las 5 vocales básicas del hiragana","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h1-l1","word":"あ","translation":"vocal a","phonetic":"a","note":"El hiragana es un silabario japonés. Cada símbolo representa una sílaba."},
      {"id":"h1-l2","word":"い","translation":"vocal i","phonetic":"i","note":"Las vocales son la base de todo el sistema hiragana."},
      {"id":"h1-l3","word":"う","translation":"vocal u","phonetic":"u","note":"En japonés la 'u' se pronuncia sin redondear los labios."},
      {"id":"h1-l4","word":"え","translation":"vocal e","phonetic":"e","note":"La 'e' japonesa suena como en español 'e'."}
    ],
    "exercises":[
      {"id":"h1-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"あ","options":["a","i","u","e"],"correctAnswer":"a","explanation":"あ se lee 'a'."},
      {"id":"h1-e2","type":"select","prompt":"¿Cómo se lee い?","options":["a","i","u","e"],"correctAnswer":"i","explanation":"い se lee 'i'."},
      {"id":"h1-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"う","options":["a","i","u","o"],"correctAnswer":"u","explanation":"う se lee 'u'."},
      {"id":"h1-e4","type":"select","prompt":"¿Qué símbolo representa el sonido 'a'?","options":["あ","い","う","え"],"correctAnswer":"あ","explanation":"あ = a, la primera vocal del hiragana."},
      {"id":"h1-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"え","options":["a","i","e","o"],"correctAnswer":"e","explanation":"え se lee 'e'."},
      {"id":"h1-e6","type":"select","prompt":"あ + い juntas se leen:","options":["ai","ia","ae","ei"],"correctAnswer":"ai","explanation":"あ(a) + い(i) = ai."},
      {"id":"h1-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"お","options":["a","u","e","o"],"correctAnswer":"o","explanation":"お se lee 'o'."},
      {"id":"h1-e8","type":"select","prompt":"¿Cuál NO es una vocal hiragana?","options":["か","あ","い","う"],"correctAnswer":"か","explanation":"か es ka, una consonante. Las vocales son あいうえお."}
    ]
  },
  {
    "id":"hiragana-2","track":"languages","subTrack":"hiragana","title":"Serie K","description":"Consonantes K: ka ki ku ke ko","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h2-l1","word":"か","translation":"ka","phonetic":"ka","note":"La serie K añade el trazo superior derecho a las vocales."},
      {"id":"h2-l2","word":"き","translation":"ki","phonetic":"ki","note":"き tiene un trazo curvo característico."},
      {"id":"h2-l3","word":"く","translation":"ku","phonetic":"ku","note":"く es uno de los hiragana más simples, un solo trazo."},
      {"id":"h2-l4","word":"け","translation":"ke","phonetic":"ke","note":"け combina trazo vertical y horizontal."}
    ],
    "exercises":[
      {"id":"h2-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"か","options":["ka","ki","ku","ke"],"correctAnswer":"ka","explanation":"か se lee 'ka'."},
      {"id":"h2-e2","type":"select","prompt":"¿Cómo se lee き?","options":["ka","ki","ku","ke"],"correctAnswer":"ki","explanation":"き se lee 'ki'."},
      {"id":"h2-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"く","options":["ka","ki","ku","ko"],"correctAnswer":"ku","explanation":"く se lee 'ku'."},
      {"id":"h2-e4","type":"select","prompt":"¿Qué símbolo representa 'ko'?","options":["こ","け","く","か"],"correctAnswer":"こ","explanation":"こ se lee 'ko'."},
      {"id":"h2-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"け","options":["ke","ki","ka","ko"],"correctAnswer":"ke","explanation":"け se lee 'ke'."},
      {"id":"h2-e6","type":"select","prompt":"か + お forma:","options":["kao","koa","keo","kai"],"correctAnswer":"kao","explanation":"か(ka) + お(o) = kao = rostro."},
      {"id":"h2-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"こ","options":["ko","ke","ku","ki"],"correctAnswer":"ko","explanation":"こ se lee 'ko'."},
      {"id":"h2-e8","type":"select","prompt":"¿Cuál pertenece a la serie K?","options":["き","さ","た","あ"],"correctAnswer":"き","explanation":"き = ki, pertenece a la serie K."}
    ]
  },
  {
    "id":"hiragana-3","track":"languages","subTrack":"hiragana","title":"Serie S","description":"Consonantes S: sa shi su se so","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h3-l1","word":"さ","translation":"sa","phonetic":"sa","note":"さ se parece a una 's' invertida."},
      {"id":"h3-l2","word":"し","translation":"shi","phonetic":"shi","note":"し es una excepción: se lee 'shi', no 'si'."},
      {"id":"h3-l3","word":"す","translation":"su","phonetic":"su","note":"す tiene un trazo curvo hacia abajo."},
      {"id":"h3-l4","word":"せ","translation":"se","phonetic":"se","note":"せ se asemeja a un rostro simplificado."}
    ],
    "exercises":[
      {"id":"h3-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"さ","options":["sa","shi","su","so"],"correctAnswer":"sa","explanation":"さ se lee 'sa'."},
      {"id":"h3-e2","type":"select","prompt":"し se lee:","options":["shi","si","sa","su"],"correctAnswer":"shi","explanation":"し es 'shi', una excepción fonética."},
      {"id":"h3-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"す","options":["sa","shi","su","se"],"correctAnswer":"su","explanation":"す se lee 'su'."},
      {"id":"h3-e4","type":"select","prompt":"¿Qué símbolo es 'so'?","options":["そ","せ","す","さ"],"correctAnswer":"そ","explanation":"そ se lee 'so'."},
      {"id":"h3-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"せ","options":["se","sa","so","shi"],"correctAnswer":"se","explanation":"せ se lee 'se'."},
      {"id":"h3-e6","type":"select","prompt":"す + し forma:","options":["sushi","suso","shisu","seshi"],"correctAnswer":"sushi","explanation":"す(su) + し(shi) = sushi."},
      {"id":"h3-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"そ","options":["so","se","su","sa"],"correctAnswer":"so","explanation":"そ se lee 'so'."},
      {"id":"h3-e8","type":"select","prompt":"¿Cuál se lee 'shi'?","options":["し","さ","す","せ"],"correctAnswer":"し","explanation":"し = shi, no si."}
    ]
  },
  {
    "id":"hiragana-4","track":"languages","subTrack":"hiragana","title":"Serie T","description":"Consonantes T: ta chi tsu te to","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h4-l1","word":"た","translation":"ta","phonetic":"ta","note":"た se forma con dos trazos cruzados."},
      {"id":"h4-l2","word":"ち","translation":"chi","phonetic":"chi","note":"ち es excepción: se lee 'chi', no 'ti'."},
      {"id":"h4-l3","word":"つ","translation":"tsu","phonetic":"tsu","note":"つ es excepción: se lee 'tsu', no 'tu'."},
      {"id":"h4-l4","word":"て","translation":"te","phonetic":"te","note":"て es un trazo curvo simple."}
    ],
    "exercises":[
      {"id":"h4-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"た","options":["ta","chi","tsu","te"],"correctAnswer":"ta","explanation":"た se lee 'ta'."},
      {"id":"h4-e2","type":"select","prompt":"ち se lee:","options":["chi","ti","tsu","ta"],"correctAnswer":"chi","explanation":"ち = chi, excepción de la serie T."},
      {"id":"h4-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"つ","options":["tsu","ta","chi","to"],"correctAnswer":"tsu","explanation":"つ se lee 'tsu'."},
      {"id":"h4-e4","type":"select","prompt":"¿Qué símbolo es 'to'?","options":["と","て","つ","た"],"correctAnswer":"と","explanation":"と se lee 'to'."},
      {"id":"h4-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"て","options":["te","ta","to","tsu"],"correctAnswer":"te","explanation":"て se lee 'te'."},
      {"id":"h4-e6","type":"select","prompt":"た + こ forma:","options":["tako","toku","taka","teko"],"correctAnswer":"tako","explanation":"た(ta) + こ(ko) = tako = pulpo."},
      {"id":"h4-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"と","options":["to","te","ta","chi"],"correctAnswer":"to","explanation":"と se lee 'to'."},
      {"id":"h4-e8","type":"select","prompt":"¿Cuál es 'tsu'?","options":["つ","ち","た","て"],"correctAnswer":"つ","explanation":"つ = tsu, excepción de la serie T."}
    ]
  },
  {
    "id":"hiragana-5","track":"languages","subTrack":"hiragana","title":"Serie N","description":"Consonantes N: na ni nu ne no","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h5-l1","word":"な","translation":"na","phonetic":"na","note":"な tiene un trazo curvilíneo con un lazo."},
      {"id":"h5-l2","word":"に","translation":"ni","phonetic":"ni","note":"に se asemeja al número 2 con un trazo."},
      {"id":"h5-l3","word":"ぬ","translation":"nu","phonetic":"nu","note":"ぬ tiene forma de lazo con cola curva."},
      {"id":"h5-l4","word":"ね","translation":"ne","phonetic":"ne","note":"ね es similar a ぬ pero con cola diferente."}
    ],
    "exercises":[
      {"id":"h5-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"な","options":["na","ni","nu","ne"],"correctAnswer":"na","explanation":"な se lee 'na'."},
      {"id":"h5-e2","type":"select","prompt":"に se lee:","options":["ni","na","nu","no"],"correctAnswer":"ni","explanation":"に se lee 'ni'."},
      {"id":"h5-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ぬ","options":["na","ni","nu","ne"],"correctAnswer":"nu","explanation":"ぬ se lee 'nu'."},
      {"id":"h5-e4","type":"select","prompt":"¿Qué símbolo es 'no'?","options":["の","ね","ぬ","な"],"correctAnswer":"の","explanation":"の se lee 'no'."},
      {"id":"h5-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ね","options":["ne","na","no","nu"],"correctAnswer":"ne","explanation":"ね se lee 'ne'."},
      {"id":"h5-e6","type":"select","prompt":"に + く forma:","options":["niku","niko","neku","naku"],"correctAnswer":"niku","explanation":"に(ni) + く(ku) = niku = carne."},
      {"id":"h5-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"の","options":["no","ne","nu","na"],"correctAnswer":"no","explanation":"の se lee 'no'."},
      {"id":"h5-e8","type":"select","prompt":"¿Cuál pertenece a la serie N?","options":["ね","め","れ","せ"],"correctAnswer":"ね","explanation":"ね = ne, serie N."}
    ]
  },
  {
    "id":"hiragana-6","track":"languages","subTrack":"hiragana","title":"Serie H","description":"Consonantes H: ha hi fu he ho","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h6-l1","word":"は","translation":"ha","phonetic":"ha","note":"は se lee 'wa' solo cuando es partícula."},
      {"id":"h6-l2","word":"ひ","translation":"hi","phonetic":"hi","note":"ひ tiene forma de U sonriente."},
      {"id":"h6-l3","word":"ふ","translation":"fu","phonetic":"fu","note":"ふ es excepción: se lee 'fu', no 'hu'."},
      {"id":"h6-l4","word":"へ","translation":"he","phonetic":"he","note":"へ es simple y se lee 'e' como partícula."}
    ],
    "exercises":[
      {"id":"h6-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"は","options":["ha","hi","fu","he"],"correctAnswer":"ha","explanation":"は se lee 'ha'."},
      {"id":"h6-e2","type":"select","prompt":"ふ se lee:","options":["fu","hu","ha","hi"],"correctAnswer":"fu","explanation":"ふ = fu, excepción de la serie H."},
      {"id":"h6-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ひ","options":["hi","ha","fu","ho"],"correctAnswer":"hi","explanation":"ひ se lee 'hi'."},
      {"id":"h6-e4","type":"select","prompt":"¿Qué símbolo es 'ho'?","options":["ほ","へ","は","ふ"],"correctAnswer":"ほ","explanation":"ほ se lee 'ho'."},
      {"id":"h6-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"へ","options":["he","ha","hi","ho"],"correctAnswer":"he","explanation":"へ se lee 'he'."},
      {"id":"h6-e6","type":"select","prompt":"は + な forma:","options":["hana","hani","hane","hanu"],"correctAnswer":"hana","explanation":"は(ha) + な(na) = hana = flor."},
      {"id":"h6-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ほ","options":["ho","he","ha","fu"],"correctAnswer":"ho","explanation":"ほ se lee 'ho'."},
      {"id":"h6-e8","type":"select","prompt":"¿Cuál es 'fu'?","options":["ふ","は","へ","ほ"],"correctAnswer":"ふ","explanation":"ふ = fu, no hu."}
    ]
  },
  {
    "id":"hiragana-7","track":"languages","subTrack":"hiragana","title":"Serie M","description":"Consonantes M: ma mi mu me mo","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h7-l1","word":"ま","translation":"ma","phonetic":"ma","note":"ま es como un trazo que baja y gira."},
      {"id":"h7-l2","word":"み","translation":"mi","phonetic":"mi","note":"み tiene un lazo elegante."},
      {"id":"h7-l3","word":"む","translation":"mu","phonetic":"mu","note":"む se parece a una vaca simplificada."},
      {"id":"h7-l4","word":"め","translation":"me","phonetic":"me","note":"め es casi idéntico a ぬ pero sin el lazo."}
    ],
    "exercises":[
      {"id":"h7-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ま","options":["ma","mi","mu","me"],"correctAnswer":"ma","explanation":"ま se lee 'ma'."},
      {"id":"h7-e2","type":"select","prompt":"み se lee:","options":["mi","ma","mu","mo"],"correctAnswer":"mi","explanation":"み se lee 'mi'."},
      {"id":"h7-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"む","options":["mu","ma","me","mo"],"correctAnswer":"mu","explanation":"む se lee 'mu'."},
      {"id":"h7-e4","type":"select","prompt":"¿Qué símbolo es 'mo'?","options":["も","め","む","ま"],"correctAnswer":"も","explanation":"も se lee 'mo'."},
      {"id":"h7-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"め","options":["me","ma","mi","mu"],"correctAnswer":"me","explanation":"め se lee 'me'."},
      {"id":"h7-e6","type":"select","prompt":"み + み forma:","options":["mimi","mima","memo","mimu"],"correctAnswer":"mimi","explanation":"み(mi) + み(mi) = mimi = oreja."},
      {"id":"h7-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"も","options":["mo","me","mu","ma"],"correctAnswer":"mo","explanation":"も se lee 'mo'."},
      {"id":"h7-e8","type":"select","prompt":"¿Cuál pertenece a la serie M?","options":["ま","な","は","ら"],"correctAnswer":"ま","explanation":"ま = ma, serie M."}
    ]
  },
  {
    "id":"hiragana-8","track":"languages","subTrack":"hiragana","title":"Serie Y","description":"Consonantes Y: ya yu yo","icon":"📝","xp":25,
    "learnCards":[
      {"id":"h8-l1","word":"や","translation":"ya","phonetic":"ya","note":"La serie Y solo tiene 3 caracteres básicos."},
      {"id":"h8-l2","word":"ゆ","translation":"yu","phonetic":"yu","note":"ゆ se parece a un pez estilizado."},
      {"id":"h8-l3","word":"よ","translation":"yo","phonetic":"yo","note":"よ es simple y elegante."},
      {"id":"h8-l4","word":"や","translation":"ya (repaso)","phonetic":"ya","note":"No existen yi ni ye en japonés moderno."}
    ],
    "exercises":[
      {"id":"h8-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"や","options":["ya","yu","yo","wa"],"correctAnswer":"ya","explanation":"や se lee 'ya'."},
      {"id":"h8-e2","type":"select","prompt":"ゆ se lee:","options":["yu","ya","yo","wa"],"correctAnswer":"yu","explanation":"ゆ se lee 'yu'."},
      {"id":"h8-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"よ","options":["yo","ya","yu","wa"],"correctAnswer":"yo","explanation":"よ se lee 'yo'."},
      {"id":"h8-e4","type":"select","prompt":"¿Cuántos caracteres tiene la serie Y?","options":["3","5","4","2"],"correctAnswer":"3","explanation":"La serie Y tiene solo や ゆ よ."},
      {"id":"h8-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ゆ","options":["ya","yu","yo","wa"],"correctAnswer":"yu","explanation":"ゆ se lee 'yu'."},
      {"id":"h8-e6","type":"select","prompt":"や + ま forma:","options":["yama","yamu","yemo","yami"],"correctAnswer":"yama","explanation":"や(ya) + ま(ma) = yama = montaña."},
      {"id":"h8-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"や","options":["ya","yu","yo","ye"],"correctAnswer":"ya","explanation":"や se lee 'ya'."},
      {"id":"h8-e8","type":"select","prompt":"¿Cuál NO existe en japonés moderno?","options":["yi","ya","yu","yo"],"correctAnswer":"yi","explanation":"Yi y ye no existen en japonés moderno."}
    ]
  },
  {
    "id":"hiragana-9","track":"languages","subTrack":"hiragana","title":"Serie R","description":"Consonantes R: ra ri ru re ro","icon":"📝","xp":30,
    "learnCards":[
      {"id":"h9-l1","word":"ら","translation":"ra","phonetic":"ra","note":"La R japonesa es suave, entre R y L."},
      {"id":"h9-l2","word":"り","translation":"ri","phonetic":"ri","note":"り parece un gancho doble."},
      {"id":"h9-l3","word":"る","translation":"ru","phonetic":"ru","note":"る tiene un lazo al final."},
      {"id":"h9-l4","word":"れ","translation":"re","phonetic":"re","note":"れ tiene un trazo recto con curva al final."}
    ],
    "exercises":[
      {"id":"h9-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ら","options":["ra","ri","ru","re"],"correctAnswer":"ra","explanation":"ら se lee 'ra'."},
      {"id":"h9-e2","type":"select","prompt":"り se lee:","options":["ri","ra","ru","ro"],"correctAnswer":"ri","explanation":"り se lee 'ri'."},
      {"id":"h9-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"る","options":["ru","ra","ri","ro"],"correctAnswer":"ru","explanation":"る se lee 'ru'."},
      {"id":"h9-e4","type":"select","prompt":"¿Qué símbolo es 'ro'?","options":["ろ","れ","る","ら"],"correctAnswer":"ろ","explanation":"ろ se lee 'ro'."},
      {"id":"h9-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"れ","options":["re","ra","ru","ro"],"correctAnswer":"re","explanation":"れ se lee 're'."},
      {"id":"h9-e6","type":"select","prompt":"ら + め + ん forma:","options":["ramen","ramon","remen","ramun"],"correctAnswer":"ramen","explanation":"ら(ra) + め(me) + ん(n) = ramen."},
      {"id":"h9-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ろ","options":["ro","re","ru","ra"],"correctAnswer":"ro","explanation":"ろ se lee 'ro'."},
      {"id":"h9-e8","type":"select","prompt":"La R japonesa se pronuncia:","options":["Suave, entre R y L","Fuerte como en español","Como L inglesa","No existe"],"correctAnswer":"Suave, entre R y L","explanation":"La R japonesa es un sonido suave entre R y L."}
    ]
  },
  {
    "id":"hiragana-10","track":"languages","subTrack":"hiragana","title":"Serie W y N","description":"Consonantes W: wa wo + n final","icon":"📝","xp":25,
    "learnCards":[
      {"id":"h10-l1","word":"わ","translation":"wa","phonetic":"wa","note":"わ se parece a ね pero más ancho."},
      {"id":"h10-l2","word":"を","translation":"wo (o)","phonetic":"o","note":"を se pronuncia 'o' y es partícula de objeto."},
      {"id":"h10-l3","word":"ん","translation":"n","phonetic":"n","note":"ん es la única consonante sola del hiragana."},
      {"id":"h10-l4","word":"わ","translation":"wa (repaso)","phonetic":"wa","note":"La serie W moderna solo tiene わ y を."}
    ],
    "exercises":[
      {"id":"h10-e1","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"わ","options":["wa","wo","n","ya"],"correctAnswer":"wa","explanation":"わ se lee 'wa'."},
      {"id":"h10-e2","type":"select","prompt":"を se pronuncia:","options":["o","wo","wa","u"],"correctAnswer":"o","explanation":"を se pronuncia 'o', igual que お."},
      {"id":"h10-e3","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ん","options":["n","wa","wo","m"],"correctAnswer":"n","explanation":"ん se lee 'n'."},
      {"id":"h10-e4","type":"select","prompt":"¿Cuál es la única consonante sola?","options":["ん","を","わ","し"],"correctAnswer":"ん","explanation":"ん = n, única consonante sin vocal."},
      {"id":"h10-e5","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"を","options":["o","wa","wo","n"],"correctAnswer":"o","explanation":"を se pronuncia 'o'."},
      {"id":"h10-e6","type":"select","prompt":"わ + た + し forma:","options":["watashi","watasu","wateshi","watishi"],"correctAnswer":"watashi","explanation":"わ(wa) + た(ta) + し(shi) = watashi = yo."},
      {"id":"h10-e7","type":"match","prompt":"Empareja el hiragana con su sonido","promptExtra":"ん","options":["n","m","ng","wa"],"correctAnswer":"n","explanation":"ん se lee 'n'."},
      {"id":"h10-e8","type":"select","prompt":"¿Para qué se usa を?","options":["Partícula de objeto","Partícula de tema","Verbo ser","Número"],"correctAnswer":"Partícula de objeto","explanation":"を es la partícula que marca el objeto directo."}
    ]
  },
  {
    "id":"hiragana-11","track":"languages","subTrack":"hiragana","title":"Repaso I","description":"Repaso de vocales y series K+S","icon":"📝","xp":35,
    "learnCards":[
      {"id":"h11-l1","word":"あい","translation":"ai (amor)","phonetic":"ai","note":"あ(a) + い(i) = ai = amor."},
      {"id":"h11-l2","word":"いえ","translation":"ie (casa)","phonetic":"ie","note":"い(i) + え(e) = ie = casa."},
      {"id":"h11-l3","word":"うえ","translation":"ue (arriba)","phonetic":"ue","note":"う(u) + え(e) = ue = arriba."},
      {"id":"h11-l4","word":"かお","translation":"kao (rostro)","phonetic":"kao","note":"か(ka) + お(o) = kao = rostro."}
    ],
    "exercises":[
      {"id":"h11-e1","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"あい","options":["amor","casa","arriba","rostro"],"correctAnswer":"amor","explanation":"あい = ai = amor."},
      {"id":"h11-e2","type":"select","prompt":"いえ significa:","options":["casa","amor","fuego","agua"],"correctAnswer":"casa","explanation":"い(i) + え(e) = ie = casa."},
      {"id":"h11-e3","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"うえ","options":["arriba","casa","rostro","amor"],"correctAnswer":"arriba","explanation":"うえ = ue = arriba."},
      {"id":"h11-e4","type":"select","prompt":"かお se lee:","options":["kao","keo","kai","koe"],"correctAnswer":"kao","explanation":"か(ka) + お(o) = kao."},
      {"id":"h11-e5","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"すし","options":["sushi","sopa","arroz","pescado"],"correctAnswer":"sushi","explanation":"す(su) + し(shi) = sushi."},
      {"id":"h11-e6","type":"select","prompt":"か + お forma la palabra:","options":["rostro","amor","casa","mano"],"correctAnswer":"rostro","explanation":"かお = kao = rostro."},
      {"id":"h11-e7","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"いえ","options":["casa","rostro","arriba","amor"],"correctAnswer":"casa","explanation":"いえ = ie = casa."},
      {"id":"h11-e8","type":"select","prompt":"あい significa:","options":["amor","casa","montaña","río"],"correctAnswer":"amor","explanation":"あい = ai = amor."}
    ]
  },
  {
    "id":"hiragana-12","track":"languages","subTrack":"hiragana","title":"Repaso II","description":"Repaso de series T+N+H+M","icon":"📝","xp":35,
    "learnCards":[
      {"id":"h12-l1","word":"たこ","translation":"tako (pulpo)","phonetic":"tako","note":"た(ta) + こ(ko) = tako = pulpo."},
      {"id":"h12-l2","word":"にく","translation":"niku (carne)","phonetic":"niku","note":"に(ni) + く(ku) = niku = carne."},
      {"id":"h12-l3","word":"はな","translation":"hana (flor)","phonetic":"hana","note":"は(ha) + な(na) = hana = flor."},
      {"id":"h12-l4","word":"みみ","translation":"mimi (oreja)","phonetic":"mimi","note":"み(mi) + み(mi) = mimi = oreja."}
    ],
    "exercises":[
      {"id":"h12-e1","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"たこ","options":["pulpo","carne","flor","oreja"],"correctAnswer":"pulpo","explanation":"たこ = tako = pulpo."},
      {"id":"h12-e2","type":"select","prompt":"にく significa:","options":["carne","pulpo","flor","pez"],"correctAnswer":"carne","explanation":"に(ni) + く(ku) = niku = carne."},
      {"id":"h12-e3","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"はな","options":["flor","pulpo","carne","oreja"],"correctAnswer":"flor","explanation":"はな = hana = flor."},
      {"id":"h12-e4","type":"select","prompt":"みみ se lee:","options":["mimi","mimu","mime","mimo"],"correctAnswer":"mimi","explanation":"み(mi) + み(mi) = mimi."},
      {"id":"h12-e5","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"ねこ","options":["gato","perro","pulpo","flor"],"correctAnswer":"gato","explanation":"ね(ne) + こ(ko) = neko = gato."},
      {"id":"h12-e6","type":"select","prompt":"た + こ forma:","options":["pulpo","carne","flor","oreja"],"correctAnswer":"pulpo","explanation":"たこ = tako = pulpo."},
      {"id":"h12-e7","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"みみ","options":["oreja","flor","gato","carne"],"correctAnswer":"oreja","explanation":"みみ = mimi = oreja."},
      {"id":"h12-e8","type":"select","prompt":"はな es:","options":["flor","gato","pulpo","carne"],"correctAnswer":"flor","explanation":"はな = hana = flor."}
    ]
  }
];

const kanjiLessons: Lesson[] = [
  {
    "id":"kanji-1","track":"languages","subTrack":"kanji","title":"Kanji: Números","description":"Números 1 al 3 en kanji","icon":"漢","xp":25,
    "learnCards":[
      {"id":"k1-l1","word":"一","translation":"uno (ichi)","phonetic":"ichi","note":"Un solo trazo horizontal. El kanji más simple."},
      {"id":"k1-l2","word":"二","translation":"dos (ni)","phonetic":"ni","note":"Dos trazos horizontales, uno sobre otro."},
      {"id":"k1-l3","word":"三","translation":"tres (san)","phonetic":"san","note":"Tres trazos horizontales. Fácil de recordar."},
      {"id":"k1-l4","word":"一","translation":"uno (repaso)","phonetic":"ichi","note":"Los kanji numéricos son ideogramas: representan ideas."}
    ],
    "exercises":[
      {"id":"k1-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"一","options":["uno","dos","tres","cuatro"],"correctAnswer":"uno","explanation":"一 = ichi = uno."},
      {"id":"k1-e2","type":"select","prompt":"二 se lee:","options":["ni","ichi","san","shi"],"correctAnswer":"ni","explanation":"二 = ni = dos."},
      {"id":"k1-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"三","options":["tres","uno","dos","cinco"],"correctAnswer":"tres","explanation":"三 = san = tres."},
      {"id":"k1-e4","type":"select","prompt":"¿Cuál es el kanji más simple?","options":["一","二","三","日"],"correctAnswer":"一","explanation":"一 es un solo trazo, el más simple."},
      {"id":"k1-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"二","options":["ni","ichi","san","go"],"correctAnswer":"ni","explanation":"二 se lee 'ni'."},
      {"id":"k1-e6","type":"select","prompt":"三 tiene cuántos trazos:","options":["3","1","2","4"],"correctAnswer":"3","explanation":"三 = tres trazos horizontales."},
      {"id":"k1-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"一","options":["ichi","ni","san","yon"],"correctAnswer":"ichi","explanation":"一 se lee 'ichi'."},
      {"id":"k1-e8","type":"select","prompt":"¿Qué kanji significa tres?","options":["三","一","二","四"],"correctAnswer":"三","explanation":"三 = tres."}
    ]
  },
  {
    "id":"kanji-2","track":"languages","subTrack":"kanji","title":"Kanji: Números II","description":"Números 4 al 6 en kanji","icon":"漢","xp":25,
    "learnCards":[
      {"id":"k2-l1","word":"四","translation":"cuatro (shi/yon)","phonetic":"shi/yon","note":"四 parece una caja con piernas. Tiene 5 trazos."},
      {"id":"k2-l2","word":"五","translation":"cinco (go)","phonetic":"go","note":"五 tiene forma de cruz con base."},
      {"id":"k2-l3","word":"六","translation":"seis (roku)","phonetic":"roku","note":"六 parece un techo con patas."},
      {"id":"k2-l4","word":"五","translation":"cinco (repaso)","phonetic":"go","note":"En japonés, 'shi' (4) suena como muerte, por eso se usa 'yon'."}
    ],
    "exercises":[
      {"id":"k2-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"四","options":["cuatro","cinco","seis","tres"],"correctAnswer":"cuatro","explanation":"四 = cuatro."},
      {"id":"k2-e2","type":"select","prompt":"五 se lee:","options":["go","roku","shi","san"],"correctAnswer":"go","explanation":"五 = go = cinco."},
      {"id":"k2-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"六","options":["seis","cinco","cuatro","siete"],"correctAnswer":"seis","explanation":"六 = roku = seis."},
      {"id":"k2-e4","type":"select","prompt":"¿Por qué se evita 'shi' para 4?","options":["Suena como 'muerte'","Es difícil","Es informal","No existe"],"correctAnswer":"Suena como 'muerte'","explanation":"Shi también significa muerte. Se prefiere 'yon'."},
      {"id":"k2-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"六","options":["roku","go","shi","hachi"],"correctAnswer":"roku","explanation":"六 se lee 'roku'."},
      {"id":"k2-e6","type":"select","prompt":"四 + 月 forma:","options":["abril","mayo","junio","marzo"],"correctAnswer":"abril","explanation":"四月 = shigatsu = abril (mes 4)."},
      {"id":"k2-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"五","options":["go","roku","yon","nana"],"correctAnswer":"go","explanation":"五 se lee 'go'."},
      {"id":"k2-e8","type":"select","prompt":"六 + 月 es:","options":["junio","julio","mayo","agosto"],"correctAnswer":"junio","explanation":"六月 = rokugatsu = junio (mes 6)."}
    ]
  },
  {
    "id":"kanji-3","track":"languages","subTrack":"kanji","title":"Kanji: Números III","description":"Números 7 al 10 en kanji","icon":"漢","xp":30,
    "learnCards":[
      {"id":"k3-l1","word":"七","translation":"siete (shichi/nana)","phonetic":"shichi","note":"七 parece una cruz inclinada o un 7 al revés."},
      {"id":"k3-l2","word":"八","translation":"ocho (hachi)","phonetic":"hachi","note":"八 son dos trazos que se abren como abanico."},
      {"id":"k3-l3","word":"九","translation":"nueve (kyuu/ku)","phonetic":"kyuu","note":"九 parece un gancho con curva."},
      {"id":"k3-l4","word":"十","translation":"diez (juu)","phonetic":"juu","note":"十 es una cruz, símbolo del número 10 perfecto."}
    ],
    "exercises":[
      {"id":"k3-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"七","options":["siete","ocho","nueve","diez"],"correctAnswer":"siete","explanation":"七 = shichi = siete."},
      {"id":"k3-e2","type":"select","prompt":"八 se lee:","options":["hachi","shichi","kyuu","juu"],"correctAnswer":"hachi","explanation":"八 = hachi = ocho."},
      {"id":"k3-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"九","options":["nueve","ocho","siete","diez"],"correctAnswer":"nueve","explanation":"九 = kyuu = nueve."},
      {"id":"k3-e4","type":"select","prompt":"十 significa:","options":["diez","ocho","nueve","cien"],"correctAnswer":"diez","explanation":"十 = juu = diez."},
      {"id":"k3-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"十","options":["juu","kyuu","hachi","nana"],"correctAnswer":"juu","explanation":"十 se lee 'juu'."},
      {"id":"k3-e6","type":"select","prompt":"七 + 月:","options":["julio","agosto","septiembre","junio"],"correctAnswer":"julio","explanation":"七月 = shichigatsu = julio (mes 7)."},
      {"id":"k3-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"八","options":["hachi","shichi","kyuu","roku"],"correctAnswer":"hachi","explanation":"八 se lee 'hachi'."},
      {"id":"k3-e8","type":"select","prompt":"十 + 一 forma el número:","options":["11","10","9","12"],"correctAnswer":"11","explanation":"十一 = juu-ichi = once (10+1)."}
    ]
  },
  {
    "id":"kanji-4","track":"languages","subTrack":"kanji","title":"Kanji: Naturaleza","description":"Sol, luna y fuego","icon":"漢","xp":30,
    "learnCards":[
      {"id":"k4-l1","word":"日","translation":"sol / día (nichi/hi)","phonetic":"nichi","note":"Rectángulo con línea al medio. Representa el sol."},
      {"id":"k4-l2","word":"月","translation":"luna / mes (getsu/tsuki)","phonetic":"getsu","note":"Similar a 日 pero con patas curvas."},
      {"id":"k4-l3","word":"火","translation":"fuego (ka/hi)","phonetic":"ka","note":"Parece una persona con brazos agitados. Representa llamas."},
      {"id":"k4-l4","word":"日","translation":"día (repaso)","phonetic":"hi","note":"日 también significa Japón en compuestos como 日本."}
    ],
    "exercises":[
      {"id":"k4-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"日","options":["sol / día","luna","fuego","agua"],"correctAnswer":"sol / día","explanation":"日 = sol, día."},
      {"id":"k4-e2","type":"select","prompt":"月 significa:","options":["luna / mes","sol","estrella","fuego"],"correctAnswer":"luna / mes","explanation":"月 = luna, mes."},
      {"id":"k4-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"火","options":["fuego","sol","agua","tierra"],"correctAnswer":"fuego","explanation":"火 = fuego."},
      {"id":"k4-e4","type":"select","prompt":"日 + 曜 + 日 forma:","options":["domingo","lunes","sábado","viernes"],"correctAnswer":"domingo","explanation":"日曜日 = nichiyoubi = domingo."},
      {"id":"k4-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"月","options":["getsu","nichi","ka","sui"],"correctAnswer":"getsu","explanation":"月 se lee 'getsu' o 'tsuki'."},
      {"id":"k4-e6","type":"select","prompt":"月 + 曜 + 日 es:","options":["lunes","martes","domingo","miércoles"],"correctAnswer":"lunes","explanation":"月曜日 = getsuyoubi = lunes."},
      {"id":"k4-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"火","options":["ka","nichi","getsu","do"],"correctAnswer":"ka","explanation":"火 se lee 'ka'."},
      {"id":"k4-e8","type":"select","prompt":"火 + 曜 + 日 significa:","options":["martes","lunes","jueves","viernes"],"correctAnswer":"martes","explanation":"火曜日 = kayoubi = martes."}
    ]
  },
  {
    "id":"kanji-5","track":"languages","subTrack":"kanji","title":"Kanji: Naturaleza II","description":"Agua, árbol y oro/metal","icon":"漢","xp":30,
    "learnCards":[
      {"id":"k5-l1","word":"水","translation":"agua (sui/mizu)","phonetic":"sui","note":"Parece agua cayendo en cascada."},
      {"id":"k5-l2","word":"木","translation":"árbol / madera (moku/ki)","phonetic":"moku","note":"Parece un árbol con raíces y ramas."},
      {"id":"k5-l3","word":"金","translation":"oro / dinero (kin/kane)","phonetic":"kin","note":"Parece un techo sobre un tesoro."},
      {"id":"k5-l4","word":"水","translation":"agua (repaso)","phonetic":"mizu","note":"Los 5 elementos chinos: 日火水木金 (sol, fuego, agua, madera, metal)."}
    ],
    "exercises":[
      {"id":"k5-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"水","options":["agua","árbol","oro","tierra"],"correctAnswer":"agua","explanation":"水 = agua."},
      {"id":"k5-e2","type":"select","prompt":"木 significa:","options":["árbol / madera","agua","fuego","metal"],"correctAnswer":"árbol / madera","explanation":"木 = árbol, madera."},
      {"id":"k5-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"金","options":["oro / dinero","plata","metal","árbol"],"correctAnswer":"oro / dinero","explanation":"金 = oro, dinero, metal."},
      {"id":"k5-e4","type":"select","prompt":"水 + 曜 + 日 es:","options":["miércoles","martes","jueves","lunes"],"correctAnswer":"miércoles","explanation":"水曜日 = suiyoubi = miércoles."},
      {"id":"k5-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"木","options":["moku","sui","kin","do"],"correctAnswer":"moku","explanation":"木 se lee 'moku' o 'ki'."},
      {"id":"k5-e6","type":"select","prompt":"木 + 曜 + 日:","options":["jueves","miércoles","viernes","martes"],"correctAnswer":"jueves","explanation":"木曜日 = mokuyoubi = jueves."},
      {"id":"k5-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"金","options":["kin","moku","sui","ka"],"correctAnswer":"kin","explanation":"金 se lee 'kin'."},
      {"id":"k5-e8","type":"select","prompt":"金 + 曜 + 日 significa:","options":["viernes","jueves","sábado","lunes"],"correctAnswer":"viernes","explanation":"金曜日 = kinyoubi = viernes."}
    ]
  },
  {
    "id":"kanji-6","track":"languages","subTrack":"kanji","title":"Kanji: Naturaleza III","description":"Tierra, montaña y río","icon":"漢","xp":30,
    "learnCards":[
      {"id":"k6-l1","word":"土","translation":"tierra / suelo (do/tsuchi)","phonetic":"do","note":"Una cruz sobre una línea. Representa la tierra."},
      {"id":"k6-l2","word":"山","translation":"montaña (san/yama)","phonetic":"san","note":"Tres picos como una cordillera."},
      {"id":"k6-l3","word":"川","translation":"río (sen/kawa)","phonetic":"sen","note":"Tres líneas verticales que fluyen como un río."},
      {"id":"k6-l4","word":"山","translation":"montaña (repaso)","phonetic":"yama","note":"山 se usa en nombres como 富士山 (Fujisan)."}
    ],
    "exercises":[
      {"id":"k6-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"土","options":["tierra","montaña","río","fuego"],"correctAnswer":"tierra","explanation":"土 = tierra, suelo."},
      {"id":"k6-e2","type":"select","prompt":"山 significa:","options":["montaña","tierra","río","volcán"],"correctAnswer":"montaña","explanation":"山 = montaña."},
      {"id":"k6-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"川","options":["río","montaña","tierra","mar"],"correctAnswer":"río","explanation":"川 = río."},
      {"id":"k6-e4","type":"select","prompt":"土 + 曜 + 日 es:","options":["sábado","domingo","viernes","lunes"],"correctAnswer":"sábado","explanation":"土曜日 = doyoubi = sábado."},
      {"id":"k6-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"山","options":["san","do","sen","kin"],"correctAnswer":"san","explanation":"山 se lee 'san' o 'yama'."},
      {"id":"k6-e6","type":"select","prompt":"富士山 se lee:","options":["Fujisan","Fujiyama","Fujisan o Fujiyama","Yamafuji"],"correctAnswer":"Fujisan","explanation":"富士山 = Fujisan (Monte Fuji)."},
      {"id":"k6-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"川","options":["sen","san","do","kin"],"correctAnswer":"sen","explanation":"川 se lee 'sen' o 'kawa'."},
      {"id":"k6-e8","type":"select","prompt":"¿Cuál representa una cordillera?","options":["山","川","土","火"],"correctAnswer":"山","explanation":"山 = montaña, parece una cordillera."}
    ]
  },
  {
    "id":"kanji-7","track":"languages","subTrack":"kanji","title":"Kanji: Personas","description":"Persona, niño y mujer","icon":"漢","xp":30,
    "learnCards":[
      {"id":"k7-l1","word":"人","translation":"persona (jin/hito)","phonetic":"jin","note":"Parece una persona caminando con dos piernas."},
      {"id":"k7-l2","word":"子","translation":"niño (shi/ko)","phonetic":"shi","note":"Parece un niño con brazos abiertos."},
      {"id":"k7-l3","word":"女","translation":"mujer (jo/onna)","phonetic":"jo","note":"Traza curvas que sugieren una figura femenina."},
      {"id":"k7-l4","word":"人","translation":"persona (repaso)","phonetic":"hito","note":"人 se usa en 日本人 (nihonjin = japonés)."}
    ],
    "exercises":[
      {"id":"k7-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"人","options":["persona","niño","mujer","hombre"],"correctAnswer":"persona","explanation":"人 = persona."},
      {"id":"k7-e2","type":"select","prompt":"子 significa:","options":["niño","persona","mujer","adulto"],"correctAnswer":"niño","explanation":"子 = niño."},
      {"id":"k7-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"女","options":["mujer","niño","persona","hombre"],"correctAnswer":"mujer","explanation":"女 = mujer."},
      {"id":"k7-e4","type":"select","prompt":"日 + 本 + 人 es:","options":["japonés","chino","coreano","español"],"correctAnswer":"japonés","explanation":"日本人 = nihonjin = japonés."},
      {"id":"k7-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"子","options":["shi","jin","jo","dan"],"correctAnswer":"shi","explanation":"子 se lee 'shi' o 'ko'."},
      {"id":"k7-e6","type":"select","prompt":"女 + の + 子 forma:","options":["niña","niño","mujer","persona"],"correctAnswer":"niña","explanation":"女の子 = onna no ko = niña."},
      {"id":"k7-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"女","options":["jo","jin","shi","dan"],"correctAnswer":"jo","explanation":"女 se lee 'jo' u 'onna'."},
      {"id":"k7-e8","type":"select","prompt":"¿Cuál significa persona?","options":["人","入","八","大"],"correctAnswer":"人","explanation":"人 = persona."}
    ]
  },
  {
    "id":"kanji-8","track":"languages","subTrack":"kanji","title":"Kanji: Familia","description":"Hombre, padre y madre","icon":"漢","xp":30,
    "learnCards":[
      {"id":"k8-l1","word":"男","translation":"hombre (dan/otoko)","phonetic":"dan","note":"Combina 田 (arrozal) + 力 (fuerza) = hombre."},
      {"id":"k8-l2","word":"父","translation":"padre (fu/chichi)","phonetic":"fu","note":"Parece una figura con autoridad."},
      {"id":"k8-l3","word":"母","translation":"madre (bo/haha)","phonetic":"bo","note":"Similar a 父 pero con curvas maternas."},
      {"id":"k8-l4","word":"男","translation":"hombre (repaso)","phonetic":"otoko","note":"男の子 = otoko no ko = niño (varón)."}
    ],
    "exercises":[
      {"id":"k8-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"男","options":["hombre","padre","madre","niño"],"correctAnswer":"hombre","explanation":"男 = hombre."},
      {"id":"k8-e2","type":"select","prompt":"父 significa:","options":["padre","hombre","madre","hijo"],"correctAnswer":"padre","explanation":"父 = padre."},
      {"id":"k8-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"母","options":["madre","padre","hombre","mujer"],"correctAnswer":"madre","explanation":"母 = madre."},
      {"id":"k8-e4","type":"select","prompt":"男 + の + 子 es:","options":["niño (varón)","hombre","padre","niña"],"correctAnswer":"niño (varón)","explanation":"男の子 = otoko no ko = niño."},
      {"id":"k8-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"父","options":["fu","bo","dan","jo"],"correctAnswer":"fu","explanation":"父 se lee 'fu' o 'chichi'."},
      {"id":"k8-e6","type":"select","prompt":"お + 父 + さん:","options":["padre (formal)","madre","hermano","abuelo"],"correctAnswer":"padre (formal)","explanation":"お父さん = otousan = papá."},
      {"id":"k8-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"母","options":["bo","fu","dan","jo"],"correctAnswer":"bo","explanation":"母 se lee 'bo' o 'haha'."},
      {"id":"k8-e8","type":"select","prompt":"お + 母 + さん significa:","options":["madre (formal)","padre","abuela","hermana"],"correctAnswer":"madre (formal)","explanation":"お母さん = okaasan = mamá."}
    ]
  },
  {
    "id":"kanji-9","track":"languages","subTrack":"kanji","title":"Kanji: Cuerpo","description":"Ojo, boca, oreja y mano","icon":"漢","xp":35,
    "learnCards":[
      {"id":"k9-l1","word":"目","translation":"ojo (moku/me)","phonetic":"moku","note":"Rectángulo girado con líneas. Parece un ojo."},
      {"id":"k9-l2","word":"口","translation":"boca (kou/kuchi)","phonetic":"kou","note":"Un cuadrado abierto. Representa una boca."},
      {"id":"k9-l3","word":"耳","translation":"oreja (ji/mimi)","phonetic":"ji","note":"Trazo vertical con líneas internas."},
      {"id":"k9-l4","word":"手","translation":"mano (shu/te)","phonetic":"shu","note":"Tres trazos horizontales con uno vertical."}
    ],
    "exercises":[
      {"id":"k9-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"目","options":["ojo","boca","oreja","mano"],"correctAnswer":"ojo","explanation":"目 = ojo."},
      {"id":"k9-e2","type":"select","prompt":"口 significa:","options":["boca","ojo","nariz","oreja"],"correctAnswer":"boca","explanation":"口 = boca."},
      {"id":"k9-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"耳","options":["oreja","boca","ojo","mano"],"correctAnswer":"oreja","explanation":"耳 = oreja."},
      {"id":"k9-e4","type":"select","prompt":"手 es:","options":["mano","pie","brazo","dedo"],"correctAnswer":"mano","explanation":"手 = mano."},
      {"id":"k9-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"目","options":["moku","kou","ji","shu"],"correctAnswer":"moku","explanation":"目 se lee 'moku' o 'me'."},
      {"id":"k9-e6","type":"select","prompt":"出 + 口 forma:","options":["salida","entrada","ventana","puerta"],"correctAnswer":"salida","explanation":"出口 = deguchi = salida."},
      {"id":"k9-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"手","options":["shu","moku","kou","ji"],"correctAnswer":"shu","explanation":"手 se lee 'shu' o 'te'."},
      {"id":"k9-e8","type":"select","prompt":"入 + 口 significa:","options":["entrada","salida","boca","puerta"],"correctAnswer":"entrada","explanation":"入口 = iriguchi = entrada."}
    ]
  },
  {
    "id":"kanji-10","track":"languages","subTrack":"kanji","title":"Kanji: Tiempo","description":"Año, tiempo/hora y minuto","icon":"漢","xp":30,
    "learnCards":[
      {"id":"k10-l1","word":"年","translation":"año (nen/toshi)","phonetic":"nen","note":"Parece una planta con tres hojas."},
      {"id":"k10-l2","word":"時","translation":"tiempo / hora (ji/toki)","phonetic":"ji","note":"Combina 日 (sol) y 寺 (templo)."},
      {"id":"k10-l3","word":"分","translation":"minuto / parte (fun/bun)","phonetic":"fun","note":"Parece un cuchillo partiendo algo."},
      {"id":"k10-l4","word":"時","translation":"hora (repaso)","phonetic":"toki","note":"時 se usa para formar horas: 一時 = ichiji = 1:00."}
    ],
    "exercises":[
      {"id":"k10-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"年","options":["año","hora","minuto","día"],"correctAnswer":"año","explanation":"年 = año."},
      {"id":"k10-e2","type":"select","prompt":"時 significa:","options":["tiempo / hora","año","minuto","segundo"],"correctAnswer":"tiempo / hora","explanation":"時 = tiempo, hora."},
      {"id":"k10-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"分","options":["minuto","hora","año","día"],"correctAnswer":"minuto","explanation":"分 = minuto, parte."},
      {"id":"k10-e4","type":"select","prompt":"一 + 時 es:","options":["la 1:00","un año","1 minuto","un día"],"correctAnswer":"la 1:00","explanation":"一時 = ichiji = la 1 en punto."},
      {"id":"k10-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"年","options":["nen","ji","fun","getsu"],"correctAnswer":"nen","explanation":"年 se lee 'nen' o 'toshi'."},
      {"id":"k10-e6","type":"select","prompt":"二 + 十 + 分 significa:","options":["20 minutos","2 horas","12 minutos","20 horas"],"correctAnswer":"20 minutos","explanation":"二十分 = nijuppun = 20 minutos."},
      {"id":"k10-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"分","options":["fun","ji","nen","nichi"],"correctAnswer":"fun","explanation":"分 se lee 'fun' o 'bun'."},
      {"id":"k10-e8","type":"select","prompt":"半 (half) + 分 forma:","options":["medio minuto","media hora","1 minuto","30 segundos"],"correctAnswer":"medio minuto","explanation":"半分 = hanbun = mitad."}
    ]
  },
  {
    "id":"kanji-11","track":"languages","subTrack":"kanji","title":"Kanji: Dirección","description":"Arriba, abajo, dentro y fuera","icon":"漢","xp":35,
    "learnCards":[
      {"id":"k11-l1","word":"上","translation":"arriba (jou/ue)","phonetic":"jou","note":"Línea sobre otra línea. Todo lo que está arriba."},
      {"id":"k11-l2","word":"下","translation":"abajo (ka/shita)","phonetic":"ka","note":"Línea debajo de otra. Todo lo que está abajo."},
      {"id":"k11-l3","word":"中","translation":"dentro / medio (chuu/naka)","phonetic":"chuu","note":"Línea vertical atravesando un rectángulo."},
      {"id":"k11-l4","word":"外","translation":"fuera (gai/soto)","phonetic":"gai","note":"Combina 夕 y una barra vertical."}
    ],
    "exercises":[
      {"id":"k11-e1","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"上","options":["arriba","abajo","dentro","fuera"],"correctAnswer":"arriba","explanation":"上 = arriba."},
      {"id":"k11-e2","type":"select","prompt":"下 significa:","options":["abajo","arriba","dentro","fuera"],"correctAnswer":"abajo","explanation":"下 = abajo."},
      {"id":"k11-e3","type":"match","prompt":"Empareja el kanji con su significado","promptExtra":"中","options":["dentro","arriba","abajo","fuera"],"correctAnswer":"dentro","explanation":"中 = dentro, medio."},
      {"id":"k11-e4","type":"select","prompt":"外 es:","options":["fuera","dentro","arriba","abajo"],"correctAnswer":"fuera","explanation":"外 = fuera."},
      {"id":"k11-e5","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"中","options":["chuu","jou","ka","gai"],"correctAnswer":"chuu","explanation":"中 se lee 'chuu' o 'naka'."},
      {"id":"k11-e6","type":"select","prompt":"中 + 国 significa:","options":["China","Japón","Corea","centro"],"correctAnswer":"China","explanation":"中国 = Chuugoku = China."},
      {"id":"k11-e7","type":"match","prompt":"Empareja el kanji con su lectura","promptExtra":"外","options":["gai","chuu","jou","ka"],"correctAnswer":"gai","explanation":"外 se lee 'gai' o 'soto'."},
      {"id":"k11-e8","type":"select","prompt":"外 + 国 es:","options":["extranjero","fuera","China","Japón"],"correctAnswer":"extranjero","explanation":"外国 = gaikoku = extranjero."}
    ]
  },
  {
    "id":"kanji-12","track":"languages","subTrack":"kanji","title":"Kanji: Japón","description":"Sol, origen, Japón e idioma","icon":"漢","xp":40,
    "learnCards":[
      {"id":"k12-l1","word":"日","translation":"sol / día (nichi)","phonetic":"ni","note":"日 aquí se usa como 'ni' en 日本."},
      {"id":"k12-l2","word":"本","translation":"origen / libro (hon/moto)","phonetic":"hon","note":"Árbol (木) con una raíz marcada."},
      {"id":"k12-l3","word":"日本","translation":"Japón (nihon)","phonetic":"nihon","note":"日(sol) + 本(origen) = origen del sol = Japón."},
      {"id":"k12-l4","word":"語","translation":"idioma (go)","phonetic":"go","note":"Combina 言 (palabra) y 吾 (yo)."}
    ],
    "exercises":[
      {"id":"k12-e1","type":"match","prompt":"Empareja con su significado","promptExtra":"日本","options":["Japón","China","Corea","sol"],"correctAnswer":"Japón","explanation":"日本 = Nihon/Nippon = Japón."},
      {"id":"k12-e2","type":"select","prompt":"日 + 本 literalmente:","options":["origen del sol","sol brillante","día completo","libro del día"],"correctAnswer":"origen del sol","explanation":"日(sol) + 本(origen) = Japón."},
      {"id":"k12-e3","type":"match","prompt":"Empareja con su significado","promptExtra":"語","options":["idioma","Japón","libro","persona"],"correctAnswer":"idioma","explanation":"語 = idioma."},
      {"id":"k12-e4","type":"select","prompt":"日 + 本 + 語 es:","options":["idioma japonés","persona japonesa","comida japonesa","libro japonés"],"correctAnswer":"idioma japonés","explanation":"日本語 = nihongo = idioma japonés."},
      {"id":"k12-e5","type":"match","prompt":"Empareja con su significado","promptExtra":"本","options":["origen / libro","sol","idioma","persona"],"correctAnswer":"origen / libro","explanation":"本 = origen, libro."},
      {"id":"k12-e6","type":"select","prompt":"日 + 本 + 人:","options":["persona japonesa","idioma japonés","Japón","libro japonés"],"correctAnswer":"persona japonesa","explanation":"日本人 = nihonjin = japonés."},
      {"id":"k12-e7","type":"match","prompt":"Empareja con su lectura","promptExtra":"日本","options":["nihon","nippon","nihon o nippon","nikoku"],"correctAnswer":"nihon o nippon","explanation":"日本 se lee Nihon o Nippon."},
      {"id":"k12-e8","type":"select","prompt":"¿Qué significa 'Nihongo'?","options":["idioma japonés","persona japonesa","Japón","estudiante"],"correctAnswer":"idioma japonés","explanation":"日本語 = nihongo = japonés (idioma)."}
    ]
  }
];

const hangulLessons: Lesson[] = [
  {
    "id":"hangul-1","track":"languages","subTrack":"hangul","title":"Hangul: Vocales","description":"Vocales simples del hangul coreano","icon":"한","xp":30,
    "learnCards":[
      {"id":"g1-l1","word":"ㅏ","translation":"a","phonetic":"a","note":"El hangul fue creado por el Rey Sejong en 1443. Es un alfabeto fonético."},
      {"id":"g1-l2","word":"ㅓ","translation":"eo","phonetic":"eo","note":"'eo' suena como una 'o' abierta, entre 'o' y 'a'."},
      {"id":"g1-l3","word":"ㅗ","translation":"o","phonetic":"o","note":"ㅗ es una 'o' cerrada, con los labios redondeados."},
      {"id":"g1-l4","word":"ㅜ","translation":"u","phonetic":"u","note":"ㅜ es una 'u' como en español 'tú'."}
    ],
    "exercises":[
      {"id":"g1-e1","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅏ","options":["a","eo","o","u"],"correctAnswer":"a","explanation":"ㅏ se lee 'a'."},
      {"id":"g1-e2","type":"select","prompt":"ㅓ se lee:","options":["eo","a","o","u"],"correctAnswer":"eo","explanation":"ㅓ = eo, una 'o' abierta."},
      {"id":"g1-e3","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅗ","options":["o","a","eo","u"],"correctAnswer":"o","explanation":"ㅗ se lee 'o'."},
      {"id":"g1-e4","type":"select","prompt":"¿Qué símbolo representa 'u'?","options":["ㅜ","ㅏ","ㅓ","ㅗ"],"correctAnswer":"ㅜ","explanation":"ㅜ = u."},
      {"id":"g1-e5","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅣ","options":["i","a","o","u"],"correctAnswer":"i","explanation":"ㅣ se lee 'i'."},
      {"id":"g1-e6","type":"select","prompt":"ㅏ + ㅣ forma:","options":["ae","ai","ia","eo"],"correctAnswer":"ae","explanation":"ㅏ(a) + ㅣ(i) = ㅐ(ae)."},
      {"id":"g1-e7","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅡ","options":["eu","u","o","a"],"correctAnswer":"eu","explanation":"ㅡ = eu, vocal neutra."},
      {"id":"g1-e8","type":"select","prompt":"¿Quién creó el hangul?","options":["Rey Sejong","Rey Sejong el Grande","Dinastía Joseon","Budismo"],"correctAnswer":"Rey Sejong el Grande","explanation":"El Rey Sejong el Grande creó el hangul en 1443."}
    ]
  },
  {
    "id":"hangul-2","track":"languages","subTrack":"hangul","title":"Hangul: Vocales II","description":"Vocales compuestas con y","icon":"한","xp":25,
    "learnCards":[
      {"id":"g2-l1","word":"ㅑ","translation":"ya","phonetic":"ya","note":"Añadiendo un trazo extra a ㅏ se obtiene ㅑ (ya)."},
      {"id":"g2-l2","word":"ㅕ","translation":"yeo","phonetic":"yeo","note":"ㅕ = yeo, una 'o' abierta con sonido y."},
      {"id":"g2-l3","word":"ㅛ","translation":"yo","phonetic":"yo","note":"ㅛ = yo. El trazo doble indica palatalización."},
      {"id":"g2-l4","word":"ㅠ","translation":"yu","phonetic":"yu","note":"ㅠ = yu. Igual que la u pero con palatalización."}
    ],
    "exercises":[
      {"id":"g2-e1","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅑ","options":["ya","yeo","yo","yu"],"correctAnswer":"ya","explanation":"ㅑ se lee 'ya'."},
      {"id":"g2-e2","type":"select","prompt":"ㅕ se lee:","options":["yeo","ya","yo","yu"],"correctAnswer":"yeo","explanation":"ㅕ = yeo."},
      {"id":"g2-e3","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅛ","options":["yo","ya","yeo","yu"],"correctAnswer":"yo","explanation":"ㅛ se lee 'yo'."},
      {"id":"g2-e4","type":"select","prompt":"¿Qué símbolo es 'yu'?","options":["ㅠ","ㅛ","ㅑ","ㅕ"],"correctAnswer":"ㅠ","explanation":"ㅠ = yu."},
      {"id":"g2-e5","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅑ","options":["ya","a","eo","yeo"],"correctAnswer":"ya","explanation":"ㅑ se lee 'ya'."},
      {"id":"g2-e6","type":"select","prompt":"ㅑ se diferencia de ㅏ por:","options":["Un trazo extra","Es más pequeño","Es una consonante","No hay diferencia"],"correctAnswer":"Un trazo extra","explanation":"El trazo extra añade el sonido 'y'."},
      {"id":"g2-e7","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅠ","options":["yu","yo","u","yeo"],"correctAnswer":"yu","explanation":"ㅠ se lee 'yu'."},
      {"id":"g2-e8","type":"select","prompt":"¿Cuál es la 'o' palatalizada?","options":["ㅛ","ㅗ","ㅜ","ㅓ"],"correctAnswer":"ㅛ","explanation":"ㅛ = yo, o palatalizada."}
    ]
  },
  {
    "id":"hangul-3","track":"languages","subTrack":"hangul","title":"Hangul: Vocales III","description":"Vocales ae, e y variantes","icon":"한","xp":25,
    "learnCards":[
      {"id":"g3-l1","word":"ㅐ","translation":"ae","phonetic":"ae","note":"ㅐ = a + i. Suena como 'e' abierta."},
      {"id":"g3-l2","word":"ㅔ","translation":"e","phonetic":"e","note":"ㅔ = eo + i. Muy similar a ㅐ en coreano moderno."},
      {"id":"g3-l3","word":"ㅒ","translation":"yae","phonetic":"yae","note":"ㅒ = ya + i. Uso poco frecuente."},
      {"id":"g3-l4","word":"ㅖ","translation":"ye","phonetic":"ye","note":"ㅖ = yeo + i. Se usa en pocas palabras."}
    ],
    "exercises":[
      {"id":"g3-e1","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅐ","options":["ae","e","yae","ye"],"correctAnswer":"ae","explanation":"ㅐ se lee 'ae'."},
      {"id":"g3-e2","type":"select","prompt":"ㅔ se lee:","options":["e","ae","ye","eo"],"correctAnswer":"e","explanation":"ㅔ = e."},
      {"id":"g3-e3","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅒ","options":["yae","ye","ae","e"],"correctAnswer":"yae","explanation":"ㅒ = yae."},
      {"id":"g3-e4","type":"select","prompt":"¿Cuál se usa poco en coreano?","options":["ㅒ","ㅐ","ㅔ","ㅏ"],"correctAnswer":"ㅒ","explanation":"ㅒ (yae) es de uso poco frecuente."},
      {"id":"g3-e5","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅖ","options":["ye","yae","e","ae"],"correctAnswer":"ye","explanation":"ㅖ se lee 'ye'."},
      {"id":"g3-e6","type":"select","prompt":"ㅐ y ㅔ en coreano moderno:","options":["Suenan casi igual","Son muy diferentes","No se usan","Son consonantes"],"correctAnswer":"Suenan casi igual","explanation":"En coreano moderno, ㅐ y ㅔ suenan casi idénticos."},
      {"id":"g3-e7","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅔ","options":["e","ae","ye","eo"],"correctAnswer":"e","explanation":"ㅔ se lee 'e'."},
      {"id":"g3-e8","type":"select","prompt":"ㅐ se forma de:","options":["ㅏ + ㅣ","ㅓ + ㅣ","ㅗ + ㅣ","ㅜ + ㅣ"],"correctAnswer":"ㅏ + ㅣ","explanation":"ㅏ(a) + ㅣ(i) = ㅐ(ae)."}
    ]
  },
  {
    "id":"hangul-4","track":"languages","subTrack":"hangul","title":"Hangul: Consonantes","description":"Primeras consonantes básicas","icon":"한","xp":30,
    "learnCards":[
      {"id":"g4-l1","word":"ㄱ","translation":"g / k","phonetic":"g/k","note":"ㄱ representa la forma de la lengua tocando el paladar."},
      {"id":"g4-l2","word":"ㄴ","translation":"n","phonetic":"n","note":"ㄴ imita la forma de la lengua tocando el paladar superior."},
      {"id":"g4-l3","word":"ㄷ","translation":"d / t","phonetic":"d/t","note":"ㄷ representa la lengua tocando los dientes."},
      {"id":"g4-l4","word":"ㄹ","translation":"r / l","phonetic":"r/l","note":"ㄹ es un sonido entre R y L. La lengua vibra suavemente."}
    ],
    "exercises":[
      {"id":"g4-e1","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㄱ","options":["g/k","n","d/t","r/l"],"correctAnswer":"g/k","explanation":"ㄱ = g/k."},
      {"id":"g4-e2","type":"select","prompt":"ㄴ se lee:","options":["n","g","d","r"],"correctAnswer":"n","explanation":"ㄴ = n."},
      {"id":"g4-e3","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㄷ","options":["d/t","g/k","n","r/l"],"correctAnswer":"d/t","explanation":"ㄷ = d/t."},
      {"id":"g4-e4","type":"select","prompt":"¿Qué sonido está entre R y L?","options":["ㄹ","ㄱ","ㄴ","ㄷ"],"correctAnswer":"ㄹ","explanation":"ㄹ = r/l, un sonido intermedio."},
      {"id":"g4-e5","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㄹ","options":["r/l","d/t","n","g/k"],"correctAnswer":"r/l","explanation":"ㄹ se lee 'r/l'."},
      {"id":"g4-e6","type":"select","prompt":"Las consonantes hangul imitan:","options":["La forma de la boca","Sonidos de animales","Letras chinas","Números"],"correctAnswer":"La forma de la boca","explanation":"Las consonantes hangul se basan en la forma de los órganos articulatorios."},
      {"id":"g4-e7","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㄴ","options":["n","g","d","l"],"correctAnswer":"n","explanation":"ㄴ se lee 'n'."},
      {"id":"g4-e8","type":"select","prompt":"ㄱ + ㅏ forma:","options":["ga","ka","na","da"],"correctAnswer":"ga","explanation":"ㄱ(g) + ㅏ(a) = 가(ga)."}
    ]
  },
  {
    "id":"hangul-5","track":"languages","subTrack":"hangul","title":"Hangul: Consonantes II","description":"Consonantes m, b, s, ng","icon":"한","xp":30,
    "learnCards":[
      {"id":"g5-l1","word":"ㅁ","translation":"m","phonetic":"m","note":"ㅁ es un cuadrado, como la boca cerrada."},
      {"id":"g5-l2","word":"ㅂ","translation":"b / p","phonetic":"b/p","note":"ㅂ imita la forma de los labios juntos."},
      {"id":"g5-l3","word":"ㅅ","translation":"s","phonetic":"s","note":"ㅅ parece un diente, de donde sale el aire."},
      {"id":"g5-l4","word":"ㅇ","translation":"ng / mudo","phonetic":"ng/-","note":"ㅇ al inicio es mudo, al final suena 'ng'."}
    ],
    "exercises":[
      {"id":"g5-e1","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅁ","options":["m","b/p","s","ng"],"correctAnswer":"m","explanation":"ㅁ = m."},
      {"id":"g5-e2","type":"select","prompt":"ㅂ se lee:","options":["b/p","m","s","ng"],"correctAnswer":"b/p","explanation":"ㅂ = b/p."},
      {"id":"g5-e3","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅅ","options":["s","m","b/p","r/l"],"correctAnswer":"s","explanation":"ㅅ = s."},
      {"id":"g5-e4","type":"select","prompt":"ㅇ al inicio de sílaba:","options":["Es mudo","Suena ng","Suena h","Suena n"],"correctAnswer":"Es mudo","explanation":"ㅇ es mudo al inicio, ng al final."},
      {"id":"g5-e5","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅇ","options":["ng / mudo","m","s","b"],"correctAnswer":"ng / mudo","explanation":"ㅇ = ng (final) o mudo (inicial)."},
      {"id":"g5-e6","type":"select","prompt":"ㅁ + ㅏ forma:","options":["ma","na","ba","sa"],"correctAnswer":"ma","explanation":"ㅁ(m) + ㅏ(a) = 마(ma)."},
      {"id":"g5-e7","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅂ","options":["b/p","m","s","d"],"correctAnswer":"b/p","explanation":"ㅂ se lee 'b/p'."},
      {"id":"g5-e8","type":"select","prompt":"ㅅ + ㅏ es:","options":["sa","sha","ja","cha"],"correctAnswer":"sa","explanation":"ㅅ(s) + ㅏ(a) = 사(sa)."}
    ]
  },
  {
    "id":"hangul-6","track":"languages","subTrack":"hangul","title":"Hangul: Consonantes III","description":"Consonantes j, ch, k, t","icon":"한","xp":30,
    "learnCards":[
      {"id":"g6-l1","word":"ㅈ","translation":"j","phonetic":"j","note":"ㅈ se parece a ㅅ con un trazo extra arriba."},
      {"id":"g6-l2","word":"ㅊ","translation":"ch","phonetic":"ch","note":"ㅊ es como ㅈ pero con un trazo superior más fuerte."},
      {"id":"g6-l3","word":"ㅋ","translation":"k (aspirado)","phonetic":"k","note":"ㅋ es la versión aspirada de ㄱ (k con aire)."},
      {"id":"g6-l4","word":"ㅌ","translation":"t (aspirado)","phonetic":"t","note":"ㅌ es la versión aspirada de ㄷ (t con aire)."}
    ],
    "exercises":[
      {"id":"g6-e1","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅈ","options":["j","ch","k","t"],"correctAnswer":"j","explanation":"ㅈ = j."},
      {"id":"g6-e2","type":"select","prompt":"ㅊ se lee:","options":["ch","j","k","t"],"correctAnswer":"ch","explanation":"ㅊ = ch."},
      {"id":"g6-e3","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅋ","options":["k","j","ch","t"],"correctAnswer":"k","explanation":"ㅋ = k aspirado."},
      {"id":"g6-e4","type":"select","prompt":"ㅌ es la versión aspirada de:","options":["ㄷ","ㄱ","ㅈ","ㅂ"],"correctAnswer":"ㄷ","explanation":"ㅌ (t) es la forma aspirada de ㄷ (d/t)."},
      {"id":"g6-e5","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅌ","options":["t","k","ch","j"],"correctAnswer":"t","explanation":"ㅌ = t aspirado."},
      {"id":"g6-e6","type":"select","prompt":"ㅈ + ㅏ forma:","options":["ja","cha","ka","ta"],"correctAnswer":"ja","explanation":"ㅈ(j) + ㅏ(a) = 자(ja)."},
      {"id":"g6-e7","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅊ","options":["ch","j","k","p"],"correctAnswer":"ch","explanation":"ㅊ se lee 'ch'."},
      {"id":"g6-e8","type":"select","prompt":"ㅊ + ㅏ es:","options":["cha","ja","ka","ta"],"correctAnswer":"cha","explanation":"ㅊ(ch) + ㅏ(a) = 차(cha)."}
    ]
  },
  {
    "id":"hangul-7","track":"languages","subTrack":"hangul","title":"Hangul: Consonantes IV","description":"Consonantes p, h y tensas","icon":"한","xp":30,
    "learnCards":[
      {"id":"g7-l1","word":"ㅍ","translation":"p (aspirado)","phonetic":"p","note":"ㅍ es la versión aspirada de ㅂ (p con aire)."},
      {"id":"g7-l2","word":"ㅎ","translation":"h","phonetic":"h","note":"ㅎ parece un círculo con un sombrero."},
      {"id":"g7-l3","word":"ㄲ","translation":"kk (tenso)","phonetic":"kk","note":"ㄲ es la versión tensa de ㄱ. Se pronuncia con fuerza."},
      {"id":"g7-l4","word":"ㄸ","translation":"tt (tenso)","phonetic":"tt","note":"ㄸ es la versión tensa de ㄷ. Sonido fuerte y corto."}
    ],
    "exercises":[
      {"id":"g7-e1","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅍ","options":["p","h","kk","tt"],"correctAnswer":"p","explanation":"ㅍ = p aspirado."},
      {"id":"g7-e2","type":"select","prompt":"ㅎ se lee:","options":["h","p","k","t"],"correctAnswer":"h","explanation":"ㅎ = h."},
      {"id":"g7-e3","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㄲ","options":["kk","tt","pp","ss"],"correctAnswer":"kk","explanation":"ㄲ = kk, consonante tensa."},
      {"id":"g7-e4","type":"select","prompt":"ㄸ es la versión tensa de:","options":["ㄷ","ㄱ","ㅂ","ㅅ"],"correctAnswer":"ㄷ","explanation":"ㄸ (tt) es la forma tensa de ㄷ (d/t)."},
      {"id":"g7-e5","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㄸ","options":["tt","kk","pp","jj"],"correctAnswer":"tt","explanation":"ㄸ = tt, consonante tensa."},
      {"id":"g7-e6","type":"select","prompt":"ㅎ + ㅏ forma:","options":["ha","pa","ka","ta"],"correctAnswer":"ha","explanation":"ㅎ(h) + ㅏ(a) = 하(ha)."},
      {"id":"g7-e7","type":"match","prompt":"Empareja el hangul con su sonido","promptExtra":"ㅎ","options":["h","p","k","t"],"correctAnswer":"h","explanation":"ㅎ se lee 'h'."},
      {"id":"g7-e8","type":"select","prompt":"Las consonantes tensas se pronuncian:","options":["Con más fuerza","Más suave","Igual que las básicas","Con vibración"],"correctAnswer":"Con más fuerza","explanation":"Las tensas (ㄲㄸㅃㅆㅉ) son más fuertes y cortas."}
    ]
  },
  {
    "id":"hangul-8","track":"languages","subTrack":"hangul","title":"Hangul: Bloques","description":"Primeros bloques silábicos","icon":"한","xp":30,
    "learnCards":[
      {"id":"g8-l1","word":"가","translation":"ga","phonetic":"ga","note":"ㄱ + ㅏ = 가. Las sílabas se forman en bloques."},
      {"id":"g8-l2","word":"나","translation":"na","phonetic":"na","note":"ㄴ + ㅏ = 나. Siempre: consonante + vocal."},
      {"id":"g8-l3","word":"다","translation":"da","phonetic":"da","note":"ㄷ + ㅏ = 다. El bloque se lee de izquierda a derecha."},
      {"id":"g8-l4","word":"라","translation":"ra","phonetic":"ra","note":"ㄹ + ㅏ = 라. La R coreana es suave."}
    ],
    "exercises":[
      {"id":"g8-e1","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"가","options":["ga","na","da","ra"],"correctAnswer":"ga","explanation":"가 = ㄱ + ㅏ = ga."},
      {"id":"g8-e2","type":"select","prompt":"나 se forma de:","options":["ㄴ + ㅏ","ㄱ + ㅏ","ㄷ + ㅏ","ㄹ + ㅏ"],"correctAnswer":"ㄴ + ㅏ","explanation":"나 = ㄴ(n) + ㅏ(a)."},
      {"id":"g8-e3","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"다","options":["da","ga","na","ra"],"correctAnswer":"da","explanation":"다 = ㄷ + ㅏ = da."},
      {"id":"g8-e4","type":"select","prompt":"라 se lee:","options":["ra","la","na","da"],"correctAnswer":"ra","explanation":"라 = ㄹ(r) + ㅏ(a) = ra."},
      {"id":"g8-e5","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"나","options":["na","ga","da","ma"],"correctAnswer":"na","explanation":"나 = ㄴ + ㅏ = na."},
      {"id":"g8-e6","type":"select","prompt":"가 + 나 + 다 + 라 es como:","options":["ABCD coreano","Números","Colores","Días"],"correctAnswer":"ABCD coreano","explanation":"가나다라 es el orden del alfabeto coreano."},
      {"id":"g8-e7","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"라","options":["ra","na","da","ma"],"correctAnswer":"ra","explanation":"라 = ㄹ + ㅏ = ra."},
      {"id":"g8-e8","type":"select","prompt":"La estructura de un bloque es:","options":["Consonante + Vocal","Vocal + Consonante","Solo consonante","Solo vocal"],"correctAnswer":"Consonante + Vocal","explanation":"Cada bloque silábico tiene al menos C + V."}
    ]
  },
  {
    "id":"hangul-9","track":"languages","subTrack":"hangul","title":"Hangul: Bloques II","description":"Más bloques silábicos","icon":"한","xp":30,
    "learnCards":[
      {"id":"g9-l1","word":"마","translation":"ma","phonetic":"ma","note":"ㅁ + ㅏ = 마. El cuadrado m + a."},
      {"id":"g9-l2","word":"바","translation":"ba","phonetic":"ba","note":"ㅂ + ㅏ = 바. Los labios se juntan."},
      {"id":"g9-l3","word":"사","translation":"sa","phonetic":"sa","note":"ㅅ + ㅏ = 사. El sonido del viento."},
      {"id":"g9-l4","word":"아","translation":"a","phonetic":"a","note":"ㅇ + ㅏ = 아. ㅇ es mudo al inicio."}
    ],
    "exercises":[
      {"id":"g9-e1","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"마","options":["ma","ba","sa","a"],"correctAnswer":"ma","explanation":"마 = ㅁ + ㅏ = ma."},
      {"id":"g9-e2","type":"select","prompt":"바 se lee:","options":["ba","ma","sa","pa"],"correctAnswer":"ba","explanation":"바 = ㅂ + ㅏ = ba."},
      {"id":"g9-e3","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"사","options":["sa","ma","ba","a"],"correctAnswer":"sa","explanation":"사 = ㅅ + ㅏ = sa."},
      {"id":"g9-e4","type":"select","prompt":"아 usa ㅇ como:","options":["consonante muda","consonante ng","vocal","no se usa"],"correctAnswer":"consonante muda","explanation":"ㅇ es mudo al inicio, necesario para escribir vocales solas."},
      {"id":"g9-e5","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"아","options":["a","ma","ba","sa"],"correctAnswer":"a","explanation":"아 = ㅇ + ㅏ = a."},
      {"id":"g9-e6","type":"select","prompt":"마 + 사 + 자 forma la palabra:","options":["comida","agua","casa","libro"],"correctAnswer":"No es una palabra","explanation":"No es una palabra real, es práctica de lectura."},
      {"id":"g9-e7","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"바","options":["ba","ma","sa","a"],"correctAnswer":"ba","explanation":"바 = ㅂ + ㅏ = ba."},
      {"id":"g9-e8","type":"select","prompt":"사 + 랑 significa:","options":["amor","comida","persona","agua"],"correctAnswer":"amor","explanation":"사랑 = sarang = amor."}
    ]
  },
  {
    "id":"hangul-10","track":"languages","subTrack":"hangul","title":"Hangul: Bloques III","description":"Bloques con j, ch, k, t","icon":"한","xp":30,
    "learnCards":[
      {"id":"g10-l1","word":"자","translation":"ja","phonetic":"ja","note":"ㅈ + ㅏ = 자. Sonido similar a 'ya' pero con j."},
      {"id":"g10-l2","word":"차","translation":"cha","phonetic":"cha","note":"ㅊ + ㅏ = 차. Significa 'té' o 'coche'."},
      {"id":"g10-l3","word":"카","translation":"ka","phonetic":"ka","note":"ㅋ + ㅏ = 카. K aspirada + a."},
      {"id":"g10-l4","word":"타","translation":"ta","phonetic":"ta","note":"ㅌ + ㅏ = 타. T aspirada + a."}
    ],
    "exercises":[
      {"id":"g10-e1","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"자","options":["ja","cha","ka","ta"],"correctAnswer":"ja","explanation":"자 = ㅈ + ㅏ = ja."},
      {"id":"g10-e2","type":"select","prompt":"차 significa:","options":["té o coche","agua","comida","casa"],"correctAnswer":"té o coche","explanation":"차 = cha = té o coche."},
      {"id":"g10-e3","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"카","options":["ka","ja","cha","ta"],"correctAnswer":"ka","explanation":"카 = ㅋ + ㅏ = ka."},
      {"id":"g10-e4","type":"select","prompt":"타 se lee:","options":["ta","ka","cha","ja"],"correctAnswer":"ta","explanation":"타 = ㅌ + ㅏ = ta."},
      {"id":"g10-e5","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"차","options":["cha","ja","ka","ta"],"correctAnswer":"cha","explanation":"차 = ㅊ + ㅏ = cha."},
      {"id":"g10-e6","type":"select","prompt":"카 + 메 + 라 forma:","options":["cámara","comida","coche","casa"],"correctAnswer":"cámara","explanation":"카메라 = kamera = cámara (préstamo)."},
      {"id":"g10-e7","type":"match","prompt":"Empareja el bloque con su sonido","promptExtra":"타","options":["ta","ka","cha","pa"],"correctAnswer":"ta","explanation":"타 = ㅌ + ㅏ = ta."},
      {"id":"g10-e8","type":"select","prompt":"자 + 동 + 차 es:","options":["automóvil","bicicleta","tren","avión"],"correctAnswer":"automóvil","explanation":"자동차 = jadongcha = automóvil."}
    ]
  },
  {
    "id":"hangul-11","track":"languages","subTrack":"hangul","title":"Hangul: Palabras","description":"Palabras coreanas simples","icon":"한","xp":35,
    "learnCards":[
      {"id":"g11-l1","word":"나무","translation":"árbol","phonetic":"namu","note":"나(na) + 무(mu) = namu = árbol."},
      {"id":"g11-l2","word":"나비","translation":"mariposa","phonetic":"nabi","note":"나(na) + 비(bi) = nabi = mariposa."},
      {"id":"g11-l3","word":"바다","translation":"mar","phonetic":"bada","note":"바(ba) + 다(da) = bada = mar."},
      {"id":"g11-l4","word":"소리","translation":"sonido","phonetic":"sori","note":"소(so) + 리(ri) = sori = sonido."}
    ],
    "exercises":[
      {"id":"g11-e1","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"나무","options":["árbol","mariposa","mar","sonido"],"correctAnswer":"árbol","explanation":"나무 = namu = árbol."},
      {"id":"g11-e2","type":"select","prompt":"나비 significa:","options":["mariposa","árbol","mar","flor"],"correctAnswer":"mariposa","explanation":"나비 = nabi = mariposa."},
      {"id":"g11-e3","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"바다","options":["mar","árbol","mariposa","sonido"],"correctAnswer":"mar","explanation":"바다 = bada = mar."},
      {"id":"g11-e4","type":"select","prompt":"소리 es:","options":["sonido","árbol","mar","agua"],"correctAnswer":"sonido","explanation":"소리 = sori = sonido."},
      {"id":"g11-e5","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"나비","options":["mariposa","árbol","mar","sonido"],"correctAnswer":"mariposa","explanation":"나비 = nabi = mariposa."},
      {"id":"g11-e6","type":"select","prompt":"나 + 무 = namu. 'namu' es:","options":["árbol","mar","montaña","flor"],"correctAnswer":"árbol","explanation":"나무 = namu = árbol."},
      {"id":"g11-e7","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"소리","options":["sonido","mariposa","mar","árbol"],"correctAnswer":"sonido","explanation":"소리 = sori = sonido."},
      {"id":"g11-e8","type":"select","prompt":"바다 se lee:","options":["bada","pada","bata","bada o pada"],"correctAnswer":"bada","explanation":"바다 = bada = mar."}
    ]
  },
  {
    "id":"hangul-12","track":"languages","subTrack":"hangul","title":"Hangul: Palabras II","description":"Palabras coreanas útiles","icon":"한","xp":40,
    "learnCards":[
      {"id":"g12-l1","word":"한국","translation":"Corea","phonetic":"hanguk","note":"한(han) + 국(guk) = Hanguk = Corea."},
      {"id":"g12-l2","word":"사람","translation":"persona","phonetic":"saram","note":"사(sa) + 람(ram) = saram = persona."},
      {"id":"g12-l3","word":"사랑","translation":"amor","phonetic":"sarang","note":"사(sa) + 랑(rang) = sarang = amor."},
      {"id":"g12-l4","word":"감사","translation":"gratitud","phonetic":"gamsa","note":"감(gam) + 사(sa) = gamsa = gratitud."}
    ],
    "exercises":[
      {"id":"g12-e1","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"한국","options":["Corea","persona","amor","gratitud"],"correctAnswer":"Corea","explanation":"한국 = Hanguk = Corea."},
      {"id":"g12-e2","type":"select","prompt":"사람 significa:","options":["persona","Corea","amor","gratitud"],"correctAnswer":"persona","explanation":"사람 = saram = persona."},
      {"id":"g12-e3","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"사랑","options":["amor","Corea","persona","gratitud"],"correctAnswer":"amor","explanation":"사랑 = sarang = amor."},
      {"id":"g12-e4","type":"select","prompt":"감사합니다 significa:","options":["gracias","hola","adiós","perdón"],"correctAnswer":"gracias","explanation":"감사합니다 = gamsahamnida = gracias (formal)."},
      {"id":"g12-e5","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"감사","options":["gratitud","Corea","persona","amor"],"correctAnswer":"gratitud","explanation":"감사 = gamsa = gratitud."},
      {"id":"g12-e6","type":"select","prompt":"한국 + 사람 es:","options":["persona coreana","idioma coreano","Corea","comida coreana"],"correctAnswer":"persona coreana","explanation":"한국사람 = hanguk saram = coreano."},
      {"id":"g12-e7","type":"match","prompt":"Empareja la palabra con su significado","promptExtra":"사랑","options":["amor","persona","gratitud","familia"],"correctAnswer":"amor","explanation":"사랑 = sarang = amor."},
      {"id":"g12-e8","type":"select","prompt":"¿Cómo se dice 'gracias' en coreano?","options":["감사합니다","사랑해요","안녕하세요","미안합니다"],"correctAnswer":"감사합니다","explanation":"감사합니다 = gamsahamnida = gracias."}
    ]
  }
];

export const lessonsData: Lesson[] = [
  ...englishLessons,
  ...italianLessons,
  ...japaneseLessons,
  ...hiraganaLessons,
  ...kanjiLessons,
  ...koreanLessons,
  ...hangulLessons,
  ...germanLessons,
  ...jsLessons,
  ...pythonLessons,
  ...htmlCssLessons,
  ...rLessons,
  ...cookingFundamentalsLessons,
  ...cookingRecipesLessons,
  ...cookingPlatesLessons,
];
