const { generateFromGemini } = require("../services/geminiService");

const generateContent = async (req, res) => {
    try {
        const result = await generateFromGemini(req.body);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

module.exports = {
    generateContent
};