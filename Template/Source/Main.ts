namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("FudgeStory template starting");

    export let transition = {
        spiral: {
            duration: 1,
            alpha: "Images/Transitions/023.png", 
            edge: 1
        }
    };

    export let sound = {
        // Themes
        // SFX
        outside: "Sounds/outside.wav" 
    };

    export let dataForSave = {
        nameProtagonist: ""
    };

    export let location = {
      oldStreet: {
        name: "Old_Street",
        background: "Images/Backgrounds/Old_Cafe.png"
        //foreground: ""
      }
    };

    export let characters = {
      narrator: {
        name: ""
      },
      protagonist: {
        name: ""
      },
      Ai: {
        name: "Ai",
        origin: ƒS.ORIGIN.BOTTOMCENTER,
        pose: {
          neutral: "Images/Character/Ai/girl1Neutral.png",
          angry: "Images/Character/Ai/girl1Angry.png", 
          happy: "Images/Character/Ai/girl1Happy.png", 
          shocked: "Images/Character/Ai/girl1Shocked.png", 
          sad: "Images/Character/Ai/girl1Sad.png" 
        }
      }

    };

    window.addEventListener("load", start);
    function start(_event: Event): void {
        let scenes: ƒS.Scenes = [
          { scene: firstScene, name: "First Scene" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
