"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        spiral: {
            duration: 1,
            alpha: "Images/Transitions/023.png",
            edge: 1
        }
    };
    Template.sound = {
        // Themes
        // SFX
        outside: "Sounds/outside.wav"
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    Template.location = {
        oldStreet: {
            name: "Old_Street",
            background: "Images/Backgrounds/Old_Cafe.png"
            //foreground: ""
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Ai: {
            name: "Ai",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
    function start(_event) {
        let scenes = [
            { scene: Template.firstScene, name: "First Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("First Scene starting");
        // let text = {
        //     Ai: {
        //         T0001: "Hallo",
        //         T0002: "Anderer Text",
        //         T0003: "Text Nummer 3",
        //     },
        // };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.location.oldStreet);
        await Template.ƒS.Character.show(Template.characters.Ai, Template.characters.Ai.pose.neutral, Template.ƒS.positions.bottomcenter);
        //await ƒS.Character.show(characters.Ai, characters.Ai.pose.neutral, ƒS.positionPercent(60, 120));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Ai, "Text in einer Zeile");
        await Template.ƒS.Speech.tell(Template.characters.Ai, "Zweiter Text in einer Zeile");
        let pickedYes;
        let pickedNo;
        let pickedMaybe;
        let pickedOk;
        let dialogue = {
            iSayYes: "Ja",
            iSayOk: "Okay.",
            iSayNo: "Nein",
            iSayMaybe: "Vielleicht"
        };
        //Muss um eine do-while Schleife
        if (pickedMaybe) {
            //Möglichkeit zum löschen von Auswahlmöglichkeiten
            delete dialogue.iSayMaybe;
        }
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                //Continue path here
                console.log("test");
                await Template.ƒS.Speech.tell(Template.characters.Ai, "Ich sage JA!");
                break;
            case dialogue.iSayOk:
                //Continue path here
                await Template.ƒS.Speech.tell(Template.characters.Ai, "Ich sage OK!");
                break;
            case dialogue.iSayNo:
                //Continue path here
                await Template.ƒS.Speech.tell(Template.characters.Ai, "Ich sage Nein!");
                break;
            case dialogue.iSayMaybe:
                //Continue path here
                await Template.ƒS.Speech.tell(Template.characters.Ai, "Ich sage Vielleicht!");
                break;
        }
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map