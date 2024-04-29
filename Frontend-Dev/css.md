





```html
<body style="background-color:powderblue;">
```




### Text:
  1. Color: 
  2. direction: rtl ltr
  3. line-height:150%, 3em, 2.5, normal
  4. white-space:
  5. letter-spacing 
  6. word-spacing ;
  7. vertical-align 
  8. text-align: start, end, center, justify
  9. text-decoration: underline overline #FF3028 ;wavy 
  10. text-indent : 0, 30%, -3em
  11. text-shadow: 1px 1px 2px pink
text-transform : none,lowercase,uppercase

### Text-font:
  1. font : 1.2em "Fira Sans", sans-serif;
  2. font-family:Georgia, serif; 1.2em
  3. font-size: 1.2em
  4. font-style : normal, italic, oblique.
  5. font-variant: no-common-ligatures proportional-nums
  6. font-weight: 100, bold,lighter
  7. H1.oblique{ or h2.italic

### Border:
  1. Short Hand:
    border: thick double #32a1ce;4mm ridge rgba(211, 220, 50, .6);
    border-bottom : border-top : border-left  : same
  2. Types:
    border-color: red rgba(170, 50, 220, .6) green;
    border-width: 2ex 1.25ex 0.5ex thick midium  ;
    border-style: none, dotted, dashed, double, solid ,inset, hidden, groove, inset, outset, ridge-like chockletbar edges 
    Css3:--
    border-radius  : 30px, 20px 30px 10px 15px; 
    Border-bottom-right-radius:
  
  Order : ->   border-top-color:

### Box:
  1. box-sizing: border-box, content-box, initial, inherit
  1. box Drawings:
  1. box-shadow: 15px 15px 5px #6688FF; 
Margins: auto, inherit, [%,length]   ,   : 100px 50px 65px 80px; 
Padding: %,length ,    100px 50px 65px 80px; 

### Advanced Selectors :
1. Adjacent Sibling Selector     | h4+ul { if both are adj sib h4 will effected           <h4>Heading 4</h4> <ul> <li>Item 1</li> <li>Item 2</li> </ul> 
2. Attribute Selector            | input[type="checkbox"]{                               <input type="checkbox">
3. nth-of-type Selector          | div:nth-of-type(3){                                     <div>Div 1</div> <div>Div 2</div> <div>Div 3</div> <div>Div 4</div>   
4. Direct Child Selector         | div > p { all p's are selected which are inside the div              <div> <p>Paragraph 1</p> <p>Paragraph 2</p> </div>
5. General Sibling Selector      | div ~ p {  imediate after div p will eff  
6. Star Selector                 | * { all induvial 
7. Decendant Selector            | ul li a{   ul -> li -> a will only act|    inside div all the paragraph div p{ may be not direct
8. Class                         | .c1{         <div class="c1">
9. Id                            | #id1 {   <div id="id1">
10. Element selectors  h1{                       <h1>This is a heading</h1>
11. Multiple selecter  
12. #Box *{   selects all inside the box id           <div id="box"> <p>Paragraph 1</p> <p>Paragraph 2</p> </div>
13. p.blackbg {  selects all the p with class blackbg   <p class="blackbg">This is the paragraph with the class "blackbg".</p>
14. p#para1 {  selects all the p with id para1    <p id="para1">This is the paragraph with the id "blackclg".</p>
DEFF 4 & 7

### Lists: 
  1. ul{ list-style-type: circle , squar , none
        list-style-image : url("/../lkjdsf")
        list-style: square inside url(“pulogo.jpg");
  2. ol{ list-style-type: lower-alpha, bengali, 
        list-style-position: inside

### Position:
  1. position: 
  2. Static: - no change
  3. relative: space form my post to top left
  4. absolute - no space for me start form top left, 
  5. sticky: i will be in my place until you see me I will be all wase
  6. fixed: my place is fixed  


### Transparency:
  opacity
  img {opacity: 0.4;}
  Img:hover {opacity:1;}

### Gradients:
  1. Linear Gradients (goesdown/up/left/right/diagonally)  background: linear-gradient(direction, color-stop1, color-stop2, ...); : linear-gradient(to right, blue , green); to bottom right 45deg, yellow 15%  , 90deg
  2. Radial Gradients (defined by their center) 
     background: linear-gradient(#ff6eff, #7bff8f); radial-gradient(yellow 5%, red 15%, green 55%); radial-gradient(circle, green, yellow, blue);

Css3:
  Shadow:
    text-shadow : h-shadow,v,blure radius,color
    box-shadow
    
    
  1) translate():
  2) rotate():
  3) scale()
  4) skewX():
  5) skewY():
  6) matrix() 

  shape, size and position
  1) translate():
  2) rotate():
  3) scale()
  4) skewX()
  6) matrix() :
