const generateBtn = document.getElementById("generateBtn");
const resultBox = document.getElementById("result");

const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

generateBtn.addEventListener("click", generateContent);
copyBtn.addEventListener("click", copyContent);
downloadBtn.addEventListener("click", downloadContent);
clearBtn.addEventListener("click", clearContent);

function updateStats(text) {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;

    wordCount.textContent = `Words: ${words}`;
    charCount.textContent = `Characters: ${text.length}`;
}

async function generateContent() {

    const topic = document.getElementById("topic").value;
    const contentType = document.getElementById("contentType").value;
    const tone = document.getElementById("tone").value;
    const length = document.getElementById("length").value;

    if (!topic) {
        alert("Please enter a topic.");
        return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";

    resultBox.value = "🤖 AI is generating your content...";
    updateStats("");

    try {

        const apiUrl = window.location.protocol === "file:" || window.location.port === "5500"
            ? "http://localhost:5000/api/ai/generate"
            : "/api/ai/generate";

        const response = await fetch(apiUrl, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                topic,
                contentType,
                tone,
                length
            })

        });

        const contentTypeHeader = response.headers.get("content-type") || "";
        const data = contentTypeHeader.includes("application/json")
            ? await response.json()
            : { success: false, message: await response.text() };

        if (!response.ok) {
            throw new Error(data.message || "Failed to generate content.");
        }

        if (data.success) {
            resultBox.value = data.content;
            updateStats(data.content);
        } else {
            resultBox.value = "Failed to generate content.";
            updateStats("");
        }

    } catch (error) {

        console.error(error);

        resultBox.value = error.message || "Server Error.";
        updateStats("");

    }

    generateBtn.disabled = false;
    generateBtn.textContent = "✨ Generate Content";
}

async function copyContent() {

    if (!resultBox.value) return;

    await navigator.clipboard.writeText(resultBox.value);

    alert("Content copied successfully!");
}

function downloadContent() {

    if (!resultBox.value) return;

    const blob = new Blob([resultBox.value], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "generated-content.txt";

    link.click();
}

function clearContent() {

    resultBox.value = "";

    updateStats("");

    document.getElementById("topic").value = "";

}
