document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.collapsible');
   var instances = M.Collapsible.init(elems, {});
   var elems1 = document.querySelectorAll('select');
   var instances1 = M.FormSelect.init(elems1, {});
});


let rangeWidth = document.getElementById('rangeWidth')
let flexible = document.getElementsByClassName('flexible')
let cssCode = document.getElementById('cssCode')
let btnCopy = document.getElementById('btnCopy')
let rangeHeight = document.getElementById('rangeHeight')



btnCopy.addEventListener("click", () => {
   navigator.clipboard.writeText(cssCode.innerText)
})

rangeWidth.addEventListener('input', () => {
   for (elements of flexible) {
      elements.style.width = `${rangeWidth.value}px`
   }
   changeWidthCopyText()
})
rangeHeight.addEventListener('input', () => {
   for (elements of flexible) {
      elements.style.height = `${rangeHeight.value}px`
   }
   changeWidthCopyText()
})
changeWidthCopyText = () => {
   cssCode.innerHTML = `<span  style='color:cyan'>width</span><span style='color:white;'>:</span><span style='color: greenyellow;'>${rangeWidth.value}px</span><span style='color:white;'>;</span><br><span  style='color:cyan'>height</span><span style='color:white;'>:</span><span style='color: greenyellow;'>${rangeHeight.value}px</span><span style='color:white;'>;</span>`
}


// border

let btop = document.getElementById('btop')
let bright = document.getElementById('bright')
let bbottom = document.getElementById('bbottom')
let bleft = document.getElementById('bleft')
let rangeBorderWidth = document.getElementById('rangeBorderWidth')
let rangeR = document.getElementById('rangeR')
let rangeG = document.getElementById('rangeG')
let rangeB = document.getElementById('rangeB')
let rangeRadius = document.getElementById('rangeRadius')
let borderStyleSelect = document.getElementById('borderStyleSelect')


borderStyleSelect.onchange = () => {
   for (elements of flexible) {
      elements.style.borderStyle = borderStyleSelect.options[borderStyleSelect.selectedIndex].value
   }
   codeCopyText()
}


let borderTopValue = 0
let borderRightValue = 0
let borderBottomValue = 0
let borderLeftValue = 0



btop.oninput = (e) => {
   if (!e.target.checked) {
      for (elements of flexible) {
         elements.style.borderTopWidth = '0px'
      }
      borderTopValue = 0
      codeCopyText()
   }
   else {
      for (elements of flexible) {
         elements.style.borderTopWidth = `${rangeBorderWidth.value}px`
      }
      borderTopValue = rangeBorderWidth.value
      codeCopyText()
   }
}
bbottom.oninput = (e) => {
   if (!e.target.checked) {
      for (elements of flexible) {
         elements.style.borderBottomWidth = '0px'
      }
      borderBottomValue = 0
      codeCopyText()
   } else {
      for (elements of flexible) {
         elements.style.borderBottomWidth = `${rangeBorderWidth.value}px`
      }
      borderBottomValue = rangeBorderWidth.value
      codeCopyText()
   }
}
bleft.oninput = (e) => {
   if (!e.target.checked) {
      for (elements of flexible) {
         elements.style.borderLeftWidth = '0px'
      }
      borderLeftValue = 0
      codeCopyText()
   } else {
      for (elements of flexible) {
         elements.style.borderLeftWidth = `${rangeBorderWidth.value}px`
      }
      borderLeftValue = rangeBorderWidth.value
      codeCopyText()
   }
}
bright.oninput = (e) => {
   if (!e.target.checked) {
      for (elements of flexible) {
         elements.style.borderRightWidth = '0px'
      }
      borderRightValue = 0
      codeCopyText()
   } else {
      for (elements of flexible) {
         elements.style.borderRightWidth = `${rangeBorderWidth.value}px`
      }
      borderRightValue = rangeBorderWidth.value
      codeCopyText()
   }
}

let codeCopyText = () => {
   cssCode.innerHTML = `<span  style='color:cyan'>border-style</span><span style='color:white;'>: </span><span style='color: greenyellow;'>${borderStyleSelect.value}</span><span style='color:white;'>;</span><br><span  style='color:cyan'>border-top-width</span> <span style='color:white;'>: </span> <span style='color: greenyellow;'>${borderTopValue}px</span><span style='color:white;'>;</span><br><span  style='color:cyan'>border-right-width</span> <span style='color:white;'>: </span> <span style='color: greenyellow;'>${borderRightValue}px</span><span style='color:white;'>;</span><br><span  style='color:cyan'>border-bottom-width</span> <span style='color:white;'>: </span> <span style='color: greenyellow;'>${borderBottomValue}px</span><span style='color:white;'>;</span><br> <span  style='color:cyan'>border-left-width</span><span style='color:white;'>: </span> <span style='color: greenyellow;'>${borderLeftValue}px</span><span style='color:white;'>;</span><br><span  style='color:cyan'>border-color</span> <span style='color:white;'>: </span> <span style='color: greenyellow;'>rgb(${rangeR.value},${rangeG.value},${rangeB.value})</span><span style='color:white;'>;</span><br>`

}

rangeBorderWidth.addEventListener('input', () => {

   borderTopValue = rangeBorderWidth.value
   borderRightValue = rangeBorderWidth.value
   borderBottomValue = rangeBorderWidth.value
   borderLeftValue = rangeBorderWidth.value
   codeCopyText()

   if (rangeRadius.value > 0) {
      cssCode.innerHTML += `border-radius: ${rangeRadius.value}%`
   }
   for (elements of flexible) {
      elements.style.borderStyle = borderStyleSelect.value
   }
   for (elements of flexible) {
      elements.style.borderColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`
   }
   for (elements of flexible) {
      elements.style.borderWidth = `${rangeBorderWidth.value}px`
   }
})




rangeR.addEventListener('input', () => {
   for (elements of flexible) {
      elements.style.borderColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`
   }
   codeCopyText()
   if (rangeRadius.value > 0) {
      cssCode.innerHTML += `border-radius: ${rangeRadius.value}%`
   }
})
rangeG.addEventListener('input', () => {
   for (elements of flexible) {
      elements.style.borderColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`
   }
   codeCopyText()
   if (rangeRadius.value > 0) {
      cssCode.innerHTML += `border-radius: ${rangeRadius.value}%`
   }
})
rangeB.addEventListener('input', () => {
   for (elements of flexible) {
      elements.style.borderColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`
   }
   codeCopyText()
   if (rangeRadius.value > 0) {
      cssCode.innerHTML += `border-radius: ${rangeRadius.value}%`
   }
})



rangeRadius.addEventListener('input', () => {
   for (elements of flexible) {
      elements.style.borderRadius = `${rangeRadius.value}%`
   }
   codeCopyText()
   cssCode.innerHTML += `<span  style='color:cyan'>border-radius</span><span style='color:white;'>: </span><span style='color: greenyellow;'>${rangeRadius.value}%</span><span style='color:white;'>;</span>`
})



// Text

let textInput = document.getElementById('textarea1')
let fontSizeRange = document.getElementById('fontSizeRange')
let fontWeightRange = document.getElementById('fontWeightRange')
let fontStyleSelect = document.getElementById('fontStyleSelect')
let rangeFontR = document.getElementById('rangeFontR')
let rangeFontG = document.getElementById('rangeFontG')
let rangeFontB = document.getElementById('rangeFontB')


let editingText = document.createElement('p')
textInput.oninput = () => {
   for (elements of flexible) {
      elements.appendChild(editingText)
      elements.classList.add('flex')
   }
   editingText.innerText = textInput.value
   editingText.style.color = `rgb(${rangeFontR.value},${rangeFontG.value},${rangeFontB.value})`
   codeCopyTextText()
}
let fontSizeInslall = () => {
   editingText.style.fontSize = `${fontSizeRange.value}px`
}
let weightInstall = () => {
   editingText.style.fontWeight = fontWeightRange.value
}
fontSizeRange.addEventListener('input', () => {
   fontSizeInslall()
   codeCopyTextText()
})
fontWeightRange.addEventListener('input', () => {
   weightInstall()
   codeCopyTextText()
})
fontStyleSelect.addEventListener('change', () => {
   editingText.style.fontFamily = fontStyleSelect.options[fontStyleSelect.selectedIndex].value
   codeCopyTextText()
})


let codeCopyTextText = () => {
   cssCode.innerHTML = `<span style='color:cyan'>font-family</span><span style='color:white;'>: </span> <span style='color: greenyellow;'>${fontStyleSelect.value}</span><span style='color:white;'>;</span> <br><span style='color:cyan'>font-weight</span><span style='color:white;'>: </span><span style='color: greenyellow;'>${fontWeightRange.value}</span><span style='color:white;'>;</span> <br><span style='color:cyan'>font-size</span><span style='color:white;'>: </span> <span style='color: greenyellow;'>${fontSizeRange.value}px</span><span style='color:white;'>;</span><br><span style='color:cyan'>color</span><span style='color:white;'>: </span> <span style='color: greenyellow;'>rgb(${rangeFontR.value},${rangeFontG.value},${rangeFontB.value})</span><span style='color:white;'>;</span>`
}





rangeFontR.addEventListener('input', () => {
   editingText.style.color = `rgb(${rangeFontR.value},${rangeFontG.value},${rangeFontB.value})`
   codeCopyTextText()
})
rangeFontG.addEventListener('input', () => {
   editingText.style.color = `rgb(${rangeFontR.value},${rangeFontG.value},${rangeFontB.value})`
   codeCopyTextText()
})
rangeFontB.addEventListener('input', () => {
   editingText.style.color = `rgb(${rangeFontR.value},${rangeFontG.value},${rangeFontB.value})`
   codeCopyTextText()
})

// Background color

let rangeBgR = document.getElementById('rangeBgR')
let rangeBgG = document.getElementById('rangeBgG')
let rangeBgB = document.getElementById('rangeBgB')
let gradientCheck = document.getElementById('gradientCheck')



let rangeGradientBgR = document.getElementById('rangeGradientBgR')
let rangeGradientBgG = document.getElementById('rangeGradientBgG')
let rangeGradientBgB = document.getElementById('rangeGradientBgB')
let colorExample = document.getElementById('colorExample')
let btnAdd = document.getElementById('btnAdd')
let colorReset = document.getElementById('colorReset')




let backgroundColorSet = () => {
   for (elements of flexible) {
      elements.style.backgroundColor = `rgb(${rangeBgR.value},${rangeBgG.value},${rangeBgB.value})`
   }
}
let codeCopyBacground = () => {
   cssCode.innerHTML = `<span  style='color:cyan'>background-color</span><span style='color:white;'>:</span> <span style='color: greenyellow;'>rgb(${rangeBgR.value},${rangeBgG.value},${rangeBgB.value})</span><span style='color:white;'>;</span>`
}

rangeBgR.addEventListener('input', () => {
   backgroundColorSet()
   codeCopyBacground()
})
rangeBgG.addEventListener('input', () => {
   backgroundColorSet()
   codeCopyBacground()
})
rangeBgB.addEventListener('input', () => {
   backgroundColorSet()
   codeCopyBacground()
})

let gradient = document.getElementById('gradient')
let nonGradient = document.getElementById('nonGradient')

gradientCheck.onchange = () => {
   if (gradientCheck.checked) {
      nonGradient.style.display = 'none'
      gradient.style.display = 'block'

      let topToBottom = document.getElementById('topToBottom')
      let leftToRight = document.getElementById('leftToRight')
      let leftLeftToBottomRight = document.getElementById('leftLeftToBottomRight')
      let repeatingGradient = document.getElementById('repeatingGradient')

      let backgroundExampleColorSet = () => {
         colorExample.style.backgroundColor = `rgb(${rangeGradientBgR.value},${rangeGradientBgG.value},${rangeGradientBgB.value})`
      }

      rangeGradientBgR.addEventListener('input', () => {
         backgroundExampleColorSet()
      })
      rangeGradientBgG.addEventListener('input', () => {
         backgroundExampleColorSet()
      })
      rangeGradientBgB.addEventListener('input', () => {
         backgroundExampleColorSet()
      })

      let counter = 0

      let colors = []
      btnAdd.addEventListener('click', () => {
         colors.push(`rgb(${rangeGradientBgR.value},${rangeGradientBgG.value},${rangeGradientBgB.value})`)
         let start
         if (leftToRight.checked)
            start = `linear-gradient(to right, ${colors}`
         else if (leftLeftToBottomRight.checked) {
            start = `linear-gradient(to bottom right, ${colors}`
         }
         else if (topToBottom.checked)
            start = `linear-gradient(${colors}`
         else if (repeatingGradient.checked)
            start = `radial-gradient(${colors}`

         let end
         if (counter == 0) {
            end = `, white)`
         }
         else {
            end = `)`
         }
         console.log(start + end)
         for (elements of flexible) {
            elements.style.backgroundImage = `${start}${end}`
         }

         cssCode.innerHTML = `<span style='color:cyan'>background-image</span><span style='color:white;'>: </span><span style='color: greenyellow;'>${start}${end}</span><span style='color:white;'>;</span>`
         counter++
      })

      colorReset.addEventListener('click', () => {
         rangeGradientBgR.value = 255
         rangeGradientBgG.value = 255
         rangeGradientBgB.value = 255
         for (elements of flexible) {
            elements.style.backgroundImage = 'none'
         }
         colors = []
         colorExample.style.backgroundColor = `white`
         cssCode.innerHTML = ``
         counter = 0
      })
   }
   else {
      nonGradient.style.display = 'block'
      gradient.style.display = 'none'
      for (elements of flexible) {
         elements.style.backgroundImage = 'none'
      }
   }
}


// flex


let flexibleBlockArea = document.getElementById('flexibleBlockArea')
let btnAddBlock = document.getElementById('btnAddBlock')
let btnRemoveBlock = document.getElementById('btnRemoveBlock')



btnAddBlock.addEventListener('click', () => {
   flexible[0].innerHTML = `<p>1</p>`
   let id = document.createElement('p')
   let idCounter = 0
   
   let flexible1 = document.createElement('div')
   flexible1.classList.add('flexible')
   flexibleBlockArea.appendChild(flexible1)
   let styles = window.getComputedStyle(flexible[0])
   let cssText = styles.cssText

   if (!cssText) {
      cssText = Array.from(styles).reduce((str, property) => {
         return `${str}${property}:${styles.getPropertyValue(property)};`;
      }, '');
      codeCopyForFlex()
   }

   flexible1.style.cssText = cssText
   let newEditingText = document.createElement('p')
   flexible1.appendChild(newEditingText)

   for (elements of flexible) {
      elements.appendChild(id)
      id.innerText = ++idCounter
   }
})
btnRemoveBlock.addEventListener('click', () => {
   if(flexible.length > 1)
   flexibleBlockArea.removeChild(flexibleBlockArea.lastChild)
})

let flexDirection = document.getElementById('flexDirection')
let flexWrap = document.getElementById('flexWrap')
let justifyContent = document.getElementById('justifyContent')
let alignItems = document.getElementById('alignItems')




let codeCopyForFlex = () => {
   cssCode.innerHTML = `<span style='color:rgb(34, 165, 34)'>/* for parent element*/</span> <br> <span style='color:cyan'>display<span style='color:white;'>:</span> <span style='color: greenyellow;'> flex<span style='color:white;'>;</span></span></span> <br> <span style='color:cyan'>flex-direction<span style='color:white;'>:</span> <span style='color: greenyellow;'> ${flexDirection.value}<span style='color:white;'>;</span></span></span> <br> <span style='color:cyan'>flex-wrap<span style='color:white;'>:</span> <span style='color: greenyellow;'> ${flexWrap.value}<span style='color:white;'>;</span></span></span> <br> <span style='color:cyan'>justify-content<span style='color:white;'>:</span> <span style='color: greenyellow;'> ${justifyContent.value}<span style='color:white;'>;</span></span></span><br> <span style='color:cyan'>align-items<span style='color:white;'>:</span> <span style='color: greenyellow;'> ${alignItems.value}<span style='color:white;'>;</span></span></span>`
}

flexDirection.addEventListener('change', () => {
   flexibleBlockArea.style.flexDirection = flexDirection.value
   codeCopyForFlex()
})
flexWrap.addEventListener('change', () => {
   flexibleBlockArea.style.flexWrap = flexWrap.value
   codeCopyForFlex()
})
justifyContent.addEventListener('change', () => {
   flexibleBlockArea.style.justifyContent = justifyContent.value
   codeCopyForFlex()
})
alignItems.addEventListener('change', () => {
   flexibleBlockArea.style.alignItems = alignItems.value
   codeCopyForFlex()
})

