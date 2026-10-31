CREATE DATABASE IF NOT EXISTS daniel_technologies;
USE daniel_technologies;
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category ENUM('course','service') NOT NULL,
  title VARCHAR(120) NOT NULL,
  description VARCHAR(300) NOT NULL
);
CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL,
  topic VARCHAR(120),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(254) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
TRUNCATE services;
INSERT INTO services (category,title,description) VALUES
('course','Web development','Build responsive websites and web apps from HTML and CSS to full stack.'),
('course','Database design and development','Model data, write SQL and build reliable databases.'),
('course','Data analysis','Clean, analyse and present data with practical projects.'),
('course','Programming with Python and JavaScript','Learn to code from the basics to real programs.'),
('course','Graphic designing','Create logos, posters and social media designs.'),
('course','Microsoft Office applications','Word, Excel, PowerPoint and more for school and work.'),
('course','Windows Server administration','Set up and manage users, networks and server roles.'),
('service','OS installation','Clean installs and upgrades of Windows and other systems.'),
('service','Software maintenance and troubleshooting','Fix errors, slow computers and broken software.'),
('service','Networking','Set up, secure and repair wired and wireless networks.');
