import moment from 'moment';

let t2

const t1 = moment().format();

setTimeout(() => {
  t2 = moment().format();
}, 5000);

setTimeout(() => {
  if (moment(t1).isBefore(t2)) {
    console.log('successful');
  } else {
    console.log('failed');
  }
}, 10000);

