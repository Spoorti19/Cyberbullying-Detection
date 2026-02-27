# SafeHaven – AI-Powered Cyberbullying Detection Platform

Breaking the Silence: Tackling Cyberbullying in the Digital Era

SafeHaven is an intelligent web-based cyberbullying detection system that uses Natural Language Processing (NLP) and Long Short-Term Memory (LSTM) networks to detect toxic or abusive content in real-time. 

The system integrates automated moderation, a dynamic reputation score mechanism, user blocking logic, reporting tools, and admin controls to promote safer digital communication.

---

## 🚀 Features

### 🔹 AI-Based Cyberbullying Detection
- LSTM deep learning model for text classification
- Real-time toxicity scoring
- Confidence-based prediction output

### 🔹 Reputation Score System
- Users start with a default score
- Score decreases when abusive content is detected
- Weighted scoring mechanism:
  
  RS = (P × 1) + (N × -1) + (O × 0.5) / Total Comments

- Automatic warnings below threshold
- Automatic blocking for repeated violations

### 🔹 User Management
- Secure registration & login
- Role-based access (User / Admin)
- Password hashing

### 🔹 Face Verification at Signup
- Live webcam image capture
- Identity validation during account creation

### 🔹 Moderation & Reporting
- Users can report offensive content
- Admin dashboard for reviewing flagged messages
- Manual ban/unban controls

### 🔹 Real-Time Notifications
- Warning alerts
- Block notifications
- Admin alerts for repeated offenses

---

## 🧠 Machine Learning Model

- Model: LSTM (Long Short-Term Memory)
- Architecture: Sequential Deep Learning Model
- Activation: Softmax
- Text Preprocessing:
  - Tokenization
  - Stopword removal
  - Lemmatization
  - Padding
- Dataset: Kaggle / Twitter Toxicity Dataset
- Evaluation Metrics:
  - Accuracy
  - Precision
  - Recall
  - F1-score

---

## 🛠️ Tech Stack

### Backend
- Python
- Flask

### Machine Learning
- TensorFlow / Keras
- scikit-learn
- NLTK / spaCy
- NumPy
- Pandas

### Database
- MySQL / SQLite

### Frontend
- HTML
- CSS
- JavaScript

### Other Tools
- OpenCV (Face recognition)
- MTCNN (Face detection)
- TensorFlow session handling

---

## 🏗️ System Architecture

1. User sends message
2. Text preprocessing
3. LSTM model prediction
4. Reputation score update
5. Threshold check
6. Auto-block if necessary
7. Admin notification
8. Database logging

---

## 🔐 Security Features

- Password hashing
- Role-based access control
- IP blocking for low reputation scores
- Admin monitoring dashboard
- Protection against unauthorized score manipulation

---

## 🧪 Testing Strategy

- Unit Testing (ML model & reputation system)
- Integration Testing (Model + Backend)
- Performance Testing (High message load handling)
- Security Testing
- User Acceptance Testing

---

## 📊 Sample Output

- Bullying Percentage Score
- Toxicity Detection
- Automated IP Blocking (HTTP 403)
- Admin Moderation Logs

---

## 🎯 Project Objectives

- Accurate cyberbullying detection using LSTM
- Dynamic reputation scoring
- Automated moderation system
- Real-time safe digital environment

---

## 📌 Future Enhancements

- Multi-modal detection (Text + Image + Video)
- Transformer models (BERT)
- Federated learning for privacy
- Deployment on cloud infrastructure (AWS / GCP)
- Mobile app integration

---

## 👩‍💻 Author

Harshitha S  
B.E – Information Science & Engineering  
Visvesvaraya Technological University  

---

## 📜 License

This project is developed for academic and research purposes.
