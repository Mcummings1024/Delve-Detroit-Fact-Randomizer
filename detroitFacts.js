//1850s Facts

var ninetiesFacts = [ 
    "After the Fugitive Slave Act of 1850, Detroit  bars and other buildings have access to the tunnel system that led into Canada.",
    "1897 - Sebastian S. Kresge opens his 5 and 10 cent store with J.G. McCrory.  It develops into present day Kmart.",
    "1892 - Four Detroit streets – Jefferson, Lafayette, Cass and Second - are paved with asphalt. The rest are cobblestone, cedar block or unpaved.",
    "1898 - Henry Ford organizes the Detroit Automobile Co. with backing from local investors.  It fails three years later after only producing 2 cars."
];

//1920s Facts

var twentiesFacts = [
	"1921 - The Detroit Historical Society was formed.",
    "1920 - WWJ went on air in August. The station was originally called 8MK. The station’s first home was the Detroit News Building. Both are still operating.",
    "Paradise Valley was the business district and entertainment center of a densely-populated African-American residential area in Detroit -- known as Black Bottom -- from the 1920’s through the 1950’s.",
    "1925 - On October 26, The Cleaners and Dryers war was started and cemented the power of the Purple Gang in Detroit.",
    "1922 - James Couzens, Former General Manager of Ford Motor Company, was appointed as a United States senator. Couzens used his investment earnings to found the Children’s Fund of Michigan to give all children in Michigan health and dental care.",
    "1928 - The Fox Theater Opens."
];

//1960s Facts

var sixtiesFacts = [
	"1960 - Detroit had the highest per-capita income in the entire nation.",
    "Paradise Theatre,a black owned theater and the jazz mecca of the 40’s and 50’s, has been renovated and is now Orchestra Hall and home to the Detroit Symphony Orchestra.",
    "1960 - the Population was 1,670,144 and Detroit was the 5th largest city in U.S.",
    "1967 - One of the most violent race riots in US History took place July 23, 1967 – July 27, 1967 and is called the '12th Street Riot.'"
];

//Present Facts

var presentFacts = [
	"2002 - The Detroit Lions football team begin play in the new, state-of-the-art Ford Field, returning to downtown Detroit after 27 years in suburban Pontiac.",
	"2006 - In February, the city hosts Super Bowl XL. In October the Detroit Tigers, only three years after having a 119-loss season, defeat the Oakland A's in the American League Championship Series, winning the Pennant. They then play in their first World Series since 1984.",
	"2008 - Kwame Kilpatrick resigned his office as mayor effective September 19, 2008, after pleading guilty to two counts of obstruction of justice and no contest to one count of assaulting and obstructing a police officer.",
	"2009 - Following a special election in May 2009, businessman and former Detroit Pistons star Dave Bing became the Mayor and was subsequently re-elected to a full term of office.",
	"2013 - The state governor declares a financial emergency and appoints an emergency manager for the city. Detroit goes bankrupt, the largest city ever to do so in American history."
];

function randomize(list) {
	return Math.floor(Math.random() * list.length);
}

module.exports.ninetiesFacts = ninetiesFacts;
module.exports.twentiesFacts = twentiesFacts;
module.exports.sixtiesFacts = sixtiesFacts;
module.exports.presentFacts = presentFacts;
module.exports.randomize = randomize;