declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        spiral: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        outside: string;
    };
    let dataForSave: {
        nameProtagonist: string;
    };
    let location: {
        oldStreet: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        Ai: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                angry: string;
                happy: string;
                shocked: string;
                sad: string;
            };
        };
    };
}
declare namespace Template {
    function firstScene(): ƒS.SceneReturn;
}
