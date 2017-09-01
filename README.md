[![Build Status](https://travis-ci.org/vinayakkulkarni/vuejs-sort.svg?branch=master)](https://travis-ci.org/vinayakkulkarni/vuejs-sort)

# VueJS Sort :zap:
+ A simple Vue.js sorting wrapper.

+ This is [on GitHub](https://github.com/vinayakkulkarni/vuejs-sort)  so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

## Requirements

* [Vue.js](https://vuejs.org/) 2.x

## :white_check_mark: Install :ok_hand:

```bash
npm install vuejs-sort
// or
yarn add vuejs-sort
```

## :white_check_mark: Usage :mortar_board:

Register the component globally:
```javascript
Vue.component('sort', require('vuejs-sort'));
```
Or use locally
```javascript
import sort from 'vuejs-sort';
```

## :white_check_mark: Example :four_leaf_clover:

```html
<sort label="Posts (asc)" icon="chevron" :toRoute="{ name: 'somewhere.index', query: { sort : 1, sorttype: 'asc' }}" @sort-data="sortData" v-if="sorttype === 'desc'"></sort>
<sort label="Posts (desc)" icon="chevron" :toRoute="{ name: 'somewhere.index', query: { sort : 1, sorttype: 'asc' }}" @sort-data="sortData" v-if="sorttype === 'asc'"></sort>
```

```javascript
Vue.component('example-component', {

	data() {
		return {
			// You could have $route.query.sort or set a custom value as per your backend
			// sort: Number(this.$route.query.sort),
			sort: 1,
			sorttype: 'asc',
		}
	},

	methods: {
		sortData(sort, direction) {
			this.sort = sort;
			this.sorttype = direction;
			this.filterData();
		},
		// Our method to GET results from a Laravel endpoint
		filterData() {
			// Using vue-resource as an example
			t.$http.get('/api/v1/posts?sort=' + t.sort + '&sorttype=' + t.sorttype)
				.then(response => {
					// do whatever you do with response data
				}).catch(error => {
					// do whatever you do with error data
				});
		}
	}

});
```

### :white_check_mark: Props :book:

| Name | Type | Description |
| --- | --- | --- |
| `icon` | String | (optional) Default is `chevron`; Refer [Semantic-UI Icons](https://semantic-ui.com/elements/icon.html) for specifying which icons you want. |
| `label` | String | (optional) Is responsible for the label that'll be displayed which will be clickable. |
| `toRoute` | Object | An object containing `name` (viz. Route Name) & `query` (viz. a object containing `sort` & `sorttype` similar to `$route.query`) |

### :white_check_mark: Events :ear:

| Name | Description |
| --- | --- |
| `sort-data` | Emits `sort` & `sorttype`.|


## NPM :octocat:  

[![NPM](https://nodei.co/npm/vuejs-sort.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vuejs-sort/)