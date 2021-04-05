var app = new Vue ({
    el: '#root',
    data: {
        arrayCanzoni: [],
        generi: [],
        selectedGenre: 'All'
    },
    methods: {
        changeGenre: function(event) {
            this.selectedGenre = event.target.value;
        },
        yearSort: function() {
            this.arrayCanzoni.sort(function(a, b){
                return a.year-b.year;
            })
        }
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) => {
                this.arrayCanzoni = result.data.response;
                console.log(this.arrayCanzoni);
                this.arrayCanzoni.forEach(element => {
                    if(!this.generi.includes(element.genre)){
                        this.generi.push(element.genre)
                    }
                });
            })
    }




}) 