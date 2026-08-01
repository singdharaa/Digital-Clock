let use12Hour = false;

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const greeting = document.querySelector(".greeting");
const date = document.querySelector(".date");
const meridiem = document.querySelector(".meridiems");
const toggleBtn = document.querySelector("button");

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
});

function greet(hour) {
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
}

function render(now) {
    const currentHour = now.getHours();

    greeting.textContent = greet(currentHour);

    toggleBtn.textContent = use12Hour ? "Switch to 24-hour" : "Switch to 12-hour";

    const displayHour = use12Hour ? currentHour % 12 || 12 : currentHour;

    hour.textContent = String(displayHour).padStart(2, "0");
    minute.textContent = String(now.getMinutes()).padStart(2, "0");
    second.textContent = String(now.getSeconds()).padStart(2, "0");

    meridiem.textContent = use12Hour ? (currentHour >= 12 ? "PM" : "AM") : "";

    date.textContent = dateFormatter.format(now);
}

function updateClock() {
    render(new Date());
}

toggleBtn.addEventListener("click", () => {
    use12Hour = !use12Hour;
    updateClock();
});

updateClock();
setInterval(updateClock, 1000);