import fc1 from "../assets/fc61.png";
import fc2 from "../assets/fc62.jpg";
import acv1 from "../assets/acv1.png";
import acv2 from "../assets/acv2.jpg";
import fm1 from "../assets/fm1.jpg";
import fm2 from "../assets/fm2.jpg";
import bf41 from "../assets/bf41.jpg";
import bf42 from "../assets/bf42.jpg";
import tr1 from "../assets/tr1.jpg";
import tr2 from "../assets/tr2.jpg";
import rdr21 from "../assets/rdr21.jpg";
import rdr22 from "../assets/rdr22.jpg";
import cp20771 from "../assets/cp20771.jpg";
import cp20772 from "../assets/cp20772.jpg";
import gtav1 from "../assets/gtav1.webp";
import gtav2 from "../assets/gtav2.jpg";
import nb1 from "../assets/nb1.jpg";
import nb2 from "../assets/nb2.jpg";
import kb1 from "../assets/kb1.jpg";
import kb2 from "../assets/kb2.jpg";
import hd1 from "../assets/hd1.jpg";
import hd2 from "../assets/hd2.jpg";
import ff1 from "../assets/ff1.jpg";
import ff2 from "../assets/ff2.jpg";

const games = [
  {
    id: "1",
    name: "Far Cry 6",
    publisher: "Ubisoft",
    release: "10/07/21",
    link: "https://www.youtube.com/watch?v=-IJuKT1mHO8",
    price: 59.99,
    img1: fc1,
    img2: fc2,
    desc: "Dive into the gritty world of a modern-day guerrilla revolution to liberate a nation from its oppressive dictators.",
  },
  {
    id: "2",
    name: "Assassin's Creed® Valhalla",
    publisher: "Ubisoft",
    release: "11/17/20",
    link: "https://www.youtube.com/watch?v=1wiclO4a60A",
    price: 59.99,
    img1: acv1,
    img2: acv2,
    desc: "Become a legendary Viking on a quest for glory. Raid your enemies, grow your settlement, and build your political power.",
  },
  {
    id: "3",
    name: "Football Manager 2022",
    publisher: "SEGA",
    release: "11/09/21",
    link: "https://www.youtube.com/watch?v=DfzMZuZAteA",
    price: 36.99,
    img1: fm1,
    img2: fm2,
    desc: "No game takes you closer to the dream of being a real football manager. Feel the difference on and off the pitch in FM22, with new ways to develop your team and find your winning edge.",
  },
  {
    id: "4",
    name: "Battlefield™ 2042",
    publisher: "Electronic Arts",
    release: "11/19/21",
    link: "https://www.youtube.com/watch?v=ASzOzrB-a9E",
    price: 39.99,
    img1: bf41,
    img2: bf42,
    desc: "Battlefield™ 2042 marks the return to the iconic all-out warfare of the franchise. Squad up and bring a cutting-edge arsenal into massive-scale battlegrounds, set in a near-future world transformed by disorder.",
  },
  {
    id: "5",
    name: "Rise of the Tomb Raider",
    publisher: "Square Enix",
    release: "10/16/16",
    link: "https://www.youtube.com/watch?v=1_FIyNcQSgA",
    price: 29.99,
    img1: tr1,
    img2: tr2,
    desc: "Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content. Explore Croft Manor in the new “Blood Ties” story, then defend it against a zombie invasion in “Lara’s Nightmare”",
  },
  {
    id: "6",
    name: "Red Dead Redemption 2",
    publisher: "Rockstar Games",
    release: "11/05/19",
    link: "https://www.youtube.com/watch?v=eaW0tYpxyp0",
    price: 44.99,
    img1: rdr21,
    img2: rdr22,
    desc: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.",
  },

  {
    id: "7",
    name: "Cyberpunk 2077",
    publisher: "CD PROJEKT RED",
    release: "12/10/20",
    link: "https://www.youtube.com/watch?v=qIcTM8WXFjk",
    price: 14.99,
    img1: cp20771,
    img2: cp20772,
    desc: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
  },

  {
    id: "8",
    name: "Grand Theft Auto V",
    publisher: "Rockstar Games",
    release: "05/14/20",
    link: "https://www.youtube.com/watch?v=xQT-O1nMSBU",
    price: 24.99,
    img1: gtav1,
    img2: gtav2,
    desc: "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
  },
  {
    id: "9",
    name: "NARAKA: BLADEPOINT",
    publisher: "NetEase Montreal",
    release: "08/11/21",
    link: "https://www.youtube.com/watch?v=Q_uBBXiqL1s",
    price: 19.99,
    img1: nb1,
    img2: nb2,
    desc: "NARAKA: BLADEPOINT is an up to 60-player PVP mythical action combat experience with martial arts inspired melee combat, gravity defying mobility, vast arsenals of melee & ranged weapons, legendary customizable heroes with epic abilities.",
  },
  {
    id: "10",
    name: "Kena: Bridge of Spirits",
    publisher: "Ember Lab",
    release: "09/21/21",
    link: "https://www.youtube.com/watch?v=23dNZqxnytU",
    price: 15.99,
    img1: kb1,
    img2: kb2,
    desc: "NARAKA: BLADEPOINT is an up to 60-player PVP mythical action combat experience with martial arts inspired melee combat, gravity defying mobility, vast arsenals of melee & ranged weapons, legendary customizable heroes with epic abilities.",
  },
  {
    id: "11",
    name: "Horizon Zero Dawn™ Complete Edition",
    publisher: "PlayStation PC LLC",
    release: "08/07/20",
    link: "https://www.youtube.com/watch?v=76O5KaJHEA0",
    price: 24.99,
    img1: hd1,
    img2: hd2,
    desc: "Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
  },
  {
    id: "12",
    name: "FINAL FANTASY VII REMAKE INTERGRADE",
    publisher: "Square Enix",
    release: "12/16/21",
    link: "https://www.youtube.com/watch?v=ERgrFVhL-n4",
    price: 69.99,
    img1: ff1,
    img2: ff2,
    desc: "Cloud Strife, an ex-SOLDIER operative, descends on the mako-powered city of Midgar. The world of the timeless classic FINAL FANTASY VII is reborn, using cutting-edge graphics technology, a new battle system and an additional adventure featuring Yuffie Kisaragi.",
  },
];

export const getSpotLightGames = () => {
  let spotLightGames = [];
  for (let i = 0; i < games.length; i += 2) {
    spotLightGames.push(games[i]);
    games[i].discount = Math.floor(Math.random() * 30 + 1);
  }
  return spotLightGames;
};

export const getMostPopularGames = () => {
  let popularGames = [];
  for (let i = 0; i < games.length; i++) {
    popularGames.push(games[i]);
    popularGames.reverse();
  }
  return popularGames;
};
export const getCarouselGames = () => {
  let carouselGames = [];
  for (let i = 0; i < 4; i += 1) {
    carouselGames.push(games[i]);
  }
  return carouselGames;
};
export const getFeaturedGames = () => {
  let featuredGames = [];
  for (let i = 2; i < 6; i += 2) {
    featuredGames.push(games[i]);
  }
  return featuredGames;
};
export const getFeaturedGames2 = () => {
  let featuredGames2 = [];
  for (let i = 6; i < 10; i += 2) {
    featuredGames2.push(games[i]);
  }
  return featuredGames2;
};
