[![Build Status](https://travis-ci.org/vinayakkulkarni/vuejs-sort.svg?branch=master)](https://travis-ci.org/vinayakkulkarni/vuejs-sort)

# Laravel Vue Semantic-UI Pagination :zap:
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
<sort :data="sortingData" label="Name" icon="chevron" v-on:sort-data="sortData"></pagination>
```

```javascript
Vue.component('example-component', {

	data() {
		return {
			// Our data object that holds the Laravel paginator data
			sortingData: {},
		}
	},

	created() {
		// Fetch initial results
		this.sortData();
	},

	methods: {
		// Our method to GET results from a Laravel endpoint
		sortData(sort, direction) {
			if (typeof sort === 'undefined') {
				sort = 1;
			}

			// Using vue-resource as an example
			this.$http.get('example/results?sort=' + page + '&direction=' + direction)
				.then(response => {
					return response.json();
				}).then(data => {
					this.sortingData = data;
				});
		}
	}

});
```

### :white_check_mark: :book: Props

| Name | Type | Description |
| --- | --- | --- |
| `data` | Object | An object containing `sort` (you can set this at your backend) & `sorttype` (viz. Direction eg. `'asc'`, `'desc'`) |
| `icon` | String | (optional) Default is `chevron`; Refer [Semantic-UI Icons](https://semantic-ui.com/elements/icon.html) for specifying which icons you want. |
| `label` | String | (optional) Is responsible for the label that'll be displayed which will be clickable. |

```javascript
{
	sort: 1,
	sorttype: 'asc',
}
```

### :white_check_mark: :ear: Events

| Name | Description |
| --- | --- |
| `sort-data` | Triggered when a user changes `sort` & `sorttype`.|


## NPM :octocat:  

[![NPM](https://nodei.co/npm/vuejs-sort.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vuejs-sort/)