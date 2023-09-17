function skillsMember(){
    var skills = {
        name: 'JavaScript',
        age: 20,
        coding: function(){
            console.log('I love coding');
        }
    }
    console.log(skills);
    console.log(skills.name);
    console.log(skills.age);
    console.log(skills.coding());
}