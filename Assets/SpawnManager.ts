@component
export class NewScript extends BaseScriptComponent {
    @input
    mySceneObjArray: SceneObject[];

    @input
    objectToSpawn : ObjectPrefab;

    
    onAwake() {

    }

    onUpdate()
    {
        this.mySceneObjArray.forEach(element => {
          // var newObject = this.objectToSpawn.instantiate();
        });
    }
}
