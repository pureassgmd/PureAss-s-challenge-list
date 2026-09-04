 const d = {
  list: [
        /*=============================================================================*/
    {
      vids: [
      ],
      name: "dih v3",
      author: "dreathegooberx",
	  desc: "15 CPS Spam. Still not verified.",
      id: "Not out.",
      percentToQualify: 100,
      verificationVid: "https://www.youtube.com/watch?v=ydYqELe-uA8",
    },
        /*=============================================================================*/
  ],
  version: [1, 0, 0],
};
const list = d.list;
const version = d.version;
console.log(
  "%c my balls",
  "color: pink; font-weight: bold; background-color: rgb(50,10,40); padding: 2em; margin: 3em 2em 10em 20em; border: 3px solid black; border-radius: 1em; box-shadow: 10px 10px 8px pink;"
);

//automatically changes keys aka awesome
for (let x = 0; x < list.length; x++) {
  if (x < 100) {
    list[x].key = x;
  } else if (x >= 100) {
    list[x].legacykey = 0;
  }
}
