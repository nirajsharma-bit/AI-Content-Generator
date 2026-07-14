# 🚀 AI Content Generator using Generative AI & Cloud Computing

![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![Docker](https://img.shields.io/badge/Docker-Container-blue)
![AWS](https://img.shields.io/badge/AWS-Elastic%20Beanstalk-orange)
![OpenRouter](https://img.shields.io/badge/OpenRouter-AI-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 📌 Project Overview

AI Content Generator is a cloud-based web application that generates high-quality AI-powered content using Generative AI. Users can enter a topic, select the content type, tone, and length, and instantly receive AI-generated content.

The application is containerized using Docker and deployed on AWS Elastic Beanstalk, making it scalable and production-ready.

---

# ✨ Features

- 🤖 AI Content Generation
- 📝 Blog, Article & Social Media Content
- 🎯 Topic-based Generation
- 🎭 Multiple Writing Tones
- 📏 Content Length Selection
- 📋 Copy Generated Content
- 📥 Download Generated Content
- 📊 Word Counter
- 🔢 Character Counter
- 📱 Responsive User Interface
- ☁️ Cloud Deployment
- 🐳 Docker Containerization

---

# 🛠 Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## AI

- OpenRouter API
- GPT OSS Model (`openai/gpt-oss-20b:free`)

## Cloud

- AWS Elastic Beanstalk

## DevOps

- Docker
- Docker Compose
- Git
- GitHub

---

# 📂 Project Structure

```
AI-Content-Generator/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── package.json
│   └── server.js
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── README.md
└── .env.example
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Content-Generator.git

cd AI-Content-Generator
```

---

## Install Dependencies

```bash
cd server

npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
OPENROUTER_API_KEY=your_api_key
OPENROUTER_MODEL=openai/gpt-oss-20b:free
PORT=5000
```

---

## Run Project

```bash
cd server

npm start
```

Application will run on:

```
http://localhost:5000
```

---

# 🐳 Docker

Build Image

```bash
docker build -t ai-content-generator .
```

Run Container

```bash
docker run -p 5000:5000 ai-content-generator
```

Docker Compose

```bash
docker compose up --build
```

---

# ☁️ AWS Deployment

This project is deployed using:

- AWS Elastic Beanstalk
- Docker
- Amazon Linux 2023

Deployment Steps:

1. Build Docker Image
2. Push Source Code
3. Deploy using Elastic Beanstalk
4. Configure Environment Variables
5. Access Live Application

---

# 🔄 Application Workflow

```
User

↓

Enter Topic

↓

Select Content Type

↓

Choose Tone

↓

Choose Length

↓

Frontend

↓

Express API

↓

OpenRouter API

↓

AI Model

↓

Generated Content

↓

Display Result
```

---

# 📷 Screenshots

Add screenshots here:

- Home Page
- Content Generation
- AWS Deployment
- Docker Container
- GitHub Repository

---

# 📊 Future Enhancements

- User Authentication
- Content History
- Export as PDF
- Multiple AI Models
- Image Generation
- Multi-language Support
- Dark Mode
- AI Templates

---

# 🎯 Learning Outcomes

- Full Stack Development
- REST API Integration
- Docker Containerization
- Cloud Deployment
- AWS Elastic Beanstalk
- Git & GitHub
- Environment Variables
- Generative AI Integration

---

# 👥 Team

**TECH WARRIOR**

- Niraj Sharma (Leader)
- Roshni Bhaskar (Co-Lead)
- Shreya Sinha
- Sanjana Verma
- Sadhana Gupta

---

# 👨‍🏫 Mentor

**Praneet Palli**

---

# 🎓 Internship

**AICTE | IBM SkillsBuild Gen AI & Cloud Computing Internship | BharatCares**

---

# 📄 License

This project is developed for educational and internship purposes under the AICTE IBM SkillsBuild Gen AI & Cloud Computing Internship.
