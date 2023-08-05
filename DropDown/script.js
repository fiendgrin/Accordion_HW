const myData = [
  {
    id: 1,
    h4Text: "Saves time",
    pText: `This reason might be the most obvious, but it's a clear benefit of an FAQ page. Not only does the FAQ page save customers time, but it also saves employees time as well. Having an FAQ page ensures customers don't have to sit on the phone for hours waiting for simple answers, and employees don't have to individually answer all questions. Companies dedicate a large portion of their budgets to customer service teams. When these teams don't have to focus on answering the frequently asked questions, they can serve other customer issues in a more timely manner.`,
  },
  {
    id: 2,
    h4Text: "Earns trust ",
    pText: `Information is available at the click of a button, but as we all know, information is not always true. Because of this, customers are more skeptical than ever before. They hunt for products by sifting through reviews, looking at the product on multiple websites, and doing price checking across the internet. 

      If your brand seems to understand the customer's pain point and address it through a seamless user experience, the shopper will become a loyal customer. 
      
      One of the most common pain points is when shoppers are wondering something about a product or service and there's no information addressing that question. The customers think to themselves, “I can't be the only person who's wondering this,” yet the answer is nowhere to be found. This is a surefire way to guarantee they close the window and go to your competitor's website. 
      
      By creating a comprehensive FAQ page, you can assure customers get the answer they need and keep shopping on your site. This reason might be the most obvious, but it's a clear benefit of an FAQ page. Not only does the FAQ page save customers time, but it also saves employees time as well. Having an FAQ page ensures customers don't have to sit on the phone for hours waiting for simple answers, and employees don't have to individually answer all questions. Companies dedicate a large portion of their budgets to customer service teams. When these teams don't have to focus on answering the frequently asked questions, they can serve other customer issues in a more timely manner.`,
  },
  {
    id: 3,
    h4Text: "Provides new insights",
    pText: `It's difficult to get into the head of a shopper. Some buy on impulse, and others buy after thorough research. By tracking the clicks on your FAQ page, you can gather insights about your product or service that you didn't know before. You can then inform your product team of these insights. From there, the product team can make changes to improve the product or experience. 

      For example, if a dog collar company's most clicked-on FAQ is, “How do I make sure my dog doesn't slip out of the collar?” you'll know that people are having issues or concerns about the collar staying on. The product team might have to create a no-slip feature to ease this fear among potential customers.`,
  },
  {
    id: 4,
    h4Text: "Drives internal page views",
    pText: `If you want your FAQ to be extremely thorough, which it should be, you can link to resources within your FAQ for your customers to find out more information. Whether you link to a blog that goes into more detail or a product page, this content helps the shoppers get the full story before making a purchase. 

      Having all of these resources also shows that you care about your customer's happiness, and it will make them stay on pages longer and explore other pages that they may have missed otherwise.`,
  },
];

function questionMaker(id, h4Text, pText) {
  return `<div id="${id}" class="drop">
    <div class="top">
      <h4>${id}. ${h4Text}</h4>
      <button id="${id}" class="myButton"><img id="${id}" class="plus" src="./icons/plus.svg" alt="" /><img 
        id="${id}"
        class="minus"
        src="./icons/minus.svg"
        alt=""
      /></button>
      
    </div>
    <div class="bottom 
    ">
      <p>
      ${pText}
      </p>
    </div>
  </div>`;
}

const drops = document.querySelector(".drops");

for (const data of myData) {
  drops.innerHTML += questionMaker(data.id, data.h4Text, data.pText);
}

const myButtons = document.querySelectorAll(".myButton");

myButtons.forEach((myButton) => {
  myButton.addEventListener("click", () => {
    if (myButton.lastElementChild.style.display !== "initial") {
      myButton.parentElement.nextElementSibling.classList.add("active");
      myButton.firstElementChild.style.display = "none";
      myButton.lastElementChild.style.display = "initial";
    } else {
      myButton.parentElement.nextElementSibling.classList.remove("active");
      myButton.firstElementChild.style.display = "initial";
      myButton.lastElementChild.style.display = "none";
    }
  });
});
