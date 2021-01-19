<template @load="getCryptos()">
    <div class="cryptoContainer">
        <div class="bitcoin">
            <div class="logo">
                <img src="../assets/gecko.png" alt="gecko" width="60" height="60"/> 
                <span class="logoTitle" >GeckoCurrency</span>
            </div>
            <div>
                <ul class="menu">
                    <li>Markets</li>
                    <li>Currencies</li>
                    <li>Community</li>
                    <li>Farms</li>
                    <li>Change</li>
                    <li>news</li>
                    <li>Learn</li>
                    <li>More</li>
                    <li>Less</li>
                </ul>
            </div>
            <div class="searchBar">
                <input v-model="searchCrypto" class="searchBar" type="text" placeholder="search for a crypto" autocomplete="off"/>
                <span v-if="searchCrypto && filteredList.length > 1 ">
                {{filteredList.length}} resultat<span v-if="filteredList.length >= 2">s</span>
            </div>
             <div v-if="filteredList.length == []" class="no-result">
              <h3>Désolé</h3>
              <p>Aucun résultat trouvé</p>
            </div> 
            <div v-for="product in filteredList">
                <span>{{ crypto.image }} </span>
                <span>{{ crypto.name }} </span>
            </div>
          </div>
        </div>
        <div>
            <p> Welcome to CryptoCurrency, Find all the information on crypto currencies</p><br>
            <ul>
                <li v-for="crypto in cryptos">
                    <span>{{ crypto.image }} </span>
                    <span>{{ crypto;symbol }} {{ crypto.id }} </span>
                    <span>{{ crypto.name }} </span>
                    <span>{{ crypto.current_price }} </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            cryptos : [],
            searchCrypto: ""
        }
     },
     computed : {
         filteredList(){
             return this.cryptos.filter((crypto) => {
             return crypto.name.toLowerCase().includes(this.searchCrypto.toLowerCase());
      })
     },
     methods : {
         getCryptos(){
             axios
                .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=15&page=1');
                .then(response => this.cryptos = response.data)
                .catch(erreur => this.cryptos = [title: "erreur de chargement"]);
         }
     }
}
</script>



<style>
    .bitcoin{
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        align-items:flex-end;
        margin:20px 0;
        padding:25px 50px;
        height:60px;
        border-top: 1px solid lightgrey;
        border-bottom:1px solid lightgrey;
    }
    .logoTitle{
        padding:0;
        font-size:24px;
        font-weight:bold;
    }
    .searchBar{
        margin-bottom:20px;
        height:30px;
        width:180px;
    }
    .menu{
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        align-items:flex-end;
    }
    .menu li {
        list-style:none;
        margin-left:20px;
    }
</style>