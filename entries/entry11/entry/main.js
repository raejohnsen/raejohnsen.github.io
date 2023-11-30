function paused() {
    console.log("Scroll paused");
      }
      
      let wrapper = document.querySelector(".wrapper");
      wrapper.addEventListener("click", paused());
    

    
    function paused() {
      wrapper.classList.toggle("pause");
    }