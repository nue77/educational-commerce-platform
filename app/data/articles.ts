
export type Article = {
    id: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    readTime: string;
    introduction: string;
    sections: {
        heading: string;
        paragraphs: string[];
    }[];
};

export const articles: Article[] = [
    {
        id: 1,
        slug: "building-a-balanced-plate",
        title: "Building a Balanced Plate",
        category: "Healthy Eating",
        description:
            "Learn how to combine different food groups to create balanced, satisfying meals.",
        readTime: "5 min read",
        introduction:
            "Building a balanced plate is a practical way to think about the foods you eat. Rather than following complicated rules, focus on including a variety of foods that provide energy, nutrients and satisfaction.",
        sections: [
            {
                heading: "Include a variety of vegetables and fruit",
                paragraphs: [
                    "Vegetables and fruit provide vitamins, minerals and fibre. Try to include different colours and types throughout the week.",
                    "Fresh, frozen and canned options can all contribute to a varied diet. Choose options that suit your budget, availability and preferences."
                ]
            },
            {
                heading: "Add sources of protein",
                paragraphs: [
                    "Protein helps the body build and repair tissues. Examples include beans, lentils, eggs, fish, chicken, lean meat, nuts and seeds.",
                    "Including a source of protein in meals can also help make them satisfying."
                ]
            },
            {
                heading: "Choose energy-giving carbohydrates",
                paragraphs: [
                    "Foods such as oats, rice, potatoes, wholegrain bread and maize meal provide carbohydrates that the body uses for energy.",
                    "Where practical, choose higher-fibre options such as wholegrains and include a variety of carbohydrate sources."
                ]
            },
            {
                heading: "Remember healthy fats and hydration",
                paragraphs: [
                    "Foods such as avocado, nuts, seeds and vegetable oils provide fats that form part of a balanced eating pattern.",
                    "Water is important for normal body function. Make water a regular drink throughout the day."
                ]
            },
            {
                heading: "Make balanced eating practical",
                paragraphs: [
                    "A balanced meal does not need to be expensive or complicated. Start with foods you already enjoy and make small adjustments, such as adding vegetables or including beans in a meal.",
                    "Your needs may differ depending on your age, activity, health and circumstances. If you need individual dietary advice, speak with a qualified healthcare professional or registered dietitian."
                ]
            }
        ]
    },
    {
        id: 2,
        slug: "understanding-everyday-nutrition",
        title: "Understanding Everyday Nutrition",
        category: "Nutrition",
        description:
            "Explore the basics of carbohydrates, protein, fats, vitamins and minerals.",
        readTime: "7 min read",
        introduction:
            "Nutrition is about how food and drink provide the body with the energy and nutrients it needs. Understanding a few basic concepts can help you make informed everyday food choices.",
        sections: [
            {
                heading: "Carbohydrates provide energy",
                paragraphs: [
                    "Carbohydrates are one of the body's main sources of energy. They are found in foods such as grains, fruit, vegetables, beans and dairy products.",
                    "Choosing a range of fibre-rich foods, including wholegrains, fruit and vegetables, can support a varied eating pattern."
                ]
            },
            {
                heading: "Protein supports growth and repair",
                paragraphs: [
                    "Protein is needed for building and repairing body tissues and supporting many normal body functions.",
                    "Common sources include eggs, fish, meat, dairy products, beans, lentils, nuts and seeds."
                ]
            },
            {
                heading: "Fats have important functions",
                paragraphs: [
                    "Dietary fats help the body absorb certain vitamins and provide energy. They are also involved in normal cell function.",
                    "Avocados, nuts, seeds and vegetable oils are examples of foods that provide unsaturated fats."
                ]
            },
            {
                heading: "Vitamins and minerals matter",
                paragraphs: [
                    "Vitamins and minerals are needed in relatively small amounts but support many processes in the body.",
                    "Eating a variety of foods from different food groups helps provide a range of these nutrients."
                ]
            },
            {
                heading: "Build knowledge through variety",
                paragraphs: [
                    "No single food provides everything the body needs. A varied eating pattern is a useful foundation for everyday nutrition.",
                    "If you have specific nutritional needs or concerns, seek advice from a qualified healthcare professional or registered dietitian."
                ]
            }
        ]
    },
    {
        id: 3,
        slug: "small-habits-for-healthier-living",
        title: "Small Habits for Healthier Living",
        category: "Healthy Living",
        description:
            "Discover practical ways to make healthier choices part of your everyday routine.",
        readTime: "4 min read",
        introduction:
            "Healthier living does not have to begin with major lifestyle changes. Small, realistic habits can be easier to maintain and can help create a routine that supports your wellbeing.",
        sections: [
            {
                heading: "Start with achievable goals",
                paragraphs: [
                    "Choose one manageable change instead of trying to change everything at once. For example, you might take a short walk, prepare a meal at home or add fruit to breakfast.",
                    "Once a habit feels familiar, you can consider adding another small goal."
                ]
            },
            {
                heading: "Make movement part of your day",
                paragraphs: [
                    "Movement can take many forms, including walking, dancing, cycling, gardening or playing a sport.",
                    "Choose activities that you enjoy and that suit your abilities. If you have health concerns, ask a healthcare professional what activity is appropriate for you."
                ]
            },
            {
                heading: "Create a consistent sleep routine",
                paragraphs: [
                    "Regular sleep routines can support general wellbeing. Try to keep a consistent bedtime and wake-up time where possible.",
                    "A calm environment and a relaxing routine before bed may make it easier to wind down."
                ]
            },
            {
                heading: "Keep your habits realistic",
                paragraphs: [
                    "Busy schedules, work, family responsibilities and finances can affect routines. Adapt your goals when circumstances change rather than giving up completely.",
                    "Progress can look different from one person to another. Focus on habits that are practical and sustainable for you."
                ]
            }
        ]
    },
    {
        id: 4,
        slug: "making-time-for-your-wellbeing",
        title: "Making Time for Your Wellbeing",
        category: "Wellness",
        description:
            "Explore simple ways to make time for rest, movement and looking after yourself.",
        readTime: "6 min read",
        introduction:
            "Wellbeing includes more than physical health. Making time for rest, relationships and activities that matter to you can form part of a balanced approach to everyday life.",
        sections: [
            {
                heading: "Recognise what helps you recharge",
                paragraphs: [
                    "Different people find rest in different ways. Reading, spending time outdoors, listening to music or enjoying a quiet moment may help you take a break.",
                    "Notice which activities leave you feeling refreshed and make room for them when you can."
                ]
            },
            {
                heading: "Make space for connection",
                paragraphs: [
                    "Relationships and social connection can be an important part of wellbeing. A conversation with a friend, family member or trusted person can help you feel supported.",
                    "Connection does not always need to involve a big event. Small, regular moments can matter too."
                ]
            },
            {
                heading: "Set boundaries around your time",
                paragraphs: [
                    "It can be difficult to balance responsibilities and personal time. Where possible, plan breaks and be realistic about what you can take on.",
                    "Setting boundaries may mean protecting time for rest or asking for help when you need it."
                ]
            },
            {
                heading: "Seek support when you need it",
                paragraphs: [
                    "Self-care is not a replacement for professional support. If stress, low mood or other concerns are affecting your daily life, consider speaking with a qualified healthcare professional or counsellor.",
                    "Taking wellbeing seriously includes recognising when you need support from others."
                ]
            }
        ]
    }
];
