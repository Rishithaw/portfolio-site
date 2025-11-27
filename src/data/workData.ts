import terminalProgram from '../assets/projects/Terminal.jpeg';
import managementSystem from '../assets/projects/Manage.jpeg';
import ticTacToe from '../assets/projects/Tictactoe.jpg';
import betterDrive from '../assets/projects/Driving.jpg';
import imageViewer from '../assets/projects/Gallery.jpg';
import portfolio from '../assets/projects/Portfolio.png';
import movieCatalog from '../assets/projects/Movie.jpg';
import blogSite from '../assets/projects/Blog.png';

const work = [
  {
    title: 'Terminal Program',
    description: 'A terminal-run stock management program with authentication.',
    image: terminalProgram,
    link: 'https://github.com/Rishithaw/Stock-Management',
    tech: ['Java'],
    imageWidth: '100%',
  },
  {
    title: 'Management System',
    description: 'A supermarket system built using MVC architecture.',
    image: managementSystem,
    link: 'https://github.com/Rishithaw/gdse-71-mvc',
    tech: ['Java', 'MVC'],
    imageWidth: '100%',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Play against an AI using the minimax algorithm.',
    image: ticTacToe,
    link: 'https://github.com/Rishithaw/Tic-Tac-Toe',
    tech: ['Java', 'JavaFX'],
    imageWidth: '100%',
  },
  {
    title: 'BetterDrive',
    description: 'A driving school management system.',
    image: betterDrive,
    link: 'https://github.com/Rishithaw/Driving_School',
    tech: ['Java', 'JavaFX', 'MySQL'],
    imageWidth: '100%',
  },
  {
    title: 'Image Viewer',
    description: 'A basic image viewer application.',
    image: imageViewer,
    link: 'https://github.com/Rishithaw/Image-Viewer',
    tech: ['Java', 'JavaFX'],
    imageWidth: '100%',
  },
  {
    title: 'Portfolio',
    description: 'A portfolio website showcasing my work.',
    image: portfolio,
    link: 'https://github.com/Rishithaw/Portfolio',
    tech: ['HTML', 'CSS', 'JavaScript'],
    imageWidth: '100%',
  },
  {
    title: 'Movie Catalog',
    description: 'Look up information about released movies.',
    image: movieCatalog,
    link: 'https://github.com/Rishithaw/Movies',
    tech: ['React', 'JavaScript'],
    imageWidth: '100%',
  },
  {
    title: 'Blog Site',
    description: 'A website to manage students and their vehicles.',
    image: blogSite,
    link: 'https://github.com/Rishithaw/Final-Project-Web-Dev',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    imageWidth: '100%',
  },
];

export default work;
