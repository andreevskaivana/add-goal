//first we need to import vue
//we import it using <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> in our index.html file

//we create a vue app that takes control of our html code
Vue.createApp({
   data(){
    return{
        goals:[],
        enteredValue:''
    };
   },
   methods:{
    addGoal(){
        this.goals.push(this.enteredValue)
        this.enteredValue=''; //reseting the value
    }
   }
}).mount("#app");

//to know where this code should be applied we specify which part of the page should be controlled by that app


//we set up what kind of data we need to work with for this app->for this example a list(list of goals)
//another piece of data is what the user enters
//we define the data using the keyword data:
//data holds a function as a value data(){}
//this function must return an object

//these are pieces of data vue is aware of:
// goals:[], -key value pair
// enteredValue:''

//we connect these data variables(enteredValue) with the html(input) by adding a special direct -> v-model attribute only understood by vue,as a value we repeat the name from vue
//this establishes a connection betwween vue and the html file


//another key value pair we add to the object we are returning is the methods
//in here we find methods and functions that are called within the html code
//addGoal method in methods - we can connext this with the data

//instead of addding event listener we add another attribute-> v-on
//v-on:event we want to listen,as a value the function we are calling
//in this case:button v-on:click="addGoal

//v-for attribute we can use to replicate this element
//v-for="goal in goals" -> we use this to loop through the goals array and add a new list item for every goal
//we use {{}} and insert the value