<template>
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
    <!-- search Bar -->
           <div class="searchBar">
                <span v-if="searchCrypto && filteredList.length >= 1 " style="font-weight:bold;font-size:12px;">
                {{filteredList.length}} resultat<span v-if="filteredList.length >= 1" style="font-weight:bold;">s</span></span>
                <input v-model="searchCrypto" class="searchBar" type="text" placeholder="search for a crypto" autocomplete="off"/>
            </div>
    <!-- display search result -->
           <!-- <div v-for="crypto in filteredList">
                <span>{{ crypto.image }} </span>
                <span>{{ crypto.name }} </span>
            </div>-->
            <div style="width:86%;margin:50px auto;">
                    <div v-if="filteredList.length >= 1" class="cryptoDiv" style="margin-top:60px;">
                    <div class="logo" style="width:115px;text-align:left;"><strong>Logo</strong></div>
                    <div class="name" style="width:230px;text-align=left;"><strong>Name</strong></div>
                    <div class="symbol" style="width:250px;text-align=left;"><strong>symbol</strong></div>
                    <div class="symbol" style="width:250px;text-align=left;"><strong>24h cap-change</strong></div>
                    <div class="price" style="width:250px;text-align=left;"><strong>Current Price</strong></div>
                    </div>
                    <div v-for="(crypto, index) in filteredList" :key="index" class="cryptoDiv">
                        <div class="logo" style="width:200px;text-align:left;">
                            <img :src="crypto.image" alt="icon" width="40" height="40"/>
                        </div>
                        <div class="name" style="width:150px;text-align:left;">
                            <p><strong>{{ crypto.name }}</strong> </p>
                        </div>
                        <div class="symbol" style="width:250px;text-align=left;">
                            <span>{{ crypto.symbol }}</span>
                        </div>
                    <div style="width:250px;text-align=left;">
                        <div v-if="crypto.market_cap_change_percentage_24h < 0" >
                            
                            <span v-bind:style="red">{{ crypto.market_cap_change_percentage_24h }}%</span>
                        </div>
                        <div v-else>
                            <span v-bind:style="green">{{ crypto.market_cap_change_percentage_24h }}%</span>
                        </div>
                    </div>
                        <div style="width:250px;text-align=left;">
                            <span>{{ crypto.current_price }}€</span>
                        </div>
                    </div>
            </div>
        </div>
       
            <div>
                 <h2 style="margin: 0 auto;"> Welcome to CryptoCurrency, Find all the information on crypto currencies</h2><br><br>
            </div>
             <!-- Display search error -->
             <div v-if="filteredList.length == []" class="no-result" >
              <p v-bind:style="red">Désolé, aucun résultat trouvé</p>
            </div> 
            <!-- display all cryptos -->
            <div v-if="filteredList.length == []" style="width:86%;margin:50px auto;">
                    <div class="cryptoDiv">
                    <div class="logo" style="width:115px;text-align:left;"><strong>Logo</strong></div>
                    <div class="name" style="width:230px;text-align=left;"><strong>Name</strong></div>
                    <div class="symbol" style="width:250px;text-align=left;"><strong>symbol</strong></div>
                    <div class="symbol" style="width:250px;text-align=left;"><strong>24h cap-change</strong></div>
                    <div class="price" style="width:250px;text-align=left;"><strong>Current Price</strong></div>
                    </div>
                    <div v-for="(crypto, index) in cryptos" :key="index" class="cryptoDiv">
                        <div class="logo" style="width:200px;text-align:left;">
                            <img :src="crypto.image" alt="icon" width="40" height="40"/>
                        </div>
                        <div class="name" style="width:150px;text-align:left;">
                            <p><strong>{{ crypto.name }}</strong> </p>
                        </div>
                        <div class="symbol" style="width:250px;text-align=left;">
                            <span>{{ crypto.symbol }}</span>
                        </div>
                    <div style="width:250px;text-align=left;">
                        <div v-if="crypto.market_cap_change_percentage_24h < 0" style="width:250px;text-align=left;">
                            <span v-bind:style="red">{{ crypto.market_cap_change_percentage_24h }}%</span>
                        </div>
                        <div v-else>
                            <span v-bind:style="green">{{ crypto.market_cap_change_percentage_24h }}%</span>
                        </div>
                    </div>
                        <div style="width:250px;text-align=left;">
                            <span>{{ crypto.current_price }}€</span>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
 import axios from 'axios'

export default {
     data() {
        return {
            cryptos : [],
            searchCrypto: "",
             red : {
                 color : "red"   
             }, 
             green : {
                 color : "green"   
             }     
        }
     },
     computed : {
         filteredList(){
             return this.cryptos.filter((crypto) => {
             return crypto.name.toLowerCase().includes(this.searchCrypto.toLowerCase());
         })
        }
     },
     beforeCreate(){
         axios
             .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=true')
            .then(response => this.cryptos = response.data)
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
        margin-bottom:30px;
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
    .cryptoDiv{
        display:flex;
        flex-flow:row wrap;
        align-items:center;
        padding: 10px 0;
        border-bottom: 1px solid lightgrey;
    }
</style>