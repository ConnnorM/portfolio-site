// PROJECT 1 GALLERY
const P1_PHOTOS = [
    "https://i.imgur.com/ot4IT9J_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/gagxGvx_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/AbgVzJw_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/ULSR6BX_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
  ];
  
  const P1_CAPTIONS = [
    "Points VS Ranking",
    "Classifying Teams",
    "Performance Clustering",
    "Predictor Weights"
  ];
  
  const P1_TITLES = [
    "Points versus Ranking Trendline Graph",
    "Graph Determining the Ranking Categories of Teams",
    "Clustering Teams Based on Teleoperated Performance Graph",
    "Plot of the Weights of Predictors in Linear Regression"
  ];
  
  let index1 = 0;
  document.querySelector(".p1Photo").src = P1_PHOTOS[index1];
  document.querySelector(".p1Photo").title = P1_TITLES[index1];
  document.querySelector(".p1Photo").alt = P1_TITLES[index1];
  document.querySelector("#p1a").innerText = P1_CAPTIONS[index1];
  
  function goToPrevP1() {
    index1 -= 1;
    document.querySelector("#NextP1").disabled = false;
    if (index1 === 0) {
      document.querySelector("#PrevP1").disabled = true;
    }
    document.querySelector(".p1Photo").src = P1_PHOTOS[index1];
    document.querySelector(".p1Photo").title = P1_TITLES[index1];
    document.querySelector(".p1Photo").alt = P1_TITLES[index1];
    document.querySelector("#p1a").innerText = P1_CAPTIONS[index1];
  }
  
  document.querySelector("#PrevP1").addEventListener("click", goToPrevP1);
  
  function goToNextP1() {
    index1 += 1;
    document.querySelector("#PrevP1").disabled = false;
    if (index1 === P1_PHOTOS.length - 1) {
      document.querySelector("#NextP1").disabled = true;
    }
    document.querySelector(".p1Photo").src = P1_PHOTOS[index1];
    document.querySelector(".p1Photo").title = P1_TITLES[index1];
    document.querySelector(".p1Photo").alt = P1_TITLES[index1];
    document.querySelector("#p1a").innerText = P1_CAPTIONS[index1];
  }
  
  document.querySelector("#NextP1").addEventListener("click", goToNextP1);
  
  //PROJECT 3 GALLERY
  const P3_PHOTOS = [
    "https://i.imgur.com/ahpxRgv_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/009MqfY_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/bJgsN6b_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
  ];
  
  const P3_CAPTIONS = [
    "The Full Costume",
    "Modeling the Costume",
    "Modeling the Costume"
  ];
  
  const P3_TITLES = [
    "3D Printed Star Wars Costume Photo",
    "Modeling the Costume Photo 1",
    "Modeling the Costume Photo 2"
  ];
  
  let index3 = 0;
  document.querySelector(".p3Photo").src = P3_PHOTOS[index3];
  document.querySelector(".p3Photo").title = P3_TITLES[index3];
  document.querySelector(".p3Photo").alt = P3_TITLES[index3];
  document.querySelector("#p3a").innerText = P3_CAPTIONS[index3];
  
  function goToPrevP3() {
    index3 -= 1;
    document.querySelector("#NextP3").disabled = false;
    if (index3 === 0) {
      document.querySelector("#PrevP3").disabled = true;
    }
    document.querySelector(".p3Photo").src = P3_PHOTOS[index3];
    document.querySelector(".p3Photo").title = P3_TITLES[index3];
    document.querySelector(".p3Photo").alt = P3_TITLES[index3];
    document.querySelector("#p3a").innerText = P3_CAPTIONS[index3];
  }
  
  document.querySelector("#PrevP3").addEventListener("click", goToPrevP3);
  
  function goToNextP3() {
    index3 += 1;
    document.querySelector("#PrevP3").disabled = false;
    if (index3 === P3_PHOTOS.length - 1) {
      document.querySelector("#NextP3").disabled = true;
    }
    document.querySelector(".p3Photo").src = P3_PHOTOS[index3];
    document.querySelector(".p3Photo").title = P3_TITLES[index3];
    document.querySelector(".p3Photo").alt = P3_TITLES[index3];
    document.querySelector("#p3a").innerText = P3_CAPTIONS[index3];
  }
  
  document.querySelector("#NextP3").addEventListener("click", goToNextP3);
  
  //PROJECT 4 GALLERY
  const P4_PHOTOS = [
    "https://i.imgur.com/Y0WEfw4_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/VxSYd48_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/IiTa929_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
  ];
  
  const P4_CAPTIONS = [
    "Finished 3D Model",
    "Fully Assembled Monado",
    "Wielding the Mini Blade"
  ];
  
  const P4_TITLES = [
    "Fusion 360 Monado Model Photo",
    "Fully Built Monado Photo",
    "The Goose Wields the Miniature Monado Photo"
  ];
  
  let index4 = 0;
  document.querySelector(".p4Photo").src = P4_PHOTOS[index4];
  document.querySelector(".p4Photo").title = P4_TITLES[index4];
  document.querySelector(".p4Photo").alt = P4_TITLES[index4];
  document.querySelector("#p4a").innerText = P4_CAPTIONS[index4];
  
  function goToPrevP4() {
    index4 -= 1;
    document.querySelector("#NextP4").disabled = false;
    if (index4 === 0) {
      document.querySelector("#PrevP4").disabled = true;
    }
    document.querySelector(".p4Photo").src = P4_PHOTOS[index4];
    document.querySelector(".p4Photo").title = P4_TITLES[index4];
    document.querySelector(".p4Photo").alt = P4_TITLES[index4];
    document.querySelector("#p4a").innerText = P4_CAPTIONS[index4];
  }
  
  document.querySelector("#PrevP4").addEventListener("click", goToPrevP4);
  
  function goToNextP4() {
    index4 += 1;
    document.querySelector("#PrevP4").disabled = false;
    if (index4 === P4_PHOTOS.length - 1) {
      document.querySelector("#NextP4").disabled = true;
    }
    document.querySelector(".p4Photo").src = P4_PHOTOS[index4];
    document.querySelector(".p4Photo").title = P4_TITLES[index4];
    document.querySelector(".p4Photo").alt = P4_TITLES[index4];
    document.querySelector("#p4a").innerText = P4_CAPTIONS[index4];
  }
  
  document.querySelector("#NextP4").addEventListener("click", goToNextP4);
  