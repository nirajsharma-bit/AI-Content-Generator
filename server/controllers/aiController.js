const { generateFromGemini } = require("../services/geminiService");

const generateContent = async (req, res) => {
    try {
        const result = await generateFromGemini(req.body);
        res.json(result);
    } catch (error) {
        console.error(error.response?.data || error.message);

        const message = error.response?.data?.error?.message
            || error.message
            || "Something went wrong";

        res.status(500).json({
            success: false,
            message
        });
    }
};

module.exports = {
    generateContent
};
