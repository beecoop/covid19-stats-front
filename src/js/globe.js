

const degToRad = THREE.Math.degToRad;

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
                y: 0,
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



// const textureUrl = 'assets/textures/globe_2k.png';
const textureUrl = '../assets/textures/water_8k.png';

const shaders = {
    earth : {
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
            'float intensity = 1.05 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) );',
            'vec3 atmosphere = vec3( 1.0, 1.0, 1.0 ) * pow( intensity, 3.0 );',
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


class WebGLContext {
    constructor() {
        this.initScene();
        this.initCamera();
        this.initRenderer();
    }
    initScene() {
        this.scene = new THREE.Scene();
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera( cc.fov, cc.aspectRatio , cc.near, cc.far );
    }
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer( { antialias: rc.antialias, alpha: rc.alpha } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
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
        this.initAnimations();
        // this.initEvents();
        this.test = 0;
    }
    testing() {
        cc.p = {
            x: 0,
            y: 0,
            z: 400
        };
        gc.p = {
            x: 0,
            y: 0,
            z: 0
        };
        gc.r = {
            x: degToRad(20),
            y: 0,
            z: 0
        };
    }
    testing_1() {
        cc.p = {
            x: 0,
            y: 0,
            z: 500
        };
        cc.r = {
            x: degToRad(-4),
            y: 0,
            z: 0
        };
        cc.zoom = 8;
        gc.p = {
            x: 0,
            y: -320,
            z: 0
        };
        gc.r = {
            x: degToRad(-45),
            y: degToRad(-100),
            z: degToRad(0)
        };
    }
    build() {

        // Set position and look at
        this.context.camera.position.set( cc.p.x, cc.p.y, cc.p.z );
        this.context.camera.rotation.set( cc.r.x, cc.r.y, cc.r.z );
        this.context.camera.zoom = cc.zoom;
        this.context.camera.updateProjectionMatrix();


        this.createGlobe();
        // this.createAtmosphere();

        // this.globe.position.y = 200;
        // this.atmosphere.position.y = 200;


    }
    initEvents() {
        // TODO: finish it
        this.mouseDown = false;
        this.mouseDownPosition = {
            x: 0,
            y: 0,
            z: 0
        };
        this.context.renderer.domElement.addEventListener( 'mousemove', (event) => {
            if (!this.mouseDown)
                return;

            console.log(event.clientX);
            console.log(event.clientY);
        } );
        this.context.renderer.domElement.addEventListener( 'mousedown', (event) => {
            this.mouseDown = true;
        } );
        this.context.renderer.domElement.addEventListener( 'mouseup', (event) => {
            this.mouseDown = false;
        } );
    }
    createGlobe() {

        this.globe = new THREE.Group();
        this.context.scene.add(this.globe);

        let textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            textureUrl,
            ( texture ) => {
                // Create sphere geometry
                const geometry = new THREE.SphereGeometry( sc.radius, sc.segments, sc.rings );

                // Prepare shaders
                const shader = shaders.earth;
                let uniforms = THREE.UniformsUtils.clone( shader.uniforms );
                uniforms.texture.value = texture;

                // Map texture to the material
                const material = new THREE.ShaderMaterial( {
                    uniforms: uniforms,
                    vertexShader: shader.vertexShader,
                    fragmentShader: shader.fragmentShader
                } );

                // Create mesh with sphere geometry
                const mesh = new THREE.Mesh( geometry, material );
                this.globe.add(mesh);
            },
            undefined,
            ( err ) => {
                console.error(err);
            }
        );

        this.globe.position.set(gc.p.x, gc.p.y, gc.p.z);
        this.globe.rotation.set(gc.r.x, gc.r.y, gc.r.z);

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
    initAnimations() {

        let ease = Power2.out;
        ease = Sine.easeIn;

        this.timeline = new TimelineMax();

        // animation 0
        // change camera pos
        this.timeline.to( animationsCurrent.cc.p, 2, {
            x: animationsTargets["0"].cc.p.x,
            y: animationsTargets["0"].cc.p.y,
            z: animationsTargets["0"].cc.p.z,
            ease: ease
        }, 'init' );

        // change globe rotation
        this.timeline.to( animationsCurrent.gc.r, 2, {
            x: animationsTargets["0"].gc.r.x,
            y: animationsTargets["0"].gc.r.y,
            z: animationsTargets["0"].gc.r.z,
            ease: ease
        }, 'init' );


        // animation 1
        // change camera position
        this.timeline.to( animationsCurrent.cc.p, 2, {
            x: animationsTargets["1"].cc.p.x,
            y: animationsTargets["1"].cc.p.y,
            z: animationsTargets["1"].cc.p.z,
            ease: ease
        }, 'zoom' );

        // change camera rotation
        this.timeline.to( animationsCurrent.cc.r, 2, {
            x: animationsTargets["1"].cc.r.x,
            y: animationsTargets["1"].cc.r.y,
            z: animationsTargets["1"].cc.r.z,
            ease: ease
        }, 'zoom' );

        // change camera zoom
        this.timeline.to( animationsCurrent.cc, 2, { zoom: animationsTargets["1"].cc.zoom, ease: ease }, 'zoom' );

        // change globe position
        this.timeline.to( animationsCurrent.gc.p, 2, {
            x: animationsTargets["1"].gc.p.x,
            y: animationsTargets["1"].gc.p.y,
            z: animationsTargets["1"].gc.p.z,
            ease: ease
        }, 'zoom' );

        // change globe rotation
        this.timeline.to( animationsCurrent.gc.r, 2, {
            x: animationsTargets["1"].gc.r.x,
            y: animationsTargets["1"].gc.r.y,
            z: animationsTargets["1"].gc.r.z,
            ease: ease
        }, 'zoom' );
    }
    animate() {
        /*this.globe.rotation.set(
            this.mouseDownPosition.x,
            this.mouseDownPosition.y,
            this.mouseDownPosition.z
        );*/
        // this.globe.rotation.x += 0.01;
        this.globe.rotation.y -= degToRad(0.5);
        // animationsCurrent.cc.p.z += ( animationsTargets["0"].cc.p.z - animationsCurrent.cc.p.z ) * 0.05;
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
        if (this.test < 200) {
            // this.test += 1;
            this.draw();
        }
        requestAnimationFrame( this.render.bind( this ) );
    }
}


let globe = new Globe();
globe.render();

