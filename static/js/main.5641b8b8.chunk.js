(this.webpackJsonpravenous=this.webpackJsonpravenous||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),c=(a(13),a(2)),o=a(3),l=a(1),u=a(5),h=a(4),m=(a(14),a(15),a(16),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:""})),s.a.createElement("h2",null,this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city),s.a.createElement("p",null,"".concat(this.props.business.state," ").concat(this.props.business.zipCode))),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.props.business.category.toUpperCase()),s.a.createElement("h3",{className:"rating"},"".concat(this.props.business.rating," stars")),s.a.createElement("p",null,"".concat(this.props.business.reviewCount," reviews")))))}}]),a}(s.a.Component)),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(m,{business:e,key:e.id})})))}}]),a}(s.a.Component),d=(a(17),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},n.handleTermChange=n.handleTermChange.bind(Object(l.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(l.a)(n)),n.handleSearch=n.handleSearch.bind(Object(l.a)(n)),n.handleSortByChange=n.handleSortByChange.bind(Object(l.a)(n)),n.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},n}return Object(o.a)(a,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var a=e.sortByOptions[t];return s.a.createElement("li",{className:e.getSortByClass(a),key:a,onClick:e.handleSortByChange.bind(e,a)},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{placeholder:"Search Businesses",onChange:this.handleTermChange}),s.a.createElement("input",{placeholder:"Where?",onChange:this.handleLocationChange})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{onClick:this.handleSearch},"Let's Go")))}}]),a}(s.a.Component)),v={search:function(e,t,a){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat("lYYqKL6vuhoj-IAySFqqNYQgAgP0FSbCfvT0aP414NGfsuI_30Jm7VQQeJ0NfWTBhtQa299hRzmE7mG5f-AQTDPp728S9hx7n-edO6UspYSew0BHNKrvBUiB5RvyXnYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zipCode,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}},b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"searchYelp",value:function(e,t,a){var n=this;v.search(e,t,a).then((function(e){n.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"ravenous"),s.a.createElement(d,{searchYelp:this.searchYelp}),s.a.createElement(p,{businesses:this.state.businesses}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5641b8b8.chunk.js.map