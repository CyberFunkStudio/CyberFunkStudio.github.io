
        AFRAME.registerComponent("click-listener", {
            schema:{
                dir:{type:"boolean", default: false}
            },
            init: function(){
                let el=this.el;
                let data = this.data;
                el.addEventListener("click", function(evt){
                    let tree = document.querySelector('#tree');
                    
                   data.dir = !data.dir;
                   if(data.dir){
                       el.setAttribute("material",'color', 'orange');
                       tree.emit("grow");
                   } else {
                       el.setAttribute('material','color','#335511');
                       tree.emit('shrink');
                   }
                });
            }
        });