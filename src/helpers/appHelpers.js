import pick from 'lodash/pick';
import keys from 'lodash/keys';
import defaults from 'lodash/defaults';

let scrollTop = null;
let preventScroll = (e) => {
    e.preventDefault();
}

/**
 * To prevent scrolling when a fixed overlay is showing.
 * 'prevent-scroll' class puts a position fixed on body.
 * It Keeps the scroll position that will be applied when
 * scrolling is allowed again. 
 * 
 * the set timeout is to allow any animations to occur because
 * position fixed will often jump the page to the top.
 */
export const preventBodyScroll = () => {
    scrollTop = document.body.scrollTop;
    document.addEventListener('touchmove', preventScroll);
    scrollTop = document.body.scrollTop;
    setTimeout(() => {
        document.body.classList.add('prevent-scroll');
    }, 500);
}

export const allowBodyScroll = () => {
    document.removeEventListener('touchmove', preventScroll);
    document.body.classList.remove('prevent-scroll');
    if (scrollTop) {
        document.body.scrollTop = scrollTop;
        scrollTop = 0;
    }
}

/**
 * Returns new object of default values with 
 * values from newValuesObj overwritting default values.
 * Only keys in defaultsObj are passed from newValuesObj 
 * to return obj
 * 
 * Does not maintain object key order.
 */
export function getDefaults(defaultsObj, newValuesObj) {
    const newValues = pick(newValuesObj, keys(defaultsObj));
    return defaults(newValues, defaultsObj);
}