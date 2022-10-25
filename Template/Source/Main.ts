namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("FudgeStory template starting");

    export let transition = {
        spiral: {
            duration: 1,
            alpha: "Template/Images/Transitions/023.png", //relativen Pfad benutzen
            edge: 1
        }
    };

    export let sound = {
        // Themes
        // SFX
        outside: "Template/Sounds/outside.wav" 
    };

    export let dataForSave = {
        nameProtagonist: ""
    };

    export let location = {
      beachDay: {
        name: "Old_Street",
        background: "Template/Images/Backgrounds/Old_Street.png"
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
      ai: {
        name: "Ai",
        origin: ƒS.ORIGIN.BOTTOMCENTER,
        pose: {
          neutral: "Template/Images/Character/Ai/girl1Neutral.png",
          angry: "Template/Images/Character/Ai/girl1Angry.png", 
          happy: "Template/Images/Character/Ai/girl1Happy.png", 
          shocked: "Template/Images/Character/Ai/girl1Shocked.png", 
          sad: "Template/Images/Character/Ai/girl1Sad.png" 
        }
      }

    };

    window.addEventListener("load", start);
    function start(_event: Event): void {
        let scenes: ƒS.Scenes = [{ scene: Scene, name: "Scene" }];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
