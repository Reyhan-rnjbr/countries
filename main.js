const countries = document.getElementById("countries");
fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3").then((res)=>{

    return res.json()

}).then((data)=>{
    data.forEach((value)=>{
         countries.innerHTML+= `<script src="./main.js"></script>
    <li>
        <div> <img src="${value.flags.png}" alt=""></div>
        <div>
            <span>${value.name.common}</span>
            <p>population: ${value.population}</p>
            <p>Region: ${value.region}</p>
            <p>Capital: ${value.capital[0]}</p>
        </div>
    </li>`
    })
   
})