function skillsMember() {
    var member = {
        name: "John Doe",
        age: 25,
        skills: ["JavaScript", "React", "Node"],
        details: function() {
            console.log(this.name + " is " + this.age + " years old.");
        }
    }
    return member;
}