# Real-Time Chat Application

<div align="center">

![Chat App Banner](https://img.shields.io/badge/Chat%20Application-Real%20Time-blue?style=for-the-badge&logo=chat)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Real%20Time-orange?style=for-the-badge&logo=socket.io)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.17.1-green?style=for-the-badge&logo=node.js)

**A modern, real-time chat application built with the MERN stack featuring group chats, instant messaging, and multi-user session support.**

[Live Demo](realtime-chat-application-ecru.vercel.app) • [Report Bug](https://github.com/KandulaSreelekha/Realtime-chat-application/issues) • [Request Feature](https://github.com/akashdeep023/Chat_App/issues/issues)

</div>

---

## ✨ Features

### 🔐 Authentication & Security
- **User Registration & Login** with JWT authentication
- **Secure Password Hashing** using bcryptjs
- **Multi-User Session Support** - Login to multiple accounts simultaneously
- **Token-based Authorization** with automatic session management

### 💬 Real-Time Messaging
- **Instant Message Delivery** using Socket.IO
- **Real-Time Typing Indicators** 
- **Message Notifications** with sound alerts
- **Message History** with persistent storage
- **Online/Offline Status** tracking

### 👥 Group Chat Features
- **Create Group Chats** with multiple participants
- **Add/Remove Group Members** (Admin controls)
- **Group Chat Management** with admin privileges
- **Group Chat Settings** and customization

### 🎨 User Experience
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI/UX** built with Tailwind CSS
- **Real-Time Notifications** for new messages
- **Smooth Animations** and transitions
- **Dark/Light Theme** support

### 🔧 Technical Features
- **State Management** with Redux Toolkit
- **Real-Time Socket Connections** with automatic reconnection
- **RESTful API** with Express.js
- **MongoDB Database** for data persistence
- **CORS Configuration** for cross-origin requests

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.17.1 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akashdeep023/Chat_App.git
   cd Chat_App
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**

   **Backend** (create `.env` in `backend/` folder):
   ```env
   FRONTEND_URL=http://localhost:5173
   MONGODB_URI=mongodb://127.0.0.1:27017/chat-app
   PORT=9000
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=development
   ```

   **Frontend** (create `.env` in `frontend/` folder):
   ```env
   VITE_BACKEND_URL=http://localhost:9000
   ```

5. **Start the Application**

   **Backend Server:**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend Development Server:**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open in Browser**
   Navigate to `http://localhost:5173` to access the application.

## 🏗️ Project Structure

```
Chat_App/
├── frontend/                 # React Frontend
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── chatComponents/    # Chat-related components
│   │   │   ├── messageComponents/ # Message-related components
│   │   │   └── loading/           # Loading components
│   │   ├── pages/           # Page components
│   │   ├── redux/           # Redux store and slices
│   │   ├── socket/          # Socket.IO configuration
│   │   ├── utils/           # Utility functions
│   │   └── App.jsx          # Main App component
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js Backend
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── middlewares/         # Express middlewares
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── server.js            # Main server file
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/check` - Check authentication status
- `POST /api/auth/logout` - User logout

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/users` - Get all users

### Chat Management
- `POST /api/chat` - Create new chat
- `GET /api/chat` - Get user chats
- `POST /api/chat/group` - Create group chat
- `PUT /api/chat/groupadd` - Add user to group
- `PUT /api/chat/groupremove` - Remove user from group
- `PUT /api/chat/rename` - Rename group chat
- `DELETE /api/chat/deleteGroup` - Delete group chat

### Messaging
- `POST /api/message` - Send message
- `GET /api/message/:chatId` - Get chat messages
- `GET /api/message/clearChat/:chatId` - Clear chat messages

## 🛠️ Technologies Used

### Frontend
- **React 18.2.0** - UI library
- **Redux Toolkit** - State management
- **Socket.IO Client** - Real-time communication
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Client-side routing
- **React Toastify** - Notifications
- **Vite** - Build tool

### Backend
- **Node.js 18.17.1** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time communication
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🌟 Key Features in Detail

### Multi-User Session Support
The application now supports multiple concurrent user sessions on the same device:
- **Independent Socket Connections** for each user
- **Proper State Management** with Redux
- **Session Isolation** between different users
- **Automatic Cleanup** on logout

### Real-Time Communication
- **WebSocket Connections** for instant messaging
- **Typing Indicators** in real-time
- **Message Notifications** with sound alerts
- **Online Status** tracking
- **Automatic Reconnection** on network issues

### Group Chat Functionality
- **Create Groups** with custom names
- **Add/Remove Members** with admin controls
- **Group Settings** and management
- **Admin Privileges** for group operations

## 🚀 Deployment

### Backend Deployment (Render)
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy as a Web Service

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sreelekha**
- Email: contact.kandulasreelekha@gmail.com
- LinkedIn: [Sreelekha](https://www.linkedin.com/in/sreelekha06/)
- GitHub: [Sreelekha](https://github.com/KandulaSreelekha)

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- MongoDB for database management
- Tailwind CSS for styling
- React community for excellent documentation



---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Sreelekha](https://github.com/KandulaSreelekha)

</div>
