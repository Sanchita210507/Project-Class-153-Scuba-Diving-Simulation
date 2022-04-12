AFRAME.registerComponent("driver_movement", {
    schema: {
      speedOfRoation: { type: "number", default: 0 },
      speedOfbend: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        this.data.speedOfRoation = this.el.getAttribute("rotation");      
        this.data.speedOfbend = this.el.getAttribute("position");
        var diverRotation = this.data.speedOfRoation;      
        var diverPosition = this.data.speedOfbend;
  
        if (e.key === "ArrowRight") {
          if (diverRotation.x < 10) {
            diverRotation.x += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
            diverPosition.y += 0.05;
            this.el.setAttribute("position", diverPosition);
  
        }
        if (e.key === "ArrowLeft") {
          if (diverRotation.x > -10) {
            diverRotation.x -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
            diverPosition.y -= 0.05;
            this.el.setAttribute("position", diverPosition);
        }
        if (e.key === "ArrowUp") {
          if (diverRotation.z < 15) {
            diverRotation.z += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
            diverPosition.x += 0.05;
            this.el.setAttribute("position", diverPosition);
        }
        if (e.key === "ArrowDown") {
          if (diverRotation.z > -10) {
            diverRotation.z -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
            diverPosition.x -= 0.05;
            this.el.setAttribute("position", diverPosition);
        }
        if (e.key === "a") {
          if (diverRotation.z > -10) {
            diverRotation.z -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
            diverPosition.x -= 0.05;
            this.el.setAttribute("position", diverPosition);
        
        }
        if (e.key === "ArrowDown") {
          diverPosition.z += 0.05;
          this.el.setAttribute("position", diverPosition);
        }
        if (e.key === "ArrowUp") {
          diverPosition.z -= 0.05;
          this.el.setAttribute("position", diverPosition);
        }
      });
    }
  });