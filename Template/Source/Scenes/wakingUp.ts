namespace Template {
    export async function wakingUp(): fS.SceneReturn {
        console.log("First Scene starting");

        // let text = {
        //     Ai: {
        //         T0001: "Hallo",
        //         T0002: "Anderer Text",
        //         T0003: "Text Nummer 3",
        //     },
        // };
        fS.Speech.hide();
        await fS.Location.show(location.uni);
        await fS.Character.show(characters.Ai, characters.Ai.pose.neutral, fS.positions.bottomcenter);
        //await ƒS.Character.show(characters.Ai, characters.Ai.pose.neutral, ƒS.positionPercent(60, 120));
        await fS.update();
        await fS.Speech.tell(characters.Ai, "Text in einer Zeile");
        await fS.Speech.tell(characters.Ai, "Zweiter Text in einer Zeile");


    }
}