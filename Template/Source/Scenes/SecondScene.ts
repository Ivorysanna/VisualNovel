namespace Template {
    export async function secondScene(): fS.SceneReturn {
        console.log("Second Scene starting");

        await fS.Character.show(characters.Ai, characters.Ai.pose.happy, fS.positions.bottomcenter);
        fS.update();

        await fS.Character.animate(characters.Ai, characters.Ai.pose.happy, animation());
    }
}