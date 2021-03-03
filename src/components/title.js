function showTitle(event, el, title) {
    // console.log(event,el, title,'event,el, title')
    const popover = getPopover()
    const popoverStyle = popover.style

    if (title) {
        //当前鼠标位置
        var x = event.clientX
        var y = event.clientY

        var offsetLeft1 = el.offsetLeft
        var offsetLeft2 = offsetLeft1 + el.offsetWidth

        var offsetTop1 = el.offsetTop
        var offsetTop2 = offsetTop1 + el.offsetHeight

        var textWidth = getTextWidth(title)

        if (document.documentElement.clientWidth - x < textWidth) {
            popoverStyle.left = 'unset'
            popoverStyle.right = 0 + 'px'
        } else {
            popoverStyle.left = x + 2 + 'px'
            popoverStyle.right = 'unset'
        }
        popoverStyle.top = y + 2 + 'px'
        popover.querySelector('.popover-content').textContent = title

        popoverStyle.display = 'block'
        popoverStyle.visibility = 'visible'
    } else {
        popoverStyle.visibility = 'hidden'
        popoverStyle.display = 'none'
    }
}

function getTextWidth(str) {
    var w = $('body').append($('<span stlye="display:none;" id="textWidth"/>')).find('#textWidth').html(str).width();
    $('#textWidth').remove();
    return w;
}

function getPopover() {
    let popover = document.querySelector('.popover-windown-title')

    if (!popover) {
        const tpl = `
          <div class="popover-windown-title" style="position:fixed;">
            <div class="popover-content"></div>
          </div>
        `
        const fragment = document.createRange().createContextualFragment(tpl)

        document.body.appendChild(fragment)
        popover = document.querySelector('.popover-windown-title')
    }

    return popover
}

var timer = null

export default {
    bind(el, binding) {
        // 使用 const 声明一个只读的常量，其值是需要监听的事件类型列表
        const events = ['mouseenter', 'mouseleave', 'mousewheel', 'click']
            // 声明一个处理器，以根据不同的事件类型传不同的参数
        const handler = (event) => {
            if (event.type === 'mouseenter') {
                if (timer) {
                    clearTimeout(timer)
                }
                // 显示一个提示框
                timer = setTimeout(() => {
                    var value = ''
                    if (binding.value.el) {
                        value = binding.value.el
                    } else if (binding.value) {
                        value = binding.value
                    }
                    showTitle(event, el, value)
                }, 700)
            } else {
                // 隐藏一个提示框
                clearTimeout(timer)
                showTitle()
            }
        }

        // 在 el 元素上添加事件监听
        events.forEach((event) => {
            el.addEventListener(event, handler, false)
        })

        // 在 el 元素上添加一个属性，以在其他钩子进行访问
        el.destroy = () => {
            // 移除 el 元素上的事件监听
            events.forEach((event) => {
                    el.removeEventListener(event, handler, false)
                })
                // 移除 el 元素上的 destroy
            el.destroy = null
        }
    },
    update(el, binding) {
        // 处理value一开始没有值，后面才有值的情况
        if (binding.value && (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue))) {
            // 移除之前的监听

            typeof el.destroy === 'function' && el.destroy()
                // el.destroy()
            if (el.destroy) {
                el.destroy()
            }

            // 使用 const 声明一个只读的常量，其值是需要监听的事件类型列表
            const events = ['mouseenter', 'mouseleave', 'mousewheel', 'click']
                // 声明一个处理器，以根据不同的事件类型传不同的参数
            const handler = (event) => {
                if (event.type === 'mouseenter') {
                    if (timer) {
                        clearTimeout(timer)
                    }
                    // 显示一个提示框
                    timer = setTimeout(() => {
                        var value = ''
                        if (binding.value.el) {
                            value = binding.value.el
                        } else if (binding.value) {
                            value = binding.value
                        }
                        showTitle(event, el, value)
                    }, 700)
                } else {
                    // 隐藏一个提示框
                    clearTimeout(timer)
                    showTitle()
                }
            }

            // 在 el 元素上添加事件监听
            events.forEach((event) => {
                el.addEventListener(event, handler, false)
            })
        }
    },

    unbind(el) {
        // 移除监听
        // 在特殊情况下节点既要响应click,也要移除节点。避免在响应click之前就被移除监听，
        // 所以要延时移除,放到下一个宏任务
        setTimeout(() => {
            if (el.destroy) {
                el.destroy()
            }
        }, 1000)
    }
}