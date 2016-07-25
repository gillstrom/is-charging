import test from 'ava';
import fn from './';

test(async t => {
	t.is(typeof await fn(), 'boolean');
});
