fetch('https://catfact.ninja/fact')
 .then(data =>data.json())
 .then(factData=> {
    const factText = factData.fact;
    const factElement = document.getElementById('factElement');
   
    factElement.innerHTML=factText;

 })