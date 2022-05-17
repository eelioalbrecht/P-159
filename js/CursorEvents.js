AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      "famous-five": {
        banner_url: "./assets/famous-five.jpg",
        title: "Famous Five: The Series",
        released_year: "1942",
        description:
          "The Famous Five is a series of children's adventure novels and short stories written by English author Enid Blyton. The first book, Five on a Treasure Island, was published in 1942. The novels feature the adventures of a group of young children – Julian, Dick, Anne, Georgina and her dog Timmy.",
      },
      "winning": {
        banner_url: "./assets/winning.jpg",
        title: "The Habbit of Winning",
        released_year: "2011",
        description:
          "The Habit of Winning is a book encourages people to want to win. Everybody can be a winner if they want, but that would  mean that they should not give up. One need to change the way they think, live and work.",
      },
      "jykll-hyde": {
        banner_url: "./assets/jykll-hyde.jpg",
        title: "Strange Case of Dr. Jykll and Mr. Hyde",
        released_year: "1886",
        description:
          "Strange Case of Dr. Jykll and Mr. Hyde is a Gothic novella by Scottish author Robert Louis Stevenson, first published in 1886. The work is also known as The Strange Case of Jekyll Hyde, Dr. Jekyll and Mr. Hyde, or simply Jekyll and Hyde.",
      },
      "daffodils": {
        banner_url: "./assets/daffodils.jpg",
        title: "Daffodils",
        released_year: "1807",
        description:
          "'I Wandered Lonely as a Cloud' is a lyric poem by William Wordsworth. It is one of the most popular poems of Wordsworth. The poem was inspired by an eent on 15 April 1802 in which William and his sister Dorothy came across a 'long belt' of daffodils while wandering in the forest.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
