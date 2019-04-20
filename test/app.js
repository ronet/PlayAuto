var assert = require('assert');

describe('Array Test 2', () => {
    describe('indexOf() Method', () => {
        it('return -a when null', () => {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});