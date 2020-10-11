/*
 * @Author: Clloz
 * @Date: 2020-10-10 11:25:41
 * @LastEditTime: 2020-10-11 13:34:50
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /bilibili-header/main.js
 * @博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
import { Effect } from './filter';

let el = document.querySelector('.header');
console.log(el);

let effect = new Effect(el, [
    {
        index: 0,
        styles: {
            height: '250px',
            filter: 'blur(4px)',
            transform: 'translate(0px, 0px) rotate(0deg)',
        },
        blur: 4,
        transform: [0, 0],
    },
    {
        index: 1,
        path: 'spirit',
        length: 4,
        styles: {
            height: '165px',
            filter: 'blur(0px)',
            transform: 'translate(0px, 0px) rotate(0deg)',
        },
        blur: 0,
        transform: [0, 0],
    },
    {
        index: 2,
        styles: {
            height: '250px',
            filter: 'blur(1px)',
            transform: 'translate(-50px, 0px) rotate(0deg)',
        },
        blur: 1,
        transform: [-50, 0],
    },
    {
        index: 3,
        styles: {
            height: '150px',
            filter: 'blur(4px)',
            transform: 'translate(0px, 4.2px) rotate(0deg)',
        },
        blur: 4,
        transform: [0, 4.2],
    },
    {
        index: 4,
        styles: {
            height: '165px',
            filter: 'blur(5px)',
            transform: 'translate(0px, -1.8px) rotate(0deg)',
        },
        blur: 5,
        transform: [0, -1.8],
    },
    {
        index: 5,
        styles: {
            height: '178px',
            filter: 'blur(6px)',
            transform: 'translate(0px, 0px) rotate(0deg)',
        },
        blur: 6,
        transform: [0, 0],
    },
]);
effect.init();
