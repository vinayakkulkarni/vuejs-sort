const Vue = require('vue');
const VueSort = require('../src/index');

function getComponent(Component, propsData) {
	const Ctor = Vue.extend(Component);
	return new Ctor({ propsData }).$mount();
}

var exampleData = {
	sort: 1,
	sorttype: 'desc'
};

describe('VueSortingTest', function() {
	it('emits correct event', function(done) {
		const vm = getComponent(VueSort, {
			data: exampleData
		});

		vm.$on('sort-data', function (sort, direction) {
			expect(sort).toBe(1);
			expect(direction).toBe('desc');
			done();
		});

		vm.sortData(1, 'desc');
	});
});