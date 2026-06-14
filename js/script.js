// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Animated Counter
// ===============================

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            target / 150;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(
                updateCounter,
                20
            );

        }

        else {

            counter.innerText =
                target;

        }

    };

    updateCounter();

});

// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll", () => {

    const nav =
        document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.classList.add(
            "shadow-lg"
        );

    }

    else {

        nav.classList.remove(
            "shadow-lg"
        );

    }

});

// ===============================
// Smooth Scroll
// ===============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",

            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({

                        behavior:
                            "smooth"

                    });

                }

            }

        );

    });

// ===============================
// Future Dark Mode Support
// ===============================

const darkToggle =
    document.getElementById(
        "darkModeToggle"
    );

if (darkToggle) {

    darkToggle.addEventListener(
        "click",

        () => {

            document.body.classList.toggle(
                "light-mode"
            );

        }

    );

}

// ===============================
// Console Message
// ===============================

console.log(
    "🌾 AgriConnect Loaded Successfully"
);

// Feedback Modal

function openFeedbackModal() {

    document
        .getElementById("feedbackModal")
        .classList.remove("hidden");

}

function closeFeedbackModal() {

    document
        .getElementById("feedbackModal")
        .classList.add("hidden");

}

// Feedback Form Submit

const feedbackForm =
    document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener(
        "submit",

        function (e) {

            e.preventDefault();

            alert(
                "✅ Thank you for your feedback!"
            );

            document
                .getElementById("feedbackModal")
                .classList.add("hidden");

            this.reset();

        });

}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🌾 Thank you for contacting AgriConnect!\n\nYour message has been submitted successfully.");

        this.reset();

    });

}

// Newsletter

const newsletterForm =
    document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",

        function (e) {

            e.preventDefault();

            document
                .getElementById("newsletterModal")
                .classList.remove("hidden");

            this.reset();

        });

}

function closeNewsletterModal() {

    document
        .getElementById("newsletterModal")
        .classList.add("hidden");

}
setTimeout(() => {

    document
        .getElementById("newsletterModal")
        .classList.add("hidden");

}, 2000);

// ===============================
// Knowledge Hub Search Filter
// ===============================

function searchArticles() {

    const searchText =
        document.getElementById("articleSearch")
            ?.value.toLowerCase() || "";

    const category =
        document.getElementById("categoryFilter")
            ?.value || "all";

    const articles =
        document.querySelectorAll(".article-card");

    articles.forEach(article => {

        const title =
            article.querySelector("h3")
                .textContent
                .toLowerCase();

        const articleCategory =
            article.dataset.category;

        const matchesSearch =
            title.includes(searchText);

        const matchesCategory =
            category === "all" ||
            articleCategory === category;

        if (matchesSearch && matchesCategory) {

            article.style.display = "block";

        } else {

            article.style.display = "none";

        }

    });

}

// ===============================
// Auto Filter On Category Change
// ===============================

document.addEventListener(
    "DOMContentLoaded",

    function () {

        const categoryFilter =
            document.getElementById("categoryFilter");

        if (categoryFilter) {

            categoryFilter.addEventListener(
                "change",
                searchArticles
            );

        }

        const articleSearch =
            document.getElementById("articleSearch");

        if (articleSearch) {

            articleSearch.addEventListener(
                "keyup",

                function (event) {

                    if (event.key === "Enter") {

                        searchArticles();

                    }

                });

        }

    }
);

// ===============================
// Read More Modal
// ===============================

function showArticle(type) {

    const title =
        document.getElementById("modalTitle");

    const content =
        document.getElementById("modalContent");

    const articles = {

        organic: {

            title:
                "Organic Farming Guide",

            content:
                "Organic farming uses natural fertilizers, compost, crop rotation and biological pest control methods. It improves soil health and reduces environmental impact."

        },

        irrigation: {

            title:
                "Drip Irrigation",

            content:
                "Drip irrigation delivers water directly to plant roots. It reduces water wastage, improves crop growth and is suitable for water-scarce regions."

        },

        pest: {

            title:
                "Pest Management",

            content:
                "Integrated Pest Management (IPM) combines biological, cultural and mechanical methods to control pests while reducing chemical usage."

        },

        fertilizer: {

            title:
                "Organic Fertilizers",

            content:
                "Organic fertilizers such as compost, vermicompost and manure improve soil fertility and provide essential nutrients naturally."

        },

        water: {

            title:
                "Water Conservation",

            content:
                "Rainwater harvesting, mulching and drip irrigation help conserve water and improve farm sustainability."

        },

        pmkisan: {

            title:
                "PM Kisan Scheme",

            content:
                "PM-KISAN provides financial assistance to eligible farmers through direct income support from the Government of India."

        },

        insurance: {

            title:
                "Crop Insurance",

            content:
                "Crop insurance protects farmers against losses caused by natural disasters, pests and diseases."

        },

        subsidy: {

            title:
                "Government Subsidies",

            content:
                "Farmers can avail subsidies for irrigation systems, farm machinery, seeds and other agricultural resources."

        }

    };

    title.innerText =
        articles[type].title;

    content.innerText =
        articles[type].content;

    document
        .getElementById("articleModal")
        .classList.remove("hidden");

}

// ===============================
// Close Modal
// ===============================

function closeArticle() {

    document
        .getElementById("articleModal")
        .classList.add("hidden");

}

// ===============================
// Open Video
// ===============================

function openVideo(url) {

    window.open(
        url,
        "_blank"
    );

}

// ===============================
// Explore More Button
// ===============================

function scrollToArticles() {

    document
        .getElementById("articles")
        .scrollIntoView({

            behavior: "smooth"

        });

}

// ===============================
// ESC Key Close Modal
// ===============================

document.addEventListener(
    "keydown",

    function (event) {

        if (event.key === "Escape") {

            closeArticle();

        }

    }
);

// ===============================
// Click Outside Modal Close
// ===============================

window.addEventListener(
    "click",

    function (event) {

        const modal =
            document.getElementById("articleModal");

        if (
            event.target === modal
        ) {

            closeArticle();

        }

    }
);

console.log(
    "📚 Knowledge Hub Loaded Successfully"
);



window.addEventListener("scroll", () => {

    const btn =
        document.getElementById("scrollTopBtn");

    if (window.scrollY > 500) {

        btn.classList.remove("hidden");

    } else {

        btn.classList.add("hidden");

    }

});

function scrollToTop() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

const testimonials = [

    {
        image: "images/image1.jpg",
        text: "AgriConnect helped me find labour during harvest season. The process was quick and easy.",
        name: "Ramesh Kumar",
        location: "Vijayawada"
    },

    {
        image: "images/image2.webp",
        text: "I rented farming equipment at a reasonable price. It saved both time and money.",
        name: "Krishna Rao",
        location: "Guntur"
    },

    {
        image: "images/image3.jpg",
        text: "Crop loss reporting and government scheme awareness helped me a lot during difficult times.",
        name: "Suresh Reddy",
        location: "Eluru"
    }

];

let currentTestimonial = 0;

function loadTestimonial() {

    document.getElementById("farmerImage").src =
        testimonials[currentTestimonial].image;

    document.getElementById("testimonialText").innerText =
        testimonials[currentTestimonial].text;

    document.getElementById("farmerName").innerText =
        testimonials[currentTestimonial].name;

    document.getElementById("farmerLocation").innerText =
        testimonials[currentTestimonial].location;

    const dots =
        document.querySelectorAll(".dot");

    dots.forEach(dot =>
        dot.classList.remove("active-dot")
    );

    dots[currentTestimonial]
        .classList.add("active-dot");

}

function nextTestimonial() {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {

        currentTestimonial = 0;

    }

    loadTestimonial();

}

function prevTestimonial() {

    currentTestimonial--;

    if (currentTestimonial < 0) {

        currentTestimonial =
            testimonials.length - 1;

    }

    loadTestimonial();

}

setInterval(() => {

    nextTestimonial();

}, 4000);



function openRentalModal(name,price,location){

document.getElementById("rentalModal")
.classList.remove("hidden");

document.getElementById("equipmentName")
.value = name;

document.getElementById("equipmentPrice")
.value = price;

document.getElementById("equipmentLocation")
.value = location;

}

function closeRentalModal(){

document.getElementById("rentalModal")
.classList.add("hidden");

}

function closeSuccessModal(){

document.getElementById("successModal")
.classList.add("hidden");

}

document.addEventListener("DOMContentLoaded",()=>{

const rentalForm =
document.getElementById("rentalForm");

if(rentalForm){

rentalForm.addEventListener("submit",(e)=>{

e.preventDefault();

const equipment =
document.getElementById("equipmentName").value;

closeRentalModal();

document.getElementById("successEquipment")
.innerHTML =
`Equipment: ${equipment}`;

document.getElementById("successModal")
.classList.remove("hidden");

rentalForm.reset();

});

}

});

const equipmentRequestForm =
document.getElementById("equipmentRequestForm");

if(equipmentRequestForm){

equipmentRequestForm.addEventListener("submit",(e)=>{

e.preventDefault();

document
.getElementById("requestSuccessModal")
.classList.remove("hidden");

equipmentRequestForm.reset();

});

}

function closeRequestSuccessModal(){

document
.getElementById("requestSuccessModal")
.classList.add("hidden");

}

function previewDamageImage(event){

const preview =
document.getElementById("damagePreview");

preview.src =
URL.createObjectURL(event.target.files[0]);

preview.classList.remove("hidden");

}

const cropLossForm =
document.getElementById("cropLossForm");

if(cropLossForm){

cropLossForm.addEventListener("submit",(e)=>{

e.preventDefault();

const reportNumber =
Math.floor(Math.random()*9000)+1000;

document.getElementById("reportId")
.innerHTML =
`Reference ID: CLR-${reportNumber}`;

document
.getElementById("cropSuccessModal")
.classList.remove("hidden");

cropLossForm.reset();

document
.getElementById("damagePreview")
.classList.add("hidden");

});

}

function closeCropSuccessModal(){

document
.getElementById("cropSuccessModal")
.classList.add("hidden");

}

document.querySelectorAll(".assist-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Detailed information will be available soon.");

});

});

const waterRequestForm =
document.getElementById("waterRequestForm");

if(waterRequestForm){

waterRequestForm.addEventListener("submit",(e)=>{

e.preventDefault();

const requestId =
Math.floor(Math.random()*9000)+1000;

document.getElementById("waterRequestId")
.innerHTML =
`Request ID: WTR-${requestId}`;

document
.getElementById("waterSuccessModal")
.classList.remove("hidden");

waterRequestForm.reset();

});

}

function closeWaterSuccessModal(){

document
.getElementById("waterSuccessModal")
.classList.add("hidden");

}

function openWaterModal(name, phone, time){

document.getElementById("ownerName").innerHTML =
`👨‍🌾 Owner: ${name}`;

document.getElementById("ownerPhone").innerHTML =
`📞 Phone: ${phone}`;

document.getElementById("ownerTime").innerHTML =
`⏰ Available: ${time}`;

document.getElementById("waterModal")
.classList.remove("hidden");

}

function closeWaterModal(){

document.getElementById("waterModal")
.classList.add("hidden");

}

function searchMarketplaceProducts(){

const search =
document.getElementById("productSearch").value;

const category =
document.getElementById("categoryFilter").value;

const location =
document.getElementById("locationFilter").value;

alert(
`Searching:
${search}
${category}
${location}`
);

}

function openProductModal(name,price,location){

document.getElementById("productName").innerHTML =
`🌾 Product: ${name}`;

document.getElementById("productPrice").innerHTML =
`💰 Price: ${price}`;

document.getElementById("productLocation").innerHTML =
`📍 Location: ${location}`;

document.getElementById("productModal")
.classList.remove("hidden");

}

function closeProductModal(){

document.getElementById("productModal")
.classList.add("hidden");

}

function openWasteModal(name, quantity, location, price){

document.getElementById("wasteName").innerHTML =
`🌾 Product: ${name}`;

document.getElementById("wasteQuantity").innerHTML =
`📦 Quantity: ${quantity}`;

document.getElementById("wasteLocation").innerHTML =
`📍 Location: ${location}`;

document.getElementById("wastePrice").innerHTML =
`💰 Price: ${price}`;

document.getElementById("wasteModal")
.classList.remove("hidden");

}

function closeWasteModal(){

document.getElementById("wasteModal")
.classList.add("hidden");

}

function previewProductImage(event){

const preview =
document.getElementById("productPreview");

preview.src =
URL.createObjectURL(event.target.files[0]);

preview.classList.remove("hidden");

}

const productListingForm =
document.getElementById("productListingForm");

if(productListingForm){

productListingForm.addEventListener("submit",(e)=>{

e.preventDefault();

const listingNumber =
Math.floor(Math.random()*9000)+1000;

document.getElementById("listingId")
.innerHTML =
`Listing ID: MKT-${listingNumber}`;

document
.getElementById("productSuccessModal")
.classList.remove("hidden");

productListingForm.reset();

document
.getElementById("productPreview")
.classList.add("hidden");

});

}

function closeProductSuccessModal(){

document
.getElementById("productSuccessModal")
.classList.add("hidden");

}

function searchJobs(){

const job =
document.getElementById("jobSearch").value;

const category =
document.getElementById("jobCategory").value;

const location =
document.getElementById("jobLocation").value;

alert(
`Searching Jobs

Job: ${job}
Category: ${category}
Location: ${location}`
);

}

function openJobModal(job,wage,location){

document
.getElementById("jobModal")
.classList.remove("hidden");

}

function closeJobModal(){

document
.getElementById("jobModal")
.classList.add("hidden");

}

const jobApplyForm =
document.getElementById("jobApplyForm");

if(jobApplyForm){

jobApplyForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"✅ Job Application Submitted Successfully!"
);

closeJobModal();

jobApplyForm.reset();

});

}

function hireWorker(name){

document.getElementById("workerName")
.innerHTML =
`✅ Hiring request sent to ${name}`;

document.getElementById("workerModal")
.classList.remove("hidden");

}

function closeWorkerModal(){

document.getElementById("workerModal")
.classList.add("hidden");

}

const postJobForm =
document.getElementById("postJobForm");

if(postJobForm){

postJobForm.addEventListener("submit",(e)=>{

e.preventDefault();

const jobNumber =
Math.floor(Math.random()*9000)+1000;

document.getElementById("jobId")
.innerHTML =
`Job ID: JOB-${jobNumber}`;

document
.getElementById("jobSuccessModal")
.classList.remove("hidden");

postJobForm.reset();

});

}

function closeJobSuccessModal(){

document
.getElementById("jobSuccessModal")
.classList.add("hidden");

}

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("hidden");

});

}