
new Vue({
  el: '#app',
  data: {
    users: [],
    title:"Users",
},
created () {
    var vm = this
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        vm.users = response.data
    })
}
})


function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

document.getElementById('expand').addEventListener('click', function() {
    toggleClass(document.getElementById('bcrumb'), 'expand');
});