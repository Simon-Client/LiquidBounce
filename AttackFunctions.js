var Entity = Java.type("net.minecraft.entity.Entity");
function onAttack {
    function Entity entity;
    function AttackEvent(Entity entity) {
        this.entity = entity;
    }
    function Entity getEntity() {
        return entity;
    }
}