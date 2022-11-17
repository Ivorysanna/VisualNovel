"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
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
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Ai/girl1Neutral.png",
                angry: "Images/Character/Ai/girl1Angry.png",
                happy: "Images/Character/Ai/girl1Happy.png",
                shocked: "Images/Character/Ai/girl1Shocked.png",
                sad: "Images/Character/Ai/girl1Sad.png"
            }
        }
    };
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)
    Template.dataForSave = {
        nameProtagonist: ""
    };
    // *** ANIMATION ***
    function animation() {
        return {
            start: { translation: Template.fS.positions.bottomcenter, color: Template.fS.Color.CSS("blue", 1) },
            end: { translation: Template.fS.positions.bottomright, color: Template.fS.Color.CSS("green", 0) },
            duration: 3,
            playmode: Template.fS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.animation = animation;
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    //open = true, closed = false
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.fS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.fS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPres);
    async function hndKeyPres(_event) {
        switch (_event.code) {
            case Template.f.KEYBOARD_CODE.S:
                console.log("Save...");
                await Template.fS.Progress.save();
                break;
            case Template.f.KEYBOARD_CODE.L:
                console.log("Load");
                await Template.fS.Progress.load();
                break;
            case Template.f.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.fS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        /*** SCENE HIERARCHY ***/
        let scenes = [
            //{ scene: firstScene, name: "First Scene" },
            { scene: Template.secondScene, name: "Second Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.fS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.fS.Progress.go(scenes);
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
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.oldStreet);
        await Template.fS.Character.show(Template.characters.Ai, Template.characters.Ai.pose.neutral, Template.fS.positions.bottomcenter);
        //await ƒS.Character.show(characters.Ai, characters.Ai.pose.neutral, ƒS.positionPercent(60, 120));
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Ai, "Text in einer Zeile");
        await Template.fS.Speech.tell(Template.characters.Ai, "Zweiter Text in einer Zeile");
        let pickedYes;
        let pickedNo;
        let pickedMaybe;
        let pickedOk;
        let readEverything = false;
        let dialogue = {
            iSayYes: "Ja",
            iSayOk: "Okay.",
            iSayNo: "Nein",
            iSayMaybe: "Vielleicht"
        };
        //Muss um eine do-while Schleife
        do {
            if (pickedMaybe) {
                //Möglichkeit zum löschen von Auswahlmöglichkeiten
                delete dialogue.iSayMaybe;
            }
            else if (pickedNo) {
                delete dialogue.iSayNo;
            }
            else if (pickedOk) {
                delete dialogue.iSayOk;
            }
            else if (pickedYes) {
                delete dialogue.iSayYes;
            }
            let dialogueElement = await Template.fS.Menu.getInput(dialogue, "choicesCSSClass");
            switch (dialogueElement) {
                case dialogue.iSayYes:
                    //Continue path here
                    console.log("test");
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage JA!");
                    pickedYes = true;
                    break;
                case dialogue.iSayOk:
                    //Continue path here
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage OK!");
                    pickedOk = true;
                    break;
                case dialogue.iSayNo:
                    //Continue path here
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage Nein!");
                    pickedNo = true;
                    break;
                case dialogue.iSayMaybe:
                    //Continue path here
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage Vielleicht!");
                    pickedMaybe = true;
                    break;
            }
            if (pickedMaybe && pickedOk && pickedNo && pickedYes) {
                readEverything = true;
            }
        } while (readEverything == false);
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondScene() {
        console.log("Second Scene starting");
        await Template.fS.Character.show(Template.characters.Ai, Template.characters.Ai.pose.happy, Template.fS.positions.bottomcenter);
        Template.fS.update();
        await Template.fS.Character.animate(Template.characters.Ai, Template.characters.Ai.pose.happy, Template.animation());
    }
    Template.secondScene = secondScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map