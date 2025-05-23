const questions = [
    {
        question: "Τι ονομάζεται συνάρτηση f με πεδίο ορισμού A; (σελ 15)",
        answerImg: "images/1.jpg",
    },
    {
        question: "Έστω συνάρτηση f με πεδίο ορισμού A. Τι ονομάζουμε γραφική παράσταση της f; (σελ 16)",
        answerImg: "images/2.jpg",
    },
    {
        question: "Τι ονομάζεται σύνολο τιμών μιας συνάρτησης f; (σελ 15)",
        answerImg: "images/3.jpg",
    },
    {
        question: "Πότε δύο συναρτήσεις f και g ονομάζονται ίσες; (σελ 23)",
        answerImg: "images/4.jpg",
    },
    {
        question: "Έστω f και g δύο συναρτήσεις με πεδία ορισμού A και B αντίστοιχα. Να ορίσετε τη σύνθεση της f με τη g. (σελ 25)",
        answerImg: "images/5.jpg",
    },
    {
        question: "α. Πότε μία συνάρτηση f ονομάζεται γνησίως αύξουσα σε ένα διάστημα Δ του πεδίου ορισμού της; (σελ 31)\nβ. Πότε μία συνάρτηση f ονομάζεται γνησίως φθίνουσα σε ένα διάστημα Δ του πεδίου ορισμού της; (σελ 31)",
        answerImg: "images/6.jpg",
    },
    {
        question: "Πότε λέμε ότι μία συνάρτηση f με πεδίο ορισμού A παρουσιάζει στο x₀ ∈ A (ολικό) μέγιστο το f(x₀); (σελ 32)",
        answerImg: "images/7.jpg",
    },
    {
        question: "Πότε λέμε ότι μία συνάρτηση f με πεδίο ορισμού A παρουσιάζει στο x₀ ∈ A (ολικό) ελάχιστο το f(x₀); (σελ 32)",
        answerImg: "images/8.jpg",
    },
    {
        question: "Έστω συνάρτηση f με πεδίο ορισμού A. Πότε λέμε ότι η f παρουσιάζει στο x₀ ∈ A τοπικό μέγιστο; (σελ 140)",
        answerImg: "images/9.jpg",
    },
    {
        question: "Έστω συνάρτηση f με πεδίο ορισμού A. Πότε λέμε ότι η f παρουσιάζει στο x₀ ∈ A τοπικό ελάχιστο; (σελ 141)",
        answerImg: "images/10.jpg",
    },
    {
        question: "Πότε μία συνάρτηση f ονομάζεται 1-1; (σελ 33)",
        answerImg: "images/11.jpg",
    },
    {
        question: "Έστω συνάρτηση f: A → R η οποία είναι 1-1. Πως ορίζεται η αντίστροφη συνάρτηση f⁻¹; (σελ 35)",
        answerImg: "images/12.jpg",
    },
    {
        question: "Να διατυπώσετε το κριτήριο παρεμβολής. (σελ 51)",
        answerImg: "images/13.jpg",
    },
    {
        question: "Πότε μία συνάρτηση f ονομάζεται συνεχής σε ένα σημείο x₀ του πεδίου ορισμού της; (σελ 70)",
        answerImg: "images/14.jpg",
    },
    {
        question: "Πότε λέμε ότι μία συνάρτηση f είναι συνεχής στο διάστημα (α,β); (σελ 73)",
        answerImg: "images/15.jpg",
    },
    {
        question: "Πότε λέμε ότι μία συνάρτηση f είναι συνεχής στο διάστημα [α,β];",
        answerImg: "images/16.jpg",
    },
    {
        question: "Να διατυπώσετε το θεώρημα του Bolzano και να δώσετε τη γεωμετρική του ερμηνεία. (σελ 74)",
        answerImg: "images/17.jpg",
    },
    {
        question: "Να διατυπώσετε το θεώρημα ενδιαμέσων τιμών. (σελ 76)",
        answerImg: "images/18.jpg",
    },
    {
        question: "Να διατυπώσετε το Θεώρημα Μέγιστης και Ελάχιστης τιμής. (σελ 77)",
        answerImg: "images/19.jpg",
    },
    {
        question: "Να δώσετε τον ορισμό της εφαπτομένης ε στο σημείο A της γραφικής παράστασης μιας συνάρτησης f. (σελ 94)",
        answerImg: "images/20.jpg",
    },
    {
        question: "Πότε λέμε ότι μία συνάρτηση f είναι παραγωγίσιμη σε ένα σημείο x₀ του πεδίου ορισμού της; (σελ 95)",
        answerImg: "images/21.jpg",
    },
    {
        question: "Έστω f μία συνάρτηση με πεδίο ορισμού A. Πότε λέμε ότι η f είναι παραγωγίσιμη στο A; (σελ 104)",
        answerImg: "images/22.jpg",
    },
    {
        question: "Πότε λέμε ότι μία συνάρτηση f είναι παραγωγίσιμη σε ένα κλειστό διάστημα [α,β] του πεδίου ορισμού της; (σελ 104)",
        answerImg: "images/23.jpg",
    },
    {
        question: "Αν δύο μεταβλητά μεγέθη x και y συνδέονται με τη σχέση y=f(x), τι ονομάζουμε ρυθμό μεταβολής του y ως προς το x στο σημείο x₀; (σελ 123)",
        answerImg: "images/24.jpg",
    },
    {
        question: "Να διατυπώσετε το Θεώρημα του Rolle. (σελ 128)",
        answerImg: "images/25.jpg",
    },
    {
        question: "Να ερμηνεύσετε γεωμετρικά το Θεώρημα Rolle. (σελ 128)",
        answerImg: "images/26.jpg",
    },
    {
        question: "Να διατυπώσετε το Θεώρημα Μέσης Τιμής του Διαφορικού Λογισμού. (σελ 128)",
        answerImg: "images/27.jpg",
    },
    {
        question: "Να δώσετε τη γεωμετρική ερμηνεία του Θεωρήματος Μέσης Τιμής του Διαφορικού Λογισμού. (σελ 128)",
        answerImg: "images/28.jpg",
    },
    {
        question: "Να διατυπώσετε το Θεώρημα του Fermat. (σελ 142)",
        answerImg: "images/29.jpg",
    },
    {
        question: "Να ερμηνεύσετε γεωμετρικά το Θεώρημα του Fermat. (σελ 142)",
        answerImg: "images/30.jpg",
    },
    {
        question: "Έστω μία συνάρτηση f ορισμένη σε ένα διάστημα Δ. Ποιες είναι οι πιθανές θέσεις τοπικών ακροτάτων της f στο Δ; (σελ 143)",
        answerImg: "images/31.jpg",
    },
    {
        question: "Έστω μία συνάρτηση f ορισμένη σε ένα διάστημα Δ. Τι ονομάζουμε κρίσιμα σημεία της f στο Δ; (σελ 143)",
        answerImg: "images/32.jpg",
    },
    {
        question: "Έστω μία συνάρτηση f συνεχής σε ένα διάστημα Δ και παραγωγίσιμη στο εσωτερικό του Δ. Πότε λέμε ότι η f στρέφει τα κοίλα προς τα άνω ή είναι κυρτή στο Δ; (σελ 155)",
        answerImg: "images/33.jpg",
    },
    {
        question: "Έστω μία συνάρτηση f συνεχής σε ένα διάστημα Δ και παραγωγίσιμη στο εσωτερικό του Δ. Πότε λέμε ότι η f στρέφει τα κοίλα προς τα κάτω ή είναι κοίλη στο Δ; (σελ 155)",
        answerImg: "images/34.jpg",
    },
    {
        question: "Πότε το σημείο A(x₀,f(x₀)) ονομάζεται σημείο καμπής της γραφικής παράστασης της f; (σελ 157)",
        answerImg: "images/35.jpg",
    },
    {
        question: "Έστω μία συνάρτηση f ορισμένη σε ένα διάστημα Δ. Ποιες είναι οι πιθανές θέσεις σημείων καμπής της f στο Δ; (σελ 157)",
        answerImg: "images/36.jpg",
    },
    {
        question: "Πότε η ευθεία x = x₀ λέγεται κατακόρυφη ασύμπτωτη της γραφικής παράστασης μιας συνάρτησης f; (σελ 161)",
        answerImg: "images/37.jpg",
    },
    {
        question: "Πότε η ευθεία y = λx + β λέγεται οριζόντια ασύμπτωτη της γραφικής παράστασης μιας συνάρτησης f στο +∞ (αντίστοιχα στο −∞); (σελ 162)",
        answerImg: "images/38.jpg",
    },
    {
        question: "Πότε η ευθεία y = λx + β λέγεται ασύμπτωτη της γραφικής παράστασης μιας συνάρτησης f στο +∞; (σελ 162)",
        answerImg: "images/39.jpg",
    },
    {
        question: "Πότε η ευθεία y = λx + β λέγεται ασύμπτωτη της γραφικής παράστασης μιας συνάρτησης f στο −∞; (σελ 162)",
        answerImg: "images/40.jpg",
    },
    {
        question: "Έστω μία συνάρτηση f, ορισμένη σε ένα διάστημα Δ. Να διατυπώσετε τον ορισμό της αρχικής συνάρτησης ή παράγουσας της f στο Δ. (σελ 185)",
        answerImg: "images/41.jpg",
    },
    {
        question: "Να διατυπώσετε το Θεμελιώδες Θεώρημα του Ολοκληρωτικού Λογισμού. (σελ 216)",
        answerImg: "images/42.jpg",
    }
];


let currentQuestionIndex = 0;
let selectedQuestions = [];

function loadUserSettings() {
    const storedSettings = localStorage.getItem("questionSettings");
    if (storedSettings) {
        selectedQuestions = JSON.parse(storedSettings);
    } else {
        selectedQuestions = questions.map((_, index) => index);
    }
}

function loadQuestion() {
    const feedContainer = document.getElementById("feedContainer");
    
    feedContainer.innerHTML = '';
    
    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    const questionText = document.createElement("p");
    questionText.className = "question";
    questionText.innerText = questions[selectedQuestions[currentQuestionIndex]].question;

    const answerButton = document.createElement("button");
    answerButton.className = "answer-btn";
    answerButton.innerText = "Απάντηση";
    answerButton.onclick = () => showAnswer(answerImg);

    const answerImg = document.createElement("img");
    answerImg.src = questions[selectedQuestions[currentQuestionIndex]].answerImg;
    answerImg.className = "answer-img";
    
    questionCard.appendChild(questionText);
    questionCard.appendChild(answerButton);
    questionCard.appendChild(answerImg);
    feedContainer.appendChild(questionCard);
}

function nextQuestionWithAnimation() {
    const feedContainer = document.getElementById("feedContainer");
    const currentCard = feedContainer.querySelector(".question-card");
    
    currentCard.classList.add("hidden-up");
    
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % selectedQuestions.length;  // Cycle through selected questions only
        loadQuestion();

        
        const newCard = feedContainer.querySelector(".question-card");
        newCard.classList.add("hidden-down");

        setTimeout(() => {
            newCard.classList.remove("hidden-down");
        }, 50);
    }, 500); 
}


function previousQuestionWithAnimation() {
    const feedContainer = document.getElementById("feedContainer");
    const currentCard = feedContainer.querySelector(".question-card");
    
    currentCard.classList.add("hidden-down");
    
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex - 1 + selectedQuestions.length) % selectedQuestions.length;  // Cycle through selected questions only
        loadQuestion();


        const newCard = feedContainer.querySelector(".question-card");
        newCard.classList.add("hidden-up");

        setTimeout(() => {
            newCard.classList.remove("hidden-up");
        }, 50); 
    }, 500); 
}


function showAnswer(imgElement) {
    imgElement.style.display = imgElement.style.display === "block" ? "none" : "block";
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        nextQuestionWithAnimation();
    } else if (event.deltaY < 0) { 
        previousQuestionWithAnimation();
    }
});

window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) <= Math.abs(yDiff)) {
        if (yDiff > 0) {
            nextQuestionWithAnimation();
        } else {
            previousQuestionWithAnimation();
        }
    }
    
    xDown = null;
    yDown = null;
}

window.onload = function () {
    loadUserSettings();
    loadQuestion();

    document.getElementById("nextQuestionBtn").addEventListener("click", nextQuestionWithAnimation);
};





