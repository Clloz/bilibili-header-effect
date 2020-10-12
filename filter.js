/*
 * @Author: Clloz
 * @Date: 2020-10-10 13:41:21
 * @LastEditTime: 2020-10-12 08:46:04
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /bilibili-header/filter.js
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
export class Effect {
    constructor(el, animes) {
        this.el = el;
        this.layers = el.querySelectorAll('.layer');
        this.animes = animes;
        console.log(this.el, this.layers, this.animes);
    }
    animation() {
        for (let anime of this.animes) {
            if (anime.path) {
                let imgArr = [];

                let layer = this.layers[anime.index];
                let img = layer.querySelector('img');
                for (let i = 0; i < anime.length; i++) {
                    let temp = img.cloneNode();
                    temp.src = `./images/${anime.path}/${i % anime.length}.png`;
                    imgArr.push(temp);
                }

                setInterval(() => {
                    let index = 0;

                    let blink = setInterval(() => {
                        // img.src = `./images/${anime.path}/${index % anime.length}.png`;
                        layer.replaceChild(imgArr[index % anime.length], layer.querySelector('img'));
                        index++;
                        if (index === anime.length + 1) clearInterval(blink);
                    }, 100);
                }, 5000);
            }
        }
    }
    move() {
        let startX = 0;
        let mousemove = e => {
            let change = e.clientX - startX;
            console.log(change);
            // let blur = img.style.filter.match(/blur\((\d+)px\)/)[1];
            // let transform = img.style.transform.match(/translate\((-?\d*\.?\d+)px,\s?(-?\d*\.?\d+)px\)/);
            // console.log(blur, transform[1], transform[2]);

            for (let anime of this.animes) {
                let img = this.layers[anime.index].querySelector('img');
                if (anime.index !== 1) {
                    if (anime.index !== 0) {
                        img.style.filter = `blur(${Math.abs(anime.blur - change / 100)}px)`;
                        img.style.transform = `translate(${anime.transform[0] + change / 50}px, ${
                            anime.transform[1]
                        }px) rotate(0deg)`;
                    }
                } else {
                    img.style.filter = `blur(${anime.blur + Math.abs(change / 100)}px)`;
                    img.style.transform = `translate(${anime.transform[0] + change / 100}px, ${
                        anime.transform[1]
                    }px) rotate(0deg)`;
                }
            }
        };

        let mouseover = e => {
            startX = e.clientX;
            console.log('start: ' + startX);
            this.el.addEventListener('mousemove', mousemove);
            this.el.addEventListener('mouseout', mouseout);
        };

        let mouseout = () => {
            startX = 0;
            console.log('end: ' + startX);
            for (let anime of this.animes) {
                let img = this.layers[anime.index].querySelector('img');
                if (anime.index !== 1) {
                    if (anime.index !== 0) {
                        img.style.filter = `blur(${anime.blur}px)`;
                        img.style.transform = `translate(${anime.transform[0]}px, ${anime.transform[1]}px) rotate(0deg)`;
                    }
                } else {
                    img.style.filter = `blur(${anime.blur}px)`;
                    img.style.transform = `translate(${anime.transform[0]}px, ${anime.transform[1]}px) rotate(0deg)`;
                }
            }
            // this.el.removeEventListener('mouseover', mouseover);
            this.el.removeEventListener('mousemove', mousemove);
            this.el.removeEventListener('mouseout', mouseout);
        };

        this.el.addEventListener('mouseover', mouseover);
    }
    init() {
        for (let anime of this.animes) {
            if (anime.styles) {
                let img = this.layers[anime.index].querySelector('img');
                for (let style in anime.styles) {
                    img.style[style] = anime.styles[style];
                }
            }
        }
        this.animation();
        this.move();
    }
}
