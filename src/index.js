module.exports = {

	template: '<div>\
	<a v-show="sorttype === \'asc\'" @click="sortData(data)">\
		{{ label }} <i class="down black icon" :class="icon" v-if="sort === 1"></i>\
	</a>\
	<a v-show="sorttype === \'desc\'" @click="sortData(data)">\
		{{ label }} <i class="up black icon" :class="icon" v-if="sort === 1"></i>\
	</a>\
	</div>',

	props: {
    label: {
      type: String,
      default: 'Sort Me',
      required: false
    },
    icon: {
      type: String,
      default: 'chevron',
      required: false
    },
    data: {
    	type: Object,
			default: function() {
				return {
					sort: null,
					sorttype: null,
				}
			},
			required: true
		}
  },
	methods: {
		sortData(sort, direction) {
			this.$emit('sort-data', sort, direction);
		},
	}
}