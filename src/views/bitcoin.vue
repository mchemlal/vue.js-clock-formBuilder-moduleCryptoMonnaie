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
        <li>salut</li>
     </ul>
     </div>
     <div class="searchBar">
        <input class="searchBar" type="text" placeholder="search for a crypto"/>
     </div>
  </div>

    <p>
      Welcome to CryptoCurrency, 
      Find all the information on crypto currencies
      <a href="#"  rel="noopener">link</a>.
    </p>

    <h3>Display all..</h3>
</div>
</template>

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