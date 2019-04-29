/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Our data object
var data = { a: 1 };

// The object is added to a Vue instance
var vm = new Vue({
    el: "#app",
    data: data
});

// Getting the property on the instance
// returns the one from the original data
if(vm.a == data.a){ // => true
    console.log("Es verdadero");
}

// Setting the property on the instance
// also affects the original data
vm.a = 2;
data.a; // => 2

// ... and vice-versa
data.a = 3;
vm.a; // => 3
/**Usando el metodo freeze*/
var obj = {
  foo: 'bar'
};

Object.freeze(obj);

var vm2 = new Vue({
  el: '#app-2',
  data: obj
});
/**Ciclo de vida de los ganchos*/
var vm3 = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
});