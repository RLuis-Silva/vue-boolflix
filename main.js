const app = new Vue({
    el:"#app",
    data: {},

    created(){
        /**
         * AJAX
         */
        //struttura metodo get() API
        axios.get("inserisci url qui", {    //inserisci url 
            //struttura dati
            params: {
                query: "tree",
                api_key: "f976de25effb1ed1a9ddf752730695bc"
            }
        })     
        .then(result=>{
            // caso positivo
            console.log(result.data);
        })
        .catch(errore =>{
            // caso di errore
            console.log(errore);
        });
    }
});


console.log("TORNOOOOOO SUBIIITOOOOOOO");
console.log("TORNOOOOOO SUBIIITOOOOOOO");
console.log("TORNOOOOOO SUBIIITOOOOOOO");
console.log("TORNOOOOOO SUBIIITOOOOOOO");
console.log("TORNOOOOOO SUBIIITOOOOOOO");
console.log("TORNOOOOOO SUBIIITOOOOOOO");
console.log("TORNOOOOOO SUBIIITOOOOOOO");