namespace Template {
    export enum StoryState {
        FirstRun,
        CarCrashHappend,
        ConstructionSiteAccidentHappend,
        SchoolAccidentHappend,
    }

    export class StateManager {
        //*** GLOBAL VARIABLES***
        //TODO: FirstRun wieder einblenden 
        // public static storyState: StoryState = StoryState.FirstRun;
        // public static storyState: StoryState = StoryState.CarCrashHappend;
        public static storyState: StoryState = StoryState.ConstructionSiteAccidentHappend;
        // public static storyState: StoryState = StoryState.SchoolAccidentHappend;

        

        public static choicesState: String = "firstChoice";

        public static endingState: String = "";

        public static carCrashHappend: boolean = false;
    }

}
