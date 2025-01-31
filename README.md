# Personal Diary App

## Overview

The Personal Diary App allows users to create, view and update diary entries. Users can record their thoughts, experiences, and reflections while organizing entries.

### Features:

- Create a diary entry with a specific date and text.

- View a list of all diary entries.

- View details of a specific diary entry.

- Update the text of an existing diary entry.

## Feature to add:

- Attach images to diary entries to make them more memorable and visually engaging.

- Search for diary entries by keyword to quickly find past events and recall specific moments.

- Secure user authentication to protect personal and private details from unauthorized access.

- Delete entries permanently for better control and data management.


## Technologies Used

- Backend: Node.js, Express, Docker

- Frontend: HTML, CSS

- Database: SQL

## Installation & Setup

Clone the repository:

```bash
git clone
cd la fosse hackathon/server
```

Install dependencies:
`npm install`

Run the server:
`npm run dev`

Access the application:
Open http://localhost:3000 in your browser.


## Set Up Environment Variables
Create a .env file in the root directory and add:
```
PORT=3000
DB_URL=your_database_url_here
```

## Docker

### 1. Build the Docker Image

```bash
# must be in same dir as dockerfile
cd server
docker build -t YOUR_USERNAME/diaries-mvc:0.0.1.RELEASE .
```

### 2. Run the Docker Container in detached mode on port 3000

```bash
docker run -d -p 3000:3000 YOUR_USERNAME/diaries-mvc:0.0.1.RELEASE
```

The API should now be accessible on http://localhost:3000/