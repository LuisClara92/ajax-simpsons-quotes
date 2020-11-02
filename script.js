function quote() { 

    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')

    .then(response => response.data)
    .then(simpsonsQuote => {

        const charName = simpsonsQuote[0].character
        const charImg = simpsonsQuote[0].image
        const quote = simpsonsQuote[0].quote              

        const quoteCard = document.getElementById('simpson');
        quoteCard.innerHTML = `
          <div>    
            <h3> ${charName} </h3>
            <img alt=${charName} src=${charImg}><img>
          </div>  
            <q style='font-size:1.3em'> ${quote} </q>
        `

        quoteCard.style.display = 'grid';
        quoteCard.style.textAlign = 'center';
        quoteCard.style.alignItems = 'center';
        quoteCard.style.justifyContent = 'center';
        quoteCard.style.margin = 'auto';
        quoteCard.style.width = '60%';

    });

  }