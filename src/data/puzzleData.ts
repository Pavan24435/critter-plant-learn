export const foodChainData = [
  { chain: ["Sun", "Grass", "Grasshopper", "Frog", "Snake", "Eagle"], ecosystem: "Grassland" },
  { chain: ["Sun", "Phytoplankton", "Zooplankton", "Small Fish", "Tuna", "Shark"], ecosystem: "Ocean" },
  { chain: ["Sun", "Algae", "Tadpole", "Fish", "Heron", "Crocodile"], ecosystem: "Freshwater" },
  { chain: ["Sun", "Berries", "Mouse", "Snake", "Hawk"], ecosystem: "Forest" },
  { chain: ["Sun", "Seaweed", "Sea Urchin", "Otter", "Orca"], ecosystem: "Kelp Forest" },
  { chain: ["Sun", "Acacia Tree", "Giraffe", "Lion"], ecosystem: "Savanna" },
  { chain: ["Sun", "Lichen", "Caribou", "Wolf"], ecosystem: "Tundra" },
  { chain: ["Sun", "Cactus", "Lizard", "Rattlesnake", "Hawk"], ecosystem: "Desert" },
];

export const organMatchingData = [
  { organ: "Heart", system: "Circulatory", function: "Pumps blood throughout the body", icon: "❤️" },
  { organ: "Lungs", system: "Respiratory", function: "Exchange of oxygen and carbon dioxide", icon: "🫁" },
  { organ: "Brain", system: "Nervous", function: "Controls body functions and processes information", icon: "🧠" },
  { organ: "Stomach", system: "Digestive", function: "Breaks down food using acid and enzymes", icon: "🫃" },
  { organ: "Kidneys", system: "Excretory", function: "Filters blood and produces urine", icon: "🫘" },
  { organ: "Liver", system: "Digestive", function: "Detoxification and bile production", icon: "🟤" },
  { organ: "Skin", system: "Integumentary", function: "Protection, temperature regulation, sensation", icon: "🖐️" },
  { organ: "Pancreas", system: "Endocrine", function: "Produces insulin and digestive enzymes", icon: "💛" },
  { organ: "Small Intestine", system: "Digestive", function: "Absorbs nutrients from digested food", icon: "🔄" },
  { organ: "Spleen", system: "Immune", function: "Filters blood and stores white blood cells", icon: "🟣" },
  { organ: "Thyroid", system: "Endocrine", function: "Regulates metabolism with hormones", icon: "🦋" },
  { organ: "Bone Marrow", system: "Immune", function: "Produces blood cells", icon: "🦴" },
];

export const crosswordData = [
  { word: "CHLOROPLAST", clue: "Organelle where photosynthesis occurs in plant cells", direction: "across" as const },
  { word: "MITOSIS", clue: "Cell division producing two identical daughter cells", direction: "down" as const },
  { word: "ENZYME", clue: "Biological catalyst that speeds up chemical reactions", direction: "across" as const },
  { word: "XYLEM", clue: "Plant tissue that transports water upward from roots", direction: "down" as const },
  { word: "NEURON", clue: "Nerve cell that transmits electrical impulses", direction: "across" as const },
  { word: "OSMOSIS", clue: "Movement of water through a semipermeable membrane", direction: "down" as const },
  { word: "GENOME", clue: "Complete set of an organism's genetic material", direction: "across" as const },
  { word: "PHLOEM", clue: "Plant tissue transporting sugars from leaves", direction: "down" as const },
  { word: "STAMEN", clue: "Male reproductive part of a flower", direction: "across" as const },
  { word: "CORTEX", clue: "Outer region of an organ like the brain or kidney", direction: "down" as const },
];

export const cellStructureData = [
  { structure: "Nucleus", function: "Contains DNA and controls cell activities", icon: "🟣", found: "Both" },
  { structure: "Cell Membrane", function: "Controls what enters and exits the cell", icon: "🔵", found: "Both" },
  { structure: "Mitochondria", function: "Produces energy (ATP) through cellular respiration", icon: "🟠", found: "Both" },
  { structure: "Ribosome", function: "Synthesizes proteins from amino acids", icon: "🔴", found: "Both" },
  { structure: "Cell Wall", function: "Provides rigid structural support", icon: "🟩", found: "Plant Only" },
  { structure: "Chloroplast", function: "Carries out photosynthesis using light energy", icon: "🟢", found: "Plant Only" },
  { structure: "Vacuole", function: "Stores water, nutrients, and waste products", icon: "💧", found: "Both (large in plants)" },
  { structure: "Endoplasmic Reticulum", function: "Transports materials and synthesizes lipids/proteins", icon: "🌀", found: "Both" },
  { structure: "Golgi Apparatus", function: "Packages and distributes proteins", icon: "📦", found: "Both" },
  { structure: "Lysosome", function: "Digests waste materials and cellular debris", icon: "♻️", found: "Animal Only" },
  { structure: "Centriole", function: "Helps organize cell division", icon: "⭐", found: "Animal Only" },
  { structure: "Cytoplasm", function: "Jelly-like substance where organelles float", icon: "💠", found: "Both" },
];

export const animalSounds = [
  { animal: "Lion", icon: "🦁", sound: "Roar", description: "A lion's roar can be heard up to 5 miles away and is used to establish territory.", category: "mammal" },
  { animal: "Whale", icon: "🐋", sound: "Song", description: "Humpback whale songs can last for hours and travel thousands of miles through water.", category: "mammal" },
  { animal: "Dolphin", icon: "🐬", sound: "Click & Whistle", description: "Dolphins use echolocation clicks to navigate and unique signature whistles to identify each other.", category: "mammal" },
  { animal: "Wolf", icon: "🐺", sound: "Howl", description: "Wolf howls coordinate pack hunts and can be heard up to 10 miles away.", category: "mammal" },
  { animal: "Elephant", icon: "🐘", sound: "Trumpet & Infrasound", description: "Elephants communicate using infrasound below human hearing range, felt through the ground.", category: "mammal" },
  { animal: "Nightingale", icon: "🐦", sound: "Song (200+ variations)", description: "Male nightingales sing complex songs with over 200 variations to attract mates.", category: "bird" },
  { animal: "Parrot", icon: "🦜", sound: "Mimicry", description: "Parrots can mimic human speech and environmental sounds using their syrinx organ.", category: "bird" },
  { animal: "Owl", icon: "🦉", sound: "Hoot", description: "Owl hoots are used for territorial calls. Their silent flight helps them hunt without detection.", category: "bird" },
  { animal: "Frog", icon: "🐸", sound: "Croak & Ribbit", description: "Male frogs croak by pushing air over vocal cords in inflatable throat sacs to attract females.", category: "amphibian" },
  { animal: "Cricket", icon: "🦗", sound: "Chirp (Stridulation)", description: "Crickets chirp by rubbing their wings together. The rate increases with temperature.", category: "insect" },
  { animal: "Cicada", icon: "🪲", sound: "Buzz (120 dB)", description: "Cicadas are the loudest insects, producing sounds up to 120 decibels using tymbals.", category: "insect" },
  { animal: "Bat", icon: "🦇", sound: "Ultrasonic Echolocation", description: "Bats emit ultrasonic pulses (up to 200 kHz) and listen for echoes to navigate in darkness.", category: "mammal" },
  { animal: "Rattlesnake", icon: "🐍", sound: "Rattle", description: "The rattle is made of keratin segments that vibrate up to 60 times per second as a warning.", category: "reptile" },
  { animal: "Humpback Whale", icon: "🐳", sound: "Complex Song", description: "Their songs evolve over time and all males in a population sing the same version.", category: "mammal" },
  { animal: "Gibbon", icon: "🐒", sound: "Morning Call", description: "Gibbon pairs perform coordinated duets at dawn that can be heard 1 km away.", category: "mammal" },
  { animal: "Peacock", icon: "🦚", sound: "Scream", description: "Peacocks produce loud calls and use infrasound from tail feather vibrations during displays.", category: "bird" },
];
