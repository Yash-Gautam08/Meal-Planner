/* ===== SIMPLE & STABLE app.js ===== */

const RECIPES = [
  {
    id: "banana-oats",
    title: "Banana Oats",
    desc: "Healthy breakfast oats with banana.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvF6HVOAGkFAywJGuyGqnMEz3Ilb7J3f0_dA&s",
    ingredients: ["Oats", "Banana", "Milk"],
    steps: ["Boil oats", "Add banana", "Serve warm"]
  },
  {
    id: "veg-dal",
    title: "Vegetable Dal",
    desc: "Simple Indian dal recipe.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSfj6AtEn_nFOX3ink98V9wG46GAZZLvLRg&s",
    ingredients: ["Lentils", "Onion", "Spices"],
    steps: ["Boil dal", "Prepare tadka", "Mix & cook"]
  },
  {
    id: "veg-salad",
    title: "Fresh Veg Salad",
    desc: "Light and fresh salad.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OwioW-uxh12CRIqosVTMWBN_mdHhF1ZnJQ&s",
    ingredients: ["Cucumber", "Tomato", "Lettuce"],
    steps: ["Chop veggies", "Mix", "Serve"]
  }
];

// render cards
function renderRecipes() {
  const grid = document.getElementById("recipeGrid");
  if (!grid) return;

  grid.innerHTML = "";

  RECIPES.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb">
        <img src="${r.image}" alt="${r.title}">
      </div>
      <div class="content">
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <button class="btn view" data-id="${r.id}">View Recipe</button>
      </div>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll(".btn.view").forEach(btn => {
    btn.addEventListener("click", e => {
      openRecipe(e.target.dataset.id);
    });
  });
}

// open modal
function openRecipe(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;

  document.getElementById("modalImg").src = r.image;
  document.getElementById("modalTitle").innerText = r.title;
  document.getElementById("modalDesc").innerText = r.desc;

  const ing = document.getElementById("modalIngredients");
  ing.innerHTML = "";
  r.ingredients.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    ing.appendChild(li);
  });

  const steps = document.getElementById("modalSteps");
  steps.innerHTML = "";
  r.steps.forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    steps.appendChild(li);
  });

  document.getElementById("recipeModal").classList.add("show");
}

// close modal
document.getElementById("modalClose")?.addEventListener("click", () => {
  document.getElementById("recipeModal").classList.remove("show");
});

// boot
document.addEventListener("DOMContentLoaded", renderRecipes);
