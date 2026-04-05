export const moodMap = {
    1: "Overwhelmed",
    2: "Sad", 3: "Neutral", 4: "Good", 5: "Great"
}; export const energyMap = { 1: "Drained", 2: "Okay", 3: "Good" };
 export const foodMap = { 0: "no", 1: "yes" };

export const prompts = [
    {
        mood: "Overwhelmed",
        energy: "Drained",
        food_status: "yes",
        guidance: [
            "Practice a 3-minute grounding breath.",
            "If you can, have a small meal, this helps."
        ]
    },
    {
        mood: "Overwhelmed",
        energy: "Drained",
        food_status: "no",
        guidance: [
            "Practice a 3-minute grounding breath.",
            "Have a small meal afterwards."
        ]
    },
    {
        mood: "Overwhelmed",
        energy: "Okay",
        food_status: "yes",
        guidance: [
            "You're doing amazing. Drink something warm if available."
        ]
    },
    {
        mood: "Overwhelmed",
        energy: "Okay",
        food_status: "no",
        guidance: [
            "Your body needs fuel even on good days.",
            "A small meal would help even when you don't feel like it."
        ]
    },
    {
        mood: "Sad",
        energy: "Good",
        food_status: "yes",
        guidance: [
            "A small meal would help even when you don't feel like it."
        ]
    },
    {
        mood: "Sad",
        energy: "Good",
        food_status: "no",
        guidance: [
            "Take a deep breath. Have a small meal, you will feel better."
        ]
    },
    {
        mood: "Sad",
        energy: "Drained",
        food_status: "yes",
        guidance: [
            "Practice a 3-minute grounding breath."
        ]
    },
    {
        mood: "Sad",
        energy: "Drained",
        food_status: "no",
        guidance: [
            "Rest and sleep is all you need. You deserve it!"
        ]
    },
    {
        mood: "Sad",
        energy: "Okay",
        food_status: "yes",
        guidance: [
            "Drink something warm if available, it'll help you stay grounded."
        ]
    },
    {
        mood: "Sad",
        energy: "Okay",
        food_status: "no",
        guidance: [
            "Your body needs fuel, even if you don't feel like it."
        ]
    },
    {
        mood: "Sad",
        energy: "Good",
        food_status: "yes",
        guidance: [
            "You're taking good care of yourself! Keep it up."
        ]
    },
    {
        mood: "Sad",
        energy: "Good",
        food_status: "no",
        guidance: [
            "Take a deep breath. Get some rest and food."
        ]
    },
    {
        mood: "Good",
        energy: "Drained",
        food_status: "yes",
        guidance: [
            "Practice a 3-minute grounding breath. Take yourself on a walk."
        ]
    },
    {
        mood: "Good",
        energy: "Drained",
        food_status: "no",
        guidance: [
            "Practice a 3-minute grounding breath. A small meal later would also be nice."
        ]
    },
    {
        mood: "Good",
        energy: "Okay",
        food_status: "yes",
        guidance: [
            "You're doing amazing! Drink something warm if available."
        ]
    },
    {
        mood: "Good",
        energy: "Okay",
        food_status: "no",
        guidance: [
            "A small meal would help."
        ]
    },
    {
        mood: "Good",
        energy: "Good",
        food_status: "yes",
        guidance: [
            "You're doing great. Keep it up!"
        ]
    },
    {
        mood: "Good",
        energy: "Good",
        food_status: "no",
        guidance: [
            "You're doing amazing. Have a small snack and you'll feel even better."
        ]
    },
    {
        mood: "Numb",
        energy: "Drained",
        food_status: "yes",
        guidance: [
            "Take yourself on a small walk. You'll love it."
        ]
    },
    {
        mood: "Numb",
        energy: "Drained",
        food_status: "no",
        guidance: [
            "Rest and eat. You deserve it!"
        ]
    },
    {
        mood: "Numb",
        energy: "Okay",
        food_status: "yes",
        guidance: [
            "Drink something warm if available, it'll help you stay grounded."
        ]
    },
    {
        mood: "Numb",
        energy: "Okay",
        food_status: "no",
        guidance: [
            "A small snack would be nice."
        ]
    },
    {
        mood: "Numb",
        energy: "Good",
        food_status: "yes",
        guidance: [
            "Take a walk outside, some fresh air would be nice."
        ]
    },
    {
        mood: "Numb",
        energy: "Good",
        food_status: "no",
        guidance: [
            "Your body needs fuel. A small meal would help."
        ]
    },
    {
        mood: "Okay",
        energy: "Drained",
        food_status: "yes",
        guidance: [
            "Practice a 3-minute grounding breath."
        ]
    },
    {
        mood: "Okay",
        energy: "Drained",
        food_status: "no",
        guidance: [
            "Practice a 3-minute grounding breath. If you can, a small snack would help."
        ]
    },
    {
        mood: "Okay",
        energy: "Okay",
        food_status: "yes",
        guidance: [
            "You're doing great. Keep it up."
        ]
    },
    {
        mood: "Okay",
        energy: "Okay",
        food_status: "no",
        guidance: [
            "A small meal would help."
        ]
    },
    {
        mood: "okay",
        energy: "Good",
        food_status: "yes",
        guidance: [
            "You're doing amazing!"
        ]
    },
    {
        mood: "okay",
        energy: "Good",
        food_status: "no",
        guidance: [
            "Eating something can gently lift your mood."
        ]
    }
];