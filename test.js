import test from 'ava';
import m from './';

test(async t => {
	t.is(typeof await m(), 'boolean');
});
