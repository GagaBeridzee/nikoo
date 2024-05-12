document.addEventListener("DOMContentLoaded", () => {
    const searchTermInput = document.getElementById("chatQueryInput");
    const contentContainer = document.querySelector(".message");

    searchTermInput.addEventListener("keydown", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const searchValue = searchTermInput.value.trim();
            if (searchValue !== "") {
                const searchTerms = searchValue.split(",").map(term => term.trim());
                const combinedContent = await fetchCombinedContent(searchTerms);
                displayUserMessage(searchValue);
                displayBotMessage("Combined Results", combinedContent);
                scrollToBottom();
            }
        }
    });

    function displayUserMessage(message) {
        const userMessageContainer = document.createElement("div");
        userMessageContainer.classList.add("user-message");
        userMessageContainer.innerHTML = `
            <img src="assets/image/profile/tato.jpg" alt="">
            <p>${message}</p>
        `;
        contentContainer.appendChild(userMessageContainer);
    }

    async function fetchCombinedContent(searchTerms) {
        let combinedContent = "";
        for (const term of searchTerms) {
            const apiUrl = `https://ka.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (data.title && data.extract) {
                    combinedContent += `<strong>${data.title}</strong><br>${data.extract}<br><br>`;
                } else {
                    combinedContent += `<strong>No results found for ${term}.</strong><br><br>`;
                }
            } catch (error) {
                combinedContent += `<strong>Error fetching content for ${term}.</strong><br><br>`;
            }
        }
        return combinedContent;
    }

    function displayBotMessage(title, content) {
        const botMessageContainer = document.createElement("div");
        botMessageContainer.classList.add("bot-message");
        botMessageContainer.innerHTML = `
            <img src="assets/image/icons/logo.svg" alt="">
            <div>
                <p>${content}</p>
                <div class="footer">
                    <div class="feedback">
                        <button class="btn" type="button">
                            <i class="fi fi-rr-heart-rate"></i>
                        </button>
                        <button class="btn" type="button">
                            <i class="fi fi-rr-horizontal-rule"></i>
                        </button>
                    </div>
                    <div class="text-edit">
                        <button class="btn" type="button">
                            <i class="fi fi-rr-copy-alt"></i> <span>Copy</span>
                        </button>
                        <button class="btn" type="button">
                            <i class="fi fi-rr-edit"></i> <span>Edit</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        contentContainer.appendChild(botMessageContainer);
        scrollToBottom();
    }

    function scrollToBottom() {
        contentContainer.scrollTop = contentContainer.scrollHeight;
    }
});
