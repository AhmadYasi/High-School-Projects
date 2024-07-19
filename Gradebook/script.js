let student1 = [];
let student2 = [];
let student3 = [];

function average() {
    function calculateAverage(scores) {
        let sum = 0;
        for (let i = 0; i < scores.length; i++) {
            sum += scores[i];
        }
        return (sum / scores.length).toFixed(2);
    }

    let avgStudent1 = calculateAverage(student1);
    let avgStudent2 = calculateAverage(student2);
    let avgStudent3 = calculateAverage(student3);

    console.log("Morty's average:", avgStudent1);
    console.log("Jamshid's average:", avgStudent2);
    console.log("Jake's average:", avgStudent3);

    return {
        Morty: avgStudent1,
        Jamshid: avgStudent2,
        Jake: avgStudent3
    };
}

function scoreConversion(score) {
    if (score >= 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function storeInput() {
    const forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        const inputs = forms[i].getElementsByTagName('input');
        const studentScores = [];

        for (let j = 0; j < inputs.length; j++) {
            studentScores.push(Number(inputs[j].value));
        }

        if (i === 0) student1 = studentScores;
        else if (i === 1) student2 = studentScores;
        else if (i === 2) student3 = studentScores;
    }

    console.log("Morty's scores:", student1);
    console.log("Jamshid's scores:", student2);
    console.log("Jake's scores:", student3);
    
    const averages = average();
    
    const averageElement = document.getElementById("average");
    averageElement.innerHTML = `
        Morty's average: ${averages.Morty}, and you get the score of ${scoreConversion(averages.Morty)}<br>
        Jamshid's average: ${averages.Jamshid}, and you get the score of ${scoreConversion(averages.Jamshid)}<br>
        Jake's average: ${averages.Jake}, and you get the score of ${scoreConversion(averages.Jake)}
    `;
}