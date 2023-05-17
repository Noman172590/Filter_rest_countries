const countryDataload=search=>{

    const url=`https://restcountries.com/v3.1/region/${search}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayData(data))

}

const displayData=data=>{

   const countryDetalies=document.getElementById('countryDetalies')
   countryDetalies.innerHTML=" "
 for(const datavalue of data){

    console.log(datavalue)
    // console.log(datavalue.ccn3)
    const div=document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`

    <div class="card h-100">
    <img  src="${datavalue.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Country Name: ${datavalue.name.common}</h5>
      <p class="card-text">Capital: ${datavalue.capital
            }</p>
      
    </div>
  </div>
 `
countryDetalies.appendChild(div)
 }

}
const searchcountryAfrica=()=>{


  const Africa=document.getElementById('Africa').innerText;
  countryDataload(Africa)


}
const searchcountryAmerica=()=>{


  const America=document.getElementById('America').innerText;
  countryDataload(America)


}
const searchcountryAsia=()=>{


  const Asia=document.getElementById('Asia').innerText;
  countryDataload(Asia)


}
const searchcountryEurope=()=>{


  const Europe=document.getElementById('Europe').innerText;
  countryDataload(Europe)


}
const searchcountryoceania=()=>{


  const oceania=document.getElementById('oceania').innerText;
  countryDataload(oceania)


}

countryDataload('europe')