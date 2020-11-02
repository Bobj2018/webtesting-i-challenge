const enhancer = require('./enhancer.js');

const item = {
	name: 'Excalibur',
	enhancement: 10,
	durability: 78,
};

// test away!
describe('enhancer test', () => {
	describe('repair test', () => {
		const repair = enhancer.repair(item);
		it('should return an object', () => {
			expect(repair).toBeDefined();
			expect(typeof repair).toBe('object');
		});
		it('should return object with expected keys', () => {
			expect(repair).toHaveProperty('name');
			expect(repair).toHaveProperty('enhancement');
			expect(repair).toHaveProperty('durability');
		});
		it('should increase durability to 100', () => {
			expect(repair.durability).toBe(100);
		});
	});
	describe('success test', () => {
		const actual = enhancer.succeed(item);
		it('should increase enhancement by 1', () => {
			const expected = item.enhancement + 1;

			if (actual.enhancement < 20) {
				expect(actual.enhancement).toBe(expected);
			}
		});
		it('should not change enhancement level if it is 20', () => {
			expect(actual.enhancement).not.toBeGreaterThan(21);
		});
		it('should not change durability', () => {
			expect(actual.durability).toBe(item.durability);
		});
	});
	describe('fail test', () => {
		const actual = enhancer.fail(item);
		it('should decrease by 5 if enhancement is less than 15', () => {
			if (item.enhancement < 15) {
				expect(actual.durability).toBe(item.durability - 5);
			}
		});
		it('should decrease by 10 if enhancement is 15 or more', () => {
			if (item.enhancement >= 15) {
				expect(actual.durability).toBe(item.durability - 10);
			}
		});
		it('should decrease 1 if enhancement is 16 or more', () => {
			if (item.enhancement > 16) {
				expect(actual.enhancement).toBe(item.enhancement - 1);
			}
		});
	});
	describe('get test', () => {
		const actual = enhancer.get(item);
		it('should not change name if enhancement is 0', () => {
			if (item.enhancement === 0) {
				expect(actual.name).toBe(item.name);
			}
		});
		it('should change the name of the item if the enhancement is greater than 0', () => {
			if (item.enhancement > 0) {
				expect(actual.name).toBe(`[+${item.enhancement}] ${item.name}`);
			}
		});
	});
});
