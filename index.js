const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); // <-- enables cross-origin requests

// 366 entries (index 0 => day 1)
const WORDS = [
  {
    "word": "aerologicism",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicism at length."
  },
  {
    "word": "astrometryable",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryable the data before release."
  },
  {
    "word": "biodynamicsized",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a biodynamicsized solution to a messy problem."
  },
  {
    "word": "chronoformment",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated chronoformment this sprint."
  },
  {
    "word": "cryptomindal",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on cryptomindal."
  },
  {
    "word": "cyberpulseation",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will cyberpulseation the data before release."
  },
  {
    "word": "geothreading",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a geothreading solution to a messy problem."
  },
  {
    "word": "hydronomyous",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it hydronomyous and moved on."
  },
  {
    "word": "infrascopeware",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed infrascopeware at length."
  },
  {
    "word": "microverseor",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microverseor the data before release."
  },
  {
    "word": "neobyteize",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a neobyteize design."
  },
  {
    "word": "omnifieldity",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated omnifieldity this sprint."
  },
  {
    "word": "photomatrixible",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed photomatrixible at length."
  },
  {
    "word": "protovectorizer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will protovectorizer the data before release."
  },
  {
    "word": "quantgraphness",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a quantgraphness design."
  },
  {
    "word": "retrogenic",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogenic under pressure."
  },
  {
    "word": "sociocraftology",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocraftology."
  },
  {
    "word": "technocodeer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will technocodeer the data before release."
  },
  {
    "word": "thermosenseive",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a thermosenseive solution to a messy problem."
  },
  {
    "word": "ultrasignalism",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalism and moved on."
  },
  {
    "word": "aerologicable",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real aerologicable."
  },
  {
    "word": "astrometryized",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They astrometryized their approach after feedback."
  },
  {
    "word": "biodynamicsment",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsment design."
  },
  {
    "word": "chronoformal",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformal and moved on."
  },
  {
    "word": "cryptomindation",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptomindation at length."
  },
  {
    "word": "cyberpulseing",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will cyberpulseing the data before release."
  },
  {
    "word": "geothreadous",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreadous design."
  },
  {
    "word": "hydronomyware",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyware this sprint."
  },
  {
    "word": "infrascopeor",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed infrascopeor at length."
  },
  {
    "word": "microverseize",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They microverseize their approach after feedback."
  },
  {
    "word": "neobyteity",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly neobyteity."
  },
  {
    "word": "omnifieldible",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it omnifieldible and moved on."
  },
  {
    "word": "photomatrixizer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on photomatrixizer."
  },
  {
    "word": "protovectorness",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They protovectorness their approach after feedback."
  },
  {
    "word": "quantgraphic",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly quantgraphic."
  },
  {
    "word": "retrogenology",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it retrogenology and moved on."
  },
  {
    "word": "sociocrafter",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocrafter."
  },
  {
    "word": "technocodeive",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They technocodeive their approach after feedback."
  },
  {
    "word": "thermosenseism",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosenseism."
  },
  {
    "word": "ultrasignalable",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded ultrasignalable under pressure."
  },
  {
    "word": "aerologicized",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on aerologicized."
  },
  {
    "word": "astrometryment",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryment the data before release."
  },
  {
    "word": "biodynamicsal",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a biodynamicsal solution to a messy problem."
  },
  {
    "word": "chronoformation",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded chronoformation under pressure."
  },
  {
    "word": "cryptominding",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real cryptominding."
  },
  {
    "word": "cyberpulseous",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will cyberpulseous the data before release."
  },
  {
    "word": "geothreadware",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly geothreadware."
  },
  {
    "word": "hydronomyor",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it hydronomyor and moved on."
  },
  {
    "word": "infrascopeize",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on infrascopeize."
  },
  {
    "word": "microverseity",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to microverseity the process end-to-end."
  },
  {
    "word": "neobyteible",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a neobyteible design."
  },
  {
    "word": "omnifieldizer",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded omnifieldizer under pressure."
  },
  {
    "word": "photomatrixness",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real photomatrixness."
  },
  {
    "word": "protovectoric",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They protovectoric their approach after feedback."
  },
  {
    "word": "quantgraphology",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly quantgraphology."
  },
  {
    "word": "retrogener",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated retrogener this sprint."
  },
  {
    "word": "sociocraftive",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocraftive."
  },
  {
    "word": "technocodeism",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to technocodeism the process end-to-end."
  },
  {
    "word": "thermosenseable",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a thermosenseable solution to a messy problem."
  },
  {
    "word": "ultrasignalized",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated ultrasignalized this sprint."
  },
  {
    "word": "aerologicment",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on aerologicment."
  },
  {
    "word": "mathematics",
    "definition": "the abstract science of number, quantity, and space, either as abstract concepts (pure mathematics), or as applied to other disciplines such as physics and engineering (applied mathematics)",
    "part_of_speech": "Noun",
    "example": "He does not like learning about mathematics."
  },
  {
    "word": "biodynamicsation",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsation design."
  },
  {
    "word": "chronoforming",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded chronoforming under pressure."
  },
  {
    "word": "cryptomindous",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptomindous at length."
  },
  {
    "word": "cyberpulseware",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will cyberpulseware the data before release."
  },
  {
    "word": "geothreador",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreador design."
  },
  {
    "word": "hydronomyize",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it hydronomyize and moved on."
  },
  {
    "word": "infrascopeity",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real infrascopeity."
  },
  {
    "word": "microverseible",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They microverseible their approach after feedback."
  },
  {
    "word": "neobyteizer",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobyteizer solution to a messy problem."
  },
  {
    "word": "omnifieldness",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded omnifieldness under pressure."
  },
  {
    "word": "photomatrixic",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real photomatrixic."
  },
  {
    "word": "protovectorology",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will protovectorology the data before release."
  },
  {
    "word": "quantgrapher",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a quantgrapher solution to a messy problem."
  },
  {
    "word": "retrogenive",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogenive under pressure."
  },
  {
    "word": "sociocraftism",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on sociocraftism."
  },
  {
    "word": "technocodeable",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to technocodeable the process end-to-end."
  },
  {
    "word": "thermosenseized",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a thermosenseized design."
  },
  {
    "word": "ultrasignalment",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded ultrasignalment under pressure."
  },
  {
    "word": "aerological",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real aerological."
  },
  {
    "word": "astrometryation",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to astrometryation the process end-to-end."
  },
  {
    "word": "biodynamicsing",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly biodynamicsing."
  },
  {
    "word": "chronoformous",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformous and moved on."
  },
  {
    "word": "cryptomindware",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptomindware at length."
  },
  {
    "word": "cyberpulseor",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to cyberpulseor the process end-to-end."
  },
  {
    "word": "geothreadize",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreadize design."
  },
  {
    "word": "hydronomyity",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyity this sprint."
  },
  {
    "word": "infrascopeible",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed infrascopeible at length."
  },
  {
    "word": "microverseizer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microverseizer the data before release."
  },
  {
    "word": "neobyteness",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a neobyteness design."
  },
  {
    "word": "omnifieldic",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated omnifieldic this sprint."
  },
  {
    "word": "photomatrixology",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real photomatrixology."
  },
  {
    "word": "protovectorer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They protovectorer their approach after feedback."
  },
  {
    "word": "quantgraphive",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a quantgraphive design."
  },
  {
    "word": "retrogenism",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it retrogenism and moved on."
  },
  {
    "word": "sociocraftable",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocraftable."
  },
  {
    "word": "technocodeized",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to technocodeized the process end-to-end."
  },
  {
    "word": "thermosensement",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosensement."
  },
  {
    "word": "ultrasignalal",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded ultrasignalal under pressure."
  },
  {
    "word": "aerologication",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologication at length."
  },
  {
    "word": "astrometrying",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They astrometrying their approach after feedback."
  },
  {
    "word": "biodynamicsous",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsous design."
  },
  {
    "word": "chronoformware",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformware and moved on."
  },
  {
    "word": "cryptomindor",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptomindor at length."
  },
  {
    "word": "cyberpulseize",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to cyberpulseize the process end-to-end."
  },
  {
    "word": "geothreadity",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a geothreadity solution to a messy problem."
  },
  {
    "word": "hydronomyible",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it hydronomyible and moved on."
  },
  {
    "word": "infrascopeizer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real infrascopeizer."
  },
  {
    "word": "microverseness",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to microverseness the process end-to-end."
  },
  {
    "word": "neobyteic",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly neobyteic."
  },
  {
    "word": "omnifieldology",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded omnifieldology under pressure."
  },
  {
    "word": "photomatrixer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real photomatrixer."
  },
  {
    "word": "protovectorive",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will protovectorive the data before release."
  },
  {
    "word": "quantgraphism",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a quantgraphism design."
  },
  {
    "word": "retrogenable",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated retrogenable this sprint."
  },
  {
    "word": "sociocraftized",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on sociocraftized."
  },
  {
    "word": "technocodement",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will technocodement the data before release."
  },
  {
    "word": "thermosenseal",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a thermosenseal design."
  },
  {
    "word": "ultrasignalation",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded ultrasignalation under pressure."
  },
  {
    "word": "aerologicing",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on aerologicing."
  },
  {
    "word": "astrometryous",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They astrometryous their approach after feedback."
  },
  {
    "word": "biodynamicsware",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly biodynamicsware."
  },
  {
    "word": "chronoformor",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformor and moved on."
  },
  {
    "word": "cryptomindize",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on cryptomindize."
  },
  {
    "word": "cyberpulseity",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will cyberpulseity the data before release."
  },
  {
    "word": "geothreadible",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a geothreadible solution to a messy problem."
  },
  {
    "word": "hydronomyizer",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyizer this sprint."
  },
  {
    "word": "infrascopeness",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed infrascopeness at length."
  },
  {
    "word": "microverseic",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They microverseic their approach after feedback."
  },
  {
    "word": "neobyteology",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly neobyteology."
  },
  {
    "word": "omnifielder",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated omnifielder this sprint."
  },
  {
    "word": "photomatrixive",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed photomatrixive at length."
  },
  {
    "word": "protovectorism",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to protovectorism the process end-to-end."
  },
  {
    "word": "quantgraphable",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a quantgraphable design."
  },
  {
    "word": "retrogenized",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogenized under pressure."
  },
  {
    "word": "sociocraftment",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on sociocraftment."
  },
  {
    "word": "technocodeal",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will technocodeal the data before release."
  },
  {
    "word": "thermosenseation",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a thermosenseation solution to a messy problem."
  },
  {
    "word": "ultrasignaling",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated ultrasignaling this sprint."
  },
  {
    "word": "aerologicous",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on aerologicous."
  },
  {
    "word": "astrometryware",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryware the data before release."
  },
  {
    "word": "biodynamicsor",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a biodynamicsor solution to a messy problem."
  },
  {
    "word": "chronoformize",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformize and moved on."
  },
  {
    "word": "cryptomindity",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real cryptomindity."
  },
  {
    "word": "cyberpulseible",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They cyberpulseible their approach after feedback."
  },
  {
    "word": "geothreadizer",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a geothreadizer solution to a messy problem."
  },
  {
    "word": "hydronomyness",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyness this sprint."
  },
  {
    "word": "infrascopeic",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on infrascopeic."
  },
  {
    "word": "microverseology",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They microverseology their approach after feedback."
  },
  {
    "word": "neobyteer",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobyteer solution to a messy problem."
  },
  {
    "word": "omnifieldive",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded omnifieldive under pressure."
  },
  {
    "word": "photomatrixism",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on photomatrixism."
  },
  {
    "word": "protovectorable",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They protovectorable their approach after feedback."
  },
  {
    "word": "quantgraphized",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly quantgraphized."
  },
  {
    "word": "retrogenment",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated retrogenment this sprint."
  },
  {
    "word": "sociocraftal",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on sociocraftal."
  },
  {
    "word": "technocodeation",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They technocodeation their approach after feedback."
  },
  {
    "word": "thermosenseing",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a thermosenseing solution to a messy problem."
  },
  {
    "word": "ultrasignalous",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated ultrasignalous this sprint."
  },
  {
    "word": "aerologicware",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicware at length."
  },
  {
    "word": "astrometryor",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryor the data before release."
  },
  {
    "word": "biodynamicsize",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsize design."
  },
  {
    "word": "chronoformity",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated chronoformity this sprint."
  },
  {
    "word": "cryptomindible",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on cryptomindible."
  },
  {
    "word": "cyberpulseizer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They cyberpulseizer their approach after feedback."
  },
  {
    "word": "geothreadness",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly geothreadness."
  },
  {
    "word": "hydronomyic",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it hydronomyic and moved on."
  },
  {
    "word": "infrascopeology",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on infrascopeology."
  },
  {
    "word": "microverseer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to microverseer the process end-to-end."
  },
  {
    "word": "neobyteive",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobyteive solution to a messy problem."
  },
  {
    "word": "omnifieldism",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded omnifieldism under pressure."
  },
  {
    "word": "photomatrixable",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real photomatrixable."
  },
  {
    "word": "protovectorized",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They protovectorized their approach after feedback."
  },
  {
    "word": "quantgraphment",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a quantgraphment design."
  },
  {
    "word": "retrogenal",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogenal under pressure."
  },
  {
    "word": "sociocraftation",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed sociocraftation at length."
  },
  {
    "word": "technocodeing",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will technocodeing the data before release."
  },
  {
    "word": "thermosenseous",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a thermosenseous design."
  },
  {
    "word": "ultrasignalware",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalware and moved on."
  },
  {
    "word": "aerologicor",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicor at length."
  },
  {
    "word": "astrometryize",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to astrometryize the process end-to-end."
  },
  {
    "word": "biodynamicsity",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsity design."
  },
  {
    "word": "chronoformible",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated chronoformible this sprint."
  },
  {
    "word": "cryptomindizer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptomindizer at length."
  },
  {
    "word": "cyberpulseness",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will cyberpulseness the data before release."
  },
  {
    "word": "geothreadic",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a geothreadic solution to a messy problem."
  },
  {
    "word": "hydronomyology",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded hydronomyology under pressure."
  },
  {
    "word": "infrascopeer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real infrascopeer."
  },
  {
    "word": "microverseive",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They microverseive their approach after feedback."
  },
  {
    "word": "neobyteism",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a neobyteism design."
  },
  {
    "word": "omnifieldable",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it omnifieldable and moved on."
  },
  {
    "word": "photomatrixized",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed photomatrixized at length."
  },
  {
    "word": "protovectorment",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to protovectorment the process end-to-end."
  },
  {
    "word": "quantgraphal",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly quantgraphal."
  },
  {
    "word": "retrogenation",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it retrogenation and moved on."
  },
  {
    "word": "sociocrafting",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocrafting."
  },
  {
    "word": "technocodeous",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to technocodeous the process end-to-end."
  },
  {
    "word": "thermosenseware",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosenseware."
  },
  {
    "word": "ultrasignalor",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalor and moved on."
  },
  {
    "word": "aerologicize",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real aerologicize."
  },
  {
    "word": "astrometryity",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryity the data before release."
  },
  {
    "word": "biodynamicsible",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsible design."
  },
  {
    "word": "chronoformizer",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformizer and moved on."
  },
  {
    "word": "cryptomindness",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real cryptomindness."
  },
  {
    "word": "cyberpulseic",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They cyberpulseic their approach after feedback."
  },
  {
    "word": "geothreadology",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly geothreadology."
  },
  {
    "word": "hydronomyer",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it hydronomyer and moved on."
  },
  {
    "word": "infrascopeive",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed infrascopeive at length."
  },
  {
    "word": "microverseism",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microverseism the data before release."
  },
  {
    "word": "neobyteable",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobyteable solution to a messy problem."
  },
  {
    "word": "omnifieldized",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated omnifieldized this sprint."
  },
  {
    "word": "photomatrixment",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on photomatrixment."
  },
  {
    "word": "protovectoral",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They protovectoral their approach after feedback."
  },
  {
    "word": "quantgraphation",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a quantgraphation solution to a messy problem."
  },
  {
    "word": "retrogening",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogening under pressure."
  },
  {
    "word": "sociocraftous",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed sociocraftous at length."
  },
  {
    "word": "technocodeware",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They technocodeware their approach after feedback."
  },
  {
    "word": "thermosenseor",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosenseor."
  },
  {
    "word": "ultrasignalize",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalize and moved on."
  },
  {
    "word": "aerologicity",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicity at length."
  },
  {
    "word": "astrometryible",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They astrometryible their approach after feedback."
  },
  {
    "word": "biodynamicsizer",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsizer design."
  },
  {
    "word": "chronoformness",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformness and moved on."
  },
  {
    "word": "cryptomindic",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptomindic at length."
  },
  {
    "word": "cyberpulseology",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to cyberpulseology the process end-to-end."
  },
  {
    "word": "geothreader",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly geothreader."
  },
  {
    "word": "hydronomyive",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyive this sprint."
  },
  {
    "word": "infrascopeism",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed infrascopeism at length."
  },
  {
    "word": "microverseable",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to microverseable the process end-to-end."
  },
  {
    "word": "neobyteized",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly neobyteized."
  },
  {
    "word": "omnifieldment",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated omnifieldment this sprint."
  },
  {
    "word": "photomatrixal",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on photomatrixal."
  },
  {
    "word": "protovectoration",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will protovectoration the data before release."
  },
  {
    "word": "quantgraphing",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a quantgraphing solution to a messy problem."
  },
  {
    "word": "retrogenous",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it retrogenous and moved on."
  },
  {
    "word": "sociocraftware",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocraftware."
  },
  {
    "word": "technocodeor",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to technocodeor the process end-to-end."
  },
  {
    "word": "thermosenseize",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a thermosenseize solution to a messy problem."
  },
  {
    "word": "ultrasignality",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated ultrasignality this sprint."
  },
  {
    "word": "aerologicible",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicible at length."
  },
  {
    "word": "astrometryizer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryizer the data before release."
  },
  {
    "word": "biodynamicsness",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsness design."
  },
  {
    "word": "chronoformic",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformic and moved on."
  },
  {
    "word": "cryptomindology",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real cryptomindology."
  },
  {
    "word": "cyberpulseer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will cyberpulseer the data before release."
  },
  {
    "word": "geothreadive",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreadive design."
  },
  {
    "word": "hydronomyism",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyism this sprint."
  },
  {
    "word": "infrascopeable",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real infrascopeable."
  },
  {
    "word": "microverseized",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microverseized the data before release."
  },
  {
    "word": "neobytement",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobytement solution to a messy problem."
  },
  {
    "word": "omnifieldal",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it omnifieldal and moved on."
  },
  {
    "word": "photomatrixation",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on photomatrixation."
  },
  {
    "word": "protovectoring",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will protovectoring the data before release."
  },
  {
    "word": "quantgraphous",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a quantgraphous design."
  },
  {
    "word": "retrogenware",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it retrogenware and moved on."
  },
  {
    "word": "sociocraftor",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on sociocraftor."
  },
  {
    "word": "technocodeize",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They technocodeize their approach after feedback."
  },
  {
    "word": "thermosenseity",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosenseity."
  },
  {
    "word": "ultrasignalible",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalible and moved on."
  },
  {
    "word": "aerologicizer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicizer at length."
  },
  {
    "word": "astrometryness",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryness the data before release."
  },
  {
    "word": "biodynamicsic",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsic design."
  },
  {
    "word": "chronoformology",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated chronoformology this sprint."
  },
  {
    "word": "cryptominder",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptominder at length."
  },
  {
    "word": "cyberpulseive",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to cyberpulseive the process end-to-end."
  },
  {
    "word": "geothreadism",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a geothreadism solution to a messy problem."
  },
  {
    "word": "hydronomyable",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded hydronomyable under pressure."
  },
  {
    "word": "infrascopeized",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on infrascopeized."
  },
  {
    "word": "microversement",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microversement the data before release."
  },
  {
    "word": "neobyteal",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobyteal solution to a messy problem."
  },
  {
    "word": "omnifieldation",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it omnifieldation and moved on."
  },
  {
    "word": "photomatrixing",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed photomatrixing at length."
  },
  {
    "word": "protovectorous",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to protovectorous the process end-to-end."
  },
  {
    "word": "quantgraphware",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly quantgraphware."
  },
  {
    "word": "retrogenor",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogenor under pressure."
  },
  {
    "word": "sociocraftize",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on sociocraftize."
  },
  {
    "word": "technocodeity",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to technocodeity the process end-to-end."
  },
  {
    "word": "thermosenseible",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a thermosenseible design."
  },
  {
    "word": "ultrasignalizer",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalizer and moved on."
  },
  {
    "word": "aerologicness",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicness at length."
  },
  {
    "word": "astrometryic",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They astrometryic their approach after feedback."
  },
  {
    "word": "biodynamicsology",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsology design."
  },
  {
    "word": "chronoformer",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformer and moved on."
  },
  {
    "word": "cryptomindive",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real cryptomindive."
  },
  {
    "word": "cyberpulseism",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to cyberpulseism the process end-to-end."
  },
  {
    "word": "geothreadable",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreadable design."
  },
  {
    "word": "hydronomyized",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded hydronomyized under pressure."
  },
  {
    "word": "infrascopement",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real infrascopement."
  },
  {
    "word": "microverseal",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microverseal the data before release."
  },
  {
    "word": "neobyteation",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobyteation solution to a messy problem."
  },
  {
    "word": "omnifielding",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it omnifielding and moved on."
  },
  {
    "word": "photomatrixous",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed photomatrixous at length."
  },
  {
    "word": "protovectorware",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to protovectorware the process end-to-end."
  },
  {
    "word": "quantgraphor",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a quantgraphor solution to a messy problem."
  },
  {
    "word": "retrogenize",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogenize under pressure."
  },
  {
    "word": "sociocraftity",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocraftity."
  },
  {
    "word": "technocodeible",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to technocodeible the process end-to-end."
  },
  {
    "word": "thermosenseizer",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosenseizer."
  },
  {
    "word": "ultrasignalness",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalness and moved on."
  },
  {
    "word": "aerologicic",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real aerologicic."
  },
  {
    "word": "astrometryology",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to astrometryology the process end-to-end."
  },
  {
    "word": "biodynamicser",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicser design."
  },
  {
    "word": "chronoformive",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformive and moved on."
  },
  {
    "word": "cryptomindism",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real cryptomindism."
  },
  {
    "word": "cyberpulseable",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They cyberpulseable their approach after feedback."
  },
  {
    "word": "geothreadized",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreadized design."
  },
  {
    "word": "hydronomyment",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it hydronomyment and moved on."
  },
  {
    "word": "infrascopeal",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real infrascopeal."
  },
  {
    "word": "microverseation",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microverseation the data before release."
  },
  {
    "word": "neobyteing",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a neobyteing solution to a messy problem."
  },
  {
    "word": "omnifieldous",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded omnifieldous under pressure."
  },
  {
    "word": "photomatrixware",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on photomatrixware."
  },
  {
    "word": "protovectoror",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to protovectoror the process end-to-end."
  },
  {
    "word": "quantgraphize",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a quantgraphize solution to a messy problem."
  },
  {
    "word": "retrogenity",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded retrogenity under pressure."
  },
  {
    "word": "sociocraftible",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real sociocraftible."
  },
  {
    "word": "technocodeizer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will technocodeizer the data before release."
  },
  {
    "word": "thermosenseness",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosenseness."
  },
  {
    "word": "ultrasignalic",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalic and moved on."
  },
  {
    "word": "aerologicology",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on aerologicology."
  },
  {
    "word": "astrometryer",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to astrometryer the process end-to-end."
  },
  {
    "word": "biodynamicsive",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly biodynamicsive."
  },
  {
    "word": "chronoformism",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "He responded chronoformism under pressure."
  },
  {
    "word": "cryptomindable",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "The project relies on cryptomindable."
  },
  {
    "word": "cyberpulseized",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They cyberpulseized their approach after feedback."
  },
  {
    "word": "geothreadment",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreadment design."
  },
  {
    "word": "hydronomyal",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyal this sprint."
  },
  {
    "word": "infrascopeation",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed infrascopeation at length."
  },
  {
    "word": "microverseing",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They microverseing their approach after feedback."
  },
  {
    "word": "neobyteous",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly neobyteous."
  },
  {
    "word": "omnifieldware",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it omnifieldware and moved on."
  },
  {
    "word": "photomatrixor",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real photomatrixor."
  },
  {
    "word": "protovectorize",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to protovectorize the process end-to-end."
  },
  {
    "word": "quantgraphity",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a quantgraphity solution to a messy problem."
  },
  {
    "word": "retrogenible",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it retrogenible and moved on."
  },
  {
    "word": "sociocraftizer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed sociocraftizer at length."
  },
  {
    "word": "technocodeness",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They technocodeness their approach after feedback."
  },
  {
    "word": "thermosenseic",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a thermosenseic design."
  },
  {
    "word": "ultrasignalology",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignalology and moved on."
  },
  {
    "word": "aerologicer",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicer at length."
  },
  {
    "word": "astrometryive",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to astrometryive the process end-to-end."
  },
  {
    "word": "biodynamicsism",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "It was a biodynamicsism solution to a messy problem."
  },
  {
    "word": "chronoformable",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it chronoformable and moved on."
  },
  {
    "word": "cryptomindized",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed cryptomindized at length."
  },
  {
    "word": "cyberpulsement",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "Try to cyberpulsement the process end-to-end."
  },
  {
    "word": "geothreadal",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a geothreadal design."
  },
  {
    "word": "hydronomyation",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated hydronomyation this sprint."
  },
  {
    "word": "infrascopeing",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real infrascopeing."
  },
  {
    "word": "microverseous",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will microverseous the data before release."
  },
  {
    "word": "neobyteware",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a neobyteware design."
  },
  {
    "word": "omnifieldor",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it omnifieldor and moved on."
  },
  {
    "word": "photomatrixize",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real photomatrixize."
  },
  {
    "word": "protovectority",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will protovectority the data before release."
  },
  {
    "word": "quantgraphible",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a quantgraphible design."
  },
  {
    "word": "retrogenizer",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it retrogenizer and moved on."
  },
  {
    "word": "sociocraftness",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed sociocraftness at length."
  },
  {
    "word": "technocodeic",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will technocodeic the data before release."
  },
  {
    "word": "thermosenseology",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "His explanation was surprisingly thermosenseology."
  },
  {
    "word": "ultrasignaler",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "She explained it ultrasignaler and moved on."
  },
  {
    "word": "aerologicive",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "They discussed aerologicive at length."
  },
  {
    "word": "astrometryism",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "We will astrometryism the data before release."
  },
  {
    "word": "biodynamicsable",
    "definition": "characterized by byte; organized and effective.",
    "part_of_speech": "Adjective",
    "example": "They chose a biodynamicsable design."
  },
  {
    "word": "chronoformized",
    "definition": "in a way that is pulse-driven; with clear intent and structure.",
    "part_of_speech": "Adverb",
    "example": "They iterated chronoformized this sprint."
  },
  {
    "word": "cryptomindment",
    "definition": "the practice or concept of logic applied to modern systems or ideas.",
    "part_of_speech": "Noun",
    "example": "Her work shows real cryptomindment."
  },
  {
    "word": "cyberpulseal",
    "definition": "to gen or refine something systematically.",
    "part_of_speech": "Verb",
    "example": "They cyberpulseal their approach after feedback."
  }
];

app.get('/day', (req, res) => {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const idx = Math.min(Math.max(dayOfYear, 1), 366) - 1; // Subtract one to make it an index

    res.status(200).send(WORDS[idx]);
});

app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 367);

  res.status(200).send(WORDS[num]);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
