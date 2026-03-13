const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// 366 real-word entries (index 0 => day 1)
const WORDS = [
  {
    "word": "jolly",
    "definition": "full of happiness and cheer",
    "part_of_speech": "Adjective",
    "example": "We had a jolly evening."
  },
  {
    "word": "surface",
    "definition": "the outer part or top layer of something",
    "part_of_speech": "Noun",
    "example": "The surface of the lake was calm."
  },
  {
    "word": "allow",
    "definition": "to permit",
    "part_of_speech": "Verb",
    "example": "The rules allow one retake."
  },
  {
    "word": "explore",
    "definition": "to travel through or investigate",
    "part_of_speech": "Verb",
    "example": "We want to explore the cave."
  },
  {
    "word": "join",
    "definition": "to connect or become a member of",
    "part_of_speech": "Verb",
    "example": "Will you join the club?"
  },
  {
    "word": "language",
    "definition": "a system of communication using words or signs",
    "part_of_speech": "Noun",
    "example": "English is one language."
  },
  {
    "word": "basic",
    "definition": "simple and essential",
    "part_of_speech": "Adjective",
    "example": "We learned the basic rules."
  },
  {
    "word": "history",
    "definition": "the study or record of past events",
    "part_of_speech": "Noun",
    "example": "She loves ancient history."
  },
  {
    "word": "knowledge",
    "definition": "facts, information, and understanding",
    "part_of_speech": "Noun",
    "example": "Knowledge grows through study."
  },
  {
    "word": "accomplish",
    "definition": "to successfully complete",
    "part_of_speech": "Verb",
    "example": "We can accomplish more by working together."
  },
  {
    "word": "curious",
    "definition": "eager to know or learn",
    "part_of_speech": "Adjective",
    "example": "Children are naturally curious."
  },
  {
    "word": "contain",
    "definition": "to hold within",
    "part_of_speech": "Verb",
    "example": "This bottle contains medicine."
  },
  {
    "word": "contact",
    "definition": "communication or a person you can reach",
    "part_of_speech": "Noun",
    "example": "Send your contact information."
  },
  {
    "word": "design",
    "definition": "a plan or arrangement for making something",
    "part_of_speech": "Noun",
    "example": "The bridge design was elegant."
  },
  {
    "word": "climate",
    "definition": "the usual weather of a place",
    "part_of_speech": "Noun",
    "example": "The desert climate is dry."
  },
  {
    "word": "birth",
    "definition": "the act of being born",
    "part_of_speech": "Noun",
    "example": "The birth of the foal surprised us."
  },
  {
    "word": "rapid",
    "definition": "very fast",
    "part_of_speech": "Adjective",
    "example": "The town saw rapid growth."
  },
  {
    "word": "credit",
    "definition": "praise or recognition for something done",
    "part_of_speech": "Noun",
    "example": "She deserves credit for the idea."
  },
  {
    "word": "eager",
    "definition": "very ready or excited to do something",
    "part_of_speech": "Adjective",
    "example": "He was eager to begin."
  },
  {
    "word": "certain",
    "definition": "sure or definite",
    "part_of_speech": "Adjective",
    "example": "I am certain of the date."
  },
  {
    "word": "accept",
    "definition": "to receive willingly",
    "part_of_speech": "Verb",
    "example": "She chose to accept the offer."
  },
  {
    "word": "inform",
    "definition": "to give knowledge to",
    "part_of_speech": "Verb",
    "example": "Please inform us of any changes."
  },
  {
    "word": "purpose",
    "definition": "the reason for which something is done",
    "part_of_speech": "Noun",
    "example": "What is the purpose of this tool?"
  },
  {
    "word": "bravely",
    "definition": "in a courageous way",
    "part_of_speech": "Adverb",
    "example": "The child bravely entered the room."
  },
  {
    "word": "flourish",
    "definition": "to grow strongly or prosper",
    "part_of_speech": "Verb",
    "example": "Wildflowers flourish in spring."
  },
  {
    "word": "honor",
    "definition": "to show great respect for",
    "part_of_speech": "Verb",
    "example": "We honor those who served."
  },
  {
    "word": "declare",
    "definition": "to announce formally",
    "part_of_speech": "Verb",
    "example": "The court will declare its decision."
  },
  {
    "word": "vision",
    "definition": "the ability to see or imagine",
    "part_of_speech": "Noun",
    "example": "She had a clear vision for the project."
  },
  {
    "word": "article",
    "definition": "a piece of writing in a publication",
    "part_of_speech": "Noun",
    "example": "I read an article about space."
  },
  {
    "word": "choose",
    "definition": "to select",
    "part_of_speech": "Verb",
    "example": "You may choose any seat."
  },
  {
    "word": "level",
    "definition": "a position or height relative to something",
    "part_of_speech": "Noun",
    "example": "Water reached knee level."
  },
  {
    "word": "flexible",
    "definition": "able to bend or adapt easily",
    "part_of_speech": "Adjective",
    "example": "The schedule is flexible."
  },
  {
    "word": "budget",
    "definition": "a plan for spending money",
    "part_of_speech": "Noun",
    "example": "We made a monthly budget."
  },
  {
    "word": "truly",
    "definition": "in a genuine way",
    "part_of_speech": "Adverb",
    "example": "I am truly grateful."
  },
  {
    "word": "community",
    "definition": "a group of people living or working together",
    "part_of_speech": "Noun",
    "example": "The community raised money for repairs."
  },
  {
    "word": "carefully",
    "definition": "with caution and attention",
    "part_of_speech": "Adverb",
    "example": "He carefully stacked the plates."
  },
  {
    "word": "judgment",
    "definition": "an opinion formed after thought",
    "part_of_speech": "Noun",
    "example": "Use good judgment online."
  },
  {
    "word": "steadily",
    "definition": "in a regular stable way",
    "part_of_speech": "Adverb",
    "example": "The temperature steadily increased."
  },
  {
    "word": "value",
    "definition": "importance, usefulness, or worth",
    "part_of_speech": "Noun",
    "example": "This lesson has real value."
  },
  {
    "word": "abrupt",
    "definition": "sudden and unexpected",
    "part_of_speech": "Adjective",
    "example": "The car made an abrupt stop."
  },
  {
    "word": "formal",
    "definition": "following established rules or customs",
    "part_of_speech": "Adjective",
    "example": "He wore formal clothes."
  },
  {
    "word": "effort",
    "definition": "the use of energy to do something",
    "part_of_speech": "Noun",
    "example": "Success takes effort."
  },
  {
    "word": "benefit",
    "definition": "an advantage or helpful result",
    "part_of_speech": "Noun",
    "example": "Exercise has many health benefits."
  },
  {
    "word": "strength",
    "definition": "physical power or inner resilience",
    "part_of_speech": "Noun",
    "example": "Her greatest strength is patience."
  },
  {
    "word": "hope",
    "definition": "a feeling of expectation and desire",
    "part_of_speech": "Noun",
    "example": "Hope kept them moving."
  },
  {
    "word": "explain",
    "definition": "to make clear",
    "part_of_speech": "Verb",
    "example": "Can you explain the process?"
  },
  {
    "word": "mystery",
    "definition": "something difficult to explain or understand",
    "part_of_speech": "Noun",
    "example": "The disappearance remained a mystery."
  },
  {
    "word": "heal",
    "definition": "to make healthy again",
    "part_of_speech": "Verb",
    "example": "Time can heal emotional wounds."
  },
  {
    "word": "system",
    "definition": "a set of connected parts working together",
    "part_of_speech": "Noun",
    "example": "The computer system crashed."
  },
  {
    "word": "emotion",
    "definition": "a strong feeling",
    "part_of_speech": "Noun",
    "example": "Fear is a powerful emotion."
  },
  {
    "word": "bold",
    "definition": "brave and confident",
    "part_of_speech": "Adjective",
    "example": "She made a bold decision."
  },
  {
    "word": "ache",
    "definition": "to feel continuous pain",
    "part_of_speech": "Verb",
    "example": "My legs ache after the long hike."
  },
  {
    "word": "compare",
    "definition": "to examine similarities and differences",
    "part_of_speech": "Verb",
    "example": "Let's compare the two options."
  },
  {
    "word": "expect",
    "definition": "to think something will happen",
    "part_of_speech": "Verb",
    "example": "I expect rain later."
  },
  {
    "word": "swift",
    "definition": "moving very fast",
    "part_of_speech": "Adjective",
    "example": "A swift current carried the leaf away."
  },
  {
    "word": "friendship",
    "definition": "a close relationship between friends",
    "part_of_speech": "Noun",
    "example": "Their friendship lasted years."
  },
  {
    "word": "decorate",
    "definition": "to make more attractive",
    "part_of_speech": "Verb",
    "example": "They decorate the room for holidays."
  },
  {
    "word": "comparison",
    "definition": "the act of noting similarities and differences",
    "part_of_speech": "Noun",
    "example": "The comparison was useful."
  },
  {
    "word": "change",
    "definition": "to make or become different",
    "part_of_speech": "Verb",
    "example": "Weather can change quickly."
  },
  {
    "word": "fascinate",
    "definition": "to strongly interest",
    "part_of_speech": "Verb",
    "example": "Stars fascinate her."
  },
  {
    "word": "clearly",
    "definition": "in an easy-to-understand way",
    "part_of_speech": "Adverb",
    "example": "He clearly explained the solution."
  },
  {
    "word": "mathematics",
    "definition": "the abstract science of number, quantity, and space",
    "part_of_speech": "Noun",
    "example": "She enjoys studying mathematics."
  },
  {
    "word": "aspect",
    "definition": "a particular part or feature",
    "part_of_speech": "Noun",
    "example": "Safety is one aspect of the plan."
  },
  {
    "word": "craft",
    "definition": "a skill in making things well",
    "part_of_speech": "Noun",
    "example": "Woodworking is an old craft."
  },
  {
    "word": "arrival",
    "definition": "the act of reaching a place",
    "part_of_speech": "Noun",
    "example": "We waited for the train's arrival."
  },
  {
    "word": "kneel",
    "definition": "to go down on one's knees",
    "part_of_speech": "Verb",
    "example": "He knelt beside the bench."
  },
  {
    "word": "decline",
    "definition": "to refuse politely or decrease",
    "part_of_speech": "Verb",
    "example": "He chose to decline the invitation."
  },
  {
    "word": "precise",
    "definition": "exact and accurate",
    "part_of_speech": "Adjective",
    "example": "Use precise measurements."
  },
  {
    "word": "choice",
    "definition": "an act of selecting",
    "part_of_speech": "Noun",
    "example": "That was a difficult choice."
  },
  {
    "word": "hesitate",
    "definition": "to pause because of uncertainty",
    "part_of_speech": "Verb",
    "example": "Do not hesitate to ask."
  },
  {
    "word": "discuss",
    "definition": "to talk about",
    "part_of_speech": "Verb",
    "example": "We need to discuss the schedule."
  },
  {
    "word": "suddenly",
    "definition": "quickly and unexpectedly",
    "part_of_speech": "Adverb",
    "example": "The lights suddenly went out."
  },
  {
    "word": "freely",
    "definition": "without restriction",
    "part_of_speech": "Adverb",
    "example": "The information is freely available online."
  },
  {
    "word": "develop",
    "definition": "to grow or improve over time",
    "part_of_speech": "Verb",
    "example": "Children develop language early."
  },
  {
    "word": "service",
    "definition": "helpful work done for others or a system that provides it",
    "part_of_speech": "Noun",
    "example": "The restaurant offers good service."
  },
  {
    "word": "eagerly",
    "definition": "with excitement or interest",
    "part_of_speech": "Adverb",
    "example": "The children eagerly opened the gifts."
  },
  {
    "word": "gratefully",
    "definition": "with appreciation",
    "part_of_speech": "Adverb",
    "example": "He gratefully accepted the help."
  },
  {
    "word": "thought",
    "definition": "an idea or act of thinking",
    "part_of_speech": "Noun",
    "example": "That thought stayed with me."
  },
  {
    "word": "obvious",
    "definition": "easy to see or understand",
    "part_of_speech": "Adjective",
    "example": "The answer seems obvious now."
  },
  {
    "word": "identify",
    "definition": "to recognize or name",
    "part_of_speech": "Verb",
    "example": "Can you identify the song?"
  },
  {
    "word": "complex",
    "definition": "made of many connected parts; not simple",
    "part_of_speech": "Adjective",
    "example": "The machine is complex."
  },
  {
    "word": "nation",
    "definition": "a large group of people forming a country",
    "part_of_speech": "Noun",
    "example": "The nation voted today."
  },
  {
    "word": "ability",
    "definition": "the power or skill to do something",
    "part_of_speech": "Noun",
    "example": "Her ability to stay calm impressed everyone."
  },
  {
    "word": "appear",
    "definition": "to come into view",
    "part_of_speech": "Verb",
    "example": "A rainbow may appear after rain."
  },
  {
    "word": "careful",
    "definition": "showing caution and attention",
    "part_of_speech": "Adjective",
    "example": "Be careful with the glass."
  },
  {
    "word": "agree",
    "definition": "to have the same opinion",
    "part_of_speech": "Verb",
    "example": "We agree on the main idea."
  },
  {
    "word": "device",
    "definition": "a tool or piece of equipment",
    "part_of_speech": "Noun",
    "example": "This device measures pressure."
  },
  {
    "word": "smoothly",
    "definition": "without problems",
    "part_of_speech": "Adverb",
    "example": "The presentation went smoothly."
  },
  {
    "word": "embrace",
    "definition": "to hold closely or accept eagerly",
    "part_of_speech": "Verb",
    "example": "They chose to embrace change."
  },
  {
    "word": "attend",
    "definition": "to be present at",
    "part_of_speech": "Verb",
    "example": "Many students attend the lecture."
  },
  {
    "word": "danger",
    "definition": "the possibility of harm",
    "part_of_speech": "Noun",
    "example": "The warning sign marked danger."
  },
  {
    "word": "honest",
    "definition": "truthful and sincere",
    "part_of_speech": "Adjective",
    "example": "She gave an honest answer."
  },
  {
    "word": "advice",
    "definition": "guidance or recommendations about what to do",
    "part_of_speech": "Noun",
    "example": "My grandfather gave wise advice."
  },
  {
    "word": "angle",
    "definition": "the space between two lines or surfaces",
    "part_of_speech": "Noun",
    "example": "Draw a right angle here."
  },
  {
    "word": "harmony",
    "definition": "agreement or pleasing arrangement",
    "part_of_speech": "Noun",
    "example": "The choir sang in harmony."
  },
  {
    "word": "continue",
    "definition": "to keep going",
    "part_of_speech": "Verb",
    "example": "The show will continue after the break."
  },
  {
    "word": "invite",
    "definition": "to ask someone to come",
    "part_of_speech": "Verb",
    "example": "They invited us to dinner."
  },
  {
    "word": "energy",
    "definition": "the power to do work or be active",
    "part_of_speech": "Noun",
    "example": "Children have plenty of energy."
  },
  {
    "word": "brief",
    "definition": "lasting only a short time",
    "part_of_speech": "Adjective",
    "example": "We had a brief chat."
  },
  {
    "word": "answer",
    "definition": "to respond to a question",
    "part_of_speech": "Verb",
    "example": "Please answer honestly."
  },
  {
    "word": "outcome",
    "definition": "the final result",
    "part_of_speech": "Noun",
    "example": "No one could predict the outcome."
  },
  {
    "word": "season",
    "definition": "one of the divisions of the year",
    "part_of_speech": "Noun",
    "example": "Autumn is my favorite season."
  },
  {
    "word": "journey",
    "definition": "an act of traveling from one place to another",
    "part_of_speech": "Noun",
    "example": "The journey took two days."
  },
  {
    "word": "discovery",
    "definition": "the act of finding something new",
    "part_of_speech": "Noun",
    "example": "The discovery excited scientists."
  },
  {
    "word": "failure",
    "definition": "lack of success",
    "part_of_speech": "Noun",
    "example": "The launch was a failure."
  },
  {
    "word": "faithful",
    "definition": "loyal and dependable",
    "part_of_speech": "Adjective",
    "example": "The dog was faithful for years."
  },
  {
    "word": "destroy",
    "definition": "to ruin completely",
    "part_of_speech": "Verb",
    "example": "Fire can destroy a forest."
  },
  {
    "word": "cross",
    "definition": "to go from one side to another",
    "part_of_speech": "Verb",
    "example": "Look both ways before you cross."
  },
  {
    "word": "boldly",
    "definition": "in a confident and daring way",
    "part_of_speech": "Adverb",
    "example": "She boldly proposed a new idea."
  },
  {
    "word": "ask",
    "definition": "to request information",
    "part_of_speech": "Verb",
    "example": "He asked a thoughtful question."
  },
  {
    "word": "liberty",
    "definition": "freedom from unjust control",
    "part_of_speech": "Noun",
    "example": "They fought for liberty."
  },
  {
    "word": "conclusion",
    "definition": "the end or final decision of something",
    "part_of_speech": "Noun",
    "example": "We reached the same conclusion."
  },
  {
    "word": "company",
    "definition": "a business organization",
    "part_of_speech": "Noun",
    "example": "The company hired more staff."
  },
  {
    "word": "build",
    "definition": "to make by putting parts together",
    "part_of_speech": "Verb",
    "example": "They plan to build a deck."
  },
  {
    "word": "arrive",
    "definition": "to reach a place",
    "part_of_speech": "Verb",
    "example": "The package should arrive today."
  },
  {
    "word": "confirm",
    "definition": "to verify as true",
    "part_of_speech": "Verb",
    "example": "Please confirm your reservation."
  },
  {
    "word": "familiar",
    "definition": "well known from experience",
    "part_of_speech": "Adjective",
    "example": "Her face looked familiar."
  },
  {
    "word": "impression",
    "definition": "an effect or opinion formed",
    "part_of_speech": "Noun",
    "example": "He made a good impression."
  },
  {
    "word": "environment",
    "definition": "the surroundings or conditions around something",
    "part_of_speech": "Noun",
    "example": "Plants respond to their environment."
  },
  {
    "word": "risk",
    "definition": "the possibility of danger or loss",
    "part_of_speech": "Noun",
    "example": "Driving fast increases risk."
  },
  {
    "word": "lesson",
    "definition": "something learned or a period of teaching",
    "part_of_speech": "Noun",
    "example": "The accident taught a lesson."
  },
  {
    "word": "deliver",
    "definition": "to bring to the right place",
    "part_of_speech": "Verb",
    "example": "The driver will deliver the order."
  },
  {
    "word": "concern",
    "definition": "to relate to or worry",
    "part_of_speech": "Verb",
    "example": "The report concerns public safety."
  },
  {
    "word": "vivid",
    "definition": "bright, clear, and full of detail",
    "part_of_speech": "Adjective",
    "example": "She gave a vivid description."
  },
  {
    "word": "create",
    "definition": "to make something new",
    "part_of_speech": "Verb",
    "example": "Artists create beauty."
  },
  {
    "word": "secret",
    "definition": "something kept hidden or unknown",
    "part_of_speech": "Noun",
    "example": "He told me a secret."
  },
  {
    "word": "fade",
    "definition": "to lose brightness or strength",
    "part_of_speech": "Verb",
    "example": "The music began to fade."
  },
  {
    "word": "experience",
    "definition": "knowledge gained from doing or living through something",
    "part_of_speech": "Noun",
    "example": "Experience teaches patience."
  },
  {
    "word": "polite",
    "definition": "showing good manners",
    "part_of_speech": "Adjective",
    "example": "Please be polite to guests."
  },
  {
    "word": "importance",
    "definition": "the quality of being significant",
    "part_of_speech": "Noun",
    "example": "Safety is of great importance."
  },
  {
    "word": "combine",
    "definition": "to join into one",
    "part_of_speech": "Verb",
    "example": "Heat and pressure combine the materials."
  },
  {
    "word": "earn",
    "definition": "to receive through work",
    "part_of_speech": "Verb",
    "example": "She earns extra money tutoring."
  },
  {
    "word": "income",
    "definition": "money received regularly",
    "part_of_speech": "Noun",
    "example": "Her income increased this year."
  },
  {
    "word": "ideal",
    "definition": "perfect or best for a purpose",
    "part_of_speech": "Adjective",
    "example": "This room is ideal for study."
  },
  {
    "word": "courage",
    "definition": "the ability to face fear",
    "part_of_speech": "Noun",
    "example": "It took courage to speak up."
  },
  {
    "word": "glance",
    "definition": "to look quickly",
    "part_of_speech": "Verb",
    "example": "She glanced at the clock."
  },
  {
    "word": "elastic",
    "definition": "able to stretch and return to shape",
    "part_of_speech": "Adjective",
    "example": "Rubber bands are elastic."
  },
  {
    "word": "attach",
    "definition": "to fasten to something",
    "part_of_speech": "Verb",
    "example": "Attach the file to your email."
  },
  {
    "word": "expand",
    "definition": "to become larger",
    "part_of_speech": "Verb",
    "example": "The company plans to expand overseas."
  },
  {
    "word": "delight",
    "definition": "great pleasure",
    "part_of_speech": "Noun",
    "example": "The gift was a delight."
  },
  {
    "word": "examine",
    "definition": "to inspect closely",
    "part_of_speech": "Verb",
    "example": "Doctors examine the patient."
  },
  {
    "word": "humble",
    "definition": "not proud or arrogant",
    "part_of_speech": "Adjective",
    "example": "He remained humble after winning."
  },
  {
    "word": "approve",
    "definition": "to officially agree to",
    "part_of_speech": "Verb",
    "example": "The board approved the budget."
  },
  {
    "word": "course",
    "definition": "a path or a series of lessons",
    "part_of_speech": "Noun",
    "example": "He changed the course of the river."
  },
  {
    "word": "consider",
    "definition": "to think carefully about",
    "part_of_speech": "Verb",
    "example": "We will consider every option."
  },
  {
    "word": "forgive",
    "definition": "to stop feeling anger toward",
    "part_of_speech": "Verb",
    "example": "Can you forgive the mistake?"
  },
  {
    "word": "subtle",
    "definition": "delicate and not obvious",
    "part_of_speech": "Adjective",
    "example": "The flavor has a subtle sweetness."
  },
  {
    "word": "goal",
    "definition": "something aimed at or desired",
    "part_of_speech": "Noun",
    "example": "My goal is to graduate early."
  },
  {
    "word": "feature",
    "definition": "to include as an important part",
    "part_of_speech": "Verb",
    "example": "The article will feature local artists."
  },
  {
    "word": "industry",
    "definition": "economic activity involving production or services",
    "part_of_speech": "Noun",
    "example": "The steel industry grew quickly."
  },
  {
    "word": "reliable",
    "definition": "able to be trusted or depended on",
    "part_of_speech": "Adjective",
    "example": "This car is reliable."
  },
  {
    "word": "belong",
    "definition": "to be the property of",
    "part_of_speech": "Verb",
    "example": "Those keys belong to Maya."
  },
  {
    "word": "routine",
    "definition": "a regular way of doing things",
    "part_of_speech": "Noun",
    "example": "Exercise became part of her routine."
  },
  {
    "word": "idea",
    "definition": "a thought or suggestion",
    "part_of_speech": "Noun",
    "example": "Your idea could work."
  },
  {
    "word": "equal",
    "definition": "the same in amount or value",
    "part_of_speech": "Adjective",
    "example": "All sides are equal."
  },
  {
    "word": "chance",
    "definition": "a possibility of something happening",
    "part_of_speech": "Noun",
    "example": "There is a good chance of snow."
  },
  {
    "word": "habit",
    "definition": "a regular behavior",
    "part_of_speech": "Noun",
    "example": "Reading at night became a habit."
  },
  {
    "word": "contribute",
    "definition": "to give or add something",
    "part_of_speech": "Verb",
    "example": "Many people contribute to the fund."
  },
  {
    "word": "faint",
    "definition": "hard to see, hear, or feel",
    "part_of_speech": "Adjective",
    "example": "A faint smell of smoke remained."
  },
  {
    "word": "enforce",
    "definition": "to make sure rules are obeyed",
    "part_of_speech": "Verb",
    "example": "Police enforce traffic laws."
  },
  {
    "word": "feeling",
    "definition": "an emotion or sense of touch",
    "part_of_speech": "Noun",
    "example": "I had a strange feeling about it."
  },
  {
    "word": "behave",
    "definition": "to act in a certain way",
    "part_of_speech": "Verb",
    "example": "The children behaved well."
  },
  {
    "word": "alert",
    "definition": "to warn or notify",
    "part_of_speech": "Verb",
    "example": "Please alert me if the schedule changes."
  },
  {
    "word": "hide",
    "definition": "to keep out of sight",
    "part_of_speech": "Verb",
    "example": "Children love to hide behind curtains."
  },
  {
    "word": "clever",
    "definition": "quick to understand or learn",
    "part_of_speech": "Adjective",
    "example": "The clever fox escaped."
  },
  {
    "word": "theory",
    "definition": "an explanation supported by evidence",
    "part_of_speech": "Noun",
    "example": "The theory changed modern physics."
  },
  {
    "word": "establish",
    "definition": "to set up firmly",
    "part_of_speech": "Verb",
    "example": "They hope to establish trust."
  },
  {
    "word": "achievement",
    "definition": "something done successfully through effort",
    "part_of_speech": "Noun",
    "example": "Graduation was a major achievement."
  },
  {
    "word": "cooperate",
    "definition": "to work together",
    "part_of_speech": "Verb",
    "example": "Teams must cooperate to succeed."
  },
  {
    "word": "shadow",
    "definition": "a dark area caused by blocked light",
    "part_of_speech": "Noun",
    "example": "The tree cast a long shadow."
  },
  {
    "word": "respect",
    "definition": "admiration shown toward someone or something",
    "part_of_speech": "Noun",
    "example": "She earned our respect."
  },
  {
    "word": "interest",
    "definition": "curiosity or concern about something",
    "part_of_speech": "Noun",
    "example": "He has an interest in coding."
  },
  {
    "word": "attitude",
    "definition": "a way of thinking or feeling",
    "part_of_speech": "Noun",
    "example": "A positive attitude helps."
  },
  {
    "word": "science",
    "definition": "the study of the natural world through observation and experiment",
    "part_of_speech": "Noun",
    "example": "Science helps explain nature."
  },
  {
    "word": "world",
    "definition": "the earth and all life on it",
    "part_of_speech": "Noun",
    "example": "The world feels smaller online."
  },
  {
    "word": "decide",
    "definition": "to make a choice",
    "part_of_speech": "Verb",
    "example": "She cannot decide between the two."
  },
  {
    "word": "fragile",
    "definition": "easily broken or damaged",
    "part_of_speech": "Adjective",
    "example": "Handle the fragile vase carefully."
  },
  {
    "word": "able",
    "definition": "having the power or skill to do something",
    "part_of_speech": "Adjective",
    "example": "She is able to solve tough problems."
  },
  {
    "word": "increase",
    "definition": "to make greater",
    "part_of_speech": "Verb",
    "example": "Exercise can increase stamina."
  },
  {
    "word": "lively",
    "definition": "full of energy and activity",
    "part_of_speech": "Adjective",
    "example": "The market was lively."
  },
  {
    "word": "direction",
    "definition": "a course or path along which something moves",
    "part_of_speech": "Noun",
    "example": "We walked in the wrong direction."
  },
  {
    "word": "command",
    "definition": "an order or instruction",
    "part_of_speech": "Noun",
    "example": "The captain gave the command."
  },
  {
    "word": "generate",
    "definition": "to produce",
    "part_of_speech": "Verb",
    "example": "Solar panels generate electricity."
  },
  {
    "word": "debate",
    "definition": "a formal discussion with opposing views",
    "part_of_speech": "Noun",
    "example": "The debate lasted an hour."
  },
  {
    "word": "proud",
    "definition": "feeling pleasure from achievement",
    "part_of_speech": "Adjective",
    "example": "Her parents were proud."
  },
  {
    "word": "assist",
    "definition": "to help",
    "part_of_speech": "Verb",
    "example": "The nurse will assist the doctor."
  },
  {
    "word": "calculate",
    "definition": "to determine by using math",
    "part_of_speech": "Verb",
    "example": "You should calculate the total cost."
  },
  {
    "word": "decision",
    "definition": "a choice made after thought",
    "part_of_speech": "Noun",
    "example": "That decision changed everything."
  },
  {
    "word": "control",
    "definition": "the power to direct or manage",
    "part_of_speech": "Noun",
    "example": "She kept control of the class."
  },
  {
    "word": "defend",
    "definition": "to protect from attack or criticism",
    "part_of_speech": "Verb",
    "example": "Lawyers defend their clients."
  },
  {
    "word": "exist",
    "definition": "to have real being",
    "part_of_speech": "Verb",
    "example": "Do ghosts exist?"
  },
  {
    "word": "cheerful",
    "definition": "noticeably happy and optimistic",
    "part_of_speech": "Adjective",
    "example": "Her cheerful voice lifted the room."
  },
  {
    "word": "analyze",
    "definition": "to examine carefully in detail",
    "part_of_speech": "Verb",
    "example": "Scientists analyze the results."
  },
  {
    "word": "appeal",
    "definition": "a quality that attracts interest",
    "part_of_speech": "Noun",
    "example": "The town has a lot of appeal."
  },
  {
    "word": "comment",
    "definition": "a spoken or written remark",
    "part_of_speech": "Noun",
    "example": "Her comment was helpful."
  },
  {
    "word": "frequent",
    "definition": "happening often",
    "part_of_speech": "Adjective",
    "example": "Frequent practice improves skill."
  },
  {
    "word": "face",
    "definition": "to confront or be directed toward",
    "part_of_speech": "Verb",
    "example": "We must face the challenge."
  },
  {
    "word": "rapidly",
    "definition": "very quickly",
    "part_of_speech": "Adverb",
    "example": "Technology changes rapidly."
  },
  {
    "word": "argue",
    "definition": "to present reasons for or against",
    "part_of_speech": "Verb",
    "example": "The lawyers will argue in court."
  },
  {
    "word": "complain",
    "definition": "to express dissatisfaction",
    "part_of_speech": "Verb",
    "example": "Customers may complain about delays."
  },
  {
    "word": "adventure",
    "definition": "an exciting or risky experience",
    "part_of_speech": "Noun",
    "example": "Camping alone felt like an adventure."
  },
  {
    "word": "patiently",
    "definition": "in a calm waiting manner",
    "part_of_speech": "Adverb",
    "example": "He patiently explained the steps again."
  },
  {
    "word": "defense",
    "definition": "protection against attack",
    "part_of_speech": "Noun",
    "example": "The castle's defense was strong."
  },
  {
    "word": "ready",
    "definition": "prepared for action",
    "part_of_speech": "Adjective",
    "example": "We are ready to leave."
  },
  {
    "word": "judge",
    "definition": "to form an opinion or decide officially",
    "part_of_speech": "Verb",
    "example": "Do not judge too quickly."
  },
  {
    "word": "enter",
    "definition": "to go into",
    "part_of_speech": "Verb",
    "example": "Please enter through the side door."
  },
  {
    "word": "approach",
    "definition": "to move closer to",
    "part_of_speech": "Verb",
    "example": "A car began to approach the gate."
  },
  {
    "word": "imagine",
    "definition": "to form a picture in the mind",
    "part_of_speech": "Verb",
    "example": "Imagine life on another planet."
  },
  {
    "word": "border",
    "definition": "the line separating two areas",
    "part_of_speech": "Noun",
    "example": "They crossed the state border."
  },
  {
    "word": "advance",
    "definition": "to move forward",
    "part_of_speech": "Verb",
    "example": "The team will advance to the next round."
  },
  {
    "word": "campaign",
    "definition": "an organized effort to achieve a goal",
    "part_of_speech": "Noun",
    "example": "The school started a recycling campaign."
  },
  {
    "word": "warmly",
    "definition": "in a friendly manner",
    "part_of_speech": "Adverb",
    "example": "They warmly welcomed the guests."
  },
  {
    "word": "finish",
    "definition": "to complete",
    "part_of_speech": "Verb",
    "example": "I need to finish my homework."
  },
  {
    "word": "quality",
    "definition": "a distinguishing feature or degree of excellence",
    "part_of_speech": "Noun",
    "example": "This fabric has high quality."
  },
  {
    "word": "accurate",
    "definition": "free from error; correct",
    "part_of_speech": "Adjective",
    "example": "The map is accurate."
  },
  {
    "word": "claim",
    "definition": "to state as true",
    "part_of_speech": "Verb",
    "example": "He claims he saw the comet."
  },
  {
    "word": "dangerous",
    "definition": "likely to cause harm",
    "part_of_speech": "Adjective",
    "example": "The road becomes dangerous in ice."
  },
  {
    "word": "success",
    "definition": "the achievement of a goal",
    "part_of_speech": "Noun",
    "example": "Hard work often leads to success."
  },
  {
    "word": "issue",
    "definition": "an important topic or problem",
    "part_of_speech": "Noun",
    "example": "Housing is a major issue."
  },
  {
    "word": "collect",
    "definition": "to gather together",
    "part_of_speech": "Verb",
    "example": "They collect stamps."
  },
  {
    "word": "admit",
    "definition": "to confess or allow to enter",
    "part_of_speech": "Verb",
    "example": "He had to admit the mistake."
  },
  {
    "word": "fail",
    "definition": "to not succeed",
    "part_of_speech": "Verb",
    "example": "Do not fail to lock the door."
  },
  {
    "word": "art",
    "definition": "creative expression such as painting or music",
    "part_of_speech": "Noun",
    "example": "She studies art after school."
  },
  {
    "word": "know",
    "definition": "to have understanding of",
    "part_of_speech": "Verb",
    "example": "I know the answer."
  },
  {
    "word": "celebrate",
    "definition": "to honor with enjoyment or ceremony",
    "part_of_speech": "Verb",
    "example": "We celebrate birthdays with cake."
  },
  {
    "word": "patient",
    "definition": "able to wait calmly",
    "part_of_speech": "Adjective",
    "example": "The nurse was patient with everyone."
  },
  {
    "word": "absorb",
    "definition": "to take in or soak up",
    "part_of_speech": "Verb",
    "example": "A sponge can absorb a lot of water."
  },
  {
    "word": "people",
    "definition": "human beings in general or a group",
    "part_of_speech": "Noun",
    "example": "People filled the square."
  },
  {
    "word": "demand",
    "definition": "to ask for firmly",
    "part_of_speech": "Verb",
    "example": "Workers demand fair pay."
  },
  {
    "word": "ignore",
    "definition": "to pay no attention to",
    "part_of_speech": "Verb",
    "example": "Do not ignore warning signs."
  },
  {
    "word": "anxious",
    "definition": "worried or uneasy",
    "part_of_speech": "Adjective",
    "example": "I felt anxious before the test."
  },
  {
    "word": "steady",
    "definition": "firm and regular; not changing suddenly",
    "part_of_speech": "Adjective",
    "example": "Keep a steady pace."
  },
  {
    "word": "character",
    "definition": "the qualities that make a person distinct",
    "part_of_speech": "Noun",
    "example": "He showed strong character."
  },
  {
    "word": "modern",
    "definition": "relating to the present time",
    "part_of_speech": "Adjective",
    "example": "The museum has a modern design."
  },
  {
    "word": "discipline",
    "definition": "training that develops control or order",
    "part_of_speech": "Noun",
    "example": "Daily study requires discipline."
  },
  {
    "word": "wisdom",
    "definition": "good judgment based on knowledge and experience",
    "part_of_speech": "Noun",
    "example": "Age sometimes brings wisdom."
  },
  {
    "word": "happily",
    "definition": "in a joyful manner",
    "part_of_speech": "Adverb",
    "example": "They happily celebrated the victory."
  },
  {
    "word": "rare",
    "definition": "not common",
    "part_of_speech": "Adjective",
    "example": "That bird is rare here."
  },
  {
    "word": "pattern",
    "definition": "a repeated design or regular way things happen",
    "part_of_speech": "Noun",
    "example": "The tiles form a pattern."
  },
  {
    "word": "keep",
    "definition": "to continue to have or hold",
    "part_of_speech": "Verb",
    "example": "Keep your receipt."
  },
  {
    "word": "fortune",
    "definition": "great wealth or luck",
    "part_of_speech": "Noun",
    "example": "They made a fortune in business."
  },
  {
    "word": "improvement",
    "definition": "the act of becoming better",
    "part_of_speech": "Noun",
    "example": "The update was a real improvement."
  },
  {
    "word": "confess",
    "definition": "to admit openly",
    "part_of_speech": "Verb",
    "example": "He finally confessed the truth."
  },
  {
    "word": "compete",
    "definition": "to try to win against others",
    "part_of_speech": "Verb",
    "example": "Athletes compete for medals."
  },
  {
    "word": "inspire",
    "definition": "to fill with motivation",
    "part_of_speech": "Verb",
    "example": "Great stories inspire readers."
  },
  {
    "word": "balance",
    "definition": "to keep steady",
    "part_of_speech": "Verb",
    "example": "He can balance on one foot."
  },
  {
    "word": "narrow",
    "definition": "not wide",
    "part_of_speech": "Adjective",
    "example": "We crossed a narrow bridge."
  },
  {
    "word": "divide",
    "definition": "to separate into parts",
    "part_of_speech": "Verb",
    "example": "The river divides the town."
  },
  {
    "word": "concentrate",
    "definition": "to focus attention",
    "part_of_speech": "Verb",
    "example": "Please concentrate on the instructions."
  },
  {
    "word": "appreciate",
    "definition": "to value highly",
    "part_of_speech": "Verb",
    "example": "I appreciate your help."
  },
  {
    "word": "capture",
    "definition": "to take control of",
    "part_of_speech": "Verb",
    "example": "The camera can capture fine detail."
  },
  {
    "word": "task",
    "definition": "a piece of work to be done",
    "part_of_speech": "Noun",
    "example": "Cleaning the garage is my next task."
  },
  {
    "word": "attempt",
    "definition": "to try",
    "part_of_speech": "Verb",
    "example": "She will attempt the puzzle again."
  },
  {
    "word": "leader",
    "definition": "a person who guides others",
    "part_of_speech": "Noun",
    "example": "A good leader listens."
  },
  {
    "word": "rarely",
    "definition": "not often",
    "part_of_speech": "Adverb",
    "example": "He rarely misses a deadline."
  },
  {
    "word": "degree",
    "definition": "a level, amount, or academic award",
    "part_of_speech": "Noun",
    "example": "She earned a biology degree."
  },
  {
    "word": "focus",
    "definition": "to direct attention",
    "part_of_speech": "Verb",
    "example": "Try to focus on one task."
  },
  {
    "word": "example",
    "definition": "something that shows what a thing is like",
    "part_of_speech": "Noun",
    "example": "This chart is a good example."
  },
  {
    "word": "result",
    "definition": "the outcome or effect of an action",
    "part_of_speech": "Noun",
    "example": "The test result was clear."
  },
  {
    "word": "wisely",
    "definition": "with good judgment",
    "part_of_speech": "Adverb",
    "example": "Invest your money wisely."
  },
  {
    "word": "error",
    "definition": "a mistake",
    "part_of_speech": "Noun",
    "example": "The report contained one error."
  },
  {
    "word": "avoid",
    "definition": "to keep away from",
    "part_of_speech": "Verb",
    "example": "Drivers should avoid icy roads."
  },
  {
    "word": "future",
    "definition": "the time yet to come",
    "part_of_speech": "Noun",
    "example": "We worry about the future."
  },
  {
    "word": "breathe",
    "definition": "to take air into the lungs",
    "part_of_speech": "Verb",
    "example": "Remember to breathe slowly."
  },
  {
    "word": "truth",
    "definition": "the quality of being true",
    "part_of_speech": "Noun",
    "example": "The truth finally came out."
  },
  {
    "word": "connect",
    "definition": "to join or link together",
    "part_of_speech": "Verb",
    "example": "This bridge connects the islands."
  },
  {
    "word": "describe",
    "definition": "to tell how something is",
    "part_of_speech": "Verb",
    "example": "Can you describe the suspect?"
  },
  {
    "word": "opinion",
    "definition": "a personal belief or judgment",
    "part_of_speech": "Noun",
    "example": "In my opinion, it will rain."
  },
  {
    "word": "gentle",
    "definition": "kind and mild in manner",
    "part_of_speech": "Adjective",
    "example": "Use a gentle touch."
  },
  {
    "word": "discover",
    "definition": "to find for the first time",
    "part_of_speech": "Verb",
    "example": "Researchers discovered a new species."
  },
  {
    "word": "influence",
    "definition": "to affect the actions or thoughts of",
    "part_of_speech": "Verb",
    "example": "Friends can influence choices."
  },
  {
    "word": "tender",
    "definition": "gentle, soft, or easily hurt",
    "part_of_speech": "Adjective",
    "example": "The plant has tender leaves."
  },
  {
    "word": "amuse",
    "definition": "to entertain or make someone laugh",
    "part_of_speech": "Verb",
    "example": "The puppy's behavior will amuse the kids."
  },
  {
    "word": "enjoy",
    "definition": "to take pleasure in",
    "part_of_speech": "Verb",
    "example": "I enjoy quiet mornings."
  },
  {
    "word": "injury",
    "definition": "damage to the body",
    "part_of_speech": "Noun",
    "example": "He recovered from the injury."
  },
  {
    "word": "quickly",
    "definition": "at high speed or with little delay",
    "part_of_speech": "Adverb",
    "example": "She quickly solved the puzzle."
  },
  {
    "word": "gather",
    "definition": "to bring together",
    "part_of_speech": "Verb",
    "example": "Clouds gather before a storm."
  },
  {
    "word": "express",
    "definition": "to show in words or actions",
    "part_of_speech": "Verb",
    "example": "He struggled to express gratitude."
  },
  {
    "word": "account",
    "definition": "a report or record of events",
    "part_of_speech": "Noun",
    "example": "He gave an account of the meeting."
  },
  {
    "word": "grasp",
    "definition": "to understand or seize firmly",
    "part_of_speech": "Verb",
    "example": "He could not grasp the concept at first."
  },
  {
    "word": "solution",
    "definition": "an answer to a problem",
    "part_of_speech": "Noun",
    "example": "We finally found a solution."
  },
  {
    "word": "sincere",
    "definition": "genuine and honest in feeling",
    "part_of_speech": "Adjective",
    "example": "His apology sounded sincere."
  },
  {
    "word": "fierce",
    "definition": "strong, intense, and aggressive",
    "part_of_speech": "Adjective",
    "example": "A fierce storm approached."
  },
  {
    "word": "citizen",
    "definition": "a legal member of a country or city",
    "part_of_speech": "Noun",
    "example": "Every citizen can vote."
  },
  {
    "word": "graceful",
    "definition": "moving in a smooth and attractive way",
    "part_of_speech": "Adjective",
    "example": "The dancer looked graceful."
  },
  {
    "word": "arrange",
    "definition": "to put in order or plan",
    "part_of_speech": "Verb",
    "example": "She arranged the books by color."
  },
  {
    "word": "assure",
    "definition": "to make certain or confident",
    "part_of_speech": "Verb",
    "example": "I assure you that it is safe."
  },
  {
    "word": "apology",
    "definition": "an expression of regret",
    "part_of_speech": "Noun",
    "example": "She offered an apology."
  },
  {
    "word": "loudly",
    "definition": "with a strong sound",
    "part_of_speech": "Adverb",
    "example": "The crowd loudly cheered."
  },
  {
    "word": "extend",
    "definition": "to stretch out or offer",
    "part_of_speech": "Verb",
    "example": "They will extend the deadline."
  },
  {
    "word": "consequence",
    "definition": "a result or effect",
    "part_of_speech": "Noun",
    "example": "Every action has a consequence."
  },
  {
    "word": "borrow",
    "definition": "to take temporarily for use",
    "part_of_speech": "Verb",
    "example": "Can I borrow your pen?"
  },
  {
    "word": "argument",
    "definition": "a set of reasons supporting a view",
    "part_of_speech": "Noun",
    "example": "His argument was persuasive."
  },
  {
    "word": "handle",
    "definition": "to manage or touch carefully",
    "part_of_speech": "Verb",
    "example": "Glass should be handled with care."
  },
  {
    "word": "distant",
    "definition": "far away in space or time",
    "part_of_speech": "Adjective",
    "example": "We could see distant hills."
  },
  {
    "word": "greet",
    "definition": "to welcome",
    "part_of_speech": "Verb",
    "example": "They greeted us warmly."
  },
  {
    "word": "deserve",
    "definition": "to be worthy of",
    "part_of_speech": "Verb",
    "example": "You deserve a break."
  },
  {
    "word": "impact",
    "definition": "a strong effect or influence",
    "part_of_speech": "Noun",
    "example": "The speech had a big impact."
  },
  {
    "word": "memory",
    "definition": "the ability to remember or something remembered",
    "part_of_speech": "Noun",
    "example": "That song brought back a memory."
  },
  {
    "word": "convince",
    "definition": "to persuade",
    "part_of_speech": "Verb",
    "example": "The evidence convinced the jury."
  },
  {
    "word": "contrast",
    "definition": "a noticeable difference",
    "part_of_speech": "Noun",
    "example": "The contrast between the colors is sharp."
  },
  {
    "word": "slowly",
    "definition": "at a low speed",
    "part_of_speech": "Adverb",
    "example": "The turtle moved slowly."
  },
  {
    "word": "escape",
    "definition": "to get free from",
    "part_of_speech": "Verb",
    "example": "The bird managed to escape."
  },
  {
    "word": "wealth",
    "definition": "a large amount of money or valuable possessions",
    "part_of_speech": "Noun",
    "example": "The family had little wealth."
  },
  {
    "word": "abandon",
    "definition": "to leave behind completely",
    "part_of_speech": "Verb",
    "example": "They had to abandon the plan after the storm."
  },
  {
    "word": "feed",
    "definition": "to give food to",
    "part_of_speech": "Verb",
    "example": "Please feed the cat."
  },
  {
    "word": "method",
    "definition": "a way of doing something",
    "part_of_speech": "Noun",
    "example": "This method is faster."
  },
  {
    "word": "calm",
    "definition": "peaceful and not excited",
    "part_of_speech": "Adjective",
    "example": "The sea was calm at dawn."
  },
  {
    "word": "cause",
    "definition": "the reason something happens",
    "part_of_speech": "Noun",
    "example": "No clear cause was found."
  },
  {
    "word": "support",
    "definition": "help or encouragement",
    "part_of_speech": "Noun",
    "example": "Thank you for your support."
  },
  {
    "word": "believe",
    "definition": "to accept as true",
    "part_of_speech": "Verb",
    "example": "I believe your story."
  },
  {
    "word": "unique",
    "definition": "being the only one of its kind",
    "part_of_speech": "Adjective",
    "example": "Every fingerprint is unique."
  },
  {
    "word": "carry",
    "definition": "to hold and move something",
    "part_of_speech": "Verb",
    "example": "She carried the box upstairs."
  },
  {
    "word": "culture",
    "definition": "the shared customs and values of a group",
    "part_of_speech": "Noun",
    "example": "Food reflects culture."
  },
  {
    "word": "encourage",
    "definition": "to give support or confidence",
    "part_of_speech": "Verb",
    "example": "Coaches encourage their players."
  },
  {
    "word": "advise",
    "definition": "to give guidance or recommendations",
    "part_of_speech": "Verb",
    "example": "Teachers advise students about classes."
  },
  {
    "word": "afford",
    "definition": "to have enough money or time for",
    "part_of_speech": "Verb",
    "example": "He cannot afford a new car right now."
  },
  {
    "word": "politely",
    "definition": "with good manners",
    "part_of_speech": "Adverb",
    "example": "She politely declined the offer."
  },
  {
    "word": "contest",
    "definition": "a competition",
    "part_of_speech": "Noun",
    "example": "He entered the spelling contest."
  },
  {
    "word": "comfort",
    "definition": "a state of physical ease",
    "part_of_speech": "Noun",
    "example": "Soft blankets provide comfort."
  },
  {
    "word": "adapt",
    "definition": "to adjust to new conditions",
    "part_of_speech": "Verb",
    "example": "Animals adapt to their environments."
  },
  {
    "word": "include",
    "definition": "to contain as part of a whole",
    "part_of_speech": "Verb",
    "example": "The fee includes breakfast."
  },
  {
    "word": "guard",
    "definition": "to protect or watch over",
    "part_of_speech": "Verb",
    "example": "Soldiers guard the entrance."
  },
  {
    "word": "ancient",
    "definition": "very old",
    "part_of_speech": "Adjective",
    "example": "They explored ancient ruins."
  },
  {
    "word": "justice",
    "definition": "fair treatment or behavior",
    "part_of_speech": "Noun",
    "example": "The case became a fight for justice."
  },
  {
    "word": "admire",
    "definition": "to regard with respect or approval",
    "part_of_speech": "Verb",
    "example": "I admire her patience."
  },
  {
    "word": "opportunity",
    "definition": "a favorable chance",
    "part_of_speech": "Noun",
    "example": "This internship is a great opportunity."
  },
  {
    "word": "spirit",
    "definition": "the nonphysical part of a person or the mood of a group",
    "part_of_speech": "Noun",
    "example": "The team showed strong spirit."
  },
  {
    "word": "care",
    "definition": "to feel concern or interest",
    "part_of_speech": "Verb",
    "example": "I care about the outcome."
  },
  {
    "word": "fact",
    "definition": "something known to be true",
    "part_of_speech": "Noun",
    "example": "That statement is a fact."
  },
  {
    "word": "govern",
    "definition": "to control or rule",
    "part_of_speech": "Verb",
    "example": "Laws govern public behavior."
  },
  {
    "word": "depth",
    "definition": "the distance downward or inward",
    "part_of_speech": "Noun",
    "example": "The lake's depth surprised us."
  },
  {
    "word": "safely",
    "definition": "without danger",
    "part_of_speech": "Adverb",
    "example": "The hikers returned safely."
  },
  {
    "word": "distance",
    "definition": "the amount of space between things",
    "part_of_speech": "Noun",
    "example": "The distance was too far to walk."
  },
  {
    "word": "neatly",
    "definition": "in a tidy way",
    "part_of_speech": "Adverb",
    "example": "She neatly organized the notes."
  },
  {
    "word": "career",
    "definition": "a long-term occupation or profession",
    "part_of_speech": "Noun",
    "example": "She wants a career in medicine."
  },
  {
    "word": "improve",
    "definition": "to make better",
    "part_of_speech": "Verb",
    "example": "Practice will improve your swing."
  },
  {
    "word": "wonder",
    "definition": "a feeling of surprise and admiration",
    "part_of_speech": "Noun",
    "example": "The child stared in wonder."
  },
  {
    "word": "loss",
    "definition": "the state of no longer having something",
    "part_of_speech": "Noun",
    "example": "The team felt the loss deeply."
  },
  {
    "word": "quietly",
    "definition": "with little or no noise",
    "part_of_speech": "Adverb",
    "example": "Please close the door quietly."
  },
  {
    "word": "harm",
    "definition": "to cause damage or injury",
    "part_of_speech": "Verb",
    "example": "These chemicals can harm fish."
  },
  {
    "word": "constant",
    "definition": "continuing without much change",
    "part_of_speech": "Adjective",
    "example": "They felt constant pressure."
  },
  {
    "word": "difficulty",
    "definition": "a problem or hardship",
    "part_of_speech": "Noun",
    "example": "They had difficulty opening the jar."
  },
  {
    "word": "endure",
    "definition": "to suffer patiently or last through",
    "part_of_speech": "Verb",
    "example": "They endured a harsh winter."
  },
  {
    "word": "awkward",
    "definition": "clumsy or uncomfortable",
    "part_of_speech": "Adjective",
    "example": "It was an awkward silence."
  },
  {
    "word": "apologize",
    "definition": "to express regret for a wrong",
    "part_of_speech": "Verb",
    "example": "He called to apologize."
  },
  {
    "word": "intend",
    "definition": "to plan or mean to do",
    "part_of_speech": "Verb",
    "example": "I intend to finish tonight."
  },
  {
    "word": "moment",
    "definition": "a very short period of time",
    "part_of_speech": "Noun",
    "example": "Wait a moment."
  },
  {
    "word": "seriously",
    "definition": "with earnest intent",
    "part_of_speech": "Adverb",
    "example": "Please take this matter seriously."
  },
  {
    "word": "peace",
    "definition": "freedom from conflict or disturbance",
    "part_of_speech": "Noun",
    "example": "The village longed for peace."
  },
  {
    "word": "victory",
    "definition": "success in a contest or struggle",
    "part_of_speech": "Noun",
    "example": "The crowd celebrated the victory."
  },
  {
    "word": "agency",
    "definition": "an organization that provides a service",
    "part_of_speech": "Noun",
    "example": "The travel agency booked our flights."
  },
  {
    "word": "difference",
    "definition": "the state of not being the same",
    "part_of_speech": "Noun",
    "example": "There is a key difference here."
  },
  {
    "word": "detail",
    "definition": "a small individual feature",
    "part_of_speech": "Noun",
    "example": "Please check every detail."
  },
  {
    "word": "tradition",
    "definition": "a custom handed down over time",
    "part_of_speech": "Noun",
    "example": "Baking together is a family tradition."
  },
  {
    "word": "growth",
    "definition": "the process of increasing or developing",
    "part_of_speech": "Noun",
    "example": "The plant showed rapid growth."
  },
  {
    "word": "active",
    "definition": "engaged in action or movement",
    "part_of_speech": "Adjective",
    "example": "He leads an active life."
  },
  {
    "word": "audience",
    "definition": "the people watching or listening",
    "part_of_speech": "Noun",
    "example": "The audience applauded loudly."
  },
  {
    "word": "freedom",
    "definition": "the power to act without unnecessary control",
    "part_of_speech": "Noun",
    "example": "Freedom matters deeply."
  },
  {
    "word": "confidence",
    "definition": "belief in oneself or something",
    "part_of_speech": "Noun",
    "example": "Practice builds confidence."
  },
  {
    "word": "attract",
    "definition": "to draw interest or attention",
    "part_of_speech": "Verb",
    "example": "Bright lights attract insects."
  },
  {
    "word": "guess",
    "definition": "to estimate without certainty",
    "part_of_speech": "Verb",
    "example": "I can only guess the answer."
  },
  {
    "word": "kind",
    "definition": "showing care and concern",
    "part_of_speech": "Adjective",
    "example": "That was a kind gesture."
  },
  {
    "word": "belief",
    "definition": "something accepted as true",
    "part_of_speech": "Noun",
    "example": "That belief is common."
  },
  {
    "word": "warmly",
    "definition": "in a friendly or affectionate manner",
    "part_of_speech": "Adverb",
    "example": "They welcomed us warmly."
  },
  {
    "word": "depend",
    "definition": "to rely on",
    "part_of_speech": "Verb",
    "example": "Plants depend on sunlight."
  }
];

app.get('/day', (req, res) => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const idx = Math.min(Math.max(dayOfYear, 1), 366) - 1;

  res.status(200).send(WORDS[idx]);
});

app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 366);

  res.status(200).send(WORDS[num]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
