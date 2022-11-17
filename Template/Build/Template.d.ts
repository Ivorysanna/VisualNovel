declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
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
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                angry: string;
                happy: string;
                shocked: string;
                sad: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
    function animation(): fS.AnimationDefinition;
}
declare namespace Template {
    function firstScene(): fS.SceneReturn;
}
declare namespace Template {
    function secondScene(): fS.SceneReturn;
}
