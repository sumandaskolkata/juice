d3.json('./juice_orders',function(data){
	var values = {};
	data.forEach(function(fruit){
		if(fruit.drinkName != 'CTL'){
			values[fruit.drinkName] = values[fruit.drinkName] || [];
			values[fruit.drinkName].push(fruit);
		}
	})
	var noOfJuice =[];
	Object.keys(values).forEach(function(key){
		noOfJuice.push(values[key].length);
	})
	var x = d3.scale.linear()
    .domain([0, d3.max(noOfJuice)])
    .range([0, 480]);
	d3.select(".chart")
  .selectAll("div")
    .data(noOfJuice)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
	console.log(values)
})