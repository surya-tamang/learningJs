class College{

    // construtor method should be added
    constructor(faculty, student){
        this.faculty = faculty;
        this.student = student;
    }

    year(){
        let time = 4;

        return `${this.faculty} has ${time} years.`
    }
}

const stLawrence = new College("BCA", 35);

console.log(stLawrence)