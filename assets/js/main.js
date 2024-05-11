// document.addEventListener("DOMContentLoaded", () => {
//   const searchTermInput = document.getElementById("query-input");
//   const queryBtn = document.getElementById("sendBtn");
//   const contentContainer = document.getElementById("information-container");
//   const userMessageContainer = document.getElementById("user-message-container"); // New container for user message
//   const nikoheader = document.getElementById("niko-header");

//   // Search keydown event listener
//   searchTermInput.addEventListener("keydown", async (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       const searchValues = searchTermInput.value.trim().split(",");
//       if (searchValues.length > 0) {
//         for (const searchValue of searchValues) {
//           const trimmedValue = searchValue.trim();
//           if (trimmedValue !== "") {
//             // Display user message
//             displayUserMessage(trimmedValue);
//             await fetchWikipediaContentWithTypingEffect(trimmedValue);
//             scrollToBottom(); // Scroll to the bottom after each response
//           }
//         }
//       }
//     }
//   });

//   // Function to display user message
//   function displayUserMessage(message) {
//     const userMessageContainer = document.getElementById("user-message-container"); // Get the container element
//     userMessageContainer.textContent = searchTermInput.value; // Set the text content of the container to the input value
//   }


//   // Function to fetch Wikipedia content with typing effect
//   async function fetchWikipediaContentWithTypingEffect(searchTerm) {
//     try {
//       const apiUrl = `https://ka.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
//         searchTerm
//       )}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       if (data.title && data.extract) {
//         nikoheader.style.display = "none";

//         // Display content with typing effect for title
//         await typeText(data.title, "query-title");

//         // Display image if available
//         if (data.thumbnail && data.thumbnail.source) {
//           const image = document.createElement("img");
//           image.src = data.thumbnail.source;
//           image.alt = data.title;
//           contentContainer.appendChild(image);
//         }

//         // Display content with typing effect for extract
//         await typeText(data.extract, "query-info");

//         // Create a hyperlink for Wikipedia page URL
//         const linkContainer = document.createElement("div");
//         const link = document.createElement("a");
//         link.innerHTML = '<i class="ti ti-circles-relation"></i> <span>Read More</span>';
//         link.href = data.content_urls.desktop.page;
//         link.target = "_blank"; // Open link in a new tab
//         linkContainer.appendChild(link);
//         contentContainer.appendChild(linkContainer);
//       } else {
//         nikoheader.style.display = "none";
//         // Display custom message when content is not found
//         const notFoundMessage = document.createElement("h5");
//         notFoundMessage.innerHTML = 'Sorry, the requested information could not be found. Please try again with different keywords.';
//         contentContainer.appendChild(notFoundMessage);
//       }
//     } catch (error) {
//       console.log("Error fetching Wikipedia content", error);
//     }
//   }

//   // Function to simulate typing effect
//   async function typeText(text, className) {
//     const element = document.createElement("div");
//     element.classList.add(className);
//     contentContainer.appendChild(element);

//     for (let i = 0; i < text.length; i++) {
//       element.textContent += text.charAt(i);
//       await sleep(9); // Adjust the delay for typing speed
//     }
//   }

//   // Helper function for introducing delay
//   function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   // Function to scroll to the bottom of the container
//   function scrollToBottom() {
//     contentContainer.scrollTop = contentContainer.scrollHeight;
//   }
// });

// Optional: Scroll to bottom of chat content on load
const chatContent = document.querySelector('.chat-section .content');
chatContent.scrollTop = chatContent.scrollHeight;

// Optional: Scroll to bottom when new message is added (adjust as needed)
function scrollToBottom() {
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Example usage (assuming you're adding messages dynamically)
// After adding a new message, call scrollToBottom()
// scrollToBottom();
