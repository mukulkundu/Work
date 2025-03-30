const data = [
    {
        id: "1",
        question: "What are accordion components?",
        answer:
            "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
    },
    {
        id: "2",
        question: "What are they used for?",
        answer:
            "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
    },
    {
        id: "3",
        question: "Accordion as a musical instrument",
        answer:
            "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
    },
    {
        id: "4",
        question: "Can I create an accordion component with a different framework?",
        answer:
            "Yes of course, it is very possible to create an accordion component with another framework."
    },
];


const accordionWrapper = document.querySelector('.accordion');



function createAccordionData() {
    accordionWrapper.innerHTML = data.map(dataItem => `<div class="accordion-item mx-4 p-4 w-[100%]">
    <div class="accordion-title flex justify-between m-4 bg-[#2E2E2E] rounded-md px-4 py-2  hover:cursor-pointer">
        <h2>${dataItem.question}</h2>
        <div class="flex items-center"><i class="fa-solid fa-arrow-down"></i></div>
    </div>
    <div class="accordion-content hidden text-left m-4 bg-[#2E2E2E] rounded-md px-4 py-2">
        <article>${dataItem.answer}</article>
    </div>
</div>`).join("")
}

createAccordionData();

const getAccordionTitles = document.querySelectorAll('.accordion-title')

getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (e) => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active');
        }
        else {
            let getAlreadyActiveClasses = document.querySelectorAll('.active');

            getAlreadyActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active');

            })

            currentItem.classList.add('active');
        }
    })
})
