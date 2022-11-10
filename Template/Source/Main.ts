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
        outside: "Sounds/outside.wav",
    };

    export let location = {
        oldStreet: {
            name: "Old_Street",
            background: "Images/Backgrounds/Old_Cafe.png"
            //foreground: ""
        },
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
            },
        }
    };

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)
    export let dataForSave = {
        nameProtagonist: ""
    };

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)

    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };

    let gameMenu: ƒS.Menu;
    //open = true, closed = false
    let menuIsOpen: boolean = true;

    async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }

    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPres);
    async function hndKeyPres(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.S:
                console.log("Save...");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.L:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                } else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }

    window.addEventListener("load", start);
    function start(_event: Event): void {
        gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        /*** SCENE HIERARCHY ***/
        let scenes: ƒS.Scenes = [{ scene: firstScene, name: "First Scene" }];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
