@component
export class NewScript extends BaseScriptComponent {
    @input
    mySceneObjArray: SceneObject[];

    @input
    objectToSpawn : SceneObject;

    
    onAwake() {

    }
}
