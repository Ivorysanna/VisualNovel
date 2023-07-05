namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;

    console.log("FudgeStory template starting");

    //*** TRANSITIONS ***
    export let transition = {
        block: {
            duration: 1.5,
            alpha: "Images/Transitions/block.png",
            edge: 1,
        },
        circle: {
            duration: 1.5,
            alpha: "Images/Transitions/cw-top.jpg",
            edge: 1,
        },
        wipeLeft: {
            duration: 1.5,
            alpha: "Images/Transitions/wipeLeft.jpg",
            edge: 1,
        },
        wipeRight: {
            duration: 1,
            alpha: "Images/Transitions/wipeRight.png",
            edge: 1,
        },
    };

    export let data = {
        Protagonist: {
            name: "Protagonist",
        },
        score: {
            a: 0,
        },
        ended: false,
        correct: false,
    };

    //*** SOUND ***
    export let sound = {
        // Themes
        // SFX
        outside: "Sounds/outside.wav",
        alarmClock: "Sounds/alarmClock.wav",
        book: "Sounds/book.wav",
        breakChatter: "Sounds/breakChatter.mp3",
        carHorn: "Sounds/carHorn.mp3",
        cityNoise: "Sounds/cityNoise.mp3",
        // classWhispering: "Sounds/classWhispering.mp3",
        cloth: "Sounds/cloths.wav",
        constructionSite: "Sounds/constructionSite.mp3",
        intenseSound: "Sounds/intenseSound.wav",
        librarySound: "Sounds/librarySound.mp3",
        neckCracking: "Sounds/neckCracking.mp3",
        packingBag: "Sounds/packingBag.mp3",
        schoolBell: "Sounds/schoolBell.mp3",
        classTalking: "Sounds/classTalking.mp3",
        carCrash: "Sounds/carCrash.wav",
        metalFalling: "Sounds/metalFalling.mp3",
        fallingStairs: "Sounds/fallingStairs.wav",
        fallingObjects: "Sounds/fallingObjects.mp3",
        cutThrowFlesh: "Sounds/cutFleshSound.mp3",
        openCabin: "Sounds/openCabin.wav",
    };

    //*** BACKGROUNDS ***
    export let location = {
        alley: {
            name: "Alley",
            background: "Images/Backgrounds/alley.png",
            //foreground: ""
        },
        bedroom: {
            name: "Bedroom",
            background: "Images/Backgrounds/bedroom.png",
        },
        classroom: {
            name: "Classroom",
            background: "Images/Backgrounds/classroom.png",
        },
        library: {
            name: "Library",
            background: "Images/Backgrounds/library.png",
        },
        steps: {
            name: "Steps",
            background: "Images/Backgrounds/steps.png",
        },
        street: {
            name: "Street",
            background: "Images/Backgrounds/street.png",
        },
        uni: {
            name: "Uni",
            background: "Images/Backgrounds/uni.png",
        },
        darkBackground: {
            name: "DarkBackground",
            background: "Images/Backgrounds/darkbackground.png",
        },
        streetCity: {
            name: "Streetcity",
            background: "Images/Backgrounds/streetCity.png",
        },
        constructionSite: {
            name: "ConstructionSite",
            background: "Images/Backgrounds/constructionSite.png",
        },
        bridge: {
            name: "Bridge",
            background: "Images/Backgrounds/bridge.png",
        },
    };

    //*** CHARACTERS ***
    export let characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Rika: {
            name: "Rika Satō",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Rika/rika_neutral.png",
                happy: "Images/Character/Rika/rika_happy.png",
                angry: "Images/Character/Rika/rika_angry.png",
                sad: "Images/Character/Rika/rika_sad.png",
            },
        },
        RikaMother: {
            name: "Rikas Mutter",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png",
            },
        },
        Sagi: {
            name: "Sagi Aoki",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sagi/sagi_neutral.png",
                happy: "Images/Character/Sagi/sagi_happy.png",
                angry: "Images/Character/Sagi/sagi_angry.png",
                sad: "Images/Character/Sagi/sagi_happy.png",
                insane: "Images/Character/Rika/rika_insane.png",
            },
        },
        Sho: {
            name: "Shō Rai",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sho/sho_neutral.png",
                happy: "Images/Character/Sho/sho_happy.png",
                angry: "Images/Character/Sho/sho_angry.png",
                sad: "Images/Character/Sho/sho_sad.png",
            },
        },
        Teacher: {
            name: "Lehrerin",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Teacher/teacher_neutral.png",
            },
        },
    };

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***
    export let dataForSave = {
        nameProtagonist: "",
        shoScore: 0,
    };

    // *** ITEMS ***
    //Static = true Item  wird nicht konsumiert
    export let items = {
        pictureStreet: {
            name: "Straßenbild",
            image: "Images/Backgrounds/streetCity.png",
            description: "Ein Bild von der Straße",
            static: true,
        },
        pictureConstructionSite: {
            name: "Baustellenbild",
            image: "Images/Backgrounds/constructionSite.png",
            description: "Ein Bild von der Baustelle",
            static: true,
        },
        pictureSteps: {
            name: "Stufenbild",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von Stufen",
            static: true,
        },
        pictureClassroom: {
            name: "Klassenzimmerbild",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von unserem Klassenzimmer",
            static: true,
        },
        pictureBridge: {
            name: "Brückenbild",
            image: "Images/Backgrounds/bridge.png",
            description: "Ein Bild von der Brücke",
            static: true,
        }
    };

    // *** CREDITS ***
    let credits: string[] = [
        "<b>Bilder:</b></br>\
        <i>Hintergrundbilder/Taschenuhr: Pixabay</i> </br>\
        <i>Animefilter: Animefilter.com</i>",
        "<b>Sounds:</b></br>\
        <i>Freesound.org und Youtube</i>",
        "<b>Storyinspiration: </b></br>\
        <i>Vocaloid Lied: Heat-Haze Days / カゲロウデイズ</i> </br>\ ",
    ];

    // *** ANIMATION ***
    export function leavingLeft(): fS.AnimationDefinition {
        return {
            start: { translation: fS.positionPercent(40, 100), color: fS.Color.CSS("", 1) },
            end: { translation: fS.positionPercent(20, 100), color: fS.Color.CSS("", 0) },
            duration: 3,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***

    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Speichern",
        load: "Laden",
        // close: "Schließen",
        credits: "Credits",
    };

    let gameMenu: fS.Menu;
    let shoBar: HTMLElement;
    //open = true, closed = false
    let menuIsOpen: boolean = false;

    async function btnFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await fS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await fS.Progress.load();
                break;
            // case inGameMenuButtons.close:
            //     gameMenu.close();
            //     menuIsOpen = false;
            //     break;
            case inGameMenuButtons.credits:
                let current: number = 0;
                let flip = { back: "Zurück", next: "Weiter", close: "X" };
                let choice: string;
                fS.Text.addClass("credits");
                do {
                    fS.Text.print(credits[current]);
                    choice = await fS.Menu.getInput(flip, "flip");
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            break;
                        case flip.next:
                            current = Math.min(credits.length - 1, current + 1);
                            break;
                    }
                } while (choice != flip.close);
                fS.Text.close();
                break;
            default:
        }
    }

    //***  Hide Button ***
    document.addEventListener(
        "DOMContentLoaded",
        () => {
            document.getElementById("ausleihbutton").addEventListener("click", () => {
                InterfaceHelper.toggleAusleihButton();
            });
        },
        false
    );

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
                    shoBar.classList.add("hidden");
                    gameMenu.close();
                    menuIsOpen = false;
                } else {
                    console.log("Open");
                    shoBar.classList.remove("hidden");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case f.KEYBOARD_CODE.I:
                await fS.Inventory.open();
                break;
            
        }
    }

    window.addEventListener("load", start);
    function start(_event: Event): void {
        shoBar = <HTMLElement>document.getElementById("shoBar");
        gameMenu = fS.Menu.create(inGameMenuButtons, btnFunctionalities, "gameMenuCSSClass");
        gameMenu.close();
        /*** SCENE HIERARCHY ***/
        fS.Speech.hide();
        let scenes: fS.Scenes = [
            // { id: "wakingUpFirstTime", scene: WakingUp, name: "Waking up" },
            // { id: "toSchoolFirstTime", scene: GoingToSchool, name: "Going to School firstTime" },
            { id: "inClassFirstTime", scene: InClass, name: "In Class for firstTime" },
            { id: "wakingUpCarCrash", scene: WakingUp, name: "Waking up Carcrash" },
            { id: "toSchoolAfterCarCrash", scene: GoingToSchool, name: "Going to School after Carcrash" },
            { id: "inClassAfterCarCrash", scene: InClass, name: "In Class after Carcrash" },
            { id: "inClassAfterConstructionAccident", scene: WakingUp, name: "Waking up after Construction Site Accident" },
            { id: "toSchoolAfterConstructionAccident", scene: GoingToSchool, name: "Going to School after Construction Site Accident" },
            { id: "inClassAfterConstructionAccident", scene: InClass, name: "In Class AfterConstructionAccident" },
            { id: "wakingUpAfterSchoolAccident", scene: WakingUp, name: "Waking up after School Accident" },
            { id: "toSchoolAfterSchoolAccident", scene: GoingToSchool, name: "Going to School after School Accident" },
            { id: "inClassAfterSchoolAccident", scene: InClass, name: "In Class after School Accident" },
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = fS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        fS.Progress.go(scenes);
    }
}
