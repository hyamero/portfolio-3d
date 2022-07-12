precision mediump float;

varying vec2 vUv;
varying float vWave;
uniform sampler2D uTexture;

void main() {
  float wave = vWave * 0.25;
  float r = texture2D(uTexture, vUv).r;
  float g = texture2D(uTexture, vUv).g;
  float b = texture2D(uTexture, vUv + wave).b;
  vec3 texture = vec3(r, g, b);
  gl_FragColor = vec4(texture, 1.);
}