# 🧮 JavaScript Calculator 

This is a fully functional calculator built from scratch using vanilla JavaScript, HTML, and CSS. This project was built as the capstone for the **Foundations** module of [The Odin Project's](https://www.theodinproject.com/) curriculum.

This project was a fantastic challenge that significantly deepened my understanding of JavaScript logic, event handling, and DOM manipulation.

---

## ✨ Features

I implemented the core logic and several "extra credit" features to make the calculator robust and user-friendly.

### Core Functionality
* **All Basic Operations:** Perform addition, subtraction, multiplication, and division.
* **Chained Operations:** The calculator correctly handles sequential operations (e.g., `12 + 7 - 1 = 18`).
* **Keyboard Support:** All buttons are mapped to corresponding keyboard keys for easy access.

### Input & Display
* **Decimal Support:** A `.` button allows for floating-point calculations.
* **Backspace Button:** Lets the user undo their last digit input.
* **"Clear" (AC) Button:** Completely resets the calculator's internal state.
* **Smart Display:** Automatically rounds long decimal answers to prevent overflowing the screen.

### Robust Logic & Error Handling
* **Division by Zero:** Displays a friendly (and snarky) error message instead of crashing.
* **Smart Operator Handling:** Prevents errors by correctly handling consecutive operator presses (it uses the last one entered).
* **Refined Calculation Flow:** Starts a new calculation immediately if a new number is pressed after a result (`=`) is displayed.

---

## 💻 Tech Stack

* **HTML5:** Semantic structure for the calculator body and buttons.
* **CSS3:** Custom styling, layout (Flexbox), and button-press effects.
* **Vanilla JavaScript (ES6+):** All calculator logic, event handling, and DOM manipulation.

---

## 🧠 What I Learned

This project was a major step up in applying JavaScript concepts. Key takeaways include:

* **Complex State Management:** Tracking multiple variables (like `firstNumber`, `secondNumber`, `operator`, and `displayValue`) and knowing when to update or reset them.
* **Robust Event Handling:** Writing clean event listeners for both mouse clicks and keyboard presses (`keydown`).
* **DOM Manipulation:** Dynamically updating the calculator display based on user input and calculation results.
* **Algorithmic Thinking:** Building the core logic for how and when to evaluate an expression.
* **Debugging Edge Cases:** The real challenge! Thinking through all the ways a user could "break" the calculator (like pressing `=` too early, dividing by zero, or mashing operator buttons) and writing code to handle it gracefully.
