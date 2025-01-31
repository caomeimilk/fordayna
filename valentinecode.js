<script>
const yesButton = document.getElementById("yesButton");
        const noButton = document.getElementById("noButton");
        const resultDiv = document.getElementById("result");

        yesButton.addEventListener("click", () => {
            resultDiv.textContent = "You said yes!";
        });

        noButton.addEventListener("click", () => {
            const tempText = yesButton.textContent;
            yesButton.textContent = noButton.textContent;
            noButton.textContent = tempText;
            resultDiv.textContent = ""; // Clear the result text
        });
<script/>
