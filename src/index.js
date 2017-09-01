module.exports = {

	template: '<div>\
		<router-link v-show="toRoute.query.sorttype === \'desc\'" :to="toRoute" @click.native="sortData(toRoute.query.sort, toRoute.query.sorttype)">\
			{{ label }} <i class="down black icon" :class="icon" v-if="toRoute.query.sort === this.$route.query.sort"></i>\
		</router-link>\
		<router-link v-show="toRoute.query.sorttype === \'asc\'" :to="toRoute" @click.native="sortData(toRoute.query.sort, toRoute.query.sorttype)">\
			{{ label }} <i class="up black icon" :class="icon" v-if="toRoute.query.sort === this.$route.query.sort"></i>\
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
    toRoute: {
    	type: Object,
    	default: function() {
    		return {
    			name: 'example.index', 
    			query: { sort: 1, sorttype: 'asc' }
    		}
    	}
    },
  },
	methods: {
		sortData(sort, direction) {
			this.$emit('sort-data', sort, direction);
		},
	}
}
