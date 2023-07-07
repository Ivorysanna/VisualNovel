declare namespace YesterdayGame {
    class Choices {
        static livingHereChoice(): Promise<void>;
        static livingWhereChoice(): Promise<void>;
        static goingHomeFastChoice(): Promise<void>;
        static askingShoAboutFriends(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class EndingChoices {
        static firstEnding(): Promise<void>;
        static secondEnding(): Promise<void>;
        static thirdEnding(): Promise<void>;
        static fourthEnding(): Promise<void>;
        static firstBadEndingAgain(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class InterfaceHelper {
        static toggleAusleihButton(): void;
        static showAusleihButton(): void;
        static hideAusleihButton(): void;
    }
}
declare namespace YesterdayGame {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let transition: {
        block: {
            duration: number;
            alpha: string;
            edge: number;
        };
        circle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipeLeft: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipeRight: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let data: {
        Protagonist: {
            name: string;
        };
        score: {
            a: number;
        };
        ended: boolean;
        correct: boolean;
    };
    let sound: {
        outside: string;
        alarmClock: string;
        book: string;
        breakChatter: string;
        carHorn: string;
        cityNoise: string;
        cloth: string;
        constructionSite: string;
        intenseSound: string;
        librarySound: string;
        neckCracking: string;
        packingBag: string;
        schoolBell: string;
        classTalking: string;
        carCrash: string;
        metalFalling: string;
        fallingStairs: string;
        fallingObjects: string;
        cutThrowFlesh: string;
        openCabin: string;
    };
    let location: {
        alley: {
            name: string;
            background: string;
        };
        bedroom: {
            name: string;
            background: string;
        };
        classroom: {
            name: string;
            background: string;
        };
        library: {
            name: string;
            background: string;
        };
        steps: {
            name: string;
            background: string;
        };
        street: {
            name: string;
            background: string;
        };
        uni: {
            name: string;
            background: string;
        };
        darkBackground: {
            name: string;
            background: string;
        };
        streetCity: {
            name: string;
            background: string;
        };
        constructionSite: {
            name: string;
            background: string;
        };
        bridge: {
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
        Rika: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                angry: string;
                sad: string;
            };
        };
        RikaMother: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Sagi: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                angry: string;
                sad: string;
                insane: string;
            };
        };
        Sho: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                angry: string;
                sad: string;
            };
        };
        Teacher: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
    enum StoryState {
        FirstRun = 0,
        CarCrashHappend = 1,
        ConstructionSiteAccidentHappend = 2,
        SchoolAccidentHappend = 3
    }
    let dataForSave: {
        shoScore: number;
        storyState: StoryState;
        choicesState: string;
        endingState: string;
        carCrashHappend: boolean;
    };
    let items: {
        pictureStreet: {
            name: string;
            image: string;
            description: string;
            static: boolean;
        };
        pictureConstructionSite: {
            name: string;
            image: string;
            description: string;
            static: boolean;
        };
        pictureSteps: {
            name: string;
            image: string;
            description: string;
            static: boolean;
        };
        pictureClassroom: {
            name: string;
            image: string;
            description: string;
            static: boolean;
        };
        pictureBridge: {
            name: string;
            image: string;
            description: string;
            static: boolean;
        };
    };
    function redSagiRight(): fS.AnimationDefinition;
    function redSagiLeft(): fS.AnimationDefinition;
}
declare namespace YesterdayGame {
    const Rika: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
        };
    };
    const Sagi: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
            insane: string;
        };
    };
    const SagiPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
        insane: string;
    };
    const Sho: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
        };
    };
    const ShoPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
    };
    const RikaMother: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    const RikaMotherPose: {
        neutral: string;
    };
    const Teacher: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    const TeacherPose: {
        neutral: string;
    };
}
declare namespace YesterdayGame {
    class TransitionManager {
        static blendInOut(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class CarCrash {
        static firstCarCrash(): Promise<void>;
        static carCrashHappend(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class ConstructionSite {
        static firstConstructionSiteAccident(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class EndScene {
        static gameOver(): Promise<void>;
        static carEnding(): Promise<void>;
        static goodEndingWaiting(): Promise<void>;
        static badEndingSagi(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class FallingAccident {
        static firstFallingAccident(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    function GoingToSchool(): fS.SceneReturn;
}
declare namespace YesterdayGame {
    function InClass(): fS.SceneReturn;
}
declare namespace YesterdayGame {
    class Library {
        static inLibrary(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class SavingSho {
        static savingSho(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class SchoolAccident {
        static firstSchoolAccident(): Promise<void>;
        static schoolAccidentHappend(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class TalkingSagi {
        static talkingWithSagi(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    class TalkingSho {
        static talkingWithSho(): Promise<void>;
    }
}
declare namespace YesterdayGame {
    function WakingUp(): fS.SceneReturn;
}
