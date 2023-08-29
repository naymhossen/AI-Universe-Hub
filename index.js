const loadAiApps = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const aiData = await res.json();
    const ai = aiData.data.tools;
    // console.log(ai);
    displayAiFeatures(ai)
}

const displayAiFeatures = aiApps => {
    // console.log(aiApps);

    const aiFeaturesContainer = document.getElementById('ai-features-container');
    aiApps.forEach(allAi => {
        console.log(allAi);
        /* create a  div */
        const aiCardDiv = document.createElement('div');
        aiCardDiv.classList = `card bg-base-100 shadow-xl`;
        aiCardDiv.innerHTML = `
        <figure class="px-10 pt-10">
              <img src=" ${allAi.image} " alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-left text-left">
              
              <div class="pb-3">
                <h1 class="text-3xl font-semibold">Features</h1>
                <p>1. Natural language processing</p>
                <p>2. Contextual understanding</p>
                <p>3. Text generation</p>
              </div>

              <div class="border border-b-2"></div>

              <div class="pt-3 flex justify-between items-center">
              <div>
              <h2 class="card-title"> ${allAi.name} </h2>
              <p> ${allAi.published_in} </p>
              </div>
              <div>
              <button class="btn text-red-600"> <i class="fa-solid fa-arrow-right"></i> </button>
              </div>
              </div>
            </div>
            `;
            aiFeaturesContainer.appendChild(aiCardDiv);
    })
}

loadAiApps()