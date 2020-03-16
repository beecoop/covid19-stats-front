"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}// threejs.org/license
(function(k,Ea){"object"===(typeof exports==="undefined"?"undefined":_typeof(exports))&&"undefined"!==typeof module?Ea(exports):"function"===typeof define&&define.amd?define(["exports"],Ea):(k=k||self,Ea(k.THREE={}));})(void 0,function(k){function Ea(){}function u(a,b){this.x=a||0;this.y=b||0;}function wa(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");}function W(a,b,c,d,e,f,g,h,l,m){Object.defineProperty(this,"id",{value:nj++});this.uuid=L.generateUUID();this.name="";this.image=void 0!==a?a:W.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:W.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==l?l:1;this.format=void 0!==g?g:1023;this.internalFormat=null;this.type=void 0!==h?h:1009;this.offset=new u(0,0);this.repeat=new u(1,1);this.center=new u(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new wa();this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null;}function ka(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1;}function Ha(a,b,c){this.width=a;this.height=b;this.scissor=new ka(0,0,a,b);this.scissorTest=!1;this.viewport=new ka(0,0,a,b);c=c||{};this.texture=new W(void 0,c.mapping,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.texture.image={};this.texture.image.width=a;this.texture.image.height=b;this.texture.generateMipmaps=void 0!==c.generateMipmaps?c.generateMipmaps:!1;this.texture.minFilter=void 0!==c.minFilter?c.minFilter:1006;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null;}function Zf(a,b,c){Ha.call(this,a,b,c);this.samples=4;}function Aa(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1;}function n(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0;}function P(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");}function Tb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||Tb.DefaultOrder;}function Ie(){this.mask=1;}function E(){Object.defineProperty(this,"id",{value:oj++});this.uuid=L.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=E.DefaultUp.clone();var a=new n(),b=new Tb(),c=new Aa(),d=new n(1,1,1);b._onChange(function(){c.setFromEuler(b,!1);});c._onChange(function(){b.setFromQuaternion(c,void 0,!1);});Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new P()},normalMatrix:{value:new wa()}});this.matrix=new P();this.matrixWorld=new P();this.matrixAutoUpdate=E.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Ie();this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};}function ob(){E.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.environment=this.background=null;this.autoUpdate=!0;"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}function Sa(a,b){this.min=void 0!==a?a:new n(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new n(-Infinity,-Infinity,-Infinity);}function $f(a,b,c,d,e){var f;var g=0;for(f=a.length-3;g<=f;g+=3){Ub.fromArray(a,g);var h=e.x*Math.abs(Ub.x)+e.y*Math.abs(Ub.y)+e.z*Math.abs(Ub.z),l=b.dot(Ub),m=c.dot(Ub),t=d.dot(Ub);if(Math.max(-Math.max(l,m,t),Math.min(l,m,t))>h)return!1;}return!0;}function pb(a,b){this.center=void 0!==a?a:new n();this.radius=void 0!==b?b:0;}function Vb(a,b){this.origin=void 0!==a?a:new n();this.direction=void 0!==b?b:new n(0,0,-1);}function Ta(a,b){this.normal=void 0!==a?a:new n(1,0,0);this.constant=void 0!==b?b:0;}function oa(a,b,c){this.a=void 0!==a?a:new n();this.b=void 0!==b?b:new n();this.c=void 0!==c?c:new n();}function z(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c);}function ag(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a;}function bg(a){return .04045>a?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4);}function cg(a){return .0031308>a?12.92*a:1.055*Math.pow(a,.41666)-.055;}function Bc(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new n();this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new z();this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0;}function K(){Object.defineProperty(this,"id",{value:pj++});this.uuid=L.generateUUID();this.name="";this.type="Material";this.fog=!0;this.blending=1;this.side=0;this.vertexColors=this.flatShading=!1;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.stencilWriteMask=255;this.stencilFunc=519;this.stencilRef=0;this.stencilFuncMask=255;this.stencilZPass=this.stencilZFail=this.stencilFail=7680;this.stencilWrite=!1;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.toneMapped=this.visible=!0;this.userData={};this.version=0;}function Oa(a){K.call(this);this.type="MeshBasicMaterial";this.color=new z(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphTargets=this.skinning=!1;this.setValues(a);}function M(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0;}function Bd(a,b,c){M.call(this,new Int8Array(a),b,c);}function Cd(a,b,c){M.call(this,new Uint8Array(a),b,c);}function Dd(a,b,c){M.call(this,new Uint8ClampedArray(a),b,c);}function Ed(a,b,c){M.call(this,new Int16Array(a),b,c);}function Wb(a,b,c){M.call(this,new Uint16Array(a),b,c);}function Fd(a,b,c){M.call(this,new Int32Array(a),b,c);}function Xb(a,b,c){M.call(this,new Uint32Array(a),b,c);}function A(a,b,c){M.call(this,new Float32Array(a),b,c);}function Gd(a,b,c){M.call(this,new Float64Array(a),b,c);}function wh(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1;}function xh(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c){a[c]>b&&(b=a[c]);}return b;}function B(){Object.defineProperty(this,"id",{value:qj+=2});this.uuid=L.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.morphTargetsRelative=!1;this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity};this.userData={};}function S(a,b){E.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new B();this.material=void 0!==b?b:new Oa();this.updateMorphTargets();}function yh(a,b,c,d,e,f,g,h){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,2!==b.side,h)))return null;Je.copy(h);Je.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(Je);return b<c.near||b>c.far?null:{distance:b,point:Je.clone(),object:a};}function Ke(a,b,c,d,e,f,g,h,l,m,t,p){Yb.fromBufferAttribute(e,m);Zb.fromBufferAttribute(e,t);$b.fromBufferAttribute(e,p);e=a.morphTargetInfluences;if(b.morphTargets&&f&&e){Le.set(0,0,0);Me.set(0,0,0);Ne.set(0,0,0);for(var x=0,r=f.length;x<r;x++){var k=e[x],v=f[x];0!==k&&(dg.fromBufferAttribute(v,m),eg.fromBufferAttribute(v,t),fg.fromBufferAttribute(v,p),g?(Le.addScaledVector(dg,k),Me.addScaledVector(eg,k),Ne.addScaledVector(fg,k)):(Le.addScaledVector(dg.sub(Yb),k),Me.addScaledVector(eg.sub(Zb),k),Ne.addScaledVector(fg.sub($b),k)));}Yb.add(Le);Zb.add(Me);$b.add(Ne);}if(a=yh(a,b,c,d,Yb,Zb,$b,Hd))h&&(Cc.fromBufferAttribute(h,m),Dc.fromBufferAttribute(h,t),Ec.fromBufferAttribute(h,p),a.uv=oa.getUV(Hd,Yb,Zb,$b,Cc,Dc,Ec,new u())),l&&(Cc.fromBufferAttribute(l,m),Dc.fromBufferAttribute(l,t),Ec.fromBufferAttribute(l,p),a.uv2=oa.getUV(Hd,Yb,Zb,$b,Cc,Dc,Ec,new u())),h=new Bc(m,t,p),oa.getNormal(Yb,Zb,$b,h.normal),a.face=h;return a;}function N(){Object.defineProperty(this,"id",{value:rj+=2});this.uuid=L.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1;}function Fc(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e;}}return b;}function va(a){for(var b={},c=0;c<a.length;c++){var d=Fc(a[c]),e;for(e in d){b[e]=d[e];}}return b;}function Ba(a){K.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a));}function db(){E.call(this);this.type="Camera";this.matrixWorldInverse=new P();this.projectionMatrix=new P();this.projectionMatrixInverse=new P();}function ba(a,b,c,d){db.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix();}function Gc(a,b,c,d){E.call(this);this.type="CubeCamera";var e=new ba(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new n(1,0,0));this.add(e);var f=new ba(90,1,a,b);f.up.set(0,-1,0);f.lookAt(new n(-1,0,0));this.add(f);var g=new ba(90,1,a,b);g.up.set(0,0,1);g.lookAt(new n(0,1,0));this.add(g);var h=new ba(90,1,a,b);h.up.set(0,0,-1);h.lookAt(new n(0,-1,0));this.add(h);var l=new ba(90,1,a,b);l.up.set(0,-1,0);l.lookAt(new n(0,0,1));this.add(l);var m=new ba(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new n(0,0,-1));this.add(m);d=d||{format:1022,magFilter:1006,minFilter:1006};this.renderTarget=new Db(c,d);this.renderTarget.texture.name="CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=a.getRenderTarget(),d=this.renderTarget,p=d.texture.generateMipmaps;d.texture.generateMipmaps=!1;a.setRenderTarget(d,0);a.render(b,e);a.setRenderTarget(d,1);a.render(b,f);a.setRenderTarget(d,2);a.render(b,g);a.setRenderTarget(d,3);a.render(b,h);a.setRenderTarget(d,4);a.render(b,l);d.texture.generateMipmaps=p;a.setRenderTarget(d,5);a.render(b,m);a.setRenderTarget(c);};this.clear=function(a,b,c,d){for(var e=a.getRenderTarget(),f=this.renderTarget,g=0;6>g;g++){a.setRenderTarget(f,g),a.clear(b,c,d);}a.setRenderTarget(e);};}function Db(a,b,c){Number.isInteger(b)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),b=c);Ha.call(this,a,a,b);}function ac(a,b,c,d,e,f,g,h,l,m,t,p){W.call(this,null,f,g,h,l,m,d,e,t,p);this.image={data:a||null,width:b||1,height:c||1};this.magFilter=void 0!==l?l:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1;this.needsUpdate=!0;}function Hc(a,b,c,d,e,f){this.planes=[void 0!==a?a:new Ta(),void 0!==b?b:new Ta(),void 0!==c?c:new Ta(),void 0!==d?d:new Ta(),void 0!==e?e:new Ta(),void 0!==f?f:new Ta()];}function zh(){function a(e,f){!1!==c&&(d(e,f),b.requestAnimationFrame(a));}var b=null,c=!1,d=null;return{start:function start(){!0!==c&&null!==d&&(b.requestAnimationFrame(a),c=!0);},stop:function stop(){c=!1;},setAnimationLoop:function setAnimationLoop(a){d=a;},setContext:function setContext(a){b=a;}};}function sj(a,b){function c(b,c){var d=b.array,e=b.usage,f=a.createBuffer();a.bindBuffer(c,f);a.bufferData(c,d,e);b.onUploadCallback();c=5126;d instanceof Float32Array?c=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c=5123:d instanceof Int16Array?c=5122:d instanceof Uint32Array?c=5125:d instanceof Int32Array?c=5124:d instanceof Int8Array?c=5120:d instanceof Uint8Array&&(c=5121);return{buffer:f,type:c,bytesPerElement:d.BYTES_PER_ELEMENT,version:b.version};}var d=b.isWebGL2,e=new WeakMap();return{get:function get(a){a.isInterleavedBufferAttribute&&(a=a.data);return e.get(a);},remove:function remove(b){b.isInterleavedBufferAttribute&&(b=b.data);var c=e.get(b);c&&(a.deleteBuffer(c.buffer),e.delete(b));},update:function update(b,g){b.isInterleavedBufferAttribute&&(b=b.data);var f=e.get(b);if(void 0===f)e.set(b,c(b,g));else if(f.version<b.version){var l=b.array,m=b.updateRange;a.bindBuffer(g,f.buffer);-1===m.count?a.bufferSubData(g,0,l):(d?a.bufferSubData(g,m.offset*l.BYTES_PER_ELEMENT,l,m.offset,m.count):a.bufferSubData(g,m.offset*l.BYTES_PER_ELEMENT,l.subarray(m.offset,m.offset+m.count)),m.count=-1);f.version=b.version;}}};}function Id(a,b,c,d){N.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new bc(a,b,c,d));this.mergeVertices();}function bc(a,b,c,d){B.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,l=a/c,m=b/d,t=[],p=[],k=[],r=[];for(a=0;a<h;a++){var q=a*m-f;for(b=0;b<g;b++){p.push(b*l-e,-q,0),k.push(0,0,1),r.push(b/c),r.push(1-a/d);}}for(a=0;a<d;a++){for(b=0;b<c;b++){e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,t.push(b+g*a,e,h),t.push(e,f,h);}}this.setIndex(t);this.setAttribute("position",new A(p,3));this.setAttribute("normal",new A(k,3));this.setAttribute("uv",new A(r,2));}function tj(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,a.g,a.b,c,d);}var f=new z(0),g=0,h,l,m=null,t=0,p=null;return{getClearColor:function getClearColor(){return f;},setClearColor:function setClearColor(a,b){f.set(a);g=void 0!==b?b:1;e(f,g);},getClearAlpha:function getClearAlpha(){return g;},setClearAlpha:function setClearAlpha(a){g=a;e(f,g);},render:function render(b,d,k,v){d=d.background;k=a.xr;(k=k.getSession&&k.getSession())&&"additive"===k.environmentBlendMode&&(d=null);null===d?e(f,g):d&&d.isColor&&(e(d,1),v=!0);(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(d&&(d.isCubeTexture||d.isWebGLCubeRenderTarget||306===d.mapping)){void 0===l&&(l=new S(new Jd(1,1,1),new Ba({type:"BackgroundCubeMaterial",uniforms:Fc(eb.cube.uniforms),vertexShader:eb.cube.vertexShader,fragmentShader:eb.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld);},Object.defineProperty(l.material,"envMap",{get:function get(){return this.uniforms.envMap.value;}}),c.update(l));v=d.isWebGLCubeRenderTarget?d.texture:d;l.material.uniforms.envMap.value=v;l.material.uniforms.flipEnvMap.value=v.isCubeTexture?-1:1;if(m!==d||t!==v.version||p!==a.toneMapping)l.material.needsUpdate=!0,m=d,t=v.version,p=a.toneMapping;b.unshift(l,l.geometry,l.material,0,0,null);}else if(d&&d.isTexture){void 0===h&&(h=new S(new bc(2,2),new Ba({type:"BackgroundMaterial",uniforms:Fc(eb.background.uniforms),vertexShader:eb.background.vertexShader,fragmentShader:eb.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function get(){return this.uniforms.t2D.value;}}),c.update(h));h.material.uniforms.t2D.value=d;!0===d.matrixAutoUpdate&&d.updateMatrix();h.material.uniforms.uvTransform.value.copy(d.matrix);if(m!==d||t!==d.version||p!==a.toneMapping)h.material.needsUpdate=!0,m=d,t=d.version,p=a.toneMapping;b.unshift(h,h.geometry,h.material,0,0,null);}}};}function uj(a,b,c,d){var e=d.isWebGL2,f;this.setMode=function(a){f=a;};this.render=function(b,d){a.drawArrays(f,b,d);c.update(d,f);};this.renderInstances=function(d,h,l,m){if(0!==m){if(e){d=a;var g="drawArraysInstanced";}else if(d=b.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",null===d){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}d[g](f,h,l,m);c.update(l,f,m);}};}function vj(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(35633,36338).precision&&0<a.getShaderPrecisionFormat(35632,36338).precision)return"highp";b="mediump";}return"mediump"===b&&0<a.getShaderPrecisionFormat(35633,36337).precision&&0<a.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp";}var e,f="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext||"undefined"!==typeof WebGL2ComputeRenderingContext&&a instanceof WebGL2ComputeRenderingContext,g=void 0!==c.precision?c.precision:"highp",h=d(g);h!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",h,"instead."),g=h);c=!0===c.logarithmicDepthBuffer;h=a.getParameter(34930);var l=a.getParameter(35660),m=a.getParameter(3379),t=a.getParameter(34076),p=a.getParameter(34921),k=a.getParameter(36347),r=a.getParameter(36348),q=a.getParameter(36349),v=0<l,n=f||!!b.get("OES_texture_float"),w=v&&n,F=f?a.getParameter(36183):0;return{isWebGL2:f,getMaxAnisotropy:function getMaxAnisotropy(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0;},getMaxPrecision:d,precision:g,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:l,maxTextureSize:m,maxCubemapSize:t,maxAttributes:p,maxVertexUniforms:k,maxVaryings:r,maxFragmentUniforms:q,vertexTextures:v,floatFragmentTextures:n,floatVertexTextures:w,maxSamples:F};}function wj(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0;}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;l.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4){h.copy(a[e]).applyMatrix4(b,l),h.normal.toArray(g,d),g[d+3]=h.constant;}}m.value=g;m.needsUpdate=!0;}c.numPlanes=f;c.numIntersection=0;return g;}var c=this,d=null,e=0,f=!1,g=!1,h=new Ta(),l=new wa(),m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h;};this.beginShadows=function(){g=!0;b(null);};this.endShadows=function(){g=!1;a();};this.setState=function(c,h,l,k,q,v){if(!f||null===c||0===c.length||g&&!l)g?b(null):a();else{l=g?0:e;var p=4*l,t=q.clippingState||null;m.value=t;t=b(c,k,p,v);for(c=0;c!==p;++c){t[c]=d[c];}q.clippingState=t;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=l;}};}function xj(a){var b={};return{get:function get(c){if(void 0!==b[c])return b[c];switch(c){case"WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c);}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d;}};}function yj(a,b,c){function d(a){var e=a.target;a=f.get(e);null!==a.index&&b.remove(a.index);for(var h in a.attributes){b.remove(a.attributes[h]);}e.removeEventListener("dispose",d);f.delete(e);if(h=g.get(a))b.remove(h),g.delete(a);c.memory.geometries--;}function e(a){var c=[],d=a.index,e=a.attributes.position;if(null!==d){var f=d.array;d=d.version;e=0;for(var h=f.length;e<h;e+=3){var k=f[e+0],q=f[e+1],v=f[e+2];c.push(k,q,q,v,v,k);}}else for(f=e.array,d=e.version,e=0,h=f.length/3-1;e<h;e+=3){k=e+0,q=e+1,v=e+2,c.push(k,q,q,v,v,k);}c=new(65535<xh(c)?Xb:Wb)(c,1);c.version=d;b.update(c,34963);(f=g.get(a))&&b.remove(f);g.set(a,c);}var f=new WeakMap(),g=new WeakMap();return{get:function get(a,b){var e=f.get(b);if(e)return e;b.addEventListener("dispose",d);b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=new B().setFromObject(a)),e=b._bufferGeometry);f.set(b,e);c.memory.geometries++;return e;},update:function update(a){var c=a.index,d=a.attributes;null!==c&&b.update(c,34963);for(var e in d){b.update(d[e],34962);}a=a.morphAttributes;for(e in a){c=a[e];d=0;for(var f=c.length;d<f;d++){b.update(c[d],34962);}}},getWireframeAttribute:function getWireframeAttribute(a){var b=g.get(a);if(b){var c=a.index;null!==c&&b.version<c.version&&e(a);}else e(a);return g.get(a);}};}function zj(a,b,c,d){var e=d.isWebGL2,f,g,h;this.setMode=function(a){f=a;};this.setIndex=function(a){g=a.type;h=a.bytesPerElement;};this.render=function(b,d){a.drawElements(f,d,g,b*h);c.update(d,f);};this.renderInstances=function(d,m,t,p){if(0!==p){if(e){d=a;var l="drawElementsInstanced";}else if(d=b.get("ANGLE_instanced_arrays"),l="drawElementsInstancedANGLE",null===d){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}d[l](f,t,g,m*h,p);c.update(t,f,p);}};}function Aj(a){var b={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:b,programs:null,autoReset:!0,reset:function reset(){b.frame++;b.calls=0;b.triangles=0;b.points=0;b.lines=0;},update:function update(a,d,e){e=e||1;b.calls++;switch(d){case 4:b.triangles+=a/3*e;break;case 1:b.lines+=a/2*e;break;case 3:b.lines+=e*(a-1);break;case 2:b.lines+=e*a;break;case 0:b.points+=e*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);}}};}function Bj(a,b){return Math.abs(b[1])-Math.abs(a[1]);}function Cj(a){var b={},c=new Float32Array(8);return{update:function update(d,e,f,g){var h=d.morphTargetInfluences,l=void 0===h?0:h.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<l;m++){d[m]=[m,0];}b[e.id]=d;}var t=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<l;m++){var p=d[m];0!==p[1]&&(t&&e.deleteAttribute("morphTarget"+m),f&&e.deleteAttribute("morphNormal"+m));}for(m=0;m<l;m++){p=d[m],p[0]=m,p[1]=h[m];}d.sort(Bj);for(m=h=0;8>m;m++){if(p=d[m])if(l=p[0],p=p[1]){t&&e.setAttribute("morphTarget"+m,t[l]);f&&e.setAttribute("morphNormal"+m,f[l]);c[m]=p;h+=p;continue;}c[m]=0;}e=e.morphTargetsRelative?1:1-h;g.getUniforms().setValue(a,"morphTargetBaseInfluence",e);g.getUniforms().setValue(a,"morphTargetInfluences",c);}};}function Dj(a,b,c,d){var e=new WeakMap();return{update:function update(a){var f=d.render.frame,h=a.geometry,l=b.get(a,h);e.get(l)!==f&&(h.isGeometry&&l.updateFromObject(a),b.update(l),e.set(l,f));a.isInstancedMesh&&c.update(a.instanceMatrix,34962);return l;},dispose:function dispose(){e=new WeakMap();}};}function qb(a,b,c,d,e,f,g,h,l,m){a=void 0!==a?a:[];W.call(this,a,void 0!==b?b:301,c,d,e,f,void 0!==g?g:1022,h,l,m);this.flipY=!1;}function Ic(a,b,c,d){W.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0;}function Jc(a,b,c,d){W.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0;}function Kc(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=Ah[e];void 0===f&&(f=new Float32Array(e),Ah[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d){e+=c,a[d].toArray(f,e);}return f;}function Pa(a,b){if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++){if(a[c]!==b[c])return!1;}return!0;}function Ia(a,b){for(var c=0,d=b.length;c<d;c++){a[c]=b[c];}}function Bh(a,b){var c=Ch[b];void 0===c&&(c=new Int32Array(b),Ch[b]=c);for(var d=0;d!==b;++d){c[d]=a.allocateTextureUnit();}return c;}function Ej(a,b){var c=this.cache;c[0]!==b&&(a.uniform1f(this.addr,b),c[0]=b);}function Fj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y)a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y;}else Pa(c,b)||(a.uniform2fv(this.addr,b),Ia(c,b));}function Gj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z)a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z;}else if(void 0!==b.r){if(c[0]!==b.r||c[1]!==b.g||c[2]!==b.b)a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b;}else Pa(c,b)||(a.uniform3fv(this.addr,b),Ia(c,b));}function Hj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w;}else Pa(c,b)||(a.uniform4fv(this.addr,b),Ia(c,b));}function Ij(a,b){var c=this.cache,d=b.elements;void 0===d?Pa(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),Ia(c,b)):Pa(c,d)||(Dh.set(d),a.uniformMatrix2fv(this.addr,!1,Dh),Ia(c,d));}function Jj(a,b){var c=this.cache,d=b.elements;void 0===d?Pa(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),Ia(c,b)):Pa(c,d)||(Eh.set(d),a.uniformMatrix3fv(this.addr,!1,Eh),Ia(c,d));}function Kj(a,b){var c=this.cache,d=b.elements;void 0===d?Pa(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),Ia(c,b)):Pa(c,d)||(Fh.set(d),a.uniformMatrix4fv(this.addr,!1,Fh),Ia(c,d));}function Lj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTexture2D(b||Gh,e);}function Mj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture2DArray(b||Nj,e);}function Oj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture3D(b||Pj,e);}function Qj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTextureCube(b||Hh,e);}function Rj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1i(this.addr,b),c[0]=b);}function Sj(a,b){var c=this.cache;Pa(c,b)||(a.uniform2iv(this.addr,b),Ia(c,b));}function Tj(a,b){var c=this.cache;Pa(c,b)||(a.uniform3iv(this.addr,b),Ia(c,b));}function Uj(a,b){var c=this.cache;Pa(c,b)||(a.uniform4iv(this.addr,b),Ia(c,b));}function Vj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1ui(this.addr,b),c[0]=b);}function Wj(a){switch(a){case 5126:return Ej;case 35664:return Fj;case 35665:return Gj;case 35666:return Hj;case 35674:return Ij;case 35675:return Jj;case 35676:return Kj;case 5124:case 35670:return Rj;case 35667:case 35671:return Sj;case 35668:case 35672:return Tj;case 35669:case 35673:return Uj;case 5125:return Vj;case 35678:case 36198:case 36298:case 36306:case 35682:return Lj;case 35679:case 36299:case 36307:return Oj;case 35680:case 36300:case 36308:case 36293:return Qj;case 36289:case 36303:case 36311:case 36292:return Mj;}}function Xj(a,b){a.uniform1fv(this.addr,b);}function Yj(a,b){a.uniform1iv(this.addr,b);}function Zj(a,b){a.uniform2iv(this.addr,b);}function ak(a,b){a.uniform3iv(this.addr,b);}function bk(a,b){a.uniform4iv(this.addr,b);}function ck(a,b){b=Kc(b,this.size,2);a.uniform2fv(this.addr,b);}function dk(a,b){b=Kc(b,this.size,3);a.uniform3fv(this.addr,b);}function ek(a,b){b=Kc(b,this.size,4);a.uniform4fv(this.addr,b);}function fk(a,b){b=Kc(b,this.size,4);a.uniformMatrix2fv(this.addr,!1,b);}function gk(a,b){b=Kc(b,this.size,9);a.uniformMatrix3fv(this.addr,!1,b);}function hk(a,b){b=Kc(b,this.size,16);a.uniformMatrix4fv(this.addr,!1,b);}function ik(a,b,c){var d=b.length,e=Bh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a){c.safeSetTexture2D(b[a]||Gh,e[a]);}}function jk(a,b,c){var d=b.length,e=Bh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a){c.safeSetTextureCube(b[a]||Hh,e[a]);}}function kk(a){switch(a){case 5126:return Xj;case 35664:return ck;case 35665:return dk;case 35666:return ek;case 35674:return fk;case 35675:return gk;case 35676:return hk;case 5124:case 35670:return Yj;case 35667:case 35671:return Zj;case 35668:case 35672:return ak;case 35669:case 35673:return bk;case 35678:case 36198:case 36298:case 36306:case 35682:return ik;case 35680:case 36300:case 36308:case 36293:return jk;}}function lk(a,b,c){this.id=a;this.addr=c;this.cache=[];this.setValue=Wj(b.type);}function Ih(a,b,c){this.id=a;this.addr=c;this.cache=[];this.size=b.size;this.setValue=kk(b.type);}function Jh(a){this.id=a;this.seq=[];this.map={};}function Eb(a,b){this.seq=[];this.map={};for(var c=a.getProgramParameter(b,35718),d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,l=h.length;for(gg.lastIndex=0;;){var m=gg.exec(h),t=gg.lastIndex,p=m[1],k=m[3];"]"===m[2]&&(p|=0);if(void 0===k||"["===k&&t+2===l){h=g;e=void 0===k?new lk(p,e,f):new Ih(p,e,f);h.seq.push(e);h.map[e.id]=e;break;}else k=g.map[p],void 0===k&&(k=new Jh(p),p=g,g=k,p.seq.push(g),p.map[g.id]=g),g=k;}}}function Kh(a,b,c){b=a.createShader(b);a.shaderSource(b,c);a.compileShader(b);return b;}function Lh(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:throw Error("unsupported encoding: "+a);}}function Mh(a,b,c){var d=a.getShaderParameter(b,35713),e=a.getShaderInfoLog(b).trim();if(d&&""===e)return"";a=a.getShaderSource(b).split("\n");for(b=0;b<a.length;b++){a[b]=b+1+": "+a[b];}a=a.join("\n");return"THREE.WebGLShader: gl.getShaderInfoLog() "+c+"\n"+e+a;}function Kd(a,b){b=Lh(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+"ToLinear"+b[1]+"; }";}function mk(a,b){b=Lh(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }";}function nk(a,b){switch(b){case 1:b="Linear";break;case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b="OptimizedCineon";break;case 5:b="ACESFilmic";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }";}function ok(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d);}return b.join("\n");}function Ld(a){return""!==a;}function Nh(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,b.numPointLightShadows);}function Oh(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection);}function hg(a,b){a=O[b];if(void 0===a)throw Error("Can not resolve #include <"+b+">");return a.replace(ig,hg);}function Ph(a,b,c,d){a="";for(b=parseInt(b);b<parseInt(c);b++){a+=d.replace(/\[ i \]/g,"[ "+b+" ]").replace(/UNROLLED_LOOP_INDEX/g,b);}return a;}function Qh(a){var b="precision "+a.precision+" float;\nprecision "+a.precision+" int;";"highp"===a.precision?b+="\n#define HIGH_PRECISION":"mediump"===a.precision?b+="\n#define MEDIUM_PRECISION":"lowp"===a.precision&&(b+="\n#define LOW_PRECISION");return b;}function pk(a){var b="SHADOWMAP_TYPE_BASIC";1===a.shadowMapType?b="SHADOWMAP_TYPE_PCF":2===a.shadowMapType?b="SHADOWMAP_TYPE_PCF_SOFT":3===a.shadowMapType&&(b="SHADOWMAP_TYPE_VSM");return b;}function qk(a){var b="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:b="ENVMAP_TYPE_CUBE";break;case 306:case 307:b="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:b="ENVMAP_TYPE_EQUIREC";break;case 305:b="ENVMAP_TYPE_SPHERE";}return b;}function rk(a){var b="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:case 304:b="ENVMAP_MODE_REFRACTION";}return b;}function sk(a){var b="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:b="ENVMAP_BLENDING_MULTIPLY";break;case 1:b="ENVMAP_BLENDING_MIX";break;case 2:b="ENVMAP_BLENDING_ADD";}return b;}function tk(a,b,c){var d=a.getContext(),e=c.defines,f=c.vertexShader,g=c.fragmentShader,h=pk(c),l=qk(c),m=rk(c),t=sk(c),p=0<a.gammaFactor?a.gammaFactor:1,k=c.isWebGL2?"":[c.extensionDerivatives||c.envMapCubeUV||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||"physical"===c.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ld).join("\n"),r=ok(e),q=d.createProgram();c.isRawShaderMaterial?(e=[r].filter(Ld).join("\n"),0<e.length&&(e+="\n"),h=[k,r].filter(Ld).join("\n"),0<h.length&&(h+="\n")):(e=[Qh(c),"#define SHADER_NAME "+c.shaderName,r,c.instancing?"#define USE_INSTANCING":"",c.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+p,"#define MAX_BONES "+c.maxBones,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?"#define "+m:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",c.displacementMap&&c.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?"#define USE_COLOR":"",c.vertexUvs?"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.flatShading?"#define FLAT_SHADED":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals&&!1===c.flatShading?"#define USE_MORPHNORMALS":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+h:"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&c.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Ld).join("\n"),h=[k,Qh(c),"#define SHADER_NAME "+c.shaderName,r,c.alphaTest?"#define ALPHATEST "+c.alphaTest+(c.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+p,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.matcap?"#define USE_MATCAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?"#define "+l:"",c.envMap?"#define "+m:"",c.envMap?"#define "+t:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.sheen?"#define USE_SHEEN":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?"#define USE_COLOR":"",c.vertexUvs?"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.gradientMap?"#define USE_GRADIENTMAP":"",c.flatShading?"#define FLAT_SHADED":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+h:"",c.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",c.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&c.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(c.extensionShaderTextureLOD||c.envMap)&&c.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==c.toneMapping?"#define TONE_MAPPING":"",0!==c.toneMapping?O.tonemapping_pars_fragment:"",0!==c.toneMapping?nk("toneMapping",c.toneMapping):"",c.dithering?"#define DITHERING":"",c.outputEncoding||c.mapEncoding||c.matcapEncoding||c.envMapEncoding||c.emissiveMapEncoding||c.lightMapEncoding?O.encodings_pars_fragment:"",c.mapEncoding?Kd("mapTexelToLinear",c.mapEncoding):"",c.matcapEncoding?Kd("matcapTexelToLinear",c.matcapEncoding):"",c.envMapEncoding?Kd("envMapTexelToLinear",c.envMapEncoding):"",c.emissiveMapEncoding?Kd("emissiveMapTexelToLinear",c.emissiveMapEncoding):"",c.lightMapEncoding?Kd("lightMapTexelToLinear",c.lightMapEncoding):"",c.outputEncoding?mk("linearToOutputTexel",c.outputEncoding):"",c.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(Ld).join("\n"));f=f.replace(ig,hg);f=Nh(f,c);f=Oh(f,c);g=g.replace(ig,hg);g=Nh(g,c);g=Oh(g,c);f=f.replace(Rh,Ph);g=g.replace(Rh,Ph);c.isWebGL2&&!c.isRawShaderMaterial&&(l=!1,m=/^\s*#version\s+300\s+es\s*\n/,c.isShaderMaterial&&null!==f.match(m)&&null!==g.match(m)&&(l=!0,f=f.replace(m,""),g=g.replace(m,"")),e="#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n"+e,h=["#version 300 es\n\n#define varying in",l?"":"out highp vec4 pc_fragColor;",l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+h);g=h+g;f=Kh(d,35633,e+f);g=Kh(d,35632,g);d.attachShader(q,f);d.attachShader(q,g);void 0!==c.index0AttributeName?d.bindAttribLocation(q,0,c.index0AttributeName):!0===c.morphTargets&&d.bindAttribLocation(q,0,"position");d.linkProgram(q);if(a.debug.checkShaderErrors){a=d.getProgramInfoLog(q).trim();l=d.getShaderInfoLog(f).trim();m=d.getShaderInfoLog(g).trim();p=t=!0;if(!1===d.getProgramParameter(q,35714))t=!1,k=Mh(d,f,"vertex"),r=Mh(d,g,"fragment"),console.error("THREE.WebGLProgram: shader error: ",d.getError(),"35715",d.getProgramParameter(q,35715),"gl.getProgramInfoLog",a,k,r);else if(""!==a)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",a);else if(""===l||""===m)p=!1;p&&(this.diagnostics={runnable:t,programLog:a,vertexShader:{log:l,prefix:e},fragmentShader:{log:m,prefix:h}});}d.detachShader(q,f);d.detachShader(q,g);d.deleteShader(f);d.deleteShader(g);var v;this.getUniforms=function(){void 0===v&&(v=new Eb(d,q));return v;};var n;this.getAttributes=function(){if(void 0===n){for(var a={},b=d.getProgramParameter(q,35721),c=0;c<b;c++){var e=d.getActiveAttrib(q,c).name;a[e]=d.getAttribLocation(q,e);}n=a;}return n;};this.destroy=function(){d.deleteProgram(q);this.program=void 0;};this.name=c.shaderName;this.id=uk++;this.cacheKey=b;this.usedTimes=1;this.program=q;this.vertexShader=f;this.fragmentShader=g;return this;}function vk(a,b,c){function d(a){if(a)a.isTexture?b=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),b=a.texture.encoding);else var b=3E3;return b;}var e=[],f=c.isWebGL2,g=c.logarithmicDepthBuffer,h=c.floatVertexTextures,l=c.precision,m=c.maxVertexUniforms,t=c.vertexTextures,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},k="precision isWebGL2 supportsVertexTextures outputEncoding instancing map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");this.getParameters=function(e,k,x,n,w,F,T){var q=n.fog;n=e.isMeshStandardMaterial?n.environment:null;n=e.envMap||n;var r=p[e.type];if(T.isSkinnedMesh){var v=T.skeleton.bones;if(h)v=1024;else{var C=Math.min(Math.floor((m-20)/4),v.length);C<v.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+v.length+" bones. This GPU supports "+C+"."),v=0):v=C;}}else v=0;null!==e.precision&&(l=c.getMaxPrecision(e.precision),l!==e.precision&&console.warn("THREE.WebGLProgram.getParameters:",e.precision,"not supported, using",l,"instead."));r?(C=eb[r],C={name:e.type,uniforms:Sh.clone(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader}):C={name:e.type,uniforms:e.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader};e.onBeforeCompile(C,a);var ia=a.getRenderTarget();return{isWebGL2:f,shaderID:r,shaderName:C.name,uniforms:C.uniforms,vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,defines:e.defines,isRawShaderMaterial:e.isRawShaderMaterial,isShaderMaterial:e.isShaderMaterial,precision:l,instancing:!0===T.isInstancedMesh,supportsVertexTextures:t,outputEncoding:null!==ia?d(ia.texture):a.outputEncoding,map:!!e.map,mapEncoding:d(e.map),matcap:!!e.matcap,matcapEncoding:d(e.matcap),envMap:!!n,envMapMode:n&&n.mapping,envMapEncoding:d(n),envMapCubeUV:!!n&&(306===n.mapping||307===n.mapping),lightMap:!!e.lightMap,lightMapEncoding:d(e.lightMap),aoMap:!!e.aoMap,emissiveMap:!!e.emissiveMap,emissiveMapEncoding:d(e.emissiveMap),bumpMap:!!e.bumpMap,normalMap:!!e.normalMap,objectSpaceNormalMap:1===e.normalMapType,tangentSpaceNormalMap:0===e.normalMapType,clearcoatNormalMap:!!e.clearcoatNormalMap,displacementMap:!!e.displacementMap,roughnessMap:!!e.roughnessMap,metalnessMap:!!e.metalnessMap,specularMap:!!e.specularMap,alphaMap:!!e.alphaMap,gradientMap:!!e.gradientMap,sheen:!!e.sheen,combine:e.combine,vertexTangents:e.normalMap&&e.vertexTangents,vertexColors:e.vertexColors,vertexUvs:!!e.map||!!e.bumpMap||!!e.normalMap||!!e.specularMap||!!e.alphaMap||!!e.emissiveMap||!!e.roughnessMap||!!e.metalnessMap||!!e.clearcoatNormalMap||!!e.displacementMap,uvsVertexOnly:!(e.map||e.bumpMap||e.normalMap||e.specularMap||e.alphaMap||e.emissiveMap||e.roughnessMap||e.metalnessMap||e.clearcoatNormalMap)&&!!e.displacementMap,fog:!!q,useFog:e.fog,fogExp2:q&&q.isFogExp2,flatShading:e.flatShading,sizeAttenuation:e.sizeAttenuation,logarithmicDepthBuffer:g,skinning:e.skinning&&0<v,maxBones:v,useVertexTexture:h,morphTargets:e.morphTargets,morphNormals:e.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numClippingPlanes:w,numClipIntersection:F,dithering:e.dithering,shadowMapEnabled:a.shadowMap.enabled&&0<x.length,shadowMapType:a.shadowMap.type,toneMapping:e.toneMapped?a.toneMapping:0,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:e.premultipliedAlpha,alphaTest:e.alphaTest,doubleSided:2===e.side,flipSided:1===e.side,depthPacking:void 0!==e.depthPacking?e.depthPacking:!1,index0AttributeName:e.index0AttributeName,extensionDerivatives:e.extensions&&e.extensions.derivatives,extensionFragDepth:e.extensions&&e.extensions.fragDepth,extensionDrawbuffers:e.extensions&&e.extensions.drawBuffers,extensionShaderTextureLOD:e.extensions&&e.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||null!==b.get("EXT_frag_depth"),rendererExtensionDrawBuffers:f||null!==b.get("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||null!==b.get("EXT_shader_texture_lod"),onBeforeCompile:e.onBeforeCompile};};this.getProgramCacheKey=function(b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(b.fragmentShader),c.push(b.vertexShader));if(void 0!==b.defines)for(var d in b.defines){c.push(d),c.push(b.defines[d]);}if(void 0===b.isRawShaderMaterial){for(d=0;d<k.length;d++){c.push(b[k[d]]);}c.push(a.outputEncoding);c.push(a.gammaFactor);}c.push(b.onBeforeCompile.toString());return c.join();};this.acquireProgram=function(b,c){for(var d,f=0,g=e.length;f<g;f++){var h=e[f];if(h.cacheKey===c){d=h;++d.usedTimes;break;}}void 0===d&&(d=new tk(a,c,b),e.push(d));return d;};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy();}};this.programs=e;}function wk(){var a=new WeakMap();return{get:function get(b){var c=a.get(b);void 0===c&&(c={},a.set(b,c));return c;},remove:function remove(b){a.delete(b);},update:function update(b,c,d){a.get(b)[c]=d;},dispose:function dispose(){a=new WeakMap();}};}function xk(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id;}function yk(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id;}function Th(){function a(a,d,e,m,k,p){var g=b[c];void 0===g?(g={id:a.id,object:a,geometry:d,material:e,program:e.program||f,groupOrder:m,renderOrder:a.renderOrder,z:k,group:p},b[c]=g):(g.id=a.id,g.object=a,g.geometry=d,g.material=e,g.program=e.program||f,g.groupOrder=m,g.renderOrder=a.renderOrder,g.z=k,g.group=p);c++;return g;}var b=[],c=0,d=[],e=[],f={id:-1};return{opaque:d,transparent:e,init:function init(){c=0;d.length=0;e.length=0;},push:function push(b,c,f,m,k,p){b=a(b,c,f,m,k,p);(!0===f.transparent?e:d).push(b);},unshift:function unshift(b,c,f,m,k,p){b=a(b,c,f,m,k,p);(!0===f.transparent?e:d).unshift(b);},finish:function finish(){for(var a=c,d=b.length;a<d;a++){var e=b[a];if(null===e.id)break;e.id=null;e.object=null;e.geometry=null;e.material=null;e.program=null;e.group=null;}},sort:function sort(a,b){1<d.length&&d.sort(a||xk);1<e.length&&e.sort(b||yk);}};}function zk(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c);}var b=new WeakMap();return{get:function get(c,d){var e=b.get(c);if(void 0===e){var f=new Th();b.set(c,new WeakMap());b.get(c).set(d,f);c.addEventListener("dispose",a);}else f=e.get(d),void 0===f&&(f=new Th(),e.set(d,f));return f;},dispose:function dispose(){b=new WeakMap();}};}function Ak(){var a={};return{get:function get(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case"DirectionalLight":var c={direction:new n(),color:new z()};break;case"SpotLight":c={position:new n(),direction:new n(),color:new z(),distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":c={position:new n(),color:new z(),distance:0,decay:0};break;case"HemisphereLight":c={direction:new n(),skyColor:new z(),groundColor:new z()};break;case"RectAreaLight":c={color:new z(),position:new n(),halfWidth:new n(),halfHeight:new n()};}return a[b.id]=c;}};}function Bk(){var a={};return{get:function get(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case"DirectionalLight":var c={shadowBias:0,shadowRadius:1,shadowMapSize:new u()};break;case"SpotLight":c={shadowBias:0,shadowRadius:1,shadowMapSize:new u()};break;case"PointLight":c={shadowBias:0,shadowRadius:1,shadowMapSize:new u(),shadowCameraNear:1,shadowCameraFar:1E3};}return a[b.id]=c;}};}function Ck(a,b){return(b.castShadow?1:0)-(a.castShadow?1:0);}function Dk(){for(var a=new Ak(),b=Bk(),c={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},d=0;9>d;d++){c.probe.push(new n());}var e=new n(),f=new P(),g=new P();return{setup:function setup(d,l,m){for(var h=0,p=0,k=0,r=0;9>r;r++){c.probe[r].set(0,0,0);}var q=l=0,v=0,n=0,w=0,F=0,T=0,V=0;m=m.matrixWorldInverse;d.sort(Ck);r=0;for(var da=d.length;r<da;r++){var y=d[r],u=y.color,ia=y.intensity,Ca=y.distance,Ja=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=u.r*ia,p+=u.g*ia,k+=u.b*ia;else if(y.isLightProbe)for(Ja=0;9>Ja;Ja++){c.probe[Ja].addScaledVector(y.sh.coefficients[Ja],ia);}else if(y.isDirectionalLight){var H=a.get(y);H.color.copy(y.color).multiplyScalar(y.intensity);H.direction.setFromMatrixPosition(y.matrixWorld);e.setFromMatrixPosition(y.target.matrixWorld);H.direction.sub(e);H.direction.transformDirection(m);y.castShadow&&(ia=y.shadow,u=b.get(y),u.shadowBias=ia.bias,u.shadowRadius=ia.radius,u.shadowMapSize=ia.mapSize,c.directionalShadow[l]=u,c.directionalShadowMap[l]=Ja,c.directionalShadowMatrix[l]=y.shadow.matrix,F++);c.directional[l]=H;l++;}else y.isSpotLight?(H=a.get(y),H.position.setFromMatrixPosition(y.matrixWorld),H.position.applyMatrix4(m),H.color.copy(u).multiplyScalar(ia),H.distance=Ca,H.direction.setFromMatrixPosition(y.matrixWorld),e.setFromMatrixPosition(y.target.matrixWorld),H.direction.sub(e),H.direction.transformDirection(m),H.coneCos=Math.cos(y.angle),H.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),H.decay=y.decay,y.castShadow&&(ia=y.shadow,u=b.get(y),u.shadowBias=ia.bias,u.shadowRadius=ia.radius,u.shadowMapSize=ia.mapSize,c.spotShadow[v]=u,c.spotShadowMap[v]=Ja,c.spotShadowMatrix[v]=y.shadow.matrix,V++),c.spot[v]=H,v++):y.isRectAreaLight?(H=a.get(y),H.color.copy(u).multiplyScalar(ia),H.position.setFromMatrixPosition(y.matrixWorld),H.position.applyMatrix4(m),g.identity(),f.copy(y.matrixWorld),f.premultiply(m),g.extractRotation(f),H.halfWidth.set(.5*y.width,0,0),H.halfHeight.set(0,.5*y.height,0),H.halfWidth.applyMatrix4(g),H.halfHeight.applyMatrix4(g),c.rectArea[n]=H,n++):y.isPointLight?(H=a.get(y),H.position.setFromMatrixPosition(y.matrixWorld),H.position.applyMatrix4(m),H.color.copy(y.color).multiplyScalar(y.intensity),H.distance=y.distance,H.decay=y.decay,y.castShadow&&(ia=y.shadow,u=b.get(y),u.shadowBias=ia.bias,u.shadowRadius=ia.radius,u.shadowMapSize=ia.mapSize,u.shadowCameraNear=ia.camera.near,u.shadowCameraFar=ia.camera.far,c.pointShadow[q]=u,c.pointShadowMap[q]=Ja,c.pointShadowMatrix[q]=y.shadow.matrix,T++),c.point[q]=H,q++):y.isHemisphereLight&&(H=a.get(y),H.direction.setFromMatrixPosition(y.matrixWorld),H.direction.transformDirection(m),H.direction.normalize(),H.skyColor.copy(y.color).multiplyScalar(ia),H.groundColor.copy(y.groundColor).multiplyScalar(ia),c.hemi[w]=H,w++);}c.ambient[0]=h;c.ambient[1]=p;c.ambient[2]=k;d=c.hash;if(d.directionalLength!==l||d.pointLength!==q||d.spotLength!==v||d.rectAreaLength!==n||d.hemiLength!==w||d.numDirectionalShadows!==F||d.numPointShadows!==T||d.numSpotShadows!==V)c.directional.length=l,c.spot.length=v,c.rectArea.length=n,c.point.length=q,c.hemi.length=w,c.directionalShadow.length=F,c.directionalShadowMap.length=F,c.pointShadow.length=T,c.pointShadowMap.length=T,c.spotShadow.length=V,c.spotShadowMap.length=V,c.directionalShadowMatrix.length=F,c.pointShadowMatrix.length=T,c.spotShadowMatrix.length=V,d.directionalLength=l,d.pointLength=q,d.spotLength=v,d.rectAreaLength=n,d.hemiLength=w,d.numDirectionalShadows=F,d.numPointShadows=T,d.numSpotShadows=V,c.version=Ek++;},state:c};}function Uh(){var a=new Dk(),b=[],c=[];return{init:function init(){b.length=0;c.length=0;},state:{lightsArray:b,shadowsArray:c,lights:a},setupLights:function setupLights(d){a.setup(b,c,d);},pushLight:function pushLight(a){b.push(a);},pushShadow:function pushShadow(a){c.push(a);}};}function Fk(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c);}var b=new WeakMap();return{get:function get(c,d){if(!1===b.has(c)){var e=new Uh();b.set(c,new WeakMap());b.get(c).set(d,e);c.addEventListener("dispose",a);}else!1===b.get(c).has(d)?(e=new Uh(),b.get(c).set(d,e)):e=b.get(c).get(d);return e;},dispose:function dispose(){b=new WeakMap();}};}function Fb(a){K.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.setValues(a);}function Gb(a){K.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new n();this.nearDistance=1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.fog=!1;this.setValues(a);}function Vh(a,b,c){function d(a,b,c){c=a<<0|b<<1|c<<2;var d=p[c];void 0===d&&(d=new Fb({depthPacking:3201,morphTargets:a,skinning:b}),p[c]=d);return d;}function e(a,b,c){c=a<<0|b<<1|c<<2;var d=x[c];void 0===d&&(d=new Gb({morphTargets:a,skinning:b}),x[c]=d);return d;}function f(b,c,f,g,h,l){var m=b.geometry,p=d,k=b.customDepthMaterial;!0===f.isPointLight&&(p=e,k=b.customDistanceMaterial);void 0===k?(k=!1,!0===c.morphTargets&&(!0===m.isBufferGeometry?k=m.morphAttributes&&m.morphAttributes.position&&0<m.morphAttributes.position.length:!0===m.isGeometry&&(k=m.morphTargets&&0<m.morphTargets.length)),m=!1,!0===b.isSkinnedMesh&&(!0===c.skinning?m=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b)),b=p(k,m,!0===b.isInstancedMesh)):b=k;a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(k=b.uuid,p=c.uuid,m=r[k],void 0===m&&(m={},r[k]=m),k=m[p],void 0===k&&(k=b.clone(),m[p]=k),b=k);b.visible=c.visible;b.wireframe=c.wireframe;b.side=3===l?null!==c.shadowSide?c.shadowSide:c.side:null!==c.shadowSide?c.shadowSide:q[c.side];b.clipShadows=c.clipShadows;b.clippingPlanes=c.clippingPlanes;b.clipIntersection=c.clipIntersection;b.wireframeLinewidth=c.wireframeLinewidth;b.linewidth=c.linewidth;!0===f.isPointLight&&!0===b.isMeshDistanceMaterial&&(b.referencePosition.setFromMatrixPosition(f.matrixWorld),b.nearDistance=g,b.farDistance=h);return b;}function g(c,d,e,l,m){if(!1!==c.visible){if(c.layers.test(d.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&3===m)&&(!c.frustumCulled||h.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,c.matrixWorld);var p=b.update(c),k=c.material;if(Array.isArray(k))for(var t=p.groups,x=0,q=t.length;x<q;x++){var r=t[x],v=k[r.materialIndex];v&&v.visible&&(v=f(c,v,l,e.near,e.far,m),a.renderBufferDirect(e,null,p,v,c,r));}else k.visible&&(v=f(c,k,l,e.near,e.far,m),a.renderBufferDirect(e,null,p,v,c,null));}c=c.children;p=0;for(k=c.length;p<k;p++){g(c[p],d,e,l,m);}}}var h=new Hc(),l=new u(),m=new u(),k=new ka(),p=[],x=[],r={},q={0:1,1:0,2:2},v=new Ba({defines:{SAMPLE_RATE:.25,HALF_SAMPLE_RATE:.125},uniforms:{shadow_pass:{value:null},resolution:{value:new u()},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),n=v.clone();n.defines.HORIZONAL_PASS=1;var w=new B();w.setAttribute("position",new M(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var F=new S(w,v),T=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(d,e,f){if(!1!==T.enabled&&(!1!==T.autoUpdate||!1!==T.needsUpdate)&&0!==d.length){var p=a.getRenderTarget(),t=a.getActiveCubeFace(),x=a.getActiveMipmapLevel(),q=a.state;q.setBlending(0);q.buffers.color.setClear(1,1,1,1);q.buffers.depth.setTest(!0);q.setScissorTest(!1);for(var r=0,w=d.length;r<w;r++){var C=d[r],y=C.shadow;if(void 0===y)console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");else{l.copy(y.mapSize);var u=y.getFrameExtents();l.multiply(u);m.copy(y.mapSize);if(l.x>c||l.y>c)console.warn("THREE.WebGLShadowMap:",C,"has shadow exceeding max texture size, reducing"),l.x>c&&(m.x=Math.floor(c/u.x),l.x=m.x*u.x,y.mapSize.x=m.x),l.y>c&&(m.y=Math.floor(c/u.y),l.y=m.y*u.y,y.mapSize.y=m.y);null!==y.map||y.isPointLightShadow||3!==this.type||(u={minFilter:1006,magFilter:1006,format:1023},y.map=new Ha(l.x,l.y,u),y.map.texture.name=C.name+".shadowMap",y.mapPass=new Ha(l.x,l.y,u),y.camera.updateProjectionMatrix());null===y.map&&(u={minFilter:1003,magFilter:1003,format:1023},y.map=new Ha(l.x,l.y,u),y.map.texture.name=C.name+".shadowMap",y.camera.updateProjectionMatrix());a.setRenderTarget(y.map);a.clear();u=y.getViewportCount();for(var V=0;V<u;V++){var da=y.getViewport(V);k.set(m.x*da.x,m.y*da.y,m.x*da.z,m.y*da.w);q.viewport(k);y.updateMatrices(C,V);h=y.getFrustum();g(e,f,y.camera,C,this.type);}y.isPointLightShadow||3!==this.type||(C=y,y=f,u=b.update(F),v.uniforms.shadow_pass.value=C.map.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,a.setRenderTarget(C.mapPass),a.clear(),a.renderBufferDirect(y,null,u,v,F,null),n.uniforms.shadow_pass.value=C.mapPass.texture,n.uniforms.resolution.value=C.mapSize,n.uniforms.radius.value=C.radius,a.setRenderTarget(C.map),a.clear(),a.renderBufferDirect(y,null,u,n,F,null));}}T.needsUpdate=!1;a.setRenderTarget(p,t,x);}};}function Gk(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,10241,9728);a.texParameteri(b,10240,9728);for(b=0;b<d;b++){a.texImage2D(c+b,0,6408,1,1,0,6408,5121,e);}return f;}function e(c,d){n[c]=1;0===w[c]&&(a.enableVertexAttribArray(c),w[c]=1);F[c]!==d&&((x?a:b.get("ANGLE_instanced_arrays"))[x?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](c,d),F[c]=d);}function f(b){!0!==u[b]&&(a.enable(b),u[b]=!0);}function g(b){!1!==u[b]&&(a.disable(b),u[b]=!1);}function h(b,c,d,e,h,l,m,p){if(0===b)da&&(g(3042),da=!1);else if(da||(f(3042),da=!0),5!==b){if(b!==y||p!==E){if(100!==A||100!==Ja)a.blendEquation(32774),Ja=A=100;if(p)switch(b){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,0,769,771);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);}else switch(b){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);break;case 3:a.blendFunc(0,769);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);}D=H=Ca=ia=null;y=b;E=p;}}else{h=h||c;l=l||d;m=m||e;if(c!==A||h!==Ja)a.blendEquationSeparate(Lc[c],Lc[h]),A=c,Ja=h;if(d!==ia||e!==Ca||l!==H||m!==D)a.blendFuncSeparate(J[d],J[e],J[l],J[m]),ia=d,Ca=e,H=l,D=m;y=b;E=null;}}function l(b){z!==b&&(b?a.frontFace(2304):a.frontFace(2305),z=b);}function m(b){0!==b?(f(2884),b!==B&&(1===b?a.cullFace(1029):2===b?a.cullFace(1028):a.cullFace(1032))):g(2884);B=b;}function k(b,c,d){if(b){if(f(32823),K!==c||M!==d)a.polygonOffset(c,d),K=c,M=d;}else g(32823);}function p(b){void 0===b&&(b=33984+ha-1);L!==b&&(a.activeTexture(b),L=b);}var x=c.isWebGL2,r=new function(){var b=!1,c=new ka(),d=null,e=new ka(0,0,0,0);return{setMask:function setMask(c){d===c||b||(a.colorMask(c,c,c,c),d=c);},setLocked:function setLocked(a){b=a;},setClear:function setClear(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c));},reset:function reset(){b=!1;d=null;e.set(-1,0,0,0);}};}(),q=new function(){var b=!1,c=null,d=null,e=null;return{setTest:function setTest(a){a?f(2929):g(2929);},setMask:function setMask(d){c===d||b||(a.depthMask(d),c=d);},setFunc:function setFunc(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515);}else a.depthFunc(515);d=b;}},setLocked:function setLocked(a){b=a;},setClear:function setClear(b){e!==b&&(a.clearDepth(b),e=b);},reset:function reset(){b=!1;e=d=c=null;}};}(),v=new function(){var b=!1,c=null,d=null,e=null,h=null,l=null,m=null,p=null,k=null;return{setTest:function setTest(a){b||(a?f(2960):g(2960));},setMask:function setMask(d){c===d||b||(a.stencilMask(d),c=d);},setFunc:function setFunc(b,c,f){if(d!==b||e!==c||h!==f)a.stencilFunc(b,c,f),d=b,e=c,h=f;},setOp:function setOp(b,c,d){if(l!==b||m!==c||p!==d)a.stencilOp(b,c,d),l=b,m=c,p=d;},setLocked:function setLocked(a){b=a;},setClear:function setClear(b){k!==b&&(a.clearStencil(b),k=b);},reset:function reset(){b=!1;k=p=m=l=h=e=d=c=null;}};}();c=a.getParameter(34921);var n=new Uint8Array(c),w=new Uint8Array(c),F=new Uint8Array(c),u={},V=null,da=null,y=null,A=null,ia=null,Ca=null,Ja=null,H=null,D=null,E=!1,z=null,B=null,G=null,K=null,M=null,ha=a.getParameter(35661),N=!1;c=0;c=a.getParameter(7938);-1!==c.indexOf("WebGL")?(c=parseFloat(/^WebGL ([0-9])/.exec(c)[1]),N=1<=c):-1!==c.indexOf("OpenGL ES")&&(c=parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]),N=2<=c);var L=null,Nd={},aa=new ka(),Wh=new ka(),mg={};mg[3553]=d(3553,3553,1);mg[34067]=d(34067,34069,6);r.setClear(0,0,0,1);q.setClear(1);v.setClear(0);f(2929);q.setFunc(3);l(!1);m(1);f(2884);h(0);var Lc={100:32774,101:32778,102:32779};x?(Lc[103]=32775,Lc[104]=32776):(c=b.get("EXT_blend_minmax"),null!==c&&(Lc[103]=c.MIN_EXT,Lc[104]=c.MAX_EXT));var J={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};return{buffers:{color:r,depth:q,stencil:v},initAttributes:function initAttributes(){for(var a=0,b=n.length;a<b;a++){n[a]=0;}},enableAttribute:function enableAttribute(a){e(a,0);},enableAttributeAndDivisor:e,disableUnusedAttributes:function disableUnusedAttributes(){for(var b=0,c=w.length;b!==c;++b){w[b]!==n[b]&&(a.disableVertexAttribArray(b),w[b]=0);}},enable:f,disable:g,useProgram:function useProgram(b){return V!==b?(a.useProgram(b),V=b,!0):!1;},setBlending:h,setMaterial:function setMaterial(a,b){2===a.side?g(2884):f(2884);var c=1===a.side;b&&(c=!c);l(c);1===a.blending&&!1===a.transparent?h(0):h(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha);q.setFunc(a.depthFunc);q.setTest(a.depthTest);q.setMask(a.depthWrite);r.setMask(a.colorWrite);b=a.stencilWrite;v.setTest(b);b&&(v.setMask(a.stencilWriteMask),v.setFunc(a.stencilFunc,a.stencilRef,a.stencilFuncMask),v.setOp(a.stencilFail,a.stencilZFail,a.stencilZPass));k(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits);},setFlipSided:l,setCullFace:m,setLineWidth:function setLineWidth(b){b!==G&&(N&&a.lineWidth(b),G=b);},setPolygonOffset:k,setScissorTest:function setScissorTest(a){a?f(3089):g(3089);},activeTexture:p,bindTexture:function bindTexture(b,c){null===L&&p();var d=Nd[L];void 0===d&&(d={type:void 0,texture:void 0},Nd[L]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||mg[b]),d.type=b,d.texture=c;},unbindTexture:function unbindTexture(){var b=Nd[L];void 0!==b&&void 0!==b.type&&(a.bindTexture(b.type,null),b.type=void 0,b.texture=void 0);},compressedTexImage2D:function compressedTexImage2D(){try{a.compressedTexImage2D.apply(a,arguments);}catch(Q){console.error("THREE.WebGLState:",Q);}},texImage2D:function texImage2D(){try{a.texImage2D.apply(a,arguments);}catch(Q){console.error("THREE.WebGLState:",Q);}},texImage3D:function texImage3D(){try{a.texImage3D.apply(a,arguments);}catch(Q){console.error("THREE.WebGLState:",Q);}},scissor:function scissor(b){!1===aa.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),aa.copy(b));},viewport:function viewport(b){!1===Wh.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),Wh.copy(b));},reset:function reset(){for(var b=0;b<w.length;b++){1===w[b]&&(a.disableVertexAttribArray(b),w[b]=0);}u={};L=null;Nd={};B=z=y=V=null;r.reset();q.reset();v.reset();}};}function Hk(a,b,c,d,e,f,g){function h(a,b){return K?new OffscreenCanvas(a,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas");}function l(a,b,c,d){var e=1;if(a.width>d||a.height>d)e=d/Math.max(a.width,a.height);if(1>e||!0===b){if("undefined"!==typeof HTMLImageElement&&a instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&a instanceof ImageBitmap)return d=b?L.floorPowerOfTwo:Math.floor,b=d(e*a.width),e=d(e*a.height),void 0===G&&(G=h(b,e)),c=c?h(b,e):G,c.width=b,c.height=e,c.getContext("2d").drawImage(a,0,0,b,e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+b+"x"+e+")."),c;"data"in a&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");}return a;}function m(a){return L.isPowerOfTwo(a.width)&&L.isPowerOfTwo(a.height);}function k(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter;}function p(b,c,e,f){a.generateMipmap(b);d.get(c).__maxMipLevel=Math.log(Math.max(e,f))*Math.LOG2E;}function x(c,d,e){if(!1===Ca)return d;if(null!==c){if(void 0!==a[c])return a[c];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+c+"'");}c=d;6403===d&&(5126===e&&(c=33326),5131===e&&(c=33325),5121===e&&(c=33321));6407===d&&(5126===e&&(c=34837),5131===e&&(c=34843),5121===e&&(c=32849));6408===d&&(5126===e&&(c=34836),5131===e&&(c=34842),5121===e&&(c=32856));33325===c||33326===c||34842===c||34836===c?b.get("EXT_color_buffer_float"):(34843===c||34837===c)&&console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");return c;}function r(a){return 1003===a||1004===a||1005===a?9728:9729;}function q(b){b=b.target;b.removeEventListener("dispose",q);var c=d.get(b);void 0!==c.__webglInit&&(a.deleteTexture(c.__webglTexture),d.remove(b));b.isVideoTexture&&B.delete(b);g.memory.textures--;}function v(b){b=b.target;b.removeEventListener("dispose",v);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLCubeRenderTarget)for(e=0;6>e;e++){a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);}else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture);d.remove(b);}g.memory.textures--;}function n(a,b){var e=d.get(a);if(a.isVideoTexture){var f=g.render.frame;B.get(a)!==f&&(B.set(a,f),a.update());}if(0<a.version&&e.__version!==a.version)if(f=a.image,void 0===f)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(!1===f.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{da(e,a,b);return;}c.activeTexture(33984+b);c.bindTexture(3553,e.__webglTexture);}function w(b,e){if(6===b.image.length){var g=d.get(b);if(0<b.version&&g.__version!==b.version){V(g,b);c.activeTexture(33984+e);c.bindTexture(34067,g.__webglTexture);a.pixelStorei(37440,b.flipY);var h=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture);e=b.image[0]&&b.image[0].isDataTexture;for(var t=[],q=0;6>q;q++){t[q]=h||e?e?b.image[q].image:b.image[q]:l(b.image[q],!1,!0,H);}var r=t[0],v=m(r)||Ca,n=f.convert(b.format),C=f.convert(b.type),w=x(b.internalFormat,n,C);u(34067,b,v);if(h){for(q=0;6>q;q++){var aa=t[q].mipmaps;for(h=0;h<aa.length;h++){var y=aa[h];1023!==b.format&&1022!==b.format?null!==n?c.compressedTexImage2D(34069+q,h,w,y.width,y.height,0,y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+q,h,w,y.width,y.height,0,n,C,y.data);}}g.__maxMipLevel=aa.length-1;}else{aa=b.mipmaps;for(q=0;6>q;q++){if(e)for(c.texImage2D(34069+q,0,w,t[q].width,t[q].height,0,n,C,t[q].data),h=0;h<aa.length;h++){y=aa[h],y=y.image[q].image,c.texImage2D(34069+q,h+1,w,y.width,y.height,0,n,C,y.data);}else for(c.texImage2D(34069+q,0,w,n,C,t[q]),h=0;h<aa.length;h++){y=aa[h],c.texImage2D(34069+q,h+1,w,n,C,y.image[q]);}}g.__maxMipLevel=aa.length;}k(b,v)&&p(34067,b,r.width,r.height);g.__version=b.version;if(b.onUpdate)b.onUpdate(b);}else c.activeTexture(33984+e),c.bindTexture(34067,g.__webglTexture);}}function F(a,b){c.activeTexture(33984+b);c.bindTexture(34067,d.get(a).__webglTexture);}function u(c,f,g){g?(a.texParameteri(c,10242,N[f.wrapS]),a.texParameteri(c,10243,N[f.wrapT]),32879!==c&&35866!==c||a.texParameteri(c,32882,N[f.wrapR]),a.texParameteri(c,10240,ha[f.magFilter]),a.texParameteri(c,10241,ha[f.minFilter])):(a.texParameteri(c,10242,33071),a.texParameteri(c,10243,33071),32879!==c&&35866!==c||a.texParameteri(c,32882,33071),1001===f.wrapS&&1001===f.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(c,10240,r(f.magFilter)),a.texParameteri(c,10241,r(f.minFilter)),1003!==f.minFilter&&1006!==f.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));!(g=b.get("EXT_texture_filter_anisotropic"))||1015===f.type&&null===b.get("OES_texture_float_linear")||1016===f.type&&null===(Ca||b.get("OES_texture_half_float_linear"))||!(1<f.anisotropy||d.get(f).__currentAnisotropy)||(a.texParameterf(c,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,e.getMaxAnisotropy())),d.get(f).__currentAnisotropy=f.anisotropy);}function V(b,c){void 0===b.__webglInit&&(b.__webglInit=!0,c.addEventListener("dispose",q),b.__webglTexture=a.createTexture(),g.memory.textures++);}function da(b,d,e){var g=3553;d.isDataTexture2DArray&&(g=35866);d.isDataTexture3D&&(g=32879);V(b,d);c.activeTexture(33984+e);c.bindTexture(g,b.__webglTexture);a.pixelStorei(37440,d.flipY);a.pixelStorei(37441,d.premultiplyAlpha);a.pixelStorei(3317,d.unpackAlignment);e=Ca?!1:1001!==d.wrapS||1001!==d.wrapT||1003!==d.minFilter&&1006!==d.minFilter;e=e&&!1===m(d.image);e=l(d.image,e,!1,E);var h=m(e)||Ca,t=f.convert(d.format),q=f.convert(d.type),r=x(d.internalFormat,t,q);u(g,d,h);var v=d.mipmaps;if(d.isDepthTexture){r=6402;if(1015===d.type){if(!1===Ca)throw Error("Float Depth Texture only supported in WebGL2.0");r=36012;}else Ca&&(r=33189);1026===d.format&&6402===r&&1012!==d.type&&1014!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),d.type=1012,q=f.convert(d.type));1027===d.format&&(r=34041,1020!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),d.type=1020,q=f.convert(d.type)));c.texImage2D(3553,0,r,e.width,e.height,0,t,q,null);}else if(d.isDataTexture){if(0<v.length&&h){for(var n=0,C=v.length;n<C;n++){var w=v[n];c.texImage2D(3553,n,r,w.width,w.height,0,t,q,w.data);}d.generateMipmaps=!1;b.__maxMipLevel=v.length-1;}else c.texImage2D(3553,0,r,e.width,e.height,0,t,q,e.data),b.__maxMipLevel=0;}else if(d.isCompressedTexture){n=0;for(C=v.length;n<C;n++){w=v[n],1023!==d.format&&1022!==d.format?null!==t?c.compressedTexImage2D(3553,n,r,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,n,r,w.width,w.height,0,t,q,w.data);}b.__maxMipLevel=v.length-1;}else if(d.isDataTexture2DArray)c.texImage3D(35866,0,r,e.width,e.height,e.depth,0,t,q,e.data),b.__maxMipLevel=0;else if(d.isDataTexture3D)c.texImage3D(32879,0,r,e.width,e.height,e.depth,0,t,q,e.data),b.__maxMipLevel=0;else if(0<v.length&&h){n=0;for(C=v.length;n<C;n++){w=v[n],c.texImage2D(3553,n,r,t,q,w);}d.generateMipmaps=!1;b.__maxMipLevel=v.length-1;}else c.texImage2D(3553,0,r,t,q,e),b.__maxMipLevel=0;k(d,h)&&p(g,d,e.width,e.height);b.__version=d.version;if(d.onUpdate)d.onUpdate(d);}function y(b,e,g,h){var l=f.convert(e.texture.format),m=f.convert(e.texture.type),p=x(e.texture.internalFormat,l,m);c.texImage2D(h,0,p,e.width,e.height,0,l,m,null);a.bindFramebuffer(36160,b);a.framebufferTexture2D(36160,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(36160,null);}function A(b,c,d){a.bindRenderbuffer(36161,b);if(c.depthBuffer&&!c.stencilBuffer)d?(d=ia(c),a.renderbufferStorageMultisample(36161,d,33189,c.width,c.height)):a.renderbufferStorage(36161,33189,c.width,c.height),a.framebufferRenderbuffer(36160,36096,36161,b);else if(c.depthBuffer&&c.stencilBuffer)d?(d=ia(c),a.renderbufferStorageMultisample(36161,d,35056,c.width,c.height)):a.renderbufferStorage(36161,34041,c.width,c.height),a.framebufferRenderbuffer(36160,33306,36161,b);else{b=f.convert(c.texture.format);var e=f.convert(c.texture.type);b=x(c.texture.internalFormat,b,e);d?(d=ia(c),a.renderbufferStorageMultisample(36161,d,b,c.width,c.height)):a.renderbufferStorage(36161,b,c.width,c.height);}a.bindRenderbuffer(36161,null);}function ia(a){return Ca&&a.isWebGLMultisampleRenderTarget?Math.min(z,a.samples):0;}var Ca=e.isWebGL2,D=e.maxTextures,H=e.maxCubemapSize,E=e.maxTextureSize,z=e.maxSamples,B=new WeakMap(),G,K=!1;try{K="undefined"!==typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d");}catch(Nd){}var M=0,N={1E3:10497,1001:33071,1002:33648},ha={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987},P=!1,O=!1;this.allocateTextureUnit=function(){var a=M;a>=D&&console.warn("THREE.WebGLTextures: Trying to use "+a+" texture units while this GPU supports only "+D);M+=1;return a;};this.resetTextureUnits=function(){M=0;};this.setTexture2D=n;this.setTexture2DArray=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?da(e,a,b):(c.activeTexture(33984+b),c.bindTexture(35866,e.__webglTexture));};this.setTexture3D=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?da(e,a,b):(c.activeTexture(33984+b),c.bindTexture(32879,e.__webglTexture));};this.setTextureCube=w;this.setTextureCubeDynamic=F;this.setupRenderTarget=function(b){var e=d.get(b),h=d.get(b.texture);b.addEventListener("dispose",v);h.__webglTexture=a.createTexture();g.memory.textures++;var l=!0===b.isWebGLCubeRenderTarget,t=!0===b.isWebGLMultisampleRenderTarget,q=m(b)||Ca;if(l)for(e.__webglFramebuffer=[],t=0;6>t;t++){e.__webglFramebuffer[t]=a.createFramebuffer();}else if(e.__webglFramebuffer=a.createFramebuffer(),t)if(Ca){e.__webglMultisampledFramebuffer=a.createFramebuffer();e.__webglColorRenderbuffer=a.createRenderbuffer();a.bindRenderbuffer(36161,e.__webglColorRenderbuffer);t=f.convert(b.texture.format);var r=f.convert(b.texture.type);t=x(b.texture.internalFormat,t,r);r=ia(b);a.renderbufferStorageMultisample(36161,r,t,b.width,b.height);a.bindFramebuffer(36160,e.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(36160,36064,36161,e.__webglColorRenderbuffer);a.bindRenderbuffer(36161,null);b.depthBuffer&&(e.__webglDepthRenderbuffer=a.createRenderbuffer(),A(e.__webglDepthRenderbuffer,b,!0));a.bindFramebuffer(36160,null);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(l){c.bindTexture(34067,h.__webglTexture);u(34067,b.texture,q);for(t=0;6>t;t++){y(e.__webglFramebuffer[t],b,36064,34069+t);}k(b.texture,q)&&p(34067,b.texture,b.width,b.height);c.bindTexture(34067,null);}else c.bindTexture(3553,h.__webglTexture),u(3553,b.texture,q),y(e.__webglFramebuffer,b,36064,3553),k(b.texture,q)&&p(3553,b.texture,b.width,b.height),c.bindTexture(3553,null);if(b.depthBuffer){e=d.get(b);h=!0===b.isWebGLCubeRenderTarget;if(b.depthTexture){if(h)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");a.bindFramebuffer(36160,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);n(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(36160,36096,3553,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(36160,33306,3553,e,0);else throw Error("Unknown depthTexture format");}else if(h)for(e.__webglDepthbuffer=[],h=0;6>h;h++){a.bindFramebuffer(36160,e.__webglFramebuffer[h]),e.__webglDepthbuffer[h]=a.createRenderbuffer(),A(e.__webglDepthbuffer[h],b);}else a.bindFramebuffer(36160,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),A(e.__webglDepthbuffer,b);a.bindFramebuffer(36160,null);}};this.updateRenderTargetMipmap=function(a){var b=a.texture,e=m(a)||Ca;if(k(b,e)){e=a.isWebGLCubeRenderTarget?34067:3553;var f=d.get(b).__webglTexture;c.bindTexture(e,f);p(e,b,a.width,a.height);c.bindTexture(e,null);}};this.updateMultisampleRenderTarget=function(b){if(b.isWebGLMultisampleRenderTarget)if(Ca){var c=d.get(b);a.bindFramebuffer(36008,c.__webglMultisampledFramebuffer);a.bindFramebuffer(36009,c.__webglFramebuffer);c=b.width;var e=b.height,f=16384;b.depthBuffer&&(f|=256);b.stencilBuffer&&(f|=1024);a.blitFramebuffer(0,0,c,e,0,0,c,e,f,9728);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");};this.safeSetTexture2D=function(a,b){a&&a.isWebGLRenderTarget&&(!1===P&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),P=!0),a=a.texture);n(a,b);};this.safeSetTextureCube=function(a,b){a&&a.isWebGLCubeRenderTarget&&(!1===O&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),O=!0),a=a.texture);a&&a.isCubeTexture||Array.isArray(a.image)&&6===a.image.length?w(a,b):F(a,b);};}function Xh(a,b,c){var d=c.isWebGL2;return{convert:function convert(a){if(1009===a)return 5121;if(1017===a)return 32819;if(1018===a)return 32820;if(1019===a)return 33635;if(1010===a)return 5120;if(1011===a)return 5122;if(1012===a)return 5123;if(1013===a)return 5124;if(1014===a)return 5125;if(1015===a)return 5126;if(1016===a){if(d)return 5131;var c=b.get("OES_texture_half_float");return null!==c?c.HALF_FLOAT_OES:null;}if(1021===a)return 6406;if(1022===a)return 6407;if(1023===a)return 6408;if(1024===a)return 6409;if(1025===a)return 6410;if(1026===a)return 6402;if(1027===a)return 34041;if(1028===a)return 6403;if(1029===a)return 36244;if(1030===a)return 33319;if(1031===a)return 33320;if(1032===a)return 36248;if(1033===a)return 36249;if(33776===a||33777===a||33778===a||33779===a)if(c=b.get("WEBGL_compressed_texture_s3tc"),null!==c){if(33776===a)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===a)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===a)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===a)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT;}else return null;if(35840===a||35841===a||35842===a||35843===a)if(c=b.get("WEBGL_compressed_texture_pvrtc"),null!==c){if(35840===a)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===a)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===a)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===a)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;}else return null;if(36196===a)return c=b.get("WEBGL_compressed_texture_etc1"),null!==c?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(37492===a||37496===a)if(c=b.get("WEBGL_compressed_texture_etc"),null!==c){if(37492===a)return c.COMPRESSED_RGB8_ETC2;if(37496===a)return c.COMPRESSED_RGBA8_ETC2_EAC;}if(37808===a||37809===a||37810===a||37811===a||37812===a||37813===a||37814===a||37815===a||37816===a||37817===a||37818===a||37819===a||37820===a||37821===a||37840===a||37841===a||37842===a||37843===a||37844===a||37845===a||37846===a||37847===a||37848===a||37849===a||37850===a||37851===a||37852===a||37853===a)return c=b.get("WEBGL_compressed_texture_astc"),null!==c?a:null;if(1020===a){if(d)return 34042;c=b.get("WEBGL_depth_texture");return null!==c?c.UNSIGNED_INT_24_8_WEBGL:null;}}};}function Qe(a){ba.call(this);this.cameras=a||[];}function Mc(){E.call(this);this.type="Group";}function Yh(a,b){function c(a){var b=q.get(a.inputSource);b&&(b.targetRay&&b.targetRay.dispatchEvent({type:a.type}),b.grip&&b.grip.dispatchEvent({type:a.type}));}function d(){q.forEach(function(a,b){a.targetRay&&(a.targetRay.dispatchEvent({type:"disconnected",data:b}),a.targetRay.visible=!1);a.grip&&(a.grip.dispatchEvent({type:"disconnected",data:b}),a.grip.visible=!1);});q.clear();a.setFramebuffer(null);a.setRenderTarget(a.getRenderTarget());A.stop();h.isPresenting=!1;h.dispatchEvent({type:"sessionend"});}function e(a){k=a;A.setContext(l);A.start();h.isPresenting=!0;h.dispatchEvent({type:"sessionstart"});}function f(a){for(var b=l.inputSources,c=0;c<r.length;c++){q.set(b[c],r[c]);}for(c=0;c<a.removed.length;c++){b=a.removed[c];var d=q.get(b);d&&(d.targetRay&&d.targetRay.dispatchEvent({type:"disconnected",data:b}),d.grip&&d.grip.dispatchEvent({type:"disconnected",data:b}),q.delete(b));}for(c=0;c<a.added.length;c++){if(b=a.added[c],d=q.get(b))d.targetRay&&d.targetRay.dispatchEvent({type:"connected",data:b}),d.grip&&d.grip.dispatchEvent({type:"connected",data:b});}}function g(a,b){null===b?a.matrixWorld.copy(a.matrix):a.matrixWorld.multiplyMatrices(b.matrixWorld,a.matrix);a.matrixWorldInverse.getInverse(a.matrixWorld);}var h=this,l=null,m=1,k=null,p="local-floor",x=null,r=[],q=new Map(),v=new ba();v.layers.enable(1);v.viewport=new ka();var C=new ba();C.layers.enable(2);C.viewport=new ka();var w=new Qe([v,C]);w.layers.enable(1);w.layers.enable(2);var F=null,u=null;this.isPresenting=this.enabled=!1;this.getController=function(a){var b=r[a];void 0===b&&(b={},r[a]=b);void 0===b.targetRay&&(b.targetRay=new Mc(),b.targetRay.matrixAutoUpdate=!1,b.targetRay.visible=!1);return b.targetRay;};this.getControllerGrip=function(a){var b=r[a];void 0===b&&(b={},r[a]=b);void 0===b.grip&&(b.grip=new Mc(),b.grip.matrixAutoUpdate=!1,b.grip.visible=!1);return b.grip;};this.setFramebufferScaleFactor=function(a){m=a;1==h.isPresenting&&console.warn("WebXRManager: Cannot change framebuffer scale while presenting VR content");};this.setReferenceSpaceType=function(a){p=a;};this.getReferenceSpace=function(){return k;};this.getSession=function(){return l;};this.setSession=function(a){l=a;null!==l&&(l.addEventListener("select",c),l.addEventListener("selectstart",c),l.addEventListener("selectend",c),l.addEventListener("squeeze",c),l.addEventListener("squeezestart",c),l.addEventListener("squeezeend",c),l.addEventListener("end",d),a=b.getContextAttributes(),a=new XRWebGLLayer(l,b,{antialias:a.antialias,alpha:a.alpha,depth:a.depth,stencil:a.stencil,framebufferScaleFactor:m}),l.updateRenderState({baseLayer:a}),l.requestReferenceSpace(p).then(e),l.addEventListener("inputsourceschange",f));};var V=new n(),da=new n();this.getCamera=function(a){w.near=C.near=v.near=a.near;w.far=C.far=v.far=a.far;if(F!==w.near||u!==w.far)l.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,u=w.far;var b=a.parent,c=w.cameras;g(w,b);for(var d=0;d<c.length;d++){g(c[d],b);}a.matrixWorld.copy(w.matrixWorld);a=a.children;d=0;for(b=a.length;d<b;d++){a[d].updateMatrixWorld(!0);}V.setFromMatrixPosition(v.matrixWorld);da.setFromMatrixPosition(C.matrixWorld);d=V.distanceTo(da);var e=v.projectionMatrix.elements,f=C.projectionMatrix.elements,h=e[14]/(e[10]-1);a=e[14]/(e[10]+1);b=(e[9]+1)/e[5];c=(e[9]-1)/e[5];var m=(e[8]-1)/e[0],p=(f[8]+1)/f[0];f=h*m;e=h*p;p=d/(-m+p);m=p*-m;v.matrixWorld.decompose(w.position,w.quaternion,w.scale);w.translateX(m);w.translateZ(p);w.matrixWorld.compose(w.position,w.quaternion,w.scale);w.matrixWorldInverse.getInverse(w.matrixWorld);h+=p;p=a+p;w.projectionMatrix.makePerspective(f-m,e+(d-m),b*a/p*h,c*a/p*h,h,p);return w;};var y=null,A=new zh();A.setAnimationLoop(function(b,c){x=c.getViewerPose(k);if(null!==x){var d=x.views,e=l.renderState.baseLayer;a.setFramebuffer(e.framebuffer);for(var f=0;f<d.length;f++){var g=d[f],h=e.getViewport(g),m=w.cameras[f];m.matrix.fromArray(g.transform.matrix);m.projectionMatrix.fromArray(g.projectionMatrix);m.viewport.set(h.x,h.y,h.width,h.height);0===f&&w.matrix.copy(m.matrix);}}d=l.inputSources;for(f=0;f<r.length;f++){e=r[f],g=d[f],m=h=null,g&&(e.targetRay&&(h=c.getPose(g.targetRaySpace,k),null!==h&&(e.targetRay.matrix.fromArray(h.transform.matrix),e.targetRay.matrix.decompose(e.targetRay.position,e.targetRay.rotation,e.targetRay.scale))),e.grip&&g.gripSpace&&(m=c.getPose(g.gripSpace,k),null!==m&&(e.grip.matrix.fromArray(m.transform.matrix),e.grip.matrix.decompose(e.grip.position,e.grip.rotation,e.grip.scale)))),e.targetRay&&(e.targetRay.visible=null!==h),e.grip&&(e.grip.visible=null!==m);}y&&y(b,c);});this.setAnimationLoop=function(a){y=a;};this.dispose=function(){};}function ng(a){var b;function c(){ra=new xj(I);Fa=new vj(I,ra,a);!1===Fa.isWebGL2&&(ra.get("WEBGL_depth_texture"),ra.get("OES_texture_float"),ra.get("OES_texture_half_float"),ra.get("OES_texture_half_float_linear"),ra.get("OES_standard_derivatives"),ra.get("OES_element_index_uint"),ra.get("ANGLE_instanced_arrays"));ra.get("OES_texture_float_linear");qa=new Xh(I,ra,Fa);Z=new Gk(I,ra,Fa);Z.scissor(U.copy(ja).multiplyScalar(Q).floor());Z.viewport(aa.copy(R).multiplyScalar(Q).floor());ba=new Aj(I);Y=new wk();fa=new Hk(I,ra,Z,Y,Fa,qa,ba);oa=new sj(I,Fa);xa=new yj(I,oa,ba);sa=new Dj(I,xa,oa,ba);ya=new Cj(I);ta=new vk(H,ra,Fa);wa=new zk();va=new Fk();pa=new tj(H,Z,sa,da);Aa=new uj(I,ra,ba,Fa);Ba=new zj(I,ra,ba,Fa);ba.programs=ta.programs;H.capabilities=Fa;H.extensions=ra;H.properties=Y;H.renderLists=wa;H.state=Z;H.info=ba;}function d(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");G=!0;}function e(){console.log("THREE.WebGLRenderer: Context Restored.");G=!1;c();}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);Y.remove(a);}function g(a){var b=Y.get(a).program;a.program=void 0;void 0!==b&&ta.releaseProgram(b);}function h(a,b){a.render(function(a){H.renderBufferImmediate(a,b);});}function l(a,b,c,d){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isGroup)c=a.renderOrder;else if(a.isLOD)!0===a.autoUpdate&&a.update(b);else if(a.isLight)z.pushLight(a),a.castShadow&&z.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||kg.intersectsSprite(a)){d&&Hb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md);var e=sa.update(a),f=a.material;f.visible&&B.push(a,e,f,c,Hb.z,null);}}else if(a.isImmediateRenderObject)d&&Hb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md),B.push(a,null,a.material,c,Hb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.frame!==ba.render.frame&&(a.skeleton.update(),a.skeleton.frame=ba.render.frame),!a.frustumCulled||kg.intersectsObject(a))if(d&&Hb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md),e=sa.update(a),f=a.material,Array.isArray(f))for(var g=e.groups,h=0,m=g.length;h<m;h++){var p=g[h],k=f[p.materialIndex];k&&k.visible&&B.push(a,e,k,c,Hb.z,p);}else f.visible&&B.push(a,e,f,c,Hb.z,null);a=a.children;h=0;for(m=a.length;h<m;h++){l(a[h],b,c,d);}}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,l=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera){ca=c;for(var p=c.cameras,t=0,q=p.length;t<q;t++){var x=p[t];h.layers.test(x.layers)&&(Z.viewport(aa.copy(x.viewport)),z.setupLights(x),k(h,b,x,l,m,g));}}else ca=null,k(h,b,c,l,m,g);}}function k(a,c,d,e,f,g){a.onBeforeRender(H,c,d,e,f,g);z=va.get(c,ca||d);a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){var l=x(d,c,f,a);Z.setMaterial(f);ha=b=null;Pe=!1;h(a,l);}else H.renderBufferDirect(d,c,e,f,a,g);a.onAfterRender(H,c,d,e,f,g);z=va.get(c,ca||d);}function p(a,b,c){var d=Y.get(a),e=z.state.lights,h=e.state.version;c=ta.getParameters(a,e.state,z.state.shadowsArray,b,Ua.numPlanes,Ua.numIntersection,c);var l=ta.getProgramCacheKey(c),m=d.program,p=!0;if(void 0===m)a.addEventListener("dispose",f);else if(m.cacheKey!==l)g(a);else{if(d.lightsStateVersion!==h)d.lightsStateVersion=h;else if(void 0!==c.shaderID)return;p=!1;}p&&(m=ta.acquireProgram(c,l),d.program=m,d.uniforms=c.uniforms,d.environment=a.isMeshStandardMaterial?b.environment:null,d.outputEncoding=H.outputEncoding,a.program=m);c=m.getAttributes();if(a.morphTargets)for(l=a.numSupportedMorphTargets=0;l<H.maxMorphTargets;l++){0<=c["morphTarget"+l]&&a.numSupportedMorphTargets++;}if(a.morphNormals)for(l=a.numSupportedMorphNormals=0;l<H.maxMorphNormals;l++){0<=c["morphNormal"+l]&&a.numSupportedMorphNormals++;}c=d.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Ua.numPlanes,d.numIntersection=Ua.numIntersection,c.clippingPlanes=Ua.uniform;d.fog=b.fog;d.needsLights=a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&!0===a.lights;d.lightsStateVersion=h;d.needsLights&&(c.ambientLightColor.value=e.state.ambient,c.lightProbe.value=e.state.probe,c.directionalLights.value=e.state.directional,c.directionalLightShadows.value=e.state.directionalShadow,c.spotLights.value=e.state.spot,c.spotLightShadows.value=e.state.spotShadow,c.rectAreaLights.value=e.state.rectArea,c.pointLights.value=e.state.point,c.pointLightShadows.value=e.state.pointShadow,c.hemisphereLights.value=e.state.hemi,c.directionalShadowMap.value=e.state.directionalShadowMap,c.directionalShadowMatrix.value=e.state.directionalShadowMatrix,c.spotShadowMap.value=e.state.spotShadowMap,c.spotShadowMatrix.value=e.state.spotShadowMatrix,c.pointShadowMap.value=e.state.pointShadowMap,c.pointShadowMatrix.value=e.state.pointShadowMatrix);a=d.program.getUniforms();a=Eb.seqWithValue(a.seq,c);d.uniformsList=a;}function x(a,b,c,d){fa.resetTextureUnits();var e=b.fog,f=c.isMeshStandardMaterial?b.environment:null,g=Y.get(c),h=z.state.lights;na&&(lg||a!==W)&&Ua.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,g,a===W&&c.id===Oe);c.version===g.__version?void 0===g.program?p(c,b,d):c.fog&&g.fog!==e?p(c,b,d):g.environment!==f?p(c,b,d):g.needsLights&&g.lightsStateVersion!==h.state.version?p(c,b,d):void 0===g.numClippingPlanes||g.numClippingPlanes===Ua.numPlanes&&g.numIntersection===Ua.numIntersection?g.outputEncoding!==H.outputEncoding&&p(c,b,d):p(c,b,d):(p(c,b,d),g.__version=c.version);var l=!1,m=!1,k=!1;b=g.program;h=b.getUniforms();var t=g.uniforms;Z.useProgram(b.program)&&(k=m=l=!0);c.id!==Oe&&(Oe=c.id,m=!0);if(l||W!==a){h.setValue(I,"projectionMatrix",a.projectionMatrix);Fa.logarithmicDepthBuffer&&h.setValue(I,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));W!==a&&(W=a,k=m=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshStandardMaterial||c.envMap)l=h.map.cameraPosition,void 0!==l&&l.setValue(I,Hb.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial)&&h.setValue(I,"isOrthographic",!0===a.isOrthographicCamera);(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&h.setValue(I,"viewMatrix",a.matrixWorldInverse);}if(c.skinning&&(h.setOptional(I,d,"bindMatrix"),h.setOptional(I,d,"bindMatrixInverse"),a=d.skeleton))if(l=a.bones,Fa.floatVertexTextures){if(void 0===a.boneTexture){l=Math.sqrt(4*l.length);l=L.ceilPowerOfTwo(l);l=Math.max(l,4);var x=new Float32Array(l*l*4);x.set(a.boneMatrices);var v=new ac(x,l,l,1023,1015);a.boneMatrices=x;a.boneTexture=v;a.boneTextureSize=l;}h.setValue(I,"boneTexture",a.boneTexture,fa);h.setValue(I,"boneTextureSize",a.boneTextureSize);}else h.setOptional(I,a,"boneMatrices");if(m||g.receiveShadow!==d.receiveShadow)g.receiveShadow=d.receiveShadow,h.setValue(I,"receiveShadow",d.receiveShadow);if(m){h.setValue(I,"toneMappingExposure",H.toneMappingExposure);h.setValue(I,"toneMappingWhitePoint",H.toneMappingWhitePoint);g.needsLights&&(m=k,t.ambientLightColor.needsUpdate=m,t.lightProbe.needsUpdate=m,t.directionalLights.needsUpdate=m,t.directionalLightShadows.needsUpdate=m,t.pointLights.needsUpdate=m,t.pointLightShadows.needsUpdate=m,t.spotLights.needsUpdate=m,t.spotLightShadows.needsUpdate=m,t.rectAreaLights.needsUpdate=m,t.hemisphereLights.needsUpdate=m);e&&c.fog&&(t.fogColor.value.copy(e.color),e.isFog?(t.fogNear.value=e.near,t.fogFar.value=e.far):e.isFogExp2&&(t.fogDensity.value=e.density));if(c.isMeshBasicMaterial)r(t,c);else if(c.isMeshLambertMaterial)r(t,c),c.emissiveMap&&(t.emissiveMap.value=c.emissiveMap);else if(c.isMeshToonMaterial)r(t,c),t.specular.value.copy(c.specular),t.shininess.value=Math.max(c.shininess,1E-4),c.gradientMap&&(t.gradientMap.value=c.gradientMap),c.emissiveMap&&(t.emissiveMap.value=c.emissiveMap),c.bumpMap&&(t.bumpMap.value=c.bumpMap,t.bumpScale.value=c.bumpScale,1===c.side&&(t.bumpScale.value*=-1)),c.normalMap&&(t.normalMap.value=c.normalMap,t.normalScale.value.copy(c.normalScale),1===c.side&&t.normalScale.value.negate()),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias);else if(c.isMeshPhongMaterial)r(t,c),t.specular.value.copy(c.specular),t.shininess.value=Math.max(c.shininess,1E-4),c.emissiveMap&&(t.emissiveMap.value=c.emissiveMap),c.bumpMap&&(t.bumpMap.value=c.bumpMap,t.bumpScale.value=c.bumpScale,1===c.side&&(t.bumpScale.value*=-1)),c.normalMap&&(t.normalMap.value=c.normalMap,t.normalScale.value.copy(c.normalScale),1===c.side&&t.normalScale.value.negate()),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias);else if(c.isMeshStandardMaterial)r(t,c,f),c.isMeshPhysicalMaterial?(q(t,c,f),t.reflectivity.value=c.reflectivity,t.clearcoat.value=c.clearcoat,t.clearcoatRoughness.value=c.clearcoatRoughness,c.sheen&&t.sheen.value.copy(c.sheen),c.clearcoatNormalMap&&(t.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),t.clearcoatNormalMap.value=c.clearcoatNormalMap,1===c.side&&t.clearcoatNormalScale.value.negate()),t.transparency.value=c.transparency):q(t,c,f);else if(c.isMeshMatcapMaterial)r(t,c),c.matcap&&(t.matcap.value=c.matcap),c.bumpMap&&(t.bumpMap.value=c.bumpMap,t.bumpScale.value=c.bumpScale,1===c.side&&(t.bumpScale.value*=-1)),c.normalMap&&(t.normalMap.value=c.normalMap,t.normalScale.value.copy(c.normalScale),1===c.side&&t.normalScale.value.negate()),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias);else if(c.isMeshDepthMaterial)r(t,c),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias);else if(c.isMeshDistanceMaterial)r(t,c),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias),t.referencePosition.value.copy(c.referencePosition),t.nearDistance.value=c.nearDistance,t.farDistance.value=c.farDistance;else if(c.isMeshNormalMaterial)r(t,c),c.bumpMap&&(t.bumpMap.value=c.bumpMap,t.bumpScale.value=c.bumpScale,1===c.side&&(t.bumpScale.value*=-1)),c.normalMap&&(t.normalMap.value=c.normalMap,t.normalScale.value.copy(c.normalScale),1===c.side&&t.normalScale.value.negate()),c.displacementMap&&(t.displacementMap.value=c.displacementMap,t.displacementScale.value=c.displacementScale,t.displacementBias.value=c.displacementBias);else if(c.isLineBasicMaterial)t.diffuse.value.copy(c.color),t.opacity.value=c.opacity,c.isLineDashedMaterial&&(t.dashSize.value=c.dashSize,t.totalSize.value=c.dashSize+c.gapSize,t.scale.value=c.scale);else if(c.isPointsMaterial){t.diffuse.value.copy(c.color);t.opacity.value=c.opacity;t.size.value=c.size*Q;t.scale.value=.5*J;c.map&&(t.map.value=c.map);c.alphaMap&&(t.alphaMap.value=c.alphaMap);if(c.map)var n=c.map;else c.alphaMap&&(n=c.alphaMap);void 0!==n&&(!0===n.matrixAutoUpdate&&n.updateMatrix(),t.uvTransform.value.copy(n.matrix));}else if(c.isSpriteMaterial){t.diffuse.value.copy(c.color);t.opacity.value=c.opacity;t.rotation.value=c.rotation;c.map&&(t.map.value=c.map);c.alphaMap&&(t.alphaMap.value=c.alphaMap);if(c.map)var w=c.map;else c.alphaMap&&(w=c.alphaMap);void 0!==w&&(!0===w.matrixAutoUpdate&&w.updateMatrix(),t.uvTransform.value.copy(w.matrix));}else c.isShadowMaterial&&(t.color.value.copy(c.color),t.opacity.value=c.opacity);void 0!==t.ltc_1&&(t.ltc_1.value=D.LTC_1);void 0!==t.ltc_2&&(t.ltc_2.value=D.LTC_2);Eb.upload(I,g.uniformsList,t,fa);c.isShaderMaterial&&(c.uniformsNeedUpdate=!1);}c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&(Eb.upload(I,g.uniformsList,t,fa),c.uniformsNeedUpdate=!1);c.isSpriteMaterial&&h.setValue(I,"center",d.center);h.setValue(I,"modelViewMatrix",d.modelViewMatrix);h.setValue(I,"normalMatrix",d.normalMatrix);h.setValue(I,"modelMatrix",d.matrixWorld);return b;}function r(a,b,c){a.opacity.value=b.opacity;b.color&&a.diffuse.value.copy(b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);b.map&&(a.map.value=b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);if(c=b.envMap||c)a.envMap.value=c,a.flipEnvMap.value=c.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio,a.maxMipLevel.value=Y.get(c).__maxMipLevel;b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var d=b.map;else b.specularMap?d=b.specularMap:b.displacementMap?d=b.displacementMap:b.normalMap?d=b.normalMap:b.bumpMap?d=b.bumpMap:b.roughnessMap?d=b.roughnessMap:b.metalnessMap?d=b.metalnessMap:b.alphaMap?d=b.alphaMap:b.emissiveMap&&(d=b.emissiveMap);void 0!==d&&(d.isWebGLRenderTarget&&(d=d.texture),!0===d.matrixAutoUpdate&&d.updateMatrix(),a.uvTransform.value.copy(d.matrix));if(b.aoMap)var e=b.aoMap;else b.lightMap&&(e=b.lightMap);void 0!==e&&(e.isWebGLRenderTarget&&(e=e.texture),!0===e.matrixAutoUpdate&&e.updateMatrix(),a.uv2Transform.value.copy(e.matrix));}function q(a,b,c){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);if(b.envMap||c)a.envMapIntensity.value=b.envMapIntensity;}a=a||{};var v=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),C=void 0!==a.context?a.context:null,w=void 0!==a.alpha?a.alpha:!1,F=void 0!==a.depth?a.depth:!0,T=void 0!==a.stencil?a.stencil:!0,V=void 0!==a.antialias?a.antialias:!1,da=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,y=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,A=void 0!==a.powerPreference?a.powerPreference:"default",E=void 0!==a.failIfMajorPerformanceCaveat?a.failIfMajorPerformanceCaveat:!1,B=null,z=null;this.domElement=v;this.debug={checkShaderErrors:!0};this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.outputEncoding=3E3;this.physicallyCorrectLights=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var H=this,G=!1,M=null,N=0,K=0,O=null,X=null,Oe=-1;var ha=b=null;var Pe=!1;var W=null,ca=null,aa=new ka(),U=new ka(),ea=null,S=v.width,J=v.height,Q=1,la=null,ma=null,R=new ka(0,0,S,J),ja=new ka(0,0,S,J),jg=!1,kg=new Hc(),Ua=new wj(),na=!1,lg=!1,Md=new P(),Hb=new n();try{w={alpha:w,depth:F,stencil:T,antialias:V,premultipliedAlpha:da,preserveDrawingBuffer:y,powerPreference:A,failIfMajorPerformanceCaveat:E,xrCompatible:!0};v.addEventListener("webglcontextlost",d,!1);v.addEventListener("webglcontextrestored",e,!1);var I=C||v.getContext("webgl",w)||v.getContext("experimental-webgl",w);if(null===I){if(null!==v.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.");}void 0===I.getShaderPrecisionFormat&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1};});}catch(Zh){throw console.error("THREE.WebGLRenderer: "+Zh.message),Zh;}var ra,Fa,Z,ba,Y,fa,oa,xa,sa,ta,wa,va,pa,ya,Aa,Ba,qa;c();var ua=new Yh(H,I);this.xr=ua;var Ea=new Vh(H,sa,Fa.maxTextureSize);this.shadowMap=Ea;this.getContext=function(){return I;};this.getContextAttributes=function(){return I.getContextAttributes();};this.forceContextLoss=function(){var a=ra.get("WEBGL_lose_context");a&&a.loseContext();};this.forceContextRestore=function(){var a=ra.get("WEBGL_lose_context");a&&a.restoreContext();};this.getPixelRatio=function(){return Q;};this.setPixelRatio=function(a){void 0!==a&&(Q=a,this.setSize(S,J,!1));};this.getSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),a=new u());return a.set(S,J);};this.setSize=function(a,b,c){ua.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(S=a,J=b,v.width=Math.floor(a*Q),v.height=Math.floor(b*Q),!1!==c&&(v.style.width=a+"px",v.style.height=b+"px"),this.setViewport(0,0,a,b));};this.getDrawingBufferSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),a=new u());return a.set(S*Q,J*Q).floor();};this.setDrawingBufferSize=function(a,b,c){S=a;J=b;Q=c;v.width=Math.floor(a*c);v.height=Math.floor(b*c);this.setViewport(0,0,a,b);};this.getCurrentViewport=function(a){void 0===a&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),a=new ka());return a.copy(aa);};this.getViewport=function(a){return a.copy(R);};this.setViewport=function(a,b,c,d){a.isVector4?R.set(a.x,a.y,a.z,a.w):R.set(a,b,c,d);Z.viewport(aa.copy(R).multiplyScalar(Q).floor());};this.getScissor=function(a){return a.copy(ja);};this.setScissor=function(a,b,c,d){a.isVector4?ja.set(a.x,a.y,a.z,a.w):ja.set(a,b,c,d);Z.scissor(U.copy(ja).multiplyScalar(Q).floor());};this.getScissorTest=function(){return jg;};this.setScissorTest=function(a){Z.setScissorTest(jg=a);};this.setOpaqueSort=function(a){la=a;};this.setTransparentSort=function(a){ma=a;};this.getClearColor=function(){return pa.getClearColor();};this.setClearColor=function(){pa.setClearColor.apply(pa,arguments);};this.getClearAlpha=function(){return pa.getClearAlpha();};this.setClearAlpha=function(){pa.setClearAlpha.apply(pa,arguments);};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=16384;if(void 0===b||b)d|=256;if(void 0===c||c)d|=1024;I.clear(d);};this.clearColor=function(){this.clear(!0,!1,!1);};this.clearDepth=function(){this.clear(!1,!0,!1);};this.clearStencil=function(){this.clear(!1,!1,!0);};this.dispose=function(){v.removeEventListener("webglcontextlost",d,!1);v.removeEventListener("webglcontextrestored",e,!1);wa.dispose();va.dispose();Y.dispose();sa.dispose();ua.dispose();za.stop();};this.renderBufferImmediate=function(a,b){Z.initAttributes();var c=Y.get(a);a.hasPositions&&!c.position&&(c.position=I.createBuffer());a.hasNormals&&!c.normal&&(c.normal=I.createBuffer());a.hasUvs&&!c.uv&&(c.uv=I.createBuffer());a.hasColors&&!c.color&&(c.color=I.createBuffer());b=b.getAttributes();a.hasPositions&&(I.bindBuffer(34962,c.position),I.bufferData(34962,a.positionArray,35048),Z.enableAttribute(b.position),I.vertexAttribPointer(b.position,3,5126,!1,0,0));a.hasNormals&&(I.bindBuffer(34962,c.normal),I.bufferData(34962,a.normalArray,35048),Z.enableAttribute(b.normal),I.vertexAttribPointer(b.normal,3,5126,!1,0,0));a.hasUvs&&(I.bindBuffer(34962,c.uv),I.bufferData(34962,a.uvArray,35048),Z.enableAttribute(b.uv),I.vertexAttribPointer(b.uv,2,5126,!1,0,0));a.hasColors&&(I.bindBuffer(34962,c.color),I.bufferData(34962,a.colorArray,35048),Z.enableAttribute(b.color),I.vertexAttribPointer(b.color,3,5126,!1,0,0));Z.disableUnusedAttributes();I.drawArrays(4,0,a.count);a.count=0;};var Ga=new ob();this.renderBufferDirect=function(a,c,d,e,f,g){null===c&&(c=Ga);var h=f.isMesh&&0>f.matrixWorld.determinant(),l=x(a,c,e,f);Z.setMaterial(e,h);var m=!1;if(b!==d.id||ha!==l.id||Pe!==(!0===e.wireframe))b=d.id,ha=l.id,Pe=!0===e.wireframe,m=!0;if(e.morphTargets||e.morphNormals)ya.update(f,d,e,l),m=!0;a=d.index;c=d.attributes.position;if(null===a){if(void 0===c||0===c.count)return;}else if(0===a.count)return;var t=1;!0===e.wireframe&&(a=xa.getWireframeAttribute(d),t=2);h=Aa;if(null!==a){var p=oa.get(a);h=Ba;h.setIndex(p);}if(m){if(!1!==Fa.isWebGL2||!f.isInstancedMesh&&!d.isInstancedBufferGeometry||null!==ra.get("ANGLE_instanced_arrays")){Z.initAttributes();m=d.attributes;l=l.getAttributes();var k=e.defaultAttributeValues;for(T in l){var q=l[T];if(0<=q){var r=m[T];if(void 0!==r){var n=r.normalized,v=r.itemSize,w=oa.get(r);if(void 0!==w){var C=w.buffer,y=w.type;w=w.bytesPerElement;if(r.isInterleavedBufferAttribute){var F=r.data,u=F.stride;r=r.offset;F&&F.isInstancedInterleavedBuffer?(Z.enableAttributeAndDivisor(q,F.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=F.meshPerAttribute*F.count)):Z.enableAttribute(q);I.bindBuffer(34962,C);I.vertexAttribPointer(q,v,y,n,u*w,r*w);}else r.isInstancedBufferAttribute?(Z.enableAttributeAndDivisor(q,r.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=r.meshPerAttribute*r.count)):Z.enableAttribute(q),I.bindBuffer(34962,C),I.vertexAttribPointer(q,v,y,n,0,0);}}else if("instanceMatrix"===T)w=oa.get(f.instanceMatrix),void 0!==w&&(C=w.buffer,y=w.type,Z.enableAttributeAndDivisor(q+0,1),Z.enableAttributeAndDivisor(q+1,1),Z.enableAttributeAndDivisor(q+2,1),Z.enableAttributeAndDivisor(q+3,1),I.bindBuffer(34962,C),I.vertexAttribPointer(q+0,4,y,!1,64,0),I.vertexAttribPointer(q+1,4,y,!1,64,16),I.vertexAttribPointer(q+2,4,y,!1,64,32),I.vertexAttribPointer(q+3,4,y,!1,64,48));else if(void 0!==k&&(n=k[T],void 0!==n))switch(n.length){case 2:I.vertexAttrib2fv(q,n);break;case 3:I.vertexAttrib3fv(q,n);break;case 4:I.vertexAttrib4fv(q,n);break;default:I.vertexAttrib1fv(q,n);}}}Z.disableUnusedAttributes();}null!==a&&I.bindBuffer(34963,p.buffer);}var T=d.drawRange.start*t;m=null!==g?g.start*t:0;p=Math.max(T,m);g=Math.max(0,Math.min(null!==a?a.count:c.count,T+d.drawRange.count*t,m+(null!==g?g.count*t:Infinity))-1-p+1);0!==g&&(f.isMesh?!0===e.wireframe?(Z.setLineWidth(e.wireframeLinewidth*(null===O?Q:1)),h.setMode(1)):h.setMode(4):f.isLine?(e=e.linewidth,void 0===e&&(e=1),Z.setLineWidth(e*(null===O?Q:1)),f.isLineSegments?h.setMode(1):f.isLineLoop?h.setMode(2):h.setMode(3)):f.isPoints?h.setMode(0):f.isSprite&&h.setMode(4),f.isInstancedMesh?h.renderInstances(d,p,g,f.count):d.isInstancedBufferGeometry?h.renderInstances(d,p,g,d.maxInstancedCount):h.render(p,g));};this.compile=function(a,b){z=va.get(a,b);z.init();a.traverse(function(a){a.isLight&&(z.pushLight(a),a.castShadow&&z.pushShadow(a));});z.setupLights(b);var c={};a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var d=0;d<b.material.length;d++){!1===b.material[d].uuid in c&&(p(b.material[d],a,b),c[b.material[d].uuid]=!0);}else!1===b.material.uuid in c&&(p(b.material,a,b),c[b.material.uuid]=!0);});};var Da=null,za=new zh();za.setAnimationLoop(function(a){ua.isPresenting||Da&&Da(a);});"undefined"!==typeof window&&za.setContext(window);this.setAnimationLoop=function(a){Da=a;ua.setAnimationLoop(a);za.start();};this.render=function(a,c,d,e){if(void 0!==d){console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");var f=d;}if(void 0!==e){console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");var g=e;}c&&c.isCamera?G||(ha=b=null,Pe=!1,Oe=-1,W=null,!0===a.autoUpdate&&a.updateMatrixWorld(),null===c.parent&&c.updateMatrixWorld(),ua.enabled&&ua.isPresenting&&(c=ua.getCamera(c)),z=va.get(a,c),z.init(),a.onBeforeRender(H,a,c,f||O),Md.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),kg.setFromProjectionMatrix(Md),lg=this.localClippingEnabled,na=Ua.init(this.clippingPlanes,lg,c),B=wa.get(a,c),B.init(),l(a,c,0,H.sortObjects),B.finish(),!0===H.sortObjects&&B.sort(la,ma),na&&Ua.beginShadows(),Ea.render(z.state.shadowsArray,a,c),z.setupLights(c),na&&Ua.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==f&&this.setRenderTarget(f),pa.render(B,a,c,g),d=B.opaque,e=B.transparent,a.overrideMaterial?(f=a.overrideMaterial,d.length&&m(d,a,c,f),e.length&&m(e,a,c,f)):(d.length&&m(d,a,c),e.length&&m(e,a,c)),a.onAfterRender(H,a,c),null!==O&&(fa.updateRenderTargetMipmap(O),fa.updateMultisampleRenderTarget(O)),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1),z=B=null):console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");};this.setFramebuffer=function(a){M!==a&&null===O&&I.bindFramebuffer(36160,a);M=a;};this.getActiveCubeFace=function(){return N;};this.getActiveMipmapLevel=function(){return K;};this.getRenderTarget=function(){return O;};this.setRenderTarget=function(a,b,c){O=a;N=b;K=c;a&&void 0===Y.get(a).__webglFramebuffer&&fa.setupRenderTarget(a);var d=M,e=!1;a?(d=Y.get(a).__webglFramebuffer,a.isWebGLCubeRenderTarget?(d=d[b||0],e=!0):d=a.isWebGLMultisampleRenderTarget?Y.get(a).__webglMultisampledFramebuffer:d,aa.copy(a.viewport),U.copy(a.scissor),ea=a.scissorTest):(aa.copy(R).multiplyScalar(Q).floor(),U.copy(ja).multiplyScalar(Q).floor(),ea=jg);X!==d&&(I.bindFramebuffer(36160,d),X=d);Z.viewport(aa);Z.scissor(U);Z.setScissorTest(ea);e&&(a=Y.get(a.texture),I.framebufferTexture2D(36160,36064,34069+(b||0),a.__webglTexture,c||0));};this.readRenderTargetPixels=function(a,b,c,d,e,f,g){if(a&&a.isWebGLRenderTarget){var h=Y.get(a).__webglFramebuffer;a.isWebGLCubeRenderTarget&&void 0!==g&&(h=h[g]);if(h){g=!1;h!==X&&(I.bindFramebuffer(36160,h),g=!0);try{var l=a.texture,m=l.format,t=l.type;1023!==m&&qa.convert(m)!==I.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===t||qa.convert(t)===I.getParameter(35738)||1015===t&&(Fa.isWebGL2||ra.get("OES_texture_float")||ra.get("WEBGL_color_buffer_float"))||1016===t&&(Fa.isWebGL2?ra.get("EXT_color_buffer_float"):ra.get("EXT_color_buffer_half_float"))?36053===I.checkFramebufferStatus(36160)?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&I.readPixels(b,c,d,e,qa.convert(m),qa.convert(t),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");}finally{g&&I.bindFramebuffer(36160,X);}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");};this.copyFramebufferToTexture=function(a,b,c){void 0===c&&(c=0);var d=Math.pow(2,-c),e=Math.floor(b.image.width*d);d=Math.floor(b.image.height*d);var f=qa.convert(b.format);fa.setTexture2D(b,0);I.copyTexImage2D(3553,c,f,a.x,a.y,e,d,0);Z.unbindTexture();};this.copyTextureToTexture=function(a,b,c,d){var e=b.image.width,f=b.image.height,g=qa.convert(c.format),h=qa.convert(c.type);fa.setTexture2D(c,0);b.isDataTexture?I.texSubImage2D(3553,d||0,a.x,a.y,e,f,g,h,b.image.data):I.texSubImage2D(3553,d||0,a.x,a.y,g,h,b.image);Z.unbindTexture();};this.initTexture=function(a){fa.setTexture2D(a,0);Z.unbindTexture();};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}function Re(a,b){this.name="";this.color=new z(a);this.density=void 0!==b?b:2.5E-4;}function Se(a,b,c){this.name="";this.color=new z(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3;}function rb(a,b){this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0;}function Od(a,b,c,d){this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d;}function Ib(a){K.call(this);this.type="SpriteMaterial";this.color=new z(16777215);this.alphaMap=this.map=null;this.rotation=0;this.transparent=this.sizeAttenuation=!0;this.setValues(a);}function Pd(a){E.call(this);this.type="Sprite";if(void 0===Nc){Nc=new B();var b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]);b=new rb(b,5);Nc.setIndex([0,1,2,0,2,3]);Nc.setAttribute("position",new Od(b,3,0,!1));Nc.setAttribute("uv",new Od(b,2,3,!1));}this.geometry=Nc;this.material=void 0!==a?a:new Ib();this.center=new u(.5,.5);}function Te(a,b,c,d,e,f){Oc.subVectors(a,c).addScalar(.5).multiply(d);void 0!==e?(Qd.x=f*Oc.x-e*Oc.y,Qd.y=e*Oc.x+f*Oc.y):Qd.copy(Oc);a.copy(b);a.x+=Qd.x;a.y+=Qd.y;a.applyMatrix4($h);}function Rd(){E.call(this);this._currentLevel=0;this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}});this.autoUpdate=!0;}function Sd(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");S.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new P();this.bindMatrixInverse=new P();}function Ue(a,b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);this.frame=-1;if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++){this.boneInverses.push(new P());}}function og(){E.call(this);this.type="Bone";}function Ve(a,b,c){S.call(this,a,b);this.instanceMatrix=new M(new Float32Array(16*c),16);this.count=c;this.frustumCulled=!1;}function la(a){K.call(this);this.type="LineBasicMaterial";this.color=new z(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.setValues(a);}function Ka(a,b,c){1===c&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");E.call(this);this.type="Line";this.geometry=void 0!==a?a:new B();this.material=void 0!==b?b:new la();}function ma(a,b){Ka.call(this,a,b);this.type="LineSegments";}function We(a,b){Ka.call(this,a,b);this.type="LineLoop";}function Va(a){K.call(this);this.type="PointsMaterial";this.color=new z(16777215);this.alphaMap=this.map=null;this.size=1;this.sizeAttenuation=!0;this.morphTargets=!1;this.setValues(a);}function Pc(a,b){E.call(this);this.type="Points";this.geometry=void 0!==a?a:new B();this.material=void 0!==b?b:new Va();this.updateMorphTargets();}function pg(a,b,c,d,e,f,g){var h=qg.distanceSqToPoint(a);h<c&&(c=new n(),qg.closestPointToPoint(a,c),c.applyMatrix4(d),a=e.ray.origin.distanceTo(c),a<e.near||a>e.far||f.push({distance:a,distanceToRay:Math.sqrt(h),point:c,index:b,face:null,object:g}));}function rg(a,b,c,d,e,f,g,h,l){W.call(this,a,b,c,d,e,f,g,h,l);this.format=void 0!==g?g:1022;this.minFilter=void 0!==f?f:1006;this.magFilter=void 0!==e?e:1006;this.generateMipmaps=!1;}function Qc(a,b,c,d,e,f,g,h,l,m,t,p){W.call(this,null,f,g,h,l,m,d,e,t,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1;}function Td(a,b,c,d,e,f,g,h,l){W.call(this,a,b,c,d,e,f,g,h,l);this.needsUpdate=!0;}function Ud(a,b,c,d,e,f,g,h,l,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);W.call(this,null,d,e,f,g,h,m,c,l);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1;}function Rc(a){B.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},h=["a","b","c"];if(a&&a.isGeometry){var l=a.faces;var m=0;for(d=l.length;m<d;m++){var t=l[m];for(c=0;3>c;c++){var p=t[h[c]];var k=t[h[(c+1)%3]];f[0]=Math.min(p,k);f[1]=Math.max(p,k);p=f[0]+","+f[1];void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]});}}for(p in g){m=g[p],h=a.vertices[m.index1],b.push(h.x,h.y,h.z),h=a.vertices[m.index2],b.push(h.x,h.y,h.z);}}else if(a&&a.isBufferGeometry)if(h=new n(),null!==a.index){l=a.attributes.position;t=a.index;var r=a.groups;0===r.length&&(r=[{start:0,count:t.count,materialIndex:0}]);a=0;for(e=r.length;a<e;++a){for(m=r[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3){for(c=0;3>c;c++){p=t.getX(m+c),k=t.getX(m+(c+1)%3),f[0]=Math.min(p,k),f[1]=Math.max(p,k),p=f[0]+","+f[1],void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]});}}}for(p in g){m=g[p],h.fromBufferAttribute(l,m.index1),b.push(h.x,h.y,h.z),h.fromBufferAttribute(l,m.index2),b.push(h.x,h.y,h.z);}}else for(l=a.attributes.position,m=0,d=l.count/3;m<d;m++){for(c=0;3>c;c++){g=3*m+c,h.fromBufferAttribute(l,g),b.push(h.x,h.y,h.z),g=3*m+(c+1)%3,h.fromBufferAttribute(l,g),b.push(h.x,h.y,h.z);}}this.setAttribute("position",new A(b,3));}function Vd(a,b,c){N.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Sc(a,b,c));this.mergeVertices();}function Sc(a,b,c){B.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new n(),l=new n(),m=new n(),t=new n(),p=new n(),k,r;3>a.length&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var q=b+1;for(k=0;k<=c;k++){var v=k/c;for(r=0;r<=b;r++){var C=r/b;a(C,v,l);e.push(l.x,l.y,l.z);0<=C-1E-5?(a(C-1E-5,v,m),t.subVectors(l,m)):(a(C+1E-5,v,m),t.subVectors(m,l));0<=v-1E-5?(a(C,v-1E-5,m),p.subVectors(l,m)):(a(C,v+1E-5,m),p.subVectors(m,l));h.crossVectors(t,p).normalize();f.push(h.x,h.y,h.z);g.push(C,v);}}for(k=0;k<c;k++){for(r=0;r<b;r++){a=k*q+r+1,h=(k+1)*q+r+1,l=(k+1)*q+r,d.push(k*q+r,a,l),d.push(a,h,l);}}this.setIndex(d);this.setAttribute("position",new A(e,3));this.setAttribute("normal",new A(f,3));this.setAttribute("uv",new A(g,2));}function Wd(a,b,c,d){N.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new Ga(a,b,c,d));this.mergeVertices();}function Ga(a,b,c,d){function e(a){h.push(a.x,a.y,a.z);}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2];}function g(a,b,c,d){0>d&&1===a.x&&(l[b]=a.x-1);0===c.x&&0===c.z&&(l[b]=d/2/Math.PI+.5);}B.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],l=[];(function(a){for(var c=new n(),d=new n(),g=new n(),h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var l,m,k=c,w=d,F=g,u=Math.pow(2,a),V=[];for(m=0;m<=u;m++){V[m]=[];var da=k.clone().lerp(F,m/u),y=w.clone().lerp(F,m/u),z=u-m;for(l=0;l<=z;l++){V[m][l]=0===l&&m===u?da:da.clone().lerp(y,l/z);}}for(m=0;m<u;m++){for(l=0;l<2*(u-m)-1;l++){k=Math.floor(l/2),0===l%2?(e(V[m][k+1]),e(V[m+1][k]),e(V[m][k])):(e(V[m][k+1]),e(V[m+1][k+1]),e(V[m+1][k]));}}}})(d);(function(a){for(var b=new n(),c=0;c<h.length;c+=3){b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z;}})(c);(function(){for(var a=new n(),b=0;b<h.length;b+=3){a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],l.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));}a=new n();b=new n();for(var c=new n(),d=new n(),e=new u(),f=new u(),k=new u(),C=0,w=0;C<h.length;C+=9,w+=6){a.set(h[C+0],h[C+1],h[C+2]);b.set(h[C+3],h[C+4],h[C+5]);c.set(h[C+6],h[C+7],h[C+8]);e.set(l[w+0],l[w+1]);f.set(l[w+2],l[w+3]);k.set(l[w+4],l[w+5]);d.copy(a).add(b).add(c).divideScalar(3);var F=Math.atan2(d.z,-d.x);g(e,w+0,a,F);g(f,w+2,b,F);g(k,w+4,c,F);}for(a=0;a<l.length;a+=6){b=l[a+0],c=l[a+2],d=l[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(l[a+0]+=1),.2>c&&(l[a+2]+=1),.2>d&&(l[a+4]+=1));}})();this.setAttribute("position",new A(h,3));this.setAttribute("normal",new A(h.slice(),3));this.setAttribute("uv",new A(l,2));0===d?this.computeVertexNormals():this.normalizeNormals();}function Xd(a,b){N.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Tc(a,b));this.mergeVertices();}function Tc(a,b){Ga.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Yd(a,b){N.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new cc(a,b));this.mergeVertices();}function cc(a,b){Ga.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Zd(a,b){N.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Uc(a,b));this.mergeVertices();}function Uc(a,b){var c=(1+Math.sqrt(5))/2;Ga.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b};}function $d(a,b){N.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Vc(a,b));this.mergeVertices();}function Vc(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;Ga.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b};}function ae(a,b,c,d,e,f){N.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new dc(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices();}function dc(a,b,c,d,e){function f(e){t=a.getPointAt(e/b,t);var f=g.normals[e];e=g.binormals[e];for(x=0;x<=d;x++){var m=x/d*Math.PI*2,k=Math.sin(m);m=-Math.cos(m);l.x=m*f.x+k*e.x;l.y=m*f.y+k*e.y;l.z=m*f.z+k*e.z;l.normalize();q.push(l.x,l.y,l.z);h.x=t.x+c*l.x;h.y=t.y+c*l.y;h.z=t.z+c*l.z;r.push(h.x,h.y,h.z);}}B.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new n(),l=new n(),m=new u(),t=new n(),k,x,r=[],q=[],v=[],C=[];for(k=0;k<b;k++){f(k);}f(!1===e?b:0);for(k=0;k<=b;k++){for(x=0;x<=d;x++){m.x=k/b,m.y=x/d,v.push(m.x,m.y);}}(function(){for(x=1;x<=b;x++){for(k=1;k<=d;k++){var a=(d+1)*x+(k-1),c=(d+1)*x+k,e=(d+1)*(x-1)+k;C.push((d+1)*(x-1)+(k-1),a,e);C.push(a,c,e);}}})();this.setIndex(C);this.setAttribute("position",new A(r,3));this.setAttribute("normal",new A(q,3));this.setAttribute("uv",new A(v,2));}function be(a,b,c,d,e,f,g){N.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Wc(a,b,c,d,e,f));this.mergeVertices();}function Wc(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5;}B.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],l=[],m=[],k=[],p,x=new n(),r=new n(),q=new n(),v=new n(),C=new n(),w=new n(),u=new n();for(p=0;p<=c;++p){var T=p/c*e*Math.PI*2;g(T,e,f,a,q);g(T+.01,e,f,a,v);w.subVectors(v,q);u.addVectors(v,q);C.crossVectors(w,u);u.crossVectors(C,w);C.normalize();u.normalize();for(T=0;T<=d;++T){var V=T/d*Math.PI*2,da=-b*Math.cos(V);V=b*Math.sin(V);x.x=q.x+(da*u.x+V*C.x);x.y=q.y+(da*u.y+V*C.y);x.z=q.z+(da*u.z+V*C.z);l.push(x.x,x.y,x.z);r.subVectors(x,q).normalize();m.push(r.x,r.y,r.z);k.push(p/c);k.push(T/d);}}for(T=1;T<=c;T++){for(p=1;p<=d;p++){a=(d+1)*T+(p-1),b=(d+1)*T+p,e=(d+1)*(T-1)+p,h.push((d+1)*(T-1)+(p-1),a,e),h.push(a,b,e);}}this.setIndex(h);this.setAttribute("position",new A(l,3));this.setAttribute("normal",new A(m,3));this.setAttribute("uv",new A(k,2));}function ce(a,b,c,d,e){N.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Xc(a,b,c,d,e));this.mergeVertices();}function Xc(a,b,c,d,e){B.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],l=[],m=new n(),k=new n(),p=new n(),x,r;for(x=0;x<=c;x++){for(r=0;r<=d;r++){var q=r/d*e,v=x/c*Math.PI*2;k.x=(a+b*Math.cos(v))*Math.cos(q);k.y=(a+b*Math.cos(v))*Math.sin(q);k.z=b*Math.sin(v);g.push(k.x,k.y,k.z);m.x=a*Math.cos(q);m.y=a*Math.sin(q);p.subVectors(k,m).normalize();h.push(p.x,p.y,p.z);l.push(r/d);l.push(x/c);}}for(x=1;x<=c;x++){for(r=1;r<=d;r++){a=(d+1)*(x-1)+r-1,b=(d+1)*(x-1)+r,e=(d+1)*x+r,f.push((d+1)*x+r-1,a,e),f.push(a,b,e);}}this.setIndex(f);this.setAttribute("position",new A(g,3));this.setAttribute("normal",new A(h,3));this.setAttribute("uv",new A(l,2));}function ai(a,b,c,d,e){for(var f,g=0,h=b,l=c-d;h<c;h+=d){g+=(a[l]-a[h])*(a[h+1]+a[l+1]),l=h;}if(e===0<g)for(e=b;e<c;e+=d){f=bi(e,a[e],a[e+1],f);}else for(e=c-d;e>=b;e-=d){f=bi(e,a[e],a[e+1],f);}f&&ec(f,f.next)&&(de(f),f=f.next);return f;}function ee(a,b){if(!a)return a;b||(b=a);do{var c=!1;if(a.steiner||!ec(a,a.next)&&0!==xa(a.prev,a,a.next))a=a.next;else{de(a);a=b=a.prev;if(a===a.next)break;c=!0;}}while(c||a!==b);return b;}function fe(a,b,c,d,e,f,g){if(a){if(!g&&f){var h=a,l=h;do{null===l.z&&(l.z=sg(l.x,l.y,d,e,f)),l.prevZ=l.prev,l=l.nextZ=l.next;}while(l!==h);l.prevZ.nextZ=null;l.prevZ=null;h=l;var m,k,p,x,r=1;do{l=h;var q=h=null;for(k=0;l;){k++;var n=l;for(m=p=0;m<r&&(p++,n=n.nextZ,n);m++){;}for(x=r;0<p||0<x&&n;){0!==p&&(0===x||!n||l.z<=n.z)?(m=l,l=l.nextZ,p--):(m=n,n=n.nextZ,x--),q?q.nextZ=m:h=m,m.prevZ=q,q=m;}l=n;}q.nextZ=null;r*=2;}while(1<k);}for(h=a;a.prev!==a.next;){l=a.prev;n=a.next;if(f)q=Ik(a,d,e,f);else a:if(q=a,k=q.prev,p=q,r=q.next,0<=xa(k,p,r))q=!1;else{for(m=q.next.next;m!==q.prev;){if(Yc(k.x,k.y,p.x,p.y,r.x,r.y,m.x,m.y)&&0<=xa(m.prev,m,m.next)){q=!1;break a;}m=m.next;}q=!0;}if(q)b.push(l.i/c),b.push(a.i/c),b.push(n.i/c),de(a),h=a=n.next;else if(a=n,a===h){if(!g)fe(ee(a),b,c,d,e,f,1);else if(1===g){g=b;h=c;l=a;do{n=l.prev,q=l.next.next,!ec(n,q)&&ci(n,l,l.next,q)&&ge(n,q)&&ge(q,n)&&(g.push(n.i/h),g.push(l.i/h),g.push(q.i/h),de(l),de(l.next),l=a=q),l=l.next;}while(l!==a);a=l;fe(a,b,c,d,e,f,2);}else if(2===g)a:{g=a;do{for(h=g.next.next;h!==g.prev;){if(l=g.i!==h.i){l=g;n=h;if(q=l.next.i!==n.i&&l.prev.i!==n.i){b:{q=l;do{if(q.i!==l.i&&q.next.i!==l.i&&q.i!==n.i&&q.next.i!==n.i&&ci(q,q.next,l,n)){q=!0;break b;}q=q.next;}while(q!==l);q=!1;}q=!q;}if(q=q&&ge(l,n)&&ge(n,l)){q=l;k=!1;p=(l.x+n.x)/2;n=(l.y+n.y)/2;do{q.y>n!==q.next.y>n&&q.next.y!==q.y&&p<(q.next.x-q.x)*(n-q.y)/(q.next.y-q.y)+q.x&&(k=!k),q=q.next;}while(q!==l);q=k;}l=q;}if(l){a=di(g,h);g=ee(g,g.next);a=ee(a,a.next);fe(g,b,c,d,e,f);fe(a,b,c,d,e,f);break a;}h=h.next;}g=g.next;}while(g!==a);}break;}}}}function Ik(a,b,c,d){var e=a.prev,f=a.next;if(0<=xa(e,a,f))return!1;var g=e.x>a.x?e.x>f.x?e.x:f.x:a.x>f.x?a.x:f.x,h=e.y>a.y?e.y>f.y?e.y:f.y:a.y>f.y?a.y:f.y,l=sg(e.x<a.x?e.x<f.x?e.x:f.x:a.x<f.x?a.x:f.x,e.y<a.y?e.y<f.y?e.y:f.y:a.y<f.y?a.y:f.y,b,c,d);b=sg(g,h,b,c,d);c=a.prevZ;for(d=a.nextZ;c&&c.z>=l&&d&&d.z<=b;){if(c!==a.prev&&c!==a.next&&Yc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=xa(c.prev,c,c.next))return!1;c=c.prevZ;if(d!==a.prev&&d!==a.next&&Yc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=xa(d.prev,d,d.next))return!1;d=d.nextZ;}for(;c&&c.z>=l;){if(c!==a.prev&&c!==a.next&&Yc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=xa(c.prev,c,c.next))return!1;c=c.prevZ;}for(;d&&d.z<=b;){if(d!==a.prev&&d!==a.next&&Yc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=xa(d.prev,d,d.next))return!1;d=d.nextZ;}return!0;}function Jk(a,b){return a.x-b.x;}function Kk(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next;}var h=c.x<c.next.x?c:c.next;}}c=c.next;}while(c!==b);if(!h)return null;if(d===f)return h.prev;b=h;g=h.x;var l=h.y,m=Infinity;for(c=h.next;c!==b;){if(d>=c.x&&c.x>=g&&d!==c.x&&Yc(e<l?d:f,e,g,l,e<l?f:d,e,c.x,c.y)){var k=Math.abs(e-c.y)/(d-c.x);(k<m||k===m&&c.x>h.x)&&ge(c,a)&&(h=c,m=k);}c=c.next;}return h;}function sg(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1;}function Lk(a){var b=a,c=a;do{if(b.x<c.x||b.x===c.x&&b.y<c.y)c=b;b=b.next;}while(b!==a);return c;}function Yc(a,b,c,d,e,f,g,h){return 0<=(e-g)*(b-h)-(a-g)*(f-h)&&0<=(a-g)*(d-h)-(c-g)*(b-h)&&0<=(c-g)*(f-h)-(e-g)*(d-h);}function xa(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y);}function ec(a,b){return a.x===b.x&&a.y===b.y;}function ci(a,b,c,d){return ec(a,c)&&ec(b,d)||ec(a,d)&&ec(c,b)?!0:0<xa(a,b,c)!==0<xa(a,b,d)&&0<xa(c,d,a)!==0<xa(c,d,b);}function ge(a,b){return 0>xa(a.prev,a,a.next)?0<=xa(a,b,a.next)&&0<=xa(a,a.prev,b):0>xa(a,b,a.prev)||0>xa(a,a.next,b);}function di(a,b){var c=new tg(a.i,a.x,a.y),d=new tg(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d;}function bi(a,b,c,d){a=new tg(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a;}function de(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ);}function tg(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1;}function ei(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop();}function fi(a,b){for(var c=0;c<b.length;c++){a.push(b[c].x),a.push(b[c].y);}}function fc(a,b){N.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new fb(a,b));this.mergeVertices();}function fb(a,b){function c(a){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a);}function g(a,b,c){var d=a.x-b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var l=Math.sqrt(h),m=Math.sqrt(f*f+g*g);h=b.x-e/l;b=b.y+d/l;g=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=h+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new u(f,d);e=Math.sqrt(e/2);}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(h)):(f=d,d=e,e=Math.sqrt(h/2));return new u(f/e,d/e);}function h(a,b){for(J=a.length;0<=--J;){var c=J;var f=J-1;0>f&&(f=a.length-1);var g,h=F+2*A;for(g=0;g<h;g++){var l=X*g,m=X*(g+1),k=b+f+l,t=b+f+m;m=b+c+m;q(b+c+l);q(k);q(m);q(k);q(t);q(m);l=e.length/3;l=E.generateSideWallUV(d,e,l-6,l-3,l-2,l-1);v(l[0]);v(l[1]);v(l[3]);v(l[1]);v(l[2]);v(l[3]);}}}function l(a,b,c){C.push(a);C.push(b);C.push(c);}function k(a,b,c){q(a);q(b);q(c);a=e.length/3;a=E.generateTopUV(d,e,a-3,a-2,a-1);v(a[0]);v(a[1]);v(a[2]);}function q(a){e.push(C[3*a]);e.push(C[3*a+1]);e.push(C[3*a+2]);}function v(a){f.push(a.x);f.push(a.y);}var C=[],w=void 0!==b.curveSegments?b.curveSegments:12,F=void 0!==b.steps?b.steps:1,T=void 0!==b.depth?b.depth:100,V=void 0!==b.bevelEnabled?b.bevelEnabled:!0,da=void 0!==b.bevelThickness?b.bevelThickness:6,y=void 0!==b.bevelSize?b.bevelSize:da-2,z=void 0!==b.bevelOffset?b.bevelOffset:0,A=void 0!==b.bevelSegments?b.bevelSegments:3,B=b.extrudePath,E=void 0!==b.UVGenerator?b.UVGenerator:Mk;void 0!==b.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),T=b.amount);var H=!1;if(B){var D=B.getSpacedPoints(F);H=!0;V=!1;var G=B.computeFrenetFrames(F,!1);var M=new n();var N=new n();var K=new n();}V||(z=y=da=A=0);var O;w=a.extractPoints(w);a=w.shape;var L=w.holes;if(!sb.isClockWise(a)){a=a.reverse();var ha=0;for(O=L.length;ha<O;ha++){var P=L[ha];sb.isClockWise(P)&&(L[ha]=P.reverse());}}var Y=sb.triangulateShape(a,L),W=a;ha=0;for(O=L.length;ha<O;ha++){P=L[ha],a=a.concat(P);}var aa,X=a.length,U,ca=Y.length;w=[];var J=0;var Q=W.length;var S=Q-1;for(aa=J+1;J<Q;J++,S++,aa++){S===Q&&(S=0),aa===Q&&(aa=0),w[J]=g(W[J],W[S],W[aa]);}B=[];var fa=w.concat();ha=0;for(O=L.length;ha<O;ha++){P=L[ha];var ba=[];J=0;Q=P.length;S=Q-1;for(aa=J+1;J<Q;J++,S++,aa++){S===Q&&(S=0),aa===Q&&(aa=0),ba[J]=g(P[J],P[S],P[aa]);}B.push(ba);fa=fa.concat(ba);}for(S=0;S<A;S++){Q=S/A;var ea=da*Math.cos(Q*Math.PI/2);aa=y*Math.sin(Q*Math.PI/2)+z;J=0;for(Q=W.length;J<Q;J++){var R=c(W[J],w[J],aa);l(R.x,R.y,-ea);}ha=0;for(O=L.length;ha<O;ha++){for(P=L[ha],ba=B[ha],J=0,Q=P.length;J<Q;J++){R=c(P[J],ba[J],aa),l(R.x,R.y,-ea);}}}aa=y+z;for(J=0;J<X;J++){R=V?c(a[J],fa[J],aa):a[J],H?(N.copy(G.normals[0]).multiplyScalar(R.x),M.copy(G.binormals[0]).multiplyScalar(R.y),K.copy(D[0]).add(N).add(M),l(K.x,K.y,K.z)):l(R.x,R.y,0);}for(Q=1;Q<=F;Q++){for(J=0;J<X;J++){R=V?c(a[J],fa[J],aa):a[J],H?(N.copy(G.normals[Q]).multiplyScalar(R.x),M.copy(G.binormals[Q]).multiplyScalar(R.y),K.copy(D[Q]).add(N).add(M),l(K.x,K.y,K.z)):l(R.x,R.y,T/F*Q);}}for(S=A-1;0<=S;S--){Q=S/A;ea=da*Math.cos(Q*Math.PI/2);aa=y*Math.sin(Q*Math.PI/2)+z;J=0;for(Q=W.length;J<Q;J++){R=c(W[J],w[J],aa),l(R.x,R.y,T+ea);}ha=0;for(O=L.length;ha<O;ha++){for(P=L[ha],ba=B[ha],J=0,Q=P.length;J<Q;J++){R=c(P[J],ba[J],aa),H?l(R.x,R.y+D[F-1].y,D[F-1].x+ea):l(R.x,R.y,T+ea);}}}(function(){var a=e.length/3;if(V){var b=0*X;for(J=0;J<ca;J++){U=Y[J],k(U[2]+b,U[1]+b,U[0]+b);}b=X*(F+2*A);for(J=0;J<ca;J++){U=Y[J],k(U[0]+b,U[1]+b,U[2]+b);}}else{for(J=0;J<ca;J++){U=Y[J],k(U[2],U[1],U[0]);}for(J=0;J<ca;J++){U=Y[J],k(U[0]+X*F,U[1]+X*F,U[2]+X*F);}}d.addGroup(a,e.length/3-a,0);})();(function(){var a=e.length/3,b=0;h(W,b);b+=W.length;ha=0;for(O=L.length;ha<O;ha++){P=L[ha],h(P,b),b+=P.length;}d.addGroup(a,e.length/3-a,1);})();}B.call(this);this.type="ExtrudeBufferGeometry";this.parameters={shapes:a,options:b};a=Array.isArray(a)?a:[a];for(var d=this,e=[],f=[],g=0,h=a.length;g<h;g++){c(a[g]);}this.setAttribute("position",new A(e,3));this.setAttribute("uv",new A(f,2));this.computeVertexNormals();}function gi(a,b,c){c.shapes=[];if(Array.isArray(a))for(var d=0,e=a.length;d<e;d++){c.shapes.push(a[d].uuid);}else c.shapes.push(a.uuid);void 0!==b.extrudePath&&(c.options.extrudePath=b.extrudePath.toJSON());return c;}function he(a,b){N.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Zc(a,b));this.mergeVertices();}function Zc(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new N();a=c.generateShapes(a,b.size);b.depth=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);fb.call(this,a,b);this.type="TextBufferGeometry";}function ie(a,b,c,d,e,f,g){N.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new gc(a,b,c,d,e,f,g));this.mergeVertices();}function gc(a,b,c,d,e,f,g){B.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=Math.min(f+g,Math.PI),l,m,k=0,p=[],x=new n(),r=new n(),q=[],v=[],C=[],w=[];for(m=0;m<=c;m++){var u=[],T=m/c,V=0;0==m&&0==f?V=.5/b:m==c&&h==Math.PI&&(V=-.5/b);for(l=0;l<=b;l++){var da=l/b;x.x=-a*Math.cos(d+da*e)*Math.sin(f+T*g);x.y=a*Math.cos(f+T*g);x.z=a*Math.sin(d+da*e)*Math.sin(f+T*g);v.push(x.x,x.y,x.z);r.copy(x).normalize();C.push(r.x,r.y,r.z);w.push(da+V,1-T);u.push(k++);}p.push(u);}for(m=0;m<c;m++){for(l=0;l<b;l++){a=p[m][l+1],d=p[m][l],e=p[m+1][l],g=p[m+1][l+1],(0!==m||0<f)&&q.push(a,d,g),(m!==c-1||h<Math.PI)&&q.push(d,e,g);}}this.setIndex(q);this.setAttribute("position",new A(v,3));this.setAttribute("normal",new A(C,3));this.setAttribute("uv",new A(w,2));}function je(a,b,c,d,e,f){N.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new $c(a,b,c,d,e,f));this.mergeVertices();}function $c(a,b,c,d,e,f){B.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],l=[],m=[],k=a,p=(b-a)/d,x=new n(),r=new u(),q,v;for(q=0;q<=d;q++){for(v=0;v<=c;v++){a=e+v/c*f,x.x=k*Math.cos(a),x.y=k*Math.sin(a),h.push(x.x,x.y,x.z),l.push(0,0,1),r.x=(x.x/b+1)/2,r.y=(x.y/b+1)/2,m.push(r.x,r.y);}k+=p;}for(q=0;q<d;q++){for(b=q*(c+1),v=0;v<c;v++){a=v+b,e=a+c+1,f=a+c+2,k=a+1,g.push(a,e,k),g.push(e,f,k);}}this.setIndex(g);this.setAttribute("position",new A(h,3));this.setAttribute("normal",new A(l,3));this.setAttribute("uv",new A(m,2));}function ke(a,b,c,d){N.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new ad(a,b,c,d));this.mergeVertices();}function ad(a,b,c,d){B.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=L.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,l=new n(),m=new u(),k;for(k=0;k<=b;k++){var p=c+k*h*d;var x=Math.sin(p),r=Math.cos(p);for(p=0;p<=a.length-1;p++){l.x=a[p].x*x,l.y=a[p].y,l.z=a[p].x*r,f.push(l.x,l.y,l.z),m.x=k/b,m.y=p/(a.length-1),g.push(m.x,m.y);}}for(k=0;k<b;k++){for(p=0;p<a.length-1;p++){c=p+k*a.length,h=c+a.length,l=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,l,m);}}this.setIndex(e);this.setAttribute("position",new A(f,3));this.setAttribute("uv",new A(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new n(),f=new n(),g=new n(),c=b*a.length*3,p=k=0;k<a.length;k++,p+=3){e.x=d[p+0],e.y=d[p+1],e.z=d[p+2],f.x=d[c+p+0],f.y=d[c+p+1],f.z=d[c+p+2],g.addVectors(e,f).normalize(),d[p+0]=d[c+p+0]=g.x,d[p+1]=d[c+p+1]=g.y,d[p+2]=d[c+p+2]=g.z;}}function hc(a,b){N.call(this);this.type="ShapeGeometry";"object"===_typeof(b)&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new ic(a,b));this.mergeVertices();}function ic(a,b){function c(a){var c,h=e.length/3;a=a.extractPoints(b);var m=a.shape,k=a.holes;!1===sb.isClockWise(m)&&(m=m.reverse());a=0;for(c=k.length;a<c;a++){var t=k[a];!0===sb.isClockWise(t)&&(k[a]=t.reverse());}var n=sb.triangulateShape(m,k);a=0;for(c=k.length;a<c;a++){t=k[a],m=m.concat(t);}a=0;for(c=m.length;a<c;a++){t=m[a],e.push(t.x,t.y,0),f.push(0,0,1),g.push(t.x,t.y);}a=0;for(c=n.length;a<c;a++){m=n[a],d.push(m[0]+h,m[1]+h,m[2]+h),l+=3;}}B.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,l=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++){c(a[m]),this.addGroup(h,l,m),h+=l,l=0;}this.setIndex(d);this.setAttribute("position",new A(e,3));this.setAttribute("normal",new A(f,3));this.setAttribute("uv",new A(g,2));}function hi(a,b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++){b.shapes.push(a[c].uuid);}else b.shapes.push(a.uuid);return b;}function bd(a,b){B.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(L.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new N();g.fromBufferGeometry(a);}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var h=0,l=g.length;h<l;h++){for(var m=g[h],k=0;3>k;k++){var p=m[f[k]];var n=m[f[(k+1)%3]];d[0]=Math.min(p,n);d[1]=Math.max(p,n);p=d[0]+","+d[1];void 0===e[p]?e[p]={index1:d[0],index2:d[1],face1:h,face2:void 0}:e[p].face2=h;}}for(p in e){if(d=e[p],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);}this.setAttribute("position",new A(c,3));}function jc(a,b,c,d,e,f,g,h){N.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new tb(a,b,c,d,e,f,g,h));this.mergeVertices();}function tb(a,b,c,d,e,f,g,h){function l(c){var e,f=new u(),l=new n(),t=0,v=!0===c?a:b,F=!0===c?1:-1;var z=q;for(e=1;e<=d;e++){p.push(0,C*F,0),x.push(0,F,0),r.push(.5,.5),q++;}var A=q;for(e=0;e<=d;e++){var B=e/d*h+g,D=Math.cos(B);B=Math.sin(B);l.x=v*B;l.y=C*F;l.z=v*D;p.push(l.x,l.y,l.z);x.push(0,F,0);f.x=.5*D+.5;f.y=.5*B*F+.5;r.push(f.x,f.y);q++;}for(e=0;e<d;e++){f=z+e,l=A+e,!0===c?k.push(l,l+1,f):k.push(l+1,l,f),t+=3;}m.addGroup(w,t,!0===c?1:2);w+=t;}B.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=[],p=[],x=[],r=[],q=0,v=[],C=c/2,w=0;(function(){var f,l,t=new n(),u=new n(),y=0,z=(b-a)/c;for(l=0;l<=e;l++){var B=[],A=l/e,D=A*(b-a)+a;for(f=0;f<=d;f++){var H=f/d,E=H*h+g,G=Math.sin(E);E=Math.cos(E);u.x=D*G;u.y=-A*c+C;u.z=D*E;p.push(u.x,u.y,u.z);t.set(G,z,E).normalize();x.push(t.x,t.y,t.z);r.push(H,1-A);B.push(q++);}v.push(B);}for(f=0;f<d;f++){for(l=0;l<e;l++){t=v[l+1][f],u=v[l+1][f+1],z=v[l][f+1],k.push(v[l][f],t,z),k.push(t,u,z),y+=6;}}m.addGroup(w,y,0);w+=y;})();!1===f&&(0<a&&l(!0),0<b&&l(!1));this.setIndex(k);this.setAttribute("position",new A(p,3));this.setAttribute("normal",new A(x,3));this.setAttribute("uv",new A(r,2));}function le(a,b,c,d,e,f,g){jc.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g};}function me(a,b,c,d,e,f,g){tb.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g};}function ne(a,b,c,d){N.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new cd(a,b,c,d));this.mergeVertices();}function cd(a,b,c,d){B.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],l,m=new n(),k=new u();f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);var p=0;for(l=3;p<=b;p++,l+=3){var x=c+p/b*d;m.x=a*Math.cos(x);m.y=a*Math.sin(x);f.push(m.x,m.y,m.z);g.push(0,0,1);k.x=(f[l]/a+1)/2;k.y=(f[l+1]/a+1)/2;h.push(k.x,k.y);}for(l=1;l<=b;l++){e.push(l,l+1,0);}this.setIndex(e);this.setAttribute("position",new A(f,3));this.setAttribute("normal",new A(g,3));this.setAttribute("uv",new A(h,2));}function kc(a){K.call(this);this.type="ShadowMaterial";this.color=new z(0);this.transparent=!0;this.setValues(a);}function ub(a){Ba.call(this,a);this.type="RawShaderMaterial";}function gb(a){K.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new z(16777215);this.roughness=1;this.metalness=0;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new z(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new u(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexTangents=this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function lc(a){gb.call(this);this.defines={STANDARD:"",PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearcoatRoughness=this.clearcoat=0;this.sheen=null;this.clearcoatNormalScale=new u(1,1);this.clearcoatNormalMap=null;this.transparency=0;this.setValues(a);}function Jb(a){K.call(this);this.type="MeshPhongMaterial";this.color=new z(16777215);this.specular=new z(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new z(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new u(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function mc(a){K.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.color=new z(16777215);this.specular=new z(1118481);this.shininess=30;this.lightMap=this.gradientMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new z(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new u(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=this.specularMap=null;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function nc(a){K.call(this);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new u(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.fog=!1;this.setValues(a);}function oc(a){K.call(this);this.type="MeshLambertMaterial";this.color=new z(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new z(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function pc(a){K.call(this);this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new z(16777215);this.bumpMap=this.map=this.matcap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new u(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=null;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function qc(a){la.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a);}function La(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c;}function Xe(a,b,c,d){La.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0;}function oe(a,b,c,d){La.call(this,a,b,c,d);}function Ye(a,b,c,d){La.call(this,a,b,c,d);}function sa(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=R.convertArray(b,this.TimeBufferType);this.values=R.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);}function Ze(a,b,c){sa.call(this,a,b,c);}function $e(a,b,c,d){sa.call(this,a,b,c,d);}function dd(a,b,c,d){sa.call(this,a,b,c,d);}function af(a,b,c,d){La.call(this,a,b,c,d);}function pe(a,b,c,d){sa.call(this,a,b,c,d);}function bf(a,b,c,d){sa.call(this,a,b,c,d);}function ed(a,b,c,d){sa.call(this,a,b,c,d);}function Qa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=L.generateUUID();0>this.duration&&this.resetDuration();}function Nk(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dd;case"vector":case"vector2":case"vector3":case"vector4":return ed;case"color":return $e;case"quaternion":return pe;case"bool":case"boolean":return Ze;case"string":return bf;}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}function Ok(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");var b=Nk(a.type);if(void 0===a.times){var c=[],d=[];R.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d;}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation);}function ug(a,b,c){var d=this,e=!1,f=0,g=0,h=void 0,l=[];this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0;};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad();};this.itemError=function(a){if(void 0!==d.onError)d.onError(a);};this.resolveURL=function(a){return h?h(a):a;};this.setURLModifier=function(a){h=a;return this;};this.addHandler=function(a,b){l.push(a,b);return this;};this.removeHandler=function(a){a=l.indexOf(a);-1!==a&&l.splice(a,2);return this;};this.getHandler=function(a){for(var b=0,c=l.length;b<c;b+=2){var d=l[b],e=l[b+1];d.global&&(d.lastIndex=0);if(d.test(a))return e;}return null;};}function X(a){this.manager=void 0!==a?a:ii;this.crossOrigin="anonymous";this.resourcePath=this.path="";}function Ra(a){X.call(this,a);}function vg(a){X.call(this,a);}function wg(a){X.call(this,a);}function cf(a){X.call(this,a);}function fd(a){X.call(this,a);}function df(a){X.call(this,a);}function ef(a){X.call(this,a);}function G(){this.type="Curve";this.arcLengthDivisions=200;}function Ma(a,b,c,d,e,f,g,h){G.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=h||0;}function gd(a,b,c,d,e,f){Ma.call(this,a,b,c,c,d,e,f);this.type="ArcCurve";}function xg(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function initCatmullRom(e,f,g,h,l){e=l*(g-e);h=l*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h;},initNonuniformCatmullRom:function initNonuniformCatmullRom(e,f,g,h,l,m,k){e=((f-e)/l-(g-e)/(l+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+k)+(h-g)/k)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h;},calc:function calc(e){var f=e*e;return a+b*e+c*f+d*f*e;}};}function pa(a,b,c,d){G.call(this);this.type="CatmullRomCurve3";this.points=a||[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5;}function ji(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c;}function qe(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d;}function re(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e;}function Wa(a,b,c,d){G.call(this);this.type="CubicBezierCurve";this.v0=a||new u();this.v1=b||new u();this.v2=c||new u();this.v3=d||new u();}function hb(a,b,c,d){G.call(this);this.type="CubicBezierCurve3";this.v0=a||new n();this.v1=b||new n();this.v2=c||new n();this.v3=d||new n();}function Da(a,b){G.call(this);this.type="LineCurve";this.v1=a||new u();this.v2=b||new u();}function Xa(a,b){G.call(this);this.type="LineCurve3";this.v1=a||new n();this.v2=b||new n();}function Ya(a,b,c){G.call(this);this.type="QuadraticBezierCurve";this.v0=a||new u();this.v1=b||new u();this.v2=c||new u();}function ib(a,b,c){G.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new n();this.v1=b||new n();this.v2=c||new n();}function Za(a){G.call(this);this.type="SplineCurve";this.points=a||[];}function vb(){G.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1;}function $a(a){vb.call(this);this.type="Path";this.currentPoint=new u();a&&this.setFromPoints(a);}function Kb(a){$a.call(this,a);this.uuid=L.generateUUID();this.type="Shape";this.holes=[];}function ea(a,b){E.call(this);this.type="Light";this.color=new z(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0;}function ff(a,b,c){ea.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(E.DefaultUp);this.updateMatrix();this.groundColor=new z(b);}function jb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new u(512,512);this.mapPass=this.map=null;this.matrix=new P();this._frustum=new Hc();this._frameExtents=new u(1,1);this._viewportCount=1;this._viewports=[new ka(0,0,1,1)];}function gf(){jb.call(this,new ba(50,1,.5,500));}function hf(a,b,c,d,e,f){ea.call(this,a,b);this.type="SpotLight";this.position.copy(E.DefaultUp);this.updateMatrix();this.target=new E();Object.defineProperty(this,"power",{get:function get(){return this.intensity*Math.PI;},set:function set(a){this.intensity=a/Math.PI;}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new gf();}function yg(){jb.call(this,new ba(90,1,.5,500));this._frameExtents=new u(4,2);this._viewportCount=6;this._viewports=[new ka(2,1,1,1),new ka(0,1,1,1),new ka(3,1,1,1),new ka(1,1,1,1),new ka(3,0,1,1),new ka(1,0,1,1)];this._cubeDirections=[new n(1,0,0),new n(-1,0,0),new n(0,0,1),new n(0,0,-1),new n(0,1,0),new n(0,-1,0)];this._cubeUps=[new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,0,1),new n(0,0,-1)];}function jf(a,b,c,d){ea.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function get(){return 4*this.intensity*Math.PI;},set:function set(a){this.intensity=a/(4*Math.PI);}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new yg();}function hd(a,b,c,d,e,f){db.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=void 0!==a?a:-1;this.right=void 0!==b?b:1;this.top=void 0!==c?c:1;this.bottom=void 0!==d?d:-1;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix();}function kf(){jb.call(this,new hd(-5,5,5,-5,.5,500));}function lf(a,b){ea.call(this,a,b);this.type="DirectionalLight";this.position.copy(E.DefaultUp);this.updateMatrix();this.target=new E();this.shadow=new kf();}function mf(a,b){ea.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0;}function nf(a,b,c,d){ea.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10;}function of(a){X.call(this,a);this.textures={};}function pf(){B.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0;}function qf(a,b,c,d){"number"===typeof c&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));M.call(this,a,b,c);this.meshPerAttribute=d||1;}function rf(a){X.call(this,a);}function sf(a){X.call(this,a);}function zg(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");X.call(this,a);this.options=void 0;}function Ag(){this.type="ShapePath";this.color=new z();this.subPaths=[];this.currentPath=null;}function Bg(a){this.type="Font";this.data=a;}function Cg(a){X.call(this,a);}function tf(a){X.call(this,a);}function uf(){this.coefficients=[];for(var a=0;9>a;a++){this.coefficients.push(new n());}}function ab(a,b){ea.call(this,void 0,b);this.sh=void 0!==a?a:new uf();}function Dg(a,b,c){ab.call(this,void 0,c);a=new z().set(a);c=new z().set(b);b=new n(a.r,a.g,a.b);a=new n(c.r,c.g,c.b);c=Math.sqrt(Math.PI);var d=c*Math.sqrt(.75);this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d);}function Eg(a,b){ab.call(this,void 0,b);a=new z().set(a);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI));}function ki(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new ba();this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new ba();this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1;this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null};}function Fg(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1;}function Gg(){E.call(this);this.type="AudioListener";this.context=Hg.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null;this.timeDelta=0;this._clock=new Fg();}function id(a){E.call(this);this.type="Audio";this.listener=a;this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.offset=this.loopEnd=this.loopStart=0;this.duration=void 0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this._pausedAt=this._startedAt=0;this.filters=[];}function Ig(a){id.call(this,a);this.panner=this.context.createPanner();this.panner.panningModel="HRTF";this.panner.connect(this.gain);}function Jg(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser);}function Kg(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case"quaternion":b=this._slerp;break;case"string":case"bool":a=Array;b=this._select;break;default:b=this._lerp;}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0;}function li(a,b,c){c=c||ya.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c);}function ya(a,b,c){this.path=b;this.parsedPath=c||ya.parseTrackName(b);this.node=ya.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a;}function mi(){this.uuid=L.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b){a[arguments[b].uuid]=b;}this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length;},get inUse(){return this.total-d.nCachedObjects_;}},get bindingsPerObject(){return d._bindings.length;}};}function ni(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d;}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0;}function Lg(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1;}function vf(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a;}function Mg(a,b,c){rb.call(this,a,b);this.meshPerAttribute=c||1;}function Ng(a,b,c,d){this.ray=new Vb(a,b);this.near=c||0;this.far=d||Infinity;this.camera=null;this.layers=new Ie();this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function get(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points;}}});}function oi(a,b){return a.distance-b.distance;}function Og(a,b,c,d){a.layers.test(b.layers)&&a.raycast(b,c);if(!0===d){a=a.children;d=0;for(var e=a.length;d<e;d++){Og(a[d],b,c,!0);}}}function pi(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this;}function qi(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this;}function Pg(a,b){this.min=void 0!==a?a:new u(Infinity,Infinity);this.max=void 0!==b?b:new u(-Infinity,-Infinity);}function Qg(a,b){this.start=void 0!==a?a:new n();this.end=void 0!==b?b:new n();}function se(a){E.call(this);this.material=a;this.render=function(){};}function jd(a,b){E.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new B();b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1);}a.setAttribute("position",new A(b,3));b=new la({fog:!1});this.cone=new ma(a,b);this.add(this.cone);this.update();}function ri(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++){b.push.apply(b,ri(a.children[c]));}return b;}function rc(a){for(var b=ri(a),c=new B(),d=[],e=[],f=new z(0,0,1),g=new z(0,1,0),h=0;h<b.length;h++){var l=b[h];l.parent&&l.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b));}c.setAttribute("position",new A(d,3));c.setAttribute("color",new A(e,3));d=new la({vertexColors:!0,depthTest:!1,depthWrite:!1,transparent:!0});ma.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;}function kd(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new gc(b,4,2);b=new Oa({wireframe:!0,fog:!1});S.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update();}function ld(a,b,c){E.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new cc(b);a.rotateY(.5*Math.PI);this.material=new Oa({wireframe:!0,fog:!1});void 0===this.color&&(this.material.vertexColors=!0);b=a.getAttribute("position");b=new Float32Array(3*b.count);a.setAttribute("color",new M(b,3));this.add(new S(a,this.material));this.update();}function wf(a,b,c,d){a=a||10;b=b||10;c=new z(void 0!==c?c:4473924);d=new z(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],l=0,m=0,k=-g;l<=b;l++,k+=f){a.push(-g,0,k,g,0,k);a.push(k,0,-g,k,0,g);var p=l===e?c:d;p.toArray(h,m);m+=3;p.toArray(h,m);m+=3;p.toArray(h,m);m+=3;p.toArray(h,m);m+=3;}b=new B();b.setAttribute("position",new A(a,3));b.setAttribute("color",new A(h,3));c=new la({vertexColors:!0});ma.call(this,b,c);}function xf(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new z(void 0!==e?e:4473924);f=new z(void 0!==f?f:8947848);var g=[],h=[],l;for(l=0;l<=b;l++){var m=l/b*2*Math.PI;var k=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(k,0,m);var p=l&1?e:f;h.push(p.r,p.g,p.b);h.push(p.r,p.g,p.b);}for(l=0;l<=c;l++){p=l&1?e:f;var n=a-a/c*l;for(b=0;b<d;b++){m=b/d*2*Math.PI,k=Math.sin(m)*n,m=Math.cos(m)*n,g.push(k,0,m),h.push(p.r,p.g,p.b),m=(b+1)/d*2*Math.PI,k=Math.sin(m)*n,m=Math.cos(m)*n,g.push(k,0,m),h.push(p.r,p.g,p.b);}}a=new B();a.setAttribute("position",new A(g,3));a.setAttribute("color",new A(h,3));g=new la({vertexColors:!0});ma.call(this,a,g);}function md(a,b,c){E.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new B();a.setAttribute("position",new A([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new la({fog:!1});this.lightPlane=new Ka(a,b);this.add(this.lightPlane);a=new B();a.setAttribute("position",new A([0,0,0,0,0,1],3));this.targetLine=new Ka(a,b);this.add(this.targetLine);this.update();}function te(a){function b(a,b,d){c(a,d);c(b,d);}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1);}var d=new B(),e=new la({color:16777215,vertexColors:!0}),f=[],g=[],h={},l=new z(16755200),m=new z(16711680),k=new z(43775),p=new z(16777215),n=new z(3355443);b("n1","n2",l);b("n2","n4",l);b("n4","n3",l);b("n3","n1",l);b("f1","f2",l);b("f2","f4",l);b("f4","f3",l);b("f3","f1",l);b("n1","f1",l);b("n2","f2",l);b("n3","f3",l);b("n4","f4",l);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",k);b("u2","u3",k);b("u3","u1",k);b("c","t",p);b("p","c",n);b("cn1","cn2",n);b("cn3","cn4",n);b("cf1","cf2",n);b("cf3","cf4",n);d.setAttribute("position",new A(f,3));d.setAttribute("color",new A(g,3));ma.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update();}function na(a,b,c,d,e,f,g){yf.set(e,f,g).unproject(d);a=b[a];if(void 0!==a)for(c=c.getAttribute("position"),b=0,d=a.length;b<d;b++){c.setXYZ(a[b],yf.x,yf.y,yf.z);}}function wb(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new B();d.setIndex(new M(a,1));d.setAttribute("position",new M(c,3));ma.call(this,d,new la({color:b}));this.matrixAutoUpdate=!1;this.update();}function ue(a,b){this.type="Box3Helper";this.box=a;b=b||16776960;a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new B();c.setIndex(new M(a,1));c.setAttribute("position",new A([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));ma.call(this,c,new la({color:b}));this.geometry.computeBoundingSphere();}function ve(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new B();b.setAttribute("position",new A([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));b.computeBoundingSphere();Ka.call(this,b,new la({color:a}));b=new B();b.setAttribute("position",new A([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new S(b,new Oa({color:a,opacity:.2,transparent:!0,depthWrite:!1})));}function xb(a,b,c,d,e,f){E.call(this);void 0===a&&(a=new n(0,0,1));void 0===b&&(b=new n(0,0,0));void 0===c&&(c=1);void 0===d&&(d=16776960);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===zf&&(zf=new B(),zf.setAttribute("position",new A([0,0,0,0,1,0],3)),Rg=new tb(0,.5,1,5,1),Rg.translate(0,-.5,0));this.position.copy(b);this.line=new Ka(zf,new la({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new S(Rg,new Oa({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f);}function we(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new B();a.setAttribute("position",new A(b,3));a.setAttribute("color",new A([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new la({vertexColors:!0});ma.call(this,a,b);}function Sg(a){U=a;Tg(Af);}function si(a){var b={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:a?a.type:1009,format:a?a.format:1023,encoding:a?a.encoding:3002,depthBuffer:!1,stencilBuffer:!1},c=ti(b);c.depthBuffer=a?!1:!0;Bf=ti(b);return c;}function ui(a){Bf.dispose();U.setRenderTarget(Ug);a.scissorTest=!1;a.setSize(a.width,a.height);}function Tg(a){var b=new ob();b.add(new S(xe[0],a));U.compile(b,Vg);}function ti(a){a=new Ha(3*kb,3*kb,a);a.texture.mapping=306;a.texture.name="PMREM.cubeUv";a.scissorTest=!0;return a;}function Wg(a,b,c,d,e){a.viewport.set(b,c,d,e);a.scissor.set(b,c,d,e);}function vi(a){var b=U.autoClear;U.autoClear=!1;for(var c=1;c<wi;c++){xi(a,c-1,c,Math.sqrt(Cf[c]*Cf[c]-Cf[c-1]*Cf[c-1]),yi[(c-1)%yi.length]);}U.autoClear=b;}function xi(a,b,c,d,e){zi(a,Bf,b,c,d,"latitudinal",e);zi(Bf,a,c,c,d,"longitudinal",e);}function zi(a,b,c,d,e,f,g){"latitudinal"!==f&&"longitudinal"!==f&&console.error("blur direction must be either latitudinal or longitudinal!");var h=new ob();h.add(new S(xe[d],Af));var l=Af.uniforms,m=Ai[c]-1;m=isFinite(e)?Math.PI/(2*m):2*Math.PI/39;var k=e/m,p=isFinite(e)?1+Math.floor(3*k):20;20<p&&console.warn("sigmaRadians, "+e+", is too large and will clip, as it requested "+p+" samples when the maximum is set to 20");e=[];for(var n=0,r=0;20>r;++r){var q=r/k;q=Math.exp(-q*q/2);e.push(q);0==r?n+=q:r<p&&(n+=2*q);}for(r=0;r<e.length;r++){e[r]/=n;}l.envMap.value=a.texture;l.samples.value=p;l.weights.value=e;l.latitudinal.value="latitudinal"===f;g&&(l.poleAxis.value=g);l.dTheta.value=m;l.mipInt.value=8-c;l.inputEncoding.value=lb[a.texture.encoding];l.outputEncoding.value=lb[a.texture.encoding];a=Ai[d];q=3*Math.max(0,kb-2*a);Wg(b,q,(0===d?0:2*kb)+2*a*(4<d?d-8+4:0),3*a,2*a);U.setRenderTarget(b);U.render(h,Vg);}function Bi(){var a=new u(1,1);a=new ub({uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:lb[3E3]},outputEncoding:{value:lb[3E3]}},vertexShader:Xg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n"+Yg()+"\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",blending:0,depthTest:!1,depthWrite:!1});a.type="EquirectangularToCubeUV";return a;}function Ci(){var a=new ub({uniforms:{envMap:{value:null},inputEncoding:{value:lb[3E3]},outputEncoding:{value:lb[3E3]}},vertexShader:Xg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n"+Yg()+"\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",blending:0,depthTest:!1,depthWrite:!1});a.type="CubemapToCubeUV";return a;}function Xg(){return"\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.x *= -1.0;\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.y *= -1.0;\n\t} else if (face == 5.0) {\n\t\tdirection.xz *= -1.0;\n\t}\n\treturn direction;\n}\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t";}function Yg(){return"\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t";}function Di(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");pa.call(this,a);this.type="catmullrom";this.closed=!0;}function Ei(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");pa.call(this,a);this.type="catmullrom";}function Zg(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");pa.call(this,a);this.type="catmullrom";}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a;});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a;});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function get(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];}});void 0===Object.assign&&(Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d){Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e]);}}return b;});Object.assign(Ea.prototype,{addEventListener:function addEventListener(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b);},hasEventListener:function hasEventListener(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b);},removeEventListener:function removeEventListener(a,b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)));},dispatchEvent:function dispatchEvent(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++){b[c].call(this,a);}}}}});for(var ta=[],ye=0;256>ye;ye++){ta[ye]=(16>ye?"0":"")+ye.toString(16);}var L={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function generateUUID(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,c=4294967295*Math.random()|0,d=4294967295*Math.random()|0;return(ta[a&255]+ta[a>>8&255]+ta[a>>16&255]+ta[a>>24&255]+"-"+ta[b&255]+ta[b>>8&255]+"-"+ta[b>>16&15|64]+ta[b>>24&255]+"-"+ta[c&63|128]+ta[c>>8&255]+"-"+ta[c>>16&255]+ta[c>>24&255]+ta[d&255]+ta[d>>8&255]+ta[d>>16&255]+ta[d>>24&255]).toUpperCase();},clamp:function clamp(a,b,c){return Math.max(b,Math.min(c,a));},euclideanModulo:function euclideanModulo(a,b){return(a%b+b)%b;},mapLinear:function mapLinear(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b);},lerp:function lerp(a,b,c){return(1-c)*a+c*b;},smoothstep:function smoothstep(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a);},smootherstep:function smootherstep(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10);},randInt:function randInt(a,b){return a+Math.floor(Math.random()*(b-a+1));},randFloat:function randFloat(a,b){return a+Math.random()*(b-a);},randFloatSpread:function randFloatSpread(a){return a*(.5-Math.random());},degToRad:function degToRad(a){return a*L.DEG2RAD;},radToDeg:function radToDeg(a){return a*L.RAD2DEG;},isPowerOfTwo:function isPowerOfTwo(a){return 0===(a&a-1)&&0!==a;},ceilPowerOfTwo:function ceilPowerOfTwo(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2));},floorPowerOfTwo:function floorPowerOfTwo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2));},setQuaternionFromProperEuler:function setQuaternionFromProperEuler(a,b,c,d,e){var f=Math.cos,g=Math.sin,h=f(c/2);c=g(c/2);var l=f((b+d)/2),m=g((b+d)/2),k=f((b-d)/2),p=g((b-d)/2);f=f((d-b)/2);b=g((d-b)/2);"XYX"===e?a.set(h*m,c*k,c*p,h*l):"YZY"===e?a.set(c*p,h*m,c*k,h*l):"ZXZ"===e?a.set(c*k,c*p,h*m,h*l):"XZX"===e?a.set(h*m,c*b,c*f,h*l):"YXY"===e?a.set(c*f,h*m,c*b,h*l):"ZYZ"===e?a.set(c*b,c*f,h*m,h*l):console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.");}};Object.defineProperties(u.prototype,{width:{get:function get(){return this.x;},set:function set(a){this.x=a;}},height:{get:function get(){return this.y;},set:function set(a){this.y=a;}}});Object.assign(u.prototype,{isVector2:!0,set:function set(a,b){this.x=a;this.y=b;return this;},setScalar:function setScalar(a){this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y);},copy:function copy(a){this.x=a.x;this.y=a.y;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this;},multiply:function multiply(a){this.x*=a.x;this.y*=a.y;return this;},multiplyScalar:function multiplyScalar(a){this.x*=a;this.y*=a;return this;},divide:function divide(a){this.x/=a.x;this.y/=a.y;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},applyMatrix3:function applyMatrix3(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=a[1]*b+a[4]*c+a[7];return this;},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this;},clampScalar:function clampScalar(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));return this;},clampLength:function clampLength(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y;},cross:function cross(a){return this.x*a.y-this.y*a.x;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y);},manhattanLength:function manhattanLength(){return Math.abs(this.x)+Math.abs(this.y);},normalize:function normalize(){return this.divideScalar(this.length()||1);},angle:function angle(){return Math.atan2(-this.y,-this.x)+Math.PI;},distanceTo:function distanceTo(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function distanceToSquared(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a;},manhattanDistanceTo:function manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y);},setLength:function setLength(a){return this.normalize().multiplyScalar(a);},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function equals(a){return a.x===this.x&&a.y===this.y;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a;},fromBufferAttribute:function fromBufferAttribute(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this;},rotateAround:function rotateAround(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this;}});Object.assign(wa.prototype,{isMatrix3:!0,set:function set(a,b,c,d,e,f,g,h,l){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=l;return this;},identity:function identity(){this.set(1,0,0,0,1,0,0,0,1);return this;},clone:function clone(){return new this.constructor().fromArray(this.elements);},copy:function copy(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this;},extractBasis:function extractBasis(a,b,c){a.setFromMatrix3Column(this,0);b.setFromMatrix3Column(this,1);c.setFromMatrix3Column(this,2);return this;},setFromMatrix4:function setFromMatrix4(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this;},multiply:function multiply(a){return this.multiplyMatrices(this,a);},premultiply:function premultiply(a){return this.multiplyMatrices(a,this);},multiplyMatrices:function multiplyMatrices(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],h=c[4],l=c[7],m=c[2],k=c[5];c=c[8];var p=d[0],n=d[3],r=d[6],q=d[1],v=d[4],C=d[7],w=d[2],u=d[5];d=d[8];b[0]=a*p+e*q+f*w;b[3]=a*n+e*v+f*u;b[6]=a*r+e*C+f*d;b[1]=g*p+h*q+l*w;b[4]=g*n+h*v+l*u;b[7]=g*r+h*C+l*d;b[2]=m*p+k*q+c*w;b[5]=m*n+k*v+c*u;b[8]=m*r+k*C+c*d;return this;},multiplyScalar:function multiplyScalar(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this;},determinant:function determinant(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],l=a[7];a=a[8];return b*f*a-b*g*l-c*e*a+c*g*h+d*e*l-d*f*h;},getInverse:function getInverse(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],l=c[5],m=c[6],k=c[7];c=c[8];var p=c*h-l*k,n=l*m-c*g,r=k*g-h*m,q=d*p+e*n+f*r;if(0===q){if(!0===b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");return this.identity();}b=1/q;a[0]=p*b;a[1]=(f*k-c*e)*b;a[2]=(l*e-f*h)*b;a[3]=n*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-l*d)*b;a[6]=r*b;a[7]=(e*m-k*d)*b;a[8]=(h*d-e*g)*b;return this;},transpose:function transpose(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this;},getNormalMatrix:function getNormalMatrix(a){return this.setFromMatrix4(a).getInverse(this).transpose();},transposeIntoArray:function transposeIntoArray(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this;},setUvTransform:function setUvTransform(a,b,c,d,e,f,g){var h=Math.cos(e);e=Math.sin(e);this.set(c*h,c*e,-c*(h*f+e*g)+f+a,-d*e,d*h,-d*(-e*f+h*g)+g+b,0,0,1);},scale:function scale(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this;},rotate:function rotate(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],h=c[4],l=c[7];c[0]=b*d+a*g;c[3]=b*e+a*h;c[6]=b*f+a*l;c[1]=-a*d+b*g;c[4]=-a*e+b*h;c[7]=-a*f+b*l;return this;},translate:function translate(a,b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this;},equals:function equals(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++){if(b[c]!==a[c])return!1;}return!0;},fromArray:function fromArray(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++){this.elements[c]=a[c+b];}return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a;}});var nd,Lb={getDataURL:function getDataURL(a){if("undefined"==typeof HTMLCanvasElement)return a.src;if(!(a instanceof HTMLCanvasElement)){void 0===nd&&(nd=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"));nd.width=a.width;nd.height=a.height;var b=nd.getContext("2d");a instanceof ImageData?b.putImageData(a,0,0):b.drawImage(a,0,0,a.width,a.height);a=nd;}return 2048<a.width||2048<a.height?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png");}},nj=0;W.DEFAULT_IMAGE=void 0;W.DEFAULT_MAPPING=300;W.prototype=Object.assign(Object.create(Ea.prototype),{constructor:W,isTexture:!0,updateMatrix:function updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.internalFormat=a.internalFormat;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this;},toJSON:function toJSON(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=L.generateUUID());if(!b&&void 0===a.images[d.uuid]){if(Array.isArray(d)){var e=[];for(var f=0,g=d.length;f<g;f++){e.push(Lb.getDataURL(d[f]));}}else e=Lb.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e};}c.image=d.uuid;}b||(a.textures[this.uuid]=c);return c;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});},transformUv:function transformUv(a){if(300!==this.mapping)return a;a.applyMatrix3(this.matrix);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x);}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y);}this.flipY&&(a.y=1-a.y);return a;}});Object.defineProperty(W.prototype,"needsUpdate",{set:function set(a){!0===a&&this.version++;}});Object.defineProperties(ka.prototype,{width:{get:function get(){return this.z;},set:function set(a){this.z=a;}},height:{get:function get(){return this.w;},set:function set(a){this.w=a;}}});Object.assign(ka.prototype,{isVector4:!0,set:function set(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this;},setScalar:function setScalar(a){this.w=this.z=this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setZ:function setZ(a){this.z=a;return this;},setW:function setW(a){this.w=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y,this.z,this.w);},copy:function copy(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this;},multiplyScalar:function multiplyScalar(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this;},applyMatrix4:function applyMatrix4(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},setAxisAngleFromQuaternion:function setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this;},setAxisAngleFromRotationMatrix:function setAxisAngleFromRotationMatrix(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var h=a[2];var l=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-h)&&.01>Math.abs(g-l)){if(.1>Math.abs(c+e)&&.1>Math.abs(d+h)&&.1>Math.abs(g+l)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+h)/4;g=(g+l)/4;b>f&&b>m?.01>b?(l=0,c=h=.707106781):(l=Math.sqrt(b),h=c/l,c=d/l):f>m?.01>f?(l=.707106781,h=0,c=.707106781):(h=Math.sqrt(f),l=c/h,c=g/h):.01>m?(h=l=.707106781,c=0):(c=Math.sqrt(m),l=d/c,h=g/c);this.set(l,h,c,a);return this;}a=Math.sqrt((l-g)*(l-g)+(d-h)*(d-h)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(l-g)/a;this.y=(d-h)/a;this.z=(e-c)/a;this.w=Math.acos((b+f+m-1)/2);return this;},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this;},clampScalar:function clampScalar(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));this.w=Math.max(a,Math.min(b,this.w));return this;},clampLength:function clampLength(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);},manhattanLength:function manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w);},normalize:function normalize(){return this.divideScalar(this.length()||1);},setLength:function setLength(a){return this.normalize().multiplyScalar(a);},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a;},fromBufferAttribute:function fromBufferAttribute(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this;}});Ha.prototype=Object.assign(Object.create(Ea.prototype),{constructor:Ha,isWebGLRenderTarget:!0,setSize:function setSize(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.texture.image.width=a,this.texture.image.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b);},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});Zf.prototype=Object.assign(Object.create(Ha.prototype),{constructor:Zf,isWebGLMultisampleRenderTarget:!0,copy:function copy(a){Ha.prototype.copy.call(this,a);this.samples=a.samples;return this;}});Object.assign(Aa,{slerp:function slerp(a,b,c,d){return c.copy(a).slerp(b,d);},slerpFlat:function slerpFlat(a,b,c,d,e,f,g){var h=c[d+0],l=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var k=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||l!==k||m!==p){f=1-g;var n=h*d+l*k+m*p+c*e,r=0<=n?1:-1,q=1-n*n;q>Number.EPSILON&&(q=Math.sqrt(q),n=Math.atan2(q,n*r),f=Math.sin(f*n)/q,g=Math.sin(g*n)/q);r*=g;h=h*f+d*r;l=l*f+k*r;m=m*f+p*r;c=c*f+e*r;f===1-g&&(g=1/Math.sqrt(h*h+l*l+m*m+c*c),h*=g,l*=g,m*=g,c*=g);}a[b]=h;a[b+1]=l;a[b+2]=m;a[b+3]=c;}});Object.defineProperties(Aa.prototype,{x:{get:function get(){return this._x;},set:function set(a){this._x=a;this._onChangeCallback();}},y:{get:function get(){return this._y;},set:function set(a){this._y=a;this._onChangeCallback();}},z:{get:function get(){return this._z;},set:function set(a){this._z=a;this._onChangeCallback();}},w:{get:function get(){return this._w;},set:function set(a){this._w=a;this._onChangeCallback();}}});Object.assign(Aa.prototype,{isQuaternion:!0,set:function set(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this._onChangeCallback();return this;},clone:function clone(){return new this.constructor(this._x,this._y,this._z,this._w);},copy:function copy(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this._onChangeCallback();return this;},setFromEuler:function setFromEuler(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,h=f(c/2),l=f(d/2);f=f(e/2);c=g(c/2);d=g(d/2);e=g(e/2);"XYZ"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f-c*d*e):"YXZ"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f+c*d*e):"ZXY"===a?(this._x=c*l*f-h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f-c*d*e):"ZYX"===a?(this._x=c*l*f-h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f+c*d*e):"YZX"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f-c*d*e):"XZY"===a&&(this._x=c*l*f-h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f+c*d*e);!1!==b&&this._onChangeCallback();return this;},setFromAxisAngle:function setFromAxisAngle(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this._onChangeCallback();return this;},setFromRotationMatrix:function setFromRotationMatrix(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],l=b[6];b=b[10];var m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(l-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(l-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+l)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+l)/c,this._z=.25*c);this._onChangeCallback();return this;},setFromUnitVectors:function setFromUnitVectors(a,b){var c=a.dot(b)+1;1E-6>c?(c=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0):(this._x=0,this._y=-a.z,this._z=a.y)):(this._x=a.y*b.z-a.z*b.y,this._y=a.z*b.x-a.x*b.z,this._z=a.x*b.y-a.y*b.x);this._w=c;return this.normalize();},angleTo:function angleTo(a){return 2*Math.acos(Math.abs(L.clamp(this.dot(a),-1,1)));},rotateTowards:function rotateTowards(a,b){var c=this.angleTo(a);if(0===c)return this;this.slerp(a,Math.min(1,b/c));return this;},inverse:function inverse(){return this.conjugate();},conjugate:function conjugate(){this._x*=-1;this._y*=-1;this._z*=-1;this._onChangeCallback();return this;},dot:function dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w;},lengthSq:function lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w;},length:function length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w);},normalize:function normalize(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this._onChangeCallback();return this;},multiply:function multiply(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a);},premultiply:function premultiply(a){return this.multiplyQuaternions(a,this);},multiplyQuaternions:function multiplyQuaternions(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,h=b._z;b=b._w;this._x=c*b+a*f+d*h-e*g;this._y=d*b+a*g+e*f-c*h;this._z=e*b+a*h+c*g-d*f;this._w=a*b-c*f-d*g-e*h;this._onChangeCallback();return this;},slerp:function slerp(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;a=1-g*g;if(a<=Number.EPSILON)return g=1-b,this._w=g*f+b*this._w,this._x=g*c+b*this._x,this._y=g*d+b*this._y,this._z=g*e+b*this._z,this.normalize(),this._onChangeCallback(),this;a=Math.sqrt(a);var h=Math.atan2(a,g);g=Math.sin((1-b)*h)/a;b=Math.sin(b*h)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this._onChangeCallback();return this;},equals:function equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this._onChangeCallback();return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a;},_onChange:function _onChange(a){this._onChangeCallback=a;return this;},_onChangeCallback:function _onChangeCallback(){}});var $g=new n(),Fi=new Aa();Object.assign(n.prototype,{isVector3:!0,set:function set(a,b,c){this.x=a;this.y=b;this.z=c;return this;},setScalar:function setScalar(a){this.z=this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setZ:function setZ(a){this.z=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y,this.z);},copy:function copy(a){this.x=a.x;this.y=a.y;this.z=a.z;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;this.z+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;this.z-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this;},multiply:function multiply(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this;},multiplyScalar:function multiplyScalar(a){this.x*=a;this.y*=a;this.z*=a;return this;},multiplyVectors:function multiplyVectors(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this;},applyEuler:function applyEuler(a){a&&a.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(Fi.setFromEuler(a));},applyAxisAngle:function applyAxisAngle(a,b){return this.applyQuaternion(Fi.setFromAxisAngle(a,b));},applyMatrix3:function applyMatrix3(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this;},applyNormalMatrix:function applyNormalMatrix(a){return this.applyMatrix3(a).normalize();},applyMatrix4:function applyMatrix4(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this;},applyQuaternion:function applyQuaternion(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,l=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=h*a+b*-e+l*-g-m*-f;this.y=l*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-l*-e;return this;},project:function project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix);},unproject:function unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld);},transformDirection:function transformDirection(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize();},divide:function divide(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this;},clampScalar:function clampScalar(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));return this;},clampLength:function clampLength(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y+this.z*a.z;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);},manhattanLength:function manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z);},normalize:function normalize(){return this.divideScalar(this.length()||1);},setLength:function setLength(a){return this.normalize().multiplyScalar(a);},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},cross:function cross(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a);},crossVectors:function crossVectors(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this;},projectOnVector:function projectOnVector(a){var b=a.lengthSq();if(0===b)return this.set(0,0,0);b=a.dot(this)/b;return this.copy(a).multiplyScalar(b);},projectOnPlane:function projectOnPlane(a){$g.copy(this).projectOnVector(a);return this.sub($g);},reflect:function reflect(a){return this.sub($g.copy(a).multiplyScalar(2*this.dot(a)));},angleTo:function angleTo(a){var b=Math.sqrt(this.lengthSq()*a.lengthSq());if(0===b)return Math.PI/2;a=this.dot(a)/b;return Math.acos(L.clamp(a,-1,1));},distanceTo:function distanceTo(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function distanceToSquared(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a;},manhattanDistanceTo:function manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z);},setFromSpherical:function setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta);},setFromSphericalCoords:function setFromSphericalCoords(a,b,c){var d=Math.sin(b)*a;this.x=d*Math.sin(c);this.y=Math.cos(b)*a;this.z=d*Math.cos(c);return this;},setFromCylindrical:function setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y);},setFromCylindricalCoords:function setFromCylindricalCoords(a,b,c){this.x=a*Math.sin(b);this.y=c;this.z=a*Math.cos(b);return this;},setFromMatrixPosition:function setFromMatrixPosition(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this;},setFromMatrixScale:function setFromMatrixScale(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this;},setFromMatrixColumn:function setFromMatrixColumn(a,b){return this.fromArray(a.elements,4*b);},setFromMatrix3Column:function setFromMatrix3Column(a,b){return this.fromArray(a.elements,3*b);},equals:function equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a;},fromBufferAttribute:function fromBufferAttribute(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this;}});var od=new n(),Y=new P(),Pk=new n(0,0,0),Qk=new n(1,1,1),Mb=new n(),Df=new n(),qa=new n();Object.assign(P.prototype,{isMatrix4:!0,set:function set(a,b,c,d,e,f,g,h,l,m,k,p,n,r,q,v){var t=this.elements;t[0]=a;t[4]=b;t[8]=c;t[12]=d;t[1]=e;t[5]=f;t[9]=g;t[13]=h;t[2]=l;t[6]=m;t[10]=k;t[14]=p;t[3]=n;t[7]=r;t[11]=q;t[15]=v;return this;},identity:function identity(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this;},clone:function clone(){return new P().fromArray(this.elements);},copy:function copy(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this;},copyPosition:function copyPosition(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this;},extractBasis:function extractBasis(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this;},makeBasis:function makeBasis(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this;},extractRotation:function extractRotation(a){var b=this.elements,c=a.elements,d=1/od.setFromMatrixColumn(a,0).length(),e=1/od.setFromMatrixColumn(a,1).length();a=1/od.setFromMatrixColumn(a,2).length();b[0]=c[0]*d;b[1]=c[1]*d;b[2]=c[2]*d;b[3]=0;b[4]=c[4]*e;b[5]=c[5]*e;b[6]=c[6]*e;b[7]=0;b[8]=c[8]*a;b[9]=c[9]*a;b[10]=c[10]*a;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},makeRotationFromEuler:function makeRotationFromEuler(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*h;var l=f*e,m=c*h,k=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=l+m*d;b[5]=a-k*d;b[9]=-c*g;b[2]=k-a*d;b[6]=m+l*d;b[10]=f*g;}else"YXZ"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a+k*c,b[4]=m*c-l,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=l*c-m,b[6]=k+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a-k*c,b[4]=-f*e,b[8]=m+l*c,b[1]=l+m*c,b[5]=f*h,b[9]=k-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,l=f*e,m=c*h,k=c*e,b[0]=g*h,b[4]=m*d-l,b[8]=a*d+k,b[1]=g*e,b[5]=k*d+a,b[9]=l*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=k-a*e,b[8]=m*e+l,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=l*e+m,b[10]=a-k*e):"XZY"===a.order&&(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+k,b[5]=f*h,b[9]=l*e-m,b[2]=m*e-l,b[6]=c*h,b[10]=k*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},makeRotationFromQuaternion:function makeRotationFromQuaternion(a){return this.compose(Pk,a,Qk);},lookAt:function lookAt(a,b,c){var d=this.elements;qa.subVectors(a,b);0===qa.lengthSq()&&(qa.z=1);qa.normalize();Mb.crossVectors(c,qa);0===Mb.lengthSq()&&(1===Math.abs(c.z)?qa.x+=1E-4:qa.z+=1E-4,qa.normalize(),Mb.crossVectors(c,qa));Mb.normalize();Df.crossVectors(qa,Mb);d[0]=Mb.x;d[4]=Df.x;d[8]=qa.x;d[1]=Mb.y;d[5]=Df.y;d[9]=qa.y;d[2]=Mb.z;d[6]=Df.z;d[10]=qa.z;return this;},multiply:function multiply(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a);},premultiply:function premultiply(a){return this.multiplyMatrices(a,this);},multiplyMatrices:function multiplyMatrices(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],h=c[1],l=c[5],m=c[9],k=c[13],p=c[2],n=c[6],r=c[10],q=c[14],v=c[3],C=c[7],w=c[11];c=c[15];var u=d[0],z=d[4],B=d[8],A=d[12],y=d[1],D=d[5],E=d[9],G=d[13],K=d[2],H=d[6],L=d[10],M=d[14],N=d[3],O=d[7],P=d[11];d=d[15];b[0]=a*u+e*y+f*K+g*N;b[4]=a*z+e*D+f*H+g*O;b[8]=a*B+e*E+f*L+g*P;b[12]=a*A+e*G+f*M+g*d;b[1]=h*u+l*y+m*K+k*N;b[5]=h*z+l*D+m*H+k*O;b[9]=h*B+l*E+m*L+k*P;b[13]=h*A+l*G+m*M+k*d;b[2]=p*u+n*y+r*K+q*N;b[6]=p*z+n*D+r*H+q*O;b[10]=p*B+n*E+r*L+q*P;b[14]=p*A+n*G+r*M+q*d;b[3]=v*u+C*y+w*K+c*N;b[7]=v*z+C*D+w*H+c*O;b[11]=v*B+C*E+w*L+c*P;b[15]=v*A+C*G+w*M+c*d;return this;},multiplyScalar:function multiplyScalar(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this;},determinant:function determinant(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],l=a[13],m=a[2],k=a[6],p=a[10],n=a[14];return a[3]*(+e*h*k-d*l*k-e*g*p+c*l*p+d*g*n-c*h*n)+a[7]*(+b*h*n-b*l*p+e*f*p-d*f*n+d*l*m-e*h*m)+a[11]*(+b*l*k-b*g*n-e*f*k+c*f*n+e*g*m-c*l*m)+a[15]*(-d*g*m-b*h*k+b*g*p+d*f*k-c*f*p+c*h*m);},transpose:function transpose(){var a=this.elements;var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this;},setPosition:function setPosition(a,b,c){var d=this.elements;a.isVector3?(d[12]=a.x,d[13]=a.y,d[14]=a.z):(d[12]=a,d[13]=b,d[14]=c);return this;},getInverse:function getInverse(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],h=d[4],l=d[5],m=d[6],k=d[7],p=d[8],n=d[9],r=d[10],q=d[11],v=d[12],u=d[13],w=d[14];d=d[15];var F=n*w*k-u*r*k+u*m*q-l*w*q-n*m*d+l*r*d,z=v*r*k-p*w*k-v*m*q+h*w*q+p*m*d-h*r*d,B=p*u*k-v*n*k+v*l*q-h*u*q-p*l*d+h*n*d,A=v*n*m-p*u*m-v*l*r+h*u*r+p*l*w-h*n*w,y=a*F+e*z+f*B+g*A;if(0===y){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity();}b=1/y;c[0]=F*b;c[1]=(u*r*g-n*w*g-u*f*q+e*w*q+n*f*d-e*r*d)*b;c[2]=(l*w*g-u*m*g+u*f*k-e*w*k-l*f*d+e*m*d)*b;c[3]=(n*m*g-l*r*g-n*f*k+e*r*k+l*f*q-e*m*q)*b;c[4]=z*b;c[5]=(p*w*g-v*r*g+v*f*q-a*w*q-p*f*d+a*r*d)*b;c[6]=(v*m*g-h*w*g-v*f*k+a*w*k+h*f*d-a*m*d)*b;c[7]=(h*r*g-p*m*g+p*f*k-a*r*k-h*f*q+a*m*q)*b;c[8]=B*b;c[9]=(v*n*g-p*u*g-v*e*q+a*u*q+p*e*d-a*n*d)*b;c[10]=(h*u*g-v*l*g+v*e*k-a*u*k-h*e*d+a*l*d)*b;c[11]=(p*l*g-h*n*g-p*e*k+a*n*k+h*e*q-a*l*q)*b;c[12]=A*b;c[13]=(p*u*f-v*n*f+v*e*r-a*u*r-p*e*w+a*n*w)*b;c[14]=(v*l*f-h*u*f-v*e*m+a*u*m+h*e*w-a*l*w)*b;c[15]=(h*n*f-p*l*f+p*e*m-a*n*m-h*e*r+a*l*r)*b;return this;},scale:function scale(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this;},getMaxScaleOnAxis:function getMaxScaleOnAxis(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]));},makeTranslation:function makeTranslation(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this;},makeRotationX:function makeRotationX(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this;},makeRotationY:function makeRotationY(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this;},makeRotationZ:function makeRotationZ(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this;},makeRotationAxis:function makeRotationAxis(a,b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,h=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,h*f+c,h*a-b*e,0,g*a-b*f,h*a+b*e,d*a*a+c,0,0,0,0,1);return this;},makeScale:function makeScale(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this;},makeShear:function makeShear(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this;},compose:function compose(a,b,c){var d=this.elements,e=b._x,f=b._y,g=b._z,h=b._w,l=e+e,m=f+f,k=g+g;b=e*l;var p=e*m;e*=k;var n=f*m;f*=k;g*=k;l*=h;m*=h;h*=k;k=c.x;var r=c.y;c=c.z;d[0]=(1-(n+g))*k;d[1]=(p+h)*k;d[2]=(e-m)*k;d[3]=0;d[4]=(p-h)*r;d[5]=(1-(b+g))*r;d[6]=(f+l)*r;d[7]=0;d[8]=(e+m)*c;d[9]=(f-l)*c;d[10]=(1-(b+n))*c;d[11]=0;d[12]=a.x;d[13]=a.y;d[14]=a.z;d[15]=1;return this;},decompose:function decompose(a,b,c){var d=this.elements,e=od.set(d[0],d[1],d[2]).length(),f=od.set(d[4],d[5],d[6]).length(),g=od.set(d[8],d[9],d[10]).length();0>this.determinant()&&(e=-e);a.x=d[12];a.y=d[13];a.z=d[14];Y.copy(this);a=1/e;d=1/f;var h=1/g;Y.elements[0]*=a;Y.elements[1]*=a;Y.elements[2]*=a;Y.elements[4]*=d;Y.elements[5]*=d;Y.elements[6]*=d;Y.elements[8]*=h;Y.elements[9]*=h;Y.elements[10]*=h;b.setFromRotationMatrix(Y);c.x=e;c.y=f;c.z=g;return this;},makePerspective:function makePerspective(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this;},makeOrthographic:function makeOrthographic(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),l=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*l;g[9]=0;g[13]=-((c+d)*l);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this;},equals:function equals(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++){if(b[c]!==a[c])return!1;}return!0;},fromArray:function fromArray(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++){this.elements[c]=a[c+b];}return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a;}});var Gi=new P(),Hi=new Aa();Tb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");Tb.DefaultOrder="XYZ";Object.defineProperties(Tb.prototype,{x:{get:function get(){return this._x;},set:function set(a){this._x=a;this._onChangeCallback();}},y:{get:function get(){return this._y;},set:function set(a){this._y=a;this._onChangeCallback();}},z:{get:function get(){return this._z;},set:function set(a){this._z=a;this._onChangeCallback();}},order:{get:function get(){return this._order;},set:function set(a){this._order=a;this._onChangeCallback();}}});Object.assign(Tb.prototype,{isEuler:!0,set:function set(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._onChangeCallback();return this;},clone:function clone(){return new this.constructor(this._x,this._y,this._z,this._order);},copy:function copy(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._onChangeCallback();return this;},setFromRotationMatrix:function setFromRotationMatrix(a,b,c){var d=L.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],l=e[5],m=e[9],k=e[2],p=e[6];e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.9999999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,l),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.9999999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-k,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.9999999>Math.abs(p)?(this._y=Math.atan2(-k,e),this._z=Math.atan2(-f,l)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(k,-1,1)),.9999999>Math.abs(k)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,l))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.9999999>Math.abs(h)?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-k,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.9999999>Math.abs(f)?(this._x=Math.atan2(p,l),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;!1!==c&&this._onChangeCallback();return this;},setFromQuaternion:function setFromQuaternion(a,b,c){Gi.makeRotationFromQuaternion(a);return this.setFromRotationMatrix(Gi,b,c);},setFromVector3:function setFromVector3(a,b){return this.set(a.x,a.y,a.z,b||this._order);},reorder:function reorder(a){Hi.setFromEuler(this);return this.setFromQuaternion(Hi,a);},equals:function equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order;},fromArray:function fromArray(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._onChangeCallback();return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a;},toVector3:function toVector3(a){return a?a.set(this._x,this._y,this._z):new n(this._x,this._y,this._z);},_onChange:function _onChange(a){this._onChangeCallback=a;return this;},_onChangeCallback:function _onChangeCallback(){}});Object.assign(Ie.prototype,{set:function set(a){this.mask=1<<a|0;},enable:function enable(a){this.mask=this.mask|1<<a|0;},enableAll:function enableAll(){this.mask=-1;},toggle:function toggle(a){this.mask^=1<<a|0;},disable:function disable(a){this.mask&=~(1<<a|0);},disableAll:function disableAll(){this.mask=0;},test:function test(a){return 0!==(this.mask&a.mask);}});var oj=0,Ii=new n(),pd=new Aa(),yb=new P(),Ef=new n(),ze=new n(),Rk=new n(),Sk=new Aa(),Ji=new n(1,0,0),Ki=new n(0,1,0),Li=new n(0,0,1),Tk={type:"added"},Uk={type:"removed"};E.DefaultUp=new n(0,1,0);E.DefaultMatrixAutoUpdate=!0;E.prototype=Object.assign(Object.create(Ea.prototype),{constructor:E,isObject3D:!0,onBeforeRender:function onBeforeRender(){},onAfterRender:function onAfterRender(){},applyMatrix4:function applyMatrix4(a){this.matrixAutoUpdate&&this.updateMatrix();this.matrix.premultiply(a);this.matrix.decompose(this.position,this.quaternion,this.scale);},applyQuaternion:function applyQuaternion(a){this.quaternion.premultiply(a);return this;},setRotationFromAxisAngle:function setRotationFromAxisAngle(a,b){this.quaternion.setFromAxisAngle(a,b);},setRotationFromEuler:function setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0);},setRotationFromMatrix:function setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a);},setRotationFromQuaternion:function setRotationFromQuaternion(a){this.quaternion.copy(a);},rotateOnAxis:function rotateOnAxis(a,b){pd.setFromAxisAngle(a,b);this.quaternion.multiply(pd);return this;},rotateOnWorldAxis:function rotateOnWorldAxis(a,b){pd.setFromAxisAngle(a,b);this.quaternion.premultiply(pd);return this;},rotateX:function rotateX(a){return this.rotateOnAxis(Ji,a);},rotateY:function rotateY(a){return this.rotateOnAxis(Ki,a);},rotateZ:function rotateZ(a){return this.rotateOnAxis(Li,a);},translateOnAxis:function translateOnAxis(a,b){Ii.copy(a).applyQuaternion(this.quaternion);this.position.add(Ii.multiplyScalar(b));return this;},translateX:function translateX(a){return this.translateOnAxis(Ji,a);},translateY:function translateY(a){return this.translateOnAxis(Ki,a);},translateZ:function translateZ(a){return this.translateOnAxis(Li,a);},localToWorld:function localToWorld(a){return a.applyMatrix4(this.matrixWorld);},worldToLocal:function worldToLocal(a){return a.applyMatrix4(yb.getInverse(this.matrixWorld));},lookAt:function lookAt(a,b,c){a.isVector3?Ef.copy(a):Ef.set(a,b,c);a=this.parent;this.updateWorldMatrix(!0,!1);ze.setFromMatrixPosition(this.matrixWorld);this.isCamera||this.isLight?yb.lookAt(ze,Ef,this.up):yb.lookAt(Ef,ze,this.up);this.quaternion.setFromRotationMatrix(yb);a&&(yb.extractRotation(a.matrixWorld),pd.setFromRotationMatrix(yb),this.quaternion.premultiply(pd.inverse()));},add:function add(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++){this.add(arguments[b]);}return this;}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(Tk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this;},remove:function remove(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++){this.remove(arguments[b]);}return this;}b=this.children.indexOf(a);-1!==b&&(a.parent=null,this.children.splice(b,1),a.dispatchEvent(Uk));return this;},attach:function attach(a){this.updateWorldMatrix(!0,!1);yb.getInverse(this.matrixWorld);null!==a.parent&&(a.parent.updateWorldMatrix(!0,!1),yb.multiply(a.parent.matrixWorld));a.applyMatrix4(yb);a.updateWorldMatrix(!1,!1);this.add(a);return this;},getObjectById:function getObjectById(a){return this.getObjectByProperty("id",a);},getObjectByName:function getObjectByName(a){return this.getObjectByProperty("name",a);},getObjectByProperty:function getObjectByProperty(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e;}},getWorldPosition:function getWorldPosition(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new n());this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld);},getWorldQuaternion:function getWorldQuaternion(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),a=new Aa());this.updateMatrixWorld(!0);this.matrixWorld.decompose(ze,a,Rk);return a;},getWorldScale:function getWorldScale(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),a=new n());this.updateMatrixWorld(!0);this.matrixWorld.decompose(ze,Sk,a);return a;},getWorldDirection:function getWorldDirection(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),a=new n());this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize();},raycast:function raycast(){},traverse:function traverse(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].traverse(a);}},traverseVisible:function traverseVisible(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].traverseVisible(a);}}},traverseAncestors:function traverseAncestors(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a));},updateMatrix:function updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0;},updateMatrixWorld:function updateMatrixWorld(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].updateMatrixWorld(a);}},updateWorldMatrix:function updateWorldMatrix(a,b){var c=this.parent;!0===a&&null!==c&&c.updateWorldMatrix(!0,!1);this.matrixAutoUpdate&&this.updateMatrix();null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(!0===b)for(a=this.children,b=0,c=a.length;b<c;b++){a[b].updateWorldMatrix(!1,!0);}},toJSON:function toJSON(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid;}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);!1===this.frustumCulled&&(f.frustumCulled=!1);0!==this.renderOrder&&(f.renderOrder=this.renderOrder);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.layers=this.layers.mask;f.matrix=this.matrix.toArray();!1===this.matrixAutoUpdate&&(f.matrixAutoUpdate=!1);this.isInstancedMesh&&(f.type="InstancedMesh",f.count=this.count,f.instanceMatrix=this.instanceMatrix.toJSON());if(this.isMesh||this.isLine||this.isPoints){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var h=0,l=g.length;h<l;h++){b(a.shapes,g[h]);}else b(a.shapes,g);}if(void 0!==this.material)if(Array.isArray(this.material)){g=[];h=0;for(l=this.material.length;h<l;h++){g.push(b(a.materials,this.material[h]));}f.material=g;}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=[],h=0;h<this.children.length;h++){f.children.push(this.children[h].toJSON(a).object);}if(d){d=c(a.geometries);h=c(a.materials);l=c(a.textures);var m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);0<h.length&&(e.materials=h);0<l.length&&(e.textures=l);0<m.length&&(e.images=m);0<g.length&&(e.shapes=g);}e.object=f;return e;},clone:function clone(a){return new this.constructor().copy(this,a);},copy:function copy(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++){this.add(a.children[b].clone());}return this;}});ob.prototype=Object.assign(Object.create(E.prototype),{constructor:ob,isScene:!0,copy:function copy(a,b){E.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.environment&&(this.environment=a.environment.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this;},toJSON:function toJSON(a){var b=E.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.environment&&(b.object.environment=this.environment.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});var zb=[new n(),new n(),new n(),new n(),new n(),new n(),new n(),new n()],Ae=new n(),ah=new Sa(),qd=new n(),rd=new n(),sd=new n(),Nb=new n(),Ob=new n(),sc=new n(),Be=new n(),Ff=new n(),Gf=new n(),Ub=new n();Object.assign(Sa.prototype,{isBox3:!0,set:function set(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromArray:function setFromArray(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.length;h<l;h+=3){var m=a[h],k=a[h+1],p=a[h+2];m<b&&(b=m);k<c&&(c=k);p<d&&(d=p);m>e&&(e=m);k>f&&(f=k);p>g&&(g=p);}this.min.set(b,c,d);this.max.set(e,f,g);return this;},setFromBufferAttribute:function setFromBufferAttribute(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.count;h<l;h++){var m=a.getX(h),k=a.getY(h),p=a.getZ(h);m<b&&(b=m);k<c&&(c=k);p<d&&(d=p);m>e&&(e=m);k>f&&(f=k);p>g&&(g=p);}this.min.set(b,c,d);this.max.set(e,f,g);return this;},setFromPoints:function setFromPoints(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++){this.expandByPoint(a[b]);}return this;},setFromCenterAndSize:function setFromCenterAndSize(a,b){b=Ae.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this;},setFromObject:function setFromObject(a){this.makeEmpty();return this.expandByObject(a);},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function makeEmpty(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this;},isEmpty:function isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z;},getCenter:function getCenter(a){void 0===a&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new n());return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5);},getSize:function getSize(a){void 0===a&&(console.warn("THREE.Box3: .getSize() target is now required"),a=new n());return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min);},expandByPoint:function expandByPoint(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function expandByVector(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function expandByScalar(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},expandByObject:function expandByObject(a){a.updateWorldMatrix(!1,!1);var b=a.geometry;void 0!==b&&(null===b.boundingBox&&b.computeBoundingBox(),ah.copy(b.boundingBox),ah.applyMatrix4(a.matrixWorld),this.union(ah));a=a.children;b=0;for(var c=a.length;b<c;b++){this.expandByObject(a[b]);}return this;},containsPoint:function containsPoint(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0;},containsBox:function containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z;},getParameter:function getParameter(a,b){void 0===b&&(console.warn("THREE.Box3: .getParameter() target is now required"),b=new n());return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z));},intersectsBox:function intersectsBox(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0;},intersectsSphere:function intersectsSphere(a){this.clampPoint(a.center,Ae);return Ae.distanceToSquared(a.center)<=a.radius*a.radius;},intersectsPlane:function intersectsPlane(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x;}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=-a.constant&&c>=-a.constant;},intersectsTriangle:function intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(Be);Ff.subVectors(this.max,Be);qd.subVectors(a.a,Be);rd.subVectors(a.b,Be);sd.subVectors(a.c,Be);Nb.subVectors(rd,qd);Ob.subVectors(sd,rd);sc.subVectors(qd,sd);a=[0,-Nb.z,Nb.y,0,-Ob.z,Ob.y,0,-sc.z,sc.y,Nb.z,0,-Nb.x,Ob.z,0,-Ob.x,sc.z,0,-sc.x,-Nb.y,Nb.x,0,-Ob.y,Ob.x,0,-sc.y,sc.x,0];if(!$f(a,qd,rd,sd,Ff))return!1;a=[1,0,0,0,1,0,0,0,1];if(!$f(a,qd,rd,sd,Ff))return!1;Gf.crossVectors(Nb,Ob);a=[Gf.x,Gf.y,Gf.z];return $f(a,qd,rd,sd,Ff);},clampPoint:function clampPoint(a,b){void 0===b&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new n());return b.copy(a).clamp(this.min,this.max);},distanceToPoint:function distanceToPoint(a){return Ae.copy(a).clamp(this.min,this.max).sub(a).length();},getBoundingSphere:function getBoundingSphere(a){void 0===a&&console.error("THREE.Box3: .getBoundingSphere() target is now required");this.getCenter(a.center);a.radius=.5*this.getSize(Ae).length();return a;},intersect:function intersect(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this;},union:function union(a){this.min.min(a.min);this.max.max(a.max);return this;},applyMatrix4:function applyMatrix4(a){if(this.isEmpty())return this;zb[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a);zb[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a);zb[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a);zb[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a);zb[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a);zb[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a);zb[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a);zb[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a);this.setFromPoints(zb);return this;},translate:function translate(a){this.min.add(a);this.max.add(a);return this;},equals:function equals(a){return a.min.equals(this.min)&&a.max.equals(this.max);}});var Vk=new Sa();Object.assign(pb.prototype,{set:function set(a,b){this.center.copy(a);this.radius=b;return this;},setFromPoints:function setFromPoints(a,b){var c=this.center;void 0!==b?c.copy(b):Vk.setFromPoints(a).getCenter(c);for(var d=b=0,e=a.length;d<e;d++){b=Math.max(b,c.distanceToSquared(a[d]));}this.radius=Math.sqrt(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.center.copy(a.center);this.radius=a.radius;return this;},empty:function empty(){return 0>=this.radius;},containsPoint:function containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius;},distanceToPoint:function distanceToPoint(a){return a.distanceTo(this.center)-this.radius;},intersectsSphere:function intersectsSphere(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b;},intersectsBox:function intersectsBox(a){return a.intersectsSphere(this);},intersectsPlane:function intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius;},clampPoint:function clampPoint(a,b){var c=this.center.distanceToSquared(a);void 0===b&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),b=new n());b.copy(a);c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b;},getBoundingBox:function getBoundingBox(a){void 0===a&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),a=new Sa());a.set(this.center,this.center);a.expandByScalar(this.radius);return a;},applyMatrix4:function applyMatrix4(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this;},translate:function translate(a){this.center.add(a);return this;},equals:function equals(a){return a.center.equals(this.center)&&a.radius===this.radius;}});var Ab=new n(),bh=new n(),Hf=new n(),Pb=new n(),ch=new n(),If=new n(),dh=new n();Object.assign(Vb.prototype,{set:function set(a,b){this.origin.copy(a);this.direction.copy(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this;},at:function at(a,b){void 0===b&&(console.warn("THREE.Ray: .at() target is now required"),b=new n());return b.copy(this.direction).multiplyScalar(a).add(this.origin);},lookAt:function lookAt(a){this.direction.copy(a).sub(this.origin).normalize();return this;},recast:function recast(a){this.origin.copy(this.at(a,Ab));return this;},closestPointToPoint:function closestPointToPoint(a,b){void 0===b&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new n());b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin);},distanceToPoint:function distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a));},distanceSqToPoint:function distanceSqToPoint(a){var b=Ab.subVectors(a,this.origin).dot(this.direction);if(0>b)return this.origin.distanceToSquared(a);Ab.copy(this.direction).multiplyScalar(b).add(this.origin);return Ab.distanceToSquared(a);},distanceSqToSegment:function distanceSqToSegment(a,b,c,d){bh.copy(a).add(b).multiplyScalar(.5);Hf.copy(b).sub(a).normalize();Pb.copy(this.origin).sub(bh);var e=.5*a.distanceTo(b),f=-this.direction.dot(Hf),g=Pb.dot(this.direction),h=-Pb.dot(Hf),l=Pb.lengthSq(),m=Math.abs(1-f*f);if(0<m){a=f*h-g;b=f*g-h;var k=e*m;0<=a?b>=-k?b<=k?(e=1/m,a*=e,b*=e,f=a*(a+f*b+2*g)+b*(f*a+b+2*h)+l):(b=e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):(b=-e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):b<=-k?(a=Math.max(0,-(-f*e+g)),b=0<a?-e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l):b<=k?(a=0,b=Math.min(Math.max(-e,-h),e),f=b*(b+2*h)+l):(a=Math.max(0,-(f*e+g)),b=0<a?e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l);}else b=0<f?-e:e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l;c&&c.copy(this.direction).multiplyScalar(a).add(this.origin);d&&d.copy(Hf).multiplyScalar(b).add(bh);return f;},intersectSphere:function intersectSphere(a,b){Ab.subVectors(a.center,this.origin);var c=Ab.dot(this.direction),d=Ab.dot(Ab)-c*c;a=a.radius*a.radius;if(d>a)return null;a=Math.sqrt(a-d);d=c-a;c+=a;return 0>d&&0>c?null:0>d?this.at(c,b):this.at(d,b);},intersectsSphere:function intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius;},distanceToPlane:function distanceToPlane(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null;},intersectPlane:function intersectPlane(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b);},intersectsPlane:function intersectsPlane(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1;},intersectBox:function intersectBox(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x;}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var h=(a.min.y-f.y)*d;d*=a.max.y-f.y;}else h=(a.max.y-f.y)*d,d*=a.min.y-f.y;if(g>d||h>c)return null;if(h>g||g!==g)g=h;if(d<c||c!==c)c=d;0<=e?(h=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(h=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||h>c)return null;if(h>g||g!==g)g=h;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b);},intersectsBox:function intersectsBox(a){return null!==this.intersectBox(a,Ab);},intersectTriangle:function intersectTriangle(a,b,c,d,e){ch.subVectors(b,a);If.subVectors(c,a);dh.crossVectors(ch,If);b=this.direction.dot(dh);if(0<b){if(d)return null;d=1;}else if(0>b)d=-1,b=-b;else return null;Pb.subVectors(this.origin,a);a=d*this.direction.dot(If.crossVectors(Pb,If));if(0>a)return null;c=d*this.direction.dot(ch.cross(Pb));if(0>c||a+c>b)return null;a=-d*Pb.dot(dh);return 0>a?null:this.at(a/b,e);},applyMatrix4:function applyMatrix4(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this;},equals:function equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction);}});var eh=new n(),Wk=new n(),Xk=new wa();Object.assign(Ta.prototype,{isPlane:!0,set:function set(a,b){this.normal.copy(a);this.constant=b;return this;},setComponents:function setComponents(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this;},setFromNormalAndCoplanarPoint:function setFromNormalAndCoplanarPoint(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this;},setFromCoplanarPoints:function setFromCoplanarPoints(a,b,c){b=eh.subVectors(c,b).cross(Wk.subVectors(a,b)).normalize();this.setFromNormalAndCoplanarPoint(b,a);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.normal.copy(a.normal);this.constant=a.constant;return this;},normalize:function normalize(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this;},negate:function negate(){this.constant*=-1;this.normal.negate();return this;},distanceToPoint:function distanceToPoint(a){return this.normal.dot(a)+this.constant;},distanceToSphere:function distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius;},projectPoint:function projectPoint(a,b){void 0===b&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new n());return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a);},intersectLine:function intersectLine(a,b){void 0===b&&(console.warn("THREE.Plane: .intersectLine() target is now required"),b=new n());var c=a.delta(eh),d=this.normal.dot(c);if(0===d){if(0===this.distanceToPoint(a.start))return b.copy(a.start);}else if(d=-(a.start.dot(this.normal)+this.constant)/d,!(0>d||1<d))return b.copy(c).multiplyScalar(d).add(a.start);},intersectsLine:function intersectsLine(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b;},intersectsBox:function intersectsBox(a){return a.intersectsPlane(this);},intersectsSphere:function intersectsSphere(a){return a.intersectsPlane(this);},coplanarPoint:function coplanarPoint(a){void 0===a&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new n());return a.copy(this.normal).multiplyScalar(-this.constant);},applyMatrix4:function applyMatrix4(a,b){b=b||Xk.getNormalMatrix(a);a=this.coplanarPoint(eh).applyMatrix4(a);b=this.normal.applyMatrix3(b).normalize();this.constant=-a.dot(b);return this;},translate:function translate(a){this.constant-=a.dot(this.normal);return this;},equals:function equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant;}});var bb=new n(),Bb=new n(),fh=new n(),Cb=new n(),td=new n(),ud=new n(),Mi=new n(),gh=new n(),hh=new n(),ih=new n();Object.assign(oa,{getNormal:function getNormal(a,b,c,d){void 0===d&&(console.warn("THREE.Triangle: .getNormal() target is now required"),d=new n());d.subVectors(c,b);bb.subVectors(a,b);d.cross(bb);a=d.lengthSq();return 0<a?d.multiplyScalar(1/Math.sqrt(a)):d.set(0,0,0);},getBarycoord:function getBarycoord(a,b,c,d,e){bb.subVectors(d,b);Bb.subVectors(c,b);fh.subVectors(a,b);a=bb.dot(bb);b=bb.dot(Bb);c=bb.dot(fh);var f=Bb.dot(Bb);d=Bb.dot(fh);var g=a*f-b*b;void 0===e&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),e=new n());if(0===g)return e.set(-2,-1,-1);g=1/g;f=(f*c-b*d)*g;a=(a*d-b*c)*g;return e.set(1-f-a,a,f);},containsPoint:function containsPoint(a,b,c,d){oa.getBarycoord(a,b,c,d,Cb);return 0<=Cb.x&&0<=Cb.y&&1>=Cb.x+Cb.y;},getUV:function getUV(a,b,c,d,e,f,g,h){this.getBarycoord(a,b,c,d,Cb);h.set(0,0);h.addScaledVector(e,Cb.x);h.addScaledVector(f,Cb.y);h.addScaledVector(g,Cb.z);return h;},isFrontFacing:function isFrontFacing(a,b,c,d){bb.subVectors(c,b);Bb.subVectors(a,b);return 0>bb.cross(Bb).dot(d)?!0:!1;}});Object.assign(oa.prototype,{set:function set(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this;},setFromPointsAndIndices:function setFromPointsAndIndices(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this;},getArea:function getArea(){bb.subVectors(this.c,this.b);Bb.subVectors(this.a,this.b);return .5*bb.cross(Bb).length();},getMidpoint:function getMidpoint(a){void 0===a&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new n());return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3);},getNormal:function getNormal(a){return oa.getNormal(this.a,this.b,this.c,a);},getPlane:function getPlane(a){void 0===a&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new Ta());return a.setFromCoplanarPoints(this.a,this.b,this.c);},getBarycoord:function getBarycoord(a,b){return oa.getBarycoord(a,this.a,this.b,this.c,b);},getUV:function getUV(a,b,c,d,e){return oa.getUV(a,this.a,this.b,this.c,b,c,d,e);},containsPoint:function containsPoint(a){return oa.containsPoint(a,this.a,this.b,this.c);},isFrontFacing:function isFrontFacing(a){return oa.isFrontFacing(this.a,this.b,this.c,a);},intersectsBox:function intersectsBox(a){return a.intersectsTriangle(this);},closestPointToPoint:function closestPointToPoint(a,b){void 0===b&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),b=new n());var c=this.a,d=this.b,e=this.c;td.subVectors(d,c);ud.subVectors(e,c);gh.subVectors(a,c);var f=td.dot(gh),g=ud.dot(gh);if(0>=f&&0>=g)return b.copy(c);hh.subVectors(a,d);var h=td.dot(hh),l=ud.dot(hh);if(0<=h&&l<=h)return b.copy(d);var m=f*l-h*g;if(0>=m&&0<=f&&0>=h)return d=f/(f-h),b.copy(c).addScaledVector(td,d);ih.subVectors(a,e);a=td.dot(ih);var k=ud.dot(ih);if(0<=k&&a<=k)return b.copy(e);f=a*g-f*k;if(0>=f&&0<=g&&0>=k)return m=g/(g-k),b.copy(c).addScaledVector(ud,m);g=h*k-a*l;if(0>=g&&0<=l-h&&0<=a-k)return Mi.subVectors(e,d),m=(l-h)/(l-h+(a-k)),b.copy(d).addScaledVector(Mi,m);e=1/(g+f+m);d=f*e;m*=e;return b.copy(c).addScaledVector(td,d).addScaledVector(ud,m);},equals:function equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c);}});var Ni={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},Jf={h:0,s:0,l:0};Object.assign(z.prototype,{isColor:!0,r:1,g:1,b:1,set:function set(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this;},setScalar:function setScalar(a){this.b=this.g=this.r=a;return this;},setHex:function setHex(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this;},setRGB:function setRGB(a,b,c){this.r=a;this.g=b;this.b=c;return this;},setHSL:function setHSL(a,b,c){a=L.euclideanModulo(a,1);b=L.clamp(b,0,1);c=L.clamp(c,0,1);0===b?this.r=this.g=this.b=c:(b=.5>=c?c*(1+b):c+b-c*b,c=2*c-b,this.r=ag(c,b,a+1/3),this.g=ag(c,b,a),this.b=ag(c,b,a-1/3));return this;},setStyle:function setStyle(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.");}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case"rgb":case"rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case"hsl":case"hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=parseFloat(c[1])/360;var e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f);}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this;}return a&&0<a.length?this.setColorName(a):this;},setColorName:function setColorName(a){var b=Ni[a];void 0!==b?this.setHex(b):console.warn("THREE.Color: Unknown color "+a);return this;},clone:function clone(){return new this.constructor(this.r,this.g,this.b);},copy:function copy(a){this.r=a.r;this.g=a.g;this.b=a.b;return this;},copyGammaToLinear:function copyGammaToLinear(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this;},copyLinearToGamma:function copyLinearToGamma(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this;},convertGammaToLinear:function convertGammaToLinear(a){this.copyGammaToLinear(this,a);return this;},convertLinearToGamma:function convertLinearToGamma(a){this.copyLinearToGamma(this,a);return this;},copySRGBToLinear:function copySRGBToLinear(a){this.r=bg(a.r);this.g=bg(a.g);this.b=bg(a.b);return this;},copyLinearToSRGB:function copyLinearToSRGB(a){this.r=cg(a.r);this.g=cg(a.g);this.b=cg(a.b);return this;},convertSRGBToLinear:function convertSRGBToLinear(){this.copySRGBToLinear(this);return this;},convertLinearToSRGB:function convertLinearToSRGB(){this.copyLinearToSRGB(this);return this;},getHex:function getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0;},getHexString:function getHexString(){return("000000"+this.getHex().toString(16)).slice(-6);},getHSL:function getHSL(a){void 0===a&&(console.warn("THREE.Color: .getHSL() target is now required"),a={h:0,s:0,l:0});var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var l=e-f;f=.5>=h?l/(e+f):l/(2-e-f);switch(e){case b:g=(c-d)/l+(c<d?6:0);break;case c:g=(d-b)/l+2;break;case d:g=(b-c)/l+4;}g/=6;}a.h=g;a.s=f;a.l=h;return a;},getStyle:function getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")";},offsetHSL:function offsetHSL(a,b,c){this.getHSL(za);za.h+=a;za.s+=b;za.l+=c;this.setHSL(za.h,za.s,za.l);return this;},add:function add(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this;},addColors:function addColors(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this;},addScalar:function addScalar(a){this.r+=a;this.g+=a;this.b+=a;return this;},sub:function sub(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this;},multiply:function multiply(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this;},multiplyScalar:function multiplyScalar(a){this.r*=a;this.g*=a;this.b*=a;return this;},lerp:function lerp(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this;},lerpHSL:function lerpHSL(a,b){this.getHSL(za);a.getHSL(Jf);a=L.lerp(za.h,Jf.h,b);var c=L.lerp(za.s,Jf.s,b);b=L.lerp(za.l,Jf.l,b);this.setHSL(a,c,b);return this;},equals:function equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a;},toJSON:function toJSON(){return this.getHex();}});z.NAMES=Ni;Object.assign(Bc.prototype,{clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++){this.vertexNormals[b]=a.vertexNormals[b].clone();}b=0;for(c=a.vertexColors.length;b<c;b++){this.vertexColors[b]=a.vertexColors[b].clone();}return this;}});var pj=0;K.prototype=Object.assign(Object.create(Ea.prototype),{constructor:K,isMaterial:!0,onBeforeCompile:function onBeforeCompile(){},setValues:function setValues(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]=c;}}},toJSON:function toJSON(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var c=void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.sheen&&this.sheen.isColor&&(d.sheen=this.sheen.getHex());this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.emissiveIntensity&&1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearcoat&&(d.clearcoat=this.clearcoat);void 0!==this.clearcoatRoughness&&(d.clearcoatRoughness=this.clearcoatRoughness);this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(d.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,d.clearcoatNormalScale=this.clearcoatNormalScale.toArray());this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.matcap&&this.matcap.isTexture&&(d.matcap=this.matcap.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.aoMap&&this.aoMap.isTexture&&(d.aoMap=this.aoMap.toJSON(a).uuid,d.aoMapIntensity=this.aoMapIntensity);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalMapType=this.normalMapType,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity,d.refractionRatio=this.refractionRatio,void 0!==this.combine&&(d.combine=this.combine),void 0!==this.envMapIntensity&&(d.envMapIntensity=this.envMapIntensity));this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);this.vertexColors&&(d.vertexColors=!0);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;d.stencilWrite=this.stencilWrite;d.stencilWriteMask=this.stencilWriteMask;d.stencilFunc=this.stencilFunc;d.stencilRef=this.stencilRef;d.stencilFuncMask=this.stencilFuncMask;d.stencilFail=this.stencilFail;d.stencilZFail=this.stencilZFail;d.stencilZPass=this.stencilZPass;this.rotation&&0!==this.rotation&&(d.rotation=this.rotation);!0===this.polygonOffset&&(d.polygonOffset=!0);0!==this.polygonOffsetFactor&&(d.polygonOffsetFactor=this.polygonOffsetFactor);0!==this.polygonOffsetUnits&&(d.polygonOffsetUnits=this.polygonOffsetUnits);this.linewidth&&1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.morphNormals&&(d.morphNormals=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);!1===this.toneMapped&&(d.toneMapped=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.name=a.name;this.fog=a.fog;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.stencilWriteMask=a.stencilWriteMask;this.stencilFunc=a.stencilFunc;this.stencilRef=a.stencilRef;this.stencilFuncMask=a.stencilFuncMask;this.stencilFail=a.stencilFail;this.stencilZFail=a.stencilZFail;this.stencilZPass=a.stencilZPass;this.stencilWrite=a.stencilWrite;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e){c[e]=b[e].clone();}}this.clippingPlanes=c;this.clipIntersection=a.clipIntersection;this.clipShadows=a.clipShadows;this.shadowSide=a.shadowSide;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.visible=a.visible;this.toneMapped=a.toneMapped;this.userData=JSON.parse(JSON.stringify(a.userData));return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});Object.defineProperty(K.prototype,"needsUpdate",{set:function set(a){!0===a&&this.version++;}});Oa.prototype=Object.create(K.prototype);Oa.prototype.constructor=Oa;Oa.prototype.isMeshBasicMaterial=!0;Oa.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this;};var ca=new n();Object.defineProperty(M.prototype,"needsUpdate",{set:function set(a){!0===a&&this.version++;}});Object.assign(M.prototype,{isBufferAttribute:!0,onUploadCallback:function onUploadCallback(){},setUsage:function setUsage(a){this.usage=a;return this;},copy:function copy(a){this.name=a.name;this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.usage=a.usage;return this;},copyAt:function copyAt(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++){this.array[a+d]=b.array[c+d];}return this;},copyArray:function copyArray(a){this.array.set(a);return this;},copyColorsArray:function copyColorsArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new z());b[c++]=f.r;b[c++]=f.g;b[c++]=f.b;}return this;},copyVector2sArray:function copyVector2sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new u());b[c++]=f.x;b[c++]=f.y;}return this;},copyVector3sArray:function copyVector3sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new n());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;}return this;},copyVector4sArray:function copyVector4sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new ka());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w;}return this;},applyMatrix3:function applyMatrix3(a){for(var b=0,c=this.count;b<c;b++){ca.x=this.getX(b),ca.y=this.getY(b),ca.z=this.getZ(b),ca.applyMatrix3(a),this.setXYZ(b,ca.x,ca.y,ca.z);}return this;},applyMatrix4:function applyMatrix4(a){for(var b=0,c=this.count;b<c;b++){ca.x=this.getX(b),ca.y=this.getY(b),ca.z=this.getZ(b),ca.applyMatrix4(a),this.setXYZ(b,ca.x,ca.y,ca.z);}return this;},applyNormalMatrix:function applyNormalMatrix(a){for(var b=0,c=this.count;b<c;b++){ca.x=this.getX(b),ca.y=this.getY(b),ca.z=this.getZ(b),ca.applyNormalMatrix(a),this.setXYZ(b,ca.x,ca.y,ca.z);}return this;},transformDirection:function transformDirection(a){for(var b=0,c=this.count;b<c;b++){ca.x=this.getX(b),ca.y=this.getY(b),ca.z=this.getZ(b),ca.transformDirection(a),this.setXYZ(b,ca.x,ca.y,ca.z);}return this;},set:function set(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},getX:function getX(a){return this.array[a*this.itemSize];},setX:function setX(a,b){this.array[a*this.itemSize]=b;return this;},getY:function getY(a){return this.array[a*this.itemSize+1];},setY:function setY(a,b){this.array[a*this.itemSize+1]=b;return this;},getZ:function getZ(a){return this.array[a*this.itemSize+2];},setZ:function setZ(a,b){this.array[a*this.itemSize+2]=b;return this;},getW:function getW(a){return this.array[a*this.itemSize+3];},setW:function setW(a,b){this.array[a*this.itemSize+3]=b;return this;},setXY:function setXY(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this;},setXYZ:function setXYZ(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this;},setXYZW:function setXYZW(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this;},onUpload:function onUpload(a){this.onUploadCallback=a;return this;},clone:function clone(){return new this.constructor(this.array,this.itemSize).copy(this);},toJSON:function toJSON(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};}});Bd.prototype=Object.create(M.prototype);Bd.prototype.constructor=Bd;Cd.prototype=Object.create(M.prototype);Cd.prototype.constructor=Cd;Dd.prototype=Object.create(M.prototype);Dd.prototype.constructor=Dd;Ed.prototype=Object.create(M.prototype);Ed.prototype.constructor=Ed;Wb.prototype=Object.create(M.prototype);Wb.prototype.constructor=Wb;Fd.prototype=Object.create(M.prototype);Fd.prototype.constructor=Fd;Xb.prototype=Object.create(M.prototype);Xb.prototype.constructor=Xb;A.prototype=Object.create(M.prototype);A.prototype.constructor=A;Gd.prototype=Object.create(M.prototype);Gd.prototype.constructor=Gd;Object.assign(wh.prototype,{computeGroups:function computeGroups(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c};}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b;},fromGeometry:function fromGeometry(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length;if(0<h){var l=[];for(var m=0;m<h;m++){l[m]={name:g[m].name,data:[]};}this.morphTargets.position=l;}var k=a.morphNormals,p=k.length;if(0<p){var n=[];for(m=0;m<p;m++){n[m]={name:k[m].name,data:[]};}this.morphTargets.normal=n;}var r=a.skinIndices,q=a.skinWeights,v=r.length===c.length,C=q.length===c.length;0<c.length&&0===b.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(m=0;m<b.length;m++){var w=b[m];this.vertices.push(c[w.a],c[w.b],c[w.c]);var F=w.vertexNormals;3===F.length?this.normals.push(F[0],F[1],F[2]):(F=w.normal,this.normals.push(F,F,F));F=w.vertexColors;3===F.length?this.colors.push(F[0],F[1],F[2]):(F=w.color,this.colors.push(F,F,F));!0===e&&(F=d[0][m],void 0!==F?this.uvs.push(F[0],F[1],F[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new u(),new u(),new u())));!0===f&&(F=d[1][m],void 0!==F?this.uvs2.push(F[0],F[1],F[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new u(),new u(),new u())));for(F=0;F<h;F++){var z=g[F].vertices;l[F].data.push(z[w.a],z[w.b],z[w.c]);}for(F=0;F<p;F++){z=k[F].vertexNormals[m],n[F].data.push(z.a,z.b,z.c);}v&&this.skinIndices.push(r[w.a],r[w.b],r[w.c]);C&&this.skinWeights.push(q[w.a],q[w.b],q[w.c]);}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this;}});var qj=1,mb=new P(),jh=new E(),vd=new n(),Na=new Sa(),Ce=new Sa(),fa=new n();B.prototype=Object.assign(Object.create(Ea.prototype),{constructor:B,isBufferGeometry:!0,getIndex:function getIndex(){return this.index;},setIndex:function setIndex(a){Array.isArray(a)?this.index=new(65535<xh(a)?Xb:Wb)(a,1):this.index=a;},getAttribute:function getAttribute(a){return this.attributes[a];},setAttribute:function setAttribute(a,b){this.attributes[a]=b;return this;},deleteAttribute:function deleteAttribute(a){delete this.attributes[a];return this;},addGroup:function addGroup(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0});},clearGroups:function clearGroups(){this.groups=[];},setDrawRange:function setDrawRange(a,b){this.drawRange.start=a;this.drawRange.count=b;},applyMatrix4:function applyMatrix4(a){var b=this.attributes.position;void 0!==b&&(b.applyMatrix4(a),b.needsUpdate=!0);b=this.attributes.normal;if(void 0!==b){var c=new wa().getNormalMatrix(a);b.applyNormalMatrix(c);b.needsUpdate=!0;}b=this.attributes.tangent;void 0!==b&&(b.transformDirection(a),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this;},rotateX:function rotateX(a){mb.makeRotationX(a);this.applyMatrix4(mb);return this;},rotateY:function rotateY(a){mb.makeRotationY(a);this.applyMatrix4(mb);return this;},rotateZ:function rotateZ(a){mb.makeRotationZ(a);this.applyMatrix4(mb);return this;},translate:function translate(a,b,c){mb.makeTranslation(a,b,c);this.applyMatrix4(mb);return this;},scale:function scale(a,b,c){mb.makeScale(a,b,c);this.applyMatrix4(mb);return this;},lookAt:function lookAt(a){jh.lookAt(a);jh.updateMatrix();this.applyMatrix4(jh.matrix);return this;},center:function center(){this.computeBoundingBox();this.boundingBox.getCenter(vd).negate();this.translate(vd.x,vd.y,vd.z);return this;},setFromObject:function setFromObject(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new A(3*b.vertices.length,3);var c=new A(3*b.colors.length,3);this.setAttribute("position",a.copyVector3sArray(b.vertices));this.setAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new A(b.lineDistances.length,1),this.setAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone());}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this;},setFromPoints:function setFromPoints(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0);}this.setAttribute("position",new A(b,3));return this;},updateFromObject:function updateFromObject(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c;}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this;},fromGeometry:function fromGeometry(a){a.__directGeometry=new wh().fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry);},fromDirectGeometry:function fromDirectGeometry(a){var b=new Float32Array(3*a.vertices.length);this.setAttribute("position",new M(b,3).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.setAttribute("normal",new M(b,3).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.setAttribute("color",new M(b,3).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.setAttribute("uv",new M(b,2).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.setAttribute("uv2",new M(b,2).copyVector2sArray(a.uvs2)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new A(3*g.data.length,3);h.name=g.name;b.push(h.copyVector3sArray(g.data));}this.morphAttributes[c]=b;}0<a.skinIndices.length&&(c=new A(4*a.skinIndices.length,4),this.setAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new A(4*a.skinWeights.length,4),this.setAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this;},computeBoundingBox:function computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Sa());var a=this.attributes.position,b=this.morphAttributes.position;if(void 0!==a){if(this.boundingBox.setFromBufferAttribute(a),b){a=0;for(var c=b.length;a<c;a++){Na.setFromBufferAttribute(b[a]),this.morphTargetsRelative?(fa.addVectors(this.boundingBox.min,Na.min),this.boundingBox.expandByPoint(fa),fa.addVectors(this.boundingBox.max,Na.max),this.boundingBox.expandByPoint(fa)):(this.boundingBox.expandByPoint(Na.min),this.boundingBox.expandByPoint(Na.max));}}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);},computeBoundingSphere:function computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new pb());var a=this.attributes.position,b=this.morphAttributes.position;if(a){var c=this.boundingSphere.center;Na.setFromBufferAttribute(a);if(b)for(var d=0,e=b.length;d<e;d++){var f=b[d];Ce.setFromBufferAttribute(f);this.morphTargetsRelative?(fa.addVectors(Na.min,Ce.min),Na.expandByPoint(fa),fa.addVectors(Na.max,Ce.max),Na.expandByPoint(fa)):(Na.expandByPoint(Ce.min),Na.expandByPoint(Ce.max));}Na.getCenter(c);var g=0;d=0;for(e=a.count;d<e;d++){fa.fromBufferAttribute(a,d),g=Math.max(g,c.distanceToSquared(fa));}if(b)for(d=0,e=b.length;d<e;d++){f=b[d];for(var h=this.morphTargetsRelative,l=0,m=f.count;l<m;l++){fa.fromBufferAttribute(f,l),h&&(vd.fromBufferAttribute(a,l),fa.add(vd)),g=Math.max(g,c.distanceToSquared(fa));}}this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}},computeFaceNormals:function computeFaceNormals(){},computeVertexNormals:function computeVertexNormals(){var a=this.index,b=this.attributes;if(b.position){var c=b.position.array;if(void 0===b.normal)this.setAttribute("normal",new M(new Float32Array(c.length),3));else for(var d=b.normal.array,e=0,f=d.length;e<f;e++){d[e]=0;}d=b.normal.array;var g=new n(),h=new n(),l=new n(),m=new n(),k=new n();if(a){var p=a.array;e=0;for(f=a.count;e<f;e+=3){a=3*p[e+0];var x=3*p[e+1];var r=3*p[e+2];g.fromArray(c,a);h.fromArray(c,x);l.fromArray(c,r);m.subVectors(l,h);k.subVectors(g,h);m.cross(k);d[a]+=m.x;d[a+1]+=m.y;d[a+2]+=m.z;d[x]+=m.x;d[x+1]+=m.y;d[x+2]+=m.z;d[r]+=m.x;d[r+1]+=m.y;d[r+2]+=m.z;}}else for(e=0,f=c.length;e<f;e+=9){g.fromArray(c,e),h.fromArray(c,e+3),l.fromArray(c,e+6),m.subVectors(l,h),k.subVectors(g,h),m.cross(k),d[e]=m.x,d[e+1]=m.y,d[e+2]=m.z,d[e+3]=m.x,d[e+4]=m.y,d[e+5]=m.z,d[e+6]=m.x,d[e+7]=m.y,d[e+8]=m.z;}this.normalizeNormals();b.normal.needsUpdate=!0;}},merge:function merge(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var c=this.attributes,d;for(d in c){if(void 0!==a.attributes[d]){var e=c[d].array,f=a.attributes[d],g=f.array,h=f.itemSize*b;f=Math.min(g.length,e.length-h);for(var l=0;l<f;l++,h++){e[h]=g[l];}}}return this;}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);},normalizeNormals:function normalizeNormals(){for(var a=this.attributes.normal,b=0,c=a.count;b<c;b++){fa.x=a.getX(b),fa.y=a.getY(b),fa.z=a.getZ(b),fa.normalize(),a.setXYZ(b,fa.x,fa.y,fa.z);}},toNonIndexed:function toNonIndexed(){function a(a,b){var c=a.array;a=a.itemSize;for(var d=new c.constructor(b.length*a),e,f=0,g=0,h=b.length;g<h;g++){e=b[g]*a;for(var l=0;l<a;l++){d[f++]=c[e++];}}return new M(d,a);}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var b=new B(),c=this.index.array,d=this.attributes,e;for(e in d){var f=d[e];f=a(f,c);b.setAttribute(e,f);}var g=this.morphAttributes;for(e in g){var h=[],l=g[e];d=0;for(var m=l.length;d<m;d++){f=l[d],f=a(f,c),h.push(f);}b.morphAttributes[e]=h;}b.morphTargetsRelative=this.morphTargetsRelative;c=this.groups;d=0;for(e=c.length;d<e;d++){f=c[d],b.addGroup(f.start,f.count,f.materialIndex);}return b;},toJSON:function toJSON(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);0<Object.keys(this.userData).length&&(a.userData=this.userData);if(void 0!==this.parameters){var b=this.parameters;for(m in b){void 0!==b[m]&&(a[m]=b[m]);}return a;}a.data={attributes:{}};b=this.index;null!==b&&(a.data.index={type:b.array.constructor.name,array:Array.prototype.slice.call(b.array)});var c=this.attributes;for(m in c){b=c[m];var d=b.toJSON();""!==b.name&&(d.name=b.name);a.data.attributes[m]=d;}c={};var e=!1;for(m in this.morphAttributes){for(var f=this.morphAttributes[m],g=[],h=0,l=f.length;h<l;h++){b=f[h],d=b.toJSON(),""!==b.name&&(d.name=b.name),g.push(d);}0<g.length&&(c[m]=g,e=!0);}e&&(a.data.morphAttributes=c,a.data.morphTargetsRelative=this.morphTargetsRelative);var m=this.groups;0<m.length&&(a.data.groups=JSON.parse(JSON.stringify(m)));m=this.boundingSphere;null!==m&&(a.data.boundingSphere={center:m.center.toArray(),radius:m.radius});return a;},clone:function clone(){return new B().copy(this);},copy:function copy(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c){this.setAttribute(g,c[g].clone());}var d=a.morphAttributes;for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++){e.push(f[c].clone());}this.morphAttributes[g]=e;}this.morphTargetsRelative=a.morphTargetsRelative;var g=a.groups;c=0;for(b=g.length;c<b;c++){d=g[c],this.addGroup(d.start,d.count,d.materialIndex);}g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;this.userData=a.userData;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});var Oi=new P(),tc=new Vb(),kh=new pb(),Yb=new n(),Zb=new n(),$b=new n(),dg=new n(),eg=new n(),fg=new n(),Le=new n(),Me=new n(),Ne=new n(),Cc=new u(),Dc=new u(),Ec=new u(),Hd=new n(),Je=new n();S.prototype=Object.assign(Object.create(E.prototype),{constructor:S,isMesh:!0,copy:function copy(a){E.prototype.copy.call(this,a);void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary));return this;},updateMorphTargets:function updateMorphTargets(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a;}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");},raycast:function raycast(a,b){var c=this.geometry,d=this.material,e=this.matrixWorld;if(void 0!==d&&(null===c.boundingSphere&&c.computeBoundingSphere(),kh.copy(c.boundingSphere),kh.applyMatrix4(e),!1!==a.ray.intersectsSphere(kh)&&(Oi.getInverse(e),tc.copy(a.ray).applyMatrix4(Oi),null===c.boundingBox||!1!==tc.intersectsBox(c.boundingBox))))if(c.isBufferGeometry){var f=c.index;e=c.attributes.position;var g=c.morphAttributes.position,h=c.morphTargetsRelative,l=c.attributes.uv,m=c.attributes.uv2,k=c.groups,p=c.drawRange,n,r;if(null!==f){if(Array.isArray(d)){var q=0;for(n=k.length;q<n;q++){var v=k[q];var C=d[v.materialIndex];var w=Math.max(v.start,p.start);for(r=c=Math.min(v.start+v.count,p.start+p.count);w<r;w+=3){c=f.getX(w);var F=f.getX(w+1);var z=f.getX(w+2);if(c=Ke(this,C,a,tc,e,g,h,l,m,c,F,z))c.faceIndex=Math.floor(w/3),c.face.materialIndex=v.materialIndex,b.push(c);}}}else for(w=Math.max(0,p.start),c=Math.min(f.count,p.start+p.count),q=w,n=c;q<n;q+=3){if(c=f.getX(q),F=f.getX(q+1),z=f.getX(q+2),c=Ke(this,d,a,tc,e,g,h,l,m,c,F,z))c.faceIndex=Math.floor(q/3),b.push(c);}}else if(void 0!==e)if(Array.isArray(d))for(q=0,n=k.length;q<n;q++){for(v=k[q],C=d[v.materialIndex],w=Math.max(v.start,p.start),r=c=Math.min(v.start+v.count,p.start+p.count);w<r;w+=3){if(c=w,F=w+1,z=w+2,c=Ke(this,C,a,tc,e,g,h,l,m,c,F,z))c.faceIndex=Math.floor(w/3),c.face.materialIndex=v.materialIndex,b.push(c);}}else for(w=Math.max(0,p.start),c=Math.min(e.count,p.start+p.count),q=w,n=c;q<n;q+=3){if(c=q,F=q+1,z=q+2,c=Ke(this,d,a,tc,e,g,h,l,m,c,F,z))c.faceIndex=Math.floor(q/3),b.push(c);}}else if(c.isGeometry)for(e=Array.isArray(d),g=c.vertices,h=c.faces,c=c.faceVertexUvs[0],0<c.length&&(f=c),p=0,q=h.length;p<q;p++){if(n=h[p],c=e?d[n.materialIndex]:d,void 0!==c&&(l=g[n.a],m=g[n.b],k=g[n.c],c=yh(this,c,a,tc,l,m,k,Hd)))f&&f[p]&&(v=f[p],Cc.copy(v[0]),Dc.copy(v[1]),Ec.copy(v[2]),c.uv=oa.getUV(Hd,l,m,k,Cc,Dc,Ec,new u())),c.face=n,c.faceIndex=p,b.push(c);}},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});var rj=0,nb=new P(),lh=new E(),Kf=new n();N.prototype=Object.assign(Object.create(Ea.prototype),{constructor:N,isGeometry:!0,applyMatrix4:function applyMatrix4(a){for(var b=new wa().getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++){this.vertices[c].applyMatrix4(a);}c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++){a.vertexNormals[e].applyMatrix3(b).normalize();}}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this;},rotateX:function rotateX(a){nb.makeRotationX(a);this.applyMatrix4(nb);return this;},rotateY:function rotateY(a){nb.makeRotationY(a);this.applyMatrix4(nb);return this;},rotateZ:function rotateZ(a){nb.makeRotationZ(a);this.applyMatrix4(nb);return this;},translate:function translate(a,b,c){nb.makeTranslation(a,b,c);this.applyMatrix4(nb);return this;},scale:function scale(a,b,c){nb.makeScale(a,b,c);this.applyMatrix4(nb);return this;},lookAt:function lookAt(a){lh.lookAt(a);lh.updateMatrix();this.applyMatrix4(lh.matrix);return this;},fromBufferGeometry:function fromBufferGeometry(a){function b(a,b,d,e){var f=void 0===h?[]:[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()],k=void 0===g?[]:[new n().fromArray(g,3*a),new n().fromArray(g,3*b),new n().fromArray(g,3*d)];e=new Bc(a,b,d,k,f,e);c.faces.push(e);void 0!==l&&c.faceVertexUvs[0].push([new u().fromArray(l,2*a),new u().fromArray(l,2*b),new u().fromArray(l,2*d)]);void 0!==m&&c.faceVertexUvs[1].push([new u().fromArray(m,2*a),new u().fromArray(m,2*b),new u().fromArray(m,2*d)]);}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes;if(void 0===e.position)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;var f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,l=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(e=0;e<f.length;e+=3){c.vertices.push(new n().fromArray(f,e)),void 0!==h&&c.colors.push(new z().fromArray(h,e));}var k=a.groups;if(0<k.length)for(e=0;e<k.length;e++){f=k[e];var p=f.start,x=p;for(p+=f.count;x<p;x+=3){void 0!==d?b(d[x],d[x+1],d[x+2],f.materialIndex):b(x,x+1,x+2,f.materialIndex);}}else if(void 0!==d)for(e=0;e<d.length;e+=3){b(d[e],d[e+1],d[e+2]);}else for(e=0;e<f.length/3;e+=3){b(e,e+1,e+2);}this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this;},center:function center(){this.computeBoundingBox();this.boundingBox.getCenter(Kf).negate();this.translate(Kf.x,Kf.y,Kf.z);return this;},normalize:function normalize(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new P();c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix4(c);return this;},computeFaceNormals:function computeFaceNormals(){for(var a=new n(),b=new n(),c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a);}},computeVertexNormals:function computeVertexNormals(a){void 0===a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++){c[d]=new n();}if(a){var e=new n(),f=new n();a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var h=this.vertices[b.b];var l=this.vertices[b.c];e.subVectors(l,h);f.subVectors(g,h);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e);}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++){b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);}d=0;for(b=this.vertices.length;d<b;d++){c[d].normalize();}a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());}0<this.faces.length&&(this.normalsNeedUpdate=!0);},computeFlatVertexNormals:function computeFlatVertexNormals(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone());}0<this.faces.length&&(this.normalsNeedUpdate=!0);},computeMorphNormals:function computeMorphNormals(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++){d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):d.__originalVertexNormals[e]=d.vertexNormals[e].clone();}}var f=new N();f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var h=new n();var l={a:new n(),b:new n(),c:new n()};d.push(h);g.push(l);}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++){d=this.faces[c],h=g.faceNormals[c],l=g.vertexNormals[c],h.copy(d.normal),l.a.copy(d.vertexNormals[0]),l.b.copy(d.vertexNormals[1]),l.c.copy(d.vertexNormals[2]);}}c=0;for(b=this.faces.length;c<b;c++){d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals;}},computeBoundingBox:function computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Sa());this.boundingBox.setFromPoints(this.vertices);},computeBoundingSphere:function computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new pb());this.boundingSphere.setFromPoints(this.vertices);},merge:function merge(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,l=a.faces,m=this.colors,k=a.colors;void 0===c&&(c=0);void 0!==b&&(d=new wa().getNormalMatrix(b));for(var p=0,n=g.length;p<n;p++){var r=g[p].clone();void 0!==b&&r.applyMatrix4(b);f.push(r);}p=0;for(n=k.length;p<n;p++){m.push(k[p].clone());}p=0;for(n=l.length;p<n;p++){g=l[p];var q=g.vertexNormals;k=g.vertexColors;m=new Bc(g.a+e,g.b+e,g.c+e);m.normal.copy(g.normal);void 0!==d&&m.normal.applyMatrix3(d).normalize();b=0;for(f=q.length;b<f;b++){r=q[b].clone(),void 0!==d&&r.applyMatrix3(d).normalize(),m.vertexNormals.push(r);}m.color.copy(g.color);b=0;for(f=k.length;b<f;b++){r=k[b],m.vertexColors.push(r.clone());}m.materialIndex=g.materialIndex+c;h.push(m);}p=0;for(n=a.faceVertexUvs.length;p<n;p++){for(c=a.faceVertexUvs[p],void 0===this.faceVertexUvs[p]&&(this.faceVertexUvs[p]=[]),b=0,f=c.length;b<f;b++){d=c[b];e=[];h=0;for(l=d.length;h<l;h++){e.push(d[h].clone());}this.faceVertexUvs[p].push(e);}}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);},mergeMesh:function mergeMesh(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a);},mergeVertices:function mergeVertices(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]];}a=[];f=0;for(e=this.faces.length;f<e;f++){for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++){if(d[g]===d[(g+1)%3]){a.push(f);break;}}}for(f=a.length-1;0<=f;f--){for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++){this.faceVertexUvs[c].splice(d,1);}}f=this.vertices.length-b.length;this.vertices=b;return f;},setFromPoints:function setFromPoints(a){this.vertices=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new n(d.x,d.y,d.z||0));}return this;},sortFacesByMaterialIndex:function sortFacesByMaterialIndex(){for(var a=this.faces,b=a.length,c=0;c<b;c++){a[c]._id=c;}a.sort(function(a,b){return a.materialIndex-b.materialIndex;});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h]);}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g);},toJSON:function toJSON(){function a(a,b,c){return c?a|1<<b:a&~(1<<b);}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=l.length/3;l.push(a.x,a.y,a.z);return m[b];}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=k.length;k.push(a.getHex());return p[b];}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==r[b])return r[b];r[b]=n.length/2;n.push(a.x,a.y);return r[b];}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f){void 0!==f[g]&&(e[g]=f[g]);}return e;}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z);}h=[];var l=[],m={},k=[],p={},n=[],r={};for(g=0;g<this.faces.length;g++){var q=this.faces[g],v=void 0!==this.faceVertexUvs[0][g],u=0<q.normal.length(),w=0<q.vertexNormals.length,z=1!==q.color.r||1!==q.color.g||1!==q.color.b,B=0<q.vertexColors.length,A=0;A=a(A,0,0);A=a(A,1,!0);A=a(A,2,!1);A=a(A,3,v);A=a(A,4,u);A=a(A,5,w);A=a(A,6,z);A=a(A,7,B);h.push(A);h.push(q.a,q.b,q.c);h.push(q.materialIndex);v&&(v=this.faceVertexUvs[0][g],h.push(d(v[0]),d(v[1]),d(v[2])));u&&h.push(b(q.normal));w&&(u=q.vertexNormals,h.push(b(u[0]),b(u[1]),b(u[2])));z&&h.push(c(q.color));B&&(q=q.vertexColors,h.push(c(q[0]),c(q[1]),c(q[2])));}e.data={};e.data.vertices=f;e.data.normals=l;0<k.length&&(e.data.colors=k);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e;},clone:function clone(){return new N().copy(this);},copy:function copy(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++){this.vertices.push(e[f].clone());}e=a.colors;f=0;for(b=e.length;f<b;f++){this.colors.push(e[f].clone());}e=a.faces;f=0;for(b=e.length;f<b;f++){this.faces.push(e[f].clone());}f=0;for(b=a.faceVertexUvs.length;f<b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var h=g[e],l=[];var m=0;for(d=h.length;m<d;m++){l.push(h[m].clone());}this.faceVertexUvs[f].push(l);}}m=a.morphTargets;f=0;for(b=m.length;f<b;f++){d={};d.name=m[f].name;if(void 0!==m[f].vertices)for(d.vertices=[],e=0,c=m[f].vertices.length;e<c;e++){d.vertices.push(m[f].vertices[e].clone());}if(void 0!==m[f].normals)for(d.normals=[],e=0,c=m[f].normals.length;e<c;e++){d.normals.push(m[f].normals[e].clone());}this.morphTargets.push(d);}m=a.morphNormals;f=0;for(b=m.length;f<b;f++){d={};if(void 0!==m[f].vertexNormals)for(d.vertexNormals=[],e=0,c=m[f].vertexNormals.length;e<c;e++){g=m[f].vertexNormals[e],h={},h.a=g.a.clone(),h.b=g.b.clone(),h.c=g.c.clone(),d.vertexNormals.push(h);}if(void 0!==m[f].faceNormals)for(d.faceNormals=[],e=0,c=m[f].faceNormals.length;e<c;e++){d.faceNormals.push(m[f].faceNormals[e].clone());}this.morphNormals.push(d);}e=a.skinWeights;f=0;for(b=e.length;f<b;f++){this.skinWeights.push(e[f].clone());}e=a.skinIndices;f=0;for(b=e.length;f<b;f++){this.skinIndices.push(e[f].clone());}e=a.lineDistances;f=0;for(b=e.length;f<b;f++){this.lineDistances.push(e[f]);}f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});var mh=function(a){function b(b,d,e,f,g,h){a.call(this);this.type="BoxGeometry";this.parameters={width:b,height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:h};this.fromBufferGeometry(new Jd(b,d,e,f,g,h));this.mergeVertices();}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b;}(N),Jd=function(a){function b(b,d,e,f,g,h){function c(a,b,c,d,e,f,g,h,l,t,u){var w=f/l,C=g/t,y=f/2,z=g/2,A=h/2;g=l+1;var F=t+1,B=f=0,D,E,G=new n();for(E=0;E<F;E++){var K=E*C-z;for(D=0;D<g;D++){G[a]=(D*w-y)*d,G[b]=K*e,G[c]=A,p.push(G.x,G.y,G.z),G[a]=0,G[b]=0,G[c]=0<h?1:-1,x.push(G.x,G.y,G.z),r.push(D/l),r.push(1-E/t),f+=1;}}for(E=0;E<t;E++){for(D=0;D<l;D++){a=q+D+g*(E+1),b=q+(D+1)+g*(E+1),c=q+(D+1)+g*E,k.push(q+D+g*E,a,c),k.push(a,b,c),B+=6;}}m.addGroup(v,B,u);v+=B;q+=f;}a.call(this);this.type="BoxBufferGeometry";this.parameters={width:b,height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:h};var m=this;b=b||1;d=d||1;e=e||1;f=Math.floor(f)||1;g=Math.floor(g)||1;h=Math.floor(h)||1;var k=[],p=[],x=[],r=[],q=0,v=0;c("z","y","x",-1,-1,e,d,b,h,g,0);c("z","y","x",1,-1,e,d,-b,h,g,1);c("x","z","y",1,1,b,e,d,f,h,2);c("x","z","y",1,-1,b,e,-d,f,h,3);c("x","y","z",1,-1,b,d,e,f,g,4);c("x","y","z",-1,-1,b,d,-e,f,g,5);this.setIndex(k);this.setAttribute("position",new A(p,3));this.setAttribute("normal",new A(x,3));this.setAttribute("uv",new A(r,2));}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b;}(B),Sh={clone:Fc,merge:va};Ba.prototype=Object.create(K.prototype);Ba.prototype.constructor=Ba;Ba.prototype.isShaderMaterial=!0;Ba.prototype.copy=function(a){K.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Fc(a.uniforms);this.defines=Object.assign({},a.defines);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this;};Ba.prototype.toJSON=function(a){var b=K.prototype.toJSON.call(this,a);b.uniforms={};for(var c in this.uniforms){var d=this.uniforms[c].value;b.uniforms[c]=d&&d.isTexture?{type:"t",value:d.toJSON(a).uuid}:d&&d.isColor?{type:"c",value:d.getHex()}:d&&d.isVector2?{type:"v2",value:d.toArray()}:d&&d.isVector3?{type:"v3",value:d.toArray()}:d&&d.isVector4?{type:"v4",value:d.toArray()}:d&&d.isMatrix3?{type:"m3",value:d.toArray()}:d&&d.isMatrix4?{type:"m4",value:d.toArray()}:{value:d};}0<Object.keys(this.defines).length&&(b.defines=this.defines);b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader;a={};for(var e in this.extensions){!0===this.extensions[e]&&(a[e]=!0);}0<Object.keys(a).length&&(b.extensions=a);return b;};db.prototype=Object.assign(Object.create(E.prototype),{constructor:db,isCamera:!0,copy:function copy(a,b){E.prototype.copy.call(this,a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);this.projectionMatrixInverse.copy(a.projectionMatrixInverse);return this;},getWorldDirection:function getWorldDirection(a){void 0===a&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new n());this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize();},updateMatrixWorld:function updateMatrixWorld(a){E.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld);},updateWorldMatrix:function updateWorldMatrix(a,b){E.prototype.updateWorldMatrix.call(this,a,b);this.matrixWorldInverse.getInverse(this.matrixWorld);},clone:function clone(){return new this.constructor().copy(this);}});ba.prototype=Object.assign(Object.create(db.prototype),{constructor:ba,isPerspectiveCamera:!0,copy:function copy(a,b){db.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this;},setFocalLength:function setFocalLength(a){a=.5*this.getFilmHeight()/a;this.fov=2*L.RAD2DEG*Math.atan(a);this.updateProjectionMatrix();},getFocalLength:function getFocalLength(){var a=Math.tan(.5*L.DEG2RAD*this.fov);return .5*this.getFilmHeight()/a;},getEffectiveFOV:function getEffectiveFOV(){return 2*L.RAD2DEG*Math.atan(Math.tan(.5*L.DEG2RAD*this.fov)/this.zoom);},getFilmWidth:function getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1);},getFilmHeight:function getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1);},setViewOffset:function setViewOffset(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix();},clearViewOffset:function clearViewOffset(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix();},updateProjectionMatrix:function updateProjectionMatrix(){var a=this.near,b=a*Math.tan(.5*L.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,h=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/h;d*=f.width/g;c*=f.height/h;}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function toJSON(a){a=E.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a;}});Gc.prototype=Object.create(E.prototype);Gc.prototype.constructor=Gc;Db.prototype=Object.create(Ha.prototype);Db.prototype.constructor=Db;Db.prototype.isWebGLCubeRenderTarget=!0;Db.prototype.fromEquirectangularTexture=function(a,b){this.texture.type=b.type;this.texture.format=b.format;this.texture.encoding=b.encoding;var c=new ob(),d=new Ba({type:"CubemapFromEquirect",uniforms:Fc({tEquirect:{value:null}}),vertexShader:"varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",fragmentShader:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",side:1,blending:0});d.uniforms.tEquirect.value=b;b=new S(new Jd(5,5,5),d);c.add(b);d=new Gc(1,10,1);d.renderTarget=this;d.renderTarget.texture.name="CubeCameraTexture";d.update(a,c);b.geometry.dispose();b.material.dispose();return this;};ac.prototype=Object.create(W.prototype);ac.prototype.constructor=ac;ac.prototype.isDataTexture=!0;var wd=new pb(),Lf=new n();Object.assign(Hc.prototype,{set:function set(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){for(var b=this.planes,c=0;6>c;c++){b[c].copy(a.planes[c]);}return this;},setFromProjectionMatrix:function setFromProjectionMatrix(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],l=c[6],m=c[7],k=c[8],p=c[9],n=c[10],r=c[11],q=c[12],v=c[13],u=c[14];c=c[15];b[0].setComponents(f-a,m-g,r-k,c-q).normalize();b[1].setComponents(f+a,m+g,r+k,c+q).normalize();b[2].setComponents(f+d,m+h,r+p,c+v).normalize();b[3].setComponents(f-d,m-h,r-p,c-v).normalize();b[4].setComponents(f-e,m-l,r-n,c-u).normalize();b[5].setComponents(f+e,m+l,r+n,c+u).normalize();return this;},intersectsObject:function intersectsObject(a){var b=a.geometry;null===b.boundingSphere&&b.computeBoundingSphere();wd.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);return this.intersectsSphere(wd);},intersectsSprite:function intersectsSprite(a){wd.center.set(0,0,0);wd.radius=.7071067811865476;wd.applyMatrix4(a.matrixWorld);return this.intersectsSphere(wd);},intersectsSphere:function intersectsSphere(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++){if(b[d].distanceToPoint(c)<a)return!1;}return!0;},intersectsBox:function intersectsBox(a){for(var b=this.planes,c=0;6>c;c++){var d=b[c];Lf.x=0<d.normal.x?a.max.x:a.min.x;Lf.y=0<d.normal.y?a.max.y:a.min.y;Lf.z=0<d.normal.z?a.max.z:a.min.z;if(0>d.distanceToPoint(Lf))return!1;}return!0;},containsPoint:function containsPoint(a){for(var b=this.planes,c=0;6>c;c++){if(0>b[c].distanceToPoint(a))return!1;}return!0;}});var D={common:{diffuse:{value:new z(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new wa()},uv2Transform:{value:new wa()},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new u(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new z(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wa()}},sprite:{diffuse:{value:new z(15658734)},opacity:{value:1},center:{value:new u(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wa()}}};Id.prototype=Object.create(N.prototype);Id.prototype.constructor=Id;bc.prototype=Object.create(B.prototype);bc.prototype.constructor=bc;var O={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP ) && ! defined( TOON )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP ) && ! defined( TOON )\n\tvarying vec3 vViewPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP ) && ! defined( TOON )\n\tvViewPosition = - mvPosition.xyz;\n#endif",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",clearcoat_normalmap_pars_fragment:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},eb={basic:{uniforms:va([D.common,D.specularmap,D.envmap,D.aomap,D.lightmap,D.fog]),vertexShader:O.meshbasic_vert,fragmentShader:O.meshbasic_frag},lambert:{uniforms:va([D.common,D.specularmap,D.envmap,D.aomap,D.lightmap,D.emissivemap,D.fog,D.lights,{emissive:{value:new z(0)}}]),vertexShader:O.meshlambert_vert,fragmentShader:O.meshlambert_frag},phong:{uniforms:va([D.common,D.specularmap,D.envmap,D.aomap,D.lightmap,D.emissivemap,D.bumpmap,D.normalmap,D.displacementmap,D.fog,D.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30}}]),vertexShader:O.meshphong_vert,fragmentShader:O.meshphong_frag},standard:{uniforms:va([D.common,D.envmap,D.aomap,D.lightmap,D.emissivemap,D.bumpmap,D.normalmap,D.displacementmap,D.roughnessmap,D.metalnessmap,D.fog,D.lights,{emissive:{value:new z(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:O.meshphysical_vert,fragmentShader:O.meshphysical_frag},toon:{uniforms:va([D.common,D.specularmap,D.aomap,D.lightmap,D.emissivemap,D.bumpmap,D.normalmap,D.displacementmap,D.gradientmap,D.fog,D.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30}}]),vertexShader:O.meshtoon_vert,fragmentShader:O.meshtoon_frag},matcap:{uniforms:va([D.common,D.bumpmap,D.normalmap,D.displacementmap,D.fog,{matcap:{value:null}}]),vertexShader:O.meshmatcap_vert,fragmentShader:O.meshmatcap_frag},points:{uniforms:va([D.points,D.fog]),vertexShader:O.points_vert,fragmentShader:O.points_frag},dashed:{uniforms:va([D.common,D.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:O.linedashed_vert,fragmentShader:O.linedashed_frag},depth:{uniforms:va([D.common,D.displacementmap]),vertexShader:O.depth_vert,fragmentShader:O.depth_frag},normal:{uniforms:va([D.common,D.bumpmap,D.normalmap,D.displacementmap,{opacity:{value:1}}]),vertexShader:O.normal_vert,fragmentShader:O.normal_frag},sprite:{uniforms:va([D.sprite,D.fog]),vertexShader:O.sprite_vert,fragmentShader:O.sprite_frag},background:{uniforms:{uvTransform:{value:new wa()},t2D:{value:null}},vertexShader:O.background_vert,fragmentShader:O.background_frag},cube:{uniforms:va([D.envmap,{opacity:{value:1}}]),vertexShader:O.cube_vert,fragmentShader:O.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:O.equirect_vert,fragmentShader:O.equirect_frag},distanceRGBA:{uniforms:va([D.common,D.displacementmap,{referencePosition:{value:new n()},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:O.distanceRGBA_vert,fragmentShader:O.distanceRGBA_frag},shadow:{uniforms:va([D.lights,D.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:O.shadow_vert,fragmentShader:O.shadow_frag}};eb.physical={uniforms:va([eb.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new z(0)},clearcoatNormalScale:{value:new u(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:O.meshphysical_vert,fragmentShader:O.meshphysical_frag};qb.prototype=Object.create(W.prototype);qb.prototype.constructor=qb;qb.prototype.isCubeTexture=!0;Object.defineProperty(qb.prototype,"images",{get:function get(){return this.image;},set:function set(a){this.image=a;}});Ic.prototype=Object.create(W.prototype);Ic.prototype.constructor=Ic;Ic.prototype.isDataTexture2DArray=!0;Jc.prototype=Object.create(W.prototype);Jc.prototype.constructor=Jc;Jc.prototype.isDataTexture3D=!0;var Gh=new W(),Nj=new Ic(),Pj=new Jc(),Hh=new qb(),Ah=[],Ch=[],Fh=new Float32Array(16),Eh=new Float32Array(9),Dh=new Float32Array(4);Ih.prototype.updateCache=function(a){var b=this.cache;a instanceof Float32Array&&b.length!==a.length&&(this.cache=new Float32Array(a.length));Ia(b,a);};Jh.prototype.setValue=function(a,b,c){for(var d=this.seq,e=0,f=d.length;e!==f;++e){var g=d[e];g.setValue(a,b[g.id],c);}};var gg=/([\w\d_]+)(\])?(\[|\.)?/g;Eb.prototype.setValue=function(a,b,c,d){b=this.map[b];void 0!==b&&b.setValue(a,c,d);};Eb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b);};Eb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d);}};Eb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f);}return c;};var uk=0,ig=/^[ \t]*#include +<([\w\d./]+)>/gm,Rh=/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ek=0;Fb.prototype=Object.create(K.prototype);Fb.prototype.constructor=Fb;Fb.prototype.isMeshDepthMaterial=!0;Fb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this;};Gb.prototype=Object.create(K.prototype);Gb.prototype.constructor=Gb;Gb.prototype.isMeshDistanceMaterial=!0;Gb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this;};Qe.prototype=Object.assign(Object.create(ba.prototype),{constructor:Qe,isArrayCamera:!0});Mc.prototype=Object.assign(Object.create(E.prototype),{constructor:Mc,isGroup:!0});Object.assign(Yh.prototype,Ea.prototype);Object.assign(Re.prototype,{isFogExp2:!0,clone:function clone(){return new Re(this.color,this.density);},toJSON:function toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density};}});Object.assign(Se.prototype,{isFog:!0,clone:function clone(){return new Se(this.color,this.near,this.far);},toJSON:function toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far};}});Object.defineProperty(rb.prototype,"needsUpdate",{set:function set(a){!0===a&&this.version++;}});Object.assign(rb.prototype,{isInterleavedBuffer:!0,onUploadCallback:function onUploadCallback(){},setUsage:function setUsage(a){this.usage=a;return this;},copy:function copy(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.usage=a.usage;return this;},copyAt:function copyAt(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++){this.array[a+d]=b.array[c+d];}return this;},set:function set(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},clone:function clone(){return new this.constructor().copy(this);},onUpload:function onUpload(a){this.onUploadCallback=a;return this;}});var uc=new n();Object.defineProperties(Od.prototype,{count:{get:function get(){return this.data.count;}},array:{get:function get(){return this.data.array;}}});Object.assign(Od.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function applyMatrix4(a){for(var b=0,c=this.data.count;b<c;b++){uc.x=this.getX(b),uc.y=this.getY(b),uc.z=this.getZ(b),uc.applyMatrix4(a),this.setXYZ(b,uc.x,uc.y,uc.z);}return this;},setX:function setX(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this;},setY:function setY(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this;},setZ:function setZ(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this;},setW:function setW(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this;},getX:function getX(a){return this.data.array[a*this.data.stride+this.offset];},getY:function getY(a){return this.data.array[a*this.data.stride+this.offset+1];},getZ:function getZ(a){return this.data.array[a*this.data.stride+this.offset+2];},getW:function getW(a){return this.data.array[a*this.data.stride+this.offset+3];},setXY:function setXY(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this;},setXYZ:function setXYZ(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this;},setXYZW:function setXYZW(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this;}});Ib.prototype=Object.create(K.prototype);Ib.prototype.constructor=Ib;Ib.prototype.isSpriteMaterial=!0;Ib.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.rotation=a.rotation;this.sizeAttenuation=a.sizeAttenuation;return this;};var Nc,De=new n(),xd=new n(),yd=new n(),Oc=new u(),Qd=new u(),$h=new P(),Mf=new n(),Ee=new n(),Nf=new n(),Pi=new u(),nh=new u(),Qi=new u();Pd.prototype=Object.assign(Object.create(E.prototype),{constructor:Pd,isSprite:!0,raycast:function raycast(a,b){null===a.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');xd.setFromMatrixScale(this.matrixWorld);$h.copy(a.camera.matrixWorld);this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse,this.matrixWorld);yd.setFromMatrixPosition(this.modelViewMatrix);a.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&xd.multiplyScalar(-yd.z);var c=this.material.rotation;if(0!==c){var d=Math.cos(c);var e=Math.sin(c);}c=this.center;Te(Mf.set(-.5,-.5,0),yd,c,xd,e,d);Te(Ee.set(.5,-.5,0),yd,c,xd,e,d);Te(Nf.set(.5,.5,0),yd,c,xd,e,d);Pi.set(0,0);nh.set(1,0);Qi.set(1,1);var f=a.ray.intersectTriangle(Mf,Ee,Nf,!1,De);if(null===f&&(Te(Ee.set(-.5,.5,0),yd,c,xd,e,d),nh.set(0,1),f=a.ray.intersectTriangle(Mf,Nf,Ee,!1,De),null===f))return;e=a.ray.origin.distanceTo(De);e<a.near||e>a.far||b.push({distance:e,point:De.clone(),uv:oa.getUV(De,Mf,Ee,Nf,Pi,nh,Qi,new u()),face:null,object:this});},clone:function clone(){return new this.constructor(this.material).copy(this);},copy:function copy(a){E.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this;}});var Of=new n(),Ri=new n();Rd.prototype=Object.assign(Object.create(E.prototype),{constructor:Rd,isLOD:!0,copy:function copy(a){E.prototype.copy.call(this,a,!1);for(var b=a.levels,c=0,d=b.length;c<d;c++){var e=b[c];this.addLevel(e.object.clone(),e.distance);}this.autoUpdate=a.autoUpdate;return this;},addLevel:function addLevel(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++){;}c.splice(d,0,{distance:b,object:a});this.add(a);return this;},getCurrentLevel:function getCurrentLevel(){return this._currentLevel;},getObjectForDistance:function getObjectForDistance(a){var b=this.levels;if(0<b.length){for(var c=1,d=b.length;c<d&&!(a<b[c].distance);c++){;}return b[c-1].object;}return null;},raycast:function raycast(a,b){if(0<this.levels.length){Of.setFromMatrixPosition(this.matrixWorld);var c=a.ray.origin.distanceTo(Of);this.getObjectForDistance(c).raycast(a,b);}},update:function update(a){var b=this.levels;if(1<b.length){Of.setFromMatrixPosition(a.matrixWorld);Ri.setFromMatrixPosition(this.matrixWorld);a=Of.distanceTo(Ri)/a.zoom;b[0].object.visible=!0;for(var c=1,d=b.length;c<d;c++){if(a>=b[c].distance)b[c-1].object.visible=!1,b[c].object.visible=!0;else break;}for(this._currentLevel=c-1;c<d;c++){b[c].object.visible=!1;}}},toJSON:function toJSON(a){a=E.prototype.toJSON.call(this,a);!1===this.autoUpdate&&(a.object.autoUpdate=!1);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance});}return a;}});Sd.prototype=Object.assign(Object.create(S.prototype),{constructor:Sd,isSkinnedMesh:!0,bind:function bind(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b);},pose:function pose(){this.skeleton.pose();},normalizeSkinWeights:function normalizeSkinWeights(){for(var a=new ka(),b=this.geometry.attributes.skinWeight,c=0,d=b.count;c<d;c++){a.x=b.getX(c);a.y=b.getY(c);a.z=b.getZ(c);a.w=b.getW(c);var e=1/a.manhattanLength();Infinity!==e?a.multiplyScalar(e):a.set(1,0,0,0);b.setXYZW(c,a.x,a.y,a.z,a.w);}},updateMatrixWorld:function updateMatrixWorld(a){S.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode);},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});var Si=new P(),Yk=new P();Object.assign(Ue.prototype,{calculateInverses:function calculateInverses(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new P();this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c);}},pose:function pose(){var a,b;var c=0;for(b=this.bones.length;c<b;c++){(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);}c=0;for(b=this.bones.length;c<b;c++){if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale);}},update:function update(){for(var a=this.bones,b=this.boneInverses,c=this.boneMatrices,d=this.boneTexture,e=0,f=a.length;e<f;e++){Si.multiplyMatrices(a[e]?a[e].matrixWorld:Yk,b[e]),Si.toArray(c,16*e);}void 0!==d&&(d.needsUpdate=!0);},clone:function clone(){return new Ue(this.bones,this.boneInverses);},getBoneByName:function getBoneByName(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d;}}});og.prototype=Object.assign(Object.create(E.prototype),{constructor:og,isBone:!0});var Ti=new P(),Ui=new P(),zd=[],Fe=new S();Ve.prototype=Object.assign(Object.create(S.prototype),{constructor:Ve,isInstancedMesh:!0,getMatrixAt:function getMatrixAt(a,b){b.fromArray(this.instanceMatrix.array,16*a);},raycast:function raycast(a,b){var c=this.matrixWorld,d=this.count;Fe.geometry=this.geometry;Fe.material=this.material;if(void 0!==Fe.material)for(var e=0;e<d;e++){this.getMatrixAt(e,Ti),Ui.multiplyMatrices(c,Ti),Fe.matrixWorld=Ui,Fe.raycast(a,zd),0<zd.length&&(zd[0].instanceId=e,zd[0].object=this,b.push(zd[0]),zd.length=0);}},setMatrixAt:function setMatrixAt(a,b){b.toArray(this.instanceMatrix.array,16*a);},updateMorphTargets:function updateMorphTargets(){}});la.prototype=Object.create(K.prototype);la.prototype.constructor=la;la.prototype.isLineBasicMaterial=!0;la.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this;};var Vi=new n(),Wi=new n(),Xi=new P(),Pf=new Vb(),Ge=new pb();Ka.prototype=Object.assign(Object.create(E.prototype),{constructor:Ka,isLine:!0,computeLineDistances:function computeLineDistances(){var a=this.geometry;if(a.isBufferGeometry){if(null===a.index){for(var b=a.attributes.position,c=[0],d=1,e=b.count;d<e;d++){Vi.fromBufferAttribute(b,d-1),Wi.fromBufferAttribute(b,d),c[d]=c[d-1],c[d]+=Vi.distanceTo(Wi);}a.setAttribute("lineDistance",new A(c,1));}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");}else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,c[0]=0,d=1,e=b.length;d<e;d++){c[d]=c[d-1],c[d]+=b[d-1].distanceTo(b[d]);}return this;},raycast:function raycast(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Line.threshold;null===c.boundingSphere&&c.computeBoundingSphere();Ge.copy(c.boundingSphere);Ge.applyMatrix4(d);Ge.radius+=e;if(!1!==a.ray.intersectsSphere(Ge)){Xi.getInverse(d);Pf.copy(a.ray).applyMatrix4(Xi);d=e/((this.scale.x+this.scale.y+this.scale.z)/3);d*=d;var f=new n(),g=new n();e=new n();var h=new n(),l=this&&this.isLineSegments?2:1;if(c.isBufferGeometry){var k=c.index,t=c.attributes.position.array;if(null!==k){k=k.array;c=0;for(var p=k.length-1;c<p;c+=l){var x=k[c+1];f.fromArray(t,3*k[c]);g.fromArray(t,3*x);x=Pf.distanceSqToSegment(f,g,h,e);x>d||(h.applyMatrix4(this.matrixWorld),x=a.ray.origin.distanceTo(h),x<a.near||x>a.far||b.push({distance:x,point:e.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}));}}else for(c=0,p=t.length/3-1;c<p;c+=l){f.fromArray(t,3*c),g.fromArray(t,3*c+3),x=Pf.distanceSqToSegment(f,g,h,e),x>d||(h.applyMatrix4(this.matrixWorld),x=a.ray.origin.distanceTo(h),x<a.near||x>a.far||b.push({distance:x,point:e.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}));}}else if(c.isGeometry)for(f=c.vertices,g=f.length,c=0;c<g-1;c+=l){x=Pf.distanceSqToSegment(f[c],f[c+1],h,e),x>d||(h.applyMatrix4(this.matrixWorld),x=a.ray.origin.distanceTo(h),x<a.near||x>a.far||b.push({distance:x,point:e.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}));}}},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});var Qf=new n(),Rf=new n();ma.prototype=Object.assign(Object.create(Ka.prototype),{constructor:ma,isLineSegments:!0,computeLineDistances:function computeLineDistances(){var a=this.geometry;if(a.isBufferGeometry){if(null===a.index){for(var b=a.attributes.position,c=[],d=0,e=b.count;d<e;d+=2){Qf.fromBufferAttribute(b,d),Rf.fromBufferAttribute(b,d+1),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Qf.distanceTo(Rf);}a.setAttribute("lineDistance",new A(c,1));}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");}else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,d=0,e=b.length;d<e;d+=2){Qf.copy(b[d]),Rf.copy(b[d+1]),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Qf.distanceTo(Rf);}return this;}});We.prototype=Object.assign(Object.create(Ka.prototype),{constructor:We,isLineLoop:!0});Va.prototype=Object.create(K.prototype);Va.prototype.constructor=Va;Va.prototype.isPointsMaterial=!0;Va.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.morphTargets=a.morphTargets;return this;};var Yi=new P(),qg=new Vb(),He=new pb(),Sf=new n();Pc.prototype=Object.assign(Object.create(E.prototype),{constructor:Pc,isPoints:!0,raycast:function raycast(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Points.threshold;null===c.boundingSphere&&c.computeBoundingSphere();He.copy(c.boundingSphere);He.applyMatrix4(d);He.radius+=e;if(!1!==a.ray.intersectsSphere(He))if(Yi.getInverse(d),qg.copy(a.ray).applyMatrix4(Yi),e/=(this.scale.x+this.scale.y+this.scale.z)/3,e*=e,c.isBufferGeometry){var f=c.index;c=c.attributes.position.array;if(null!==f){var g=f.array;f=0;for(var h=g.length;f<h;f++){var l=g[f];Sf.fromArray(c,3*l);pg(Sf,l,e,d,a,b,this);}}else for(f=0,g=c.length/3;f<g;f++){Sf.fromArray(c,3*f),pg(Sf,f,e,d,a,b,this);}}else for(c=c.vertices,f=0,g=c.length;f<g;f++){pg(c[f],f,e,d,a,b,this);}},updateMorphTargets:function updateMorphTargets(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a;}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");},clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});rg.prototype=Object.assign(Object.create(W.prototype),{constructor:rg,isVideoTexture:!0,update:function update(){var a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0);}});Qc.prototype=Object.create(W.prototype);Qc.prototype.constructor=Qc;Qc.prototype.isCompressedTexture=!0;Td.prototype=Object.create(W.prototype);Td.prototype.constructor=Td;Td.prototype.isCanvasTexture=!0;Ud.prototype=Object.create(W.prototype);Ud.prototype.constructor=Ud;Ud.prototype.isDepthTexture=!0;Rc.prototype=Object.create(B.prototype);Rc.prototype.constructor=Rc;Vd.prototype=Object.create(N.prototype);Vd.prototype.constructor=Vd;Sc.prototype=Object.create(B.prototype);Sc.prototype.constructor=Sc;Wd.prototype=Object.create(N.prototype);Wd.prototype.constructor=Wd;Ga.prototype=Object.create(B.prototype);Ga.prototype.constructor=Ga;Xd.prototype=Object.create(N.prototype);Xd.prototype.constructor=Xd;Tc.prototype=Object.create(Ga.prototype);Tc.prototype.constructor=Tc;Yd.prototype=Object.create(N.prototype);Yd.prototype.constructor=Yd;cc.prototype=Object.create(Ga.prototype);cc.prototype.constructor=cc;Zd.prototype=Object.create(N.prototype);Zd.prototype.constructor=Zd;Uc.prototype=Object.create(Ga.prototype);Uc.prototype.constructor=Uc;$d.prototype=Object.create(N.prototype);$d.prototype.constructor=$d;Vc.prototype=Object.create(Ga.prototype);Vc.prototype.constructor=Vc;ae.prototype=Object.create(N.prototype);ae.prototype.constructor=ae;dc.prototype=Object.create(B.prototype);dc.prototype.constructor=dc;dc.prototype.toJSON=function(){var a=B.prototype.toJSON.call(this);a.path=this.parameters.path.toJSON();return a;};be.prototype=Object.create(N.prototype);be.prototype.constructor=be;Wc.prototype=Object.create(B.prototype);Wc.prototype.constructor=Wc;ce.prototype=Object.create(N.prototype);ce.prototype.constructor=ce;Xc.prototype=Object.create(B.prototype);Xc.prototype.constructor=Xc;var Zk={triangulate:function triangulate(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=ai(a,0,e,c,!0),g=[];if(!f||f.next===f.prev)return g;var h;if(d){var l=c;d=[];var k;var n=0;for(k=b.length;n<k;n++){var p=b[n]*l;var x=n<k-1?b[n+1]*l:a.length;p=ai(a,p,x,l,!1);p===p.next&&(p.steiner=!0);d.push(Lk(p));}d.sort(Jk);for(n=0;n<d.length;n++){b=d[n];l=f;if(l=Kk(b,l))b=di(l,b),ee(b,b.next);f=ee(f,f.next);}}if(a.length>80*c){var r=h=a[0];var q=d=a[1];for(l=c;l<e;l+=c){n=a[l],b=a[l+1],n<r&&(r=n),b<q&&(q=b),n>h&&(h=n),b>d&&(d=b);}h=Math.max(h-r,d-q);h=0!==h?1/h:0;}fe(f,g,c,r,q,h);return g;}},sb={area:function area(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++){c+=a[d].x*a[e].y-a[e].x*a[d].y;}return .5*c;},isClockWise:function isClockWise(a){return 0>sb.area(a);},triangulateShape:function triangulateShape(a,b){var c=[],d=[],e=[];ei(a);fi(c,a);var f=a.length;b.forEach(ei);for(a=0;a<b.length;a++){d.push(f),f+=b[a].length,fi(c,b[a]);}b=Zk.triangulate(c,d);for(a=0;a<b.length;a+=3){e.push(b.slice(a,a+3));}return e;}};fc.prototype=Object.create(N.prototype);fc.prototype.constructor=fc;fc.prototype.toJSON=function(){var a=N.prototype.toJSON.call(this);return gi(this.parameters.shapes,this.parameters.options,a);};fb.prototype=Object.create(B.prototype);fb.prototype.constructor=fb;fb.prototype.toJSON=function(){var a=B.prototype.toJSON.call(this);return gi(this.parameters.shapes,this.parameters.options,a);};var Mk={generateTopUV:function generateTopUV(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new u(b[3*c],b[3*c+1]),new u(a,d),new u(f,e)];},generateSideWallUV:function generateSideWallUV(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],l=b[3*d+1];d=b[3*d+2];var k=b[3*e],n=b[3*e+1];e=b[3*e+2];var p=b[3*f],x=b[3*f+1];b=b[3*f+2];return .01>Math.abs(g-l)?[new u(a,1-c),new u(h,1-d),new u(k,1-e),new u(p,1-b)]:[new u(g,1-c),new u(l,1-d),new u(n,1-e),new u(x,1-b)];}};he.prototype=Object.create(N.prototype);he.prototype.constructor=he;Zc.prototype=Object.create(fb.prototype);Zc.prototype.constructor=Zc;ie.prototype=Object.create(N.prototype);ie.prototype.constructor=ie;gc.prototype=Object.create(B.prototype);gc.prototype.constructor=gc;je.prototype=Object.create(N.prototype);je.prototype.constructor=je;$c.prototype=Object.create(B.prototype);$c.prototype.constructor=$c;ke.prototype=Object.create(N.prototype);ke.prototype.constructor=ke;ad.prototype=Object.create(B.prototype);ad.prototype.constructor=ad;hc.prototype=Object.create(N.prototype);hc.prototype.constructor=hc;hc.prototype.toJSON=function(){var a=N.prototype.toJSON.call(this);return hi(this.parameters.shapes,a);};ic.prototype=Object.create(B.prototype);ic.prototype.constructor=ic;ic.prototype.toJSON=function(){var a=B.prototype.toJSON.call(this);return hi(this.parameters.shapes,a);};bd.prototype=Object.create(B.prototype);bd.prototype.constructor=bd;jc.prototype=Object.create(N.prototype);jc.prototype.constructor=jc;tb.prototype=Object.create(B.prototype);tb.prototype.constructor=tb;le.prototype=Object.create(jc.prototype);le.prototype.constructor=le;me.prototype=Object.create(tb.prototype);me.prototype.constructor=me;ne.prototype=Object.create(N.prototype);ne.prototype.constructor=ne;cd.prototype=Object.create(B.prototype);cd.prototype.constructor=cd;var ua=Object.freeze({__proto__:null,WireframeGeometry:Rc,ParametricGeometry:Vd,ParametricBufferGeometry:Sc,TetrahedronGeometry:Xd,TetrahedronBufferGeometry:Tc,OctahedronGeometry:Yd,OctahedronBufferGeometry:cc,IcosahedronGeometry:Zd,IcosahedronBufferGeometry:Uc,DodecahedronGeometry:$d,DodecahedronBufferGeometry:Vc,PolyhedronGeometry:Wd,PolyhedronBufferGeometry:Ga,TubeGeometry:ae,TubeBufferGeometry:dc,TorusKnotGeometry:be,TorusKnotBufferGeometry:Wc,TorusGeometry:ce,TorusBufferGeometry:Xc,TextGeometry:he,TextBufferGeometry:Zc,SphereGeometry:ie,SphereBufferGeometry:gc,RingGeometry:je,RingBufferGeometry:$c,PlaneGeometry:Id,PlaneBufferGeometry:bc,LatheGeometry:ke,LatheBufferGeometry:ad,ShapeGeometry:hc,ShapeBufferGeometry:ic,ExtrudeGeometry:fc,ExtrudeBufferGeometry:fb,EdgesGeometry:bd,ConeGeometry:le,ConeBufferGeometry:me,CylinderGeometry:jc,CylinderBufferGeometry:tb,CircleGeometry:ne,CircleBufferGeometry:cd,BoxGeometry:mh,BoxBufferGeometry:Jd});kc.prototype=Object.create(K.prototype);kc.prototype.constructor=kc;kc.prototype.isShadowMaterial=!0;kc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);return this;};ub.prototype=Object.create(Ba.prototype);ub.prototype.constructor=ub;ub.prototype.isRawShaderMaterial=!0;gb.prototype=Object.create(K.prototype);gb.prototype.constructor=gb;gb.prototype.isMeshStandardMaterial=!0;gb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.vertexTangents=a.vertexTangents;return this;};lc.prototype=Object.create(gb.prototype);lc.prototype.constructor=lc;lc.prototype.isMeshPhysicalMaterial=!0;lc.prototype.copy=function(a){gb.prototype.copy.call(this,a);this.defines={STANDARD:"",PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearcoat=a.clearcoat;this.clearcoatRoughness=a.clearcoatRoughness;this.sheen=a.sheen?(this.sheen||new z()).copy(a.sheen):null;this.clearcoatNormalMap=a.clearcoatNormalMap;this.clearcoatNormalScale.copy(a.clearcoatNormalScale);this.transparency=a.transparency;return this;};Jb.prototype=Object.create(K.prototype);Jb.prototype.constructor=Jb;Jb.prototype.isMeshPhongMaterial=!0;Jb.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};mc.prototype=Object.create(K.prototype);mc.prototype.constructor=mc;mc.prototype.isMeshToonMaterial=!0;mc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.gradientMap=a.gradientMap;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};nc.prototype=Object.create(K.prototype);nc.prototype.constructor=nc;nc.prototype.isMeshNormalMaterial=!0;nc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};oc.prototype=Object.create(K.prototype);oc.prototype.constructor=oc;oc.prototype.isMeshLambertMaterial=!0;oc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};pc.prototype=Object.create(K.prototype);pc.prototype.constructor=pc;pc.prototype.isMeshMatcapMaterial=!0;pc.prototype.copy=function(a){K.prototype.copy.call(this,a);this.defines={MATCAP:""};this.color.copy(a.color);this.matcap=a.matcap;this.map=a.map;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.alphaMap=a.alphaMap;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};qc.prototype=Object.create(la.prototype);qc.prototype.constructor=qc;qc.prototype.isLineDashedMaterial=!0;qc.prototype.copy=function(a){la.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this;};var $k=Object.freeze({__proto__:null,ShadowMaterial:kc,SpriteMaterial:Ib,RawShaderMaterial:ub,ShaderMaterial:Ba,PointsMaterial:Va,MeshPhysicalMaterial:lc,MeshStandardMaterial:gb,MeshPhongMaterial:Jb,MeshToonMaterial:mc,MeshNormalMaterial:nc,MeshLambertMaterial:oc,MeshDepthMaterial:Fb,MeshDistanceMaterial:Gb,MeshBasicMaterial:Oa,MeshMatcapMaterial:pc,LineDashedMaterial:qc,LineBasicMaterial:la,Material:K}),R={arraySlice:function arraySlice(a,b,c){return R.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):a.slice(b,c);},convertArray:function convertArray(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a);},isTypedArray:function isTypedArray(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView);},getKeyframeOrder:function getKeyframeOrder(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d){c[d]=d;}c.sort(function(b,c){return a[b]-a[c];});return c;},sortedArray:function sortedArray(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f){for(var h=c[f]*b,l=0;l!==b;++l){e[g++]=a[h+l];}}return e;},flattenJSON:function flattenJSON(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];){f=a[e++];}if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do{g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];}while(void 0!==f);}else if(void 0!==g.toArray){do{g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];}while(void 0!==f);}else{do{g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];}while(void 0!==f);}}},subclip:function subclip(a,b,c,d,e){e=e||30;a=a.clone();a.name=b;var f=[];for(b=0;b<a.tracks.length;++b){for(var g=a.tracks[b],h=g.getValueSize(),l=[],k=[],n=0;n<g.times.length;++n){var p=g.times[n]*e;if(!(p<c||p>=d))for(l.push(g.times[n]),p=0;p<h;++p){k.push(g.values[n*h+p]);}}0!==l.length&&(g.times=R.convertArray(l,g.times.constructor),g.values=R.convertArray(k,g.values.constructor),f.push(g));}a.tracks=f;c=Infinity;for(b=0;b<a.tracks.length;++b){c>a.tracks[b].times[0]&&(c=a.tracks[b].times[0]);}for(b=0;b<a.tracks.length;++b){a.tracks[b].shift(-1*c);}a.resetDuration();return a;}};Object.assign(La.prototype,{evaluate:function evaluate(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e);}if(c===f)break;e=d;d=b[++c];if(a<d)break b;}d=b.length;break c;}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b;}d=c;c=0;}}for(;c<d;){e=c+d>>>1,a<b[e]?d=e:c=e+1;}d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a);}this._cachedIndex=c;this.intervalChanged_(c,e,d);}return this.interpolate_(c,e,a,d);},settings:null,DefaultSettings_:{},getSettings_:function getSettings_(){return this.settings||this.DefaultSettings_;},copySampleValue_:function copySampleValue_(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e){b[e]=c[a+e];}return b;},interpolate_:function interpolate_(){throw Error("call to abstract method");},intervalChanged_:function intervalChanged_(){}});Object.assign(La.prototype,{beforeStart_:La.prototype.copySampleValue_,afterEnd_:La.prototype.copySampleValue_});Xe.prototype=Object.assign(Object.create(La.prototype),{constructor:Xe,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function intervalChanged_(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c;}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b;}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d;},interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,l=this._offsetPrev,k=this._offsetNext,n=this._weightPrev,p=this._weightNext,x=(c-b)/(d-b);c=x*x;d=c*x;b=-n*d+2*n*c-n*x;n=(1+n)*d+(-1.5-2*n)*c+(-.5+n)*x+1;x=(-1-p)*d+(1.5+p)*c+.5*x;p=p*d-p*c;for(c=0;c!==g;++c){e[c]=b*f[l+c]+n*f[h+c]+x*f[a+c]+p*f[k+c];}return e;}});oe.prototype=Object.assign(Object.create(La.prototype),{constructor:oe,interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d){e[d]=f[h+d]*c+f[a+d]*b;}return e;}});Ye.prototype=Object.assign(Object.create(La.prototype),{constructor:Ye,interpolate_:function interpolate_(a){return this.copySampleValue_(a-1);}});Object.assign(sa,{toJSON:function toJSON(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,times:R.convertArray(a.times,Array),values:R.convertArray(a.values,Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c);}b.type=a.ValueTypeName;return b;}});Object.assign(sa.prototype,{constructor:sa,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function InterpolantFactoryMethodDiscrete(a){return new Ye(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodLinear:function InterpolantFactoryMethodLinear(a){return new oe(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:function InterpolantFactoryMethodSmooth(a){return new Xe(this.times,this.values,this.getValueSize(),a);},setInterpolation:function setInterpolation(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth;}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn("THREE.KeyframeTrack:",b);return this;}this.createInterpolant=b;return this;},getInterpolation:function getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;}},getValueSize:function getValueSize(){return this.values.length/this.times.length;},shift:function shift(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c){b[c]+=a;}return this;},scale:function scale(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c){b[c]*=a;}return this;},trim:function trim(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;){++e;}for(;-1!==f&&c[f]>b;){--f;}++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=R.arraySlice(c,e,f),this.values=R.arraySlice(this.values,e*a,f*a);return this;},validate:function validate(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;b=this.values;var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break;}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break;}e=g;}if(void 0!==b&&R.isTypedArray(b))for(f=0,c=b.length;f!==c;++f){if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d);a=!1;break;}}return a;},optimize:function optimize(){for(var a=R.arraySlice(this.times),b=R.arraySlice(this.values),c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,l=a[g];if(l!==a[g+1]&&(1!==g||l!==l[0]))if(d)h=!0;else{var k=g*c,n=k-c,p=k+c;for(l=0;l!==c;++l){var x=b[k+l];if(x!==b[n+l]||x!==b[p+l]){h=!0;break;}}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,k=e*c,l=0;l!==c;++l){b[k+l]=b[h+l];}++e;}}if(0<f){a[e]=a[f];h=f*c;k=e*c;for(l=0;l!==c;++l){b[k+l]=b[h+l];}++e;}e!==a.length?(this.times=R.arraySlice(a,0,e),this.values=R.arraySlice(b,0,e*c)):(this.times=a,this.values=b);return this;},clone:function clone(){var a=R.arraySlice(this.times,0),b=R.arraySlice(this.values,0);a=new this.constructor(this.name,a,b);a.createInterpolant=this.createInterpolant;return a;}});Ze.prototype=Object.assign(Object.create(sa.prototype),{constructor:Ze,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});$e.prototype=Object.assign(Object.create(sa.prototype),{constructor:$e,ValueTypeName:"color"});dd.prototype=Object.assign(Object.create(sa.prototype),{constructor:dd,ValueTypeName:"number"});af.prototype=Object.assign(Object.create(La.prototype),{constructor:af,interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4){Aa.slerpFlat(e,0,f,a-g,f,a,b);}return e;}});pe.prototype=Object.assign(Object.create(sa.prototype),{constructor:pe,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function InterpolantFactoryMethodLinear(a){return new af(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:void 0});bf.prototype=Object.assign(Object.create(sa.prototype),{constructor:bf,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});ed.prototype=Object.assign(Object.create(sa.prototype),{constructor:ed,ValueTypeName:"vector"});Object.assign(Qa,{parse:function parse(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e){b.push(Ok(c[e]).scale(d));}return new Qa(a.name,a.duration,b);},toJSON:function toJSON(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid};for(var d=0,e=c.length;d!==e;++d){b.push(sa.toJSON(c[d]));}return a;},CreateFromMorphTargetSequence:function CreateFromMorphTargetSequence(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],l=[];h.push((g+e-1)%e,g,(g+1)%e);l.push(0,1,0);var k=R.getKeyframeOrder(h);h=R.sortedArray(h,1,k);l=R.sortedArray(l,1,k);d||0!==h[0]||(h.push(e),l.push(l[0]));f.push(new dd(".morphTargetInfluences["+b[g].name+"]",h,l).scale(1/c));}return new Qa(a,-1,f);},findByName:function findByName(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++){if(c[a].name===b)return c[a];}return null;},CreateClipsFromMorphTargetSequences:function CreateClipsFromMorphTargetSequences(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],l=h.name.match(e);if(l&&1<l.length){var k=l[1];(l=d[k])||(d[k]=l=[]);l.push(h);}}a=[];for(k in d){a.push(Qa.CreateFromMorphTargetSequence(k,d[k],b,c));}return a;},parseAnimation:function parseAnimation(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function c(a,b,_c,d,e){if(0!==_c.length){var f=[],g=[];R.flattenJSON(_c,f,g,d);0!==f.length&&e.push(new a(b,f,g));}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30;a=a.hierarchy||[];for(var h=0;h<a.length;h++){var l=a[h].keys;if(l&&0!==l.length)if(l[0].morphTargets){f={};for(var k=0;k<l.length;k++){if(l[k].morphTargets)for(var n=0;n<l[k].morphTargets.length;n++){f[l[k].morphTargets[n]]=-1;}}for(var p in f){var x=[],r=[];for(n=0;n!==l[k].morphTargets.length;++n){var q=l[k];x.push(q.time);r.push(q.morphTarget===p?1:0);}d.push(new dd(".morphTargetInfluence["+p+"]",x,r));}f=f.length*(g||1);}else k=".bones["+b[h].name+"]",c(ed,k+".position",l,"pos",d),c(pe,k+".quaternion",l,"rot",d),c(ed,k+".scale",l,"scl",d);}return 0===d.length?null:new Qa(e,f,d);}});Object.assign(Qa.prototype,{resetDuration:function resetDuration(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1]);}this.duration=a;return this;},trim:function trim(){for(var a=0;a<this.tracks.length;a++){this.tracks[a].trim(0,this.duration);}return this;},validate:function validate(){for(var a=!0,b=0;b<this.tracks.length;b++){a=a&&this.tracks[b].validate();}return a;},optimize:function optimize(){for(var a=0;a<this.tracks.length;a++){this.tracks[a].optimize();}return this;},clone:function clone(){for(var a=[],b=0;b<this.tracks.length;b++){a.push(this.tracks[b].clone());}return new Qa(this.name,this.duration,a);}});var vc={enabled:!1,files:{},add:function add(a,b){!1!==this.enabled&&(this.files[a]=b);},get:function get(a){if(!1!==this.enabled)return this.files[a];},remove:function remove(a){delete this.files[a];},clear:function clear(){this.files={};}},ii=new ug();Object.assign(X.prototype,{load:function load(){},parse:function parse(){},setCrossOrigin:function setCrossOrigin(a){this.crossOrigin=a;return this;},setPath:function setPath(a){this.path=a;return this;},setResourcePath:function setResourcePath(a){this.resourcePath=a;return this;}});var cb={};Ra.prototype=Object.assign(Object.create(X.prototype),{constructor:Ra,load:function load(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=vc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a);},0),f;if(void 0!==cb[a])cb[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=g[1];var h=!!g[2];g=g[3];g=decodeURIComponent(g);h&&(g=atob(g));try{var l=(this.responseType||"").toLowerCase();switch(l){case"arraybuffer":case"blob":var k=new Uint8Array(g.length);for(h=0;h<g.length;h++){k[h]=g.charCodeAt(h);}var n="blob"===l?new Blob([k.buffer],{type:c}):k.buffer;break;case"document":n=new DOMParser().parseFromString(g,c);break;case"json":n=JSON.parse(g);break;default:n=g;}setTimeout(function(){b&&b(n);e.manager.itemEnd(a);},0);}catch(x){setTimeout(function(){d&&d(x);e.manager.itemError(a);e.manager.itemEnd(a);},0);}}else{cb[a]=[];cb[a].push({onLoad:b,onProgress:c,onError:d});var p=new XMLHttpRequest();p.open("GET",a,!0);p.addEventListener("load",function(b){var c=this.response,d=cb[a];delete cb[a];if(200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");vc.add(a,c);for(var f=0,g=d.length;f<g;f++){var h=d[f];if(h.onLoad)h.onLoad(c);}}else{f=0;for(g=d.length;f<g;f++){if(h=d[f],h.onError)h.onError(b);}e.manager.itemError(a);}e.manager.itemEnd(a);},!1);p.addEventListener("progress",function(b){for(var c=cb[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b);}},!1);p.addEventListener("error",function(b){var c=cb[a];delete cb[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b);}e.manager.itemError(a);e.manager.itemEnd(a);},!1);p.addEventListener("abort",function(b){var c=cb[a];delete cb[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b);}e.manager.itemError(a);e.manager.itemEnd(a);},!1);void 0!==this.responseType&&(p.responseType=this.responseType);void 0!==this.withCredentials&&(p.withCredentials=this.withCredentials);p.overrideMimeType&&p.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader){p.setRequestHeader(h,this.requestHeader[h]);}p.send(null);}e.manager.itemStart(a);return p;}},setResponseType:function setResponseType(a){this.responseType=a;return this;},setWithCredentials:function setWithCredentials(a){this.withCredentials=a;return this;},setMimeType:function setMimeType(a){this.mimeType=a;return this;},setRequestHeader:function setRequestHeader(a){this.requestHeader=a;return this;}});vg.prototype=Object.assign(Object.create(X.prototype),{constructor:vg,load:function load(a,b,c,d){var e=this,f=new Ra(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function parse(a){for(var b=[],c=0;c<a.length;c++){var d=Qa.parse(a[c]);b.push(d);}return b;}});wg.prototype=Object.assign(Object.create(X.prototype),{constructor:wg,load:function load(a,b,c,d){function e(e){l.load(a[e],function(a){a=f.parse(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h));},c,d);}var f=this,g=[],h=new Qc();h.image=g;var l=new Ra(this.manager);l.setPath(this.path);l.setResponseType("arraybuffer");if(Array.isArray(a))for(var k=0,n=0,p=a.length;n<p;++n){e(n);}else l.load(a,function(a){a=f.parse(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++){g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height;}}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h);},c,d);return h;}});cf.prototype=Object.assign(Object.create(X.prototype),{constructor:cf,load:function load(a,b,c,d){var e=this,f=new ac(),g=new Ra(this.manager);g.setResponseType("arraybuffer");g.setPath(this.path);g.load(a,function(a){if(a=e.parse(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1006,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps,f.minFilter=1008),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a);},c,d);return f;}});fd.prototype=Object.assign(Object.create(X.prototype),{constructor:fd,load:function load(a,b,c,d){function e(){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);vc.add(a,this);b&&b(this);g.manager.itemEnd(a);}function f(b){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);d&&d(b);g.manager.itemError(a);g.manager.itemEnd(a);}void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var g=this,h=vc.get(a);if(void 0!==h)return g.manager.itemStart(a),setTimeout(function(){b&&b(h);g.manager.itemEnd(a);},0),h;var l=document.createElementNS("http://www.w3.org/1999/xhtml","img");l.addEventListener("load",e,!1);l.addEventListener("error",f,!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(l.crossOrigin=this.crossOrigin);g.manager.itemStart(a);l.src=a;return l;}});df.prototype=Object.assign(Object.create(X.prototype),{constructor:df,load:function load(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f));},void 0,d);}var f=new qb(),g=new fd(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c){e(c);}return f;}});ef.prototype=Object.assign(Object.create(X.prototype),{constructor:ef,load:function load(a,b,c,d){var e=new W(),f=new fd(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.jpe?g($|\?)/i)||0===a.search(/^data:image\/jpeg/);e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e);},c,d);return e;}});Object.assign(G.prototype,{getPoint:function getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.");return null;},getPointAt:function getPointAt(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b);},getPoints:function getPoints(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++){b.push(this.getPoint(c/a));}return b;},getSpacedPoints:function getSpacedPoints(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++){b.push(this.getPointAt(c/a));}return b;},getLength:function getLength(){var a=this.getLengths();return a[a.length-1];},getLengths:function getLengths(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f;}return this.cacheArcLengths=b;},updateArcLengths:function updateArcLengths(){this.needsUpdate=!0;this.getLengths();},getUtoTmapping:function getUtoTmapping(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;){if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break;}}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1);},getTangent:function getTangent(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize();},getTangentAt:function getTangentAt(a){a=this.getUtoTmapping(a);return this.getTangent(a);},computeFrenetFrames:function computeFrenetFrames(a,b){var c=new n(),d=[],e=[],f=[],g=new n(),h=new P(),l;for(l=0;l<=a;l++){var k=l/a;d[l]=this.getTangentAt(k);d[l].normalize();}e[0]=new n();f[0]=new n();l=Number.MAX_VALUE;k=Math.abs(d[0].x);var t=Math.abs(d[0].y),p=Math.abs(d[0].z);k<=l&&(l=k,c.set(1,0,0));t<=l&&(l=t,c.set(0,1,0));p<=l&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(l=1;l<=a;l++){e[l]=e[l-1].clone(),f[l]=f[l-1].clone(),g.crossVectors(d[l-1],d[l]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(L.clamp(d[l-1].dot(d[l]),-1,1)),e[l].applyMatrix4(h.makeRotationAxis(g,c))),f[l].crossVectors(d[l],e[l]);}if(!0===b)for(c=Math.acos(L.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),l=1;l<=a;l++){e[l].applyMatrix4(h.makeRotationAxis(d[l],c*l)),f[l].crossVectors(d[l],e[l]);}return{tangents:d,normals:e,binormals:f};},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.arcLengthDivisions=a.arcLengthDivisions;return this;},toJSON:function toJSON(){var a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a;},fromJSON:function fromJSON(a){this.arcLengthDivisions=a.arcLengthDivisions;return this;}});Ma.prototype=Object.create(G.prototype);Ma.prototype.constructor=Ma;Ma.prototype.isEllipseCurve=!0;Ma.prototype.getPoint=function(a,b){b=b||new u();for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>d;){d+=c;}for(;d>c;){d-=c;}d<Number.EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f);};Ma.prototype.copy=function(a){G.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this;};Ma.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a;};Ma.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this;};gd.prototype=Object.create(Ma.prototype);gd.prototype.constructor=gd;gd.prototype.isArcCurve=!0;var Tf=new n(),oh=new xg(),ph=new xg(),qh=new xg();pa.prototype=Object.create(G.prototype);pa.prototype.constructor=pa;pa.prototype.isCatmullRomCurve3=!0;pa.prototype.getPoint=function(a,b){b=b||new n();var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/d)+1)*d:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else Tf.subVectors(c[0],c[1]).add(c[0]),f=Tf;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Tf.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Tf);if("centripetal"===this.curveType||"chordal"===this.curveType){var l="chordal"===this.curveType?.5:.25;d=Math.pow(f.distanceToSquared(g),l);e=Math.pow(g.distanceToSquared(h),l);l=Math.pow(h.distanceToSquared(c),l);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>l&&(l=e);oh.initNonuniformCatmullRom(f.x,g.x,h.x,c.x,d,e,l);ph.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,l);qh.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,l);}else"catmullrom"===this.curveType&&(oh.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),ph.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),qh.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(oh.calc(a),ph.calc(a),qh.calc(a));return b;};pa.prototype.copy=function(a){G.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){this.points.push(a.points[b].clone());}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this;};pa.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++){a.points.push(this.points[b].toArray());}a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a;};pa.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push(new n().fromArray(d));}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this;};Wa.prototype=Object.create(G.prototype);Wa.prototype.constructor=Wa;Wa.prototype.isCubicBezierCurve=!0;Wa.prototype.getPoint=function(a,b){b=b||new u();var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(re(a,c.x,d.x,e.x,f.x),re(a,c.y,d.y,e.y,f.y));return b;};Wa.prototype.copy=function(a){G.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this;};Wa.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a;};Wa.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this;};hb.prototype=Object.create(G.prototype);hb.prototype.constructor=hb;hb.prototype.isCubicBezierCurve3=!0;hb.prototype.getPoint=function(a,b){b=b||new n();var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(re(a,c.x,d.x,e.x,f.x),re(a,c.y,d.y,e.y,f.y),re(a,c.z,d.z,e.z,f.z));return b;};hb.prototype.copy=function(a){G.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this;};hb.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a;};hb.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this;};Da.prototype=Object.create(G.prototype);Da.prototype.constructor=Da;Da.prototype.isLineCurve=!0;Da.prototype.getPoint=function(a,b){b=b||new u();1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b;};Da.prototype.getPointAt=function(a,b){return this.getPoint(a,b);};Da.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize();};Da.prototype.copy=function(a){G.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Da.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Da.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Xa.prototype=Object.create(G.prototype);Xa.prototype.constructor=Xa;Xa.prototype.isLineCurve3=!0;Xa.prototype.getPoint=function(a,b){b=b||new n();1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b;};Xa.prototype.getPointAt=function(a,b){return this.getPoint(a,b);};Xa.prototype.copy=function(a){G.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Xa.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Xa.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Ya.prototype=Object.create(G.prototype);Ya.prototype.constructor=Ya;Ya.prototype.isQuadraticBezierCurve=!0;Ya.prototype.getPoint=function(a,b){b=b||new u();var c=this.v0,d=this.v1,e=this.v2;b.set(qe(a,c.x,d.x,e.x),qe(a,c.y,d.y,e.y));return b;};Ya.prototype.copy=function(a){G.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Ya.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Ya.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};ib.prototype=Object.create(G.prototype);ib.prototype.constructor=ib;ib.prototype.isQuadraticBezierCurve3=!0;ib.prototype.getPoint=function(a,b){b=b||new n();var c=this.v0,d=this.v1,e=this.v2;b.set(qe(a,c.x,d.x,e.x),qe(a,c.y,d.y,e.y),qe(a,c.z,d.z,e.z));return b;};ib.prototype.copy=function(a){G.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};ib.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};ib.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Za.prototype=Object.create(G.prototype);Za.prototype.constructor=Za;Za.prototype.isSplineCurve=!0;Za.prototype.getPoint=function(a,b){b=b||new u();var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-2?c.length-1:a+1];c=c[a>c.length-3?c.length-1:a+2];b.set(ji(d,e.x,f.x,g.x,c.x),ji(d,e.y,f.y,g.y,c.y));return b;};Za.prototype.copy=function(a){G.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){this.points.push(a.points[b].clone());}return this;};Za.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++){a.points.push(this.points[b].toArray());}return a;};Za.prototype.fromJSON=function(a){G.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push(new u().fromArray(d));}return this;};var rh=Object.freeze({__proto__:null,ArcCurve:gd,CatmullRomCurve3:pa,CubicBezierCurve:Wa,CubicBezierCurve3:hb,EllipseCurve:Ma,LineCurve:Da,LineCurve3:Xa,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:ib,SplineCurve:Za});vb.prototype=Object.assign(Object.create(G.prototype),{constructor:vb,add:function add(a){this.curves.push(a);},closePath:function closePath(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Da(b,a));},getPoint:function getPoint(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++;}return null;},getLength:function getLength(){var a=this.getCurveLengths();return a[a.length-1];},updateArcLengths:function updateArcLengths(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths();},getCurveLengths:function getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++){b+=this.curves[c].getLength(),a.push(b);}return this.cacheLengths=a;},getSpacedPoints:function getSpacedPoints(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++){b.push(this.getPoint(c/a));}this.autoClose&&b.push(b[0]);return b;},getPoints:function getPoints(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h);}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b;},copy:function copy(a){G.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){this.curves.push(a.curves[b].clone());}this.autoClose=a.autoClose;return this;},toJSON:function toJSON(){var a=G.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++){a.curves.push(this.curves[b].toJSON());}return a;},fromJSON:function fromJSON(a){G.prototype.fromJSON.call(this,a);this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push(new rh[d.type]().fromJSON(d));}return this;}});$a.prototype=Object.assign(Object.create(vb.prototype),{constructor:$a,setFromPoints:function setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++){this.lineTo(a[b].x,a[b].y);}return this;},moveTo:function moveTo(a,b){this.currentPoint.set(a,b);return this;},lineTo:function lineTo(a,b){var c=new Da(this.currentPoint.clone(),new u(a,b));this.curves.push(c);this.currentPoint.set(a,b);return this;},quadraticCurveTo:function quadraticCurveTo(a,b,c,d){a=new Ya(this.currentPoint.clone(),new u(a,b),new u(c,d));this.curves.push(a);this.currentPoint.set(c,d);return this;},bezierCurveTo:function bezierCurveTo(a,b,c,d,e,f){a=new Wa(this.currentPoint.clone(),new u(a,b),new u(c,d),new u(e,f));this.curves.push(a);this.currentPoint.set(e,f);return this;},splineThru:function splineThru(a){var b=[this.currentPoint.clone()].concat(a);b=new Za(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1]);return this;},arc:function arc(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f);return this;},absarc:function absarc(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f);return this;},ellipse:function ellipse(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h);return this;},absellipse:function absellipse(a,b,c,d,e,f,g,h){a=new Ma(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a);return this;},copy:function copy(a){vb.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this;},toJSON:function toJSON(){var a=vb.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a;},fromJSON:function fromJSON(a){vb.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this;}});Kb.prototype=Object.assign(Object.create($a.prototype),{constructor:Kb,getPointsHoles:function getPointsHoles(a){for(var b=[],c=0,d=this.holes.length;c<d;c++){b[c]=this.holes[c].getPoints(a);}return b;},extractPoints:function extractPoints(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)};},copy:function copy(a){$a.prototype.copy.call(this,a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){this.holes.push(a.holes[b].clone());}return this;},toJSON:function toJSON(){var a=$a.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++){a.holes.push(this.holes[b].toJSON());}return a;},fromJSON:function fromJSON(a){$a.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push(new $a().fromJSON(d));}return this;}});ea.prototype=Object.assign(Object.create(E.prototype),{constructor:ea,isLight:!0,copy:function copy(a){E.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this;},toJSON:function toJSON(a){a=E.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a;}});ff.prototype=Object.assign(Object.create(ea.prototype),{constructor:ff,isHemisphereLight:!0,copy:function copy(a){ea.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this;}});Object.assign(jb.prototype,{_projScreenMatrix:new P(),_lightPositionWorld:new n(),_lookTarget:new n(),getViewportCount:function getViewportCount(){return this._viewportCount;},getFrustum:function getFrustum(){return this._frustum;},updateMatrices:function updateMatrices(a){var b=this.camera,c=this.matrix,d=this._projScreenMatrix,e=this._lookTarget,f=this._lightPositionWorld;f.setFromMatrixPosition(a.matrixWorld);b.position.copy(f);e.setFromMatrixPosition(a.target.matrixWorld);b.lookAt(e);b.updateMatrixWorld();d.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromProjectionMatrix(d);c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);c.multiply(b.projectionMatrix);c.multiply(b.matrixWorldInverse);},getViewport:function getViewport(a){return this._viewports[a];},getFrameExtents:function getFrameExtents(){return this._frameExtents;},copy:function copy(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this;},clone:function clone(){return new this.constructor().copy(this);},toJSON:function toJSON(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a;}});gf.prototype=Object.assign(Object.create(jb.prototype),{constructor:gf,isSpotLightShadow:!0,updateMatrices:function updateMatrices(a){var b=this.camera,c=2*L.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height,e=a.distance||b.far;if(c!==b.fov||d!==b.aspect||e!==b.far)b.fov=c,b.aspect=d,b.far=e,b.updateProjectionMatrix();jb.prototype.updateMatrices.call(this,a);}});hf.prototype=Object.assign(Object.create(ea.prototype),{constructor:hf,isSpotLight:!0,copy:function copy(a){ea.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});yg.prototype=Object.assign(Object.create(jb.prototype),{constructor:yg,isPointLightShadow:!0,updateMatrices:function updateMatrices(a,b){void 0===b&&(b=0);var c=this.camera,d=this.matrix,e=this._lightPositionWorld,f=this._lookTarget,g=this._projScreenMatrix;e.setFromMatrixPosition(a.matrixWorld);c.position.copy(e);f.copy(c.position);f.add(this._cubeDirections[b]);c.up.copy(this._cubeUps[b]);c.lookAt(f);c.updateMatrixWorld();d.makeTranslation(-e.x,-e.y,-e.z);g.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);this._frustum.setFromProjectionMatrix(g);}});jf.prototype=Object.assign(Object.create(ea.prototype),{constructor:jf,isPointLight:!0,copy:function copy(a){ea.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this;}});hd.prototype=Object.assign(Object.create(db.prototype),{constructor:hd,isOrthographicCamera:!0,copy:function copy(a,b){db.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this;},setViewOffset:function setViewOffset(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix();},clearViewOffset:function clearViewOffset(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix();},updateProjectionMatrix:function updateProjectionMatrix(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;null!==this.view&&this.view.enabled&&(d=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom,e+=d*this.view.offsetX,c=e+d*this.view.width,a-=b*this.view.offsetY,b=a-b*this.view.height);this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function toJSON(a){a=E.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a;}});kf.prototype=Object.assign(Object.create(jb.prototype),{constructor:kf,isDirectionalLightShadow:!0,updateMatrices:function updateMatrices(a){jb.prototype.updateMatrices.call(this,a);}});lf.prototype=Object.assign(Object.create(ea.prototype),{constructor:lf,isDirectionalLight:!0,copy:function copy(a){ea.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});mf.prototype=Object.assign(Object.create(ea.prototype),{constructor:mf,isAmbientLight:!0});nf.prototype=Object.assign(Object.create(ea.prototype),{constructor:nf,isRectAreaLight:!0,copy:function copy(a){ea.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this;},toJSON:function toJSON(a){a=ea.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a;}});of.prototype=Object.assign(Object.create(X.prototype),{constructor:of,load:function load(a,b,c,d){var e=this,f=new Ra(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function parse(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a];}var c=this.textures,d=new $k[a.type]();void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.sheen&&(d.sheen=new z().setHex(a.sheen));void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearcoat&&(d.clearcoat=a.clearcoat);void 0!==a.clearcoatRoughness&&(d.clearcoatRoughness=a.clearcoatRoughness);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.combine&&(d.combine=a.combine);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.stencilWrite&&(d.stencilWrite=a.stencilWrite);void 0!==a.stencilWriteMask&&(d.stencilWriteMask=a.stencilWriteMask);void 0!==a.stencilFunc&&(d.stencilFunc=a.stencilFunc);void 0!==a.stencilRef&&(d.stencilRef=a.stencilRef);void 0!==a.stencilFuncMask&&(d.stencilFuncMask=a.stencilFuncMask);void 0!==a.stencilFail&&(d.stencilFail=a.stencilFail);void 0!==a.stencilZFail&&(d.stencilZFail=a.stencilZFail);void 0!==a.stencilZPass&&(d.stencilZPass=a.stencilZPass);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.polygonOffset&&(d.polygonOffset=a.polygonOffset);void 0!==a.polygonOffsetFactor&&(d.polygonOffsetFactor=a.polygonOffsetFactor);void 0!==a.polygonOffsetUnits&&(d.polygonOffsetUnits=a.polygonOffsetUnits);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.morphNormals&&(d.morphNormals=a.morphNormals);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.vertexTangents&&(d.vertexTangents=a.vertexTangents);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.toneMapped&&(d.toneMapped=a.toneMapped);void 0!==a.userData&&(d.userData=a.userData);void 0!==a.vertexColors&&(d.vertexColors="number"===typeof a.vertexColors?0<a.vertexColors?!0:!1:a.vertexColors);if(void 0!==a.uniforms)for(var e in a.uniforms){var f=a.uniforms[e];d.uniforms[e]={};switch(f.type){case"t":d.uniforms[e].value=b(f.value);break;case"c":d.uniforms[e].value=new z().setHex(f.value);break;case"v2":d.uniforms[e].value=new u().fromArray(f.value);break;case"v3":d.uniforms[e].value=new n().fromArray(f.value);break;case"v4":d.uniforms[e].value=new ka().fromArray(f.value);break;case"m3":d.uniforms[e].value=new wa().fromArray(f.value);case"m4":d.uniforms[e].value=new P().fromArray(f.value);break;default:d.uniforms[e].value=f.value;}}void 0!==a.defines&&(d.defines=a.defines);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);if(void 0!==a.extensions)for(var g in a.extensions){d.extensions[g]=a.extensions[g];}void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.matcap&&(d.matcap=b(a.matcap));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap));void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));void 0!==a.normalMapType&&(d.normalMapType=a.normalMapType);void 0!==a.normalScale&&(e=a.normalScale,!1===Array.isArray(e)&&(e=[e,e]),d.normalScale=new u().fromArray(e));void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.envMapIntensity&&(d.envMapIntensity=a.envMapIntensity);void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.refractionRatio&&(d.refractionRatio=a.refractionRatio);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));void 0!==a.clearcoatNormalMap&&(d.clearcoatNormalMap=b(a.clearcoatNormalMap));void 0!==a.clearcoatNormalScale&&(d.clearcoatNormalScale=new u().fromArray(a.clearcoatNormalScale));return d;},setTextures:function setTextures(a){this.textures=a;return this;}});var sh={decodeText:function decodeText(a){if("undefined"!==typeof TextDecoder)return new TextDecoder().decode(a);for(var b="",c=0,d=a.length;c<d;c++){b+=String.fromCharCode(a[c]);}try{return decodeURIComponent(escape(b));}catch(e){return b;}},extractUrlBase:function extractUrlBase(a){var b=a.lastIndexOf("/");return-1===b?"./":a.substr(0,b+1);}};pf.prototype=Object.assign(Object.create(B.prototype),{constructor:pf,isInstancedBufferGeometry:!0,copy:function copy(a){B.prototype.copy.call(this,a);this.maxInstancedCount=a.maxInstancedCount;return this;},clone:function clone(){return new this.constructor().copy(this);},toJSON:function toJSON(){var a=B.prototype.toJSON.call(this);a.maxInstancedCount=this.maxInstancedCount;a.isInstancedBufferGeometry=!0;return a;}});qf.prototype=Object.assign(Object.create(M.prototype),{constructor:qf,isInstancedBufferAttribute:!0,copy:function copy(a){M.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;},toJSON:function toJSON(){var a=M.prototype.toJSON.call(this);a.meshPerAttribute=this.meshPerAttribute;a.isInstancedBufferAttribute=!0;return a;}});rf.prototype=Object.assign(Object.create(X.prototype),{constructor:rf,load:function load(a,b,c,d){var e=this,f=new Ra(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function parse(a){var b=a.isInstancedBufferGeometry?new pf():new B(),c=a.data.index;if(void 0!==c){var d=new th[c.type](c.array);b.setIndex(new M(d,1));}c=a.data.attributes;for(var e in c){var f=c[e];d=new th[f.type](f.array);d=new(f.isInstancedBufferAttribute?qf:M)(d,f.itemSize,f.normalized);void 0!==f.name&&(d.name=f.name);b.setAttribute(e,d);}var g=a.data.morphAttributes;if(g)for(e in g){var h=g[e],l=[];c=0;for(var k=h.length;c<k;c++){f=h[c],d=new th[f.type](f.array),d=new M(d,f.itemSize,f.normalized),void 0!==f.name&&(d.name=f.name),l.push(d);}b.morphAttributes[e]=l;}a.data.morphTargetsRelative&&(b.morphTargetsRelative=!0);e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,f=e.length;c!==f;++c){d=e[c],b.addGroup(d.start,d.count,d.materialIndex);}c=a.data.boundingSphere;void 0!==c&&(e=new n(),void 0!==c.center&&e.fromArray(c.center),b.boundingSphere=new pb(e,c.radius));a.name&&(b.name=a.name);a.userData&&(b.userData=a.userData);return b;}});var th={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};sf.prototype=Object.assign(Object.create(X.prototype),{constructor:sf,load:function load(a,b,c,d){var e=this,f=""===this.path?sh.extractUrlBase(a):this.path;this.resourcePath=this.resourcePath||f;f=new Ra(e.manager);f.setPath(this.path);f.load(a,function(c){var f=null;try{f=JSON.parse(c);}catch(l){void 0!==d&&d(l);console.error("THREE:ObjectLoader: Can't parse "+a+".",l.message);return;}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a):e.parse(f,b);},c,d);},parse:function parse(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,function(){void 0!==b&&b(e);});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,d);var e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e;},parseShape:function parseShape(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=new Kb().fromJSON(a[c]);b[e.uuid]=e;}return b;},parseGeometries:function parseGeometries(a,b){var c={};if(void 0!==a)for(var d=new rf(),e=0,f=a.length;e<f;e++){var g=a[e];switch(g.type){case"PlaneGeometry":case"PlaneBufferGeometry":var h=new ua[g.type](g.width,g.height,g.widthSegments,g.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":h=new ua[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":h=new ua[g.type](g.radius,g.segments,g.thetaStart,g.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":h=new ua[g.type](g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":h=new ua[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":h=new ua[g.type](g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":h=new ua[g.type](g.radius,g.detail);break;case"RingGeometry":case"RingBufferGeometry":h=new ua[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":h=new ua[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":h=new ua[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);break;case"TubeGeometry":case"TubeBufferGeometry":h=new ua[g.type](new rh[g.path.type]().fromJSON(g.path),g.tubularSegments,g.radius,g.radialSegments,g.closed);break;case"LatheGeometry":case"LatheBufferGeometry":h=new ua[g.type](g.points,g.segments,g.phiStart,g.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":h=new ua[g.type](g.vertices,g.indices,g.radius,g.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":h=[];for(var l=0,k=g.shapes.length;l<k;l++){var n=b[g.shapes[l]];h.push(n);}h=new ua[g.type](h,g.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":h=[];l=0;for(k=g.shapes.length;l<k;l++){n=b[g.shapes[l]],h.push(n);}l=g.options.extrudePath;void 0!==l&&(g.options.extrudePath=new rh[l.type]().fromJSON(l));h=new ua[g.type](h,g.options);break;case"BufferGeometry":case"InstancedBufferGeometry":h=d.parse(g);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+g.type+'"');continue;}h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);!0===h.isBufferGeometry&&void 0!==g.userData&&(h.userData=g.userData);c[g.uuid]=h;}return c;},parseMaterials:function parseMaterials(a,b){var c={},d={};if(void 0!==a){var e=new of();e.setTextures(b);b=0;for(var f=a.length;b<f;b++){var g=a[b];if("MultiMaterial"===g.type){for(var h=[],l=0;l<g.materials.length;l++){var k=g.materials[l];void 0===c[k.uuid]&&(c[k.uuid]=e.parse(k));h.push(c[k.uuid]);}d[g.uuid]=h;}else void 0===c[g.uuid]&&(c[g.uuid]=e.parse(g)),d[g.uuid]=c[g.uuid];}}return d;},parseAnimations:function parseAnimations(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=Qa.parse(d);void 0!==d.uuid&&(e.uuid=d.uuid);b.push(e);}return b;},parseImages:function parseImages(a,b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a);},void 0,function(){d.manager.itemError(a);d.manager.itemEnd(a);});}var d=this,e={};if(void 0!==a&&0<a.length){b=new ug(b);var f=new fd(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],l=h.url;if(Array.isArray(l)){e[h.uuid]=[];for(var k=0,n=l.length;k<n;k++){var p=l[k];p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:d.resourcePath+p;e[h.uuid].push(c(p));}}else p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.resourcePath+h.url,e[h.uuid]=c(p);}}return e;},parseTextures:function parseTextures(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a];}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=Array.isArray(b[g.image])?new qb(b[g.image]):new W(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,al));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],Zi),h.wrapT=c(g.wrap[1],Zi));void 0!==g.format&&(h.format=g.format);void 0!==g.type&&(h.type=g.type);void 0!==g.encoding&&(h.encoding=g.encoding);void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,$i));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,$i));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);void 0!==g.premultiplyAlpha&&(h.premultiplyAlpha=g.premultiplyAlpha);void 0!==g.unpackAlignment&&(h.unpackAlignment=g.unpackAlignment);d[g.uuid]=h;}return d;},parseObject:function parseObject(a,b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a];}function e(a){if(void 0!==a){if(Array.isArray(a)){for(var b=[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f]);}return b;}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a];}}switch(a.type){case"Scene":var f=new ob();void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new z(a.background));void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Se(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Re(a.fog.color,a.fog.density)));break;case"PerspectiveCamera":f=new ba(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case"OrthographicCamera":f=new hd(a.left,a.right,a.top,a.bottom,a.near,a.far);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case"AmbientLight":f=new mf(a.color,a.intensity);break;case"DirectionalLight":f=new lf(a.color,a.intensity);break;case"PointLight":f=new jf(a.color,a.intensity,a.distance,a.decay);break;case"RectAreaLight":f=new nf(a.color,a.intensity,a.width,a.height);break;case"SpotLight":f=new hf(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case"HemisphereLight":f=new ff(a.color,a.groundColor,a.intensity);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new Sd(f,g):new S(f,g);break;case"InstancedMesh":f=d(a.geometry);g=e(a.material);var h=a.instanceMatrix;f=new Ve(f,g,a.count);f.instanceMatrix=new M(new Float32Array(h.array),16);break;case"LOD":f=new Rd();break;case"Line":f=new Ka(d(a.geometry),e(a.material),a.mode);break;case"LineLoop":f=new We(d(a.geometry),e(a.material));break;case"LineSegments":f=new ma(d(a.geometry),e(a.material));break;case"PointCloud":case"Points":f=new Pc(d(a.geometry),e(a.material));break;case"Sprite":f=new Pd(e(a.material));break;case"Group":f=new Mc();break;default:f=new E();}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),void 0!==a.matrixAutoUpdate&&(f.matrixAutoUpdate=a.matrixAutoUpdate),f.matrixAutoUpdate&&f.matrix.decompose(f.position,f.quaternion,f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.frustumCulled&&(f.frustumCulled=a.frustumCulled);void 0!==a.renderOrder&&(f.renderOrder=a.renderOrder);void 0!==a.userData&&(f.userData=a.userData);void 0!==a.layers&&(f.layers.mask=a.layers);if(void 0!==a.children)for(h=a.children,g=0;g<h.length;g++){f.add(this.parseObject(h[g],b,c));}if("LOD"===a.type)for(void 0!==a.autoUpdate&&(f.autoUpdate=a.autoUpdate),a=a.levels,h=0;h<a.length;h++){g=a[h];var l=f.getObjectByProperty("uuid",g.object);void 0!==l&&f.addLevel(l,g.distance);}return f;}});var al={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Zi={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},$i={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};zg.prototype=Object.assign(Object.create(X.prototype),{constructor:zg,setOptions:function setOptions(a){this.options=a;return this;},load:function load(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=vc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a);},0),f;fetch(a).then(function(a){return a.blob();}).then(function(a){return void 0===e.options?createImageBitmap(a):createImageBitmap(a,e.options);}).then(function(c){vc.add(a,c);b&&b(c);e.manager.itemEnd(a);}).catch(function(b){d&&d(b);e.manager.itemError(a);e.manager.itemEnd(a);});e.manager.itemStart(a);}});Object.assign(Ag.prototype,{moveTo:function moveTo(a,b){this.currentPath=new $a();this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b);return this;},lineTo:function lineTo(a,b){this.currentPath.lineTo(a,b);return this;},quadraticCurveTo:function quadraticCurveTo(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d);return this;},bezierCurveTo:function bezierCurveTo(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f);return this;},splineThru:function splineThru(a){this.currentPath.splineThru(a);return this;},toShapes:function toShapes(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Kb();f.curves=e.curves;b.push(f);}return b;}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0;}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d);}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0;}return d;}var e=sb.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new Kb();h.curves=g.curves;b.push(h);return b;}var l=!e(f[0].getPoints());l=a?!l:l;h=[];var k=[],n=[],p=0;k[p]=void 0;n[p]=[];for(var u=0,r=f.length;u<r;u++){g=f[u];var q=g.getPoints();var v=e(q);(v=a?!v:v)?(!l&&k[p]&&p++,k[p]={s:new Kb(),p:q},k[p].s.curves=g.curves,l&&p++,n[p]=[]):n[p].push({h:g,p:q[0]});}if(!k[0])return c(f);if(1<k.length){u=!1;a=[];e=0;for(f=k.length;e<f;e++){h[e]=[];}e=0;for(f=k.length;e<f;e++){for(g=n[e],v=0;v<g.length;v++){l=g[v];p=!0;for(q=0;q<k.length;q++){d(l.p,k[q].p)&&(e!==q&&a.push({froms:e,tos:q,hole:v}),p?(p=!1,h[q].push(l)):u=!0);}p&&h[e].push(l);}}0<a.length&&(u||(n=h));}u=0;for(e=k.length;u<e;u++){for(h=k[u].s,b.push(h),a=n[u],f=0,g=a.length;f<g;f++){h.holes.push(a[f].h);}}return b;}});Object.assign(Bg.prototype,{isFont:!0,generateShapes:function generateShapes(a,b){void 0===b&&(b=100);var c=[],d=b;b=this.data;var e=Array.from?Array.from(a):String(a).split("");d/=b.resolution;var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,k=0;k<e.length;k++){var m=e[k];if("\n"===m)g=0,h-=f;else{var n=m;m=d;var p=g,u=h,r=b,q=r.glyphs[n]||r.glyphs["?"];if(q){n=new Ag();if(q.o){r=q._cachedOutline||(q._cachedOutline=q.o.split(" "));for(var v=0,z=r.length;v<z;){switch(r[v++]){case"m":var w=r[v++]*m+p;var A=r[v++]*m+u;n.moveTo(w,A);break;case"l":w=r[v++]*m+p;A=r[v++]*m+u;n.lineTo(w,A);break;case"q":var B=r[v++]*m+p;var D=r[v++]*m+u;var E=r[v++]*m+p;var y=r[v++]*m+u;n.quadraticCurveTo(E,y,B,D);break;case"b":B=r[v++]*m+p,D=r[v++]*m+u,E=r[v++]*m+p,y=r[v++]*m+u,w=r[v++]*m+p,A=r[v++]*m+u,n.bezierCurveTo(E,y,w,A,B,D);}}}m={offsetX:q.ha*m,path:n};}else console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+"."),m=void 0;g+=m.offsetX;a.push(m.path);}}b=0;for(e=a.length;b<e;b++){Array.prototype.push.apply(c,a[b].toShapes());}return c;}});Cg.prototype=Object.assign(Object.create(X.prototype),{constructor:Cg,load:function load(a,b,c,d){var e=this,f=new Ra(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a);}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2));}a=e.parse(c);b&&b(a);},c,d);},parse:function parse(a){return new Bg(a);}});var Uf,Hg={getContext:function getContext(){void 0===Uf&&(Uf=new(window.AudioContext||window.webkitAudioContext)());return Uf;},setContext:function setContext(a){Uf=a;}};tf.prototype=Object.assign(Object.create(X.prototype),{constructor:tf,load:function load(a,b,c,d){var e=new Ra(this.manager);e.setResponseType("arraybuffer");e.setPath(this.path);e.load(a,function(a){a=a.slice(0);Hg.getContext().decodeAudioData(a,function(a){b(a);});},c,d);}});Object.assign(uf.prototype,{isSphericalHarmonics3:!0,set:function set(a){for(var b=0;9>b;b++){this.coefficients[b].copy(a[b]);}return this;},zero:function zero(){for(var a=0;9>a;a++){this.coefficients[a].set(0,0,0);}return this;},getAt:function getAt(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.282095);b.addScale(e[1],.488603*d);b.addScale(e[2],.488603*a);b.addScale(e[3],.488603*c);b.addScale(e[4],1.092548*c*d);b.addScale(e[5],1.092548*d*a);b.addScale(e[6],.315392*(3*a*a-1));b.addScale(e[7],1.092548*c*a);b.addScale(e[8],.546274*(c*c-d*d));return b;},getIrradianceAt:function getIrradianceAt(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.886227);b.addScale(e[1],1.023328*d);b.addScale(e[2],1.023328*a);b.addScale(e[3],1.023328*c);b.addScale(e[4],.858086*c*d);b.addScale(e[5],.858086*d*a);b.addScale(e[6],.743125*a*a-.247708);b.addScale(e[7],.858086*c*a);b.addScale(e[8],.429043*(c*c-d*d));return b;},add:function add(a){for(var b=0;9>b;b++){this.coefficients[b].add(a.coefficients[b]);}return this;},scale:function scale(a){for(var b=0;9>b;b++){this.coefficients[b].multiplyScalar(a);}return this;},lerp:function lerp(a,b){for(var c=0;9>c;c++){this.coefficients[c].lerp(a.coefficients[c],b);}return this;},equals:function equals(a){for(var b=0;9>b;b++){if(!this.coefficients[b].equals(a.coefficients[b]))return!1;}return!0;},copy:function copy(a){return this.set(a.coefficients);},clone:function clone(){return new this.constructor().copy(this);},fromArray:function fromArray(a,b){void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++){c[d].fromArray(a,b+3*d);}return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++){c[d].toArray(a,b+3*d);}return a;}});Object.assign(uf,{getBasisAt:function getBasisAt(a,b){var c=a.x,d=a.y;a=a.z;b[0]=.282095;b[1]=.488603*d;b[2]=.488603*a;b[3]=.488603*c;b[4]=1.092548*c*d;b[5]=1.092548*d*a;b[6]=.315392*(3*a*a-1);b[7]=1.092548*c*a;b[8]=.546274*(c*c-d*d);}});ab.prototype=Object.assign(Object.create(ea.prototype),{constructor:ab,isLightProbe:!0,copy:function copy(a){ea.prototype.copy.call(this,a);this.sh.copy(a.sh);this.intensity=a.intensity;return this;},toJSON:function toJSON(a){return ea.prototype.toJSON.call(this,a);}});Dg.prototype=Object.assign(Object.create(ab.prototype),{constructor:Dg,isHemisphereLightProbe:!0,copy:function copy(a){ab.prototype.copy.call(this,a);return this;},toJSON:function toJSON(a){return ab.prototype.toJSON.call(this,a);}});Eg.prototype=Object.assign(Object.create(ab.prototype),{constructor:Eg,isAmbientLightProbe:!0,copy:function copy(a){ab.prototype.copy.call(this,a);return this;},toJSON:function toJSON(a){return ab.prototype.toJSON.call(this,a);}});var aj=new P(),bj=new P();Object.assign(ki.prototype,{update:function update(a){var b=this._cache;if(b.focus!==a.focus||b.fov!==a.fov||b.aspect!==a.aspect*this.aspect||b.near!==a.near||b.far!==a.far||b.zoom!==a.zoom||b.eyeSep!==this.eyeSep){b.focus=a.focus;b.fov=a.fov;b.aspect=a.aspect*this.aspect;b.near=a.near;b.far=a.far;b.zoom=a.zoom;b.eyeSep=this.eyeSep;var c=a.projectionMatrix.clone(),d=b.eyeSep/2,e=d*b.near/b.focus,f=b.near*Math.tan(L.DEG2RAD*b.fov*.5)/b.zoom;bj.elements[12]=-d;aj.elements[12]=d;d=-f*b.aspect+e;var g=f*b.aspect+e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraL.projectionMatrix.copy(c);d=-f*b.aspect-e;g=f*b.aspect-e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraR.projectionMatrix.copy(c);}this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(bj);this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(aj);}});Object.assign(Fg.prototype,{start:function start(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0;},stop:function stop(){this.getElapsedTime();this.autoStart=this.running=!1;},getElapsedTime:function getElapsedTime(){this.getDelta();return this.elapsedTime;},getDelta:function getDelta(){var a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a;}return a;}});var wc=new n(),cj=new Aa(),bl=new n(),xc=new n();Gg.prototype=Object.assign(Object.create(E.prototype),{constructor:Gg,getInput:function getInput(){return this.gain;},removeFilter:function removeFilter(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null);return this;},getFilter:function getFilter(){return this.filter;},setFilter:function setFilter(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination);return this;},getMasterVolume:function getMasterVolume(){return this.gain.gain.value;},setMasterVolume:function setMasterVolume(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this;},updateMatrixWorld:function updateMatrixWorld(a){E.prototype.updateMatrixWorld.call(this,a);a=this.context.listener;var b=this.up;this.timeDelta=this._clock.getDelta();this.matrixWorld.decompose(wc,cj,bl);xc.set(0,0,-1).applyQuaternion(cj);if(a.positionX){var c=this.context.currentTime+this.timeDelta;a.positionX.linearRampToValueAtTime(wc.x,c);a.positionY.linearRampToValueAtTime(wc.y,c);a.positionZ.linearRampToValueAtTime(wc.z,c);a.forwardX.linearRampToValueAtTime(xc.x,c);a.forwardY.linearRampToValueAtTime(xc.y,c);a.forwardZ.linearRampToValueAtTime(xc.z,c);a.upX.linearRampToValueAtTime(b.x,c);a.upY.linearRampToValueAtTime(b.y,c);a.upZ.linearRampToValueAtTime(b.z,c);}else a.setPosition(wc.x,wc.y,wc.z),a.setOrientation(xc.x,xc.y,xc.z,b.x,b.y,b.z);}});id.prototype=Object.assign(Object.create(E.prototype),{constructor:id,getOutput:function getOutput(){return this.gain;},setNodeSource:function setNodeSource(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this;},setMediaElementSource:function setMediaElementSource(a){this.hasPlaybackControl=!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(a);this.connect();return this;},setMediaStreamSource:function setMediaStreamSource(a){this.hasPlaybackControl=!1;this.sourceType="mediaStreamNode";this.source=this.context.createMediaStreamSource(a);this.connect();return this;},setBuffer:function setBuffer(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this;},play:function play(a){void 0===a&&(a=0);if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this._startedAt=this.context.currentTime+a,a=this.context.createBufferSource(),a.buffer=this.buffer,a.loop=this.loop,a.loopStart=this.loopStart,a.loopEnd=this.loopEnd,a.onended=this.onEnded.bind(this),a.start(this._startedAt,this._pausedAt+this.offset,this.duration),this.isPlaying=!0,this.source=a,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect();},pause:function pause(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return!0===this.isPlaying&&(this._pausedAt+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;},stop:function stop(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this._pausedAt=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;},connect:function connect(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++){this.filters[a-1].connect(this.filters[a]);}this.filters[this.filters.length-1].connect(this.getOutput());}else this.source.connect(this.getOutput());return this;},disconnect:function disconnect(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++){this.filters[a-1].disconnect(this.filters[a]);}this.filters[this.filters.length-1].disconnect(this.getOutput());}else this.source.disconnect(this.getOutput());return this;},getFilters:function getFilters(){return this.filters;},setFilters:function setFilters(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this;},setDetune:function setDetune(a){this.detune=a;if(void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this;},getDetune:function getDetune(){return this.detune;},getFilter:function getFilter(){return this.getFilters()[0];},setFilter:function setFilter(a){return this.setFilters(a?[a]:[]);},setPlaybackRate:function setPlaybackRate(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;},getPlaybackRate:function getPlaybackRate(){return this.playbackRate;},onEnded:function onEnded(){this.isPlaying=!1;},getLoop:function getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop;},setLoop:function setLoop(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this;},setLoopStart:function setLoopStart(a){this.loopStart=a;return this;},setLoopEnd:function setLoopEnd(a){this.loopEnd=a;return this;},getVolume:function getVolume(){return this.gain.gain.value;},setVolume:function setVolume(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this;}});var yc=new n(),dj=new Aa(),cl=new n(),zc=new n();Ig.prototype=Object.assign(Object.create(id.prototype),{constructor:Ig,getOutput:function getOutput(){return this.panner;},getRefDistance:function getRefDistance(){return this.panner.refDistance;},setRefDistance:function setRefDistance(a){this.panner.refDistance=a;return this;},getRolloffFactor:function getRolloffFactor(){return this.panner.rolloffFactor;},setRolloffFactor:function setRolloffFactor(a){this.panner.rolloffFactor=a;return this;},getDistanceModel:function getDistanceModel(){return this.panner.distanceModel;},setDistanceModel:function setDistanceModel(a){this.panner.distanceModel=a;return this;},getMaxDistance:function getMaxDistance(){return this.panner.maxDistance;},setMaxDistance:function setMaxDistance(a){this.panner.maxDistance=a;return this;},setDirectionalCone:function setDirectionalCone(a,b,c){this.panner.coneInnerAngle=a;this.panner.coneOuterAngle=b;this.panner.coneOuterGain=c;return this;},updateMatrixWorld:function updateMatrixWorld(a){E.prototype.updateMatrixWorld.call(this,a);if(!0!==this.hasPlaybackControl||!1!==this.isPlaying)if(this.matrixWorld.decompose(yc,dj,cl),zc.set(0,0,1).applyQuaternion(dj),a=this.panner,a.positionX){var b=this.context.currentTime+this.listener.timeDelta;a.positionX.linearRampToValueAtTime(yc.x,b);a.positionY.linearRampToValueAtTime(yc.y,b);a.positionZ.linearRampToValueAtTime(yc.z,b);a.orientationX.linearRampToValueAtTime(zc.x,b);a.orientationY.linearRampToValueAtTime(zc.y,b);a.orientationZ.linearRampToValueAtTime(zc.z,b);}else a.setPosition(yc.x,yc.y,yc.z),a.setOrientation(zc.x,zc.y,zc.z);}});Object.assign(Jg.prototype,{getFrequencyData:function getFrequencyData(){this.analyser.getByteFrequencyData(this.data);return this.data;},getAverageFrequency:function getAverageFrequency(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++){a+=b[c];}return a/b.length;}});Object.assign(Kg.prototype,{accumulate:function accumulate(a,b){var c=this.buffer,d=this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e){c[a+e]=c[e];}e=b;}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e;},apply:function apply(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);d=b;for(var f=b+b;d!==f;++d){if(c[d]!==c[d+b]){e.setValue(c,a);break;}}},saveOriginalState:function saveOriginalState(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d){a[d]=a[c+d%b];}this.cumulativeWeight=0;},restoreOriginalState:function restoreOriginalState(){this.binding.setValue(this.buffer,3*this.valueSize);},_select:function _select(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d){a[b+d]=a[c+d];}},_slerp:function _slerp(a,b,c,d){Aa.slerpFlat(a,b,a,b,a,c,d);},_lerp:function _lerp(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d;}}});var dl=/[\[\]\.:\/]/g,el="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",fl=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),gl=/(WCOD+)?/.source.replace("WCOD",el),hl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),il=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),jl=new RegExp("^"+fl+gl+hl+il+"$"),kl=["material","materials","bones"];Object.assign(li.prototype,{getValue:function getValue(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b);},setValue:function setValue(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d){c[d].setValue(a,b);}},bind:function bind(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b){a[b].bind();}},unbind:function unbind(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b){a[b].unbind();}}});Object.assign(ya,{Composite:li,create:function create(a,b,c){return a&&a.isAnimationObjectGroup?new ya.Composite(a,b,c):new ya(a,b,c);},sanitizeNodeName:function sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(dl,"");},parseTrackName:function parseTrackName(a){var b=jl.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==kl.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d);}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b;},findNode:function findNode(a,b){if(!b||""===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c;}if(a.children){var d=function d(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===b||e.uuid===b||(e=d(e.children)))return e;}return null;};if(a=d(a.children))return a;}return null;}});Object.assign(ya.prototype,{_getValue_unavailable:function _getValue_unavailable(){},_setValue_unavailable:function _setValue_unavailable(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName];},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){a[b++]=c[d];}},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex];},function(a,b){this.resolvedProperty.toArray(a,b);}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b];},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}this.targetObject.needsUpdate=!0;},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty.fromArray(a,b);},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0;}]],getValue:function getValue(a,b){this.bind();this.getValue(a,b);},setValue:function setValue(a,b){this.bind();this.setValue(a,b);},bind:function bind(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=ya.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return;}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return;}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return;}a=a.skeleton.bones;for(c=0;c<a.length;c++){if(a[c].name===f){f=c;break;}}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return;}a=a[c];}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return;}a=a[f];}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;this.targetObject=a;void 0!==a.needsUpdate?b=this.Versioning.NeedsUpdate:void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return;}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return;}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++){if(a.geometry.morphAttributes.position[c].name===e){e=c;break;}}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);return;}for(c=0;c<this.node.geometry.morphTargets.length;c++){if(a.geometry.morphTargets[c].name===e){e=c;break;}}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e;}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b];}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");},unbind:function unbind(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound;}});Object.assign(ya.prototype,{_getValue_unbound:ya.prototype.getValue,_setValue_unbound:ya.prototype.setValue});Object.assign(mi.prototype,{isAnimationObjectGroup:!0,add:function add(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,k=void 0,m=0,n=arguments.length;m!==n;++m){var p=arguments[m],u=p.uuid,r=d[u];if(void 0===r){r=b++;d[u]=r;a.push(p);u=0;for(var q=h;u!==q;++u){g[u].push(new ya(p,e[u],f[u]));}}else if(r<c){k=a[r];var v=--c;q=a[v];d[q.uuid]=r;a[r]=q;d[u]=v;a[v]=p;u=0;for(q=h;u!==q;++u){var z=g[u],w=z[r];z[r]=z[v];void 0===w&&(w=new ya(p,e[u],f[u]));z[v]=w;}}else a[r]!==k&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");}this.nCachedObjects_=c;},remove:function remove(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=arguments[f],k=h.uuid,m=c[k];if(void 0!==m&&m>=b){var n=b++,p=a[n];c[p.uuid]=m;a[m]=p;c[k]=n;a[n]=h;h=0;for(k=e;h!==k;++h){p=d[h];var u=p[m];p[m]=p[n];p[n]=u;}}}this.nCachedObjects_=b;},uncache:function uncache(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g].uuid,m=d[k];if(void 0!==m)if(delete d[k],m<c){k=--c;var n=a[k],p=--b,u=a[p];d[n.uuid]=m;a[m]=n;d[u.uuid]=k;a[k]=u;a.pop();n=0;for(u=f;n!==u;++n){var r=e[n],q=r[p];r[m]=r[k];r[k]=q;r.pop();}}else for(p=--b,u=a[p],d[u.uuid]=m,a[m]=u,a.pop(),n=0,u=f;n!==u;++n){r=e[n],r[m]=r[p],r.pop();}}this.nCachedObjects_=c;},subscribe_:function subscribe_(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,m=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(m);c=k;for(d=h.length;c!==d;++c){m[c]=new ya(h[c],a,b);}return m;},unsubscribe_:function unsubscribe_(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop();}}});Object.assign(ni.prototype,{play:function play(){this._mixer._activateAction(this);return this;},stop:function stop(){this._mixer._deactivateAction(this);return this.reset();},reset:function reset(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping();},isRunning:function isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this);},isScheduled:function isScheduled(){return this._mixer._isActiveAction(this);},startAt:function startAt(a){this._startTime=a;return this;},setLoop:function setLoop(a,b){this.loop=a;this.repetitions=b;return this;},setEffectiveWeight:function setEffectiveWeight(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading();},getEffectiveWeight:function getEffectiveWeight(){return this._effectiveWeight;},fadeIn:function fadeIn(a){return this._scheduleFading(a,0,1);},fadeOut:function fadeOut(a){return this._scheduleFading(a,1,0);},crossFadeFrom:function crossFadeFrom(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b);}return this;},crossFadeTo:function crossFadeTo(a,b,c){return a.crossFadeFrom(this,b,c);},stopFading:function stopFading(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},setEffectiveTimeScale:function setEffectiveTimeScale(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping();},getEffectiveTimeScale:function getEffectiveTimeScale(){return this._effectiveTimeScale;},setDuration:function setDuration(a){this.timeScale=this._clip.duration/a;return this.stopWarping();},syncWith:function syncWith(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping();},halt:function halt(a){return this.warp(this._effectiveTimeScale,0,a);},warp:function warp(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this;},stopWarping:function stopWarping(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},getMixer:function getMixer(){return this._mixer;},getClip:function getClip(){return this._clip;},getRoot:function getRoot(){return this._localRoot||this._mixer._root;},_update:function _update(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c;}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;e=this._propertyBindings;for(var f=0,g=b.length;f!==g;++f){b[f].evaluate(c),e[f].accumulate(d,a);}}}else this._updateWeight(a);},_updateWeight:function _updateWeight(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1));}}return this._effectiveWeight=b;},_updateTimeScale:function _updateTimeScale(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b);}}return this._effectiveTimeScale=b;},_updateTime:function _updateTime(a){var b=this.time+a,c=this._clip.duration,d=this.loop,e=this._loopCount,f=2202===d;if(0===a)return-1===e?b:f&&1===(e&1)?c-b:b;if(2200===d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else{this.time=b;break a;}this.clampWhenFinished?this.paused=!0:this.enabled=!1;this.time=b;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1});}else{-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===this.repetitions,!0,f));if(b>=c||0>b){d=Math.floor(b/c);b-=c*d;e+=Math.abs(d);var g=this.repetitions-e;0>=g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(1===g?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f),this._loopCount=e,this.time=b,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:d}));}else this.time=b;if(f&&1===(e&1))return c-b;}return b;},_setEndings:function _setEndings(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402);},_scheduleFading:function _scheduleFading(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this;}});Lg.prototype=Object.assign(Object.create(Ea.prototype),{constructor:Lg,_bindAction:function _bindAction(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,k=h[g];void 0===k&&(k={},h[g]=k);for(h=0;h!==e;++h){var m=d[h],n=m.name,p=k[n];if(void 0===p){p=f[h];if(void 0!==p){null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,g,n));continue;}p=new Kg(ya.create(c,n,b&&b._propertyBindings[h].binding.parsedPath),m.ValueTypeName,m.getValueSize());++p.referenceCount;this._addInactiveBinding(p,g,n);}f[h]=p;a[h].resultBuffer=p.buffer;}},_activateAction:function _activateAction(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b);}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState());}this._lendAction(a);}},_deactivateAction:function _deactivateAction(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e));}this._takeBackAction(a);}},_initMemoryManager:function _initMemoryManager(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length;},get inUse(){return a._nActiveActions;}},bindings:{get total(){return a._bindings.length;},get inUse(){return a._nActiveBindings;}},controlInterpolants:{get total(){return a._controlInterpolants.length;},get inUse(){return a._nActiveControlInterpolants;}}};},_isActiveAction:function _isActiveAction(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions;},_addInactiveAction:function _addInactiveAction(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a;},_removeInactiveAction:function _removeInactiveAction(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;c=this._actionsByClip;d=c[b];var e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a);},_removeInactiveBindingsForAction:function _removeInactiveBindingsForAction(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d);}},_lendAction:function _lendAction(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackAction:function _takeBackAction(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_addInactiveBinding:function _addInactiveBinding(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a);},_removeInactiveBinding:function _removeInactiveBinding(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];0===Object.keys(f).length&&delete e[d];},_lendBinding:function _lendBinding(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackBinding:function _takeBackBinding(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_lendControlInterpolant:function _lendControlInterpolant(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new oe(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c;},_takeBackControlInterpolant:function _takeBackControlInterpolant(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e;},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function clipAction(a,b){var c=b||this._root,d=c.uuid;c="string"===typeof a?Qa.findByName(c,a):a;a=null!==c?c.uuid:a;var e=this._actionsByClip[a],f=null;if(void 0!==e){f=e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip);}if(null===c)return null;b=new ni(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b;},existingAction:function existingAction(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?Qa.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null;},stopAllAction:function stopAllAction(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e){a[e].reset();}for(e=0;e!==d;++e){c[e].useCount=0;}return this;},update:function update(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){b[g]._update(d,a,e,f);}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g){a[g].apply(f);}return this;},setTime:function setTime(a){for(var b=this.time=0;b<this._actions.length;b++){this._actions[b].time=0;}return this.update(a);},getRoot:function getRoot(){return this._root;},uncacheClip:function uncacheClip(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g);}delete c[a];}},uncacheRoot:function uncacheRoot(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c));}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d){a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a);}},uncacheAction:function uncacheAction(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a));}});vf.prototype.clone=function(){return new vf(void 0===this.value.clone?this.value:this.value.clone());};Mg.prototype=Object.assign(Object.create(rb.prototype),{constructor:Mg,isInstancedInterleavedBuffer:!0,copy:function copy(a){rb.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;}});Object.assign(Ng.prototype,{set:function set(a,b){this.ray.set(a,b);},setFromCamera:function setFromCamera(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize(),this.camera=b):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld),this.camera=b):console.error("THREE.Raycaster: Unsupported camera type.");},intersectObject:function intersectObject(a,b,c){c=c||[];Og(a,this,c,b);c.sort(oi);return c;},intersectObjects:function intersectObjects(a,b,c){c=c||[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++){Og(a[d],this,c,b);}c.sort(oi);return c;}});Object.assign(pi.prototype,{set:function set(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this;},makeSafe:function makeSafe(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this;},setFromVector3:function setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z);},setFromCartesianCoords:function setFromCartesianCoords(a,b,c){this.radius=Math.sqrt(a*a+b*b+c*c);0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a,c),this.phi=Math.acos(L.clamp(b/this.radius,-1,1)));return this;}});Object.assign(qi.prototype,{set:function set(a,b,c){this.radius=a;this.theta=b;this.y=c;return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this;},setFromVector3:function setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z);},setFromCartesianCoords:function setFromCartesianCoords(a,b,c){this.radius=Math.sqrt(a*a+c*c);this.theta=Math.atan2(a,c);this.y=b;return this;}});var ej=new u();Object.assign(Pg.prototype,{set:function set(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromPoints:function setFromPoints(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++){this.expandByPoint(a[b]);}return this;},setFromCenterAndSize:function setFromCenterAndSize(a,b){b=ej.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function makeEmpty(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this;},isEmpty:function isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y;},getCenter:function getCenter(a){void 0===a&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new u());return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5);},getSize:function getSize(a){void 0===a&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new u());return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min);},expandByPoint:function expandByPoint(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function expandByVector(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function expandByScalar(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},containsPoint:function containsPoint(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0;},containsBox:function containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y;},getParameter:function getParameter(a,b){void 0===b&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new u());return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y));},intersectsBox:function intersectsBox(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0;},clampPoint:function clampPoint(a,b){void 0===b&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new u());return b.copy(a).clamp(this.min,this.max);},distanceToPoint:function distanceToPoint(a){return ej.copy(a).clamp(this.min,this.max).sub(a).length();},intersect:function intersect(a){this.min.max(a.min);this.max.min(a.max);return this;},union:function union(a){this.min.min(a.min);this.max.max(a.max);return this;},translate:function translate(a){this.min.add(a);this.max.add(a);return this;},equals:function equals(a){return a.min.equals(this.min)&&a.max.equals(this.max);}});var fj=new n(),Vf=new n();Object.assign(Qg.prototype,{set:function set(a,b){this.start.copy(a);this.end.copy(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.start.copy(a.start);this.end.copy(a.end);return this;},getCenter:function getCenter(a){void 0===a&&(console.warn("THREE.Line3: .getCenter() target is now required"),a=new n());return a.addVectors(this.start,this.end).multiplyScalar(.5);},delta:function delta(a){void 0===a&&(console.warn("THREE.Line3: .delta() target is now required"),a=new n());return a.subVectors(this.end,this.start);},distanceSq:function distanceSq(){return this.start.distanceToSquared(this.end);},distance:function distance(){return this.start.distanceTo(this.end);},at:function at(a,b){void 0===b&&(console.warn("THREE.Line3: .at() target is now required"),b=new n());return this.delta(b).multiplyScalar(a).add(this.start);},closestPointToPointParameter:function closestPointToPointParameter(a,b){fj.subVectors(a,this.start);Vf.subVectors(this.end,this.start);a=Vf.dot(Vf);a=Vf.dot(fj)/a;b&&(a=L.clamp(a,0,1));return a;},closestPointToPoint:function closestPointToPoint(a,b,c){a=this.closestPointToPointParameter(a,b);void 0===c&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new n());return this.delta(c).multiplyScalar(a).add(this.start);},applyMatrix4:function applyMatrix4(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this;},equals:function equals(a){return a.start.equals(this.start)&&a.end.equals(this.end);}});se.prototype=Object.create(E.prototype);se.prototype.constructor=se;se.prototype.isImmediateRenderObject=!0;var gj=new n();jd.prototype=Object.create(E.prototype);jd.prototype.constructor=jd;jd.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose();};jd.prototype.update=function(){this.light.updateMatrixWorld();var a=this.light.distance?this.light.distance:1E3,b=a*Math.tan(this.light.angle);this.cone.scale.set(b,b,a);gj.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(gj);void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color);};var Qb=new n(),Wf=new P(),uh=new P();rc.prototype=Object.create(ma.prototype);rc.prototype.constructor=rc;rc.prototype.isSkeletonHelper=!0;rc.prototype.updateMatrixWorld=function(a){var b=this.bones,c=this.geometry,d=c.getAttribute("position");uh.getInverse(this.root.matrixWorld);for(var e=0,f=0;e<b.length;e++){var g=b[e];g.parent&&g.parent.isBone&&(Wf.multiplyMatrices(uh,g.matrixWorld),Qb.setFromMatrixPosition(Wf),d.setXYZ(f,Qb.x,Qb.y,Qb.z),Wf.multiplyMatrices(uh,g.parent.matrixWorld),Qb.setFromMatrixPosition(Wf),d.setXYZ(f+1,Qb.x,Qb.y,Qb.z),f+=2);}c.getAttribute("position").needsUpdate=!0;E.prototype.updateMatrixWorld.call(this,a);};kd.prototype=Object.create(S.prototype);kd.prototype.constructor=kd;kd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();};kd.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color);};var ll=new n(),hj=new z(),ij=new z();ld.prototype=Object.create(E.prototype);ld.prototype.constructor=ld;ld.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose();};ld.prototype.update=function(){var a=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var b=a.geometry.getAttribute("color");hj.copy(this.light.color);ij.copy(this.light.groundColor);for(var c=0,d=b.count;c<d;c++){var e=c<d/2?hj:ij;b.setXYZ(c,e.r,e.g,e.b);}b.needsUpdate=!0;}a.lookAt(ll.setFromMatrixPosition(this.light.matrixWorld).negate());};wf.prototype=Object.assign(Object.create(ma.prototype),{constructor:wf,copy:function copy(a){ma.prototype.copy.call(this,a);this.geometry.copy(a.geometry);this.material.copy(a.material);return this;},clone:function clone(){return new this.constructor().copy(this);}});xf.prototype=Object.create(ma.prototype);xf.prototype.constructor=xf;var jj=new n(),Xf=new n(),kj=new n();md.prototype=Object.create(E.prototype);md.prototype.constructor=md;md.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose();};md.prototype.update=function(){jj.setFromMatrixPosition(this.light.matrixWorld);Xf.setFromMatrixPosition(this.light.target.matrixWorld);kj.subVectors(Xf,jj);this.lightPlane.lookAt(Xf);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(Xf);this.targetLine.scale.z=kj.length();};var yf=new n(),ja=new db();te.prototype=Object.create(ma.prototype);te.prototype.constructor=te;te.prototype.update=function(){var a=this.geometry,b=this.pointMap;ja.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);na("c",b,a,ja,0,0,-1);na("t",b,a,ja,0,0,1);na("n1",b,a,ja,-1,-1,-1);na("n2",b,a,ja,1,-1,-1);na("n3",b,a,ja,-1,1,-1);na("n4",b,a,ja,1,1,-1);na("f1",b,a,ja,-1,-1,1);na("f2",b,a,ja,1,-1,1);na("f3",b,a,ja,-1,1,1);na("f4",b,a,ja,1,1,1);na("u1",b,a,ja,.7,1.1,-1);na("u2",b,a,ja,-.7,1.1,-1);na("u3",b,a,ja,0,2,-1);na("cf1",b,a,ja,-1,0,1);na("cf2",b,a,ja,1,0,1);na("cf3",b,a,ja,0,-1,1);na("cf4",b,a,ja,0,1,1);na("cn1",b,a,ja,-1,0,-1);na("cn2",b,a,ja,1,0,-1);na("cn3",b,a,ja,0,-1,-1);na("cn4",b,a,ja,0,1,-1);a.getAttribute("position").needsUpdate=!0;};var Yf=new Sa();wb.prototype=Object.create(ma.prototype);wb.prototype.constructor=wb;wb.prototype.update=function(a){void 0!==a&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");void 0!==this.object&&Yf.setFromObject(this.object);if(!Yf.isEmpty()){a=Yf.min;var b=Yf.max,c=this.geometry.attributes.position,d=c.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=a.x;d[4]=b.y;d[5]=b.z;d[6]=a.x;d[7]=a.y;d[8]=b.z;d[9]=b.x;d[10]=a.y;d[11]=b.z;d[12]=b.x;d[13]=b.y;d[14]=a.z;d[15]=a.x;d[16]=b.y;d[17]=a.z;d[18]=a.x;d[19]=a.y;d[20]=a.z;d[21]=b.x;d[22]=a.y;d[23]=a.z;c.needsUpdate=!0;this.geometry.computeBoundingSphere();}};wb.prototype.setFromObject=function(a){this.object=a;this.update();return this;};wb.prototype.copy=function(a){ma.prototype.copy.call(this,a);this.object=a.object;return this;};wb.prototype.clone=function(){return new this.constructor().copy(this);};ue.prototype=Object.create(ma.prototype);ue.prototype.constructor=ue;ue.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),E.prototype.updateMatrixWorld.call(this,a));};ve.prototype=Object.create(Ka.prototype);ve.prototype.constructor=ve;ve.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.children[0].material.side=0>b?1:0;this.lookAt(this.plane.normal);E.prototype.updateMatrixWorld.call(this,a);};var lj=new n(),zf,Rg;xb.prototype=Object.create(E.prototype);xb.prototype.constructor=xb;xb.prototype.setDirection=function(a){.99999<a.y?this.quaternion.set(0,0,0,1):-.99999>a.y?this.quaternion.set(1,0,0,0):(lj.set(a.z,0,-a.x).normalize(),this.quaternion.setFromAxisAngle(lj,Math.acos(a.y)));};xb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(1E-4,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix();};xb.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a);};xb.prototype.copy=function(a){E.prototype.copy.call(this,a,!1);this.line.copy(a.line);this.cone.copy(a.cone);return this;};xb.prototype.clone=function(){return new this.constructor().copy(this);};we.prototype=Object.create(ma.prototype);we.prototype.constructor=we;var kb=Math.pow(2,8),mj=[.125,.215,.35,.446,.526,.582],wi=5+mj.length,lb={3E3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},Vg=new hd(),Af=function(a){var b=new Float32Array(a),c=new n(0,1,0);a=new ub({defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:b},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c},inputEncoding:{value:lb[3E3]},outputEncoding:{value:lb[3E3]}},vertexShader:Xg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n"+Yg()+"\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tfor (int i = 0; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfor (int dir = -1; dir < 2; dir += 2) {\n\t\t\tif (i == 0 && dir == 1)\n\t\t\t\tcontinue;\n\t\t\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\t\t\tif (all(equal(axis, vec3(0.0))))\n\t\t\t\taxis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);\n\t\t\taxis = normalize(axis);\n\t\t\tfloat theta = dTheta * float(dir * i);\n\t\t\tfloat cosTheta = cos(theta);\n\t\t\t// Rodrigues' axis-angle rotation\n\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t\t\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\t\t\tgl_FragColor.rgb +=\n\t\t\t\t\tweights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);\n\t\t}\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",blending:0,depthTest:!1,depthWrite:!1});a.type="SphericalGaussianBlur";return a;}(20),Rb=null,Sb=null,vh=function(){for(var a=[],b=[],c=[],d=8,e=0;e<wi;e++){var f=Math.pow(2,d);b.push(f);var g=1/f;4<e?g=mj[e-8+4-1]:0==e&&(g=0);c.push(g);g=1/(f-1);f=-g/2;g=1+g/2;var h=[f,f,g,f,g,g,f,f,g,g,f,g];f=new Float32Array(108);g=new Float32Array(72);for(var k=new Float32Array(36),m=0;6>m;m++){var n=m%3*2/3-1,p=2<m?0:-1;f.set([n,p,0,n+2/3,p,0,n+2/3,p+1,0,n,p,0,n+2/3,p+1,0,n,p+1,0],18*m);g.set(h,12*m);k.set([m,m,m,m,m,m],6*m);}h=new B();h.setAttribute("position",new M(f,3));h.setAttribute("uv",new M(g,2));h.setAttribute("faceIndex",new M(k,1));a.push(h);4<d&&d--;}return{_lodPlanes:a,_sizeLods:b,_sigmas:c};}(),xe=vh._lodPlanes,Ai=vh._sizeLods,Cf=vh._sigmas,Bf=null,U=null,Ug=null,Ac=(1+Math.sqrt(5))/2,Ad=1/Ac,yi=[new n(1,1,1),new n(-1,1,1),new n(1,1,-1),new n(-1,1,-1),new n(0,Ac,Ad),new n(0,Ac,-Ad),new n(Ad,0,Ac),new n(-Ad,0,Ac),new n(Ac,Ad,0),new n(-Ac,Ad,0)];Sg.prototype={constructor:Sg,fromScene:function fromScene(a,b,c,d){void 0===b&&(b=0);void 0===c&&(c=.1);void 0===d&&(d=100);Ug=U.getRenderTarget();var e=si();c=new ba(90,1,c,d);d=[1,1,1,1,-1,1];var f=[1,1,-1,-1,-1,1],g=U.outputEncoding,h=U.toneMapping,k=U.toneMappingExposure,m=U.getClearColor(),n=U.getClearAlpha();U.toneMapping=1;U.toneMappingExposure=1;U.outputEncoding=3E3;a.scale.z*=-1;var p=a.background;if(p&&p.isColor){p.convertSRGBToLinear();var u=Math.min(Math.max(Math.ceil(Math.log2(Math.max(p.r,p.g,p.b))),-128),127);p=p.multiplyScalar(Math.pow(2,-u));U.setClearColor(p,(u+128)/255);a.background=null;}for(p=0;6>p;p++){u=p%3,0==u?(c.up.set(0,d[p],0),c.lookAt(f[p],0,0)):1==u?(c.up.set(0,0,d[p]),c.lookAt(0,f[p],0)):(c.up.set(0,d[p],0),c.lookAt(0,0,f[p])),Wg(e,u*kb,2<p?kb:0,kb,kb),U.setRenderTarget(e),U.render(a,c);}U.toneMapping=h;U.toneMappingExposure=k;U.outputEncoding=g;U.setClearColor(m,n);a.scale.z*=-1;0<b&&xi(e,0,0,b);vi(e);ui(e);return e;},fromEquirectangular:function fromEquirectangular(a){a.magFilter=1003;a.minFilter=1003;a.generateMipmaps=!1;return this.fromCubemap(a);},fromCubemap:function fromCubemap(a){Ug=U.getRenderTarget();var b=si(a),c=new ob();a.isCubeTexture?null==Sb&&(Sb=Ci()):null==Rb&&(Rb=Bi());var d=a.isCubeTexture?Sb:Rb;c.add(new S(xe[0],d));d=d.uniforms;d.envMap.value=a;a.isCubeTexture||d.texelSize.value.set(1/a.image.width,1/a.image.height);d.inputEncoding.value=lb[a.encoding];d.outputEncoding.value=lb[a.encoding];Wg(b,0,0,3*kb,2*kb);U.setRenderTarget(b);U.render(c,Vg);vi(b);ui(b);return b;},compileCubemapShader:function compileCubemapShader(){null==Sb&&(Sb=Ci(),Tg(Sb));},compileEquirectangularShader:function compileEquirectangularShader(){null==Rb&&(Rb=Bi(),Tg(Rb));},dispose:function dispose(){Af.dispose();null!=Sb&&Sb.dispose();null!=Rb&&Rb.dispose();for(var a=0;a<xe.length;a++){xe[a].dispose();}}};G.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(G.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a;};Object.assign(vb.prototype,{createPointsGeometry:function createPointsGeometry(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getPoints(a);return this.createGeometry(a);},createSpacedPointsGeometry:function createSpacedPointsGeometry(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a);},createGeometry:function createGeometry(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new N(),c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new n(e.x,e.y,e.z||0));}return b;}});Object.assign($a.prototype,{fromPoints:function fromPoints(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");return this.setFromPoints(a);}});Di.prototype=Object.create(pa.prototype);Ei.prototype=Object.create(pa.prototype);Zg.prototype=Object.create(pa.prototype);Object.assign(Zg.prototype,{initFromArray:function initFromArray(){console.error("THREE.Spline: .initFromArray() has been removed.");},getControlPointsArray:function getControlPointsArray(){console.error("THREE.Spline: .getControlPointsArray() has been removed.");},reparametrizeByArcLength:function reparametrizeByArcLength(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");}});wf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");};rc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.");};Object.assign(X.prototype,{extractUrlBase:function extractUrlBase(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");return sh.extractUrlBase(a);}});X.Handlers={add:function add(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");},get:function get(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");}};Object.assign(sf.prototype,{setTexturePath:function setTexturePath(a){console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");return this.setResourcePath(a);}});Object.assign(Pg.prototype,{center:function center(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a);},empty:function empty(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},size:function size(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a);}});Object.assign(Sa.prototype,{center:function center(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a);},empty:function empty(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionSphere:function isIntersectionSphere(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);},size:function size(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a);}});Hc.prototype.setFromMatrix=function(a){console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().");return this.setFromProjectionMatrix(a);};Qg.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a);};Object.assign(L,{random16:function random16(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random();},nearestPowerOfTwo:function nearestPowerOfTwo(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");return L.floorPowerOfTwo(a);},nextPowerOfTwo:function nextPowerOfTwo(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");return L.ceilPowerOfTwo(a);}});Object.assign(wa.prototype,{flattenToArrayOffset:function flattenToArrayOffset(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b);},multiplyVector3:function multiplyVector3(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this);},multiplyVector3Array:function multiplyVector3Array(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");},applyToBufferAttribute:function applyToBufferAttribute(a){console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this);},applyToVector3Array:function applyToVector3Array(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");}});Object.assign(P.prototype,{extractPosition:function extractPosition(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a);},flattenToArrayOffset:function flattenToArrayOffset(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b);},getPosition:function getPosition(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return new n().setFromMatrixColumn(this,3);},setRotationFromQuaternion:function setRotationFromQuaternion(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a);},multiplyToArray:function multiplyToArray(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");},multiplyVector3:function multiplyVector3(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},multiplyVector4:function multiplyVector4(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},multiplyVector3Array:function multiplyVector3Array(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");},rotateAxis:function rotateAxis(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this);},crossVector:function crossVector(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},translate:function translate(){console.error("THREE.Matrix4: .translate() has been removed.");},rotateX:function rotateX(){console.error("THREE.Matrix4: .rotateX() has been removed.");},rotateY:function rotateY(){console.error("THREE.Matrix4: .rotateY() has been removed.");},rotateZ:function rotateZ(){console.error("THREE.Matrix4: .rotateZ() has been removed.");},rotateByAxis:function rotateByAxis(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.");},applyToBufferAttribute:function applyToBufferAttribute(a){console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},applyToVector3Array:function applyToVector3Array(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");},makeFrustum:function makeFrustum(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f);}});Ta.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a);};Aa.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this);};Object.assign(Vb.prototype,{isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionPlane:function isIntersectionPlane(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a);},isIntersectionSphere:function isIntersectionSphere(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);}});Object.assign(oa.prototype,{area:function area(){console.warn("THREE.Triangle: .area() has been renamed to .getArea().");return this.getArea();},barycoordFromPoint:function barycoordFromPoint(a,b){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return this.getBarycoord(a,b);},midpoint:function midpoint(a){console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");return this.getMidpoint(a);},normal:function normal(a){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return this.getNormal(a);},plane:function plane(a){console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");return this.getPlane(a);}});Object.assign(oa,{barycoordFromPoint:function barycoordFromPoint(a,b,c,d,e){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return oa.getBarycoord(a,b,c,d,e);},normal:function normal(a,b,c,d){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return oa.getNormal(a,b,c,d);}});Object.assign(Kb.prototype,{extractAllPoints:function extractAllPoints(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");return this.extractPoints(a);},extrude:function extrude(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new fc(this,a);},makeGeometry:function makeGeometry(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new hc(this,a);}});Object.assign(u.prototype,{fromAttribute:function fromAttribute(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},distanceToManhattan:function distanceToManhattan(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a);},lengthManhattan:function lengthManhattan(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});Object.assign(n.prototype,{setEulerFromRotationMatrix:function setEulerFromRotationMatrix(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");},setEulerFromQuaternion:function setEulerFromQuaternion(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");},getPositionFromMatrix:function getPositionFromMatrix(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a);},getScaleFromMatrix:function getScaleFromMatrix(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a);},getColumnFromMatrix:function getColumnFromMatrix(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a);},applyProjection:function applyProjection(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a);},fromAttribute:function fromAttribute(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},distanceToManhattan:function distanceToManhattan(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a);},lengthManhattan:function lengthManhattan(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});Object.assign(ka.prototype,{fromAttribute:function fromAttribute(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},lengthManhattan:function lengthManhattan(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});Object.assign(N.prototype,{computeTangents:function computeTangents(){console.error("THREE.Geometry: .computeTangents() has been removed.");},computeLineDistances:function computeLineDistances(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");},applyMatrix:function applyMatrix(a){console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4().");return this.applyMatrix4(a);}});Object.assign(E.prototype,{getChildByName:function getChildByName(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a);},renderDepth:function renderDepth(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");},translate:function translate(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a);},getWorldRotation:function getWorldRotation(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");},applyMatrix:function applyMatrix(a){console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().");return this.applyMatrix4(a);}});Object.defineProperties(E.prototype,{eulerOrder:{get:function get(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order;},set:function set(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a;}},useQuaternion:{get:function get(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");},set:function set(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");}}});Object.assign(S.prototype,{setDrawMode:function setDrawMode(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");}});Object.defineProperties(S.prototype,{drawMode:{get:function get(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");return 0;},set:function set(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");}}});Object.defineProperties(Rd.prototype,{objects:{get:function get(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels;}}});Object.defineProperty(Ue.prototype,"useVertexTexture",{get:function get(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");},set:function set(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");}});Sd.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.");};Object.defineProperty(G.prototype,"__arcLengthDivisions",{get:function get(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions;},set:function set(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a;}});ba.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a);};Object.defineProperties(ea.prototype,{onlyShadow:{set:function set(){console.warn("THREE.Light: .onlyShadow has been removed.");}},shadowCameraFov:{set:function set(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a;}},shadowCameraLeft:{set:function set(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a;}},shadowCameraRight:{set:function set(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a;}},shadowCameraTop:{set:function set(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a;}},shadowCameraBottom:{set:function set(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a;}},shadowCameraNear:{set:function set(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a;}},shadowCameraFar:{set:function set(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a;}},shadowCameraVisible:{set:function set(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");}},shadowBias:{set:function set(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a;}},shadowDarkness:{set:function set(){console.warn("THREE.Light: .shadowDarkness has been removed.");}},shadowMapWidth:{set:function set(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a;}},shadowMapHeight:{set:function set(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a;}}});Object.defineProperties(M.prototype,{length:{get:function get(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length;}},dynamic:{get:function get(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");return 35048===this.usage;},set:function set(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");this.setUsage(35048);}}});Object.assign(M.prototype,{setDynamic:function setDynamic(a){console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");this.setUsage(!0===a?35048:35044);return this;},copyIndicesArray:function copyIndicesArray(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");},setArray:function setArray(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");}});Object.assign(B.prototype,{addIndex:function addIndex(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a);},addAttribute:function addAttribute(a,b,c){console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");return b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute?"index"===a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),this):this.setAttribute(a,b):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new M(b,c)));},addDrawCall:function addDrawCall(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b);},clearDrawCalls:function clearDrawCalls(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups();},computeTangents:function computeTangents(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");},computeOffsets:function computeOffsets(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");},removeAttribute:function removeAttribute(a){console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");return this.deleteAttribute(a);},applyMatrix:function applyMatrix(a){console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().");return this.applyMatrix4(a);}});Object.defineProperties(B.prototype,{drawcalls:{get:function get(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups;}},offsets:{get:function get(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups;}}});Object.defineProperties(Ng.prototype,{linePrecision:{get:function get(){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");return this.params.Line.threshold;},set:function set(a){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");this.params.Line.threshold=a;}}});Object.defineProperties(rb.prototype,{dynamic:{get:function get(){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");return 35048===this.usage;},set:function set(a){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");this.setUsage(a);}}});Object.assign(rb.prototype,{setDynamic:function setDynamic(a){console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");this.setUsage(!0===a?35048:35044);return this;},setArray:function setArray(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");}});Object.assign(fb.prototype,{getArrays:function getArrays(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");},addShapeList:function addShapeList(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");},addShape:function addShape(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");}});Object.defineProperties(vf.prototype,{dynamic:{set:function set(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");}},onUpdate:{value:function value(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this;}}});Object.defineProperties(K.prototype,{wrapAround:{get:function get(){console.warn("THREE.Material: .wrapAround has been removed.");},set:function set(){console.warn("THREE.Material: .wrapAround has been removed.");}},overdraw:{get:function get(){console.warn("THREE.Material: .overdraw has been removed.");},set:function set(){console.warn("THREE.Material: .overdraw has been removed.");}},wrapRGB:{get:function get(){console.warn("THREE.Material: .wrapRGB has been removed.");return new z();}},shading:{get:function get(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");},set:function set(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a;}},stencilMask:{get:function get(){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");return this.stencilFuncMask;},set:function set(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");this.stencilFuncMask=a;}}});Object.defineProperties(Jb.prototype,{metal:{get:function get(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1;},set:function set(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");}}});Object.defineProperties(Ba.prototype,{derivatives:{get:function get(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives;},set:function set(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a;}}});Object.assign(ng.prototype,{clearTarget:function clearTarget(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");this.setRenderTarget(a);this.clear(b,c,d);},animate:function animate(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");this.setAnimationLoop(a);},getCurrentRenderTarget:function getCurrentRenderTarget(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");return this.getRenderTarget();},getMaxAnisotropy:function getMaxAnisotropy(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy();},getPrecision:function getPrecision(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision;},resetGLState:function resetGLState(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");return this.state.reset();},supportsFloatTextures:function supportsFloatTextures(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float");},supportsHalfFloatTextures:function supportsHalfFloatTextures(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float");},supportsStandardDerivatives:function supportsStandardDerivatives(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives");},supportsCompressedTextureS3TC:function supportsCompressedTextureS3TC(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc");},supportsCompressedTexturePVRTC:function supportsCompressedTexturePVRTC(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc");},supportsBlendMinMax:function supportsBlendMinMax(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax");},supportsVertexTextures:function supportsVertexTextures(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");return this.capabilities.vertexTextures;},supportsInstancedArrays:function supportsInstancedArrays(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays");},enableScissorTest:function enableScissorTest(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a);},initMaterial:function initMaterial(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");},addPrePlugin:function addPrePlugin(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");},addPostPlugin:function addPostPlugin(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");},updateShadowMap:function updateShadowMap(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");},setFaceCulling:function setFaceCulling(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");},allocTextureUnit:function allocTextureUnit(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");},setTexture:function setTexture(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");},setTexture2D:function setTexture2D(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");},setTextureCube:function setTextureCube(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");},getActiveMipMapLevel:function getActiveMipMapLevel(){console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");return this.getActiveMipmapLevel();}});Object.defineProperties(ng.prototype,{shadowMapEnabled:{get:function get(){return this.shadowMap.enabled;},set:function set(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a;}},shadowMapType:{get:function get(){return this.shadowMap.type;},set:function set(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a;}},shadowMapCullFace:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");}},context:{get:function get(){console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");return this.getContext();}},vr:{get:function get(){console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");return this.xr;}},gammaInput:{get:function get(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");return!1;},set:function set(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");}},gammaOutput:{get:function get(){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");return!1;},set:function set(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");this.outputEncoding=!0===a?3001:3E3;}}});Object.defineProperties(Vh.prototype,{cullFace:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");}},renderReverseSided:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");}},renderSingleSided:{get:function get(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");},set:function set(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");}}});Object.defineProperties(Ha.prototype,{wrapS:{get:function get(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a;}},wrapT:{get:function get(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a;}},magFilter:{get:function get(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a;}},minFilter:{get:function get(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a;}},anisotropy:{get:function get(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a;}},offset:{get:function get(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a;}},repeat:{get:function get(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a;}},format:{get:function get(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a;}},type:{get:function get(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a;}},generateMipmaps:{get:function get(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a;}}});Object.defineProperties(id.prototype,{load:{value:function value(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;new tf().load(a,function(a){b.setBuffer(a);});return this;}},startTime:{set:function set(){console.warn("THREE.Audio: .startTime is now .play( delay ).");}}});Jg.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData();};Gc.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b);};Lb.crossOrigin=void 0;Lb.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new ef();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;};Lb.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new df();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;};Lb.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");};Lb.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"114"}}));k.ACESFilmicToneMapping=5;k.AddEquation=100;k.AddOperation=2;k.AdditiveBlending=2;k.AlphaFormat=1021;k.AlwaysDepth=1;k.AlwaysStencilFunc=519;k.AmbientLight=mf;k.AmbientLightProbe=Eg;k.AnimationClip=Qa;k.AnimationLoader=vg;k.AnimationMixer=Lg;k.AnimationObjectGroup=mi;k.AnimationUtils=R;k.ArcCurve=gd;k.ArrayCamera=Qe;k.ArrowHelper=xb;k.Audio=id;k.AudioAnalyser=Jg;k.AudioContext=Hg;k.AudioListener=Gg;k.AudioLoader=tf;k.AxesHelper=we;k.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new we(a);};k.BackSide=1;k.BasicDepthPacking=3200;k.BasicShadowMap=0;k.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new cf(a);};k.Bone=og;k.BooleanKeyframeTrack=Ze;k.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new wb(a,b);};k.Box2=Pg;k.Box3=Sa;k.Box3Helper=ue;k.BoxBufferGeometry=Jd;k.BoxGeometry=mh;k.BoxHelper=wb;k.BufferAttribute=M;k.BufferGeometry=B;k.BufferGeometryLoader=rf;k.ByteType=1010;k.Cache=vc;k.Camera=db;k.CameraHelper=te;k.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed");};k.CanvasTexture=Td;k.CatmullRomCurve3=pa;k.CineonToneMapping=4;k.CircleBufferGeometry=cd;k.CircleGeometry=ne;k.ClampToEdgeWrapping=1001;k.Clock=Fg;k.ClosedSplineCurve3=Di;k.Color=z;k.ColorKeyframeTrack=$e;k.CompressedTexture=Qc;k.CompressedTextureLoader=wg;k.ConeBufferGeometry=me;k.ConeGeometry=le;k.CubeCamera=Gc;k.CubeGeometry=mh;k.CubeReflectionMapping=301;k.CubeRefractionMapping=302;k.CubeTexture=qb;k.CubeTextureLoader=df;k.CubeUVReflectionMapping=306;k.CubeUVRefractionMapping=307;k.CubicBezierCurve=Wa;k.CubicBezierCurve3=hb;k.CubicInterpolant=Xe;k.CullFaceBack=1;k.CullFaceFront=2;k.CullFaceFrontBack=3;k.CullFaceNone=0;k.Curve=G;k.CurvePath=vb;k.CustomBlending=5;k.CylinderBufferGeometry=tb;k.CylinderGeometry=jc;k.Cylindrical=qi;k.DataTexture=ac;k.DataTexture2DArray=Ic;k.DataTexture3D=Jc;k.DataTextureLoader=cf;k.DecrementStencilOp=7683;k.DecrementWrapStencilOp=34056;k.DefaultLoadingManager=ii;k.DepthFormat=1026;k.DepthStencilFormat=1027;k.DepthTexture=Ud;k.DirectionalLight=lf;k.DirectionalLightHelper=md;k.DirectionalLightShadow=kf;k.DiscreteInterpolant=Ye;k.DodecahedronBufferGeometry=Vc;k.DodecahedronGeometry=$d;k.DoubleSide=2;k.DstAlphaFactor=206;k.DstColorFactor=208;k.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.");return new M(a,b).setUsage(35048);};k.DynamicCopyUsage=35050;k.DynamicDrawUsage=35048;k.DynamicReadUsage=35049;k.EdgesGeometry=bd;k.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new ma(new bd(a.geometry),new la({color:void 0!==b?b:16777215}));};k.EllipseCurve=Ma;k.EqualDepth=4;k.EqualStencilFunc=514;k.EquirectangularReflectionMapping=303;k.EquirectangularRefractionMapping=304;k.Euler=Tb;k.EventDispatcher=Ea;k.ExtrudeBufferGeometry=fb;k.ExtrudeGeometry=fc;k.Face3=Bc;k.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new Bc(a,b,c,e,f,g);};k.FaceColors=1;k.FileLoader=Ra;k.FlatShading=1;k.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new A(a,b);};k.Float32BufferAttribute=A;k.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new Gd(a,b);};k.Float64BufferAttribute=Gd;k.FloatType=1015;k.Fog=Se;k.FogExp2=Re;k.Font=Bg;k.FontLoader=Cg;k.FrontFaceDirectionCCW=1;k.FrontFaceDirectionCW=0;k.FrontSide=0;k.Frustum=Hc;k.GammaEncoding=3007;k.Geometry=N;k.GeometryUtils={merge:function merge(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry;}a.merge(b,d,c);},center:function center(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center();}};k.GreaterDepth=6;k.GreaterEqualDepth=5;k.GreaterEqualStencilFunc=518;k.GreaterStencilFunc=516;k.GridHelper=wf;k.Group=Mc;k.HalfFloatType=1016;k.HemisphereLight=ff;k.HemisphereLightHelper=ld;k.HemisphereLightProbe=Dg;k.IcosahedronBufferGeometry=Uc;k.IcosahedronGeometry=Zd;k.ImageBitmapLoader=zg;k.ImageLoader=fd;k.ImageUtils=Lb;k.ImmediateRenderObject=se;k.IncrementStencilOp=7682;k.IncrementWrapStencilOp=34055;k.InstancedBufferAttribute=qf;k.InstancedBufferGeometry=pf;k.InstancedInterleavedBuffer=Mg;k.InstancedMesh=Ve;k.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new Ed(a,b);};k.Int16BufferAttribute=Ed;k.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new Fd(a,b);};k.Int32BufferAttribute=Fd;k.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new Bd(a,b);};k.Int8BufferAttribute=Bd;k.IntType=1013;k.InterleavedBuffer=rb;k.InterleavedBufferAttribute=Od;k.Interpolant=La;k.InterpolateDiscrete=2300;k.InterpolateLinear=2301;k.InterpolateSmooth=2302;k.InvertStencilOp=5386;k.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.");};k.KeepStencilOp=7680;k.KeyframeTrack=sa;k.LOD=Rd;k.LatheBufferGeometry=ad;k.LatheGeometry=ke;k.Layers=Ie;k.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");};k.LessDepth=2;k.LessEqualDepth=3;k.LessEqualStencilFunc=515;k.LessStencilFunc=513;k.Light=ea;k.LightProbe=ab;k.LightShadow=jb;k.Line=Ka;k.Line3=Qg;k.LineBasicMaterial=la;k.LineCurve=Da;k.LineCurve3=Xa;k.LineDashedMaterial=qc;k.LineLoop=We;k.LinePieces=1;k.LineSegments=ma;k.LineStrip=0;k.LinearEncoding=3E3;k.LinearFilter=1006;k.LinearInterpolant=oe;k.LinearMipMapLinearFilter=1008;k.LinearMipMapNearestFilter=1007;k.LinearMipmapLinearFilter=1008;k.LinearMipmapNearestFilter=1007;k.LinearToneMapping=1;k.Loader=X;k.LoaderUtils=sh;k.LoadingManager=ug;k.LogLuvEncoding=3003;k.LoopOnce=2200;k.LoopPingPong=2202;k.LoopRepeat=2201;k.LuminanceAlphaFormat=1025;k.LuminanceFormat=1024;k.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};k.Material=K;k.MaterialLoader=of;k.Math=L;k.MathUtils=L;k.Matrix3=wa;k.Matrix4=P;k.MaxEquation=104;k.Mesh=S;k.MeshBasicMaterial=Oa;k.MeshDepthMaterial=Fb;k.MeshDistanceMaterial=Gb;k.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a;};k.MeshLambertMaterial=oc;k.MeshMatcapMaterial=pc;k.MeshNormalMaterial=nc;k.MeshPhongMaterial=Jb;k.MeshPhysicalMaterial=lc;k.MeshStandardMaterial=gb;k.MeshToonMaterial=mc;k.MinEquation=103;k.MirroredRepeatWrapping=1002;k.MixOperation=1;k.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice();};return a;};k.MultiplyBlending=4;k.MultiplyOperation=0;k.NearestFilter=1003;k.NearestMipMapLinearFilter=1005;k.NearestMipMapNearestFilter=1004;k.NearestMipmapLinearFilter=1005;k.NearestMipmapNearestFilter=1004;k.NeverDepth=0;k.NeverStencilFunc=512;k.NoBlending=0;k.NoColors=0;k.NoToneMapping=0;k.NormalBlending=1;k.NotEqualDepth=7;k.NotEqualStencilFunc=517;k.NumberKeyframeTrack=dd;k.Object3D=E;k.ObjectLoader=sf;k.ObjectSpaceNormalMap=1;k.OctahedronBufferGeometry=cc;k.OctahedronGeometry=Yd;k.OneFactor=201;k.OneMinusDstAlphaFactor=207;k.OneMinusDstColorFactor=209;k.OneMinusSrcAlphaFactor=205;k.OneMinusSrcColorFactor=203;k.OrthographicCamera=hd;k.PCFShadowMap=1;k.PCFSoftShadowMap=2;k.PMREMGenerator=Sg;k.ParametricBufferGeometry=Sc;k.ParametricGeometry=Vd;k.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Pd(a);};k.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Va(a);};k.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Pc(a,b);};k.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Va(a);};k.Path=$a;k.PerspectiveCamera=ba;k.Plane=Ta;k.PlaneBufferGeometry=bc;k.PlaneGeometry=Id;k.PlaneHelper=ve;k.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Pc(a,b);};k.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Va(a);};k.PointLight=jf;k.PointLightHelper=kd;k.Points=Pc;k.PointsMaterial=Va;k.PolarGridHelper=xf;k.PolyhedronBufferGeometry=Ga;k.PolyhedronGeometry=Wd;k.PositionalAudio=Ig;k.PropertyBinding=ya;k.PropertyMixer=Kg;k.QuadraticBezierCurve=Ya;k.QuadraticBezierCurve3=ib;k.Quaternion=Aa;k.QuaternionKeyframeTrack=pe;k.QuaternionLinearInterpolant=af;k.REVISION="114";k.RGBADepthPacking=3201;k.RGBAFormat=1023;k.RGBAIntegerFormat=1033;k.RGBA_ASTC_10x10_Format=37819;k.RGBA_ASTC_10x5_Format=37816;k.RGBA_ASTC_10x6_Format=37817;k.RGBA_ASTC_10x8_Format=37818;k.RGBA_ASTC_12x10_Format=37820;k.RGBA_ASTC_12x12_Format=37821;k.RGBA_ASTC_4x4_Format=37808;k.RGBA_ASTC_5x4_Format=37809;k.RGBA_ASTC_5x5_Format=37810;k.RGBA_ASTC_6x5_Format=37811;k.RGBA_ASTC_6x6_Format=37812;k.RGBA_ASTC_8x5_Format=37813;k.RGBA_ASTC_8x6_Format=37814;k.RGBA_ASTC_8x8_Format=37815;k.RGBA_ETC2_EAC_Format=37496;k.RGBA_PVRTC_2BPPV1_Format=35843;k.RGBA_PVRTC_4BPPV1_Format=35842;k.RGBA_S3TC_DXT1_Format=33777;k.RGBA_S3TC_DXT3_Format=33778;k.RGBA_S3TC_DXT5_Format=33779;k.RGBDEncoding=3006;k.RGBEEncoding=3002;k.RGBEFormat=1023;k.RGBFormat=1022;k.RGBIntegerFormat=1032;k.RGBM16Encoding=3005;k.RGBM7Encoding=3004;k.RGB_ETC1_Format=36196;k.RGB_ETC2_Format=37492;k.RGB_PVRTC_2BPPV1_Format=35841;k.RGB_PVRTC_4BPPV1_Format=35840;k.RGB_S3TC_DXT1_Format=33776;k.RGFormat=1030;k.RGIntegerFormat=1031;k.RawShaderMaterial=ub;k.Ray=Vb;k.Raycaster=Ng;k.RectAreaLight=nf;k.RedFormat=1028;k.RedIntegerFormat=1029;k.ReinhardToneMapping=2;k.RepeatWrapping=1E3;k.ReplaceStencilOp=7681;k.ReverseSubtractEquation=102;k.RingBufferGeometry=$c;k.RingGeometry=je;k.SRGB8_ALPHA8_ASTC_10x10_Format=37851;k.SRGB8_ALPHA8_ASTC_10x5_Format=37848;k.SRGB8_ALPHA8_ASTC_10x6_Format=37849;k.SRGB8_ALPHA8_ASTC_10x8_Format=37850;k.SRGB8_ALPHA8_ASTC_12x10_Format=37852;k.SRGB8_ALPHA8_ASTC_12x12_Format=37853;k.SRGB8_ALPHA8_ASTC_4x4_Format=37840;k.SRGB8_ALPHA8_ASTC_5x4_Format=37841;k.SRGB8_ALPHA8_ASTC_5x5_Format=37842;k.SRGB8_ALPHA8_ASTC_6x5_Format=37843;k.SRGB8_ALPHA8_ASTC_6x6_Format=37844;k.SRGB8_ALPHA8_ASTC_8x5_Format=37845;k.SRGB8_ALPHA8_ASTC_8x6_Format=37846;k.SRGB8_ALPHA8_ASTC_8x8_Format=37847;k.Scene=ob;k.SceneUtils={createMultiMaterialObject:function createMultiMaterialObject(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");},detach:function detach(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");},attach:function attach(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");}};k.ShaderChunk=O;k.ShaderLib=eb;k.ShaderMaterial=Ba;k.ShadowMaterial=kc;k.Shape=Kb;k.ShapeBufferGeometry=ic;k.ShapeGeometry=hc;k.ShapePath=Ag;k.ShapeUtils=sb;k.ShortType=1011;k.Skeleton=Ue;k.SkeletonHelper=rc;k.SkinnedMesh=Sd;k.SmoothShading=2;k.Sphere=pb;k.SphereBufferGeometry=gc;k.SphereGeometry=ie;k.Spherical=pi;k.SphericalHarmonics3=uf;k.SphericalReflectionMapping=305;k.Spline=Zg;k.SplineCurve=Za;k.SplineCurve3=Ei;k.SpotLight=hf;k.SpotLightHelper=jd;k.SpotLightShadow=gf;k.Sprite=Pd;k.SpriteMaterial=Ib;k.SrcAlphaFactor=204;k.SrcAlphaSaturateFactor=210;k.SrcColorFactor=202;k.StaticCopyUsage=35046;k.StaticDrawUsage=35044;k.StaticReadUsage=35045;k.StereoCamera=ki;k.StreamCopyUsage=35042;k.StreamDrawUsage=35040;k.StreamReadUsage=35041;k.StringKeyframeTrack=bf;k.SubtractEquation=101;k.SubtractiveBlending=3;k.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};k.TangentSpaceNormalMap=0;k.TetrahedronBufferGeometry=Tc;k.TetrahedronGeometry=Xd;k.TextBufferGeometry=Zc;k.TextGeometry=he;k.Texture=W;k.TextureLoader=ef;k.TorusBufferGeometry=Xc;k.TorusGeometry=ce;k.TorusKnotBufferGeometry=Wc;k.TorusKnotGeometry=be;k.Triangle=oa;k.TriangleFanDrawMode=2;k.TriangleStripDrawMode=1;k.TrianglesDrawMode=0;k.TubeBufferGeometry=dc;k.TubeGeometry=ae;k.UVMapping=300;k.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new Wb(a,b);};k.Uint16BufferAttribute=Wb;k.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new Xb(a,b);};k.Uint32BufferAttribute=Xb;k.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new Cd(a,b);};k.Uint8BufferAttribute=Cd;k.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new Dd(a,b);};k.Uint8ClampedBufferAttribute=Dd;k.Uncharted2ToneMapping=3;k.Uniform=vf;k.UniformsLib=D;k.UniformsUtils=Sh;k.UnsignedByteType=1009;k.UnsignedInt248Type=1020;k.UnsignedIntType=1014;k.UnsignedShort4444Type=1017;k.UnsignedShort5551Type=1018;k.UnsignedShort565Type=1019;k.UnsignedShortType=1012;k.VSMShadowMap=3;k.Vector2=u;k.Vector3=n;k.Vector4=ka;k.VectorKeyframeTrack=ed;k.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new n(a,b,c);};k.VertexColors=2;k.VideoTexture=rg;k.WebGLCubeRenderTarget=Db;k.WebGLMultisampleRenderTarget=Zf;k.WebGLRenderTarget=Ha;k.WebGLRenderTargetCube=function(a,b,c){console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).");return new Db(a,c);};k.WebGLRenderer=ng;k.WebGLUtils=Xh;k.WireframeGeometry=Rc;k.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new ma(new Rc(a.geometry),new la({color:void 0!==b?b:16777215}));};k.WrapAroundEnding=2402;k.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Ra(a);};k.ZeroCurvatureEnding=2400;k.ZeroFactor=200;k.ZeroSlopeEnding=2401;k.ZeroStencilOp=0;k.sRGBEncoding=3001;Object.defineProperty(k,"__esModule",{value:!0});});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return k;
  });
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.2
*/
!function (o) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? o(require("jquery"), window, document) : o(jQuery, window, document);
}(function (o, t, i, e) {
  var s = [],
      l = function l() {
    return s.length ? s[s.length - 1] : null;
  },
      n = function n() {
    var o,
        t = !1;

    for (o = s.length - 1; o >= 0; o--) {
      s[o].$blocker && (s[o].$blocker.toggleClass("current", !t).toggleClass("behind", t), t = !0);
    }
  };

  o.modal = function (t, i) {
    var e, n;
    if (this.$body = o("body"), this.options = o.extend({}, o.modal.defaults, i), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), this.$blocker = null, this.options.closeExisting) for (; o.modal.isActive();) {
      o.modal.close();
    }
    if (s.push(this), t.is("a")) {
      if (n = t.attr("href"), this.anchor = t, /^#/.test(n)) {
        if (this.$elm = o(n), 1 !== this.$elm.length) return null;
        this.$body.append(this.$elm), this.open();
      } else this.$elm = o("<div>"), this.$body.append(this.$elm), e = function e(o, t) {
        t.elm.remove();
      }, this.showSpinner(), t.trigger(o.modal.AJAX_SEND), o.get(n).done(function (i) {
        if (o.modal.isActive()) {
          t.trigger(o.modal.AJAX_SUCCESS);
          var s = l();
          s.$elm.empty().append(i).on(o.modal.CLOSE, e), s.hideSpinner(), s.open(), t.trigger(o.modal.AJAX_COMPLETE);
        }
      }).fail(function () {
        t.trigger(o.modal.AJAX_FAIL);
        var i = l();
        i.hideSpinner(), s.pop(), t.trigger(o.modal.AJAX_COMPLETE);
      });
    } else this.$elm = t, this.anchor = t, this.$body.append(this.$elm), this.open();
  }, o.modal.prototype = {
    constructor: o.modal,
    open: function open() {
      var t = this;
      this.block(), this.anchor.blur(), this.options.doFade ? setTimeout(function () {
        t.show();
      }, this.options.fadeDuration * this.options.fadeDelay) : this.show(), o(i).off("keydown.modal").on("keydown.modal", function (o) {
        var t = l();
        27 === o.which && t.options.escapeClose && t.close();
      }), this.options.clickClose && this.$blocker.click(function (t) {
        t.target === this && o.modal.close();
      });
    },
    close: function close() {
      s.pop(), this.unblock(), this.hide(), o.modal.isActive() || o(i).off("keydown.modal");
    },
    block: function block() {
      this.$elm.trigger(o.modal.BEFORE_BLOCK, [this._ctx()]), this.$body.css("overflow", "hidden"), this.$blocker = o('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body), n(), this.options.doFade && this.$blocker.css("opacity", 0).animate({
        opacity: 1
      }, this.options.fadeDuration), this.$elm.trigger(o.modal.BLOCK, [this._ctx()]);
    },
    unblock: function unblock(t) {
      !t && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body), this.$blocker.remove(), this.$blocker = null, n(), o.modal.isActive() || this.$body.css("overflow", ""));
    },
    show: function show() {
      this.$elm.trigger(o.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = o('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker), this.options.doFade ? this.$elm.css({
        opacity: 0,
        display: "inline-block"
      }).animate({
        opacity: 1
      }, this.options.fadeDuration) : this.$elm.css("display", "inline-block"), this.$elm.trigger(o.modal.OPEN, [this._ctx()]);
    },
    hide: function hide() {
      this.$elm.trigger(o.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove();
      var t = this;
      this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, function () {
        t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()]);
      }) : this.$elm.hide(0, function () {
        t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()]);
      }), this.$elm.trigger(o.modal.CLOSE, [this._ctx()]);
    },
    showSpinner: function showSpinner() {
      this.options.showSpinner && (this.spinner = this.spinner || o('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show());
    },
    hideSpinner: function hideSpinner() {
      this.spinner && this.spinner.remove();
    },
    _ctx: function _ctx() {
      return {
        elm: this.$elm,
        $elm: this.$elm,
        $blocker: this.$blocker,
        options: this.options,
        $anchor: this.anchor
      };
    }
  }, o.modal.close = function (t) {
    if (o.modal.isActive()) {
      t && t.preventDefault();
      var i = l();
      return i.close(), i.$elm;
    }
  }, o.modal.isActive = function () {
    return s.length > 0;
  }, o.modal.getCurrent = l, o.modal.defaults = {
    closeExisting: !0,
    escapeClose: !0,
    clickClose: !0,
    closeText: "Close",
    closeClass: "",
    modalClass: "modal",
    blockerClass: "jquery-modal",
    spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
    showSpinner: !0,
    showClose: !0,
    fadeDuration: null,
    fadeDelay: 1
  }, o.modal.BEFORE_BLOCK = "modal:before-block", o.modal.BLOCK = "modal:block", o.modal.BEFORE_OPEN = "modal:before-open", o.modal.OPEN = "modal:open", o.modal.BEFORE_CLOSE = "modal:before-close", o.modal.CLOSE = "modal:close", o.modal.AFTER_CLOSE = "modal:after-close", o.modal.AJAX_SEND = "modal:ajax:send", o.modal.AJAX_SUCCESS = "modal:ajax:success", o.modal.AJAX_FAIL = "modal:ajax:fail", o.modal.AJAX_COMPLETE = "modal:ajax:complete", o.fn.modal = function (t) {
    return 1 === this.length && new o.modal(this, t), this;
  }, o(i).on("click.modal", 'a[rel~="modal:close"]', o.modal.close), o(i).on("click.modal", 'a[rel~="modal:open"]', function (t) {
    t.preventDefault(), o(this).modal();
  });
});
"use strict";

/*!
 * SlickQuiz jQuery Plugin
 * http://github.com/jewlofthelotus/SlickQuiz
 *
 * @updated October 25, 2014
 * @version 1.5.20
 *
 * @author Julie Cameron - http://www.juliecameron.com
 * @copyright (c) 2013 Quicken Loans - http://www.quickenloans.com
 * @license MIT
 */
(function ($) {
  $.slickQuiz = function (element, options) {
    var plugin = this,
        $element = $(element),
        _element = '#' + $element.attr('id'),
        defaults = {
      checkAnswerText: 'Check My Answer!',
      nextQuestionText: 'Next &raquo;',
      backButtonText: '',
      completeQuizText: '',
      tryAgainText: '',
      questionCountText: 'Question %current of %total',
      preventUnansweredText: 'You must select at least one answer.',
      questionTemplateText: '%count. %text',
      scoreTemplateText: '%score / %total',
      nameTemplateText: '<span>Quiz: </span>%name',
      skipStartButton: false,
      numberOfQuestions: null,
      randomSortQuestions: false,
      randomSortAnswers: false,
      preventUnanswered: false,
      disableScore: false,
      disableRanking: false,
      scoreAsPercentage: false,
      perQuestionResponseMessaging: true,
      perQuestionResponseAnswers: false,
      completionResponseMessaging: false,
      displayQuestionCount: true,
      // Deprecate?
      displayQuestionNumber: true,
      // Deprecate?
      animationCallbacks: {
        // only for the methods that have jQuery animations offering callback
        setupQuiz: function setupQuiz() {},
        startQuiz: function startQuiz() {},
        resetQuiz: function resetQuiz() {},
        checkAnswer: function checkAnswer() {},
        nextQuestion: function nextQuestion() {},
        backToQuestion: function backToQuestion() {},
        completeQuiz: function completeQuiz() {}
      },
      events: {
        onStartQuiz: function onStartQuiz(options) {},
        onCompleteQuiz: function onCompleteQuiz(options) {} // reserved: options.questionCount, options.score

      }
    },
        // Class Name Strings (Used for building quiz and for selectors)
    questionCountClass = 'questionCount',
        questionGroupClass = 'questions',
        questionClass = 'question',
        answersClass = 'answers',
        responsesClass = 'responses',
        completeClass = 'complete',
        correctClass = 'correctResponse',
        incorrectClass = 'incorrectResponse',
        correctResponseClass = 'correct',
        incorrectResponseClass = 'incorrect',
        checkAnswerClass = 'checkAnswer',
        nextQuestionClass = 'nextQuestion',
        lastQuestionClass = 'lastQuestion',
        backToQuestionClass = 'backToQuestion',
        tryAgainClass = 'tryAgain',
        // Sub-Quiz / Sub-Question Class Selectors
    _questionCount = '.' + questionCountClass,
        _questions = '.' + questionGroupClass,
        _question = '.' + questionClass,
        _answers = '.' + answersClass,
        _answer = '.' + answersClass + ' li',
        _responses = '.' + responsesClass,
        _response = '.' + responsesClass + ' li',
        _correct = '.' + correctClass,
        _correctResponse = '.' + correctResponseClass,
        _incorrectResponse = '.' + incorrectResponseClass,
        _checkAnswerBtn = '.' + checkAnswerClass,
        _nextQuestionBtn = '.' + nextQuestionClass,
        _prevQuestionBtn = '.' + backToQuestionClass,
        _tryAgainBtn = '.' + tryAgainClass,
        // Top Level Quiz Element Class Selectors
    _quizStarter = _element + ' .startQuiz',
        _quizName = _element + ' .quizName',
        _quizArea = _element + ' .quizArea',
        _quizResults = _element + ' .quizResults',
        _quizResultsCopy = _element + ' .quizResultsCopy',
        _quizHeader = _element + ' .quizHeader',
        _quizScore = _element + ' .quizScore',
        _quizLevel = _element + ' .quizLevel',
        // Top Level Quiz Element Objects
    $quizStarter = $(_quizStarter),
        $quizName = $(_quizName),
        $quizArea = $(_quizArea),
        $quizResults = $(_quizResults),
        $quizResultsCopy = $(_quizResultsCopy),
        $quizHeader = $(_quizHeader),
        $quizScore = $(_quizScore),
        $quizLevel = $(_quizLevel); // Reassign user-submitted deprecated options


    var depMsg = '';

    if (options && typeof options.disableNext != 'undefined') {
      if (typeof options.preventUnanswered == 'undefined') {
        options.preventUnanswered = options.disableNext;
      }

      depMsg += 'The \'disableNext\' option has been deprecated, please use \'preventUnanswered\' in it\'s place.\n\n';
    }

    if (options && typeof options.disableResponseMessaging != 'undefined') {
      if (typeof options.preventUnanswered == 'undefined') {
        options.perQuestionResponseMessaging = options.disableResponseMessaging;
      }

      depMsg += 'The \'disableResponseMessaging\' option has been deprecated, please use' + ' \'perQuestionResponseMessaging\' and \'completionResponseMessaging\' in it\'s place.\n\n';
    }

    if (options && typeof options.randomSort != 'undefined') {
      if (typeof options.randomSortQuestions == 'undefined') {
        options.randomSortQuestions = options.randomSort;
      }

      if (typeof options.randomSortAnswers == 'undefined') {
        options.randomSortAnswers = options.randomSort;
      }

      depMsg += 'The \'randomSort\' option has been deprecated, please use' + ' \'randomSortQuestions\' and \'randomSortAnswers\' in it\'s place.\n\n';
    }

    if (depMsg !== '') {
      if (typeof console != 'undefined') {
        console.warn(depMsg);
      } else {
        alert(depMsg);
      }
    } // End of deprecation reassignment


    plugin.config = $.extend(defaults, options); // Set via json option or quizJSON variable (see covid19SymptomsQuiz-config.js)

    var quizValues = plugin.config.json ? plugin.config.json : typeof quizJSON != 'undefined' ? quizJSON : null; // Get questions, possibly sorted randomly

    var questions = plugin.config.randomSortQuestions ? quizValues.questions.sort(function () {
      return Math.round(Math.random()) - 0.5;
    }) : quizValues.questions; // Count the number of questions

    var questionCount = questions.length; // Select X number of questions to load if options is set

    if (plugin.config.numberOfQuestions && questionCount >= plugin.config.numberOfQuestions) {
      questions = questions.slice(0, plugin.config.numberOfQuestions);
      questionCount = questions.length;
    } // some special private/internal methods


    var internal = {
      method: {
        // get a key whose notches are "resolved jQ deferred" objects; one per notch on the key
        // think of the key as a house key with notches on it
        getKey: function getKey(notches) {
          // returns [], notches >= 1
          var key = [];

          for (var i = 0; i < notches; i++) {
            key[i] = $.Deferred();
          }

          return key;
        },
        // put the key in the door, if all the notches pass then you can turn the key and "go"
        turnKeyAndGo: function turnKeyAndGo(key, go) {
          // key = [], go = function ()
          // when all the notches of the key are accepted (resolved) then the key turns and the engine (callback/go) starts
          $.when.apply(null, key).then(function () {
            go();
          });
        },
        // get one jQ
        getKeyNotch: function getKeyNotch(key, notch) {
          // notch >= 1, key = []
          // key has several notches, numbered as 1, 2, 3, ... (no zero notch)
          // we resolve and return the "jQ deferred" object at specified notch
          return function () {
            key[notch - 1].resolve(); // it is ASSUMED that you initiated the key with enough notches
          };
        }
      }
    };
    plugin.method = {
      // Sets up the questions and answers based on above array
      setupQuiz: function setupQuiz(options) {
        // use 'options' object to pass args
        var key, keyNotch, kN;
        key = internal.method.getKey(3); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        $quizName.hide().html(plugin.config.nameTemplateText.replace('%name', quizValues.info.name)).fadeIn(1000, kN(key, 1));
        $quizHeader.hide().prepend($('<div class="quizDescription">' + quizValues.info.main + '</div>')).fadeIn(1000, kN(key, 2));
        $quizResultsCopy.append(quizValues.info.results); // add retry button to results view, if enabled

        if (plugin.config.tryAgainText && plugin.config.tryAgainText !== '') {
          $quizResultsCopy.append('<p><a class="button ' + tryAgainClass + '" href="#">' + plugin.config.tryAgainText + '</a></p>');
        } // Setup questions


        var quiz = $('<ol class="' + questionGroupClass + '"></ol>'),
            count = 1; // Loop through questions object

        for (var i in questions) {
          if (questions.hasOwnProperty(i)) {
            var question = questions[i];
            var questionHTML = $('<li class="' + questionClass + '" id="question' + (count - 1) + '"></li>');

            if (plugin.config.displayQuestionCount) {
              questionHTML.append('<div class="' + questionCountClass + '">' + plugin.config.questionCountText.replace('%current', '<span class="current">' + count + '</span>').replace('%total', '<span class="total">' + questionCount + '</span>') + '</div>');
            }

            var formatQuestion = '';

            if (plugin.config.displayQuestionNumber) {
              formatQuestion = plugin.config.questionTemplateText.replace('%count', count).replace('%text', question.q);
            } else {
              formatQuestion = question.q;
            }

            questionHTML.append('<h3>' + formatQuestion + '</h3>'); // Count the number of true values

            var truths = 0;

            for (var i in question.a) {
              if (question.a.hasOwnProperty(i)) {
                answer = question.a[i];

                if (answer.correct) {
                  truths++;
                }
              }
            } // Now let's append the answers with checkboxes or radios depending on truth count


            var answerHTML = $('<ul class="' + answersClass + '"></ul>'); // Get the answers

            var answers = plugin.config.randomSortAnswers ? question.a.sort(function () {
              return Math.round(Math.random()) - 0.5;
            }) : question.a; // prepare a name for the answer inputs based on the question

            var selectAny = question.select_any ? question.select_any : false,
                forceCheckbox = question.force_checkbox ? question.force_checkbox : false,
                checkbox = truths > 1 && !selectAny || forceCheckbox,
                inputName = $element.attr('id') + '_question' + (count - 1),
                inputType = checkbox ? 'checkbox' : 'radio';

            if (count == quizValues.questions.length) {
              nextQuestionClass = nextQuestionClass + ' ' + lastQuestionClass;
            }

            for (var i in answers) {
              if (answers.hasOwnProperty(i)) {
                var answer = answers[i],
                    optionId = inputName + '_' + i.toString(); // If question has >1 true answers and is not a select any, use checkboxes; otherwise, radios

                var input = '<input id="' + optionId + '" name="' + inputName + '" type="' + inputType + '" /> ';
                var optionLabel = '<label for="' + optionId + '">' + answer.option + '</label>';
                var answerContent = $('<li></li>').append(input).append(optionLabel);
                answerHTML.append(answerContent);
              }
            } // Append answers to question


            questionHTML.append(answerHTML); // If response messaging is NOT disabled, add it

            if (plugin.config.perQuestionResponseMessaging || plugin.config.completionResponseMessaging) {
              // Now let's append the correct / incorrect response messages
              var responseHTML = $('<ul class="' + responsesClass + '"></ul>');
              responseHTML.append('<li class="' + correctResponseClass + '">' + question.correct + '</li>');
              responseHTML.append('<li class="' + incorrectResponseClass + '">' + question.incorrect + '</li>'); // Append responses to question

              questionHTML.append(responseHTML);
            } // Appends check answer / back / next question buttons


            if (plugin.config.backButtonText && plugin.config.backButtonText !== '') {
              questionHTML.append('<a href="#" class="button ' + backToQuestionClass + '">' + plugin.config.backButtonText + '</a>');
            }

            var nextText = plugin.config.nextQuestionText;

            if (plugin.config.completeQuizText && count == questionCount) {
              nextText = plugin.config.completeQuizText;
            } // If we're not showing responses per question, show next question button and make it check the answer too


            if (!plugin.config.perQuestionResponseMessaging) {
              questionHTML.append('<a href="#" class="button ' + nextQuestionClass + ' ' + checkAnswerClass + '">' + nextText + '</a>');
            } else {
              questionHTML.append('<a href="#" class="button ' + nextQuestionClass + '">' + nextText + '</a>');
              questionHTML.append('<a href="#" class="button ' + checkAnswerClass + '">' + plugin.config.checkAnswerText + '</a>');
            } // Append question & answers to quiz


            quiz.append(questionHTML);
            count++;
          }
        } // Add the quiz content to the page


        $quizArea.append(quiz); // Toggle the start button OR start the quiz if start button is disabled

        if (plugin.config.skipStartButton || $quizStarter.length == 0) {
          $quizStarter.hide();
          plugin.method.startQuiz.apply(this, [{
            callback: plugin.config.animationCallbacks.startQuiz
          }]); // TODO: determine why 'this' is being passed as arg to startQuiz method

          kN(key, 3).apply(null, []);
        } else {
          $quizStarter.fadeIn(500, kN(key, 3)); // 3d notch on key must be on both sides of if/else, otherwise key won't turn
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Starts the quiz (hides start button and displays first question)
      startQuiz: function startQuiz(options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        function start(options) {
          var firstQuestion = $(_element + ' ' + _questions + ' li').first();

          if (firstQuestion.length) {
            firstQuestion.fadeIn(500, function () {
              if (options && options.callback) options.callback();
            });
          }
        }

        if (plugin.config.skipStartButton || $quizStarter.length == 0) {
          start({
            callback: kN(key, 1)
          });
        } else {
          $quizStarter.fadeOut(300, function () {
            start({
              callback: kN(key, 1)
            }); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});

        if (plugin.config.events && plugin.config.events.onStartQuiz) {
          plugin.config.events.onStartQuiz.apply(null, []);
        }
      },
      // Resets (restarts) the quiz (hides results, resets inputs, and displays first question)
      resetQuiz: function resetQuiz(startButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        $quizResults.fadeOut(300, function () {
          $(_element + ' input').prop('checked', false).prop('disabled', false);
          $quizLevel.attr('class', 'quizLevel');
          $(_element + ' ' + _question).removeClass(correctClass).removeClass(incorrectClass).remove(completeClass);
          $(_element + ' ' + _answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
          $(_element + ' ' + _question + ',' + _element + ' ' + _responses + ',' + _element + ' ' + _response + ',' + _element + ' ' + _nextQuestionBtn + ',' + _element + ' ' + _prevQuestionBtn).hide();
          $(_element + ' ' + _questionCount + ',' + _element + ' ' + _answers + ',' + _element + ' ' + _checkAnswerBtn).show();
          $quizArea.append($(_element + ' ' + _questions)).show();
          kN(key, 1).apply(null, []);
          plugin.method.startQuiz({
            callback: plugin.config.animationCallbacks.startQuiz
          }, $quizResults); // TODO: determine why $quizResults is being passed
        });
        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Validates the response selection(s), displays explanations & next question button
      checkAnswer: function checkAnswer(checkButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(2); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var questionLI = $($(checkButton).parents(_question)[0]),
            answerLIs = questionLI.find(_answers + ' li'),
            answerSelects = answerLIs.find('input:checked'),
            questionIndex = parseInt(questionLI.attr('id').replace(/(question)/, ''), 10),
            answers = questions[questionIndex].a,
            selectAny = questions[questionIndex].select_any ? questions[questionIndex].select_any : false;
        answerLIs.addClass(incorrectResponseClass); // Collect the true answers needed for a correct response

        var trueAnswers = [];

        for (var i in answers) {
          if (answers.hasOwnProperty(i)) {
            var answer = answers[i],
                index = parseInt(i, 10);

            if (answer.correct) {
              trueAnswers.push(index);
              answerLIs.eq(index).removeClass(incorrectResponseClass).addClass(correctResponseClass);
            }
          }
        } // TODO: Now that we're marking answer LIs as correct / incorrect, we might be able
        // to do all our answer checking at the same time
        // NOTE: Collecting answer index for comparison aims to ensure that HTML entities
        // and HTML elements that may be modified by the browser / other scrips match up
        // Collect the answers submitted


        var selectedAnswers = [];
        answerSelects.each(function () {
          var id = $(this).attr('id');
          selectedAnswers.push(parseInt(id.replace(/(.*\_question\d{1,}_)/, ''), 10));
        });

        if (plugin.config.preventUnanswered && selectedAnswers.length === 0) {
          alert(plugin.config.preventUnansweredText);
          return false;
        } // Verify all/any true answers (and no false ones) were submitted


        var correctResponse = plugin.method.compareAnswers(trueAnswers, selectedAnswers, selectAny);

        if (correctResponse) {
          questionLI.addClass(correctClass);
        } else {
          questionLI.addClass(incorrectClass);
        } // Toggle appropriate response (either for display now and / or on completion)


        questionLI.find(correctResponse ? _correctResponse : _incorrectResponse).show(); // If perQuestionResponseMessaging is enabled, toggle response and navigation now

        if (plugin.config.perQuestionResponseMessaging) {
          $(checkButton).hide();

          if (!plugin.config.perQuestionResponseAnswers) {
            // Make sure answers don't highlight for a split second before they hide
            questionLI.find(_answers).hide({
              duration: 0,
              complete: function complete() {
                questionLI.addClass(completeClass);
              }
            });
          } else {
            questionLI.addClass(completeClass);
          }

          questionLI.find('input').prop('disabled', true);
          questionLI.find(_responses).show();
          questionLI.find(_nextQuestionBtn).fadeIn(300, kN(key, 1));
          questionLI.find(_prevQuestionBtn).fadeIn(300, kN(key, 2));
          if (!questionLI.find(_prevQuestionBtn).length) kN(key, 2).apply(null, []); // 2nd notch on key must be passed even if there's no "back" button
        } else {
          kN(key, 1).apply(null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn

          kN(key, 2).apply(null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Moves to the next question OR completes the quiz if on last question
      nextQuestion: function nextQuestion(nextButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var currentQuestion = $($(nextButton).parents(_question)[0]),
            nextQuestion = currentQuestion.next(_question),
            answerInputs = currentQuestion.find('input:checked'); // If response messaging has been disabled or moved to completion,
        // make sure we have an answer if we require it, let checkAnswer handle the alert messaging

        if (plugin.config.preventUnanswered && answerInputs.length === 0) {
          return false;
        }

        if (nextQuestion.length) {
          currentQuestion.fadeOut(300, function () {
            nextQuestion.find(_prevQuestionBtn).show().end().fadeIn(500, kN(key, 1));
            if (!nextQuestion.find(_prevQuestionBtn).show().end().length) kN(key, 1).apply(null, []); // 1st notch on key must be passed even if there's no "back" button
          });
        } else {
          kN(key, 1).apply(null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn

          plugin.method.completeQuiz({
            callback: plugin.config.animationCallbacks.completeQuiz
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Go back to the last question
      backToQuestion: function backToQuestion(backButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(2); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var questionLI = $($(backButton).parents(_question)[0]),
            responses = questionLI.find(_responses); // Back to question from responses

        if (responses.css('display') === 'block') {
          questionLI.find(_responses).fadeOut(300, function () {
            questionLI.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
            questionLI.find(_responses + ', ' + _response).hide();
            questionLI.find(_answers).show();
            questionLI.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
            questionLI.find('input').prop('disabled', false);
            questionLI.find(_answers).fadeIn(500, kN(key, 1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn

            questionLI.find(_checkAnswerBtn).fadeIn(500, kN(key, 2));
            questionLI.find(_nextQuestionBtn).hide(); // if question is first, don't show back button on question

            if (questionLI.attr('id') != 'question0') {
              questionLI.find(_prevQuestionBtn).show();
            } else {
              questionLI.find(_prevQuestionBtn).hide();
            }
          }); // Back to previous question
        } else {
          var prevQuestion = questionLI.prev(_question);
          questionLI.fadeOut(300, function () {
            prevQuestion.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
            prevQuestion.find(_responses + ', ' + _response).hide();
            prevQuestion.find(_answers).show();
            prevQuestion.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
            prevQuestion.find('input').prop('disabled', false);
            prevQuestion.find(_nextQuestionBtn).hide();
            prevQuestion.find(_checkAnswerBtn).show();

            if (prevQuestion.attr('id') != 'question0') {
              prevQuestion.find(_prevQuestionBtn).show();
            } else {
              prevQuestion.find(_prevQuestionBtn).hide();
            }

            prevQuestion.fadeIn(500, kN(key, 1));
            kN(key, 2).apply(null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});
      },
      // Hides all questions, displays the final score and some conclusive information
      completeQuiz: function completeQuiz(options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run

        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function

        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var score = $(_element + ' ' + _correct).length,
            displayScore = score;

        if (plugin.config.scoreAsPercentage) {
          displayScore = (score / questionCount).toFixed(2) * 100 + "%";
        }

        if (plugin.config.disableScore) {
          $(_quizScore).remove();
        } else {
          $(_quizScore + ' span').html(plugin.config.scoreTemplateText.replace('%score', displayScore).replace('%total', questionCount));
        }

        if (plugin.config.disableRanking) {
          $(_quizLevel).remove();
        } else {
          var levels = [quizValues.info.level1, // 80-100%
          quizValues.info.level2, // 60-79%
          quizValues.info.level3, // 40-59%
          quizValues.info.level4, // 20-39%
          quizValues.info.level5 // 0-19%
          ],
              levelRank = plugin.method.calculateLevel(score),
              levelText = $.isNumeric(levelRank) ? levels[levelRank] : '';
          $(_quizLevel + ' span').html(levelText);
          $(_quizLevel).addClass('level' + levelRank);
        }

        $quizArea.fadeOut(300, function () {
          // If response messaging is set to show upon quiz completion, show it now
          if (plugin.config.completionResponseMessaging) {
            $(_element + ' .button:not(' + _tryAgainBtn + '), ' + _element + ' ' + _questionCount).hide();
            $(_element + ' ' + _question + ', ' + _element + ' ' + _answers + ', ' + _element + ' ' + _responses).show();
            $quizResults.append($(_element + ' ' + _questions)).fadeIn(500, kN(key, 1));
          } else {
            $quizResults.fadeIn(500, kN(key, 1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
          }
        });
        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {});

        if (plugin.config.events && plugin.config.events.onCompleteQuiz) {
          plugin.config.events.onCompleteQuiz.apply(null, [{
            questionCount: questionCount,
            score: score
          }]);
        }
      },
      // Compares selected responses with true answers, returns true if they match exactly
      compareAnswers: function compareAnswers(trueAnswers, selectedAnswers, selectAny) {
        if (selectAny) {
          return $.inArray(selectedAnswers[0], trueAnswers) > -1;
        } else {
          // crafty array comparison (http://stackoverflow.com/a/7726509)
          return $(trueAnswers).not(selectedAnswers).length === 0 && $(selectedAnswers).not(trueAnswers).length === 0;
        }
      },
      // Calculates knowledge level based on number of correct answers
      calculateLevel: function calculateLevel(correctAnswers) {
        var percent = (correctAnswers / questionCount).toFixed(2),
            level = null;

        if (plugin.method.inRange(0, 0.20, percent)) {
          level = 4;
        } else if (plugin.method.inRange(0.21, 0.40, percent)) {
          level = 3;
        } else if (plugin.method.inRange(0.41, 0.60, percent)) {
          level = 2;
        } else if (plugin.method.inRange(0.61, 0.80, percent)) {
          level = 1;
        } else if (plugin.method.inRange(0.81, 1.00, percent)) {
          level = 0;
        }

        return level;
      },
      // Determines if percentage of correct values is within a level range
      inRange: function inRange(start, end, value) {
        return value >= start && value <= end;
      }
    };

    plugin.init = function () {
      // Setup quiz
      plugin.method.setupQuiz.apply(null, [{
        callback: plugin.config.animationCallbacks.setupQuiz
      }]); // Bind "start" button

      $quizStarter.on('click', function (e) {
        e.preventDefault();

        if (!this.disabled && !$(this).hasClass('disabled')) {
          plugin.method.startQuiz.apply(null, [{
            callback: plugin.config.animationCallbacks.startQuiz
          }]);
        }
      }); // Bind "try again" button

      $(_element + ' ' + _tryAgainBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.resetQuiz(this, {
          callback: plugin.config.animationCallbacks.resetQuiz
        });
      }); // Bind "check answer" buttons

      $(_element + ' ' + _checkAnswerBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.checkAnswer(this, {
          callback: plugin.config.animationCallbacks.checkAnswer
        });
      }); // Bind "back" buttons

      $(_element + ' ' + _prevQuestionBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.backToQuestion(this, {
          callback: plugin.config.animationCallbacks.backToQuestion
        });
      }); // Bind "next" buttons

      $(_element + ' ' + _nextQuestionBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.nextQuestion(this, {
          callback: plugin.config.animationCallbacks.nextQuestion
        });
      }); // Accessibility (WAI-ARIA).

      var _qnid = $element.attr('id') + '-name';

      $quizName.attr('id', _qnid);
      $element.attr({
        'aria-labelledby': _qnid,
        'aria-live': 'polite',
        'aria-relevant': 'additions',
        'role': 'form'
      });
      $(_quizStarter + ', [href = "#"]').attr('role', 'button');
    }; // move to next question without submitting


    function removeNextButton() {
      $('a.button.nextQuestion').hide();
      $element.find('input').on('change', function () {
        plugin.method.checkAnswer(this, {
          callback: plugin.config.animationCallbacks.checkAnswer
        });
        plugin.method.nextQuestion(this, {
          callback: plugin.config.animationCallbacks.nextQuestion
        });
        $(this).addClass('animated fadeOutLeft');
      });
    }

    $(document).ready(function () {
      removeNextButton();
    });
    plugin.init();
  };

  $.fn.slickQuiz = function (options) {
    return this.each(function () {
      if (undefined === $(this).data('slickQuiz')) {
        var plugin = new $.slickQuiz(this, options);
        $(this).data('slickQuiz', plugin);
      }
    });
  };
})(jQuery);
"use strict";

$(function () {
  // quiz logic
  // ========================
  $.modal.defaults.fadeDuration = 500;
  $.modal.defaults.fadeDelay = 0; // Symptoms Quiz

  $('#symptoms-quiz').on($.modal.OPEN, function () {
    $('body').removeClass('blurred').addClass('blurred');
  }).on($.modal.CLOSE, function () {
    $('body').removeClass('blurred');
  });
  $('#SymptomsQuiz').slickQuiz({
    skipStartButton: true,
    perQuestionResponseMessaging: false,
    preventUnanswered: true,
    preventUnansweredText: 'أخطار إجابة يعيشك',
    questionCountText: '%current/%total',
    questionTemplateText: '%text',
    json: {
      "info": {
        "name": "إرشادات حول الأعراض",
        "main": "<small><span>COVID-19</span>جاوب معانا عالأسئلة هاذم كانك شاك انو عندك الـ </small>",
        "results": "حسب الإجابات متعك :",
        "level1": "حط روحك في الحجر الذاتي، ابعد على الناس إلي قرابلك و إتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level2": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level3": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level4": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
        "level5": "تلهى بصحتك و إتصل بالرقم الأخضر كان حسيت عندك الأعراض هذه.<p class='green-num'>80 10 19 19</p>"
      },
      "questions": [{
        "q": "تكح الأيامات الفائتة ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "خشمك يجري ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "عندك وجيعة في الحلق ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "عندك السخانة ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }]
    }
  }); // Prevention Quiz

  $('#prevention-quiz').on($.modal.OPEN, function () {
    $('body').removeClass('blurred').addClass('blurred');
  }).on($.modal.CLOSE, function () {
    $('body').removeClass('blurred');
  });
  $('#PreventionQuiz').slickQuiz({
    skipStartButton: true,
    perQuestionResponseMessaging: false,
    preventUnanswered: true,
    preventUnansweredText: 'أخطار إجابة يعيشك',
    questionCountText: '%current/%total',
    questionTemplateText: '%text',
    json: {
      "info": {
        "name": "إرشادات حول الوقاية",
        "main": "<p>جاوب معانا عالأسلة هاذم باش تتعرف على حالتك</p>",
        "results": "حسب الإجابات متعك :",
        "level1": "هايل ياسر ، بالتزامك الإجراءات ، أنت تنقذ الناس من حولك.",
        "level2": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
        "level3": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
        "level4": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
        "level5": " أبدا في ممارسة المبادئ التوجيهية لمنظمة الصحة العالمية و وزارة الصحة."
      },
      "questions": [{
        "q": "تغسل يديك بعد ما تكح ولا تعطس ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "تغسل يديك عديد المرات في النهار ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "تستعمل في المطهر ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "تستعمل قناع الوجه كي تخرج ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }, {
        "q": "إتبع في الإرشادات الوقائية للوزارة الصحة ؟",
        "a": [{
          "option": "نعم",
          "correct": true
        }, {
          "option": "لا",
          "correct": false
        }]
      }]
    }
  }); // info popup logic
  // ========================

  $('#info-btn').on('click', function () {
    $(this).toggleClass('opened');
  });
});
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 50, 300
// 20, 250
//
var degToRad = THREE.Math.degToRad;
var cc = {
  fov: 90,
  aspectRatio: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 1000,
  p: {
    x: 0,
    y: 0,
    z: 500
  }
};
var rc = {
  antialias: true,
  alpha: true
};
var sc = {
  radius: 250,
  segments: 40,
  rings: 40
};
var gc = {
  p: {
    x: 0,
    y: 0,
    z: 0
  },
  r: {
    x: degToRad(-40),
    y: degToRad(-100),
    z: degToRad(0)
  }
}; // const textureUrl = 'assets/textures/globe_2k.png';

var textureUrl = '../assets/textures/water_8k.png';
var shaders = {
  earth: {
    uniforms: {
      'texture': {
        type: 't',
        value: null
      }
    },
    vertexShader: ['varying vec3 vNormal;', 'varying vec2 vUv;', 'void main() {', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', 'vNormal = normalize( normalMatrix * normal );', 'vUv = uv;', '}'].join('\n'),
    fragmentShader: ['uniform sampler2D texture;', 'varying vec3 vNormal;', 'varying vec2 vUv;', 'void main() {', 'vec3 diffuse = texture2D( texture, vUv ).xyz;', 'float intensity = 1.05 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) );', 'vec3 atmosphere = vec3( 1.0, 1.0, 1.0 ) * pow( intensity, 3.0 );', 'gl_FragColor = vec4( diffuse + atmosphere, 1.0 );', '}'].join('\n')
  },
  atmosphere: {
    uniforms: {},
    vertexShader: ['varying vec3 vNormal;', 'void main() {', 'vNormal = normalize( normalMatrix * normal );', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
    fragmentShader: ['varying vec3 vNormal;', 'void main() {', 'float intensity = pow( 0.8 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 12.0 );', 'gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;', '}'].join('\n')
  }
};

var WebGLContext = /*#__PURE__*/function () {
  function WebGLContext() {
    _classCallCheck(this, WebGLContext);

    this.initScene();
    this.initCamera();
    this.initRenderer();
  }

  _createClass(WebGLContext, [{
    key: "initScene",
    value: function initScene() {
      this.scene = new THREE.Scene();
    }
  }, {
    key: "initCamera",
    value: function initCamera() {
      this.camera = new THREE.PerspectiveCamera(cc.fov, cc.aspectRatio, cc.near, cc.far);
    }
  }, {
    key: "initRenderer",
    value: function initRenderer() {
      this.renderer = new THREE.WebGLRenderer({
        antialias: rc.antialias,
        alpha: rc.alpha
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.renderer.render(this.scene, this.camera);
    }
  }]);

  return WebGLContext;
}();

var Globe = /*#__PURE__*/function () {
  function Globe() {
    _classCallCheck(this, Globe);

    this.context = new WebGLContext();
    this.build(); // this.initEvents();

    this.test = 0;
  }

  _createClass(Globe, [{
    key: "build",
    value: function build() {
      // Set position and look at
      this.context.camera.position.set(cc.p.x, cc.p.y, cc.p.z);
      this.context.camera.zoom = 5;
      this.context.camera.updateProjectionMatrix();
      this.createGlobe(); // this.createAtmosphere();

      this.globe.position.y = -300; // this.atmosphere.position.y = 100;
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      // TODO: finish it
      this.mouseDown = false;
      this.mouseDownPosition = {
        x: 0,
        y: 0,
        z: 0
      };
      this.context.renderer.domElement.addEventListener('mousemove', function (event) {
        if (!_this.mouseDown) return;
        console.log(event.clientX);
        console.log(event.clientY);
      });
      this.context.renderer.domElement.addEventListener('mousedown', function (event) {
        _this.mouseDown = true;
      });
      this.context.renderer.domElement.addEventListener('mouseup', function (event) {
        _this.mouseDown = false;
      });
    }
  }, {
    key: "createGlobe",
    value: function createGlobe() {
      var _this2 = this;

      this.globe = new THREE.Group();
      this.context.scene.add(this.globe);
      var textureLoader = new THREE.TextureLoader();
      textureLoader.load(textureUrl, function (texture) {
        // Create sphere geometry
        var geometry = new THREE.SphereGeometry(sc.radius, sc.segments, sc.rings); // Prepare shaders

        var shader = shaders.earth;
        var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
        uniforms.texture.value = texture; // Map texture to the material

        var material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: shader.vertexShader,
          fragmentShader: shader.fragmentShader
        }); // Create mesh with sphere geometry

        var mesh = new THREE.Mesh(geometry, material);

        _this2.globe.add(mesh);
      }, undefined, function (err) {
        console.error(err);
      }); // this.globe.position.set(gc.p.x, gc.p.y, gc.p.z);

      this.globe.rotation.set(gc.r.x, gc.r.y, gc.r.z);
    }
  }, {
    key: "createAtmosphere",
    value: function createAtmosphere() {
      var geometry = new THREE.SphereGeometry(sc.radius, sc, sc.segments, sc.rings);
      var shader = shaders.atmosphere;
      var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
      var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });
      this.atmosphere = new THREE.Mesh(geometry, material);
      this.atmosphere.scale.set(1.4, 1.4, 1.4);
      this.globe.add(this.atmosphere);
    }
  }, {
    key: "animate",
    value: function animate() {
      /*this.globe.rotation.set(
          this.mouseDownPosition.x,
          this.mouseDownPosition.y,
          this.mouseDownPosition.z
      );*/
      // this.globe.rotation.x += 0.01;
      this.globe.rotation.y += degToRad(1);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.context.draw();
    }
  }, {
    key: "render",
    value: function render() {
      // this.animate();
      if (this.test < 200) {
        this.test += 1;
        this.draw();
      }

      requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return Globe;
}();

var globe = new Globe();
globe.render();
"use strict";

var API_BASE_URL = 'https://api.covid19.beecoop.co';
var STATS_PER_COUNTRY_ENDPOINT = '/stats?country=';
var COUNTRY = 'Tunisia';
$(document).ready(function () {
  $.ajax({
    url: API_BASE_URL + STATS_PER_COUNTRY_ENDPOINT + COUNTRY,
    method: "GET",
    dataType: "json"
  }).done(function (data) {
    var $cases_output = $('#cases .stat-value');
    var $recovered_output = $('#recovered .stat-value');
    var $deaths_output = $('#deaths .stat-value');
    var $loader = $("main .stat .loader"); // set stats data

    $cases_output.html(data.active);
    $recovered_output.html(data.recovered);
    $deaths_output.html(data.deaths); // display data with animation

    $loader.fadeOut(function () {
      $recovered_output.fadeIn(2000);
      $cases_output.fadeIn(2000);
      $deaths_output.fadeIn(2000);
    });
  }).fail(function (error) {
    console.log(JSON.stringify(error));
  });
});