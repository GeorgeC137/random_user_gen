const app = Vue.createApp({
    // template: "<h1>First JS {{name}}</h1>",
    data(){
        return{
            name: 'George',
            username: '@pluto',
            email: 'pluto@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')

            const { results } = await res.json()
            // Display username on console 
            // console.log(this.username)

            // See The Results In Console
            // console.log(results)

            this.name = results[0].name.first
            this.username = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    }
})

app.mount('#app')
