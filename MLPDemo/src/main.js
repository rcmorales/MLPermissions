import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import MLPermissions from './components/plugins/MLPermissions/src/index.js'
import { component as VueCodeHighlight } from 'vue-code-highlight';



createApp(App).mount('#app')

//new permission
let mlp = new MLPermissions();
let user = {
    id: 1,
    name: "testuser",
    permissions:['view task', 'view calendar', 'edit tasks']
}

mlp.permissions = user.permissions;
mlp.permitted = function(action, vobject, permissions){
    console.log('permission:',action, vobject, permissions);

    var permission = action + " " + vobject;
    return permission.includes(permissions);
};

//App.use(mlp)
//Vue.use(mlp)

