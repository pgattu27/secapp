fetch('http://127.0.0.1:8000')
   .then(response => {
     return response.json();
   })
   .then((component_id) => {
     component(console.log(component_id)); 
     });

component = component_id => {
	const component_idDiv = document.querySelector('component_id');
	
	component_id.forEach(component => {
	
		componentElement.innnerText = {component_id};
		
		component_idDiv.append(componentElement);
	}); 
} 
