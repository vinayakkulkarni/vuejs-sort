module.exports = {

	template: '<div>\
		<router-link v-if="data.sorttype === \'desc\'" :to="{ name: routeName, query: { sort: data.sort, sorttype: data.sorttype }}" @click.native="sortData(data.sort, data.sorttype)">\
			{{ label }} <i class="chevron down black icon" v-if="data.sort"></i>\
		</router-link>\
		<router-link v-if="data.sorttype === \'asc\'" :to="{ name: routeName, query: { sort: data.sort, sorttype: data.sorttype }}" @click.native="sortData(data.sort, data.sorttype)">\
			{{ label }} <i class="chevron up black icon" v-if="data.sort"></i>\
		</router-link>\
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
    routeName:  {
      type: String,
      required: true
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