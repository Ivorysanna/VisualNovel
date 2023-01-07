namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;

    console.log("FudgeStory template starting");

    //*** TRANSITIONS ***
    export let transition = {
        swirl: {
            duration: 1,
            alpha: "Images/Splash.png",
            edge: 1
        }
    };

    //*** SOUND ***
    export let sound = {
        // Themes
        // SFX
        outside: "Sounds/outside.wav",
        alarmClock: "Sounds/alarmClock.wav"
    };

    //*** BACKGROUNDS ***
    export let location = {
        alley: {
            name: "Alley",
            background: "Images/Backgrounds/alley.png"
            //foreground: ""
        },
        bedroom: {
            name: "Bedroom",
            background: "Images/Backgrounds/bedroom.png"
        },
        classroom: {
            name: "Classroom",
            background: "Images/Backgrounds/classroom.png"
        },
        library: {
            name: "Library",
            background: "Images/Backgrounds/library.png"
        },
        steps: {
            name: "Steps",
            background: "Images/Backgrounds/steps.png"
        },
        street: {
            name: "Street",
            background: "Images/Backgrounds/street.png"
        },
        uni: {
            name: "Uni",
            background: "Images/Backgrounds/uni.png"
        },
        darkBackground: {
            name: "DarkBackground",
            background: "Images/Backgrounds/darkbackground.png"
        },
        streetCity: {
            name: "Streetcity",
            background: "Images/Backgrounds/streetCity.png"
        },
        constructionSite: {
            name: "ConstructionSite",
            background: "Images/Backgrounds/constructionSite.png"
        },
        bridge: {
            name: "Bridge",
            background: "Images/Backgrounds/bridge.png"
        }
    };

    //*** CHARACTERS ***
    export let characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Rika: {
            name: "Rika Satō",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Rika/rika_neutral.png",
                happy: "Images/Character/Rika/rika_happy.png",
                angry: "Images/Character/Rika/rika_angry.png",
                sad: "Images/Character/Rika/rika_sad.png"
            }
        },
        RikaMother: {
            name: "Rikas Mutter",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png"
            }
        },
        Sagi: {
            name: "Sagi Aoki",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sagi/sagi_neutral.png",
                happy: "Images/Character/Sagi/sagi_happy.png",
                angry: "Images/Character/Sagi/sagi_angry.png",
                sad: "Images/Character/Sagi/sagi_happy.png",
                insane: "Images/Character/Rika/rika_insane.png"
            }
        },
        Sho: {
            name: "Shō Rai",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sho/sho_neutral.png",
                happy: "Images/Character/Sho/sho_happy.png",
                angry: "Images/Character/Sho/sho_angry.png",
                sad: "Images/Character/Sho/sho_sad.png"
            }
        },
        Teacher: {
            name: "Lehrerin",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Teacher/teacher_neutral.png"
            }
        }
    };

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)
    export let dataForSave = {
        nameProtagonist: ""
    };

    // *** ANIMATION ***
    export function animation(): fS.AnimationDefinition {
        return {
            start: { translation: fS.positions.bottomcenter, color: fS.Color.CSS("blue", 1) },
            end: { translation: fS.positions.bottomright, color: fS.Color.CSS("green", 0) },
            duration: 3,
            playmode: fS.ANIMATION_PLAYMODE.LOOP
        };
    }

    export function leavingLeft(): fS.AnimationDefinition {
        return {
            start: {translation: fS.positionPercent(40, 100), color: fS.Color.CSS("", 1) },
            end: {translation: fS.positionPercent(20, 100), color: fS.Color.CSS("", 0) },
            duration: 3,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)

    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };

    let gameMenu: fS.Menu;
    //open = true, closed = false
    let menuIsOpen: boolean = true;

    async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await fS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await fS.Progress.load();
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
            case f.KEYBOARD_CODE.S:
                console.log("Save...");
                await fS.Progress.save();
                break;
            case f.KEYBOARD_CODE.L:
                console.log("Load");
                await fS.Progress.load();
                break;
            case f.KEYBOARD_CODE.M:
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
        gameMenu = fS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        /*** SCENE HIERARCHY ***/
        fS.Speech.hide();
        let scenes: fS.Scenes = [
            // { id: "wakingUpFirstTime", scene: WakingUp, name: "Waking up" },
            // { id: "toSchoolFirstTime", scene: GoingToSchool, name: "Going to School firstTime"},
            // { id: "inClassFirstTime", scene: InClass, name: "In Class for firstTime"},
            // { id: "wakingUpCarCrash", scene: WakingUp, name: "Waking up Carcrash" },
            // { id: "toSchoolAfterCarCrash", scene: GoingToSchool, name: "Going to School after Carcrash"},
            // { id: "inClassAfterCarCrash", scene: InClass, name: "In Class after Carcrash"},
            { id: "inClassAfterConstructionAccident", scene: WakingUp, name: "Waking up after Construction Site Accident"},
            { id: "toSchoolAfterConstructionAccident", scene: GoingToSchool, name: "Going to School after Construction Site Accident"},
            { id: "inClassAfterConstructionAccident", scene: InClass, name: "In Class AfterConstructionAccident"},

        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = fS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        fS.Progress.go(scenes);
    }
}
