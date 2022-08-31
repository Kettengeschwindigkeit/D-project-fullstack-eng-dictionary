import { ICategory } from "./../models"

export const categories: ICategory[] = [
  {
    id: 1,
    name: "WORDS",
    path: "/words",
    subCategories: [
      { id: 1, title: "Universal", path: "/universal" },
      { id: 2, title: "About time", path: "/about_time" },
      { id: 3, title: "About space", path: "/about_sapce" },
      { id: 4, title: "About amount", path: "/about_amount" }
    ]
  },
    { 
      id: 2, 
      name: "WORDS-PHRASES", 
      path: "/words_phrases", 
      subCategories: [
        { id: 1, title: "Phrase-verbs", path: "/phrase_verbs" },
        { id: 2, title: "Phrase-nouns", path: "/phrase-nouns" },
        { id: 3, title: "Phrase-adjectives", path: "/phrase-adjectives" }
      ] 
    },
  {
    id: 3,
    name: "PHRASES",
    path: "/phrases_1",
    subCategories: [
      { id: 1, title: "Phrases", path: "/phrases" },
      { id: 2, title: "Questions", path: "/questions" },
      { id: 3, title: "Etiquette", path: "/etiquette" },
    ]
  },
  //   { id: 4, name: "X", path: "/x", subCategories: null },
    { 
      id: 5, 
      name: "COOL-PHRASES", path: "/cool_phrases", 
      subCategories: [
        { id: 1, title: "Emotions!", path: "/emotions" },
        { id: 2, title: "Phrases", path: "/phrases_cool" },
        { id: 3, title: "Questions", path: "/questions" },
      ]
    },
  {
    id: 6,
    name: "THEMATIC",
    path: "/thematic",
    subCategories: [
      { id: 1, title: "IT", path: "/it" },
      { id: 2, title: "Booze", path: "/booze" },
      { id: 3, title: "Drugs", path: "/drugs" },
      { id: 4, title: "Money", path: "/money" },
      { id: 5, title: "Military", path: "/military" },
      { id: 6, title: "Death, evil...", path: "/death" }
    ]
  }
]
