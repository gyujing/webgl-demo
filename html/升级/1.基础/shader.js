const vertexShaderSource = `
  attribute vec4 a_pos;
  void main(){
    gl_Position =  a_pos;
  }
` 


const fragShaderSource = `
 void main(){
  gl_FragColor = vec4(0.4,0.0,0.0,1.0);
 }
`

export {
  vertexShaderSource,
  fragShaderSource
}
