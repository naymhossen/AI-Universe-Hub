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

    
// const seeMoreBtnContainer = document.getElementById('see-more-btn-container');
// if(ai.length > 6 && !isShowAll)

  // ai = ai.slice(0, 6);

    aiApps.forEach(allAi => {
        // console.log(allAi);
        /* create a  div */
        const aiCardDiv = document.createElement('div');
        aiCardDiv.classList = `card bg-gray-200 shadow-xl`;
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

              <div class="border border-b-2 border-black"></div>

              <div class="pt-3 flex justify-between items-center">
              <div>
              <h2 class="card-title"> ${allAi.name} </h2>
              <p> <i class="fa-regular fa-calendar-days"></i> ${allAi.published_in} </p>
              </div>
              <div>
              <button onclick="showAiFeatures('${allAi.id}');
              ai_features_modal.showModal()" class="btn text-red-600"> <i class="fa-solid fa-arrow-right"></i> </button>
              </div>
              </div>
            </div>
            `;
            aiFeaturesContainer.appendChild(aiCardDiv);
    })
}

const showAiFeatures = async(id) => {
  // console.log('See More', id)

  const response = await window.fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  const aiDAta = await response.json();
  const mainAiData = aiDAta.data;
  console.log(mainAiData);

  /* map loop usg in array data */

  mainAiData.pricing.map(price => price)

  const formattedApis = mainAiData.integrations.filter(social => social);
  console.log(formattedApis);

  const displayAiModal = document.getElementById('display-ai-modal');
  displayAiModal.innerHTML = `
  <div  class=" border border-orange-300 bg-gray-200  rounded-xl p-5">
      <!-- ai features container -->
      <div>
        <h1 class="text-3xl font-semibold"> ${mainAiData.description} </h1>
        <div class="grid grid-cols-3 gap-5 text-center mt-8">
          <div class=" bg-white text-green-400 rounded-xl">
          ${mainAiData.pricing[0]?.price}
          </div>
          <div class=" bg-white text-orange-400 text-center rounded-xl">
          ${mainAiData.pricing[1]?.price}
          </div>
          <div class=" bg-white text-red-400 rounded-xl">
          ${mainAiData.pricing[2]?.price}
          </div>
        </div>

        <!-- features -->
        <div class="grid grid-cols-2 gap-3 mt-8">
          <div>
            <p class="text-3xl font-semibold"> Feature </p>
            <div class="mt-4 ">
            <li>${mainAiData.features[1].feature_name}</li>
            <li>${mainAiData.features[2].feature_name}</li>
            <li>${mainAiData.features[3].feature_name}</li>
            </div>
          </div>
          <div>
            <p class="text-3xl font-semibold">Integrations</p>
            <div class="mt-4">
            <li>${formattedApis[0]}</li>
            <li>${formattedApis[1]}</li>
            <li>${formattedApis[2]}</li>
            </div>
          </div>
        </div>
      </div>
      <!-- ai image container -->
      <div>
        <img src="" alt="">
        <div class="text-center">
          <h1 class="text-2xl font-semibold"></h1>
          <p></p>
        </div>
      </div>
    </div>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  `;
}

loadAiApps()