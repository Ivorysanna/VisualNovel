namespace Template {
    export async function wakingUp(): fS.SceneReturn {
        console.log("Waking Up starting");

        fS.Speech.hide();
        await fS.Location.show(location.bedroom);
        //await fS.Character.show(characters.TestChara, characters.TestChara.pose.neutral, fS.positions.bottomcenter);
        //*** WECKER KLINGELN *** 
        await fS.update();
        await fS.Speech.tell(characters.RikasMutter, "Rika wach auf, sonst kommst du zu spät!");
        await fS.Speech.tell(Rika, "Ja, ich bin schon wach.");
        await fS.Speech.tell(characters.Rika, "<i>Ich sollte mich schnell anziehen, nicht dass Sagi wieder auf mich warten muss …</i>");

        //*** AUSFADEN EINFADEN***
        await fS.Character.show(characters.Rika, characters.TestChara.pose.neutral, fS.positions.bottomcenter);
        //await fS.Speech.tell(Rika, )
    }
}