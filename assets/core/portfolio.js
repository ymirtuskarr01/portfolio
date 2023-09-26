"use strict";

import About from '../about/about.js';
import Project from '../project/project.js';
import Social from '../social/social.js';

class Portfolio {

    about = {};
    project = {};
    social = {};

    constructor() {

        this.setStyleProperty('transition-all',   this.getStyleProperty('enable-all'));
        this.setStyleProperty('transition-bg',    this.getStyleProperty('enable-bg'));
        this.setStyleProperty('transition-color', this.getStyleProperty('enable-color'));
        this.setStyleProperty('transition-fill',  this.getStyleProperty('enable-fill'));

        this.init();
        this.eventHandler();

        // temporary
        setTimeout(() => {
            this.updateSize();
        }, 300);

        window.addEventListener("resize", (e) => {
            this.updateSize();
        });
    }

    init() {
        this.about   = new About();
        this.project = new Project();
        this.social  = new Social();
    }

    getStyleProperty(prop) {

        const property = (prop === 'color-scheme') ? prop : '--' + prop;
        return getComputedStyle(document.documentElement).getPropertyValue(property).trim();

    }

    setStyleProperty(prop, value) {

        const property = (prop === 'color-scheme') ? prop : '--' + prop;
        document.documentElement.style.setProperty(property, value);

    }

    eventHandler() {
        const projectListView = document.getElementById("projectList");

        document.querySelector(".buttonView").onclick = (event) => {

            event.preventDefault();
            let button = event.target.closest("button");

            if (!button) return;

            new Audio("./audio/mixkit-cool-interface-click-tone-2568.wav").play();

            const thisButton = button.id;

            projectListView.classList.remove("gridView", "carousel");
            projectListView.classList.add(thisButton);

            if (button.nextElementSibling) {
                button.nextElementSibling.classList.remove("selected");
            }

            if (button.previousElementSibling) {
                button.previousElementSibling.classList.remove("selected");
            }

            button.classList.add("selected");

            this.updateView();
        };
    }

    updateView() {
        const projectList = document.querySelector("#projectList");

        if (projectList.classList.contains("carousel")) {
                this.test = new Flickity(projectList);
                this.test.resize();
                this.updateSize();
                // this.test.on("change", (e) => {
                //     this.updateViewDimension(e);
                // })
                // this.test.addEventListener("change", (e) => {
                //     console.log(e);
                // });
            // var elem = document.querySelector('.main-carousel');
        } else {
            this.test.destroy();
        }

        // document.addEventListener("resize", (e) => {
        //     console.log("resizing on work");
        // });
        // numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;
        // characterCount = enteredText.length + numberOfLineBreaks;
    }

    updateSize() {
        const main = document.getElementsByTagName("main");
        // const mainStyle   = getComputedStyle(Array.from(main)[0]);
        // const mainHeight  = mainStyle.height.slice(0, mainStyle.height.length - 2);
        const mainHeight = Array.from(main)[0].offsetHeight;
        const about = document.getElementById("about");
        const aboutHeight = about.clientHeight;
        const icon = document.querySelectorAll("#category .icon");
        // console.log(icon);

        const height      = Math.round(aboutHeight / mainHeight * 100);

        document.documentElement.style.setProperty('--about-content-height', `${height}%`);

    }
}

export default Portfolio;