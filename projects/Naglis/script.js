const pages = [
  {
    title: "Summer Chud Edition",
    class: "introduction",
    content:
      "Activities that I've done during the support. Honestly I did a whole lot of random shit throughout the summer, some of it was actually fun and some of it was just me sitting around doing absolutely nothing.",
    content02:
      "Spoiler did WHOLE LOTTA NOTHING. Like genuinely there were probably more days where I did nothing than days where I actually did something productive.",
  },
  {
    title: "Movies",
    class: "introduction",
    content:
      "Movies I've watched during the summer. Watched quite a few random movies whenever I had nothing better to do, ranging from actually good movies to absolute dogshit that I probably should've skipped.",
  },
  {
    title: "Hokum",
    class: "movies",
    content:
      "Lowkey interesting movie. It didn't really have any good jumpscares, but it was kind of creepy at some parts. The atmosphere was probably the best part of it because even when nothing was happening it still had that weird feeling like something was about to happen. Not the scariest movie ever but definitely not a waste of time.",
    rating: "Rating: 7/10",
    image: {
      class: "movie",
      src: "https://image.tmdb.org/t/p/w600_and_h900_face/x6rHcQFiYcczLQPrmxXPAicm54E.jpg",
    },
  },
  {
    title: "Resident Evil (2002)",
    class: "movies",
    content:
      "The movie was solid compared to all other Resident Evil movies liked it. It actually felt like they knew what kind of movie they wanted to make and didn't just throw random shit together. Obviously it has its problems, but compared to the later movies this one was actually pretty enjoyable to watch.",
    rating: "Rating: 7/10",
    image: {
      class: "movie",
      src: "https://image.tmdb.org/t/p/w600_and_h900_face/1UKNef590A0ZaMnxsscIcWuK1Em.jpg",
    },
  },
  {
    title: "Resident Evil Apocalypse (2005)",
    class: "movies",
    content:
      "Movie was kinda mehh I think they couldve done something better with it. Good idea bad execution. There were definitely some cool moments and the movie wasn't completely terrible, but it felt like they had a bunch of ideas and just shoved them all into one movie without really thinking about how everything would fit together.",
    rating: "Rating: 6/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/way9dOm4dM2sm9UMcu2PEXMTX0q.jpg",
    },
  },
  {
    title: "Resident Evil: Extinction (2007)",
    class: "movies",
    content:
      "Yee... So many question about this movie, but worst still yet to come. There was no explanation on how to world ended like this desert wasteland. barely any explanation. Like bro how did we go from a normal city to basically Mad Max simulator and nobody thought to explain what happened? The movie had some decent moments but the lack of explanation made everything feel weird.",
    rating: "Rating: 6/10",
    image: {
      class: "movie",
      src: "https://image.tmdb.org/t/p/w600_and_h900_face/6yaLr7Ymg5cvbtSVi5hHwBKx35I.jpg",
    },
  },
  {
    title: "Resident Evil: Afterlife (2010)",
    class: "movies",
    content:
      "This shi was a fever dream the start was so confusing. I genuinely had no idea what was happening for a good part of the movie and it just kept throwing random shit at me. Some scenes looked cool as hell though so I can't completely hate it, but story wise this was definitely getting questionable.",
    rating: "Rating: 5/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/qZHDnt8bnsD2cSJfIbjWbCkIq3G.jpg",
    },
  },
  {
    title: "Resident Evil: Retribution (2012)",
    class: "movies",
    content:
      "Just WTF. No explanation needed watch it yourself... Genuinely one of those movies where every five minutes something happens and you're just sitting there wondering why any of this exists. I could probably write an entire paragraph explaining how confused I was but honestly watching it yourself is probably the better experience.",
    rating: "Rating: 2/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/ohdUDWVlcbuWphaLu6wS91xdJ73.jpg",
    },
  },
  {
    title: "Resident Evil: The Final Chapter (2016)",
    class: "movies",
    content:
      "The best Resident Evil movie there is. My favorite one. I genuinely don't care what anyone says about this movie because I actually enjoyed watching it from start to finish. It had the action, the random bullshit and everything else I wanted from these movies. Somehow this was the one that actually worked for me.",
    rating: "Rating: 10/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/7glPlA0xPpxPxBu0TnY4ulQVCV1.jpg",
    },
  },
  {
    title: "Obsession",
    class: "movies",
    content:
      "Loved this movie, it wasnt as scary as creepy which made it 10x better genuinely enjoyed it and would watch it again. The creepy atmosphere carried the whole thing and it actually managed to keep me interested instead of relying on cheap jumpscares every five seconds. Definitely one of those movies I'd rewatch when I have nothing to do.",
    rating: "Rating: 10/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
    },
  },
  {
    title: "Minions & Monsters",
    class: "movies",
    content:
      "Worst minions movie there is. The action doesnt start till the last 20 minutes of the movie it was not interesting couldve saved 20bucks on it. I was basically waiting for something to actually happen the entire time and then when it finally did happen the movie was basically already over. Genuinely felt like I paid money to watch the intro.",
    rating: "Rating: 1/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/4LwvU9SZc8QQzW1X1FAPhNbXnEU.jpg",
    },
  },
  {
    title: "Insidious: Out of the Further",
    class: "movies",
    content:
      "The beginning of the movie was kind of scary but then it fell off, but still the movie was good. The first part actually had me interested and expecting some good shit to happen, but later on it started losing that feeling. Still had enough creepy moments to make it worth watching and I didn't regret watching it.",
    rating: "Rating: 8/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/4tTrW9dXCByS5wt2pXVWb58zNjz.jpg",
    },
  },
  {
    title: "Spider-man: Brand new day",
    class: "movies",
    content:
      "I would say the best Tom Holland Spider-Man movie there is actually loved it, finally they not in space or doing random shi with magic. It actually felt like a Spider-Man movie again instead of the usual multiverse bullshit. I liked how much more grounded it felt and honestly this is probably the direction they should've taken the character way earlier.",
    rating: "Rating: 9/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg",
    },
  },
  {
    title: "Fight Club",
    class: "movies",
    content:
      "THE MOVIE WAS PEAK. The split personality thing and everything was sick. I don't even know what else to say. The movie was GOOD. Genuinely one of those movies where after finishing it you're just sitting there thinking about everything that happened. The whole reveal was insane and the way everything connected together made the movie so much better.",
    rating: "Rating: 10/10",
    image: {
      class: "movie",
      src: "https://www.themoviedb.org/t/p/w600_and_h900_face/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    },
  },
  {
    title: "Games",
    class: "introduction",
    content:
      "Games I've played or beaten this summer. Some were actually peak and some lasted about two days before I got bored and never touched them again.",
  },
  {
    title: "The Binding of Isaac: Rebirth",
    class: "games",
    content:
      "It's like minecraft it has 2 week phase and when the phase ends it's miserable to play. Genuinely when you're bored the game is good enjoyed it till it got boring. At first you can sit there playing for hours trying different runs and builds, but eventually you've seen enough of the same shit and the game starts feeling like a chore. Still good when the phase hits though.",
    rating: "Rating: 7/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/250900/header.jpg?t=1731977365",
    },
  },
  {
    title: "Bloons TD 6",
    class: "games",
    content:
      "Same issue as The Binging of Isaac: Rebirth. It's good to play when you're bored and have nothing to do, but when you have something more interesting to play or do it's boring. It's fun for a while when you're unlocking towers and trying different strategies, but once that initial dopamine disappears you're just sitting there placing monkeys and wondering why you're still playing.",
    rating: "Rating: 6/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/960090/header.jpg?t=1782123772",
    },
  },
  {
    title: "Swords & Souls: Neverseen",
    class: "games",
    content:
      "PEAK GAME. Childhood game enjoyed it. From the turn based combat to the training system it's insanely good, but the only problem is some of the training areas are just miserable to train and just being left alone. The whole game has that old browser game feeling which makes it even better. Definitely one of those games that hits way harder when you played it as a kid.",
    rating: "Rating: 9/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/679900/header.jpg?t=1770459008",
    },
  },
  {
    title: "Minecraft Dungeons",
    class: "games",
    content:
      "Good game to play with someone. It's boring if played alone. Miserable and very repetitive to grind a weapon you want but overall the game is good. Playing with someone makes the entire thing way more fun because you can actually mess around and do stupid builds instead of grinding the same missions over and over alone.",
    rating: "Rating: 7/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/1672970/header.jpg?t=1787063807",
    },
  },
  {
    title: "Fortune Mill",
    class: "games",
    content:
      "Just a gamling games. I'd say one of the better that have came out these couple of months. Lowkey chill game when you're bored. It's not something I'd sit down and play for ten hours straight, but when you just want something simple to fuck around with for a bit it does the job pretty well.",
    rating: "Rating: 8/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/4731620/5a99f3ec0fa5a7b11d434d847b92131884e6ad93/header.jpg?t=1788113305",
    },
  },
  {
    title: "REANIMAL",
    class: "games",
    content:
      "INSANELY GOOD GAME. It's created by The Little Nightmares I and II director so it has the same energy. Genuinely recommend it. The atmosphere is probably my favorite part because the whole game feels uncomfortable in a good way and it actually makes you want to keep playing just to see what fucked up thing is coming next.",
    rating: "Rating: 8/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/2129530/4cdda917a0155258a2e7909d7869f35d8f980f96/header.jpg?t=1786129496",
    },
  },
  {
    title: "Portal",
    class: "games",
    content:
      "Gameplay wise the game is good, there is no story and I don't think it's needed. Fun puzzle game which can be quickly completed. It's one of those games where everything is simple but still feels satisfying when you finally figure out what the game wants you to do. Also doesn't overstay its welcome which is nice.",
    rating: "Rating: 10/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/400/header.jpg?t=1745368554",
    },
  },
  {
    title: "Portal 2",
    class: "games",
    content:
      "It's more of a story and puzzle game rather than just trying out new technology like the first game was done for. It's still good af. Some levels were hard to understand what to do and required googling. The story also made it way more interesting than I expected and the characters actually carried a lot of the game. Definitely more of a complete game compared to the first one.",
    rating: "Rating: 7/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/620/header.jpg?t=1745363004",
    },
  },
  {
    title: "Shapez",
    class: "games",
    content:
      "Factory type game don't really know what else to say. Was fun at the start but got boring when going further into the game so I quit soon. The beginning was actually pretty satisfying when everything started getting automated, but eventually there was just too much going on and I stopped caring about optimizing every single shape.",
    rating: "Rating: 5/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/1318690/header.jpg?t=1776950267",
    },
  },
  {
    title: "Dragon's Dogma 2",
    class: "games",
    content:
      "I thought it's a fun game. It was till I didn't understand what to do so just went to do side quests and it got boring. The combat was actually fun and exploring was cool at first, but once I stopped following the main stuff I just ended up wandering around doing random quests with no real reason to continue.",
    rating: "Rating: 5/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/2054970/header.jpg?t=1788308490",
    },
  },
  {
    title: "Shogun Showdown",
    class: "games",
    content:
      "It's just a puzzle game if shadow fight and Hades had a child. Fun to play 7/10. The combat is pretty simple at first but once you start getting further it actually makes you think about what you're doing instead of just clicking whatever looks cool. Good little game to play when you want something different.",
    rating: "Rating: 7/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/2084000/header.jpg?t=1763395118",
    },
  },
  {
    title: "DEATH STRANDING",
    class: "games",
    content:
      "Haven't completed it yet but from I've played the game is good with insane story telling and visuals. 8/10. The game is definitely slow as fuck compared to most games I've played, but somehow the atmosphere makes it work. The world feels empty in a way that's actually intentional and the story is interesting enough that I want to keep playing and see where it goes.",
    rating: "Rating: 8/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/1850570/header.jpg?t=1773400635",
    },
  },
  {
    title: "Click The Button",
    class: "games",
    content:
      "If cookie clicker and CS:GO had a child. Click button, get chests open them, get items + gold prestige and repeat. Very short game was nor fun nor boring. It's basically just dopamine simulator where you keep clicking shit and opening things until you've unlocked everything. Not bad for a short game but definitely wouldn't play it for weeks.",
    rating: "Rating: 6/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/3946950/15ece08bab35f4935d997dc44870d73aed3974bf/header.jpg?t=1788017433",
    },
  },
  {
    title: "Douchebag: Ultimate Bro Pack",
    class: "games",
    content:
      "Game containing all Douchebag games. Two first games were the best then it fell off quickly. The older games had that stupid browser game charm where everything was intentionally ridiculous, but later games just didn't hit the same. Still funny to look back at though, especially because I remember these from when I was younger.",
    rating: "Rating: 6/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/3701300/8ef555e24f0e75f30fc4689c1663aadd0e0a952c/header.jpg?t=1757929741",
    },
  },
  {
    title: "Frostpunk 2",
    class: "games",
    content:
      "Hard AF game where you are a president of a city in a snow wasteland and you gotta survive. Genuinely good game but needs alot of grinding and deaths to understand how to play. At first it feels impossible because you're constantly running out of something, but once you finally understand how everything connects it becomes way more satisfying. Still gonna fuck you over randomly though.",
    rating: "Rating: 8/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/1601580/header.jpg?t=1788264833",
    },
  },
  {
    title: "Vampire Survivors",
    class: "games",
    content:
      "Game for boredom. It's nothing interesting. Just move around, level up, unluck abilities and repeat. It's fun for maybe an hour when you first start playing and seeing everything explode, but after that it's basically just walking around while your character kills everything for you. Perfect game when you have absolutely nothing else to play though.",
    rating: "Rating: 4/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/1794680/2ca07b690dde645771125ed9d9206c4c5fde4dd4/header.jpg?t=1787911678",
    },
  },
  {
    title: "MOUSE: P.I. For Hire",
    class: "games",
    content:
      "Genuinely I haven't played it for much but from what I've played the gameplay is interesting, style of the game is actually pretty good and not like others. The whole cartoon noir aesthetic makes it stand out immediately and the gameplay feels pretty satisfying too. Haven't played enough to give it a proper judgment but so far it's definitely interesting.",
    rating: "Rating: 7/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/2416450/298ff2fc3f6a700d022b8d3ec58047f2b426be03/header.jpg?t=1785890069",
    },
  },
  {
    title: "Perfectionist",
    class: "introduction",
    content:
      "List of games that I've gotten all achievements for. Basically the games where I decided to suffer through every random achievement the developers could think of just to get that satisfying 100% on Steam.",
  },
  {
    title: "Resident Evil Village",
    class: "games",
    content:
      "Miserable game to 100%, unless it's just me who played the game for far to long and found it boring but that aside fun too 100% would recommend and do not do it like I did. The actual game is really fun but when you start going for every achievement it slowly turns into a job. Some challenges were genuinely annoying and made me question why I was even doing this to myself.",
    rating: "Rating: 7/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/1196590/header.jpg?t=1776927117",
    },
  },
  {
    title: "Fortune Mill",
    class: "games",
    content:
      "Easy game to 100%. Just beat the game unlocking everything which is not hard. Fastest full completion I've ever done. There isn't really anything complicated about the achievements, so you can just play through the game and naturally unlock basically everything without having to look up some random guide for five hours.",
    rating: "Rating: 6/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/4731620/5a99f3ec0fa5a7b11d434d847b92131884e6ad93/header.jpg?t=1788113305",
    },
  },
  {
    title: "Resident Evil 2",
    class: "games",
    content:
      "GAME WAS FUN AF to 100% until the DLC's or 2nd playthrough came around. The DLC's where there just to ragebait was at the end so many times just to fuck up. Genuinely good game to 100%. The main game achievements were actually enjoyable and didn't feel too bad, but some of the extra shit was clearly designed to make you suffer and question your life choices.",
    rating: "Rating: 10/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/883710/header.jpg?t=1779433152",
    },
  },
  {
    title: "Click The Button",
    class: "games",
    content:
      "Easy 100% just like Fortune Mill. There's not alot to do. You just get it by unlocking everything which takes like 2-3hours. 4/10. Basically just another game where you can turn your brain off and unlock everything without really having to worry about missing some insanely specific achievement. Good for farming another 100% I guess.",
    rating: "Rating: 4/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/3946950/15ece08bab35f4935d997dc44870d73aed3974bf/header.jpg?t=1788017433",
    },
  },
  {
    title: "Portal",
    class: "games",
    content:
      "Steps challenge runs were miserable to do and genuinely ragebait level shii but aside that easy to 100%. 6/10. The actual achievements are mostly fine but those challenge runs had me replaying the same shit over and over until I wanted to uninstall the game. Still a pretty easy 100% overall though.",
    rating: "Rating: 6/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/400/header.jpg?t=1745368554",
    },
  },
  {
    title: "NieR: Automata",
    class: "games",
    content:
      "BEST GAME THERE IS!!! Genuinely it's fun af 100% this shi. Best game THERE ISS!!!!! 11/10. Everything about this game was fucking peak and even going for the achievements didn't feel like some miserable chore. The story, music, combat and characters were all insanely good and I genuinely wanted to keep playing even after I had basically finished everything.",
    rating: "Rating: 11/10",
    image: {
      class: "game",
      src: "https://shared.fastly.steamstatic.com/store_item_assets//steam/apps/524220/header.jpg?t=1785182957",
    },
  },
  {
    title: "League of Chuds",
    class: "league",
    content:
      "League Of Legends Statistics this Summer. Started the summer getting absolutely shit on and somehow ended up climbing all the way to Gold. Mostly played Yone because apparently I enjoy making my life harder, with some Kayn and Akali games mixed in whenever I got bored.",
    content02: "Bronze 4 -> Silver 4 in a week",
    content03: "Silver 4 -> Gold 4 in a week",
    content04: "Peak: Gold 3 63LP",
    content05: "Current Gold 4 32LP",
    content06: "70 Wins 59 Losses (54% wr)",
    content07: "My lanes lost: 20",
    content08: "Retard Teammates: All",
    content09: "Current status: Hard stuck in need of duo",
    content10:
      "Most Played Champions: Yone (80 Games), Kayn (13 Games), Akali (7 Games)",
  },
];

let page = 0;
let isThrottled = false;

const title = document.getElementById("title");
const badge = document.getElementById("badge");
const counter = document.getElementById("page-counter");
const image = document.getElementById("page-image");
const mediaContainer = document.getElementById("media-container");
const layoutGrid = document.querySelector(".layout-grid");
const contentList = document.getElementById("content-list");
const rating = document.getElementById("rating");

function renderPage() {
  const currentPage = pages[page];

  badge.textContent = currentPage.class;
  counter.textContent = `${String(page + 1).padStart(2, "0")}/${String(pages.length).padStart(2, "0")}`;
  title.textContent = currentPage.title;

  contentList.innerHTML = "";
  Object.keys(currentPage)
    .filter((key) => key.startsWith("content"))
    .forEach((key) => {
      const p = document.createElement("p");
      p.textContent = currentPage[key];
      contentList.appendChild(p);
    });

  rating.textContent = currentPage.rating || "";

  // Reset image class states on container and layout grid
  layoutGrid.classList.remove("has-portrait", "has-landscape");
  mediaContainer.classList.remove("portrait", "landscape");

  if (currentPage.image) {
    image.src = currentPage.image.src;
    image.classList.remove("hidden");
    mediaContainer.classList.remove("hidden");

    // Check specifically for movie class vs game
    if (currentPage.image.class === "movie") {
      mediaContainer.classList.add("portrait");
      layoutGrid.classList.add("has-portrait");
    } else {
      mediaContainer.classList.add("landscape");
      layoutGrid.classList.add("has-landscape");
    }
  } else {
    image.src = "";
    image.classList.add("hidden");
    mediaContainer.classList.add("hidden");
  }
}

function navigate(direction) {
  if (isThrottled) return;

  if (direction === "next" && page < pages.length - 1) {
    page++;
    renderPage();
  } else if (direction === "prev" && page > 0) {
    page--;
    renderPage();
  }

  isThrottled = true;
  setTimeout(() => {
    isThrottled = false;
  }, 250);
}

window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowRight"].includes(event.key)) {
    navigate("next");
  } else if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
    navigate("prev");
  }
});

window.addEventListener(
  "wheel",
  (event) => {
    if (event.deltaY > 0) {
      navigate("next");
    } else if (event.deltaY < 0) {
      navigate("prev");
    }
  },
  { passive: true }
);

renderPage();