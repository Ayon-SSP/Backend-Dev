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

### Advanced Selectors [Link](https://techbrij.com/css-selector-adjacent-child-sibling):
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
  2. Static: no change
  3. relative: saves space and changes it's location.
  4. absolute: no taking space but relocating.
  5. sticky: I will be in my place until you see me I will be all wase. no relocation.
  6. fixed: my place is fixed | fixed to screan while schroling.  


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
  5) matrix():







### Cursor: [value]
> [Link](https://www.w3schools.com/cssref/tryit.php?filename=trycss_cursor)


## CSS Selectors [Link](https://techbrij.com/css-selector-adjacent-child-sibling)
all element: 
    * {}
Tags: 
    dialog {}, h1 {}
ID's: 
    #main-component {}, #profile-pic
Class: 
    .class1, .button
Multi properties selector: 
    h2#info.center.blue html: <h2 id="info" class="center blue"></h2>
Multi selector: 
    h1, h2, p {}
**Advanced Selectors in CSS:**
Direct child: 
    div#container > p
All child: 
    div#container p
select p which is after div:
    div + p
select all p's which is after div:
    div ~ p





## CSS Flexbox 
> Best quick notes: 
>   [css-tricks.com/flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
>   [better view](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
1. Flex container
2. Flex item

Main axis  ---> (left - right)
Cross axis   |   (top - bottom)

### display
```css
display: inline | block | inline-block

.container {
  display: flex | inline-flex; 
}
```
1. flex: takes all the available space
2. inline: inline display, no height and width. Examples of inline elements: <span>, <a>, <strong>.
3. block: can define the hight and width, block element will start on new line, elements takes whole space.
4. inline-block: does not start's on a new line, height and widht can be define. | takes only width that is needed.

#### flex-direction
```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

#### flex-wrap
```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

#### flex-flowz

### Applicable to flex .Content
#### justify-content
> Align items and distribute any extra space in the parent container.
> align the items along the main axis and if flex-direction is column align the items along the cross axis
```css
.container {
  flex-direction: column;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```
#### align-items
> Align items along the cross axis if the flex-direction is row align the items along the main axis if the flex-direction is column
```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
baseline: aligns the baseline of the flex items Text sits on the same line img: https://youtu.be/XIJZjhqs7m0?list=PLC3y8-rFHvwg6rjbiMadCILrjh7QkvzoQ&t=178
```
#### align-content
> The align-content property specifies how flex lines are distributed along the cross axis in a flexbox container. | works only with multiple lines
```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```


#### gap, row-gap, column-gap
```css
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```


