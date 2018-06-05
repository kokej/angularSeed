import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  camera;
  scene; 
  renderer;
  geometry; 
  material; 
  mesh;

  init() {

      this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
      this.camera.position.z = 1;

      this.scene = new THREE.Scene();

      this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
      this.material = new THREE.MeshNormalMaterial();

      this.mesh = new THREE.Mesh( this.geometry, this.material );
      this.scene.add( this.mesh );

      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( this.renderer.domElement );

  }

  animate() {

      requestAnimationFrame( this.animate.bind(this) );

      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;

      this.renderer.render( this.scene, this.camera );

  }


  ngOnInit() {
    this.init();
    this.animate();
  }

}
