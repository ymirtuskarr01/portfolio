"use strict"

class Social {

    // github, linkedin, twitter
    socials = [];

    constructor() {
        this.defaultSocials();
    }

    defaultSocials() {

        fetch('./assets/social/socials.json')
        .then(response => response.json())
        .then(json => {
            this.loadSocials(json);
        })
    }

    loadSocials(json) {
        for (let i = 0; i < json.length; i++) {
            this.socials[i] = json[i];
        }

        this.build();
    }

    build() {
        this.socials.forEach((media) => {
            document.getElementById("social").innerHTML += this.template(media);
        })
    }

    template(media) {
        return `<a title="${media.name}" href="${media.link}" rel="external" target="_blank">${media.icon}</a>`;
    }
}

export default Social;