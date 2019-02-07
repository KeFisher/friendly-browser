const nouns = [
    "Goblet of Fire",
    "Elder Wand",
    "Dementor",
    "Sword of Gryffindor",
    "Knight Bus",
    "Mirror of Erised",
    "Resurrection Stone",
    "Sorting Hat",
    "Hogwarts",
    "Azkaban",
    "Dobby",
    "Tom Riddle's Diary",
    "Moaning Myrtle",
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin",
    "Quidditch",
    "Golden Snitch",
    "Nearly Headless Nick",
    "Eat Slugs",
    "Butter Beer",
    "Dumbledore",
    "Snape",
    "Voldemort",
    "Platform 9 3/4"
];


const profanity = [
    /arse/ig,
    /ass/ig,
    /bastard/ig,
    /bitch/ig,
    /cunt/ig,
    /cock/ig,
    /crap/ig,
    /damn/,
    /douche/ig,
    /dick/ig,
    /fuck/ig,
    /fag/ig,
    /hell/ig,
    /piss/ig,
    /prick/ig,
    /pussy/ig,
    /retard/ig,
    /shit/ig,
    /slut/ig,
    /nigger/ig,
    /nigga/ig,
    /queer/ig,
    /whore/ig
];


class Extension {
    /**
     *  Gets all the document's tags.
     */
    constructor() {
        this.elements = document.getElementsByTagName("*");;
    }

    /**
     *  Returns a random number between max and min.
     *  @param  min  Minimum number that function can return.
     *  @param  max  Maximum number that function can return.
     *  @return A number between min and max.
     */
    generateRandomNumber(min , max)  {
        return Math.floor(Math.random() * nouns.length);
    }

    /**
     *  Returns a random Harry Potter noun from the nouns array.
     *  @return An random index from the nouns array.
     */
    getRandomNoun() {
        return nouns[this.generateRandomNumber()]
    }

    /**
     *  Replace all profanity in document with random nouns from nouns array.
     */
    main() {
        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];

            for (let j = 0; j < element.childNodes.length; j++) {
                let node = element.childNodes[j];

                // only execute on text elements
                if (node.nodeType === 3) {
                    let text = node.nodeValue;
                    let replacedText = text;

                    for (let regex = 0; regex < profanity.length; regex++) {
                        replacedText = replacedText.replace(profanity[regex], this.getRandomNoun());
                    }

                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }
    }
}


const execute = new Extension();
execute.main();
