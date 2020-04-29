const enhancer = require('./enhancer.js');

const item = {
	name: 'Excalibur',
	enhancement: 10,
	durability: 78,
};

// test away!
describe('enhancer test', () => {
	describe('repair test', () => {
		it('should return an object', () => {
			expect(enhancer.repair(item)).toBeDefined();
			expect(typeof enhancer.repair(item)).toBe('object');
		});
		it('should return object with expected keys', () => {
			expect(enhancer.repair(item)).toHaveProperty('name');
			expect(enhancer.repair(item)).toHaveProperty('enhancement');
			expect(enhancer.repair(item)).toHaveProperty('durability');
		});
		it('should increase durability to 100', () => {
			expect(enhancer.repair(item).durability).toBe(100);
		});
	});
	describe('success test', () => {
		it('should increase enhancement by 1', () => {
			const actual = enhancer.succeed(item);
			const expected = item.enhancement + 1;

			if (actual < 20) {
				expect(actual.enhancement).toBe(expected);
			}
		});
		it('should not change enhancement level if it is 20', () => {
			const actual = enhancer.succeed({ ...item, enhancement: 20 });

			expect(actual.enhancement).not.toBeGreaterThan(21);
		});
		it('should not change durability', () => {
			const actual = enhancer.succeed(item);

			expect(actual.durability).toBe(item.durability);
		});
	});
	describe('fail test', () => {
		it.todo('should decrease by 5 if durability is less than 15');
		it.todo('should decrease by 10 if durability is 15 or more');
		it.todo('should decrease 1 if ehancement is 16 or more');
	});
});
