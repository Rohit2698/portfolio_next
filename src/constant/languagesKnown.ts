import NextJsIcon from "../assets/nextjsicon.png";
import ThreeJsIcon from "../assets/threejsicon.png";
import ReduxIcon from "../assets/reduxicon.png";
import ReactNativeIcon from "../assets/reactnativeicon.png";
import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import javascriptIcon from "../assets/javascript.svg";
import { WebisteInfoType } from "../container/work/type";
import GifImage from "../assets/website/gif.png";
import CovideImage from "../assets/website/covid.png";
import MovieImage from "../assets/website/movie.png";
import FlappyImage from "../assets/website/flappy.png";
import hauntedVillaImage from "../assets/website/hauntedvilla.png";
import newsAppImage from "../assets/website/newsapp.png";

export const LanguageKnownData = [
  {
    title: "LANGUAGES KNOWN",
    info: [
      {
        id: 1,
        icon: htmlIcon,
        label: "HTML",
        experience: "Intermediate",
      },
      {
        id: 2,
        icon: cssIcon,
        label: "CSS",
        experience: "Intermediate",
      },
      {
        id: 3,
        icon: javascriptIcon,
        label: "JAVASCRIPT",
        experience: "Intermediate",
      },
    ],
  },
  {
    title: "FRAMEWORKS USED",
    info: [
      {
        id: 4,
        icon: reactIcon,
        label: "REACT",
        experience: "Intermediate",
      },
      {
        id: 5,
        icon: ReduxIcon,
        label: "REDUX",
        experience: "Intermediate",
      },
      {
        id: 6,
        icon: ReactNativeIcon,
        label: "REACT-NATIVE",
        experience: "Intermediate",
      },
      {
        id: 7,
        label: "NEXT-JS",
        experience: "Beginner",
        icon: NextJsIcon
      },
      {
        id: 8,
        icon: ThreeJsIcon,
        label: "THREE-JS",
        experience: "Beginner",
      },
    ],
  },
];

export const websiteData: WebisteInfoType[] = [
  {
    id: 1,
    title: 'Haunted house',
    github: 'https://github.com/Rohit2698/threejs-projects',
    live: 'https://horrorgraveyard.netlify.app/',
    image: hauntedVillaImage
  },
  {
    id: 2,
    title: 'Flappy bird - Clone',
    github: 'https://github.com/Rohit2698/flappy-bird-clone',
    live: 'https://sad-jang-66e512.netlify.app/',
    image: FlappyImage
  },
  {
    id: 3,
    title: 'Covid info',
    github: 'https://github.com/Rohit2698/CoronaFight',
    live: 'https://coronafight.netlify.app/',
    image: CovideImage
  },
  {
    id: 4,
    title: 'Movie Search',
    github: 'https://github.com/Rohit2698/Covid19',
    live: 'https://moviechuno.netlify.app/',
    image: MovieImage
  },
  {
    id: 5,
    title: 'News Application',
    github: 'https://github.com/Rohit2698/News-Application',
    live: 'https://user-images.githubusercontent.com/36307148/111283857-8ec49980-8665-11eb-9146-95edaf5678f0.mp4',
    image: newsAppImage
  },
  {
    id: 6,
    title: 'Giphy search',
    github: 'https://github.com/Rohit2698/giphy-search',
    live: 'https://giphygifsearch.netlify.app/',
    image: GifImage
  },
]