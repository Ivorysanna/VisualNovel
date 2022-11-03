namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("First Scene starting");

        // let text = {
        //     Ai: {
        //         T0001: "Hallo",
        //         T0002: "Anderer Text",
        //         T0003: "Text Nummer 3",
        //     },
        // };

        ƒS.Speech.hide();
        await ƒS.Location.show(location.oldStreet);
        await ƒS.Character.show(characters.Ai, characters.Ai.pose.neutral, ƒS.positionPercent(60, 120));
        await ƒS.update();
        await ƒS.Speech.tell(characters.Ai, "Text in einer Zeile");
        await ƒS.Speech.tell(characters.Ai, "Zweiter Text in einer Zeile");
    }
}
