COLLEGE COMPLAINT MANAGEMENT SYSTEM - FIXED FRONTEND VERSION

Open: index.html

Demo Student Login:
Register No: 22CS001
Password: 1234

Admin Login:
Username: admin
Password: 1234

Flow:
index.html -> student_login.html -> student_dashboard.html -> complaint.html -> student_complaints.html
index.html -> admin_login.html -> admin_dashboard.html

Added:
- student_register.html
- shared styles.css
- shared app.js
- input escaping and safer storage helpers
- admin complaint filter/search/status update modal
- correct login/session redirects
- legacy dashboard.html redirect

Important:
This version uses browser localStorage/sessionStorage. It is suitable for a frontend/demo college project.
It is NOT connected to MySQL/Oracle/PHP. If you need a real database-backed version, convert login, registration, complaint submission, and admin updates to a server-side backend/API.
