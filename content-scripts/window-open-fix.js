function fixWindowOpen() {
    let nativeOpen = window.open
    window.open = (a, b) => nativeOpen(a, b)
}

let blob = new Blob([`(${fixWindowOpen})()`], { type: "text/javascript" })

let script = document.createElement('script')
script.src = URL.createObjectURL(blob)
document.body.appendChild(script)
