 const d = {
  list: [
    {
	"vids": [
	],        
	name: "dih v3",
	author: "dreathegooberX",
	more: "uh yeah whatever this shit is",
	desc: "15 cps spam btw im crine",
	id: "Not out currently",
	pass: "Free To Copy",
	percentToQualify: 43,
	verificationVid: "Not verified.",
	phacked: false,
	hacked: false
},
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
