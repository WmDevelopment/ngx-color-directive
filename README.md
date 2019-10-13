# ngx-color-directive

Ngx color is a directive that use the google material concept to create a single color palette.
see http://mcg.mbitson.com/#!?mcgpalette0=%233f51b5

Allows the dev to set an element background or text color just by adding a directive

# Usage

## Text

```html
<div>
  <h3 textColor="red[1]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[2]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[3]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[4]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[5]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[6]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[7]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[8]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[9]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="red[10]">This is a text colored by ngx-color-directive</h3>
</div>
<div>
  <h3 textColor="blue[1]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[2]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[3]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[4]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[5]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[6]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[7]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[8]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[9]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="blue[10]">This is a text colored by ngx-color-directive</h3>
</div>
<div>
  <h3 textColor="green[1]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[2]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[3]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[4]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[5]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[6]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[7]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[8]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[9]">This is a text colored by ngx-color-directive</h3>
  <h3 textColor="green[10]">This is a text colored by ngx-color-directive</h3>
</div>
```

### Result:

![Text](./projects/demo-app/src/assets/images/text.png)

## Background

```html
<div>
  <div class="div" bgColor="yellow[1]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[2]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[3]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[4]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[5]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[6]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[7]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[8]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[9]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="yellow[10]">
    This is a div colored by ngx-color-directive
  </div>
</div>
<div>
  <div class="div" bgColor="pink[1]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[2]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[3]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[4]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[5]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[6]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[7]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[8]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[9]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="pink[10]">
    This is a div colored by ngx-color-directive
  </div>
</div>
<div>
  <div class="div" bgColor="gray[1]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[2]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[3]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[4]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[5]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[6]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[7]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[8]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[9]">
    This is a div colored by ngx-color-directive
  </div>
  <div class="div" bgColor="gray[10]">
    This is a div colored by ngx-color-directive
  </div>
</div>
```

### Result:

![Background](./projects/demo-app/src/assets/images/bgc.png)

### the 5 number is the default color, without any saturation, or lightning changes

## Supported colors:

- White
- Red
- Orange
- Yellow
- Green
- Blue
- Purple
- Black
- Alice Blue
- Antique White
- Aqua
- Aquamarine
- Azure
- Beige
- Bisque
- Blanched Almond
- Blue Violet
- Brown
- Burly Wood
- Cadet Blue
- Chartreuse
- Chocolate
- Coral
- Corn Flower Blue
- Corn Silk
- Crimson
- Cyan
- Dark Blue
- Dark Cyan
- Dark Goldenrod
- Dark Gray
- Dark Green
- Dark Khaki
- Dark Magenta
- Dark Olive Green
- Dark Orange
- Dark Orchid
- Dark Red
- Dark Salmon
- Dark Sea Green
- Dark Slate Blue
- Dark Slate Gray
- Dark Turquoise
- Dark Violet
- Deep Pink
- Deep Sky Blue
- Dim Gray
- Dodger Blue
- Fire Brick
- Floral White
- Forest Green
- Fuschia
- Gainsboro
- Ghost White
- Gold
- Goldenrod
- Gray
- Green Yellow
- Honeydew
- Hot Pink
- Indian Red
- Indigo
- Ivory
- Khaki
- Lavender
- Lavender Blush
- Lemon Chiffon
- Light Blue
- Light Coral
- Light Cyan
- Light Goldenrod Yellow
- Light Green
- Light Grey
- Light Pink
- Light Salmon
- Light Sea Green
- Light Sky Blue
- Light Slate Gray
- Light Steel Blue
- Light Yellow
- Lime
- Lime Green
- Linen
- Magenta
- Maroon
- Medium Aquamarine
- Medium Blue
- Medium Orchid
- Medium Purple
- Medium Sea Green
- Medium Slate Blue
- Medium Spring Green
- Medium Turquoise
- Medium Violet Red
- Midnight Blue
- Mint Cream
- Misty Rose
- Navajo White
- Navy
- Old Lace
- Olive
- Olive Drab
- Orange Red
- Orchid
- Pale Goldenrod
- Pale Green
- Pale Turquoise
- Pale Violet Red
- Papaya Whip
- Peach Puff
- Peru
- Pink
- Plum
- Powder Blue
- Rosy Brown
- Royal Blue
- Saddle Brown
- Sea Green
- Sea Shell
- Sienna
- Silver
- Sky Blue
- Slate Blue
- Slate Gray
- Snow
- Spring Green
- Steel Blue
- Tan
- Teal
- Thistle
- Tomato
- Turquoise
- Violet
- Wheat
- White Smoke
- Yellow Green
