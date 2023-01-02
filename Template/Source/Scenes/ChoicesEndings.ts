namespace Template {
    export async function ChoicesEndings(): fS.SceneReturn {

        let endingOneChoice = {
            movedrecently: "Vor kurzem hergezogen?",
            movedLongAgo: "Wohnst du schon lange hier?"
        };
        let firstendingDialogue = await fS.Menu.getInput(endingOneChoice, "choicesCSSClass");

        if (storyState == "endingOne") {
            switch(endingOneChoice){

            }
        }
    }
}