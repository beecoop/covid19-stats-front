

const degToRad = THREE.Math.degToRad;

const ad = {
    delay: 2,
    first: 2,
    second: 1.5
};

const mtWidth = 1366;

const cc = {
    fov: 90,
    aspectRatio: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 1000,
    p: {
        x: 0,
        y: 0,
        z: 1000
    },
    r: {
        x: 0,
        y: 0,
        z: 0
    },
    zoom: 1
};

const rc = {
    antialias: true,
    alpha: true
};

const sc = {
    radius: 250,
    segments: 40,
    rings: 40
};

const gc = {
    p: {
        x: 0,
        y: 0,
        z: 0
    },
    r: {
        x: 0,
        y: 0,
        z: 0
    }
};

const animationsTargets = {
    0: {
        cc: {
            p: {
                x: 0,
                y: 0,
                z: 400
            }
        },
        gc: {
            p: {
                x: 0,
                y: 0,
                z: 0
            },
            r: {
                x: degToRad(20),
                y: degToRad(-25),
                z: 0
            }
        }
    },
    1: {
        cc: {
            p: {
                x: 0,
                y: 0,
                z: 500
            },
            r: {
                x: degToRad(-4),
                y: 0,
                z: 0
            },
            zoom: 8
        },
        gc: {
            p: {
                x: 0,
                y: -320,
                z: 0
            },
            r: {
                x: degToRad(-45),
                y: degToRad(-100),
                z: degToRad(0)
            }
        }
    }
};

let animationsCurrent = {
    cc: cc,
    gc: gc
    // cc: Object.assign(cc, animationsTargets["1"].cc),
    // gc: Object.assign(gc, animationsTargets["1"].gc)
};

const textureUrl = '../assets/textures/water_8k.jpg';
const textureMaskUrl = '../assets/textures/tunis.jpg';

const shaders = {
    earth : {
        uniforms: {
            'texture': { type: 't', value: null },
            'sea': { type: 'vec3', value: []},
            'ground': { type: 'vec3', value: []}
        },
        vertexShader: [
            'varying vec3 vNormal;',
            'varying vec2 vUv;',
            'void main() {',
            'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            'vNormal = normalize( normalMatrix * normal );',
            'vUv = uv;',
            '}'
        ].join('\n'),
        fragmentShader: [
            'uniform sampler2D texture;',
            'uniform vec3 sea;',
            'uniform vec3 ground;',
            'varying vec3 vNormal;',
            'varying vec2 vUv;',
            'void main() {',
            'vec3 diffuse = texture2D( texture, vUv ).xyz;',
            'if (diffuse.r < 0.5 && diffuse.g < 0.5 && diffuse.b < 0.5) {',
            'float average = (diffuse.r + diffuse.g + diffuse.b) / 3.0;',
            'diffuse = (1.0 - average) * ground;',
            '} else {',
            'diffuse = diffuse * sea;',
            '}',
            'float intensity = 1.05 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) );',
            'vec3 atmosphere = vec3( 1.0, 1.0, 1.0 ) * pow( intensity * 0.6, 3.0 );',
            'gl_FragColor = vec4( diffuse + atmosphere, 1.0 );',
            '}'
        ].join('\n')
    },
    mask : {
        uniforms: {
            'texture': { type: 't', value: null }
        },
        vertexShader: [
            'varying vec3 vNormal;',
            'varying vec2 vUv;',
            'void main() {',
            'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            'vNormal = normalize( normalMatrix * normal );',
            'vUv = uv;',
            '}'
        ].join('\n'),
        fragmentShader: [
            'uniform sampler2D texture;',
            'varying vec3 vNormal;',
            'varying vec2 vUv;',
            'void main() {',
            'vec3 diffuse = texture2D( texture, vUv ).xyz;',
            'if (diffuse.r > 0.5 && diffuse.g > 0.5 && diffuse.b > 0.5) {',
            'discard;',
            '}',
            'float intensity = 1.05 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) );',
            'vec3 atmosphere = vec3( 1.0, 1.0, 1.0 ) * pow( intensity * 0.6, 3.0 );',
            'gl_FragColor = vec4( diffuse + atmosphere, 1.0 );',
            '}'
        ].join('\n')
    },
    atmosphere : {
        uniforms: {},
        vertexShader: [
            'varying vec3 vNormal;',
            'void main() {',
            'vNormal = normalize( normalMatrix * normal );',
            'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            '}'
        ].join('\n'),
        fragmentShader: [
            'varying vec3 vNormal;',
            'void main() {',
            'float intensity = pow( 0.8 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 12.0 );',
            'gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;',
            '}'
        ].join('\n')
    }
};

const mapSeaColor = 0x578DD2;
const mapGroundColor = 0xCED0D2;


class WebGLContext {
    constructor() {
        this.initScene();
        this.initCamera();
        // this.initLighting();
        this.initRenderer();
    }
    initScene() {
        this.scene = new THREE.Scene();
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera( cc.fov, cc.aspectRatio , cc.near, cc.far );
    }
    initLighting() {
        const light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 1, 1 ).normalize();
        this.scene.add(light);
    }
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer( { antialias: rc.antialias, alpha: rc.alpha } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.draw();
    }
    draw() {
        this.renderer.render( this.scene, this.camera );
    }
}


class Globe {
    constructor() {
        this.context = new WebGLContext();
        // this.testing();
        this.build();
        // this.initEvents();
        this.test = 0;
    }
    build() {

        // Set position and look at
        this.context.camera.position.set( cc.p.x, cc.p.y, cc.p.z );
        this.context.camera.rotation.set( cc.r.x, cc.r.y, cc.r.z );
        this.context.camera.zoom = cc.zoom;
        this.context.camera.updateProjectionMatrix();

        this.createGlobe();
        // this.createAtmosphere();

    }
    createGlobe() {

        this.globe = new THREE.Group();
        this.context.scene.add(this.globe);

        // Load map texture
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            textureUrl,
            ( texture ) => {
                // Create sphere geometry
                const geometry = new THREE.SphereGeometry( sc.radius, sc.segments, sc.rings );

                // Prepare shaders
                const shader = shaders.earth;
                const uniforms = THREE.UniformsUtils.clone( shader.uniforms );
                uniforms.texture.value = texture;
                uniforms.sea.value = new THREE.Color(mapSeaColor);
                uniforms.ground.value = new THREE.Color(mapGroundColor);

                // Map texture to the material
                const material = new THREE.ShaderMaterial( {
                    uniforms: uniforms,
                    vertexShader: shader.vertexShader,
                    fragmentShader: shader.fragmentShader
                } );

                // Create mesh with sphere geometry
                const mesh = new THREE.Mesh( geometry, material );
                this.globe.add(mesh);


                // Load map mask texture
                const textureMaskLoader = new THREE.TextureLoader();
                textureMaskLoader.load(
                    textureMaskUrl,
                    ( texture ) => {
                        // Prepare shaders
                        const shader = shaders.mask;
                        const uniforms = THREE.UniformsUtils.clone( shader.uniforms );
                        uniforms.texture.value = texture;

                        // Map texture to the material
                        const material = new THREE.ShaderMaterial( {
                            uniforms: uniforms,
                            vertexShader: shader.vertexShader,
                            fragmentShader: shader.fragmentShader
                        } );

                        // Create mesh with sphere geometry
                        const mesh = new THREE.Mesh( geometry, material );
                        const scale = 1;
                        mesh.scale.set(scale, scale, scale);
                        this.globe.add(mesh);

                        this.startAnimations();
                    },
                    undefined,
                    ( err ) => {
                        console.error(err);
                    }
                );

            },
            undefined,
            ( err ) => {
                console.error(err);
            }
        );

    }
    createAtmosphere() {

        const geometry = new THREE.SphereGeometry( sc.radius*1.3, sc, sc.segments, sc.rings );

        const shader = shaders.atmosphere;
        const uniforms = THREE.UniformsUtils.clone( shader.uniforms );

        const material = new THREE.ShaderMaterial( {
            uniforms: uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
            side: THREE.BackSide,
            blending: THREE.NormalBlending,
            transparent: true
        } );

        this.atmosphere = new THREE.Mesh( geometry, material );
        // this.atmosphere.scale.set( 1, 1, 1 );
        this.context.scene.add( this.atmosphere );

    }
    startAnimations() {

        const ease = Sine.easeIn;
        this.animCompleted = false;

        this.timeline = new TimelineMax({
            delay: ad.delay,
            onComplete: () => {
                this.animCompleted = true;
            }
        });

        // first animation
        // change camera pos
        this.timeline.to( animationsCurrent.cc.p, ad.first, {
            x: animationsTargets["0"].cc.p.x,
            y: animationsTargets["0"].cc.p.y,
            z: animationsTargets["0"].cc.p.z,
            ease: ease
        }, 'animation1' );

        // change globe rotation
        this.timeline.to( animationsCurrent.gc.r, ad.first, {
            x: animationsTargets["0"].gc.r.x,
            y: animationsTargets["0"].gc.r.y,
            z: animationsTargets["0"].gc.r.z,
            ease: ease
        }, 'animation1' );


        // animation 2
        // change camera position
        this.timeline.to( animationsCurrent.cc.p, ad.second, {
            x: animationsTargets["1"].cc.p.x,
            y: animationsTargets["1"].cc.p.y,
            z: animationsTargets["1"].cc.p.z,
            ease: ease
        }, 'animation2' );

        // change camera rotation
        this.timeline.to( animationsCurrent.cc.r, ad.second, {
            x: animationsTargets["1"].cc.r.x,
            y: animationsTargets["1"].cc.r.y,
            z: animationsTargets["1"].cc.r.z,
            ease: ease
        }, 'animation2' );

        // change camera zoom
        this.timeline.to( animationsCurrent.cc, ad.second, { zoom: animationsTargets["1"].cc.zoom, ease: ease }, 'animation2' );

        // change globe position
        this.timeline.to( animationsCurrent.gc.p, ad.second, {
            x: animationsTargets["1"].gc.p.x,
            y: animationsTargets["1"].gc.p.y,
            z: animationsTargets["1"].gc.p.z,
            ease: ease
        }, 'animation2' );

        // change globe rotation
        this.timeline.to( animationsCurrent.gc.r, ad.second, {
            x: animationsTargets["1"].gc.r.x,
            y: animationsTargets["1"].gc.r.y,
            z: animationsTargets["1"].gc.r.z,
            ease: ease
        }, 'animation2' );
    }
    animate() {

        this.context.camera.position.set( animationsCurrent.cc.p.x, animationsCurrent.cc.p.y, animationsCurrent.cc.p.z );
        this.context.camera.rotation.set( animationsCurrent.cc.r.x, animationsCurrent.cc.r.y, animationsCurrent.cc.r.z );
        this.context.camera.zoom = animationsCurrent.cc.zoom;
        this.context.camera.updateProjectionMatrix();

        this.globe.position.set( animationsCurrent.gc.p.x, animationsCurrent.gc.p.y, animationsCurrent.gc.p.z );
        this.globe.rotation.set( animationsCurrent.gc.r.x, animationsCurrent.gc.r.y, animationsCurrent.gc.r.z );

        // TODO: stop drawing when animation is negligible or minuscule
    }
    draw() {
        this.context.draw();
    }
    render() {
        this.animate();
        this.draw();
        if (this.animCompleted) {
            console.log('Finished animations');
            fadeInContentAnimation();
            return;
        }
        requestAnimationFrame( this.render.bind( this ) );
    }
}



if (window.innerWidth > mtWidth) {
    const globe = new Globe();

    globe.render();

    window.addEventListener('resize', function () {
        globe.context.onWindowResize();
    });
}


