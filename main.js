/**
 * MILESTONE 1:
 *      Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere
 *      completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film 
 *      che contengono ciò che ha scritto l’utente.
 *      Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
*       - Titolo
*       - Titolo Originale
*       - Lingua
*       -Voto
*
*/


const app = new Vue({
    el:"#app",
    data: {
        query:"",
        risultati:[],
        bandiere: ["it", "en"]
    },

    methods:{
        // metodo "search", cerca risultati nell' API
        search(){
            /**
             * FILM
             */
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params:{
                    api_key: "e99307154c6dfb0b4750f6603256716d",
                    query: this.query,
                    language: "it-IT"

                }
            })
                    .then(risposta => {
                        // gestione caso di successo
                        const ris = risposta.data.results;
                        // console.log(ris);
                        this.risultati = ris;
                    })
                    .catch(errore => {
                        // gestione caso di errore
                        console.log(errore);
                    });
            
            /**
             * SERIE TV
             */

            axios.get("https://api.themoviedb.org/3/search/tv", {
                params:{
                    api_key: "e99307154c6dfb0b4750f6603256716d",
                    query: this.query,
                    language: "it-IT"

                }
            })
                    .then(risposta => {
                        // gestione caso di successo
                        const ris = risposta.data.results;
                        // console.log(ris);
                        // mile 1
                        // this.risultati = ris;

                        // mile 2
                        this.risultati = this.risultati.concat(ris);
                    })
                    .catch(errore => {
                        // gestione caso di errore
                        console.log(errore);
                    });
        },

        // conversione voto
        getVote(vote){
            return Math.ceil(vote / 2);
        },

        //controlla il linguaggio in entrata, 
        // restituisce true se in bandiere contiene la lingua "language"
        isLangFlag(language){
            return this.bandiere.includes(language);
        },

        // prende l'immagine della bandiera
        getFlag(language){
            return `./img/${language}.png` 
        }
    }
});


