//1850s Facts

var ninetiesFacts = [ 
    "After the Fugitive Slave Act of 1850, Detroit  bars and other buildings have access to the tunnel system that led into Canada.",
    "1897 Sebastian S. Kresge opens his 5 and 10 cent store with J.G. McCrory.  It develops into present day Kmart.",
    "1901 Henry Ford establishes his second automobile company, the Henry Ford Co.",
    "1898: Henry Ford organizes the Detroit Automobile Co. with backing from local investors.  It fails three years later after only producing 2 cars."
];

//1920s Facts

var twentiesFacts = [
    "The Detroit Historical Society was formed in 1921",
    "Radio station WWJ went on air in August 1920, and it was originally called 8MK. Its first home was the Detroit News building. Both are still in operation.",
    "On October 26, 1925 the Cleaners and Dryers war was started and cemented the power of the Purple Gang in Detroit.",
    "1922 James Couzens, former General Manager of Ford Motor Company, was appointed as a United States senator. Couzens used his investment earnings to start the Children’s Fund of Michigan; which gave all children in Michigan health and dental care."
];

//1960s Facts

var sixtiesFacts = [
    "1961 - The Temptations auditioned for Motown with the name The Elgins, but were signed as The Temptations.",
    "Paradise Theatre, the jazz mecca of the 40s and 50s, was renovated and is now home to the Detroit Symphony Orchestra.",
    "1965 - Motown launched its foreign label, Tamla-Motown, in London, England.",
    'The Supremes recorded "Stop In the Name of Love", which held the number one position on the Billboard charts from March 27th to April 3rd, 1965.'
];

//Present Facts

var presentFacts = [
  "2002 - The Detroit Lions began playing in the new, state-of-the-art Ford Field stadium; returning to downtown Detroit after 27 years in Pontiac.",
  "2006 - In February the city hosted the Super Bowl XL.",
  "2006 - In October the Detroit Tigers defeated the Oakland A's in the American League Championship Series. The victory came three years after having a 119-loss season.",
  "The Renaissance Center has its own zip code – 48243!"
];

function randomize(list) {
	return Math.floor(Math.random() * list.length);
}

module.exports.ninetiesFacts = ninetiesFacts;
module.exports.twentiesFacts = twentiesFacts;
module.exports.sixtiesFacts = sixtiesFacts;
module.exports.presentFacts = presentFacts;
module.exports.randomize = randomize;