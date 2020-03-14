

const cc = {
    fov: 50,
    aspectRatio: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 1000,
    p: {
        x: 0,
        y: 300,
        z: 400
    },
};

const rc = {
    antialias: true,
    alpha: false
};

const sc = {
    radius: 250,
    segments: 40,
    rings: 40
};

const gc = {
    r: {
        x: -0.5,
        y: Math.PI + 1.35,
        z: 0
    }
};

const textureUrl = 'assets/textures/globe_2k.png';

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


class Cube {
    constructor() {
        this.context = new WebGLContext();
        this.build();
    }
    build() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.obj = new THREE.Mesh( geometry, material );

        this.context.scene.add( this.obj );
        this.context.camera.position.z = 5;
    }
    animate() {
        this.obj.rotation.x += 0.01;
        this.obj.rotation.y += 0.01;
    }
    draw() {
        this.context.draw();
    }
    render() {
        this.animate();
        this.draw();
        requestAnimationFrame( this.render.bind( this ) );
    }

}


class Globe {
    constructor() {
        this.context = new WebGLContext();
        this.build();
    }
    build() {
        this.globe = new THREE.Group();
        this.context.scene.add(this.globe);
        this.createSphere();

        // Set position and look at
        this.context.camera.position.set(cc.p.x, cc.p.y, cc.p.z);
    }
    createSphere() {

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

        this.globe.rotation.set(gc.r.x, gc.r.y, gc.r.z);

    }
    createSphere_old() {

        // Create sphere geometry
        const geometry = new THREE.SphereGeometry( sc.radius, sc.segments, sc.rings );

        // Prepare shaders
        // let shader = shaders.earth;
        // let uniforms = THREE.UniformsUtils.clone( shader.uniforms );

        // Create Sphere material
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

        // Create mesh with sphere geometry
        const mesh = new THREE.Mesh( geometry, material );
        this.globe.add(mesh);
    }
    animate() {
        this.globe.rotation.x += 0.01;
        this.globe.rotation.y += 0.01;
    }
    draw() {
        this.context.draw();
    }
    render() {
        // this.animate();
        this.draw();
        requestAnimationFrame( this.render.bind( this ) );
    }
}

// let cube = new Cube();
// cube.render();


let globe = new Globe();
globe.render();

