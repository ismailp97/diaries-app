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


## Set Up Environment Variables
Make a supabase account, create a .env file in the root directory and add:
```
PORT=3000
DB_URL=your_database_url_here
```

## Set Up database
```
npm run setup-db
```

Run the server:
```bash
npm run dev
```
Access the api:
Open http://localhost:3000 in your browser.


## Access application
In VS code using live server extension, run the index.html in live server.