const questions = [
    {
        number: 1,
        question:
            "A bad guy is trying to steal an old man’s bag in the middle of a busy city street! What are you going to do about it?",
        answers: [
            {
                id: 1,
                answer: "Help, even if I’m scared.",
                personality: ["Courageous", "Active"]
            },
            {
                id: 2,
                answer: "Help without even thinking about it.",
                personality: ["Courageous", "Tough"]
            },
            {
                id: 3,
                answer: "Call the police.",
                personality: ["Docile", "Passive"]
            },
            {
                id: 4,
                answer: "Do nothing.",
                personality: ["Passive", "Timid"]
            }
        ]
    },
    {
        number: 2,
        question: "Aliens have taken over your city! What will you do?",
        answers: [
            {
                id: 1,
                answer: "Fight.",
                personality: ["Courageous"]
            },
            {
                id: 2,
                answer: "Run.",
                personality: ["Docile", "Timid"]
            },
            {
                id: 3,
                answer: "Ignore.",
                personality: ["Passive"]
            }
        ]
    },
    {
        number: 3,
        question: "Do you like to fight?",
        answers: [
            {
                id: 1,
                answer: "Yes",
                personality: ["Timid", "Active"]
            },
            {
                id: 2,
                answer: "No.",
                personality: ["Passive"]
            },
            {
                id: 3,
                answer: "Violence is a complex thing.",
                personality: ["Sassy", "Quirky"]
            }
        ]
    },
    {
        number: 4,
        question:
            "You find a treasure chest while roaming a beach. Lucky you! What will you do with it?",
        answers: [
            {
                id: 1,
                answer: "Open it right away!",
                personality: ["Hasty", "Active"]
            },
            {
                id: 2,
                answer: "Don’t Open It. It could be a trap.",
                personality: ["Timid", "Passive"]
            },
            {
                id: 3,
                answer: "It’s going to be empty…",
                personality: ["Sassy"]
            },
            {
                id: 4,
                answer:
                    "It would be a perfect centerpiece for my room, so I’ll just take it home. ",
                personality: ["Quirky"]
            }
        ]
    },
    {
        number: 5,
        question: "Your friend is being bullied. What do you do?",
        answers: [
            {
                id: 1,
                answer: "Face the bully.",
                personality: ["Couragueous", "Touch"]
            },
            {
                id: 2,
                answer: "Caution the bully from far away.",
                personality: ["Timid"]
            },
            {
                id: 3,
                answer: "Talk smack to the bully behind his back.",
                personality: ["Sassy", "Quirky"]
            },
            {
                id: 4,
                answer: "Record the altercation and say nothing.",
                personality: ["Passive", "Rude"]
            }
        ]
    },
    {
        number: 6,
        question:
            "Some random person has started a conversation with you. To be honest, you don't have a clue what this fellow is saying. How do you reply?",
        answers: [
            {
                id: 1,
                answer: "Haha! Yes. Very funny!",
                personality: ["Docile"]
            },
            {
                id: 2,
                answer: "Um... Could you say that again?",
                personality: ["Courageous"]
            },
            {
                id: 3,
                answer: "Right... Well, I gotta go.",
                personality: ["Rude", "Passive"]
            }
        ]
    },
    {
        number: 7,
        question: "It’s summer! Where would you like to go?",
        answers: [
            {
                id: 1,
                answer: "The beach!",
                personality: ["Courageous"]
            },
            {
                id: 2,
                answer: "Spas.",
                personality: ["Calm"]
            },
            {
                id: 3,
                answer: "Anywhere.",
                personality: ["Quirky"]
            }
        ]
    },
    {
        number: 8,
        question:
            "It's a weekend, but no one wants to hang with you... What do you do?",
        answers: [
            {
                id: 1,
                answer: "Go on a trip.",
                personality: ["Active"]
            },
            {
                id: 2,
                answer: "Hang around vacantly.",
                personality: ["Passive", "Calm"]
            },
            {
                id: 3,
                answer: "Huddle in a corner.",
                personality: ["Timid", "Quirky"]
            },
            {
                id: 4,
                answer: "Angrily text people and ask them why they won’t hang with me.",
                personality: ["Rude"]
            }
        ]
    },
    {
        number: 9,
        question:
            "There is a person you like... But there's no opportunity to get close. What do you do?",
        answers: [
            {
                id: 1,
                answer: "Bravely declare my love.",
                personality: ["Courageous"]
            },
            {
                id: 2,
                answer: "Might say hello...",
                personality: ["Quirky"]
            },
            {
                id: 3,
                answer: "Pull a prank to get attention.",
                personality: ["Rude"]
            },
            {
                id: 4,
                answer: "Look from afar.",
                personality: ["Timid"]
            }
        ]
    },
    {
        number: 10,
        question:
            "The road forks to the right and left. You are told there is a treasure on the right side. What do you do?",
        answers: [
            {
                id: 1,
                answer: "Instantly go right.",
                personality: ["Docile"]
            },
            {
                id: 2,
                answer: "It's a trap! Go left.",
                personality: ["Sassy"]
            },
            {
                id: 3,
                answer: "Whichever! Choose on a whim.",
                personality: ["Quirky"]
            }
        ]
    },
    {
        number: 11,
        question: "Can you sincerely thank someone when you feel grateful?",
        answers: [
            {
                id: 1,
                answer: "Yes",
                personality: ["Docile", "Calm"]
            },
            {
                id: 2,
                answer: "No.",
                personality: ["Sassy", "Quirky"]
            },
            {
                id: 3,
                answer: "I just insult them instead.",
                personality: ["Rude"]
            }
        ]
    }
];

export default questions;
