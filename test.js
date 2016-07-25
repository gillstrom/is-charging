import test from 'ava';
import fn from './';

test(async t => {
	console.log(await fn());
	t.is(typeof await fn(), 'boolean');
});
