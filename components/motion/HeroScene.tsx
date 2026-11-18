'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroScene() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const isSoftwareGl = (() => {
            const probeCanvas = document.createElement('canvas');
            const gl = probeCanvas.getContext('webgl2');
            if (!gl) return true;
            const ext = gl.getExtension('WEBGL_debug_renderer_info');
            const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
            const gpu = String(gl.getParameter(param));
            gl.getExtension('WEBGL_lose_context')?.loseContext();
            return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
        })();

        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || 680;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
        camera.position.set(0, 0, 5.8);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            antialias: !isSoftwareGl,
            alpha: true,
            powerPreference: 'high-performance',
        });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.15;
        renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);

        container.appendChild(renderer.domElement);

        const ambient = new THREE.AmbientLight(0x8b5cf6, 0.45);
        scene.add(ambient);

        const keyLight = new THREE.PointLight(0xc4b5fd, 14, 15, 1.5);
        keyLight.position.set(2.5, 2.8, 3.2);
        scene.add(keyLight);

        const rimLight = new THREE.PointLight(0x6d28d9, 12, 14, 1.5);
        rimLight.position.set(-2.8, -1.8, 2.4);
        scene.add(rimLight);

        const sculptureGroup = new THREE.Group();
        scene.add(sculptureGroup);

        const updateResponsivePlacement = (viewportW: number) => {
            if (viewportW >= 1024) {
                sculptureGroup.position.x = 1.48;
                sculptureGroup.scale.setScalar(1.08);
            } else if (viewportW >= 768) {
                sculptureGroup.position.x = 0.95;
                sculptureGroup.scale.setScalar(0.92);
            } else {
                sculptureGroup.position.x = 0.25;
                sculptureGroup.scale.setScalar(0.76);
            }
        };
        updateResponsivePlacement(width);

        const knotGeo = new THREE.TorusKnotGeometry(
            1.36,
            0.43,
            isSoftwareGl ? 84 : 156,
            isSoftwareGl ? 16 : 26,
            2,
            3
        );

        const wireframeMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0x9333ea),
            wireframe: true,
            transparent: true,
            opacity: width < 768 ? 0.32 : 0.56,
        });
        const wireframeMesh = new THREE.Mesh(knotGeo, wireframeMat);
        sculptureGroup.add(wireframeMesh);

        const outerWireGeo = new THREE.TorusKnotGeometry(
            1.375,
            0.445,
            isSoftwareGl ? 48 : 96,
            14,
            2,
            3
        );
        const outerWireMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0xc4b5fd),
            wireframe: true,
            transparent: true,
            opacity: width < 768 ? 0.14 : 0.24,
        });
        const outerWireMesh = new THREE.Mesh(outerWireGeo, outerWireMat);
        sculptureGroup.add(outerWireMesh);

        const innerCoreMat = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x090714),
            metalness: 0.15,
            roughness: 0.45,
            transparent: true,
            opacity: width < 768 ? 0.45 : 0.72,
        });
        const innerCoreMesh = new THREE.Mesh(knotGeo, innerCoreMat);
        innerCoreMesh.scale.setScalar(0.96);
        sculptureGroup.add(innerCoreMesh);

        const orbitGeo = new THREE.TorusGeometry(2.12, 0.006, 8, 120);
        const orbitMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0xa78bfa),
            transparent: true,
            opacity: width < 768 ? 0.14 : 0.26,
        });
        const orbitRing = new THREE.Mesh(orbitGeo, orbitMat);
        orbitRing.rotation.x = Math.PI * 0.36;
        orbitRing.rotation.y = Math.PI * 0.14;
        sculptureGroup.add(orbitRing);

        if (!isSoftwareGl) {
            renderer.compile(scene, camera);
        }

        let pointerX = 0;
        let pointerY = 0;
        let scrollProgress = 0;

        const onPointerMove = (e: PointerEvent) => {
            pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
            pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
        };

        const onScroll = () => {
            const heroLimit = Math.max(window.innerHeight, 700);
            scrollProgress = Math.min(1, Math.max(0, window.scrollY / heroLimit));
        };

        if (!prefersReducedMotion) {
            window.addEventListener('pointermove', onPointerMove, { passive: true });
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        const handleResize = () => {
            if (!container) return;
            const w = container.clientWidth || window.innerWidth;
            const h = container.clientHeight || 680;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            updateResponsivePlacement(w);
            wireframeMat.opacity = w < 768 ? 0.32 : 0.56;
            outerWireMat.opacity = w < 768 ? 0.14 : 0.24;
            innerCoreMat.opacity = w < 768 ? 0.45 : 0.72;
            orbitMat.opacity = w < 768 ? 0.14 : 0.26;
        };
        window.addEventListener('resize', handleResize);

        let frameId = 0;
        let disposed = false;
        const timer = new THREE.Timer();

        function afterDraw(cb: () => void) {
            const gl = renderer.getContext() as WebGL2RenderingContext;
            const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
            gl.flush();
            const poll = () => {
                if (disposed) return;
                const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
                if (state === gl.UNSIGNALED) {
                    frameId = window.setTimeout(poll, 5);
                } else {
                    if (sync) gl.deleteSync(sync);
                    frameId = window.setTimeout(cb, 80);
                }
            };
            frameId = window.setTimeout(poll, 5);
        }

        function renderFrame() {
            if (disposed) return;

            timer.update();
            
            const delta = Math.min(timer.getDelta(), 0.1);
            const elapsed = timer.getElapsed();

            if (!prefersReducedMotion) {
                sculptureGroup.rotation.y = THREE.MathUtils.damp(
                    sculptureGroup.rotation.y,
                    elapsed * 0.16 + pointerX * 0.35 + scrollProgress * 0.75,
                    2.6,
                    delta
                );
                sculptureGroup.rotation.x = THREE.MathUtils.damp(
                    sculptureGroup.rotation.x,
                    0.18 + pointerY * 0.22 - scrollProgress * 0.28,
                    2.6,
                    delta
                );
                sculptureGroup.position.y = THREE.MathUtils.damp(
                    sculptureGroup.position.y,
                    Math.sin(elapsed * 0.8) * 0.08 - scrollProgress * 0.32,
                    3.0,
                    delta
                );
                orbitRing.rotation.z += delta * 0.1;
            }

            renderer.render(scene, camera);

            if (!prefersReducedMotion) {
                if (isSoftwareGl) {
                    afterDraw(renderFrame);
                } else {
                    frameId = requestAnimationFrame(renderFrame);
                }
            }
        }

        renderFrame();

        return () => {
            disposed = true;
            cancelAnimationFrame(frameId);
            clearTimeout(frameId);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', handleResize);

            knotGeo.dispose();
            wireframeMat.dispose();
            outerWireGeo.dispose();
            outerWireMat.dispose();
            innerCoreMat.dispose();
            orbitGeo.dispose();
            orbitMat.dispose();

            renderer.dispose();
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            aria-hidden="true"
            className="w-full h-full select-none pointer-events-none"
        />
    );
}