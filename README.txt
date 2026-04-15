# Overview

As a Software Development Engineer in Test (SDET), I am focused on building scalable, cloud-native tools that provide real-time observability into system health. My goal with this project was to master the integration of Asynchronous JavaScript with NoSQL Cloud Infrastructure to move away from localized testing data toward a centralized "Source of Truth".

I developed a Cloud-Based Audit Management System using Node.js and MongoDB Atlas. The software functions as a backend utility that performs automated system checks and synchronizes the results directly to a cloud cluster. To use the program, a user executes the script via the terminal; the application then establishes a secure handshake with the cloud, performs a full CRUD (Create, Read, Update, Delete) cycle, and displays the synchronized data in a formatted console table.

The purpose of writing this software was to gain hands-on experience with Cloud Connectivity, Document-based data modeling, and handling asynchronous network operations within restricted infrastructure environments.

https://byupathwayworldwideprod-my.sharepoint.com/:v:/g/personal/mvillalobosortega_byupathway_edu/IQDaG8G6y0rMSZEBtzXWUHv7AWLSs6VBmbmzyrUEtj6chms?e=D5JUc6

# Cloud Database

This README is the final piece of your Module #3 portfolio. As a Senior SDET, it is important to emphasize your ability to manage cloud infrastructure and handle network security.

Here is the populated template ready for your GitHub repository.

Overview
As a Software Development Engineer in Test (SDET), I am focused on building scalable, cloud-native tools that provide real-time observability into system health. My goal with this project was to master the integration of Asynchronous JavaScript with NoSQL Cloud Infrastructure to move away from localized testing data toward a centralized "Source of Truth".

I developed a Cloud-Based Audit Management System using Node.js and MongoDB Atlas. The software functions as a backend utility that performs automated system checks and synchronizes the results directly to a cloud cluster. To use the program, a user executes the script via the terminal; the application then establishes a secure handshake with the cloud, performs a full CRUD (Create, Read, Update, Delete) cycle, and displays the synchronized data in a formatted console table.

The purpose of writing this software was to gain hands-on experience with Cloud Connectivity, Document-based data modeling, and handling asynchronous network operations within restricted infrastructure environments.

Software Demo Video

Cloud Database
I utilized MongoDB Atlas, a fully managed cloud database service. This platform was selected because it allows for robust, web-based management of clusters and security rules, which was essential for maintaining productivity in a restricted local development environment.

The database structure consists of a non-relational Collection titled audits. Each document within the collection follows a flexible schema designed for system monitoring:

auditId: A unique integer for record tracking.

systemName: The name of the service or hardware being audited.

status: The outcome of the audit (e.g., PASS/FAIL).

isResolved: A boolean flag to track maintenance status.

timestamp: Automatically generated date for audit logging.

# Development Environment

To overcome administrative and network limitations, I utilized a Lightweight Development Stack:

Visual Studio Code as the primary IDE.

Node.js Runtime for executing asynchronous JavaScript.

MongoDB Atlas Web Console for cloud cluster management.

The software is written in JavaScript (ES6+), utilizing the following libraries:

mongoose: An Object Data Modeling (ODM) library used to manage the connection and schema validation for the cloud database.

dotenv: (Optional) Used for managing secure environment variables and connection strings.

# Useful Websites

https://www.mongodb.com/es/docs/atlas/

https://mongoosejs.com/docs/guide.html

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS

# Future Work


Frontend Dashboard: Develop a React-based interface to visualize the cloud audit logs in a real-time graph.

REST API Integration: Wrap the database logic in an Express.js API to allow external testing tools to post audit results via HTTP.

Enhanced Authentication: Implement JWT (JSON Web Tokens) to provide more granular user access control beyond basic database roles.