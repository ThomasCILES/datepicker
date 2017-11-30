import * as moment from 'moment';

/**
 *
 * @returns {number}
 */
export const now = () => moment.now();

/**
 *
 * @param timestamp
 * @returns {*|moment.Moment}
 */
export const getMoment = (timestamp) => moment(timestamp);

/**
 *
 * @param timestamp
 * @returns {Array}
 */
export const getDaysInMonth  = (timestamp) => {
    const m = getMoment(timestamp);
    const month = m.month();
    const year  = m.year();
    const days  = new Array(m.daysInMonth()).fill(0).map((day, index) => (index+1) );

    return days.reduce((acc, day) => {
        return acc.concat(moment.utc({year, month, day}))
    }, []);
};

export default {
    now,
    getMoment,
    getDaysInMonth
};
