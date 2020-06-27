var app = new Vue({
  el: "#app",
  data() {
    return {
      currentBreadSelection: "wheat",
      currentProteinSelection: "turkey",
      currentCheeseSelection: "none",
      currentCondimentSelection: "mayonnaise",
      viggieSelection: [],

      loaves: [
        { id: "sourdough", value: "sourdough", label: "Sourdough" },
        { id: "wheat", value: "wheat", label: "Wheat" },
        { id: "gluten-free", value: "gluten-free", label: "Gluten-Free" },
      ],
      proteins: [
        { id: "ham", value: "ham", label: "Ham" },
        { id: "turkey", value: "turkey", label: "Turkey" },
        { id: "black-bean", value: "black-bean", label: "Black-Bean" },
      ],
      cheese: [
        { id: "none", value: "none", label: "None" },
        { id: "cheddar", value: "cheddar", label: "Cheddar" },
        { id: "swiss", value: "swiss", label: "Swiss" },
      ],
      veggies: [
        { id: "lettuce", value: "lettuce", label: "Lettuce" },
        { id: "tomato", value: "tomato", label: "Tomato" },
        { id: "onion", value: "onion", label: "Onion" },
      ],
      condiments: [
        { id: "mayonnaise", value: "mayonnaise", label: "Mayonnaise" },
        { id: "ketchup", value: "ketchup", label: "Ketchup" },
        { id: "mustard", value: "mustard", label: "Mastard" },
      ],
    };
  },
  methods: {
    chooseBread(event) {
      const value = event.target.value;
      //TODO change current bread selection to this value
      this.currentBreadSelection = value;
    },
    chooseProtein(event) {
      const value = event.target.value;
      //TODO change current protein selection to this value
      this.currentProteinSelection = value;
    },
    chooseCheese(event) {
      const value = event.target.value;
      //TODO change current Cheese selection to this value
      this.currentCheeseSelection = value;
    },
    chooseCondiments(event) {
      const value = event.target.value;
      //TODO change current Condiments selection to this value
      this.currentCondimentSelection = value;
    },
    updateViggieSelection(event) {
      if (this.viggieSelection.has(event.target.value)) {
        this.viggieSelection.delete(event.target.value);
      } else {
        this.viggieSelection.set(
          event.target.value,
          this.veggies.find((v) => v.value === event.target.value)
        );
      }
    },
  },
});
