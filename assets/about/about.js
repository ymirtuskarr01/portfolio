"use strict";

class About {
    personals = [{
        name                    : "Ymir Tuskarr",
        programming_language    : "Javascript, c#, SQL",
        proficiency             : "intermediate",
        interest                : "learning tech knowledge and able to utilise them efficiently",
        past_work               : "web development",
        current_work            : "constantly on lookout for opportunities, to develop my skills and utlise them"
    }]

    constructor() {
        this.build();
    }

    build() {
        this.personals.forEach((attribute) => {
            document.getElementById("personal").innerHTML += this.template(attribute);
        })
    }

    template(attribute) {
        const message = `<p>
                            Hi, I\'m ${attribute.name}. I have experience in using ${attribute.programming_language}
                            at ${attribute.proficiency} level in ${attribute.past_work} previously.
                            I am interested in ${attribute.interest}. Currently, I am ${attribute.current_work}.
                         </p>`;
        return message;
    }
}

export default About;