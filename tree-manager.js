 AFRAME.registerComponent('tree-manager', {
         
          init: function () {
            let el = this.el;
            let comp = this;
            let data = this.data;
            comp.scene = el.sceneEl.object3D;  
            comp.counter = 0;   
            comp.treeModels = [];
            comp.modelLoaded = false;

            // After gltf model has loaded, modify it materials.
            el.addEventListener('model-loaded', function(ev){
              let mesh = el.getObject3D('mesh'); 
              if (!mesh){return;}
              //console.log(mesh);
              mesh.traverse(function(node){
                 if (node.isMesh){  
                   let mat = new THREE.MeshStandardMaterial;
                   node.material = mat;
                   /*
                   if (node.material.name.includes("Trunk")){
                     // console.log(node.material);
                        let mat = node.material;
                        let alphaMap = new THREE.TextureLoader().load("https://cdn.glitch.com/67168196-e75b-4d1b-9851-879eb27f9d01%2FGradMask.png");
                        mat.map = mat.map.clone();
                        mat.transparent = true;
                        mat.color = new THREE.Color(0xffffff);
                        mat.alphaMap = alphaMap;   
                        mat.alphaMap.needsUpdate = true;
                        mat.map.needsUpdate = true;
                        comp.treeModels.push(node);
                       // console.log(node.name, mat.name);
                   }
                   */
                 }
              });
              /*console.log(comp.treeModels);
              comp.treeModels.forEach(function(model){
                console.log(model.name, model.material.name, model.material.map.name, model.material.map.uuid, model.material.alphaMap.name, model.material.alphaMap.uuid);
              });*/            
              comp.modelLoaded = true;
            });   
          }
        });