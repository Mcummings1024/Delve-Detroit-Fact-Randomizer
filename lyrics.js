var lyrics = [
	"Dead leaves and the dirty ground",
 	"when I know you're not around",
	"shiny tops and soda pops",
	"when I hear your lips make a sound",
	"Thirty notes in the mailbox",
	"will tell you that I'm coming home",
	"and I think I'm gonna stick around",
	"for a while so you're not alone",
	"If you can hear a piano fall",
	"you can hear me coming down the hall",
	"if I could just hear your pretty voice",
	"I don't think I need to see at all",
	"Soft hair and a velvet tongue",
	"I want to give you what you give to me",
	"and every breath that is in your lungs",
	"is a tiny little gift to me",
	"I didn't feel so bad till the sun went down",
	"then I come home",
	"no one to wrap my arms around",
	"Well any man with a microphone",
	"can tell you what he loves the most",
	"and you know why you love at all",
	"if you're thinking of the holy ghost"
];

function randomize() {
	return Math.floor(Math.random() * lyrics.length);
}

module.exports.lyrics = lyrics;
module.exports.randomize = randomize;