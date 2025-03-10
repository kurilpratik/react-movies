<div align="center">

   <h2 align="center">A React Based Movies Application</h2>
   <div align="center">
     Visit the <a href="https://kurilpratik.github.io/react-movies/" target="_blank">website</a>! Built this project to brush up on the basics of React by coding out certain intermediate feautres as discussed below.
    </div>
    <br/>
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    
  </div>
</div>

## Introduction

Built with React.js for the user interface, Appwrite for the Trending Movies Algorithm, and styled with TailwindCSS. The platform offers a sleek and modern experience for browsing and discovering movies.

This project was made possible by [Javascript-Mastery](https://youtu.be/dCLhUialKPQ?si=SBo9AGaspGumxnQ2).

## Tech Stack

- React.js
- Appwrite
- Tailwind CSS

## Features

👉 **Browse All Movies**: Explore a wide range of movies available on the platform.

👉 **Search Movies**: Easily search for specific movies using a search function.

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability

## Advanced Stuff

🚀 **Trending Movies Algorithm** : <br>
Displays trending movies based on a dynamic algorithm built using the **Appwrite.io** database features. It stores the search keystrokes along with the first movie that comes up for that searchTerm and the number of times that searchTime has been typed in (count) in the database, and list out the movies in descending order based on the count of the searchTerm.

🚀 **Debouncing the Search Input** : <br>
Implementing the debouncing technique to optimize the **API calls** by deboucing the search input by 500ms, meaning, only when the user stops typing for 1/2 second, the API is called instead of it being called after every keystroke. This was implemented using the **useDebounce hook** from react-use


## Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/kurilpratik/react-movies.git
cd react-movies
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
npm install appwrite react-use
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_TMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual **[TheMovieDatabase API](https://developer.themoviedb.org/reference/intro/getting-started)** and **[Appwrite](https://apwr.dev/JSM050)** credentials. You can obtain these credentials by signing up on the [TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started) and creating a new project on the [Appwrite](https://apwr.dev/JSM050)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## Goals/Extensions

- [ ] Implement a debounce hook from scratch
- [ ] Add a new error state for trending movies
- [ ] An extended view of a movie showing further details