const timetableData = {
    Monday: [
        { time: "9:00 - 10:00", subject: "Digital Electronics", type: "ece" },
        { time: "10:00 - 11:00", subject: "Maths", type: "math" },
        { time: "11:00 - 12:00", subject: "CS Theory", type: "cs" },
        { time: "1:00 - 3:00", subject: "Electronics Lab", type: "lab" },
    ],
    Tuesday: [
        { time: "9:00 - 10:00", subject: "Maths", type: "math" },
        { time: "10:00 - 12:00", subject: "Microprocessor Lab", type: "lab" },
        { time: "1:00 - 2:00", subject: "Signals", type: "ece" },
    ],
    Wednesday: [
        { time: "9:00 - 10:00", subject: "CS Theory", type: "cs" },
        { time: "10:00 - 11:00", subject: "Digital Electronics", type: "ece" },
        { time: "11:00 - 12:00", subject: "Maths", type: "math" },
    ],
    Thursday: [
        { time: "9:00 - 11:00", subject: "Electronics Lab", type: "lab" },
        { time: "1:00 - 2:00", subject: "Signals", type: "ece" },
        { time: "2:00 - 3:00", subject: "Free Hour", type: "free" },
    ],
    Friday: [
        { time: "9:00 - 10:00", subject: "Maths", type: "math" },
        { time: "10:00 - 11:00", subject: "CS Theory", type: "cs" },
        { time: "11:00 - 1:00", subject: "Mini Project Lab", type: "lab" },
    ]
};

// render timetable
const timetableContainer = document.getElementById("timetable");

Object.keys(timetableData).forEach(day => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    dayDiv.innerHTML = `<h2>${day}</h2>`;

    timetableData[day].forEach(cls => {
        const card = document.createElement("div");
        card.className = `class-card ${cls.type}`;
        card.innerHTML = `
            <span>${cls.time}</span>
            <span>${cls.subject}</span>
        `;
        dayDiv.appendChild(card);
    });

    timetableContainer.appendChild(dayDiv);
});
